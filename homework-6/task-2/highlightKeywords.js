function highlightKeywords(template, keywords) {
    return template.replace(/\$\{(\d+)\}/g, (_, index) => {
        const word = keywords[Number(index)];
        if (!word) return "";
        return `<span class='highlight'>${word}</span>`;
    });
}

module.exports = highlightKeywords;
