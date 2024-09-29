import React, { useEffect, useState } from 'react'
import { axiosInstance } from '../axiosInstance'
import { Link, useNavigate, useParams } from 'react-router-dom'

function ThemePage() {

const [question, setQuestion] = useState("")
const [answer, setAnswer] = useState("")
const [notCorrectAnswer, setNotCorrectAnswer] = useState(false)
const [correctAnswer, setCorrectAnswer] = useState(false)
const{ themeId, questionId } = useParams()

const navigation = useNavigate()

const loadQuestion = async () => {
  try {
    const response = await axiosInstance.get(`/question/${themeId}/${questionId}`);

    if (response.status === 200) {
      setQuestion(response.data.questions);
      console.log(question);
    }
  } catch (error) {
    console.log(error.message);
  }
}

const submitHandler = async (e) => {
  e.preventDefault();
  if ( answer !== question.answer){
    setCorrectAnswer(false)
    setNotCorrectAnswer(true)
  } else{
    setNotCorrectAnswer(false)
    setCorrectAnswer(true)
  }
}



useEffect(() => {
  loadQuestion();
}, [questionId]);
  
  return (
    <>
    <form onSubmit={submitHandler}>
      { themeId===1? (<img src={question.question} alt="img" />):(<p> {question.question} </p>)
 
      }
      <img src={question.question} alt="img" />
      <input type="text" value={answer} onChange={(e) => setAnswer(e.target.value)}/>
      <button type="submit"> ОТВЕЧАЙ</button>
    </form>
    {notCorrectAnswer && (<div>
      ТЫ не прав Дружок Пирожок</div>)}
      {correctAnswer && (<div>
        Молодчина</div>)}
{ themeId===1? ( +questionId < 6 ? (<Link to={`/question/${themeId}/${+questionId+1}`}>
        Дальше
        
        </Link>):(
        <Link to={`/`}>
        Финиш
        </Link>)):( +questionId <11  ? (<Link to={`/question/${themeId}/${+questionId+1}`}>
        Дальше
        </Link>):(
        <Link to={`/`}>
        Финиш
        </Link>))}
        


     
        
        </>
  )
}

export default ThemePage