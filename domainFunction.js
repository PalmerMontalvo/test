function detectDomain (url) {
    let partialDomain = url.split('.');
    let variants = ['com', 'org', 'co'];
    if (variants.includes(partialDomain[partialDomain.length - 2])) {
       partialDomain.pop();
       return partialDomain.slice(-2).join('.');
    } else {
        return partialDomain.slice(-2).join('.');
    }
}
