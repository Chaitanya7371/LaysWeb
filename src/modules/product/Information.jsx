import React, { useState } from "react";
import "/src/styles/Information.css";
import { images } from "../../assets/images/images";

function Information() {
  const [showIngredients, setShowIngredients] = useState(false);
  const [showNutritionFacts, setShowNutritionFacts] = useState(false);
  const [showAllergenInfo, setShowAllergenInfo] = useState(false);

  return (
    <div className="information">
      <div className="info-box">
        <h1 className="info-head">INFORMATION</h1>

        <div>
          <button
            className="btn"
            onClick={() => setShowIngredients(!showIngredients)}
          >
            <h1> Key Ingredients</h1>
          </button>
        </div>
        {showIngredients && (
          <div
            className="hidden-text"
            onClick={() => setShowIngredients(false)}
          >
            <h2>
              Ingredients: Organic Whole Ground Corn, Organic Sunflower Oil
              And/Or Organic Safflower Oil, Organic Sweet Potato, Organic Brown
              Rice, Organic Evaporated Cane Sugar, Organic Chia Seeds, Sea Salt.
            </h2>
          </div>
        )}

        <div>
          <button
            className="btn"
            onClick={() => setShowNutritionFacts(!showNutritionFacts)}
          >
            <h1>Nutrition Facts</h1>
          </button>
        </div>
        {showNutritionFacts && (
          <div
            className="hidden-text"
            onClick={() => setShowNutritionFacts(false)}
          >
            <h2>
              Ingredients: Organic Whole Ground Corn, Organic Sunflower Oil
              And/Or Organic Safflower Oil, Organic Sweet Potato, Organic Brown
              Rice, Organic Evaporated Cane Sugar, Organic Chia Seeds, Sea Salt.
            </h2>
          </div>
        )}

        <div>
          <button
            className="btn"
            onClick={() => setShowAllergenInfo(!showAllergenInfo)}
          >
            <h1>Allergen Information</h1>
          </button>
        </div>
        {showAllergenInfo && (
          <div
            className="hidden-text"
            onClick={() => setShowAllergenInfo(false)}
          >
            <h2>
              <ul>
                <li>
                  Organic sweet potato vegetable tortilla chips with a balance
                  of real vegetables, chia seeds and sea salt{" "}
                </li>
                <li>
                  Veggies and seeds baked right into our Late July chips for a
                  delicious snack{" "}
                </li>
                <li>
                  Non-GMO Project Verified, Made in a Facility that Does Not
                  Process Peanuts, and 100% Whole Grain{" "}
                </li>
                <li>Certified Gluten-Free, Vegan snack </li>
                <li>Certified Gluten-Free, Vegan snack </li>
              </ul>
            </h2>
          </div>
        )}
      </div>

      <div className="circle-chips">
        <img src={images.chipscircle} alt="Chips circle" />
      </div>
    </div>
  );
}

export default Information;
