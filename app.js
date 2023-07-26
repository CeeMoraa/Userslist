
const cardBox = document.getElementById('card-box');

function displayInfo() {
    const personalInfo = JSON.parse(localStorage.getItem('personInfo'));
    console.log(personalInfo);
    
    const card = document.createElement('div');
    card.classList.add('profileInfo');
    const cardItems = document.createElement('div');
    cardItems.classList.add('items');
    
    const image = document.createElement('img');
    const name = document.createElement('p');
    const address = document.createElement('p');
    const city = document.createElement('p');
    city.classList.add('addressInfo');
    const street = document.createElement('p');
    street.classList.add('addressInfo');
    const suite = document.createElement('p');
    suite.classList.add('addressInfo');
    const zipCode = document.createElement('p');
    zipCode.classList.add('addressInfo');
    const phone = document.createElement('p');
    const website = document.createElement('p');
    const companyName = document.createElement('p');
    const catchPhrase = document.createElement('p');
    catchPhrase.classList.add('catchphrase');

    image.src = 'icons8-person-50.png';
    name.innerHTML = personalInfo.name;
    
    address.innerHTML = 'Address Info: ';
    city.innerHTML = 'City: ' + personalInfo.address.city
    street.innerHTML = 'Street: ' + ' ' +personalInfo.address.street;
    suite.innerHTML = 'Suite: ' + personalInfo.address.suite;
    zipCode.innerHTML = 'Zipcode: ' + personalInfo.address.zipcode;
    phone.innerHTML = 'Phone: ' + personalInfo.phone;
    website.innerHTML = 'Website: ' +personalInfo.website;
    companyName.innerHTML = 'Company Name: ' + personalInfo.company.name;
    catchPhrase.innerHTML = 'Catchphrase: ' + personalInfo.company.catchPhrase

    card.append(image, name);
    cardItems.append(address, city, street, suite, zipCode, phone, website, companyName, catchPhrase);
    cardBox.append(card, cardItems);

    const back = document.getElementById('back');
    back.addEventListener('click', () => {
        window.location.href = 'index.html'
    });
};


displayInfo();