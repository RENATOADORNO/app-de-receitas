import React from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import RecipeMadeShareBtn from './RecipeMadeShareBtn';

function MealMadeCard({ doneRecipesArray }) {
  const location = useLocation();
  const currentPathName = location.pathname;

  return (
    <div>
      {doneRecipesArray.map((rec, index) => (
        rec.type === 'comida'
        && (
          <div className="ItemFavorite" key={ rec.id }>
            <Link
              to={ `/comidas/${rec.id}` }
            >
              <img
                src={ rec.image }
                className="ImgItemFavorite"
                alt="Imagem da Receita"
                data-testid={ `${index}-horizontal-image` }
                width="160px"
              />
            </Link>
            <div className="FavoriteNameAndType">
            <h4
              data-testid={ `${index}-horizontal-top-text` }
              className="TitleRecipesMade"
            >
              {`${rec.area} - ${rec.category}`}
            </h4>
            <Link
              to={ `/comidas/${rec.id}` }
              className="TitleRecipesMade"
              data-testid={ `${index}-horizontal-name` }
            >
              {rec.name}
            </Link>
            <p data-testid={ `${index}-horizontal-done-date` }>{rec.doneDate}</p>
            {rec.tags.map((tag) => (
              <p
                key={ tag }
                data-testid={ `${index}-${tag}-horizontal-tag` }
              >
                {tag}
              </p>
            ))}
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

MealMadeCard.propTypes = {
  doneRecipesArray: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MealMadeCard;
