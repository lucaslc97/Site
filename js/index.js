const menuItens = document.querySelectorAll('.botoesMenu a[href^="#"');

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