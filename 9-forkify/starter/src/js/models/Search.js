
import axios from 'axios';

export default class Search {
	constructor(query) {
		this.query = query;
	}

	// asynchronous functions automatically return a promise
	async getResults(query) {
		try {
			const res = await axios(`https://forkify-api.herokuapp.com/api/search?q=${this.query}`)
			this.result = res.data.recipes;

		} catch (error) {
			alert(error);
		}	 
	}
}






