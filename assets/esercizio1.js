class User {
    constructor(name, lastName, age, location) {
        this.firstName = name;
        this.lastName = lastName;
        this.age = age;
        this.location = location;
    }

    compareAge(otherUser) {
        return this.age > otherUser.age;
    }
}

const user1 = new User("Marco", "Tocco", 25, "Cagliari");
const user2 = new User("Mario", "Rossi", 30, "Milano");

const compareUserAge = user1.compareAge(user2);
console.log('user1 è più vecchio di user2:', compareUserAge);

