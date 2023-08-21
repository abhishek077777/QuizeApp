const questions =[
    {
        'que':'Which of the following markup language   ?',
        'a': 'HTML',
        'b': 'CSS',
        'c':  'JavaScript',
        'd': 'PHP',
        'correct': "a"
    },
    {
        'que':'What year javascript launched ?',
        'a': '1996',
        'b': '1995',
        'c':  '1994',
        'd': 'None of above',
        'correct': 'b'
    },
     {
        'que':'What does css stand for ?',
        'a': 'Hyper text markup language',
        'b': 'cascading style sheet',
        'c':  'jonson object ',
        'd': 'PHP',
        'correct': 'b'
    }, {
        'que':'who is the correct Mobile Number of ABHI ?',
        'a': '8521658637',
        'b': '7667045192',
        'c':  '7667645640 ',
        'd': '9931624402',
        'correct': 'a'
    }
    
]



let index=0;
let total=questions.length;
let right=0,wrong=0;
const quesBox = document.getElementById("quesBox");
const optionInputs=document.querySelectorAll('.options');
const loadQuestion = ()=>{
    if(index===total){
        return endQuize()
    }
    reset();
  const data= questions[index];
  console.log(data);
  quesBox.innerText=`${index+1}) ${data.que}`; 
  
  optionInputs[0].nextElementSibling.innerText=data.a;
  optionInputs[1].nextElementSibling.innerText=data.b;
  optionInputs[2].nextElementSibling.innerText=data.c;
  optionInputs[3].nextElementSibling.innerText=data.d;
}

const submitQuize = ()=> {

    const data=questions[index];
    const ans=getAnswer();
    if(ans==data.correct){
       right++;
    }else{
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}
const getAnswer = () => {
    let answer;
    optionInputs.forEach(
        (input) => {
            if(input.checked){
                answer= input.value;
                
            }
        }

    )
    return answer;
}
 const reset = () =>{
    optionInputs.forEach(
        (input) =>{
            input.checked=false;
        }
    )
 }



 const endQuize = () =>{
    document.getElementById("box").innerHTML=`
    <h3 > Thanku you for playing the Quize </h3>
    <h2> ${right}/ ${total} are correct</h2> `

 }
// intial laod

loadQuestion();