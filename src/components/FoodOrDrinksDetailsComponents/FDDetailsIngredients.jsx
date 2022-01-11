import React from 'react';
import PropTypes from 'prop-types';

function FDDetailsIngredients({ ingredientsArr, measureArr }) {
  return (
    <div>
      <h3 className="Ingredients">Ingredients</h3>
      <ul className="IntructionParagraph">
        { ingredientsArr
          .map((ite, index) => (
            <li
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
