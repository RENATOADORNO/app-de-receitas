import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

function FDDetailsRecommended({ recommendedFD, currentPathName }) {
  const five = 5;
  // const magicNumber = 0.5; // REF: https://flaviocopes.com/how-to-shuffle-array-javascript/
  const history = useHistory();

  return (
    <div className="recommendedCardsContainer">
      <h1 className="title">Recomendações</h1>
      { currentPathName.includes('bebidas')
        ? (
          <div className="meal scroll">
            { recommendedFD.filter((_meal, i) => (i <= five))
              .map((item, index) => (
                <div
                  key={ index }
                  data-testid={ `${index}-recomendation-card` }
                  className="ItemRecomended"
                  onClick={ () => history.push(`/comidas/${item.idMeal}`) }
                  onKeyDown={ () => history.push(`/comidas/${item.idMeal}`) }
                  role="button"
                  tabIndex={ 0 }
                >
                  <img
                    src={ item.strMealThumb }
                    alt={ item.strMeal }
                    className="ImgRecomended"
                    width="150px"
                  />
                  <h2 className="TitleRecomended" data-testid={ `${index}-recomendation-title` }>{item.strMeal}</h2>
                  <h4 className="subTitle">{item.strCategory}</h4>
                </div>
              ))}
          </div>)
        : (
          <div className="drink scroll">
            { recommendedFD.filter((_drink, i) => (i <= five))
              .map((item, index) => (
                <div
                  key={ index }
                  data-testid={ `${index}-recomendation-card` }
                  className="ItemRecomended"
                  onClick={ () => history.push(`/bebidas/${item.idDrink}`) }
                  onKeyDown={ () => history.push(`/bebidas/${item.idDrink}`) }
                  role="button"
                  tabIndex={ 0 }
                >
                  <img
                    src={ item.strDrinkThumb }
                    alt={ item.strDrink }
                    className="ImgRecomended"
                    width="150px"
                  />
                  <h2 className="TitleRecomended" data-testid={ `${index}-recomendation-title` }>{item.strDrink}</h2>
                  <h4 className="subTitle">{item.strCategory}</h4>
                </div>
              ))}
          </div>)}
    </div>
  );
}

FDDetailsRecommended.propTypes = {
  currentPathName: PropTypes.string.isRequired,
  recommendedFD: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default FDDetailsRecommended;
