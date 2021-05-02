<template>
  <q-page padding>
    <q-breadcrumbs class="q-mb-md">
      <q-breadcrumbs-el label="Home" icon="home" to="/" />
      <q-breadcrumbs-el label="Projects" icon="create" to="/projects" />
      <q-breadcrumbs-el label="Azhvaar: Srivaishnava Telugu font" />

    </q-breadcrumbs>
    <div class="q-ml-lg q-mr-xl">
    <p class="text-h5">Arishtanemi: An Faux Hisotrical Tamil Font</p>
    <p class="text-body2">
        The Modern Tamil script is a culmination of 2000 years of evolution, with every serif, every retrace and every other accidental stroke constantly augmented to the characters by several generation of scribes. This clearly explains how a simple Brahmi character such as <span class="brahmi char">𑀓</span> ended up evolving as <span class="tamil char">க</span>. The development of the Tamil script as outlined by Ojha in his book <i><a href="https://archive.org/details/the-paleography-of-india-bharatiya-prachin-lipimala-1919-rai-bahadur-pandit-gaur/page/n1/mode/2up">The Paleography of India</a></i> can be seen here.
    </p>
    <q-img src="../../assets/projects/tamil-development.png" width="400px" class="q-ma-md"/>
    <p class="text-body2">
        I had been wanting to create a tamil typeface that essentially de-noises the modern Tamil script by removing all the historical additions to the Brahmi characters over the years. The idea was to and make them look as close as possible to the Brahmi characters and give them a faux-historical flair. However, I also wanted the resulting set to be readable to the modern audience. Accordingly, I draw from various medieval Tamil scripts to retain the readability of the character set, where necessary.
    </p>
    <p>
        Consider, the Tamil character <span class="tamil char">து</span>. This might look complicted. But the underlying skeleton of the character is very simple <span class="tamilbrahmi char">𑀢𑀼</span>. The loop below the baseline is just a result of inexact retracing that got standardized. And the top line is just a relic of serif that was added to most Brahmi characters by scribes. If one attempts to remove all that, you actually end up something like <span class="arishtanemi char">து</span>. On the same note, the initial loop in <span class="tamil char">ல</span> is basically an artefact of handwriting. Removing that would result in <span class="arishtanemi char">ல</span>, making it look similar to <span class="tamilbrahmi char">𑀮</span>.
        Of course, this simplification could not be performed 100%, else the result would be totally unreadable to the modern audience. So, there needed to be some balance between simplification and readability. For instance, the serif was partially retained over <span class="arishtanemi char">ந</span>. Without it, the character would have looked similar to <span class="tamil char">டு</span>.
    </p>
    <p>Some characters such as <span class="tamil char">ண</span> had to be reshaped based on medieval forms rather than Brahmi, as the current character has too many details and removing all of them would make it unrecognizable. In fact, if you attempt to write <span class="tamilbrahmi char">𑀡</span> with a single stroke by starting the character at the left arm and moving the stylus along the stem and retracing the bottom left and right legs and the stem again to reach the right arm, you'll end up something like this <span class="arishtanemi char">ண</span>. <span class="tamil char">ற</span> has been transfromed to <span class="arishtanemi char">ற</span> inspired by the Vatteluttu form <span class="vatteluttu char">ற</span>. Similarly, compare <span class="arishtanemi char">ழ</span> to the Vatteluttu form <span class="vatteluttu char">ழ</span>. The vowels signs were also inspired from the medieval forms as the Brahmi vowel signs are tightly bound to the base consonants. (As time progressed the vowel markers were separated and became independent glyphs). Again, for the sake of familiarity it made sense to imitate them rather than Tamil-Brahmi.</p>
    <p>A sample of various medieval Tamil scripts from different time periods is shown below. See: <i><a href="/downloads/preserving_tamil_scripts.pdf">Preserving Tamil Scripts: The Way towards their Digitization, Archival and Outreach</a></i>
    </p>
    <q-img src="../../assets/projects/sample_medieval_texts.png" width="400px" class="q-ma-sm"/>
    <p class="text-h5">Characters</p>
    <span class="mobile-only">
    <table>
        <tr>
            <th>Brahmi</th>
            <th>Tamil</th>
            <th>Arishtanemi</th>
        <tr>
        <tr v-for="(v, i) in vowelsB" :key="v">
            <td class="brahmi char">{{vowelsB[i-1]}}</td>
            <td class="tamil char">{{vowelsT[i-1]}}</td>
            <td class="arishtanemi char">{{vowelsT[i-1]}}</td>
        </tr>
    </table>
    <table>
        <tr>
            <th>Brahmi</th>
            <th>Tamil</th>
            <th>Arishtanemi</th>
        <tr>
        <tr v-for="(v, i) in consonantsT" :key="v">
            <td class="brahmi char">{{consonantsB[i-1]}}</td>
            <td class="tamil char">{{consonantsT[i-1]}}</td>
            <td class="arishtanemi char">{{consonantsT[i-1]}}</td>
        </tr>
    </table>
    <table>
        <tr>
            <th>Brahmi</th>
            <th>Tamil</th>
            <th>Arishtanemi</th>
        <tr>
        <tr v-for="(v, i) in taB" :key="v">
            <td class="brahmi char">{{taB[i-1]}}</td>
            <td class="tamil char">{{taT[i-1]}}</td>
            <td class="arishtanemi char">{{taT[i-1]}}</td>
        </tr>
    </table>
    <table style="display:block;">
        <tr>
            <th>Brahmi</th>
            <th>Tamil</th>
            <th>Arishtanemi</th>
        <tr>
        <tr v-for="(v, i) in yaB" :key="v">
            <td class="brahmi char">{{yaB[i-1]}}</td>
            <td class="tamil char">{{yaT[i-1]}}</td>
            <td class="arishtanemi char">{{yaT[i-1]}}</td>
        </tr>
    </table>
    </span>
    <span class="desktop-only">
    <table style="display:block;">
        <tr>
            <th>Brahmi</th>
            <td v-for="v in vowelsB" :key="v">{{v}}</td>
        </tr>
        <tr>
            <th>Arishtanemi</th>
            <td v-for="v in vowelsT" :key="v" class="arishtanemi char">{{v}}</td>
        </tr>
        <tr>
            <th>Modern Tamil</th>
            <td v-for="v in vowelsT" :key="v" class="tamil char">{{v}}</td>
        </tr>
    </table>
    <table style="display:block;">
        <tr>
            <th>Brahmi</th>
            <td v-for="v in consonantsB" :key="v" class="tamilbrahmi char">{{v}}</td>
        </tr>
        <tr>
            <th>Arishtanemi</th>
            <td v-for="v in consonantsT" :key="v" class="arishtanemi char">{{v}}</td>
        </tr>
        <tr>
            <th>Modern Tamil</th>
            <td v-for="v in consonantsT" :key="v" class="tamil char">{{v}}</td>
        </tr>
    </table>
     <table>
        <tr>
            <th>Brahmi</th>
            <td v-for="v in taB" :key="v" class="tamilbrahmi char">{{v}}</td>
        </tr>
        <tr>
            <th>Arishtanemi</th>
            <td v-for="v in taT" :key="v" class="arishtanemi char">{{v}}</td>
        </tr>
        <tr>
            <th>Modern Tamil</th>
            <td v-for="v in taT" :key="v" class="tamil char">{{v}}</td>
        </tr>
    </table>
    <table>
        <tr>
            <th>Brahmi</th>
            <td v-for="v in yaB" :key="v" class="tamilbrahmi char">{{v}}</td>
        </tr>
        <tr>
            <th>Arishtanemi</th>
            <td v-for="v in yaT" :key="v" class="arishtanemi char">{{v}}</td>
        </tr>
        <tr>
            <th>Modern Tamil</th>
            <td v-for="v in yaT" :key="v" class="tamil char">{{v}}</td>
        </tr>
    </table>
    </span>
<p class="text-h5">Download</p>
<p class="text-body2">You can download the font <i>Arishtanemi Tamil</i> from <a href="../../assets/Arishtanemi-Tamil.ttf">here</a>. The font is based on <i>Noto Sans Tamil</i>, and, therefore, is also under SIL OFL license.<br/><br/> As for the name, the previous font for <a href="/projects/adinatha">Tamil-Brahmi</a> was named after the first Jain Tirthankara <i>Adinatha</i>. I thought it would make sense to continue to the tradition and named it after the 22nd Trithankara <i>Neminatha</i>, who is also known as <i>Arishtanemi</i>. He is a popular Tirthankara among the Tamil Jains. The 12th century Tamil grammatical work <i>Neminatham</i> <span class="arishtanemi"> நேமிநாதம்</span> is named after him. There is a also famous <a href="https://www.google.com/search?sxsrf=ALeKk011X4txQRn-RR6KVNgfoj-ILOjyFA:1619976214896&q=Neminatha%20temple%20tamil%20nadu&sa=X&ved=2ahUKEwjZ5dTWwavwAhXygf0HHcDQDXEQvS4wAHoECAgQNg&biw=1920&bih=970&dpr=2&tbs=lf:1,lf_ui:1&tbm=lcl&rflfq=1&num=10&rldimm=11584911286110161733&lqi=ChtOZW1pbmF0aGEgdGVtcGxlIHRhbWlsIG5hZHVIoJSqtuyqgIAIWjsKEG5lbWluYXRoYSB0ZW1wbGUQABABGAAYARgCGAMiG25lbWluYXRoYSB0ZW1wbGUgdGFtaWwgbmFkdZIBC2phaW5fdGVtcGxlmgEkQ2hkRFNVaE5NRzluUzBWSlEwRm5TVU52WHpsZllqbEJSUkFCqgEYEAEqFCIQbmVtaW5hdGhhIHRlbXBsZSgA&phdesc=kdndXJkY2vc&rlst=f#rlfi=hd:;si:11584911286110161733,l,ChtOZW1pbmF0aGEgdGVtcGxlIHRhbWlsIG5hZHVIoJSqtuyqgIAIWjsKEG5lbWluYXRoYSB0ZW1wbGUQABABGAAYARgCGAMiG25lbWluYXRoYSB0ZW1wbGUgdGFtaWwgbmFkdZIBC2phaW5fdGVtcGxlmgEkQ2hkRFNVaE5NRzluUzBWSlEwRm5TVU52WHpsZllqbEJSUkFCqgEYEAEqFCIQbmVtaW5hdGhhIHRlbXBsZSgA,y,kdndXJkY2vc;mv:[[13.4480162,80.55182250000001],[7.889791400000001,75.8341256]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!1m4!1u16!2m2!16m1!1e1!1m4!1u16!2m2!16m1!1e2!2m1!1e2!2m1!1e16!2m1!1e3!3sIAE,lf:1,lf_ui:1">Jain Temple</a> dedicated to him in Tamil Nadu with a <a href="https://en.wikipedia.org/wiki/Tirumalai_(Tamil_Nadu)#/media/File:Tirumalai_Neminatha_Statue.jpg">~5m tall statue</a>.</p>
<p class="text-h5">Sample Text</p>
<p class="text-body2 tamil">
பூவின்மேல் வந்தருளும் புங்கவன்தன் பொற்பாதம் <br/>
நாவினால் நாளும் நவின்றேத்தி - மேவுமுடி<br/>
பெல்லாம் உணர எழுத்தின் இலக்கணத்தைச்<br/>
சொல்லால் உரைப்பன் தொகுத்து<br/><br/>
தாதார் மலர்பிண்டித் தத்துவனை வந்தித்துப்<br/>
போதார் நறுந்தெரியற் போர்வேற்கட் - பேதாய்<br/>
விரித்துரைத்த நூல்களினும் வேண்டுவன கொண்டு<br/>
தெரித்துரைப்பன் சொல்லின் திறம்
</p>
<p class="text-body2 arishtanemi">
பூவின்மேல் வந்தருளும் புங்கவன்தன் பொற்பாதம் <br/>
நாவினால் நாளும் நவின்றேத்தி - மேவுமுடி<br/>
பெல்லாம் உணர எழுத்தின் இலக்கணத்தைச்<br/>
சொல்லால் உரைப்பன் தொகுத்து<br/><br/>
தாதார் மலர்பிண்டித் தத்துவனை வந்தித்துப்<br/>
போதார் நறுந்தெரியற் போர்வேற்கட் - பேதாய்<br/>
விரித்துரைத்த நூல்களினும் வேண்டுவன கொண்டு<br/>
தெரித்துரைப்பன் சொல்லின் திறம்</p>
<p class="text-body2 arishtanemi" style="font-size:125%;line-height:1.5em">
பூவின்மேல் வந்தருளும் புங்கவன்தன் பொற்பாதம் <br/>
நாவினால் நாளும் நவின்றேத்தி - மேவுமுடி<br/>
பெல்லாம் உணர எழுத்தின் இலக்கணத்தைச்<br/>
சொல்லால் உரைப்பன் தொகுத்து<br/><br/>
தாதார் மலர்பிண்டித் தத்துவனை வந்தித்துப்<br/>
போதார் நறுந்தெரியற் போர்வேற்கட் - பேதாய்<br/>
விரித்துரைத்த நூல்களினும் வேண்டுவன கொண்டு<br/>
தெரித்துரைப்பன் சொல்லின் திறம்</p>
<hr/>
<p class="text-body2 arishtanemi">
பண்டைய தமிழகத்தில் களப்பிரர் ஆட்சியில் பூச்சியபாதர் என்பவரின் மாணவரான வச்சிரநந்தி என்பவர் திராவிட சங்கம் எனும் ஜைனர்களின் சங்கத்தை மதுரையில் நிறுவினார். இதனை, தர்சனசாரம் என்னும் நூலில் தேவசேனர் குறிப்பிடுகிறார். இச்சங்கத்தின் நோக்கம், ஜைன நெறியைப் பரப்புவதும், ஜைன நெறிக் கொள்கைகளை விளக்கக் கூடிய நூல்களைத் தோற்றுவிப்பதுமாக இருந்தது. இதனை, நான்காம் தமிழ்ச் சங்கம் என்று கூறுவர். ஆனால், இந்தச் சங்கம் பாண்டியர் நிறுவித் தமிழை ஆராய்ந்த தமிழ்ச் சங்கம் போன்றது அல்ல என்று மயிலை திரு.சீனி. வேங்கடசாமி அவர்கள் தான் இயற்றிய சமணமும் தமிழும் எனும் நூலில் கூறுகிறார். ஜைனர்கள் இயற்றிய தமிழ் இலக்கியங்கள். ஜைன நெறியை பரப்பும் நோக்குடன் பண்டைய தமிழகம் வந்த ஜைன நெறியினர், காப்பியங்கள் மற்றும் புராணங்கள் இயற்றாமல் காலப்போக்கில் அழிந்த நெறிகளைப் போல இல்லாமல், பௌத்த மற்றும் வைதீக நெறிகளுடன் போட்டியிட்டுக் கொண்டு காப்பியங்கள் மற்றும் புராணங்கள் மூலம் தங்கள் நெறியைப் பரப்பினர். <br/><br/>
இன்னா செய்யாமை, அருளுடைமை, கொல்லாமை, புலால் மறுத்தல் என்ற நான்கு கொள்கைகளையும் சேர்த்து அகிம்சை என்கின்றனர். ”அஹிம்சோ பரமொ தர்ம” என்பது மகாவீரரின் பொன்மொழியாகும். கொல்லாமையே மேலான அறம் என்பது இதன் பொருள். எந்த உயிருக்கும் எந்த வகையிலும் இம்சை செய்யாமையே அகிம்சை எனப்படும். ஜைன சமயத்தின் பன்னிரண்டு அங்க ஆகமங்களில் முதல் ஆகமம் ஆகிய ஆயாரங்க சுத்தத்தில் அகிம்சை எனப்படும் அறத்தினை மகாவீரர் போதித்துள்ளார். அதன் ஒரு பகுதியில் “ மனிதர்களே “, எந்த ஒரு உயிரையும் துன்புறுத்தவோ, வதைக்கவோ, கொல்லவோ கூடாது. பிறறை அவமதிப்பது கூட இம்சையாகும். ஆகவே அகிம்சை என்பது உயிர்க்கொலை புரியாமை மட்டும் அன்று; ம்ன்னுயிர்க்கும் இன்னா செய்யாமையும், பிறறை அவமதிக்காமையும் அகிம்சை ஆகும். மனிதர்களே, நீங்கள் எடுத்துவரும் பல்வேறு பிறவிகளில், உங்களால் இம்சிக்கப்பெறும் உயிராகவும் நீங்களே பிறப்பெடுத்து இருப்பீர்கள்; ஆகவே, எல்லா உயிர்களையும் உங்கள் உயிர் போல மதித்து நடப்பதே அகிம்சையாகும், என்று மகாவீரர் அறிவுறுத்தியுள்ளார்.
</p>
<p class="text-h5">Tamil Syllabary</p>
<p class="text-body2 arishtanemi char">
அ ஆ இ ஈ உ ஊ எ ஏ ஐ ஒ ஓ ஔ
க் க கா கி கீ கு கூ கெ கே கை கொ கோ கௌ
ங் ங ஙா ஙி ஙீ ஙு ஙூ ஙெ ஙே ஙை ஙொ ஙோ ஙௌ
ச் ச சா சி சீ சு சூ செ சே சை சொ சோ சௌ
ஞ் ஞ ஞா ஞி ஞீ ஞு ஞூ ஞெ ஞே ஞை ஞொ ஞோ ஞௌ
ட் ட டா டி டீ டு டூ டெ டே டை டொ டோ டௌ
ண் ண ணா ணி ணீ ணு ணூ ணெ ணே ணை ணொ ணோ ணௌ
த் த தா தி தீ து தூ தெ தே தை தொ தோ தௌ
ந் ந நா நி நீ நு நூ நெ நே நை நொ நோ நௌ
ப் ப பா பி பீ பு பூ பெ பே பை பொ போ பௌ
ம் ம மா மி மீ மு மூ மெ மே மை மொ மோ மௌ
ய் ய யா யி யீ யு யூ யெ யே யை யொ யோ யௌ
ர் ர ரா ரி ரீ ரு ரூ ரெ ரே ரை ரொ ரோ ரௌ
ல் ல லா லி லீ லு லூ லெ லே லை லொ லோ லௌ
வ் வ வா வி வீ வு வூ வெ வே வை வொ வோ வௌ
ழ் ழ ழா ழி ழீ ழு ழூ ழெ ழே ழை ழொ ழோ ழௌ
ள் ள ளா ளி ளீ ளு ளூ ளெ ளே ளை ளொ ளோ ளௌ
ற் ற றா றி றீ று றூ றெ றே றை றொ றோ றௌ
ன் ன னா னி னீ னு னூ னெ னே னை னொ னோ னௌ
ஶ் ஶ ஶா ஶி ஶீ ஶு ஶூ ஶெ ஶே ஶை ஶொ ஶோ ஶௌ
ஜ் ஜ ஜா ஜி ஜீ ஜு ஜூ ஜெ ஜே ஜை ஜொ ஜோ ஜௌ
ஷ் ஷ ஷா ஷி ஷீ ஷு ஷூ ஷெ ஷே ஷை ஷொ ஷோ ஷௌ
ஸ் ஸ ஸா ஸி ஸீ ஸு ஸூ ஸெ ஸே ஸை ஸொ ஸோ ஸௌ
ஹ் ஹ ஹா ஹி ஹீ ஹு ஹூ ஹெ ஹே ஹை ஹொ ஹோ ஹௌ
க்ஷ் க்ஷ க்ஷா க்ஷி க்ஷீ க்ஷு க்ஷூ க்ஷெ க்ஷே க்ஷை க்ஷொ க்ஷோ க்ஷௌ
ஶ்ரீ
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
  font-family: 'Arishtanemi';
  src: url('../../assets/Arishtanemi-Tamil.ttf')
}
.char {
    font-size:130%;
    line-height: 1.25em;
}
.arishtanemi {
    font-family: 'Arishtanemi';
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
