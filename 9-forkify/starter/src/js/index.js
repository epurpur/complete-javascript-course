// Global app controller

import Search from './models/Search';
import Recipe from './models/Recipe';
import * as searchView from './views/searchView';
import { elements, renderLoader, clearLoader } from './views/base';

/* Global State of the app
- Search object
- Current recipe object
- shopping list object
- likes recipes
*/

const state = {};

/* 
*  SEARCH CONTROLLER
*/

const controlSearch = async () => {
	// 1) get query from view
	const query = searchView.getInput();
	console.log(query);

	if (query) {
		// 2) new search object and add to state
		state.search = new Search(query);

		// 3) Prepare UI for results
		searchView.clearInput();
		searchView.clearResults();
		renderLoader(elements.searchRes);

		try {
			// 4) Search for recipes
			await state.search.getResults();   // must await this promise until results are ready

			// 5) render results on UI
			clearLoader();
			searchView.renderResults(state.search.result);
		} catch (err) {
			alert('Something wrong with the search...');
			clearLoader();
		}
	}
}


elements.searchForm.addEventListener('submit', event => {
	event.preventDefault();
	controlSearch();
});



elements.searchResPages.addEventListener('click', event => {
	const btn = event.target.closest('.btn-inline');
	if (btn) {
		const goToPage = parseInt(btn.dataset.goto, 10);
		searchView.clearResults();
		searchView.renderResults(state.search.result, goToPage);
	}
});


/* 
*  RECIPE CONTROLLER
*/
const controlRecipe = async () => {
	//get ID from URL
	const id = window.location.hash.replace('#', '');   //window.location is the entire url. hash property gets hash

	if (id) {
		// Prepare UI for changes


		// Create a new recipe object
		state.recipe = new Recipe(id);

		//testing method
		window.r = state.recipe;

		try {
			// Get recipe data
			await state.recipe.getRecipe();

			// Calculate servings and time
			state.recipe.calcTime();
			state.recipe.calcServings();

			// Render recipe
			console.log(state.recipe);
		} catch (err) {
			alert('Error processing recipe')
		}
	}
};







//window.addEventListener('hashchange', controlRecipe);
//window.addEventListener('load', controlRecipe)

['hashchange', 'load'].forEach(event => window.addEventListener(event, controlRecipe));




