document.getElementById("service-list").addEventListener("click", open);

function open() {
  document.getElementById("copywriter-description").classList.toggle("active");
  document.getElementById("plus-icn").classList.toggle("hide-plus");
  document.getElementById("minus-icn").classList.toggle("show-minus");
}
