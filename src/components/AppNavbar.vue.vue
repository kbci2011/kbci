<template>
  <div :class="['app-navbar', { 'fixed-navbar': isFixed, scrolled: isFixed }]">
    <num class="numbered-title">•</num><a href="#seed">토속•멸종위기 어류
종자생산/양식</a> <num class="numbered-title">•</num>
    <a href="#oda">ODA사업</a> <num class="numbered-title">•</num>
    <a href="#rnd">학술•연구 용역</a> <num class="numbered-title">•</num>
    <a href="#project">실뱀장어 생산 Project</a>
    

  </div>
  
  <div>
   
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isFixed = ref(false);

function handleScroll() {
  const navbarHeight = 400; // Navbar를 고정시킬 스크롤 위치
  isFixed.value = window.scrollY > navbarHeight;
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.app-navbar {
  /* 초기 스타일 */
  position: absolute;
  width: 1150px;
  height: 70px;
  margin: auto;
  font-size: 20px;
  top: 430px; /* 초기에는 400px 아래에 위치 */
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1em;
  transition: background-color 0.3s;
  z-index: 1000; /* 다른 요소들 위에 나타나도록 z-index 설정 */
  /* background-color: var(--background-default); CSS 변수 사용, 기본 배경색 설정 */
  background-color: rgba(255, 255, 255, 0.666);

  border-radius: 25px; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 그림자 효과 */
  /* border: 1px solid #ddd; 경계선 스타일 */


}

.fixed-navbar {
  /* 스크롤 위치에 따라 고정되는 스타일 */
  position: fixed; /* 스크롤 시 상단에 고정 */
  top: 0; /* 상단에 고정 */

}

.scrolled {
  /* 스크롤 위치에 도달했을 때 배경색 변경 */
  background-color: rgb(205, 214, 245, 0.54);
  color: rgb(255, 255, 255); /* 글자색 변경 */
  /* height: 10px; */

  
}


/* 네비게이션 링크 스타일 */
.app-navbar a {
  color: rgb(0, 0, 0); /* 링크 기본 색상 */
  padding: 0.5em 1em;
  text-decoration: none;
  transition: color 0.3s ease;
  /* background-color: rgb(140, 140, 170); */
  /* background-color: rgba(146, 133, 133, 0.489); */
  margin:10px;
  height: 50px;

  
}
.app-navbar.scrolled a {
  color: black; /* 스크롤 위치에 도달했을 때 글자색 변경 */
}
.app-navbar a:hover,
.app-navbar a:focus {
  background-color: rgba(217, 217, 233, 0.895);
  /* background-color: rgba(0, 0, 0, 0.1); */
}

@media (max-width: 768px) {
  /* 반응형 디자인 */
  .app-navbar {
    flex-direction: column;
    padding: 0;
  }
}
</style>