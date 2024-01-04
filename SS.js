// target the bars in the html the mobile-menu id selector
const menu = document.querySelector('#mobile-menu')
// then target the ul with the nav_menu class
const menuLinks = document.querySelector('.nav_menu')

// listen for a click event (once we click it, we want a function to run)
// when the function runs, its going to toggle, and add a class list for is-active and active
// so we will toggle the is_active and active classes
menu.addEventListener('click', function() {
    menu.classList.toggle('is_active');
    menuLinks.classList.toggle('active');
})
