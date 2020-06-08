import WebdriverioPage from '../../pages/webdriverio.page.js';
const WebDriverPage = new WebdriverioPage();

describe('Hello World Test Suite', () => {
    it('should be able to navigate to the WebDriverIO homepage', () => {
        WebDriverPage.navigate();
        expect(browser).toHaveTitle('WebdriverIO · Next-gen browser and mobile automation test framework for Node.js')
    })
})