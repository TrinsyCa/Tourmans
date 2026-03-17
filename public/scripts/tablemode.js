var dateFilter = document.querySelector(".dateFilter");
var tableModes = document.querySelectorAll(".tableMode");
function opendateFilter()
{
   dateFilter.classList.add("active");
}
function closetableMode()
{
   tableModes.forEach(function(mode) {
      mode.classList.remove("active");
   });
}
document.addEventListener("keydown", function(event) {
   if (event.key === "F5") {
      window.location.href = "./";
   }
});