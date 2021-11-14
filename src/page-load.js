import { generateNavBar } from './navbar.js';
import { generateHomePage } from './homepage.js';

const pageLoad = () => {
    const container = document.getElementById('content');

    generateNavBar(container);
    generateHomePage(container);

}

export { pageLoad };