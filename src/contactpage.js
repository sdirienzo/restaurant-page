import './styles/contactpage-style.css';

const createContactHeader = () => {
    const headerDiv = document.createElement('div');
    headerDiv.id = 'contact-header';

    const contactHeaderH1 = document.createElement('h1');
    contactHeaderH1.innerText = 'Contact';

    const contactHeaderP = document.createElement('p');
    contactHeaderP.innerText = '(813) 605-5741';

    headerDiv.appendChild(contactHeaderH1);
    headerDiv.appendChild(contactHeaderP);

    return headerDiv;
}

const generateContactSection = () => {
    const contactSection = document.createElement('div');
    contactSection.id = 'contact-section';

    contactSection.appendChild(createContactHeader());

    return contactSection;
}

const generateContactPage = (container) => {
    container.appendChild(generateContactSection());

    return;
}

export { generateContactPage };