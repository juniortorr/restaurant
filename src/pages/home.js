const body = document.querySelector('body');
const homePage = (function (){
    const cssRoot = document.querySelector(':root');
    const rootStyles = getComputedStyle(cssRoot);
    const headerOverlay = document.createElement('div')


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
   }

    const createHeader = () => {
        const headerContainer = document.createElement('div');
        headerContainer.classList.add('header');
        headerContainer.append(headerOverlay)
        body.append(headerContainer)
    }
    console.log('hi')
    return {
        createHeader,
        createHeaderOverlay
    }

})();

export { body, homePage }

//  rootStyles.getPropertyValue('--blue')