import { createTabs, tabsContainer } from "../components/tabs";
import { body } from './home.js'


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

export { createMenuHeader }