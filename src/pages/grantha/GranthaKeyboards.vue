<template>
  <q-page padding>
    <q-breadcrumbs class="q-mb-md">
      <q-breadcrumbs-el label="Home" icon="home" to="/" />
      <q-breadcrumbs-el label="Writings" icon="create" to="/writings" />
      <q-breadcrumbs-el label="Grantha" to="/writings/grantha" />
      <q-breadcrumbs-el label="Keyboards" />
    </q-breadcrumbs>
      <div class="q-ml-lg q-mr-xl">

    <p class="text-h5">Grantha Keyboards</p>
    <p class="text-body2">There are currently no offline keyboards available for Unicode Grantha. However, there are some online tools that can be used compose text in Unicode Grantha.</p>
    <p class="text-h5">Aksharamukha: Converter</p>
    <p><a href="http://aksharaukha.appspot.com" target="_blank">Aksharamukha</a> converter readily supports Unicode Grantha. You can convert from a wide variety of scripts including Devanagari or IAST into Grantha.

    <q-img src="../../assets/grantha/grantha-input-aksharamukha-devanagari.png" width="600px" class="q-ma-md"/>

    <q-img src="../../assets/grantha/grantha-input-aksharamukha-iast.png" width="600px" class="q-ma-md"/>

    <p class="text-h5">Aksharamukha: IME</p>
    <p>But if you'd like to use a phonetic method like ITRANS or something similar, you could use <a href="https://aksharamukha.appspot.com/input/Grantha" target="_blank">Aksharamukha IME</a>. It allows several phonetic layouts to be used to compose Grantha.</p>

    <q-img src="../../assets/grantha/grantha-input-aksharamukha-ime.png" width="400px" class="q-ma-md"/>

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
