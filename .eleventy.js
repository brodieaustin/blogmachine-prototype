const eleventySass = require("eleventy-sass");

module.exports = function(eleventyConfig) {

  eleventyConfig.addPlugin(eleventySass);
  
  eleventyConfig.addPassthroughCopy({
		"./public/": "/",
	});

  return{
    dir: {
			input: "src",
      includes: "../_includes",
      layouts: "../_layouts",
      data: "../_data"
		},
  }
};