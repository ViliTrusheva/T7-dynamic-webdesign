// When the user scrolls down 150px from the top of the document, resize the header's font size
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 250 ||
    document.documentElement.scrollTop > 250
  ) {
    document.getElementById("logo_header_img").style.width = "7rem";
    document.getElementById("logo").style.top = "20px";
  } else {
    document.getElementById("logo_header_img").style.width = "17rem";
    document.getElementById("logo").style.top = "330px";
  }
}

const scrollContainer = document.querySelector("#rent_list_home");

scrollContainer.addEventListener("wheel", (evt) => {
  evt.preventDefault();
  scrollContainer.scrollLeft += evt.deltaY;
});
