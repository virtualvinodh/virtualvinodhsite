<template>
  <q-page padding>
    <q-breadcrumbs class="q-mb-md">
      <q-breadcrumbs-el label="Home" icon="home" to="/" />
      <q-breadcrumbs-el label="Projects" icon="create" to="/projects" />
      <q-breadcrumbs-el label="Agastya" icon="create" to="/projects/agastya" />
      <q-breadcrumbs-el label="Agastya: Installation Instructions" />

    </q-breadcrumbs>
  <div class="q-ml-lg q-mr-xl">
    <p class="text-h5">Installation Instructions</p>
    <ul>
    <li> Double-clicking on the .exe file might result in a dialogue box that asks for your confirmation to proceed with the installation. Please select 'Yes' </li><br/>
    <li> Click <i>Install Keyman Desktop</i> to proceed with the installation <br/>
    <q-img src="../../assets/keyman_te_1.png" width="400px" class="q-ma-md"/> </li><br/>
    <li> Once Keyman is installed, Click <i>Start Keyman</i>.   <br/>
    <q-img src="../../assets/keyman_te_2.png" width="400px" class="q-ma-md" /> </li><br/>
    <li>You should be able to see the Keyman icon (that looks like keyboard key) in your taskbar.<br/>
    <q-img src="../../assets/keyman_te_3.png" width="400px" class="q-ma-md" /> <br/>
    Sometimes it may also be hidden and needs to be expanded in case you have too many icons in your taskbar<br/>
    <q-img src="../../assets/keyman_te_4.png" width="200px" class="q-ma-md" /> </li><br/>
    <li> Click on the language icon (it most probably says "EN") to bring up the language menu. The Tamil Extended keyboard should appear on the list. Alternatively, you can also press Windows Key + Space to bring up this menu. <br/>
    <q-img src="../../assets/keyman_te_5.png" width="300px" class="q-ma-md" /> </li><br/>
    <li> To compose text, Start your favourite Word processor and set the text to either "Agastya" or "Lopamudra". <br/>
    <q-img src="../../assets/keyman_te_6.png" width="400px"  class="q-ma-md"/> </li><br/>
    <li> Using the language menu, set the keyboard to "Tamil Extended". <br/>
    <q-img src="../../assets/keyman_te_7.png" width="400px" class="q-ma-md" /> </li><br/>
    <li> You can now compose text using the Tamil Extended script. Make sure the font is properly set as Agastya/Lopamudra.  <br/>
    <q-img src="../../assets/keyman_te_8.png" width="400px"  class="q-ma-md"/> <br/>
    If the font switches back and the characters appear as Malayalam, reselect the text and assign the proper font again. <br/>
    <q-img src="../../assets/keyman_te_10.png" width="400px"  class="q-ma-md"/> <br/>
    <q-img src="../../assets/keyman_te_11.png" width="400px"  class="q-ma-md"/> <br/>
    </li>
    <li> The keyboard mapping can be found under the start menu within the folder "Tamil Extended Unicode Phonetic". <br/>
    <q-img src="../../assets/keyman_te_9.png" width="400px"  class="q-ma-md"/> </li>
    </ul>
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
