<template>
  <q-page padding>
    <p class="text-h4"> Research </p>
      <p class="text-h5"><q-avatar size="36px" font-size="32px" icon="science" class="q-mr-sm"/>Research Areas</p>
      <q-chip v-for="dom in research" :key="dom">{{dom}}</q-chip> <br/>
      <a href="https://scholar.google.com/citations?user=nSdc3nIAAAAJ&hl=en" target="_blank" ><q-img src="../assets/googlescholar-logo.png" width="150px" class="q-ma-lg"/></a>
      <p class="text-h5"><q-avatar size="36px" font-size="32px" icon="school" class="q-mr-sm"/>Doctoral Thesis</p>
      <ul>
        <li v-for="(pub, index) in thesis" :key="'thesis-'+index" class="text-body1">{{pub.title}}<a :href="pub.url" target="_blank"><q-icon name="picture_as_pdf" size="25px" class="q-mr-sm q-ml-sm" v-if="pub.url !== ''"></q-icon></a><br/><q-badge v-for="(tag,indexk) in pub.tags" :key="'thesis-'+index+'-key-'+indexk" class="q-ma-xs text-black" color="grey-4">{{tag}}</q-badge></li>
      </ul>
      <p class="text-h5"><q-avatar size="36px" font-size="32px" icon="online_prediction" class="q-mr-sm"/>Workshops ({{workshops.length}})</p>
      <ol>
      <li v-for="(pub, index) in workshops" :key="'talk-'+index" class="text-body1">{{pub.title}}

        <a :href="pub.url" target="_blank"><q-icon name="link" size="25px" class="q-mr-sm q-ml-sm" v-if="pub.url !== ''"></q-icon></a>

        <span v-if="'add_urls' in pub"><a v-for="(add_urls, indexu) in Object.entries(pub.add_urls)" :key="'urlks' + indexu" :href="add_urls[1]" target="_blank"><q-icon name="videocam" size="25px" class="q-mr-sm q-ml-sm"></q-icon></a> </span>

        <br/><q-badge v-for="(tag,indexk) in pub.tags" :key="'talk-'+index+'-key-'+indexk" class="q-ma-xs text-black" color="grey-4">{{tag}}</q-badge></li>
      </ol>
      <p class="text-h5"><q-avatar size="36px" font-size="32px" icon="campaign" class="q-mr-sm"/>Talks ({{talks.length}})</p>
      <ol>
      <li v-for="(pub, index) in talks" :key="'talk-'+index" class="text-body1">{{pub.title}}

        <a :href="pub.url" target="_blank"><q-icon name="link" size="25px" class="q-mr-sm q-ml-sm" v-if="pub.url !== ''"></q-icon></a>

        <span v-if="'add_urls' in pub"><a v-for="(add_urls, indexu) in Object.entries(pub.add_urls)" :key="'urlks' + indexu" :href="add_urls[1]" target="_blank"><q-icon name="videocam" size="25px" class="q-mr-sm q-ml-sm"></q-icon></a> </span>

        <br/><q-badge v-for="(tag,indexk) in pub.tags" :key="'talk-'+index+'-key-'+indexk" class="q-ma-xs text-black" color="grey-4">{{tag}}</q-badge></li>
      </ol>
      <p class="text-h5"><q-avatar size="36px" font-size="32px" icon="article" class="q-mr-sm"/>Publications ({{publications.length}})</p>
      <ol>
        <li v-for="(pub, index) in publications" :key="'pub-'+index" class="text-body1">{{pub.title}}<a :href="pub.url" target="_blank"><q-icon name="picture_as_pdf" size="25px" class="q-mr-sm q-ml-sm" v-if="pub.url !== ''"></q-icon></a><br/><q-badge v-for="(tag,indexk) in pub.tags" :key="'pub-'+index+'-key-'+indexk" class="q-ma-xs text-black" color="grey-4">{{tag}}</q-badge></li>
      </ol>
      <br/>

  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      research: ['Natural Language Processing (NLP)', 'Machine Transliteration', 'Applied Quantitative Analysis', 'Descriptive Statistics', 'Human-Computer Interaction (HCI)', 'UI/UX Design', 'Digital Humanities', 'Digital Paleography', 'Image Processing', 'Handwriting Analysis', 'Handwriting Modeling', 'Visual Programming', 'Digital Archiving', 'Writing System', 'Font Engineering'],
      thesis: [
        {
          title: 'Quantifying Scribal Behavior : A Novel Approach to Digital Paleography. University of St Andrews, Scotland. (2016)',
          url: 'https://research-repository.st-andrews.ac.uk/handle/10023/9429',
          tags: ['quantitative analysis', 'handwriting analysis', 'handwriting modeling', 'digital paleography']
        }
      ],
      workshops: [
        {
          title: 'OpenType Font Programming for Tamil fonts (in Tamil) (August 2024)',
          url: 'https://1drv.ms/b/s!AtFLPqAjKrW4yskqefGz2z-tnramOA?e=hw5fWx',
          tags: ['opentype', 'unicode', 'writing system']
        },
        {
          title: 'Introduction to Indian scripts (December 2023).',
          url: 'https://1drv.ms/p/s!AtFLPqAjKrW4yr9MqHT2zSI6fY4ZDQ?e=saAl6i',
          add_urls: { US: 'https://www.youtube.com/playlist?list=PLi14qEeGqHj7DstfspcRW-vUJCPdPpW01', India1: 'https://www.facebook.com/100092288894272/videos/250097184515383', India2: 'https://www.facebook.com/100092288894272/videos/225947700534473' },
          tags: ['writing system']
        },
        {
          title: 'Grantha Lipi Online Workshop (March 2023)',
          url: 'https://www.youtube.com/playlist?list=PLi14qEeGqHj6pm1cw3OYSOTdl4wy-Ml_W',
          tags: ['writing system']
        },
        {
          title: 'Grantha Lipi Online Workshop (March 2022)',
          url: 'https://www.youtube.com/playlist?list=PL29pbJdIrUl1NLSjLi4lWbGOr7EW0DS9p',
          tags: ['writing system']
        }
      ],
      talks: [
        {
          title: 'Unveiling Scripts: Transliteration with Aksharamukha Tools for Transliteration, 21st Century Curatorship Talk, British Library (December 2024)',
          url: 'https://www.virtualvinodh.com/downloads/British_Library_Presentation_Aksharamukha.pdf',
          // add_urls: { Video: 'https://www.youtube.com/live/ev7vqNXfYJg?si=hCVX4LYT2NwSv-z2&t=8471' },
          tags: ['transliteration', 'digital humanities', 'writing system']
        },
        {
          title: 'Tools for Transliteration, Technology & Tools for Languages and Computations,  NIT Trichy (September 2024)',
          url: 'https://1drv.ms/p/s!AtFLPqAjKrW4yskAyhmK3Iu77meAtg?e=heQmWL',
          // add_urls: { Video: 'https://www.youtube.com/live/ev7vqNXfYJg?si=hCVX4LYT2NwSv-z2&t=8471' },
          tags: ['writing system']
        },
        {
          title: 'Keeping Classical Contemporary: Preserving and Revitalizing Classical Paradigms in Contemporary contexts, KaniTamil24, Chennai (February 2024)',
          url: 'https://1drv.ms/p/s!AtFLPqAjKrW4ysknPJYSOzAPgtIKFw?e=4beLGc',
          add_urls: { Video: 'https://www.youtube.com/live/ev7vqNXfYJg?si=hCVX4LYT2NwSv-z2&t=8471' },
          tags: ['writing system']
        },
        {
          title: 'Handwriting metrics extraction: a case study in medieval texts (En inglés). Manuscrito y pantalla: innovaciones y tendencias de formación e investigación en paleografía y cultura manuscrita digital. Universidad Carlos III Madrid, Spain. (June 2021)',
          url: 'https://eventos.uc3m.es/67303/programme/manuscrito-y-pantalla-innovaciones-y-tendencias-de-formacion-e-investigacion-en-paleografia-y-cultu.html',
          tags: ['digital paleography']
        },
        {
          title: 'Satisar Sharada Font Release (From 55:00) (April 2021)',
          url: 'https://www.facebook.com/watch/live/?ref=search&v=764751994430933',
          tags: ['writing system']
        },
        {
          title: 'Transcribing Manipravala: The interplay of Time, Tradition and Technology. Scripts in Asia, c. 1500–2000. University of the Philippines (April 2021)',
          url: 'https://www.youtube.com/watch?v=DA7iSMGQ81Q&ab_channel=AsianCenterUPDiliman',
          tags: ['writing system']
        },
        {
          title: 'Preserving Tamil Scripts: The way towards their Digitization, Archival and Outreach. Keynote Session. Tamil Internet Conference 2020 (December 2020)',
          url: '/downloads/preserving_tamil_scripts.pdf',
          tags: ['font engineering', 'writing system']
        },
        {
          title: 'Contemporizing a Historic Script: The Development of Adinatha Tamil Brahmi Typeface and its Community Impact. ATypi 2020 All Over (October 2020)',
          url: 'https://www.youtube.com/watch?v=VkBtPjQ0ORI&ab_channel=ATypI',
          tags: ['font engineering', 'writing system']
        },
        {
          title: 'Documenting & Digitizing Pre-Modern Tamil Script(s). Department of Archeology, Tamil Nadu (August 2020)',
          url: 'https://1drv.ms/p/s!AtFLPqAjKrW4nusFONoxYR9VSINsLA?e=RhpgP1',
          tags: ['font engineering', 'writing system']
        },
        {
          title: 'How to Kill a Writing System with Zachary Scheuren, Ripon Chakma, Mangu Purty, Sunita Dangol, Vinodh Rajan. Letterform Archive (June 2020)',
          url: 'https://vimeo.com/435930677',
          tags: ['font engineering', 'writing system']
        },
        {
          title: 'Script Analyzer: A Tool for Quantitative Paleography. University of Basel, Switzerland (January 2020)',
          url: 'https://www.youtube.com/watch?v=38xdtJxCcmI',
          tags: ['Digital Paleography', 'Digital Humanities']
        },
        {
          title: 'Preserving Provenance: Interlinking Digital Representations of Manuscripts. University of Hamburg (January 2016)',
          url: 'downloads/Hamburg_January_16_talk.pdf',
          tags: ['Digital Archiving']
        },
        {
          title: 'Quantifying Scripts: Defining metrics of characters for quantitative and descriptive analysis. University of Hamburg (October 2014)',
          url: 'https://virtualvinodh.com/downloads/NETamil.pdf',
          tags: ['Handwriting Quantification', 'Digital Paleography', 'Digital Humanities']
        },
        {
          title: 'Modeling & Analyzing Development of Scripts, SACHI Seminar, School of Computer Science, University of St Andrews (May 2013)',
          url: 'https://virtualvinodh.com/downloads/Seminar-SACHI.pdf',
          tags: ['Handwriting Analysis', 'Handwriting Modeling']
        }
      ],
      publications: [
        {
          title: 'Measuring the Consistency of Early Medieval Latin Handwriting [To be published] (2021)',
          url: '',
          tags: ['Quantitative Analysis', 'Digital Paleography', 'Digital Humanities']
        },
        {
          title: 'Enabling Quantitative Digital Paleography: The Design and Development of Script Analyzer [To be published] (2021)',
          url: '',
          tags: ['No-code development', 'Image Processing', 'Digital Paleography', 'Digital Humanities']
        },
        {
          title: 'Turning Black into White through Visual Programming: Peeking into the Black Box of Computational Manuscript Analysis (2020)',
          url: 'https://www.csmc.uni-hamburg.de/publications/mc/files/articles/mc15-07-sampath.pdf',
          tags: ['No-code development', 'Image Processing', 'Digital Humanities']
        },
        {
          title: 'Visual Programming-based Interactive Analysis of Ancient Documents: The Case of Magical Signs in Jewish Manuscripts (2020)',
          url: 'https://link.springer.com/chapter/10.1007/978-3-030-68787-8_11',
          tags: ['No-code development', 'Image Processing', 'Digital Paleography', 'Digital Humanities']
        },
        {
          title: 'Making DIA accessible to non-experts: Designing a Visual Programming Language for Document Image Analysis (2019)',
          url: 'https://ieeexplore.ieee.org/iel7/8890610/8892828/08892861.pdf?casa_token=63ejwg7yG1oAAAAA:fU6R2La2swqDiLc5lz5D2fOxYT_5G0afIBlwgn_Q4hwhQfwRlJVw3Odeq1c89pFbLnf9Rnt0nHw',
          tags: ['No-code development', 'Image Processing', 'Digital Humanities']
        },
        {
          title: 'AMAP: A Visual Programming Language Based System to Support Document Image Analysis (2019)',
          url: 'https://dl.gi.de/items/091883ff-c107-40df-bff7-38f8ec59b351',
          tags: ['No-code development', 'Image Processing', 'Digital Humanities']
        },
        {
          title: 'Advanced Manuscript Analysis Portal (AMAP): An Interactive Visual Language Environment for Manuscript Studies (2019)',
          url: 'https://dataverse.nl/dataset.xhtml?persistentId=hdl:10411/WQBHYY',
          tags: ['No-code development', 'Image Processing', 'Digital Humanities']
        },
        {
          title: 'From Eye-to-Eye to Hand-in-Hand: Collaborative Solution Building in Interdisciplinary Manuscript Research (2018)',
          url: 'https://dl.gi.de/items/28fc3924-5530-43b0-8a54-6264f1af5c45',
          tags: ['Software Engineering', 'Digital Humanities']
        },

        {
          title: 'Bringing Paleography to the Table: Developing an Interactive Manuscript Exploration System for Large Multi-Touch Devices (2018)',
          url: 'https://web.archive.org/web/20180513215838/https://das2018.cvl.tuwien.ac.at/media/filer_public/85/fd/85fd4698-040f-45f4-8fcc-56d66533b82d/das2018_short_papers.pdf',
          tags: ['No-code development', 'Image Processing', 'Digital Paleography', 'Digital Humanities']
        },
        {
          title: 'Quantifying scripts: Defining metrics of characters for quantitative and descriptive analysis (2017)',
          url: 'https://academic.oup.com/dsh/article-abstract/32/3/602/2669786?redirectedFrom=fulltext',
          tags: ['Quantititative Analysis', 'Handwriting Analysis', 'Digital Paleography', 'Digital Humanities']
        },
        {
          title: 'How Handwriting Evolves: An Initial Quantitative Analysis of the Development of Indic Scripts (2015)',
          url: 'https://hal.univ-antilles.fr/hal-01165770/document',
          tags: ['Quantititative Analysis', 'Handwriting Analysis', 'Digital Paleography', 'Digital Humanities']
        },
        {
          title: 'Framework for Quantitative Analysis of Scripts (2014)',
          url: 'https://www.academia.edu/14818534/Framework_for_Quantitative_Analysis_of_Scripts',
          tags: ['Handwriting Analysis', 'Digital Paleography', 'Digital Humanities']
        },
        {
          title: 'Konkanverter-A Finite State Transducer based Statistical Machine Transliteration Engine for Konkani Language (2014)',
          url: 'https://www.aclweb.org/anthology/W14-5502.pdf',
          tags: ['NLP', 'Machine Transliteration']
        }
      ]
    }
  }
}
</script>

<style scoped>
a:link {
  text-decoration: none;
  color:black;
}
a:visited {
  text-decoration: none;
  color:black;
}
</style>
