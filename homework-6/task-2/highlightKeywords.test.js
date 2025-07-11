const highlightKeywords = require('./highlightKeywords');

function test(name, fn) {
    try {
        fn();
        console.log(`${name} passed`);
    } catch (error) {
        console.error(`${name} failed`);
        console.error(error.message);
    }
}

const keywords = ["JavaScript", "template", "tagged"];
const template = "Learn \${0} tagged templates to create custom \${1} literals for \${2} manipulation.";

const expected =
    "Learn <span class='highlight'>JavaScript</span> tagged templates to create custom <span class='highlight'>template</span> literals for <span class='highlight'>tagged</span> manipulation.";

test("Highlights keywords in template", () => {
    const keywords = ["JavaScript", "template", "tagged"];
    const template = "Learn ${0} tagged templates to create custom ${1} literals for ${2} manipulation.";

    const expected =
        "Learn <span class='highlight'>JavaScript</span> tagged templates to create custom <span class='highlight'>template</span> literals for <span class='highlight'>tagged</span> manipulation.";

    const actual = highlightKeywords(template, keywords);
    if (actual !== expected) {
        throw new Error(`Expected:\n${expected}\nReceived:\n${actual}`);
    }
});

test("Handles empty keywords array", () => {
    const actual = highlightKeywords(template, []);
    if (actual !== template.replace(/\$\{\d+\}/g, "")) {
        throw new Error(`Expected empty string for all placeholders, got "${actual}"`);
    }
});

test("Handles missing keywords", () => {
    const actual = highlightKeywords(template, ["JavaScript"]);
    const expected = "Learn <span class='highlight'>JavaScript</span> tagged templates to create custom  literals for  manipulation.";
    if (actual !== expected) {
        throw new Error(`Expected:\n${expected}\nReceived:\n${actual}`);
    }
});