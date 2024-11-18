<template>
  <q-page padding>
    <q-breadcrumbs class="q-mb-md">
      <q-breadcrumbs-el label="Home" icon="home" to="/" />
      <q-breadcrumbs-el label="Projects" icon="create" to="/projects" />
      <q-breadcrumbs-el label="Adinatha: Tamil-Brahmi font" />

    </q-breadcrumbs>
  <div class="q-ml-lg q-mr-xl">
    <p class="text-h5">Adinatha Tamil-Brahmi font</p>
    <p> (<a href="/projects/adinatha-tamil">தமிழில் காண</a>) </p>
    <p class="text-body2">
Adinatha is a working Unicode Tamil Brahmi font. Named after Adinatha, the first Tirthankara of Jains, in honour of the Jains having introduced Brahmi to the Tamil region, this font will hopefully help in properly digitizing old Tamil writing in the Brahmi script. Adinatha Tirthankara is traditionally attributed for the creation of the first (Indian) writing system.
    </p>
    <p> (Click <a href="/writings/assorted/tamil-brahmi">here</a> to read a short introduction to Tamil-Brami) </p>
     <q-img src="../../assets/tamil-brahmi-epigraphy.png" width="350px" /> <br/>
     <em>Tamil Brahmi epigraph</em><br/><br/>
    <q-img src="../../assets/tamil-brahmi-font.png" width="350px" /> <br/>
     <em>Digitized version of the epigraph using Adinatha font</em><br/><br/>

     <p> Adinatha is released free of charge and under a free licence (the Open Font Licence) so as to encourage its usage among academics and other interested parties, and to thereby encourage more people to be interested in epigraphy and digitization. Adinatha is based on the existing Brahmi encoding and largely draws upon Dr Iravatham Mahadevan’s Early Tamil Epigraphy for the shapes of the glyphs.</p>
<p>The font contains both OpenType & Graphite table and hence properly renders in a wide variety of systems. The font package also includes an AAT version for compatability with OS X applications that do not support OpenType. This font project is combined effort of myself, <a href="https://sites.google.com/site/jamadagni/home">Shriramana Sharma</a> & <a href="http://www.udhayam.in/">Udhaya Sankar</a>.</p>

<p>You can download the font package <a href="https://www.virtualvinodh.com/downloads/Adinatha-Tamil-Brahmi.zip">here</a>. The font manual can be read from <a href="https://virtualvinodh.com/downloads/Adinatha_Tamil_Brahmi_Manual.pdf">here</a>.</p>

<p>You can also use <a href="http://tamiljinavani.appspot.com" target="_blank">Jinavani</a> to convert modern Tamil script into Tamil-Brahmi and download the rendered text as an image.</p>

<p class="text-h5"> Issues </p>
<p>Due to issues with Microsoft's Universal Shaping Engine, the font does not work with Microsoft products like Microsoft Word. To avoid such issues, we have recently <a href="https://www.unicode.org/L2/L2019/19402-brahmi-adds.pdf" target="_blank">proposed</a> adding them as independent atomic characters in Unicode. A new version of the font will be released, when the characters are published in an updated version of the Unicode standard.</p>
<p>Until then, we suggest using Harfbuzz-enabled projects such as Libreoffice, Chrome or Firefox to use the font. </p>
</div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  components: {
  },
  data () {
    return {
      tab: 'IAST'
    }
  },
  methods: {
  }
}
</script>

<style scoped>
.blockquote {
  background: #f9f9f9;
  border-left: 10px solid #ccc;
  margin: 1.5em 10px;
  padding: 0.5em 10px;
  quotes: "\201C""\201D""\2018""\2019";
}
.blockquote:before {
  color: #ccc;
  content: open-quote;
  font-size: 4em;
  line-height: 0.1em;
  margin-right: 0.25em;
  vertical-align: -0.4em;
}
.blockquote p {
  display: inline;
}
.iast {
  font-weight:bold;
}
</style>
