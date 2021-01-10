<template>
  <q-page-sticky position="top-right">
  <div class="bg-grey-2 q-pa-sm">
    <q-slide-transition>
    <div v-show="minimize">
    <q-select
        input-debounce="0"
        label="Display Script"
        style="width: 115px"
        @input="updateScript"
        v-model="outputScript"
        :options="scriptsOutput"
      />
      </div>
    </q-slide-transition>
    <!--<q-btn flat :icon="minimize ? 'call_made' : 'call_received' " @click="minimize = !minimize" color="dark" size="10px"/>-->
  </div>
  </q-page-sticky>
</template>

<script>
export default {
  // name: 'ComponentName',
  data () {
    return {
      outputScript: 'IAST',
      minimize: true,
      scriptsOutput: ['ISO', 'IAST', 'IPA', 'RomanReadable', 'RussianCyrillic', 'Ariyaka', 'Assamese', 'Balinese', 'Bengali', 'Brahmi', 'Bhaikshuki', 'Burmese', 'Chakma', 'Devanagari', 'Dogra', 'GunjalaGondi', 'MasaramGondi', 'Grantha', 'GranthaPandya', 'Gujarati', 'Gurmukhi', 'Javanese', 'Kaithi', 'Kannada', 'Kharoshthi', 'KhomThai', 'Khmer', 'Khudawadi', 'LaoPali', 'Malayalam', 'Mongolian', 'Modi', 'Newa', 'Oriya', 'PhagsPa', 'Ranjana', 'Santali', 'Saurashtra', 'Siddham', 'Sharada', 'Sinhala', 'Soyombo', 'TaiTham', 'Takri', 'Tamil', 'TamilExtended', 'Telugu', 'Thai', 'Tibetan', 'Tirhuta', 'Urdu', 'ZanabazarSquare']
    }
  },
  mounted: function () {
    if (this.$q.localStorage.has('scriptVirtualVinodh')) {
      this.outputScript = this.$q.localStorage.getItem('scriptVirtualVinodh')
    }
    this.update()
  },
  methods: {
    updateScript: function () {
      this.postOptions = []
      this.update()
    },
    filterFn: function (val, update) {
      if (val === '') {
        update(() => {
          this.options = this.scriptsOutput
        })
      }
    },
    update: function () {
      this.$q.localStorage.set('scriptVirtualVinodh', this.outputScript)
      this.$emit('input', this.outputScript)
    }
  }
}
</script>

<style scoped>

</style>
