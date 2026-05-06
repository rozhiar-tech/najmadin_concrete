document.documentElement.classList.add("js");

const STORAGE_KEY = "najmadin_concrete_language";
const RTL_LANGUAGES = new Set(["ar", "ku"]);

const translations = {
  en: {
    "meta.home.title": "Najmadin Concrete | Building Iraq's Future Since 2002",
    "meta.home.description":
      "Najmadin Concrete is a leading ready-mix concrete and aggregate supplier in the Kurdistan Region of Iraq, delivering durable solutions since 2002.",
    "meta.about.title": "About Najmadin Concrete",
    "meta.about.description":
      "Learn about Najmadin Concrete, its 20+ year legacy, operational values, and commitment to quality, safety, and reliable delivery.",
    "meta.services.title": "Services | Najmadin Concrete",
    "meta.services.description":
      "Explore Najmadin Concrete services, from ready-mix production and custom mix design to aggregate supply, logistics, and technical consultation.",
    "meta.projects.title": "Projects | Najmadin Concrete",
    "meta.projects.description":
      "See landmark developments supplied by Najmadin Concrete across the Kurdistan Region of Iraq.",
    "meta.clients.title": "Clients | Najmadin Concrete",
    "meta.clients.description":
      "Najmadin Concrete supports major developers, hospitality brands, and strategic projects across the region.",
    "meta.contact.title": "Contact | Najmadin Concrete",
    "meta.contact.description":
      "Contact Najmadin Concrete for project inquiries, concrete supply requirements, and technical support.",
    "common.home_label": "Najmadin Concrete Home",
    "common.menu": "Toggle navigation",
    "common.language_label": "Language",
    "brand.title": "Najmadin",
    "brand.subtitle": "Concrete",
    "nav.home": "Home",
    "nav.about": "About",
    "nav.services": "Services",
    "nav.projects": "Projects",
    "nav.clients": "Clients",
    "nav.contact": "Contact",
    "button.projects": "View Projects",
    "button.contact": "Contact Us",
    "button.services": "Our Services",
    "button.all_projects": "See All Projects",
    "button.all_clients": "See All Clients",
    "button.inquiry": "Send Inquiry",
    "button.about": "Learn About Us",
    "common.location_region": "Kurdistan Region, Iraq",
    "common.location_city": "Sulaymaniyah, Kurdistan Region, Iraq",
    "common.stats.years": "Years In Business Since 2002",
    "common.stats.people": "Trained Professionals",
    "common.stats.grades": "Concrete Grades Up To 100 N/mm2",
    "common.stats.clients": "Major Clients",
    "footer.tagline": "Building Tomorrow, Today.",
    "footer.rights": "Najmadin Concrete. All rights reserved.",
    "footer.navigation": "Navigation",
    "footer.contact": "Contact",
    "home.hero.eyebrow":
      "Leading Concrete Supplier In The Kurdistan Region Of Iraq",
    "home.hero.title": "Building Iraq's Future Since 2002",
    "home.hero.body":
      "Najmadin Concrete delivers ready-mix concrete, aggregates, technical support, and dependable site logistics for ambitious developments across the region.",
    "home.hero.trust.primary": "21 years of experience in trust",
    "home.hero.badge1": "20+ Years Of Proven Excellence",
    "home.hero.badge2": "200+ Trained Professionals",
    "home.hero.badge3": "Remote Site Delivery",
    "home.hero.panel_title": "Built For High-Demand Sites",
    "home.hero.panel1.title": "Advanced Mixing Precision",
    "home.hero.panel1.body":
      "Consistency and performance designed into every batch.",
    "home.hero.panel2.title": "Reliable Logistics",
    "home.hero.panel2.body":
      "Delivery coordination that protects demanding schedules.",
    "home.hero.panel3.title": "Local Industrial Strength",
    "home.hero.panel3.body":
      "100% locally manufactured output backed by technical support.",
    "home.story.eyebrow": "Why Najmadin Concrete",
    "home.story.title": "Industrial Strength. Local Precision.",
    "home.story.visual1": "Industrial Strength.",
    "home.story.visual2": "Local Precision.",
    "home.story.body":
      "Founded in 2002, Najmadin Concrete has grown into one of Iraq's leading ready-mix concrete and aggregate suppliers. Our reputation is built on dependable quality, on-time delivery, and the technical capability to support projects from urban centers to remote sites.",
    "home.story.quote":
      "Concrete is more than a mixture. It is a durable solution that keeps us connected to every client we serve.",
    "home.about.title": "Two Decades Of Building Kurdistan's Infrastructure",
    "home.about.body":
      "Founded in 2002, Najmadin Concrete has grown into the region's most trusted ready-mix concrete and aggregate supplier. From structural towers to sprawling residential communities, we deliver the material backbone of Kurdistan's construction sector.",
    "home.vision.eyebrow": "Our Vision",
    "home.vision.title":
      "A Stronger Kurdistan Built On Concrete We Stand Behind",
    "home.vision.body":
      "We exist to give builders the material confidence they need - on schedule, to specification, on every project that matters.",
    "home.vision.card1.title": "Quality First",
    "home.vision.card1.body":
      "Every mix is controlled, tested, and delivered to specification - from 15 N/mm2 to 100 N/mm2 with disciplined 28-day strength monitoring.",
    "home.vision.card2.title": "Built To Last",
    "home.vision.card2.body":
      "Our concrete supports the structures that define Kurdistan's cities - towers, communities, hotels, and institutions engineered to endure.",
    "home.vision.card3.title": "Always Reliable",
    "home.vision.card3.body":
      "On-time delivery, technical precision, and a team that stays engaged from inquiry through final placement on even the most demanding sites.",
    "home.action.project.title": "A Project",
    "home.action.project.body":
      "Explore landmark developments supplied by Najmadin Concrete across the Kurdistan Region.",
    "home.action.service.title": "A Service",
    "home.action.service.body":
      "Ready-mix concrete, aggregates, and remote site delivery solutions for every grade.",
    "home.action.partnership.title": "A Partnership",
    "home.action.partnership.body":
      "Tell us your requirements and our team will guide every step from mix design to delivery.",
    "home.services.eyebrow": "Featured Services",
    "home.services.title": "What We Deliver",
    "home.services.body":
      "From structural-grade ready-mix to aggregate supply and technical guidance, our teams support performance from the plant to the project site.",
    "home.services.card1.title": "Ready-Mix Concrete",
    "home.services.card1.body":
      "All grades from 15 N/mm2 to 100 N/mm2 with disciplined production control.",
    "home.services.card2.title": "Aggregates & Gravel",
    "home.services.card2.body":
      "Stable upstream material supply that supports consistency and delivery speed.",
    "home.services.card3.title": "Remote Site Delivery",
    "home.services.card3.body":
      "Logistics capability built for hard-to-reach locations and demanding schedules.",
    "home.projects.eyebrow": "Featured Projects",
    "home.projects.title": "Concrete Behind Landmark Development",
    "home.projects.body":
      "Najmadin Concrete supports major residential, hospitality, and mixed-use developments across the Kurdistan Region of Iraq.",
    "home.clients.eyebrow": "Selected Clients",
    "home.clients.title": "Trusted By Leading Developers",
    "home.clients.body":
      "Our client relationships reflect long-term trust, operational consistency, and confidence in our delivery capability.",
    "home.cta.title": "Need A Concrete Partner For Your Next Build?",
    "home.cta.body":
      "Tell us about your site, required grades, timeline, and delivery conditions. Our team will guide the next step.",
    "about.hero.eyebrow": "About Najmadin Concrete",
    "about.hero.title": "A Company Built On Trust, Quality, And Delivery",
    "about.hero.body":
      "Najmadin Concrete combines long-term industry experience, trained professionals, advanced mixing systems, and disciplined logistics to serve the construction sector with confidence.",
    "about.story.eyebrow": "Our Story",
    "about.story.title": "More Than Two Decades Of Proven Performance",
    "about.story.p1":
      "Since 2002, Najmadin Concrete has operated with a clear goal: deliver dependable concrete solutions that support the region's most ambitious structures.",
    "about.story.p2":
      "Today the company stands among Iraq's leading producers and suppliers of ready-mix concrete and aggregates, backed by 200+ trained professionals from diverse technical and operational backgrounds.",
    "about.story.p3":
      "We are committed to customer satisfaction, consistent product quality, and on-time delivery, including to remote locations where dependable coordination matters most.",
    "about.story.quote": "Built to last, like the structures we create.",
    "about.values.eyebrow": "Core Values",
    "about.values.title": "The Standards That Shape Our Work",
    "about.values.body":
      "Every project is supported by disciplined quality control, reliable execution, and a culture of continuous improvement.",
    "about.values.card1.title": "Innovation & Quality",
    "about.values.card1.body":
      "Latest production technology and disciplined controls ensure durable, consistent performance.",
    "about.values.card2.title": "On-Time Delivery",
    "about.values.card2.body":
      "Our logistics teams are organized to reach sites on schedule, including difficult routes and remote conditions.",
    "about.values.card3.title": "Continuous Improvement",
    "about.values.card3.body":
      "We constantly strengthen systems, training, and collaboration to exceed industry expectations.",
    "about.qhse.eyebrow": "QHSE",
    "about.qhse.title": "Quality, Health, Safety & Environment",
    "about.qhse.body":
      "Najmadin Concrete maintains a strict QHSE policy enforced at leadership level, with safety, legal compliance, environmental protection, and team accountability embedded into operations.",
    "about.qhse.item1": "Strict QHSE policy enforced at management level.",
    "about.qhse.item2":
      "Zero time-lost injury target across operations and sites.",
    "about.qhse.item3":
      "Pollution prevention and environmental preservation focus.",
    "about.qhse.item4":
      "Full compliance with legal and regulatory requirements.",
    "about.qhse.item5": "Employee empowerment and team-based problem solving.",
    "about.ops.eyebrow": "Operational Strength",
    "about.ops.title": "Built Around People, Process, And Precision",
    "about.ops.body":
      "Our reputation reflects the strength of our team, while our concrete reflects the dedication of those who produce it.",
    "about.ops.card1.title": "20+ Years Of Delivery",
    "about.ops.card1.body":
      "A long operating history shaped by real project conditions and continuous learning.",
    "about.ops.card2.title": "200+ Skilled Professionals",
    "about.ops.card2.body":
      "A trained workforce that supports production, dispatch, quality, and technical coordination.",
    "about.ops.card3.title": "Remote Site Capability",
    "about.ops.card3.body":
      "Dependable supply even where access, timing, and terrain create extra pressure.",
    "services.hero.eyebrow": "Services",
    "services.hero.title": "Complete Concrete Supply Solutions",
    "services.hero.body":
      "Najmadin Concrete supports projects with ready-mix production, material supply, technical guidance, and dependable logistics from plant to site.",
    "services.grid.eyebrow": "What We Offer",
    "services.grid.title":
      "Production, Supply, And Technical Support In One System",
    "services.grid.body":
      "Our service model is built to reduce friction across the concrete supply chain while protecting quality and schedule performance.",
    "services.card1.title": "Ready-Mix Concrete",
    "services.card1.body":
      "All grades from 15 N/mm2 to 100 N/mm2 with controlled production and 28-day strength discipline.",
    "services.card2.title": "Aggregates & Gravel Supply",
    "services.card2.body":
      "Consistent aggregate sourcing that supports mix quality and stable operations.",
    "services.card3.title": "Remote Site Delivery",
    "services.card3.body":
      "Reliable site logistics for hard-to-reach locations and demanding project conditions.",
    "services.card4.title": "Custom Mix Design",
    "services.card4.body":
      "Tailored mix solutions aligned with structural, environmental, and site-specific needs.",
    "services.card5.title": "Quality-Controlled Production",
    "services.card5.body":
      "100% locally manufactured output supported by disciplined process checks and repeatability.",
    "services.card6.title": "Technical Consultation",
    "services.card6.body":
      "Specialized advice from teams who understand site performance, concrete behavior, and delivery constraints.",
    "services.standards":
      "Compliant with ASTM · ACI · BS · IS · EN international and national standards",
    "services.process.eyebrow": "How We Work",
    "services.process.title": "A Clear Path From Requirement To Delivery",
    "services.process.body":
      "We simplify coordination by aligning technical review, production planning, and site logistics in one sequence.",
    "services.process.step1.title": "Assess",
    "services.process.step1.body":
      "We study project requirements, site conditions, grade needs, and delivery timing.",
    "services.process.step2.title": "Produce",
    "services.process.step2.body":
      "We prepare the right mix with quality-controlled production and documented consistency.",
    "services.process.step3.title": "Deliver",
    "services.process.step3.body":
      "We coordinate dispatch and site delivery to protect schedule and placement performance.",
    "services.support.eyebrow": "Technical Support",
    "services.support.title": "Support That Continues Beyond The Plant",
    "services.support.body":
      "Our teams stay engaged beyond production, helping clients align concrete selection, timing, and execution with real site conditions.",
    "services.support.lead":
      "Whether the requirement is high-strength concrete, precise coordination, or delivery to a difficult location, Najmadin Concrete is structured to respond with speed and discipline.",
    "projects.hero.eyebrow": "Projects",
    "projects.hero.title": "Landmark Work Across The Region",
    "projects.hero.body":
      "Najmadin Concrete contributes to major developments with dependable supply, technical coordination, and product consistency where performance matters most.",
    "projects.grid.eyebrow": "Project Showcase",
    "projects.grid.title": "Selected Developments",
    "projects.grid.body":
      "These projects reflect the scale, diversity, and delivery complexity that our teams support every day.",
    "projects.kicker.flagship": "Flagship High-Rise",
    "projects.kicker.urban": "Urban Development",
    "projects.kicker.residential": "Residential",
    "projects.kicker.mixed": "Mixed Use",
    "projects.kicker.hospitality": "Hospitality",
    "projects.kicker.commercial": "Commercial",
    "projects.kicker.expansion": "Residential Expansion",
    "projects.kicker.housing": "Urban Housing",
    "projects.excellence.eyebrow": "Why It Matters",
    "projects.excellence.title": "Execution Strength Behind Every Delivery",
    "projects.excellence.body":
      "Project performance is supported by technical depth, continuous improvement, and a strategic approach to changing construction demands.",
    "projects.ex1.title": "Specialized Technical Teams",
    "projects.ex1.body":
      "We translate structural requirements into dependable production outcomes backed by operational discipline.",
    "projects.ex2.title": "Continuous Improvement Across Departments",
    "projects.ex2.body":
      "From production to logistics and client communication, systems are constantly refined to improve performance.",
    "projects.ex3.title": "Strategic Delivery Capability",
    "projects.ex3.body":
      "We align quality, responsiveness, and capacity with the needs of each project and each phase of work.",
    "clients.hero.eyebrow": "Clients",
    "clients.hero.title": "Trusted By Developers, Brands, And Institutions",
    "clients.hero.body":
      "Our client base reflects long-term confidence in our quality, dependability, and ability to perform under demanding project conditions.",
    "clients.wall.eyebrow": "Client Wall",
    "clients.wall.title": "A Portfolio Built On Repeat Trust",
    "clients.wall.body":
      "Najmadin Concrete supports major names in residential, hospitality, healthcare, and mixed-use development.",
    "clients.sectors.eyebrow": "Where We Work",
    "clients.sectors.title": "Supporting Diverse Construction Sectors",
    "clients.sectors.body":
      "Our supply model adapts across development types, site conditions, and program pressures.",
    "clients.sector1.title": "Residential & Mixed-Use",
    "clients.sector1.body":
      "Large communities, towers, and urban developments requiring reliable daily coordination.",
    "clients.sector2.title": "Hospitality & Commercial",
    "clients.sector2.body":
      "Hotels, malls, and commercial projects where timing, finish, and continuity matter.",
    "clients.sector3.title": "Strategic City Projects",
    "clients.sector3.body":
      "Developments that demand technical accuracy, schedule discipline, and long-term trust.",
    "clients.proof.eyebrow": "Proof Points",
    "clients.proof.title": "Why Clients Return",
    "clients.proof.body":
      "Trusted quality, local manufacturing strength, and disciplined delivery keep long-term partnerships strong.",
    "clients.proof.local": "Local Manufacturing",
    "contact.hero.eyebrow": "Contact",
    "contact.hero.title": "Let's Build Together",
    "contact.hero.body":
      "Share your project scope, site location, grade requirements, and timeline. Najmadin Concrete will help define the next step.",
    "contact.form.eyebrow": "Project Inquiry",
    "contact.form.title": "Start The Conversation",
    "contact.form.body":
      "This static site version prepares your request and opens your email client with the details prefilled.",
    "contact.form.name": "Name",
    "contact.form.name_ph": "Your full name",
    "contact.form.company": "Company",
    "contact.form.company_ph": "Company name",
    "contact.form.phone": "Phone",
    "contact.form.phone_ph": "+964 770 000 0000",
    "contact.form.message": "Message",
    "contact.form.message_ph":
      "Tell us about your project, site location, grade needs, and delivery timeline.",
    "contact.form.submit": "Send Inquiry",
    "contact.form.note":
      "Current phone and email values are placeholders until official company details are supplied.",
    "contact.form.validation": "Please complete all fields before submitting.",
    "contact.form.opening": "Opening your email client...",
    "contact.form.subject": "Project Inquiry | Najmadin Concrete",
    "contact.info.location_label": "Location",
    "contact.info.phone_label": "Phone",
    "contact.info.email_label": "Email",
    "contact.faq.eyebrow": "FAQ",
    "contact.faq.title": "Common Questions",
    "contact.faq.body":
      "A few quick answers to the questions clients often ask before the first coordination call.",
    "contact.faq.q1": "Do you serve remote sites?",
    "contact.faq.a1":
      "Yes. Delivery planning is structured to support difficult routes and hard-to-reach locations.",
    "contact.faq.q2": "What grades do you supply?",
    "contact.faq.a2":
      "Najmadin Concrete supplies grades from 15 N/mm2 to 100 N/mm2 based on project requirements.",
    "contact.faq.q3": "Do you support technical coordination?",
    "contact.faq.a3":
      "Yes. Our teams provide mix guidance, production support, and delivery coordination before and during execution.",
  },
  ar: {
    "meta.home.title": "نجمدين كونكريت | نبني مستقبل العراق منذ 2002",
    "meta.home.description":
      "نجمدين كونكريت من الشركات الرائدة في تجهيز الخرسانة الجاهزة والركام في إقليم كردستان العراق، بخبرة موثوقة منذ عام 2002.",
    "meta.about.title": "من نحن | نجمدين كونكريت",
    "meta.about.description":
      "تعرّف على نجمدين كونكريت، إرثها الممتد لأكثر من 20 عاماً، وقيمها التشغيلية والتزامها بالجودة والسلامة والتسليم الموثوق.",
    "meta.services.title": "الخدمات | نجمدين كونكريت",
    "meta.services.description":
      "استكشف خدمات نجمدين كونكريت من إنتاج الخرسانة الجاهزة وتصميم الخلطات إلى توريد الركام والخدمات اللوجستية والاستشارات الفنية.",
    "meta.projects.title": "المشاريع | نجمدين كونكريت",
    "meta.projects.description":
      "اطّلع على أبرز المشاريع والمعالم العمرانية التي دعمتها نجمدين كونكريت في إقليم كردستان العراق.",
    "meta.clients.title": "العملاء | نجمدين كونكريت",
    "meta.clients.description":
      "تدعم نجمدين كونكريت كبار المطورين والعلامات الفندقية والمشاريع الاستراتيجية في المنطقة.",
    "meta.contact.title": "اتصل بنا | نجمدين كونكريت",
    "meta.contact.description":
      "تواصل مع نجمدين كونكريت للاستفسارات الخاصة بالمشاريع ومتطلبات توريد الخرسانة والدعم الفني.",
    "common.home_label": "الصفحة الرئيسية لنجمدين كونكريت",
    "common.menu": "فتح أو إغلاق التنقل",
    "common.language_label": "اللغة",
    "brand.title": "نجمدين",
    "brand.subtitle": "كونكريت",
    "nav.home": "الرئيسية",
    "nav.about": "من نحن",
    "nav.services": "الخدمات",
    "nav.projects": "المشاريع",
    "nav.clients": "العملاء",
    "nav.contact": "اتصل بنا",
    "button.projects": "استعرض المشاريع",
    "button.contact": "تواصل معنا",
    "button.services": "خدماتنا",
    "button.all_projects": "كل المشاريع",
    "button.all_clients": "كل العملاء",
    "button.inquiry": "أرسل استفساراً",
    "button.about": "تعرف علينا",
    "common.location_region": "إقليم كردستان، العراق",
    "common.location_city": "السليمانية، إقليم كردستان، العراق",
    "common.stats.years": "سنوات في العمل منذ 2002",
    "common.stats.people": "مهنيون مدربون",
    "common.stats.grades": "درجات خرسانة حتى 100 نيوتن/مم2",
    "common.stats.clients": "عميل رئيسي",
    "footer.tagline": "نبني الغد، اليوم.",
    "footer.rights": "نجمدين كونكريت. جميع الحقوق محفوظة.",
    "footer.navigation": "التنقل",
    "footer.contact": "التواصل",
    "home.hero.eyebrow": "مورد خرسانة رائد في إقليم كردستان العراق",
    "home.hero.title": "نبني مستقبل العراق منذ 2002",
    "home.hero.body":
      "توفر نجمدين كونكريت الخرسانة الجاهزة والركام والدعم الفني والخدمات اللوجستية الموثوقة للمشاريع الطموحة في مختلف أنحاء المنطقة.",
    "home.hero.trust.primary": "٢١ عاماً من الخبرة المبنية على الثقة",
    "home.hero.badge1": "أكثر من 20 عاماً من التميز",
    "home.hero.badge2": "أكثر من 200 محترف مدرب",
    "home.hero.badge3": "توصيل إلى المواقع البعيدة",
    "home.hero.panel_title": "مهيأة للمواقع عالية المتطلبات",
    "home.hero.panel1.title": "دقة متقدمة في الخلط",
    "home.hero.panel1.body": "ثبات الأداء والجودة في كل دفعة إنتاج.",
    "home.hero.panel2.title": "لوجستيات موثوقة",
    "home.hero.panel2.body": "تنسيق تسليم يحمي الجداول الزمنية الصعبة.",
    "home.hero.panel3.title": "قوة صناعية محلية",
    "home.hero.panel3.body": "إنتاج محلي بالكامل مدعوم بإسناد فني منظم.",
    "home.story.eyebrow": "لماذا نجمدين كونكريت",
    "home.story.title": "قوة صناعية. دقة محلية.",
    "home.story.visual1": "قوة صناعية.",
    "home.story.visual2": "دقة محلية.",
    "home.story.body":
      "منذ تأسيسها عام 2002، نمت نجمدين كونكريت لتصبح إحدى الشركات الرائدة في العراق في مجال الخرسانة الجاهزة والركام. سمعتنا مبنية على الجودة الموثوقة والتسليم في الوقت المحدد والقدرة الفنية على دعم المشاريع من المراكز الحضرية إلى المواقع النائية.",
    "home.story.quote":
      "الخرسانة أكثر من مجرد خلطة، إنها حل متين يربطنا بكل عميل نخدمه.",
    "home.about.title": "عقدان من بناء البنية التحتية في كردستان",
    "home.about.body":
      "منذ تأسيسها عام 2002، نمت نجمدين كونكريت لتصبح أكثر موردي الخرسانة الجاهزة والركام ثقة في المنطقة. من الأبراج الإنشائية إلى المجمعات السكنية الواسعة، نوفر المادة الأساسية لقطاع البناء في كردستان.",
    "home.vision.eyebrow": "رؤيتنا",
    "home.vision.title": "كردستان أقوى مبنية على خرسانة نثق بها ونقف خلفها",
    "home.vision.body":
      "نحن موجودون لمنح البنائين الثقة المادية التي يحتاجونها - في الوقت المحدد، وفق المواصفات، وفي كل مشروع مهم.",
    "home.vision.card1.title": "الجودة أولاً",
    "home.vision.card1.body":
      "كل خلطة يتم ضبطها وفحصها وتسليمها وفق المواصفات - من 15 نيوتن/مم2 إلى 100 نيوتن/مم2 مع متابعة منظمة لقوة 28 يوماً.",
    "home.vision.card2.title": "مصممة لتدوم",
    "home.vision.card2.body":
      "تدعم خرسانتنا المنشآت التي ترسم مدن كردستان - الأبراج والمجتمعات والفنادق والمؤسسات المصممة للاستمرار.",
    "home.vision.card3.title": "اعتمادية دائمة",
    "home.vision.card3.body":
      "تسليم في الوقت المحدد، ودقة فنية، وفريق يبقى متابعاً من الاستفسار حتى الصب النهائي في أكثر المواقع تطلباً.",
    "home.action.project.title": "مشروع",
    "home.action.project.body":
      "استكشف المشاريع البارزة التي زودتها نجمدين كونكريت في أنحاء إقليم كردستان.",
    "home.action.service.title": "خدمة",
    "home.action.service.body":
      "حلول الخرسانة الجاهزة والركام والتوصيل إلى المواقع البعيدة لكل درجة.",
    "home.action.partnership.title": "شراكة",
    "home.action.partnership.body":
      "أخبرنا بمتطلباتك وسيرشدك فريقنا في كل خطوة من تصميم الخلطة إلى التسليم.",
    "home.services.eyebrow": "خدمات مختارة",
    "home.services.title": "ما الذي نقدمه",
    "home.services.body":
      "من الخرسانة الجاهزة الإنشائية إلى توريد الركام والإسناد الفني، تدعم فرقنا الأداء من المصنع حتى موقع المشروع.",
    "home.services.card1.title": "الخرسانة الجاهزة",
    "home.services.card1.body":
      "جميع الدرجات من 15 إلى 100 نيوتن/مم2 مع ضبط إنتاج منظم.",
    "home.services.card2.title": "الركام والحصى",
    "home.services.card2.body":
      "توريد مستقر للمواد الأولية يحافظ على الجودة وسرعة التوصيل.",
    "home.services.card3.title": "التوصيل للمواقع البعيدة",
    "home.services.card3.body":
      "قدرة لوجستية للمناطق صعبة الوصول والجداول الزمنية الحساسة.",
    "home.projects.eyebrow": "مشاريع مميزة",
    "home.projects.title": "الخرسانة خلف المشاريع البارزة",
    "home.projects.body":
      "تدعم نجمدين كونكريت مشاريع سكنية وفندقية ومتعددة الاستخدامات في مختلف أنحاء إقليم كردستان العراق.",
    "home.clients.eyebrow": "عملاء مختارون",
    "home.clients.title": "ثقة كبار المطورين",
    "home.clients.body":
      "تعكس علاقاتنا مع العملاء الثقة طويلة الأمد والثبات التشغيلي والثقة بقدرتنا على التسليم.",
    "home.cta.title": "هل تحتاج إلى شريك خرسانة لمشروعك القادم؟",
    "home.cta.body":
      "شاركنا تفاصيل الموقع والدرجات المطلوبة والجدول الزمني وظروف التسليم، وسيرشدك فريقنا إلى الخطوة التالية.",
    "about.hero.eyebrow": "عن نجمدين كونكريت",
    "about.hero.title": "شركة بُنيت على الثقة والجودة والتسليم",
    "about.hero.body":
      "تجمع نجمدين كونكريت بين خبرة صناعية طويلة الأمد وفِرق مدربة وأنظمة خلط متقدمة ولوجستيات منضبطة لخدمة قطاع الإنشاءات بثقة عالية.",
    "about.story.eyebrow": "قصتنا",
    "about.story.title": "أكثر من عقدين من الأداء الموثوق",
    "about.story.p1":
      "منذ عام 2002، تعمل نجمدين كونكريت بهدف واضح: تقديم حلول خرسانية موثوقة تدعم أكثر الهياكل طموحاً في المنطقة.",
    "about.story.p2":
      "واليوم تُعد الشركة من بين أبرز المنتجين والموردين للخرسانة الجاهزة والركام في العراق، بدعم من أكثر من 200 محترف مدرب من خلفيات تشغيلية وفنية متنوعة.",
    "about.story.p3":
      "نلتزم برضا العملاء وثبات جودة المنتج والتسليم في الوقت المحدد، بما في ذلك المواقع البعيدة حيث تكون الدقة في التنسيق ضرورية للغاية.",
    "about.story.quote": "بُنيت لتدوم، مثل الهياكل التي نصنعها.",
    "about.values.eyebrow": "القيم الأساسية",
    "about.values.title": "المعايير التي توجه عملنا",
    "about.values.body":
      "كل مشروع تدعمه مراقبة جودة منضبطة وتنفيذ موثوق وثقافة تحسين مستمر.",
    "about.values.card1.title": "الابتكار والجودة",
    "about.values.card1.body":
      "تقنيات إنتاج حديثة وضوابط صارمة تضمن أداءً متيناً ومتسقاً.",
    "about.values.card2.title": "التسليم في الوقت",
    "about.values.card2.body":
      "فرقنا اللوجستية منظمة للوصول إلى المواقع في الوقت المحدد، حتى في الظروف الصعبة.",
    "about.values.card3.title": "التحسين المستمر",
    "about.values.card3.body":
      "نعزز الأنظمة والتدريب والتنسيق باستمرار لتجاوز توقعات القطاع.",
    "about.qhse.eyebrow": "الجودة والصحة والسلامة والبيئة",
    "about.qhse.title": "الجودة، الصحة، السلامة والبيئة",
    "about.qhse.body":
      "تتبع نجمدين كونكريت سياسة صارمة في الجودة والصحة والسلامة والبيئة تُطبَّق على مستوى الإدارة العليا، مع ترسيخ السلامة والالتزام القانوني وحماية البيئة والمسؤولية الجماعية في العمليات اليومية.",
    "about.qhse.item1":
      "سياسة صارمة للجودة والصحة والسلامة والبيئة على مستوى الإدارة.",
    "about.qhse.item2":
      "هدف واضح للوصول إلى صفر إصابات وقت ضائع في المواقع والعمليات.",
    "about.qhse.item3": "تركيز على منع التلوث والحفاظ على البيئة.",
    "about.qhse.item4": "التزام كامل بالمتطلبات القانونية والتنظيمية.",
    "about.qhse.item5": "تمكين العاملين وحل المشكلات بروح الفريق.",
    "about.ops.eyebrow": "القوة التشغيلية",
    "about.ops.title": "قائمة على الإنسان والعملية والدقة",
    "about.ops.body":
      "تعكس سمعتنا قوة فريقنا، بينما تعكس خرسانتنا التزام من يقفون خلف إنتاجها.",
    "about.ops.card1.title": "أكثر من 20 عاماً من التنفيذ",
    "about.ops.card1.body":
      "سجل تشغيلي طويل تشكّل من خلال ظروف المشاريع الحقيقية والتعلم المستمر.",
    "about.ops.card2.title": "أكثر من 200 مختص",
    "about.ops.card2.body":
      "كوادر مدربة تدعم الإنتاج والجودة والتنسيق الفني والتوزيع.",
    "about.ops.card3.title": "قدرة على خدمة المواقع البعيدة",
    "about.ops.card3.body":
      "توريد موثوق حتى عندما يفرض الوصول والوقت والتضاريس ضغطاً إضافياً.",
    "services.hero.eyebrow": "الخدمات",
    "services.hero.title": "حلول متكاملة لتوريد الخرسانة",
    "services.hero.body":
      "تدعم نجمدين كونكريت المشاريع عبر إنتاج الخرسانة الجاهزة وتوريد المواد والإرشاد الفني والخدمات اللوجستية الموثوقة من المصنع إلى الموقع.",
    "services.grid.eyebrow": "ما نقدمه",
    "services.grid.title": "الإنتاج والتوريد والدعم الفني ضمن منظومة واحدة",
    "services.grid.body":
      "بُني نموذج خدماتنا لتقليل التعقيد في سلسلة توريد الخرسانة مع حماية الجودة والانضباط الزمني.",
    "services.card1.title": "الخرسانة الجاهزة",
    "services.card1.body":
      "جميع الدرجات من 15 إلى 100 نيوتن/مم2 مع ضبط إنتاج واختبارات مقاومة منظمة.",
    "services.card2.title": "توريد الركام والحصى",
    "services.card2.body":
      "توريد منتظم للركام يدعم جودة الخلطة واستقرار العمليات.",
    "services.card3.title": "التوصيل للمواقع البعيدة",
    "services.card3.body":
      "خدمات لوجستية موثوقة للمواقع صعبة الوصول والظروف التشغيلية المعقدة.",
    "services.card4.title": "تصميم خلطات مخصصة",
    "services.card4.body":
      "حلول خلط مصممة وفق المتطلبات الإنشائية والبيئية وظروف الموقع.",
    "services.card5.title": "إنتاج مضبوط الجودة",
    "services.card5.body":
      "إنتاج محلي بالكامل مدعوم بإجراءات تحقق منضبطة وتكرارية موثوقة.",
    "services.card6.title": "استشارات فنية",
    "services.card6.body":
      "إسناد متخصص من فرق تفهم أداء الخرسانة ومتطلبات الموقع وقيود التسليم.",
    "services.standards":
      "متوافق مع المعايير الدولية والوطنية ASTM · ACI · BS · IS · EN",
    "services.process.eyebrow": "آلية العمل",
    "services.process.title": "مسار واضح من المتطلب إلى التسليم",
    "services.process.body":
      "نبسط التنسيق من خلال مواءمة المراجعة الفنية وخطة الإنتاج والخدمات اللوجستية في تسلسل واحد.",
    "services.process.step1.title": "التقييم",
    "services.process.step1.body":
      "نراجع متطلبات المشروع وظروف الموقع والدرجات المطلوبة وتوقيت التسليم.",
    "services.process.step2.title": "الإنتاج",
    "services.process.step2.body":
      "نجهز الخلطة المناسبة بإنتاج مضبوط الجودة وثبات موثق.",
    "services.process.step3.title": "التسليم",
    "services.process.step3.body":
      "ننسق الإرسال والتسليم الموقعي لحماية الجدول الزمني والأداء التنفيذي.",
    "services.support.eyebrow": "الدعم الفني",
    "services.support.title": "دعم يمتد إلى ما بعد المصنع",
    "services.support.body":
      "تبقى فرقنا منخرطة بعد الإنتاج، وتساعد العملاء على مواءمة اختيار الخرسانة والتوقيت والتنفيذ مع ظروف الموقع الحقيقية.",
    "services.support.lead":
      "سواء كان المطلوب خرسانة عالية المقاومة أو تنسيقاً دقيقاً أو توصيلاً إلى موقع صعب، فإن نجمدين كونكريت مهيأة للاستجابة بسرعة وانضباط.",
    "projects.hero.eyebrow": "المشاريع",
    "projects.hero.title": "أعمال بارزة في أنحاء المنطقة",
    "projects.hero.body":
      "تسهم نجمدين كونكريت في مشاريع تطوير كبرى عبر توريد موثوق وتنسيق فني وثبات في الجودة حيث يكون الأداء حاسماً.",
    "projects.grid.eyebrow": "عرض المشاريع",
    "projects.grid.title": "مشاريع مختارة",
    "projects.grid.body":
      "تعكس هذه المشاريع حجم العمل وتنوعه وتعقيد التسليم الذي تدعمه فرقنا يومياً.",
    "projects.kicker.flagship": "برج رئيسي",
    "projects.kicker.urban": "تطوير حضري",
    "projects.kicker.residential": "سكني",
    "projects.kicker.mixed": "متعدد الاستخدامات",
    "projects.kicker.hospitality": "ضيافة",
    "projects.kicker.commercial": "تجاري",
    "projects.kicker.expansion": "توسع سكني",
    "projects.kicker.housing": "إسكان حضري",
    "projects.excellence.eyebrow": "أهمية التنفيذ",
    "projects.excellence.title": "قوة تنفيذية خلف كل تسليم",
    "projects.excellence.body":
      "يعتمد أداء المشاريع على عمق فني وتحسين مستمر ونهج استراتيجي يتكيف مع متطلبات البناء المتغيرة.",
    "projects.ex1.title": "فرق فنية متخصصة",
    "projects.ex1.body":
      "نحوّل المتطلبات الإنشائية إلى نتائج إنتاج موثوقة مدعومة بانضباط تشغيلي.",
    "projects.ex2.title": "تحسين مستمر عبر الأقسام",
    "projects.ex2.body":
      "من الإنتاج إلى اللوجستيات والتواصل مع العملاء، يجري تطوير الأنظمة باستمرار لتحسين الأداء.",
    "projects.ex3.title": "قدرة استراتيجية على التسليم",
    "projects.ex3.body":
      "نوازن بين الجودة والاستجابة والطاقة الإنتاجية وفق احتياجات كل مشروع وكل مرحلة.",
    "clients.hero.eyebrow": "العملاء",
    "clients.hero.title": "ثقة المطورين والعلامات والمؤسسات",
    "clients.hero.body":
      "تعكس قاعدة عملائنا الثقة طويلة الأمد في الجودة والاعتمادية والقدرة على الأداء تحت ظروف المشاريع الصعبة.",
    "clients.wall.eyebrow": "جدار العملاء",
    "clients.wall.title": "محفظة مبنية على الثقة المتكررة",
    "clients.wall.body":
      "تدعم نجمدين كونكريت أسماء كبرى في المشاريع السكنية والفندقية والصحية ومتعددة الاستخدامات.",
    "clients.sectors.eyebrow": "مجالات العمل",
    "clients.sectors.title": "دعم قطاعات إنشائية متنوعة",
    "clients.sectors.body":
      "يتكيف نموذج التوريد لدينا مع أنواع المشاريع المختلفة وظروف المواقع وضغوط الجداول الزمنية.",
    "clients.sector1.title": "السكني والمتعدد الاستخدامات",
    "clients.sector1.body":
      "مجتمعات كبيرة وأبراج ومشاريع حضرية تحتاج إلى تنسيق يومي موثوق.",
    "clients.sector2.title": "الضيافة والتجاري",
    "clients.sector2.body":
      "فنادق ومولات ومشاريع تجارية يكون فيها الوقت والاستمرارية عوامل حاسمة.",
    "clients.sector3.title": "مشاريع المدينة الاستراتيجية",
    "clients.sector3.body":
      "تطويرات تتطلب دقة فنية وانضباطاً زمنياً وثقة طويلة الأمد.",
    "clients.proof.eyebrow": "مؤشرات الثقة",
    "clients.proof.title": "لماذا يعود العملاء إلينا",
    "clients.proof.body":
      "الجودة الموثوقة وقوة التصنيع المحلي والانضباط في التسليم تحافظ على الشراكات طويلة الأمد.",
    "clients.proof.local": "التصنيع المحلي",
    "contact.hero.eyebrow": "اتصل بنا",
    "contact.hero.title": "لنبنِ معاً",
    "contact.hero.body":
      "شاركنا نطاق المشروع وموقعه والدرجات المطلوبة والجدول الزمني، وسيساعدك فريق نجمدين كونكريت في تحديد الخطوة التالية.",
    "contact.form.eyebrow": "استفسار مشروع",
    "contact.form.title": "ابدأ المحادثة",
    "contact.form.body":
      "هذا الإصدار الثابت من الموقع يُجهز طلبك ويفتح تطبيق البريد الإلكتروني مع البيانات مُعبأة مسبقاً.",
    "contact.form.name": "الاسم",
    "contact.form.name_ph": "اسمك الكامل",
    "contact.form.company": "الشركة",
    "contact.form.company_ph": "اسم الشركة",
    "contact.form.phone": "الهاتف",
    "contact.form.phone_ph": "+964 770 000 0000",
    "contact.form.message": "الرسالة",
    "contact.form.message_ph":
      "أخبرنا عن المشروع والموقع والدرجات المطلوبة والجدول الزمني للتسليم.",
    "contact.form.submit": "أرسل الاستفسار",
    "contact.form.note":
      "أرقام الهاتف والبريد الحالية مؤقتة إلى حين تزويدنا ببيانات الشركة الرسمية.",
    "contact.form.validation": "يرجى إكمال جميع الحقول قبل الإرسال.",
    "contact.form.opening": "يتم فتح برنامج البريد الإلكتروني...",
    "contact.form.subject": "استفسار مشروع | نجمدين كونكريت",
    "contact.info.location_label": "الموقع",
    "contact.info.phone_label": "الهاتف",
    "contact.info.email_label": "البريد الإلكتروني",
    "contact.faq.eyebrow": "الأسئلة الشائعة",
    "contact.faq.title": "أسئلة متكررة",
    "contact.faq.body":
      "إجابات سريعة عن الأسئلة التي يطرحها العملاء غالباً قبل أول اجتماع تنسيقي.",
    "contact.faq.q1": "هل تخدمون المواقع البعيدة؟",
    "contact.faq.a1":
      "نعم، فخطط التسليم لدينا مهيأة لدعم الطرق الصعبة والمواقع بعيدة الوصول.",
    "contact.faq.q2": "ما هي الدرجات التي توفرونها؟",
    "contact.faq.a2":
      "توفر نجمدين كونكريت درجات تبدأ من 15 وحتى 100 نيوتن/مم2 بحسب متطلبات المشروع.",
    "contact.faq.q3": "هل تقدمون دعماً فنياً؟",
    "contact.faq.a3":
      "نعم، تقدم فرقنا الإرشاد في الخلطات والدعم الإنتاجي والتنسيق أثناء التنفيذ.",
  },
  ku: {
    "meta.home.title":
      "نەجمەدین کۆنکریت | ئایندەی عێراق دروست دەکەین لە 2002ەوە",
    "meta.home.description":
      "نەجمەدین کۆنکریت یەکێکە لە دابینکەرە سەرەکییەکانی کۆنکریتی ئامادە و رێگمات لە هەرێمی کوردستانی عێراق، بە ئەزموونی پشتپێبەستوو لە ساڵی 2002ەوە.",
    "meta.about.title": "دەربارەی نەجمەدین کۆنکریت",
    "meta.about.description":
      "زیاتر بزانە لەسەر نەجمەدین کۆنکریت، مێژووی زیاتر لە 20 ساڵی، بنەماکانی کارکردن، و پابەندی بە کوالێتی و سەلامەتی و گەیاندنی باوەڕپێکراو.",
    "meta.services.title": "خزمەتگوزارییەکان | نەجمەدین کۆنکریت",
    "meta.services.description":
      "خزمەتگوزارییەکانی نەجمەدین کۆنکریت ببینە؛ لە بەرهەمهێنانی کۆنکریتی ئامادە و دیزاینی تێکەڵە تا دابینکردنی رێگمات و ڕاوێژی فنی.",
    "meta.projects.title": "پڕۆژەکان | نەجمەدین کۆنکریت",
    "meta.projects.description":
      "پڕۆژە و بڵێندراوە ناوازەکان ببینە کە لەلایەن نەجمەدین کۆنکریت پشتیوانی کراون لە هەرێمی کوردستانی عێراق.",
    "meta.clients.title": "کڕیارەکان | نەجمەدین کۆنکریت",
    "meta.clients.description":
      "نەجمەدین کۆنکریت پشتگیری گەورەترین پەرەپێدەران و براندە هوتێلییەکان و پڕۆژە ستراتیژییەکان دەکات لە ناوچەکەدا.",
    "meta.contact.title": "پەیوەندی | نەجمەدین کۆنکریت",
    "meta.contact.description":
      "بۆ پرسیارەکانی پڕۆژە و داواکارییەکانی دابینکردنی کۆنکریت و پشتگیری فنی پەیوەندی بە نەجمەدین کۆنکریت بکە.",
    "common.home_label": "ماڵپەڕی سەرەکیی نەجمەدین کۆنکریت",
    "common.menu": "کردنەوە یان داخستنی مێنیوی ڕێڕەو",
    "common.language_label": "زمان",
    "brand.title": "نەجمەدین",
    "brand.subtitle": "کۆنکریت",
    "nav.home": "سەرەکی",
    "nav.about": "دەربارە",
    "nav.services": "خزمەتگوزارییەکان",
    "nav.projects": "پڕۆژەکان",
    "nav.clients": "کڕیارەکان",
    "nav.contact": "پەیوەندی",
    "button.projects": "پڕۆژەکان ببینە",
    "button.contact": "پەیوەندیمان پێوە بکە",
    "button.services": "خزمەتگوزارییەکانمان",
    "button.all_projects": "هەموو پڕۆژەکان",
    "button.all_clients": "هەموو کڕیارەکان",
    "button.inquiry": "داواکاری بنێرە",
    "button.about": "دەربارەمان بزانە",
    "common.location_region": "هەرێمی کوردستان، عێراق",
    "common.location_city": "سلێمانی، هەرێمی کوردستان، عێراق",
    "common.stats.years": "ساڵ لە کارکردنەوە لە 2002ەوە",
    "common.stats.people": "پیشەسازی ڕاهێنراو",
    "common.stats.grades": "پلەی کۆنکریت تا 100 نیوتن/مم2",
    "common.stats.clients": "کڕیاری سەرەکی",
    "footer.tagline": "سبەی دروست دەکەین، ئەمڕۆ.",
    "footer.rights": "نەجمەدین کۆنکریت. هەموو مافەکان پارێزراون.",
    "footer.navigation": "ڕێنیشاندەر",
    "footer.contact": "پەیوەندی",
    "home.hero.eyebrow": "دابینکەری سەرەکیی کۆنکریت لە هەرێمی کوردستانی عێراق",
    "home.hero.title": "ئایندەی عێراق دروست دەکەین لە 2002ەوە",
    "home.hero.body":
      "نەجمەدین کۆنکریت کۆنکریتی ئامادە و رێگمات و پشتگیری فنی و لۆجستی تایبەتی بۆ پڕۆژە گەورەکان دابین دەکات لە هەموو ناوچەکەدا.",
    "home.hero.trust.primary": "ئەزمونی ٢١ ساڵ لە متمانە",
    "home.hero.trust.secondary": "",
    "home.hero.badge1": "زیاتر لە 20 ساڵ سەرکەوتنی پشتڕاستکراو",
    "home.hero.badge2": "زیاتر لە 200 پیشەسازی ڕاهێنراو",
    "home.hero.badge3": "گەیاندن بۆ شوێنە دوورەکان",
    "home.hero.panel_title": "ئامادە بۆ شوێنە پڕداواکارییەکان",
    "home.hero.panel1.title": "وردیی پێشکەوتووی تێکەڵکردن",
    "home.hero.panel1.body": "هاوتایی و کارایی لە هەموو نۆبەی بەرهەمدا.",
    "home.hero.panel2.title": "لۆجستی باوەڕپێکراو",
    "home.hero.panel2.body": "هاوردەکردنی گەیاندن بۆ پاراستنی کاتی کار.",
    "home.hero.panel3.title": "هێزی پیشەسازی ناوخۆ",
    "home.hero.panel3.body": "بەرهەمی تەواو ناوخۆیی بە پشتگیری فنی ڕێکخراو.",
    "home.story.eyebrow": "بۆچی نەجمەدین کۆنکریت",
    "home.story.title": "هێزی پیشەسازی. وردیی ناوخۆ.",
    "home.story.visual1": "هێزی پیشەسازی.",
    "home.story.visual2": "وردیی ناوخۆ.",
    "home.story.body":
      "لە ساڵی 2002ەوە، نەجمەدین کۆنکریت گەشەی کردووە بۆ ئەوەی ببێتە یەکێک لە سەرکردەکانی عێراق لە بوارەکانی کۆنکریتی ئامادە و رێگمات. ناوبانگمان لەسەر کوالێتی پشتپێبەستوو و گەیاندنی لەکاتی خۆیدا و توانای فنییە کە پشتیوانی پڕۆژەکان دەکات.",
    "home.story.quote":
      "کۆنکریت تەنها تێکەڵەیەک نییە؛ چارەسەرێکی بەهێزە کە ئێمە بە هەر کڕیارێک دەبەستێتەوە.",
    "home.about.title": "دوو دەیە لە بنیاتنانی ژێرخانی کوردستان",
    "home.about.body":
      "لە ساڵی 2002ەوە، نەجمەدین کۆنکریت گەشەی کردووە و بووەتە یەکێک لە باوەڕپێکراوترین دابینکەری کۆنکریتی ئامادە و رێگمات لە ناوچەکەدا. لە تاوەرە ئینشاییەکانەوە تا کۆمەڵگە نیشتەجێبوونیە فراوانەکان، ئێمە ماددەی بنەڕەتی کەرتی بیناسازی کوردستان دابین دەکەین.",
    "home.vision.eyebrow": "بینینمان",
    "home.vision.title": "کوردستانێکی بەهێزتر بە کۆنکریتێک کە پشتگیریی دەکەین",
    "home.vision.body":
      "ئێمە کار دەکەین بۆ ئەوەی بنیاتنەران ئەو متمانەی ماددییەیان هەبێت کە پێویستیانە - لە کاتی خۆیدا، بەگوێرەی پێوەر، و لە هەر پڕۆژەیەکی گرنگدا.",
    "home.vision.card1.title": "کوالێتی لەپێشەوە",
    "home.vision.card1.body":
      "هەر تێکەڵەیەک کۆنترۆڵ و تاقی دەکرێتەوە و بەگوێرەی پێوەر دەگات - لە 15 نیوتن/مم2 تا 100 نیوتن/مم2 بە چاودێری ڕێکخراوی هێزی 28 ڕۆژە.",
    "home.vision.card2.title": "دروستکراو بۆ مانەوە",
    "home.vision.card2.body":
      "کۆنکریتەکەمان پشتگیری ئەو بینایانە دەکات کە شارەکانی کوردستان پێناسە دەکەن - تاوەر و کۆمەڵگە و هوتێل و دامەزراوەکانی درێژخایەن.",
    "home.vision.card3.title": "هەمیشە پشتپێبەستوو",
    "home.vision.card3.body":
      "گەیاندن لە کاتی خۆیدا، وردی فنی، و تیمێک کە لە داواکارییەوە تا دانانی کۆتایی لە شوێنە پڕداواکارییەکاندا بەردەوام دەبێت.",
    "home.action.project.title": "پڕۆژە",
    "home.action.project.body":
      "پڕۆژە دیارەکان ببینە کە نەجمەدین کۆنکریت لە هەرێمی کوردستاندا دابینی کردوون.",
    "home.action.service.title": "خزمەتگوزاری",
    "home.action.service.body":
      "چارەسەری کۆنکریتی ئامادە و رێگمات و گەیاندن بۆ شوێنە دوورەکان بۆ هەموو پلەیەک.",
    "home.action.partnership.title": "هاوبەشی",
    "home.action.partnership.body":
      "پێداویستییەکانت پێمان بڵێ، تیمەکەمان لە دیزاینی تێکەڵەوە تا گەیاندن هەموو هەنگاوێک ڕێنماییت دەکات.",
    "home.services.eyebrow": "خزمەتگوزارییە هەڵبژێردراوەکان",
    "home.services.title": "چی دابین دەکەین",
    "home.services.body":
      "لە کۆنکریتی ئامادەی ئینشایی تا دابینکردنی رێگمات و پشتگیری فنی، تیمەکانمان کارایی لە کارگەهەوە تا شوێنی پڕۆژە پشتگیری دەکەن.",
    "home.services.card1.title": "کۆنکریتی ئامادە",
    "home.services.card1.body":
      "هەموو پلەکان لە 15 تا 100 نیوتن/مم2 بە کۆنترۆڵی ڕێکخراوی بەرهەمهێنان.",
    "home.services.card2.title": "رێگمات و حەصا",
    "home.services.card2.body":
      "دابینکردنی جێگیر بۆ ماددەی سەرەتایی بۆ پاراستنی کوالێتی و خێرایی گەیاندن.",
    "home.services.card3.title": "گەیاندن بۆ شوێنە دوورەکان",
    "home.services.card3.body":
      "توانای لۆجستی بۆ ناوچە دژوارەکان و کاتە هەستیارەکان.",
    "home.projects.eyebrow": "پڕۆژەی دیار",
    "home.projects.title": "کۆنکریت لە پشتی گەشەپێدانە گەورەکان",
    "home.projects.body":
      "نەجمەدین کۆنکریت پشتیوانی پڕۆژە سەکەنی و هوتێلی و فرەبەکارهێنان دەکات لە هەموو هەرێمی کوردستانی عێراق.",
    "home.clients.eyebrow": "کڕیارانی هەڵبژێردراو",
    "home.clients.title": "متمانەی پەرەپێدەری سەرەکی",
    "home.clients.body":
      "پەیوەندییەکانمان لەگەڵ کڕیاران متمانەی درێژخایەن و جێگیریی کارکردن و باوەڕ بە توانای گەیاندنمان نیشان دەدات.",
    "home.cta.title": "هاوبەشێکی کۆنکریت بۆ پڕۆژەی داهاتووت پێویستە؟",
    "home.cta.body":
      "زانیاری شوێن و پلەی پێویست و کاتی کار و مەرجی گەیاندن بنێرە، تیمەکەمان هەنگاوی داهاتووت بۆ دیاری دەکات.",
    "about.hero.eyebrow": "دەربارەی نەجمەدین کۆنکریت",
    "about.hero.title":
      "کۆمپانیایەک کە لەسەر متمانە و کوالێتی و گەیاندن دروست بووە",
    "about.hero.body":
      "نەجمەدین کۆنکریت ئەزموونی پیشەسازیی درێژخایەن و تیمی ڕاهێنراو و سیستەمی تێکەڵکردنی پێشکەوتوو و لۆجستی ڕێکخراو کۆدەکاتەوە بۆ خزمەتکردنی بوارەکانی بیناسازی بە باوەڕ.",
    "about.story.eyebrow": "چیرۆکی ئێمە",
    "about.story.title": "زیاتر لە دوو دەیە لە کارایی پشتڕاستکراو",
    "about.story.p1":
      "لە ساڵی 2002ەوە، نەجمەدین کۆنکریت بە ئامانجێکی ڕوون کار دەکات: چارەسەری کۆنکریتی باوەڕپێکراو دابین بکات کە پاڵپشتی بینا گەورەکانی ناوچەکە بێت.",
    "about.story.p2":
      "ئەمڕۆ کۆمپانیا لە نێوان بەرزترین بەرهەمهێنەر و دابینکەرانی کۆنکریتی ئامادە و رێگمات لە عێراقدایە، بە پشتگیری زیاتر لە 200 پیشەسازی ڕاهێنراو.",
    "about.story.p3":
      "پابەندین بە ڕەزامەندی کڕیار و جێگیریی کوالێتی بەرهەم و گەیاندنی لەکاتی خۆیدا، تەنانەت بۆ شوێنە دوورەکانیش کە هاوردەکردنی دروست گرنگە.",
    "about.story.quote": "بۆ مایەوە دروست کراوە، وەک ئەو سازەی دروستی دەکەین.",
    "about.values.eyebrow": "بەها بنچینەییەکان",
    "about.values.title": "ئەو ستانداردانەی کارمان ڕێکدەخەن",
    "about.values.body":
      "هەر پڕۆژەیەک بە چاودێریی کوالێتی و جێبەجێکردنی باوەڕپێکراو و کولتووری باشترکردنی بەردەوام پاڵپشتی دەکرێت.",
    "about.values.card1.title": "نوێکاری و کوالێتی",
    "about.values.card1.body":
      "تێکنەلۆژیای پێشکەوتووی بەرهەمهێنان و کۆنترۆڵی ڕێکخراو کارایی بەهێز و جێگیر دابین دەکات.",
    "about.values.card2.title": "گەیاندنی لەکاتدا",
    "about.values.card2.body":
      "تیمەکانی لۆجستیمان بۆ گەیشتن بە شوێنەکان لەکاتی خۆیدا ڕێکخراون، تەنانەت لە دۆخی دژواردا.",
    "about.values.card3.title": "باشترکردنی بەردەوام",
    "about.values.card3.body":
      "بەردەوام سیستەم و ڕاهێنان و هاوردەکردن بەرز دەکەین بۆ تێپەڕاندنی چاوەڕوانییەکانی بوار.",
    "about.qhse.eyebrow": "QHSE",
    "about.qhse.title": "کوالێتی، تەندروستی، سەلامەتی و ژینگە",
    "about.qhse.body":
      "نەجمەدین کۆنکریت سیاسەتێکی توندی QHSE هەیە کە لەلایەن بەڕێوەبەرایەتیی سەرەوە جێبەجێ دەکرێت و سەلامەتی و پابەندی یاسایی و پاراستنی ژینگە و بەرپرسیارێتیی تیمی تێدا بنیات نراون.",
    "about.qhse.item1": "سیاسەتی توندی QHSE لە ئاستی بەڕێوەبەرایەتی.",
    "about.qhse.item2":
      "ئامانجی ڕوون بۆ هیچ برینداربوونێکی کاتی لەدەستچوو نییە.",
    "about.qhse.item3":
      "سەرنجی تایبەتی بۆ پێشگیری لە پیسبوون و پاراستنی ژینگە.",
    "about.qhse.item4": "پابەندی تەواو بە پێداویستی یاسایی و ڕێنمایییەکان.",
    "about.qhse.item5": "توانابەخشینی کارمەندان و چارەسەری کێشە بە ڕووحی تیمی.",
    "about.ops.eyebrow": "هێزی کارکردن",
    "about.ops.title": "لەسەر خەڵک و پرۆسە و وردی دروست بووە",
    "about.ops.body":
      "ناوبانگمان هێزی تیمەکەمان پیشان دەدات، و کۆنکریتەکەشمان دڵسۆزیی ئەوانەی لە پشتی بەرهەمهێنانی دەنیشتن.",
    "about.ops.card1.title": "زیاتر لە 20 ساڵ جێبەجێکردن",
    "about.ops.card1.body":
      "تۆمارێکی درێژی کارکردن کە لە ئەزموونی ڕاستەقینەی پڕۆژەکانەوە درووست بووە.",
    "about.ops.card2.title": "زیاتر لە 200 پسپۆڕ",
    "about.ops.card2.body":
      "کادرێکی ڕاهێنراو کە بەرهەمهێنان و کوالێتی و دابەشکردن و هاوردەکردنی فنی پشتگیری دەکات.",
    "about.ops.card3.title": "توانای خزمەتگوزاری بۆ شوێنە دوورەکان",
    "about.ops.card3.body":
      "دابینکردنی باوەڕپێکراو تەنانەت کاتێک گەیشتن و کات و ناهمواریەکان فشار دروست دەکەن.",
    "services.hero.eyebrow": "خزمەتگوزارییەکان",
    "services.hero.title": "چارەسەری تەواوی دابینکردنی کۆنکریت",
    "services.hero.body":
      "نەجمەدین کۆنکریت پڕۆژەکان بە بەرهەمهێنانی کۆنکریتی ئامادە و دابینکردنی ماددە و ڕێنمایی فنی و لۆجستی باوەڕپێکراو پشتگیری دەکات.",
    "services.grid.eyebrow": "چی پێشکەش دەکەین",
    "services.grid.title":
      "بەرهەمهێنان و دابینکردن و پشتگیری فنی لە یەک سیستەمدا",
    "services.grid.body":
      "مۆدێلی خزمەتگوزارییەکەمان بۆ کەمکردنەوەی ئاڵۆزی لە زنجیرەی دابینکردنی کۆنکریت دروست کراوە، لەگەڵ پاراستنی کوالێتی و کات.",
    "services.card1.title": "کۆنکریتی ئامادە",
    "services.card1.body":
      "هەموو پلەکان لە 15 تا 100 نیوتن/مم2 بە بەرهەمهێنانی کۆنترۆڵکراو و تاقیکردنەوەی ڕێکخراو.",
    "services.card2.title": "دابینکردنی رێگمات و حەصا",
    "services.card2.body":
      "دابینکردنی بەردەوامی رێگمات بۆ پاراستنی کوالێتی تێکەڵە و جێگیریی کارکردن.",
    "services.card3.title": "گەیاندن بۆ شوێنە دوورەکان",
    "services.card3.body":
      "خزمەتگوزاریی لۆجستیی باوەڕپێکراو بۆ شوێنی دژوار و دۆخی کارکردنی ئاڵۆز.",
    "services.card4.title": "دیزاینی تایبەتی تێکەڵە",
    "services.card4.body":
      "چارەسەری تێکەڵە بەگوێرەی داواکاریی ئینشایی و ژینگەیی و مەرجی شوێن.",
    "services.card5.title": "بەرهەمهێنانی کۆنترۆڵکراوی کوالێتی",
    "services.card5.body":
      "بەرهەمی تەواو ناوخۆیی بە پشکنین و جێگیریی ڕێکخراو پشتگیری دەکرێت.",
    "services.card6.title": "ڕاوێژی فنی",
    "services.card6.body":
      "پشتگیری تایبەتی لەلایەن تیمێکەوە کە هەڵسوکەوتی کۆنکریت و پێداویستیی شوێن دەزانن.",
    "services.standards":
      "هاوتا لەگەڵ ستانداردە نێودەوڵەتی و نیشتمانییەکان ASTM · ACI · BS · IS · EN",
    "services.process.eyebrow": "شێوازی کارکردن",
    "services.process.title": "ڕێگایەکی ڕوون لە داواکارییەوە بۆ گەیاندن",
    "services.process.body":
      "هاوردەکردن ئاسان دەکەین بە یەکخستنی پشکنینی فنی و پلانی بەرهەمهێنان و لۆجستی لە یەک زنجیرەدا.",
    "services.process.step1.title": "هەڵسەنگاندن",
    "services.process.step1.body":
      "پێداویستیی پڕۆژە و دۆخی شوێن و پلەی پێویست و کاتی گەیاندن دەخوێنینەوە.",
    "services.process.step2.title": "بەرهەمهێنان",
    "services.process.step2.body":
      "تێکەڵەی گونجاو ئامادە دەکەین بە بەرهەمهێنانی کۆنترۆڵکراو و جێگیریی تۆمارکراو.",
    "services.process.step3.title": "گەیاندن",
    "services.process.step3.body":
      "ناردن و گەیاندن هاوردە دەکەین بۆ پاراستنی کات و کارایی دانان.",
    "services.support.eyebrow": "پشتگیری فنی",
    "services.support.title": "پشتگیرییەک کە لە دوای کارگەهیش بەردەوام دەبێت",
    "services.support.body":
      "تیمەکانمان دوای بەرهەمهێنانیش لەگەڵ کڕیار دەمێننەوە و یارمەتی هەڵبژاردنی کۆنکریت و کات و جێبەجێکردن دەدەن بەگوێرەی دۆخی ڕاستەقینەی شوێن.",
    "services.support.lead":
      "ئەگەر داواکارییەکە کۆنکریتی بەرزتووندی بێت یان هاوردەکردنی ورد بێت یان گەیاندن بۆ شوێنێکی دژوار، نەجمەدین کۆنکریت ئامادەی وەڵامدانەوەی خێرا و ڕێکخراوە.",
    "projects.hero.eyebrow": "پڕۆژەکان",
    "projects.hero.title": "کارە دیارەکان لە سەرانسەری ناوچەکە",
    "projects.hero.body":
      "نەجمەدین کۆنکریت بە دابینکردنی باوەڕپێکراو و هاوردەکردنی فنی و جێگیریی کوالێتی هاوبەشی پڕۆژە گەورەکان دەبێت.",
    "projects.grid.eyebrow": "پیشاندانی پڕۆژەکان",
    "projects.grid.title": "پڕۆژەی هەڵبژێردراو",
    "projects.grid.body":
      "ئەم پڕۆژانە قەبارە و جۆراوجۆریی کار و ئاڵۆزیی گەیاندن پیشان دەدەن کە تیمەکانمان ڕۆژانە پشتگیرییان دەکەن.",
    "projects.kicker.flagship": "برجی سەرەکی",
    "projects.kicker.urban": "گەشەپێدانی شارستانی",
    "projects.kicker.residential": "سەکەنی",
    "projects.kicker.mixed": "فرەبەکارهێنان",
    "projects.kicker.hospitality": "میوانداری",
    "projects.kicker.commercial": "بازرگانی",
    "projects.kicker.expansion": "فراوانبوونی سەکەنی",
    "projects.kicker.housing": "نیشتەجێبوونی شارستانی",
    "projects.excellence.eyebrow": "گرنگیی جێبەجێکردن",
    "projects.excellence.title": "هێزی جێبەجێکردن لە پشتی هەر گەیاندنێکدا",
    "projects.excellence.body":
      "کارایی پڕۆژەکان بە قووڵایی فنی و باشترکردنی بەردەوام و ڕوانگەی ستراتیژی پاڵپشتی دەکرێت کە لەگەڵ داواکارییە نوێکاندا دەگونجێت.",
    "projects.ex1.title": "تیمی فنیی تایبەت",
    "projects.ex1.body":
      "داواکاریی ئینشایی دەگۆڕین بۆ ئەنجامی بەرهەمهێنانی باوەڕپێکراو کە بە ڕێکخراوی کارکردن پاڵپشتی دەکرێت.",
    "projects.ex2.title": "باشترکردنی بەردەوام لە هەموو بەشەکان",
    "projects.ex2.body":
      "لە بەرهەمهێنانەوە تا لۆجستی و پەیوەندی لەگەڵ کڕیاران، سیستەمەکان بەردەوام گەشە پێدەدرێن بۆ باشترکردنی کارایی.",
    "projects.ex3.title": "توانای ستراتیژی بۆ گەیاندن",
    "projects.ex3.body":
      "کوالێتی و خێرایی و توانا بەگوێرەی پێداویستیی هەر پڕۆژە و هەر قۆناغێک ڕێکدەخەین.",
    "clients.hero.eyebrow": "کڕیارەکان",
    "clients.hero.title": "متمانەی پەرەپێدەر و براند و دامەزراوەکان",
    "clients.hero.body":
      "بنکەی کڕیارانمان متمانەی درێژخایەن لە کوالێتی و پشتپێبەستن و توانای کارکردن لە دۆخی پڕفشاری پڕۆژەکاندا نیشان دەدات.",
    "clients.wall.eyebrow": "دیوارێکی کڕیاران",
    "clients.wall.title": "پۆرتفۆلیۆیەک لەسەر متمانەی دووبارە دروست بووە",
    "clients.wall.body":
      "نەجمەدین کۆنکریت پشتگیری ناوە گەورەکان دەکات لە پڕۆژە سەکەنی و میوانداری و تەندروستی و فرەبەکارهێناندا.",
    "clients.sectors.eyebrow": "شوێنی کارکردن",
    "clients.sectors.title": "پشتگیری بوارە جیاوازەکانی بیناسازی",
    "clients.sectors.body":
      "مۆدێلی دابینکردنمان لەگەڵ جۆری پڕۆژە و مەرجی شوێن و فشاری کات دەگونجێت.",
    "clients.sector1.title": "سەکەنی و فرەبەکارهێنان",
    "clients.sector1.body":
      "کۆمەڵگە گەورەکان و تاوەر و پڕۆژە شارستانییەکان کە پێویستییان بە هاوردەکردنی ڕۆژانەی باوەڕپێکراو هەیە.",
    "clients.sector2.title": "میوانداری و بازرگانی",
    "clients.sector2.body":
      "هوتێل و مۆڵ و پڕۆژە بازرگانییەکان کە کات و بەردەوامی و جێگیری گرنگن.",
    "clients.sector3.title": "پڕۆژە ستراتیژییەکانی شار",
    "clients.sector3.body":
      "گەشەپێدانەکان کە پێویستییان بە وردی فنی و ڕێکخراوی کات و متمانەی درێژخایەن هەیە.",
    "clients.proof.eyebrow": "بەڵگەی متمانە",
    "clients.proof.title": "بۆچی کڕیاران دەگەڕێنەوە",
    "clients.proof.body":
      "کوالێتی باوەڕپێکراو و هێزی بەرهەمهێنانی ناوخۆ و ڕێکخراوی گەیاندن هاوبەشییە درێژخایەنەکان بەهێز دەکەن.",
    "clients.proof.local": "بەرهەمهێنانی ناوخۆ",
    "contact.hero.eyebrow": "پەیوەندی",
    "contact.hero.title": "با یەکەوە بنیات بنێین",
    "contact.hero.body":
      "زانیاری قەبارەی پڕۆژە و شوێن و پلەی پێویست و کاتی کار بنێرە، تیمی نەجمەدین کۆنکریت هەنگاوی داهاتووت بۆ دەستنیشان دەکات.",
    "contact.form.eyebrow": "داواکاریی پڕۆژە",
    "contact.form.title": "گفتوگۆ دەست پێ بکە",
    "contact.form.body":
      "ئەم وەشانی ثابتەی ماڵپەڕەکە داواکارییەکەت ئامادە دەکات و نامەی ئیمەیڵ بە زانیارییەکانەوە دەکاتەوە.",
    "contact.form.name": "ناو",
    "contact.form.name_ph": "ناوی تەواوت",
    "contact.form.company": "کۆمپانیا",
    "contact.form.company_ph": "ناوی کۆمپانیا",
    "contact.form.phone": "ژمارەی تەلەفۆن",
    "contact.form.phone_ph": "+964 770 000 0000",
    "contact.form.message": "پەیام",
    "contact.form.message_ph":
      "لەسەر پڕۆژەکەت و شوێن و پلەی پێویست و کاتی گەیاندن پەیام بنوسە.",
    "contact.form.submit": "داواکاری بنێرە",
    "contact.form.note":
      "ژمارەی تەلەفۆن و ئیمەیڵی ئێستا کاتییە تا زانیاری ڕەسمیی کۆمپانیا دابین بکرێت.",
    "contact.form.validation": "تکایە هەموو خانەکان پڕ بکە پێش ناردن.",
    "contact.form.opening": "ئیمەیڵەکەت دەکرێتەوە...",
    "contact.form.subject": "داواکاریی پڕۆژە | نەجمەدین کۆنکریت",
    "contact.info.location_label": "شوێن",
    "contact.info.phone_label": "تەلەفۆن",
    "contact.info.email_label": "ئیمەیڵ",
    "contact.faq.eyebrow": "پرسیارە باوەکان",
    "contact.faq.title": "وەڵامی خێرا بۆ پرسیارەکان",
    "contact.faq.body":
      "چەند وەڵامێکی خێرا بۆ ئەو پرسیارانەی زۆرجار پێش یەکەم گفتوگۆی هاوردەکردن دەوترێن.",
    "contact.faq.q1": "ئایا شوێنە دوورەکانیش خزمەت دەکەن؟",
    "contact.faq.a1":
      "بەڵێ، پلانی گەیاندنمان بۆ ڕێگا دژوارەکان و شوێنە دوورەکانیش ئامادە کراوە.",
    "contact.faq.q2": "چی پلەیەک دابین دەکەن؟",
    "contact.faq.a2":
      "نەجمەدین کۆنکریت پلەی 15 تا 100 نیوتن/مم2 دابین دەکات بەگوێرەی پێداویستیی پڕۆژە.",
    "contact.faq.q3": "ئایا پشتگیری فنی دەدەن؟",
    "contact.faq.a3":
      "بەڵێ، تیمەکانمان ڕێنماییی تێکەڵە و پشتگیریی بەرهەمهێنان و هاوردەکردنی جێبەجێکردن پێشکەش دەکەن.",
  },
};

const getTranslation = (lang, key) =>
  translations[lang]?.[key] ?? translations.en[key] ?? "";

const setLanguageState = (lang) => {
  const effectiveLang = translations[lang] ? lang : "en";
  document.documentElement.lang = effectiveLang;
  document.documentElement.dir = RTL_LANGUAGES.has(effectiveLang)
    ? "rtl"
    : "ltr";
  document.body.dataset.lang = effectiveLang;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = getTranslation(effectiveLang, element.dataset.i18n);
    if (element.hasAttribute("data-i18n-html")) {
      element.innerHTML = value;
    } else {
      element.textContent = value;
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    element.setAttribute(
      "placeholder",
      getTranslation(effectiveLang, element.dataset.i18nPlaceholder),
    );
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    element.setAttribute(
      "aria-label",
      getTranslation(effectiveLang, element.dataset.i18nAriaLabel),
    );
  });

  document.querySelectorAll("[data-i18n-content]").forEach((element) => {
    element.setAttribute(
      "content",
      getTranslation(effectiveLang, element.dataset.i18nContent),
    );
  });

  const page = document.body.dataset.page;
  if (page) {
    const titleKey = "meta." + page + ".title";
    const descriptionKey = "meta." + page + ".description";
    const title = getTranslation(effectiveLang, titleKey);
    const description = getTranslation(effectiveLang, descriptionKey);
    if (title) {
      document.title = title;
    }
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription && description) {
      metaDescription.setAttribute("content", description);
    }
  }

  const yearNode = document.querySelector("[data-footer-year]");
  if (yearNode) {
    yearNode.textContent =
      "2002-" +
      new Date().getFullYear() +
      " " +
      getTranslation(effectiveLang, "footer.rights");
  }

  document
    .querySelectorAll(".language-switcher button[data-lang]")
    .forEach((button) => {
      const active = button.dataset.lang === effectiveLang;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
    });

  localStorage.setItem(STORAGE_KEY, effectiveLang);
};

const setupLanguageSwitcher = () => {
  const initialLanguage = localStorage.getItem(STORAGE_KEY) || "en";
  setLanguageState(initialLanguage);

  document
    .querySelectorAll(".language-switcher button[data-lang]")
    .forEach((button) => {
      button.addEventListener("click", () => {
        setLanguageState(button.dataset.lang);
      });
    });
};

const setupNavigation = () => {
  const header = document.querySelector(".site-header");
  const navToggle = document.querySelector(".nav-toggle");
  const navPanel = document.querySelector(".nav-panel");
  const currentPage = document.body.dataset.page;
  const closeNav = () => {
    if (!navToggle || !navPanel) {
      return;
    }

    navToggle.setAttribute("aria-expanded", "false");
    navPanel.classList.remove("is-open");
    document.body.classList.remove("nav-is-open");
  };

  const updateHeader = () => {
    if (header) {
      header.classList.toggle("is-scrolled", window.scrollY > 28);
    }
  };

  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });

  document.querySelectorAll("[data-page-link]").forEach((link) => {
    link.classList.toggle("is-current", link.dataset.pageLink === currentPage);
  });

  if (navToggle && navPanel) {
    navToggle.addEventListener("click", () => {
      const expanded = navToggle.getAttribute("aria-expanded") === "true";
      const nextState = !expanded;
      navToggle.setAttribute("aria-expanded", String(nextState));
      navPanel.classList.toggle("is-open", nextState);
      document.body.classList.toggle("nav-is-open", nextState);
    });

    document.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", closeNav);
    });

    document.addEventListener("click", (event) => {
      if (
        !navPanel.contains(event.target) &&
        !navToggle.contains(event.target)
      ) {
        closeNav();
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 860) {
        closeNav();
      }
    });
  }
};

const setupReveal = () => {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document
      .querySelectorAll(".reveal")
      .forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, instance) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          instance.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.04, rootMargin: "0px 0px 60px 0px" },
  );

  document
    .querySelectorAll(".reveal")
    .forEach((item) => observer.observe(item));
};

const setupCounters = () => {
  const counters = document.querySelectorAll("[data-count]");
  if (!counters.length) {
    return;
  }

  const animateCounter = (element) => {
    const target = Number(element.dataset.count || 0);
    const prefix = element.dataset.prefix || "";
    const suffix = element.dataset.suffix || "";
    const duration = 1500;
    const start = performance.now();

    const tick = (timestamp) => {
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = Math.round(target * eased);
      element.textContent = prefix + value.toLocaleString() + suffix;

      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        element.textContent = prefix + target.toLocaleString() + suffix;
      }
    };

    requestAnimationFrame(tick);
  };

  const observer = new IntersectionObserver(
    (entries, instance) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          instance.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.55 },
  );

  counters.forEach((counter) => observer.observe(counter));
};

const setupTilt = () => {
  if (window.matchMedia("(pointer: coarse)").matches) {
    return;
  }

  document.querySelectorAll("[data-tilt]").forEach((card) => {
    const baseTransform = card.dataset.tiltBase || "";

    const reset = () => {
      card.style.transform = baseTransform;
    };

    card.addEventListener("mousemove", (event) => {
      const rect = card.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const rotateY = (x / rect.width - 0.5) * 8;
      const rotateX = (0.5 - y / rect.height) * 8;
      card.style.transform =
        baseTransform +
        " translateY(-8px) rotateX(" +
        rotateX +
        "deg) rotateY(" +
        rotateY +
        "deg)";
    });

    card.addEventListener("mouseleave", reset);
    card.addEventListener("blur", reset, true);
    reset();
  });
};

const setupParallax = () => {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  const items = document.querySelectorAll(
    "[data-parallax][data-base-transform]",
  );
  if (!items.length) {
    return;
  }

  const update = () => {
    const scrollY = window.scrollY;
    items.forEach((item) => {
      const speed = Number(item.dataset.parallax || 0);
      const base = item.dataset.baseTransform || "";
      item.style.transform =
        base + " translateY(" + (scrollY * speed).toFixed(2) + "px)";
    });
  };

  update();
  window.addEventListener("scroll", update, { passive: true });
};

const setupHomeMotion = () => {
  if (document.body.dataset.page !== "home") {
    return;
  }

  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  const preloader = document.querySelector("[data-home-preloader]");
  const dismissPreloader = () => {
    document.body.classList.add("is-ready");

    if (!preloader || preloader.classList.contains("is-dismissed")) {
      return;
    }

    preloader.classList.add("is-dismissed");
    window.setTimeout(() => {
      preloader.setAttribute("aria-hidden", "true");
    }, 900);
  };

  if (preloader) {
    if (reducedMotion) {
      window.requestAnimationFrame(dismissPreloader);
    } else if (document.readyState === "complete") {
      window.setTimeout(dismissPreloader, 220);
    } else {
      window.addEventListener(
        "load",
        () => {
          window.setTimeout(dismissPreloader, 260);
        },
        { once: true },
      );
      window.setTimeout(dismissPreloader, 1400);
    }
  } else {
    document.body.classList.add("is-ready");
  }

  const serviceItems = document.querySelectorAll("[data-service-target]");
  const servicePanels = document.querySelectorAll("[data-service-image]");
  if (serviceItems.length && servicePanels.length) {
    const activateService = (target) => {
      serviceItems.forEach((item) => {
        const active = item.dataset.serviceTarget === target;
        item.classList.toggle("is-active", active);
        item.setAttribute("aria-pressed", String(active));
      });

      servicePanels.forEach((panel) => {
        panel.classList.toggle(
          "is-active",
          panel.dataset.serviceImage === target,
        );
      });
    };

    serviceItems.forEach((item) => {
      const target = item.dataset.serviceTarget;
      item.setAttribute(
        "aria-pressed",
        String(item.classList.contains("is-active")),
      );
      item.addEventListener("mouseenter", () => activateService(target));
      item.addEventListener("focus", () => activateService(target));
      item.addEventListener("click", () => activateService(target));
    });

    activateService(
      Array.from(serviceItems).find((item) =>
        item.classList.contains("is-active"),
      )?.dataset.serviceTarget || serviceItems[0].dataset.serviceTarget,
    );
  }

  const driftItems = document.querySelectorAll("[data-home-shift]");
  if (driftItems.length && !reducedMotion) {
    let ticking = false;

    const updateDrift = () => {
      const scrollY = window.scrollY;
      driftItems.forEach((item) => {
        const factor = Number(item.dataset.homeShift || 0);
        item.style.setProperty(
          "--home-drift",
          (scrollY * factor).toFixed(2) + "px",
        );
      });
      ticking = false;
    };

    updateDrift();
    window.addEventListener(
      "scroll",
      () => {
        if (ticking) {
          return;
        }

        ticking = true;
        window.requestAnimationFrame(updateDrift);
      },
      { passive: true },
    );
  }

  if (reducedMotion || window.matchMedia("(pointer: coarse)").matches) {
    return;
  }

  const scene = document.querySelector("[data-home-scene]");
  if (!scene) {
    return;
  }

  const layers = scene.querySelectorAll("[data-home-depth]");
  if (!layers.length) {
    return;
  }

  const resetLayers = () => {
    layers.forEach((layer) => {
      layer.style.setProperty("--pointer-x", "0px");
      layer.style.setProperty("--pointer-y", "0px");
    });
  };

  scene.addEventListener("mousemove", (event) => {
    const rect = scene.getBoundingClientRect();
    const offsetX = (event.clientX - rect.left) / rect.width - 0.5;
    const offsetY = (event.clientY - rect.top) / rect.height - 0.5;

    layers.forEach((layer) => {
      const depth = Number(layer.dataset.homeDepth || 0);
      layer.style.setProperty(
        "--pointer-x",
        (offsetX * depth * 1.9).toFixed(2) + "px",
      );
      layer.style.setProperty(
        "--pointer-y",
        (offsetY * depth * 1.3).toFixed(2) + "px",
      );
    });
  });

  scene.addEventListener("mouseleave", resetLayers);
  scene.addEventListener("blur", resetLayers, true);
};

const setupPageReady = () => {
  const markReady = () => {
    document.body.classList.add("is-page-ready");
  };

  window.requestAnimationFrame(markReady);
  window.setTimeout(markReady, 480);
};

const setupSurfaceSync = () => {
  const surfaces = Array.from(document.querySelectorAll("[data-surface]"));
  if (!surfaces.length) {
    return;
  }

  const update = () => {
    const probe = Math.min(108, window.innerHeight * 0.14);
    let activeSurface = "dark";

    surfaces.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= probe && rect.bottom > probe) {
        activeSurface = section.dataset.surface || "dark";
      }
    });

    document.body.classList.toggle("surface-light", activeSurface === "light");
  };

  update();
  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
};

const setupCustomCursor = () => {
  if (
    window.matchMedia("(pointer: coarse)").matches ||
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    return;
  }

  const cursor = document.querySelector(".motion-cursor");
  if (!cursor) {
    return;
  }

  const interactiveSelector = [
    "a",
    "button",
    "input",
    "textarea",
    "select",
    "summary",
    "[data-orb-item]",
    ".project-card",
    ".client-showcase-card",
    ".logo-card",
    ".card",
    ".info-card",
    ".faq-item",
  ].join(", ");
  const dot = cursor.querySelector(".motion-cursor__dot");
  const ring = cursor.querySelector(".motion-cursor__ring");
  let pointerX = window.innerWidth / 2;
  let pointerY = window.innerHeight / 2;
  let ringX = pointerX;
  let ringY = pointerY;

  document.body.classList.add("has-motion-cursor");

  const render = () => {
    ringX += (pointerX - ringX) * 0.18;
    ringY += (pointerY - ringY) * 0.18;

    if (dot) {
      dot.style.transform =
        "translate3d(" +
        pointerX.toFixed(2) +
        "px, " +
        pointerY.toFixed(2) +
        "px, 0) translate(-50%, -50%)";
    }

    if (ring) {
      ring.style.transform =
        "translate3d(" +
        ringX.toFixed(2) +
        "px, " +
        ringY.toFixed(2) +
        "px, 0) translate(-50%, -50%)";
    }

    window.requestAnimationFrame(render);
  };

  window.requestAnimationFrame(render);

  window.addEventListener(
    "pointermove",
    (event) => {
      pointerX = event.clientX;
      pointerY = event.clientY;
      cursor.classList.add("is-visible");
    },
    { passive: true },
  );

  document.addEventListener("mouseover", (event) => {
    cursor.classList.toggle(
      "is-active",
      Boolean(event.target.closest(interactiveSelector)),
    );
  });

  document.addEventListener("mouseout", (event) => {
    if (event.relatedTarget?.closest(interactiveSelector)) {
      return;
    }

    cursor.classList.remove("is-active");
  });

  window.addEventListener("pointerdown", () => {
    cursor.classList.add("is-pressed");
  });

  window.addEventListener("pointerup", () => {
    cursor.classList.remove("is-pressed");
  });
};

const setupScrollMotion = () => {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  const items = Array.from(document.querySelectorAll("[data-scroll-shift]"));
  if (!items.length) {
    return;
  }

  let ticking = false;

  const update = () => {
    const viewportHeight = window.innerHeight;

    items.forEach((item) => {
      const speed = Number(item.dataset.scrollShift || 0);
      const rect = item.getBoundingClientRect();
      const progress =
        (viewportHeight - rect.top) / (viewportHeight + rect.height) - 0.5;
      item.style.setProperty(
        "--scroll-lift",
        (progress * speed * 220).toFixed(2) + "px",
      );
    });

    ticking = false;
  };

  update();

  window.addEventListener(
    "scroll",
    () => {
      if (ticking) {
        return;
      }

      ticking = true;
      window.requestAnimationFrame(update);
    },
    { passive: true },
  );

  window.addEventListener("resize", update);
};

const setupEditorialSlider = () => {
  if (document.body.dataset.page !== "home") return;

  const section = document.querySelector("[data-editorial-slider]");
  const pan = section?.querySelector("[data-editorial-pan]");
  const track = section?.querySelector("[data-editorial-track]");
  const slides = Array.from(
    section?.querySelectorAll("[data-editorial-slide]") || [],
  );
  const progBar = document.querySelector("[data-editorial-progress-bar]");

  if (!section || !pan || !track || !slides.length) return;

  const SLIDE_COUNT = slides.length;
  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  const compactQuery = window.matchMedia("(max-width: 1180px)");

  // ── Helpers ────────────────────────────────────────────────────────────────

  let currentIndex = 0;

  const setActive = (index) => {
    if (index === currentIndex) return;
    slides[currentIndex].classList.remove("is-active");
    currentIndex = index;
    slides[currentIndex].classList.add("is-active");
  };

  // ── COMPACT / REDUCED-MOTION fallback (original CSS-var behaviour) ─────────

  const setupCompact = () => {
    // Remove hijack height so section scrolls normally
    section.style.removeProperty("--hijack-height");
    section.style.removeProperty("height");
    section.style.removeProperty("position");

    pan.style.removeProperty("position");
    pan.style.removeProperty("top");
    pan.style.removeProperty("height");
    pan.style.removeProperty("overflow");

    track.style.removeProperty("transform");
    track.style.removeProperty("will-change");
    track.style.removeProperty("display");
    track.style.removeProperty("width");
    track.style.removeProperty("height");

    section.style.setProperty("--editorial-progress", "0");
    section.style.setProperty("--editorial-shift", "0px");
    setActive(0);
  };

  // ── FULL HIJACK setup ──────────────────────────────────────────────────────

  const setupHijack = () => {
    // outer section becomes the scroll container
    // height = (SLIDE_COUNT - 1) * 100vh  +  one viewport for the panel itself
    section.style.height = `${SLIDE_COUNT * 100}vh`;

    // pan = the sticky viewport
    pan.style.cssText = `
      position: sticky;
      top: 0;
      height: 100vh;
      overflow: hidden;
    `;

    // track = the horizontal strip
    track.style.cssText = `
      display: flex;
      width: ${SLIDE_COUNT * 100}vw;
      height: 100%;
      will-change: transform;
    `;

    // each slide fills exactly one viewport
    slides.forEach((slide) => {
      slide.style.cssText = `
        flex: 0 0 100vw;
        width: 100vw;
        height: 100%;
      `;
    });
  };

  // ── RAF loop ───────────────────────────────────────────────────────────────

  let currentX = 0; // smoothed position (px)
  let targetX = 0; // raw target from scroll
  let rafId = null;

  const tick = () => {
    // lerp — 0.1 gives the weighted, momentum feel
    currentX += (targetX - currentX) * 0.1;
    if (Math.abs(targetX - currentX) < 0.3) currentX = targetX;

    track.style.transform = `translateX(${-currentX}px)`;

    // ── progress bar ──
    const maxX = (SLIDE_COUNT - 1) * window.innerWidth;
    const pct = maxX > 0 ? currentX / maxX : 0;
    if (progBar) {
      progBar.style.transform = `scaleX(${pct.toFixed(4)})`;
    }
    section.style.setProperty("--editorial-progress", pct.toFixed(4));

    rafId = requestAnimationFrame(tick);
  };

  // ── Scroll handler ─────────────────────────────────────────────────────────

  const onScroll = () => {
    if (compactQuery.matches || reducedMotion) return;

    const rect = section.getBoundingClientRect();
    const outerH = section.offsetHeight;
    const vpH = window.innerHeight;
    const scrolled = -rect.top; // px scrolled into section
    const maxScroll = outerH - vpH; // total scrollable distance
    const progress = Math.max(0, Math.min(1, scrolled / maxScroll));

    // convert to horizontal px
    targetX = progress * (SLIDE_COUNT - 1) * window.innerWidth;

    // active slide index
    const idx = Math.min(
      SLIDE_COUNT - 1,
      Math.round(progress * (SLIDE_COUNT - 1)),
    );
    setActive(idx);
  };

  // ── Init / resize ──────────────────────────────────────────────────────────

  const init = () => {
    if (compactQuery.matches || reducedMotion) {
      setupCompact();
      if (rafId) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
    } else {
      setupHijack();
      if (!rafId) rafId = requestAnimationFrame(tick);
    }
    onScroll();
  };

  // ── Wire events ────────────────────────────────────────────────────────────

  window.addEventListener("scroll", onScroll, { passive: true });

  const handleBreakpoint = () => init();
  if (typeof compactQuery.addEventListener === "function") {
    compactQuery.addEventListener("change", handleBreakpoint);
  } else {
    compactQuery.addListener(handleBreakpoint);
  }

  window.addEventListener("resize", () => {
    // recalculate on resize so track width stays correct
    if (!compactQuery.matches && !reducedMotion) {
      setupHijack();
    }
    onScroll();
  });

  window.addEventListener("load", init, { once: true });

  // kick off immediately
  init();
};

const setupOrbGallery = () => {
  document.querySelectorAll("[data-orb-gallery]").forEach((gallery) => {
    const items = Array.from(gallery.querySelectorAll("[data-orb-item]"));
    if (!items.length) {
      return;
    }

    const activate = (target) => {
      items.forEach((item) => {
        item.classList.toggle("is-active", item === target);
      });
    };

    items.forEach((item) => {
      if (!item.hasAttribute("tabindex")) {
        item.setAttribute("tabindex", "0");
      }

      item.addEventListener("mouseenter", () => activate(item));
      item.addEventListener("focus", () => activate(item));
      item.addEventListener("click", () => activate(item));
    });

    activate(gallery.querySelector("[data-orb-item].is-active") || items[0]);
  });
};

const setupContactForm = () => {
  const form = document.querySelector("[data-contact-form]");
  const status = document.querySelector("[data-form-status]");

  if (!form || !status) {
    return;
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const lang = document.documentElement.lang || "en";
    const formData = new FormData(form);
    const name = String(formData.get("name") || "").trim();
    const company = String(formData.get("company") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const message = String(formData.get("message") || "").trim();

    if (!name || !company || !phone || !message) {
      status.textContent = getTranslation(lang, "contact.form.validation");
      return;
    }

    const subject = encodeURIComponent(
      getTranslation(lang, "contact.form.subject"),
    );
    const body = encodeURIComponent(
      getTranslation(lang, "contact.form.name") +
        ": " +
        name +
        "\n" +
        getTranslation(lang, "contact.form.company") +
        ": " +
        company +
        "\n" +
        getTranslation(lang, "contact.form.phone") +
        ": " +
        phone +
        "\n\n" +
        getTranslation(lang, "contact.form.message") +
        ":\n" +
        message,
    );

    status.textContent = getTranslation(lang, "contact.form.opening");
    window.location.href =
      "mailto:info@najmadinconcrete.com?subject=" + subject + "&body=" + body;
  });
};

document.addEventListener("DOMContentLoaded", () => {
  setupLanguageSwitcher();
  setupNavigation();
  setupPageReady();
  setupSurfaceSync();
  setupCustomCursor();
  setupReveal();
  setupCounters();
  setupTilt();
  setupParallax();
  setupScrollMotion();
  setupEditorialSlider();
  setupHomeMotion();
  setupOrbGallery();
  setupContactForm();
});
