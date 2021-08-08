<template>
  <q-page padding>
    <p class="text-h4"> Open Source Projects </p>
    <p>In my free time, I work on a variety of projects and topics, mostly pertaining to languages and writing systems.</p>
      <p class="text-h5"> Development Area </p>
      <q-chip v-for="dom in devarea" :key="dom">{{dom}}</q-chip>
      <br/><br/>

      <p class="text-h6"> Code/Project Repositories </p>

      <a href="https://github.com/virtualvinodh" target="_blank"><q-img src="../assets/github-logo.png" width="100px" class="q-ma-xs"/></a>
      <a href="https://pypi.org/project/aksharamukha/" target="_blank"><q-img src="../assets/pip.svg" width="50px" class="q-ma-xs"/></a>
      <a href="https://play.google.com/store/apps/developer?id=Virtual+Vinodh&hl=en_GB" target="_blank"><q-img src="../assets/googleplay-logo.png" width="100px"  class="q-ma-xs" /></a>
      <a href="https://chrome.google.com/webstore/search/virtualvinodh?hl=en" target="_blank"><q-img src="../assets/googlechrome-logo.png" width="100px" class="q-ma-xs" /></a>
      <a href="https://hub.docker.com/u/virtualvinodh" target="_blank"><q-img src="../assets/docker-hub-logo.png" width="50px"  class="q-ma-xs"/></a><br/><br/>

    <p class="text-h5"><q-avatar size="36px" font-size="32px" icon="translate" class="q-mr-sm"/>Languages & Writing Systems</p>
      <div class="q-pa-md row items-start q-gutter-md">
        <project-card v-bind="project" v-for="(project,index) in projectsLang" :key="'project-lang-'+index"> </project-card>
      </div>
      <br/>
    <p class="text-h5"><q-avatar size="36px" font-size="32px" icon="font_download" class="q-mr-sm"/>Fonts</p>
      <div class="q-pa-md row items-start q-gutter-md">
        <project-card v-bind="project" v-for="(project,index) in ProjectsFonts" :key="'project-fonts-'+index"> </project-card>
      </div>
      <br/>
      <p class="text-h5"><q-avatar size="36px" font-size="32px" icon="history_edu" class="q-mr-sm"/>Digital Paleography & Manuscript Studies</p>
      <div class="q-pa-md row items-start q-gutter-md">
        <project-card v-bind="project" v-for="(project,index) in ProjectsDP" :key="'project-dp-'+index"> </project-card>
      </div>
  </q-page>
</template>

<script>
import ProjectCard from '../components/ProjectCard.vue'
export default {
  // name: 'PageName',
  components: {
    ProjectCard
  },
  data () {
    return {
      devarea: ['Machine Learning', 'Full-stack Development', 'Frontend Design', 'Web Programming', 'Android Cordova', 'Website Plugins', 'Browser Extensions', 'Font Engineering'],
      projectsLang: [
        {
          icon: 'aksharamukha-icon.png',
          title: 'Aksharamukha',
          lang: 'Vue.js/Python',
          subtitle: 'Script Converter',
          desc: 'Provides script conversion between various scripts within the Indic cultural sphere. As of now supports 89 scripts and 10 romanization methods. Available as various plugins as well.',
          github: 'https://github.com/virtualvinodh/aksharamukha',
          web: 'https://aksharamukha.appspot.com',
          width: '50px'
        },
        {
          icon: 'avalokitam-icon.png',
          title: 'Avalokitam',
          lang: 'Vue.js/PHP',
          subtitle: 'Tamil Prosody Analyzer',
          desc: 'Analyzes a given Tamil language verse for six basic prosodic elements and displays them. It also recognizes the meter of the verse by matching them with the elaborate rules of Tamil prosody.',
          github: 'https://github.com/virtualvinodh/avalokitam',
          web: 'http://www.avalokitam.com',
          width: '50px'
        },
        {
          icon: 'jinavani-icon.png',
          title: 'Jinavani',
          lang: 'Vue.js',
          subtitle: 'Tamil Epigraphic Editor',
          desc: 'Converts the modern Tamil script into its ancient predecessors namely, Tamil-Brahmi and Vatteluttu. Furthermore, it is also an educational tool to learn and practice these ancient Tamil scripts.',
          github: 'https://github.com/virtualvinodh/jinavani',
          web: 'http://tamiljinavani.appspot.com',
          width: '50px'
        },
        {
          icon: 'satisar-icon.png',
          title: 'Satisar',
          lang: 'Vue.js',
          subtitle: 'A Portal for Sharada',
          desc: 'It provides various functionalities such as converting Devanagari/Romanized text into Sharada, directly composing in Sharada and various learning resources to practice Sharada.',
          github: 'https://github.com/virtualvinodh/satisarsite',
          web: 'https://satisarsharada.appspot.com',
          width: '50px'
        },
        {
          icon: 'anunaadam-icon.png',
          title: 'Anunaadam',
          lang: 'Vue.js/PHP',
          subtitle: 'Tamil to IPA Transcription Tool',
          desc: 'Transcribes the given Tamil text and produce the output in IPA characters. It attempts to aid the pronunciation of Tamil even to non-native speakers of the language.',
          github: 'https://github.com/virtualvinodh/anunaadam',
          web: 'http://anunaadam.appspot.com',
          width: '50px'
        },
        {
          icon: 'konkanverter-icon.jpg',
          title: 'Konkanverter',
          lang: 'Vue.js/PHP',
          subtitle: 'Konkani Transliterator',
          desc: 'A finite state transducer based transliteration engine that performs statistical machine transliteration between three different scripts (Devanagari, Kannada & Roman) used to write Konkani .',
          github: 'https://github.com/virtualvinodh/konkanverter',
          web: 'http://www.konkanverter.com',
          width: '100px'
        }
      ],
      ProjectsFonts: [
        {
          icon: 'adinatha-icon.png',
          title: 'Adinatha',
          lang: 'FontCreator/OpenType',
          subtitle: 'Tamil-Brahmi font',
          desc: 'Unicode Tamil Brahmi font. This font will hopefully help in properly digitizing epigraphs containing old Tamil writing in the Brahmi script. It is released under the Open Font Licence (OFL).',
          github: '',
          web: '/projects/adinatha',
          width: '30px'
        },
        {
          icon: 'agastya-icon.png',
          title: 'Agastya',
          lang: 'FontCreator/OpenType',
          subtitle: 'Extended Tamil Font',
          desc: 'Unicode font for extended Tamil script. This extended Tamil script adopts Grantha consonants to denote aspirated and voiced consonants to transcribe non-Tamil languages like English & Sanskrit.',
          github: 'https://github.com/virtualvinodh/agastya-tamil-extended',
          web: '/projects/agastya',
          width: '50px'
        },
        {
          icon: 'aazhvaar-icon.png',
          title: 'Aazhvaar Telugu',
          lang: 'FontCreator/OpenType',
          subtitle: 'Srivaishnava Telugu Font',
          desc: 'Unicode font for the variant of the Telugu script used by the Shrivaishnavas to write religous Tamil texts. The font uses Tamil-style glyphs to represent the Tamil phonemes /ḻ/ & / ṟ/.',
          github: 'https://github.com/virtualvinodh/aazhvaar-telugu',
          web: '/projects/aazhvaar',
          width: '60px'
        },
        {
          icon: 'sharadafont-icon.png',
          title: 'Satisar Sharada',
          lang: 'Fontlab/OpenType',
          subtitle: 'Sharada Font',
          desc: 'Unicode font for the Sharada script belonging to the Kashmir region of India. Developed in collaboration with the Core Sharda Team Foundation. It is released under the Open Font Licence (OFL).',
          web: 'https://satisarsharada.appspot.com/font-keyboard',
          github: 'https://github.com/virtualvinodh/satisarsharada',
          width: '45px'
        },
        {
          icon: 'arishtanemi-icon.png',
          title: 'Arishtanemi Tamil',
          lang: 'Fontlab/OpenType',
          subtitle: 'A faux historical font',
          desc: 'The modern Tamil script is a result of additions to the source Brahmi characters over 2000 years. Arishtanemi tries to de-evolve the script into a simplified form that looks epigraphic-esque yet readable.',
          web: '/projects/arishtanemi',
          github: 'https://github.com/virtualvinodh/arishtanemi-tamil',
          width: '75px'
        }
      ],
      ProjectsDP: [
        {
          icon: '',
          title: 'Script Analyzer',
          lang: 'Python',
          subtitle: 'Quantitative Tool for Paleography',
          desc: 'Implementation of the Script Analysis Framework proposed in my PhD dissertation. It enables extracting various quantitative metrics quantifying scribal behavior.',
          github: 'https://github.com/virtualvinodh/scriptanalyzer',
          web: 'https://standrews.eu.qualtrics.com/jfe/form/SV_emNz5jO1LUt1cpL'
        },
        {
          icon: '',
          title: 'AMAP',
          lang: 'Vue.js/Python',
          subtitle: 'Advanced Manuscript Analysis Portal',
          desc: 'Visual Programming platform to aid the digital processing of Manuscript and includes a toolbox of document image analysis (DIA) functions. It aims to make DIA methods available to everyone.',
          github: 'https://github.com/virtualvinodh/AMAP',
          web: 'https://vimeo.com/389749746'
        }
      ]
    }
  }
}
</script>
