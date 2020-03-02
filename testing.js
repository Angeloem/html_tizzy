let toChangeText = document.querySelector("#changeText");

let getIt = document.querySelector("#getIt");

let i = 0;
let time = 3000;


let words = [
    'B.End Dev',
    'Data Scientist',
    'Front End Developer'
    ]



const changeText = () => {
    toChangeText.innerHTML = words[i];

    if(i < words.length-1) {
        i++
    }
    else {
        i = 0;
    }

    setTimeout("changeText()", time)
}

window.onload = changeText;