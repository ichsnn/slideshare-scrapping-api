
// Image Tag Template
function imgTemplate(src : any, alt : any) {
    return `<img src="${src}" alt="${alt}">`
}

// Create HTML Template for Image Collections
function htmlTemplate(imgCol: object[]) {
    let html = '<html><head><style>*{margin: 0;padding: 0;}@page{margin: 0;}</style></head><body>';
    imgCol.map((value: any) => {
       html += imgTemplate(value.image[2].src, `slide ${value.slide}`);
    })
    html += '</body></html>'
    return html;
}

export default htmlTemplate;