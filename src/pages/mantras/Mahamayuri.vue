<template>
  <q-page padding>
    <q-breadcrumbs class="q-mb-md">
      <q-breadcrumbs-el label="Home" icon="home" to="/" />
      <q-breadcrumbs-el label="Writings" icon="create" to="/writings" />
      <q-breadcrumbs-el label="Mantras" to="/writings/mantras" />
      <q-breadcrumbs-el label="Mahamayuri" />

    </q-breadcrumbs>
       <div class="q-ml-lg q-mr-xl">

    <p class="text-h5">Mahamayuri</p>
        <p><small><i>Composed: Oct, 2009. Updated: Sep, 2020</i></small></p>
    <p class="text-body2">
      Mahāmāyūrī Vidyārājñī also known as the “[great] peacock wisdom queen” (literal translation of the Sanskrit)  is a [peaceful looking] wrathful deity in Mahayana. She is known as Kujaku Myo-o in Japanese and is generally associated with the removal of poisons. Mahamayuri  belongs to the class of deities called “Vidyārājas” (wisdom kings). She is one of the Pañcarakṣā Devis [Five protection goddesses] in the Nepalese tradition. The others being “Mahāpratisarā“, “Mahāsāhasra-pramardinī“, “Mahāśītavatī“, & “Mahāmantrānusāriṇī“.
    </p>
    <q-img src="../../assets/mantras/mahamayuri.jpg" width="200px" class="float-left q-ma-md" />
    <p> <em> From <a href="http://www.buddhanet.net/pdf_file/icon_nepbud.pdf">Iconography of Nepalese Buddhism</a>: </em>
    <div class="blockquote">According  to  the  Mahamayuri  sutra  of  Pancaraksha, there was  a bhiksu  called  venerable Svati. He was newly ordained  in  the Buddhist  community  of monks. He was unfortunately bitten by a poisonous snake and  fainted. On seeing his condition venerable Ananda reported this incident to Buddha Shakyamuni. Lord Buddha, out of compassion for the newly ordained monk and the future ones, disclosed a dharani which was capable of eliminating poisonous harm and malignant diseases. This was the dharani of Arya Mahamayuri. <br/><br/>There  is  another  story  about  this  deity. There  was a golden King peacock in the Himalayan mountain who used to recite Mahamayuri dharani with great devotion. It so happened one day that this king went along with his family to travel  in  the mountain  forgetting  to  recite  the dharani  that day. He was caught by hunters. thinking of his forgetfulness of the dharani he immediately began to recite and was able to free himself. Thee Buddha told Ananda that the peacock king called  Suvarnavabhasa  (i.e.  golden  coloured  one)  was  none other than Buddha Shakyamuni himself.  Thus this dharani is believed to be efcacious in all cases of dangers as well as for relieving poisonous harms. </div>
    <p> <em> From <a href="http://www.thlib.org/static/reprints/bot/bot_1989_02_03.pdf">Bulletin of Tibetology</a>: </em>
    <div class="blockquote">It is interesting to note that ‘Mahamayuri-Mantra’ had been prescribed by Sakyaputra Gautama, the Buddha, himself when a monk was not cured in spite of the treatment of a Vaidya from his snake-bit. The account is mentioned in the Bhaisajya-vastu (T. Sman gyi gzhi) of the Mulasarvastivada Vinaya vastu (‘Dul ba gzhi: Bka’ – ‘gyur. Nge. Vol. Peking Edn). As usual the method of narrating an account in the vinaya-texts is observed here. A monk named Sari (Skt. Svati) had a snake-bite.<br/><br/>In this connection a legend of the Peacock-king named suvarna-prabhasa depicts the efficacy of the Mahamayuri-Vidya who had bee conversant in the Vidya. He was in the right side of the Himalaya mountain when he was caught hold in a net of an enemy at the midnight after allure in the company of the peahens around him. He however regained his memory and chanted the Vidya. Thereafter, he could run away. The net was broken off.<br/><br/>[…] It becomes evident that the Vidya in Sanskrit had been prevalent in India […]</div>
    <p class="text-h6"> Mahayamayuri Vidya</p>
    <p>The Vidya of Mahamayuri as seen in the <a href="http://gretil.sub.uni-goettingen.de/gretil/1_sanskr/4_rellit/buddh/vinv_06u.htm">Bhaisajyavastu.</a></p>
    <script-tab v-model="tab"></script-tab>
    <p class="text-h6"> Version 1</p>
    <hr/>
    <p> <transliterate source="IAST" :target="tab" class="text-body1" >namo buddhāya namo dharmāya namaḥ saṃghāya ## tadyathā amale vimale nirmale maṃgale hiraṇye hiraṇyagarbhe bhadre subhadre samantabhadre śrībhadre sarvārthasādhani paramārthasādhani sarvānarthapraśamani sarvamaṅgalasādhani manase mānase mahāmānase acyute adbhute atyadbhute mukte mocani mokṣaṇi araje viraje amṛte amare amaraṇi brahme brahmasvare pūrṇe pūrṇamanorathe mukte jīvati rakṣa svātiṃ sarvopadravabhayarogebhyaḥ svāhā</transliterate></p>
    <hr/>
    <p class="text-h6"> Version 2</p>
    <hr/>
    <p><transliterate source="IAST" :target="tab"  class="text-body1">[ namo buddhāya namo dharmāya namaḥ saṃghāya ] ## tadyathā amale vimale nirmale maṅgalye hiraṇye hiraṇyagarbhe bhadre subhadre samantabhadre śrībhadre sarvārthasādhani paramārthasādhani sarvānarthapraśamani sarvamaṅgalyasādhani manasi mānasi mahāmānasi acyute adbhute atyadbhute mukte mocani mokṣaṇi araje viraje amare amṛte amaraṇi brahme brahmasvare pūrṇe pūrṇamanorathe vimukte jīvati rakṣa māṃ sarvopadravebhyaḥ svāhā</transliterate></p>
<hr/>
<p>Apart from difference occuring due to scribal variations between the two versions such as mangale/mangalye manse/manasi etc, there is an important difference. In the first version, when the Buddha proclaims the vidya to save the bhikshu Svati he says, “rakṣa svātiṃ” (protect Svati), and in the second version, as the peacock king Suvarnaprabhasa, when remembering the dharani to help himself out,  he says “rakṣa māṃ” (protect me).</p>

<p>Similar to that noted by Jayarava <a href="http://www.visiblemantra.org/white-tara.html">here</a>. This could be an example of a “template-style-dharani” too – The pattern to be matched is <em> rakṣa 'object in accusative case' </em>. </p>

<p class="text-h6">Notes</p>

<p>1. The Gretil text has “rakṣā svātiṃ” which must be a typo. The BoT has “rakṣa svātiṃ”, which seems to be correct variant, and matches with the second version of the dharani. Accordingly, I have amended it as "rakṣa svātiṃ".</p>
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
</style>
