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

function changeHeaderWhenScroll() {
  if (window.scrollY >= navHeight){
    //scroll é maior que a altura do header
    header.classList.add('scroll')
  }else{
    //menor que a altura do header
    header.classList.remove('scroll')
  }
}


const swiper = new Swiper('.swiper', {
  SlidesPerView: 1,
  pagination:{
    el:'.swiper-pagination'
  },
  mousewheel:true,
  keyboard:true,
  breakpoints: {
     762:{
      slidesPerView:2,
      setWrapperSize:true
    }
  }
});

/* ScrolReveal: Mostrar elementos quando der scroll na pagina*/
const scrollReveal = ScrollReveal({
  origin:'top',
  distance:'30px',
  duration:500,
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
  footer .brand, footer .social
  `,{interval:5})

/*botão de volta para o top*/
const backToTopButton = document.querySelector('.back-to-top')

function backToTop() {
  if(window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else { 
    backToTopButton.classList.remove('show')
  }
}

/* Menu ativo conforme a secão da pagina */
const sections = document.querySelectorAll('section[id]')    
function activateMenuAtCurrentSection(){
      
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections){
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd =  checkpoint <= sectionTop + sectionHeight

    if(checkpointStart && checkpointEnd){
      document
      .querySelector('nav ul li a[href*=' + sectionId + ']')
      .classList.add('active')
    }
    else{
      document
      .querySelector('nav ul li a[href*='+ sectionId +']')
      .classList.remove('active')

    }
  }
}




/* When Scroll */
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTop()
  activateMenuAtCurrentSection()
})


