<template>
  <q-page padding>
    <q-breadcrumbs class="q-mb-md">
      <q-breadcrumbs-el label="Home" icon="home" to="/" />
      <q-breadcrumbs-el label="Writings" icon="create" to="/writings" />
      <q-breadcrumbs-el label="Brahmi" />
    </q-breadcrumbs>
      <div class="q-ml-lg q-mr-xl">

    <p class="text-h5">Buddhist Credos in Brahmi </p>
    <p class="text-body2">The Brahmi script is one of the most important writing systems in the world by virtue of its time, depth and influence. It represents the earliest post-Indus corpus of texts, and some of the earliest historical inscriptions found in India. Most importantly, it is the ancestor to most of the scripts found in South, Southeast, and East Asia.The earliest known inscriptions in the Brahmi alphabet are those of king Asoka (c.270-232 BCE), third monarch of the Mauryan dynasty. Brahmi was used to write a variety of languages, including Sanskrit and Prakrit.</p>

    <q-img src="../../assets/brahmi/brahmi-sample.jpg" width="400px" class="q-ma-md"/>

    <p>I have attempted to render a few texts, mostly Buddhist credos, in Brahmi. The Brahmi texts in this section were produced using Xenotype Asokan Brahmi & Alphabetum fonts. As he fonts do not support conjuncts extensively, many of them were photoshopped to get the right shape. Some conjuncts occur only in later Brahmi and imposing them on Asokan Brahmi might have resulted in some anachronistic forms. I have also tried to avoid conjuncts as far as possible by using the Anusvara. Even double ‘m’ is rendered using the Anusvara (Asokan inscriptions actually spell dhamma as dhaṁma with Anusvara ) </p>

    <p><em> These articles were created before the existence of a working Brahmi Unicode font. These days Brahmi can be reasonably rendered using Segoe Historic UI or Noto Sans Brami fonts. Thefore, I don't create these anymore. It's now trivial to <a href="https://aksharamukha.appspot.com" target="_blank">convert</a> Devanagari or IAST into Brahmi Unicode. </em></p>
    <ol class="text-body1">
      <li><a href="/writings/brahmi/buddha-titles">Ten Titles of the Buddha</a></li>
      <li><a href="/writings/brahmi/five-precepts">Five Precepts</a></li>
      <li><a href="/writings/brahmi/three-refuges">Three Refuges</a></li>
      <li><a href="/writings/brahmi/noble-path">Noble Eightfold Path</a></li>
      <li><a href="/writings/brahmi/noble-truth">Four Noble Truths</a></li>
      <li><a href="/writings/brahmi/homage-buddha">Homage to the Buddha </a></li>
      <li><a href="/writings/brahmi/verse-causation">The Verse of Causation</a></li>
      <li><a href="/writings/brahmi/dhammapada">Dhammapada: Yamakavagga</a></li>
      <li><a href="/writings/brahmi/asokan-edict">Asokan Edict: Delhi Inscription</a></li>
    </ol>
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
  }
}
</script>
