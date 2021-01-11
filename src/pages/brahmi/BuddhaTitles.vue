<template>
  <q-page padding>
    <q-breadcrumbs class="q-mb-md">
      <q-breadcrumbs-el label="Home" icon="home" to="/" />
      <q-breadcrumbs-el label="Writings" icon="create" to="/writings" />
      <q-breadcrumbs-el label="Brahmi" to="/writings/brahmi" />
      <q-breadcrumbs-el label="Titles of the Buddha"/>
    </q-breadcrumbs>
      <div class="q-ml-lg q-mr-xl">

    <p class="text-h5">Titles of the Buddha</p>
    <p>The following are the usual 10 epithets ascribed to the Buddha in Pali. </p>
    <table>
      <tr>
        <td> Epithet (Pali) </td>
        <td> Brahmi (Image) </td>
        <td> Brahmi (Unicode) </td>
        <td> Sanskrit Eqv. </td>
      </tr>
      <tr>
        <td> 1. Tathāgata  </td>
        <td> <img src="../../assets/brahmi/tathagata.jpg" height="30px" /> </td>
        <td class="brahmi"> 𑀢𑀣𑀸𑀕𑀢 </td>
        <td> Tathāgata </td>
      </tr>
      <tr>
        <td> 2. Arahaṃ </td>
        <td>  <img src="../../assets/brahmi/araham.jpg" height="30px" /> </td>
        <td class="brahmi"> 𑀅𑀭𑀳𑀁 </td>
        <td> Arhat </td>
      </tr>
      <tr>
        <td> 3. Saṁmāsaṁbuddha </td>
        <td> <img src="../../assets/brahmi/sammasambuddha.jpg" height="50px" /> </td>
        <td class="brahmi"> 𑀲𑀁𑀫𑀸𑀲𑀁𑀩𑀼𑀤𑁆𑀥 </td>
        <td>  Samyaksaṁbuddha </td>
      </tr>
      <tr>
        <td> 4. Vijjā caraṇasaṃpanna </td>
        <td> <img src="../../assets/brahmi/vijjacaranasampanna.jpg" height="50px" /> </td>
        <td class="brahmi"> 𑀯𑀺𑀚𑁆𑀚𑀸 𑀘𑀭𑀡𑀲𑀁𑀧𑀦𑁆𑀦 </td>
        <td>  Vidyā caraṇasaṃpanna </td>
      </tr>
      <tr>
        <td> 5. Sugata </td>
        <td> <img src="../../assets/brahmi/sugata.jpg" height="35px" /> </td>
        <td class="brahmi"> 𑀲𑀼𑀕 </td>
        <td> Sugata  </td>
      </tr>
      <tr>
        <td> 6. Lokavidū  </td>
        <td> <img src="../../assets/brahmi/lokavidu.jpg" height="35px" /> </td>
        <td class="brahmi"> 𑀮𑁄𑀓𑀯𑀺𑀤𑀽 </td>
        <td> Lokavid </td>
      </tr>
      <tr>
        <td> 7. Anuttara </td>
        <td> <img src="../../assets/brahmi/Anuttara.jpg" height="50px" /> </td>
        <td class="brahmi">  𑀅𑀦𑀼𑀢𑁆𑀢𑀭 </td>
        <td> Anuttara </td>
      </tr>
      <tr>
        <td> 8. Purisadaṃmasārathī </td>
        <td> <img src="../../assets/brahmi/purisadhammasarathi.jpg" height="40px" /> </td>
        <td class="brahmi"> 𑀧𑀼𑀭𑀺𑀲𑀤𑀁𑀫𑀲𑀸𑀭𑀣𑀻 </td>
        <td> Puruṣadamyasārathī  </td>
      </tr>
      <tr>
        <td> 9. Satthā devamanussānaṃ </td>
        <td> <img src="../../assets/brahmi/satthadevamanussanam.jpg" height="50px" /> </td>
        <td class="brahmi"> 𑀲𑀢𑁆𑀣𑀸 𑀤𑁂𑀯𑀫𑀦𑀼𑀲𑁆𑀲𑀸𑀦𑀁 </td>
        <td>  Śāstā devamanuṣyāṇam </td>
      </tr>
      <tr>
        <td> 10. buddho bhagavā</td>
        <td> <img src="../../assets/brahmi/buddhobhagava.jpg" height="50px" /> </td>
        <td class="brahmi"> 𑀩𑀼𑀤𑁆𑀥𑁄 𑀪𑀕𑀯𑀸 </td>
        <td>  Buddho bhagavan </td>
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
