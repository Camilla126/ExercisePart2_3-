const stringNumber = ["Jonas",  99,  "Ulrich",  25,  "Capitão Levi",  "Paul Atreides",  "Light yagami",4,  "Zeke yega",  "Will o sábio",  "Bob",  "Número 11",  "Eren yega",  "Major armstrong",  80,  "Edward elric",  "Will",  80,  "chani",  "Mikasa ackerman", 589, "Ryuk"]
const string = []
const numbers = []

for (let index = 0;index < stringNumber.length;index += 1){
    const item = stringNumber[index] 

    if (typeof (item)=== 'string'  ) {
        string.push(item);

    } else {
        numbers.push(item);
    }
}
console.log(string);
console.log(numbers);