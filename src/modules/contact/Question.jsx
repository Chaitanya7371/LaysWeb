import React, { useState } from "react";
import SearchData from "../contact/SearchData.json";
import "/src/styles/Question.css";
function Question() {
  const [openQues, setOpenQues] = useState(null);

  const toggleQues = (index) => {
    setOpenQues(openQues === index ? null : index);
  };

  return (
    <div className="ques">
      <h1 className="search-ques">Popular Searched Questions</h1>
      {SearchData.map((faq, index) => (
        <div key={index}>
          <button onClick={() => toggleQues(index)}>
            <h2>{faq.question}</h2>
            {openQues === index && <p>{faq.answer}</p>}
          </button>
        </div>
      ))}
    </div>
  );
}

export default Question;
