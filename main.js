document.addEventListener("DOMContentLoaded", function() {
const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');



const images = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"];
const alts = {
  'pic1.jpg' : 'Yoru',
  'pic2.jpg' : 'Phoenix',
  'pic3.jpg' : 'Raze',
  'pic4.jpg' : 'Omen',
  'pic5.jpg' : 'Jett'
}



images.forEach(image => {
      const thumbImg = document.createElement("img");
      thumbImg.setAttribute("src", image);
      thumbImg.setAttribute("alt", alts[image.split('/').pop()]);
      thumbImg.addEventListener("click", function() {
        displayedImg.setAttribute("src", image);
      });
      thumbBar.appendChild(thumbImg);
    });
  

    darkBtn.addEventListener("click", function() {
      if (overlay.style.display === "none" || overlay.style.display === "") {
        overlay.style.display = "block";
        darkBtn.textContent = "Undarken";
      } else {
        overlay.style.display = "none";
        darkBtn.textContent = "Darken";
      }
    });
});
