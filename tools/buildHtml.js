/**
 * PRODUCTION BUILD SCRIPT
 * This script was implemented to illustrate a sample html manipulation 
 * to inject scripts/css. This might not be required for most of the implementations, as 
 * react entry point might be a CMS, existing web application, other.
 * Allowing console calls since this is a build file
 */

import fs from 'fs';
import cheerio from 'cheerio';
import colors from 'colors';

/*eslint-disable no-console*/
fs.readFile('src/index.html', 'utf8', (err, markup) => {
    if(err)
        return console.log(err);

    //Using cheerio to easily manipulate html as jQuery
    const $ = cheerio.load(markup);

    //Since a separated css is only used in prod, need to add dynamically 
    $('head').prepend('<link rel="stylesheet" href="styles/style.css">');
    fs.writeFile('dist/index.html', $.html(), 'utf8', (err) => {
        if(err)
            console.log(err);
                        
        console.log('index.html generated to /dist'.green);
    });
});