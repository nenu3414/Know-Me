  // readlineSync Library
  const readlineSync = require('readline-sync');
  // chalk Library
  const chalk = require('chalk');
  // score initially set to zero
  score = 0;

  // data of high score
  var highScores = [
    {
      name: "Neenad",
      score: 10,
    },
    {
      name: "Saurabh",
      score: 9,
    },
    ]

  // QuestionSet
  const questions = [{
    question: `\n1. Where do Neenad live?
    a. Nagpur
    b. Wardha
    c. Nanded
    d. Pune` +
    chalk.blue.bold(`
  Answer = `),
    answer: "b",
  },
  {
    question: `\n2. When is Neenad's birthday?
    a. 7th Oct
    b. 20th Nov
    c.22nd Dec
    d. 16 June` +
    chalk.blue.bold(`
  Answer = `),
    answer: "d",
  },
  {
    question: `\n3. What is Neenad's dream domain he would like work?
    a. Cloud
    b. Software
    c. Defence
    d. Arts` +
    chalk.blue.bold(`
  Answer = `),
    answer: "c",
  },
  {
    question: `\n4. What is Neenad's favourite food?
    a. Home Made food
    b. Maggie
    c. Burger
    d. Pizza` +
    chalk.blue.bold(`
  Answer = `),
    answer: "a",
  },
  {
    question: `\n5. Which sport Neenad's played most?
    a. Football
    b. Swimming
    c. Cricket
    d. Handball` +
    chalk.blue.bold(`
  Answer = `),
    answer: "b",
  },
  {
    question: `\n6. Which is Neenad's favourite movie?
    a. Lakshya
    b. Chain khuli ki main khuli
    c. 3 Idiots
    d. Bhootnath` +
    chalk.blue.bold(`
  Answer = `),
    answer: "c",
  },
  {
    question: `\n7. Who is Neenad's favourite cricketer?
    a. Ab de Villiers
    b. Virat Kohli
    c. Sachin Tendulkar
    d. M S Dhoni` +
    chalk.blue.bold(`
  Answer = `),
    answer: "d",
  },
  {
    question: `\n8. Where would Neenad like to travel?
    a. Goa
    b. Vishakhapatnam
    c. Shimla
    d. Haridwar` +
    chalk.blue.bold(`
  Answer = `),
    answer: "a",
  },
  {
    question: `\n9. Which is Neenad's favourite animated TV show?
    a. Pokemon
    b. Oggy and the cockroaches
    c. Sinchan
    d. Tom and Jerry` +
    chalk.blue.bold(`
  Answer = `),
    answer: "d",
  },
  {
    question: `\n10. Which type of movie Neenad's most likely to watch?
    a. Autobiography
    b. Sci-fi
    c. Action
    d. Comedy` +
    chalk.blue.bold(`
  Answer = `),
    answer: "b",
  }];

  // greet function
  function greet(){
    console.log(chalk.yellowBright.bold.bgBlack.underline("Welcome to How well do you know Neenad Quiz\n"));
    console.log("You think you know him well? Try answering some simple questions about him!\n");

    while(true){
    var userName = readlineSync.question(chalk.bold(
    "Before we start, May I have your name: "));
    if(userName !== ""){
      break;
    }
    else{
      console.log("Whoops :(  Please enter your name! \n");
    }
    return userName;
  }
  console.log("Hello " + userName + "! Now you are good to start.\n");
  console.log(chalk.bold.bgBlack.green.underline("QUESTIONS\n"));
  }
  
  // play function
  function play (question, answer) {
    // input from user 
    const userAnswer = readlineSync.question(chalk.yellow(question));
    // if correct answer given score += 5
    if (userAnswer.toLowerCase() === answer) {
      console.log(chalk.black.bold.bgGreen("\nYeah, you're ✔ Correct"));
      score += 1;
      }
      else {
        console.log(chalk.black.bold.bgRedBright("\nOops! That's ✘ incorrect"));
        console.log(chalk.black.bold.bgGreen("\ncorrect answer is " + answer));
      }
      // display current score
    console.log(chalk.bgMagenta.bold("\nCurrent Score is: " + score));
    console.log("-----------------------------------------------------");
  }

  // question print function
  function questionPrint(){
    // for Loop to iterate over the questions
    for(var i=0; i<questions.length; i++)
    {
      var currentQuestion = questions[i];
      play (currentQuestion.question, currentQuestion.answer);
    }
  }

  // show scores function
  function showScores() {
    console.log("YAY! You SCORED: ", score);
    console.log("Check out the high scores, if you hit the high score, send me screenshot and I'll update it");
    highScores.map(score => console.log(score.name, " : ", score.score))
  }

  // goodbye message function
  function goodBye(){
    console.log(chalk.bold.bgBlack.cyanBright("\nTHANKYOU FOR PARTICIPATING IN THE QUIZ ᛤ"));
  }

  // driver function
  function starter(){
    greet()
    questionPrint()
    showScores()
    goodBye()
  }
  // function call
  starter()