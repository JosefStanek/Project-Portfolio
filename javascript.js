window.addEventListener("scroll", function(event){
    const scrolled = window.scrollY
    console.log(scrolled)
    if (scrolled >= 100){
            let nav = document.querySelector("nav")
            nav.style.background = "rgb(26, 25, 25)"
    } else if (scrolled <= 100){
        let nav = document.querySelector("nav")
        nav.style.background = "none"
    }
})


function myFunction(){
    document.querySelector("nav ul").classList.toggle('active');
}