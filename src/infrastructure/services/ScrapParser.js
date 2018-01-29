export default class ScrapParser {

    scrapBlockPage(text, indexOn, indexLast){
        
        let firstIndex = text.lastIndexOf(indexOn);

        firstIndex = firstIndex + indexOn.Length;

        let lastIndex = text.IndexOf(indexLast);

        let exit = lastIndex - firstIndex;

        let block = text.Substring(firstIndex, exit);
        
        return block;
    }

}