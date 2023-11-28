import './styles.css'
import { createHomePage, body } from './pages/home.js'
import { createTabs } from './components/tabs.js'
import { createContactPage } from './pages/contact.js'
import { createMenuPage } from './pages/menu.js'

const pages = [createContactPage, createHomePage, createMenuPage]
// createContactPage()
// createMenuPage
// createMenuPage()

const createNewPage = (tabNum) => {

    console.log(tabNum)
    for(let i = 0; i<pages.length; i++){
      if(i === tabNum) {
        while(body.hasChildNodes()){
            body.removeChild(body.lastChild)
        }
        pages[i]()
      }
    }
}
createHomePage()
// createHomePage();




// The tabs function sets an event listener that will call this createNewPage Function
// This function will have to check which tab has been clicked 
// Then it will compare the tab clicked to the functions by use of 
// createNewPage() {

// }


createNewPage()

export { createNewPage }