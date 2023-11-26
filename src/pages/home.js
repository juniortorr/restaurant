const body = document.querySelector('body');
const cssRoot = document.querySelector(':root');
const rootStyles = getComputedStyle(cssRoot);
const headerOverlay = document.createElement('div')
const headerBtn = document.createElement('button');

import logo from '/src/imgs/coffee-shop-logo.png' 
import pastryDisplay from '/src/imgs/pastry-display.jpg'    
import glutenFreeIcon from '/src/imgs/gluten-free.png'
import noMilkIcon from '/src/imgs/no-milk.png'
import peanutIcon from '/src/imgs/peanut-free.png'
import veganIcon from '/src/imgs/vegan.png'
import { createTabs } from '../components/tabs';


const createHeaderBtn = () => {
    headerBtn.textContent = 'ORDER';
    headerBtn.classList.add('headerBtn')
}

const createHeaderOverlay =() => {
    const headerTxt = document.createElement('h1');
    const txt = ['HOMEMADE', 'WITH LOVE', 'FOR YOU']
    txt.forEach((phrase) => {
        console.log(phrase)
        const lineBreak = document.createElement('br')
        headerTxt.append(phrase)
        headerTxt.append(lineBreak);
    })
    headerOverlay.append(headerTxt)
    headerOverlay.classList.add('overlay')
    headerOverlay.append(headerBtn)
}

const createHeader = () => {
    const headerContainer = document.createElement('div');
    const headerLogo = document.createElement('img')
    createHeaderBtn()
    createHeaderOverlay()
    headerLogo.src = logo
    headerContainer.classList.add('header');
    headerContainer.append(headerLogo);
    headerContainer.append(headerOverlay)
    body.append(headerContainer)
}



const aboutUsContainer = document.createElement('div');
const aboutUsBox = () => {
    const aboutUsTitle = document.createElement('h1');
    const aboutUsPara = document.createElement('p')
    const aboutUsTxt = document.createElement('div')
    const imgContainer = document.createElement('div');
    const aboutUsParaContent = 'We strive to produce coffee, pastries, and breakfast to everyone we can. Enjoy our food how you want, when you want.'
    const aboutUsTitleContent = 'A Bite For Everyone'
    const allergyImgs = [glutenFreeIcon, noMilkIcon, peanutIcon, veganIcon]


    aboutUsTitle.textContent = aboutUsTitleContent;
    aboutUsPara.textContent = aboutUsParaContent;
    aboutUsTxt.append(aboutUsTitle);
    aboutUsTxt.append(aboutUsPara);
    aboutUsContainer.append(aboutUsTxt)
    aboutUsContainer.classList.add('about')
}

const createAboutSection = () => {
    aboutUsBox()
    const sec2Container = document.createElement('div');
    const pastries = document.createElement('img');
    pastries.src = pastryDisplay;
    sec2Container.append(pastries);
    sec2Container.append(aboutUsContainer)
    sec2Container.classList.add('sec2') 
    body.append(sec2Container)
    // create element in css bruh
}



const createHomePage = () => {
    createHeader()
    createTabs()
    createAboutSection()
}
export { body, createHomePage}

//  rootStyles.getPropertyValue('--blue')