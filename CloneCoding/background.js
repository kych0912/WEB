const images = ["0.jpg","1.jpg","2.jpg","3.jpg","4.jpg","5.jpg"];
const chooseimage = images[Math.round(Math.random()*images.length)];
console.log(chooseimage);

const bgimage = document.createElement("img");

bgimage.src = `Images/${chooseimage}`;
document.body.appendChild(bgimage);