var btnTranslate = document.querySelector("#btn-translate")
var userInput = document.querySelector("textarea")
var output = document.querySelector("#txt-output")

var urlSample = "https://api.funtranslations.com/translate/chef.json"

function generateURL(input){
    return urlSample + "?" + "text="+ input
}

function errorHandler(error){
    console.log("error occured",error)
    alert("Something went with server! Please try again")
}

function clickEventHandler(){
    var inputText = userInput.value;

    fetch(generateURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;  
            output.innerText = translatedText;
        })
        .catch(errorHandler)
    }

btnTranslate.addEventListener("click",clickEventHandler)