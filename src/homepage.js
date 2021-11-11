import './styles/homepage-style.css';

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

const generateNavBar = () => {
    const navbar = document.createElement('div');
    navbar.id = 'navbar';

    navbar.appendChild(createNavbarHomeLink());
    navbar.appendChild(createNavbarMenuLink());
    navbar.appendChild(createNavbarContactLink());

    return navbar;
}

const createRestaurantName = () => {
    const restaurantNameDiv = document.createElement('div');
    restaurantNameDiv.id = 'restaurant-name';

    const restaurantNameH1 = document.createElement('h1');
    restaurantNameH1.innerText = 'Japanese Kitchen Dosunco (DOSUNCO RAMEN)';

    restaurantNameDiv.appendChild(restaurantNameH1);

    return restaurantNameDiv;
}

const createLocation = () => {
    const locationDiv = document.createElement('div');
    locationDiv.id = 'location';

    const addressLine1 = document.createElement('div');
    addressLine1.innerText = '3310 W Kennedy Blvd';

    const addressLine2 = document.createElement('div');
    addressLine2.innerText = 'Tampa, FL 33609';

    const addressLine3 = document.createElement('div');
    addressLine3.innerText = 'United States';

    locationDiv.appendChild(addressLine1);
    locationDiv.appendChild(addressLine2);
    locationDiv.appendChild(addressLine3);

    return locationDiv;
}

const createImageSection = () => {
    const imageDiv = document.createElement('div');
    imageDiv.id = 'img-section';

    const image = document.createElement('img');
    image.src = 'https://lh3.googleusercontent.com/p/AF1QipM0DdA5zNaoi4XGc77S5_z7wkDxtylbPDgMOTSS=w1080-h608-p-no-v0';
    image.alt = 'Picture of bowls of ramen';

    imageDiv.appendChild(image);

    return imageDiv;
}

const generateHoursTable = () => {
    const hoursTable = document.createElement('table');
    hoursTable.id = 'hours-table';

    for (let index = 0; index < 7; index++) {
        const row = document.createElement('tr');
        const dayTd = document.createElement('td');
        const hoursTd = document.createElement('td');

        switch (index) {
            case 0:
                dayTd.innerText = 'Monday';
                hoursTd.innerText = 'Closed';
                break;
            case 1:
                dayTd.innerText = 'Tuesday';
                hoursTd.innerText = '11:30 AM - 10:00 PM';
                break;
             case 2:
                dayTd.innerText = 'Wednesday';
                hoursTd.innerText = '11:30 AM - 10:00 PM';
                break;
            case 3:
                dayTd.innerText = 'Thursday';
                hoursTd.innerText = '11:30 AM - 10:00 PM';
                break;
            case 4:
                dayTd.innerText = 'Friday';
                hoursTd.innerText = '11:30 AM - 10:00 PM';
                break;
            case 5:
                dayTd.innerText = 'Saturday';
                hoursTd.innerText = '5:00 - 10:00 PM';
                break;
            case 6:
                dayTd.innerText = 'Sunday';
                hoursTd.innerText = 'Closed';
                break;
            default:
                break;
        }
        
        row.appendChild(dayTd);
        row.appendChild(hoursTd);
        hoursTable.appendChild(row);
    }

    return hoursTable;
}

const createHours = () => {
    const hoursDiv = document.createElement('div');
    hoursDiv.id = 'hours';
    
    hoursDiv.appendChild(generateHoursTable());

    return hoursDiv;
}


const generateMainSection = () => {
    const mainSection = document.createElement('div');
    mainSection.id = 'main-section';

    mainSection.appendChild(createRestaurantName());
    mainSection.appendChild(createLocation());
    mainSection.appendChild(createImageSection());
    mainSection.appendChild(createHours());

    return mainSection;
}

const generateHomePage = (container) => {
    container.appendChild(generateNavBar());
    container.appendChild(generateMainSection());

    return;
}

export { generateHomePage };