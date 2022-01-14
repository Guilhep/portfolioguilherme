var navBtn = document.querySelector('.nav-toggle');
var navList = document.querySelector('.navList');
var navLinks = document.querySelectorAll('.navList li')



navBtn.addEventListener('click', () => {
    navList.classList.toggle('active');
})




navLinks.forEach((e) => {
    e.addEventListener('click',() => {
        navList.classList.remove('active')
    })
})




function scrollHeader(){
    const nav = document.querySelector('.nav')
    
    if(this.scrollY >= 80){
         nav.classList.add('scroll-header');
    } else {
        nav.classList.remove('scroll-header');
    }
}
window.addEventListener('scroll', scrollHeader)
