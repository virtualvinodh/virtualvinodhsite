<template>
  <div>
    <q-card bordered class="project-card">
      <q-card-section>
        <span v-if="icon !== ''">
        <a :href="web" target="_blank">
        <q-img
          :src="require('../assets/' + icon)"
          class="project-icon q-mr-md"
          :width="width"
        /> </a>
        </span>
        <a :href="web" target="_blank"><div class="text-h6">{{title}}</div></a>
        <div class="text-subtitle2">{{subtitle}}</div>
      </q-card-section>

      <q-separator inset />

      <q-card-section>
        {{desc}}
      </q-card-section>

      <q-separator inset />

      <q-separator />

      <q-card-actions>
        <i>{{lang}} </i><q-separator vertical class="q-ml-sm q-mr-sm"/>
        <a :href="web" target="_blank"><q-icon name="web" size="32px" class="q-mr-md remove-underline"/></a>
        <a :href="github"  target="_blank" v-if="github!==''"><q-img src="../assets/GitHub-Mark-64px.png" width="32px"/></a>
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
export default {
  // name: 'ComponentName',
  props: ['icon', 'title', 'subtitle', 'desc', 'github', 'web', 'lang', 'width'],
  data () {
    return {}
  }
}
</script>

<style scoped>
.project-card {
  width: 300px;
}
.project-icon {
  float:left;
}
a:link {
  text-decoration: none;
  color:black;
}

a:visited {
  text-decoration: none;
  color:black;
}
</style>
