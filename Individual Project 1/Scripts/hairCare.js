let navElement=["MAKEUP","HAIR CARE","SKIN CARE", "HAIRSTYLES","HEALTH & WELLNESS","NEWS","SIGN IN","SIGN UP","ABOUT US"]
let MAKEUPele=["BRIDAL MAKEUP","CELEBRITY MAKEUP","EYE MAKE UP","LIP MAKE UP","MAKEUP IDEAS","MEHANDI IDEAS","MEHANDI DESIGNS","NAIL ART"];
let HAIRCAREele=["BASIC HAIR CARE","DANDRUFF","DRY HAIR CARE","HAIR CARE IDEAS","HAIR CARE SOLUTIONS","HAIR COLOUR","HAIR FALL","HAIR GROWTH","HAIR TREATMENT","OILY HAIR CARE"]
let SKINCAREele=["ACNE","ANTI AGEING","BEAUTY SECRETS","DRY SKIN","FACE CARE TIPS","FACE PACKS AND MASKS","GLOWING SKIN","HOMEMADE TIPS","OILY SKIN","PERFUMES","SKIN CARE IDEAS","SKIN CARE PROBLEMS","SUNSCREEN"]
let HAIRSTYLESele=["BOB HAIRSTYLES","BRAID HAIRSTYLES","BRIDAL HAIRSTYLES","BUN HAIRSTYLES","CELEBRITY HAIRSTYLES","CURLY HAIRSTYLES","DIFFERENT HAIRSTYLES","HAIRSTYLE TRENDS","LONG HAIRSTYLES","MEDIUM HAIRSTYLES","SHORT HAIRSTYLES","TEEN HAIRSTYLES"]
let HEALTHele=["DIET TIPS","HEALTH DEVICES","HEALTHY FOOD","HOME REMEDIES","INGREDIENTS AND USES","NUTRITION","FITNESS","WEIGHT LOSS","WEIGHT GAIN","YOGA"]
let NEWSele=["COLLABORATION","FASHION","BRAND NEWS","CELEBRITY NEWS","INSPIRATION","TOP 10'S","TRENDS","WOMEN EMPOWERMENT","RELATIONSHIPS","DISCOVER"]
let ABOUTUSele=["OUR TEAM","EDITORIAL POLICY","MEDICAL REVIEW BOARD","EXPERT PANEL","CONTACT US"]





let hairCareCategories=["Dry Hair Care", "Hair Care Solutions",  "Dandruff", "Hair Treatment", "Basic Hair Care", "Hair Fall","Hair Growth", "Hair Colour", "Hair Care Ideas"]
let hairCareTips=[
    {
      image:"https://cdn2.stylecraze.com/wp-content/uploads/2016/06/How-To-Apply-Oil-On-Hair-A-Step-By-Step-Guide.jpg.webp",
      text:"How To Apply Oil On Hair: A Step-By-Step Guide",
      name:"BY ARSHIYA SYEDA"
    },
    {
        image:"https://cdn2.stylecraze.com/wp-content/uploads/2014/02/Vegetal-Hair-Dye-%E2%80%93-What-Is-It-And-Why-To-Use-It.jpg.webp",
        text:"Vegetal Hair Dye – What Is It And Why To Use It?",
        name:"BY JYOTSANA RAO"
      },
      {
        image:"https://cdn2.stylecraze.com/wp-content/uploads/2014/10/3196-12-Amazing-Benefits-Of-Hair-Texture-Powder-ss.jpg.webp",
        text:"12 Amazing Benefits Of Hair Texture Powder",
        name:"BY JYOTSANA RAO"
      }
]
let otherHairCareTips=[
    {
      image:"https://cdn2.stylecraze.com/wp-content/uploads/2017/10/25-Mesmerizing-Mermaid-Hair-Color-Ideas.jpg.webp",
      text:"25 Mesmerizing Mermaid Hair Color Ideas",
      name:"REVIEWED BY MADISON DUFOUR, BARBER & COSMETOLOGIST, BARBER & COSMETOLOGIST"
    },
    {
        image:"https://cdn2.stylecraze.com/wp-content/uploads/2017/10/20-Radical-Styling-Ideas-For-Your-Red-Ombre-Hair.jpg.webp",
        text:"20 Radical Styling Ideas For Your Red Ombre Hair",
        name:"BY JYOTSANA RAO"
      },
    
      {
        image:"https://cdn2.stylecraze.com/wp-content/uploads/2017/10/20-Breathtaking-Purple-Ombre-Hair-Color-Ideas.jpg.webp",
        text:"20 Breathtaking Purple Ombre Hair Color Ideas",
        name:"BY ARSHIYA SYEDA"
      },
    
      {
        image:"https://cdn2.stylecraze.com/wp-content/uploads/2017/10/Top-25-Light-Ash-Blonde-Highlights-Hair-Color-Ideas-For-Blonde-And-Brown-Hair.jpg.webp",
        text:"Top 25 Light Ash Blonde Highlights Hair Color Ideas For",
        name:"MEDICALLY REVIEWED BY TIFFANY YOUNG, CERTIFIED TRICHOLOGY PRACTITIONER, CERTIFIED TRICHOLOGY PRACTITIONER"
      },
    
      {
        image:"https://cdn2.stylecraze.com/wp-content/uploads/2017/11/20-Gorgeous-Light-Brown-Hair-Color-Ideas.jpg.webp",
        text:"20 Gorgeous Light Brown Hair Color Ideas",
        name:"REVIEWED BY TIFFANY YOUNG, CERTIFIED TRICHOLOGY PRACTITIONER, CERTIFIED TRICHOLOGY PRACTITIONER"
      },
    
      {
        image:"https://cdn2.stylecraze.com/wp-content/uploads/2017/11/20-Amazing-Dark-Ombre-Hair-Color-Ideas.jpg.webp",
        text:"20 Amazing Dark Ombre Hair Color Ideas",
        name:"BY ARSHIYA SYEDA"
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

hairCareCategories.forEach(function (ele,i){
    
    let hairCareCategoriesBtns=document.createElement("button");
    hairCareCategoriesBtns.innerText=ele;
    document.querySelector("#hairCareCategories").append(hairCareCategoriesBtns);
})
hairCareTips.forEach(function (ele){
    let div=document.createElement("div");
    let hairCareTipsImage=document.createElement("img");
    hairCareTipsImage.src=ele.image;
    let hairCareTipsText=document.createElement("p");
    hairCareTipsText.innerText=ele.text;
    let hairCareTipsName=document.createElement("p");
    hairCareTipsName.innerText=ele.name;
    div.append(hairCareTipsImage,hairCareTipsText,hairCareTipsName);
    document.querySelector("#hairCareTips").append(div);
})
otherHairCareTips.forEach(function (ele){
    let div=document.createElement("div");
    let otherHairCareTipsImage=document.createElement("img");
    otherHairCareTipsImage.src=ele.image;
    let otherHairCareTipsText=document.createElement("p");
    otherHairCareTipsText.innerText=ele.text;
    let otherHairCareTipsName=document.createElement("p");
    otherHairCareTipsName.innerText=ele.name;
    div.append(otherHairCareTipsImage,otherHairCareTipsText,otherHairCareTipsName);
    document.querySelector("#otherHairCareTips").append(div);
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