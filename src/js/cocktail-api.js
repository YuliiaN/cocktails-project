import axios from 'axios';

const BASE_URL = 'https://thecocktaildb.com/api/json/v1/1';

export default class CocktailApi {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  async getRandomCocktail() {
    try {
      const response = await axios.get(`${BASE_URL}/random.php`);
      const data = response.data;
      return data.drinks;
    } catch (error) {
      console.log(error);
    }
  }

  async getCocktailByName(name) {
    try {
      const response = await axios.get(`${BASE_URL}/search.php?s=${name}`);
      const data = response.data;
      const drinks = data.drinks;
      return drinks;
    } catch (error) {
      console.log(error);
    }
  }
}
