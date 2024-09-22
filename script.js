
let show = true; //variavel para aparecer o menu ou nao
const menuContent = document.querySelector('.content');  // variavel que recebe o elemneto que tem como classe o .content
const menuToggle = menuContent.querySelector('.menu-toggle');  // selecionar a classe menucontent 


menuToggle.addEventListener('click', () => { //ao clicar nos três riscos a função será execudade ela 

    document.body.style.overflow = show ? 'hidden' : 'initial'

    menuContent.classList.toggle('on', show);
    show = !show;
})

