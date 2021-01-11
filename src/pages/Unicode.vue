<template>
  <q-page padding>
        <p class="text-h4"> Unicode </p>
        <p> I’ve been directly and indirectly involved in encoding several Indic scripts/characters in the Universal Character Set (UCS). I am particularly interested in the encoding of minority scripts/characters and also supporting minority & historical orthographies in Unicode.</p>
      <p class="text-h5"><q-avatar size="36px" font-size="32px" icon="add" class="q-mr-sm"/>Published/Accepted Characters ({{charList.length}})</p>
      <div class="q-pa-md row items-start q-gutter-sm">
          <char-card v-bind="char" v-for="char in charList" :key="char.char"></char-card>
      </div>
      <br/><br/>
      <p class="text-h5"><q-avatar size="36px" font-size="32px" icon="add" class="q-mr-sm"/>Documents Submitted ({{docList.length}})</p>
      <p><i>The document numbers are of the form L2/YY-NNN. L2 denotes the <a href="http://www.unicode.org/L2/L-curdoc.htm">UTC document registry</a>, YY denotes the year of submisison and NNN the submission number for that year</i></p>
      <ol class="text-body1">
          <span v-for="doc in docList" :key="doc.id" class="text-body1">
          <li> {{doc.title}} <q-badge class="q-mr-sm" color="grey-6">{{doc.id}}</q-badge><q-badge color="grey-6">{{doc.script}}</q-badge> <a :href="doc.link" target="_blank"><q-icon name="launch" size="20px" class="q-ml-sm"/></a></li>
          </span>
          </ol>
  </q-page>
</template>

<script>
import CharCard from '../components/CharCard.vue'
export default {
  // name: 'PageName',
  components: {
    CharCard
  },
  data () {
    return {
      docList: [
        {
          title: 'Representing an Underline Diacritic in Telugu',
          id: 'L2/20-120',
          script: 'Telugu',
          link: 'http://www.unicode.org/L2/L2020/20120-telugu-underline.pdf'
        },
        {
          title: 'Proposal to Encode Two Letters in Telugu',
          id: 'L2/20-119',
          script: 'Telugu',
          link: 'http://www.unicode.org/L2/L2020/20119-two-telugu-letters.pdf'
        },
        {
          title: 'Fixing a Superfluous Sequence in the Telugu Section of TUS',
          id: 'L2/20-086',
          script: 'Telugu',
          link: 'http://www.unicode.org/L2/L2020/20086-telugu-std-fix.pdf'
        },
        {
          title: 'Revised Proposal to Encode Telugu Sign Nukta',
          id: 'L2/20-085',
          script: 'Telugu',
          link: 'http://www.unicode.org/L2/L2020/20085-telugu-nukta.pdf'
        },
        {
          title: 'Revised Proposal to Encode Telugu Letter Nakaara Pollu',
          id: 'L2/20-084',
          script: 'Telugu',
          link: 'http://www.unicode.org/L2/L2020/20084r-telugu-nakaara-pollu.pdf'
        },
        {
          title: 'Proposal to Encode Telugu Reph',
          id: 'L2/20-083',
          script: 'Telugu',
          link: 'http://www.unicode.org/L2/L2020/20083-telugu-reph.pdf'
        },
        {
          title: 'Proposal to Annotate Brahmi Sign Anusvara',
          id: 'L2/20-069',
          script: 'Brahmi',
          link: 'http://www.unicode.org/L2/L2020/20069-annotate-anusvara.pdf'
        },
        {
          title: 'Proposal to Encode 6 Characters in the Brahmi Block',
          id: 'L2/19-402',
          script: 'Brahmi',
          link: 'https://www.unicode.org/L2/L2019/19402-brahmi-adds.pdf'
        },
        {
          title: 'Proposal to Encode Telugu Sign Nukta',
          id: 'L2/19-401',
          script: 'Telugu',
          link: 'https://www.unicode.org/L2/L2019/19401-telugu-sign-nukta.pdf'
        },
        {
          title: 'Preliminary proposal to encode Tigalari script',
          id: 'L2/17-378',
          script: 'Tulu',
          link: 'https://www.unicode.org/L2/L2017/17378-tigalari.pdf'
        },
        {
          title: 'Revised Proposal to Encode Lao Characters for Pali',
          id: 'L2/17-106R',
          script: 'Lao',
          link: 'http://www.unicode.org/L2/L2017/17106r-lao-for-pali.pdf'
        },
        {
          title: 'Proposal to Encode Lao Characters for Pali',
          id: 'L2/17-106',
          script: 'Lao',
          link: 'http://www.unicode.org/L2/L2017/17106-lao-for-pali.pdf'
        },
        {
          title: 'Comments on three control characters for Egyptian Hieroglyphs',
          id: 'L2/16-090',
          script: 'Lao',
          link: 'http://www.unicode.org/L2/L2016/16090-comment-ctl-char-egyptian.pdf'
        },
        {
          title: 'Conjunct Consonants with Independent Vowels in Kannada Script',
          id: 'L2/15-127',
          script: 'Kannada',
          link: 'http://www.unicode.org/L2/L2015/15127-kannada-conjunct.pdf'
        },
        {
          title: 'Proposal to encode Saurashtra Sign Candrabindu',
          id: 'L2/14-163',
          script: 'Saurashtra',
          link: 'http://www.unicode.org/L2/L2014/14163-saurashtra-candrabindu.pdf'
        },
        {
          title: 'Proposal to encode Kannada Sign Spacing Candrabindu',
          id: 'L2/14-153',
          script: 'Kannada',
          link: 'http://www.unicode.org/L2/L2014/14153-kannada-chandrabindu.pdf'
        },
        {
          title: 'Proposal to encode Gujarati Letter ZHA',
          id: 'L2/13-143 ',
          script: 'Gujarati',
          link: 'http://www.unicode.org/L2/L2013/13143-gujarati-zha.pdf'
        },
        {
          title: 'Proposal to encode Gujarati Sign Triple Nukta',
          id: 'L2/13-066',
          script: 'Gujarati',
          link: 'http://www.unicode.org/L2/L2013/13066-gujarati-triple-nukta.pdf'
        },
        {
          title: 'Comments on encoding “duplicate” Indic characters',
          id: 'L2/12-233',
          script: 'Malayalam & Brahmi',
          link: 'http://www.unicode.org/L2/L2012/12233-encoding-dup-indic.pdf'
        },
        {
          title: 'Comments on naming the “Siddham” encoding',
          id: 'L2/12-221',
          script: 'Siddham',
          link: 'http://www.unicode.org/L2/L2012/12221-siddham-naming.pdf'
        },
        {
          title: 'Proposal to encode 0C5A TELUGU LETTER RRRA',
          id: 'L2/12-016',
          script: 'Telugu',
          link: 'http://www.unicode.org/L2/L2012/12016-telugu-rrra-proposal.pdf'
        },
        {
          title: 'Proposal to encode 0C34 TELUGU LETTER LLLA',
          id: 'L2/12-015',
          script: 'Telugu',
          link: 'http://www.unicode.org/L2/L2012/12015-telugu-llla-proposal.pdf'
        },
        {
          title: 'On the Telugu nakaara-pollu',
          id: 'L2/11-049',
          script: 'Telugu',
          link: 'http://www.unicode.org/L2/L2011/11409-telugu-nakaara-pollu.pdf'
        },
        {
          title: 'Comments on L2/10-256R & L2/10-363',
          id: 'L2/10-425',
          script: 'Tamil',
          link: 'http://www.unicode.org/L2/L2010/10425-ext-tamil-cmt.pdf'
        },
        {
          title: 'Comments on Grantha OM',
          id: 'L2/10-263',
          script: 'Grantha',
          link: 'http://www.unicode.org/L2/L2010/10263-grantha-om.pdf'
        }
      ],
      charList: [
        {
          name: 'Telugu Letter LLLA',
          char: 'ఴ',
          script: 'telugu',
          docid: 'L2/12-015',
          doclink: 'http://www.unicode.org/L2/L2012/12015-telugu-llla-proposal.pdf'
        },
        {
          name: 'Telugu Letter RRRA',
          char: 'ౚ',
          script: 'telugu',
          docid: 'L2/12-016',
          doclink: 'http://www.unicode.org/L2/L2012/12016-telugu-rrra-proposal.pdf'
        },
        {
          name: 'Telugu Sign Nukta (to extend script)',
          char: '఼',
          script: 'telugu2',
          docid: 'L2/20-085',
          doclink: 'https://www.unicode.org/L2/L2020/20085-telugu-nukta.pdf'
        },
        {
          name: 'Telugu Letter Nakaara Pollu',
          char: 'ౝ',
          script: 'telugu2',
          docid: 'L2/20-084R',
          doclink: 'https://www.unicode.org/L2/L2020/20084r-telugu-nakaara-pollu.pdf'
        },
        {
          name: 'Gujarati Letter ZHA',
          char: 'ૹ',
          script: 'gujarati',
          docid: 'L2/13-143',
          doclink: 'http://www.unicode.org/L2/L2013/13143-gujarati-zha.pdf'
        },
        {
          name: 'Kannada Spacing Chandrabindu',
          char: 'ಀ',
          script: 'kannada',
          docid: 'L2/14-153',
          doclink: 'http://www.unicode.org/L2/L2014/14153-kannada-chandrabindu.pdf'
        },
        {
          name: 'Saurashtra Sign Chandrabindu',
          char: '◌ꣅ',
          script: 'saurashtra',
          docid: 'L2/14-163',
          doclink: 'http://www.unicode.org/L2/L2014/14163-saurashtra-candrabindu.pdf'
        },
        {
          name: 'Brahmi Old Tamil Short E',
          char: '𑁱',
          script: 'tamilbrahmicodechart',
          docid: 'L2/19-402',
          doclink: 'http://www.unicode.org/L2/L2019/19402-brahmi-adds.pdf'
        },
        {
          name: 'Brahmi Old Tamil Short O',
          char: '𑁲',
          script: 'tamilbrahmicodechart',
          docid: 'L2/19-402',
          doclink: 'http://www.unicode.org/L2/L2019/19402-brahmi-adds.pdf'
        },
        {
          name: 'Brahmi Vowel Sign OT Short E',
          char: '𑁳',
          script: 'tamilbrahmicodechart',
          docid: 'L2/19-402',
          doclink: 'http://www.unicode.org/L2/L2019/19402-brahmi-adds.pdf'
        },
        {
          name: 'Brahmi Vowel Sign OT Short O',
          char: '𑁴',
          script: 'tamilbrahmicodechart',
          docid: 'L2/19-402',
          doclink: 'http://www.unicode.org/L2/L2019/19402-brahmi-adds.pdf'
        },
        {
          name: 'Brahmi Old Tamil LLA',
          char: '𑁵',
          script: 'tamilbrahmicodechart',
          docid: 'L2/19-402',
          doclink: 'http://www.unicode.org/L2/L2019/19402-brahmi-adds.pdf'
        },
        {
          name: 'Brahmi Old Tamil Virama',
          char: '𑁰',
          script: 'tamilbrahmicodechart',
          docid: 'L2/19-402',
          doclink: 'http://www.unicode.org/L2/L2019/19402-brahmi-adds.pdf'
        },
        {
          name: 'Lao Letter Pali GHA',
          char: 'ຆ',
          script: 'lao',
          docid: 'L2/17-106R',
          doclink: 'http://www.unicode.org/L2/L2017/17106r-lao-for-pali.pdf'
        },
        {
          name: 'Lao Letter Pali CHA',
          char: 'ຉ',
          script: 'lao',
          docid: 'L2/17-106R',
          doclink: 'http://www.unicode.org/L2/L2017/17106r-lao-for-pali.pdf'
        },
        {
          name: 'Lao Letter Pali JHA',
          char: 'ຌ',
          script: 'lao',
          docid: 'L2/17-106R',
          doclink: 'http://www.unicode.org/L2/L2017/17106r-lao-for-pali.pdf'
        },
        {
          name: 'Lao Letter Pali NYA',
          char: 'ຎ',
          script: 'lao',
          docid: 'L2/17-106R',
          doclink: 'http://www.unicode.org/L2/L2017/17106r-lao-for-pali.pdf'
        },
        {
          name: 'Lao Letter Pali TTA',
          char: 'ຏ',
          script: 'lao',
          docid: 'L2/17-106R',
          doclink: 'http://www.unicode.org/L2/L2017/17106r-lao-for-pali.pdf'
        },
        {
          name: 'Lao Letter Pali TTHA',
          char: 'ຐ',
          script: 'lao',
          docid: 'L2/17-106R',
          doclink: 'http://www.unicode.org/L2/L2017/17106r-lao-for-pali.pdf'
        },
        {
          name: 'Lao Letter Pali DDA',
          char: 'ຑ',
          script: 'lao',
          docid: 'L2/17-106R',
          doclink: 'http://www.unicode.org/L2/L2017/17106r-lao-for-pali.pdf'
        },
        {
          name: 'Lao Letter Pali DDHA',
          char: 'ຒ',
          script: 'lao',
          docid: 'L2/17-106R',
          doclink: 'http://www.unicode.org/L2/L2017/17106r-lao-for-pali.pdf'
        },
        {
          name: 'Lao Letter Pali NNA',
          char: 'ຓ',
          script: 'lao',
          docid: 'L2/17-106R',
          doclink: 'http://www.unicode.org/L2/L2017/17106r-lao-for-pali.pdf'
        },
        {
          name: 'Lao Letter Pali DHA',
          char: 'ຘ',
          script: 'lao',
          docid: 'L2/17-106R',
          doclink: 'http://www.unicode.org/L2/L2017/17106r-lao-for-pali.pdf'
        },
        {
          name: 'Lao Letter Pali BHA',
          char: 'ຠ',
          script: 'lao',
          docid: 'L2/17-106R',
          doclink: 'http://www.unicode.org/L2/L2017/17106r-lao-for-pali.pdf'
        },
        {
          name: 'Lao Letter Sanskrit SHA',
          char: 'ຨ',
          script: 'lao',
          docid: 'L2/17-106R',
          doclink: 'http://www.unicode.org/L2/L2017/17106r-lao-for-pali.pdf'
        },
        {
          name: 'Lao Letter Sanskrit SSA',
          char: 'ຩ',
          script: 'lao',
          docid: 'L2/17-106R',
          doclink: 'http://www.unicode.org/L2/L2017/17106r-lao-for-pali.pdf'
        },
        {
          name: 'Lao Letter Pali LLA',
          char: 'ຬ',
          script: 'lao',
          docid: 'L2/17-106R',
          doclink: 'http://www.unicode.org/L2/L2017/17106r-lao-for-pali.pdf'
        },
        {
          name: 'Lao Sign Pali Virama',
          char: '◌ ຺',
          script: 'lao',
          docid: 'L2/17-106R',
          doclink: 'http://www.unicode.org/L2/L2017/17106r-lao-for-pali.pdf'
        }
      ]
    }
  }
}
</script>

<style scoped>
a:link {
  text-decoration: none;
  color:black;
}
a:visited {
  text-decoration: none;
  color:black;
}
</style>
