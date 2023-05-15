<template>
  <q-page padding>
    <q-breadcrumbs class="q-mb-md">
      <q-breadcrumbs-el label="Home" icon="home" to="/" />
      <q-breadcrumbs-el label="Projects" icon="create" to="/projects" />
      <q-breadcrumbs-el label="Agastya: Extended Tamil font" />

    </q-breadcrumbs>
  <div class="q-ml-lg q-mr-xl">
    <p class="text-h5">Agastya: Extended Tamil font</p>
       <p class="text-h5 tamilextended">അഗസ്‌ത്‌യ ഫാഩ്‌ട്‌</p>

    <p class="text-body2">
      <script-tab v-model="tab"></script-tab>

Agastya is a Unicode fontset consisting of three fonts: <i>Agastya</i>, <i>Lopamudra</i> & <i>Idhmavaha</i>, for Extended Tamil. The script is an experimental attempt to use the full complimentary set of Grantha letters to fill in the gaps in the Tamil script (as compared to the pan-Indic system). All three fonts are available in both sans and serif styles.</p>

<p class="text-h6">Extended Tamil Script</p>
<p>Modern Tamil only adopts /ja/, /śa/, /ṣa/, /sa/, /ha/ and the compound /śrī/ from the Grantha script into its character repertoire. More often, the missing aspirated/voiced Indic cognates are mapped to the existing consonants resulting in renderings such as <span class="tamil">புத்தபோதிஸத்த்வேப்ய꞉</span> /puttapotisattvepya:/. In publications that require fidelity to the original source, they are usually represented using superscript/subscript numerals e.g. <span class="tamil">பு³த்³த⁴போ³தி⁴ஸத்த்வேப்⁴ய꞉</span> /buddhabodhisattvebhyaḥ/. While this is easy to typeset and provides accurate transliteration, the result is not visually pleasing and also hard to read. The other drawback is that many readers tend to simply ignore the diacritics and read the text as if it were normal Tamil.<br/>
  <q-img src="../../assets/bhojacharitra-sample.png" width="300px" class="q-ma-sm"/>
<p class="idhmavahasans" style="line-height: 2em;font-size: 110%;">
  പോജ: - (അഞ്‌ജലി ചെയ്‌തുകൊണ്‌ടു) <br/>
<ruby>ഭോ<rt>BHO</rt></ruby>&nbsp;<ruby>ദേ<rt>DE</rt></ruby>ഹി-<ruby>ഭോ<rt>BHO</rt></ruby><ruby>ഗ്<rt>G</rt></ruby>‌യതമമ്‌ <br/>
<ruby>ഭു<rt>BHU</rt></ruby>വനേ<ruby>ഡ്<rt>Ḍ</rt></ruby>‌യ-ചരിത ! <br/>
<ruby>ഭു<rt>BHU</rt></ruby>വനപതേ !-പരമ<ruby>ഗ<rt>GA</rt></ruby>തേ ! <br/>
<ruby>ബു<rt>BU</rt></ruby><ruby>ധ<rt>DHA</rt></ruby>വിനുത-സു<ruby>കൃ<rt>KṚ</rt></ruby>ത</p>
(From a <a href="https://archive.org/stream/bhojacharitrama00sastgoog#page/n534/mode/2up">publication</a> from 1905 )
  <br/> <br/>

<p>Extended Tamil, as shown above, attempts to fix this by importing Grantha characters and using them as if they were Tamil characters. Compare, <span class="tamilextended">ബുദ്‌ധബോധിസത്‌ത്‌വേഭ്‌യഃ</span> vs <span class="tamil">பு³த்³த⁴போ³தி⁴ஸத்த்வேப்⁴ய꞉</span>. Apart from improving the visual aesthetics of the text and its readability, the imported consonants create a one-to-one visual binding with the phonemes that the reader cannot easily disregard. This method was sporadically experimented from the late 1800s up until the middle part of the 20th century.</p>

<!-- <p>Another publication from 1886 is shown below:</p>
    <q-img src="../../assets/manipravala-sample-imp.png" width="500px" class="q-ma-sm"/>
<p>A <a href="https://groups.google.com/d/msg/mintamil/tDwV_UwYJKc/AVCkX2KQFV4J">commentary</a> on the Tamil Jaina Epic Nilakesi published in 1936 also uses this technique intermittently to disambiguate Sanskrit words that will otherwise be ambigous in the Tamil script, along with the proper Grantha script for Sanskrit quotations. There also been other recent publications that employed this method to print Sanskrit.</p> -->
<p class="text-h6">Agastya</p>
<p> Agastya allows users to typeset such Extended Tamil text seamlessly. Since, Grantha and Tamil are closely related, extra care was taken to harmonize the additional Grantha characters with the existing Tamil characters, while at the same time, decreasing the confusability with similar-looking Tamil characters. Accordingly, we use Tamil-style descenders for the Grantha consonants as opposed to the flat-tail of traditional Grantha characters - <span class="granthano">𑌭𑍂</span><span class="tamil">த</span> vs <span class="tamilextended">ഭൂത</span>. Inspired by their earlier manuscript forms, the characters /da/, /kha/, /tha/ & /dha/ have been modified slightly from their normative printed forms to sufficiently differentiate from them other similar looking Tamil letters. <span class="tamilextended"><ruby>ഉ<rt>U</rt></ruby>&nbsp;<ruby>ദ<rt>DA</rt></ruby> | <ruby>വ<rt>VA</rt></ruby>&nbsp;<ruby>ഖ<rt>KHA</rt></ruby> | <ruby>യ<rt>YA</rt></ruby>&nbsp;<ruby>ഥ<rt>THA</rt></ruby>&nbsp;<ruby>ധ<rt>DHA</rt></ruby> </span> as opposed to <span class="idhmavahasans">ഉ ദ | വ ഖ | യ ഥ ധ </span>. Also based on manuscripts, /ṭh/ now has an additional inner dot to disambiguate it from the Anusvara - <span class="tamilextended">കഠ</span> /kaṭha/ vs <span class="tamilextended">കം</span> /kaṃ/.

<p>Agastya is, therefore, a perfect font to render any Indic text, where pronunciation is paramount and one needs a visually pleasing yet unambiguous way to represent the sounds of the source text.</p>
<p>
<table border="1">
  <tr>
    <td><i>Tamil (Extended)</i></td>
    <td><i>Tamil (Superscript)</i></td>
    <td><i>Tamil (Simple)</i></td>
  </tr>
    <td class="tamilextended" style="line-height: 2em;"><ruby>ശു‌<rt>SHU</rt></ruby>ക്‌ലാമ്<ruby>‌ബ<rt>BA</rt></ruby>ര<ruby>‌ധ<rt>DHA</rt></ruby><ruby>രം<rt>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;M</rt></ruby> വിഷ്‌<ruby>ണും<rt>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;M</rt></ruby>&nbsp;<ruby>‌ശ<rt>SHA</rt></ruby><ruby>ശി<rt>SHI</rt></ruby>വര്‌‌<ruby>ണം<rt>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;M</rt></ruby> ചതുര്‌<ruby>ഭു<rt>BHU</rt></ruby>ജമ്‌ .
പ്‌രസന്‌നവ<ruby>ദ<rt>DA</rt></ruby><ruby>നം<rt>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;M</rt></ruby>&nbsp;<ruby>‌ധ്‌<rt>DH</rt></ruby>യായേത്‌ സര്‌വവി<ruby>ഘ്‌<rt>GH</rt></ruby>നോപ<ruby>‌ശാ‌<rt>SHAA</rt></ruby>ന്‌തയേ ..</td>

<td class="tamil">ஶுக்லாம்ப³ரத⁴ரம்ʼ விஷ்ணும்ʼ ஶஶிவர்ணம்ʼ சதுர்பு⁴ஜம் .
ப்ரஸந்நவத³நம்ʼ த்⁴யாயேத் ஸர்வவிக்⁴நோபஶாந்தயே ..</td>

<td class="tamil">ஶுக்லாம்பரதரம் விஷ்ணும் ஶஶிவர்ணம் சதுர்புஜம் .
ப்ரஸந்நவதநம் த்யாயேத் ஸர்வவிக்நோபஶாந்தயே ..</td>

</table>
<p>For the complete Vishnu Sahasranama, visit <a href="https://sanskritdocuments.org/doc_vishhnu/vsahasranew.html" target="_blank">here</a> and pick <i>Tamil (Extended)</i> from the drop down menu on the right corner. The site also has various other texts that can be rendered in Extended Tamil.
</p>
<p class="text-h7"><b>Sample Text</b></p>
<p><transliterate source="IAST" :target="tab">atha khalu akṣayamatirbodhisattvo mahāsattva utthāyāsanādekāṃsamuttarāsaṅgaṃ kṛtvā dakṣiṇaṃ jānumaṇḍalaṃ pṛthivyāṃ pratiṣṭhāpya yena bhagavāṃstenāñjaliṃ praṇāmya bhagavantametadavocat-kena kāraṇena bhagavan avalokiteśvaro bodhisattvo mahāsattvo'valokiteśvara ityucyate?</transliterate></p>

<hr/>

<p class="tamilextended">Agastya Sans: അഥ ഖലു അക്ഷയമതിര്‌ബോധിസത്‌ത്‌വോ മഹാസത്‌ത്‌വ ഉത്‌ഥായാസനാദേകാംസമുത്‌തരാസങ്‌ഗം കൃത്‌വാ ദക്ഷിണം ജാനുമണ്‌ഡലം പൃഥിവ്‌യാം പ്‌രതിഷ്‌ഠാപ്‌യ യേന ഭഗവാംസ്‌തേനാഞ്‌ജലിം പ്‌രണാമ്‌യ ഭഗവന്‌തമേതദവോചത്‌-കേന കാരണേന ഭഗവന്‌ അവലോകിതേശ്‌വരോ ബോധിസത്‌ത്‌വോ മഹാസത്‌ത്‌വോഽവലോകിതേശ്‌വര ഇത്‌യുച്‌യതേ? </p>

<p class="tamilextendedserif">Agastya Serif: അഥ ഖലു അക്ഷയമതിര്‌ബോധിസത്‌ത്‌വോ മഹാസത്‌ത്‌വ ഉത്‌ഥായാസനാദേകാംസമുത്‌തരാസങ്‌ഗം കൃത്‌വാ ദക്ഷിണം ജാനുമണ്‌ഡലം പൃഥിവ്‌യാം പ്‌രതിഷ്‌ഠാപ്‌യ യേന ഭഗവാംസ്‌തേനാഞ്‌ജലിം പ്‌രണാമ്‌യ ഭഗവന്‌തമേതദവോചത്‌-കേന കാരണേന ഭഗവന്‌ അവലോകിതേശ്‌വരോ ബോധിസത്‌ത്‌വോ മഹാസത്‌ത്‌വോഽവലോകിതേശ്‌വര ഇത്‌യുച്‌യതേ? </p>

<p class="text-h6">Character Mapping</p>
    <table>
        <span v-for="(row,ind) in vowIAST" :key="'iastc'+ind">
        <tr>
        <td v-for="(char, ind2) in vowIAST[ind]" :key="'iastc'+ind+ind2">{{char}}</td>
        </tr>
        <tr>
        <td v-for="(char, ind2) in vowDev[ind]" :key="'devc'+ind+ind2">{{char}}</td>
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
        <td v-for="(char, ind2) in alphabetDev[ind]" :key="'devc'+ind+ind2">{{char}}</td>
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
        <td v-for="(char, ind2) in convow1Dev[ind]" :key="'iastc22'+ind+ind2">{{char}}</td>
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
        <td v-for="(char, ind2) in convow2Dev[ind]" :key="'iast5c2'+ind+ind2">{{char}}</td>
        </tr>
        <tr>
        <td v-for="(char, ind2) in convow2Tam[ind]" :key="'iast25c'+ind+ind2" class="tamil">{{char}}</td>
        </tr>
        <tr>
        <td v-for="(char, ind2) in convow2TamExt[ind]" :key="'iast35c'+ind+ind2" class="tamilextended">{{char}}</td>
        </tr>
        </span>
    </table><br/>

<p> The fonts can also typeset Vedic texts with svaras. </p>

<p class="tamilextended" style="line-height: 2em;">സന്‌ത॑തꣳ ശി॒ലാഭി॑സ്‌തു॒ലമ്‌ബ॑ത്‌യാകോശ॒സന്‌നി॑ഭമ്‌ ।<br>
തസ്‌യാന്‌തേ॑ സുഷി॒രꣳ സൂ॒ക്ഷ്‌മം തസ്‌മി᳚ന്‌ സ॒ര്‌വം പ്‌രതി॑ഷ്‌ഠിതമ്‌ ॥</p>

<p class="text-h6"> Lopamudra </p>
<p>Sanskrit and Tamil have different orthographies. Sanskrit is an (almost) phonetic script while Tamil is (largely) phonemic. Particularly, Tamil unvoiced plosives have several allophones based on their context. Due to this, people often  apply Tamil reading rules to Sanskrit text and read it as it were Tamil. For instance, one might be tempted to read <span class="tamilextended">ചതുര്‌മകുടദീപാനി</span> as /sadurmakuḍadībāni/ using Tamil reading rules as opposed to /caturmakuṭadīpāni/ using Sanskrit rules. Therefore, there might be a need to explicitly indicate that these consonants should be pronounced using their original phonetic values. We have attemped to do this by slightly modifying the plosives, as in <span class="lopamudrasans">ചതുര്‌മകുടദീപാനി.</span></p>

<p>Lopamudra is a variant of the Agastya typeface with <span class="tamilextended">ക ച ട ത & പ</span> are replaced with their slightly altered forms: <span class="lopamudrasans">ക ച ട ത & പ</span>. The modified shapes of  <span class="lopamudrasans demo">ക ച ത</span> with a small curve below is based on Grantha <span class="grantha">𑌕</span> and those of <span class="lopamudrasans demo">ട പ</span> with a small vertical line underneath is based on Grantha <span class="grantha">𑌟</span>. Lopamudra additionally distinguishes <span class="lopamudrasans">കൌ</span>/kau/ and <span class="lopamudrasans">കെള</span> /kĕl̤a/ by adopting the Grantha form of <span class="tamilextended">ള</span>/l̤/. Tamil visually doesn't differentiate the two sequences, rendering them both as <span class="tamilextended">കെള</span>.<p>
  <hr/>

<p class="lopamudrasans">Lopamudra Sans: അഥ ഖലു അക്ഷയമതിര്‌ബോധിസത്‌ത്‌വോ മഹാസത്‌ത്‌വ ഉത്‌ഥായാസനാദേകാംസമുത്‌തരാസങ്‌ഗം കൃത്‌വാ ദക്ഷിണം ജാനുമണ്‌ഡലം പൃഥിവ്‌യാം പ്‌രതിഷ്‌ഠാപ്‌യ യേന ഭഗവാംസ്‌തേനാഞ്‌ജലിം പ്‌രണാമ്‌യ ഭഗവന്‌തമേതദവോചത്‌-കേന കാരണേന ഭഗവന്‌ അവലോകിതേശ്‌വരോ ബോധിസത്‌ത്‌വോ മഹാസത്‌ത്‌വോഽവലോകിതേശ്‌വര ഇത്‌യുച്‌യതേ? </p>

<p class="lopamudraserif">Lopamudra Serif: അഥ ഖലു അക്ഷയമതിര്‌ബോധിസത്‌ത്‌വോ മഹാസത്‌ത്‌വ ഉത്‌ഥായാസനാദേകാംസമുത്‌തരാസങ്‌ഗം കൃത്‌വാ ദക്ഷിണം ജാനുമണ്‌ഡലം പൃഥിവ്‌യാം പ്‌രതിഷ്‌ഠാപ്‌യ യേന ഭഗവാംസ്‌തേനാഞ്‌ജലിം പ്‌രണാമ്‌യ ഭഗവന്‌തമേതദവോചത്‌-കേന കാരണേന ഭഗവന്‌ അവലോകിതേശ്‌വരോ ബോധിസത്‌ത്‌വോ മഹാസത്‌ത്‌വോഽവലോകിതേശ്‌വര ഇത്‌യുച്‌യതേ? </p>

<p class="text-h6"> Idhmavaha </p>
<p>Idhmavaha is a relatively unmodified version, where almost all the traditional forms of the letters: /da/, /kha/, /tha/ & /dha/ are retained. It is the most flexible of all the fonts as it allows you to pick and choose the variant forms using stylistic sets, according to your needs. Idhmavaha contains 9 stylistic sets.</p>
<hr/>

<p class="idhmavahasans">Idhmavaha Sans: അഥ ഖലു അക്ഷയമതിര്‌ബോധിസത്‌ത്‌വോ മഹാസത്‌ത്‌വ ഉത്‌ഥായാസനാദേകാംസമുത്‌തരാസങ്‌ഗം കൃത്‌വാ ദക്ഷിണം ജാനുമണ്‌ഡലം പൃഥിവ്‌യാം പ്‌രതിഷ്‌ഠാപ്‌യ യേന ഭഗവാംസ്‌തേനാഞ്‌ജലിം പ്‌രണാമ്‌യ ഭഗവന്‌തമേതദവോചത്‌-കേന കാരണേന ഭഗവന്‌ അവലോകിതേശ്‌വരോ ബോധിസത്‌ത്‌വോ മഹാസത്‌ത്‌വോഽവലോകിതേശ്‌വര ഇത്‌യുച്‌യതേ? </p>

<p class="idhmavahaserif">Idhmavaha Serif: അഥ ഖലു അക്ഷയമതിര്‌ബോധിസത്‌ത്‌വോ മഹാസത്‌ത്‌വ ഉത്‌ഥായാസനാദേകാംസമുത്‌തരാസങ്‌ഗം കൃത്‌വാ ദക്ഷിണം ജാനുമണ്‌ഡലം പൃഥിവ്‌യാം പ്‌രതിഷ്‌ഠാപ്‌യ യേന ഭഗവാംസ്‌തേനാഞ്‌ജലിം പ്‌രണാമ്‌യ ഭഗവന്‌തമേതദവോചത്‌-കേന കാരണേന ഭഗവന്‌ അവലോകിതേശ്‌വരോ ബോധിസത്‌ത്‌വോ മഹാസത്‌ത്‌വോഽവലോകിതേശ്‌വര ഇത്‌യുച്‌യതേ? </p>

<p class="text-h6"> Fonts Comparison </p>
<p>
<table border="1px">
  <th>
    Agastya Sans
  </th>
  <th>
    Lopamudra Sans
  </th>
  <th>
    Idhmavaha Sans
  </th>
  <tr>
    <td class="tamilextended">ദ ഖ ഥ ധ ഠ</td>
    <td class="lopamudrasans">ദ ഖ ഥ ധ ഠ</td>
    <td class="idhmavahasans">ദ ഖ ഥ ധ ഠ</td>
  </tr>
  <tr>
    <td class="tamilextended">ക ച ട ത പ ള</td>
    <td class="lopamudrasans">ക ച ട ത പ ള</td>
    <td class="idhmavahasans">ക ച ട ത പ ള</td>
  </tr>
  <tr>
    <td class="tamilextended">കഃ ഖഗൌഘാങചിച്‌ഛൌജാ ഝാഞ്‌ജ്‌ഞോഽടൌഠീഡഡണ്‌ഢണഃ । <br/>
തഥോദധീന്‌പഫര്‌ബാഭീര്‌മയോഽരില്‌വാശിഷാം സഹഃ ॥</td>
    <td class="lopamudrasans">കഃ ഖഗൌഘാങചിച്‌ഛൌജാ ഝാഞ്‌ജ്‌ഞോഽടൌഠീഡഡണ്‌ഢണഃ । <br/>
തഥോദധീന്‌പഫര്‌ബാഭീര്‌മയോഽരില്‌വാശിഷാം സഹഃ ॥</td>
    <td class="idhmavahasans">കഃ ഖഗൌഘാങചിച്‌ഛൌജാ ഝാഞ്‌ജ്‌ഞോഽടൌഠീഡഡണ്‌ഢണഃ ।<br/>
തഥോദധീന്‌പഫര്‌ബാഭീര്‌മയോഽരില്‌വാശിഷാം സഹഃ ॥</td>
  </tr>
</table>
<br/>
<table border="1px">
  <th>
    Agastya Serif
  </th>
  <th>
    Lopamudra Serif
  </th>
  <th>
    Idhmavaha Serif
  </th>
  <tr>
    <td class="tamilextendedserif">ദ ഖ ഥ ധ ഠ</td>
    <td class="lopamudraserif">ദ ഖ ഥ ധ ഠ</td>
    <td class="idhmavahaserif">ദ ഖ ഥ ധ ഠ</td>
  </tr>
  <tr>
    <td class="tamilextendedserif">ക ച ട ത പ ള</td>
    <td class="lopamudraserif">ക ച ട ത പ ള</td>
    <td class="idhmavahaserif">ക ച ട ത പ ള</td>
  </tr>
  <tr>
    <td class="tamilextendedserif">കഃ ഖഗൌഘാങചിച്‌ഛൌജാ ഝാഞ്‌ജ്‌ഞോഽടൌഠീഡഡണ്‌ഢണഃ । <br/>
തഥോദധീന്‌പഫര്‌ബാഭീര്‌മയോഽരില്‌വാശിഷാം സഹഃ ॥</td>
    <td class="lopamudraserif">കഃ ഖഗൌഘാങചിച്‌ഛൌജാ ഝാഞ്‌ജ്‌ഞോഽടൌഠീഡഡണ്‌ഢണഃ । <br/>
തഥോദധീന്‌പഫര്‌ബാഭീര്‌മയോഽരില്‌വാശിഷാം സഹഃ ॥</td>
    <td class="idhmavahaserif">കഃ ഖഗൌഘാങചിച്‌ഛൌജാ ഝാഞ്‌ജ്‌ഞോഽടൌഠീഡഡണ്‌ഢണഃ ।<br/>
തഥോദധീന്‌പഫര്‌ബാഭീര്‌മയോഽരില്‌വാശിഷാം സഹഃ ॥</td>
  </tr>
</table>
</p>
<p>You can find various texts rendered both in all the three styles <a href="https://virtualvinodh.github.io/agastya-tamil-extended/test_page.html" taget="_blank">here.</a></p>

<p class="text-h6">Tamil-Style -u/-ū</p>
<p>Tamil consonants as a rule form ligatures with the vowel signs -u & -ū. However, Grantha consonants break this pattern by using a spacing vowel sign and, as a result, do not harmoniously blend into the surrounding text.
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
    This has been fixed by innovating new ligated signs for the Grantha characters by using similar-looking Tamil character(s) as archetypes. These innovative forms help the borrowed characters to visually blend with the surrounding Tamil consonants. Compare: <span class="tamilextended">ചതുര്‌ഭുജമ്‌</span> vs. <span class="tamilextended" style="font-feature-settings: 'ss01';">ചതുര്‌ഭുജമ്</span>‌. These ligated forms are available only in the sans style.</p>
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
<p></p>
<p class="text-h6"> Stylistic Sets</p>
  <p> SS01 toggles the tamil-style -u/-ū ligature for the extended Grantha consonants and SS02 toggles the Tamil-style ligatures for the already Tamilized Grantha consonants.</p>
  <p>
<table border="1px">
  <th>
    Stylist Set
  </th>
  <th>
    SS 01
  </th>
  <th>
    SS 02
  </th>
  <th>
    SS 03
  </th>
  <th>
    SS 04
  </th>
  <th>
    SS 05
  </th>
  <th>
    SS 06
  </th>
  <th>
    SS 07
  </th>
  <th>
    SS 08
  </th>
  <th>
    SS 09
  </th>
  <tr>
    <td>Agastya Sans</td>
    <td><span class="tamilextended">ഖു ഗു ഛു</span> [...] ⟶ <span style="font-family: 'Agastya Sans'; font-feature-settings: 'ss01';">ഖു ഗു ഛു [...]</span></td>
    <td><span class="tamilextended">ജു സു ഷു</span> [...] ⟶ <span style="font-family: 'Agastya Sans'; font-feature-settings: 'ss02';">ജു സു ഷു [...]</span></td>
  </tr>
  <tr>
    <td>Lopamudra Sans</td>
    <td><span class="lopamudrasans">ഖു ഗു ഛു</span> [...] ⟶ <span style="font-family: 'Lopamudra Sans'; font-feature-settings: 'ss01';">ഖു ഗു ഛു [...]</span></td>
    <td><span class="lopamudrasans">ജു സു ഷു</span> [...] ⟶ <span style="font-family: 'Lopamudra Sans'; font-feature-settings: 'ss02';">ജു സു ഷു [...]</span></td>
    <td><span class="lopamudrasans">ള</span> ⟶ <span style="font-family: 'Lopamudra Sans'; font-feature-settings: 'ss03';">ള</span></td>
  </tr>
  <tr>
    <td>Idhmavaha Sans</td>
    <td><span class="idhmavahasans">ഖു ഗു ഛു</span> [...] ⟶ <span style="font-family: 'Idhmavaha Sans'; font-feature-settings: 'ss01';">ഖു ഗു ഛു [...]</span></td>
    <td><span class="idhmavahasans">ജു സു ഷു</span> [...] ⟶ <span style="font-family: 'Idhmavaha Sans'; font-feature-settings: 'ss02';">ജു സു ഷു [...]</span></td>
    <td><span class="idhmavahasans">ള</span> ⟶ <span style="font-family: 'Idhmavaha Sans'; font-feature-settings: 'ss03';">ള</span></td>
    <td><span class="idhmavahasans">ഖ ദ ഥ ധ</span> ⟶ <span style="font-family: 'Idhmavaha Sans'; font-feature-settings: 'ss04';">ഖ ദ ഥ ധ</span></td>
    <td><span class="idhmavahasans">ക ച ട ത പ ള</span> ⟶ <span style="font-family: 'Idhmavaha Sans'; font-feature-settings: 'ss05';">ക ച ട ത പ ള</span></td>
    <td><span class="idhmavahasans">ഖ</span> ⟶ <span style="font-family: 'Idhmavaha Sans'; font-feature-settings: 'ss06';">ഖ</span></td>
    <td><span class="idhmavahasans">ദ</span> ⟶ <span style="font-family: 'Idhmavaha Sans'; font-feature-settings: 'ss07';">ദ</span></td>
    <td><span class="idhmavahasans">ഥ ധ</span> ⟶ <span style="font-family: 'Idhmavaha Sans'; font-feature-settings: 'ss08';">ഥ ധ</span></td>
    <td><span class="idhmavahasans">ദ</span> ⟶ <span style="font-family: 'Idhmavaha Sans'; font-feature-settings: 'ss09';">ദ</span></td>

  </tr>
  <tr>
    <td>Agastya Serif</td>
  </tr>
  <tr>
    <td>Lopamudra Serif</td>
    <td></td>
    <td></td>
    <td><span class="lopamudraserif">ള</span> ⟶ <span style="font-family: 'Lopamudra Serif'; font-feature-settings: 'ss03';">ള</span></td>
  </tr>
  <tr>
    <td>Idhmavaha Serif</td>
    <td></td>
    <td></td>
    <td><span class="idhmavahaserif">ള</span> ⟶ <span style="font-family: 'Idhmavaha Serif'; font-feature-settings: 'ss03';">ള</span></td>
    <td><span class="idhmavahaserif">ഖ ദ ഥ ധ</span> ⟶ <span style="font-family: 'Idhmavaha Serif'; font-feature-settings: 'ss04';">ഖ ദ ഥ ധ</span></td>
    <td><span class="idhmavahaserif">ക ച ട ത പ ള</span> ⟶ <span style="font-family: 'Idhmavaha Serif'; font-feature-settings: 'ss05';">ക ച ട ത പ ള</span></td>
    <td><span class="idhmavahaserif">ഖ</span> ⟶ <span style="font-family: 'Idhmavaha Serif'; font-feature-settings: 'ss06';">ഖ</span></td>
    <td><span class="idhmavahaserif">ദ</span> ⟶ <span style="font-family: 'Idhmavaha Serif'; font-feature-settings: 'ss07';">ദ</span></td>
    <td><span class="idhmavahaserif">ഥ ധ</span> ⟶ <span style="font-family: 'Idhmavaha Serif'; font-feature-settings: 'ss08';">ഥ ധ</span></td>
    <td><span class="idhmavahaserif">ദ</span> ⟶ <span style="font-family: 'Idhmavaha Serif'; font-feature-settings: 'ss09';">ദ</span></td>
  </tr>
</table>
</p>
<p class="text-h6"> Download </p>

<p>You can download the zip file containing the entire fontset from <a href="https://github.com/virtualvinodh/agastya-tamil-extended/blob/main/agastya_font_package.zip?raw=true">here</a>. The project is also available in <a href="https://github.com/virtualvinodh/agastya-tamil-extended">Github</a>.

<p> Please make sure the font is set to either Agastya/Lopamudra/Idhmavaha before composing/reading any text in Extended Tamil. Else, the text will appear are broken Malayalam.</p>

<p>The glyphs of the fonts have been directly borrowed (and slightly modified) from Google's Noto fonts project under the terms of the Open Font License (OFL). The font project is also consequently released under OFL.</p>

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
<p class="text-h6">Keyboards</p>
<p> If you do not have Keyman already installed, please download and install Keyman from the <a href="https://keyman.com/windows/download">official site</a>. You can either select Keyman with a pre-existing language of your choice or scroll down the page to select Keyman for Windows without any keyboards. Once Keyman has been insalled, please download and install the keyboard package linked <a href="https://github.com/virtualvinodh/agastya-tamil-extended/blob/main/TamilExtendedKeyboard/build/tamil_extended_phonetic.kmp?raw=true">here</a>. Instructions to install and use the Keyman Keyboard are <a href="projects/agastya/instructions">here</a>. An easier way would be to use <a href="https://aksharamukha.appspot.com" target="_blank">Aksharamukha</a> and convert existing text from Devanagari or IAST to Extended Tamil. You can also use the online keyboard available at this <a href="https://aksharamukha.appspot.com/input/TamilExtended">page</a>.</p>

<p>In principle, You may use any Malayalam input method as well but it requires several modifications to make it work with the font. You need to insert ZWNJ after the Virama except for the compounds /kṣa/ & /śra/. /śra/ requires ZWJ to be inserted after the Virama. Additionally, modern Malayalam uses only the right part of the -au sign (U+0D57) as in: കൗ but Agastya fontset requires the two-part vowel (U+0D4C) sign to be used, as in കൌ.</p>

<p class="text-h6">Limitations</p>
<p>Due to the current limitations of Unicode rendering engines that do not allow mixing base characters from two different blocks (Grantha and Tamil), the font has been implemented in the Malayalam codeblock. Therefore, text composed will appear as Malayalam characters if a suitable font is not present, as shown below.</p>

<p>അഥ ഖലു അക്ഷയമതിര്‌ബോധിസത്‌ത്‌വോ മഹാസത്‌ത്‌വ ഉത്‌ഥായാസനാദേകാംസമുത്‌തരാസങ്‌ഗം കൃത്‌വാ ദക്ഷിണം ജാനുമണ്‌ഡലം പൃഥിവ്‌യാം പ്‌രതിഷ്‌ഠാപ്‌യ യേന ഭഗവാംസ്‌തേനാഞ്‌ജലിം പ്‌രണാമ്‌യ ഭഗവന്‌തമേതദവോചത്‌-കേന കാരണേന ഭഗവന്‌ അവലോകിതേശ്‌വരോ ബോധിസത്‌ത്‌വോ മഹാസത്‌ത്‌വോഽവലോകിതേശ്‌വര ഇത്‌യുച്‌യതേ? </p>

</div>

  </q-page>
</template>

<script>
import Transliterate from '../../components/Transliterate.vue'
import ScriptTab from '../../components/ScriptTab.vue'

export default {
  name: 'PageIndex',
  components: {
    Transliterate,
    ScriptTab
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
      alphabetDev: [['क', 'ख', 'ग', 'घ', 'ङ'],
        ['च', 'छ', 'ज', 'झ', 'ञ'],
        ['ट', 'ठ', 'ड', 'ढ', 'ण'],
        ['त', 'थ', 'द', 'ध', 'न'],
        ['प', 'फ', 'ब', 'भ', 'म'],
        ['य', 'र', 'ल', 'व'],
        ['श', 'ष', 'स', 'ह'],
        ['ऴ', 'ळ', 'ऱ', 'ऩ'],
        ['क्ष', 'श्र', 'ऽ']
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
      vowDev: [
        ['अ', 'आ', 'इ', 'ई', 'उ', 'ऊ'],
        ['ऋ', 'ॠ', 'ऌ', 'ॡ'],
        ['ऎ', 'ए', 'ऐ', 'ऒ', 'ओ', 'औ'],
        ['अं', 'अः', 'अँ']
      ],
      convow1IAST: [
        ['ka', 'kā', 'ki', 'kī', 'ku', 'kū'],
        ['kṛ', 'kṝ', 'kḷ', 'kḹ'],
        ['kĕ', 'ke', 'kai', 'ko', 'kŏ', 'kau'],
        ['kaṃ', 'kaḥ', 'kam̐']
      ],
      convow1Dev: [
        ['क', 'का', 'कि', 'की', 'कु', 'कू'],
        ['कृ', 'कॄ', 'कॢ', 'कॣ'],
        ['कॆ', 'के', 'कै', 'को', 'कॊ', 'कौ'],
        ['कं', 'कः', 'कँ']
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
      convow2Dev: [
        ['ग्', 'गा', 'गि', 'गी', 'गु', 'गू'],
        ['गृ', 'गॄ', 'गॢ', 'गॣ'],
        ['गॆ', 'गे', 'गै', 'गॊ', 'गो', 'गौ'],
        ['गं', 'गः', 'गँ']
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
