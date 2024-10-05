console.log('“Здравствуй, мир!”')


let form = document.getElementById('myForm')
let html_result = document.getElementById('result')
function addition(){
    value_one = Number(form.firstNumber.value)
    value_two = Number(form.secondNumber.value)
    html_result.innerHTML = value_one + value_two
}


function substraction(){
    value_one = Number(form.firstNumber.value)
    value_two = Number(form.secondNumber.value)
    html_result.innerHTML = value_one - value_two
}


function multiplication(){
    value_one = Number(form.firstNumber.value)
    value_two = Number(form.secondNumber.value)
    html_result.innerHTML = value_one * value_two
}


function division(){
    value_one = Number(form.firstNumber.value)
    value_two = Number(form.secondNumber.value)
    html_result.innerHTML = value_one / value_two
}
