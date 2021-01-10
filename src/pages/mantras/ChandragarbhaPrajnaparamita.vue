<template>
  <q-page padding>
    <q-breadcrumbs class="q-mb-md">
      <q-breadcrumbs-el label="Home" icon="home" to="/" />
      <q-breadcrumbs-el label="Writings" icon="create" to="/writings" />
      <q-breadcrumbs-el label="Mantras" to="/writings/mantras" />
      <q-breadcrumbs-el label="Chandragarbha Prajnaparamita" />

    </q-breadcrumbs>
  <div class="q-ml-lg q-mr-xl">
    <p class="text-h5">Chandragarbha Prajnaparamita</p>
        <p><small><i>Composed: Feb, 2010. Updated: Sep, 2020</i></small></p>

    <p class="text-body2">
Chandragarbha Prajnaparamita is yet another short Prajnaparamita text, which summarizes the entire Prajnaparamita into a mantra. In this sutra, bodhisattva Chandragarbha inquires the Buddha on how Bodhisattvas should train themselves in Prajnaparamita. The Buddha explains:</p>
<p class="blockquote">The fact, Chandragarbha, that all dharmas are devoid of existence, that is the perfection of wisdom i.e Just as the disk of the moon indiscriminately turns round the four continents and removes the darkness, just so the bodhisattva, the great being, coursing in the the perfection of wisom, indiscriminately move round the four perverted view with his compassion, remove the defilements in the very core of their essential nature, and that by way of non-discrimination.</p>
<p>The sutra then goes on further explanation about the Prajnaparamita of the bodhisattvas. The Buddha then declares: Therefore then, the perfection of wisdom is a mantra:
</p>
    <script-tab v-model="tab"></script-tab>
    <hr/>
    <p> <transliterate source="IAST" :target="tab"  class="text-body1">oṃ prajñe prajñe mahāprajñe candraprajñe sarvaśā sagari svāhā </transliterate></p>

    <hr/>
<p> The variant reading is: </p>
    <hr/>
    <p> <transliterate source="IAST" :target="tab"  class="text-body1">oṃ prajñe prajñe mahāprajñe candraprajñe sarvaśāsakari svāhā
</transliterate></p>
    <hr/>
<p> Note the term “candraprajña” (moon-wisdom) appearing in the mantra. It to remind that the Bodhisattva should be like the moon, indiscriminate in nature. The name of the bodhisattva, “Chandragarbha”,  also sounds more metaphorical. The whole discourse in essence seems to be a means to reiterate the indiscriminate nature of the bodhisattva, for which the moon serves as a metaphor.

</p>

<p class="text-h6">References</p>
<p> 1. Conze, E. (1993). Perfect wisdom: The short prajnaparamita texts (p. 284). Buddhist Publishing Group.</p>
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
