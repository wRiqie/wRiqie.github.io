window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})

function toggle() {
    var header = document.getElementById('header');
    header.classList.toggle('active')
}

function showAll() {
    const conhecimento = document.querySelectorAll('#conhecimento')
    const color = document.querySelectorAll('#colorido')
    const showC = document.querySelector('#showC')
    const hideC = document.querySelector('#hideC')

    conhecimento.forEach(e => {
        e.style.display = 'block'
    })

    color.forEach(e => {
        e.style.filter = 'none'
    })
    showC.style.display = 'none'
    hideC.style.display = 'block'
}

function hideAll() {
    const conhecimento = document.querySelectorAll('#conhecimento')
    const color = document.querySelectorAll('#colorido')
    const showC = document.querySelector('#showC')
    const hideC = document.querySelector('#hideC')

    conhecimento.forEach(e => {
        e.style.display = 'none'
    })

    color.forEach(e => {
        e.style.filter = 'grayscale(1)'
    })
    
    showC.style.display = 'block'
    hideC.style.display = 'none'
}