<template>
  <q-page padding>
    <q-breadcrumbs class="q-mb-md">
      <q-breadcrumbs-el label="Home" icon="home" to="/" />
      <q-breadcrumbs-el label="Projects" icon="create" to="/projects" />
      <q-breadcrumbs-el label="Agastya: Extended Tamil font" />

    </q-breadcrumbs>
  <div class="q-ml-lg q-mr-xl">
    <p class="text-h5">Agastya: Extended Tamil font</p>
    <p class="text-body2">
Agastya is a Unicode fontset for the Extended Tamil script, an experimental attempt to use the full complimentary set of Grantha letters to fill in the gaps in the Tamil script (as compared to the pan-Indic system). </p>

<p class="text-h6">Extended Tamil Script</p>
<p>Modern Tamil only adopts /ja/, /śa/, /ṣa/, /sa/, /ha/ and the compound /śrī/ from the Grantha script into its character reportoire. The missing aspirated/voiced Indic cognates are usually represented using superscript/subscript numerals e.g. <span class="tamil">பு³த்³த⁴போ³தி⁴ஸத்த்வேப்⁴ய꞉</span> /buddhabodhisattvebhyaḥ/. While this is easy to typeset and provides accurate transcription, the result is not visually pleasing (the text often resembling mathematical formulae) and also hard to read. The other drawback is that many readers tend to simply ignore the diacritics and read the text as it were normal Tamil. <br/> Extended Tamil attempts to fix this by importing Grantha characters and using them as if they were Tamil characters. Apart from improving the visual aesthetics of the text and its readability, the imported consonants create a one-to-one visual binding with the phonemes that the reader cannot easily disregard.</p>
<p> This method was sporadically experimented from the late 1800's up until the middle part of the 20th century. One such <a href="https://archive.org/stream/bhojacharitrama00sastgoog#page/n534/mode/2up">publication</a> from 1905 is shown below: </p>
    <q-img src="../../assets/bhojacharitra-sample.png" width="300px" class="q-ma-sm"/>
<p> In modern days, it is mostly likely to be typeset as: </p>
<p>
போஜ: - (அஞ்ஜலி செய்துகொண்டு)<br/>
போ⁴ தே³ஹி-போ⁴க்³யதமம்<br/>
பு⁴வநேட்³ய-சரித !<br/>
பு⁴வநபதே !-பரமக³தே !<br/>
பு³த⁴விநுத-ஸுக்ருʼத !</p>
<p>Another publication from 1886 is shown below:</p>
    <q-img src="../../assets/manipravala-sample-imp.png" width="500px" class="q-ma-sm"/>
<p class="text-h6">Agastya</p>
<p> Agastya fontset allows users to typeset such extended Tamil text seamlessly and compose text in it. Due to the current limitations of Unicode rendering engines that do not allow mixing base characters from two different blocks (Grantha and Tamil), the font has been implemented in the Malayalam codeblock. Therefore, text composed will appear as Malayalam characters if a suitable font is not present. The glyphs of the font have been directly borrowed from Google's Noto fonts project under the terms of the Open Font License (OFL). The font project is also consequently released under OFL.</p>
<p> The text in the sample above can now be typeset using the font set as: </p>
<i>Agastya Sans:</i>
<p class="tamilextended">
പോജ: - (അഞ്‌ജലി ചെയ്‌തുകൊണ്‌ടു)<br/>
ഭോ ദേഹി-ഭോഗ്‌യതമമ്‌<br/>
ഭുവനേഡ്‌യ-ചരിത !<br/>
ഭുവനപതേ !-പരമഗതേ !<br/>
ബുധവിനുത-സുകൃത !</p>
<i>Agastya Serif:</i>
<p class="tamilextendedserif">
പോജ: - (അഞ്‌ജലി ചെയ്‌തുകൊണ്‌ടു)<br/>
ഭോ ദേഹി-ഭോഗ്‌യതമമ്‌<br/>
ഭുവനേഡ്‌യ-ചരിത !<br/>
ഭുവനപതേ !-പരമഗതേ !<br/>
ബുധവിനുത-സുകൃത !</p>

<p> Additionally, the fonts can further be used to typeset Vedic texts. </p>
<p class="tamilextended">ആ॒ദി॒ത്‌യവ॑ര്‌ണേ॒ തപ॒സോഽധി॑ജാ॒തോ വന॒സ്‌പതി॒സ്‌തവ॑ വൃ॒ക്ഷോഽഥ ബി॒ല്‌വഃ । </p>
<p class="tamilextendedserif">തസ്‌യ॒ ഫലാ᳚നി॒ തപ॒സാ നു॑ദന്‌തു മാ॒യാന്‌ത॑രാ॒യാശ്‌ച॑ ബാ॒ഹ്‌യാ അ॑ല॒ക്ഷ്‌മീഃ ॥</p>
<p> You can additionally see the codeblock support for both <a href="downloads/AgastyaSans.pdf" target="_blank">Sans</a> and <a href="downloads/AgastyaSerif.pdf" target="_blank">Serif</a>. </p>

<p class="text-h6"> Lopamudra </p>
<p>Sanskrit and Tamil have different orthographies. Tamil is a phonemic script while Sanskrit is phonetic, as the Tamil unvoiced plosives have several allophones based on their context. Due to this, people often  apply Tamil reading rules to Sanskrit text and read it as it were Tamil. For instance, one might be tempted to read <span class="tamilextended">ചതുര്‌മകുടദീപാനി</span> as /sadurmakuḍadībāni/ using Tamil reading rules as opposed to /caturmakuṭadīpāni/ using Sanskrit rules. Therefore, there might be a necessity to mark these consonants explicitly in some Sanskrit texts as a reminder to not alter them based on Tamil phonemic principles. We have attemped to do this by slightly modifying the plosives to explicitly mark them as Sanskrit consonants, as in <span class="lopamudrasans">ചതുര്‌മകുടദീപാനി</span></p>

<p>Lopamudra is a variant of the Agastya typeface with these modified forms. Inspired by Grantha forms, we introduce minor changes to <span class="tamilextended">ക ച ട ത & പ</span> resulting in the forms <span class="lopamudrasans">ക ച ട ത & പ</span>. The modified shapes of  <span class="lopamudrasans demo">ക ച ത</span> with a small curve below is based on Grantha <span class="grantha">𑌕</span> and those of <span class="lopamudrasans demo">ട പ</span> with a small vertical line underneath is based on Grantha <span class="grantha">𑌟</span>. Also, Agastya, following Tamil script principles, doesn't  distinguish the right part of -au vowel sign and l̤. For instance, <span class="tamilextended">കൌ</span> /kau/ and <span class="tamilextended">കെള</span> /kĕl̤a/ have the same appearance. Lopamudra additionally tries to remedy this by adopting the corresponding Grantha character for the retroflex letter to visually distinguish them as <span class="lopamudrasans">കൌ</span> and <span class="lopamudrasans">കെള</span>. <p>
<p>Lopamudra also attempts to distinguish <span class="tamilextendedss">ഥ</span> /tha/ and <span class="tamilextendedss">ധ</span> /dha/ from <span class="tamilextendedss">യ</span> /ya/. The variant forms were inspired by the forms appearing in handwritten manuscripts. We reduced the height of /tha/ and /dha/ to make these character a bit more obvious and distinct.</p>
<p class="tamilextendedss"><big>ഥ ധ യ</big></p>

<p>Similar to Agastya, Lopamudra is available as Sans and Serif. </p>

<p class="text-h6"> Sample Text </p>

<p><a href="/downloads/Sample_Agastya_Sans.pdf" target="_blank"> Agastya Sans </a></p>
<p><a href="/downloads/Sample_Agastya_Serif.pdf" target="_blank"> Agastya Serif </a></p>
<p><a href="/downloads/Sample_Lopamudra_Sans.pdf" target="_blank"> Lopamudra Sans </a></p>
<p><a href="/downloads/Sample_Lopamudra_Serif.pdf" target="_blank"> Lopamudra Serif </a></p>
<p><a href="/downloads/Sample_Agastya_Sans_Stylistic_Set_1.pdf" target="_blank"> Agastya Sans (Stylistic Set 1)</a></p>
<p><a href="/downloads/Sample_Lopamudra_Serif_Stylistic_Set_2.pdf" target="_blank"> Lopamudra Serif (Stylistic Set 2)</a></p>

<p class="text-h6"> Download </p>
<p>You can download the zip file containing both Agastya and Lopamudra from <a href="downloads/AgastyaLopamudra.zip">here</a>.</p>

<p> You can also find below the complete package that would install the fonts and the corresponding phonetic Keyman keyboard layout to compose in Extended Tamil.</p>

<p><a href="downloads/-tamil_extended_phonetic.exe">Integrated Keyboard Package</a> (if you don't have keyman)</p>
<p>Instructions to install and use the Keyman Keyboard from the above are <a href="projects/agastya/instructions">here</a>.</p>
<p><a href="downloads/tamil_extended_phonetic.kmp">Only Keyboard Package</a> (if you have Keyman already installed)</p>

<p> Please make sure the font is set to either Agastya or Lopamudra before composing/reading any text in Extended Tamil. Else, the text will appear are broken Malayalam.</p>
    <p class="text-h6">Character Mapping</p>
    <table>
        <span v-for="(row,ind) in vowIAST" :key="'iastc'+ind">
        <tr>
        <td v-for="(char, ind2) in vowIAST[ind]" :key="'iastc'+ind+ind2">{{char}}</td>
        </tr>
        <tr>
        <td v-for="(char, ind2) in vowTam[ind]" :key="'iast2c'+ind+ind2" class="tamil">{{char}}</td>
        </tr>
        <tr>
        <td v-for="(char, ind2) in vowTamExt[ind]" :key="'iast3c'+ind+ind2" class="tamilextended">{{char}}</td>
        </tr>
        </span>
    </table>
    <hr/>
    <table>
        <span v-for="(row,ind) in alphabetIAST" :key="'iastc'+ind">
        <tr>
        <td v-for="(char, ind2) in alphabetIAST[ind]" :key="'iastc'+ind+ind2">{{char}}</td>
        </tr>
        <tr>
        <td v-for="(char, ind2) in alphabetTamil[ind]" :key="'iast2c'+ind+ind2" class="tamil">{{char}}</td>
        </tr>
        <tr>
        <td v-for="(char, ind2) in alphabetTamilExt[ind]" :key="'iast3c'+ind+ind2" class="tamilextended">{{char}}</td>
        </tr>
        </span>
    </table>
    <hr/>
    <table>
        <span v-for="(row,ind) in convow1IAST" :key="'iastc'+ind">
        <tr>
        <td v-for="(char, ind2) in convow1IAST[ind]" :key="'iastc'+ind+ind2">{{char}}</td>
        </tr>
        <tr>
        <td v-for="(char, ind2) in convow1Tam[ind]" :key="'iast2c'+ind+ind2" class="tamil">{{char}}</td>
        </tr>
        <tr>
        <td v-for="(char, ind2) in convow1TamExt[ind]" :key="'iast3c'+ind+ind2" class="tamilextended">{{char}}</td>
        </tr>
        </span>
    </table>
    <hr/>
    <table>
        <span v-for="(row,ind) in convow2IAST" :key="'iast5c'+ind">
        <tr>
        <td v-for="(char, ind2) in convow2IAST[ind]" :key="'iast5c'+ind+ind2">{{char}}</td>
        </tr>
        <tr>
        <td v-for="(char, ind2) in convow2Tam[ind]" :key="'iast25c'+ind+ind2" class="tamil">{{char}}</td>
        </tr>
        <tr>
        <td v-for="(char, ind2) in convow2TamExt[ind]" :key="'iast35c'+ind+ind2" class="tamilextended">{{char}}</td>
        </tr>
        </span>
    </table><br/>
    <p class="text-h6"> Font Design</p>
    The following design principles were followed in the creation of the font.
    <ol>
        <li>Effortless blending of the imported characters with the native characters</li>
        <li>Minimizing ambiguity with the native characters</li>
        <li>Improved font accessibility</li>
        </ol>
    <p> Grantha usually uses forms without descenders e.g.<span class="granthano">𑌗 𑌭</span>. This can be seen in the above print example as well. However, Tamil characters usually have descenders e.g <span class="tamil">த ந</span>. To increase homogenity, it was chosen to import character forms with descenders. Compare: <span class="tamil">வர்</span><span class="granthano">𑌗</span><span class="tamil">நாம</span><span class="granthano"> 𑌭𑍂</span><span class="tamil">தகோடி</span> with <span class="tamilextended">വര്‌ഗനാമ ഭൂതകോടി</span>. To minimize confusion between the pairs /kha/ - /va/ and /ṭha/ - /ṃ/, alternate forms for /kha/ and /ṭha/ were chosen.</p>
    <table>
        <tr>
          <td> Usual form  </td>
          <td> Alternate form </td>
          <td> Similar Char.</td>
        </tr>
      <tr>
          <td class="granthano"> 𑌖 </td>
          <td class="tamilextended"> ഖ </td>
          <td class="tamilextended"> വ </td>
        </tr>
      <tr>
          <td class="granthano"> 𑌠 </td>
          <td class="tamilextended"> ഠ </td>
          <td class="tamilextended">  ം</td>
        </tr>
    </table>
    <p> Malayalam block was chosen rather than Grantha to increase the accessibility of the font. Given that Malayalam has better support than Grantha, users can easily input text in Extended Tamil as if it were Malayalam (for caveats see below) and just change the font to properly render the text in Extended Tamil. </p>
<p class="text-h6"> Stylistic Sets</p>
<p class="tamilextendedss"><big>ഥ ധ ദ </big></p>
<p> We have added stylistic sets to both Agastya and Lopamudra. In Agastya, SS01 allows users to access the alternate forms of /dha/, /tha/ and /da/ as shown above. With Lopamudra, SS01 reverts /l̤/ back to its original Tamil shape and SS02 displays the alternate /da/ (as the other forms are default already).</p>
    <p class="text-h6">Ligating -u/uu</p>
    <p>All the Tamil consonants have ligature forms for vowel signs -u/-ū. However, the Grantha consonants break this pattern by using a spacing vowel sign and, consequently, do not harmoniously blend into the surrounding text. For instance, <span class="tamilextended">ഖു ഗു ഘു ഛു ജു ഝു</span> etc.
    <!--
    <table>
     <span v-for="(row,ind) in TamExtu" :key="'iast4c'+ind">
        <tr>
            <td v-for="(char, ind2) in TamExtu[ind]" :key="'iast4c'+ind+ind2" class="tamilextended">{{char}}</td>
        </tr>
        <tr>
          <td v-for="(char, ind2) in TamExtuu[ind]" :key="'iast4c'+ind+ind2" class="tamilextended">{{char}}</td>
        </tr>
        </span>
    </table> <br/> -->
    We attempted to fix this by innovating ligated signs for the Grantha characters using similar-looking Tamil character(s) as archetypes. These innovative forms help the borrowed characters to visually blend with the surrounding Tamil consonants. </p>
    <table>
     <span v-for="(row,ind) in TamExtLigu" :key="'iast4c'+ind">
        <tr>
            <td v-for="(char, ind2) in TamExtLigu[ind]" :key="'iast4c'+ind+ind2" class="tamilextended">{{char}}</td>
        </tr>
        <tr>
          <td v-for="(char, ind2) in TamExtLiguu[ind]" :key="'iast4c'+ind+ind2" class="tamilextended">{{char}}</td>
        </tr>
        </span>
    </table>
<br/>
<p>The ligated forms are not formed by default but rather be requested using ZWJ.</p>
<p> GA + ZWJ + Vowel Sign U ⟶ <span class="tamilextended">ഗ‍ു</span><br/>
GA + ZWJ + Vowel Sign UU ⟶ <span class="tamilextended">ഗ‍ൂ</span></p>

<p>This feature is available only with Agastya Sans.</p>

<!-- <p class="lopamudrasans">
ക്‌ ക കാ കി കീ കു കൂ കൃ കേ കൈ കോ കൌ കം കഃ<br/>
ച്‌ ച ചാ ചി ചീ ചു ചൂ ചൃ ചേ ചൈ ചോ ചൌ ചം ചഃ<br/>
ട്‌ ട ടാ ടി ടീ ടു ടൂ ടൃ ടേ ടൈ ടോ ടൌ ടം ടഃ<br/>
ത്‌ ത താ തി തീ തു തൂ തൃ തേ തൈ തോ തൌ തം തഃ<br/>
പ്‌ പ പാ പി പീ പു പൂ പൃ പേ പൈ പോ പൌ പം പഃ <br/>
ള് ള ളാ ളി ളീ ളു ളൂ ളേ ളൈ ളോ ളൌ ളം ളഃ
</p> -->
<!--<i>Lopamudra Sans:</i> <p class="lopamudrasans">അഥ ഖലു അക്ഷയമതിര്‌ബോധിസത്‌ത്‌വോ മഹാസത്‌ത്‌വ ഉത്‌ഥായാസനാദേകാംസമുത്‌തരാസങ്‌ഗം കൃത്‌വാ ദക്ഷിണം ജാനുമണ്‌ഡലം പൃഥിവ്‌യാം പ്‌രതിഷ്‌ഠാപ്‌യ യേന ഭഗവാംസ്‌തേനാഞ്‌ജലിം പ്‌രണാമ്‌യ ഭഗവന്‌തമേതദവോചത്‌-കേന കാരണേന ഭഗവന്‌ അവലോകിതേശ്‌വരോ ബോധിസത്‌ത്‌വോ മഹാസത്‌ത്‌വോഽവലോകിതേശ്‌വര ഇത്‌യുച്‌യതേ? </p>
<i>Lopamudra Serif:</i><p class="lopamudraserif">അഥ ഖലു അക്ഷയമതിര്‌ബോധിസത്‌ത്‌വോ മഹാസത്‌ത്‌വ ഉത്‌ഥായാസനാദേകാംസമുത്‌തരാസങ്‌ഗം കൃത്‌വാ ദക്ഷിണം ജാനുമണ്‌ഡലം പൃഥിവ്‌യാം പ്‌രതിഷ്‌ഠാപ്‌യ യേന ഭഗവാംസ്‌തേനാഞ്‌ജലിം പ്‌രണാമ്‌യ ഭഗവന്‌തമേതദവോചത്‌-കേന കാരണേന ഭഗവന്‌ അവലോകിതേശ്‌വരോ ബോധിസത്‌ത്‌വോ മഹാസത്‌ത്‌വോഽവലോകിതേശ്‌വര ഇത്‌യുച്‌യതേ? </p>
<p> You can also see the codeblock support for both <a href="downloads/LopamudraSans.pdf" target="_blank">Sans</a> and <a href="downloads/LopamudraSerif.pdf" target="_blank">Serif</a>. </p> -->
<p class="text-h6">Using Malayalam Input Methods</p>
<p> To avoid rendering engines (particularly Microsoft products) from treating the text as Malayalam and forming Malayalam-like conjuncts, one needs to insert ZWNJ after the Virama except for the compounds /kṣa/ & /śra/. /śra/ requires ZWJ to be inserted after the Virama. Therefore, some care needs to be taken when using standard Malayalam input methods to compose using Agastya. Also, modern Malayalam uses only the right part of the -au sign (U+0D57) as in: കൗ, but Agastya/Lopamudra require the two-part vowel (U+0D4C) sign to be used, as in കൌ.</p>
<p> The Keyman keyboard in the font package has been developed exclusively for Extended Tamil and takes care of these ideosyncracies implicitly.</p>

<p> An easier way would also be to use <a href="https://aksharamukha.appspot.com" target="_blank">Aksharamukha</a> and convert existing text from Devanagari or IAST to Extended Tamil.</p>
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
      tab: 'IAST',
      TamExtu: [
        ['കു', 'ഖു', 'ഗു', 'ഘു', 'ങു'],
        ['ചു', 'ഛു', 'ജു', 'ഝു', 'ഞു'],
        ['ടു', 'ഠു', 'ഡു', 'ഢു', 'ണു'],
        ['തു', 'ഥു', 'ദു', 'ധു', 'നു'],
        ['പു', 'ഫു', 'ബു', 'ഭു', 'മു'],
        ['യു', 'രു', 'ലു', 'വു'],
        ['ശു', 'ഷു', 'സു', 'ഹു'],
        ['ഴു', 'ളു', 'റു', 'ഩു'],
        ['ക്ഷു', 'ശ്‍രു']
      ],
      TamExtLigu: [
        ['കു', 'ഖ‍ു', 'ഗ‍ു', 'ഘ‍ു', 'ങു'],
        ['ചു', 'ഛ‍ു', 'ജ‍ു', 'ഝ‍ു', 'ഞു'],
        ['ടു', 'ഠ‍ു', 'ഡ‍ു', 'ഢ‍ു', 'ണു'],
        ['തു', 'ഥ‍ു', 'ദ‍ു', 'ധ‍ു', 'നു'],
        ['പു', 'ഫ‍ു', 'ബ‍ു', 'ഭ‍ു', 'മു'],
        ['യു', 'രു', 'ലു', 'വു'],
        ['ശ‍ു', 'ഷ‍ു', 'സ‍ു', 'ഹ‍ു'],
        ['ഴു', 'ളു', 'റു', 'ഩു'],
        ['ക്ഷ‍ു', 'ശ്‍ര‍ു']
      ],
      TamExtuu: [
        ['കൂ', 'ഖൂ', 'ഗൂ', 'ഘൂ', 'ങൂ'],
        ['ചൂ', 'ഛൂ', 'ജൂ', 'ഝൂ', 'ഞൂ'],
        ['ടൂ', 'ഠൂ', 'ഡൂ', 'ഢൂ', 'ണൂ'],
        ['തൂ', 'ഥൂ', 'ദൂ', 'ധൂ', 'നൂ'],
        ['പൂ', 'ഫൂ', 'ബൂ', 'ഭൂ', 'മൂ'],
        ['യൂ', 'രൂ', 'ലൂ', 'വൂ'],
        ['ശൂ', 'ഷൂ', 'സൂ', 'ഹൂ'],
        ['ഴൂ', 'ളൂ', 'റൂ', 'ഩൂ'],
        ['ക്ഷൂ', 'ശ്‍രൂ']
      ],
      TamExtLiguu: [
        ['കൂ', 'ഖ‍ൂ', 'ഗ‍ൂ', 'ഘ‍ൂ', 'ങൂ'],
        ['ചൂ', 'ഛ‍ൂ', 'ജ‍ൂ', 'ഝ‍ൂ', 'ഞൂ'],
        ['ടൂ', 'ഠ‍ൂ', 'ഡ‍ൂ', 'ഢ‍ൂ', 'ണൂ'],
        ['തൂ', 'ഥ‍ൂ', 'ദ‍ൂ', 'ധ‍ൂ', 'നൂ'],
        ['പൂ', 'ഫ‍ൂ', 'ബ‍ൂ', 'ഭ‍ൂ', 'മൂ'],
        ['യൂ', 'രൂ', 'ലൂ', 'വൂ'],
        ['ശ‍ൂ', 'ഷ‍ൂ', 'സ‍ൂ', 'ഹ‍ൂ'],
        ['ഴൂ', 'ളൂ', 'റൂ', 'ഩൂ'],
        ['ക്ഷ‍ൂ', 'ശ്‍ര‍ൂ']
      ],
      alphabetIAST: [
        ['ka', 'kha', 'ga', 'gha', 'ṅa'],
        ['ca', 'cha', 'ja', 'jha', 'ña'],
        ['ṭa', 'ṭha', 'ḍa', 'ḍha', 'ṇa'],
        ['ta', 'tha', 'da', 'dha', 'na'],
        ['pa', 'pha', 'ba', 'bha', 'ma'],
        ['ya', 'ra', 'la', 'va'],
        ['śa', 'ṣa', 'sa', 'ha'],
        ['ḻa', 'l̤a', 'ṟa', 'ṉa'],
        ['kṣa', 'śra', '\'']
      ],
      alphabetTamil: [['க', 'க²', 'க³', 'க⁴', 'ங'],
        ['ச', 'ச²', 'ஜ', 'ஜ²', 'ஞ'],
        ['ட', 'ட²', 'ட³', 'ட⁴', 'ண'],
        ['த', 'த²', 'த³', 'த⁴', 'ந'],
        ['ப', 'ப²', 'ப³', 'ப⁴', 'ம'],
        ['ய', 'ர', 'ல', 'வ'],
        ['ஶ', 'ஷ', 'ஸ', 'ஹ'],
        ['ழ', 'ள', 'ற', 'ன'],
        ['க்ஷ', 'ஶ்ர', '(அ)']
      ],
      alphabetTamilExt: [['ക', 'ഖ', 'ഗ', 'ഘ', 'ങ'],
        ['ച', 'ഛ', 'ജ', 'ഝ', 'ഞ'],
        ['ട', 'ഠ', 'ഡ', 'ഢ', 'ണ'],
        ['ത', 'ഥ', 'ദ', 'ധ', 'ന'],
        ['പ', 'ഫ', 'ബ', 'ഭ', 'മ'],
        ['യ', 'ര', 'ല', 'വ'],
        ['ശ', 'ഷ', 'സ', 'ഹ'],
        ['ഴ', 'ള', 'റ', 'ഩ'],
        ['ക്ഷ', 'ശ്‍ര', 'ഽ']
      ],
      vowIAST: [
        ['a', 'ā', 'i', 'ī', 'u', 'ū'],
        ['ṛ', 'ṝ', 'ḷ', 'ḹ'],
        ['ĕ', 'e', 'ai', 'ŏ', 'o', 'au'],
        ['aṃ', 'aḥ', 'am̐']
      ],
      vowTam: [
        ['அ', 'ஆ', 'இ', 'ஈ', 'உ', 'ஊ'],
        ['ருʼ', 'ரூʼ', 'லுʼ', 'லூʼ'],
        ['எ', 'ஏ', 'ஐ', 'ஒ', 'ஓ', 'ஔ'],
        ['அம்ʼ', 'அ꞉', 'அம்ˮ']
      ],
      vowTamExt: [
        ['അ', 'ആ', 'ഇ', 'ഈ', 'ഉ', 'ഊ'],
        ['ഋ', 'ൠ', 'ഌ', 'ൡ'],
        ['എ', 'ഏ', 'ഐ', 'ഒ', 'ഓ', 'ഔ'],
        ['അം', 'അഃ', 'അഁ']
      ],
      convow1IAST: [
        ['ka', 'kā', 'ki', 'kī', 'ku', 'kū'],
        ['kṛ', 'kṝ', 'kḷ', 'kḹ'],
        ['kĕ', 'ke', 'kai', 'ko', 'kŏ', 'kau'],
        ['kaṃ', 'kaḥ', 'kam̐']
      ],
      convow1Tam: [
        ['க', 'கா', 'கி', 'கீ', 'கு', 'கூ'],
        ['க்ருʼ', 'க்ரூʼ', 'க்லுʼ', 'க்லூʼ'],
        ['கெ', 'கே', 'கை', 'கொ', 'கோ', 'கௌ'],
        ['கம்ʼ', 'க꞉', 'கம்ˮ']
      ],
      convow1TamExt: [
        ['ക', 'കാ', 'കി', 'കീ', 'കു', 'കൂ'],
        ['കൃ', 'കൄ', 'കൢ', 'കൣ'],
        ['കെ', 'കേ', 'കൈ', 'കൊ', 'കോ', 'കൌ'],
        ['കം', 'കഃ', 'കഁ']
      ],
      convow2IAST: [
        ['g', 'gā', 'gi', 'gī', 'gu', 'gū'],
        ['gṛ', 'gṝ', 'gḷ', 'gḹ'],
        ['gĕ', 'ge', 'gai', 'gŏ', 'go', 'gau'],
        ['gaṃ', 'gaḥ', 'gam̐']
      ],
      convow2Tam: [
        ['க்³', 'கா³', 'கி³', 'கீ³', 'கு³', 'கூ³'],
        ['க்³ருʼ', 'க்³ரூʼ', 'க்³லுʼ', 'க்³லூʼ'],
        ['கெ³', 'கே³', 'கை³', 'கொ³', 'கோ³', 'கௌ³'],
        ['க³ம்ʼ', 'க³꞉', 'க³ம்ˮ']
      ],
      convow2TamExt: [
        ['ഗ്‌', 'ഗാ', 'ഗി', 'ഗീ', 'ഗു', 'ഗൂ'],
        ['ഗൃ', 'ഗൄ', 'ഗൢ', 'ഗൣ'],
        ['ഗെ', 'ഗേ', 'ഗൈ', 'ഗൊ', 'ഗോ', 'ഗൌ'],
        ['ഗം', 'ഗഃ', 'ഗഁ']
      ]
    }
  },
  methods: {
  }
}
</script>

<style scoped>
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
  padding:5px;
}
.demo {
  font-size: 150%;
}
</style>
