import Scrap from '../common/ScrapParser'

export default class ScrapService {

    constructor(){
        this.scrap = new Scrap()
    }

    async parseBlockCss(text){
        
        let head = this.scrap.scrapBlockPage(text, "<head>", "</head>");
        let tableLink = head.split("<link rel"); 
        
        let ret = [];
        tableLink.map(x => {
            if(this.isCss(x))
                ret.push(this.scrap.scrapBlockPage(x, "href=\"", "\">"))
                
        });
        return ret
    }

    isCss(link){
        return (link.includes(".css") == true) ? true : false;
    }


}