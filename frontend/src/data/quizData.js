// Quiz data simulasi untuk setiap UX Law
// Format: skenario praktis yang menguji pemahaman cara kerja hukum UX
export const quizData = {
  'aesthetic-usability-effect': [
    {
      question: "🎨 SIMULASI: Anda mendesain aplikasi e-commerce. Dua prototype diuji:\n\nPrototype A: Tampilan minimalis monokrom, navigasi sangat jelas, checkout 3 langkah mudah\nPrototype B: Gradien warna-warni, animasi smooth, foto produk HD, checkout sama seperti A\n\nDalam user testing, 70% users mengatakan Prototype B 'lebih mudah digunakan' meski prosesnya identik. Mengapa ini terjadi?",
      options: [
        "Users berbohong dalam testing",
        "Aesthetic-Usability Effect: desain indah membuat users percaya sistem lebih usable",
        "Prototype B memang lebih cepat karena animasi",
        "Users lebih fokus pada warna daripada fungsi"
      ],
      correctAnswer: 1,
      explanation: "Ini adalah contoh nyata Aesthetic-Usability Effect. Desain yang lebih indah (Prototype B) menciptakan persepsi positif di otak user, membuat mereka PERCAYA bahwa sistem lebih mudah digunakan, meskipun fungsionalitas identik."
    },
    {
      question: "⚠️ SKENARIO MASALAH: Tim Anda meluncurkan aplikasi banking dengan UI super polished - glassmorphism, micro-interactions, gradient buttons. User reviews: 4.8/5 untuk design!\n\nNamun, analytics menunjukkan:\n- 45% user gagal menyelesaikan transfer pertama kali\n- Support tickets meningkat 3x\n- Time-on-task 2x lebih lama dari target\n\nApa yang harus dilakukan?",
      options: [
        "Pertahankan design indah, users akan terbiasa",
        "Hapus semua aesthetic, buat UI plain",
        "Identifikasi usability issues yang ter-mask oleh aesthetic, perbaiki keduanya",
        "Aesthetic sudah benar, masalahnya di user education"
      ],
      correctAnswer: 2,
      explanation: "Ini bahaya dari Aesthetic-Usability Effect! Design yang indah MENUTUPI masalah usability serius dalam testing (user terlalu toleran). Solusinya: tetap jaga aesthetic, tapi identifikasi dan perbaiki actual usability issues yang ter-mask. Beautiful AND functional."
    },
    {
      question: "🏆 PENERAPAN: Anda redesign dashboard analytics. Mana pendekatan yang BENAR menggunakan Aesthetic-Usability Effect?",
      options: [
        "Buat chart 3D animasi mewah, hide data detail di tooltip",
        "Buat layout plain hitam-putih, fokus 100% pada data clarity",
        "Design visual hierarchy yang indah + pastikan data tetap mudah dibaca dan actionable",
        "Copy design dashboard populer, aesthetic = usability"
      ],
      correctAnswer: 2,
      explanation: "Penerapan benar: gunakan aesthetic untuk menciptakan first impression positif dan engagement, TAPI pastikan actual usability tetap excellent. Visual hierarchy yang indah membantu user memproses informasi lebih baik (gabungan aesthetic + function)."
    }
  ],
  
  'fitts-law': [
    {
      question: "📱 SIMULASI MOBILE: Anda mendesain app food delivery. Ada 3 action button utama:\n\n[Tambah ke Cart] - 60x60px, di tengah produk\n[Checkout] - 40x40px FAB, pojok kanan bawah  \n[Search] - 36x36px icon, pojok kanan atas\n\nUser testing: 30% users miss-tap saat mau checkout. Kenapa?",
      options: [
        "Button checkout warnanya kurang kontras",
        "FAB 40x40px < minimum 44x44px touch target",
        "Posisi pojok kanan bawah sulit dijangkau",
        "User tidak terbiasa dengan FAB pattern"
      ],
      correctAnswer: 1,
      explanation: "Fitts's Law in action! Button checkout hanya 40x40px, dibawah minimum 44x44px untuk touch target. Semakin kecil target, semakin sulit (dan lama) untuk mencapainya = banyak miss-tap. Size matters!"
    },
    {
      question: "⚡ SKENARIO: E-commerce checkout page:\n- [Cancel] button: 120px wide, abu-abu, di kiri\n- [Pay Now] button: 80px wide, hijau, di kanan\n\nJarak antara kedua button: 40px\n\nData analytics: 12% user accidentally klik Cancel saat mau Pay. Apa solusi terbaik berdasarkan Fitts's Law?",
      options: [
        "Tukar posisi kedua button",
        "Perbesar [Pay Now] jadi 160px, jarak antar button jadi 80px minimum",
        "Hapus button Cancel, paksa user harus bayar",
        "Ubah warna button Cancel jadi merah"
      ],
      correctAnswer: 1,
      explanation: "Solusi Fitts's Law: (1) PRIMARY action [Pay Now] harus LEBIH BESAR dari secondary action (160px vs 120px), (2) JARAK adequate (80px+) untuk mencegah mis-click. Distance + Size = akurasi!"
    },
    {
      question: "🎯 PENERAPAN: Dashboard web app dengan menu navigation di sidebar kiri. Menu items 200px wide. Di mana posisi OPTIMAL untuk tombol [Save Changes] yang sering dipakai?",
      options: [
        "Center layar (secara horizontal dan vertikal)",
        "Sudut kiri atas (0,0) - infinite edge, mudah dijangkau",
        "Floating di tengah bawah content area",
        "Di dalam dropdown menu untuk hemat space"
      ],
      correctAnswer: 1,
      explanation: "Fitts's Law: edges dan corners = 'infinite targets' (cursor tidak bisa lewat). Sudut kiri atas adalah PRIME LOCATION untuk frequent actions - throw mouse ke sudut = instant hit, tidak perlu aim presisi. Ini kenapa logo/home biasa di pojok!"
    }
  ],

  'hicks-law': [
    {
      question: "🍔 SIMULASI RESTAURANT APP: Dua versi menu filtering:\n\nVERSI A: 15 filter options ditampilkan sekaligus\n(Cuisine, Price, Distance, Rating, Delivery Time, Diet, Halal, Alcohol, Parking, WiFi, Outdoor, Kids, Reservation, Payment, Promo)\n\nVERSI B: 5 kategori utama, each expand ke sub-options\n(Type, Budget, Location, Features, Specials)\n\nUser testing: Versi A = avg 8 detik untuk mulai filter, Versi B = avg 3 detik. Kenapa?",
      options: [
        "Versi B warnanya lebih menarik",
        "Hick's Law: 15 choices overwhelming = decision paralysis, 5 choices = faster decision",
        "User lebih suka click expand daripada scroll",
        "Versi A terlalu advanced untuk user"
      ],
      correctAnswer: 1,
      explanation: "Klasik Hick's Law! Waktu decision meningkat LOGARITMIK dengan jumlah choices. 15 options sekaligus = cognitive overload = user freeze. Break down into chunked categories = faster initial decision, user commit to flow."
    },
    {
      question: "⏱️ SKENARIO: E-learning platform sign-up form:\n\nORIGINAL (1 page):\n- Name, Email, Password\n- Country (dropdown 195 countries)\n- Interests (pilih dari 50 topics)\n- Experience level (6 options)\n- Goals (8 options)\n- Avatar upload\n\nCompletion rate: 23% | Avg time: 4 min\n\nREDESIGN options - mana yang paling efektif?",
      options: [
        "Reduce countries jadi 10 populer saja",
        "Multi-step: Step 1(Name/Email/Pass) → Step 2(Country) → Step 3(Interests) → Step 4(Goals)",
        "Hapus semua pilihan, buat free text input aja",
        "Tambah AI assistant untuk bantu user pilih"
      ],
      correctAnswer: 1,
      explanation: "Hick's Law solution: PROGRESSIVE REDUCTION melalui multi-step form. Setiap step = focused, limited choices = faster decisions. User tackle satu hal at a time, reduces paralysis. Expected improvement: ~60-70% completion rate, ~2 min avg time."
    },
    {
      question: "🎮 PENERAPAN KOMPLEKS: Game settings menu. Ada 45+ options (graphics, audio, controls, gameplay, accessibility). Bagaimana organize sesuai Hick's Law TANPA kehilangan functionality?",
      options: [
        "Tampilkan semua 45 options dalam scroll list",
        "Buat 'Quick Presets' (Low/Med/High/Ultra) + Advanced tab untuk manual tuning",
        "Hide advanced options, show 10 most popular only",
        "Gunakan AI auto-detect optimal settings"
      ],
      correctAnswer: 1,
      explanation: "BEST practice Hick's Law untuk complex systems: (1) Offer simple path (4 presets) untuk majority users = instant decision, (2) Preserve power-user control (Advanced tab) untuk yang butuh. Reduces initial choice count tanpa sacrifice functionality!"
    }
  ],

  'millers-law': [
    {
      question: "📞 SIMULASI: Desain form input nomor telepon. Tiga format berbeda:\n\nA: [08123456789] - 11 digit berurutan\nB: [0812-3456-789] - chunked 4-4-3\nC: [0812 3456 789] - chunked dengan spasi\n\nUser diminta hafal nomor mereka selama 10 detik, lalu ketik. Mana yang paling akurat?",
      options: [
        "Format A - simple, no distraction",
        "Format B atau C - chunking helps working memory (Miller's Law: 7±2 chunks)",
        "Semua format sama saja",
        "Format A tercepat untuk diketik"
      ],
      correctAnswer: 1,
      explanation: "Miller's Law in practice! 11 digit berurutan = OVERLOAD working memory (7±2 limit). Chunking into 3 groups (0812-3456-789) = 3 chunks of info, JAUH lebih mudah diingat. Ini kenapa credit card, phone numbers selalu di-chunk!"
    },
    {
      question: "🧭 SKENARIO NAVIGATION: Main menu website:\n\nOPTION A:\nProducts | Services | Solutions | Resources | Company | Support | Partners | Developers | Blog | Contact | Careers | Press | Events | Community | Documentation | API\n\nOPTION B:\n[Products▾] [Resources▾] [Company▾] [Support▾]\n  - Sub-items grouped logically\n\nUser task: 'Find API documentation'. Avg time - A: 12 sec, B: 4 sec. Kenapa?",
      options: [
        "Option B warna menu lebih jelas",
        "Miller's Law: 16 items overwhelm working memory, 4 categories dengan sub-groups manageable",
        "User lebih suka dropdown menu",
        "Option A terlalu horizontal"
      ],
      correctAnswer: 1,
      explanation: "Perfect Miller's Law application! 16 top-level items = impossible to scan efficiently (exceed 7±2). Grouping into 4 logical categories = each fits working memory, user quickly eliminate wrong categories, dive into right one. Chunking = faster navigation!"
    },
    {
      question: "📝 PENERAPAN: Onboarding checklist untuk new users:\n\n❌ BAD: 15-item flat checklist\n✅ GOOD: Gimana structure yang optimal?",
      options: [
        "1 checklist dengan 15 items, pake numbering",
        "3 phases: 'Setup' (5 items), 'Learn' (5 items), 'Customize' (5 items) - collapse phases",
        "15 items tapi pake warna berbeda tiap 3 items",
        "Hapus checklist, pake video tutorial 15 menit"
      ],
      correctAnswer: 1,
      explanation: "Miller's Law optimization: (1) Group 15 items into 3 phases (5+5+5), (2) Collapse completed phases, (3) User fokus 1 phase at a time = max 5 items in working memory. Reduces overwhelm, increases completion rate significantly!"
    }
  ],

  'jakobs-law': [
    {
      question: "🛒 SIMULASI E-COMMERCE: Startup baru ingin 'berbeda' dari kompetitor. Design proposal:\n\n❌ Shopping cart icon di KIRI BAWAH (bukan kanan atas seperti biasa)\n❌ Checkout button warna ABU-ABU (bukan hijau/biru)\n❌ Search di FOOTER (bukan header)\n\nBeta testing: 65% user struggle finding cart, 40% confused dimana search.\n\nKenapa terjadi?",
      options: [
        "Users tidak cukup smart untuk adaptasi",
        "Jakob's Law: Users expect familiar patterns dari situs lain yang sering mereka pakai",
        "Design terlalu innovative untuk market",
        "Butuh lebih banyak user education/tutorial"
      ],
      correctAnswer: 1,
      explanation: "Classic Jakob's Law violation! Users menghabiskan 99% waktu di situs LAIN (Amazon, Tokopedia, etc). Mereka datang dengan MENTAL MODEL dari situs tersebut. Break conventions = cognitive friction, frustration, abandoned carts. Innovation ≠ reinvent basic patterns!"
    },
    {
      question: "🔄 SKENARIO REDESIGN: Bank lama mau modernize app mereka. Old app: outdated look tapi users familiar (5 tahun). New app: beautiful, tapi layout completely different.\n\nPost-launch:\n- App store reviews drop 4.2 → 2.8\n- Support calls naik 400%\n- Comments: 'I can't find anything!', 'Bring back old app!'\n\nApa strategy terbaik untuk launch?",
      options: [
        "Force users ke new app, mereka akan terbiasa eventually",
        "Keep old app forever, jangan update",
        "GRADUAL MIGRATION: Allow toggle old/new interface, educate users, phase out old version slowly",
        "Redesign lagi, blend old + new"
      ],
      correctAnswer: 2,
      explanation: "Jakob's Law best practice untuk major changes: (1) Offer CHOICE - let users toggle between versions, (2) In-app GUIDANCE pada new version, (3) Phased MIGRATION (3-6 months), (4) Communicate BENEFITS clearly. Respect existing mental models sambil introduce improvements!"
    },
    {
      question: "💡 PENERAPAN SMART: Social media app baru mau compete dengan Instagram/TikTok. Mana yang BENAR balance innovation vs convention?",
      options: [
        "100% copy Instagram - safe but boring",
        "100% unique layout - risky, steep learning curve",
        "LEVERAGE familiar patterns (feed, stories, search) + INNOVATE on core feature (new video editing AI)",
        "Mix random elements dari berbagai apps"
      ],
      correctAnswer: 2,
      explanation: "PERFECT Jakob's Law strategy! (1) Use CONVENTIONS untuk navigation/core interactions (users know how to use immediately), (2) INNOVATE pada VALUE PROPOSITION (fitur yang differentiate). Example: TikTok pake familiar swipe/feed, tapi revolutionize video algorithm. Don't waste user's cognitive budget on learning basic navigation!"
    }
  ],

  'doherty-threshold': [
    {
      question: "⚡ SIMULASI SEARCH: E-commerce search implementation:\n\nVERSI A: Ketik query → tekan Enter → loading 2 detik → show results\nVERSI B: Ketik query → instant suggestions appear (200ms) → select → show results (300ms)\n\nUser engagement metrics:\nA: 45% bounce after first search, 2.1 searches per session\nB: 15% bounce, 4.8 searches per session\n\nKenapa perbedaan drastis?",
      options: [
        "Versi B algoritmanya lebih bagus",
        "Doherty Threshold: <400ms response = user dalam flow state, >400ms = break concentration",
        "Auto-suggestions lebih menarik secara visual",
        "Users suka dropdown menu"
      ],
      correctAnswer: 1,
      explanation: "Doherty Threshold in action! Versi A (2000ms) = user wait → lose focus → question intent → bounce. Versi B (<400ms total) = interaction feels INSTANTANEOUS → brain stays engaged → encourage exploration. Sub-400ms response = productivity boost, higher engagement!"
    },
    {
      question: "🎯 SKENARIO FORM: Multi-step registration form (5 steps). Implementation options:\n\nA: Click Next → 1.5 sec loading → next step\nB: Click Next → instant transition + save in background\nC: Click Next → 600ms animation → next step\n\nCompletion rates: A=42%, B=78%, C=65%. Kenapa?",
      options: [
        "Users tidak suka animasi",
        "Option B: Optimistic UI (<400ms perceived) keeps flow, background save maintains data integrity",
        "Option A lebih reliable",
        "1.5 sec butuh untuk validation"
      ],
      correctAnswer: 1,
      explanation: "Doherty Threshold optimization! Option B: OPTIMISTIC UI = instant feedback (<100ms), BACKGROUND PROCESSING = technical work tidak block user. Option C (600ms animation) = above threshold, breaks flow. Key: PERCEIVED performance > actual performance untuk engagement!"
    },
    {
      question: "⏱️ PENERAPAN: Dashboard dengan heavy data visualization. Initial load: 3 seconds unavoidable (big dataset). Gimana achieve Doherty Threshold?",
      options: [
        "Show blank screen, wait 3 sec, show full dashboard",
        "Loading spinner 3 detik",
        "SKELETON SCREENS + PROGRESSIVE LOADING: Structure visible 100ms → Basic charts 800ms → Full details 3sec",
        "Error message: 'Please wait...'"
      ],
      correctAnswer: 2,
      explanation: "Advanced Doherty strategy! When actual load >400ms unavoidable: (1) SKELETON: Structure appears <100ms = instant feedback, (2) PROGRESSIVE: Show usable content ASAP, (3) BACKGROUND: Load details incrementally. Perceived wait time <<< actual load time. Keep users engaged throughout!"
    }
  ],

  'law-of-proximity': [
    {
      question: "📋 SIMULASI FORM: Checkout form design - dua layout:\n\nLAYOUT A:\nName: [____]\nEmail: [____]\n(20px space)\nCard Number: [____]\nExpiry: [____] CVV: [____]\n(20px space)\nShipping: [____]\nCity: [____]\n\nLAYOUT B:\nPersonal Info:\n  Name: [____]\n  Email: [____]\n(40px space)\nPayment:\n  Card: [____]\n  Expiry: [____] CVV: [____]\n(40px space)\nShipping:\n  Address: [____]\n  City: [____]\n\nUser testing: Layout A → 28% field errors | Layout B → 12% errors. Why?",
      options: [
        "Layout B punya labels yang lebih jelas",
        "Law of Proximity: grouping related fields dengan spacing creates clear sections, reduces confusion",
        "Layout A terlalu compact",
        "Users lebih suka section headers"
      ],
      correctAnswer: 1,
      explanation: "Law of Proximity in forms! Layout B: (1) CLOSE spacing within groups (name + email), (2) LARGE spacing between groups (40px), (3) Brain automatically groups related items = less cognitive load, fewer mistakes. Proximity = visual hierarchy tanpa perlu colors/borders!"
    },
    {
      question: "🗂️ SKENARIO CARD LAYOUT: Product listing page - 12 products:\n\nOPTION A: Grid 3x4, uniform 20px spacing between all cards\nOPTION B: Grid 3x4, cards grouped by category (electronics/fashion/home) - 10px within category, 40px between categories\n\nClick-through rates: A=3.2%, B=5.8%. Analytics: B users browse 2x more categories. Kenapa?",
      options: [
        "Option B warnanya lebih menarik per category",
        "Proximity creates perceived categories → easier scanning → users explore more",
        "40px spacing lebih aesthetic",
        "Users randomly click more di Option B"
      ],
      correctAnswer: 1,
      explanation: "Proximity for information architecture! Option B: Variable spacing COMMUNICATES structure tanpa text labels. Brain sees: 'ini satu grup, itu grup lain' → scanability up, decision-making faster. Users naturally compare within groups, then jump to next group. Proximity = silent visual communication!"
    },
    {
      question: "⚙️ PENERAPAN: Settings panel - 25 options. Cara organize terbaik dengan Proximity?",
      options: [
        "Alphabetical list, uniform spacing",
        "Random order, buat compact",
        "GROUP by function (Account:5 items, Privacy:8 items, Notifications:7 items, Display:5 items) + varying whitespace",
        "Two columns, split random"
      ],
      correctAnswer: 2,
      explanation: "Master Proximity usage: (1) Group by LOGICAL RELATIONSHIPS (Account, Privacy, etc), (2) TIGHT spacing dalam group (5-10px), (3) GENEROUS spacing antar group (30-50px), (4) Optional: subtle dividers. Result: Users instantly see structure, find settings 3x faster. Proximity + logical grouping = powerful combo!"
    }
  ],

  'occams-razor': [
    {
      question: "🎨 SIMULASI REDESIGN: Dashboard analytics company. CEO mau 'impress investors' dengan new design:\n\nPROPOSAL: \n- 15 chart types (line, bar, pie, donut, radar, scatter, etc)\n- 3D animations untuk semua charts\n- Custom color picker untuk each data point\n- Export ke 10 formats (PDF, PNG, SVG, Excel, CSV, JSON, XML, etc)\n- AI auto-commentary untuk each metric\n\nActual user research: 90% users hanya pakai 3 chart types, export PDF aja.\n\nApa yang SALAH dengan proposal?",
      options: [
        "Kurang fitur advanced",
        "Violates Occam's Razor: added complexity tanpa solve actual user problems",
        "Investornya ga akan terkesan",
        "3D terlalu berat untuk render"
      ],
      correctAnswer: 1,
      explanation: "Classic Occam's Razor violation! Adding features ≠ adding value. Proposal: High complexity (15 chart types, 10 exports) tapi low utility (users cuma pakai 3 charts, 1 export). Result: Confused users, bloated app, high maintenance cost. Solution: Focus on 3 charts but make them EXCELLENT, 1-click PDF export, invest in performance!"
    },
    {
      question: "📱 SKENARIO ONBOARDING: Mobile app untuk task management. Dua approaches:\n\nAPP A: 7-screen tutorial (swipe through features) → quiz → setup preferences (10 options) → ready\nAPP B: 'Create your first task' → inline tips saat user interact → done\n\nDay 7 retention: A=23%, B=67%. Kenapa?",
      options: [
        "App B tutorialnya lebih fun",
        "Occam's Razor: B minimizes friction, learning by doing > passive tutorial",
        "Quiz di A bikin users frustrated",
        "Setup preferences terlalu banyak"
      ],
      correctAnswer: 1,
      explanation: "Occam's Razor in onboarding! App A: FRONT-LOADED complexity → user overwhelmed sebelum see value. App B: PROGRESSIVE disclosure → user accomplishes something immediately (first task) → confidence up → tips in context. Simplest path to value = best retention. Remove barriers, add guidance gradually!"
    },
    {
      question: "🏆 PENERAPAN: Social media post composer. Feature requests dari users:\n\n1. Text formatting (bold, italic, etc)\n2. Emoji picker\n3. GIF search\n4. Poll creator\n5. Location tag\n6. Friend tag\n7. Schedule post\n8. AI writing assistant\n9. Post analytics preview\n10. Multi-account switcher\n\nData: 80% posts = plain text + maybe emoji.\n\nBagaimana prioritize dengan Occam's Razor?",
      options: [
        "Implement semua 10 features - satisfy everyone",
        "Implement random 5 features",
        "START with #2 (emoji - 80% use), THEN #7 (schedule - power users), ITERATE based on usage data",
        "Implement yang paling complex (#8 AI) untuk differentiation"
      ],
      correctAnswer: 2,
      explanation: "PERFECT Occam's Razor product strategy! (1) Identify CORE use case (plain text + emoji = 80%), (2) Implement ESSENTIAL features first (emoji), (3) Add features INCREMENTALLY based on DATA (schedule for power users), (4) Avoid PREMATURE complexity (AI/analytics bisa later). Keep it simple, ship fast, iterate based on real usage!"
    }
  ],

  'goal-gradient-effect': [
    {
      question: "🎯 SIMULASI GAMIFICATION: Fitness app dengan reward system. Dua approaches:\n\nAPP A: 'Complete 100 workouts to unlock Premium Badge'\n  - Progress: 0/100 (start dari nol)\n\nAPP B: 'Complete 100 workouts to unlock Premium Badge'\n  - Progress: 10/100 (free 10 workouts credited)\n\nWeek 4 active users: A=31%, B=58%. Kenapa?",
      options: [
        "App B lebih generous dengan rewards",
        "Goal-Gradient Effect: Users dengan artificial head start (10/100) feel closer to goal = higher motivation",
        "Starting dari 10 lebih fair",
        "100 workouts terlalu banyak di App A"
      ],
      correctAnswer: 1,
      explanation: "Goal-Gradient Effect in action! App B: Giving artificial progress (10/100) membuat goal terasa LEBIH DEKAT = motivasi naik. Brain calculates: 'Only 90 more!' vs 'Need 100'. Proximity to goal = acceleration of effort. Ini kenapa loyalty cards sering pre-stamped!"
    },
    {
      question: "📊 SKENARIO PROGRESS BAR: E-learning course completion:\n\nDESIGN A: Linear progress bar 0-100%, update tiap lesson\nDESIGN B: Segmented milestones - 'Beginner' (25%) → 'Intermediate' (50%) → 'Advanced' (75%) → 'Expert' (100%)\nDESIGN C: No visible progress, just 'lessons completed' counter\n\nCompletion rates: A=42%, B=67%, C=28%. Kenapa B menang?",
      options: [
        "Users suka badge milestones",
        "Goal-Gradient: Multiple sub-goals create momentum - always 'close' to next milestone vs distant single goal",
        "Segmented lebih aesthetic",
        "Design C terlalu minimalis"
      ],
      correctAnswer: 1,
      explanation: "Advanced Goal-Gradient! Design B breaks BIG goal (100%) into SMALLER achievable goals (4 milestones @ 25% each). Psychology: Always within reach of NEXT milestone = sustained motivation. Design A: Far from 100% = demotivating. Design C: No visible progress = no gradient effect. Break big goals into small wins!"
    },
    {
      question: "🏃 PENERAPAN: Onboarding checklist - 10 steps total. Mana yang optimize Goal-Gradient Effect?",
      options: [
        "Show 0/10 complete, linear list",
        "Show 3/10 complete (pre-check easy wins: 'Account created', 'Email verified', 'Logged in'), group remaining",
        "Hide progress, show only current step",
        "Show 10/10 complete immediately (fake it)"
      ],
      correctAnswer: 1,
      explanation: "PERFECT Goal-Gradient strategy! (1) Pre-complete AUTOMATIC wins (account created, logged in) = instant 30% progress, (2) USER sees: 'Already 3/10!' vs intimidating '0/10', (3) Psychological momentum = higher completion. Not cheating - those steps DID happen. Boost perceived progress legitimately!"
    }
  ],

  'law-of-common-region': [
    {
      question: "🎨 SIMULASI FORM DESIGN: Registration form dengan 12 fields. Dua layouts:\n\nLAYOUT A: All 12 fields in single white background, no grouping\nLAYOUT B: Fields grouped in 3 bordered cards:\n  - 'Personal Info' card (name, email, phone, DOB)\n  - 'Account' card (username, password, confirm)\n  - 'Preferences' card (language, timezone, notifications, newsletter)\n\nForm errors: A=35%, B=18%. Kenapa?",
      options: [
        "Layout B warnanya lebih menarik",
        "Common Region: Cards create clear boundaries = brain automatically groups related fields = less confusion",
        "3 sections lebih organized",
        "Borders membantu users fokus"
      ],
      correctAnswer: 1,
      explanation: "Law of Common Region! Layout B: Visual BOUNDARIES (cards/borders) create perceived GROUPS tanpa perlu spacing saja. Brain sees: 'This region = personal info', 'That region = account'. Result: Less cognitive load, fewer field errors (ex: tidak masukkan email di password field). Strongest Gestalt principle!"
    },
    {
      question: "📱 SKENARIO APP NAVIGATION: Social media app dengan 20+ features. Organization:\n\nOPTION A: All icons scattered di bottom nav (5) + drawer (15+)\nOPTION B: Features grouped in REGIONS:\n  - Bottom nav: Home, Search, Post, Notifications, Profile\n  - Settings grouped in ONE gear icon → opens Settings region\n  - Creation tools grouped in + icon → opens Creator region\n\nUser findability (task success): A=62%, B=89%. Kenapa?",
      options: [
        "Option B lebih simple",
        "Common Region: Grouping related features in shared regions (Settings region, Creator region) = faster mental mapping",
        "Bottom nav di Option B lebih clean",
        "Users lebih suka drawer di Option B"
      ],
      correctAnswer: 1,
      explanation: "Common Region for IA (Information Architecture)! Option B: Related features share SAME REGION (Settings panel, Creator panel). Users learn: 'Semua creator tools di + button', 'Semua settings di gear'. One tap → reach relevant region. Option A: Features scattered = no mental model = hunt-and-peck. Regions = predictability!"
    },
    {
      question: "⚙️ PENERAPAN: Dashboard dengan 25 widgets/metrics. Cara terbaik apply Common Region?",
      options: [
        "Grid layout uniform, semua widget sama besar dan spacing",
        "Group by CATEGORY dalam bordered sections: 'Sales Metrics' region, 'User Analytics' region, 'System Health' region",
        "Random positioning berdasarkan importance",
        "Stack semua vertikal tanpa grouping"
      ],
      correctAnswer: 1,
      explanation: "Master Common Region usage! (1) Identify LOGICAL categories (Sales, Users, System), (2) Create visual REGIONS (borders, background colors, spacing), (3) Place related widgets WITHIN same region. Result: Users instantly see structure, find metrics 3x faster. Region = visual container untuk related content!"
    }
  ],

  'law-of-pragnanz': [
    {
      question: "🎨 SIMULASI LOGO DESIGN: Startup tech company butuh logo. Designer submit 3 options:\n\nLOGO A: Geometric shape dengan 15 vertices, gradien 5 warna, text dengan 3 fonts\nLOGO B: Simple circle + triangle combination, 2 warna flat, 1 font\nLOGO C: Abstract organic shape, 8 warna, custom letterforms\n\nBrand recall after 1 week: A=23%, B=78%, C=31%. Kenapa B menang?",
      options: [
        "Circle + triangle lebih modern",
        "Law of Prägnanz: Brain simplifies complex shapes - Logo B sudah simple = easy to encode & recall",
        "2 warna lebih versatile",
        "Logo A dan C terlalu creative"
      ],
      correctAnswer: 1,
      explanation: "Prägnanz (Law of Simplicity)! Logo B: Already in SIMPLEST form = brain doesn't need to 'simplify' it = direct encoding to memory. Logo A & C: Brain tries to simplify complex shapes = information loss = poor recall. Good logos = simple geometric forms (Apple, Nike, McDonald's). Simplicity = memorability!"
    },
    {
      question: "📊 SKENARIO DATA VIZ: Analytics dashboard showing monthly revenue trends. Chart options:\n\nCHART A: 3D column chart, gridlines setiap $100, value labels on each bar, legend, title, subtitle\nCHART B: Simple 2D line chart, clean axis, minimal gridlines, clear trend line\nCHART C: Multiple overlapping area charts, 5 metrics, dense annotations\n\nUser comprehension (find trend in 5 sec): A=31%, B=84%, C=19%. Why?",
      options: [
        "Line charts lebih familiar",
        "Prägnanz: B removes complexity = brain instantly sees pattern, A & C overload = brain struggles to simplify",
        "2D lebih accurate dari 3D",
        "Chart B warnanya lebih bagus"
      ],
      correctAnswer: 1,
      explanation: "Prägnanz in Data Viz! Chart B: Minimal complexity = brain immediately perceives PATTERN (up/down trend). Charts A & C: Visual NOISE (3D, overlaps, annotations) = brain wastes energy trying to simplify before understanding data. Principle: Remove everything that doesn't add value. Less is more!"
    },
    {
      question: "🎯 PENERAPAN: Icon design untuk mobile app - 40 functions. Strategy?",
      options: [
        "Detailed illustrative icons dengan shadows, gradients, textures",
        "Simple geometric shapes + consistent style (circles, squares, triangles) = easy mental categorization",
        "Photo-realistic icons untuk clarity",
        "Abstract artistic icons untuk uniqueness"
      ],
      correctAnswer: 1,
      explanation: "Prägnanz for icon systems! Simple geometric base shapes: (1) Brain recognizes instantly (circle, square, triangle = primitive shapes), (2) CONSISTENT simplicity = pattern recognition, (3) Scalable di berbagai sizes. Complex icons: Brain must 'simplify' first before recognizing = slower perception. iOS/Android icons all simple geometric!"
    }
  ],

  'law-of-similarity': [
    {
      question: "🎨 SIMULASI E-COMMERCE: Product listing - 50 items mixed (electronics, fashion, home). Dua approaches:\n\nAPPROACH A: All products look similar - same card style, same image size, same layout\nAPPROACH B: Visual differentiation by category:\n  - Electronics: Blue accent, tech icon\n  - Fashion: Pink accent, hanger icon  \n  - Home: Green accent, house icon\n\nUser browsing efficiency: A: avg 2.1 categories viewed | B: avg 4.3 categories. Kenapa?",
      options: [
        "Warna di Approach B lebih menarik",
        "Law of Similarity: Visual similarities (color, icon) create perceived groups = easier category scanning",
        "Icons membantu navigation",
        "3 categories lebih organized"
      ],
      correctAnswer: 1,
      explanation: "Law of Similarity! Approach B: Items dengan visual SIMILARITIES (blue electronics, pink fashion) automatically grouped by brain = instant categorization. User scans: 'Blue items = tech' tanpa baca labels. Approach A: Everything looks same = must READ each card = slower. Similarity = visual shorthand!"
    },
    {
      question: "🔘 SKENARIO BUTTON DESIGN: Web app dengan 30+ buttons berbagai functions:\n\nDESIGN A: Primary actions (Save, Submit, Confirm) = green solid\n           Secondary (Cancel, Back) = gray outline\n           Destructive (Delete, Remove) = red solid\n           Disabled = light gray\n\nDESIGN B: All buttons same style, rely on labels only\n\nMis-click rate (wrong action): A=4%, B=18%. Kenapa?",
      options: [
        "Warna di Design A lebih jelas",
        "Similarity: Consistent styling per ACTION TYPE (all primary green, all destructive red) = brain categorizes instantly",
        "Users afraid of red buttons",
        "Outline vs solid helps differentiation"
      ],
      correctAnswer: 1,
      explanation: "Similarity for UI patterns! Design A: Visual CONSISTENCY within categories (all primary actions = green solid) = brain learns: 'Green = safe primary action', 'Red = dangerous'. User tidak perlu READ, visual pattern sufficient. Design B: Must read EVERY button = slower + errors. Similarity = quick pattern recognition!"
    },
    {
      question: "⚙️ PENERAPAN: Design system untuk product dengan 100+ components. Strategy?",
      options: [
        "Unique design untuk tiap component",
        "GROUP by similarity: All navigation components share style, all form inputs share style, all feedback (alerts, toasts) share style",
        "Copy dari different design systems",
        "Let each designer decide"
      ],
      correctAnswer: 1,
      explanation: "Similarity for Design Systems! Grouping by visual similarities: (1) All NAV elements = consistent style (tabs, menus, breadcrumbs), (2) All INPUTS = consistent style (text, select, checkbox), (3) Users learn PATTERNS not individual components. Result: Infinite scalability, faster learning curve, brand consistency!"
    }
  ],

  'law-of-uniform-connectedness': [
    {
      question: "📊 SIMULASI TABLE DESIGN: Data table dengan 20 rows × 8 columns. Dua designs:\n\nDESIGN A: Plain white background, black text, thin gray borders\nDESIGN B: Alternating row colors (white/light gray) + hover highlight\n\nUser task accuracy (find specific data cell): A=73%, B=92%. Kenapa?",
      options: [
        "Colors lebih menarik",
        "Uniform Connectedness: Row color creates visual CONNECTION = brain sees entire row as unit",
        "Hover effect membantu",
        "Light gray easier on eyes"
      ],
      correctAnswer: 1,
      explanation: "Law of Uniform Connectedness! Design B: Shared background color CONNECTS cells in same row = brain perceives as single UNIT. User scans horizontally effortlessly. Design A: Cells feel disconnected = harder to follow row. Strongest than proximity/similarity! Connection > separation!"
    },
    {
      question: "🗂️ SKENARIO FORM VALIDATION: Multi-field form dengan real-time validation:\n\nOPTION A: Error messages appear below each field independently\nOPTION B: Invalid fields + their error messages wrapped in red border container\nOPTION C: Just red X icon next to field, no connection\n\nUser error correction speed: A=med, B=fastest, C=slowest. Kenapa?",
      options: [
        "Red border lebih visible",
        "Uniform Connectedness: Visual container CONNECTS field + error message = clear relationship",
        "Option B has more visual weight",
        "Container groups related info"
      ],
      correctAnswer: 1,
      explanation: "Connectedness for relationships! Option B: Container (border) visually CONNECTS field dengan error message = brain immediately understands: 'This error belongs to THIS field'. Option A: Proximity helps tapi tidak sekuat connection. Option C: No connection = user must INFER relationship. Physical connection beats inference!"
    },
    {
      question: "🎯 PENERAPAN: Feature comparison table - 5 plans × 15 features. Optimize readability?",
      options: [
        "Grid dengan thin borders uniform",
        "CONNECT related elements: Column header CONNECTED to cells below via subtle background color + hover effect highlights entire column",
        "Bold fonts untuk headers",
        "Spacing only, no connections"
      ],
      correctAnswer: 1,
      explanation: "Master Uniform Connectedness! (1) Column header + cells = shared background = CONNECTED unit, (2) Hover entire column = reinforces connection, (3) User compares features within CONNECTED columns effortlessly. Connections = clear relationships = better comprehension!"
    }
  ],

  'parkinsons-law': [
    {
      question: "⏰ SIMULASI PROJECT MANAGEMENT: Design task assignment:\n\nTASK A: 'Design homepage mockup - deadline: 2 weeks'\n  Result: Designer starts day 10, rushes last 4 days, quality OK\n\nTASK B: 'Design homepage mockup - deadline: 3 days'\n  Result: Designer starts immediately, focuses intensely, quality excellent\n\nKenapa Task B lebih baik dengan waktu LEBIH SEDIKIT?",
      options: [
        "Designer lebih suka deadline ketat",
        "Parkinson's Law: Work expands to fill time - 2 weeks = procrastinate, 3 days = forced focus",
        "3 hari menghilangkan overthinking",
        "Urgency increases adrenaline"
      ],
      correctAnswer: 1,
      explanation: "Parkinson's Law in action! Task A: 2 weeks available = 'plenty of time' = procrastination + scope creep. Task B: 3 days = tight constraint = FORCES prioritization + focus on essentials = paradoxically better quality. Key: Set REALISTIC but TIGHT deadlines untuk prevent work expansion!"
    },
    {
      question: "🛒 SKENARIO CHECKOUT: E-commerce shopping cart abandonment:\n\nCARTA: No time limit, items stay in cart forever\n  - Completion rate: 23%\n  - Avg time to checkout: 4.2 days\n\nCART B: '15 minutes to complete checkout or cart expires'\n  - Completion rate: 67%\n  - Avg time: 8 minutes\n\nKenapa urgency works?",
      options: [
        "Users takut kehilangan items",
        "Parkinson's Law applied: Time limit CONSTRAINS task expansion = faster decisions",
        "15 menit optimal untuk checkout",
        "Countdown creates FOMO"
      ],
      correctAnswer: 1,
      explanation: "Parkinson's Law for conversions! Cart A: INFINITE time = users procrastinate → forget → abandon. Cart B: CONSTRAINT (15 min) = eliminates procrastination → forces decision → higher completion. Not manipulation - helps users overcome decision paralysis. Constraints = productivity!"
    },
    {
      question: "🎯 PENERAPAN UX: User research session scheduling. Optimize untuk better insights?",
      options: [
        "Schedule open-ended sessions, let users talk as long as they want",
        "SET clear time boxes: '60 min session' - forces prioritization of important topics",
        "No time limit, organic conversation",
        "2 hour sessions untuk thorough research"
      ],
      correctAnswer: 1,
      explanation: "Parkinson's Law for research! Clear time constraints: (1) Researcher PRIORITIZES critical questions, (2) User stays FOCUSED (no rambling), (3) Quality insights in less time. Open-ended = tangents, fatigue, diminishing returns. Constraint = focus = better data per minute!"
    }
  ],

  'peak-end-rule': [
    {
      question: "🏥 SIMULASI HEALTHCARE APP: Patient experience journey:\n\nAPP A: Smooth booking (3 min) → Long wait time (1 hour) → OK consultation (15 min) → Simple checkout (2 min)\n  Peak: Frustration during wait | End: Neutral checkout\n  Rating: 2.8/5\n\nAPP B: Complex booking (8 min) → Medium wait (30 min) → EXCELLENT consultation (15 min) → Delightful confirmation (thank you message, next steps)\n  Peak: Great consultation | End: Positive confirmation\n  Rating: 4.6/5\n\nKenapa B menang despite longer booking?",
      options: [
        "Consultation quality lebih penting",
        "Peak-End Rule: Memory based on PEAK moment (excellent consultation) + END (positive confirmation), not total experience",
        "Thank you message creates loyalty",
        "App B lebih personal"
      ],
      correctAnswer: 1,
      explanation: "Peak-End Rule! Users DON'T average entire experience - they remember PEAK (best/worst moment) + END. App B: Peak = excellent, End = positive = positive memory. App A: Peak = frustration, End = meh = negative memory. Design for PEAK moments + end on high note!"
    },
    {
      question: "🎓 SKENARIO ONBOARDING: E-learning platform untuk new users:\n\nFLOW A: Quick signup → Immediate content access → Basic features → Good course completion screen\nFLOW B: Detailed signup → Tutorial screens → Complex setup → AMAZING 'First Course Complete!' celebration (confetti, badge, achievement)\n\nUser retention (week 2): A=34%, B=61%. Kenapa?",
      options: [
        "Celebrations create emotional connection",
        "Peak-End Rule: B ends onboarding with PEAK celebration = memorable positive experience = higher retention",
        "Badges increase engagement",
        "Flow B more thorough"
      ],
      correctAnswer: 1,
      explanation: "Peak-End for onboarding! Flow B: Ends with PEAK positive moment (celebration) = users remember feeling of ACCOMPLISHMENT = want to return. Flow A: Ends neutrally = forgettable = lower retention. Strategy: Make the END of critical journeys MEMORABLE and POSITIVE!"
    },
    {
      question: "🎯 PENERAPAN: Error recovery flow design. User hit critical error, gimana optimize experience?",
      options: [
        "Show simple error message, let user continue",
        "ACKNOWLEDGE frustration → CLEAR solution → After resolution: POSITIVE reinforcement ('All fixed! Thanks for patience')",
        "Just fix error silently",
        "Apologize profusely"
      ],
      correctAnswer: 1,
      explanation: "Peak-End for error handling! Strategy: (1) Peak moment = frustration (unavoidable), (2) END = positive resolution + reinforcement. Users remember: 'Problem happened BUT they helped me fix it quickly and were nice about it'. Bad peak + good end = neutral memory. End matters!"
    }
  ],

  'postel-law': [
    {
      question: "📧 SIMULASI EMAIL INPUT: Newsletter signup form validation:\n\nFORM A: STRICT - Rejects: 'user@email' (no TLD), 'User@Email.com' (capital), 'user+tag@email.com' (+sign)\n  Success rate: 67%\n\nFORM B: LIBERAL input - Accepts variations, autocorrects, normalizes → Sends STANDARD format to backend\n  Success rate: 94%\n\nKenapa Postel's Law support Form B?",
      options: [
        "Form B lebih permissive",
        "Postel's Law: Be liberal in what you ACCEPT (Form B), conservative in what you SEND (normalized to backend)",
        "Autocorrect lebih modern",
        "Users make typos"
      ],
      correctAnswer: 1,
      explanation: "Postel's Law (Robustness Principle)! Form B: LIBERAL acceptance (user variations) + CONSERVATIVE sending (standard format). Result: Better UX (accepts valid inputs) + reliable backend (receives consistent data). Form A: Strict = frustrates users dengan valid inputs. Be forgiving to humans, strict to systems!"
    },
    {
      question: "📱 SKENARIO DATE PICKER: Birthday input field:\n\nIMPLEMENTATION A: Accepts only ISO format (YYYY-MM-DD)\n  - User types '12/25/1990' → ERROR\n  - User types 'Dec 25, 1990' → ERROR\n  Result: 41% completion\n\nIMPLEMENTATION B: Accepts multiple formats (MM/DD/YYYY, DD-MM-YYYY, natural language) → Stores as ISO\n  - '12/25/1990' → ✓ stored as 1990-12-25\n  - 'Dec 25, 1990' → ✓ stored as 1990-12-25\n  Result: 87% completion\n\nKenapa B better?",
      options: [
        "Multiple formats lebih flexible",
        "Postel's Law: ACCEPT diverse human input, SEND standardized machine format = best of both worlds",
        "Natural language impressive",
        "ISO format terlalu strict"
      ],
      correctAnswer: 1,
      explanation: "Postel's Law for forms! Accept HOW USERS THINK (12/25/1990, Dec 25, etc) but store HOW SYSTEMS NEED (ISO). Bridge human variability with machine requirements. Don't force users to think like machines!"
    },
    {
      question: "🎯 PENERAPAN: API design untuk third-party integration. Strategy?",
      options: [
        "Require exact JSON structure, reject any deviation",
        "ACCEPT flexible input (extra fields OK, missing optional fields OK, format variations OK) → RETURN strict, well-documented format",
        "Accept anything, return anything",
        "Strict validation both ways"
      ],
      correctAnswer: 1,
      explanation: "Postel's Law for API design! (1) INPUT: Liberal - accept reasonable variations, ignore extra fields, provide defaults, (2) OUTPUT: Conservative - consistent structure, full documentation, strict types. Result: Easy for developers to integrate (forgiving) + reliable for consumers (predictable). Robustness = flexibility + reliability!"
    }
  ],

  'serial-position-effect': [
    {
      question: "🍕 SIMULASI MENU DESIGN: Restaurant menu dengan 15 items:\n\nMENU A: Random order, bestsellers scattered throughout\nMENU B: Strategic placement:\n  - Position 1-2: Premium/high-margin items\n  - Position 7-8 (middle): Standard items\n  - Position 14-15 (end): Bestsellers/signature dishes\n\nOrders: Position 1-2 + 14-15 = 67% of total. Middle items = 33%. Kenapa?",
      options: [
        "Premium items lebih menarik",
        "Serial Position Effect: People remember FIRST (primacy) and LAST (recency) items best, forget middle",
        "Signature dishes always popular",
        "Middle items kurang appealing"
      ],
      correctAnswer: 1,
      explanation: "Serial Position Effect! Brain remembers: (1) FIRST items (primacy = transferred to long-term memory), (2) LAST items (recency = still in short-term memory), (3) FORGETS middle items. Menu B optimizes: Premium di awal, bestsellers di akhir = maximize recall of profitable items!"
    },
    {
      question: "📱 SKENARIO NAVIGATION: Mobile app bottom nav - 5 icons. Feature usage data:\n\nLAYOUT A: Home | Search | Post | Messages | Profile\n  Usage: Home 38%, Profile 29%, Post 18%, Search 10%, Messages 5%\n\nLAYOUT B (same features reordered): Search | Messages | Post | Home | Profile\n  Usage: Search 35%, Profile 32%, Home 20%, Post 8%, Messages 5%\n\nPattern observed: EDGE positions (left/right) get highest usage. Kenapa?",
      options: [
        "Edge positions easier to tap",
        "Serial Position Effect: Users remember + access FIRST and LAST items more = prime real estate",
        "Home and Profile naturally popular",
        "Center positions harder to reach"
      ],
      correctAnswer: 1,
      explanation: "Serial Position in navigation! EDGE positions (first/last) = highest recall + usage. Layout A: Home (first) + Profile (last) = top usage. Layout B: Search (first) + Profile (last) = top usage. Strategy: Place MOST IMPORTANT actions at edges! Middle = 'dead zone' for memory/usage!"
    },
    {
      question: "🎯 PENERAPAN: Product feature tour (10 steps). Optimize untuk retention?",
      options: [
        "Equal emphasis on all 10 steps",
        "EMPHASIZE step 1 (powerful first impression) + step 10 (memorable ending), make middle steps short/skippable",
        "Skip first step, focus on middle content",
        "Make all steps detailed"
      ],
      correctAnswer: 1,
      explanation: "Serial Position for onboarding! (1) STEP 1: Make it WOW - sets expectations, transferred to long-term memory, (2) MIDDLE steps: Keep short/skippable - will be forgotten anyway, (3) STEP 10: End with VALUE - recency effect, last impression. Users remember: 'Started strong, ended valuable' = positive overall memory!"
    }
  ],

  'teslers-law': [
    {
      question: "⚙️ SIMULASI SMART DEFAULTS: Email client settings - 50+ options:\n\nAPPROACH A: Show all 50 settings, user must configure each\n  Setup time: 25 min avg\n  Completion: 34%\n\nAPPROACH B: SMART DEFAULTS based on ML - only ask 5 critical choices, handle rest automatically\n  Setup time: 3 min avg  \n  Completion: 89%\n\nDi mana complexity-nya?",
      options: [
        "Approach A lebih thorough",
        "Tesler's Law: Total complexity CONSTANT - B moves it to SYSTEM (ML algorithms) from USER",
        "5 questions cukup",
        "Defaults mengurangi complexity"
      ],
      correctAnswer: 1,
      explanation: "Tesler's Law (Law of Conservation of Complexity)! Complexity CANNOT be eliminated, only MOVED. Approach A: User handles all complexity = cognitive overload. Approach B: SYSTEM handles complexity (ML, defaults) = user gets simplicity. Question: WHO handles complexity - user or system? Always choose SYSTEM!"
    },
    {
      question: "📸 SKENARIO CAMERA APP: Professional photo editing:\n\nAPP A: Manual controls - user adjusts 15 parameters (ISO, shutter, aperture, white balance, etc)\n  Learning curve: Steep\n  Expert photos: Excellent\n  Casual user photos: Poor\n\nAPP B: 'Auto' mode (complex algorithms handle parameters) + 'Pro' mode for experts\n  Learning curve: Shallow\n  Expert photos: Excellent (Pro mode)\n  Casual user photos: Good (Auto mode)\n\nKenapa App B better approach?",
      options: [
        "Auto mode lebih convenient",
        "Tesler's Law: Complexity MOVED to algorithms (auto mode) for casual users, but PRESERVED for experts (pro mode)",
        "Algorithms lebih smart",
        "Two modes = best of both"
      ],
      correctAnswer: 1,
      explanation: "Tesler's Law best practice! Don't REMOVE complexity (photographers need it) - REDISTRIBUTE it: (1) Casual users: Complexity handled by SYSTEM (algorithms), (2) Power users: Complexity available in PRO mode. Serve both audiences! Complexity moved, not removed!"
    },
    {
      question: "🎯 PENERAPAN: Shipping calculator untuk e-commerce. Who handles complexity?",
      options: [
        "USER: Ask weight, dimensions, destination, service level, packaging type",
        "SYSTEM: Auto-detect product weight/size from catalog, pre-fill destination from profile, suggest optimal service → User just confirms",
        "Remove shipping calculation, flat rate only",
        "Simple formula user can calculate"
      ],
      correctAnswer: 1,
      explanation: "Perfect Tesler's Law application! Shipping = inherently complex (weight, zones, carriers, etc). CANNOT eliminate complexity. CHOICE: (1) User calculates (cognitive burden), (2) System calculates (engineering burden). ALWAYS choose option 2! Move complexity to system, give users RESULTS not WORK!"
    }
  ],

  'von-restorff-effect': [
    {
      question: "🎨 SIMULASI CTA DESIGN: Landing page dengan 5 buttons:\n\nDESIGN A: All buttons same style - blue, medium size, same position\n  Click rate: Evenly distributed ~20% each\n\nDESIGN B: 4 buttons gray outline + 1 PRIMARY button bright orange, larger, centered\n  Primary button: 73% clicks\n  Other buttons: 6-7% each\n\nKenapa B so effective?",
      options: [
        "Orange lebih eye-catching",
        "Von Restorff Effect: Item that DIFFERS from others (color, size) = remembered & acted upon more",
        "Centered position lebih visible",
        "Larger size attracts clicks"
      ],
      correctAnswer: 1,
      explanation: "Von Restorff Effect (Isolation Effect)! When multiple similar items exist, the ONE that's DIFFERENT = remembered best. Design B: Orange button ISOLATED from gray buttons = brain flags as important = clicks. But WARNING: Only works if ONE item different. Make everything different = nothing stands out!"
    },
    {
      question: "📋 SKENARIO PRICING TABLE: SaaS product - 4 pricing tiers:\n\nLAYOUT A: All tiers equal visual weight, same styling\n  Distribution: Basic 40%, Pro 35%, Team 15%, Enterprise 10%\n\nLAYOUT B: 3 tiers normal + 'RECOMMENDED' badge, highlighted border, slight scale increase on PRO tier\n  Distribution: Basic 15%, Pro 68%, Team 12%, Enterprise 5%\n\nWhat happened?",
      options: [
        "Badge indicates best value",
        "Von Restorff: PRO tier VISUALLY DISTINCT = remembered = chosen most (even if not objectively best for user)",
        "Highlighting guides users",
        "Recommended = trust signal"
      ],
      correctAnswer: 1,
      explanation: "Von Restorff for conversion! PRO tier = visually ISOLATED (badge, border, scale) = brain prioritizes = default choice. CAUTION: Powerful influence - ensure recommended tier ACTUALLY serves most users! Ethical application: Use isolation to highlight genuinely best option, not manipulate!"
    },
    {
      question: "🎯 PENERAPAN: Notification system - 20 daily notifications. Optimize untuk critical alerts?",
      options: [
        "All notifications same style, chronological",
        "CRITICAL alerts VISUALLY DISTINCT (red, icon, sound, persistent) vs normal alerts (gray, silent, auto-dismiss)",
        "Make all alerts red untuk attention",
        "Critical alerts appear first in list"
      ],
      correctAnswer: 1,
      explanation: "Von Restorff for information hierarchy! Critical alerts = DIFFERENT (color, sound, persistence) = brain recognizes IMMEDIATELY as important. If all alerts same = users ignore all. If all alerts different = chaos. Strategy: RESERVE visual distinction for truly important items. Isolation = importance!"
    }
  ],

  'zeigarnik-effect': [
    {
      question: "✅ SIMULASI TO-DO APP: Task completion psychology:\n\nAPP A: Completed tasks disappear immediately\n  Task completion rate: 62%\n  User engagement: Medium\n\nAPP B: Completed tasks remain visible (strikethrough) for 24h before archiving\n  Task completion rate: 81%  \n  User engagement: High\n\nKenapa B lebih effective?",
      options: [
        "Users like seeing their progress",
        "Zeigarnik Effect: INCOMPLETE tasks create tension = motivation to complete. Keeping completed tasks visible maintains sense of active task list",
        "Strikethrough satisfying",
        "24h window untuk review"
      ],
      correctAnswer: 1,
      explanation: "Zeigarnik Effect! People remember INCOMPLETE tasks better than complete ones (mental tension until closure). App B: Keeping tasks visible longer = users see 'active list' with progress = motivated to complete MORE. But too many incomplete = anxiety. Balance: Show progress + remaining work!"
    },
    {
      question: "📚 SKENARIO E-LEARNING: Course progress indication:\n\nDESIGN A: Just show 'Course Complete' when finished, no progress during\nDESIGN B: Progress bar always visible - '6 of 10 lessons complete'\nDESIGN C: '4 lessons remaining' + occasional 'You're almost there!' prompts\n\nCompletion rates: A=34%, B=56%, C=72%. Kenapa C menang?",
      options: [
        "Prompts encourage users",
        "Zeigarnik Effect: Emphasizing INCOMPLETE ('4 remaining') creates stronger tension than complete ('6 done') = drive to finish",
        "Almost there message motivating",
        "Countdown better than count-up"
      ],
      correctAnswer: 1,
      explanation: "Advanced Zeigarnik! Design C: Frames progress as INCOMPLETENESS ('4 remaining') = mental tension = drive to resolve. Design B: Frames as completeness ('6 done') = less urgency. Psychology: Brain WANTS closure of unfinished business. Highlight gap to goal, not just progress made!"
    },
    {
      question: "🎯 PENERAPAN: Profile setup flow - 8 steps. Optimize completion?",
      options: [
        "No progress indicator, let users complete naturally",
        "SHOW progress (5/8 complete) + AUTO-SAVE + Allow resuming from where they left = leverage Zeigarnik",
        "Force completion in one session",
        "Hide number of remaining steps"
      ],
      correctAnswer: 1,
      explanation: "Perfect Zeigarnik strategy! (1) SHOW incompleteness (5/8) = creates tension, (2) AUTO-SAVE = respects user time, (3) EASY RESUMING = users remember incomplete task (Zeigarnik Effect) + can return easily to resolve tension. Result: Higher completion over time. Incomplete visible task = mental bookmark!"
    }
  ]
}

// Helper function untuk get quiz berdasarkan law ID
export const getQuizForLaw = (lawId) => {
  return quizData[lawId] || null
}

// Generate quiz default untuk law yang belum ada quiz khusus
export const generateDefaultQuiz = (lawTitle) => {
  return [
    {
      question: `🤔 SIMULASI: Anda sedang menerapkan "${lawTitle}" dalam project. Tim skeptis apakah law ini relevant. Bagaimana Anda demonstrate value-nya?`,
      options: [
        "Jelaskan teori dari buku",
        "Tunjukkan data user testing yang compare before/after",
        "Bilang 'percaya saja, ini best practice'",
        "Ignore skepticism, implement aja"
      ],
      correctAnswer: 1,
      explanation: "Best approach: Show EVIDENCE melalui user testing/analytics. Compare metrics (task completion, time-on-task, errors) before vs after implementing law. Data > opinion!"
    },
    {
      question: `⚡ SKENARIO: Saat implement "${lawTitle}", Anda notice conflict dengan business requirement. Stakeholder minta fitur yang violate law ini. What do you do?`,
      options: [
        "Follow stakeholder blindly",
        "Refuse completely - UX law is law!",
        "BALANCE: Explain trade-offs dengan data, propose alternatives yang achieve business goal AND respect UX principle",
        "Implement tapi complain di meeting"
      ],
      correctAnswer: 2,
      explanation: "UX laws = guidelines, bukan absolute rules. Best approach: (1) Understand WHY business wants it, (2) Show IMPACT of violating law (with data), (3) Propose ALTERNATIVES that balance both. Communication + evidence = better decisions!"
    },
    {
      question: `🎯 PENERAPAN: Cara terbaik validate apakah implementation "${lawTitle}" berhasil?`,
      options: [
        "Designer/developer think it looks good",
        "MEASURE: User testing metrics (task success rate, time, satisfaction) + Analytics (conversion, engagement, errors)",
        "Launch dan hope for the best",
        "Follow trend dari apps populer"
      ],
      correctAnswer: 1,
      explanation: "Validation harus DATA-DRIVEN: (1) QUALITATIVE: User testing, observe actual behavior & feedback, (2) QUANTITATIVE: Analytics - compare key metrics before/after. Good UX = measurable improvements in user success + business goals!"
    }
  ]
}
