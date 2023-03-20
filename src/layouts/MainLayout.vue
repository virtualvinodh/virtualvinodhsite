<template>
  <q-layout view="hHr Lpr fFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-btn
          round
          size="lg"
          text-color="white"
          color="grey-10"
          to ="/"
          class="q-ma-xs"
        >
         <span class="tagalog title-letter">ᜏᜒ</span>
        </q-btn>

        <q-toolbar-title class="">
          <div class="">Virtual Vinodh</div>
        </q-toolbar-title>

      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
      :width="150"
    >
      <q-list>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'

const linksData = [
  {
    title: 'Home',
    icon: 'home',
    link: '/'
  },
  {
    title: 'Profile',
    icon: 'fingerprint',
    link: '/profile'
  },
  {
    title: 'Projects',
    icon: 'construction',
    link: '/projects'
  },
  {
    title: 'Unicode',
    icon: 'language',
    link: '/unicode'
  },
  {
    title: 'Research',
    icon: 'science',
    link: '/research'
  },
  {
    title: 'Writings',
    icon: 'create',
    link: '/writings'
  },
  {
    title: 'Contact',
    icon: 'rss_feed',
    link: '/contact'
  }
]

export default {
  name: 'MainLayout',
  components: { EssentialLink },
  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData
    }
  }
}
</script>

<style>
@import url('https://cdn.jsdelivr.net/gh/virtualvinodh/aksharamukha/aksharamukha-front/src/statics/fonts.css');

.tamilold {
  font-family: "Mukta Malar Regular" !important;
  font-feature-settings: "ss04", "kern";
  font-size: 120%;
}

.tamil {
  font-size: 85%;
}

.tamilextended {
  font-size: 85%;
}

@font-face {
  font-family: 'Lao Pali';
  src: url('https://cdn.jsdelivr.net/gh/virtualvinodh/aksharamukha/aksharamukha-front/src/statics/Lanexang_Mon4.otf')
}

@font-face {
  font-family: 'Tamil Brahmi';
  src: url('../assets/TamilBrahmiCodeChart.otf')
}

@font-face {
  font-family: 'Bengali Codechart';
  src: url('../assets/bengaliproposal.otf')
}

@font-face {
  font-family: 'Telugu Codechart';
  src: url('../assets/telugu-codechart.otf')
}

@font-face {
  font-family: 'Tulu Codechart';
  src: url('../assets/Tulu-Tigalari_Unicode-Regular.ttf')
}

@font-face {
  font-family: 'Aazhvaar Telugu';
  src: url('https://cdn.jsdelivr.net/gh/virtualvinodh/aazhvaar-telugu/AazhvaarTelugu.otf')
}

@font-face {
  font-family: 'Agastya Extended Tamil';
  src: url('https://cdn.jsdelivr.net/gh/virtualvinodh/agastya-tamil-extended/agastya_sans.otf')
}

@font-face {
  font-family: 'Agastya Serif';
  src: url('https://cdn.jsdelivr.net/gh/virtualvinodh/agastya-tamil-extended/agastya_serif.otf')
}

@font-face {
  font-family: 'Agastya Sans';
  src: url('https://cdn.jsdelivr.net/gh/virtualvinodh/agastya-tamil-extended/agastya_sans.otf')
}

@font-face {
  font-family: 'Lopamudra Sans';
  src: url('https://cdn.jsdelivr.net/gh/virtualvinodh/agastya-tamil-extended/lopamudra_sans.otf')
}

@font-face {
  font-family: 'Lopamudra Serif';
  src: url('https://cdn.jsdelivr.net/gh/virtualvinodh/agastya-tamil-extended/lopamudra_serif.otf')
}

@font-face {
  font-family: 'Lao Codechart';
  src: url('../assets/lao_code_chart_yamakkan.otf')
}

.telugu2 {
  font-family: "Telugu Codechart" !important
}

.granthano {
  font-family: "Noto Sans Grantha2" !important;
  font-feature-settings: "ss01";
}

.lao {
  font-family: "Lao Pali" !important
}

.tamilbrahmicodechart {
  font-family: "Tamil Brahmi" !important
}

.tamilextended {
  font-family: "Agastya Extended Tamil" !important;
  line-height: 1.6em;
}
.tamilextendedss {
  font-family: "Agastya Sans" !important;
  line-height: 1.6em;
  font-feature-settings: "ss01";
}
.tamilextendedserif {
  font-family: "Agastya Serif" !important;
  line-height: 1.6em;
}
.lopamudrasans {
  font-family: "Lopamudra Sans" !important;
  line-height: 1.6em;
}
.lopamudraserif {
  font-family: "Lopamudra Serif" !important;
  line-height: 1.6em;
}
.laoproposal {
  font-family: "Lao Codechart" !important;
  line-height: 1.6em;
}
.bengaliproposal {
  font-family: "Bengali Codechart" !important;
  line-height: 1.6em;
}
.tuluproposal {
  font-family: "Tulu Codechart" !important;
  line-height: 1.6em;
  font-size: 500%;
}
.title-letter {
  font-size: 240%;
}
</style>
