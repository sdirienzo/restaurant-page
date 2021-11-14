import { generateHomePage } from './homepage.js';
import { generateNavBar } from './navbar.js';

const pageLoad = () => {
    const container = document.getElementById('content');

    generateNavBar(container);
    generateHomePage(container);

}

export { pageLoad };