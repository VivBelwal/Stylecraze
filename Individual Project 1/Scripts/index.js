let navElement=["MAKEUP","HAIR CARE","SKIN CARE", "HAIRSTYLES","HEALTH & WELLNESS","NEWS","SIGN IN","SIGN UP","ABOUT US"]
let hoverMakeUpNav=["Bridal Makeup","Celebrity MakeUp","Eye Make Up","Face Makeup","Lip Make up","Makeup Ideas","Mehandi Designs","Nail Art"]
let hoverHairCareNav=["Basic Hair Care","Dandruff","Dry Hair Care","Hair Care Ideas","Hair Care Solutions","Hair Colour","Hair Fall","Hair Growth"]
let hoverSkinCareNav=["Acne","Anti Ageing","Beauty Secrets","Dry Skin","Face Care Tips","Face Packs and Masks","Glowing skin","Homemade Tips"]
let hoverHairStylesNav=["Bob Hairstyles","Braid hairstyles","Bridal Hairstyles","Bun Hairstyles","Celebrity Hairstyles","Curly Hairstyles"]
let hoverHealthNav=["Fitness","health Devices","Ayurveda","Diet Tips","Health Conditions and Diseases","Healthy Food","Home Remedies"]
let hoverNewsNav=["Collaboration","Women Empowerment","Relationships","Discover","Brand News","Celebrity News","Fashion","Inspiration"]

let check=localStorage.getItem("check");
   let signedUser=JSON.parse(localStorage.getItem("signin"));

   if(check==="true"){
    navElement[6]=signedUser.name;
    navElement[7]=signedUser.Specialization;
 }
let bridalMakeUp =[
    {
        
        image:"https://cdn2.stylecraze.com/wp-content/uploads/2013/02/8-Things-To-Consider-For-Your-Bridal-Makeup-Package-1-267x300.jpg.webp",
        text:"8 Essential Things To Look For In A Bridal Makeup Package"
    },
    {
        
        image:"https://cdn2.stylecraze.com/wp-content/uploads/2014/09/2073-Top-5-Naturals-Salon-Bridal-Makeup-Packages-is-267x300.jpg.webp",
        text:"5 Types Of Bridal Makeup Packages To Choose From"
    },
    {
       
        image:"https://cdn2.stylecraze.com/wp-content/uploads/2013/07/750-Top-10-Lakme-Bridal-Salon-Packages-267x300.jpg.webp",
        text:"Top 11 Bridal Makeup Artists In India For Weddings"
    },
    {
      
        image:"https://cdn2.stylecraze.com/wp-content/uploads/2013/10/1731_15-Best-Bridal-Makeup-Artists-In-Delhi_Ss-267x300.jpg.webp",
        text:"15 Best Bridal Makeup Artists In Delhi"
    },
    {
       
        image:"https://cdn2.stylecraze.com/wp-content/uploads/2014/03/41-Top-5-Keya-Seth%E2%80%99s-Bridal-Makeup-Packages-267x300.jpg.webp",
        text:"Top 5 Keya Seth’s Bridal Makeup Packages"
    },
    {
      
        image:"https://cdn2.stylecraze.com/wp-content/uploads/2014/12/1150-60-Best-Indian-Bridal-Makeup-Tips-267x300.jpg.webp",
        text:"60 Best Indian Bridal Makeup Tips And Ideas"
    },
]
let basicHairCare=[
    {
        image:"https://cdn2.stylecraze.com/wp-content/uploads/2012/12/10-Best-Homemade-Conditioners-For-Curly-Hair-267x300.jpg.webp",
        text:"10 Best Homemade Conditioners For Curly Hair"
    },
    {
        image:"https://cdn2.stylecraze.com/wp-content/uploads/2012/07/How-To-Care-For-Your-Hair-In-Monsoon-267x300.jpg.webp",
        text:"How To Care For Your Hair In Monsoon"
    },
    {
        image:"https://cdn2.stylecraze.com/wp-content/uploads/2013/01/Winter-Wavy-and-Curly-Hair-Tips-1-267x300.jpg.webp",
        text:"7 Winter Wavy and Curly Hair Tips"
    },
    {
        image:"https://cdn2.stylecraze.com/wp-content/uploads/2015/05/How-To-Make-Brown-Sugar-Scrub-For-Scalp-267x300.jpg.webp",
        text:"How To Make Brown Sugar Scrub For Scalp? "
    },
    {
        image:"https://cdn2.stylecraze.com/wp-content/uploads/2012/07/3507-Greasy-Scalp-and-Brittle-Ends-How-to-Treat-267x300.jpg.webp",
        text:"Oily Scalp With Dry Ends: How To Deal With It"
    },
    {
        image:"https://cdn2.stylecraze.com/wp-content/uploads/2012/12/3159_How-To-Take-Proper-Care-Of-Your-Hair_iS-267x300.jpg.webp",
        text:"How To Take Proper Care Of Your Hair?"
    }
]
let acne=[
    {
        image:"https://cdn2.stylecraze.com/wp-content/uploads/2013/12/Acne-On-Dry-Skin-Causes-Remedies-And-Tips-267x300.jpg.webp",
        text:"Dry Skin Acne: 12 Home Remedies And Tips To Prevent It"
    },
    {
        image:"https://cdn2.stylecraze.com/wp-content/uploads/2012/11/How-To-Get-Rid-Of-Scars-Naturally-10-Best-Home-Remedies-To-Try-267x300.jpg.webp",
        text:"10 Best Home Remedies To Get Rid Of Facial Scars Naturally"
    },
    {
        image:"https://cdn2.stylecraze.com/wp-content/uploads/2013/02/How-To-Use-Rose-Water-For-Acne-1-267x300.jpg.webp",
        text:"How To Use Rose Water For Acne"
    },
    {
        image:"https://cdn2.stylecraze.com/wp-content/uploads/2013/02/1316-8-Most-Popular-Shahnaz-Husain%E2%80%99s-Beauty-Tips-For-Pimples-267x300.jpg.webp",
        text:"8 Most Popular Shahnaz Husain’s Beauty Tips For Pimples"
    },
    {
        image:"https://cdn2.stylecraze.com/wp-content/uploads/2017/11/7-Simple-Ways-To-Use-Hydrogen-Peroxide-To-Treat-Acne-267x300.jpg.webp",
        text:"7 Simple Ways To Use Hydrogen Peroxide To Treat Acne"
    },
    {
        image:"https://cdn2.stylecraze.com/wp-content/uploads/2012/08/10-Easy-Ways-To-Use-Mint-Leaves-To-Get-Rid-Of-Acne-Scars-267x300.jpg.webp",
        text:"10 Easy Ways To Use Mint Leaves To Get Rid Of Acne Scars"
    }
]

let bobHairStyles=[
    {
        image:"https://cdn2.stylecraze.com/wp-content/uploads/2015/06/86-60-Bob-Haircuts-For-Black-Women-267x300.jpg.webp",
        text:"60 Best Bob Haircuts For Black Women You May Love To Try!"
    },
    {
        image:"https://cdn2.stylecraze.com/wp-content/uploads/2015/05/Chic-Feathered-Hairstyles-Banner-267x300.jpg.webp",
        text:"40 Best Feathered Hairstyles For Short, Medium, And Long Hair"
    },
    {
        image:"https://cdn2.stylecraze.com/wp-content/uploads/2014/01/50-Most-Popular-Bob-Shaped-Hairstyles-267x300.jpg.webp",
        text:"50 Most Popular Bob Hairstyles For Every Type Of Hair"
    },
    {
        image:"https://cdn2.stylecraze.com/wp-content/uploads/2014/01/20-Stunning-Bob-Haircuts-With-Bangs-1-267x300.jpg.webp",
        text:"20 Stunning Bob Haircuts With Bangs | DIY Bob Hairstyles"
    },
    {
        image:"https://cdn2.stylecraze.com/wp-content/uploads/2015/03/10-Stylish-Bob-Hairstyles-For-Oval-Faces-1-267x300.jpg.webp",
        text:"10 Stylish Bob Hairstyles For Oval Faces"
    },
    {
        image:"https://cdn2.stylecraze.com/wp-content/uploads/2013/07/19-Most-Popular-Bob-Hairstyles-2-267x300.jpg.webp",
        text:"19 Most Popular Bob Hairstyles For Women To Try In 2022"
    }
]
let fitness=[
    {
        image:"https://cdn2.stylecraze.com/wp-content/uploads/2020/04/Best-Unloader-Knee-Braces-267x300.jpg.webp",
        text:"The 10 Best Unloader Knee Braces: Reviews And Buying Guide"
    },
    {
        image:"https://cdn2.stylecraze.com/wp-content/uploads/2021/09/10-Memory-Foam-Shoes-Of-2021-For-Added-Comfort-With-Style-267x300.jpg.webp",
        text:"10 Best Memory Foam Shoes Of 2022 – Reviews + Buying Guide"
    },
    {
        image:"https://cdn2.stylecraze.com/wp-content/uploads/2020/10/Top-10-Best-Treadmill-Mats-For-Hardwood-Floors-And-Carpets-In-2020-267x300.jpg.webp",
        text:"Top 10 Best Treadmill Mats For Hardwood Floors And Carpets In 2022"
    },
    {
        image:"https://cdn2.stylecraze.com/wp-content/uploads/2020/08/13-Best-Knee-Braces-For-Skiing-Banner-SC-267x300.jpg.webp",
        text:"13 Best Knee Braces For Skiing + A Buying Guide – 2022"
    },
    {
        image:"https://cdn2.stylecraze.com/wp-content/uploads/2020/09/10-Best-Comfortable-Shoes-For-Jumping-Rope-267x300.jpg.webp",
        text:"10 Best Shoes For Jumping Ropes To Keep You Safe From Injurie"
    },
    {
        image:"https://cdn2.stylecraze.com/wp-content/uploads/2020/11/Best-Jump-Ropes-For-Boxing-267x300.jpg.webp",
        text:"15 Best Jump Ropes For Boxing – Reviews And Guide"
    }
]
let collaboration=[
    {
        image:"https://cdn2.stylecraze.com/wp-content/uploads/2018/05/Anushka-Sharma-Seems-To-Have-Found-A-New-Love-In-Her-Life-%E2%80%93-Which-She-Swears-By-267x300.jpg.webp",
        text:"Anushka Sharma Seems To Have Found A New Love In Her Life – Which She Swears By!"
    },
    {
        image:"https://cdn2.stylecraze.com/wp-content/uploads/2022/04/Brilliant-Ways-To-De-tan-And-Flaunt-Your-Glowing-Skin-267x300.jpg.webp",
        text:"Brilliant Ways To D-Tan And Flaunt Your Glowing Skin"
    },
    {
        image:"https://cdn2.stylecraze.com/wp-content/uploads/2022/06/henna-model-267x300.jpg.webp",
        text:"Why Do Most Women Trust Henna For Coloring Hair Rather Than Chemical Colors"
    },
    {
        image:"https://cdn2.stylecraze.com/wp-content/uploads/2022/06/How-Henna-Has-Remained-An-Evergreen-Beauty-Ingredient-Through-The-Ages-267x300.jpg.webp",
        text:"How Henna Has Remained An Evergreen Beauty Ingredient Through The Ages"
    },
    {
        image:"https://cdn2.stylecraze.com/wp-content/uploads/2022/06/Did-you-know-facial-bleach-has-emerged-as-a-great-alternative-to-threading-and-waxing-facial-hair-267x300.jpg.webp",
        text:"Did you know facial bleach has emerged as a great alternative to threading and waxing facial hair?"
    },
    {
        image:"https://cdn2.stylecraze.com/wp-content/uploads/2022/06/5-Reasons-To-Include-A-Face-Oil-In-Your-Beauty-Regime-267x300.jpg.webp",
        text:"5 Reasons To Include A Face Oil In Your Beauty Regime"
    }
]


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
let medicalReviewers=[
    {
       image:"https://www.stylecraze.com/static-content/aboutus/Vindhya.jpg",
       name:"Dr. Vindhya L Veerula,",
       title:"MD, FAAD"
},
{
    image:"https://cdn2.stylecraze.com/wp-content/uploads/2018/11/Dr-Perpetua-Neo-DClinPsy-UCL-MPhil-1.jpg.webp",
    name:"Dr Perpetua Neo",
    title:"DClinPsy, MPhil"
},
{
    image:"https://cdn2.stylecraze.com/wp-content/uploads/2019/01/Dr-Jill-Carnahan.jpg.webp",
    name:"Dr. Jill Carnahan",
    title:"MD, ABFM, ABIHM, IFMCP"
},
{
    image:"https://cdn2.stylecraze.com/wp-content/uploads/2018/11/Alexandra-Dusenberry-MS-RDN.jpg.webp",
    name:"Alexandra Dusenberry",
    title:"MS, RDN"
},
{
    image:"https://cdn2.stylecraze.com/wp-content/uploads/2019/01/Mollie-Meldahl.jpg.webp",
    name:"Mollie Meldahl",
    title:"RD, LD, CPT"
},
{
    image:"https://cdn2.stylecraze.com/wp-content/uploads/2019/03/Dr.-Kendall-R.-Roehl.jpg.webp",
    name:"Dr. Kendall R. Roehl",
    title:"MD, FACS"
}
]
let testimonialText=[
    {
        text:"“As an introvert, I have always found it hard to break the ice or to continue conversations. The witty yet well-researched content of this website has helped me express myself better in various situations.”",
        name:"-Gayatri Gogoi"
    },
    {
        text:"“I tend to gravitate towards home remedies to resolve various skin and hair issues, and StyleCraze has a wonderful repository of at-home solutions. Excellent work!”",
        name:"-Priya Dikshit"
    },
    {
        text:"“StyleCraze is my guilty pleasure. I have always struggled with weight management, but the tips and information on all the latest diet and fitness trends have helped me stay in shape!”",
        name:"-Priya Thawani"
    },
    {
        text:"“StyleCraze is my go-to site for updates on makeup and fashion. From lipstick reviews to outfit ideas, it has it all!”",
        name:"-Renuka Thakur"
    },
    {
        text:"“I had damaged hair and wanted to get to the root cause of the issues. That was when I came across StyleCraze that has thoroughly researched solutions and tells why and how to go about them. Thank you for being my hair savior!”",
        name:"-Ananya Kataria"
    },
]

navElement.forEach(function (ele,i){
    let navElement1=document.createElement("div");
   
    navElement1.innerText=ele;
    navElement1.addEventListener("click", function (){
       moveBetweenPages(ele,i);
    })
    let dropDownEle=document.createElement("div");
    let dropDownNav=document.createElement("div");
    
    let dropDownContent=document.createElement("div");
    dropDownEle.append(dropDownNav,dropDownContent)
    navElement1.append(dropDownEle);
   
    document.querySelector("#ele").append(navElement1);
  })
  hoverMakeUpNav.forEach(function (ele){
   let hoverMakeUpNav=document.createElement("div");
   hoverMakeUpNav.innerText=ele;
   document.querySelector("#ele>div:nth-child(1)>div>div:first-child").append(hoverMakeUpNav);
  })
  hoverHairCareNav.forEach(function (ele){
    let hoverHairCareNav=document.createElement("div");
    hoverHairCareNav.innerText=ele;
    document.querySelector("#ele>div:nth-child(2)>div>div:first-child").append(hoverHairCareNav);
   })
   hoverSkinCareNav.forEach(function (ele){
    let hoverSkinCareNav=document.createElement("div");
    hoverSkinCareNav.innerText=ele;
    document.querySelector("#ele>div:nth-child(3)>div>div:first-child").append(hoverSkinCareNav);
   })
   hoverHairStylesNav.forEach(function (ele){
    let hoverHairStylesNav=document.createElement("div");
    hoverHairStylesNav.innerText=ele;
    document.querySelector("#ele>div:nth-child(4)>div>div:first-child").append(hoverHairStylesNav);
   })
   hoverHealthNav.forEach(function (ele){
    let hoverHealthNav=document.createElement("div");
    hoverHealthNav.innerText=ele;
    document.querySelector("#ele>div:nth-child(5)>div>div:first-child").append(hoverHealthNav);
   })


   hoverNewsNav.forEach(function (ele){
    let hoverNewsNav=document.createElement("div");
    hoverNewsNav.innerText=ele;
    document.querySelector("#ele>div:nth-child(6)>div>div:first-child").append(hoverNewsNav);
   })





  bridalMakeUp.forEach(function (ele){
    let bridalMakeUp=document.createElement("div");
    let images=document.createElement("img");
    images.src=ele.image;
    let text=document.createElement("p");
    text.innerText=ele.text;
    bridalMakeUp.append(images,text);
    document.querySelector("#ele>div:nth-child(1)>div>div:last-child").append(bridalMakeUp);
  })
  basicHairCare.forEach(function (ele){
    let basicHairCare=document.createElement("div");
    let images=document.createElement("img");
    images.src=ele.image;
    let text=document.createElement("p");
    text.innerText=ele.text;
    basicHairCare.append(images,text);
    document.querySelector("#ele>div:nth-child(2)>div>div:last-child").append(basicHairCare);
  })
  acne.forEach(function (ele){
    let acne=document.createElement("div");
    let images=document.createElement("img");
    images.src=ele.image;
    let text=document.createElement("p");
    text.innerText=ele.text;
    acne.append(images,text);
    document.querySelector("#ele>div:nth-child(3)>div>div:last-child").append(acne);
  })
  bobHairStyles.forEach(function (ele){
    let bobHairStyles=document.createElement("div");
    let images=document.createElement("img");
    images.src=ele.image;
    let text=document.createElement("p");
    text.innerText=ele.text;
    bobHairStyles.append(images,text);
    document.querySelector("#ele>div:nth-child(4)>div>div:last-child").append(bobHairStyles);
  })
  fitness.forEach(function (ele){
    let fitness=document.createElement("div");
    let images=document.createElement("img");
    images.src=ele.image;
    let text=document.createElement("p");
    text.innerText=ele.text;
    fitness.append(images,text);
    document.querySelector("#ele>div:nth-child(5)>div>div:last-child").append(fitness);
  })
  collaboration.forEach(function (ele){
    let collaboration=document.createElement("div");
    let images=document.createElement("img");
    images.src=ele.image;
    let text=document.createElement("p");
    text.innerText=ele.text;
    collaboration.append(images,text);
    document.querySelector("#ele>div:nth-child(6)>div>div:last-child").append(collaboration);
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
medicalReviewers.forEach(function (ele){
    let div=document.createElement("div");
    let medicalReviewersImage=document.createElement("img");
    medicalReviewersImage.src=ele.image;
    let contain=document.createElement("div");
    let medicalReviewersText=document.createElement("p");
    medicalReviewersText.innerText=ele.name;
    let medicalReviewersName=document.createElement("p");
    medicalReviewersName.innerText=ele.title;
    contain.append(medicalReviewersText,medicalReviewersName);
    div.append(medicalReviewersImage,contain);
    document.querySelector("#medicalReviewers").append(div);
})
testimonialText.forEach(function (ele){
    let div=document.createElement("div");
 
    
    let testimonialText=document.createElement("p");
    testimonialText.innerText=ele.text;
    let testimonialTextName=document.createElement("p");
    testimonialTextName.innerText=ele.name;
   
    div.append(testimonialText,testimonialTextName);
    document.querySelector("#testimonialText").append(div);
})





function  moveBetweenPages(ele,i){
    if(i==0){
          
    if(check==="true"){
        window.location.href="makeUp.html";
        
      } else{
        window.location.href="signIn.html";
      }
        
    }
    if(i==1){
        
        if(check==="true"){
            window.location.href="hairCare.html";
            
          } else{
            window.location.href="signIn.html";
          }
    }
    if(i==2){
      
        if(check==="true"){
            window.location.href="skinCare.html";
            
          } else{
            window.location.href="signIn.html";
          }
    }
    if(i==3){
      
        if(check==="true"){
            window.location.href="hairStyles.html";
            
          } else{
            window.location.href="signIn.html";
          }
    }
    if(i==6){
        window.location.href="signIn.html";
        
    }
    if(i==7){
        window.location.href="signUp.html";
    }
}


document.querySelector("#ele>div:nth-child(1)").addEventListener("mouseover", hoverEffect1);
document.querySelector("#ele>div:nth-child(2)").addEventListener("mouseover", hoverEffect2);
document.querySelector("#ele>div:nth-child(3)").addEventListener("mouseover", hoverEffect3);
document.querySelector("#ele>div:nth-child(4)").addEventListener("mouseover", hoverEffect4);
document.querySelector("#ele>div:nth-child(5)").addEventListener("mouseover", hoverEffect5);
document.querySelector("#ele>div:nth-child(6)").addEventListener("mouseover", hoverEffect6);
document.querySelector("#ele").addEventListener("mouseout", hoverOut);

function hoverEffect1(){
      document.querySelector("#ele>div:nth-child(1)>div").style.display="block";
      document.querySelector("#ele>div:nth-child(1)>div>div:first-child").style.display="flex"; 
      document.querySelector("#ele>div:nth-child(1)>div>div:last-child").style.display="flex"; 
        setTimeout(function(){
            document.querySelector("#ele>div:nth-child(1)>div").style.height="343px";
            document.querySelector("#ele>div:nth-child(1)>div>div:first-child").style.height="50px";
            document.querySelector("#ele>div:nth-child(1)>div>div:last-child").style.height="228px";
        });
    }
    function hoverEffect2(){
        document.querySelector("#ele>div:nth-child(2)>div").style.display="block";
        document.querySelector("#ele>div:nth-child(2)>div>div:first-child").style.display="flex"; 
        document.querySelector("#ele>div:nth-child(2)>div>div:last-child").style.display="flex"; 
          setTimeout(function(){
              document.querySelector("#ele>div:nth-child(2)>div").style.height="343px";
              document.querySelector("#ele>div:nth-child(2)>div>div:first-child").style.height="50px";
              document.querySelector("#ele>div:nth-child(2)>div>div:last-child").style.height="228px";
          });
      }
      function hoverEffect3(){
        document.querySelector("#ele>div:nth-child(3)>div").style.display="block";
        document.querySelector("#ele>div:nth-child(3)>div>div:first-child").style.display="flex"; 
        document.querySelector("#ele>div:nth-child(3)>div>div:last-child").style.display="flex"; 
          setTimeout(function(){
              document.querySelector("#ele>div:nth-child(3)>div").style.height="343px";
              document.querySelector("#ele>div:nth-child(3)>div>div:first-child").style.height="50px";
              document.querySelector("#ele>div:nth-child(3)>div>div:last-child").style.height="228px";
          });
      }
      
      function hoverEffect4(){
        document.querySelector("#ele>div:nth-child(4)>div").style.display="block";
        document.querySelector("#ele>div:nth-child(4)>div>div:first-child").style.display="flex"; 
        document.querySelector("#ele>div:nth-child(4)>div>div:last-child").style.display="flex"; 
          setTimeout(function(){
              document.querySelector("#ele>div:nth-child(4)>div").style.height="343px";
              document.querySelector("#ele>div:nth-child(4)>div>div:first-child").style.height="50px";
              document.querySelector("#ele>div:nth-child(4)>div>div:last-child").style.height="228px";
          });
      }
      
      function hoverEffect5(){
        document.querySelector("#ele>div:nth-child(5)>div").style.display="block";
        document.querySelector("#ele>div:nth-child(5)>div>div:first-child").style.display="flex"; 
        document.querySelector("#ele>div:nth-child(5)>div>div:last-child").style.display="flex"; 
          setTimeout(function(){
              document.querySelector("#ele>div:nth-child(5)>div").style.height="343px";
              document.querySelector("#ele>div:nth-child(5)>div>div:first-child").style.height="50px";
              document.querySelector("#ele>div:nth-child(5)>div>div:last-child").style.height="228px";
          });
      }
      
      function hoverEffect6(){
        document.querySelector("#ele>div:nth-child(6)>div").style.display="block";
        document.querySelector("#ele>div:nth-child(6)>div>div:first-child").style.display="flex"; 
        document.querySelector("#ele>div:nth-child(6)>div>div:last-child").style.display="flex"; 
          setTimeout(function(){
              document.querySelector("#ele>div:nth-child(6)>div").style.height="343px";
              document.querySelector("#ele>div:nth-child(6)>div>div:first-child").style.height="50px";
              document.querySelector("#ele>div:nth-child(6)>div>div:last-child").style.height="228px";
          });
      }
      
      
    
   

function hoverOut(){

    document.querySelector("#ele>div:nth-child(1)>div").style.display="none";
    document.querySelector("#ele>div:nth-child(1)>div").style.height="0";  

    document.querySelector("#ele>div:nth-child(2)>div").style.display="none";
         document.querySelector("#ele>div:nth-child(2)>div").style.height="0";  

         document.querySelector("#ele>div:nth-child(3)>div").style.display="none";
         document.querySelector("#ele>div:nth-child(3)>div").style.height="0";  

         document.querySelector("#ele>div:nth-child(4)>div").style.display="none";
         document.querySelector("#ele>div:nth-child(4)>div").style.height="0"; 
         
         document.querySelector("#ele>div:nth-child(5)>div").style.display="none";
         document.querySelector("#ele>div:nth-child(5)>div").style.height="0";  

         document.querySelector("#ele>div:nth-child(6)>div").style.display="none";
         document.querySelector("#ele>div:nth-child(6)>div").style.height="0";  


          document.querySelector("#ele>div:nth-child(2)>div>div:first-child").style.display="none"; 
         document.querySelector("#ele>div:nth-child(2)>div>div:last-child").style.display="none"; 
          document.querySelector("#ele>div:nth-child(2)>div>div:first-child").style.height="0";
         document.querySelector("#ele>div:nth-child(2)>div>div:last-child").style.height="0";
}