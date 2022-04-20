const filenameParser  = (url : any) => {
    return url.split('/')[4];
}

export default filenameParser;