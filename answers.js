///////HTML & CSS ////////////
//HTML Intro (tags, content, attributes, semantic HTML)---Rank: 5;
//HTML Elements (headers, navigation, lists, sections, etc.) and Media (images, audio, videos)---Rank: 4;
//CSS Intro (including css files in HTML, elements)---Rank: 5;
//CSS Basics (colors, background, font properties)---Rank: 4;

//////////////////////////////
/////JavaScript Reps////////

//Easy Going
for ( let i = 1; i <= 20; i++) {
    console.log(i);
}

//Get Even
for (let i = 0; i <= 200; i+=2) {
    console.log(i);   
}

//Fizz Buzz
for ( let i = 1; i <= 100; i++) {
    console.log(i);
}
//for ( let i = 1; i <= 100; i++) {
//     i % 3 == 0 ? console.log("Fizz") : console.log(i);
// }
// for ( let i = 1; i <= 100; i++) {
//     i % 5 == 0 ? console.log("Buzz") : console.log(i);
// }
// for ( let i = 1; i <= 100; i++) {
//     i % 3 == 0 && i % 5 == 0 ? console.log("FizzBuzz") : console.log(i);
//}
for ( let i = 1; i <= 100; i++) {
    i % 3 == 0 && i % 5 == 0 ? console.log("FizzBuzz") 
    : i % 3 == 0 ? console.log("Fizz") 
    : i % 5 == 0 ? console.log("Buzz")
    : console.log(i);
};

//Wild Wild Life
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

plantee[2]++;
wolfy[3] = ["Yukon Territory","Gotham City"];
dart.push("Hawkins");
wolfy[0] = "Gameboy";
console.log(plantee,wolfy,dart);

//Yell at the Ninja Turtles
const ninjas = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo'];
const upperCaseNinjas = [];
for (let n of ninjas) {
    n = n.toUpperCase();
    upperCaseNinjas.push(n);
};
console.log(upperCaseNinjas);






