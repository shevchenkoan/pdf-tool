const puppeteer = require('puppeteer');

async function printPDF() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:8001/app/dev/preview', {
        waitUntil: 'networkidle2'
    });
    const pdf = await page.pdf({
        path: 'preview.pdf',
        format: 'A4'
    });

    await browser.close();
    return pdf
}

printPDF.then(pdf => {
    // res.set({ 'Content-Type': 'application/pdf', 'Content-Length': pdf.length });
    // res.send(pdf);
});
