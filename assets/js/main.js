/*
 * apptrainers: landing page behaviour.
 * Language switching, course filters, the hero lab terminal, and the registration form.
 * Content comes from content.js (window.AT_CONTENT).
 */
(() => {
  "use strict";

  const C = window.AT_CONTENT;
  if (!C) return;

  const root = document.documentElement;
  const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  const reduceMotion = () => motionQuery.matches;

  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

  const store = {
    get(key, session) {
      try { return (session ? sessionStorage : localStorage).getItem(key); } catch (e) { return null; }
    },
    set(key, value, session) {
      try { (session ? sessionStorage : localStorage).setItem(key, value); } catch (e) { /* storage blocked */ }
    }
  };

  const state = { lang: "ar", filter: "all" };

  /* ---------- i18n ---------- */

  const lookup = (obj, path) => path.split(".").reduce((o, k) => (o == null ? undefined : o[k]), obj);

  function t(key, vars) {
    let s = lookup(C.i18n[state.lang], key);
    if (s == null) s = lookup(C.i18n.ar, key);
    if (s == null) return key;
    if (!vars) return s;
    return String(s).replace(/\{(\w+)\}/g, (m, k) => (vars[k] != null ? vars[k] : m));
  }

  const pick = (obj) => (obj ? obj[state.lang] || obj.ar : "");

  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  function initialLang() {
    const fromUrl = new URLSearchParams(location.search).get("lang");
    if (fromUrl === "ar" || fromUrl === "en") return fromUrl;
    const saved = store.get("at-lang");
    return saved === "en" ? "en" : "ar";
  }

  function applyLang(lang, persist) {
    state.lang = lang;
    root.lang = lang;
    root.dir = lang === "ar" ? "rtl" : "ltr";

    document.title = t("meta.title");
    const desc = $('meta[name="description"]');
    if (desc) desc.setAttribute("content", t("meta.description"));

    $$("[data-i18n]").forEach((el) => { el.textContent = t(el.dataset.i18n); });
    $$("[data-i18n-html]").forEach((el) => { el.innerHTML = t(el.dataset.i18nHtml); });
    $$("[data-i18n-attr]").forEach((el) => {
      el.dataset.i18nAttr.split(";").forEach((pair) => {
        const at = pair.indexOf(":");
        if (at > 0) el.setAttribute(pair.slice(0, at).trim(), t(pair.slice(at + 1).trim()));
      });
    });

    $$("[data-lang-toggle]").forEach((btn) => {
      btn.setAttribute("aria-label", t("lang.switchTo"));
      const label = $("[data-lang-label]", btn);
      label.textContent = t("lang.label");
      label.setAttribute("lang", t("lang.code"));
    });

    syncMenuLabel();
    renderTabs();
    renderCourses(false);
    renderCourseOptions();
    refreshFormMessages();
    markProposals(document);

    if (persist) {
      store.set("at-lang", lang);
      const url = new URL(location.href);
      url.searchParams.set("lang", lang);
      history.replaceState(null, "", url);
    }
  }

  $$("[data-lang-toggle]").forEach((btn) => {
    btn.addEventListener("click", () => applyLang(state.lang === "ar" ? "en" : "ar", true));
  });

  /* Draft mode: every proposal value carries a dotted underline plus a tooltip. */
  function markProposals(scope) {
    if (!root.hasAttribute("data-draft")) return;
    const label = t("draft.mark");
    $$("[data-proposal]", scope).forEach((el) => el.setAttribute("title", label));
  }

  /* ---------- Header + mobile menu ---------- */

  const header = $("[data-header]");
  const menuToggle = $("[data-menu-toggle]");

  function setMenu(open) {
    header.classList.toggle("is-open", open);
    menuToggle.setAttribute("aria-expanded", String(open));
    syncMenuLabel();
  }

  function syncMenuLabel() {
    const label = $("[data-menu-label]");
    if (label) label.textContent = header.classList.contains("is-open") ? t("nav.close") : t("nav.menu");
  }

  menuToggle.addEventListener("click", () => setMenu(!header.classList.contains("is-open")));
  $$("[data-menu] a").forEach((a) => a.addEventListener("click", () => setMenu(false)));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && header.classList.contains("is-open")) {
      setMenu(false);
      menuToggle.focus();
    }
  });
  window.matchMedia("(min-width: 981px)").addEventListener("change", (e) => { if (e.matches) setMenu(false); });

  let ticking = false;
  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
      ticking = false;
    });
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  function goTo(selector, focusSelector) {
    const target = $(selector);
    if (!target) return;
    target.scrollIntoView({ behavior: reduceMotion() ? "auto" : "smooth", block: "start" });
    if (focusSelector) {
      const el = $(focusSelector);
      if (el) window.setTimeout(() => el.focus({ preventScroll: true }), reduceMotion() ? 0 : 650);
    }
  }

  /* ---------- Courses ---------- */

  const tabsEl = $("[data-tabs]");
  const grid = $("[data-course-grid]");

  function counts() {
    const out = { all: C.courses.length };
    C.audiences.order.forEach((a) => { out[a] = C.courses.filter((c) => c.audience === a).length; });
    return out;
  }

  function renderTabs() {
    if (!tabsEl) return;
    const n = counts();
    const keys = ["all"].concat(C.audiences.order);
    tabsEl.innerHTML = keys.map((k) => {
      const label = k === "all" ? t("courses.all") : pick(C.audiences.labels[k]);
      const selected = state.filter === k;
      return `<button class="tab" type="button" role="tab" id="tab-${k}" aria-controls="course-panel" aria-selected="${selected}" tabindex="${selected ? 0 : -1}" data-filter="${k}">${esc(label)} <span class="tab__count">${n[k]}</span></button>`;
    }).join("");
    grid.setAttribute("aria-labelledby", `tab-${state.filter}`);
  }

  const TRACK_MARKS = { juniors: "t-juniors", foundations: "t-foundations", red: "t-red", blue: "t-blue", cloud: "t-cloud", cert: "i-award" };

  function courseCard(c, i) {
    const english = state.lang === "ar" ? `<p class="course__en" lang="en" dir="ltr">${esc(c.title.en)}</p>` : "";
    const cert = c.cert ? `<div><dt>${esc(t("courses.prepares"))}</dt><dd dir="ltr" data-proposal>${esc(c.cert)}</dd></div>` : "";
    return `<article class="course" data-track="${c.track}" style="--i:${i}">
      <svg class="course__art" aria-hidden="true"><use href="#${TRACK_MARKS[c.track] || "t-foundations"}"/></svg>
      <div class="course__body">
        <h3 class="course__title">${esc(pick(c.title))}</h3>
        ${english}
        <p class="course__tag"><span class="course__track">${esc(pick(C.tracks[c.track]))}</span><span class="course__code" dir="ltr">${esc(c.id)}</span></p>
        <p class="course__desc">${esc(pick(c.desc))}</p>
        <ul class="course__skills">${c.skills.map((s) => `<li dir="ltr">${esc(s)}</li>`).join("")}</ul>
      </div>
      <dl class="course__meta">
        <div><dt>${esc(t("courses.levelLabel"))}</dt><dd>${c.level} · ${esc(pick(C.levels[c.level]))}</dd></div>
        <div><dt>${esc(t("courses.hours"))}</dt><dd data-proposal>${c.hours}</dd></div>
        <div><dt>${esc(t("courses.labs"))}</dt><dd data-proposal>${c.labs}</dd></div>
        ${cert}
      </dl>
      <button class="course__cta" type="button" data-course="${c.id}">
        <span>${esc(t("courses.cta"))}</span><svg class="i i--dir" aria-hidden="true"><use href="#i-arrow"/></svg>
      </button>
    </article>`;
  }

  function renderCourses(animate) {
    if (!grid) return;
    const list = C.courses.filter((c) => state.filter === "all" || c.audience === state.filter);
    grid.innerHTML = list.length
      ? list.map(courseCard).join("")
      : `<p class="course-empty">${esc(t("courses.empty"))}</p>`;
    markProposals(grid);
    grid.classList.remove("is-entering");
    if (animate && !reduceMotion()) {
      void grid.offsetWidth; // restart the entrance
      grid.classList.add("is-entering");
    }
  }

  function setFilter(filter, focusTab) {
    if (state.filter === filter) return;
    state.filter = filter;
    renderTabs();
    renderCourses(true);
    if (focusTab) $(`#tab-${filter}`).focus();
  }

  if (tabsEl) {
    tabsEl.addEventListener("click", (e) => {
      const tab = e.target.closest("[data-filter]");
      if (tab) setFilter(tab.dataset.filter, true);
    });

    tabsEl.addEventListener("keydown", (e) => {
      const keys = ["all"].concat(C.audiences.order);
      const i = keys.indexOf(state.filter);
      const rtl = root.dir === "rtl";
      let next = null;
      if (e.key === "ArrowRight") next = rtl ? i - 1 : i + 1;
      else if (e.key === "ArrowLeft") next = rtl ? i + 1 : i - 1;
      else if (e.key === "Home") next = 0;
      else if (e.key === "End") next = keys.length - 1;
      if (next === null) return;
      e.preventDefault();
      setFilter(keys[(next + keys.length) % keys.length], true);
    });
  }

  if (grid) {
    grid.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-course]");
      if (btn) chooseCourse(btn.dataset.course);
    });
  }

  $$("[data-door]").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const audience = link.dataset.door;
      setFilter(audience, false);
      setAudience(audience);
      goTo("#courses");
    });
  });

  /* ---------- Hero lab terminal ---------- */

  function runTerminal() {
    const pre = $("[data-terminal]");
    const toast = $("[data-flag-toast]");
    if (!pre || reduceMotion()) return;

    const code = $("code", pre);
    const lines = code.innerHTML.split("\n");
    const steps = lines.map((html) => {
      const m = html.match(/^(.*<span class="t-cmd">)(.*?)(<\/span>.*)$/);
      if (m) return { kind: "cmd", before: m[1], text: m[2], after: m[3] };
      if (html.includes("t-flag")) return { kind: "flag", html };
      if (html.includes("t-caret")) return { kind: "end", html };
      return { kind: html.trim() === "" ? "blank" : "out", html };
    });

    pre.style.minHeight = `${pre.offsetHeight}px`;
    code.innerHTML = "";
    toast.classList.add("is-pending");

    const caret = '<span class="t-caret"></span>';
    const shown = [];
    const paint = (extra) => { code.innerHTML = shown.concat(extra == null ? [] : [extra]).join("\n"); };
    const wait = (ms) => new Promise((r) => window.setTimeout(r, ms));

    const play = async () => {
      await wait(700);
      let lastWasCmd = false;
      for (const step of steps) {
        if (step.kind === "cmd") {
          paint(step.before + step.after + caret);
          await wait(420);
          for (let n = 1; n <= step.text.length; n++) {
            paint(step.before + step.text.slice(0, n) + step.after.replace(/^<\/span>/, "</span>" + caret));
            await wait(28 + Math.random() * 46);
          }
          await wait(320);
          shown.push(step.before + step.text + step.after);
          paint();
          lastWasCmd = true;
          continue;
        }
        await wait(lastWasCmd ? 380 : step.kind === "blank" ? 160 : 90);
        lastWasCmd = false;
        shown.push(step.html);
        paint();
        if (step.kind === "flag") {
          await wait(260);
          toast.classList.remove("is-pending");
          await wait(500);
        }
      }
    };

    play();
  }

  const lab = $(".hero__lab");
  if (lab && "IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => {
      if (entries.some((en) => en.isIntersecting)) {
        io.disconnect();
        runTerminal();
      }
    }, { threshold: 0.35 });
    io.observe(lab);
  }

  /* ---------- Registration form ---------- */

  const form = $("[data-form]");
  const courseSelect = $("[data-course-select]");
  const guardianField = $("[data-guardian]");
  const success = $("[data-form-success]");
  const summary = $("[data-form-summary]");
  const submitError = $("[data-form-error]");
  const submitBtn = $("[data-submit]");
  const errors = {};
  let submitted = false;
  let submitFailed = false;
  let lastPayload = null;

  const field = (name) => form.elements.namedItem(name);
  const audienceValue = () => {
    const checked = form.querySelector('input[name="audience"]:checked');
    return checked ? checked.value : "";
  };

  function renderCourseOptions() {
    if (!courseSelect) return;
    const current = courseSelect.value;
    let html = `<option value="">${esc(t("form.courseHelp"))}</option>`;
    [1, 2, 3, 4, 5].forEach((lv) => {
      const group = C.courses.filter((c) => c.level === lv);
      if (!group.length) return;
      const label = `${t("courses.level", { n: lv })} · ${pick(C.levels[lv])}`;
      html += `<optgroup label="${esc(label)}">${group.map((c) => `<option value="${c.id}">${esc(pick(c.title))}</option>`).join("")}</optgroup>`;
    });
    courseSelect.innerHTML = html;
    courseSelect.value = current;
  }

  function setAudience(value) {
    const radio = form.querySelector(`input[name="audience"][value="${value}"]`);
    if (radio) radio.checked = true;
    syncGuardian();
    if (errors.audience) validate("audience");
  }

  function chooseCourse(id) {
    const course = C.courses.find((c) => c.id === id);
    if (!course) return;
    courseSelect.value = id;
    setAudience(course.audience);
    goTo("#register", "#f-name");
  }

  function syncGuardian() {
    const teen = audienceValue() === "teens";
    guardianField.hidden = !teen;
    field("guardian").required = teen;
    if (!teen && errors.guardian) showError("guardian", false);
  }

  const toLatinDigits = (s) => String(s || "")
    .replace(/[٠-٩]/g, (d) => "٠١٢٣٤٥٦٧٨٩".indexOf(d))
    .replace(/[۰-۹]/g, (d) => "۰۱۲۳۴۵۶۷۸۹".indexOf(d));

  const phoneOk = (value) => {
    const v = toLatinDigits(value).trim();
    const digits = v.replace(/\D/g, "");
    return /^[+\d\s()\-.]+$/.test(v) && digits.length >= 8 && digits.length <= 15;
  };

  const emailOk = (value) => !value.trim() || /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.trim());

  const rules = {
    name: () => field("name").value.trim().length >= 2,
    phone: () => phoneOk(field("phone").value),
    email: () => emailOk(field("email").value),
    audience: () => audienceValue() !== "",
    guardian: () => audienceValue() !== "teens" || phoneOk(field("guardian").value),
    consent: () => field("consent").checked
  };

  function showError(name, on) {
    errors[name] = on;
    const box = form.querySelector(`[data-error-for="${name}"]`);
    if (box) {
      box.hidden = !on;
      box.textContent = on ? t(`form.errors.${name}`) : "";
    }
    const inputs = name === "audience" ? $$('input[name="audience"]', form) : [field(name)];
    inputs.forEach((input) => input && input.setAttribute("aria-invalid", on ? "true" : "false"));
    if (name === "audience") $(".choices--2", form).classList.toggle("is-invalid", on);
  }

  function validate(name) {
    const ok = rules[name]();
    showError(name, !ok);
    return ok;
  }

  function refreshFormMessages() {
    if (!form) return;
    Object.keys(errors).forEach((name) => { if (errors[name]) showError(name, true); });
    if (!summary.hidden) summary.textContent = t("form.errors.summary");
    if (submitFailed) submitError.textContent = t("form.errors.network");
    $("[data-submit-label]").textContent = submitBtn.classList.contains("is-loading") ? t("form.sending") : t("form.submit");
    if (lastPayload) $("[data-success-text]").textContent = t("form.success.text", { name: firstName(lastPayload.name) });
  }

  const firstName = (full) => String(full).trim().split(/\s+/)[0] || full;

  if (form) {
    ["name", "phone", "email", "guardian"].forEach((name) => {
      const input = field(name);
      input.addEventListener("blur", () => {
        if (submitted || input.value.trim() !== "") validate(name);
      });
      input.addEventListener("input", () => { if (errors[name]) validate(name); });
    });

    $$('input[name="audience"]', form).forEach((radio) => {
      radio.addEventListener("change", () => {
        syncGuardian();
        if (errors.audience || submitted) validate("audience");
      });
    });

    field("consent").addEventListener("change", () => { if (errors.consent || submitted) validate("consent"); });

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      submitted = true;
      submitFailed = false;
      submitError.hidden = true;

      const invalid = Object.keys(rules).filter((name) => !validate(name));
      if (invalid.length) {
        summary.hidden = false;
        summary.textContent = t("form.errors.summary");
        const first = invalid[0] === "audience" ? form.querySelector('input[name="audience"]') : field(invalid[0]);
        first.focus();
        return;
      }
      summary.hidden = true;

      const payload = {
        name: field("name").value.trim(),
        phone: toLatinDigits(field("phone").value).trim(),
        email: field("email").value.trim(),
        audience: audienceValue(),
        guardian_phone: audienceValue() === "teens" ? toLatinDigits(field("guardian").value).trim() : "",
        course: courseSelect.value,
        format: (form.querySelector('input[name="format"]:checked') || {}).value || "any",
        notes: field("notes").value.trim(),
        lang: state.lang,
        source: "landing-cyber"
      };

      setLoading(true);
      try {
        await send(payload);
        lastPayload = payload;
        showSuccess(payload);
      } catch (err) {
        submitFailed = true;
        submitError.hidden = false;
        submitError.textContent = t("form.errors.network");
      } finally {
        setLoading(false);
      }
    });

    $("[data-form-reset]").addEventListener("click", () => {
      form.reset();
      Object.keys(errors).forEach((name) => showError(name, false));
      submitted = false;
      lastPayload = null;
      syncGuardian();
      success.hidden = true;
      form.hidden = false;
      field("name").focus();
    });
  }

  function setLoading(on) {
    submitBtn.classList.toggle("is-loading", on);
    submitBtn.disabled = on;
    submitBtn.setAttribute("aria-busy", String(on));
    $("[data-submit-label]").textContent = on ? t("form.sending") : t("form.submit");
  }

  async function send(payload) {
    const endpoint = (form.dataset.endpoint || "").trim();
    if (!endpoint) {
      // Demo mode: no backend wired yet. Set data-endpoint on #register-form to go live.
      await new Promise((r) => window.setTimeout(r, 900));
      console.info("[apptrainers] Demo mode, registration not sent anywhere:", payload);
      return;
    }
    const headers = { "Content-Type": "application/json", Accept: "application/json" };
    const csrf = $('meta[name="csrf-token"]');
    if (csrf) headers["X-CSRF-TOKEN"] = csrf.getAttribute("content");
    const res = await fetch(endpoint, {
      method: "POST",
      headers,
      credentials: "same-origin",
      body: JSON.stringify(payload)
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
  }

  function showSuccess(payload) {
    $("[data-success-text]").textContent = t("form.success.text", { name: firstName(payload.name) });
    form.hidden = true;
    success.hidden = false;
    success.focus();
  }

  /* ---------- Draft notice + footer year ---------- */

  const draftNote = $("[data-draft-note]");
  if (draftNote && root.hasAttribute("data-draft") && !store.get("at-draft-hidden", true)) {
    draftNote.hidden = false;
    $("[data-draft-dismiss]", draftNote).addEventListener("click", () => {
      draftNote.hidden = true;
      store.set("at-draft-hidden", "1", true);
    });
  }

  const year = $("[data-year]");
  if (year) year.textContent = String(new Date().getFullYear());

  /* ---------- Boot ---------- */

  applyLang(initialLang(), false);
  syncGuardian();
})();
