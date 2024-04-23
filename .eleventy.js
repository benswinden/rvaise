module.exports = function (eleventyConfig) {
    
    eleventyConfig.addPassthroughCopy("_src/_css/style.css");
    eleventyConfig.addPassthroughCopy("_src/_img");

    return {
        dir: {
            input: "_src",
            output: "_site",
        },
    };
};