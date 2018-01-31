export default class ScrapParser {

    scrapBlockPage(text, indexOn, indexLast){
        
        text = text.toString();

        let firstIndex = text.lastIndexOf(indexOn);

        firstIndex = firstIndex + indexOn.Length;

        let lastIndex = text.indexOf(indexLast);

        let exit = lastIndex - firstIndex;

        let block = text.substring(firstIndex, exit);
        
        return block;
    }
}