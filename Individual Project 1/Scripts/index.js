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
let hairStyleTips=[
    {
      image:"https://cdn2.stylecraze.com/wp-content/uploads/2015/06/40-Best-Ombre-Hair-Color-Ideas-And-Styles-To-Try-In-2022.jpg.webp",
      text:"40 Best Ombre Hair Color Ideas And Styles To Try In",
      name:"Arshiya Syeda"
    },
    {
        image:"https://cdn2.stylecraze.com/wp-content/uploads/2015/06/5-Trendy-Hairstyles-For-Different-Face-Shapes.jpg.webp",
        text:"5 Trendy Hairstyles For Different Face Shapes",
        name:"Arshiya Syeda" 
    },
    {
        image:"https://cdn2.stylecraze.com/wp-content/uploads/2015/06/50-Fabulous-Messy-Hairstyles-For-Women-To-Try.jpg.webp",
        text:"50 Fabulous Messy Hairstyles For Women To Try",
        name:"Anjali Sayee"
    }

]
let healthTips=[
    {
      image:"https://cdn2.stylecraze.com/wp-content/uploads/2013/12/11-Best-Foods-To-Help-Children-Grow-Taller.jpg.webp",
      text:"11 Best Foods To Help Children Grow Taller",
      name:"Medically Reviewed by Reda Elmardi, RDN, RDN"
    },
    {
        image:"https://cdn2.stylecraze.com/wp-content/uploads/2013/12/15-Arm-Workouts-Without-Weights-To-Lose-Arm-Fat-Fast-At-Home.jpg.webp",
        text:"15 Arm Workouts Without Weights To Lose Arm Fat ",
        name:"Medically Reviewed by Dr. Sudhansu Singh, BPT, BPT" 
    },
    {
        image:"https://cdn2.stylecraze.com/wp-content/uploads/2021/11/Do-Home-Remedies-For-Carpal-Tunnel-Really-Have-Any-Effect.jpg.webp",
        text:"Do Home Remedies For Carpal Tunnel Really Have",
        name:"Sanchari Bhattacharya"
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
 hairStyleTips.forEach(function (ele){
    let div=document.createElement("div");
    let hairStyleTipsImage=document.createElement("img");
    hairStyleTipsImage.src=ele.image;
    let hairStyleTipsText=document.createElement("p");
    hairStyleTipsText.innerText=ele.text;
    let hairStyleTipsName=document.createElement("p");
    hairStyleTipsName.innerText=ele.name;
    div.append(hairStyleTipsImage,hairStyleTipsText,hairStyleTipsName);
    document.querySelector("#hairStyleTips").append(div);
})
healthTips.forEach(function (ele){
    let div=document.createElement("div");
    let healthTipsImage=document.createElement("img");
    healthTipsImage.src=ele.image;
    let healthTipsText=document.createElement("p");
    healthTipsText.innerText=ele.text;
    let healthTipsName=document.createElement("p");
    healthTipsName.innerText=ele.name;
    div.append(healthTipsImage,healthTipsText,healthTipsName);
    document.querySelector("#healthTips").append(div);
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
