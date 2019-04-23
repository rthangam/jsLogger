/**
 * [description]
 * @param  {[type]} ){}() [description]
 * @return {[type]}         [description]
 */
const Logger = (function() {

	/**
	 * [LOG_LEVELS description]
	 * @type {Object}
	 *
	 *  
	 */
	const LOG_LEVELS = {
		LEVEL_INFO: 0b0001,
		LEVEL_WARN: 0b0010,
		LEVEL_ERROR: 0b0011,
		LEVEL_LOG: 0b0100, //TODO
		LEVEL_NONE: 0b0101,
	};


	// //Default writer to console
	let writer = console;

	// //Default logging to error
	let level = LOG_LEVELS.LEVEL_ERROR;



	/**
	 * [_okToLog description]
	 * @param  {[type]} logLevel [description]
	 * @return {[type]}          [description]
	 */
	function _okToLog(logLevel) {
		return level < logLevel;
	}


	/**
	 * [_printInfoMsg description]
	 * @param  {...[type]} args [description]
	 * @return {[type]}         [description]
	 */
	function _printInfoMsg(...args) {
		if (!_okToLog(LOG_LEVELS.LEVEL_INFO)) {
			return;
		}
		//Check if first argument is a callback 
		if (typeof args[0] === 'function') {
			writer.info(args[0]());
		} else {
			writer.info(...args);
		}
	}


	/**
	 * [_printWarnMsg description]
	 * @param  {...[type]} args [description]
	 * @return {[type]}         [description]
	 */
	function _printWarnMsg(...args) {
		if (!_okToLog(LOG_LEVELS.LEVEL_WARN)) {
			return;
		}

		//Check if first argument is a callback 
		if (typeof args[0] === 'function') {
			writer.warn(args[0]());
		} else {
			writer.warn(...args);
		}
	}


	/**
	 * [_printErrorMsg description]
	 * @param  {...[type]} args [description]
	 * @return {[type]}         [description]
	 */
	function _printErrorMsg(...args) {
		if (!_okToLog(LOG_LEVELS.LEVEL_ERROR)) {
			return;
		}

		//Check if first argument is a callback 
		if (typeof args[0] === 'function') {
			writer.error(args[0]());
		} else {
			writer.error(...args);
		}
	}


	/**
	 * [_setOption description]
	 * @param {[type]} key   [description]
	 * @param {[type]} value [description]
	 */
	function _setOption(key, value) {
		switch (key) {
			case 'writer':
				if (typeof value !== 'undefined') {
					writer = value;
				} else {
					return writer;
				}
				break;
			case 'level':
				if (typeof value !== 'undefined') {
					level = value;
				} else {
					return level;
				}
				break;
			default:
				throw new Error(`Invalid Logger property ${key}. Valid properties {level, writer}`);
		}
	}


	return {
		info: _printInfoMsg,
		warn: _printWarnMsg,
		error: _printErrorMsg,
		option: _setOption,

		LEVEL_INFO: LOG_LEVELS.LEVEL_INFO,
		LEVEL_WARN: LOG_LEVELS.LEVEL_WARN,
		LEVEL_ERROR: LOG_LEVELS.LEVEL_ERROR,
		//LEVEL_LOG: LOG_LEVELS.LEVEL_LOG,
		LEVEL_NONE: LOG_LEVELS.LEVEL_NONE
	}

}());