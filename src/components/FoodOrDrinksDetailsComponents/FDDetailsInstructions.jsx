import React from 'react';
import PropTypes from 'prop-types';

function FDDetailsInstructions({ recipeInfo }) {
  return (
    <div>
      <h3 className="Instructions">Instructions</h3>
      <p className="IntructionParagraph" data-testid="instructions">{recipeInfo.strInstructions}</p>
    </div>
  );
}

FDDetailsInstructions.propTypes = {
  recipeInfo: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default FDDetailsInstructions;
