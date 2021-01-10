<template>
  <q-page padding>
    <q-breadcrumbs class="q-mb-md">
      <q-breadcrumbs-el label="Home" icon="home" to="/" />
      <q-breadcrumbs-el label="Writings" icon="create" to="/writings" />
      <q-breadcrumbs-el label="Mantras" to="/writings/mantras" />
      <q-breadcrumbs-el label="Sahasrabhuja Avalokitesvara" />

    </q-breadcrumbs>
  <div class="q-ml-lg q-mr-xl">
      <script-tab v-model="tab"></script-tab>
    <p class="text-h5">Sahasrabhuja Avalokitesvara</p>
        <p><small><i>Composed: Nov, 2009. Updated: Sep, 2020</i></small></p>
    <p class="text-body2">
Sahasrabhuja (thousand arrmed) Avalokiteshvara is one of the widely venerated forms of Avalokiteśvara. He has 48 principal arms which hold various instruments, and the rest of the arms form a background. He has an eye in each of those thousand palms. In the Kāraṇḍavyūha Sutra, Avalokiteshvara enters the Avici hells to save the beings trapped there. He converts the fire pits into cool refreshing pools and makes the place a paradise. The guardians of the hells report this to Yama, who in turnwonders whether the being who had done such a transformation could have been “Shiva”, “Vishnu”, a “Rakshasa” or some other supernatural being. When he sees through his divine eyes, he instead finds Avalokiteshvara there. He then appears before him and places his head at the feet of Avalokiteshvara and worships him. At that moment, he utters the following praises on Avalokitesvara:
    </p>
    <p class="blockquote"> namo’stvavalokiteśvarāya, maheśvarāya, padmaśriye, varadāya, vaśaṁkarāya, pṛthivīvaralocanakarāya, jagadāśvāsanakarāya, <u>śatasahasrabhujāya</u>, <u>koṭīśatasahasranetrāya</u>, <u>ekādaśaśīrṣāya</u>, vaḍavāmukhaparyantāya,[…]</p>
    <p> The underlined words read “hundred-thousand-armed” , “ten-million-hundred-thousand-eyed“, “eleven-headed“. The god of death, Yama praises bodhisattva Avalokiteshvara as having hundred-thousand-arms and ten-million times the amount of eyes. But interestingly his heads seems to be constant, always counting to eleven! There are several hymns praising the thousand armed Avalokitesvara, the most popular one being the “Mahā Karuṇā Dhāraṇī“, popularly known as the great compassion mantra. However, there are other lesser known hymns, many of which are presented in Lokesh Chandra’s book “Thousand Armed Avalokitsvara“. One such hymn is from the Caryā Kalpa of the thousand armed Avalokitesvara recorded by Amoghavajra. It is a corrected version reconstructed by comparing Taisho 1056 & 1062B.</p>
    <p class="text-h6"> Hymn to Thousand Armed Avalokitesvara</p>
    <q-img src="../../assets/mantras/thousand-armed-avalokitesvara.jpg" width="200px" class="float-left q-ma-md" />
    <hr/>
    <p> <transliterate source="IAST" :target="tab"  class="text-body1">namo ratnatrayāya . nama āryāvalokiteśvarāya bodhisattvāya mahāsattvāya mahākāruṇikāya .. mahāvīrāya sahasrākṣāya sahasraśīrṣāya sahasrapadāya sahasrajihvāya sahasrabhujāya  . ehi bhagavann āryāvalokiteśvara  . ugra atyugra mahāugra mahānāda  . kili kili kili kili  .  mili mili mili (mili)  . cili cili cili cili  . naṭa naṭa naṭa naṭa  . hasa hasa hasa hasa  . kuru kuru kuru kuru  . ehyehi mahāvīra  . balaṃ dada vīryaṃ dada  . sarva kāmaṃ me prayaccha  . śīghraṃ vaśaṃ me  . rāṣṭraṃ sarājakaṃ kuru  . sahasrabhuja sahasravīra lokeśvara  .  sādhaya sadā siddhiṃ me   . bhava varado bhavāgro bhava me  . oṃ namo'stute bhagavann āryāvalokiteśvara prabudhya prasīda naḥ . varado mama bhavāhi svāhā</transliterate></p>
    <hr/>
<p>This hymn expands the appearance of Avalokiteshvara as having thousand heads (sahasrasirsha), thousand teet (sahasara-pada) & thousand tounges (sahasra-jihva). One cannot but compare this form to the vedic Purusha. The Purusha Sukta in Rig Veda describes the primordial Purusha as having “thousand heads”, “thousand eyes”, “thousand feet” (<em>sahasraśīrṣā puruṣaḥ sahasrākṣaḥ sahasrapāt</em>). The followers of the Vedic religion believed that the entire universe along with all the deities had emerged from him. On a similar note, in the Karandavyuha Sutra, Avalokiteshvara takes the role of this primordial Purusha emanating all the Vedic gods from his body. The description of Avalokiteshvara as having thousand heads, feet and tongues must be seen as echoing this and casting him as a primordial being, having consequently metamorphosed him into the vedic Purusha.</p>

<p class="text-h6">Notes</p>
<p>Lokesh Chandra’s text has 3 mill-s, but it is more consistent to have 4 mili-s.</p>

<p class="text-h6">References</p>
<p> 1. Chandra, L. (1988). The thousand-armed Avalokiteśvara (Vol. 1). Abhinav Publications.</p>
</div>
  </q-page>
</template>

<script>
import Transliterate from '../../components/Transliterate.vue'
import ScriptTab from '../../components/ScriptTab.vue'

export default {
  name: 'PageIndex',
  components: {
    Transliterate,
    ScriptTab
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
}
</style>
