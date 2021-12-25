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
    <p class="text-body2">BhashaIME, in principle, allows you to type in Grantha. However, at least in Windows 10, I was unable to use the phonetic keyboard properly. The Inscript keyboard appears to work OK though.You can download it from <a href="https://sites.google.com/site/bhashaime/">here</a>.</p>
   <p class="text-body2">You can also use Keyman keyboards to compose in Grantha. See <a href="hhttps://granthavarman.appspot.com/font-keyboard">here</a> for more information</p>
    <p class="text-h5">Online Tools</p>
    <p class="text-h6">Granthavarman</p>
    <p><a href="http://granthavarman.appspot.com" target="_blank">Granthavarman</a> readily supports typing in Unicode Grantha using phonetic and inscript methods. It supports conversion from the following formats - ITRANS, Harvard-Kyoto, IAST and Devanagari. It also provides additional options to customize the visual appearance of the grantha text.</p>
    <p>
      <q-img src="../../assets/grantha/granthavarma-1.png" width="800px" class="q-ma-md"/> <br/>
      <q-img src="../../assets/grantha/granthavarma-2.png" width="800px" class="q-ma-md"/><br/>
    </p>
    <p> You can also switch between various Grantha fonts as shown below. </p>
      <q-img src="../../assets/grantha/granthavarma-3.png" width="600px" class="q-ma-md"/>
     <br/>
    <p class="text-h6">Aksharamukha: Converter</p>
    <p><a href="http://aksharaukha.appspot.com" target="_blank">Aksharamukha</a> converter readily supports Unicode Grantha. You can convert from a wide variety of scripts including Devanagari or IAST into Grantha.
     <br/>
    <q-img src="../../assets/grantha/grantha-input-aksharamukha-devanagari.png" width="600px" class="q-ma-md"/>
    <br/>
    <q-img src="../../assets/grantha/grantha-input-aksharamukha-iast.png" width="600px" class="q-ma-md"/>

    <p class="text-h6"></p>

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
