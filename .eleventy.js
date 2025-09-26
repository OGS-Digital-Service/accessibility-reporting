module.exports = function(eleventyConfig){
    eleventyConfig.setTemplateFormats([
        "pdf",
        "md",
        "njk",
        "css"
      ]);

      eleventyConfig.addPassthroughCopy("img");
      eleventyConfig.addPassthroughCopy("fonts");
      eleventyConfig.addPassthroughCopy("js");
      eleventyConfig.addPassthroughCopy({"_results/**/accessibility/**/*.html": "results/accessibility"});
      eleventyConfig.addPassthroughCopy({"_results/**/performance/**/*.html": "results/performance"});

    

    return {
        markdownTemplateEngine: "njk", 
    dir: {
        layouts: "_layouts"

    },
    }
   
};