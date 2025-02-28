const dropdownMenus = Array.from(document.querySelectorAll('.dropdown-menu'));

function toggleOpen(menu) {
    menu.classList.toggle('open')
}

let savedMenu;

document.documentElement.addEventListener('click', (button) => {

    // Dropdown menu handling
    let currentMenu = dropdownMenus.filter((word) => button.target.closest('.dropdown-menu') === word);
    // Close open menu when a new menu is clicked on
    if (currentMenu.length > 0 &&
        currentMenu[0] !== savedMenu &&
        savedMenu !== undefined &&
        savedMenu.classList.contains('open')
    ) {
        button.stopPropagation(); // Does this need to be here?
        toggleOpen(savedMenu);
    }
    // Open a clicked menu
    if (currentMenu.length > 0) {
        button.stopPropagation(); //Does this need to be here?
        savedMenu = button.target.closest('.dropdown-menu');
        toggleOpen(savedMenu);
    }
    // Close an open window when anywhere else is clicked
    if (currentMenu.length === 0 &&
        savedMenu !== undefined &&
        savedMenu.classList.contains('open')
    ) {
        toggleOpen(savedMenu);
    }
})