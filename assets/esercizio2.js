class Pet {
    constructor(petName, ownerName, species, breed) {
        this.petName = petName;
        this.ownerName = ownerName;
        this.species = species;
        this.breed = breed;
    }

    hasSameOwner(otherPet) {
        return this.ownerName === otherPet;
    }
}

function addPet() {
    const petName = document.getElementById('petName').value.trim();
    const ownerName = document.getElementById('ownerName').value.trim();
    const species = document.getElementById('species').value.trim();
    const breed = document.getElementById('breed').value.trim();

    const newPet = new Pet(petName, ownerName, species, breed);

    
    displayPet(newPet);
    document.getElementById('petForm').reset();
}

function displayPet(pet) {
    const petList = document.getElementById('petList');
    const listItem = document.createElement('li');
    listItem.textContent = `Nome animale: ${pet.petName}, Proprietario: ${pet.ownerName}, Specie: ${pet.species}, Razza: ${pet.breed}`;
    petList.appendChild(listItem);
}

function compareOwners() {
    const pets = document.getElementById('petList').getElementsByTagName('li');
    if (pets.length >= 2) {
        const pet1 = pets[pets.length - 2]; 
        const pet2 = pets[pets.length - 1]; 

        const owner1 = pet1.textContent.split(', ')[1].split(': ')[1].trim();
        const owner2 = pet2.textContent.split(', ')[1].split(': ')[1].trim();

        const pet1Object = { ownerName: owner1 };
        const pet2Object = { ownerName: owner2 };

        const ownersAreEqual = new Pet().hasSameOwner.call(pet1Object, pet2Object);
        console.log('I proprietari sono uguali:', ownersAreEqual);
    } else {
        console.log('Non ci sono abbastanza animali domestici per confrontare i proprietari.');
    }
}
