const headerNav = document.querySelector('header nav')
const navButton = document.querySelector('header button')

let navOpen = false

navButton.addEventListener('click', event => {

    if (!navOpen) event.stopPropagation()

    headerNav.classList.remove('scale-0')
    navOpen = true

    const closer = event => {

        if (!event.target.contains(headerNav)) {
            headerNav.classList.add('scale-0')
            window.removeEventListener('click', closer)
            navOpen = false
        }

    }

    window.addEventListener('click', closer)
})