import { ProjectItem, SkillCategory, SoftSkill, ValueCard } from '../types/portfolio';

export const PERSONAL_INFO = {
  nameKm: 'សុផា បញ្ញា',
  nameEn: 'Sopha Panha',
  roleKm: 'និស្សិតវិទ្យាសាស្ត្រកុំព្យូទ័រ & អ្នកអភិវឌ្ឍន៍កម្មវិធី',
  roleEn: 'Computer Science Student & Independent Software Developer',
  universityKm: 'សាកលវិទ្យាល័យជាតិជាស៊ីមកំចាយមារ',
  universityEn: 'National Chea Sim University of Kamchaymear',
  facultyKm: 'មហាវិទ្យាល័យវិទ្យាសាស្ត្រ និងបច្ចេកវិទ្យា',
  facultyEn: 'Faculty of Science and Technology',
  email: 'nhakingkh@gmail.com',
  telegramHandle: '@sophapanha',
  telegramUrl: 'https://t.me/sophapanha',
  githubUrl: 'https://github.com',
  linkedinUrl: 'https://linkedin.com',
  locationKm: 'ខេត្តព្រៃវែង & រាជធានីភ្នំពេញ, ប្រទេសកម្ពុជា',
  locationEn: 'Prey Veng & Phnom Penh, Cambodia',
};

export const HERO_CONTENT = {
  headlineKm: 'កសាងបច្ចេកវិទ្យា។ ដោះស្រាយបញ្ហាជាក់ស្តែង។',
  headlineEn: 'Building Technology. Solving Real-World Problems.',
  subHeadlineKm: 'សួស្តី! ខ្ញុំគឺ សុផា បញ្ញា (Sopha Panha) ជានិស្សិតជំនាញវិទ្យាសាស្ត្រកុំព្យូទ័រ នៃសាកលវិទ្យាល័យជាតិជាស៊ីមកំចាយមារ។ ខ្ញុំជាអ្នកអភិវឌ្ឍន៍ដែលចូលចិត្តស្រាវជ្រាវ និងកសាងប្រព័ន្ធដោយឯករាជ្យ ដើម្បីប្រែក្លាយគំនិតឱ្យទៅជាការពិត។',
  subHeadlineEn: 'Hello! I am Sopha Panha, a Computer Science student at National Chea Sim University of Kamchaymear. I am an independent developer dedicated to in-depth research and building end-to-end software solutions that turn ideas into impactful reality.',
  stats: [
    { labelKm: 'ការអភិវឌ្ឍន៍ឯករាជ្យ', labelEn: 'Solo Development', value: '100%' },
    { labelKm: 'ជ្រើសរើសជាគម្រោងសារណា', labelEn: 'Selected Thesis', value: 'Grade A' },
    { labelKm: 'ប្រព័ន្ធ Bots & Mini Apps', labelEn: 'Bots & Mini Apps', value: '3+ Active' },
    { labelKm: 'បច្ចេកវិទ្យាស្នូល', labelEn: 'Core Stacks', value: 'Python · C# · JS' },
  ]
};

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'telegram-bots',
    titleKm: 'ប្រព័ន្ធស្វ័យប្រវត្តិកម្ម Telegram Bot (Telegram Automation Bots)',
    titleEn: 'Telegram Automation Bots & Mini App Ecosystem',
    roleKm: 'អ្នកស្រាវជ្រាវ និងអភិវឌ្ឍន៍ (Solo Developer)',
    roleEn: 'Solo Research & Systems Developer',
    taglineKm: 'ប្រព័ន្ធស្វ័យប្រវត្តិកម្ម bots និង Mini App បញ្ជាទិញអាហារ ភ្ជាប់រវាង Web & Telegram API',
    taglineEn: 'End-to-end automation bot ecosystem and interactive Telegram food-ordering Mini App',
    descKm: 'ស្រាវជ្រាវ និងសាងសង់ Bots ជាច្រើនប្រភេទដោយឯករាជ្យ ១០០% រួមមាន Nha Food (Mini App បញ្ជាទិញអាហារ), AIPRO (AI Chatbot ឆ្លាតវៃ), និង Translation Bot (បកប្រែជាភាសាខ្មែរស្វ័យប្រវត្ត)។ គម្រោងនេះបានជួយសម្រួលការងារស្មុគស្មាញឱ្យក្លាយជាស្វ័យប្រវត្តិ និងត្រូវបានជ្រើសរើសជាគម្រោងសារណា (Thesis Project) ទទួលការកោតសរសើរខ្ពស់ពីសាស្ត្រាចារ្យ។',
    descEn: 'Independently researched and built 100% solo bot solutions including Nha Food (interactive food ordering Mini App connecting Web UI with Telegram webhook), AIPRO (intelligent conversational AI powered by Groq Cloud API), and an automated story & news Khmer translator bot. Praised by university professors and selected as official Thesis Project.',
    techs: ['Python', 'HTML/CSS/JS', 'Groq Cloud API', 'Telegram API', 'Vercel'],
    category: 'telegram',
    accentColor: '#0ea5e9',
    isThesis: true,
    metricsKm: 'ជ្រើសរើសជាគម្រោងសារណា (Thesis Project) · ស្វ័យប្រវត្តិកម្ម ១០០%',
    metricsEn: 'Official University Thesis Project · 100% Automated',
    featuresKm: [
      'Nha Food: ប្រព័ន្ធ Mini App បញ្ជាទិញម្ហូបអាហារតាម Telegram WebApp ផ្ទាល់',
      'AIPRO: AI Chatbot ឆ្លើយតបសំណួរភ្លាមៗជាមួយល្បឿនលឿនតាមរយៈ Groq Cloud API',
      'Translation Bot: បកប្រែសាច់រឿង អត្ថបទ និងព័ត៌មានអន្តរជាតិជាភាសាខ្មែរដោយស្វ័យប្រវត្តិ',
      'ស្ថាបត្យកម្ម Cloud Serverless Hosting នៅលើ Vercel ជាមួយ Webhook ប្រកបដោយស្ថិរភាព'
    ],
    featuresEn: [
      'Nha Food: Full Telegram WebApp mini-app for intuitive food selection, cart & direct checkout',
      'AIPRO: Real-time high-velocity AI response engine powered by Groq Cloud LLM API',
      'Translation Bot: Automated narrative and news contextual Khmer translation pipeline',
      'Serverless webhook pipeline deployed seamlessly on Vercel infrastructure'
    ]
  },
  {
    id: 'ecommerce-platform',
    titleKm: 'គេហទំព័រពាណិជ្ជកម្មអេឡិចត្រូនិក (E-Commerce Web Application)',
    titleEn: 'E-Commerce Buy & Sell Platform',
    roleKm: 'អ្នកអភិវឌ្ឍន៍ (Full-Stack Developer)',
    roleEn: 'Full-Stack Developer',
    taglineKm: 'វេទិកាទិញលក់ទំនិញលើបណ្តាញអនឡាញ ប្រកបដោយសុវត្ថិភាព និងទិន្នន័យច្បាស់លាស់',
    taglineEn: 'Secure dynamic marketplace with catalog search, structured schema, and checkout logic',
    descKm: 'បង្កើតគេហទំព័រសម្រាប់ទិញ និងលក់ទំនិញ (Buy & Sell Platform) ដែលអនុញ្ញាតឱ្យអ្នកប្រើប្រាស់អាចស្វែងរក និងធ្វើប្រតិបត្តិការទិញលក់បានយ៉ាងងាយស្រួល។ ប្រព័ន្ធនេះត្រូវបានរៀបចំរចនាសម្ព័ន្ធទិន្នន័យបានយ៉ាងល្អ និងមានសុវត្ថិភាពខ្ពស់។',
    descEn: 'Engineered a modern buy-and-sell e-commerce web platform enabling effortless product catalog discovery, multi-category filtering, instant shopping basket calculation, and secure transaction workflows with clean relational data modeling.',
    techs: ['JavaScript', 'HTML5', 'CSS3', 'REST API', 'Responsive UI'],
    category: 'ecommerce',
    accentColor: '#6366f1',
    metricsKm: 'រចនាសម្ព័ន្ធទិន្នន័យស្អាត · ងាយស្រួលប្រើប្រាស់លើទូរស័ព្ទ និងកុំព្យូទ័រ',
    metricsEn: 'Optimized Data Architecture · Full Mobile & Desktop Responsiveness',
    featuresKm: [
      'ប្រព័ន្ធស្វែងរក និងចម្រាញ់ផលិតផលតាមប្រភេទ និងតម្លៃយ៉ាងរហ័ស',
      'កន្ត្រកទំនិញ (Interactive Shopping Cart) គណនាថ្លៃសរុប និងពន្ធដោយស្វ័យប្រវត្តិ',
      'ការរចនាបែបទំនើប Responsive Design ដំណើរការរលូនលើគ្រប់ឧបករណ៍',
      'សុវត្ថិភាពទិន្នន័យ និងការផ្ទៀងផ្ទាត់ទម្រង់បែបបទត្រឹមត្រូវ'
    ],
    featuresEn: [
      'Dynamic multi-criteria search and price/category filtering engine',
      'Real-time reactive cart drawer with automatic totals and delivery estimate calculations',
      'Mobile-first responsive interface with zero horizontal overflow',
      'Form validation and clean sanitization to guard user inputs'
    ]
  },
  {
    id: 'software-mapping',
    titleKm: 'ការអភិវឌ្ឍន៍កម្មវិធីកុំព្យូទ័រ និងគេហទំព័រផែនទី (Software & Interactive Mapping)',
    titleEn: 'Desktop OOP Software & Interactive GIS Mapping',
    roleKm: 'អ្នកអភិវឌ្ឍន៍ (Software & GIS Developer)',
    roleEn: 'Software & GIS Developer',
    taglineKm: 'កម្មវិធី Desktop C# តាមគោលការណ៍ OOP និងប្រព័ន្ធផែនទីអន្តរកម្មជាមួយ Leaflet.js',
    taglineEn: 'C# Windows Desktop application built on OOP principles paired with interactive Leaflet.js GIS',
    descKm: 'បង្កើតកម្មវិធីកុំព្យូទ័រ (Desktop Application) តាមរយៈភាសា C# (Visual Studio) ដោយប្រើគោលការណ៍ OOP និងអភិវឌ្ឍន៍គេហទំព័រផែនទីអន្តរកម្ម (Interactive Map) ដោយប្រើប្រាស់បណ្ណាល័យ Leaflet.js ដើម្បីបង្ហាញទីតាំងជាក់លាក់ និងទិន្នន័យភូមិសាស្ត្រ។',
    descEn: 'Developed a robust Windows desktop application in C# (Visual Studio) strictly adhering to Object-Oriented Programming (encapsulation, inheritance, polymorphism) combined with an interactive web mapping system using Leaflet.js for pinpoint geolocation and spatial intelligence.',
    techs: ['C#', 'Visual Studio', 'OOP Principles', 'Leaflet.js', 'GeoJSON'],
    category: 'software',
    accentColor: '#10b981',
    metricsKm: 'គោលការណ៍ OOP ពេញលេញ · ផែនទី GPS តាមដានទីតាំងពិត',
    metricsEn: 'Clean OOP Architecture · Real-time Coordinate Pinpointing',
    featuresKm: [
      'ស្ថាបត្យកម្ម C# OOP ស្អាត មាន Classes, Interfaces និង Event Handlers ច្បាស់លាស់',
      'ផែនទី Leaflet.js បង្ហាញទីតាំងសាកលវិទ្យាល័យ និងចំណុចសំខាន់ៗក្នុងប្រទេសកម្ពុជា',
      'មុខងារ Zoom, Pan, Custom Markers និងការគណនាចម្ងាយ (Geodesic Distance)',
      'អាចប្តូរ Layer ផែនទីរវាងទម្រង់ផ្កាយរណប និងទម្រង់ OpenStreetMap ធម្មតា'
    ],
    featuresEn: [
      'Structured C# OOP codebase with domain models, class hierarchies, and robust exception handling',
      'Leaflet.js interactive canvas highlighting university campus and key Cambodian landmarks',
      'Interactive pin inspection, coordinate reader, and spatial distance measurement',
      'Multi-layer tile support with smooth hardware-accelerated pan and zoom'
    ]
  },
  {
    id: 'graphic-uiux',
    titleKm: 'ការរចនាក្រាហ្វិក និង UI/UX (Graphic & UI/UX Design)',
    titleEn: 'Graphic Design, Branding & UI/UX Prototyping',
    roleKm: 'អ្នករចនា (Creative Designer)',
    roleEn: 'Creative UI/UX & Graphic Designer',
    taglineKm: 'ការរចនា Poster សិល្បៈបទ "MOONLIGHT", Brand Identity និងបទពិសោធន៍អ្នកប្រើប្រាស់',
    taglineEn: 'Visual artistic poster for song "MOONLIGHT", brand systems, and meticulous UI/UX craft',
    descKm: 'ក្រៅពីការសរសេរកូដ ខ្ញុំក៏មានគំនិតច្នៃប្រឌិតក្នុងការរចនា (Design) ដូចជាការរចនា Poster សម្រាប់គម្រោងសិល្បៈ (ឧទាហរណ៍៖ Artwork បទ "MOONLIGHT") ការរចនាអត្តសញ្ញាណ (Branding) ព្រមទាំងការរៀបចំ UI/UX សម្រាប់គម្រោង Portfolio នេះផ្ទាល់ ដើម្បីធានាបាននូវបទពិសោធន៍អ្នកប្រើប្រាស់ដ៏ល្អឥតខ្ចោះ។',
    descEn: 'Beyond code logic, I bring high visual fidelity and design thinking: crafting striking artistic poster designs (such as the music artwork for "MOONLIGHT"), cohesive branding identities, and designing pixel-perfect UI/UX interfaces with ergonomic visual balance.',
    techs: ['UI/UX Design', 'Graphic Design', 'Figma', 'Poster Artwork', 'Color Theory'],
    category: 'design',
    accentColor: '#ec4899',
    metricsKm: 'Artwork បទ "MOONLIGHT" · រចនាបទ UI ទំនើបបែប Tech-Glass',
    metricsEn: '"MOONLIGHT" Track Artwork · Modern Dark Glassmorphic Aesthetic',
    featuresKm: [
      'Artwork បទ "MOONLIGHT": ការរចនាបែប Cinematic Typography ជាមួយពន្លឺព្រះច័ន្ទរាត្រី',
      'Brand Identity: ការកំណត់ Color Palette, Font Hierarchy និង Layout Spacing',
      'UI/UX Architecture: ស្រាវជ្រាវបទពិសោធន៍អ្នកប្រើប្រាស់ (User Journey) និងកាត់បន្ថយ Dead Clicks',
      'ការផលិត Visual Assets សម្រាប់គេហទំព័រ និងកម្មវិធីបច្ចេកវិទ្យា'
    ],
    featuresEn: [
      'Artistic poster for "MOONLIGHT" exploring ethereal nocturnal lighting and expressive typography',
      'Comprehensive brand guideline covering font pairings, 60-30-10 color distributions, and visual weights',
      'User-centric UX flow with intuitive touch affordances and zero cognitive friction',
      'High-precision visual asset production for digital applications and Web interfaces'
    ]
  }
];

export const SKILLS_DATA: SkillCategory[] = [
  {
    id: 'programming',
    nameKm: '💻 ភាសាកូដ & បណ្តាញគេហទំព័រ (Programming & Web)',
    nameEn: '💻 Programming & Web Technologies',
    items: [
      {
        name: 'Python',
        level: 'ជំនាញខ្ពស់ (Proficient)',
        descKm: 'បង្កើតប្រព័ន្ធស្វ័យប្រវត្តិកម្ម Telegram Bots, Scripts និង API Backend',
        descEn: 'Telegram bot automation pipelines, backend script integration, and data processing',
        iconName: 'Code2'
      },
      {
        name: 'C# (C-Sharp)',
        level: 'កម្រិតមធ្យម-ខ្ពស់ (Intermediate+)',
        descKm: 'អភិវឌ្ឍន៍កម្មវិធី Desktop តាមរយៈ Visual Studio ជាមួយគោលការណ៍ OOP',
        descEn: 'Object-oriented Windows desktop application engineering in Visual Studio',
        iconName: 'Terminal'
      },
      {
        name: 'JavaScript (ES6+)',
        level: 'ជំនាញខ្ពស់ (Proficient)',
        descKm: 'បង្កើតគេហទំព័រ Dynamic, Telegram WebApp Mini Apps, DOM & Asynchronous Logic',
        descEn: 'Modern client-side scripting, Telegram Mini Apps, dynamic state and APIs',
        iconName: 'FileCode'
      },
      {
        name: 'HTML5 & CSS3',
        level: 'ជំនាញខ្ពស់ (Advanced)',
        descKm: 'រៀបចំរចនាសម្ព័ន្ធគេហទំព័រស្របតាមស្ដង់ដារ, Modern Flexbox & Grid, Responsive UI',
        descEn: 'Semantic markup, modern layout architecture, and mobile-first responsiveness',
        iconName: 'Layout'
      }
    ]
  },
  {
    id: 'tools-apis',
    nameKm: '🛠️ ឧបករណ៍ & សេវាកម្ម Cloud (Tools & APIs)',
    nameEn: '🛠️ Tools, Cloud & APIs',
    items: [
      {
        name: 'Groq Cloud API',
        level: 'ជំនាញអនុវត្ត (Applied)',
        descKm: 'តភ្ជាប់ម៉ូឌែលបញ្ញាសិប្បនិម្មិត AI ល្បឿនលឿនសម្រាប់ AIPRO Bot ឆ្លើយតបរហ័ស',
        descEn: 'Ultra-low latency LLM inference integration for the AIPRO intelligent bot',
        iconName: 'Cpu'
      },
      {
        name: 'Telegram Bot API & WebApp',
        level: 'ជំនាញឯកទេស (Specialized)',
        descKm: 'បង្កើត Bots ស្វ័យប្រវត្ត, Webhooks, Inline Queries និង Mini App Web Interface',
        descEn: 'Full bot lifecycle, serverless webhooks, and embedded Telegram WebApps',
        iconName: 'Bot'
      },
      {
        name: 'Leaflet.js',
        level: 'ជំនាញអនុវត្ត (Applied)',
        descKm: 'បង្កើតគេហទំព័រផែនទីអន្តរកម្ម GeoJSON, Custom Markers, Coordinate Mapping',
        descEn: 'Interactive mapping, custom geospatial markers, and GIS visualization',
        iconName: 'MapPin'
      },
      {
        name: 'Vercel Cloud Hosting',
        level: 'ជំនាញអនុវត្ត (Applied)',
        descKm: 'ដាក់ឱ្យដំណើរការគេហទំព័រ Serverless, CI/CD Deployment និង Domain Management',
        descEn: 'Serverless deployment, edge routes, and production app hosting',
        iconName: 'Cloud'
      }
    ]
  },
  {
    id: 'design',
    nameKm: '🎨 ការរចនា & មេឌៀ (Design & Creative)',
    nameEn: '🎨 Design & Creative Media',
    items: [
      {
        name: 'UI/UX Design',
        level: 'ជំនាញអនុវត្ត (Applied)',
        descKm: 'រចនាគេហទំព័រងាយស្រួលប្រើប្រាស់ គិតគូរពីបទពិសោធន៍អ្នកប្រើប្រាស់ និងសោភ័ណភាព',
        descEn: 'Ergonomic user journeys, wireframing, component systems, and design polish',
        iconName: 'Layers'
      },
      {
        name: 'Graphic Design',
        level: 'ជំនាញអនុវត្ត (Applied)',
        descKm: 'រចនា Poster សិល្បៈ (ដូចជាបទ "MOONLIGHT"), Brand Identity, Social Artwork',
        descEn: 'Artistic music posters, typography composition, and brand asset crafting',
        iconName: 'Palette'
      },
      {
        name: 'Video Editing',
        level: 'ជំនាញអនុវត្ត (Applied)',
        descKm: 'កាត់តវីដេអូសម្រាប់បង្ហាញគម្រោង កម្មវិធី និងមាតិកាឌីជីថលបែបទំនើប',
        descEn: 'Dynamic project showcase video editing, pacing, and digital storytelling',
        iconName: 'Video'
      }
    ]
  }
];

export const SOFT_SKILLS: SoftSkill[] = [
  {
    titleKm: 'ការស្រាវជ្រាវ និងសិក្សាដោយឯករាជ្យ (Independent Research)',
    titleEn: 'Independent Research & Self-Directed Learning',
    descKm: 'សមត្ថភាពក្នុងការស្វែងយល់បច្ចេកវិទ្យាថ្មីៗដោយខ្លួនឯង អានឯកសារបច្ចេកទេស និងដោះស្រាយឧបសគ្គស្មុគស្មាញដោយមិនចាំបាច់មានការត្រួតពិនិត្យជាប់លាប់។',
    descEn: 'High capacity to absorb novel technologies, dissect API documentation, and conquer complex engineering hurdles autonomously.',
    iconName: 'SearchCheck'
  },
  {
    titleKm: 'ការដោះស្រាយបញ្ហា (Problem Solving)',
    titleEn: 'Critical Problem Solving',
    descKm: 'វិភាគបញ្ហាយ៉ាងហ្មត់ចត់ បំបែកបញ្ហាធំៗឱ្យទៅជាដំណាក់កាលតូចៗ និងស្វែងរកដំណោះស្រាយកូដដែលមានប្រសិទ្ធភាព និងចំណាយពេលតិច។',
    descEn: 'Systematic root-cause analysis, decomposing intricate issues into modular steps, and delivering lean, resilient code.',
    iconName: 'Lightbulb'
  },
  {
    titleKm: 'ភាពច្នៃប្រឌិត និងការច្នៃប្រឌិតថ្មី (Creativity & Innovation)',
    titleEn: 'Creativity & Technological Innovation',
    descKm: 'រួមបញ្ចូលគ្នារវាងការគិតបែបវិទ្យាសាស្ត្រកុំព្យូទ័រ និងសិល្បៈរចនា ដើម្បីបង្កើតផលិតផលដែលមិនត្រឹមតែដំណើរការបានល្អ ប៉ុន្តែថែមទាំងទាក់ទាញភ្នែក។',
    descEn: 'Harmonizing computational engineering with aesthetic sensibility to build products that are functionally rigorous and visually captivating.',
    iconName: 'Sparkles'
  }
];

export const WHY_WORK_WITH_ME: ValueCard[] = [
  {
    number: '01',
    titleKm: 'សមត្ថភាពធ្វើការឯករាជ្យ',
    titleEn: 'Autonomous Execution',
    badgeKm: 'ពីចំណុចសូន្យដល់ចប់',
    badgeEn: 'End-to-End Ownership',
    descKm: 'ខ្ញុំមានសមត្ថភាពក្នុងការគិត ស្រាវជ្រាវ និងសាងសង់គម្រោងតាំងពីចំណុចសូន្យរហូតដល់ចេញជារូបរាងតែម្នាក់ឯង ដោយមិនបាច់រង់ចាំការណែនាំរាល់ជំហាន។',
    descEn: 'Proven ability to conceptualize, research, architect, and deliver production-ready software systems completely from scratch independently.',
    iconName: 'Compass'
  },
  {
    number: '02',
    titleKm: 'ផ្តោតលើដំណោះស្រាយជាក់ស្តែង',
    titleEn: 'Solution-Driven Mindset',
    badgeKm: 'កូដមានប្រយោជន៍ពិត',
    badgeEn: 'Real-World Impact',
    descKm: 'រាល់កូដដែលខ្ញុំសរសេរ គឺផ្តោតលើការដោះស្រាយបញ្ហាជាក់ស្តែង ជួយសម្រួលការងារមនុស្ស និងសន្សំសំចៃពេលវេលា មិនមែនសរសេរត្រឹមតែទ្រឹស្តីនោះទេ។',
    descEn: 'Every line of code is written to solve concrete problems: eliminating repetitive manual friction, streamlining operations, and delivering tangible utility.',
    iconName: 'Target'
  },
  {
    number: '03',
    titleKm: 'ការរៀនសូត្រឥតឈប់ឈរ',
    titleEn: 'Continuous Learning',
    badgeKm: 'វិវត្តន៍ឥតឈប់ឈរ',
    badgeEn: 'Always Evolving',
    descKm: 'ក្នុងនាមជានិស្សិតព័ត៌មានវិទ្យា ខ្ញុំតែងតែធ្វើបច្ចុប្បន្នភាពខ្លួនឯងជានិច្ចជាមួយបច្ចេកវិទ្យាថ្មីៗ សាកល្បងឧបករណ៍ទំនើបៗ និងត្រៀមខ្លួនសម្រាប់បញ្ហាប្រឈមថ្មីៗ។',
    descEn: 'As an ambitious Computer Science student, I continually upgrade my mental models with bleeding-edge technologies, cloud paradigms, and modern workflows.',
    iconName: 'TrendingUp'
  }
];
