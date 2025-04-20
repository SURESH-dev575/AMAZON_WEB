const images = 
[
    "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Consumables/X-GL/Feb5/PC_Hero_1_3000._CB582457311_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img21/MA2025/GW/UBS/April/Shoes/Unrec/PC/New/1221._CB546844777_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/sthaneka/aprilGW/2x._CB547209600_.jpg", 
];
let curIndex=0;
function prevImage()
{
  curIndex=(curIndex-1 +images.length)%images.length;
  const image1=document.getElementById("slider-image");
  image1.src=images[curIndex]
}
function nextImage()
{
  curIndex=(curIndex+1 +images.length)%images.length;
  const image2=document.getElementById("slider-image");
  image2.src=images[curIndex]
}
setInterval(nextImage, 2000);


let data = [
  [
      "https://m.media-amazon.com/images/I/81f6VbQS+GL._AC_SY400_.jpg",
      "https://m.media-amazon.com/images/I/71hbadRlx-L._AC_SY400_.jpg",
      "https://m.media-amazon.com/images/I/712UAXEcy8L._AC_SY400_.jpg",
      "https://m.media-amazon.com/images/I/6125dmLe5lL._AC_SY400_.jpg"
  ],
  [
      "https://m.media-amazon.com/images/I/71Wnw7s8XHL._AC_SY400_.jpg",
      "https://m.media-amazon.com/images/I/716pIiauYfL._AC_SY400_.jpg",
      "https://m.media-amazon.com/images/I/61fVpsa8rtL._AC_SY400_.jpg",
      "https://m.media-amazon.com/images/I/71nTtUe5XTL._AC_SY400_.jpg"
  ],
  [
      "https://m.media-amazon.com/images/I/71JVMUr1k5L._AC_SY400_.jpg",
      "https://m.media-amazon.com/images/I/71bR33kHbmL._AC_SY400_.jpg",
      "https://m.media-amazon.com/images/I/71bR33kHbmL._AC_SY400_.jpg",
      "https://m.media-amazon.com/images/I/61bT2guXfyL._AC_SY400_.jpg"
  ]
];

let index = 0;

window.onload = function () {
  const image_file = document.querySelector(".image_floating");
  console.log("Image file element: ", image_file);

  
  function process(count) {
    image_file.innerHTML = ''; // ✅ Safe to use now
    data[count].forEach(src_data => {
      const image_data = document.createElement('img');
      image_data.src = src_data;
      image_data.style.margin = "10px";
      image_data.style.height = "200px";
      image_data.style.width = "auto";
      image_file.appendChild(image_data);
    });
  }

  function lfloating_click() {
    index = (index - 1 + data.length) % data.length;
    process(index);
  }

  function rfloating_click() {
    index = (index + 1) % data.length;
    process(index);
  }

  // Expose these functions to the global scope for button onclick to work
  window.lfloating_click = lfloating_click;
  window.rfloating_click = rfloating_click;

  process(index);
};
