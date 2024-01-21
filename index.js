const characters = ["+", "-", "/", "*"];

let btn_operator1 = document.getElementById("btn-operator1")
btn_operator1.textContent = "Choose Operator"

let btn_operator2 = document.getElementById("btn-operator2")
btn_operator2.textContent = "Default"

let guessed_answer2 = document.getElementById("guessed-answer2")


let btn_answer1 = document.getElementById("btn-answer1")
btn_answer1.textContent = "Click for right answer"

let btn_answer2 = document.getElementById("btn-answer2")
btn_answer2.textContent = "Your Answer"

let btn_clear = document.getElementById("btn-clear")
btn_clear.textContent = "Clear"

function getRandomNumber(){
    let number = Math.floor((Math.random()*characters.length))
    return number
}

function getRandomOperator(){
    let operator = characters[getRandomNumber()]
    return operator
}

function getOperator(){
    btn_operator2.textContent = getRandomOperator()
}  

function getAnswer(){
    let first_Number = document.getElementById("first-Number").value

    let second_Number = document.getElementById("second-Number").value
    
    let answer = btn_answer2.value

    if( btn_operator2.textContent === "*"){
        answer = (first_Number * second_Number)
    }
    if( btn_operator2.textContent === "+"){
        answer = (Number(first_Number) + Number(second_Number))
    }
    if( btn_operator2.textContent === "/"){
        answer = (first_Number / second_Number)
    }
    if( btn_operator2.textContent === "-"){
        answer = (first_Number - second_Number)
    }
    return answer
}

function assignAnswer(){
    let label_answer = document.getElementById("answer-status")
    let guessed_answer2 = document.getElementById("guessed-answer2")
    
    btn_answer2.textContent = getAnswer()
    if( guessed_answer2.value === btn_answer2.textContent){
        label_answer.textContent = "correct"

    }
    else{
        label_answer.textContent = "incorrect"
    }

    guessed_answer2.disabled=true


}

function myclear(){
    let first_Number = document.getElementById("first-Number")
    first_Number.value=""
    
    let second_Number = document.getElementById("second-Number")
    second_Number.value=""
    
    let btn_operator2 = document.getElementById("btn-operator2")
    btn_operator2.textContent = "Default"
    
    let btn_answer2 = document.getElementById("btn-answer2")
    btn_answer2.textContent = "Your Answer"

    let label_answer = document.getElementById("answer-status")
    label_answer.textContent = ""
    
    guessed_answer2.disabled = false

    guessed_answer2.value = ""
    
}

