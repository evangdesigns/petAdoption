console.log('Pet Adoption');
const pets = [
    {
      name: 'Dusty',
      color: 'Green',
      specialSkill: 'Gives sincere apologies.',
      type: 'cat',
      imageUrl: 'http://kittentoob.com/wp-content/uploads/2015/06/funny-cat-with-a-towel.jpg'
    },
    {
      name: 'Trouble',
      color: 'Poop-Colored',
      specialSkill: 'Just picks the tomatoes off of a sandwich instead of requesting a whole new sandwich.',
      type: 'dino',
      imageUrl: 'http://www.jozilife.co.za/wp-content/uploads/The-Dino-Expo.jpg'
    },
    {
      name: 'Whiskers',
      color: 'Yellow',
      specialSkill: 'Can prove he is a real man by drinking whiskey.',
      type: 'dino',
      imageUrl: 'https://mydinosaurs.com/wp-content/uploads/2017/02/2-3-600x400.jpg'
    },
    {
      name: 'Coco',
      color: 'Black',
      specialSkill: 'Burps minimally.',
      type: 'dog',
      imageUrl: 'http://cdn.akc.org/content/article-body-image/funny-pembroke_welsh_corgi.jpg'
    },
    {
      name: 'Spooky',
      color: 'Brown',
      specialSkill: 'Comfortable in the outdoors for up to eight hours.',
      type: 'cat',
      imageUrl: "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg"
    },
    {
      name: 'Tiger',
      color: 'Black',
      specialSkill: 'Can read (but cannot understand) Hebrew.',
      type: 'dog',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Basset_Hound_600.jpg'
    }
];

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint
  };
  
  const petFilter = (petsArr) => {
    let domString = ''
    for (let i = 0; i < petsArr.length; i ++) {
        const pet = petsArr[i]
        domString += `
            <div class='petCard'>
                <div class="petName">
                        <h1>${pet.name}</h1>
                </div>
                <div class="petInfo">
                    <center>
                        <img src="${pet.imageUrl}" alt="${pet.imageAlt}">
                    </center>
                    <div class="petDeets">
                        <h4>COLOR:</h4>
                        <p>${pet.color}</p>
                        <h4>SPECIAL SKILL:</h4>
                        <p>${pet.specialSkill}</p>
                    </div>
                </div>
                <div class="petType ${pet.type}">
                    <h4>${pet.type}</h4>
                </div>
            </div>
            `   
    };
    printToDom('petsOcute', domString);
  };

const buttonClick = (e) => {
    const type = e.target.id
    // only get those pets from the list of all the pets
    const selectedPets = [];
    for(let i = 0; i < pets.length; i ++) {
        const pet = pets[i];
        if (pet.type === type) {
            selectedPets.push(pet)
        }
    }
    // pass smaller list of pies back into placePies
    petFilter(selectedPets);
}

document.getElementById('dog').addEventListener('click', buttonClick)
document.getElementById('cat').addEventListener('click', buttonClick)
document.getElementById('dino').addEventListener('click', buttonClick)
// document.getElementById('all').addEventListener('click', () => {
//     printToDom('all', pets);
// };