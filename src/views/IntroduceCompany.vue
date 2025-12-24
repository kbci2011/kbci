<template>
  <!-- ============================================ -->
  <!-- 상단 헤더 영역 (로고, 네비게이션, 메인 이미지) -->
  <!-- ============================================ -->
  <header>
    <div class="container">
      <!-- 네비게이션 메뉴바 -->
      <div class="navbar">
        <router-link to="/MainHome">Home</router-link>
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
      <div class="welcome-message">
         Korea Biological Conservation Institute KBCI Inc.
      </div>
    </div>
    
    <!-- 왼쪽 상단 회사 로고 -->
    <a href="/" class="logo">
      <img src="../assets/images/logo.png" alt="로고">
    </a>
  </header>

  <!-- ============================================ -->
  <!-- 메인 본문 영역 -->
  <!-- ============================================ -->
  <body>
    <!-- ==================== -->
    <!-- 페이지 최상단 소개 배너 -->
    <!-- ==================== -->
    <div class="pamphlet-container">
      <!-- 왼쪽: 텍스트 영역 -->
      <div class="text-section">
        <h1>아름다운 자연을 보전하는</h1>
        <h2>(주)한국생물보전연구소</h2>
      </div>
      <!-- 오른쪽: 로고 이미지 -->
      <div class="image-section">
        <img src="../assets/images/logo.png" alt="대표 이미지" />
      </div>
    </div>

    <br>
    <br>

    <!-- ==================== -->
    <!-- 회사 소개 섹션 -->
    <!-- ==================== -->
    <section id="about-us" style="padding: 50px 0;">
      <div class="container">
        <div class="about-content">
          
          <!-- ========== -->
          <!-- CEO 인사말 -->
          <!-- ========== -->
          <section id="ceo-message">
            <div class="container ceo-container">
              <!-- 왼쪽: 인사말 텍스트 -->
              <div class="ceo-text">
                <h2>인사말</h2>
                <p>생물학자이자 환경운동가인 베리 코모너(Barry Commoner)는</p>
                <h5>"The proper use of science is not to conquer but live in it"</h5>
                <p style="font-size:small; margin-top:-8px;">"과학의 적절한 사용은 자연을 정복하는 것이 아니라 자연 속에서 사는 것입니다."</p>

                <p><br>
                  현재 우리의 환경은 과학의 발전속에 나날이 발전해가고 인류의 삶은 다양한 형태로 물질적,
                  정신적 수준도 높아가고 있습니다. 이렇게 높은 삶의 질을 영유하기 위하여 어느 한 쪽은 황폐화
                  될 수 밖에 없었습니다. 어쩌면 그 중 제일의 피해자는 자연이고, 자연과 더불어 가는 인간은 가해
                  자이자 피해자일 것입니다.
                </p><br>
                
                <p>
                  (주)한국생물보전연구소는 발전으로 인해 황폐해지거나, 멸종되고 멸종의 위기에 있는 우리나라의
                  자연환경과 토속어를 보전하고, 보호하기위하여 세워진 우리나라 최초의 법인회사입니다.
                  자연은 보호되는 대상이 아니라 더불어 사는 필수조건이고, 자연은 현재 사는 우리가 후손에게
                  물려줄 가장 큰 유산인 것입니다.
                  자연보호단체, 환경보호단체가 우후죽순처럼 생겨나고, 지자체 및 관공서가 노력을
                  하고 있지만, 보다 체계적이고, 미래지향적이지 않아 많은 노력과 자본을 투자하고 복원하려고
                  많은 노력을 함에도 불구하고, 그다지 좋은 시효를 보이지 못하고 있는 것을 안타깝게 생각해 왔
                  습니다.<br><br>

                  따라서 (주)한국생물보전연구소는 이러한 한계성을 극복하고, 보다나은 자연환경을 만들고자하는
                  신념을 가지고 2011년에 4대강 멸종위기 종 과제수행을 시작으로 토속어에 대한 연구 및 종묘생산에
                  앞장서고 있습니다. 우리의 토속어를 아름다운 관상가치로써의 재평가를 통해 보다 구체적이고
                  본격적인 보전, 보호를 본격적으로 하자는 창업주 박상용박사의 신념과 열의로 설립된 회사입니다.
                  저는 창업정신을 이어받아 우리의 자연, 자원을 좀 더 효율적이고, 체계적으로 관리할 수 있도록
                  우리의 자연자원을 보전하고 지킬 수 있도록 노력할 것입니다.<br><br>

                  앞으로 (주)한국생물보전연구소는 토속어의 높은 관상적 가치를 세계에 알리는데 주력하고, 토속어
                  의 종묘생산 및 환경평가, 생태학습 등의 분야에 적극적으로 앞장서서 우리나라 자연의 아름다움과
                  토속어의 소중함과 가치가 무한하다는 것을 알리기 위하여 최선을 다할 것입니다.<br>
                  <br>
                  감사합니다.
                  <br><br>
                  (주)한국생물보전연구소 대표 
                </p>
                <h5 style="font-weight:bold">강은경</h5> 
              </div>
              
              <!-- 오른쪽: 대표 사진 -->
              <div class="ceo-image">
                <img src="../assets/images/leader.jpg" alt="CEO 이미지">
              </div>
            </div>
          </section>
          
        </div>
      </div>
    </section>

    <!-- ==================== -->
    <!-- 회사 연혁 타임라인 -->
    <!-- ==================== -->
    <section id="history" class="history-section">
      <div class="container">
        <h2 class="section-title">Our History</h2>
        
        <!-- 타임라인 컨테이너 -->
        <div class="timeline">
          <!-- v-for: historyEvents 배열을 순회하며 각 연도별 이벤트 표시 -->
          <div class="timeline-item" v-for="(event, index) in historyEvents" :key="index">
            <!-- 타임라인 내용 박스 (좌우 교차 배치) -->
            <!-- calculateMargin: 짝수 인덱스는 왼쪽, 홀수는 오른쪽에 배치 -->
            <div class="timeline-content" :style="{ 'margin-left': calculateMargin(index) }">
              <!-- 연도 표시 -->
              <span class="timeline-year">{{ event.year }}</span>
              <!-- 해당 연도의 상세 내용 (HTML 형식 지원) -->
              <div class="timeline-text" v-html="event.details"></div>
            </div>
            <!-- 타임라인 중앙의 원형 마커 -->
            <div class="timeline-circle"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- ==================== -->
    <!-- 조직도 섹션 -->
    <!-- ==================== -->
    <section id="organization-chart">
      <h2>Our Team Structure</h2>
      <!-- 조직도 이미지 -->
      <img src="../assets/images/organ.jpg" alt="Organization Chart" class="org-chart"/>
    </section>

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
          <div><strong>Email:</strong> &nbsp; <a href="kbci@kbioc.com">kbci@kbioc.com</a></div><br>
          <div><strong>Fax:</strong> &nbsp; <a>0504-382-2601</a></div><br>
          <div><strong>Address:</strong> &nbsp; 충청남도 아산시 실옥로 159-8 한국생물보전연구소</div><br>
        </div>
      </div>
    </section>

    <p></p>

    <!-- ==================== -->
    <!-- 하단 푸터 -->
    <!-- ==================== -->
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
              <li>Email: <a href="kbci@kbioc.com">kbci@kbioc.com</a></li>
              <li>Address: 충청남도 아산시 실옥로 159-8 한국생물보전연구소</li>
            </ul>
          </div>

          <!-- Copyright 및 출처 -->
          <div class="footer-bottom">
            <p>© 2024 KBCI. All Rights Reserved.</p><br>
            <p style="margin-left:30px;">
              <a href="https://kr.freepik.com/free-photo/elegant-white-background-with-blue-wave-lines_15829504.htm#from_view=detail_alsolike">배경작가 starline 출처 Freepik</a>
            </p>
          </div>
        </div>
      </div>
    </footer> 
  </body>
</template>

<!-- ============================================ -->
<!-- 스타일 정의 (CSS) -->
<!-- ============================================ -->
<style scoped>
/* ==================== */
/* 페이지 최상단 소개 배너 스타일 */
/* ==================== */
.pamphlet-container {
  background-color: rgba(242, 244, 246, 0.5);
  display: flex; /* 좌우 배치 */
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 80%;
  height: 200px;
  align-items: center; /* 수직 중앙 정렬 */
  justify-content: space-between; /* 양쪽 끝에 배치 */
  margin: 2rem auto; /* 중앙 정렬 */
}

/* 왼쪽 텍스트 영역 */
.text-section {
  flex: 1;
  margin-left: 180px;
  margin-bottom: 60px;
}

/* 오른쪽 이미지 영역 */
.image-section {
  flex: 1;
  margin-left: 200px;
}

.image-section img {
  width: 170px;
  max-width: 100%;
  height: auto;
  border-radius: 10px;
}

/* 모바일 반응형: 세로 배치로 변경 */
@media (max-width: 768px) {
  .pamphlet-container {
    flex-direction: column;
  }
}

/* 배너 제목 스타일 */
.pamphlet-container h1 {
  font-size: 2em;
  color: #003366;
  margin-bottom: 0.1em;
  margin-left: 0.5em;
  margin-top: 70px;
  font-weight: bold;
}

.pamphlet-container h2 {
  font-size: 1.5em;
  color: #0055cc;
  margin-bottom: 0.5em;
  margin-left: 1em;
  font-weight: bold;
}

/* ==================== */
/* 회사 소개 섹션 스타일 */
/* ==================== */
#about-us {
  background-color: rgb(255, 255, 255, 0.5);
  width: 1300px;
  margin: auto;
  margin-bottom: 40px;
  margin-top: -50px;
}

#about-us .leader-message img {
  border-radius: 100%; /* 원형 이미지 */
}

#about-us .leader-message h3 {
  font-size: 1.5em;
  color: #333;
}

#about-us .leader-message p {
  font-size: 1.1em;
  color: #666;
  padding: 0 20px;
}

/* ==================== */
/* CEO 인사말 레이아웃 */
/* ==================== */
.ceo-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 50px 0;
  margin-right: 200px; 
}

/* 왼쪽: 인사말 텍스트 (70% 너비) */
.ceo-text {
  width: 70%;
  margin-right: 100px;
  text-align: left;
}

.ceo-text p {
  font-size: 16px;
}

/* 오른쪽: CEO 사진 (30% 너비) */
.ceo-image {
  width: 30%;
  text-align: right;
  margin-bottom: 600px; /* CEO 사진을 텍스트 상단에 고정 */
}

.ceo-image img {
  width: 370px;
  height: auto;
  margin-left: 55px;
}

/* 모바일 반응형 */
@media (max-width: 768px) {
  .ceo-container {
    flex-direction: column;
  }
  .ceo-text,
  .ceo-image {
    width: 100%;
    text-align: center;
  }
  .ceo-image img {
    height: auto;
  }
}

/* ==================== */
/* 연혁 타임라인 스타일 */
/* ==================== */
.history-section {
  background-color: rgb(255, 255, 255, 0.7);
  padding: 2em;
  font-family: 'Montserrat', sans-serif;
  width: 1300px;
  margin: auto;
}

.section-title {
  text-align: center;
  margin-bottom: 30px;
}

/* 타임라인 전체 컨테이너 */
.timeline {
  position: relative;
  padding: 0;
}

/* 각 타임라인 항목 */
.timeline-item {
  position: relative;
  padding-bottom: 15px;
}

/* 타임라인 중앙의 원형 마커 */
.timeline-circle {
  position: absolute;
  left: 50%; /* 중앙 배치 */
  transform: translateX(-50%);
  background-color: #005BB4;
  border: 3px solid #fff;
  width: 15px;
  height: 15px;
  border-radius: 50%; /* 원형 */
  z-index: 5;
}

/* 타임라인 내용 박스 */
.timeline-content {
  width: 50%;
  padding: 0 25px;
}

/* 연도 표시 */
.timeline-year {
  font-size: 34px;
  color: #005BB4;
  font-weight: bold;
}

/* 연도별 상세 내용 박스 */
.timeline-text {
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.1);
  width: 350px;
  margin: auto;
}

.timeline-text p {
  font-size: smaller;
}

/* ==================== */
/* 조직도 섹션 스타일 */
/* ==================== */
#organization-chart {
  text-align: center;
  margin: 50px 0;
}

#organization-chart h2 {
  margin-bottom: 20px;
}

/* 조직도 이미지 */
.org-chart {
  width: 750px !important;
  height: 460px !important;
  border-radius: 20%;
}

/* ==================== */
/* 기타 스타일 */
/* ==================== */
body {
  overflow-x: hidden; /* 가로 스크롤 방지 */
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
      // 회사 연혁 데이터 배열
      // year: 연도, details: 해당 연도의 주요 이벤트 (배열 형태)
      historyEvents: [
        { 
          year: '2023', 
          details: ['무역업등록(고유번호:10460346)'] 
        },
        { 
          year: '2018', 
          details: ['~현재, 국별협력사업 수산양식 전문가 파견 : 미얀마, 베트남, 인도네시아, 탄자니아, 우간다 등'] 
        },
        { 
          year: '2017', 
          details: ['~현재, 해수/담수 종자생산 및 양식 기술컨설팅, 순환여과식 시스템 설계 및 시공'] 
        },
        { 
          year: '2015', 
          details: ['세계 관상생물 박람회<br> Aquarama(싱가포르, 2015) 3위 입상'] 
        },
        { 
          year: '2014', 
          details: ['~현재 국립생태원, 경북민물고기센터, 한화아쿠아리움, 아산시청 등 수생동식물 공급계약 업무협약'] 
        },
        { 
          year: '2011', 
          details: ['㈜한국생물보전연구소 법인설립', '~현재 순천향대학교 가족기업'] 
        },
      ],
    };
  },

  // ==================== //
  // 메서드 정의 //
  // ==================== //
  methods: {
    /**
     * 타임라인 항목의 좌우 배치를 계산하는 함수
     * @param {number} index - 배열 인덱스
     * @returns {string} - margin-left CSS 값
     * 
     * 짝수 인덱스(0, 2, 4...): 왼쪽에 배치 (margin: 0)
     * 홀수 인덱스(1, 3, 5...): 오른쪽에 배치 (margin: 50% + 25px)
     */
    calculateMargin(index) {
      return index % 2 === 0 ? '0' : 'calc(50% + 25px)';
    },
  },
};
</script>