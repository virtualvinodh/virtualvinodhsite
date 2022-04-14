<template>
<div>
    <p class="text-h4 q-ma-lg cards">Vinodh Rajan</p> <br/>
<div class="banner bg-grey-2 q-pa-md text-body1">
<q-img src="../assets/prof1.jpg" width="95px" class="float-left q-ml-sm q-mt-sm q-mb-sm q-mr-md"/>
I'm a computer scientist interested in writing systems, languages and digital humanities. After working as a software engineer in India for three years, I pursued a PhD in Digital Paleography at the University of St Andrews, Scotland. This was followed by a rather interesting four years in academia in Scotland and Germany. Currently, I work as a Senior Consultant in Hamburg. In my free time, I develop and maintain open-source projects, and write peer-reviewed articles and blog entries.
</div>
    <div class="q-ma-md row items-start q-gutter-sm">
      <home-card name="Profile" icon="fingerprint" link="/profile" desc="Professional timeline & media appearances" tags="work, education"></home-card>
      <home-card name="Projects" icon="construction" link="/projects" desc="Open source software projects" tags="full-stack development, font engineering"></home-card>
      <home-card name="Unicode" icon="language" link="/unicode"  desc="Proposals to the Unicode consortium" tags="writing system, language, character encoding"></home-card>
      <home-card name="Research" icon="science" link="/research" desc="Research publications and talks. " tags="digital paleography, image processing, machine transliteration, HCI, UI/UX"></home-card>
      <home-card name="Writing" icon="create" link="/Writings" desc="Various articles written over the years" tags="writing system, language, religious studies"></home-card>
    </div>
        <!-- <q-img
          src="../assets/prof1.jpg"
          width="250px"
          class="profilepic absolute-bottom-left desktopprofile desktop-only"
          /> -->
</div>
</template>

<script>
import HomeCard from '../components/HomeCard.vue'
export default {
  name: 'PageIndex',
  components: {
    HomeCard
  }
}
</script>

<style scoped>
.banner {
  max-width: 800px;
  text-align: justify;
}
.cards {
  margin-bottom:-10px;
}
.profilepic {
  transform: scaleX(-1);
  filter:grayscale(0.7)
}
.mobileprofile {
  display: block;
  margin-left: auto;
  margin-right: auto;
  opacity: 0.05;
}
.desktopprofile {
  opacity: 0.3;
  margin-left: 175px;
}
</style>
