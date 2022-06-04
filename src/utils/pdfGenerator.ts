import puppeteer from "puppeteer";

// PDFGenerator
const pdfGenerator = async (html : any) => {
    const browser  = await puppeteer.launch({
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();
    await page.setContent(html);
    const imageBounds = await (await page.$('img'))?.boundingBox()
    const pdf = await page.pdf({height: `${imageBounds?.height}px`, width: `${imageBounds?.width}px`, preferCSSPageSize: true});
    await browser.close();
    return pdf;
}

export default pdfGenerator