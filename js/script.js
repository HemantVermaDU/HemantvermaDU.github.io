 
window.addEventListener("load",() =>{
    document.querySelector(".main").classList.remove("hidden");
    document.querySelector(".home-section").classList.add("active");
    // page loader
    document.querySelector(".page-loader").classList.add("fade-out");
    setTimeout(() => {
        document.querySelector(".page-loader").style.display="none";
    },600);
});
 // header section toggle navbar
 const navToggler = document.querySelector(".nav-toggler");
 navToggler.addEventListener("click",() =>{
    hideSection();
    toggleNavbar();
    document.body.classList.toggle("hide-scrolling");
 });
 function hideSection(){
    document.querySelector("section.active").classList.toggle("fade-out");

 }

 function toggleNavbar(){
    document.querySelector(".header").classList.toggle("active");
 }

// active Section
document.addEventListener("click",(e)=>{
    if(e.target.classList.contains("link-item") && e.target.hash !== ""){
      // document the overlay to 
      document.querySelector(".overlay").classList.add("active");
       navToggler.classList.add("hide");
        if(e.target.classList.contains("nav-item")){
            toggleNavbar();
        }else{
            hideSection();
            document.body.classList.add("hide-scrolling");
        }
        setTimeout(() =>{
            document.querySelector("section.active").classList.remove("active","fade-out");
            document.querySelector(e.target.hash).classList.add("active");
            window.scrollTo(0,0);
            document.body.classList.remove("hide-scrolling");
             navToggler.classList.remove("hide");
             document.querySelector(".overlay").classList.remove("active");
        },500);
    }
});
// About Tabs

const tabsContainer = document.querySelector(".about-tabs"),
aboutSection=document.querySelector(".about-section");

tabsContainer.addEventListener("click",(e)=>{
	if(e.target.classList.contains("tab-item")&& !e.target.classList.contains("active")){
		tabsContainer.querySelector(".active").classList.remove("active");
		e.target.classList.add("active");
		const target=e.target.getAttribute("data-target");
		aboutSection.querySelector(".tab-content.active").classList.remove("active");
		aboutSection.querySelector(target).classList.add("active");
	}
});

// portfolio item details Popup
 document.addEventListener("click",(e) =>{
 	if(e.target.classList.contains("view-project-btn")){
 		togglePortfolioPopup();
 		document.querySelector(".portfolio-popup").scrollTo(0,0);
 		portfolioItemDetails(e.target.parentElement);
 	}
 })
 function togglePortfolioPopup() {
 	document.querySelector(".portfolio-popup").classList.toggle("open");
 	document.body.classList.toggle("hide-scrolling");
 	document.querySelector(".main").classList.toggle("fade-out");	
 }
 document.querySelector(".pp-close").addEventListener("click",togglePortfolioPopup);

 // hide popup when clicking outside of it

 document.addEventListener("click",(e)=>{
 	if(e.target.classList.contains("pp-inner")){
 		togglePortfolioPopup();
 	}
 });

 function portfolioItemDetails(portfolioItem){
 	document.querySelector(".pp-thumbnail img").src =
 	portfolioItem.querySelector(".portfolio-item-thumbnail img").src;

 	document.querySelector(".pp-header h3").innerHTML=
 	portfolioItem.querySelector(".portfolio-item-title").innerHTML;
 
 	document.querySelector(".pp-body").innerHTML=
 	portfolioItem.querySelector(".portfolio-item-details").innerHTML;

 }

 // GSAP

 gsap.to(".skillheading",{
    text:{value:"Front End Developer | PHP Laravel Developer"},
    duration:4,delay:1,ease:"none"
})


    gsap.from(".anim1", {
        x: '-100',
        opacity: 0,
        duration:3,
      
    }) 
      gsap.from(".anim2", {
        x: '100',
        opacity: 0,
        duration:3,
       
    }) 
 
 function firstPageAnim() {
    var t1 = gsap.timeline();

    t1.from(".social-links .fab", {
        x: '-50',
        opacity: 0,
        duration:1,
        delay:0.5,
        stagger:0.5,
    })

}

firstPageAnim();

 



