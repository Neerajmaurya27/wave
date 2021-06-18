const navslide = () =>{
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".navlinks");
    
    burger.addEventListener('click',()=>{
        console.log(nav.classList[0])
        nav.classList.toggle("nav-active");
    });
}
navslide();