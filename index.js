const request = require("./request");

/**
 * Sends a request for the get.
 * @param {String} link Link to the site to which the request will be sent.
 * @param {Object} [options] Settings of the request to be send. (default = {})
 * @param {Object} options.headers Headers of the request to be send. (default = {})
 * @param {Boolean} options.json Is the body in JSON format? (default = false)
 * @param {Boolean} options.xml Whether the body will be converted to json format if the body is in xml format. (default = false)
 * @param {Boolean} options.html Whether the body will be converted to json format if the body is in html format. (default = false)
 * @param {Boolean} options.jquery Whether jQuery mode is active. (default = false)
 * @returns {any} Shows the result of the send request.
*/
module.exports.get = function(link, options = {}) {
    return request(link, "get", options);
}

/**
 * Sends a request for the post.
 * @param {String} link Link to the site to which the request will be sent.
 * @param {Object} [options] Settings of the request to be send. (default = {})
 * @param {Object} options.headers Headers of the request to be send. (default = {})
 * @param {Boolean} options.json Is the body in JSON format? (default = false)
 * @param {Object} options.data Data of the request to be post.
 * @param {Object} options.body Data of the request to be post.
 * @param {Boolean} options.xml Whether the body will be converted to json format if the body is in xml format. (default = false)
 * @param {Boolean} options.html Whether the body will be converted to json format if the body is in html format. (default = false)
 * @param {Boolean} options.jquery Whether jQuery mode is active. (default = false)
 * @returns {any} Shows the result of the send request.
*/
module.exports.post = function(link, options = {}) {
    return request(link, "post", options);
}

/**
 * Sends a request for the put.
 * @param {String} link Link to the site to which the request will be sent.
 * @param {Object} [options] Settings of the request to be send. (default = {})
 * @param {Object} options.headers Headers of the request to be send. (default = {})
 * @param {Boolean} options.json Is the body in JSON format? (default = false)
 * @param {Boolean} options.xml Whether the body will be converted to json format if the body is in xml format. (default = false)
 * @param {Boolean} options.html Whether the body will be converted to json format if the body is in html format. (default = false)
 * @param {Boolean} options.jquery Whether jQuery mode is active. (default = false)
 * @returns {any} Shows the result of the send request.
*/
module.exports.put = function(link, options = {}) {
    return request(link, "put", options);
}

/**
 * Sends a request for the patch.
 * @param {String} link Link to the site to which the request will be sent.
 * @param {Object} [options] Settings of the request to be send. (default = {})
 * @param {Object} options.headers Headers of the request to be send. (default = {})
 * @param {Boolean} options.json Is the body in JSON format? (default = false)
 * @param {Boolean} options.xml Whether the body will be converted to json format if the body is in xml format. (default = false)
 * @param {Boolean} options.html Whether the body will be converted to json format if the body is in html format. (default = false)
 * @param {Boolean} options.jquery Whether jQuery mode is active. (default = false)
 * @returns {any} Shows the result of the send request.
*/
module.exports.patch = function(link, options = {}) {
    return request(link, "patch", options);
}

/**
 * Sends a request for the delete.
 * @param {String} link Link to the site to which the request will be sent.
 * @param {Object} [options] Settings of the request to be send. (default = {})
 * @param {Object} options.headers Headers of the request to be send. (default = {})
 * @param {Boolean} options.json Is the body in JSON format? (default = false)
 * @param {Boolean} options.xml Whether the body will be converted to json format if the body is in xml format. (default = false)
 * @param {Boolean} options.html Whether the body will be converted to json format if the body is in html format. (default = false)
 * @param {Boolean} options.jquery Whether jQuery mode is active. (default = false)
 * @returns {any} Shows the result of the send request.
*/
module.exports.delete = function(link, options = {}) {
    return request(link, "delete", options);
}

/**
 * Sends a request for the head.
 * @param {String} link Link to the site to which the request will be sent.
 * @param {Object} [options] Settings of the request to be send. (default = {})
 * @param {Object} options.headers Headers of the request to be send. (default = {})
 * @param {Boolean} options.json Is the body in JSON format? (default = false)
 * @param {Boolean} options.xml Whether the body will be converted to json format if the body is in xml format. (default = false)
 * @param {Boolean} options.html Whether the body will be converted to json format if the body is in html format. (default = false)
 * @param {Boolean} options.jquery Whether jQuery mode is active. (default = false)
 * @returns {any} Shows the result of the send request.
*/
module.exports.head = function(link, options = {}) {
    return request(link, "head", options);
}

/**
 * Sends a request for the connect.
 * @param {String} link Link to the site to which the request will be sent.
 * @param {Object} [options] Settings of the request to be send. (default = {})
 * @param {Object} options.headers Headers of the request to be send. (default = {})
 * @param {Boolean} options.json Is the body in JSON format? (default = false)
 * @param {Boolean} options.xml Whether the body will be converted to json format if the body is in xml format. (default = false)
 * @param {Boolean} options.html Whether the body will be converted to json format if the body is in html format. (default = false)
 * @param {Boolean} options.jquery Whether jQuery mode is active. (default = false)
 * @returns {any} Shows the result of the send request.
*/
module.exports.connect = function(link, options = {}) {
    return request(link, "connect", options);
}

/**
 * Sends a request for the options.
 * @param {String} link Link to the site to which the request will be sent.
 * @param {Object} [options] Settings of the request to be send. (default = {})
 * @param {Object} options.headers Headers of the request to be send. (default = {})
 * @param {Boolean} options.json Is the body in JSON format? (default = false)
 * @param {Boolean} options.xml Whether the body will be converted to json format if the body is in xml format. (default = false)
 * @param {Boolean} options.html Whether the body will be converted to json format if the body is in html format. (default = false)
 * @param {Boolean} options.jquery Whether jQuery mode is active. (default = false)
 * @returns {any} Shows the result of the send request.
*/
module.exports.options = function(link, options = {}) {
    return request(link, "options", options);
}

/**
 * Sends a request for the trace.
 * @param {String} link Link to the site to which the request will be sent.
 * @param {Object} [options] Settings of the request to be send. (default = {})
 * @param {Object} options.headers Headers of the request to be send. (default = {})
 * @param {Boolean} options.json Is the body in JSON format? (default = false)
 * @param {Boolean} options.xml Whether the body will be converted to json format if the body is in xml format. (default = false)
 * @param {Boolean} options.html Whether the body will be converted to json format if the body is in html format. (default = false)
 * @param {Boolean} options.jquery Whether jQuery mode is active. (default = false)
 * @returns {any} Shows the result of the send request.
*/
module.exports.trace = function(link, options = {}) {
    return request(link, "trace", options);
}