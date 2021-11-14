import './styles/menupage-style.css';

const createMenuHeader = () => {
    const headerDiv = document.createElement('div');
    headerDiv.id = 'header';

    const menuHeaderH1 = document.createElement('h1');
    menuHeaderH1.innerText = 'Ramen Bowls';

    const menuHeaderP = document.createElement('p');
    menuHeaderP.innerText = 'Our Base Broth is made with Pork bone, Chicken Back and Feet, and assorted Vegetables Our Vegetarian Broth is made with Konbu Seaweed and Shiitake Mushroom';

    headerDiv.appendChild(menuHeaderH1);
    headerDiv.appendChild(menuHeaderP);

    return headerDiv;
}

const generateMenu = (container) => {

    for (let index = 0; index < 5; index++) {
        const wrapperDiv = document.createElement('div');

        const itemOneDiv = document.createElement('div');
        const itemOneH2 = document.createElement('h2');
        const itemOneP = document.createElement('p');

        const itemTwoDiv = document.createElement('div');
        const itemTwoH2 = document.createElement('h2');
        const itemTwoP = document.createElement('p');

        switch (index) {
            case 0:
                wrapperDiv.classList.add('menu-row');
                itemOneDiv.classList.add('menu-item', 'menu-row-item');
                itemOneH2.innerText = 'Dosunco Ramen (Miso Ramen) - $12';
                itemOneP.innerText = 'Our Base Broth mixed with our Miso (Soy Bean Paste) topped with pork belly, ground beef, bean sprouts, bamboo shoots, egg, green onion, and fried garlic';
                
                itemTwoDiv.classList.add('menu-item', 'menu-row-item');
                itemTwoH2.innerText = 'Spicy Dosunco Ramen (Spicy Miso Ramen) - $13';
                itemTwoP.innerText = 'Our Base Broth mixed with our Miso and Spicy Sauce topped with pork belly, ground beef, bean sprouts, bamboo shoots, egg, green onion, and fried garlic';
                break;
            case 1:
                wrapperDiv.classList.add('menu-column');
                itemOneDiv.classList.add('menu-item', 'menu-col-item');
                itemOneH2.innerText = 'Evil Dosunco Ramen (Extra Extra Spicy Miso Ramen) - $14';
                itemOneP.innerText = 'Our Base Broth mixed with our Miso and Evil Spicy Sauce (Carolina Reaper base) topped with pork belly, ground beef, bean sprouts, bamboo shoots, egg, green onion, and fried garlic';

                itemTwoDiv.classList.add('menu-item', 'menu-col-item');
                itemTwoH2.innerText = 'Spicy Numb Numb Ramen - $14';
                itemTwoP.innerText = 'Our Base Broth mixed with our Miso and Spicy Sauce, and Numb Numb Powder(Szechuan and other Asian Spices) topped with pork belly, ground beef, bean sprouts, bamboo shoots, egg, green onion, and fried garlic (Warning: Does Leave Mouth with a Tingly / Numbing Sensation)';
                break;
            case 2:
                wrapperDiv.classList.add('menu-row');
                itemOneDiv.classList.add('menu-item', 'menu-row-item');
                itemOneH2.innerText = 'Shoyu Ramen (Soy Sauce Ramen) - $11';
                itemOneP.innerText = 'Our Base Broth mixed with our Special Soy Sauce topped with pork belly, bamboo shoots, egg, green onion, and fried garlic';

                itemTwoDiv.classList.add('menu-item', 'menu-row-item');
                itemTwoH2.innerText = 'Abura Soba (Brothless Ramen) - $11';
                itemTwoP.innerText = 'Noodles cooked with our Special Soy Sauce topped with pork belly, bean sprouts, bamboo shoots, egg, green onion, fried garlic, and sesame seeds';
                break;
            case 3:
                wrapperDiv.classList.add('menu-row');
                itemOneDiv.classList.add('menu-item', 'menu-row-item');
                itemOneH2.innerText = 'Hiyashi Ramen (Chilled Ramen) - $11';
                itemOneP.innerText = 'Chilled Noodles with our Sweet/Sour Soy Sauce, bamboo shoots, egg, bean sprouts, corn, green onion, seaweed, lemon, red ginger, and tempura flakes';

                itemTwoDiv.classList.add('menu-item', 'menu-row-item');
                itemTwoH2.innerText = 'Cold Veggie Ramen (Ramen Salad) - $11';
                itemTwoP.innerText = 'Chilled Noodles on top of Green Salad topped with our Refreshing Tomato Sauce, corn, bean sprouts, seaweed, tofu, green onion, and bamboo shoots';
                break;
            case 4:
                wrapperDiv.classList.add('menu-row');
                itemOneDiv.classList.add('menu-item', 'menu-row-item');
                itemOneH2.innerText = 'Veggie Dosunco Ramen - $12';
                itemOneP.innerText = 'Our Vegetarian Broth mixed with our Miso topped with corn, bean sprouts, bamboo shoots, seaweed, tofu, and green onion';

                itemTwoDiv.classList.add('menu-item', 'menu-row-item');
                itemTwoH2.innerText = 'Spicy Veggie Dosunco Ramen - $13';
                itemTwoP.innerText = 'Our Vegetarian Broth mixed with our Miso and Spicy Sauce topped with corn, bean sprouts, bamboo shoots, seaweed, tofu, and green onion';
                break;
        }
        itemOneDiv.appendChild(itemOneH2);
        itemOneDiv.appendChild(itemOneP);

        itemTwoDiv.appendChild(itemTwoH2);
        itemTwoDiv.appendChild(itemTwoP);

        wrapperDiv.appendChild(itemOneDiv);
        wrapperDiv.appendChild(itemTwoDiv);

        container.appendChild(wrapperDiv);
    }
    return;
}

const generateMenuSection = () => {
    const menuSection = document.createElement('div');
    menuSection.id = 'menu-section';

    menuSection.appendChild(createMenuHeader());
    generateMenu(menuSection);

    return menuSection;
}

const generateMenuPage = (container) => {
    container.appendChild(generateMenuSection());

    return;
}

export { generateMenuPage };