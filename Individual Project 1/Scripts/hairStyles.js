let navElement=["MAKEUP","HAIR CARE","SKIN CARE", "HAIRSTYLES","HEALTH & WELLNESS","NEWS","SIGN IN","SIGN UP","ABOUT US"]
let MAKEUPele=["BRIDAL MAKEUP","CELEBRITY MAKEUP","EYE MAKE UP","LIP MAKE UP","MAKEUP IDEAS","MEHANDI IDEAS","MEHANDI DESIGNS","NAIL ART"];
let HAIRCAREele=["BASIC HAIR CARE","DANDRUFF","DRY HAIR CARE","HAIR CARE IDEAS","HAIR CARE SOLUTIONS","HAIR COLOUR","HAIR FALL","HAIR GROWTH","HAIR TREATMENT","OILY HAIR CARE"]
let SKINCAREele=["ACNE","ANTI AGEING","BEAUTY SECRETS","DRY SKIN","FACE CARE TIPS","FACE PACKS AND MASKS","GLOWING SKIN","HOMEMADE TIPS","OILY SKIN","PERFUMES","SKIN CARE IDEAS","SKIN CARE PROBLEMS","SUNSCREEN"]
let HAIRSTYLESele=["BOB HAIRSTYLES","BRAID HAIRSTYLES","BRIDAL HAIRSTYLES","BUN HAIRSTYLES","CELEBRITY HAIRSTYLES","CURLY HAIRSTYLES","DIFFERENT HAIRSTYLES","HAIRSTYLE TRENDS","LONG HAIRSTYLES","MEDIUM HAIRSTYLES","SHORT HAIRSTYLES","TEEN HAIRSTYLES"]
let HEALTHele=["DIET TIPS","HEALTH DEVICES","HEALTHY FOOD","HOME REMEDIES","INGREDIENTS AND USES","NUTRITION","FITNESS","WEIGHT LOSS","WEIGHT GAIN","YOGA"]
let NEWSele=["COLLABORATION","FASHION","BRAND NEWS","CELEBRITY NEWS","INSPIRATION","TOP 10'S","TRENDS","WOMEN EMPOWERMENT","RELATIONSHIPS","DISCOVER"]
let ABOUTUSele=["OUR TEAM","EDITORIAL POLICY","MEDICAL REVIEW BOARD","EXPERT PANEL","CONTACT US"]

let hairStylesCategories=["Bun Hairstyles","Updo Hairstyles","Teen Hairstyles","Wavy Hairstyles","Braid Hairstyles","Hairstyle Trends","Curly Hairstyles","Bob Hairstyles","Bridal Hairstyles","Medium Hairstyles","Celebrity Hairstyles","Long Hairstyles"]
let hairStyleTips=[
    {
       image:"https://cdn2.stylecraze.com/wp-content/uploads/2018/10/Should-You-Get-Bangs-The-Truth.jpg.webp",
       text:"Should I Get Bangs? Things To Consider And Styling Tips",
       name:"BY ANJALI SAYEE" 
    },
    {
        image:"https://cdn2.stylecraze.com/wp-content/uploads/2018/05/20-Best-Hairstyles-For-Senegalese-Twists.jpg.webp",
        text:"20 Gorgeous Senegalese Twist Hairstyles For Women To Try",
        name:"BY ANJALI SAYEE" 
     },
     {
        image:"https://cdn2.stylecraze.com/wp-content/uploads/2014/02/Top-20-Hair-Salons-In-Delhi.jpg.webp",
        text:"Top 20 Hair Salons In Delhi",
        name:"BY ANJALI SAYEE" 
     },
]

let otherHairStyleTips=[
    {
        image:"https://cdn2.stylecraze.com/wp-content/uploads/2018/05/Best-Bantu-Knots-Hairstyles.jpg.webp",
        text:"20 Best Bantu Knots Hairstyles For All Hair Types To Try",
        name:'BY ANJALI SAYEE'
    },
    {
        image:"https://cdn2.stylecraze.com/wp-content/uploads/2015/06/20-Best-Short-Spiky-Hairstyles-You-Can-Try-Right-Now.jpg.webp",
        text:"20 Best Short Spiky Hairstyles For Women To Try",
        name:'BY ANJALI SAYEE'
    },
    {
        image:"https://cdn2.stylecraze.com/wp-content/uploads/2014/02/985-Best-Hairstylists-In-Kolkata.jpg.webp",
        text:"Best Hairstylists In Kolkata – Our Top 10 Picks",
        name:'BY JYOTSANA RAO'
    },
    {
        image:"https://cdn2.stylecraze.com/wp-content/uploads/2014/01/749-Top-10-Hair-Stylists-In-Chennai.jpg.webp",
        text:"Top 10 Hair Stylists In Chennai",
        name:"BY JYOTSANA RAO"
    },
    {
        image:"https://cdn2.stylecraze.com/wp-content/uploads/2013/08/Best-Chinese-Hairstyles-Our-Top-10-1.jpg.webp",
        text:"Best Chinese Hairstyles – Our Top 10",
        name:"BY JYOTSANA RAO"
    },
    {
        image:"https://cdn2.stylecraze.com/wp-content/uploads/2013/07/30-Beautiful-Hairstyles-For-Shoulder-Length-Hair.jpg.webp",
        text:"30 Beautiful And Trendy Hairstyles For Shoulder Length Hair",
        name:"BY ANJALI SAYEE"
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
    let dropDownEle=document.createElement("div");
    navElement1.append(dropDownEle);
    let List=document.createElement("ul");
    dropDownEle.append(List);
    document.querySelector("#ele").append(navElement1);
  })

  hairStylesCategories.forEach(function (ele,i){
    
    let hairStylesCategoriesBtns=document.createElement("button");
    hairStylesCategoriesBtns.innerText=ele;
    document.querySelector("#hairStylesCategories").append(hairStylesCategoriesBtns);
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
otherHairStyleTips.forEach(function (ele){
    let div=document.createElement("div");
    let otherHairStyleTipsImage=document.createElement("img");
    otherHairStyleTipsImage.src=ele.image;
    let otherHairStyleTipsText=document.createElement("p");
    otherHairStyleTipsText.innerText=ele.text;
    let otherHairStyleTipsName=document.createElement("p");
    otherHairStyleTipsName.innerText=ele.name;
    div.append(otherHairStyleTipsImage,otherHairStyleTipsText,otherHairStyleTipsName);
    document.querySelector("#otherHairStyleTips").append(div);
})

MAKEUPele.forEach(function(ele){
    let makeUpListEle=document.createElement("li");
    makeUpListEle.innerText=ele;
    document.querySelector("#ele>div:nth-child(1)>div>ul").append(makeUpListEle)  ;
  })
  HAIRCAREele.forEach(function(ele){
      let hairCareListEle=document.createElement("li");
      hairCareListEle.innerText=ele;
      document.querySelector("#ele>div:nth-child(2)>div>ul").append(hairCareListEle)  ;
    })
    SKINCAREele.forEach(function(ele){
      let skinCareEle=document.createElement("li");
      skinCareEle.innerText=ele;
      document.querySelector("#ele>div:nth-child(3)>div>ul").append(skinCareEle)  ;
    })
    HAIRSTYLESele.forEach(function(ele){
      let hairStylesEle=document.createElement("li");
      hairStylesEle.innerText=ele;
      document.querySelector("#ele>div:nth-child(4)>div>ul").append(hairStylesEle)  ;
    })
    HEALTHele.forEach(function(ele){
      let healthEle=document.createElement("li");
      healthEle.innerText=ele;
      document.querySelector("#ele>div:nth-child(5)>div>ul").append(healthEle)  ;
    })
    NEWSele.forEach(function(ele){
      let newsEle=document.createElement("li");
      newsEle.innerText=ele;
      document.querySelector("#ele>div:nth-child(6)>div>ul").append(newsEle)  ;
    })
    ABOUTUSele.forEach(function(ele){
      let aboutEle=document.createElement("li");
      aboutEle.innerText=ele;
      document.querySelector("#ele>div:nth-child(9)>div>ul").append(aboutEle)  ;
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