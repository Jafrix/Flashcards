import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { axiosInstance } from '../../axiosInstance'

function ThemeItem({obj}) {
    const [question, setQuestion] = useState([])

    const loadQuest = async () => {
        try {
            const response = await axiosInstance.get("/question")
            
            if (response.status === 200){
                
                console.log(obj.id);
                setQuestion(response.data.questions.find((el) => +obj.id === +el.themeId))  
                console.log(question); 
            }
        } catch (error) {
            console.log(error.message);
        } 
    }


useEffect(() => {
    loadQuest();
}, []
);

  return (
    <div><ul>
        <Link to={`/question/${obj.id}/${question.id}`}>
            {
                obj.title
            }</Link></ul></div>
  )
}

export default ThemeItem