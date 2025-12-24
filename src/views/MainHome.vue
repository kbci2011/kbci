<template>
  <!-- ============================================ -->
  <!-- 상단 헤더 영역 (로고, 네비게이션, 메인 이미지) -->
  <!-- ============================================ -->
  <header style="height:600px !important;">
    <div class="container">
      <!-- 네비게이션 메뉴바 -->
      <div class="navbar" id="app">
        <router-link to="/BusinessProfile">Home</router-link>
        <router-link to="/IntroduceCompany">회사소개</router-link>
        <router-link to="/BusinessProfile">주요사업</router-link>
        <router-link to="/#">News</router-link>
        <a href="#contact">Contact</a>
      </div>
    </div>
   
    <!-- 헤더 메인 이미지 및 환영 메시지 -->
    <div class="header-content">
      <!-- 배경 대문 이미지 -->
      <img src="../assets/images/대문3.jpg" alt="대문" id="headImg">
      <!-- 이미지 위에 표시되는 회사명 텍스트 -->
      <div class="welcome-message" style="top:55% !important;">
         Korea Biological Conservation Institute KBCI Inc.
      </div>
    </div>
    
    <!-- 왼쪽 상단 회사 로고 -->
    <a href="/" class="logo">
      <img src="../assets/images/logo.png" alt="로고">
    </a>
  </header>
  
  <br>
  <br>

  <!-- ============================================ -->
  <!-- 메인 본문 영역 -->
  <!-- ============================================ -->
  <body>
    <div id="mainBody">

      <!-- ==================== -->
      <!-- 섹션 01: 회사 소개 -->
      <!-- ==================== -->
      <section id="about">
        <div class="container">
          <!-- 섹션 번호 및 제목 -->
          <num class="numbered-title">01.</num> &nbsp;&nbsp;<num style="font-size:30px;">회사 소개</num><br><br>
          <!-- 회사 소개 텍스트 -->
          <p>우리 한국생물보전연구소는 우리나라 토속어종에 대한 연구 및 종묘생산에 앞장서고 있으며<br>
           우리의 토속어를 아름다운 관상가치로써의 재평가를 통해 보다 구체적이고 본격적인 보전, 보호를 위해 설립된 회사입니다.</p><br>
          <div>
            <!-- 회사소개 페이지로 이동하는 버튼 -->
            <router-link to="/IntroduceCompany">
              <button class="custom-button"><b>우리회사에 대해 자세히 알아보세요</b></button>
            </router-link>
          </div>
        </div>
      </section>
      
      <br>
      <br>

      <!-- ==================== -->
      <!-- 섹션 02: 주요 사업 -->
      <!-- ==================== -->
      <section id="services">
        
        <div class="container">
          <!-- 섹션 번호 및 제목 -->
          <num class="numbered-title">02.</num> &nbsp;&nbsp;<num style="font-size:30px;">주요 사업</num><br><br>
          
          <!-- 3가지 주요 사업 카드 -->
          <div class="service-list">
            <!-- 사업 1: 토속어류 종자생산/양식 -->
            <div class="service">
              <img src="../assets/images/service1.jpeg" alt="서비스 1">
              <h4>토속•멸종위기 어류 
                <br>종자생산/양식</h4>
            </div>
            <!-- 사업 2: ODA사업 -->
            <div class="service">
              <img src="../assets/images/service2.jpeg" alt="서비스 1">
              <h4>ODA사업</h4>
            </div>
            <!-- 사업 3: 학술•연구 용역 -->
            <div class="service">
              <img src="../assets/images/service3.jpg" alt="서비스 1">
              <h4>학술•연구 용역</h4>
            </div>
          </div>
        </div>
      </section>

      <!-- ==================== -->
      <!-- 프로젝트: 실뱀장어 생산 -->
      <!-- ==================== -->
      <section id="services">
        <div class="container">
          &nbsp;&nbsp;<num style="font-size:30px;">Project</num><br><br>
          
          <!-- 이미지 슬라이드쇼 컴포넌트 -->
          <div class="slideshow-container">
            <!-- v-for: imageGroups 배열을 순회하며 각 이미지 그룹 표시 -->
            <!-- v-show: 현재 슬라이드 인덱스와 일치하는 것만 표시 -->
            <div v-for="(imageGroup, index) in imageGroups" 
                 :key="index" 
                 v-show="index === currentSlide" 
                 class="w3-animate-opacity">
              <div class="image-group">
                <!-- 각 그룹 내 이미지들을 나란히 표시 -->
                <img v-for="(image, i) in imageGroup" 
                     :key="i" 
                     :src="image" 
                     class="slide-image">
              </div>
            </div>
            <!-- 이전 슬라이드 버튼 -->
            <a class="prev" @click="prevSlide">&#10094;</a>
            <!-- 다음 슬라이드 버튼 -->
            <a class="next" @click="nextSlide">&#10095;</a>
          </div>

          <!-- 프로젝트 제목 -->
          <h4>실뱀장어 생산 프로젝트</h4>
          <br>
        </div>
        
        <!-- 주요사업 페이지로 이동하는 버튼 -->
        <router-link to="/BusinessProfile">
          <button class="custom-button2"><b>생보연의 주요사업 더 알아보기</b></button>
        </router-link>
      </section>

      <br>
      <br>

      <!-- ==================== -->
      <!-- 섹션 03: 고객사 로고 -->
      <!-- ==================== -->
      <section id="clients">
        <div class="container">
          <!-- 섹션 번호 및 제목 -->
          <num class="numbered-title">03.</num> &nbsp;&nbsp;<num style="font-size:30px;">Our Clients</num><br><br>
          
          <!-- 고객사 로고 그리드 -->
          <div class="client-logos">
            <!-- v-for: clients 배열을 순회하며 각 고객사 로고 표시 -->
            <a v-for="client in clients" 
               :key="client.id" 
               target="_blank" 
               class="client-logo">
              <img :src="client.logo" :alt="client.name" class="Clogo">
            </a>
          </div>
        </div>
      </section>

      <br>
      <br>
      <br>

      <!-- ==================== -->
      <!-- Contact Us: 연락처 및 지도 -->
      <!-- ==================== -->
      <section id="contact">
        <div class="container">
          <h2>Contact Us</h2>

          <!-- 카카오맵 API를 이용한 지도 표시 -->
          <div style="font:normal normal 400 12px/normal dotum, sans-serif; width:640px; height:392px; color:#333; position:relative; margin:auto;">
            <div style="height: 360px;">
              <a href="https://map.kakao.com/?urlX=495868.0&amp;urlY=915359.0&amp;name=%EC%B6%A9%EB%82%A8%20%EC%95%84%EC%82%B0%EC%8B%9C%20%EC%8B%A4%EC%98%A5%EB%A1%9C%20159-8&amp;map_type=TYPE_MAP&amp;from=roughmap" target="_blank">
                <img class="map" src="http://t1.daumcdn.net/roughmap/imgmap/cd4d58493e7245e09970be492131c2384282c242077a7d124541801b9e342136" width="638px" height="358px" style="border:1px solid #ccc;">
              </a>
            </div>
            <!-- 카카오맵 로고 및 길찾기 링크 -->
            <div style="overflow: hidden; padding: 7px 11px; border: 1px solid rgba(0, 0, 0, 0.1); border-radius: 0px 0px 2px 2px; background-color: rgb(249, 249, 249);">
              <a href="https://map.kakao.com" target="_blank" style="float: left;">
                <img src="//t1.daumcdn.net/localimg/localimages/07/2018/pc/common/logo_kakaomap.png" width="72" height="16" alt="카카오맵" style="display:block;width:72px;height:16px">
              </a>
              <div style="float: right; position: relative; top: 1px; font-size: 11px;">
                <a target="_blank" href="https://map.kakao.com/?from=roughmap&amp;eName=%EC%B6%A9%EB%82%A8%20%EC%95%84%EC%82%B0%EC%8B%9C%20%EC%8B%A4%EC%98%A5%EB%A1%9C%20159-8&amp;eX=495868.0&amp;eY=915359.0" style="float:left;height:15px;padding-top:1px;line-height:15px;color:#000;text-decoration: none;">길찾기</a>
              </div>
            </div>
          </div>
          <br>

          <!-- 연락처 정보 -->
          <div class="contact-details">
            <div><strong>Tel:</strong> &nbsp; 041-549-5800</div><br>
            <div><strong>Email:</strong> &nbsp; kbci@kbioc.com</div><br>
            <div><strong>Fax:</strong> &nbsp; <a>0504-478-6637</a></div><br>
            <div><strong>Address:</strong> &nbsp; 충청남도 아산시 실옥로 159-8 한국생물보전연구소</div><br>
          </div>
        </div>
      </section>

    </div>
  </body>

  <!-- ============================================ -->
  <!-- 하단 푸터 영역 -->
  <!-- ============================================ -->
  <p></p>
  <footer class="site-footer">
    <div class="container">
      <div class="footer-content">
        <!-- About Us -->
        <div>
          <h4>About Us</h4>
          <p>Our mission is to let people know that the beauty of nature and the value and value of native language in Korea are infinite.</p>
        </div>
        <!-- Contact Info -->
        <div>
          <h4>Contact Info</h4>
          <ul>
            <li>Tel: 041-549-5800</li>
            <li>Email: kbci@kbioc.com</li>
            <li>Address: 충청남도 아산시 실옥로 159-8 한국생물보전연구소</li>
          </ul>
        </div>

        <!-- Copyright 및 출처 표기 -->
        <div class="footer-bottom">
          <p>© 2024 KBCI. All Rights Reserved.</p><br>
          <p><a href="https://kr.freepik.com/free-photo/elegant-white-background-with-blue-wave-lines_15829504.htm#from_view=detail_alsolike">배경작가 starline 출처 Freepik</a></p>
        </div>
      </div>
    </div>
  </footer>
</template>

<!-- ============================================ -->
<!-- 스타일 정의 (CSS) -->
<!-- ============================================ -->
<style>
/* 전역 스타일 초기화 */
* { 
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
}

/* ==================== */
/* 헤더 스타일 */
/* ==================== */
header {
  margin: auto;
  top: 0;
  left: 0;
  width: 100%;
  height: 400px;
}

.header-content {
  position: relative;
  width: 100%;
  height: 100%;
}

/* 헤더 배경 이미지 */
#headImg {
  width: 100%;
  height: 100%;
  object-fit: cover; /* 이미지 비율 유지하며 영역 채우기 */
  z-index: 1;
}

/* 헤더 중앙의 환영 메시지 */
.welcome-message {
  position: absolute;
  top: 47%;
  left: 50%;
  transform: translate(-50%, -50%); /* 정확한 중앙 정렬 */
  color: #fefefe;
  font-size: 2.2em;
  z-index: 2; /* 이미지 위에 표시 */
  text-align: center;
  font-weight: 400; 
  background-color: rgba(180, 180, 238, 0.189);
}

.container {
  width: 100%;
  margin: auto;
  position: relative;
}

/* 로고 스타일 (좌측 상단) */
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
  z-index: 3; /* 네비바 위에 표시 */
}

.logo img {
  width: 100%;
  height: 100%;
}

/* ==================== */
/* 네비게이션 바 스타일 */
/* ==================== */
.navbar {
  background-color: rgba(180, 180, 238, 0.189);
  overflow: hidden;
  height: 26vh;
  width: 100%;
  z-index: 2;
  position: absolute;
  top: 0;
  object-fit: cover;
}

/* 네비게이션 링크 */
.navbar a {
  float: right;
  margin-right: 5%;
  margin-top: 4.7%;
  display: block;
  color: rgb(255, 255, 255);
  text-align: center;
  padding: 1.5% 2%;
  text-decoration: none;
  font-size: 24px;
  font-weight: 400;
}

.navbar router-link {
  float: right;
  margin-right: 5%;
  margin-top: 4.7%;
  display: block;
  color: rgb(255, 255, 255);
  text-align: center;
  padding: 1.5% 2%;
  text-decoration: none;
  font-size: 24px;
  font-weight: 400;
}

/* 네비바 호버 효과 */
.navbar:hover {
  background-color: white;
  color: rgb(0, 0, 0);
}

.navbar:hover a {
  color: black;
}

.navbar:hover router-link {
  color: black;
  cursor: pointer;
}

/* 링크 호버 효과 */
.navbar a:hover {
  color: rgb(79, 8, 244);
}

.navbar router-link:hover {
  color: rgb(79, 8, 244);
}

/* 모바일 반응형 (600px 이하) */
@media screen and (max-width: 600px) {
  .navbar a {
    width: 100%;
    text-align: center;
  }
}

/* ==================== */
/* 본문 스타일 */
/* ==================== */
body {
  background: url('../assets/images/back.jpg') no-repeat center center fixed; 
  background-size: cover;
}

/* 메인 본문 컨테이너 */
#mainBody {
  border-color: rgb(129, 104, 182);
  border-width: 0px 1px;
  width: 82%;
  height: auto;
  margin: auto;
}

/* 섹션 기본 스타일 */
section {
  padding: 10px 0;
  text-align: center;
}

section .container {
  width: 80%;
  margin: auto;
}

/* ==================== */
/* 서비스 카드 레이아웃 */
/* ==================== */
.service-list {
  display: flex;
  justify-content: space-around;
  padding: 5px;
}

.service {
  width: 30%;
  text-align: center;
}

.container p {
  font-size: 18px;
}

.service img {
  width: 100%;
  height: auto;
}

/* ==================== */
/* 버튼 스타일 */
/* ==================== */
/* 보라색 버튼 (회사소개 더보기) */
.custom-button {
  background-color: #8267cc;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: 2px solid #7162d4;
}

.custom-button:hover {
  background-color: #ea8053;
}

/* 주황색 버튼 (주요사업 더보기) */
.custom-button2 {
  background-color: #ea8053;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: 2px solid #d4c237;
}

.custom-button2:hover {
  background-color: #7162d4;
}

/* 섹션 번호 스타일 (01, 02, 03) */
.numbered-title {
  font-size: 30px;
  color: #6f55b1f3;
  font-weight: bold;
  opacity: 0.7;
}

/* ==================== */
/* 이미지 슬라이드쇼 스타일 */
/* ==================== */
.slideshow-container {
  max-width: 1050px;
  position: relative;
  margin: auto;
}

/* 이미지 그룹 (한 슬라이드에 여러 이미지) */
.image-group {
  display: flex;
  justify-content: center;
}

/* 각 슬라이드 이미지 */
.slide-image {
  width: calc(100% / 2); /* 2개의 이미지가 같은 크기 */
  height: 400px;
  padding: 0 4px; /* 이미지 간 간격 */
}

/* 슬라이드 기본 설정 */
.mySlides {
  display: none;
  position: relative;
}

.mySlides:first-of-type {
  display: block;
}

.mySlides img {
  width: 100%;
  height: 465px;
}

/* 이전/다음 버튼 */
.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%); /* 수직 중앙 정렬 */
  width: auto;
  padding: 16px;
  color: rgb(7, 7, 7);
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  z-index: 10; /* 이미지 위에 표시 */
  background-color: rgba(255, 255, 255, 0.8);
}

.prev {
  left: -50px; /* 왼쪽 바깥 배치 */
}

.next {
  right: -50px; /* 오른쪽 바깥 배치 */
}

/* 버튼 호버 효과 */
.prev:hover, .next:hover {
  background-color: rgba(148, 166, 199, 0.801);
}

/* ==================== */
/* 고객사 로고 스타일 */
/* ==================== */
#clients .container {
  text-align: center;
}

.client-logos {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

/* 원형 로고 컨테이너 */
.client-logo {
  margin: 10px;
  transition: transform 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 135px;
  height: 135px;
  border-radius: 50%; /* 원형 */
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.client-logo:hover {
  transform: scale(1.1); /* 호버 시 확대 */
}

.Clogo {
  max-width: 70%;
  max-height: 70%;
  object-fit: contain; /* 비율 유지 */
}

/* ==================== */
/* 푸터 스타일 */
/* ==================== */
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

.footer-bottom p {
  margin-right: 200px;
  text-align: left;
}

.footer-bottom p a {
  text-align: left;
  margin-right: 3px;
  width: 100%;
}

.social-icons a {
  display: inline-block;
  margin-right: 10px;
}

.social-icons img {
  width: 30px;
  height: auto;
}
</style>

<!-- ============================================ -->
<!-- JavaScript 로직 (Vue.js) -->
<!-- ============================================ -->
<script>
export default {
  // ==================== //
  // 데이터 정의 //
  // ==================== //
  data() {
    return {
      // 현재 표시 중인 슬라이드 인덱스 (0부터 시작)
      currentSlide: 0,
      
      // 고객사 정보 배열
      clients: [
        { id: 1, name: "Client A", logo: require('@/assets/images/client-a.jpg'), url: "http://clienta.com" },
        { id: 2, name: "Client B", logo: require('@/assets/images/client-b.jpg'), url: "http://clientb.com" },
        { id: 3, name: "Client c", logo: require('@/assets/images/client-c.jpg'), url: "http://clientb.com" },
        { id: 4, name: "Client d", logo: require('@/assets/images/client-d.jpg'), url: "http://clientb.com" },
        { id: 5, name: "Client e", logo: require('@/assets/images/client-e.jpg'), url: "http://clientb.com" },
        { id: 6, name: "Client f", logo: require('@/assets/images/client-f.jpg'), url: "http://clientb.com" },
        { id: 7, name: "Client g", logo: require('@/assets/images/client-g.jpg'), url: "http://clientb.com" },
        { id: 8, name: "Client h", logo: require('@/assets/images/client-h.jpg'), url: "http://clientb.com" },
        { id: 9, name: "Client i", logo: require('@/assets/images/client-i.jpg'), url: "http://clientb.com" },
        { id: 10, name: "Client j", logo: require('@/assets/images/client-j.jpg'), url: "http://clientb.com" },
      ],
      
      // 슬라이드쇼 이미지 그룹 배열
      // 각 배열 요소는 하나의 슬라이드에 표시될 2개의 이미지를 포함
      imageGroups: [
        [
          require('@/assets/images/service4.jpg'),
          require('@/assets/images/service5.jpg'),
        ],
        [
          require('@/assets/images/service6.jpg'),
          require('@/assets/images/service7.jpg'),
        ],
        [
          require('@/assets/images/service8.jpg'),
          require('@/assets/images/service9.jpg')
        ],
      ]
    };
  },

  // ==================== //
  // 계산된 속성 //
  // ==================== //
  computed: {
    // 현재 슬라이드에 해당하는 이미지 그룹 반환
    currentImageGroup() {
      return this.imageGroups[this.currentSlide];
    }
  },

  // ==================== //
  // 메서드 정의 //
  // ==================== //
  methods: {
    // 다음 슬라이드로 이동
    // % 연산자로 마지막 슬라이드 다음에 첫 슬라이드로 순환
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.imageGroups.length;
    },
    
    // 이전 슬라이드로 이동
    // 첫 슬라이드에서 이전 버튼 클릭 시 마지막 슬라이드로 이동
    prevSlide() {
      this.currentSlide = (this.currentSlide + this.imageGroups.length - 1) % this.imageGroups.length;
    }
  }
};
</script>