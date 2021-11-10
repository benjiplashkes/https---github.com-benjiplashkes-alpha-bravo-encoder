const input = document.querySelector('#input')
const encodeButton = document.querySelector('#submit')

let stringToEncode = ""
let encodedString = ""  

const encodeString = (string)=>{
    const strArr = string.split("")
    console.log(strArr)
    for(i=0;i<strArr.length; i++){
        strArr[i] == "a" ? strArr[i] = "Alpha ":
        strArr[i] == "b" ? strArr[i] = "Alpha ":
        strArr[i] == "c" ? strArr[i] = "Alpha ":
        strArr[i] == "d" ? strArr[i] = "Alpha ":
        strArr[i] == "e" ? strArr[i] = "Alpha ":
        strArr[i] == "f" ? strArr[i] = "Alpha ":
        strArr[i] == "g" ? strArr[i] = "Alpha ":
        strArr[i] == "h" ? strArr[i] = "Alpha ":
        strArr[i] == "i" ? strArr[i] = "Alpha ":null

    }
    encodedString = strArr.join(" ")
    console.info(encodedString)
       
    }

const handleInputChange = (event) => {
    stringToEncode = event.target.value
    
}
const handleClick = (event) => {
    event.preventDefault()
    console.log("clicked: ", event.target)
    encodeString(stringToEncode)
}

input.addEventListener("change", handleInputChange)
encodeButton.addEventListener("click", handleClick)

