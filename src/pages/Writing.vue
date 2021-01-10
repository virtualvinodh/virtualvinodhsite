<template>
  <q-page padding>
    <p class="text-h4">Writings </p>
    <div class="q-pa-md row items-start q-gutter-sm">
      <home-card name="Grantha" img="granthalipi.png" size="45px" link="/writings/grantha" desc="Lessons to learn the Grantha script" tags="writing system"></home-card>
      <home-card name="Brahmi " img="sakyamuni.png" size="45px" link="/writings/brahmi" desc="Buddhist Credos in the ancient Brahmi script" tags="writing system"></home-card>
      <home-card name="Mantras" img="hum-siddham.png" size="45px" link="/writings/mantras"  desc="Various Buddhist spells and incantations" tags="religious studies"></home-card>
      <home-card name="Assorted" icon="article" link="/writings/assorted"  desc="Assorted collection of articles" tags="homosexuality, languages, religious studies"></home-card>
      <home-card name="தமிழ்" img="tamil-a.png" size="45px" link="/writings/tamil" desc="தமிழில் எழுதப்பட்ட கட்டுரைகள்"
      tags="தமிழ்"></home-card>
    </div>
  </q-page>
</template>

<script>
import HomeCard from '../components/HomeCard.vue'

export default {
  name: 'PageIndex',
  components: {
    HomeCard
  },
  data () {
    return {
    }
  }
}
</script>
