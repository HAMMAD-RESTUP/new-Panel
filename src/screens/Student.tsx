import 'bootstrap/dist/css/bootstrap.min.css';
import react, { useState } from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';



export default function Student() {



  const questions = [
    {
      question: "Html Stands For _______________________",
      options: ["Hyper Text Makeup Language",
        "html",
        "Case Cading Style Sheet",
        "Hypertext markup language"
      ],
      correctAns: "Hypertext markup language",
    },
    {
      question: "Css Stands For _______________________",
      options: [
        "Casecading Style Sheet",
        "Java",
        "Ram",
        "Hypertext markup language"
      ],
      correctAns: "Casecading Style Sheet",
    },
    {
      question: "Js Stands For _______________________",
      options: [
        "Java Style",
        "Java Script",
        "Script",
        "Script Src"
      ],
      correctAns: "Java Script",
    },
    {
      question: "Dom Stands For _______________________",
      options: [
        "Document Object Model",
        "html",
        "Css",
        "Java"
      ],
      correctAns: "Document Object Model",
    },
    {
      question: "Ram Stands For _______________________",
      options: [
        "Read Only Memory",
        "Dom",
        "Random Acccess Memory",
        "For Pc"
      ],
      correctAns: "Random Acccess Memory",
    },
    {
      question: "Rom Stands For _______________________",
      options: [
        "Hyper Text Markup Language",
        "html",
        "HTml",
        "Read Only Memory"
      ],
      correctAns: "Read Only Memory",
    },
  ];


  type optionstype = {
    question: any
    options: any
  }

  const [currentQuestion, setCurrentQuestion] = useState<any>(0);
  const handelAnswerButtonClick = () => {
    const nextQuestion = currentQuestion + 1;
    setCurrentQuestion(nextQuestion);
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);

    } else {
      alert("You are End of This Quiz");
    }
  }

  return (
    <>
      <div className='container'>

        <div className='Quiz-container'>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 Question-Section">
            <h1 className='text-center mainh1'>Quiz App</h1>
            <h3> {questions[currentQuestion].question}</h3>

          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 Answer-Section">
            {questions[currentQuestion].options.map((e: any, i: any) =>

            
                <Button key={i} className='mtr-btn' sx={{ m: '1rem' }} variant="contained" color='success' onClick={handelAnswerButtonClick}>{e.correctAns}</Button>)}
          </div>

        </div>
      </div>

    </>
  );
}
