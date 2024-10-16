
const colors = ["red", "green", "blue"];
[firstColor, secondColor, thirdColor] = colors;

console.log(thirdColor)

const person = {
    name:"Alice",
    age:25,
    city:"Wonderland"
}

const {name, age, city} = person;
console.log(age)

const settings = {
    theme:"dark",
    language:"en"
};

const {theme, language, mode="light"} = settings;
console.log(theme)
console.log(language)
console.log(mode)

    