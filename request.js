const deasync = require("deasync");
let xml, html, cheerio;

/**
 * Sends a request for the specified method.
 * @param {String} link Link to the site to which the request will be sent.
 * @param {String} method The method of the request to be send.
 * @param {Object} options Settings of the request to be send. (default = {})
 * @returns {any} Shows the result of the send request.
*/
module.exports = function request(link, method, options = {}) {
    if((typeof link == "undefined") || (typeof method == "undefined")) throw new TypeError("You must specify a link or method.");
    if(!link.startsWith("http")) throw new TypeError("The link you wrote should start with http(s).");
    return deasync(function(all, cb) {
        let url = new URL(all.link);
        let queryRegex = /([?&]|=([^&]+))/;
        if(all.link.match(queryRegex)) {
            for(let q of all.link.split("?").slice(1)) {
                url.searchParams.set(q.split("=")[0], q.split("=")[1]);
            }
        }
        let opts = {
            "hostname": url.host,
            "method": all.method.toUpperCase(),
            "path": (url.search == "") ? url.pathname : `${url.pathname}${url.search}`,
            "headers": options.headers
        }
        let req = require("https").request(opts, res => {
            res.setEncoding("utf8");
            let _body = "";
            res.on("data", (chunk) => {
                _body += chunk;
            })
            res.on("end", () => {
                let body;
                if(options.hasOwnProperty("xml") && (options.xml == true)) {
                    if(!options.hasOwnProperty("json") || (options.hasOwnProperty("json") && (options.json == false))) throw new TypeError("If you want to get the data as xml as it is, you shouldn't specify \"xml: true\".");
                    try {
                        xml = require("xml2json");
                        let json = xml.toJson(_body, {
                            object: true
                        });
                        body = json;
                    } catch(err) {
                        if((err.message == "There are errors in your xml file: not well-formed (invalid token)") && (options.xml == true)) throw new TypeError("You cannot convert an output that is not in xml format from xml to json.");
                        throw new TypeError("To use the xml to json conversion feature, you must install \"xml2json\" module.");
                    }
                } else if(options.hasOwnProperty("html") && (options.html == true)) {
                    if(!options.hasOwnProperty("json") || (options.hasOwnProperty("json") && (options.json == false))) throw new TypeError("If you want to get the data as html as it is, you shouldn't specify \"html: true\".");
                    try {
                        html = require("html2json");
                        let json = html.html2json(_body);
                        body = json;
                    } catch(err) {
                        if((err.startsWith("Parse Error: ") == true) && (options.html == true)) throw new TypeError("You cannot convert an output that is not in html format from html to json.");
                        throw new TypeError("To use the html to json conversion feature, you must install \"html2json\" module.");
                    }
                } else if(options.hasOwnProperty("jquery") && (options.jquery == true)) {
                    if(options.hasOwnProperty("json") && (options.json == true)) throw new TypeError("You can not get the body in json format when JQuery mode is active.");
                    try {
                        let cheerio = require("cheerio");
                        let $ = cheerio.load(_body);
                        cb(null, $);
                    } catch(err) {
                        throw new TypeError("To use JQuery mode, you must install the \"cheerio\" module.");
                    }
                } else {
                    try {
                        body = (options.hasOwnProperty("json") ? ((options.json == true) ? JSON.parse(_body) : _body) : _body);
                    } catch(err) {
                        if((err.message == "Unexpected token < in JSON at position 0") && (options.json == true)) throw new TypeError("You can not get xml or html in \"object\" format.");
                        throw new Error(err);
                    }
                }
                if(!options.hasOwnProperty("jquery") || (options.hasOwnProperty("jquery") && (options.jquery == false))) {
                    res.body = body;
                    cb(null, res);
                }
            })
        });
        req.on("error", (err) => {
            cb(err, null);
        })
        if(options.hasOwnProperty("body") || options.hasOwnProperty("data")) {
            req.write(JSON.stringify(options.body || options.data));
        }
        req.end();
    })({
        "link": link,
        "method": method,
        "options": {}
    })
}