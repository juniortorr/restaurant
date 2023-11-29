import './styles.css'
import { createHomePage, body, headerTxt} from './pages/home.js'
import { createTabs, tabsContainer } from './components/tabs.js'
import { createContactPage } from './pages/contact.js'
import { createMenuPage } from './pages/menu.js'

const pages = [createContactPage, createHomePage, createMenuPage]
// createContactPage()
// createMenuPage
// createMenuPage()

const createNewPage = (tabNum) => {
  const divs = document.querySelectorAll('div')
  const bodyStyle = getComputedStyle(body)

    for(let i = 0; i<pages.length; i++){
      if(i === tabNum) {
        divs.forEach((div) =>{
          while(div.hasChildNodes()){
            div.removeChild(div.lastChild)
          }
        })
        while(body.hasChildNodes()){
          body.removeChild(body.lastChild)
        }
        headerTxt.innerHTML = ''
        body.removeAttribute('class')
        tabsContainer.removeAttribute('class')
        // console.log(i, tabNum)
        // console.log(headerOverlay)
        // if(headerOverlay.hasChildNodes()){
        //   console.log('yes i do')
        //   console.log(child)
        //   headerOverlay.removeChild(headerOverlay.lastChild)
        // } else {
        //   console.log('i am alone')
        // }
        // // while(headerOverlay.hasChildNodes()){
        //   headerOverlay.remove(headerOverlay.lastChild)
        // }
        // while(body.hasChildNodes()){
        //     body.removeChild(body.lastChild)
        // }
        console.log('hello')
        setTimeout(() => {
          pages[i]()
        }, 2000)
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