import ScrapParser from '../../src/infrastructure/common/ScrapParser'
import { expect } from 'chai'

describe('Parser ', function () {

    it('test method scrapBlockPage return block link', async function () {
    
        let text = "=\"stylesheet\" media=\"all\" href=\"/static/css/components.css?last-changed&#x3D;27945fe466447deb7646454bfc1909b9\">\n    \n    <!--[if lt IE 9]>\n      <script src=\"//cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.2/html5shiv.min.js\"></script>\n    <![endif]-->\n    \n    <!-- Google Tag Manager -->\n    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\n    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\n    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n    })(window,document,'script','dataLayer','GTM-PZL5X6M');</script>\n    <!-- End Google Tag Manager -->\n"
        let scrapParser = new ScrapParser();
        let block = scrapParser.scrapBlockPage(text, "href=", "\">");
        
        expect(block).to.not.null
    })
})