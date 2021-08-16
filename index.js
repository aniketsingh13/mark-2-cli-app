var readlineSync = require('readline-sync');
const chalk = require('chalk');
var score=0;
var userName=readlineSync.question("please enter your name? ")
console.log(chalk.green("welcome "+userName+" to the quiz"+" do you know pawan singh "))
function play(question,option,answer)
{
  var userAnswer=readlineSync.question(chalk.yellow(question,option));
  if(userAnswer===answer)
  {
    console.log(chalk.red("you are wright"));
    score=score+1;
  }
  else{
    console.log(chalk.red("you are wrong"));
    score=score-1;
  }
console.log(chalk.blue("your score is "+score));
console.log("---------");
}
var quiz=[{question:'hometown of pawan singh?',
option:'\n1.ara \n2.patna \n3.gaya \n your option:',
answer:'1'},
{question:"what is birth date of pawan singh?",
option:"\n1.12jan \n2.23mar \n3.5jan \n your option:",
answer:"3"},
{question:"what is the name of pawan singh mother?",option:"\n1.pratima_singh \n2.vidya_singh \n3.deepa_singh\n your option:",
answer:"1"},
{question:"what is the date of pawan singh first marraige?",option:"\n1.2jan \n2.1dec \n3.4mar\n your option:",
answer:"2"},
{question:"name of the pawan singh first album?",
option:"\n1.odhaniya_wali \n2.bol_bam \n3.album \n your option:",answer:"1"},
]
for(var i=0;i<quiz.length;i++)
{
  var currentQuestion=quiz[i];
  play(currentQuestion.question,currentQuestion.option,currentQuestion.answer)
}

var highscore=[{name:'aniket',total:'5'}];
console.log(chalk.blue("your final score is "+score));
console.log("here is the list of highscorer");
console.log(highscore[0].name,highscore[0].total);
console.log("thankyou for playing the quiz "+userName);
console.log(chalk.green("share your score screenshot with me"))