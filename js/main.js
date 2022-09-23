//햄버거 메뉴
const toggleBtn = document.querySelector('.toggle');
const menu = document.querySelector('.nav-menu');
const toggleIcon = document.getElementsByTagName("i")[0];

console.log(toggleBtn.className)

toggleBtn.addEventListener("click", () => {
  console.log(toggleBtn)

  menu.classList.toggle('active');
  toggleIcon.classList.toggle("fa-bars");
  toggleIcon.classList.toggle("fa-x");

});

//이미지 슬라이드쇼
