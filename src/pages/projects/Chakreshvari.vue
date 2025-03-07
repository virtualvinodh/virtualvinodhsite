<template>
  <q-page padding>
    <q-breadcrumbs class="q-mb-md">
      <q-breadcrumbs-el label="Home" icon="home" to="/" />
      <q-breadcrumbs-el label="Projects" icon="create" to="/projects" />
      <q-breadcrumbs-el label="Chakreshvari: A Tamil-based phonetic font" />

    </q-breadcrumbs>
    <div class="q-ml-lg q-mr-xl">
    <p class="text-h5">Chakreshvari: A Tamil-esque Phonetic Font</p>
    <p class="text-h5">t͡ʃəkɾeʃʋəɾɪ: ɐ tamɪlɛsk fənɛtɪk fɒnt</p>

    <p class="text-h5 chakreshvari">சͨͪக்ᷜரேஶ்வரி: அᷔ டாͭͪͣமிலெஸ்க்ᷜ பᷫனெடிͭͪக்ᷜ பாᷫᷲன்ட்ͭͪ</p>

    <p class="text-body2">
      Scripts like Latin and Cyrillic have been historically extended to denote a wide range of phonemes across several languages. In fact, the International Phonetic Alphabet (IPA) is the culmination of extending the Latin alphabet to universally transcribe the pronunciation of any given language (more or less) unambigously. </p>

      <p class="text-body2"><i>(English) All human beings are born free and equal in dignity and rights.</i></p>
      <p class="text-body2"><i>(UK Proununciation) ɔːl hjuːmən biːɪŋz ɑː bɔːn fɹiː and iːkwəl ɪn dɪɡnɪti and ɹaɪts</i></p>

    <p class="text-body2">
      Many North Indic scripts, and even South Indic scripts like Kannada and Telugu, have adopted the Nukta (a diacritic dot) to represent non-native phonemes such as /f/ and /z/. However, Tamil has remained staunchly phonemic, having largely rejected voiced and aspirated characters since its adaptation of Brahmi.
       The most common problem with using native Tamil transcription is that the script does not differentiate voiced and unvoiced phonemes, resulting in occurances such as both /crate/ and /great/ being rendered as /க்ரேட்/. This is also true for vowels such /æ/ and /ɔ/, which get approximated to the closest native phonemes /eː/ and /ɑː/.</p>
    <p class="text-body2">With English emerging as the de facto global language, and as people migrate to different countries and learn new languages, theres is a need for a Tamil-esque phonetic alphabet for native Tamil speakers. Such a system would enable faithful transcription in a Tamil-like alphabet for pedagogical purposes, helping learners achieve accurate pronunciation. This is particularly relevant for dictionaries, where the pronunication can be indicated next to its meaning. <i>Chakreshvari</i> is a font that enables such a Tamil-esque phonetic alphabet and helps with the precise transcription of words to visibly indicate the difference in the source pronunciation.</p>
    <ul>
    <li>crate - <span class="chakreshvari"> க்ᷜரேட்ͭ </span>- கூண்டு, பிரப்பங்கூடை</li>
    <li>great - <span class="chakreshvari">க்ᷚரேட்ͭ </span> - மிகப் பெரிய, தலை சிறந்த</li>
    <li>cat - <span class="chakreshvari">கேᷜͣட்ͭ </span> - பூனை.</li>
    <li>gate - <span class="chakreshvari">கேᷚட்ͭ </span> - வாயில், நுழைவாசல்.</li>
    </ul>

    <p class="text-h5">Design</p>
    <p class="text-body2">As a phonetic extension of Tamil characters, the design of the new characters needed to adhere to the following criteria:
      <ul>
        <li>The characters should be both familiar and distinct</li>
        <li>Any one not familiar with the characters should be able to read them using the closest native pronunciation</li>
        <li>The characters should have a clear visual ductus</li>
      </ul>
    </p>
    <p class="text-body2">For the basic extensions (e.g. voiced/unvoiced distinction), the characters were created by simply seamlessly fusing Latin and Tamil characters - கk → <span class="chakreshvari"> கᷜ & கg → கᷚ</span>. Other characters were created through stroke reduction - <span class="chakreshvari">கͯ  கᷛ றͪ  ரᷣ </span>. When strokes couldn't be reduced, they were instead augmented  to create variants - <span class="chakreshvari">டͭͪ  டᷙ</span>. For the vowel signs, the idea was to naturally extend them from the closest native phonemes  either stroke reduction <span class="chakreshvari">(e.g. ஈ̆ கிᷜ̆  ஏͣ கேᷜͣ)</span> or  stroke augmentation <span class="chakreshvari">(e.g. எͤ கெᷜͤ அͣ காᷜͣ)</span>, similar to the consonants. The longer vowels were also designed to be natural variants of the shorter vowels using stroke elongations just like Tamil <span class="chakreshvari">(எͤ கெᷜͤ ஏͤ கேᷜͤ)</span>.
    </p>
    <q-img src="../../assets/chakreshvari-design-consonants.png" width="200px" class="q-ma-sm"/>
    <q-img src="../../assets/chakreshvari-design-vowels.png" width="320px" class="q-ma-sm"/>
<br/><br/>
<p class="text-h5">Phonemes</p>
<p class="text-body2">A smaller subset of the IPA, enough to cover the broad trancriptions of major European languages, is supported in the initial version.</p>
<table border="1" class="chakreshvari text-h6">
    <tr>
        <th>IPA</th>
        <th>k</th>
        <th>kʰ</th>
        <th>ɡ</th>
        <th>t͡ʃ</th>
        <th>ʈ</th>
        <th>ɖ</th>
        <th>t</th>
        <th>tʰ</th>
        <th>d</th>
        <th>t̪</th>
        <th>d̪</th>
        <th>p</th>
        <th>pʰ</th>
        <th>b</th>
    </tr>
    <tr>
        <th>Tamil</th>
        <td>கᷜ</td>
        <td>ஹᷜ</td>
        <td>கᷚ</td>
        <td>சͨͪ</td>
        <td>டͭ</td>
        <td>டͩ</td>
        <td>டͭͪ</td>
        <td>ஹͭͪ</td>
        <td>டᷙ</td>
        <td>தͭ</td>
        <td>தͩ</td>
        <td>பᷮ</td>
        <td>ஹᷮ</td>
        <td>பᷨ</td>
    </tr>
</table>
<br/>
<table border="1" class="chakreshvari text-h6">
    <tr>
        <th>IPA</th>
        <th>z</th>
        <th>f</th>
        <th>θ</th>
        <th>ð</th>
        <th>w</th>
        <th>v</th>
        <th>β</th>
        <th>ʎ</th>
        <th>ʝ</th>
        <th>ɹ</th>
        <th>ʁ</th>
        <th>ʒ</th>
        <th>ç</th>
        <th>h</th>
        <th>x</th>
        <th>ɣ</th>
    </tr>
    <tr>
        <th>Tamil</th>
        <td>ஜᷦ</td>
        <td>பᷫ</td>
        <td>தͭͪ</td>
        <td>தᷙ</td>
        <td>வᷱ</td>
        <td>வᷫ</td>
        <td>வᷨ</td>
        <td>ஜᷚ</td>
        <td>ஜᷛ</td>
        <td>ரᷣ</td>
        <td>றͪ</td>
        <td>ஷᷦ</td>
        <td>ஷͪ</td>
        <td>ஹͯ</td>
        <td>கͯ</td>
        <td>கᷛ</td>
    </tr>
</table>
<br/>
<table border="1" class="chakreshvari text-h6">
    <tr>
        <th>IPA</th>
        <th>æ</th>
        <th>ɔ</th>
        <th>ɔː</th>
        <th>ɒ</th>
        <th>ʌ</th>
        <th>ɚ</th>
        <th>ɐ</th>
        <th>ɑ</th>
        <th>a</th>
        <th>aː</th>
        <th>i</th>
    </tr>
    <tr>
        <th>Tamil</th>
        <td>ஏͣ கேᷜͣ</td>
        <td>அͦ காᷜͦ</td>
        <td>ஆᷭ காᷜᷭ</td>
        <td>அᷲ காᷜᷲ</td>
        <td>அ̼ க̼ᷜ</td>
        <td>அழ்ᷣ கழ்ᷣᷜ</td>
        <td>அᷔ காᷜᷔ</td>
        <td>ஆᷧ காᷜᷧ</td>
        <td>அͣ காᷜͣ</td>
        <td>அͣ̄ காᷜͣ̄</td>
        <td>ஈ̆ கிᷜ̆</td>
    </tr>
</table>

<br/>

<table border="1" class="chakreshvari text-h6">
    <tr>
        <th>IPA</th>
        <th>ᵻ</th>
        <th>u</th>
        <th>y</th>
        <th>yː</th>
        <th>ɛː</th>
        <th>e</th>
        <th>ɜ</th>
        <th>ɜː</th>
        <th>ø</th>
        <th>øː</th>
        <th>œ</th>
    </tr>
    <tr>
        <th>Tamil</th>
        <td>உ் கு்ᷜ</td>
        <td>ஊ̆ கூᷜ̆</td>
        <td>உ̭ கு̭ᷜ</td>
        <td>ஊ̭ கூ̭ᷜ</td>
        <td>எ̄ கெᷜ̄</td>
        <td>ஏ̆ கேᷜ̆</td>
        <td>எͤ கெᷜͤ</td>
        <td>ஏͤ கேᷜͤ</td>
        <td>ஒͤ கொᷜͤ</td>
        <td>ஓͤ கோᷜͤ</td>
        <td>ஒᷳ கொᷜᷳ</td>
    </tr>
</table>
<br/><br/>
<p class="text-h5">Unicode Encoding</p>
<p class="text-body2">The phonetic extensions have been hack-encoded using combining characters. The appropriate phonetic glyphs are then substituted using a stylistic set (ss01). For instance: <span  class="chakreshvari1" :style="{'font-size': '150%'}">கᷜ  கᷚ பᷮ  பᷨ டͭ டͩ ஜᷦ ஷᷦ ஏͣ லேͣ அͦ லாͦ </span> is rendered as <span class="chakreshvari" :style="{'font-size': '150%'}">கᷜ  கᷚ பᷮ  பᷨ டͭ டͩ ஜᷦ ஷᷦ ஏͣ லேͣ அͦ லாͦ </span> after the applicaiton of the stylistic set. The hack-encoding doesn't unforunately work in Microsoft products and needs HarfBuzz-based applications for proper display. Therefore, in the absence of a proper support, the font is designed to have a graceful fallback with familiar characters - <span class="chakreshvari" :style="{'font-size': '120%'}">பீᷮபᷮல்ஜ்ᷦ</span> vs <span class="chakreshvari1"  :style="{'font-size': '120%'}">பீᷮபᷮல்ஜ்ᷦ</span>.</p>

<p class="text-h5">Download</p>
<p class="text-body2">You can download the font <i>Chakreshvari Tamil Phonetic</i> from <a href="https://github.com/virtualvinodh/chakreshvari-tamil-phonetic/raw/refs/heads/main/Chakreshvari-Tamil-Phonetic.otf">here</a>. </p>

<p class="text-h5">Input</p>
<p class="text-body2">The font was primarily created for the online tool <a href="https://uchcharaka.aksharamukha.com" target="_blank">Uchcharaka</a> to enable IPA-esque transcription of texts in the Tamil script. You can convert IPA text directly to Tamil Phonetic there.</p>
<p class="text-h5">English (UK) Transcription</p>
<p class="text-body2">English is a West Germanic language in the Indo-European language family, whose speakers, called Anglophones, originated in early medieval England on the island of Great Britain. The namesake of the language is the Angles, one of the Germanic peoples that migrated to Britain after its Roman occupiers left. English is the most spoken language in the world, primarily due to the global influences of the former British Empire (succeeded by the Commonwealth of Nations) and the United States. English is the third-most spoken native language, after Mandarin Chinese and Spanish; it is also the most widely learned second language in the world, with more second-language speakers than native speakers.</p>
<p class="text-body2">ɪŋɡlɪʃ ɪz ɐ wɛst dʒɜːmanɪk laŋɡwɪdʒ ɪnðɪ ɪndəʊjʊəɹəpiən laŋɡwɪdʒ famɪli
huːz spiːkəz
kɔːld aŋɡləfəʊnz
əɹɪdʒɪneɪtɪd ɪn ɜːlɪ mɛdɪiːvəl ɪŋɡlənd ɒnðɪ aɪlənd ɒv ɡɹeɪt bɹɪtən
ðə neɪmseɪk ɒvðə laŋɡwɪdʒ ɪz ðɪ aŋɡəlz
wɒn ɒvðə dʒɜːmanɪk piːpəlz ðat maɪɡɹeɪtɪd tə bɹɪtən aftəɹ ɪts ɹəʊmən ɒkjuːpaɪəz lɛft
ɪŋɡlɪʃ ɪz ðə məʊst spəʊkən laŋɡwɪdʒ ɪnðə wɜːld
pɹaɪmɛɹɪli djuː tə ðə ɡləʊbəl ɪnfluːənsɪz ɒvðə fɔːmə bɹɪtɪʃ ɛmpaɪə səksiːdɪd baɪ ðə kɒmənwɛlθ ɒv neɪʃənz and ðə juːnaɪtɪd steɪts
ɪŋɡlɪʃ ɪz ðə θɜːdməʊst spəʊkən neɪtɪv laŋɡwɪdʒ
aftə mandəɹɪn tʃaɪniːz and spanɪʃ
ɪt ɪz ɔːlsəʊ ðə məʊst waɪdli lɜːnd sɛkənd laŋɡwɪdʒ ɪnðə wɜːld
wɪð mɔː sɛkəndlaŋɡwɪdʒ spiːkəz ðɐn neɪtɪv spiːkəz</p>
<p class="text-body2 chakreshvari" :style="{'font-size':'115%'}">இங்க்ᷚலிஶ் இஜ்ᷦ அᷔ வெᷱஸ்ட்ͭͪ ஜேͤமாͣனிக்ᷜ லாͣங்க்ᷚவிᷱஜ் இன்திᷙ இன்டᷙ͡உயுஅரᷣபிᷮ̆அன் லாͣங்க்ᷚவிᷱஜ் பாᷫͣமிலி̆
ஹூͯஜ்ᷦ ஸ்பீᷮகᷜஜ்ᷦ
காᷜᷭல்ட்ᷙ அͣங்க்ᷚலபᷫ͡உன்ஜ்ᷦ
அரிᷣஜினே̆͡இடிͭͪட்ᷙ இன் ஏͤலி மெடிᷙஈவᷫல் இங்க்ᷚலன்ட்ᷙ அᷲன்திᷙ அͣ͡இலன்ட்ᷙ அᷲவ்ᷫ க்ᷚரேᷣ̆͡இட்ͭͪ ப்ᷨரிᷣடͭͪன்
தᷙ நே̆͡இம்ஸே̆͡இக்ᷜ அᷲவ்ᷫதᷙ லாͣங்க்ᷚவிᷱஜ் இஜ்ᷦ திᷙ அͣங்கᷚல்ஜ்ᷦ
வாᷱᷲன் அᷲவ்ᷫதᷙ ஜேͤமாͣனிக்ᷜ பீᷮபᷮல்ஜ்ᷦ தாᷙͣட்ͭͪ மாͣ͡இக்ᷚரேᷣ̆͡இடிͭͪட்ᷙ டͭͪ ப்ᷨரிᷣடͭͪன் அͣப்ᷫடͭͪர்ᷣ இட்ͭͪஸ் ரᷣ͡உமன் அᷲக்ᷜயூபாᷮͣ͡இஅஜ்ᷦ லெப்ᷫட்ͭͪ
இங்க்ᷚலிஶ் இஜ்ᷦ தᷙ ம͡உஸ்ட்ͭͪ ஸ்பᷮ͡உகᷜன் லாͣங்க்ᷚவிᷱஜ் இன்தᷙ வேᷱͤல்ட்ᷙ
ப்ᷮராᷣͣ͡இமெரிᷣலி̆ ட்ᷙயூ டͭͪ தᷙ க்ᷚல͡உபᷨல் இன்ப்ᷫலூஅன்ஸிஜ்ᷦ அᷲவ்ᷫதᷙ பாᷫᷭம ப்ᷨரிᷣடிͭͪஶ் எம்பாᷮͣ͡இஅ ஸக்ᷜஸீடிᷙட்ᷙ பாᷨͣ͡இ தᷙ காᷜᷲமன்வெᷱல்த்ͭͪ அᷲவ்ᷫ நே̆͡இஶன்ஜ்ᷦ அͣன்ட்ᷙ தᷙ யூனாͣ͡இடிͭͪட்ᷙ ஸ்டேͭͪ̆͡இட்ͭͪஸ்
இங்க்ᷚலிஶ் இஜ்ᷦ தᷙ தேͭͪͤட்ᷙம͡உஸ்ட்ͭͪ ஸ்பᷮ͡உகᷜன் நே̆͡இடிͭͪவ்ᷫ லாͣங்க்ᷚவிᷱஜ்
அͣப்ᷫடͭͪ மாͣன்டᷙரிᷣன் சாͨͪͣ͡இனீஜ்ᷦ அͣன்ட்ᷙ ஸ்பாᷮͣனிஶ்
இட்ͭͪ இஜ்ᷦ ஆᷭல்ஸ͡உ தᷙ ம͡உஸ்ட்ͭͪ வாᷱͣ͡இட்ᷙலி̆ லேͤன்ட்ᷙ ஸெகᷜன்ட்ᷙ லாͣங்க்ᷚவிᷱஜ் இன்தᷙ வேᷱͤல்ட்ᷙ
விᷱத்ᷙ மாᷭ ஸெகᷜன்ட்ᷙலாͣங்க்ᷚவிᷱஜ் ஸ்பீᷮகᷜஜ்ᷦ தாᷙᷔன் நே̆͡இடிͭͪவ்ᷫ ஸ்பீᷮகᷜஜ்ᷦ</p>
<p class="text-h5">Spanish (Spain) Transcription</p>
<p class="text-body2 ">El español o castellano es una lengua romance procedente del latín hablado, perteneciente a la familia de lenguas indoeuropeas. Forma parte del grupo ibérico y es originaria de Castilla, reino medieval de la península ibérica. Actualmente, hay más de 600 millones de personas que hablan español, de las cuales casi 500 millones son hablantes nativos, que se suman a quienes tienen competencia limitada (cerca de 78 millones) y los estudiantes (más de 24 millones). Es el idioma más estudiado en todos los niveles de enseñanza de Estados Unidos y la segunda lengua más estudiada en la educación secundaria superior de la Unión Europea. El español es la cuarta lengua más estudiada del mundo con 24 millones de alumnos.</p>
<p class="text-body2">el espaɲol o kast̪eʎano es una lɛŋɡwa ɾɾomanθe pɾoθeðɛnt̪e ðel lat̪in aβlaðo
peɾt̪eneθjɛnt̪e a la familja ðe lɛŋɡwas ind̪oeʊɾopeas
foɾma paɾt̪e ðel ɣɾupo iβeɾiko i es oɾixinaɾja ðe kast̪iʎa
ɾɾeɪno meðjeβal ðe la peninsula iβeɾika
akt̪walment̪e
aɪ mas ðe seɪsθjent̪os miʎones ðe peɾsonas ke aβlan espaɲol
d̪e las kwales kasi kinjɛnt̪os miʎones son aβlant̪es nat̪iβos
ke se suman a kjenes t̪jenen kompet̪ɛnθja limit̪aða θeɾka ðe sɛt̪ɛnt̪aiotʃo miʎones i los est̪uðjant̪es mas ðe βeɪnt̪ikwat̪ɾo miʎones
es el iðjoma mas est̪uðjaðo en t̪oðos los niβeles ðe enseɲanθa ðe est̪aðos uniðos i la seɣund̪a lɛŋɡwa mas est̪uðjaða en la eðukaθjon sekund̪aɾja supeɾjoɾ ðe la unjon eʊɾopea
</p>
<p class="text-body2 chakreshvari" :style="{'font-size':'115%'}">ஏ̆ல் ஏ̆ஸ்பாᷮͣஞொல் ஒ காᷜͣஸ்தேͭ̆ஜாᷚͣனொ ஏ̆ஸ் ஊ̆னாͣ லெங்க்ᷚவாᷱͣ ர்ரொமாͣந்தேͭͪ̆ ப்ᷮரொதேͭͪ̆தெᷙந்தேͭ̆ தேᷙ̆ல் லாͣதிͭ̆ன் அͣவ்ᷨலாͣதொᷙ
பேᷮ̆ர்தேͭ̆னே̆த்ͭͪயெந்தேͭ̆ அͣ லாͣ பாᷫͣமி̆ல்யாͣ தேᷙ̆ லெங்க்ᷚவாᷱͣஸ் ஈ̆ன்தொͩஏ̆உரொபேᷮ̆அͣஸ்
பொᷫர்மாͣ பாᷮͣர்தேͭ̆ தேᷙ̆ல் க்ᷛரூ̆பொᷮ ஈ̆வேᷨ̆ரி̆கொᷜ ஈ̆ ஏ̆ஸ் ஒரி̆கிͯ̆னாͣர்யாͣ தேᷙ̆ காᷜͣஸ்திͭ̆ஜாᷚͣ
ர்ரே̆͡இனொ மே̆த்ᷙயே̆வாᷨͣல் தேᷙ̆ லாͣ பேᷮ̆னி̆ன்ஸூ̆லாͣ ஈ̆வேᷨ̆ரி̆காᷜͣ
அͣக்ᷜத்ͭவாᷱͣல்மே̆ந்தேͭ̆
அͣ͡இ மாͣஸ் தேᷙ̆ ஸே̆͡இஸ்த்ͭͪயே̆ந்தொͭஸ் மி̆ஜொᷚனே̆ஸ் தேᷙ̆ பேᷮ̆ர்ஸொனாͣஸ் கேᷜ̆ அͣவ்ᷨலாͣன் ஏ̆ஸ்பாᷮͣஞொல்
தேͩ̆ லாͣஸ் க்ᷜவாᷱͣலே̆ஸ் காᷜͣஸி̆ கிᷜ̆ன்யெந்தொͭஸ் மி̆ஜொᷚனே̆ஸ் ஸொன் அͣவ்ᷨலாͣந்தேͭ̆ஸ் நாͣதிͭ̆வொᷨஸ்
கேᷜ̆ ஸே̆ ஸூ̆மாͣன் அͣ க்ᷜயே̆னே̆ஸ் த்ͭயே̆னே̆ன் கொᷜம்பேᷮ̆தெͭந்த்ͭͪயாͣ லி̆மி̆தாͭͣதாᷙͣ தேͭͪ̆ர்காᷜͣ தேᷙ̆ ஸெதெͭந்தாͭͣஈ̆ஒசொͨͪ மி̆ஜொᷚனே̆ஸ் ஈ̆ லொஸ் ஏ̆ஸ்தூͭ̆த்ᷙயாͣந்தேͭ̆ஸ் மாͣஸ் தேᷙ̆ வேᷨ̆͡இந்திͭ̆க்ᷜவாᷱͣத்ͭரொ மி̆ஜொᷚனே̆ஸ்
ஏ̆ஸ் ஏ̆ல் ஈ̆த்ᷙயொமாͣ மாͣஸ் ஏ̆ஸ்தூͭ̆த்ᷙயாͣதொᷙ ஏ̆ன் தொͭதொᷙஸ் லொஸ் நி̆வேᷨ̆லே̆ஸ் தேᷙ̆ ஏ̆ன்ஸே̆ஞாͣந்தாͭͪͣ தேᷙ̆ ஏ̆ஸ்தாͭͣதொᷙஸ் ஊ̆னி̆தொᷙஸ் ஈ̆ லாͣ ஸே̆கூᷛ̆ன்தாͩͣ லெங்க்ᷚவாᷱͣ மாͣஸ் ஏ̆ஸ்தூͭ̆த்ᷙயாͣதாᷙͣ ஏ̆ன் லாͣ ஏ̆தூᷙ̆காᷜͣத்ͭͪயொன் ஸே̆கூᷜ̆ன்தாͩͣர்யாͣ ஸூ̆பேᷮ̆ர்யொர் தேᷙ̆ லாͣ ஊ̆ன்யொன் ஏ̆உரொபேᷮ̆அͣ</p>
<p class="text-h5">Text Editors</p>
<p class="text-body2">The font will not work correctly in Microsoft Word and requires LibreOffice. During font selection, the font must be selected as "Chakreshvari Tamil Phonetic:ss01" as shown below to activate the stylistic set feature ss01:</p>
<q-img src="../../assets/chakreshvari-libreoffice.png" width="800px" class="q-ma-sm"/>
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
    }
  },
  methods: {
  }
}
</script>

<style scoped>
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
