<template>
  <span :class="target.toLowerCase()" v-html="convertedText">
  </span>
</template>

<script>
export default {
  // name: 'ComponentName',
  props: ['source', 'target'],
  mounted: function () {
    this.text = this.$slots.default[0].text
    this.convertText()
  },
  data () {
    return {
      text: '',
      convertedText: this.text
    }
  },
  watch: {
    target: function () {
      this.convertText()
    }
  },
  methods: {
    convertText: function () {
      if (this.source !== this.target) {
        var dhis = this
        this.$axios.post('https://aksharamukha.appspot.com/api/public', 'source=' + this.source + '&target=' + this.target + '&text=' + this.text + '&postoptions=TibetanSyllabize')
          .then((response) => {
            dhis.convertedText = response.data
            dhis.convertedText = dhis.convertedText.replace(/#/g, '<br/>')
          })
          .catch(() => {
          })
      } else {
        this.convertedText = this.text.replace(/#/g, '<br/>')
      }
    }
  }
}
</script>

<style scoped>

</style>
