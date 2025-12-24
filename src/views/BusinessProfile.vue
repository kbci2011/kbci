


<template>
  
    <header >
      <div class="container">
        <div class="navbar">
          <router-link to="/MainHome">Home</router-link>
          <router-link to="/IntroduceCompany">회사소개</router-link>
          <router-link to="/BusinessProfile">주요사업</router-link>
          <router-link to="/#">News</router-link>
          <a href="#contact">Contact</a>
        </div>
        
      </div>
     
      <div class="header-content">
          <img src="../assets/images/대문3.jpg" alt="대문" id="headImg">
          <div class="welcome-message">
             Korea Biological Conservation Institute KBCI Inc.
          </div>
        </div>
        
        <a href="/" class="logo">
          <img src="../assets/images/logo.png" alt="로고">
        </a>
   
    </header>
   
    <AppNavbar :class="{ 'fixed-navbar': isScrolled }" />


    <br>
    <br>
  
    <body>

      <div id="mainBody" >
 <!-- 사업소개 섹션 -->
 <section id="business-intro" style="border-radius: 25px; margin-top: 20px;">


  <!-- 1덩이 -->
    <div class="container">
      <section id="seed"></section>
      <num class="numbered-title">•</num> &nbsp;&nbsp;<num style="font-size:30px;">Our Business</num> &nbsp;&nbsp;<num class="numbered-title">•</num><br><br><br><br><br><br>
      <div class="business-content">
        <div class="business-item">
          
          <!-- 슬라이드쇼 -->
          <div class="slideshow-container" style="width:380px ;">
    <div v-for="(imageGroup, index) in imageGroups" :key="index" v-show="index === currentSlide" class="w3-animate-opacity">
      <div class="image-group">
        <img v-for="(image, i) in imageGroup" :key="i" :src="image" class="slide-image" >
      </div>
    </div>
    <a class="prev" @click="prevSlide">&#10094;</a>
    <a class="next" @click="nextSlide">&#10095;</a>
  </div>
         <!-- 슬라이드끝 -->

        </div>
     
        <div class="business-item" tyle="width:350px;">
         
          <!-- <img src="../assets/images/business2.jpg" alt="Business 2" /> -->
          <num class="numbered-title" style="margin-left:30px;">01</num> <h4 style="width:350px;" >토속•멸종위기 어류 
             종자생산/양식</h4> 
          <p style="width:350px; font-size:small; text-align:left;">   저희 한국생물보전연구소는 자연 생태계의 건강과 생물 다양성을 유지, 토착 및 멸종위기에 처한 어류의 보전을 위해 종자 생산과 양식에 주력하고 있습니다. 
    저희는 과학적 연구와 현장 경험을 바탕으로 어종의 번식과 성장을 지원하는 최적의 환경을 조성함으로써, 
    지속 가능한 어류 자원의 관리 및 복원을 추진하고 있습니다. 
    이를 통해 생물자원의 안정적인 공급원을 확보하고, 
    생태계의 안정성을 높이기 위해 노력하고 있습니다.</p>
        </div>
        <!-- ... more business items -->
        </div>
      <adj>  관련 사업 </adj><br>
      <adj> - 4대강 수계 멸종위기어류 증식 및 복원(국토해양부)</adj><br>
      <adj> - 멸종위기 담수어류(퉁사리 등 4종) 증식복원 연구(환경부)</adj><br>
      <adj> - 우량품종 관상생물 대량생산시스템개발연구(국립수산과학원) </adj>
      <br><br>
    </div>
    <!-- 1덩이 끝 -->
    <br>
      <!-- 2덩이 -->
      <div class="container">
        <section id="oda"></section>
      <num class="numbered-title">•</num> &nbsp;&nbsp;<num style="font-size:30px;"></num> &nbsp;&nbsp;<num class="numbered-title">•</num><br><br><br><br><br><br>
      <div class="business-content">
        <div class="business-item">
          <!-- 슬라이드쇼 -->
          <div class="slideshow-container" style="width:380px ;">
    <div v-for="(imageGroup2, index) in imageGroups2" :key="index" v-show="index === currentSlide2" class="w3-animate-opacity">
      <div class="image-group">
        <img v-for="(image, i) in imageGroup2" :key="i" :src="image" class="slide-image" >
      </div>
    </div>
    <a class="prev" @click="prevSlide2">&#10094;</a>
    <a class="next" @click="nextSlide2">&#10095;</a>
  </div>
         <!-- 슬라이드끝 -->

        </div>
        <div class="business-item" tyle="width:350px;">
          <!-- <img src="../assets/images/business2.jpg" alt="Business 2" /> -->
          <num class="numbered-title"  style="margin-left:30px;">02</num> <h4 style="width:350px;">ODA(공적개발원조) 사업</h4>
          <p style="width:350px; font-size:small;  text-align:left">  
    ODA 사업은 개발도상국의 지속 가능한 발전을 촉진하고, 빈곤을 감소시키기 위한
    국제적인 사업입니다. 한국생물보전연구소는 생물 다양성 보전, 환경 관리, 지속 가능한 자원 사용을
    촉진하고, 교육 및 기술 개발을 통해 국제 사회에 긍정적인 변화를 가져오고자 노력하고 있습니다.
    지구촌 공동체의 일원으로서 책임을 다하고, 더 나은 미래를 위해 국경을 넘는 협력의
    중요성을 인식하여, 우리의 사업은 SDGs 달성을 향한 국제적인 약속을 지원하며,
    파트너 국가들과의 강력한 유대를 구축하는 데 기여하고 있습니다.</p>
        </div>
        <!-- ... more business items -->
      </div>
      <adj>  관련 사업 </adj><br>
      <adj> - 미얀마 내수면 수산양식 기반조성사업 기자재 공급(코이카)</adj><br>
      <adj> - 미얀마 내수면 수산양식 기반조성사업 현지연수(코이카)</adj><br>
      <adj> - 미얀마 구제역 방지시스템 개선사업 사후지원 기자재 공급(코이카)</adj><br>
      <adj> - 탄자니아 잔지바르 양식개발 사후지원사업 기자재 공급(코이카)</adj><br>
      <adj> - 필리핀 기마라스주 수산양식 역량강화를 통한 양식어민 소득증대 지원사업 PMC 용역(코이카) 2024~ing</adj><br>
      <br><br>
    </div>
    <!-- 2덩이 끝 -->


        <!-- 3덩이 -->
        <div class="container">
          <section id="rnd"></section>
      <num class="numbered-title">•</num> &nbsp;&nbsp;<num style="font-size:30px;"></num> &nbsp;&nbsp;<num class="numbered-title">•</num><br><br><br><br><br><br>
      <div class="business-content">
        <div class="business-item">
          <!-- 슬라이드쇼 -->
          <div class="slideshow-container" style="width:380px ;">
    <div v-for="(imageGroup3, index) in imageGroups3" :key="index" v-show="index === currentSlide3" class="w3-animate-opacity">
      <div class="image-group">
        <img v-for="(image, i) in imageGroup3" :key="i" :src="image" class="slide-image" >
      </div>
    </div>
    <a class="prev" @click="prevSlide3">&#10094;</a>
    <a class="next" @click="nextSlide3">&#10095;</a>
  </div>
         <!-- 슬라이드끝 -->

        </div>
        <div class="business-item" tyle="width:350px;">
          <!-- <img src="../assets/images/business2.jpg" alt="Business 2" /> -->
          <num class="numbered-title"  style="margin-left:30px;">03</num> <h4 style="width:350px;">학술•연구 용역</h4>
          <p style="width:350px; font-size:small;  text-align:left">  
            담수어종에 대한 깊이 있는 연구는 생태계를 이해하고 보전하는 데 중요합니다.
            저희는 담수어종의 행동, 생식 패턴, 서식지 조건 연구를 통해 생태계의 복잡성을 밝히고,
            이를 바탕으로 어종 복원 및 자원 관리 방안을 마련합니다. 이러한 학술,연구 적 노력을 통해 한국생물보전연구소는
            토속 생물 다양성을 유지하는 데 기여하며, 우리나라 내수면 생태계의 건강성과 지속 가능성을 높이는 데 기여하고 있습니다.
</p>
        </div>
        <!-- ... more business items -->
      </div>
      <adj>  관련 사업 </adj><br>
      <adj>- 우리나라 특색담수어류를 이용한 관상상품화 </adj><br>
      <adj>- 관상시장 진출을 위한 고유담수어류의 상품화(중소기업청) </adj><br>
      <adj>- 지능형 스마트 미꾸리 종자생산 시스템 및 양식데이터(과학기술정보통신부, 한국지능정보사회진흥원) </adj><br>
      <br><br>
    </div>
    <!-- 3덩이 끝 --><br>
    <section id="project"></section>
    <num class="numbered-title">•</num> &nbsp;&nbsp;<num style="font-size:30px;"></num> &nbsp;&nbsp;<num class="numbered-title">•</num><br><br><br><br>

    <num class="numbered-title">•</num> &nbsp;&nbsp;<num style="font-size:30px;">Project</num> &nbsp;&nbsp;<num class="numbered-title">•</num><br><br><br><br>

    <!-- 슬라이드 -->
    <div class="container">

    <div class="slideshow-container">
    <div v-for="(imageGroup4, index) in imageGroups4" :key="index" v-show="index === currentSlide4" class="w3-animate-opacity">
      <div class="image-group">
        <img v-for="(image, i) in imageGroup4" :key="i" :src="image" class="slide-image" >
      </div>
    </div>
    <a class="prev" @click="prevSlide4">&#10094;</a>
    <a class="next" @click="nextSlide4">&#10095;</a>
  </div>
  
  <h4>실뱀장어 생산 프로젝트</h4>
  멸종위기에 처한 민물장어의 치어를 대량으로 생산하기 위해 진행되고 있는 연구개발 프로젝트입니다.
    고도의 연구 및 풍부한 경험을 바탕으로 대량생산을 가능하게 하는 기술 개발에 중점을 두고 있으며,
    이연구를 통해 생물 다양성 보전과 자원의 지속 가능한 이용에 기여할 것입니다.
  </div>
  <!-- 슬라이드쇼 끝 -->
  </section>



  <br>
  <br>
  
  <section id="contact">
      <div class="container">
        <h2>Contact Us</h2>
  
        <div style="font:normal normal 400 12px/normal dotum, sans-serif; width:640px; height:392px; color:#333; position:relative; margin:auto;">
        <div style="height: 360px;"><a href="https://map.kakao.com/?urlX=495868.0&amp;urlY=915359.0&amp;name=%EC%B6%A9%EB%82%A8%20%EC%95%84%EC%82%B0%EC%8B%9C%20%EC%8B%A4%EC%98%A5%EB%A1%9C%20159-8&amp;map_type=TYPE_MAP&amp;from=roughmap" target="_blank">
        <img class="map" src="http://t1.daumcdn.net/roughmap/imgmap/cd4d58493e7245e09970be492131c2384282c242077a7d124541801b9e342136" width="638px" height="358px" style="border:1px solid #ccc;">
        </a>
        </div>
        <div style="overflow: hidden; padding: 7px 11px; border: 1px solid rgba(0, 0, 0, 0.1); border-radius: 0px 0px 2px 2px; background-color: rgb(249, 249, 249);">
          <a href="https://map.kakao.com" target="_blank" style="float: left;">
        <img src="//t1.daumcdn.net/localimg/localimages/07/2018/pc/common/logo_kakaomap.png" width="72" height="16" alt="카카오맵" style="display:block;width:72px;height:16px">
        </a>
        <div style="float: right; position: relative; top: 1px; font-size: 11px;">
          <a target="_blank" href="https://map.kakao.com/?from=roughmap&amp;eName=%EC%B6%A9%EB%82%A8%20%EC%95%84%EC%82%B0%EC%8B%9C%20%EC%8B%A4%EC%98%A5%EB%A1%9C%20159-8&amp;eX=495868.0&amp;eY=915359.0" style="float:left;height:15px;padding-top:1px;line-height:15px;color:#000;text-decoration: none;">길찾기
        </a>
        </div>
        </div>
        </div>
        <br>
  
  
        <div class="contact-details">
          <div>
            <strong>Tel:</strong> &nbsp; 041-549-5800
          </div><br>
          <div>
            <strong>Email:</strong> &nbsp; <a href="kbci@kbioc.com"> kbci@kbioc.com</a>
          </div><br>
          <div>
            <strong>Fax:</strong> &nbsp; <a> 0504-382-2601</a>
          </div><br>
          <div>
            <strong>Address:</strong> &nbsp; 충청남도 아산시 실옥로 159-8 한국생물보전연구소
          </div><br>
        </div>
  
   
      </div>
    </section>
  
  <br>
  <br>
  
  
   

  
      </div>
    </body>
    
  <p></p>
   <footer class="site-footer">
    
      <div class="container">
        <div class="footer-content">
          <div>
            <h4>About Us</h4>
            <p>Our mission is to let people know that the beauty of nature and the value and value of native language in Korea are infinite.</p>
          </div>
          <div>
            <h4>Contact Info</h4>
            <ul>
              <li>Tel: 041-549-5800</li>
              <li>Email: <a href="kbci@kbioc.com">kbci@kbioc.com</a></li>
              <li>Address: 충청남도 아산시 실옥로 159-8 한국생물보전연구소</li>
            </ul>
          </div>
  
        <div class="footer-bottom">
          <p>© 2024 KBCI. All Rights Reserved.</p><br>
          <p style="margin-left:30px;"><a href="https://kr.freepik.com/free-photo/elegant-white-background-with-blue-wave-lines_15829504.htm#from_view=detail_alsolike">배경작가 starline 출처 Freepik
          </a></p>
        </div>
      </div>
      </div>
    </footer> 
  
  </template>
  
  <style>
  
  
  * { 
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Montserrat', sans-serif;
  }

  header {
    margin: auto;
  top: 0;
  left: 0;
  width: 100%;
  height: 400px; /* 높이를 300px로 조정 */
  }


  .header-content {
    position: relative;
    width: 100%;
    height: 100%;
  }
  
  #headImg {
    width: 100%;
    height: 100%; /* 또는 100% */
    object-fit: cover;
    z-index: 1;
  }
  
  .welcome-message {
    position: absolute;
    top: 75%  !important; /* 이미지 중앙으로 조정 */
    left: 50%; /* 이미지 중앙으로 조정 */
    transform: translate(-50%, -50%); /* 정확히 중앙으로 */
    color: #fefefe;
    font-size: 2.2em; /* 폰트 크기 조정 */
    z-index: 2;
    text-align: center;
    font-weight: 400; 
    background-color: rgba(146, 133, 133, 0.489);
  }
  
  .container {
    width: 100%;
    margin: auto;
    position: relative;
  }
  
  .logo {
   
    float: left;
    margin-left: 8%;
    margin-top: 2%;
    width: 170px;
    height: 170px;
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
    opacity: 1;
    z-index: 3; /* Higher z-index for the logo */
    /* opacity: 0.5; */
  }
  
  .logo img {
    width: 100%;
    height: 100%;
  
  }
  
  .navbar {
    background-color: rgba(255, 255, 255, 0.489);
    overflow: hidden;
    height: 26vh;
    /* height: 190px; */
    
    width: 100%;
    z-index: 2; /* Higher z-index for the navbar */
    position: absolute;
    top: 0;
    
    object-fit: cover;
  }
  
  .navbar a {
    float: right;
    margin-right: 5%;
    margin-top: 4.7%;
    display: block;
    color: rgb(255, 255, 255);
    text-align: center;
    padding: 1.5% 2%;
    text-decoration: none;
    font-size:24px;
    font-weight: 400; 
  }
  
  .navbar:hover {
    background-color: white;
    color: rgb(0, 0, 0);
  
  
  }
  .navbar:hover a{
    color: black;
  
  }
  .navbar a:hover {
    color: rgb(79, 8, 244);
  }
  
  /* Media Query for smaller screens */
  @media screen and (max-width: 600px) {
    .navbar a {
      width: 100%;
      text-align: center;
    }
  }
  
  body {
    background: url('../assets/images/back.jpg') no-repeat center center fixed; 
    background-size: cover; /* 배경 이미지를 화면에 꽉 채우도록 */
    overflow-x:hidden;
  }

  
  #mainBody {
  padding-top: 0px !important; /* 여기를 변경하면 사업소개 섹션이 위로 올라갑니다. */
  /* ... 기타 스타일 */
}



  /* 사업소개 섹션 스타일 */
#business-intro {
  width: 100%;
  margin: auto;
  padding: 50px 0;
  background-color: rgba(255, 255, 255, 0.5);

}
.business-content {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.business-item {
  width: 30%;
  margin-bottom: 30px;
  margin-right: 30px ;
  text-align: center;
}
.business-item img {
  width: 100%;
  height: auto;
  border-radius: 10px;
  margin-bottom: 20px;
}
.business-item h3 {
  margin-bottom: 10px;
}
.business-item p {
  font-size: 16px;
  line-height: 1.6;
}
/* 반응형 미디어 쿼리 */
@media (max-width: 768px) {
  .business-content {
    flex-direction: column;
    align-items: center;
  }
  .business-item {
    width: 80%;
  }
}
adj{
  float: left;
  margin-left: 60px;
}
  
  /* footer */
  .site-footer {
    background-color: #020508;
    color: #ffffff;
    padding: 5px 0;
    font-size: 14px;
  }
  
  .footer-content {
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
    margin-left: 75px;
  }
  
  .footer-content div {
    width: 30%;
  }
  
  .footer-content h4 {
    margin-bottom: 15px;
  }
  
  .footer-content p, .footer-content ul {
    font-size: 14px;
  }
  
  .footer-content ul {
    list-style: none;
    padding: 0;
  }
  
  .footer-content ul li {
    margin-bottom: 10px;
  }
  
  .footer-content a {
    color: #ffffff;
    text-decoration: none;
  }
  
  .footer-bottom {
    text-align: center;
    margin-top: 20px;
    margin-right: 10px;
    
  }
  .footer-bottom p{
    margin-right: 200px;
    
  }
  
  .social-icons a {
    display: inline-block;
    margin-right: 10px;
  }
  
  .social-icons img {
    width: 30px;
    height: auto;
  }
  /* footer 끝 */
  .slideshow-container {
    max-width: 1250px !important;
    position: relative;
    margin: auto;
  }
  #organization-chart img {
  max-width: 100%;
  height: auto;
  display: block; /* This centers the image in the container */
  margin: auto;
}

  </style>

  <script>
import AppNavbar from '../components/AppNavbar.vue';

export default {
  data() {
      return {
        currentSlide: 0,
        currentSlide2: 0,
        currentSlide3: 0,
        currentSlide4: 0,
        
        // 원래 이미지 배열 대신 이미지 그룹 배열을 사용합니다.
        
        imageGroups: [
          [
          require('@/assets/images/seed1.jpg'),
          ],
          [
            require('@/assets/images/seed2.jpg')
          ],
          [
          require('@/assets/images/seed3.jpg')
          ],
          // 이 패턴을 계속할 수 있습니다.
        ],
        imageGroups2: [
          [
          require('@/assets/images/oda1.jpg'),
          ],
          [
          require('@/assets/images/oda2.jpg')
          ],
          [
          require('@/assets/images/oda3.jpg')
          ],
          [
          require('@/assets/images/oda4.jpg')
          ],
          [
          require('@/assets/images/oda5.jpg')
          ]
          // 이 패턴을 계속할 수 있습니다.
        ],
        imageGroups3: [
          [
          require('@/assets/images/rnd1.jpg')
          ],
          [
          require('@/assets/images/rnd2.jpg')
          ],
          [
          require('@/assets/images/rnd3.jpg')
          ],
          [
          require('@/assets/images/rnd4.jpg')
          ],
          [
          require('@/assets/images/rnd5.jpg')
          ]
          // 이 패턴을 계속할 수 있습니다.
        ],
        imageGroups4: [
          [
          require('@/assets/images/project1.jpg'),
          require('@/assets/images/project2.jpg')
          ],
          [
            require('@/assets/images/project3.jpg'),
          require('@/assets/images/project4.jpg')
          ],
          [
            require('@/assets/images/project5.jpg'),
          require('@/assets/images/project6.jpg')
          ],
          [
            require('@/assets/images/project7.jpg'),
          require('@/assets/images/project8.jpg')
          ],
         
          // 이 패턴을 계속할 수 있습니다.
        ],
      };
    },
    computed: {
      currentImageGroup() {
        // 현재 슬라이드에 해당하는 이미지 그룹을 반환합니다.
        return this.imageGroups[this.currentSlide];
      },
      currentImageGroup2() {
        // 현재 슬라이드에 해당하는 이미지 그룹을 반환합니다.
        return this.imageGroups2[this.currentSlide2];
      },
      currentImageGroup3() {
        // 현재 슬라이드에 해당하는 이미지 그룹을 반환합니다.
        return this.imageGroups3[this.currentSlide3];
      },
      currentImageGroup4() {
        // 현재 슬라이드에 해당하는 이미지 그룹을 반환합니다.
        return this.imageGroups4[this.currentSlide4];
      },
    },
    methods: {
      nextSlide() {
        this.currentSlide = (this.currentSlide + 1) % this.imageGroups.length;
      },
      prevSlide() {
        this.currentSlide = (this.currentSlide + this.imageGroups.length - 1) % this.imageGroups.length;
      },
      nextSlide2() {
        this.currentSlide2 = (this.currentSlide2 + 1) % this.imageGroups2.length;
      },
      prevSlide2() {
        this.currentSlide2 = (this.currentSlide2 + this.imageGroups2.length - 1) % this.imageGroups2.length;
      },
      nextSlide3() {
        this.currentSlide3 = (this.currentSlide3 + 1) % this.imageGroups3.length;
      },
      prevSlide3() {
        this.currentSlide3 = (this.currentSlide3 + this.imageGroups3.length - 1) % this.imageGroups3.length;
      },
      nextSlide4() {
        this.currentSlide4 = (this.currentSlide4 + 1) % this.imageGroups4.length;
      },
      prevSlide4() {
        this.currentSlide4 = (this.currentSlide4 + this.imageGroups4.length - 1) % this.imageGroups4.length;
      }
    },
  components: {
    AppNavbar
  }
};
</script>


