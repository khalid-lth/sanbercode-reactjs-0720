// SOAL 1
const newFunction = function literal(firstName, lastName) {
    let literal = {};
        literal.firstName = firstName;
        literal.lastName = lastName;

        literal.fullName = () => {
            console.log(`${firstName} ${lastName}`)  
        }
        return literal;
    }

//Driver Code 
newFunction("William", "Imoh").fullName()


// SOAL 2
const newObject = {
    firstName: "Harry",
    lastName: "Potter Holt",
    destination: "Hogwarts React Conf",
    occupation: "Deve-wizard Avocado",
    spell: "Vimulus Renderus!!!"
}

const { firstName, lastName, destination, occupation, spell} = newObject
// Driver code
console.log(firstName, lastName, destination, occupation)


// SOAL 3
const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]
const combined = [...west, ...east]
//Driver Code
console.log(combined)