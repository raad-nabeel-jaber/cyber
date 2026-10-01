/*
 * Vision 3020: cybersecurity landing page content (Arabic + English).
 *
 * Every piece of copy on the page lives here. Edit this file to change text,
 * courses, hours, or certifications; index.html only holds the Arabic defaults
 * so the page reads correctly before JavaScript runs.
 *
 * Hero copy, tracks and the 24 courses come from the client's content PDF
 * (2026-10-01). GRC-301 has no hours there, so its hours stay hidden until supplied.
 */
window.AT_CONTENT = {
  i18n: {
    ar: {
      meta: {
        title: "Vision 3020 | كورسات الأمن السيبراني بالتطبيق العملي",
        description: "اخترق كمهاجم. دافع كمحلل. وانطلق بشهادة دولية معتمدة. مسارات تدريب مبنية على الأدوار الحقيقية في سوق العمل: Red Team وBlue Team وPurple Team."
      },
      skip: "تخطَّ إلى المحتوى",
      announce: {
        label: "إعلان",
        text: "برامج الأمن السيبراني لكل المستويات، من المدرسة حتى الاحتراف",
        short: "برامج السايبر لكل المستويات",
        cta: "سجّل اهتمامك",
        ctaShort: "سجّل اهتمامك"
      },
      nav: {
        label: "التنقل الرئيسي",
        home: "Vision 3020، الصفحة الرئيسية",
        paths: "المسارات",
        courses: "الكورسات",
        method: "طريقتنا",
        journey: "رحلتك",
        faq: "الأسئلة الشائعة",
        cta: "سجّل الآن",
        menu: "القائمة",
        close: "إغلاق القائمة"
      },
      lang: { label: "EN", switchTo: "Switch to English", code: "en" },
      hero: {
        title: `اخترق&nbsp;كمهاجم. دافع&nbsp;كمحلل. وانطلق <span class="hl">بشهادة دولية معتمدة</span>.`,
        lead: "مسارات تدريب مبنية على الأدوار الحقيقية في سوق العمل: Red\u00A0Team وBlue\u00A0Team وPurple\u00A0Team. تتدرب على مناهج EC-Council وCompTIA الرسمية، داخل مختبرات تحاكي شبكات الشركات بكل تفاصيلها: Active\u00A0Directory، خوادم ويب، وSIEM حي. وتخرج جاهزاً لاختبار الشهادة ولأول يوم في الوظيفة.",
        cta: "سجّل الآن",
        cta2: "اختر مسارك",
        facts: {
          label: "لمحة عن البرامج",
          tracks: "<strong>4</strong> مسارات متخصصة",
          certs: "<strong>15+</strong> شهادة دولية من EC-Council وCompTIA",
          labs: "<strong>45+</strong> ساعة مختبر عملي في كل مسار",
          ctf: "<strong>CTF</strong> شهري للمتدربين"
        },
        labLabel: "مثال لجلسة في مختبر عملي: فحص الخدمات، ثم اكتشاف ملف مكشوف، ثم التقاط العلم",
        toastTitle: "تم التقاط العلم",
        toastText: "+100 نقطة · تحدي Web 101",
        caption: "مثال من تمرين عملي في مختبر تطبيقات الويب"
      },
      doors: {
        title: "اختر مسارك",
        learnLabel: "تتعلم:",
        toolsLabel: "الأدوات",
        frameworksLabel: "الأطر والمعايير",
        certsLabel: "الشهادات",
        rolesLabel: "الأدوار",
        cta: "ابدأ من هنا",
        red: {
          title: "Red\u00A0Team (الأمن الهجومي)",
          text: "فكّر كالمهاجم.",
          learn: "جمع المعلومات عن الهدف من المصادر المفتوحة، واختبار تطبيقات الويب ضد أخطر عشر ثغرات عالمياً، واختراق بيئات الدليل النشط من مستخدم عادي حتى السيطرة على النطاق كاملاً، وتصعيد الصلاحيات على أنظمة لينكس وويندوز، والتنقل بين أجهزة الشبكة، ثم كتابة تقرير اختبار اختراق احترافي.",
          tools: "Burp\u00A0Suite · Nmap · BloodHound",
          certs: "CEH · CEH\u00A0Practical · PenTest+ · CPENT",
          roles: "مختبِر اختراق · مختص فريق أحمر · مختبِر تطبيقات ويب"
        },
        blue: {
          title: "Blue\u00A0Team (الأمن الدفاعي وSOC)",
          text: "اكتشف الهجوم قبل أن يكتمل، واحتوِه قبل أن ينتشر.",
          learn: "تحليل السجلات وفرز التنبيهات الأمنية، وبناء قواعد كشف ولوحات مراقبة على أنظمة إدارة الأحداث الأمنية، وصيد التهديدات وفق أساليب المهاجمين الموثقة عالمياً، والاستجابة للحوادث الأمنية من أول تنبيه حتى الاحتواء، والتحليل الجنائي الرقمي للذاكرة والأقراص.",
          tools: "Splunk · Wazuh · Wireshark",
          certs: "CND · CSA · CySA+ · ECIH · CTIA · CHFI",
          roles: "محلل مركز عمليات أمنية · مختص استجابة للحوادث · صائد تهديدات · محلل جنائي رقمي"
        },
        purple: {
          title: "Purple\u00A0Team والتخصصات المتقدمة",
          text: "للمحترفين: اربط الهجوم بالدفاع.",
          learn: "محاكاة هجمات حقيقية وقياس ما رصدته أنظمة الكشف وما فاتها، وتأمين البيئات السحابية من إدارة الهويات والصلاحيات حتى المراقبة، ومراجعة الكود البرمجي واكتشاف ثغراته، وتصميم معمارية أمنية متكاملة للمؤسسات.",
          tools: "Atomic\u00A0Red\u00A0Team · AWS · Azure",
          certs: "CCSE · CASE · SecurityX",
          roles: "مهندس فريق بنفسجي · مهندس أمن سحابي · مهندس أمن تطبيقات · معماري أمن معلومات"
        },
        grc: {
          title: "الحوكمة وإدارة المخاطر والامتثال GRC",
          text: "الأمن لا يبدأ بالأدوات، بل بالقرار.",
          learn: "بناء نظام إدارة أمن المعلومات من الصفر، وتقييم المخاطر وتحديد أولوياتها وخطط معالجتها، وكتابة السياسات والإجراءات الأمنية، والتحضير للتدقيق الداخلي والخارجي وإغلاق ملاحظاته، وإدارة مخاطر الموردين والأطراف الثالثة، ووضع خطط استمرارية الأعمال والتعافي من الكوارث، وتحويل المخاطر التقنية إلى لغة يفهمها مجلس الإدارة.",
          frameworks: "ISO\u00A027001 · NIST\u00A0CSF · PCI\u00A0DSS",
          certs: "EISM · CCISO",
          roles: "محلل حوكمة ومخاطر وامتثال · مدقق أمن معلومات · مدير أمن معلومات · مسؤول حماية البيانات"
        }
      },
      courses: {
        title: "الكورسات والمسارات",
        lead: "كل كورس مبني حول مختبرات عملية. اختر مستواك واستعرض ما يناسبك.",
        tabsLabel: "تصفية الكورسات حسب الفئة",
        level: "المستوى {n}",
        levelLabel: "المستوى",
        hours: "الساعات",
        labs: "المختبرات",
        exercises: "التمارين",
        prepares: "تحضير لـ",
        cta: "سجّل في هذا الكورس",
        empty: "لا توجد كورسات في هذه الفئة حالياً.",
        noscript: "فعّل JavaScript لعرض قائمة الكورسات، أو انتقل مباشرة إلى نموذج التسجيل."
      },
      method: {
        title: "هكذا نعلّم",
        lead: "النظرية وحدها لا توقف أي هجوم. لهذا يدور كل شيء عندنا حول التطبيق.",
        labs: {
          title: "مختبرات عملية حقيقية",
          text: "تهاجم وتدافع داخل بيئات معزولة تحاكي شبكات الشركات، بدل مشاهدة الشرائح. كل مفهوم تتعلمه تطبّقه في الجلسة نفسها.",
          p1: "بيئات معزولة وآمنة",
          p2: "سيناريوهات من الواقع",
          p3: "تقييم فوري لحلولك",
          legend: "مسار الهجوم في التمرين",
          diagram: "مخطط شبكة المختبر: جهاز المتدرب يعبر الجدار الناري إلى خادم الويب، ثم إلى قاعدة البيانات حيث العلم"
        },
        certs: {
          title: "تحضير للشهادات الدولية",
          text: "المسارات المتقدمة مبنية على محاور أشهر الشهادات، مع اختبارات تجريبية وخطة دراسة واضحة."
        },
        ctf: {
          title: "مجتمع ومسابقات CTF",
          text: "تنافس مع زملائك في تحديات Capture The Flag، واعمل ضمن فريق، وتعلّم من حلول غيرك.",
          board: "مثال للوحة تحديات CTF: أربع فئات بثلاث درجات، ست منها محلولة",
          score: "نقاط الفريق"
        },
        career: {
          title: "مسار وظيفي واضح",
          text: "تخرج بملف مشاريع حقيقية، وتتدرّب على المقابلات، وتعرف بالضبط أي دور يناسبك.",
          projectsTitle: "مشاريع تبنيها لملفك",
          p1: "تقرير اختبار اختراق كامل لتطبيق ويب",
          p2: "قواعد كشف ولوحة مراقبة على SIEM",
          p3: "تحقيق في حادثة أمنية من السجلات حتى التقرير",
          p4: "تدقيق أمني لبيئة سحابية",
          rolesTitle: "أدوار تتأهل لها"
        }
      },
      journey: {
        title: "رحلتك خطوة بخطوة",
        lead: "من أول نموذج حتى أول وظيفة، نرافقك في كل مرحلة.",
        s1: { title: "سجّل اهتمامك", text: "املأ نموذج التسجيل في أقل من دقيقتين." },
        s2: { title: "حدّد نقطة البداية", text: "نتواصل معك لنفهم خلفيتك ونرشّح المستوى الأنسب لك." },
        s3: { title: "تعلّم بالتطبيق", text: `<span data-proposal>جلسات مع مدرّبين</span>، ومختبرات عملية في كل خطوة.` },
        s4: { title: "نافس وابنِ ملفك", text: "مسابقات CTF ومشاريع حقيقية تضيفها إلى سيرتك الذاتية." },
        s5: { title: "انطلق مهنياً", text: `<span data-proposal>شهادة إتمام</span>، وتحضير لشهادة دولية، ودعم في طريقك إلى أول وظيفة.` }
      },
      faq: {
        title: "الأسئلة الشائعة",
        lead: "لم تجد إجابتك؟ اكتب سؤالك في خانة الملاحظات عند التسجيل.",
        q1: { q: "هل أحتاج إلى خلفية تقنية للبدء؟", a: "لا. مسار الأساسيات مصمّم لمن يبدأ من الصفر، ويأخذك خطوة بخطوة من أساسيات الحاسوب والشبكات حتى مفاهيم الأمن." },
        q2: { q: "ما العمر المناسب لبرامج اليافعين؟", a: `برنامجا «مستكشفو السايبر» و«تحديات CTF للناشئين» مصمّمان <span data-proposal>للأعمار من 13 إلى 17 سنة</span>، بأسلوب ممتع وآمن. ونطلب رقم ولي الأمر عند التسجيل.` },
        q3: { q: "كيف أعرف المستوى المناسب لي؟", a: "املأ نموذج التسجيل واختر الوصف الأقرب لك، وسنتواصل معك لنتفق على نقطة البداية الأنسب قبل أن تبدأ." },
        q4: { q: "هل التدريب حضوري أم عن بُعد؟", a: "نعلن طريقة التدريب ومواعيد كل دفعة عند فتح التسجيل لها، ويمكنك إخبارنا بتفضيلك في نموذج التسجيل." },
        q5: { q: "هل أحصل على شهادة؟", a: `تحصل على <span data-proposal>شهادة إتمام من Vision 3020</span> عند إنهاء الكورس، والمسارات المتقدمة تجهّزك لاختبارات دولية مثل Security+\u200E وCEH وCySA+\u200E.` },
        q6: { q: "ماذا أحتاج للبدء؟", a: `جهاز لابتوب، واتصال جيد بالإنترنت، ورغبة حقيقية في التعلّم. <span data-proposal>نساعدك في تجهيز بيئة المختبر في أول جلسة</span>.` },
        q7: { q: "هل تعلّم الاختراق قانوني؟", a: "نعم، عندما يتم بإذن وداخل بيئات مخصّصة لذلك. نعلّم الاختراق الأخلاقي فقط، داخل مختبرات معزولة، مع تركيز واضح على أخلاقيات المهنة والإطار القانوني." }
      },
      register: {
        title: "سجّل الآن وابدأ رحلتك",
        lead: "املأ النموذج وسنتواصل معك لنحدد معاً المستوى والمسار الأنسب لك.",
        a1: "التسجيل لا يلزمك بأي دفع الآن",
        a2: "نساعدك في اختيار المستوى المناسب",
        a3: "نستخدم بياناتك للتواصل معك بخصوص التسجيل"
      },
      form: {
        label: "نموذج التسجيل",
        name: "الاسم الكامل",
        namePh: "مثال: سارة أحمد",
        phone: "رقم الهاتف (واتساب)",
        phonePh: "رقمك مع رمز الدولة",
        email: "البريد الإلكتروني",
        optional: "(اختياري)",
        emailPh: "name@example.com",
        audience: "أنا…",
        aud: {
          teens: "طالب مدرسة",
          beginners: "مبتدئ أو أغيّر مساري",
          students: "طالب جامعي أو خريج",
          pros: "محترف IT أو مبرمج"
        },
        guardian: "رقم ولي الأمر",
        guardianHint: "مطلوب للمشاركين دون 18 سنة.",
        course: "الكورس الذي يهمّك",
        courseHelp: "ساعدوني في الاختيار",
        selected: "اخترت: {course}",
        format: "طريقة التدريب المفضّلة",
        fmt: { inperson: "حضوري", online: "عن بُعد", any: "لا فرق" },
        notes: "ملاحظات",
        notesPh: "أخبرنا عن خلفيتك أو أهدافك أو أي سؤال لديك",
        consent: "أوافق على أن تتواصل معي Vision 3020 بخصوص التسجيل.",
        submit: "أرسل طلب التسجيل",
        sending: "جارٍ الإرسال…",
        errors: {
          name: "اكتب اسمك الكامل.",
          phone: "اكتب رقم هاتف صحيحاً، 8 أرقام على الأقل.",
          email: "صيغة البريد الإلكتروني غير صحيحة، مثل name@example.com.",
          audience: "اختر الوصف الأقرب لك.",
          guardian: "رقم ولي الأمر مطلوب لمن هم دون 18 سنة.",
          consent: "نحتاج موافقتك حتى نتمكن من التواصل معك.",
          summary: "راجع الحقول المظلّلة ثم أعد الإرسال.",
          network: "تعذّر إرسال الطلب. تحقّق من اتصالك بالإنترنت وحاول مرة أخرى."
        },
        success: {
          title: "وصلنا طلبك!",
          text: "شكراً {name}. سنتواصل معك قريباً على الرقم الذي أدخلته لنحدد معاً نقطة البداية.",
          again: "إرسال طلب آخر"
        }
      },
      footer: {
        tagline: "Vision 3020 للتدريب",
        label: "روابط التذييل",
        rights: "جميع الحقوق محفوظة."
      },
      draft: {
        mark: "مقترح، بانتظار التأكيد"
      }
    },

    en: {
      meta: {
        title: "Vision 3020 | Hands-on Cybersecurity Courses",
        description: "Hack like an attacker. Defend like an analyst. Launch with an accredited international certification. Training tracks built around real job-market roles: Red Team, Blue Team and Purple Team."
      },
      skip: "Skip to content",
      announce: {
        label: "Announcement",
        text: "Cybersecurity programs for every level, from school to pro",
        short: "Programs for every level",
        cta: "Register your interest",
        ctaShort: "Register interest"
      },
      nav: {
        label: "Main navigation",
        home: "Vision 3020 home",
        paths: "Paths",
        courses: "Courses",
        method: "Our method",
        journey: "Your journey",
        faq: "FAQ",
        cta: "Register now",
        menu: "Menu",
        close: "Close menu"
      },
      lang: { label: "عربي", switchTo: "التبديل إلى العربية", code: "ar" },
      hero: {
        title: `Hack like an attacker. Defend like an analyst. Get <span class="hl">globally certified</span>.`,
        lead: "Training tracks built around real job-market roles: Red Team, Blue Team and Purple Team. You train on the official EC-Council and CompTIA curricula, inside labs that mirror company networks in full detail: Active Directory, web servers and a live SIEM. You leave ready for the certification exam and your first day on the job.",
        cta: "Register now",
        cta2: "Find your path",
        facts: {
          label: "Program highlights",
          tracks: "<strong>4</strong> specialized tracks",
          certs: "<strong>15+</strong> international certifications from EC-Council and CompTIA",
          labs: "<strong>45+</strong> hours of hands-on labs per track",
          ctf: "Monthly <strong>CTF</strong> for trainees"
        },
        labLabel: "Example of a hands-on lab session: scanning services, finding an exposed file, then capturing the flag",
        toastTitle: "Flag captured",
        toastText: "+100 pts · Web 101 challenge",
        caption: "Example from a hands-on web application lab"
      },
      doors: {
        title: "Choose your track",
        learnLabel: "You'll learn:",
        toolsLabel: "Tools",
        frameworksLabel: "Frameworks",
        certsLabel: "Certifications",
        rolesLabel: "Roles",
        cta: "Start here",
        red: {
          title: "Red\u00A0Team (Offensive Security)",
          text: "Think like an attacker.",
          learn: "Gathering intelligence on a target from open sources, testing web applications against the world's ten most critical vulnerabilities, breaching Active Directory environments from a regular user all the way to full domain control, escalating privileges on Linux and Windows, moving across the network's machines, then writing a professional penetration test report.",
          tools: "Burp\u00A0Suite · Nmap · BloodHound",
          certs: "CEH · CEH\u00A0Practical · PenTest+ · CPENT",
          roles: "Penetration Tester · Red Team Specialist · Web Application Tester"
        },
        blue: {
          title: "Blue\u00A0Team (Defensive Security & SOC)",
          text: "Detect the attack before it completes, and contain it before it spreads.",
          learn: "Analyzing logs and triaging security alerts, building detection rules and monitoring dashboards on security event management (SIEM) platforms, hunting threats using globally documented attacker techniques, responding to security incidents from the first alert to containment, and digital forensics on memory and disks.",
          tools: "Splunk · Wazuh · Wireshark",
          certs: "CND · CSA · CySA+ · ECIH · CTIA · CHFI",
          roles: "SOC Analyst · Incident Responder · Threat Hunter · Digital Forensics Analyst"
        },
        purple: {
          title: "Purple\u00A0Team & Advanced Specializations",
          text: "For professionals: connect offense with defense.",
          learn: "Emulating real attacks and measuring what detection systems caught and what they missed, securing cloud environments from identity and access management through monitoring, reviewing source code and finding its vulnerabilities, and designing an integrated enterprise security architecture.",
          tools: "Atomic\u00A0Red\u00A0Team · AWS · Azure",
          certs: "CCSE · CASE · SecurityX",
          roles: "Purple Team Engineer · Cloud Security Engineer · Application Security Engineer · Information Security Architect"
        },
        grc: {
          title: "Governance, Risk & Compliance (GRC)",
          text: "Security doesn't start with tools. It starts with decisions.",
          learn: "Building an information security management system from scratch, assessing risks and setting their priorities and treatment plans, writing security policies and procedures, preparing for internal and external audits and closing their findings, managing vendor and third-party risk, building business continuity and disaster recovery plans, and translating technical risk into language the board understands.",
          frameworks: "ISO\u00A027001 · NIST\u00A0CSF · PCI\u00A0DSS",
          certs: "EISM · CCISO",
          roles: "GRC Analyst · Information Security Auditor · Information Security Manager · Data Protection Officer"
        }
      },
      courses: {
        title: "Courses & tracks",
        lead: "Every course is built around hands-on labs. Choose your level and see what fits.",
        tabsLabel: "Filter courses by track",
        level: "Level {n}",
        levelLabel: "Level",
        hours: "Hours",
        labs: "Labs",
        exercises: "Exercises",
        prepares: "Prepares for",
        cta: "Register for this course",
        empty: "No courses in this category yet.",
        noscript: "Turn on JavaScript to see the course list, or go straight to the registration form."
      },
      method: {
        title: "How we teach",
        lead: "Theory alone never stopped an attack. That's why everything we do revolves around practice.",
        labs: {
          title: "Real hands-on labs",
          text: "You attack and defend inside isolated environments that mirror real company networks, instead of watching slides. Every concept you learn, you apply in the same session.",
          p1: "Isolated, safe environments",
          p2: "Real-world scenarios",
          p3: "Instant feedback on your work",
          legend: "Attack path in the exercise",
          diagram: "Lab network diagram: the learner's machine crosses the firewall to the web server, then reaches the database where the flag is"
        },
        certs: {
          title: "International certification prep",
          text: "Advanced tracks are built on the domains of leading certifications, with practice exams and a clear study plan."
        },
        ctf: {
          title: "Community & CTF competitions",
          text: "Compete with your peers in Capture The Flag challenges, work as a team and learn from how others solved them.",
          board: "Sample CTF challenge board: four categories with three tiers each, six of them solved",
          score: "Team score"
        },
        career: {
          title: "A clear career path",
          text: "You leave with a portfolio of real projects, interview practice, and a clear idea of the role that suits you.",
          projectsTitle: "Projects for your portfolio",
          p1: "A full penetration test report for a web application",
          p2: "Detection rules and a SIEM monitoring dashboard",
          p3: "An incident investigation, from logs to final report",
          p4: "A security audit of a cloud environment",
          rolesTitle: "Roles you prepare for"
        }
      },
      journey: {
        title: "Your journey, step by step",
        lead: "From the first form to the first job, we're with you at every stage.",
        s1: { title: "Register your interest", text: "Fill in the registration form in under two minutes." },
        s2: { title: "Find your starting point", text: "We get in touch to understand your background and recommend the right level." },
        s3: { title: "Learn by doing", text: `<span data-proposal>Instructor-led sessions</span> with hands-on labs at every step.` },
        s4: { title: "Compete & build your portfolio", text: "CTF competitions and real projects to add to your CV." },
        s5: { title: "Launch your career", text: `<span data-proposal>A completion certificate</span>, international certification prep, and support on the way to your first job.` }
      },
      faq: {
        title: "Frequently asked questions",
        lead: "Can't find your answer? Add your question in the notes when you register.",
        q1: { q: "Do I need a technical background to start?", a: "No. The Foundations track is designed for complete beginners and takes you step by step from computer and networking basics to core security concepts." },
        q2: { q: "What age are the teen programs for?", a: `Cyber Explorers and CTF Juniors are designed <span data-proposal>for ages 13 to 17</span>, in a fun and safe format. We ask for a parent or guardian's number when you register.` },
        q3: { q: "How do I know which level is right for me?", a: "Fill in the registration form and pick the description closest to you. We'll contact you to agree on the right starting point before you begin." },
        q4: { q: "Is the training in person or online?", a: "We announce the format and schedule for each cohort when its registration opens. You can tell us your preference in the registration form." },
        q5: { q: "Do I get a certificate?", a: `You receive <span data-proposal>a Vision 3020 completion certificate</span> when you finish a course, and the advanced tracks prepare you for international exams such as Security+, CEH and CySA+.` },
        q6: { q: "What do I need to get started?", a: `A laptop, a decent internet connection and a real drive to learn. <span data-proposal>We'll help you set up your lab environment in the first session</span>.` },
        q7: { q: "Is learning to hack legal?", a: "Yes, when it's done with permission and inside environments built for it. We only teach ethical hacking, inside isolated labs, with a clear focus on professional ethics and the legal framework." }
      },
      register: {
        title: "Register now and start your journey",
        lead: "Fill in the form and we'll get in touch to agree on the level and track that suit you best.",
        a1: "Registering doesn't commit you to any payment",
        a2: "We help you choose the right level",
        a3: "We use your details to contact you about your registration"
      },
      form: {
        label: "Registration form",
        name: "Full name",
        namePh: "e.g. Sara Ahmad",
        phone: "Phone number (WhatsApp)",
        phonePh: "Your number with country code",
        email: "Email",
        optional: "(optional)",
        emailPh: "name@example.com",
        audience: "I am…",
        aud: {
          teens: "A school student",
          beginners: "A beginner or career switcher",
          students: "A university student or graduate",
          pros: "An IT professional or developer"
        },
        guardian: "Parent or guardian's phone",
        guardianHint: "Required for participants under 18.",
        course: "Course you're interested in",
        courseHelp: "Help me choose",
        selected: "Selected: {course}",
        format: "Preferred format",
        fmt: { inperson: "In person", online: "Online", any: "No preference" },
        notes: "Notes",
        notesPh: "Tell us about your background, your goals or any question you have",
        consent: "I agree to be contacted by Vision 3020 about my registration.",
        submit: "Send registration",
        sending: "Sending…",
        errors: {
          name: "Please enter your full name.",
          phone: "Enter a valid phone number, at least 8 digits.",
          email: "That email doesn't look right. Try name@example.com.",
          audience: "Choose the option that describes you.",
          guardian: "A parent or guardian's number is required for under-18s.",
          consent: "We need your consent before we can contact you.",
          summary: "Check the highlighted fields, then send again.",
          network: "We couldn't send your request. Check your internet connection and try again."
        },
        success: {
          title: "Request received!",
          text: "Thanks, {name}. We'll contact you soon on the number you gave us to agree on your starting point.",
          again: "Send another request"
        }
      },
      footer: {
        tagline: "Vision 3020 for Training",
        label: "Footer links",
        rights: "All rights reserved."
      },
      draft: {
        mark: "Proposal, awaiting confirmation"
      }
    }
  },

  /* Category order drives the course tabs; the first category opens by default. */
  categories: {
    order: ["foundations", "red", "blue", "advanced", "grc"],
    labels: {
      foundations: { ar: "Foundations", en: "Foundations" },
      red: { ar: "Red Team", en: "Red Team" },
      blue: { ar: "Blue Team", en: "Blue Team" },
      advanced: { ar: "Advanced", en: "Advanced" },
      grc: { ar: "GRC", en: "GRC" }
    }
  },

  levels: {
    1: { ar: "أساسي", en: "Beginner" },
    2: { ar: "متوسط", en: "Intermediate" },
    3: { ar: "متقدم", en: "Advanced" },
    4: { ar: "خبير", en: "Expert" }
  },

  tracks: {
    foundations: { ar: "الأساسيات", en: "Foundations" },
    red: { ar: "الهجومي", en: "Red Team" },
    blue: { ar: "الدفاعي", en: "Blue Team" },
    advanced: { ar: "المتقدم", en: "Advanced" },
    grc: { ar: "GRC", en: "GRC" }
  },

  /* 24 courses from the client's content PDF. practice: "exercises" counts exercises instead of labs; hours: null hides the hours. */
  courses: [
    {
      id: "FND-101", level: 1, track: "foundations", hours: 40, labs: 12, cert: null,
      title: { ar: "الشبكات للأمن السيبراني", en: "Networking for Security" },
      desc: {
        ar: "افهم الشبكة كما يراها المهاجم: كيف تنتقل الحزم، وأين تُفتح المنافذ، ولماذا تُستغل الخدمات.",
        en: "Understand the network the way an attacker sees it: how packets travel, where ports open, and why services get exploited."
      },
      skills: ["Network+", "TCP/IP", "Subnetting", "Wireshark"]
    },
    {
      id: "FND-102", level: 1, track: "foundations", hours: 30, labs: 14, cert: null,
      title: { ar: "أنظمة التشغيل للأمن", en: "Linux & Windows for Security" },
      desc: {
        ar: "سطر الأوامر، والصلاحيات، والخدمات، والسجلات على لينكس وويندوز. القاعدة التي يقف عليها كل مسار.",
        en: "The command line, permissions, services and logs on Linux and Windows. The foundation every track stands on."
      },
      skills: ["Linux CLI", "PowerShell", "Permissions", "Event Logs"]
    },
    {
      id: "FND-103", level: 1, track: "foundations", hours: 24, labs: 10, cert: null,
      title: { ar: "البرمجة النصية للأمن", en: "Scripting for Security" },
      desc: {
        ar: "اكتب أدواتك بنفسك: فاحص منافذ، ومحلل سجلات، وأتمتة للمهام المتكررة.",
        en: "Write your own tools: a port scanner, a log analyzer, and automation for repetitive tasks."
      },
      skills: ["Python", "Bash", "Automation", "Regex"]
    },
    {
      id: "FND-201", level: 2, track: "foundations", hours: 40, labs: 15, cert: "Security+",
      title: { ar: "التحضير لشهادة Security+\u200E", en: "Security+ Certification Prep" },
      desc: {
        ar: "المنهج الرسمي كاملاً، مع أسئلة تطبيقية بنمط الامتحان واختبارات تجريبية حتى يوم الامتحان.",
        en: "The complete official curriculum, with exam-style practice questions and mock exams right up to exam day."
      },
      skills: ["Security+", "Threats", "Architecture", "Operations"]
    },
    {
      id: "RED-201", level: 2, track: "red", hours: 40, labs: 25, cert: null,
      title: { ar: "اختبار اختراق تطبيقات الويب", en: "Web Application Pentesting" },
      desc: {
        ar: "اكتشف أخطر ثغرات الويب واستغلها داخل تطبيقات حقيقية، ثم اكتب تقريراً احترافياً كاملاً.",
        en: "Find and exploit the most critical web vulnerabilities inside real applications, then write a complete professional report."
      },
      skills: ["OWASP Top 10", "Burp Suite", "SQLi", "XSS"]
    },
    {
      id: "RED-202", level: 2, track: "red", hours: 40, labs: 20, cert: null,
      title: { ar: "اختراق الشبكات والدليل النشط", en: "Network & Active Directory Attacks" },
      desc: {
        ar: "من مستخدم عادي إلى السيطرة على النطاق كاملاً، داخل شبكة شركة حية.",
        en: "From a regular user to full domain control, inside a live company network."
      },
      skills: ["Active Directory", "Kerberoasting", "BloodHound", "PrivEsc"]
    },
    {
      id: "RED-203", level: 2, track: "red", hours: 40, labs: "25+", cert: "CEH",
      title: { ar: "الهاكر الأخلاقي المعتمد", en: "Certified Ethical Hacker" },
      desc: {
        ar: "المنهج الرسمي كاملاً مع مختبرات EC-Council، وتقدّم للامتحان دون شرط السنتين خبرة.",
        en: "The complete official curriculum with EC-Council labs, and sit the exam without the two-year experience requirement."
      },
      skills: ["CEH v13", "Recon", "Exploitation", "AI Attacks"]
    },
    {
      id: "RED-301", level: 3, track: "red", hours: 40, labs: 18, cert: "PenTest+",
      title: { ar: "التحضير لشهادة PenTest+\u200E", en: "PenTest+ Certification Prep" },
      desc: {
        ar: "اختبار الاختراق كعمل مهني: نطاق، وتنفيذ، وتقرير، وتواصل مع العميل.",
        en: "Penetration testing as professional work: scoping, execution, reporting and client communication."
      },
      skills: ["PenTest+", "Scoping", "Exploitation", "Reporting"]
    },
    {
      id: "RED-401", level: 4, track: "red", hours: 40, labs: "20+", cert: "CPENT",
      title: { ar: "اختبار الاختراق المتقدم", en: "Certified Penetration Testing Professional" },
      desc: {
        ar: "شبكات متعددة الطبقات، والتنقل بينها، وبيئات إنترنت الأشياء والأنظمة الصناعية.",
        en: "Multi-layered networks, pivoting between them, and IoT and industrial control environments."
      },
      skills: ["CPENT", "Pivoting", "IoT", "OT"]
    },
    {
      id: "BLU-201", level: 2, track: "blue", hours: 24, labs: 15, cert: "CSA",
      title: { ar: "محلل مركز العمليات الأمنية", en: "Certified SOC Analyst" },
      desc: {
        ar: "اجلس على مقعد المحلل: افرز التنبيهات، وميّز الهجوم الحقيقي من الإنذار الكاذب، وصعّد في الوقت المناسب.",
        en: "Take the analyst's seat: triage alerts, tell real attacks from false alarms, and escalate at the right moment."
      },
      skills: ["CSA", "SIEM", "Triage", "Escalation"]
    },
    {
      id: "BLU-202", level: 2, track: "blue", hours: 32, labs: 18, cert: null,
      title: { ar: "هندسة الكشف", en: "Detection Engineering" },
      desc: {
        ar: "ابنِ قواعد كشف تلتقط المهاجم، ولوحات مراقبة تكشف ما يحدث في الشبكة لحظة بلحظة.",
        en: "Build detection rules that catch attackers, and monitoring dashboards that show what happens on the network moment by moment."
      },
      skills: ["Splunk", "Wazuh", "Sigma", "MITRE ATT&CK"]
    },
    {
      id: "BLU-203", level: 2, track: "blue", hours: 40, labs: 12, cert: "CND",
      title: { ar: "مدافع الشبكات المعتمد", en: "Certified Network Defender" },
      desc: {
        ar: "احمِ الشبكة، واكتشف التهديدات، واستجب لها وفق منهجية دفاع متكاملة.",
        en: "Protect the network, detect threats and respond to them with an integrated defense methodology."
      },
      skills: ["CND", "Firewalls", "IDS/IPS", "Network Monitoring"]
    },
    {
      id: "BLU-301", level: 3, track: "blue", hours: 40, labs: 16, cert: "CySA+",
      title: { ar: "التحضير لشهادة CySA+\u200E", en: "CySA+ Certification Prep" },
      desc: {
        ar: "تحليل التهديدات، وإدارة الثغرات، والاستجابة للحوادث بعقلية المحلل المحترف.",
        en: "Threat analysis, vulnerability management and incident response with a professional analyst's mindset."
      },
      skills: ["CySA+", "Threat Analysis", "Vuln Management", "IR"]
    },
    {
      id: "BLU-302", level: 3, track: "blue", hours: 40, labs: 20, cert: "ECIH · CHFI",
      title: { ar: "معالجة الحوادث والتحليل الجنائي", en: "Incident Handling & Digital Forensics" },
      desc: {
        ar: "من أول تنبيه حتى الاحتواء والتقرير الجنائي: ذاكرة، وأقراص، وسجلات، وأدلة.",
        en: "From the first alert to containment and the forensic report: memory, disks, logs and evidence."
      },
      skills: ["ECIH", "CHFI", "Memory Forensics", "DFIR"]
    },
    {
      id: "BLU-401", level: 4, track: "blue", hours: 24, labs: 15, cert: "CTIA",
      title: { ar: "استخبارات التهديدات", en: "Certified Threat Intelligence Analyst" },
      desc: {
        ar: "اعرف عدوك قبل أن يهاجم: اجمع المعلومات عن المهاجمين، وحللها، وحوّلها إلى قرارات دفاعية.",
        en: "Know your enemy before they strike: gather intelligence on attackers, analyze it, and turn it into defensive decisions."
      },
      skills: ["CTIA", "Threat Intel", "IOCs", "OSINT"]
    },
    {
      id: "ADV-301", level: 3, track: "advanced", hours: 32, labs: 15, cert: null,
      title: { ar: "عمليات الفريق البنفسجي", en: "Purple Team Operations" },
      desc: {
        ar: "نفّذ الهجوم، وراقب الدفاع، وقِس الفجوة: ما الذي رُصد، وما الذي فات، وكيف تسدّه.",
        en: "Run the attack, watch the defense, and measure the gap: what was detected, what was missed, and how to close it."
      },
      skills: ["Atomic Red Team", "MITRE ATT&CK", "Detection Coverage", "Emulation"]
    },
    {
      id: "ADV-302", level: 3, track: "advanced", hours: 40, labs: 11, cert: "CCSE",
      title: { ar: "أمن السحابة", en: "Certified Cloud Security Engineer" },
      desc: {
        ar: "أمّن البيئات السحابية من الهويات والصلاحيات حتى المراقبة والاستجابة.",
        en: "Secure cloud environments, from identities and permissions to monitoring and response."
      },
      skills: ["CCSE", "AWS", "Azure", "IAM"]
    },
    {
      id: "ADV-303", level: 3, track: "advanced", hours: 24, labs: 16, cert: "CASE",
      title: { ar: "أمن التطبيقات", en: "Certified Application Security Engineer" },
      desc: {
        ar: "راجع الكود، واكتشف ثغراته قبل المهاجم، وادمج الأمن في كل مرحلة من دورة التطوير.",
        en: "Review code, find its vulnerabilities before attackers do, and build security into every stage of the development lifecycle."
      },
      skills: ["CASE", "Secure Coding", "Code Review", "DevSecOps"]
    },
    {
      id: "ADV-401", level: 4, track: "advanced", hours: 40, labs: 12, cert: "SecurityX",
      title: { ar: "المعمارية الأمنية للمؤسسات", en: "SecurityX Certification Prep" },
      desc: {
        ar: "صمّم حلولاً أمنية متكاملة على مستوى المؤسسة، وقيّمها، ودافع عنها أمام الإدارة.",
        en: "Design integrated enterprise-level security solutions, assess them, and defend them in front of management."
      },
      skills: ["SecurityX", "Architecture", "Zero Trust", "Risk"]
    },
    {
      id: "GRC-101", level: 1, track: "grc", hours: 24, labs: 8, practice: "exercises", cert: null,
      title: { ar: "أساسيات الحوكمة وإدارة المخاطر", en: "GRC Fundamentals" },
      desc: {
        ar: "كيف تُدار المخاطر الأمنية داخل المؤسسة، ومن يملك القرار، ولماذا تفشل البرامج الأمنية.",
        en: "How security risk is managed inside an organization, who owns the decisions, and why security programs fail."
      },
      skills: ["Governance", "Risk Assessment", "Policies", "Controls"]
    },
    {
      id: "GRC-201", level: 2, track: "grc", hours: 32, labs: 10, practice: "exercises", cert: null,
      title: { ar: "بناء نظام إدارة أمن المعلومات", en: "ISO 27001 Implementation" },
      desc: {
        ar: "من تحديد النطاق حتى الجاهزية لتدقيق الاعتماد، على مؤسسة افتراضية متكاملة.",
        en: "From defining the scope to certification-audit readiness, on a complete simulated organization."
      },
      skills: ["ISO 27001", "ISMS", "Statement of Applicability", "Risk Register"]
    },
    {
      id: "GRC-202", level: 2, track: "grc", hours: 24, labs: 8, practice: "exercises", cert: null,
      title: { ar: "التدقيق والامتثال", en: "Audit & Compliance" },
      desc: {
        ar: "قيّم الفجوات، وجهّز الأدلة، وأغلق ملاحظات التدقيق قبل أن تتحول إلى مخالفات.",
        en: "Assess gaps, prepare evidence, and close audit findings before they turn into violations."
      },
      skills: ["NIST CSF", "PCI DSS", "Gap Analysis", "Audit Evidence"]
    },
    {
      id: "GRC-301", level: 3, track: "grc", hours: null, labs: 12, practice: "exercises", cert: "EISM",
      title: { ar: "مدير أمن المعلومات", en: "EC-Council Information Security Manager" },
      desc: {
        ar: "أدر البرنامج الأمني كاملاً: الفرق، والميزانيات، والسياسات، والتقارير للإدارة العليا.",
        en: "Run the entire security program: teams, budgets, policies and reporting to senior management."
      },
      skills: ["EISM", "Security Program", "Budgeting", "Leadership"]
    },
    {
      id: "GRC-401", level: 4, track: "grc", hours: 40, labs: 7, practice: "exercises", cert: "CCISO",
      title: { ar: "القيادة الأمنية التنفيذية", en: "Certified Chief Information Security Officer" },
      desc: {
        ar: "الاستراتيجية الأمنية بلغة مجلس الإدارة. للقيادات الأمنية ذوي الخبرة.",
        en: "Security strategy in the language of the board. For experienced security leaders."
      },
      skills: ["CCISO", "Strategy", "Board Reporting", "Governance"]
    }
  ]
};
