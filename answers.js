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

