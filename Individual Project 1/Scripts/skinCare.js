let navElement=["MAKEUP","HAIR CARE","SKIN CARE", "HAIRSTYLES","HEALTH & WELLNESS","NEWS","SIGN IN","SIGN UP","ABOUT US"]
let skinCareCategories=["Sunscreen","Anti Ageing","Dry Skin","Glowing Skin","Oily Skin","Homemade Tips","Perfumes","Skin Care Problems","Beauty Secrets","Face Care Tips","Acne","Face Packs And Masks","Skin Care Ideas"]
let skinCareTips=[
    {
      image:"https://cdn2.stylecraze.com/wp-content/uploads/2021/08/Dermatologist-Vs--Esthetician-The-Difference-Explained.jpg.webp",
      text:"Dermatologist Vs. Esthetician: Differences & Who To See When",
      name:"MEDICALLY REVIEWED BY DR. PRIYA GILL, MBBCH, MRCP, MBBCH, MRCP"
    },
    {
        image:"https://cdn2.stylecraze.com/wp-content/uploads/2014/08/10-Tips-To-Make-Your-Baby%E2%80%99s-Skin-Glow.jpg.webp",
        text:"9 Tips To Make Your Baby’s Skin Glow",
        name:"REVIEWED BY DR. K. HARISH KUMAR, MD DVL, MD DVL"
      },
      {
        image:"https://cdn2.stylecraze.com/wp-content/uploads/2013/05/Top-20-Most-Beautiful-Asian-Women-18.jpg.webp",
        text:"Top 20 Most Beautiful Asian Women ",
        name:"BY ESHA SAXENA"
      }
   
]
let otherSkinCareTips=[
    {
      image:"https://cdn2.stylecraze.com/wp-content/uploads/2021/03/Essential-Oils-For-Eczema-Benefits-And-How-To-Use-Them.jpg.webp",
      text:"Essential Oils For Eczema: Benefits, How To Use, &",
      name:"MEDICALLY REVIEWED BY DR. SCHWARZBURG, MD, MD"
    },
    {
        image:"https://cdn2.stylecraze.com/wp-content/uploads/2013/01/10-Best-Ayurvedic-Remedies-To-Reduce-Acne-At-Home.jpg.webp",
        text:"10 Best Ayurvedic Remedies To Reduce Acne At Home",
        name:"MEDICALLY REVIEWED BY DR. APARNA K, BAMS, MD, PHD (AYURVEDA), BAMS, MD, PHD (AYURVEDA)"
      },
      {
        image:"https://cdn2.stylecraze.com/wp-content/uploads/2019/03/10-Skin-Rashes-Caused-By-Ulcerative-Colitis.jpg.webp",
        text:"Ulcerative Colitis Rash: Causes, Symptoms, & How To Manage It",
        name:"MEDICALLY REVIEWED BY DR. KENDALL R. ROEHL, MD, FACS, MD, FACS"
      },
      {
        image:"https://cdn2.stylecraze.com/wp-content/uploads/2012/05/How-To-Take-Care-Of-Eyes-Daily-25-Tips-For-Beautiful-Eyes.jpg.webp",
        text:"25 Home Remedies To Improve Eyesight & Tips For Eye Care",
        name:"BY RAMONA SINHA"
      },
      {
        image:"https://cdn2.stylecraze.com/wp-content/uploads/2012/05/Rose-Water-For-Skin-Benefits-Uses-And-Side-Effects.jpg.webp",
        text:"Rose Water For Skin: Benefits, How To Use, And Side Effects",
        name:"MEDICALLY REVIEWED BY DR. VINDHYA L VEERULA, MD, FAAD, MD, FAAD"
      },
      {
        image:"https://cdn2.stylecraze.com/wp-content/uploads/2021/07/What-Is-MSM-And-How-Does-It-Benefit-The-Skin.jpg.webp",
        text:"What Is MSM And How Does It Benefit The Skin?",
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

skinCareCategories.forEach(function (ele,i){
    
    let skinCareCategoriesBtns=document.createElement("button");
    skinCareCategoriesBtns.innerText=ele;
    document.querySelector("#skinCareCategories").append(skinCareCategoriesBtns);
})
skinCareTips.forEach(function (ele){
    let div=document.createElement("div");
    let skinCareTipsImage=document.createElement("img");
    skinCareTipsImage.src=ele.image;
    let skinCareTipsText=document.createElement("p");
    skinCareTipsText.innerText=ele.text;
    let skinCareTipsName=document.createElement("p");
    skinCareTipsName.innerText=ele.name;
    div.append(skinCareTipsImage,skinCareTipsText,skinCareTipsName);
    document.querySelector("#skinCareTips").append(div);
})
otherSkinCareTips.forEach(function (ele){
    let div=document.createElement("div");
    let otherSkinCareTipsImage=document.createElement("img");
    otherSkinCareTipsImage.src=ele.image;
    let otherSkinCareTipsText=document.createElement("p");
    otherSkinCareTipsText.innerText=ele.text;
    let otherSkinCareTipsName=document.createElement("p");
    otherSkinCareTipsName.innerText=ele.name;
    div.append(otherSkinCareTipsImage,otherSkinCareTipsText,otherSkinCareTipsName);
    document.querySelector("#otherSkinCareTips").append(div);
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