<template>
  <q-page padding>
    <q-breadcrumbs class="q-mb-md">
      <q-breadcrumbs-el label="Home" icon="home" to="/" />
      <q-breadcrumbs-el label="Writings" icon="create" to="/writings" />
      <q-breadcrumbs-el label="Mantras" to="/writings/mantras" />
      <q-breadcrumbs-el label="Vajrananga Manjushri" />

    </q-breadcrumbs>
  <div class="q-ml-lg q-mr-xl">
    <p class="text-h5">Vajrananga Manjushri: The Buddhist Kamadeva</p>
    <p><small><i>Composed: Aug, 2012. Updated: Sep, 2020</i></small></p>
    <q-img src="../../assets/mantras/vajrananga.jpg" width="150px" class="float-left q-ma-md" />
    <p class="text-body2">Among the bodhisattvas belong to the Mahayana pantheon, Manjushri is probably the most popular bodhisattva after Avalokitesvara. Similar to Avalokitesvara, according Buddihst legends, Manjushri can also assume several forms for the benefit of sentient beings. In one specific form, Manjushri assumes the form of Kāmadeva, the god of desire. This form of Manjushri is called as “Vajra-Anaṅga” (with Sandhi: Vajrānaṅga). “Vajra” is the usual prefix to Buddhist tantric deities and “an-anga” (without-body) is an epithet of Kamadeva. Vajra-Ananga is usually invoked in the tantric “vashikarana” aAttraction) ritual to attract a partner of their desire.</p>
    <p>In an esoteric sense, Manjushri, the bodhisattva of wisdom, taking the form of the god of desire, might represent the transformation of “desire” into “wisdom”. Tantra is oriented towards the chanelling of negative forces and the transformation of those forces into wisdom. Vajra-Ananga is a direct representation of that transformation. The afore mentioned tantric vashikarana ritual of attaining woman may look very materialistic from an exoteric perspective but the esoteric meaning of the ritual could be construed as to attain wisdom (prajna), which is commonly deified as a female. </p>
    <p>The iconography of Vajra Ananga is described in the Sadhana-Mala as follows:</p>
    <p class="blockquote">vajrānaṅganāma ārya-mañjughoṣaṁ pītavarṇaṁ ṣaḍbhujaṁ mūlabhujābhyāṁ ākarṇapūrita raktotpala kalikāśarayukta kusumadhanurdharaṁ; dakṣiṇadvayena khaḍgadarpaṇabhṛtaṁ vāmayugalenendīvara raktāśokapallavadharaṁ; akṣobhyādhiṣṭhita jaṭāmukuṭinaṁ pratyālīḍhapadaṁ ṣoḍaśavarṣākāraṁ mahāśṛṅgāramūrtiṁ paśyet
</p>
    <p class="blockquote">The worshipper should think himself as Arya-Manjughosha in the form of Vajrananga with yellow complexion, and six arms. With the two principal hands he draws to the ear the bow of flowers charged with a arrow of a red lotus bud; the remaining right hands carry the sword and the mirror, while the two left hold the lotus and the ashoka bough with red flowers. He bears the image of Akshobhya on his jatamukuta, stand int he pratyalidha attitude, appears a youth of sixteen years and displays the intense shringara rasa</p>
    <p class="text-h6">Invocation of Vajra Ananga </p>
<p>Nāgarasarvasva is a kamashastra (treatise of love) text written by a Buddhist named Padmashri. It is not known whether Padmashri was a monk or not. But it was not uncommon for celibate authors to compose Kāmashāstra (Vātsyāyana was himself said to be celibate during the composition of Kāmasutra). The date of work is placed between 800 CE and 1400 CE. Most probably it was composed around 11th century CE.</p>

<p>Usually Kāmadeva is invoked in the works of kāmashastra, but being a Buddhist Padmashri invoked bodhisattva Manjushri.
</p>
    <script-tab v-model="tab"></script-tab>
    <hr/>
    <p> <transliterate source="IAST" :target="tab"  class="text-body1">muhūrtamapi yaṃ smarannabhimatāṃ manohāriṇīṃ#
labheta madavihvalāṃ jhaṭiti kāminīṃ kāmukaḥ .#
tamullasitaḍambaraṃ surucirāṅgarāgāruṇaṃ#
namāmi sumanaḥśaraṃ satatamāryamañjuśriyaṃ ..</transliterate></p>

    <hr/>
<p> Expectedly, he is invoking Manjushri assuming the form of Kamadeva a.k.a Vajra Ananga Manjushri. As we had earlier seen, the bodhisattva’s Vajra-Ananga form is used in the Tantric ritual of Vashikarana. The first part of the invocation is probably a direct reference to this. The second part describes Manjushri as Kamadeva himself.

Some suggest the verse to be a pun referring to both Kamadeva and Manjushri. The term “Manjushri” can very well be used as an epithet of Kamadeva but it is most likely he was actually invoking only Kamadeva. Alternatively, it may refer to another form of Manjushri, Vajra-Rāga (vajra-passion) who also holds a bow and arrow.</p>

<p>

It also suggests that the lay people yearning to unite with their loved ones were probably invoking Manjushri to fulfil their desires. Infact, in another section of this kamashastra text, Padmashri advises to invoke Bodhisattva Tārā for the birth of a male child.

</p>

<p class="text-h6">References</p>
<p>1. Nagarasarvasva (in Sanskrit) (1966). Srivenkateshvara Book Agency, Kolkata</p>
<p>2. Bhattachacharyya, B (1958). Indian Buddhist Iconography.</p>
<p>3. Benton, C (2006). God of Desire: Tales of Kamadeva in Sanskrit Story Literature (Suny Series in Hindu Studies). </p>
<p>4. Ali, D (2011). Padmashri’s Nagarasarvasva and the world of Medieval Kamashastra, Journal of Indian Philosophy, 39, 41-62.  </p>
<p>5. Donaldson, T (2001). Iconography of the Buddhist Sculpture of Orissa.</p>
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
