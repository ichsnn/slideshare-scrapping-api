import puppeteer from "puppeteer";
import hb from "handlebars";

const pdfGenerator = async (html : any) => {
    const browser  = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setContent(html);
    await page.pdf({path: './public/files/slideshare.pdf'});
    await browser.close();
}

export default pdfGenerator