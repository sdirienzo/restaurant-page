import { generateHomePage } from './homepage.js';

const pageLoad = () => {
    const container = document.getElementById('content');

    generateHomePage(container);

}

export { pageLoad };