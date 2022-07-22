let navElement=["MAKEUP","HAIR CARE","SKIN CARE", "HAIRSTYLES","HEALTH & WELLNESS","NEWS","SIGN IN","SIGN UP","ABOUT US"]
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