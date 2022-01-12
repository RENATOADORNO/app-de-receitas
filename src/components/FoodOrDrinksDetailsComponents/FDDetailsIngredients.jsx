import React from 'react';
import PropTypes from 'prop-types';

function FDDetailsIngredients({ ingredientsArr, measureArr }) {
  return (
    <div>
      <h2 className="Ingredients">Ingredients</h2>
      <ul className="IntructionParagraph">
        { ingredientsArr
          .map((ite, index) => (
            <li
              className="IngredientsItens"
              data-testid={ `${index}-ingredient-name-and-measure` }
              key={ ite }
            >
              {`${ite} - ${measureArr[index]}`}
            </li>))}
      </ul>
    </div>
  );
}

FDDetailsIngredients.propTypes = {
  ingredientsArr: PropTypes.arrayOf(PropTypes.string).isRequired,
  measureArr: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default FDDetailsIngredients;
