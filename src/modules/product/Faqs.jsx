import React, { useState } from "react";
import faqsData from "../product/jasonData/Faqs.json";
import "/src/styles/Faqs.css";
function Faqs() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="faqs">
      <h1 className="product-faqs">PRODUCT FAQS</h1>
      {faqsData.map((faq, index) => (
        <div key={index}>
          <button onClick={() => toggleFaq(index)}>
            <h2>{faq.question}</h2>
            {openFaq === index && <p>{faq.answer}</p>}
          </button>
        </div>
      ))}
    </div>
  );
}

export default Faqs;
