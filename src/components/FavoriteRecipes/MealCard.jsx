import React from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import FavoriteRecipeShareBtn from './FavoriteRecipeShareBtn';
import BtnFavoriteRecipe from './BtnFavoriteRecipe';
import '../../styles/FavoriteRecipes.css'

export default function MealCard({ favoriteRecipesArray }) {
  const location = useLocation();
  const currentPathName = location.pathname;

  return (
    <div>
      { favoriteRecipesArray.map((rec, index) => (
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
                width="150px"
              />
            </Link>
            <div className="FavoriteNameAndType">
            <h4
              className="FavoriteName"
              data-testid={ `${index}-horizontal-top-text` }
            >
              {`${rec.area} - ${rec.category}`}
            </h4>
            <Link
              className="FavoriteName"
              to={ `/comidas/${rec.id}` }
              data-testid={ `${index}-horizontal-name` }
            >
              {rec.name}
            </Link>
            </div>
            <p data-testid={ `${index}-horizontal-done-date` }>{rec.doneDate}</p>
            <div className="ButtonsFavAndSha">
            <FavoriteRecipeShareBtn
              index={ index }
              recipeId={ rec.id }
              type={ rec.type }
              currentPathName={ currentPathName }
            />
            <BtnFavoriteRecipe
              recipeId={ rec.id }
              index={ index }
            />
            </div>
          </div>
        )
      )) }
    </div>
  );
}

MealCard.propTypes = {
  favoriteRecipesArray: PropTypes.arrayOf(PropTypes.object).isRequired,
};
