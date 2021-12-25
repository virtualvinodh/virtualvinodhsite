
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },

  {
    path: '/profile',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Profile.vue') }
    ]
  },

  {
    path: '/projects',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Projects.vue') }
    ]
  },

  {
    path: '/projects/adinatha',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/projects/Adinatha.vue') }
    ]
  },

  {
    path: '/projects/arishtanemi',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/projects/Arishtanemi.vue') }
    ]
  },

  {
    path: '/projects/vajranandi',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/projects/Vajranandi.vue') }
    ]
  },

  {
    path: '/projects/adinatha-tamil',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/projects/AdinathaTamil.vue') }
    ]
  },

  {
    path: '/projects/agastya',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/projects/Agastya.vue') }
    ]
  },

  {
    path: '/projects/agastya/instructions',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/projects/AgastyaInstructions.vue') }
    ]
  },

  {
    path: '/projects/aazhvaar',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/projects/Aazhvaar.vue') }
    ]
  },

  {
    path: '/projects/aazhvaar/instructions',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/projects/AazhvaarInstructions.vue') }
    ]
  },

  {
    path: '/unicode',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Unicode.vue') }
    ]
  },

  {
    path: '/privacy',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Privacy.vue') }
    ]
  },

  {
    path: '/research',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Research.vue') }
    ]
  },

  {
    path: '/writings',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Writing.vue') }
    ]
  },

  {
    path: '/contact',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Contact.vue') }
    ]
  },

  {
    path: '/writings/grantha',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/grantha/Grantha.vue') }
    ]
  },

  {
    path: '/writings/grantha/fonts',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/grantha/GranthaFonts.vue') }
    ]
  },

  {
    path: '/writings/grantha/keyboards',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/grantha/GranthaKeyboards.vue') }
    ]
  },

  {
    path: '/writings/brahmi',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/brahmi/Brahmi.vue') }
    ]
  },

  {
    path: '/writings/brahmi/buddha-titles',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/brahmi/BuddhaTitles.vue') }
    ]
  },

  {
    path: '/writings/brahmi/five-precepts',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/brahmi/FivePrecepts.vue') }
    ]
  },

  {
    path: '/writings/brahmi/dhammapada',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/brahmi/Dhammapada.vue') }
    ]
  },

  {
    path: '/writings/brahmi/asokan-edict',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/brahmi/AsokanEdict.vue') }
    ]
  },

  {
    path: '/writings/brahmi/three-refuges',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/brahmi/ThreeRefuges.vue') }
    ]
  },

  {
    path: '/writings/brahmi/noble-path',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/brahmi/NoblePath.vue') }
    ]
  },

  {
    path: '/writings/brahmi/noble-truth',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/brahmi/NobleTruth.vue') }
    ]
  },

  {
    path: '/writings/brahmi/homage-buddha',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/brahmi/HomageBuddha.vue') }
    ]
  },

  {
    path: '/writings/brahmi/homage-buddha',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/brahmi/HomageBuddha.vue') }
    ]
  },

  {
    path: '/writings/brahmi/verse-causation',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/brahmi/VerseCausation.vue') }
    ]
  },

  {
    path: '/writings/mantras',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/mantras/Mantras.vue') }
    ]
  },

  {
    path: '/writings/mantras/mahamayuri',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/mantras/Mahamayuri.vue') }
    ]
  },

  {
    path: '/writings/mantras/sahasrabhuja-avalokitesvara',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/mantras/SahasrabhujaAvalokitesvara.vue') }
    ]
  },

  {
    path: '/writings/mantras/svalpakshara-prajnaparamita',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/mantras/SvalpaksharaPrajnaparamita.vue') }
    ]
  },

  {
    path: '/writings/mantras/kaushika-prajnaparamita',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/mantras/KaushikaPrajnaparamita.vue') }
    ]
  },

  {
    path: '/writings/mantras/chandragarbha-prajnaparamita',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/mantras/ChandragarbhaPrajnaparamita.vue') }
    ]
  },

  {
    path: '/writings/mantras/arya-maha-ganapati',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/mantras/AryaMahaGanapati.vue') }
    ]
  },

  {
    path: '/writings/mantras/karandavyuha-stotras',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/mantras/KarandavyuhaStotras.vue') }
    ]
  },

  {
    path: '/writings/mantras/108-names-tara',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/mantras/NamesTara.vue') }
    ]
  },

  {
    path: '/writings/mantras/vajrananga-manjushri',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/mantras/VajranangaManjushri.vue') }
    ]
  },

  {
    path: '/writings/mantras/kamadeva',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/mantras/Kamadeva.vue') }
    ]
  },

  {
    path: '/writings/assorted',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/assorted/Assorted.vue') }
    ]
  },

  {
    path: '/writings/assorted/god-refutation-nagarjuna',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/assorted/GodRefutationNagarjuna.vue') }
    ]
  },

  {
    path: '/writings/assorted/homosexuality-kamasutra',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/assorted/HomosexualityKamasutra.vue') }
    ]
  },
  {
    path: '/writings/assorted/shramanas-language',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/assorted/ShramanasLanguage.vue') }
    ]
  },
  {
    path: '/writings/assorted/shiva-buddhism',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/assorted/ShivaBuddhism.vue') }
    ]
  },
  {
    path: '/writings/assorted/vishnu-buddhism',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/assorted/VishnuBuddhism.vue') }
    ]
  },
  {
    path: '/writings/assorted/hari-vahana-lokeshvara',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/assorted/HariVahanaLokeshvara.vue') }
    ]
  },
  {
    path: '/writings/assorted/srishtikarta-lokeshvara',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/assorted/SrishtikartaLokeshvara.vue') }
    ]
  },
  {
    path: '/writings/assorted/nayanmars-jainism',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/assorted/NayanmarsJainism.vue') }
    ]
  },
  {
    path: '/writings/assorted/tamil-brahmi',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/assorted/TamilBrahmi.vue') }
    ]
  },
  {
    path: '/writings/tamil',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/tamil/Tamil.vue') }
    ]
  },
  {
    path: '/writings/tamil/kundalakesi',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/tamil/Kundalakesi.vue') }
    ]
  },
  {
    path: '/writings/tamil/tirukkural-buddhist',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/tamil/TirukkuralBuddhist.vue') }
    ]
  },
  {
    path: '/writings/tamil/buddha-shraddha',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/tamil/BuddhaShraddha.vue') }
    ]
  },
  {
    path: '/writings/tamil/shramana-original-tamil',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/tamil/ShramanaOriginalTamil.vue') }
    ]
  },
  {
    path: '/writings/tamil/tamil-nadu-buddha',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/tamil/TamilNaduBuddha.vue') }
    ]
  },
  {
    path: '/writings/tamil/tamil-script-evolution',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/tamil/TamilScriptEvolution.vue') }
    ]
  },
  {
    path: '/writings/tamil/tamil-sanskrit-letters',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/tamil/TamilSanskritLetters.vue') }
    ]
  },
  {
    path: '/writings/tamil/namo-buddha',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/tamil/NamoBuddha.vue') }
    ]
  },
  {
    path: '/writings/tamil/shiva-buddha-tamil',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/tamil/ShivaBuddhaTamil.vue') }
    ]
  },
  {
    path: '/writings/tamil/trailokyavijaya-shiva',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/tamil/TrailokyavijayaShiva.vue') }
    ]
  },
  {
    path: '/writings/tamil/maha-mangala',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/tamil/MahaMangala.vue') }
    ]
  },
  {
    path: '/writings/tamil/brahmin-who',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/tamil/BrahminWho.vue') }
    ]
  },
  {
    path: '/writings/tamil/buddhist-sanskrit',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/tamil/BuddhistSanskrit.vue') }
    ]
  },
  {
    path: '/writings/tamil/learn-sanskrit',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/tamil/LearnSanskrit.vue') }
    ]
  },
  {
    path: '/writings/tamil/rama-seven-seas',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/tamil/RamaSevenSeas.vue') }
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
