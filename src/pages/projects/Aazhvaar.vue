<template>
  <q-page padding>
    <q-breadcrumbs class="q-mb-md">
      <q-breadcrumbs-el label="Home" icon="home" to="/" />
      <q-breadcrumbs-el label="Projects" icon="create" to="/projects" />
      <q-breadcrumbs-el label="Azhvaar: Srivaishnava Telugu font" />

    </q-breadcrumbs>
    <div class="q-ml-lg q-mr-xl">
    <p class="text-h5">Aazhvaar: Srivaishnava Telugu font</p>
    <p class="text-body2">
   <p>Tamil is one of the liturgical languages of the Śrīvaiṣṇavism sect of Vaiṣṇavism within the broader Hindu religious tradition. As a liturgical language, Tamil texts are frequently expressed in the Telugu script for reading and recitation by Telugu speakers. Both Tamil and Telugu being Dravidian languages share a core set of phonemes that made it relatively easy to express the Tamil language in the Telugu script. However, two Tamil consonants, namely LLLA ழ ḻ & RRA ற ṟ, tended to be problematic.</p>

   <p>This was resolved by the wholesale importation of these two Tamil consonants and simply treating them as if they were Telugu consonants. Using this hybrid orthography, the original Tamil phonetic realization of the source text was appropriately preserved in the Telugu script without any loss. It also provided a visual cue to readers that these are Tamil phonemes and care must be taken in pronouncing these characters in accordance to Tamil phonology. Given that these were liturgical texts to be recited, enabling proper pronunciation of the texts was quite crucial.</p>

  <p>You can read more about this in <a href="https://www.unicode.org/L2/L2020/20119-two-telugu-letters.pdf">L2/20-119</a> submitted to the Unicode Technical Committee (UTC).</p>

  <p>Aazhvaar Telugu font allows users to typeset the Tamil language in the Telugu script using these borrowed letters. It also includes the Nakaara Pollu, which has be placed U+0C5D. It is essentially a fork of Noto Sans Telugu with the two Tamil-style letters and the Nakaara Pollu. </p>
    <p class="text-h6">Character Sequences </p>
    <p class="teluguzha">ఴ్ ఴ ఴా ఴి ఴీ ఴు ఴూ ఴృ ఴె ఴే ఴై ఴొ ఴో ఴౌ ఴం ఴః</p>
    <p class="teluguzha">ఴ్న్ ఴ్వ ఴ్వా ఴ్వి ఴ్వీ ఴ్వు ఴ్వూ ఴ్వృ ఴ్వె ఴ్వే ఴ్వై ఴ్వొ ఴ్వో ఴ్వౌ ఴ్వం ఴ్వః</p>
    <p class="teluguzha">ౘ్ ౘ ౘా ౘి ౘీ ౘు ౘూ ౘృ ౘె ౘే ౘై ౘొ ౘో ౘౌ ౘం ౘః</p>
    <p class="teluguzha">ౝ</p>
    <p class="text-h6"> Encoding </p>
    <p class=""> L2/20-119 was initially accepted by the UTC and the acceptance was later rescinded for various reasons. Therefore, the forms had to be hack-encoded into existing code-points LLLA and TSA. Without the Aazhvaar Telugu font, the Tamil-style characters will appear as ఴ & ౘ.</p>
    <p class="text-h6"> Download </p>
<p>You can download the font from <a href="https://github.com/virtualvinodh/aazhvaar-telugu/blob/main/AazhvaarTelugu.otf?raw=true">here</a>.</p>

<p> You can also find below the complete package that would install the fonts and the corresponding Keyman keyboard layouts to compose in Extended Tamil.</p>

<p><a href="https://github.com/virtualvinodh/aazhvaar-telugu/blob/main/aazhvaar_telugu.kmp?raw=true">Only Keyboard Package</a> (if you have Keyman already installed)</p>

<p>Instructions to install and use the Keyman Keyboard from the above are <a href="projects/aazhvaar/instructions">here</a>.</p>

<p><a href="https://github.com/virtualvinodh/aazhvaar-telugu/blob/main/-aazhvaar_telugu.exe?raw=true">Integrated Keyboard Package</a> (if you don't have keyman)</p>

<p>Alternatively, you can also use <a href="http://aksharamukha.appspot.com">Aksharamukha</a> with Telugu as the target script. You just need to select the additional options to use the Tamil-style letters.</p>

    <p></p>
  <p class="text-h6">Sample Text</p>
  <q-img src="../../assets/projects/tamil-telugu-text.png" width="400px" class="q-ma-sm"/><br/>

  <p class="teluguzha q-ma-sm sample">
నోౘ్ౘు చ్చువర్‌క్కమ్ పుకుకిన్ఱ అమ్మనాయ్<br/>
మాౘ్ౘముమ్‌తారారో వాశల్ తిఱవాతార్<br/>
నాౘ్ౘత్తుఴాయ్‌ముడి నారాయణౝ నమ్మాల్<br/>
పోౘ్ౘ ప్పఱైతరుమ్ పుణ్ణియనాల్ పణ్డొరునాళ్<br/>
కూౘ్ౘత్తిౝ వాయ్ ‌వీఴ్‌న్ద కుమ్బకరణనుమ్<br/>
తోౘ్ౘుమునక్కే పెరున్దుయిల్‌తాౝ తన్దానో<br/>
ఆౘ్ౘ వనన్దలుడైయాయరుఙ్గలమే<br/>
తేౘ్ౘమాయ్‌వన్దు తిఱవే లోరేమ్బావాయ్. ౧౦.

  </p>
  <q-img src="../../assets/projects/tamil-telugu-text-2.png" width="400px" class="q-ma-sm"/><br/><br/>
  <p class="teluguzha sample">ఇన్దముదలాఴ్వార్‌కళ్ మూవరుమ్ అయోనిసమ్భవర్. <br/>
(కూడిక్కొణ్డు) యోగ సహత్త్వత్తినాల్ మువ్వాయిర<br/>
త్తునూౘ్ౘిరుపత్తఞ్జు సంవత్సరమ్ భూమి సఞ్చారమ్పణ్ణి<br/>
క్కోణ్డు ఇరున్దుతిరుక్కొవలూరిలే తిరునాట్టుక్కెఴున్దరు<br/>
ళినార్కళ్.
</p>
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
table {
  border-collapse: collapse;
}
th, td {
  text-align: center;
  padding:10px;
}
.sample {
 line-height: 2em;
}
</style>
