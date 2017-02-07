/**
 * PRODUCTION BUILD SCRIPT
 * This script was implemented to illustrate a sample bundling for a PROD environment
 * Allowing console calls since this is a build file
 */

import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import colors from 'colors';

/*eslint-disable no-console*/
//Set node.js var to production build
process.env.NODE_ENV = 'production';
console.log('Generating react-redux-boilerplate production-ready bundle...'.blue);

//Run webpack bundling process using production config file
webpack(webpackConfig).run((err,stats) => {
    if(err) {
        console.log(err.bold.red);
        return 1;
    }

    const jsonStats = stats.toJson();
    if(jsonStats.hasErrors) {
        return jsonStats.errors.map(error => console.log(error.red));
    }

    if(jsonStats.hasWarnings) {
        console.log('Webpack generated the following warnings: '.bold.yellow);
        return jsonStats.warnings.map(warning => console.log(warning.yellow));
    }

    console.log(`Webpack stats: ${stats}`);
    console.log('App SUCCESSFULLY bundle Production mode into /dist'.green);

    return 0;
});