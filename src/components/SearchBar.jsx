import React from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import fetchDrinks, { fetchMeals as fetchMealsThunk } from '../redux/actions/apiAC';
import '../styles/FoodsAndDrinks.css'

function SearchBar() {
  const [searchedItem, setSearchedItem] = React.useState('');
  const [chosenRadioBtn, setChosenRadioBtn] = React.useState('');
  const location = useLocation();
  const currentPathName = location.pathname;
  const dispatch = useDispatch();

  const dispatchFoods = () => {
    if (chosenRadioBtn === 'ingredientRdBtn') {
      dispatch(fetchMealsThunk(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchedItem}`));
    }
    if (chosenRadioBtn === 'foodNameRdBtn') {
      dispatch(fetchMealsThunk(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchedItem}`));
    }
    if (chosenRadioBtn === 'foodFirstLetterRdBtn' && searchedItem.length <= 1) {
      dispatch(fetchMealsThunk(`https://www.themealdb.com/api/json/v1/1/search.php?f=${searchedItem}`));
    }
    if (chosenRadioBtn === 'foodFirstLetterRdBtn' && searchedItem.length > 1) {
      global.alert('Sua busca deve conter somente 1 (um) caracter');
    }
  };

  const dispatchDrinks = () => {
    if (chosenRadioBtn === 'ingredientRdBtn') {
      dispatch(fetchDrinks(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${searchedItem}`));
    }
    if (chosenRadioBtn === 'foodNameRdBtn') {
      dispatch(fetchDrinks(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchedItem}`));
    }
    if (chosenRadioBtn === 'foodFirstLetterRdBtn' && searchedItem.length <= 1) {
      dispatch(fetchDrinks(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${searchedItem}`));
    }
    if (chosenRadioBtn === 'foodFirstLetterRdBtn' && searchedItem.length > 1) {
      global.alert('Sua busca deve conter somente 1 (um) caracter');
    }
  };

  const onSearchClick = () => {
    if (currentPathName === '/comidas') {
      return dispatchFoods();
    }
    if (currentPathName === '/bebidas') {
      return dispatchDrinks();
    }
  };

  return (
    <div className="Search">
      <input
        type="text"
        data-testid="search-input"
        placeholder="Search Recipe"
        value={ searchedItem }
        onChange={ ({ target }) => setSearchedItem(target.value) }
      />
      <div className="SearchFilters">
      <label htmlFor="ingredientRdBtn">
        <input
          data-testid="ingredient-search-radio"
          id="ingredientRdBtn"
          name="searchBarRdBtns"
          type="radio"
          value="ingredientRdBtn"
          onChange={ ({ target }) => setChosenRadioBtn(target.value) }
        />
        {' '}
        Ingrediente
      </label>
      <label htmlFor="foodNameRdBtn">
        <input
          data-testid="name-search-radio"
          id="foodNameRdBtn"
          name="searchBarRdBtns"
          type="radio"
          value="foodNameRdBtn"
          onChange={ ({ target }) => setChosenRadioBtn(target.value) }
        />
        {' '}
        Nome
      </label>
      <label htmlFor="foodFirstLetterRdBtn">
        <input
          data-testid="first-letter-search-radio"
          id="foodFirstLetterRdBtn"
          name="searchBarRdBtns"
          type="radio"
          value="foodFirstLetterRdBtn"
          onChange={ ({ target }) => setChosenRadioBtn(target.value) }
        />
        {' '}
        Primeira letra
      </label>
      </div>
      <button
        data-testid="exec-search-btn"
        type="button"
        className="SearchButton"
        onClick={ onSearchClick }
      >
        Buscar
      </button>
    </div>
  );
}

export default SearchBar;
