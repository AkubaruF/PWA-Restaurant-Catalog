import UrlParser from '../routes/url-parser'
import routes from '../routes/routes'

class App {
    constructor({ content }) {
        this._content = content

        this._initialAppShell()
    }

    _initialAppShell() {
    }

    async renderPage() {
        const url = UrlParser.parseActiveUrlWithCombiner()
        const page = routes[url]
        this._content.innerHTML = await page.render()
        await page.afterRender()
        const skipLinkElem = document.querySelector('.skip-link')
        skipLinkElem.addEventListener('click', (event) => {
            event.preventDefault()
            document.querySelector('#mainContent').focus()
        })
    }
}

export default App
