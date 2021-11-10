const input = document.querySelector('#input')
const encodeButton = document.querySelector('#submit')
const encodeForm = document.querySelector('#encodeForm')
const HTMLtarget = document.querySelector('#encoded')
let stringToEncode = ""
let encodedString = ""  


const resetQuery = ()=> {
    input.value = ""
    stringToEncode = ""
}
const renderEncodedString = (str) => {
        console.log({str})
        HTMLtarget.innerText = str
        resetQuery()

}
const encodeString = (string) => { 
    string = string.toLowerCase()
    const strArr = string.split("")
    console.log(strArr)
    for(i=0;i<strArr.length; i++){
        strArr[i] == "a" ? strArr[i] = "Alpha ":
        strArr[i] == "b" ? strArr[i] = "Bravo ":
        strArr[i] == "c" ? strArr[i] = "Charlie ":
        strArr[i] == "d" ? strArr[i] = "Delta ":
        strArr[i] == "e" ? strArr[i] = "Echo ":
        strArr[i] == "f" ? strArr[i] = "Foxtrot ":
        strArr[i] == "g" ? strArr[i] = "Golf ":
        strArr[i] == "h" ? strArr[i] = "Hotel ":
        strArr[i] == "i" ? strArr[i] = "India ":
        strArr[i] == "j" ? strArr[i] = "Joker ":
        strArr[i] == "k" ? strArr[i] = "Kilo ":
        strArr[i] == "l" ? strArr[i] = "Lima ":
        strArr[i] == "m" ? strArr[i] = "Mike ":
        strArr[i] == "n" ? strArr[i] = "November ":
        strArr[i] == "o" ? strArr[i] = "Oscar ":
        strArr[i] == "p" ? strArr[i] = "Papa ":
        strArr[i] == "q" ? strArr[i] = "Quebeq":
        strArr[i] == "r" ? strArr[i] = "Romeo ":
        strArr[i] == "s" ? strArr[i] = "Sierra ":
        strArr[i] == "t" ? strArr[i] = "Tango ":
        strArr[i] == "u" ? strArr[i] = "Uniform ":
        strArr[i] == "v" ? strArr[i] = "Victor ":
        strArr[i] == "w" ? strArr[i] = "Whiskey ":
        strArr[i] == "x" ? strArr[i] = "Xray ":
        strArr[i] == "y" ? strArr[i] = "Yankee ":
        strArr[i] == "z" ? strArr[i] = "Zulu ":
        strArr[i] == " " ? strArr[i] = "," + "\n":null

    }
    encodedString = strArr.join("")
    
       if(encodedString.indexOf(' \n')){
           encodedString.replaceAll(" \n","\n")
       }
    console.error({encodedString})
    renderEncodedString(encodedString, HTMLtarget)
    }

const handleInputChange = (event) => {
    stringToEncode = event.target.value
    
    
}
const handleFormSubmit = (event) => {
    console.log(event)
 

}
const handleKeyBoard = (event) => {
    event.key === "Escape" ? resetQuery() :
    
    event.key === "Enter" ? encodeString(input.value) : null
    
    
    
    
}
const handleClick = (event) => {
    event.preventDefault()
    console.log("clicked: ", event.target)
    encodeString(stringToEncode)
}

input.addEventListener("change", handleInputChange)
input.addEventListener("keydown", handleKeyBoard)
encodeButton.addEventListener("click", handleClick)
encodeForm.addEventListener("submit", handleFormSubmit)
