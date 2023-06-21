"use strict";

// do something!
const body = document.querySelector("body");
const toggle = document.querySelector(".toggle");
const nav = document.querySelector("nav");

/* toggle 버튼 클릭시 sideToggle함수 실행 */
toggle.addEventListener("click", sideToggle);

function sideToggle() {
  body.classList.remove("preload");
  nav.classList.toggle("active");

  /* active를 포함하고 있으면 localStorage에 저장  */
  localStorage.setItem(
    "navState",
    nav.className.includes("active") ? "opened" : "closed"
  );
}

/* 새로고침시 preload 클래스 사용 0> 모든 자식 요소의 transition이 무효화된다.  */
/* load - HTML로 DOM 트리를 만드는 게 완성되었을 뿐만 아니라 
이미지, 스타일시트 같은 외부 자원도 모두 불러오는 것이 끝났을 때 발생한다. */

/* DOMContentLoaded - 브라우저가 HTML을 전부 읽고 DOM 트리를 완성하는 즉시 발생한다. 
이미지 파일(<img>)이나 스타일시트 등의 기타 자원은 기다리지 않는다.*/

window.addEventListener("DOMContentLoaded", function () {
  const navState = localStorage.getItem("navState");

  if (navState === "closed") {
    nav.classList.remove("active");
  } else if (navState === "opened") {
    nav.classList.add("active");
  }

  document.querySelector("body").style.visibility = "visible";
});

/* 
1. toggle 버튼 눌렀을때,  
1-1.body의 preload클래스 제거 
1-2.toggle에 active class추가
1-3. nav에 active클래스 추가

1-4-1. nav가 active 클래스를 포함시 localStorage에 nav의 상태 저장( opened)
1-4-2. nav가 active 클래스를 포함안할시 localStorage에 nav의 상태 저장 (closed)
*/
