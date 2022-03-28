const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')
for(const element of toggle){
   element.addEventListener('click', function(){
    nav.classList.toggle('show')
   })
}
/* quando clicar em um item do menu, esconder o menu*/
const links = document.querySelectorAll('nav ul li a')

for(const link of links){
  link.addEventListener('click', function(){
    nav.classList.remove('show')
  })
}




/* Mudar o header da pagina quando der scroll */ 
const header = document.querySelector("#header")
const navHeight = header.offsetHeight

window.addEventListener('scroll', function(){
  if (window.scrollY >= navHeight){
    //scroll é maior que a altura do header
    header.classList.add('scroll')
    
  }else{
    //menor que a altura do header
    header.classList.remove('scroll')
  }

})
const swiper = new Swiper('.swiper', {
  SlidesPerView: 1,
  pagination:{
    el:'.swiper-pagination'
  },
  mousewheel:true,
  keyboard:true,
});

/* ScrolReveal: Mostrar elementos quando der scroll na pagina*/
const scrollReveal = ScrollReveal({
  origin:'top',
  distance:'30px',
  duration:700,
  reset:true,
})
scrollReveal.reveal(
  ` #home .image, #home .text,
  #about .image, #about .text,
  #service header, #service .card,
  #testimonials header, #testimonials .testimonials,
  #testimonials .testimonials,
  #testimonials .testimonials,
  #contact .text, #contact .links
  
  `,{interval:10})