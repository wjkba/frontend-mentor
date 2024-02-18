const questions = document.querySelector(".questions")


class Question{
    constructor(question, answer){
        this.question = question
        this.answer =  answer
    }
}

const questionsArray = [
    new Question(`What is Frontend Mentor, and how will it help me?`, 
`Frontend Mentor offers realistic coding challenges to help developers improve their 
frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for 
all levels and ideal for portfolio building.`),
    new Question(`Is Frontend Mentor free?`, 
`Yes, Frontend Mentor offers both free and premium coding challenges, with the free 
option providing access to a range of projects suitable for all skill levels.`),
    new Question(`Can I use Frontend Mentor projects in my portfolio?`, 
`Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent
way to showcase your skills to potential employers!`),
    new Question(`How can I get help if I'm stuck on a Frontend Mentor challenge?`, 
`The best place to get help is inside Frontend Mentor's Discord community. There's a help 
channel where you can ask questions and seek support from other community members.`),
]



addEventListener("DOMContentLoaded", () =>{
    questionsArray.forEach(q => {
        console.log(q.question)
        console.log(q.answer)
        createQuestion(q.question, q.answer)
    })
    const questionC = document.querySelectorAll(".question")
    for(let i = 0; i < questionC.length ; i++){
        let question = questionC[i]
        question.onclick = function (){
            toggleIcon(question.children[0].children[1]) // icon
            question.children[1].classList.toggle("question__answer--expand") // expand
        }
    }
})






function createQuestion(question, answer){
    // CREATE QUESTION DIV
    let createQuestion = document.createElement("div")
    createQuestion.classList.add("question")
    questions.append(createQuestion)
    //CREATE QUESTION
    let createQuestionHeader = document.createElement("div")
    createQuestionHeader.classList.add("question__header")
    createQuestion.append(createQuestionHeader)
    let createQuestionHeaderh2 = document.createElement("h2")
    createQuestionHeaderh2.textContent = `${question}`
    createQuestionHeader.append(createQuestionHeaderh2)
    let createQuestionIcon = document.createElement("img")
    createQuestionIcon.setAttribute("src", "assets/images/icon-plus.svg")
    createQuestionHeader.append(createQuestionIcon)
    //CREATE ANSWER
    let createQuestionAnswer = document.createElement("p")
    createQuestionAnswer.classList.add("question__answer")
    createQuestionAnswer.textContent = `${answer}`
    createQuestion.append(createQuestionAnswer)
}

function toggleIcon(e){
    console.log(e)
    try{
        if(e.getAttribute("src") === "assets/images/icon-plus.svg"){
            e.setAttribute("src", "assets/images/icon-minus.svg")
        }
        else{
            e.setAttribute("src", "assets/images/icon-plus.svg")
        }
    }
    catch (error){
        console.log(error)
    }
}
