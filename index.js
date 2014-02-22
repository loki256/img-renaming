/*! img_json_list v0.0.0 - MIT license */

'use strict';

/**
 * Module dependencies
 */
var fs = require('fs');
var path = require('path');
var program = require('commander')

/**
 * Module exports
 */

module.exports = img_json_list;

/**
 * @param {}
 * @return {}
 * @api public
 */

function parseArgs() {
    program
        .version("0.0.1")
        .option('-s, --source [source]', 'Source directory', 'src')
        .option('-d, --destination [dir]', 'Destination directory', 'dest')
        .parse(process.argv)
    return program
}


function copy(src, dest) {
    fs.createReadStream(src).pipe(
            fs.createWriteStream(dest));
}

function processName(name) {
    name = name.replace(/[\d| ]+$/, '');
    console.log("process name: " + name);
    return name;
}

function img_json_list() {
    console.log("run");
    var args = parseArgs();

    var inputDir = args.source;
    if (!fs.existsSync(inputDir)) {
        console.log("source dir %s doesn't exists", args.source);
        args.help()
    }

    var outputDir = args.destination;
    if (!fs.existsSync(outputDir)) {
        fs.mkdir(outputDir);
    }
    var data = [];
    var count = 0;
    fs.readdirSync(inputDir).map(function (item) {
        if (path.extname(item) === ".jpg") {
            var fileName = path.basename(item, ".jpg");
            var outFileBase = count.toString() + ".jpg";
            var obj = {
                "description": fileName,
                "url": outFileBase
            };
            copy(path.join(inputDir, item),
                 path.join(outputDir, outFileBase));
            data.push(obj);
            count++;
        }
    });


    var jsonName = path.join(outputDir, "output.json");
    var jsonFile = fs.writeFileSync(jsonName, JSON.stringify(data));


    data.map(function (file) {
        console.log(file);
    });
}

img_json_list();
