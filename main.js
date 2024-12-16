///DOM ILE OLAN TAPSIRIQLAR

//TAPSIRIQ 1
const pragraf = document.querySelector("#intro");
pragraf.innerHTML = "Updated content via innerHTML";

//TAPSIRIQ 2
const box = document.querySelectorAll(".box");
box.forEach((item) => (item.innerHTML = "This is a box"));
//TAPSIRIQ 3

const list = document.querySelectorAll("li");
list.forEach((item) => (item.innerText = "List Item Updated"));

//DORDUNCU TAPSIRIQ
const title = document.querySelector("h2");
title.innerHTML = "Title Updated";
//BESINCI TAPSIRIQ
const text = document.querySelector("#welcomeText");
text.innerHTML = "Welcome to my website!";
//ALTINCI TAPSIRIQ
const myImage = document.querySelector("#myImage");

function changeImage() {
  myImage.src =
    "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBhUIBwgVFhUXFxYbFhYYGRcgFRsVHB0iHRsdGRofICosHiYxIRoeJTMoLSotOjAvIyQ2ODstQyotLy0BCgoKDQ0OEhAQFjclFRkrKys3KzcrKy0rLTcrNysrLSstNysrKysrKysrKy0rKysrKysrKysrKysrKysrKysrK//AABEIAMgAyAMBIgACEQEDEQH/xAAcAAEAAwEBAQEBAAAAAAAAAAAAAwcIBgQFAQL/xAA+EAACAQEEBAsGBAUFAAAAAAAAAQIDBAUGEQc0crESISIxNkFRYXOBwTJScZGhshMUQpIjYqLR4QgVF1NV/8QAGAEBAAMBAAAAAAAAAAAAAAAAAAECAwT/xAAeEQEBAAICAwEBAAAAAAAAAAAAAQIRAzESITJRQf/aAAwDAQACEQMRAD8Aqu0axLae8jJLRrEtp7yM2cYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACS0axLae8jJLRrEtp7yMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACS0axLae8jJLRrEtp7yMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACS0axLae8jJLRrEtp7yMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACS0axLae8jJLRrEtp7yMAAAAAAAADoMFYWr4tvSVgs9pjTag55yTayTSy4vidx/wAH3l/7NL9szwaBul8/An90TQBTK2VthhLGccY6NLZhW5v9ztF4QmuFGPBjGSfK+JwhofTl0GfjU/UzwTLuKZyS6j9jFzkowTbfMussHDeiO/r2pKvb5Rs8HxrhrOo1sLm82jstD2BqFisEb/vOipVaizpJ/oh1S+L+i8y1SLl+L48f6qejoPuxQ/jXvWb7owS9Tx3joPjwG7tvl59SqQ4v3RfoXICvlV/DFlnE+CL+wzy7wsbdPqqw5VPzf6fPI5w2HaY0Z2eUbTFODT4SllweD1559RlfGcrnniSq8O02qHC5PHxN/qceyOfMXxu2WeGnxAAWZgAAAAAAAJLRrEtp7yMktGsS2nvIwAAAAAAAALK0C9L5+BP7ol/lAaBel8/An90S/wAzy7dHH8q+05dBn41P1M+WWmq1qjSb9qSXzZoPTl0GfjU/UzzCThNTi+NPNE49M+T6bDo0oUKKo0o5RikkuxLmJD5uHb1o35clK8rPLiqQTfdL9S8nmj6PUUdEZtxHpDxZXvapF2+dBRnJKnDk8HJ8z62/iT3FpYxLdtVfna6tEOuM0lLymln88y6sR4KuDEec7ysC4f8A2R5NT9y5/PMq7EOha32fOrcNtjVXuT5M/gnzP6F5YxuOU9xHpA0pQv25Y3fckJ01UX8dy9pL3E11PrfZ5lWntva6bwue0/lr0sc6cuySyz70+vyPEWnpnlbb7AASqAAAAAAAAktGsS2nvIyS0axLae8jAAAAAAAAAsrQL0vn4E/uiX+UBoF6Xz8Cf3RL/M8u3Rx/KvdOPQZ+NT9TPBofTj0GfjU/UzwTj0z5e3baOsfWjCNd2e0QdSzzecoL2ov3oeq6y/bixFdOILP+NdNtjPtjny1tR50ZSstltFsrfg2ShKcsm+DFNyySzfEj8s9or2Suq1mqyhKL4pRbUk/iibjsxzsbDP0z3hzS9ft2ZUrzjG0Q7ZcVXLaXP5oubCOKbuxXd35y7m1wXlOEvajLv/uUs02xzleu/rju6/7A7FelnU4vm96L7YvqZmXGWHK+F7+ndtZ5pcdOXvU3zP0fejVpTv8AqEskPwrLbEuPOpBvu4mvX5k41Xkx9bUwADRzgAAAAAAAJLRrEtp7yMktGsS2nvIwAAAAAAAfTw7cdsxFesbtu/g8OSbXCeSyis3xkDt9AsW8XVGlzUJfdEv84TRngN4Qo1K9srxnWqJJ8HPgxguPJN8/HuR3Znl7rpwmor3Tl0GfjU/Uz3SpTrVVSowbk2kklm23zJF3af7xjTuahdkZcqdRza/lgmt8/oVHhi+6mHr7p3nSoQm4P2ZLi8ux95fHplyfS+dF+B4YXu781bYJ2molw37kfcXr/gnxXo0uHEdR2h03RqvnqU8lm/5o8z+j7z14Ux3ceJ6SVltKhV66M2lNPu97yOoKW3baSWKQraD7wVXKjfNJx7XCSl8uPeWNgHB1DB12Ss8LQ6k6klKc8slxLJJLs/udUBu0mEnQUhp/vSnVt9nuqnLN01Kc+5zyUV8k/miwsb46uvCtlcZ1VOvlyKMXx59s/dRm69rytV73lO8LdU4U6km5P0XcicYpyZetPIADRgAAAAAAAAktGsS2nvIyS0axLae8jAAAAAAB3Ohbp/S2Kv2M4Y+vhS/quGr8hetnoqcoKS4Mm8nwouPV8SKnG6rWJ472vOx3PYJW68a6hCK429y7X3FJ2rTZflSHBs930IPt5b9ThcQYkvfEVf8AGve2ynlzR5oLZiuJFPFteWfx6scYlrYqxBO8JpqHs04+7TXN5vnfxOfALsbdv2LcZZxeT7Tpbqx/im6oqFlvebiv0zymv6szmQCXXSwY6YcVqOTlRff+H/k+ZeekrFl5U3TqXq4RfVTjGH9SWf1ORA1E+V/X9VKk6s3OpNtvnbebZ/IBKoAAAAAAAAAAJLRrEtp7yMktGsS2nvIwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJLRrEtp7yMktGsS2nvIwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJLRrEtp7yMktGsS2nvIwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJLRrEtp7yMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/9k";
}

//YEDDINCI TAPSIRIQ

function changeStyles() {
  const paragraph = document.getElementById("myParagraph");
  paragraph.style.color = "red";
  paragraph.style.backgroundColor = "green";
  paragraph.style.fontSize = "30px";
  paragraph.style.padding = "10px";
  paragraph.style.border = "1px solid black";
  paragraph.style.textAlign = "center";
  paragraph.style.borderRadius = "5px";
}
function styleBox() {
  const box = document.getElementById("myBox");
  // Change width
  box.style.width = "250px";
  // Change height
  box.style.height = "150px";

  // Change background color
  box.style.backgroundColor = "yellow";

  // Add rounded corners
  box.style.borderRadius = "15px";

  // Add shadow effect
  box.style.boxShadow = "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px";

  // Add border
  box.style.border="1px solid red"

  // Adjust line height to center text vertically

  // Add smooth transition for style changes
  box.style.transition="all .3s"
}
