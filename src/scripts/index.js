import 'regenerator-runtime' /* for async await transpile */
import '../styles/main.css'
import App from './views/app.js'
import swRegister from './utils/sw-register'
import 'lazysizes'
import 'lazysizes/plugins/parent-fit/ls.parent-fit'

// const START = 10
// const NUMBER_OF_IMAGES = 100

const hamburgerButtonElement = document.querySelector('#hamburgerButton')
const drawerElement = document.querySelector('#navigationDrawer')
const bodyElement = document.querySelector('body')
const anchorSkip = document.querySelector('.skip-link')

anchorSkip.addEventListener('click', event => {
    event.preventDefault()
    document.querySelector('#mainContent').focus()
})

hamburgerButtonElement.addEventListener('click', event => {
    event.preventDefault()
    drawerElement.classList.toggle('open')
    event.stopPropagation()
})

bodyElement.addEventListener('click', event => {
    drawerElement.classList.remove('open')
    event.stopPropagation()
})

const app = new App({
    content: document.querySelector('#mainContent')
})

window.addEventListener('hashchange', () => {
    app.renderPage()
    swRegister()
})

window.addEventListener('load', () => {
    app.renderPage()
    swRegister()
})
