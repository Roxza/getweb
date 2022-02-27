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
declare function get(link: string, options?: object);

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
declare function post(link: string, options?: object);

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
declare function put(link: string, options?: object);

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
declare function patch(link: string, options?: object);

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
declare function DELETE(link: string, options?: object);

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
declare function head(link: string, options?: object);

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
declare function connect(link: string, options?: object);

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
declare function options(link: string, options?: object);

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
declare function trace(link: string, options?: object);

export { get, post, put, patch, DELETE, head, connect, options, trace };