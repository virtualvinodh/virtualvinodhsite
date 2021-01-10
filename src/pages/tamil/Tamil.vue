<template>
  <q-page padding>
    <q-breadcrumbs class="q-mb-md">
      <q-breadcrumbs-el label="Home" icon="home" to="/" />
      <q-breadcrumbs-el label="Writings" icon="create" to="/writings" />
      <q-breadcrumbs-el label="தமிழ்" />
    </q-breadcrumbs>
      <div class="q-ml-lg q-mr-xl">

    <p class="text-h5">தமிழ்</p>
    <p class="text-body2">
         தமிழில் எழுதப்பட்ட கட்டுரைகளின் தொகுப்பு
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
          title: 'தமிழ் எழுத்துக்களின் பரிணாம வளர்ச்சி',
          url: '/writings/tamil/tamil-script-evolution',
          tags: ['எழுத்துமுறை']
        },
        {
          title: 'தமிழகத்தில் வடவெழுத்துக்கள்',
          url: '/writings/tamil/tamil-sanskrit-letters',
          tags: ['எழுத்துமுறை']
        },
        {
          title: 'தமிழ் நாட்டு புத்தர் சிலைகள்',
          url: '/writings/tamil/tamil-nadu-buddha',
          tags: ['புத்த மதம்']
        },
        {
          title: 'ஓம் நமோ புத்தாய',
          url: '/writings/tamil/namo-buddha',
          tags: ['புத்த மதம்']
        },
        {
          title: 'சிவனின் புத்த வியாகரணம்',
          url: '/writings/tamil/shiva-buddha-tamil',
          tags: ['புத்த மதம்']
        },
        {
          title: 'திரைலோக்கியவிஜயரும் சிவனும்',
          url: '/writings/tamil/trailokyavijaya-shiva',
          tags: ['புத்த மதம்']
        },
        {
          title: 'மஹா மங்கள சூத்திரம்',
          url: '/writings/tamil/maha-mangala',
          tags: ['புத்த மதம்']
        },
        {
          title: 'யார் பிராமணர் ? வாசெட்ட சூத்திரம்',
          url: '/writings/tamil/brahmin-who',
          tags: ['புத்த மதம்']
        },
        {
          title: 'நம்பிக்கை… சிரத்தை',
          url: '/writings/tamil/buddha-shraddha',
          tags: ['புத்த மதம்']
        },
        {
          title: 'பௌத்த கலப்பு சமஸ்கிருதம்',
          url: '/writings/tamil/buddhist-sanskrit',
          tags: ['புத்த மதம்', 'மொழி']
        },
        {
          title: 'சிரமணர்களின் மூல மொழி',
          url: '/writings/tamil/shramana-original-tamil',
          tags: ['புத்த மதம்', 'மொழி']
        },
        {
          title: 'திருக்குறள் – பௌத்த உரை',
          url: '/writings/tamil/tirukkural-buddhist',
          tags: ['புத்த மதம்', 'மொழி']
        },
        {
          title: 'குண்டலகேசி',
          url: '/writings/tamil/kundalakesi',
          tags: ['புத்த மதம்', 'மொழி']
        },
        {
          title: 'கற்போம் ஸம்ʼஸ்க்ருʼதம்',
          url: '/writings/tamil/learn-sanskrit',
          tags: ['மொழி']
        },
        {
          title: 'ஏழ்கடல் சூழ் இராமர் புகழ்',
          url: '/writings/tamil/rama-seven-seas',
          tags: ['ஹிந்து மதம்']
        }
      ]
    }
  }
}
</script>
