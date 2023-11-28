import { createTabs, tabsContainer } from "../components/tabs";
import { body } from './home.js'
import pancakePic from '../imgs/pancakes.jpg'
import salmonPic from '../imgs/salmon.jpg'
import frenchToastPic from '../imgs/Pumpkin-French-Toast-Casserole-recipe.jpg'
import donutPic from '../imgs/vanilla-cream-filled-doughnuts-27-600.jpg'


const createMenuOverlay = (header) => {
    const overlay = document.createElement('div');
    overlay.classList.add('menuOverlay');
    const headingTxt = document.createElement('h1');
    headingTxt.textContent = 'MENU'
    headingTxt.classList.add('menuHeaderTxt');
    overlay.append(headingTxt);
    header.append(overlay);
}
const createMenuHeader = () => {
    const header = document.createElement('div');
    header.classList.add('menuHeader') 
    createMenuOverlay(header)
    body.append(header);
}

//  Create Recipe Cards 
const recipes = []
class Recipe {
    constructor(title, desc, price, img) {
        this.title = title;
        this.desc = desc;
        this.price = price;
        this.img = img
        recipes.push(this)
    }

    createCard() {
        const cardHolder = document.createElement('div')
        const card = document.createElement('div')
        const foodImg = document.createElement('img')
        const foodTxt = document.createElement('div');
        const foodTitle = document.createElement('h2')
        const line = document.createElement('div');
        const description = document.createElement('p');
        const price = document.createElement('p')
        foodImg.src = this.img;
        foodTitle.textContent = this.title;
        description.textContent = this.desc
        price.textContent = this.price
        foodTxt.classList.add('foodTxt');
        line.classList.add('line');
        card.classList.add('recipeCard');
        cardHolder.classList.add('cardHolder')
        foodTxt.append(foodTitle, line, description, price)
        card.append(foodImg, foodTxt);
        cardHolder.append(card)
        body.append(cardHolder)
    }

}

const pancake = new Recipe('BUTTERMILK PANCAKES', 'local maple syrup', '8', pancakePic) 
const sandwich = new Recipe('SMOKED SALMON FOCCACIA', 'egg whites, tomato, red onion', '10', salmonPic) 
const frenchToast = new Recipe('PUMPKIN FRENCH TOAST', 'brown sugar, pumpkin spice, cinnamon', '8', frenchToastPic) 
const donut = new Recipe(`DAN'S DONUT`, `Dan's personal favorite, vanilla cream filled dounut`, '3', donutPic) 


console.log(recipes)
const createMenuPage = () => {
    createMenuHeader()
    createTabs()    
    body.append(tabsContainer)
    recipes.forEach((recipe) => {
        recipe.createCard()
    })
}
 
export { createMenuPage }