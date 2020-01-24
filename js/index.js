
//Scroll suave até link interno

const menuItens = document.querySelectorAll('.botoesMenu a[href^="#"]');

menuItens.forEach(itens => {
        itens.addEventListener('click', scrollIdOnClick)
})

function scrollIdOnClick(event)
{
    event.preventDefault()
    const elemento = event.target;
    const id = elemento.getAttribute('href')
    const to = document.querySelector(id).offsetTop
    console.log(to);
    console.log('ok, ta indo')

    window.scroll({
        top: to - 150,
        behavior: "smooth",

    })
}


// Animação ao dar scroll com mouse

function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

const target = document.querySelectorAll('[data-anime]')
const animationClass = 'animate';

function animeScroll()
{
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
    target.forEach(function(element){

        if((windowTop) > element.offsetTop)
        {
            element.classList.add(animationClass)
        }
        else
        {
            element.classList.remove(animationClass)
        }

    })
}

animeScroll();

if(target.length){
window.addEventListener('scroll', debounce(function(){

    animeScroll();

}, 200 ));
}