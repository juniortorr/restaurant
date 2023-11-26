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
        headerTxt.append(phrase, lineBreak)
    })
    headerOverlay.append(headerTxt, headerBtn)
    headerOverlay.classList.add('overlay')
}

const createHeader = () => {
    const headerContainer = document.createElement('div');
    const headerLogo = document.createElement('img')
    createHeaderBtn()
    createHeaderOverlay()
    headerLogo.src = logo
    headerContainer.classList.add('header');
    headerContainer.append(headerLogo, headerOverlay);
    body.append(headerContainer)
}



const aboutUsContainer = document.createElement('div');
const aboutUsBox = () => {
    const aboutUsTitle = document.createElement('h1');
    const aboutUsPara = document.createElement('p')
    const aboutUsTxt = document.createElement('div')
    const imgContainer = document.createElement('div');
    const aboutUsParaContent = 'We strive to produce coffee, pastries, and breakfast to everyone we can. Enjoy our food how you want, when you want.'
    const aboutUsTitleContent = 'A BITE FOR EVERYONE'
    const allergyImgs = [glutenFreeIcon, noMilkIcon, peanutIcon, veganIcon]

    // YOU WERE ABOUT TO DO A FOR EACH FOR ALLERGY IMAGES SO YOU CAN ADD IT TO THE ABOUT US CONTAINER MY GUY
    allergyImgs.forEach((pic) => {
        const img = document.createElement('img')
        img.src = pic
        imgContainer.append(img)
    })
    imgContainer.classList.add('aboutImgContainer')
    aboutUsTitle.textContent = aboutUsTitleContent;
    aboutUsPara.textContent = aboutUsParaContent;
    aboutUsTxt.append(aboutUsTitle, aboutUsPara);
    aboutUsTxt.classList.add('aboutTxt')
    aboutUsContainer.append(aboutUsTxt, imgContainer)
    aboutUsContainer.classList.add('about')
}

const createAboutSection = () => {
    aboutUsBox()
    const sec2Container = document.createElement('div');
    const pastries = document.createElement('img');
    pastries.src = pastryDisplay;
    sec2Container.append(pastries, aboutUsContainer);
    sec2Container.classList.add('sec2') 
    body.append(sec2Container)
    // create element in css bruh
}

const hoursTable = document.createElement('table')
const createTable = () => {
    const hours = '6AM-6PM'
    const week = ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY']
    hoursTable.classList.add('table')
    week.forEach((day) => {
        const tableRow = document.createElement('tr');
        const dayCell = document.createElement('td')
        const hoursCell = document.createElement('td')
        dayCell.classList.add('days')
        dayCell.textContent = day;
        hoursCell.textContent = hours;
        tableRow.append(dayCell, hoursCell)
        hoursTable.append(tableRow)
    })
}

const hoursSection = document.createElement('div');
const createHoursSection = () => {
    const hoursOverlay = document.createElement('div');
    const hoursHeading = document.createElement('h1');
    createTable()
    hoursHeading.textContent = 'HOURS'
    hoursHeading.classList.add('hoursHeading')
    hoursSection.classList.add('hoursSection')
    hoursOverlay.classList.add('hoursOverlay')
    hoursSection.append(hoursOverlay, hoursHeading, hoursTable)
    body.append(hoursSection)
}

const createHomePage = () => {
    createHeader()
    createTabs()
    createAboutSection()
    createHoursSection()
}
export { body, createHomePage }

//  rootStyles.getPropertyValue('--blue')