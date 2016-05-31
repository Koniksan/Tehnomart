var logIn = document.querySelector(".login-btn");
var hide = document.querySelector(".middle-menu-user");
var logOut = document.querySelector(".logout-btn");
var show = document.querySelector(".middle-menu-user-on")


logIn.addEventListener("click", function(event){
  event.preventDefault();
  hide.classList.add("midle-menu-user_hide");
  show.classList.add("middle-menu-user-on_show");
});

logOut.addEventListener("click", function(event){
  event.preventDefault();
  hide.classList.remove("midle-menu-user_hide");
  hide.classList.add("midle-menu-user_show");
  show.classList.remove("middle-menu-user-on_show");
});