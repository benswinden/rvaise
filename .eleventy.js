module.exports = function (eleventyConfig) {
    
    eleventyConfig.addPassthroughCopy("_src/css/style.css");
    eleventyConfig.addPassthroughCopy("_src/img");

    return {
        dir: {
            input: "_src",
            output: "_site",
        },
    };
};