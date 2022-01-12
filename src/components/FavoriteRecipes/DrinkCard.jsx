import React from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import ShareBtn from './FavoriteRecipeShareBtn';
import BtnFavoriteRecipe from './BtnFavoriteRecipe';
import '../../styles/FavoriteRecipes.css'

export default function DrinkCard({ favoriteRecipesArray }) {
  const location = useLocation();
  const currentPathName = location.pathname;

  return (
    <div>
      {favoriteRecipesArray.map((rec, index) => (
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
            <h4 className="FavoriteName" data-testid={ `${index}-horizontal-top-text` }>{rec.alcoholicOrNot}</h4>
            <Link
              to={ `/bebidas/${rec.id}` }
              className="FavoriteName"
              data-testid={ `${index}-horizontal-name` }
            >
              {rec.name}
            </Link>
            </div>
            <p data-testid={ `${index}-horizontal-done-date` }>{rec.doneDate}</p>
            <div className="ButtonsFavAndSha">
            <ShareBtn
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
          </div>)
      ))}
    </div>
  );
}

DrinkCard.propTypes = {
  favoriteRecipesArray: PropTypes.arrayOf(PropTypes.object).isRequired,
};
