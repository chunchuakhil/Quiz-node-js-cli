const readLineSync = require('readline-sync');

const questionsList=[
  {
    question:"What is the capital of Australia?",
    options:['Melbourne','Sydney','Canberra','Perth'],
    answer:3
  },
  {
    question:"What is the capital of Canada?",
    options:['Ottawa','Toronto','Montreal','Calgary'],
    answer:1
  },
  {
    question:"What is the capital of Turkey?",
    options:['Ankara','Izmir','Istanbul','Konya'],
    answer:1
  },
  {
    question:"What is the capital of Afghanistan?",
    options:['Afghan','Islamabad','Baghdad','Kabul'],
    answer:4
  },
  {
    question:"What is the capital of Malaysia?",
    options:['Penang','Kuala Lumpur'],
    answer:2
  },
]

const checkAnswer=(userAns, ans)=>{
  if(userAns == ans  ){
    console.log("Correct Answer\n")
    return true;
  }else{
    console.log("Wrong Answer\n")
    return false;
  }
}

const askOptions=(options)=>{
  let opt=''
  options.forEach((option,index)=>{
     opt=`${opt} ${index+1} ${option} \n`
  })
  return opt;
}

const askQuestion=(question)=> `${question}\n`

const startQuiz=(list)=>{
  console.log("Quiz on Country capital city\n")
  let resultCount=0;
  for(const questionObj of list){
    const userAnswer=readLineSync.question(`${askQuestion(questionObj.question)}${askOptions(questionObj.options)}`)
    const isAnswerCorrect=checkAnswer(userAnswer, questionObj.answer)
    if(isAnswerCorrect){
      resultCount++;
    }
  }
  console.log(`Total correct answers : ${resultCount}/${list.length}`)
}

startQuiz(questionsList)
