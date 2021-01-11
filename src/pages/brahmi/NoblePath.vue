<template>
  <q-page padding>
    <q-breadcrumbs class="q-mb-md">

      <q-breadcrumbs-el label="Home" icon="home" to="/" />
      <q-breadcrumbs-el label="Writings" icon="create" to="/writings" />
      <q-breadcrumbs-el label="Brahmi" to="/writings/brahmi" />
      <q-breadcrumbs-el label="Noble Path"/>
    </q-breadcrumbs>
    <div class="q-ml-lg q-mr-xl">

    <p class="text-h5">Noble Eightfold Path</p>
    <p class="text-h6">Ariya aṭṭhaṅgika magga | <span class="brahmi">𑀅𑀭𑀺𑀬 𑀅𑀝𑁆𑀞𑀗𑁆𑀕𑀺𑀓 𑀫𑀕𑁆𑀕</span></p>
    <p class="text-h6">Skt: Āryāṣṭāṅgamārga</p>

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
        <td> 1. Saṁmā diṭṭhi  </td>
        <td> <img src="../../assets/brahmi/eightfold-1.jpg" height="49px" /> </td>
        <td class="brahmi"> 𑀲𑀁𑀫𑀸 𑀤𑀺𑀝𑁆𑀞𑀺 </td>
        <td> Samyak dṛṣti  </td>
        <td> Right view </td>
      </tr>
      <tr>
        <td> 2. Saṁmā saṁkappa </td>
        <td>  <img src="../../assets/brahmi/eightfold-2.jpg" height="45px" /> </td>
        <td class="brahmi"> 𑀲𑀁𑀫𑀸 𑀲𑀁𑀓𑀧𑁆𑀧 </td>
        <td> Samyak saṅkalpa </td>
        <td> Right intention </td>
      </tr>
      <tr>
        <td> 3. Saṁmā vācā </td>
        <td> <img src="../../assets/brahmi/eightfold-3.jpg" height="30px" /> </td>
        <td class="brahmi"> 𑀲𑀁𑀫𑀸 𑀯𑀸𑀘𑀸 </td>
        <td> Samyak vāk </td>
        <td> Right speech </td>
      </tr>
      <tr>
        <td> 4. Saṁmā kaṁmaṁta </td>
        <td> <img src="../../assets/brahmi/eightfold-4.jpg" height="30px" /> </td>
        <td class="brahmi"> 𑀲𑀁𑀫𑀸 𑀓𑀁𑀫𑀁𑀢 </td>
        <td> Samyak karmanta </td>
        <td> Right action </td>
      </tr>
      <tr>
        <td> 5. Saṁmā ājīva </td>
        <td> <img src="../../assets/brahmi/eightfold-5.jpg" height="35px" /> </td>
        <td class="brahmi"> 𑀲𑀁𑀫𑀸 𑀆𑀚𑀻𑀯 </td>
        <td> Samyak ājīva </td>
        <td> Right living </td>
      </tr>
      <tr>
        <td> 6. Saṁmā vāyāma </td>
        <td> <img src="../../assets/brahmi/eightfold-6.jpg" height="30px" /> </td>
        <td class="brahmi"> 𑀲𑀁𑀫𑀸 𑀯𑀸𑀬𑀸𑀫 </td>
        <td> Samyak vyāyāma </td>
        <td> Right effort </td>
      </tr>
      <tr>
        <td> 7. Saṁmā sati </td>
        <td> <img src="../../assets/brahmi/eightfold-7.jpg" height="35px" /> </td>
        <td class="brahmi"> 𑀲𑀁𑀫𑀸 𑀲𑀢𑀺 </td>
        <td> Samyak smṛti </td>
        <td> Right mindfulness </td>
      </tr>
      <tr>
        <td> 8. Saṁmā samādhi </td>
        <td> <img src="../../assets/brahmi/eightfold-8.jpg" height="35px" /> </td>
        <td class="brahmi"> 𑀲𑀁𑀫𑀸 𑀲𑀫𑀸𑀥𑀺 </td>
        <td> Samyak samādhi  </td>
        <td> Right concentration</td>
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
