import { createTabs, tabsContainer } from '../components/tabs';
import { body } from './home.js'

const createContactHeading = () => {
    const heading = document.createElement('h1');
    const subheading = document.createElement('h2');
    const linebreak = document.createElement('br');
    const linebreak2 = document.createElement('br');
    heading.append('WANT TO GET OUR LATEST', linebreak, 'UPDATES?')
    subheading.append('SIGN UP', linebreak2, 'BELOW') 
    heading.classList.add('contactHeading');
    subheading.classList.add('contactSubheading')
    body.append(heading, subheading)
}

// create form 

const createForm = (overlay) => {
    const inputs = ['First Name', 'Last Name', 'Email']
    const form = document.createElement('form');
    const btn = document.createElement('button');
    btn.classList.add('formBtn')
    btn.textContent = 'Submit'
    inputs.forEach((input) => {
        const inputElement = document.createElement('input');
        inputElement.classList.add('formInput');
        inputElement.placeholder = input
        form.append(inputElement)
    })
    const txtArea = document.createElement('textarea');
    txtArea.placeholder = 'hello there'
    form.append(txtArea, btn);
    overlay.append(form)
}

const createContactOverlay = () => {
    const overlay = document.createElement('div');
    createTabs()
    overlay.append(tabsContainer);
    tabsContainer.classList.add('contactTabs')
    overlay.classList.add('contactOverlay')
    body.append(overlay)
    createForm(overlay)
}

const createContactPage = () => {
    body.classList.add('coffee')
    createContactHeading()
    createContactOverlay()
    
}

export { createContactPage }

