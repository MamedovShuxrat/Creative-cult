const headerLinkBtns = document.querySelectorAll('.header-logo-links')
const filterItems = document.querySelectorAll('.filter__item')

function handleToggleOnBtns(buttons) {
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            buttons.forEach(btn => {
                btn.classList.remove('active')
            })
            button.classList.add('active')
        })
    })
}
handleToggleOnBtns(headerLinkBtns)
handleToggleOnBtns(filterItems)

const burgerMenuBtn = document.querySelector('.burger-menu')
const navMenu = document.querySelector('.nav')

burgerMenuBtn.addEventListener('click', () => {
    burgerMenuBtn.classList.toggle('is-open')
    navMenu.classList.toggle('is-open')
})


const toggleNavBtns = document.querySelectorAll('.nav__link-arrow')

toggleNavBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-target')
        const targetItem = document.getElementById(targetId)

        if (targetItem.classList.contains('is-show')) {
            btn.style.setProperty('transform', 'rotate(0deg)')
            targetItem.classList.remove('is-show')
        } else {
            btn.style.setProperty('transform', 'rotate(180deg)')
            targetItem.classList.add('is-show')
        }
    })
})
const toggleFooterBtns = document.querySelectorAll('.footer__title-arrow')

toggleFooterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-target')
        const targetItem = document.getElementById(targetId)

        if (targetItem.classList.contains('is-show')) {
            btn.style.setProperty('transform', 'rotate(0deg)')
            targetItem.classList.remove('is-show')
        } else {
            btn.style.setProperty('transform', 'rotate(180deg)')
            targetItem.classList.add('is-show')
        }
    })
})