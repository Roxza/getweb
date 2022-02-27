[![DeepScan grade](https://deepscan.io/api/teams/9479/projects/12083/branches/182378/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=9479&pid=12083&bid=182378)
[![NPM info](https://img.shields.io/npm/dt/getweb?color=39F4B6)](https://www.npmjs.com/package/getweb)
[![GitHub stars](https://img.shields.io/github/stars/ceyrex20/getweb?color=888BFF)](https://github.com/ceyrex20/getweb/stargazers)
[![GitHub issues](https://img.shields.io/github/issues-raw/ceyrex20/getweb)](https://github.com/ceyrex20/getweb/issues)

[![NPM Info](https://nodei.co/npm/getweb.png?downloads=true&stars=true)](https://www.npmjs.com/package/getweb)

# getweb

A lightweight, fast and not async request module.

You can go to the documentation by [clicking here](https://getweb.glitch.me).

## Basic Example

```js
const gw = require("getweb");

/* == GET == */
let request1 = gw.get("https://example.com");
console.log(request1.body);

//To get the object format;
let request2 = gw.get("https://example.com", {
  json: true,
});
console.log(request2.body);

/* == POST == */
let request3 = gw.post("https://example.com", {
  data: {
    message: "hello world",
  },
});
console.log(request3.body);

//In a different way;
let request4 = gw.post("https://example.com", {
  body: {
    message: "hello world",
  },
});
console.log(request4.body);
```

## Other Examples

```js
//HTML to JSON;
let request5 = gw.get("https://example.com", {
  html: true,
  json: true,
});
console.log(request5.body);

//XML to JSON;
let request6 = gw.get("https://example.com", {
  xml: true,
  json: true,
});
console.log(request6.body);

//JQuery mode;
let $ = gw.get("https://example.com", {
  jquery: true,
});
console.log($);
console.log($("div#id"));
```