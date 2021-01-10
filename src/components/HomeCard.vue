<template>
  <div>
     <q-card flat class="project-card">
      <q-card-section>
        <div class="text-h6">{{name}}</div>
      </q-card-section>
      <q-separator inset />

      <q-card-section class="center">
        <a :href="link" >
          <q-icon :name="icon" size="50px" v-if="typeof icon !== 'undefined'" />
          <img :src="require('../assets/' + img)"  v-if="typeof img !== 'undefined'" :height="size"/>
        </a>
      </q-card-section>

      <q-separator inset />

      <q-card-section v-html="desc">
      </q-card-section>
      <q-badge class="q-mr-sm" v-for="tag in tagAll" :key="tag" color="grey-6">{{tag}}</q-badge>
    </q-card>
  </div>
</template>

<script>
export default {
  // name: 'ComponentName',
  props: ['name', 'icon', 'link', 'desc', 'tags', 'img', 'size'],
  computed: {
    tagAll: function () {
      return this.tags.split(',')
    }
  },
  data () {
    return {}
  }
}
</script>

<style scoped>
.project-card {
  width: 150px;
}
a:link {
  text-decoration: none;
  color:black;
}
a:visited {
  text-decoration: none;
  color:black;
}
.center {
 text-align: center;
}
</style>
