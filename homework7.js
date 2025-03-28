const text = "Wonderful, Joyful, Happiness, Time, Task, Apple";
const regex = /\b[^Aa,\s]{6,}\b/g;
console.log(text.match(regex));


// друга частина домашньої роботи
var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com" // прибрав <> , було записано <email:"dmitro.porohov@yahoo.com>"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" // Нам такі не підходять
    },
];


var re = /[\w]+(?:\.[\w]+)?@(gmail\.com|yahoo\.com)$/;

var arrNew = arr
            .filter(user  => re.test(user.email))
            .map(user => ({
                userName: user.userName,
                lastName: user.lastName,
                email: user.email
            }));

console.log(arrNew);
