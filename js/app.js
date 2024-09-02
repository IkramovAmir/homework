const btn = document.querySelector(".about__us-btn");
const headerList = document.querySelector(".header__list");
const headerClosebtn = document.querySelector(".header__btn-close");

btn.addEventListener("click", function () {
  headerList.classList.toggle("header__list-show");
});
headerClosebtn.addEventListener("click", function(){
    headerList.classList.remove 
     ("header__list-show");
});
