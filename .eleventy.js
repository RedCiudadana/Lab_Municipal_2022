//const searchFilter = require('./filters/searchFilter');
const rmj = require('render-markdown-js');
const moment = require("moment");
const now = new Date();

module.exports = function (eleventyConfig) {
    
    eleventyConfig.setTemplateFormats("njk,html,md");
    
    eleventyConfig.addPassthroughCopy('src');
    eleventyConfig.addPassthroughCopy('admin');
    eleventyConfig.addPassthroughCopy('assets');
    
    /*eleventyConfig.addCollection("servicios", function(collectionApi) {
        return collectionApi.getFilteredByTag('servicio');
    });*/

    eleventyConfig.addCollection("podcasts", function(collectionApi) {
        return collectionApi.getFilteredByTag('podcast_cms');
    });

    //FILTROS
    //eleventyConfig.addFilter("search", searchFilter);

    eleventyConfig.addNunjucksFilter("rmj", function(content) {
        return rmj(content);
    });

    eleventyConfig.addNunjucksFilter("limit", function(array, limit) {
        if(array){
            return array.slice(0, limit);
        }
    });

    eleventyConfig.addNunjucksFilter("limitPart", function(array, limit1,limit2) {
        if(array){
            return array.slice(limit1,limit2);
        }
    });

    eleventyConfig.addNunjucksFilter("limitSinPrimero", function(array, limit) {
        if(array){
            return array.slice(1, limit);
        }
    });

    eleventyConfig.addFilter("dateFormat", function(date, format) {
        return moment(date).format(format);
    });

    eleventyConfig.addFilter('log', value => {
        console.log(value)
    })

}