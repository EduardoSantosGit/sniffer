import Scrap from '../../domain/common/ScrapParser'

export default class ScrapService {

    constructor() {
        this.scrap = new Scrap()
    }

    async parseBlockCss(text) {

        let head = this.scrap.scrapBlockPage(text, "<head>", "</head>");
        let tableLink = head.split("<link rel");
        console.log(tableLink.length);
        let ret = [];
        
        for (let index = 0; index < 1; index++) {
            const element = tableLink[index];
            console.log(element)
            if (this.isCss(element)) {
                //console.log("test " + JSON.stringify(this.formatLink(this.scrap.scrapBlockPage(element, "href=", "\">"))));
                ret.push(this.formatLink(this.scrap.scrapBlockPage(element, "href=", "\">")))
            }
        }

        // tableLink.map(x => {
        //     if (this.isCss(x)) {
        //         console.log(this.formatLink(this.scrap.scrapBlockPage(x, "href=", "\">")));
        //         //ret.push(this.formatLink(this.scrap.scrapBlockPage(x, "href=", "\">")))
        //     }
        // });

        return ret
    }

    isCss(link) {
        return (link.includes(".css") == true) ? true : false;
    }

    formatLink(link) {
        return link.replace(/\\/g, "").replace("\"", "");
    }


}