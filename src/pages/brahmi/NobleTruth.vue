<template>
  <q-page padding>
    <q-breadcrumbs class="q-mb-md">
      <q-breadcrumbs-el label="Home" icon="home" to="/" />
      <q-breadcrumbs-el label="Writings" icon="create" to="/writings" />
      <q-breadcrumbs-el label="Brahmi" to="/writings/Brahmi" />
      <q-breadcrumbs-el label="Noble Truth"/>
    </q-breadcrumbs>
            <div class="q-ml-lg q-mr-xl">

    <p class="text-h5">Four Noble Truths</p>
    <p class="text-h6">Cattāri ariya saccāni | <span class="brahmi">𑀘𑀢𑁆𑀢𑀸𑀭𑀺 𑀅𑀭𑀺𑀬 𑀲𑀘𑁆𑀘𑀸𑀦𑀺</span></p>
    <p class="text-h6">Skt: Catvāri ārya satyāni</p>

    <p>The following are the usual 10 epithets ascribed to the Buddha in Pali. </p>
    <table>
      <tr>
        <td> Path (Pali) </td>
        <td> Brahmi (Image) </td>
        <td> Brahmi (Unicode) </td>
        <td> Sanskrit Eqv. </td>
        <td> English </td>
      </tr>
      <tr>
        <td> 1. Dukkha </td>
        <td> <img src="../../assets/brahmi/fournoble-1.jpg" height="60px" /> </td>
        <td class="brahmi"> 𑀤𑀼𑀓𑁆𑀔 </td>
        <td> Duḥkha </td>
        <td> Suffering </td>
      </tr>
      <tr>
        <td> 2. Samudaya  </td>
        <td>  <img src="../../assets/brahmi/fournoble-2.jpg" height="40px" /> </td>
        <td class="brahmi"> 𑀲𑀫𑀼𑀤𑀬 </td>
        <td> Samudaya </td>
        <td> Origin </td>
      </tr>
      <tr>
        <td> 3. Nirodha  </td>
        <td> <img src="../../assets/brahmi/fournoble-3.jpg" height="40px" /> </td>
        <td class="brahmi"> 𑀦𑀺𑀭𑁄𑀥 </td>
        <td> Nirodha </td>
        <td> Cessation </td>
      </tr>
      <tr>
        <td> 4. Magga  </td>
        <td> <img src="../../assets/brahmi/fournoble-4.jpg" height="55px" /> </td>
        <td class="brahmi"> 𑀫𑀕𑁆𑀕 </td>
        <td> Mārga </td>
        <td> Path </td>
      </tr>
    </table>
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
