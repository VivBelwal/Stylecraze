let navElement=["MAKEUP","HAIR CARE","SKIN CARE", "HAIRSTYLES","HEALTH & WELLNESS","NEWS","SIGN IN","SIGN UP","ABOUT US"]
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
        console.log("Yes");
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