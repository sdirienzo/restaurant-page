import './styles/navbar-style.css';

const createNavbarHomeLink = () => {
    const homeLink = document.createElement('div');
    homeLink.id = 'home';

    const homeSpan = document.createElement('span');
    homeSpan.innerText = 'Home';
    
    homeLink.appendChild(homeSpan);
    
    return homeLink;
}

const createNavbarMenuLink = () => {
    const menuLink = document.createElement('div');
    menuLink.id = 'menu';

    const menuSpan = document.createElement('span');
    menuSpan.innerText = 'Menu';
    
    menuLink.appendChild(menuSpan);
    
    return menuLink;
}

const createNavbarContactLink = () => {
    const contactLink = document.createElement('div');
    contactLink.id = 'contact'

    const contactSpan = document.createElement('span');
    contactSpan.innerText = 'Contact';
    
    contactLink.appendChild(contactSpan);
    
    return contactLink;
}

const generateNavBar = (container) => {
    const navbar = document.createElement('div');
    navbar.id = 'navbar';

    navbar.appendChild(createNavbarHomeLink());
    navbar.appendChild(createNavbarMenuLink());
    navbar.appendChild(createNavbarContactLink());

    container.appendChild(navbar);

    return;
}

export { generateNavBar };