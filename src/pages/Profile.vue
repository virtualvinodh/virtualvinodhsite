<template>
  <q-page padding>
  <p class="text-h4"> Profile </p>
        <p class="text-h5"> Professional Timeline </p>
        <div class="div1 desktop-only">
        <q-img
          src="../assets/pic_full_2024.jpg"
          width="250px"
          class="fixed-bottom-right"
          />
        </div>
        <div class="div2">
    <q-timeline color="secondary" layout="comfortable">

      <q-timeline-entry
        title="Senior Consultant"
        subtitle="October, 2020 - Current"
        icon="work"
      >
      <div>
      <i>Data Engineering, Cloud Architecture, <br/> Legacy System Modernization & Frontend Design & Development</i>
      </div><br/>
        <div>
          Clintworld GmbH, Hamburg, Germany
        </div>
      </q-timeline-entry>

      <q-timeline-entry
        title="Post-Doctoral Research Associate"
        subtitle="October, 2017 - September, 2020"
        icon="science"
      >
      <div>
      <i>UI/UX Design, No-Code Development & Image Processing</i>
      </div><br/>
        <div>
          Department of Informatics, <br/>
          University of Hamburg, Hamburg, Germany
        </div>
      </q-timeline-entry>

      <q-timeline-entry
        title="Associate Lecturer"
        subtitle="August, 2016 - November, 2017"
        icon="science"
      >
        <div>
          School of Computer Science <br/>
          University of St Andrews, St Andrews, Scotland
        </div>
      </q-timeline-entry>

      <q-timeline-entry
        title="PhD in Computer Science"
        subtitle="September, 2012 - July, 2016"
        icon="school"
      >
      <div>
      <i>Data Quantification, Data Analysis, Data Visualization & UI/UX Design</i>
      </div><br/>
        <div>
          School of Computer Science <br/>
          University of St Andrews, St Andrews, Scotland
        </div>
      </q-timeline-entry>

      <q-timeline-entry
        title="Software Engineer"
        subtitle="November, 2009 - August, 2012"
        icon="work"
      >
      <div>
      <i>Software Quality Assurance & .NET development</i>
      </div><br/>
        <div>
          Cognizant Technology Solutions, Chennai, India
        </div>
      </q-timeline-entry>

      <q-timeline-entry
        title="Bachelors in Information Technology"
        subtitle="July, 2005 - May, 2009"
        icon="school"
      >
        <div>
         Anna University, Chennai, India
        </div>
      </q-timeline-entry>

      <q-timeline-entry
        title="Bachelors in Chemical Engineering"
        subtitle="July, 2004 - May, 2008"
        icon="school"
      >
        <div>
         Anna University, Chennai, India
        </div>
      </q-timeline-entry>

      <q-timeline-entry
        title="High School"
        subtitle="June, 2003 - May, 2004"
        icon="school"
      >
        <div>
          Chennai, India
        </div>

      </q-timeline-entry>

      <q-timeline-entry
        title="Born"
        subtitle="February, 1987"
        icon="child_care"
      >
        <div>
          Chennai, India
        </div>
      </q-timeline-entry>
    </q-timeline>
    </div>
  <div class="div3">
  <p class="text-h5"> Media </p>
  <ol class="text-body1">
    <li><a href="https://blogs.bl.uk/digital-scholarship/2024/10/southeast-asian-language-and-script-conversion-using-aksharamukha.html" target="_blank">Southeast Asian Language and Script Conversion Using Aksharamukha </a> (October 2024)</li>
    <li><a href="https://www.youtube.com/watch?v=m9bRk1h9FLU&ab_channel=VinodhRajan">Interview Sun TV (India), KaniTamil 24</a> (February 2024)</li>
    <li><a href="/downloads/Maatrika-jan-23.pdf" target="_blank">The Story of Satisar Sharada</a> (January 2023)</li>
    <li><a target="_blank" href="https://southeastasianlibrarygroup.wordpress.com/2022/11/27/online-tools-for-southeast-asian-librarianship/">Online tools for Southeast Asian librarianship</a> (November 2022)</li>
    <li><a target="_blank" href="https://blogs.bl.uk/digital-scholarship/2022/08/burmese-script-conversion-using-aksharamukha.html">Burmese Script Conversion using Aksharamukha</a> (August 2022)</li>
    <li><a target="_blank" href="https://multilingual.com/issues/june-2022/switching-between-languages-hard-enough/">Switching between languages? Hard enough. : How about switching between scripts?</a> (June 2022)</li>
    <li><a target="_blank" href="https://restofworld.org/2021/tulu-unicode-script/">Forget emoji, the real Unicode drama is over an endangered Indian script</a> (August 2021)</li>
    <li> <a target="_blank" href="https://timesofindia.indiatimes.com/blogs/tracking-indian-communities/app-converts-tamil-script-into-its-ancient-versions/">Times of India (Chennai edition) article about Jinavani </a> (December 2019) </li>
    <li> <a target="_blank" href="https://timesofindia.indiatimes.com/city/chennai/meet-the-three-who-developed-unicode-font-for-tamil-brahmi/articleshow/70048263.cms">Times of India (Chennai edition) article about Adinthatha Tamil-Brahmi font</a> (July 2019)</li>
    <li> <a target="_blank" href="https://blogs.cs.st-andrews.ac.uk/csblog/2019/03/06/lao-characters-for-pali-added-to-unicode-12/">Univ. of St Andrews post about Lao Pali letters</a> (March 2019)</li>
    <li><a target="_blank" href="https://virtualvinodh.com/downloads/Times%20Of%20India%20_Interview_Aug_19th_2012.jpg">Interview in Times of India (Mangalore Edition) about Konkanverter</a> (August 2012)</li>
    <li><a target="_blank" href="https://virtualvinodh.com/downloads/Thendran_Interview_-_Vinodh_Rajan_-_Novemeber_2011.pdf">Interview in a US-based Tamil magazine Thendral about Avalokitam</a> (November 2011)</li>
  </ol>
  </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex'
}
</script>

<style scoped>
.profilepic {
  transition: 1s;
}
.profilepic:hover {
  filter: hue-rotate(-45deg);
}
.hue {
  animation: hue 120s infinite;
  opacity: 0.8
}
.trans {
  filter: grayscale(50%);
  opacity: 0.8
}
@keyframes hue {
  0%, 100%  { filter: hue-rotate(0deg); }
  50% { filter: hue-rotate(360deg); }
}
.div1 {
  text-align: center;
  float:left;
}
.div2 {
  float:left
}
.div3 {
  display: inline-block;
}
</style>
