import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function ExploreFoodIngredients() {
  const eleven = 11;
  const [allMealIngredientsArr, setAllMealIngredientsArr] = React.useState([]);

  const getAllMealIngredients = async () => {
    const END_POINT = 'https://www.themealdb.com/api/json/v1/1/list.php?i=list';
    const response = await fetch(END_POINT);
    const jsonFormat = await response.json();
    setAllMealIngredientsArr(jsonFormat.meals);
  };

  React.useEffect(() => {
    getAllMealIngredients();
  }, []);

  return (
    <div>
      <Header />
      <section>
        <Link
          to="/comidas"
        >
          <div className="FoodOrDrinkCardsContainer">
          {allMealIngredientsArr.filter((_ing, index) => index <= eleven)
            .map(({ idIngredient, strIngredient }, ind) => (
              <div
                className="ItemFoodOrDrink"
                data-testid={ `${ind}-ingredient-card` }
                key={ idIngredient }
                onClick={ () => localStorage
                  .setItem('lastMealIngExplored', strIngredient) }
                onKeyPress={ () => localStorage
                  .setItem('lastMealIngExplored', strIngredient) }
                role="button"
                tabIndex={ 0 }
              >
                <img
                  data-testid={ `${ind}-card-img` }
                  className="ImgIngredients"
                  width="150px"
                  src={ `https://www.themealdb.com/images/ingredients/${strIngredient}-Small.png` }
                  alt="Foto do Ingrediente"
                />
                <h4 className="NameFoodOrDrink" data-testid={ `${ind}-card-name` }>{strIngredient}</h4>
              </div>
            ))}
          </div>
          
        </Link>
      </section>
      <Footer />
    </div>
  );
}

export default ExploreFoodIngredients;
