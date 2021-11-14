import { pageLoad } from './page-load.js';
import { generateHomePage } from './homepage.js';
import { generateMenuPage } from './menupage.js';
import { generateContactPage } from './contactpage.js';

pageLoad();

const content = document.getElementById('content');

const switchTab = (tab) => {
    content.removeChild(content.children[1]);

    switch (tab) {
        case 'home':
            generateHomePage(content);
            break;
        case 'menu':
            generateMenuPage(content);
            break;
        case 'contact':
            generateContactPage(content);
            break;
        default:
            break;
    }
}

document.getElementById('home').addEventListener('click', function() {
    switchTab('home');
});

document.getElementById('menu').addEventListener('click', function() {
    switchTab('menu');
});

document.getElementById('contact').addEventListener('click', function() {
    switchTab('contact');
});
