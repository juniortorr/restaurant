import { body } from "../pages/home";
const tabsContainer = document.createElement('div');
const options = ['CONTACT', 'HOME', 'MENU'];

const fillTabs = () => {
    options.forEach((option) => {
        const tab = document.createElement('p')
        tab.textContent = option;
        tab.classList.add(`${option.toLowerCase()}`)
        tabsContainer.append(tab)
    })
}

const createTabs = () => {
    fillTabs()
    tabsContainer.classList.add('tabs')
    body.append(tabsContainer)
}

export { createTabs }
