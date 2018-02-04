import Scrap from '../common/ScrapParser'

export default class ScrapService {

    constructor(){
        this.scrap = new Scrap()
    }

    async parseBlockCss(text){
        
        let head = this.scrap.scrapBlockPage(text, "<head>", "</head>");
        let tableLink = head.split("<link rel");  
        return head
    }

}