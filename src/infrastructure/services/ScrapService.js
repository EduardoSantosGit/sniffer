import scrap from '../common/ScrapParser'

export default class ScrapService {

    async parseBlockCss(text){

        let head = scrap.scrapBlockPage(text, "<head>", "</head>");

        

        return head
    }

}