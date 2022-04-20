import puppeteer from "puppeteer";

const pdfGenerator = async (html : any) => {
    const browser  = await puppeteer.launch({
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();
    await page.setContent(html);
    await page.pdf({path: './files/slideshare.pdf', height: "576px", width: "1024px", preferCSSPageSize: true});
    await browser.close();
}

export default pdfGenerator