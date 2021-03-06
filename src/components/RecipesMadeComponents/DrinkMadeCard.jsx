import React from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import RecipeMadeShareBtn from './RecipeMadeShareBtn';

function DrinkMadeCard({ doneRecipesArray }) {
  const location = useLocation();
  const currentPathName = location.pathname;

  return (
    <div>
      {doneRecipesArray.map((rec, index) => (
        rec.type === 'bebida'
        && (
          <div className="ItemFavorite" key={ index }>
            <Link
              to={ `/bebidas/${rec.id}` }
            >
              <img
                data-testid={ `${index}-horizontal-image` }
                src={ rec.image }
                className="ImgItemFavorite"
                alt="Imagem da Receita"
                width="160px"
              />
            </Link>
            <div className="FavoriteNameAndType">
            <h4 className="TitleRecipesMade" data-testid={ `${index}-horizontal-top-text` }>{rec.alcoholicOrNot}</h4>
            <Link
              to={ `/bebidas/${rec.id}` }
              className="TitleRecipesMade"
              data-testid={ `${index}-horizontal-name` }
            >
              {rec.name}
            </Link>
            <p data-testid={ `${index}-horizontal-done-date` }>{rec.doneDate}</p>
            <div>
            <RecipeMadeShareBtn
              index={ index }
              recipeId={ rec.id }
              currentPathName={ currentPathName }
            />
            </div>
            </div>
          </div>)
      ))}
    </div>
  );
}

DrinkMadeCard.propTypes = {
  doneRecipesArray: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default DrinkMadeCard;
