/**
 * Abstract Class Page.
 * @class Page
 */
export default class Page {

    /**
     * Constructor
     */
    constructor() {
        if(this.constructor === Page) {
            throw new Error('Cannot instantiate abstract class "Page"');
        }
    }

    /**
     * Navigate to the specified URL and verify that an element is displayed
     * before proceeding.
     * @param {String} url
     * @param {*} navElement 
     */
    navigate(url, navElement){
        browser.url(url);
        navElement.waitForDisplayed();
    }
}