const Localizer = require('./Localizer.js');

const translations = {
    en: {
        greet: "Hello",
        intro: "Welcome to our website"
    },
    fr: {
        greet: "Bonjour",
        intro: "Bienvenue sur notre site web"
    }
};

function test(name, fn) {
    try {
        fn();
        console.log(`${name} passed`);
    } catch (error) {
        console.error(`${name} failed`);
        console.error(error.message);
    }
}

const localizer = new Localizer(translations);

test("English translation", () => {
    localizer.setLanguage("en");
    const result = localizer.localize`${"greet"}`;
    if (result !== "Hello") throw new Error(`Expected "Hello", got "${result}"`);
});

test("French translation", () => {
    localizer.setLanguage("fr");
    const result = localizer.localize`${"greet"}`;
    if (result !== "Bonjour") throw new Error(`Expected "Bonjour", got "${result}"`);
});

test("Unknown language", () => {
    try {
        localizer.setLanguage("de");
        throw new Error("Expected error for unknown language");
    } catch (error) {
        if (!error.message.includes('not supported')) {
            throw new Error(`Unexpected error message: ${error.message}`);
        }
    }
});
