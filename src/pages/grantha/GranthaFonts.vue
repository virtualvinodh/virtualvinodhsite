<template>
  <q-page padding>
    <q-breadcrumbs class="q-mb-md">
      <q-breadcrumbs-el label="Home" icon="home" to="/" />
      <q-breadcrumbs-el label="Writings" icon="create" to="/writings" />
      <q-breadcrumbs-el label="Grantha" to="/writings/grantha" />
      <q-breadcrumbs-el label="Fonts" />
    </q-breadcrumbs>
      <div class="q-ml-lg q-mr-xl">
    <p class="text-h5">Grantha Fonts</p>
    <p class="text-h6">Unicode Fonts</p>
    <p class="text-body2">There are four Unicode Grantha fonts as of now. They use the proper Unicode characters from the <a href="https://en.wikipedia.org/wiki/Grantha_(Unicode_block)" target="_blank">Grantha Unicode block</a> to encode the characters. The sample Unicode text below should be properly rendered as Grantha with any of the following fonts. For long term purposes, it is best advised to compose Grantha text with Unicode characters and render them with a Unicode font as well.</p>
    <p> You need Office 365/Windows 10 (or higher) to render Unicode grantha properly in a word processor. If you're using an older version of Windows/Office, please download and use the latest version of <a href="https://www.libreoffice.org/downloads/download/">Libreoffice</a> to appropriately render Grantha.
    <p>𑌅𑌨𑌿𑌰𑍋𑌧𑌮𑍍 𑌅𑌨𑍁𑌤𑍍𑌪𑌾𑌦𑌮𑍍 𑌅𑌨𑍁𑌚𑍍𑌛𑍇𑌦𑌮𑍍 𑌅𑌶𑌾𑌶𑍍𑌵𑌤𑌮𑍍 ।<br/>
𑌅𑌨𑍇𑌕𑌾𑌰𑍍𑌥𑌮𑍍 𑌅𑌨𑌾𑌨𑌾𑌰𑍍𑌥𑌮𑍍 𑌅𑌨𑌾𑌗𑌮𑌮𑍍 𑌅𑌨𑌿𑌰𑍍𑌗𑌮𑌮𑍍 ॥<br/>
𑌯𑌃 𑌪𑍍𑌰𑌤𑍀𑌤𑍍𑌯𑌸𑌮𑍁𑌤𑍍𑌪𑌾𑌦𑌂 𑌪𑍍𑌰𑌪𑌞𑍍𑌚𑍋𑌪𑌶𑌮𑌂 𑌶𑌿𑌵𑌮𑍍 ।<br/>
𑌦𑍇𑌶𑌯𑌾𑌮𑌾𑌸 𑌸𑌂𑌬𑍁𑌦𑍍𑌧𑌸𑍍𑌤𑌂 𑌵𑌨𑍍𑌦𑍇 𑌵𑌦𑌤𑌾𑌂 𑌵𑌰𑌮𑍍 ॥<br/> </p>
<p> <i>Also see <a href="https://www.virtualvinodh.com/writings/grantha/keyboards">Grantha Keyboards</a> </i></p>
    <p class="text-h6">Noto Sans Grantha</p>
    <p><a href="https://github.com/googlefonts/noto-fonts/tree/master/hinted/ttf/NotoSansGrantha" target="_blank">Download</a></p>
    <!-- <q-img src="../../assets/grantha/notosans-sample.png" width="400px" class="q-mb-md"/> -->
    <p class="grantha">𑌅𑌨𑌿𑌰𑍋𑌧𑌮𑍍 𑌅𑌨𑍁𑌤𑍍𑌪𑌾𑌦𑌮𑍍 𑌅𑌨𑍁𑌚𑍍𑌛𑍇𑌦𑌮𑍍 𑌅𑌶𑌾𑌶𑍍𑌵𑌤𑌮𑍍 ।<br/>
𑌅𑌨𑍇𑌕𑌾𑌰𑍍𑌥𑌮𑍍 𑌅𑌨𑌾𑌨𑌾𑌰𑍍𑌥𑌮𑍍 𑌅𑌨𑌾𑌗𑌮𑌮𑍍 𑌅𑌨𑌿𑌰𑍍𑌗𑌮𑌮𑍍 ॥<br/>
𑌯𑌃 𑌪𑍍𑌰𑌤𑍀𑌤𑍍𑌯𑌸𑌮𑍁𑌤𑍍𑌪𑌾𑌦𑌂 𑌪𑍍𑌰𑌪𑌞𑍍𑌚𑍋𑌪𑌶𑌮𑌂 𑌶𑌿𑌵𑌮𑍍 ।<br/>
𑌦𑍇𑌶𑌯𑌾𑌮𑌾𑌸 𑌸𑌂𑌬𑍁𑌦𑍍𑌧𑌸𑍍𑌤𑌂 𑌵𑌨𑍍𑌦𑍇 𑌵𑌦𑌤𑌾𑌂 𑌵𑌰𑌮𑍍 ॥<br/> </p>
    <p class="text-h6">Noto Serif Grantha</p>
    <p class="granthaserif">𑌅𑌨𑌿𑌰𑍋𑌧𑌮𑍍 𑌅𑌨𑍁𑌤𑍍𑌪𑌾𑌦𑌮𑍍 𑌅𑌨𑍁𑌚𑍍𑌛𑍇𑌦𑌮𑍍 𑌅𑌶𑌾𑌶𑍍𑌵𑌤𑌮𑍍 ।<br/>
𑌅𑌨𑍇𑌕𑌾𑌰𑍍𑌥𑌮𑍍 𑌅𑌨𑌾𑌨𑌾𑌰𑍍𑌥𑌮𑍍 𑌅𑌨𑌾𑌗𑌮𑌮𑍍 𑌅𑌨𑌿𑌰𑍍𑌗𑌮𑌮𑍍 ॥<br/>
𑌯𑌃 𑌪𑍍𑌰𑌤𑍀𑌤𑍍𑌯𑌸𑌮𑍁𑌤𑍍𑌪𑌾𑌦𑌂 𑌪𑍍𑌰𑌪𑌞𑍍𑌚𑍋𑌪𑌶𑌮𑌂 𑌶𑌿𑌵𑌮𑍍 ।<br/>
𑌦𑍇𑌶𑌯𑌾𑌮𑌾𑌸 𑌸𑌂𑌬𑍁𑌦𑍍𑌧𑌸𑍍𑌤𑌂 𑌵𑌨𑍍𑌦𑍇 𑌵𑌦𑌤𑌾𑌂 𑌵𑌰𑌮𑍍 ॥<br/> </p>
    <p><a href="https://github.com/googlefonts/noto-fonts/tree/master/hinted/ttf/NotoSerifGrantha" target="_blank">Download</a></p>
    <!-- <q-img src="../../assets/grantha/notoserif-sample.png" width="400px" class="q-mb-md"/> -->
    <p class="text-h6">Sampradaya</p>
    <p><a href="https://github.com/deepestblue/Sampradaya" target="_blank">Download</a></p>
    <p class="sampradaya">𑌅𑌨𑌿𑌰𑍋𑌧𑌮𑍍 𑌅𑌨𑍁𑌤𑍍𑌪𑌾𑌦𑌮𑍍 𑌅𑌨𑍁𑌚𑍍𑌛𑍇𑌦𑌮𑍍 𑌅𑌶𑌾𑌶𑍍𑌵𑌤𑌮𑍍 ।<br/>
𑌅𑌨𑍇𑌕𑌾𑌰𑍍𑌥𑌮𑍍 𑌅𑌨𑌾𑌨𑌾𑌰𑍍𑌥𑌮𑍍 𑌅𑌨𑌾𑌗𑌮𑌮𑍍 𑌅𑌨𑌿𑌰𑍍𑌗𑌮𑌮𑍍 ॥<br/>
𑌯𑌃 𑌪𑍍𑌰𑌤𑍀𑌤𑍍𑌯𑌸𑌮𑍁𑌤𑍍𑌪𑌾𑌦𑌂 𑌪𑍍𑌰𑌪𑌞𑍍𑌚𑍋𑌪𑌶𑌮𑌂 𑌶𑌿𑌵𑌮𑍍 ।<br/>
𑌦𑍇𑌶𑌯𑌾𑌮𑌾𑌸 𑌸𑌂𑌬𑍁𑌦𑍍𑌧𑌸𑍍𑌤𑌂 𑌵𑌨𑍍𑌦𑍇 𑌵𑌦𑌤𑌾𑌂 𑌵𑌰𑌮𑍍 ॥<br/> </p>
    <p class="text-h6">Kurukkal</p>
    <p><a href="https://github.com/deepestblue/lankapuri/releases/" target="_blank">Download</a></p>
    <p class="kurukkal">𑌅𑌨𑌿𑌰𑍋𑌧𑌮𑍍 𑌅𑌨𑍁𑌤𑍍𑌪𑌾𑌦𑌮𑍍 𑌅𑌨𑍁𑌚𑍍𑌛𑍇𑌦𑌮𑍍 𑌅𑌶𑌾𑌶𑍍𑌵𑌤𑌮𑍍 ।<br/>
𑌅𑌨𑍇𑌕𑌾𑌰𑍍𑌥𑌮𑍍 𑌅𑌨𑌾𑌨𑌾𑌰𑍍𑌥𑌮𑍍 𑌅𑌨𑌾𑌗𑌮𑌮𑍍 𑌅𑌨𑌿𑌰𑍍𑌗𑌮𑌮𑍍 ॥<br/>
𑌯𑌃 𑌪𑍍𑌰𑌤𑍀𑌤𑍍𑌯𑌸𑌮𑍁𑌤𑍍𑌪𑌾𑌦𑌂 𑌪𑍍𑌰𑌪𑌞𑍍𑌚𑍋𑌪𑌶𑌮𑌂 𑌶𑌿𑌵𑌮𑍍 ।<br/>
𑌦𑍇𑌶𑌯𑌾𑌮𑌾𑌸 𑌸𑌂𑌬𑍁𑌦𑍍𑌧𑌸𑍍𑌤𑌂 𑌵𑌨𑍍𑌦𑍇 𑌵𑌦𑌤𑌾𑌂 𑌵𑌰𑌮𑍍 ॥<br/> </p>
    <p class="text-h6">Kunchitapada</p>
    <p><a href="https://github.com/deepestblue/lankapuri/releases/" target="_blank">Download</a></p>
    <p class="kunchitapada">𑌅𑌨𑌿𑌰𑍋𑌧𑌮𑍍 𑌅𑌨𑍁𑌤𑍍𑌪𑌾𑌦𑌮𑍍 𑌅𑌨𑍁𑌚𑍍𑌛𑍇𑌦𑌮𑍍 𑌅𑌶𑌾𑌶𑍍𑌵𑌤𑌮𑍍 ।<br/>
𑌅𑌨𑍇𑌕𑌾𑌰𑍍𑌥𑌮𑍍 𑌅𑌨𑌾𑌨𑌾𑌰𑍍𑌥𑌮𑍍 𑌅𑌨𑌾𑌗𑌮𑌮𑍍 𑌅𑌨𑌿𑌰𑍍𑌗𑌮𑌮𑍍 ॥<br/>
𑌯𑌃 𑌪𑍍𑌰𑌤𑍀𑌤𑍍𑌯𑌸𑌮𑍁𑌤𑍍𑌪𑌾𑌦𑌂 𑌪𑍍𑌰𑌪𑌞𑍍𑌚𑍋𑌪𑌶𑌮𑌂 𑌶𑌿𑌵𑌮𑍍 ।<br/>
𑌦𑍇𑌶𑌯𑌾𑌮𑌾𑌸 𑌸𑌂𑌬𑍁𑌦𑍍𑌧𑌸𑍍𑌤𑌂 𑌵𑌨𑍍𑌦𑍇 𑌵𑌦𑌤𑌾𑌂 𑌵𑌰𑌮𑍍 ॥<br/> </p>
    <!-- <q-img src="../../assets/grantha/sampradaya-sample.png" width="400px" class="q-mb-md"/> -->
    <p class="text-h6">Paalai</p>
    <p><i>Not yet publicly available</i></p>
    <q-img src="../../assets/grantha/paalai-sample.png" width="400px" class="q-mb-md"/>
    <p class="text-h6">OS X Big Sur</p>
    <p>OS X also comes with Grantha support. The font Tamil Sangam MN currently also has support for Grantha. However, in the future version of OS X, it is possible that Grantha might get its own dedicated font as Grantha Sangam MN.</p>
    <q-img src="../../assets/grantha/grantha-osx.png" width="400px" class="q-mb-md"/>
    <p class="text-h6">Hack-encoded Unicode Fonts</p>
    <p>There are also Unicode fonts that borrow other code blocks to encode Grantha. </p>
    <p class="text-h6">e-Grantamil</p>
    <p>It is an opentype font, where Grantha is hack encoded in the Bengali unicode block. In the absence of the font, the text will rendered as Bengali.</p>
    <p><a href="https://virtualvinodh.com/downloads/e-Grantamil.ttf">Download</a></p>
    <p class="granthagrantamil egrant">
অনিরোধম্ অনুত্পাদম্ অনুচ্ছেদম্ অশাশ্ৱতম্ । <br/>
অনেকার্থম্ অনানার্থম্ অনাগমম্ অনির্গমম্ ॥ <br/>
যঃ প্রতীত্যসমুত্পাদং প্রপঞ্চোপশমং শিৱম্ । <br/>
দেশযামাস সংবুদ্ধস্তং ৱন্দে ৱদতাং ৱরম্ ॥
    </p>
    <!-- <q-img src="../../assets/grantha/egrantamil-sample.png" width="400px" class="q-mb-md"/> -->
    <p class="text-h6">e-Grantamil 7</p>
    <p>This font encodes Grantha as Malayalam characters. </p>
    <p><a href="/downloads/e-grantamil7.ttf">Download</a></p>
    <!-- <p class="egrantamil7">അനിരോധമ് അനുത്പാദമ് അനുച്ഛേദമ് അശാശ്വതമ് । <br/>
അനേകാര്ഥമ് അനാനാര്ഥമ് അനാഗമമ് അനിര്ഗമമ് ॥ <br/>
യഃ പ്രതീത്യസമുത്പാദം പ്രപഞ്ചോപശമം ശിവമ് । <br/>
ദേശയാമാസ സംബുദ്ധസ്തം വന്ദേ വദതാം വരമ് ॥ </p> -->
     <q-img src="../../assets/grantha/egrantamil7-sample.png" width="400px" class="q-mb-md"/>
    <p class="text-h6">Code2000</p>
    <p>Code2000 is a popular pan-Unicode font that supports nearly all of the Unicode script blocks. Grantha is encoded in the Private Usage Area (PUA) of the font.</p>
    <p><a href="https://fonts2u.com/code2000.font"  target="_blank">Download</a></p>
    <q-img src="../../assets/grantha/code2000-sample.jpg" width="370px" class="q-mb-md"/>
    <p class="text-h6">Extended ASCII Legacy Fonts</p>
    <p>These are legacy fonts that encode individual Grantha glyphs in the Extened ASCII range. This was a common practice among Indic scripts before Unicode became the norm.</p>
    <p class="text-h6">Ganapati</p>
    <p><a href="https://www.virtualvinodh.com/downloads/ganapathy.ttf">Download</a></p>
    <p class="ganapati">
qG]1l3g* qG6D«3F* qG61I‰F* qx3x²D* - <br/>
q1Gy3f9* qG3G3f9* qG3uk* qG]u9k* .<br/>
K, h\D[D8vk6D«3F; h\h1V3hxk; x]z* -<br/>
1FxK3k3v v;j6Xv¦; z1# zFD3; zl* .
    </p>
    <!-- <q-img src="../../assets/grantha/ganapati_sample.jpg" width="400px" class="q-mb-md"/> -->
    <!--<p class="text-h6">Kunchitapada</p>
    <p><a href="https://www.virtualvinodh.com/downloads/kunchitapada.ttf">Download</a></p>
    <p class="kunchitapada">
qG]1l3g* qG6D«3F* qG61I‰F* qx3x²D* - <br/>
q1Gy3f9* qG3G3f9* qG3uk* qG]u9k* .<br/>
K, h\D[D8vk6D«3F; h\h1V3hxk; x]z* -<br/>
1FxK3k3v v;j6Xv¦; z1# zFD3; zl* .
    </p>
    <q-img src="../../assets/grantha/kunchitapada_sample.jpg" width="400px" class="q-mb-md"/> -->
    <!--<p class="text-h6">Kurukkal</p>
    <p><a href="/downloads/kurukkal.ttf">Download</a></p>
    <p class="kurukkal">
qG]1l3g* qG6D«3F* qG61I‰F* qx3x²D* - <br/>
q1Gy3f9* qG3G3f9* qG3uk* qG]u9k* .<br/>
K, h\D[D8vk6D«3F; h\h1V3hxk; x]z* -<br/>
1FxK3k3v v;j6Xv¦; z1# zFD3; zl* .
    </p>
    <p> Ganapati, Kunchitapada and Kurukkal follow the same encoding. So, text encoded in any one of these fonts can be transformed to the other fonts easily.</p>
    <q-img src="../../assets/grantha/kurukkal-sample.png" width="400px" class="q-mb-md"/> -->
    <p class="text-h6">Arangan</p>
    <p><a href="/downloads/arangan.ttf">Download</a></p>
    <p class="arangan">
¡ã·Êêµâ° ¡ãÄßƔµá° ¡ãÄÊÕƆá° ¡íµíƝß° ɒ <br/>
¡ÊãÐµà÷° ¡ãµãµà÷° ¡ãµÒè° ¡ã·Ò÷è° ɒɒ<br/>
é± äƛß½ßƚïèÄßƔµá¯ äƛäÊŅµäíè¯ í·ì° ɒɒ<br/>
Êáíéµèµï ï¯æÄŋïƏ¯ ìÊō ìáßµ¯ ìê° ɒɒ
    </p>
    <!--<q-img src="../../assets/grantha/arangan-sample.png" width="400px" class="q-mb-md"/>-->
    <p class="text-h6">Sarma Grandam</p>
    <p><a href="/downloads/sarmagrandam.ttf">Download</a></p>
    <p class="sarma">Ag£©n¢e¯ Ag¥c¹¢e¯ Ag¥©UÕe¯ Aq¢qâc¯ ë<br/>
A©gP¢d¿¯ Ag¢g¢d¿¯ Ag¢Rl¯ Ag£R¿l¯ \<br/>
m° ¾hc¤c½sl¥c¹¢e® ¾hh©Ä¢hql® q£p¯ ë<br/>
©eqm¢l¢s s®j¥;sµ® p©À pec¢® pn¯ ì</p>
    <!--<q-img src="../../assets/grantha/sarmagrandam-sample.png" width="400px" class="q-mb-md"/> -->
    <p class="text-h6">(Microtype) Grantha</p>
    <p><a href="/downloads/microtypegrantha.TTF">Download</a></p>
<p class="microtype q-mt-lg">D]fsJeOÒ D]glµeoÒ D]gs;ÅoÒ DMeM½lÒ<br/>
Ds]keLÑÒ D]e]eLÑÒ D]eicÒ D]fiÑcÒ<br/>
/d hÕlrlÔmcglµeo" hÕhs~ehMc" MfbÒ<br/>
soM/ecem m"yg§m˚" bsõ bJÒ </p>
    <!-- <q-img src="../../assets/grantha/microtypegrantha-sample.png" width="400px" class="q-mb-md"/> -->
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
  }
}
</script>

<style scoped>
@font-face {
  font-family: 'microtype';
  src: url('../../assets/microtypegrantha.ttf')
}

@font-face {
  font-family: 'sarma';
  src: url('../../assets/sarmagrandam.ttf')
}

@font-face {
  font-family: 'arangan';
  src: url('../../assets/arangan.ttf')
}

@font-face {
  font-family: 'kunchitapada unicode';
  src: url('../../assets/kunchitapada_unicode.ttf')
}

@font-face {
  font-family: 'ganapati';
  src: url('../../assets/ganapathy.ttf')
}

@font-face {
  font-family: 'kurukkal unicode';
  src: url('../../assets/kurukkal_unicode.ttf')
}

@font-face {
  font-family: 'egrantamil7';
  src: url('../../assets/e-Grantamil7.ttf')
}

@font-face {
  font-family: 'sampradaya';
  src: url('../../assets/sampradaya.ttf')
}

.egrantamil7 {
  font-size: 18px;
  font-family: 'egrantamil7'
}

.sampradaya {
  font-size: 22px;
  font-family: 'sampradaya'
}

.egrant {
  font-size: 19px;
}

.microtype {
  font-family: 'microtype';
  font-size:20px;
}

.sarma {
  font-family: 'sarma';
  font-size:24px;
}

.arangan {
  font-family: 'arangan';
  font-size:19px;
}

.kurukkal {
  font-family: 'kurukkal unicode';
  font-size:19px;
}

.kunchitapada {
  font-family: 'kunchitapada unicode';
  font-size:19px;
}

.ganapati {
  font-family: 'ganapati';
  font-size:19px;
}

</style>
