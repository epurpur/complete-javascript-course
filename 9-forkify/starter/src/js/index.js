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

		// 4) Search for recipes
		await state.search.getResults();   // must await this promise until results are ready

		// 5) render results on UI
		clearLoader();
		searchView.renderResults(state.search.result);
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
const r = new Recipe(477463);
r.getRecipe();
console.log(r);



