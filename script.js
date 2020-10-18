const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 500; // 500 px

hero.addEventListener('mousemove' , function(event) {
    const { offsetWidth : width , offsetHeight : height } = hero; 
    let { offsetX : x , offsetY : y } = event;

    x += event.target.offsetLeft;
    y += event.target.offsetTop;


})