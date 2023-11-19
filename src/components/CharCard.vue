<template>
  <div>
<q-card bordered class="project-card">
      <q-card-section>
        <div class="center">{{name}}</div>
      </q-card-section>

      <q-separator inset />
        <span :class="script">
            <div class="text-h4 center">{{char}}</div>
        </span>

      <q-separator inset />

      <q-separator />

      <q-card-actions>
        <i>{{docid}} </i><q-separator vertical class="q-ml-sm"/>
        <a :href="doclink" target="_blank"><q-icon name="article" size="20px" class="q-ml-md remove-underline"/></a>
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
export default {
  // name: 'ComponentName',
  props: ['name', 'char', 'docid', 'doclink', 'script'],
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
.sharada {
  font-size:10%
}
</style>
