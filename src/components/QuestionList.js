import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({questions, filteredQuestions}) {
  

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questions.map((question)=>{
          return <QuestionItem 
            key={question.id} 
            question={question}
            filteredQuestions={filteredQuestions}/>
          })  
        }</ul>
    </section>
  );
}

export default QuestionList;