
const url = 'https://jsonplaceholder.typicode.com/users';

async function userData() {
  localStorage.clear();
  const res = await fetch(url)
  const data = await res.json()
  console.log(data);

  const container = document.getElementById('container');

  data.forEach((info => {
    const bioCard = document.createElement('div');
    bioCard.classList.add('profile');
    bioCard.setAttribute('id', info.id);
    const item1 = document.createElement('img');
    const item2 = document.createElement('p');
    bioCard.addEventListener('click', () => {
      console.log(info);
      localStorage.setItem('personInfo', JSON.stringify(info));
      window.location.href = 'person.html'
    })

    item1.src = 'icons8-person-50.png';
    item2.innerHTML = info.name;

    bioCard.append(item1, item2);
    container.append(bioCard);

  }))
};

userData();

function checkName() {
  const searchName = document.getElementById('search-name');
  console.log(searchName.value);
}
