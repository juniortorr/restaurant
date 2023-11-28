import { body } from "../pages/home";
import { createHomePage } from '../pages/home.js'
import { createContactPage } from '../pages/contact.js'
import { createMenuPage } from '../pages/menu.js'
import { createNewPage } from "../app.js";
const tabsContainer = document.createElement('div');
const options = ['CONTACT', 'HOME', 'MENU'];

const fillTabs = () => {
    // options.forEach((option) => {
    //     const tab = document.createElement('p')
    //     tab.textContent = option;
    //     tab.classList.add(`${option.toLowerCase()}`)
    //     tabsContainer.append(tab)
    // })
    // for(let i = 0; i<options.length; i++){
    //     const tab = document.createElement('p')
    //     tab.textContent = options[i];
    //     tab.classList.add(`${options[i].toLowerCase()}`)
    //     tabsContainer.append(tab)
    //     tab.addEventListener('click', createNewPage([i]))
    // }
    for(let i = 0; i<options.length; i++) {
        console.log(options[i])
        const tab = document.createElement('p')
        tab.textContent = options[i];
        tab.classList.add(`${options[i].toLowerCase()}`)
        tabsContainer.append(tab)
        tab.addEventListener('click', () => {
            createNewPage(i)})
    }
}

const createTabs = () => {
    fillTabs()
    tabsContainer.classList.add('tabs')
}

export { createTabs, tabsContainer }
