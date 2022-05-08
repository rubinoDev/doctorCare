window.addEventListener('scroll', onScroll)

onScroll();
function onScroll(){
  showNavOnScroll()
  showBackToTopButtonOnScroll()

  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
  
}

function activateMenuAtCurrentSection(section){
  //linha imaginaria no meio da tela
  const targetLine = scrollY + innerHeight / 2

  //verificar se a sessao passou da linha
  //quais dados vou precisar?
  
  const sectionTop = section.offsetTop
  

  const sectionTopReachOrPassedTargetline = targetLine >= sectionTop

  //verificar se a base esta abaixo da linha

  const sectionHeight = section.offsetHeight

  const sectionEndsAt = sectionTop + sectionHeight;  

  const sectionEndPassedTargetline = sectionEndsAt <= targetLine
  
  //limites da sessao
  const sectionBoundaries = sectionTopReachOrPassedTargetline && !sectionEndPassedTargetline

  //

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)
  
  menuElement.classList.remove('active')
  if(sectionBoundaries){
    menuElement.classList.add('active')
  }
} 

function showNavOnScroll(){
  if(scrollY>0){
    navigation.classList.add('scroll')
  }else{
    navigation.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll(){
  if(scrollY>400){
    backToTopButton.classList.add('show')
  }else{
    backToTopButton.classList.remove('show')
  }
}

function openMenu(){
  document.body.classList.add('menu-expanded');
}

function closeMenu(){
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin:'top',
  distance: '30px',
  duration: 700,
}).reveal(`#home, 
#home img,
 #home .stats, 
 #services,
 #services header,
 #services .card,
 #about,
 #about header,
 #about p,
 #about img,
 #contact header,
 #contact content`);


