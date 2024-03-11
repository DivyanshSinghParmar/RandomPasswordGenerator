// const passwordLength =document.getElementById("leng").value;


// let includeLowerCase = false;
// let LCCB = document.getElementById("LC");
// LCCB.onclick = function(){
//     if(LCCB.checked){
//         includeLowerCase = true;
//     }else{
//         includeLowerCase = false;
//     }
//     console.log(includeLowerCase);
// }


// let includeUpperCase = false;
// let UCCB = document.getElementById("UC");
// UCCB.onclick = function(){
//     if(UCCB.checked){
//         includeUpperCase = true;
//     }else{
//         includeUpperCase = false;
//     }
//     console.log(includeUpperCase);
// }

// let includeNumbers=false;
// let NuCB = document.getElementById("Nu");
// NuCB.onclick = function(){
//     if(NuCB.checked){
//         includeNumbers = true;
//     }else{
//         includeNumbers = false;
//     }
//     console.log(includeNumbers);
// }


// let includeSymbols=false;
// let SyCB = document.getElementById("Sym");
// SyCB.onclick = function(){
//     if(SyCB.checked){
//         includeSymbols = true;
//     }else{
//         includeSymbols = false;
//     }
//     console.log(includeSymbols);
// }

// function GeneratePassword(passwordLength, includeLowerCase,includeUpperCase,includeNumbers,includeSymbols){
    
//     const lowercasechars="abcdefghijklmnopqrstuvwxyz";
//     const uppercasechars="ABCDEFGHIJKLMNOPQRST";
//     const numberchars = "0123456789";
//     const symbolchar = "!@#$%^&*()_+-=";
//     let allowedchars = "";
//     let password = "";

//     allowedchars += includeLowerCase ? lowercasechars : "";
//     console.log(allowedchars);
//     allowedchars += includeUpperCase ? uppercasechars : "";
//     console.log(allowedchars);
//     allowedchars += includeNumbers ? numberchars : "";
//     console.log(allowedchars);
//     allowedchars += includeSymbols ? symbolchar : "";

//     console.log(allowedchars);

//     for (let i = 0; i < passwordLength; i++) {
//         const randomIndex = Math.floor(Math.random() *allowedchars.length);
//         password += allowedchars.charAt(randomIndex);
//     }
//     return password;

// }


// const password = GeneratePassword(passwordLength, 
//                         includeLowerCase, 
//                         includeUpperCase,
//                         includeNumbers,
//                         includeSymbols);

// console.log("hello",password);




let includeLowerCase = false;
let LCCB = document.getElementById("LC");
LCCB.onclick = function() {
    includeLowerCase = LCCB.checked;
    console.log(includeLowerCase);
}

let includeUpperCase = false;
let UCCB = document.getElementById("UC");
UCCB.onclick = function() {
    includeUpperCase = UCCB.checked;
    console.log(includeUpperCase);
}

let includeNumbers = false;
let NuCB = document.getElementById("Nu");
NuCB.onclick = function() {
    includeNumbers = NuCB.checked;
    console.log(includeNumbers);
}

let includeSymbols = false;
let SyCB = document.getElementById("Sym");
SyCB.onclick = function() {
    includeSymbols = SyCB.checked;
    console.log(includeSymbols);
}

function GeneratePassword() {
    const passwordLength = document.getElementById("leng").value;

    const lowercasechars = "abcdefghijklmnopqrstuvwxyz";
    const uppercasechars = "ABCDEFGHIJKLMNOPQRST";
    const numberchars = "0123456789";
    const symbolchar = "!@#$%^&*()_+-=";
    let allowedchars = "";
    let password = "";

    allowedchars += includeLowerCase ? lowercasechars : "";
    console.log(allowedchars);
    allowedchars += includeUpperCase ? uppercasechars : "";
    console.log(allowedchars);
    allowedchars += includeNumbers ? numberchars : "";
    console.log(allowedchars);
    allowedchars += includeSymbols ? symbolchar : "";
    console.log(allowedchars);

    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * allowedchars.length);
        password += allowedchars.charAt(randomIndex);
    }
    return password;
}

document.getElementById("generateBtn").addEventListener("click", function() {
    const password = GeneratePassword();
    console.log("Generated Password:", password);
    document.getElementById("result").textContent = password;
});
