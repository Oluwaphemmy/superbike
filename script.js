const slides = document.querySelectorAll(".slides");
const dots = document.querySelectorAll(".dot");

function setActive(i) {
  for (slide of slides) slide.classlist.remove("active");
  slide[i].classlist.add("active");
  for (dot of dots) dot.classlist.remove("active");
  dot[i].classlist.add("active");
}

for (let j = 0; j < dots.length; j++) {
  dots[j].addEventListener("click", function () {
    setActive(j);
  });
}
