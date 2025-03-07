<template>
  <q-page padding>
    <q-breadcrumbs class="q-mb-md">
      <q-breadcrumbs-el label="Home" icon="home" to="/" />
      <q-breadcrumbs-el label="Projects" icon="create" to="/projects" />
      <q-breadcrumbs-el label="Vajranandi: A Faux Historical Tamil Font" />

    </q-breadcrumbs>
    <div class="q-ml-lg q-mr-xl">
    <p class="text-h5">Vajranandi: A Faux Nagari Tamil Font</p>
   <p class="text-h5 vajranandi">வஜ்ரநந்தி தமிழ் எழுத்துரு</p>

    <p class="text-body2">
        I am a big fan of faux script fonts that are specifically designed to evoke the look and feel of another script. There are such fonts for scripts like Arabic, Chinese or even Javanese.
    </p>
    <p>
    <q-img src="../../assets/faux-chinese-demo.png" width="300px" class="q-ma-sm" /> (<a href="https://fonts.do/faux-hanami-free_font-download">Faux Hanami</a>)<br/>
    <q-img src="../../assets/faux-arabic-demo.png" width="300px" class="q-ma-sm" /> (<a href="https://www.dafont.com/aceh-darusalam.font">Aceh Darusalam</a>)
    </p>
    <p>Particularly, I have been a big fan of <q-img src="../../assets/samarkan-demo.png" width="100px" ></q-img>, a Latin font that emulates Devanagari. But I have not (yet) come across any similar faux fonts for Tamil. So, I wanted to created a Tamil font that will evoke the feel of Devanagari.<!--In fact, my previous logo of my site was based on Samarkan (flanked by the syllable /vi/ in Balinese & Javanese syllable).</p>
    <p><q-img src="../../assets/virtualvinodh-logo-old.jpg" width="300px" class="q-ma-md" /> --></p>
    <p class="text-h5">Design Motivation</p>
    <p class="text-body2">
    Initially, I wanted to redesign the glyphs so that they look similar to Devanagari. As I was trying to tweak them, it occured to me it is easier to evolve them into having a shared serif a.k.a the horizontal line of Devanagari rather that doing it in a ham-fisted way. We can readily draw from the fact the top horizontal strokes in the Indic scripts share the same origin.
    </p>
    <q-img src="../../assets/serif-common.png" width="300px" class="q-ma-sm"/>
    <br><i>(From Bharatiya Prachina Lipimala by Ojha. I have highlighted the development of the serif in red)</i><br/><br/>
    <p>In the above image, we can clearly see how an inconsequential serif eventually became part of the letter /ka/ in Devanagari, Kannada, Grantha and Tamil. In scripts like Devanagari कक and Bengali কক, this serif eventually became a full fledged horizontal line that connects with adjacent letters, forming the distinctive horizontal line above. In scripts like Siddham <span class="siddham">𑖎𑖎</span> and Sharada <span class="sharada">𑆑𑆑</span>, they are not joined and remain distinct. In scripts like Tamil கக, Telugu కక and Kannada ಕಕ the serif became an integral part of the glyph. Scripts like Gujarati કક and Kaithi <span class="kaithi">𑂍𑂍</span> dropped the serif altogether.</p>
    <p class="text-body2">
    This raises the following interesting questions.
    <ul>
    <li>How would the Tamil script appear had it evolved a shared serif like Devanagari/Bengali?</li>
    <li>How would the letters morph to connect with each other?</li>
    <li>How could this be done while retaining a natural ductus (writing motion of the characters)?</li>
    </ul>
    </p>
    <p class="text-h5">Design Process</p>
    <p>Since Tamil already has a serif that is long and horizontal (albeit self-contained within each letter), it is straight-forward to extend them in both directions as in Devanagari. However, this will now result in strokes that are superfluous (and inhibit the ductus), as they appeared as auxillary strokes alongside the serif. Such strokes were removed, giving us: க ங ச த ந ர க்ஷ :: <span class="vajranandi">க ங ச த ந ர ற க்ஷ</span>. e.g. நந்தி :: <span class="vajranandi">நந்தி</span>. But, then, there are characters that start with a loop (and in many cases they do not have a serif of any sort). How do we deal with them? In this case, we draw our inspiration from Bengali. It is common there for the serif to curve and attach to the character in order to the maintain the connectivity e.g. কশ কে. Notice, how the serif of /ka/ curves gradually to connect with the letter /śa/ and the vowel sign /e/. Similarly, the characters with loops were modified to directly flow to/from the extended serif, giving us: ஞ ண வ ல ள ன ஷ ஸ ஹ ஜ எ ஏ ஐ ஒ ஓ ஔ கெ கே கை to <span class="vajranandi">ஞ ண வ ல ள ன ஷ ஸ ஹ ஜ எ ஏ ஐ ஒ ஓ ஔ கெ கே கை</span>. e.g. சணந்தி :: <span class="vajranandi">சணந்தி</span>. For other letters, the serif was appropriately drafted onto the letters with slight modifications to the original shapes to maintain the overall aesthetics, giving us: ட ப ம ய ஶ ழ உ ஊ அ ஆ இ ஈ கா to <span class="vajranandi">ட ப ம ய ஶ ழ உ ஊ அ ஆ இ ஈ கா</span>.
    </p>
<p class="text-h5">Sample Text</p>
<p class="text-body2 tamil">
திருமங்கை நின்றகலாள் தெவ்வுநோய் நீங்கும்<br/>
தருமங்கள் நீங்கலாச் சார்வார் - இருநிலத்து<br/>
மன்னருள்ளார் தாழுந்தாள் வச்சணந்தி மாமுனிவன்<br/>
இன்னருளால் நோக்கு மிடம்.</p>
<p class="text-body2 vajranandi" style="font-size:135%;line-height:1.5em">
திருமங்கை நின்றகலாள் தெவ்வுநோய் நீங்கும்<br/>
தருமங்கள் நீங்கலாச் சார்வார் - இருநிலத்து<br/>
மன்னருள்ளார் தாழுந்தாள் வச்சணந்தி மாமுனிவன்<br/>
இன்னருளால் நோக்கு மிடம்.</p>
<hr/>
<p class="text-body2 vajranandi" style="font-size:135%;line-height:1.5em">
பண்டைய தமிழகத்தில் களப்பிரர் ஆட்சியில் பூச்சியபாதர் என்பவரின் மாணவரான வச்சிரநந்தி என்பவர் திராவிட சங்கம் எனும் ஜைனர்களின் சங்கத்தை மதுரையில் நிறுவினார். இதனை, தர்சனசாரம் என்னும் நூலில் தேவசேனர் குறிப்பிடுகிறார். இச்சங்கத்தின் நோக்கம், ஜைன நெறியைப் பரப்புவதும், ஜைன நெறிக் கொள்கைகளை விளக்கக் கூடிய நூல்களைத் தோற்றுவிப்பதுமாக இருந்தது. இதனை, நான்காம் தமிழ்ச் சங்கம் என்று கூறுவர். ஆனால், இந்தச் சங்கம் பாண்டியர் நிறுவித் தமிழை ஆராய்ந்த தமிழ்ச் சங்கம் போன்றது அல்ல என்று மயிலை திரு.சீனி. வேங்கடசாமி அவர்கள் தான் இயற்றிய சமணமும் தமிழும் எனும் நூலில் கூறுகிறார். ஜைனர்கள் இயற்றிய தமிழ் இலக்கியங்கள். ஜைன நெறியை பரப்பும் நோக்குடன் பண்டைய தமிழகம் வந்த ஜைன நெறியினர், காப்பியங்கள் மற்றும் புராணங்கள் இயற்றாமல் காலப்போக்கில் அழிந்த நெறிகளைப் போல இல்லாமல், பௌத்த மற்றும் வைதீக நெறிகளுடன் போட்டியிட்டுக் கொண்டு காப்பியங்கள் மற்றும் புராணங்கள் மூலம் தங்கள் நெறியைப் பரப்பினர்.</p>
    <p> The original plan was to drop the final vertical line in ன & ண to give them a more cursive flow. But it created lots of ambiguous sequences and the result was very loopy. For instance, கண்ணன் கனவா:: <span class="vajranandi_ss_2_3">கண்ணன் கனவா</span> (SS02). & களவு:: <span class="vajranandi_ss_2_3">களவு</span> (SS03) So, the horizonal line was retained for the sake of readability.  On a similar note, the vowel sign /ā/ was to have been much more simplified as well but was decided otherwise. காதல் கனா :: <span class="vajranandi_ss_5">காதல் கனா</span> (SS04). There were also some alternate designs for /e/ and /ai/ (inspired by Bengali কে) but they did not look that great. கெ மெ மை கை :: <span class="vajranandi_ss_4">கெ மெ மை கை</span> (SS05). If you'd like to use these forms, these can be activated using stylistic sets as shown in the paranthesis (See below for instructions). </p>
    <p class="text-h5"> Supporting Superscript/Subscript Numerals </p>
    <p> Given that the purpose of the font is to evoke a Nagari-like feel, it is mostly likely be used to display Sanskrit text. It would make sense if it could support superscript/supscript numerals commonly used to write Sanskrit in Tamil. For superscript numerals, they are placed on the serif directly above the character similar to a vowel sign. <span class="vajranandi">க² க³ க⁴</span>. If there is a combining vowel sign, it is placed above the vowel sign. <span class="vajranandi">கி² கி³ தீ⁴</span> Any Vedic marks, if used, are placed above the superscript numerals. <span class="vajranandi" style="line-height:3em">ப⁴᳚ பி⁴᳚</span>. However, the subscript numerals naturally find their found below the shared serif. <span class="vajranandi">ப₂ ப₃ ப₄ பி₃ பீ₃ ப₄᳚ பி₄᳚</span>. Also, usually the subscript/superscript numerals are split from the base consonant with a spacing vowel sign, as in கா³ கோ₃. Vajranandi, rightfully places them next to the consonant. <span class="vajranandi">கா³ கோ₃</span>.</p>
<p class="text-h5">Sample Text</p>
<p class="text-body2 vajranandi" style="font-size:145%;line-height:1.5em">
யே த⁴ர்மா ஹேது-ப்ரப⁴வா ஹேதும்ʼ தேஷாம்ʼ ததா²க³தோ ஹ்யவத³த்<br/>
தேஷாம்ʼ ச யோ நிரோத⁴ ஏவம்ʼவாதீ³ மஹாஶ்ரமண꞉ </p>
<p class="text-body2 vajranandi" style="font-size:145%;line-height:2.3em">
அ॒ஶ்வ॒பூ॒ர்வாம்ʼ ர॑த²ம॒த்⁴யாம்ʼ ஹ॒ஸ்தினா᳚த³ப்ர॒போ³தி⁴॑னீம் । <br/>
ஶ்ரியம்॑ʼ தே³॒வீமுப॑ஹ்வயே॒ ஶ்ரீர்மா᳚தே³॒வீர்ஜு॑ஷதாம் ॥3॥ </p>
<hr/>
<p class="text-body2 vajranandi" style="font-size:145%;line-height:1.5em">
யே த₄ர்மா ஹேது-ப்ரப₄வா ஹேதும்ʼ தேஷாம்ʼ ததா₂க₃தோ ஹ்யவத₃த்<br/>
தேஷாம்ʼ ச யோ நிரோத₄ ஏவம்ʼவாதீ₃ மஹாஶ்ரமண꞉ </p>
<p class="text-body2 vajranandi" style="font-size:145%;line-height:2.3em">
அ॒ஶ்வ॒பூ॒ர்வாம்ʼ ர॑த₂ம॒த்₄யாம்ʼ  ஹ॒ஸ்தினா᳚த₃ப்ர॒போ₃தி₄॑னீம் । <br/>
ஶ்ரியம்॑ʼ தே₃॒வீமுப॑ஹ்வயே॒ ஶ்ரீர்மா᳚தே₃॒வீர்ஜு॑ஷதாம் ॥3॥ </p>
<p class="text-h5">Download</p>
<p class="text-body2">You can download the font <i>Vajranandi Tamil</i> from <a href="https://github.com/virtualvinodh/vajranandi-tamil/blob/master/Vajranandi-Tamil.ttf?raw=true">here</a>. The font is based on <i>Noto Sans Tamil</i>, and, therefore, is also under SIL OFL license.<br/><br/> As for the name, <i>Vajranandi </i> <span class="vajranandi">வஜ்ரநந்தி</span> is the preceptor of <i>Guṇavīra Paṇḍita(r) </i> <span class="vajranandi">குணவீர பண்டிதர்</span>, who composed the Tamil grammar <i>Nēminātam </i> <span class="vajranandi">நேமிநாதம்</span> and another work called <i>Vaccaṇanti Pāmālai </i> <span class="vajranandi">வச்சணந்தி பாமாலை</span> that directly invokes his preceptor's name (albeit in a Prakrit form <i>Vajjaṇandi</i>). Incidently, <i>Vajranandi</i> is also the name of the digambara Jain monk who established the Dravida Sangha in Madurai, Tamil Nadu around 400s CE.</p>
<p class="text-h5">Usage with Microsoft Word</p>
Due to the limitations of the rendering engine used by Microsoft, MS Word has some issues with rendering sequences with superscript vowels. It is therefore suggested to use subscript numerals if using the font with font. Alternatively, you can use the Stylistic Set 1 (SS01) to move them slightly below the shared serif.
<p><q-img src="../../assets/vajranandi-ss01.png" width="800px" class="q-ma-md"/></p>
<p class="text-body2">Also, note how the superscript/subscript numeral are split from the base consonant with spacing vowel signs.</p>
<p class="text-h5">Tamil Syllabary</p>
<p class="text-body2 vajranandi char" style="font-size:125%;line-height:1.5em">
அ ஆ இ ஈ உ ஊ எ ஏ ஐ ஒ ஓ ஔ ஃ<br/>
க ங ச ஞ ட ண த ந ம ப ய ல வ ழ ள ற ன ஜ ஸ ஷ ஹ க்ஷ ஶ <br/>
க் க கா கி கீ கு கூ கெ கே கை கொ கோ கௌ<br/>
ங் ங ஙா ஙி ஙீ ஙு ஙூ ஙெ ஙே ஙை ஙொ ஙோ ஙௌ<br/>
ச் ச சா சி சீ சு சூ செ சே சை சொ சோ சௌ<br/>
ஞ் ஞ ஞா ஞி ஞீ ஞு ஞூ ஞெ ஞே ஞை ஞொ ஞோ ஞௌ<br/>
ட் ட டா டி டீ டு டூ டெ டே டை டொ டோ டௌ<br/>
ண் ண ணா ணி ணீ ணு ணூ ணெ ணே ணை ணொ ணோ ணௌ<br/>
த் த தா தி தீ து தூ தெ தே தை தொ தோ தௌ<br/>
ந் ந நா நி நீ நு நூ நெ நே நை நொ நோ நௌ<br/>
ப் ப பா பி பீ பு பூ பெ பே பை பொ போ பௌ<br/>
ம் ம மா மி மீ மு மூ மெ மே மை மொ மோ மௌ<br/>
ய் ய யா யி யீ யு யூ யெ யே யை யொ யோ யௌ<br/>
ர் ர ரா ரி ரீ ரு ரூ ரெ ரே ரை ரொ ரோ ரௌ<br/>
ல் ல லா லி லீ லு லூ லெ லே லை லொ லோ லௌ<br/>
வ் வ வா வி வீ வு வூ வெ வே வை வொ வோ வௌ<br/>
ழ் ழ ழா ழி ழீ ழு ழூ ழெ ழே ழை ழொ ழோ ழௌ<br/>
ள் ள ளா ளி ளீ ளு ளூ ளெ ளே ளை ளொ ளோ ளௌ<br/>
ற் ற றா றி றீ று றூ றெ றே றை றொ றோ றௌ<br/>
ன் ன னா னி னீ னு னூ னெ னே னை னொ னோ னௌ<br/>
ஜ் ஜ ஜா ஜி ஜீ ஜு ஜூ ஜெ ஜே ஜை ஜொ ஜோ ஜௌ<br/>
ஷ் ஷ ஷா ஷி ஷீ ஷு ஷூ ஷெ ஷே ஷை ஷொ ஷோ ஷௌ<br/>
ஸ் ஸ ஸா ஸி ஸீ ஸு ஸூ ஸெ ஸே ஸை ஸொ ஸோ ஸௌ<br/>
ஹ் ஹ ஹா ஹி ஹீ ஹு ஹூ ஹெ ஹே ஹை ஹொ ஹோ ஹௌ<br/>
க்ஷ் க்ஷ க்ஷா க்ஷி க்ஷீ க்ஷு க்ஷூ க்ஷெ க்ஷே க்ஷை க்ஷொ க்ஷோ க்ஷௌ <br/>
ஶ் ஶ ஶா ஶி ஶீ ஶு ஶூ ஶெ ஶே ஶை ஶொ ஶோ ஶௌ<br/>
ஶ்ரீ<br/>
</p>
</div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  components: {
  },
  data () {
    return {
      vowelsT: 'அ ஆ இ ஈ உ ஊ எ ஒ'.split(' '),
      vowelsB: '𑀅 𑀆 𑀇 𑀈 𑀉 𑀊 𑀏 𑀑'.split(' '),
      consonantsT: 'க ங ச ஞ ட ண த ந ப ம ய ர ல வ ழ ள ற ன ஜ ஶ ஷ ஸ ஹ'.split(' '),
      consonantsB: '𑀓 𑀗 𑀘 𑀜 𑀝 𑀡 𑀢 𑀦 𑀧 𑀫 𑀬 𑀭 𑀮 𑀯 𑀵 𑀴 𑀶 𑀷 𑀚 𑀰 𑀱 𑀲 𑀳'.split(' '),
      taT: 'த தா தி தீ து தூ தெ தை தொ தௌ'.split(' '),
      yaT: 'ய் ய யா யி யீ யு யூ யெ யை யொ யௌ'.split(' '),
      taB: '𑀢 𑀢𑀸 𑀢𑀺 𑀢𑀻 𑀢𑀼 𑀢𑀽 𑀢𑁂 𑀢𑁃 𑀢𑁄 𑀢𑁅'.split(' '),
      yaB: '𑀬𑁆 𑀬 𑀬𑀸 𑀬𑀺 𑀬𑀻 𑀬𑀼 𑀬𑀽 𑀬𑁂 𑀬𑁃 𑀬𑁄 𑀬𑁅'.split(' ')
    }
  },
  methods: {
  }
}
</script>

<style scoped>
@font-face {
  font-family: 'Vajranandi';
  src: url('https://cdn.jsdelivr.net/gh/virtualvinodh/vajranandi-tamil/Vajranandi-Tamil.ttf')
}
.char {
    font-size:130%;
    line-height: 1.25em;
}
.vajranandi {
    font-family: 'Vajranandi';
}
.vajranandi_ss_2_3 {
    font-family: 'Vajranandi';
    font-feature-settings: "ss02", "ss03";
}
.vajranandi_ss_4 {
    font-family: 'Vajranandi';
    font-feature-settings: "ss04";
}
.vajranandi_ss_5 {
    font-family: 'Vajranandi';
    font-feature-settings: "ss05";
}
.blockquote {
  background: #f9f9f9;
  border-left: 10px solid #ccc;
  margin: 1.5em 10px;
  padding: 0.5em 10px;
  quotes: "\201C""\201D""\2018""\2019";
}
.blockquote:before {
  color: #ccc;
  content: open-quote;
  font-size: 4em;
  line-height: 0.1em;
  margin-right: 0.25em;
  vertical-align: -0.4em;
}
.blockquote p {
  display: inline;
}
.iast {
  font-weight:bold;
}
table {
  border-collapse: collapse;
}
th, td {
  text-align: center;
  padding:10px;
}
.sample {
 line-height: 2em;
}
</style>
