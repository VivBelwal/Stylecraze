let navElement=["MAKEUP","HAIR CARE","SKIN CARE", "HAIRSTYLES","HEALTH & WELLNESS","NEWS","SIGN IN","SIGN UP","ABOUT US"]
let topSection=[
    {
        image:"https://cdn2.stylecraze.com/wp-content/uploads/2019/03/How-To-Style-Converse-Shoes-With-Dresses--17-Outfit-Ideas-1.jpg.webp",
        text : " How To Style Converse Shoes With Dresses – 17 Outfit Ideas " 
    },
    {
         image:"https://cdn2.stylecraze.com/wp-content/uploads/2019/03/27-Cute-Summer-Date-Ideas-To-Explore-With-Your-Loved-One.jpg.webp",
         text:"27 Cute Summer Date Ideas To Explore With Your Loved One"
    },
    {
       image:  "https://cdn2.stylecraze.com/wp-content/uploads/2019/03/A-Complete-History-Of-Lipsticks.jpg.webp",
        text:"A Complete History Of Lipsticks"  
    }
    ]
let makeUpTips=[
    {
      image:"https://cdn2.stylecraze.com/wp-content/uploads/2019/02/7-Different-Nail-Shapes-And-How-To-Achieve-Them.jpg.webp",
      text:"7 Different Nail Shapes And How To Achieve Them",
      name:"Shalini Roy"
    },
    {
        image:"https://cdn2.stylecraze.com/wp-content/uploads/2019/02/How-To-Choose-The-Right-Concealer--Tips-On-Shades-And-Formulas.jpg.webp",
        text:"How To Choose The Right Concealer – Tips On Shades",
        name:"Esha Saxena"  
    },
    {
        image:"https://cdn2.stylecraze.com/wp-content/uploads/2019/02/Simple-Gold-Eye-Makeup-Tutorial.jpg.webp",
        text:"Simple Gold Eye Makeup Tutorial",
        name:"Shalini Roy"
    }

]
navElement.forEach(function (ele,i){
  let navElement1=document.createElement("div");
  navElement1.innerText=ele;
  navElement1.addEventListener("click", function (){
     moveBetweenPages(ele,i);
  })
  document.querySelector("#ele").append(navElement1);
})
topSection.forEach(function (ele){
    let topSectionDiv=document.createElement("div");
    let topSectionImg=document.createElement("img");
    topSectionImg.src=ele.image;
    let topSectionText=document.createElement("p");
    topSectionText.innerText=ele.text;
    topSectionDiv.append(topSectionImg,topSectionText);
    document.querySelector("#homeTopSection").append(topSectionDiv);
})
makeUpTips.forEach(function (ele){
    let div=document.createElement("div");
    let makeUpTipsImage=document.createElement("img");
    makeUpTipsImage.src=ele.image;
    let makeUpTipsText=document.createElement("p");
    makeUpTipsText.innerText=ele.text;
    let makeUpTipsName=document.createElement("p");
    makeUpTipsName.innerText=ele.name;
    div.append(makeUpTipsImage,makeUpTipsText,makeUpTipsName);
    document.querySelector("#makeUpTips").append(div);
})
function  moveBetweenPages(ele,i){
    if(i==0){
        window.location.href="makeUp.html";
    }
    if(i==1){
        window.location.href="hairCare.html";
    }
    if(i==2){
        window.location.href="skinCare.html";
    }
    if(i==3){
        window.location.href="hairStyles.html";
    }
    if(i==6){
        window.location.href="signIn.html";
    }
    if(i==7){
        window.location.href="signUp.html";
    }
}
