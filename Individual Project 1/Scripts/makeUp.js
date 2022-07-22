let navElement=["MAKEUP","HAIR CARE","SKIN CARE", "HAIRSTYLES","HEALTH & WELLNESS","NEWS","SIGN IN","SIGN UP","ABOUT US"]
let makeUpCategories=["Mehandi Designs","Bridal Makeup","Celebrity Makeup","Nail Art","Makeup Ideas","Face Makeup","Lip Make Up","Eye Make Up"]
let makeUpTips=[
    {
      image:"https://cdn2.stylecraze.com/wp-content/uploads/2013/03/How-To-Contour-Your-Face-Tutorial-And-Tips-For-Beginners.jpg.webp",
      text:"How To Contour Your Face – 5 Simple Ways And Tips",
      name:"BY ESHA SAXENA"
    },
    {
        image:"https://cdn2.stylecraze.com/wp-content/uploads/2021/11/How-To-Get-Rid-Of-A-Unibrow-Naturally.jpg.webp",
        text:"How To Get Rid Of A Unibrow Naturally",
        name:"BY ARSHIYA SYEDA"  
    },
    {
        image:"https://cdn2.stylecraze.com/wp-content/uploads/2012/08/3701-How-To-Determine-The-Shape-Of-Your-Face.jpg.webp",
        text:"How To Determine The Shape Of Your Face And 6 Different Types",
        name:"BY SHALINI ROY"
    }
]
let otherMakeUpTips=[
    {
      image:"https://cdn2.stylecraze.com/wp-content/uploads/2012/06/Great-Techniques-Of-Jolie%E2%80%99s-Makeup.jpg.webp",
      text:"Angelina Jolie Makeup Tips & Step-By-Step Tutorial",
      name:"BY NISHA BAGHADIA"
    },
    {
        image:"https://cdn2.stylecraze.com/wp-content/uploads/2015/08/Presenting-Kangana-Ranaut%E2%80%99s-Makeup-And-Beauty-Secrets.jpg.webp",
        text:"Presenting Kangana Ranaut’s Makeup And Beauty Secrets",
        name:"BY NISHA BAGHADIA"
      },
      {
        image:"https://cdn2.stylecraze.com/wp-content/uploads/2013/12/2564-simple-arabic-mehndi-design-for-back-hand.jpg.webp",
        text:"Top 10 Engagement Mehndi Designs You Should Try In 2022",
        name:"BY NISHA BAGHADIA"
      },
      {
        image:"https://cdn2.stylecraze.com/wp-content/uploads/2014/01/Top-10-Most-Loved-Belly-Henna-Designs-You-Can-Try.jpg.webp",
        text:"Top 10 Most Loved Belly Henna Designs You Can Try In 2022",
        name:"BY NISHA BAGHADIA"
      },
      {
        image:"https://cdn2.stylecraze.com/wp-content/uploads/2014/01/1648-Mehandi-Oil-%E2%80%93-What-Is-It-How-To-Use-And-What-Are-Its-Benefits-is.jpg",
        text:"6 Best Benefits Of Mehndi Oil | What Is It And How To Use It",
        name:"BY NISHA BAGHADIA"
      },
      {
        image:"https://cdn2.stylecraze.com/wp-content/uploads/2013/10/3077-Nail-Art-Spas-In-Chennai-ss.jpg.webp",
        text:"Top 10 Nail Art Spas In Chennai",
        name:"BY JYOTSANA RAO"
      }
    
]
document.querySelector(".hambur").addEventListener("click",navHambur);
document.querySelector("#toHomePage>span").addEventListener("click",goToHomePage);
function goToHomePage(){
    window.location.href="index.html";
}
function navHambur(){
     let navElements=document.querySelector("#ele");
    let navImage=document.querySelector("#img>img");
   if(navElements.style.display==="flex"){
       navElements.style.display="none";
        navImage.style.display="block";
         } else{
        navElements.style.display="flex";
        navImage.style.display="none";
       }
    }
navElement.forEach(function (ele,i){
  let navElement1=document.createElement("div");
  navElement1.innerText=ele;
  navElement1.addEventListener("click", function (){
     moveBetweenPages(ele,i);
  })
  document.querySelector("#ele").append(navElement1);
})

makeUpCategories.forEach(function (ele,i){
    
    let makeUpCategoriesBtns=document.createElement("button");
    makeUpCategoriesBtns.innerText=ele;
    document.querySelector("#makeUpCategories").append(makeUpCategoriesBtns);
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
otherMakeUpTips.forEach(function (ele){
    let div=document.createElement("div");
    let otherMakeUpTipsImage=document.createElement("img");
     otherMakeUpTipsImage.src=ele.image;
    let otherMakeUpTipsText=document.createElement("p");
    otherMakeUpTipsText.innerText=ele.text;
    let otherMakeUpTipsName=document.createElement("p");
    otherMakeUpTipsName.innerText=ele.name;
    div.append(otherMakeUpTipsImage,otherMakeUpTipsText,otherMakeUpTipsName);
    document.querySelector("#otherMakeUpTips").append(div);
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