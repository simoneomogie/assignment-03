const menu_btn = document.getElementById("menu-btn");
const nav_list = document.querySelector(".nav-list");
const nav_li = document.querySelector(".nav-list-items");

menu_btn.addEventListener("click", function (e) {
  console.log("click");
  nav_list.classList.toggle("active");
  e.stopPropagation();
});

// Event listener to handle clicks outside the nav_list
document.addEventListener("click", function (e) {
  const isClickInsideNav = nav_list.contains(e.target);
  const isClickOnMenuBtn = menu_btn.contains(e.target);
  const isClickOnNavListItem = nav_li.contains(e.target);

  if (!isClickInsideNav && !isClickOnMenuBtn && !isClickOnNavListItem) {
    nav_list.classList.remove("active");
  }
});