class Localizer {
    constructor(translations, language = "en") {
        this.translations = translations;
        this.language = language;
    }

    setLanguage(lang) {
        if (!(lang in this.translations)) {
            throw new Error(`Language "${lang}" not supported`);
        }
        this.language = lang;
    }

    localize(strings, ...keys) {
        let result = strings[0];
        for (let i = 0; i < keys.length; i++) {
            const key = keys[i];
            const translation = this.translations[this.language][key] || `[${key}]`;
            result += translation + strings[i + 1];
        }
        return result;
    }
}

module.exports = Localizer;
