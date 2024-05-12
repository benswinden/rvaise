module.exports = function (eleventyConfig) {
    
    eleventyConfig.addPassthroughCopy("_src/css/style.css");
    eleventyConfig.addPassthroughCopy("**/*.jpg");
    eleventyConfig.addPassthroughCopy("**/*.png");

    return {
        dir: {
            input: "_src",
            output: "_site",
        },
    };
};