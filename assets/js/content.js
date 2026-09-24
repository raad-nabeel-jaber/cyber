/*
 * apptrainers: cybersecurity landing page content (Arabic + English).
 *
 * Every piece of copy on the page lives here. Edit this file to change text,
 * courses, hours, or certifications; index.html only holds the Arabic defaults
 * so the page reads correctly before JavaScript runs.
 *
 * Course names, hours, lab counts and certification mappings are a proposal
 * and still need confirming (see README.md).
 */
window.AT_CONTENT = {
  i18n: {
    ar: {
      meta: {
        title: "apptrainers | كورسات الأمن السيبراني بالتطبيق العملي",
        description: "برامج تدريبية في الأمن السيبراني لكل المستويات، من طلاب المدارس إلى محترفي تقنية المعلومات: مختبرات عملية، وتحضير للشهادات الدولية، ومسار وظيفي واضح."
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
        home: "apptrainers، الصفحة الرئيسية",
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
        title: `تعلّم الأمن السيبراني <span class="hl">بالتطبيق</span>، لا بالتلقين.`,
        lead: "من طلاب المدارس إلى محترفي تقنية المعلومات: مسار لكل مستوى، ومختبرات عملية حقيقية، وتحضير للشهادات الدولية، وطريق واضح إلى أول وظيفة في المجال.",
        cta: "سجّل الآن",
        cta2: "اختر مسارك",
        facts: {
          label: "لمحة عن البرامج",
          levels: "مستويات",
          labs: "مختبرات عملية في كل كورس",
          ctf: "مسابقات CTF",
          certs: "تحضير للشهادات الدولية"
        },
        labLabel: "مثال لجلسة في مختبر عملي: فحص الخدمات، ثم اكتشاف ملف مكشوف، ثم التقاط العلم",
        toastTitle: "تم التقاط العلم",
        toastText: "+100 نقطة · تحدي Web 101",
        caption: "مثال من تمرين عملي في مختبر تطبيقات الويب"
      },
      doors: {
        title: "من أين تبدأ؟",
        lead: "اختر الوصف الأقرب لك، وسنرشدك إلى نقطة البداية المناسبة.",
        levelLabel: "المستوى",
        forLabel: "لمن",
        startLabel: "تبدأ بـ",
        cta: "ابدأ من هنا",
        teens: {
          level: "المستوى 1",
          title: "طلاب المدارس واليافعون",
          text: "برامج مكثّفة وممتعة تكتشف فيها كيف يعمل الإنترنت وكيف نحميه، وتخوض أول تحدٍّ CTF لك.",
          meta: "من 13 إلى 17 سنة",
          start: "مستكشفو السايبر"
        },
        beginners: {
          level: "المستوى 2",
          title: "المبتدئون ومغيّرو المسار",
          text: "لا تحتاج أي خلفية تقنية. نبدأ معك من الحاسوب والشبكات ولينكس حتى أساسيات الأمن.",
          meta: "بدون متطلبات مسبقة",
          start: "أساسيات الأمن السيبراني"
        },
        students: {
          level: "المستوى 3",
          title: "طلاب الجامعات والخريجون",
          text: "مسار مهني يجهّزك لأول وظيفة في الأمن، محلل SOC أو مختبِر اختراق مبتدئ، مع مشاريع حقيقية لملفك.",
          meta: "الحاسوب والهندسة وغيرها",
          start: "محلل SOC أو مختبِر اختراق"
        },
        pros: {
          level: "المستويان 4 و5",
          title: "محترفو تقنية المعلومات والمبرمجون",
          text: "تخصّص عميق في اختبار الاختراق وأمن السحابة والبرمجة الآمنة، وتحضير مركّز للشهادات الدولية.",
          meta: "خبرة في IT أو البرمجة",
          start: "مسارات التخصص والشهادات"
        }
      },
      courses: {
        title: "الكورسات والمسارات",
        lead: "كل كورس مبني حول مختبرات عملية. اختر مستواك واستعرض ما يناسبك.",
        tabsLabel: "تصفية الكورسات حسب الفئة",
        all: "الكل",
        level: "المستوى {n}",
        levelLabel: "المستوى",
        hours: "الساعات",
        labs: "المختبرات",
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
        q5: { q: "هل أحصل على شهادة؟", a: `تحصل على <span data-proposal>شهادة إتمام من apptrainers</span> عند إنهاء الكورس، والمسارات المتقدمة تجهّزك لاختبارات دولية مثل Security+\u200E وeJPT وOSCP.` },
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
        consent: "أوافق على أن تتواصل معي apptrainers بخصوص التسجيل.",
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
        tagline: "نحوّل الأفكار إلى واقع عبر تعليم مبتكر.",
        label: "روابط التذييل",
        rights: "جميع الحقوق محفوظة."
      },
      draft: {
        mark: "مقترح، بانتظار التأكيد"
      }
    },

    en: {
      meta: {
        title: "apptrainers | Hands-on Cybersecurity Courses",
        description: "Cybersecurity training for every level, from school students to IT professionals: hands-on labs, international certification prep and a clear career path."
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
        home: "apptrainers home",
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
        title: `Learn cybersecurity <span class="hl">by doing</span>, not by memorizing.`,
        lead: "From school students to IT professionals: a path for every level, real hands-on labs, international certification prep, and a clear route to your first job in the field.",
        cta: "Register now",
        cta2: "Find your path",
        facts: {
          label: "Program highlights",
          levels: "levels",
          labs: "Hands-on labs in every course",
          ctf: "CTF competitions",
          certs: "International certification prep"
        },
        labLabel: "Example of a hands-on lab session: scanning services, finding an exposed file, then capturing the flag",
        toastTitle: "Flag captured",
        toastText: "+100 pts · Web 101 challenge",
        caption: "Example from a hands-on web application lab"
      },
      doors: {
        title: "Where do you start?",
        lead: "Pick the description that fits you best, and we'll point you to the right starting point.",
        levelLabel: "Level",
        forLabel: "For",
        startLabel: "Start with",
        cta: "Start here",
        teens: {
          level: "Level 1",
          title: "School students & teens",
          text: "Intensive, fun programs to discover how the internet works and how to protect it, including your first CTF challenge.",
          meta: "Ages 13–17",
          start: "Cyber Explorers"
        },
        beginners: {
          level: "Level 2",
          title: "Beginners & career switchers",
          text: "No technical background needed. We start from computers, networks and Linux, all the way to security fundamentals.",
          meta: "No prerequisites",
          start: "Cyber Foundations"
        },
        students: {
          level: "Level 3",
          title: "University students & graduates",
          text: "A career track that prepares you for your first security role, SOC analyst or junior pentester, with real projects for your portfolio.",
          meta: "Computing, engineering & more",
          start: "SOC Analyst or Junior Pentester"
        },
        pros: {
          level: "Levels 4–5",
          title: "IT professionals & developers",
          text: "Go deep into penetration testing, cloud security and secure coding, with focused prep for international certifications.",
          meta: "IT or development experience",
          start: "Specialist & certification tracks"
        }
      },
      courses: {
        title: "Courses & tracks",
        lead: "Every course is built around hands-on labs. Choose your level and see what fits.",
        tabsLabel: "Filter courses by audience",
        all: "All",
        level: "Level {n}",
        levelLabel: "Level",
        hours: "Hours",
        labs: "Labs",
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
        q5: { q: "Do I get a certificate?", a: `You receive <span data-proposal>an apptrainers completion certificate</span> when you finish a course, and the advanced tracks prepare you for international exams such as Security+, eJPT and OSCP.` },
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
        consent: "I agree to be contacted by apptrainers about my registration.",
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
        tagline: "Translating ideas to reality through innovative education.",
        label: "Footer links",
        rights: "All rights reserved."
      },
      draft: {
        mark: "Proposal, awaiting confirmation"
      }
    }
  },

  /* Audience order drives the tabs, the doors and the form. */
  audiences: {
    order: ["teens", "beginners", "students", "pros"],
    labels: {
      teens: { ar: "اليافعون", en: "Teens" },
      beginners: { ar: "المبتدئون", en: "Beginners" },
      students: { ar: "الجامعيون والخريجون", en: "Students & grads" },
      pros: { ar: "المحترفون", en: "Professionals" }
    }
  },

  levels: {
    1: { ar: "مستكشف", en: "Explorer" },
    2: { ar: "أساسيات", en: "Foundations" },
    3: { ar: "مهني", en: "Career" },
    4: { ar: "متخصص", en: "Specialist" },
    5: { ar: "شهادات", en: "Certification" }
  },

  tracks: {
    juniors: { ar: "الناشئون", en: "Juniors" },
    foundations: { ar: "الأساسيات", en: "Foundations" },
    red: { ar: "الفريق الأحمر", en: "Red Team" },
    blue: { ar: "الفريق الأزرق", en: "Blue Team" },
    cloud: { ar: "أمن السحابة", en: "Cloud Security" },
    cert: { ar: "الشهادات", en: "Certification" }
  },

  /* Proposed curriculum: 12 courses across 5 levels. Replace with the real list. */
  courses: [
    {
      id: "EXP-101", level: 1, audience: "teens", track: "juniors", hours: 30, labs: 10, cert: null,
      title: { ar: "مستكشفو السايبر", en: "Cyber Explorers" },
      desc: {
        ar: "برنامج مكثّف لليافعين: كيف يعمل الإنترنت، كلمات المرور والتحقق الثنائي، كشف رسائل التصيّد، وأول خطواتك في لينكس.",
        en: "An intensive program for teens: how the internet works, passwords and 2FA, spotting phishing, and your first steps in Linux."
      },
      skills: ["Linux", "Phishing", "2FA", "Networking"]
    },
    {
      id: "CTF-110", level: 1, audience: "teens", track: "juniors", hours: 20, labs: 15, cert: null,
      title: { ar: "تحديات CTF للناشئين", en: "CTF Juniors" },
      desc: {
        ar: "ألغاز أمنية ممتعة بأسلوب المسابقات في التشفير والويب والتحقيق الرقمي، تتعلّم منها التفكير كمخترق أخلاقي.",
        en: "Fun, competition-style security puzzles in cryptography, web and digital forensics that teach you to think like an ethical hacker."
      },
      skills: ["Cryptography", "Web", "Forensics", "OSINT"]
    },
    {
      id: "FND-101", level: 2, audience: "beginners", track: "foundations", hours: 40, labs: 16, cert: null,
      title: { ar: "أساسيات الأمن السيبراني", en: "Cyber Foundations" },
      desc: {
        ar: "من الصفر: مكوّنات الحاسوب، والشبكات وبروتوكولات TCP/IP، ولينكس وويندوز، ومفاهيم الأمن الأساسية والتهديدات الشائعة.",
        en: "From zero: computer basics, networking and TCP/IP, Linux and Windows, core security concepts and common threats."
      },
      skills: ["TCP/IP", "Linux CLI", "Windows", "CIA Triad"]
    },
    {
      id: "FND-120", level: 2, audience: "beginners", track: "foundations", hours: 36, labs: 14, cert: null,
      title: { ar: "الشبكات ولينكس للأمن", en: "Networking & Linux for Security" },
      desc: {
        ar: "افهم الشبكات كما يراها المهاجم والمدافع: تحليل الحزم، والخدمات، والصلاحيات، وكتابة السكربتات في لينكس.",
        en: "See networks the way attackers and defenders do: packet analysis, services, permissions and Bash scripting."
      },
      skills: ["Wireshark", "Nmap", "Bash", "Permissions"]
    },
    {
      id: "BT-201", level: 3, audience: "students", track: "blue", hours: 60, labs: 24, cert: "CySA+",
      title: { ar: "محلل مركز العمليات الأمنية", en: "SOC Analyst" },
      desc: {
        ar: "راقب واكتشف واستجب: تحليل السجلات، وأنظمة SIEM، والتعامل مع الحوادث، واستخبارات التهديدات.",
        en: "Monitor, detect and respond: log analysis, SIEM, incident handling and threat intelligence."
      },
      skills: ["SIEM", "Splunk", "Incident Response", "MITRE ATT&CK"]
    },
    {
      id: "RT-201", level: 3, audience: "students", track: "red", hours: 60, labs: 26, cert: "eJPT",
      title: { ar: "مختبِر اختراق مبتدئ", en: "Junior Penetration Tester" },
      desc: {
        ar: "منهجية اختبار الاختراق من الاستطلاع حتى التقرير: ثغرات الويب، واستغلال الخدمات، ورفع الصلاحيات.",
        en: "Pentesting methodology from recon to report: web vulnerabilities, service exploitation and privilege escalation."
      },
      skills: ["Nmap", "Burp Suite", "OWASP Top 10", "Reporting"]
    },
    {
      id: "RT-310", level: 4, audience: "pros", track: "red", hours: 48, labs: 22, cert: null,
      title: { ar: "اختبار اختراق تطبيقات الويب", en: "Web Application Pentesting" },
      desc: {
        ar: "تعمّق في هجمات الويب الحديثة: المصادقة والجلسات، والحقن، وواجهات API، وثغرات منطق الأعمال.",
        en: "Go deep into modern web attacks: authentication and sessions, injection, APIs and business-logic flaws."
      },
      skills: ["Burp Suite", "API Security", "SQLi", "SSRF"]
    },
    {
      id: "CL-320", level: 4, audience: "pros", track: "cloud", hours: 40, labs: 18, cert: null,
      title: { ar: "أمن السحابة", en: "Cloud Security" },
      desc: {
        ar: "أمّن البنى السحابية في AWS وAzure: إدارة الهويات والصلاحيات، والإعدادات الخاطئة، والمراقبة والامتثال.",
        en: "Secure AWS and Azure environments: identity and access management, misconfigurations, monitoring and compliance."
      },
      skills: ["AWS", "Azure", "IAM", "CSPM"]
    },
    {
      id: "DV-330", level: 4, audience: "pros", track: "blue", hours: 32, labs: 12, cert: null,
      title: { ar: "البرمجة الآمنة للمطورين", en: "Secure Coding for Developers" },
      desc: {
        ar: "للمبرمجين: اكتب كوداً آمناً من البداية، وراجع الكود أمنياً، وابنِ دورة تطوير آمنة لفريقك.",
        en: "For developers: write secure code from the start, review code for security, and build a secure SDLC for your team."
      },
      skills: ["OWASP ASVS", "Code Review", "SAST", "Secure SDLC"]
    },
    {
      id: "BT-340", level: 4, audience: "pros", track: "blue", hours: 40, labs: 16, cert: null,
      title: { ar: "التحقيق الرقمي والاستجابة للحوادث", en: "Digital Forensics & Incident Response" },
      desc: {
        ar: "حلّل الأدلة الرقمية، وتتبّع المهاجمين، وقُد الاستجابة للحوادث من الاحتواء حتى التعافي.",
        en: "Analyze digital evidence, trace attackers and lead incident response from containment to recovery."
      },
      skills: ["DFIR", "Volatility", "Autopsy", "Threat Hunting"]
    },
    {
      id: "CR-410", level: 5, audience: "pros", track: "cert", hours: 30, labs: 8, cert: "Security+",
      title: { ar: "التحضير لشهادة Security+\u200E", en: "CompTIA Security+ Prep" },
      desc: {
        ar: "مراجعة مركّزة لكل محاور الاختبار، مع اختبارات تجريبية وخطة دراسة واضحة حتى يوم الامتحان.",
        en: "A focused review of every exam domain, with practice tests and a clear study plan up to exam day."
      },
      skills: ["Exam Domains", "Practice Tests", "Study Plan"]
    },
    {
      id: "CR-450", level: 5, audience: "pros", track: "cert", hours: 80, labs: 30, cert: "OSCP",
      title: { ar: "معسكر التحضير لـ OSCP", en: "OSCP Prep Bootcamp" },
      desc: {
        ar: "معسكر مكثّف للمتقدّمين إلى OSCP: آلات تدريب بأسلوب الاختبار، وActive Directory، وكتابة تقارير احترافية.",
        en: "An intensive bootcamp for OSCP candidates: exam-style practice machines, Active Directory and professional reporting."
      },
      skills: ["Active Directory", "PrivEsc", "Pivoting", "Reporting"]
    }
  ]
};
