let decInp = document.querySelector("#dec")
let binInp = document.querySelector("#bin")
let err = document.querySelector("#errorMsg")

//Decimal -> Binary
decInp.addEventListener("input", () =>{
    let decVal = parseInt(decInp.value)

    binInp.value = decVal.toString(2)
})

//Binary -> Decimal
binInp.addEventListener("input", () => {
    let binVal = binInp.value

    if (binValidator(binVal)){
        decInp.value = parseInt(binVal, 2)
        err.innerHTML = ""
    }
    else{
        err.innerHTML = "Invalid Binary Input"
    }

    //Binary Input Validation
    function binValidator(num){
        for (i=0; i< num.length; i++){
            if (num[i] != "0" && num[i] != "1"){
                return false
            }
        }
        return true
    }
})

//Key Terms Animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show')
        }
        else{
            entry.target.classList.remove('show')
        }
    })
})

const hiddenElements = document.querySelectorAll(".hidden")
const hiddenRight = document.querySelectorAll(".hiddenRight")
hiddenElements.forEach((el) => observer.observe(el))
hiddenRight.forEach((el) => observer.observe(el))
