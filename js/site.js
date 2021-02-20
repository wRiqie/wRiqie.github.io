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
    const showC = document.querySelector('#showC')
    const hideC = document.querySelector('#hideC')

    conhecimento.forEach(e => {
        e.style.display = 'block'
    })
    showC.style.display = 'none'
    hideC.style.display = 'block'
}

function hideAll() {
    const conhecimento = document.querySelectorAll('#conhecimento')
    const showC = document.querySelector('#showC')
    const hideC = document.querySelector('#hideC')

    conhecimento.forEach(e => {
        e.style.display = 'none'
    })
    
    showC.style.display = 'block'
    hideC.style.display = 'none'
}