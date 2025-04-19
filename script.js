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
  document.addEventListener("DOMContentLoaded", () => {
  let img11 = document.querySelector("#img1");
  
  img11.addEventListener("click", () => 
  {
          window.open("https://www.amazon.in/s?bbn=1388921031&rh=n%3A1388921031%2Cp_89%3AboAt&_encoding=UTF8&content-id=amzn1.sym.82b20790-8877-4d70-8f73-9d8246e460aa&pd_rd_r=7382110d-b385-4553-a5dd-b3aa630c89f0&pd_rd_w=6Pk87&pd_rd_wg=xKHdb&pf_rd_p=82b20790-8877-4d70-8f73-9d8246e460aa&pf_rd_r=KN6W5NF1G74NX2EPE68C&ref=pd_hp_d_atf_unk", "_self"); // Redirect
  });
  let image2 = document.querySelector("#img2");
  image2.addEventListener("click",()=>
  {
         window.open("https://www.amazon.in/b/?_encoding=UTF8&node=1380442031&pd_rd_w=snR6N&content-id=amzn1.sym.f8e82c51-0408-4554-a158-9be4d776850d&pf_rd_p=f8e82c51-0408-4554-a158-9be4d776850d&pf_rd_r=FQ4HXJV6KYQ1GD6XWFZ4&pd_rd_wg=ydyFU&pd_rd_r=ee7ba847-4871-42e1-9d23-be02b6cdfe18&ref_=pd_hp_d_atf_unk")
  });
  
});

// function lfloating_click()
// {

// };

// function rfloating_click()
// {

// };
