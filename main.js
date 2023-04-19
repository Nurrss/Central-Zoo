let lift = document.getElementById("lift");
let menu = document.getElementById("list");


lift.addEventListener("click", function () {
    menu.classList.toggle("show-link");
    lift.classList.toggle("_90deg");

});
