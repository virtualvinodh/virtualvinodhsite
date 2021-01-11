<template>
  <q-page padding>
    <q-breadcrumbs class="q-mb-md">
      <q-breadcrumbs-el label="Home" icon="home" to="/" />
      <q-breadcrumbs-el label="Writings" icon="create" to="/writings" />
      <q-breadcrumbs-el label="Brahmi" to="/writings/brahmi" />
      <q-breadcrumbs-el label="Three Refuges"/>
    </q-breadcrumbs>
      <div class="q-ml-lg q-mr-xl">

    <p class="text-h5">Three Refuges</p>
    <p class="text-h5">Tisaraṇa | <span class="brahmi">𑀢𑀺𑀲𑀭𑀡</span></p>
    <img src="../../assets/brahmi/tisarana.jpg" height="40px" /> <br/><br/>

    <p> 1. Buddhaṁ saraṇaṁ gacchāmi <em>(Skt. Buddhaṃ śaraṇaṃ gacchāmi)</em> </p>
    <p class="brahmi"> 𑀩𑀼𑀤𑁆𑀥𑀁 𑀲𑀭𑀡𑀁 𑀕𑀘𑁆𑀙𑀸𑀫𑀺</p>
    <img src="../../assets/brahmi/tisarana-1.jpg" height="50px" />
    <p>I go to the Buddha for refuge</p><br/>

    <p> 2. Dhaṁmaṁ  saraṇaṁ gacchāmi <em>(Skt. Dharmaṃ śaraṇaṃ gacchāmi)</em> </p>
    <p class="brahmi"> 𑀥𑀁𑀫𑀁 𑀲𑀭𑀡𑀁 𑀕𑀘𑁆𑀙𑀸𑀫𑀺</p>
    <img src="../../assets/brahmi/tisarana-2.jpg" height="50px" />
    <p>I go to the Dharma for refuge</p><br/>

    <p> 3. Saṁghaṁ  saraṇaṁ gacchāmi <em>(Skt. Saṅghaṃ śaraṇaṃ gacchāmi)</em> </p>
    <p class="brahmi"> 𑀲𑀁𑀖𑀁 𑀲𑀭𑀡𑀁 𑀕𑀘𑁆𑀙𑀸𑀫𑀺</p>
    <img src="../../assets/brahmi/tisarana-3.jpg" height="50px" />
    <p>I go to the Sangha for refuge</p><br/>
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

<style scoped>
table {
  border-collapse: collapse;
}

table, th, td {
  border: 1px solid black;
  padding:10px;
}
</style>
