let navElement=["MAKEUP","HAIR CARE","SKIN CARE", "HAIRSTYLES","HEALTH & WELLNESS","NEWS","SIGN IN","SIGN UP","ABOUT US"]
let MAKEUPele=["BRIDAL MAKEUP","CELEBRITY MAKEUP","EYE MAKE UP","LIP MAKE UP","MAKEUP IDEAS","MEHANDI IDEAS","MEHANDI DESIGNS","NAIL ART"];
let HAIRCAREele=["BASIC HAIR CARE","DANDRUFF","DRY HAIR CARE","HAIR CARE IDEAS","HAIR CARE SOLUTIONS","HAIR COLOUR","HAIR FALL","HAIR GROWTH","HAIR TREATMENT","OILY HAIR CARE"]
let SKINCAREele=["ACNE","ANTI AGEING","BEAUTY SECRETS","DRY SKIN","FACE CARE TIPS","FACE PACKS AND MASKS","GLOWING SKIN","HOMEMADE TIPS","OILY SKIN","PERFUMES","SKIN CARE IDEAS","SKIN CARE PROBLEMS","SUNSCREEN"]
let HAIRSTYLESele=["BOB HAIRSTYLES","BRAID HAIRSTYLES","BRIDAL HAIRSTYLES","BUN HAIRSTYLES","CELEBRITY HAIRSTYLES","CURLY HAIRSTYLES","DIFFERENT HAIRSTYLES","HAIRSTYLE TRENDS","LONG HAIRSTYLES","MEDIUM HAIRSTYLES","SHORT HAIRSTYLES","TEEN HAIRSTYLES"]
let HEALTHele=["DIET TIPS","HEALTH DEVICES","HEALTHY FOOD","HOME REMEDIES","INGREDIENTS AND USES","NUTRITION","FITNESS","WEIGHT LOSS","WEIGHT GAIN","YOGA"]
let NEWSele=["COLLABORATION","FASHION","BRAND NEWS","CELEBRITY NEWS","INSPIRATION","TOP 10'S","TRENDS","WOMEN EMPOWERMENT","RELATIONSHIPS","DISCOVER"]
let ABOUTUSele=["OUR TEAM","EDITORIAL POLICY","MEDICAL REVIEW BOARD","EXPERT PANEL","CONTACT US"]


let signupArr=JSON.parse(localStorage.getItem("signupDetails"))||[];
document.querySelector("#signIn").addEventListener("click",signinPage);
document.querySelector("form").addEventListener("submit",signfunc);
document.querySelector(".hambur").addEventListener("click",navHambur);
document.querySelector("#toHomePage>span").addEventListener("click",goToHomePage);

function signinPage(){
    window.location.href="signIn.html";
   }
let Specialization=document.querySelector("#Specialization");
function signfunc(event){
    event.preventDefault();
    let signupObj={
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        password : document.getElementById("password").value,
        Specialization:document.querySelector("#Specialization").value,
        exp :document.querySelector("#Experience").value
    };
    if(signupObj.name==""||signupObj.password==""||signupObj.email==""||signupObj.Specialization==""||signupObj.exp==""){
     alert ("Fill the Details ");
    } else{
        signupArr.push(signupObj);
        localStorage.setItem("signupDetails",JSON.stringify(signupArr));
        alert("Successfully signed up");
        window.location.href="signIn.html";
    }
    }

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