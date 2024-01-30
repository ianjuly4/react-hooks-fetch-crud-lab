import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([])
  
  useEffect (() => {
    fetch("http://localhost:4000/questions")
    .then((r)=>r.json())
    .then((questionData) => setQuestions(questionData))
  }, [])

  const handleAddQuestion = (newQuestion) => {
    setQuestions([...questions, newQuestion])
  }

   const filteredQuestions = (questionInput) => {
    const updatedQuestions = questions.filter((question)=>{
      return question.id !== questionInput.id})
      setQuestions(updatedQuestions)
   }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? 
        <QuestionForm 
        handleAddQuestion={handleAddQuestion}/> : 
      
        <QuestionList 
          questions={questions} 
          filteredQuestions={filteredQuestions}
        />}
    </main>
  );
}

export default App;
