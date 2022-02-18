const readLineSync = require('readline-sync');

const questionsList=[
  {
    question:"What is the capital of Australia?",
    option1:"Melbourne",
    option2:"Sydney",
    option3:"Canberra",
    option4:"Perth",
    answer:3
  },
  {
    question:"What is the capital of Canada?",
    option1:"Ottawa",
    option2:"Toronto",
    option3:"Montreal",
    option4:"Calgary",
    answer:1
  },
  {
    question:"What is the capital of Turkey?",
    option1:"Ankara",
    option2:"Izmir",
    option3:"Istanbul",
    option4:"Konya",
    answer:1
  },
  {
    question:"What is the capital of Afghanistan?",
    option1:"Afghan",
    option2:"Islamabad",
    option3:"Baghdad",
    option4:"Kabul",
    answer:4
  },
  {
    question:"What is the capital of Malaysia?",
    option1:"Sabah",
    option2:"Sarawak",
    option3:"Penang",
    option4:"Kuala Lumpur",
    answer:4
  },
]

const checkAnswer=(userAns, ans)=>{
  if(userAns == ans  ){
    console.log("Correct Answer")
    return true;
  }else{
    console.log("Wrong Answer")
    return false;
  }
}

const askQuestions=(list)=>{
  let correctAnsCount=0;
  for(const question of list){
    const printQuestion=readLineSync.question(`
    ${question.question}\n 
    1 ${question.option1} \n
    2 ${question.option2} \n
    3 ${question.option3} \n
    4 ${question.option4} \n    
    `)
    const check=checkAnswer(printQuestion, question.answer)
    if(check===true){
      correctAnsCount++;
    }
  }
  console.log(`Total correct answers : ${correctAnsCount}/${list.length}`)
}
askQuestions(questionsList)
