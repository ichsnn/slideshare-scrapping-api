import puppeteer from "puppeteer";

const pdfGenerator = async (html : any) => {
    const browser  = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setContent(html);
    console.log(page)
    const pdf = await page.pdf({height: "576px", width: "1024px", preferCSSPageSize: true});
    await browser.close();
    return pdf;
}

export default pdfGenerator