<template>
  <q-page padding>
    <q-breadcrumbs class="q-mb-md">
      <q-breadcrumbs-el label="Home" icon="home" to="/" />
      <q-breadcrumbs-el label="Writings" icon="create" to="/writings" />
      <q-breadcrumbs-el label="Assorted" />
    </q-breadcrumbs>
      <div class="q-ml-lg q-mr-xl">

    <p class="text-h5">Assorted</p>
    <p class="text-body2">
        An assorted list of articles that I have written about a variety of subjects.
    </p>
      <ol>
        <li v-for="(pub, index) in assorted" :key="'pub-'+index" class="text-body1"><a :href="pub.url">{{pub.title}}</a><br/><q-badge v-for="(tag,indexk) in pub.tags" :key="'pub-'+index+'-key-'+indexk" class="q-ma-xs" color="grey-6">{{tag}}</q-badge></li>
      </ol>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      assorted: [
        {
          title: 'Tamil-Brahmi Script: An Introduction',
          url: '/writings/assorted/tamil-brahmi',
          tags: ['writing systems', 'tamil']
        },
        {
          title: 'Male Homosexuality in the Kamasutra: A Close Reading',
          url: '/writings/assorted/homosexuality-kamasutra',
          tags: ['homosexuality', 'religious studies']
        },
        {
          title: 'Original Language of the Shramanas',
          url: '/writings/assorted/shramanas-language',
          tags: ['languages', 'religious studies']
        },
        {
          title: 'Shiva in Buddhism',
          url: '/writings/assorted/shiva-buddhism',
          tags: ['buddhism', 'religious studies']
        },
        {
          title: 'Vishnu in Buddhism',
          url: '/writings/assorted/vishnu-buddhism',
          tags: ['buddhism', 'religious studies']
        },
        {
          title: '63 Shaivaite Nayanamars & Jaina Salakapurushas',
          url: '/writings/assorted/nayanmars-jainism',
          tags: ['jainism', 'buddhism', 'religious studies']
        },
        {
          title: 'Srishtikarta Lokeshvara',
          url: '/writings/assorted/srishtikarta-lokeshvara',
          tags: ['buddhism', 'religious studies']
        },
        {
          title: 'Hari Hari Hari Vahana Lokeshvara',
          url: '/writings/assorted/hari-vahana-lokeshvara',
          tags: ['buddhism', 'religious studies']
        },
        {
          title: 'Refutation of God Being the Creator of the World',
          url: '/writings/assorted/god-refutation-nagarjuna',
          tags: ['buddhism', 'religious studies']
        }
      ]
    }
  }
}
</script>
