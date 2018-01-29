import scrap from '../common/ScrapParser'

export default class ScrapService {

    async parseBlockCss(text){
        return scrap.scrapBlockPage(text, "<head>", "</head>");
    }

}