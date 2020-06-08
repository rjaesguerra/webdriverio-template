import Page from './page.js';

export default class WebdriverioPage extends Page {
    get url() { return '/' };
    get navCondition() { return $('h2.projectTitle'); };

    constructor(){
        super();
    }
      
    navigate() {
        super.navigate(this.url, this.navCondition);
    }
}