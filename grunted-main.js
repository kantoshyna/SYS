(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
/*
  http://github.com/danpalmer/jquery.complexify.js

  This code is distributed under the WTFPL v2:
*/
(function ($) {

  $.fn.extend({
    complexify: function(options, callback) {

      var MIN_COMPLEXITY = 49; // 12 chars with Upper, Lower and Number
      var MAX_COMPLEXITY = 120; //  25 chars, all charsets
      var CHARSETS = [
        // Commonly Used
        ////////////////////
        [0x0020, 0x0020], // Space
        [0x0030, 0x0039], // Numbers
        [0x0041, 0x005A], // Uppercase
        [0x0061, 0x007A], // Lowercase
        [0x0021, 0x002F], // Punctuation
        [0x003A, 0x0040], // Punctuation
        [0x005B, 0x0060], // Punctuation
        [0x007B, 0x007E], // Punctuation
        // Everything Else
        ////////////////////
        [0x0080, 0x00FF], // Latin-1 Supplement
        [0x0100, 0x017F], // Latin Extended-A
        [0x0180, 0x024F], // Latin Extended-B
        [0x0250, 0x02AF], // IPA Extensions
        [0x02B0, 0x02FF], // Spacing Modifier Letters
        [0x0300, 0x036F], // Combining Diacritical Marks
        [0x0370, 0x03FF], // Greek
        [0x0400, 0x04FF], // Cyrillic
        [0x0530, 0x058F], // Armenian
        [0x0590, 0x05FF], // Hebrew
        [0x0600, 0x06FF], // Arabic
        [0x0700, 0x074F], // Syriac
        [0x0780, 0x07BF], // Thaana
        [0x0900, 0x097F], // Devanagari
        [0x0980, 0x09FF], // Bengali
        [0x0A00, 0x0A7F], // Gurmukhi
        [0x0A80, 0x0AFF], // Gujarati
        [0x0B00, 0x0B7F], // Oriya
        [0x0B80, 0x0BFF], // Tamil
        [0x0C00, 0x0C7F], // Telugu
        [0x0C80, 0x0CFF], // Kannada
        [0x0D00, 0x0D7F], // Malayalam
        [0x0D80, 0x0DFF], // Sinhala
        [0x0E00, 0x0E7F], // Thai
        [0x0E80, 0x0EFF], // Lao
        [0x0F00, 0x0FFF], // Tibetan
        [0x1000, 0x109F], // Myanmar
        [0x10A0, 0x10FF], // Georgian
        [0x1100, 0x11FF], // Hangul Jamo
        [0x1200, 0x137F], // Ethiopic
        [0x13A0, 0x13FF], // Cherokee
        [0x1400, 0x167F], // Unified Canadian Aboriginal Syllabics
        [0x1680, 0x169F], // Ogham
        [0x16A0, 0x16FF], // Runic
        [0x1780, 0x17FF], // Khmer
        [0x1800, 0x18AF], // Mongolian
        [0x1E00, 0x1EFF], // Latin Extended Additional
        [0x1F00, 0x1FFF], // Greek Extended
        [0x2000, 0x206F], // General Punctuation
        [0x2070, 0x209F], // Superscripts and Subscripts
        [0x20A0, 0x20CF], // Currency Symbols
        [0x20D0, 0x20FF], // Combining Marks for Symbols
        [0x2100, 0x214F], // Letterlike Symbols
        [0x2150, 0x218F], // Number Forms
        [0x2190, 0x21FF], // Arrows
        [0x2200, 0x22FF], // Mathematical Operators
        [0x2300, 0x23FF], // Miscellaneous Technical
        [0x2400, 0x243F], // Control Pictures
        [0x2440, 0x245F], // Optical Character Recognition
        [0x2460, 0x24FF], // Enclosed Alphanumerics
        [0x2500, 0x257F], // Box Drawing
        [0x2580, 0x259F], // Block Elements
        [0x25A0, 0x25FF], // Geometric Shapes
        [0x2600, 0x26FF], // Miscellaneous Symbols
        [0x2700, 0x27BF], // Dingbats
        [0x2800, 0x28FF], // Braille Patterns
        [0x2E80, 0x2EFF], // CJK Radicals Supplement
        [0x2F00, 0x2FDF], // Kangxi Radicals
        [0x2FF0, 0x2FFF], // Ideographic Description Characters
        [0x3000, 0x303F], // CJK Symbols and Punctuation
        [0x3040, 0x309F], // Hiragana
        [0x30A0, 0x30FF], // Katakana
        [0x3100, 0x312F], // Bopomofo
        [0x3130, 0x318F], // Hangul Compatibility Jamo
        [0x3190, 0x319F], // Kanbun
        [0x31A0, 0x31BF], // Bopomofo Extended
        [0x3200, 0x32FF], // Enclosed CJK Letters and Months
        [0x3300, 0x33FF], // CJK Compatibility
        [0x3400, 0x4DB5], // CJK Unified Ideographs Extension A
        [0x4E00, 0x9FFF], // CJK Unified Ideographs
        [0xA000, 0xA48F], // Yi Syllables
        [0xA490, 0xA4CF], // Yi Radicals
        [0xAC00, 0xD7A3], // Hangul Syllables
        [0xD800, 0xDB7F], // High Surrogates
        [0xDB80, 0xDBFF], // High Private Use Surrogates
        [0xDC00, 0xDFFF], // Low Surrogates
        [0xE000, 0xF8FF], // Private Use
        [0xF900, 0xFAFF], // CJK Compatibility Ideographs
        [0xFB00, 0xFB4F], // Alphabetic Presentation Forms
        [0xFB50, 0xFDFF], // Arabic Presentation Forms-A
        [0xFE20, 0xFE2F], // Combining Half Marks
        [0xFE30, 0xFE4F], // CJK Compatibility Forms
        [0xFE50, 0xFE6F], // Small Form Variants
        [0xFE70, 0xFEFE], // Arabic Presentation Forms-B
        [0xFEFF, 0xFEFF], // Specials
        [0xFF00, 0xFFEF], // Halfwidth and Fullwidth Forms
        [0xFFF0, 0xFFFD]  // Specials
      ];

      var defaults = {
        minimumChars: 8,
        strengthScaleFactor: 1,
        bannedPasswords: window.COMPLEXIFY_BANLIST || [],
        banMode: 'loose' // (strict|loose)
      };

      if($.isFunction(options) && !callback) {
        callback = options;
        options = {};
      }

      options = $.extend(defaults, options);

      function additionalComplexityForCharset(str, charset) {
        for (var i = str.length - 1; i >= 0; i--) {
          if (charset[0] <= str.charCodeAt(i) && str.charCodeAt(i) <= charset[1]) {
            return charset[1] - charset[0] + 1;
          }
        }
        return 0;
      }

      function inBanlist(str) {
        
        if (options.banMode === 'strict') {
          for (var i = 0; i < options.bannedPasswords.length; i++) {
            if (str.toLowerCase().indexOf(options.bannedPasswords[i].toLowerCase()) !== -1) {
                return true;
            }
          }
          return false;
        } else {
          return $.inArray(str, options.bannedPasswords) > -1 ? true : false;
        }
      }

      function evaluateSecurity() {
        var password = $(this).val();
        var complexity = 0, valid = false;

        // Reset complexity to 0 when banned password is found
        if (!inBanlist(password)) {

          // Add character complexity
          for (var i = CHARSETS.length - 1; i >= 0; i--) {
            complexity += additionalComplexityForCharset(password, CHARSETS[i]);
          }

        } else {
          complexity = 1;
        }

        // Use natural log to produce linear scale
        complexity = Math.log(Math.pow(complexity, password.length)) * (1/options.strengthScaleFactor);

        valid = (complexity > MIN_COMPLEXITY && password.length >= options.minimumChars);

        // Scale to percentage, so it can be used for a progress bar
        complexity = (complexity / MAX_COMPLEXITY) * 100;
        complexity = (complexity > 100) ? 100 : complexity;

        callback.call(this, valid, complexity);
      }

      this.each(function () {
        
      	if($(this).val()) {
          evaluateSecurity.apply(this);
        }
      });

      return this.each(function () {
        $(this).bind('keyup focus input propertychange mouseup', evaluateSecurity);
      });

    }
  });

})(jQuery);

},{}],2:[function(require,module,exports){

},{}],3:[function(require,module,exports){
/*
 * EJS Embedded JavaScript templates
 * Copyright 2112 Matthew Eernisse (mde@fleegix.org)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
*/

'use strict';

/**
 * @file Embedded JavaScript templating engine. {@link http://ejs.co}
 * @author Matthew Eernisse <mde@fleegix.org>
 * @author Tiancheng "Timothy" Gu <timothygu99@gmail.com>
 * @project EJS
 * @license {@link http://www.apache.org/licenses/LICENSE-2.0 Apache License, Version 2.0}
 */

/**
 * EJS internal functions.
 *
 * Technically this "module" lies in the same file as {@link module:ejs}, for
 * the sake of organization all the private functions re grouped into this
 * module.
 *
 * @module ejs-internal
 * @private
 */

/**
 * Embedded JavaScript templating engine.
 *
 * @module ejs
 * @public
 */

var fs = require('fs');
var path = require('path');
var utils = require('./utils');

var scopeOptionWarned = false;
var _VERSION_STRING = require('../package.json').version;
var _DEFAULT_DELIMITER = '%';
var _DEFAULT_LOCALS_NAME = 'locals';
var _NAME = 'ejs';
var _REGEX_STRING = '(<%%|%%>|<%=|<%-|<%_|<%#|<%|%>|-%>|_%>)';
var _OPTS_PASSABLE_WITH_DATA = ['delimiter', 'scope', 'context', 'debug', 'compileDebug',
  'client', '_with', 'rmWhitespace', 'strict', 'filename', 'async'];
// We don't allow 'cache' option to be passed in the data obj for
// the normal `render` call, but this is where Express 2 & 3 put it
// so we make an exception for `renderFile`
var _OPTS_PASSABLE_WITH_DATA_EXPRESS = _OPTS_PASSABLE_WITH_DATA.concat('cache');
var _BOM = /^\uFEFF/;

/**
 * EJS template function cache. This can be a LRU object from lru-cache NPM
 * module. By default, it is {@link module:utils.cache}, a simple in-process
 * cache that grows continuously.
 *
 * @type {Cache}
 */

exports.cache = utils.cache;

/**
 * Custom file loader. Useful for template preprocessing or restricting access
 * to a certain part of the filesystem.
 *
 * @type {fileLoader}
 */

exports.fileLoader = fs.readFileSync;

/**
 * Name of the object containing the locals.
 *
 * This variable is overridden by {@link Options}`.localsName` if it is not
 * `undefined`.
 *
 * @type {String}
 * @public
 */

exports.localsName = _DEFAULT_LOCALS_NAME;

/**
 * Promise implementation -- defaults to the native implementation if available
 * This is mostly just for testability
 *
 * @type {Function}
 * @public
 */

exports.promiseImpl = (new Function('return this;'))().Promise;

/**
 * Get the path to the included file from the parent file path and the
 * specified path.
 *
 * @param {String}  name     specified path
 * @param {String}  filename parent file path
 * @param {Boolean} isDir    parent file path whether is directory
 * @return {String}
 */
exports.resolveInclude = function(name, filename, isDir) {
  var dirname = path.dirname;
  var extname = path.extname;
  var resolve = path.resolve;
  var includePath = resolve(isDir ? filename : dirname(filename), name);
  var ext = extname(name);
  if (!ext) {
    includePath += '.ejs';
  }
  return includePath;
};

/**
 * Get the path to the included file by Options
 *
 * @param  {String}  path    specified path
 * @param  {Options} options compilation options
 * @return {String}
 */
function getIncludePath(path, options) {
  var includePath;
  var filePath;
  var views = options.views;

  // Abs path
  if (path.charAt(0) == '/') {
    includePath = exports.resolveInclude(path.replace(/^\/*/,''), options.root || '/', true);
  }
  // Relative paths
  else {
    // Look relative to a passed filename first
    if (options.filename) {
      filePath = exports.resolveInclude(path, options.filename);
      if (fs.existsSync(filePath)) {
        includePath = filePath;
      }
    }
    // Then look in any views directories
    if (!includePath) {
      if (Array.isArray(views) && views.some(function (v) {
        filePath = exports.resolveInclude(path, v, true);
        return fs.existsSync(filePath);
      })) {
        includePath = filePath;
      }
    }
    if (!includePath) {
      throw new Error('Could not find the include file "' +
          options.escapeFunction(path) + '"');
    }
  }
  return includePath;
}

/**
 * Get the template from a string or a file, either compiled on-the-fly or
 * read from cache (if enabled), and cache the template if needed.
 *
 * If `template` is not set, the file specified in `options.filename` will be
 * read.
 *
 * If `options.cache` is true, this function reads the file from
 * `options.filename` so it must be set prior to calling this function.
 *
 * @memberof module:ejs-internal
 * @param {Options} options   compilation options
 * @param {String} [template] template source
 * @return {(TemplateFunction|ClientFunction)}
 * Depending on the value of `options.client`, either type might be returned.
 * @static
 */

function handleCache(options, template) {
  var func;
  var filename = options.filename;
  var hasTemplate = arguments.length > 1;

  if (options.cache) {
    if (!filename) {
      throw new Error('cache option requires a filename');
    }
    func = exports.cache.get(filename);
    if (func) {
      return func;
    }
    if (!hasTemplate) {
      template = fileLoader(filename).toString().replace(_BOM, '');
    }
  }
  else if (!hasTemplate) {
    // istanbul ignore if: should not happen at all
    if (!filename) {
      throw new Error('Internal EJS error: no file name or template '
                    + 'provided');
    }
    template = fileLoader(filename).toString().replace(_BOM, '');
  }
  func = exports.compile(template, options);
  if (options.cache) {
    exports.cache.set(filename, func);
  }
  return func;
}

/**
 * Try calling handleCache with the given options and data and call the
 * callback with the result. If an error occurs, call the callback with
 * the error. Used by renderFile().
 *
 * @memberof module:ejs-internal
 * @param {Options} options    compilation options
 * @param {Object} data        template data
 * @param {RenderFileCallback} cb callback
 * @static
 */

function tryHandleCache(options, data, cb) {
  var result;
  if (!cb) {
    if (typeof exports.promiseImpl == 'function') {
      return new exports.promiseImpl(function (resolve, reject) {
        try {
          result = handleCache(options)(data);
          resolve(result);
        }
        catch (err) {
          reject(err);
        }
      });
    }
    else {
      throw new Error('Please provide a callback function');
    }
  }
  else {
    try {
      result = handleCache(options)(data);
    }
    catch (err) {
      return cb(err);
    }

    cb(null, result);
  }
}

/**
 * fileLoader is independent
 *
 * @param {String} filePath ejs file path.
 * @return {String} The contents of the specified file.
 * @static
 */

function fileLoader(filePath){
  return exports.fileLoader(filePath);
}

/**
 * Get the template function.
 *
 * If `options.cache` is `true`, then the template is cached.
 *
 * @memberof module:ejs-internal
 * @param {String}  path    path for the specified file
 * @param {Options} options compilation options
 * @return {(TemplateFunction|ClientFunction)}
 * Depending on the value of `options.client`, either type might be returned
 * @static
 */

function includeFile(path, options) {
  var opts = utils.shallowCopy({}, options);
  opts.filename = getIncludePath(path, opts);
  return handleCache(opts);
}

/**
 * Get the JavaScript source of an included file.
 *
 * @memberof module:ejs-internal
 * @param {String}  path    path for the specified file
 * @param {Options} options compilation options
 * @return {Object}
 * @static
 */

function includeSource(path, options) {
  var opts = utils.shallowCopy({}, options);
  var includePath;
  var template;
  includePath = getIncludePath(path, opts);
  template = fileLoader(includePath).toString().replace(_BOM, '');
  opts.filename = includePath;
  var templ = new Template(template, opts);
  templ.generateSource();
  return {
    source: templ.source,
    filename: includePath,
    template: template
  };
}

/**
 * Re-throw the given `err` in context to the `str` of ejs, `filename`, and
 * `lineno`.
 *
 * @implements RethrowCallback
 * @memberof module:ejs-internal
 * @param {Error}  err      Error object
 * @param {String} str      EJS source
 * @param {String} filename file name of the EJS file
 * @param {String} lineno   line number of the error
 * @static
 */

function rethrow(err, str, flnm, lineno, esc){
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm); // eslint-disable-line
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
}

function stripSemi(str){
  return str.replace(/;(\s*$)/, '$1');
}

/**
 * Compile the given `str` of ejs into a template function.
 *
 * @param {String}  template EJS template
 *
 * @param {Options} opts     compilation options
 *
 * @return {(TemplateFunction|ClientFunction)}
 * Depending on the value of `opts.client`, either type might be returned.
 * Note that the return type of the function also depends on the value of `opts.async`.
 * @public
 */

exports.compile = function compile(template, opts) {
  var templ;

  // v1 compat
  // 'scope' is 'context'
  // FIXME: Remove this in a future version
  if (opts && opts.scope) {
    if (!scopeOptionWarned){
      console.warn('`scope` option is deprecated and will be removed in EJS 3');
      scopeOptionWarned = true;
    }
    if (!opts.context) {
      opts.context = opts.scope;
    }
    delete opts.scope;
  }
  templ = new Template(template, opts);
  return templ.compile();
};

/**
 * Render the given `template` of ejs.
 *
 * If you would like to include options but not data, you need to explicitly
 * call this function with `data` being an empty object or `null`.
 *
 * @param {String}   template EJS template
 * @param {Object}  [data={}] template data
 * @param {Options} [opts={}] compilation and rendering options
 * @return {(String|Promise<String>)}
 * Return value type depends on `opts.async`.
 * @public
 */

exports.render = function (template, d, o) {
  var data = d || {};
  var opts = o || {};

  // No options object -- if there are optiony names
  // in the data, copy them to options
  if (arguments.length == 2) {
    utils.shallowCopyFromList(opts, data, _OPTS_PASSABLE_WITH_DATA);
  }

  return handleCache(opts, template)(data);
};

/**
 * Render an EJS file at the given `path` and callback `cb(err, str)`.
 *
 * If you would like to include options but not data, you need to explicitly
 * call this function with `data` being an empty object or `null`.
 *
 * @param {String}             path     path to the EJS file
 * @param {Object}            [data={}] template data
 * @param {Options}           [opts={}] compilation and rendering options
 * @param {RenderFileCallback} cb callback
 * @public
 */

exports.renderFile = function () {
  var args = Array.prototype.slice.call(arguments);
  var filename = args.shift();
  var cb;
  var opts = {filename: filename};
  var data;
  var viewOpts;

  // Do we have a callback?
  if (typeof arguments[arguments.length - 1] == 'function') {
    cb = args.pop();
  }
  // Do we have data/opts?
  if (args.length) {
    // Should always have data obj
    data = args.shift();
    // Normal passed opts (data obj + opts obj)
    if (args.length) {
      // Use shallowCopy so we don't pollute passed in opts obj with new vals
      utils.shallowCopy(opts, args.pop());
    }
    // Special casing for Express (settings + opts-in-data)
    else {
      // Express 3 and 4
      if (data.settings) {
        // Pull a few things from known locations
        if (data.settings.views) {
          opts.views = data.settings.views;
        }
        if (data.settings['view cache']) {
          opts.cache = true;
        }
        // Undocumented after Express 2, but still usable, esp. for
        // items that are unsafe to be passed along with data, like `root`
        viewOpts = data.settings['view options'];
        if (viewOpts) {
          utils.shallowCopy(opts, viewOpts);
        }
      }
      // Express 2 and lower, values set in app.locals, or people who just
      // want to pass options in their data. NOTE: These values will override
      // anything previously set in settings  or settings['view options']
      utils.shallowCopyFromList(opts, data, _OPTS_PASSABLE_WITH_DATA_EXPRESS);
    }
    opts.filename = filename;
  }
  else {
    data = {};
  }

  return tryHandleCache(opts, data, cb);
};

/**
 * Clear intermediate JavaScript cache. Calls {@link Cache#reset}.
 * @public
 */

exports.clearCache = function () {
  exports.cache.reset();
};

function Template(text, opts) {
  opts = opts || {};
  var options = {};
  this.templateText = text;
  this.mode = null;
  this.truncate = false;
  this.currentLine = 1;
  this.source = '';
  this.dependencies = [];
  options.client = opts.client || false;
  options.escapeFunction = opts.escape || utils.escapeXML;
  options.compileDebug = opts.compileDebug !== false;
  options.debug = !!opts.debug;
  options.filename = opts.filename;
  options.delimiter = opts.delimiter || exports.delimiter || _DEFAULT_DELIMITER;
  options.strict = opts.strict || false;
  options.context = opts.context;
  options.cache = opts.cache || false;
  options.rmWhitespace = opts.rmWhitespace;
  options.root = opts.root;
  options.outputFunctionName = opts.outputFunctionName;
  options.localsName = opts.localsName || exports.localsName || _DEFAULT_LOCALS_NAME;
  options.views = opts.views;
  options.async = opts.async;

  if (options.strict) {
    options._with = false;
  }
  else {
    options._with = typeof opts._with != 'undefined' ? opts._with : true;
  }

  this.opts = options;

  this.regex = this.createRegex();
}

Template.modes = {
  EVAL: 'eval',
  ESCAPED: 'escaped',
  RAW: 'raw',
  COMMENT: 'comment',
  LITERAL: 'literal'
};

Template.prototype = {
  createRegex: function () {
    var str = _REGEX_STRING;
    var delim = utils.escapeRegExpChars(this.opts.delimiter);
    str = str.replace(/%/g, delim);
    return new RegExp(str);
  },

  compile: function () {
    var src;
    var fn;
    var opts = this.opts;
    var prepended = '';
    var appended = '';
    var escapeFn = opts.escapeFunction;
    var asyncCtor;

    if (!this.source) {
      this.generateSource();
      prepended += '  var __output = [], __append = __output.push.bind(__output);' + '\n';
      if (opts.outputFunctionName) {
        prepended += '  var ' + opts.outputFunctionName + ' = __append;' + '\n';
      }
      if (opts._with !== false) {
        prepended +=  '  with (' + opts.localsName + ' || {}) {' + '\n';
        appended += '  }' + '\n';
      }
      appended += '  return __output.join("");' + '\n';
      this.source = prepended + this.source + appended;
    }

    if (opts.compileDebug) {
      src = 'var __line = 1' + '\n'
        + '  , __lines = ' + JSON.stringify(this.templateText) + '\n'
        + '  , __filename = ' + (opts.filename ?
        JSON.stringify(opts.filename) : 'undefined') + ';' + '\n'
        + 'try {' + '\n'
        + this.source
        + '} catch (e) {' + '\n'
        + '  rethrow(e, __lines, __filename, __line, escapeFn);' + '\n'
        + '}' + '\n';
    }
    else {
      src = this.source;
    }

    if (opts.client) {
      src = 'escapeFn = escapeFn || ' + escapeFn.toString() + ';' + '\n' + src;
      if (opts.compileDebug) {
        src = 'rethrow = rethrow || ' + rethrow.toString() + ';' + '\n' + src;
      }
    }

    if (opts.strict) {
      src = '"use strict";\n' + src;
    }
    if (opts.debug) {
      console.log(src);
    }

    try {
      if (opts.async) {
        // Have to use generated function for this, since in envs without support,
        // it breaks in parsing
        try {
          asyncCtor = (new Function('return (async function(){}).constructor;'))();
        }
        catch(e) {
          if (e instanceof SyntaxError) {
            throw new Error('This environment does not support async/await');
          }
          else {
            throw e;
          }
        }
      }
      else {
        asyncCtor = Function;
      }
      fn = new asyncCtor(opts.localsName + ', escapeFn, include, rethrow', src);
    }
    catch(e) {
      // istanbul ignore else
      if (e instanceof SyntaxError) {
        if (opts.filename) {
          e.message += ' in ' + opts.filename;
        }
        e.message += ' while compiling ejs\n\n';
        e.message += 'If the above error is not helpful, you may want to try EJS-Lint:\n';
        e.message += 'https://github.com/RyanZim/EJS-Lint';
        if (!e.async) {
          e.message += '\n';
          e.message += 'Or, if you meant to create an async function, pass async: true as an option.';
        }
      }
      throw e;
    }

    if (opts.client) {
      fn.dependencies = this.dependencies;
      return fn;
    }

    // Return a callable function which will execute the function
    // created by the source-code, with the passed data as locals
    // Adds a local `include` function which allows full recursive include
    var returnedFn = function (data) {
      var include = function (path, includeData) {
        var d = utils.shallowCopy({}, data);
        if (includeData) {
          d = utils.shallowCopy(d, includeData);
        }
        return includeFile(path, opts)(d);
      };
      return fn.apply(opts.context, [data || {}, escapeFn, include, rethrow]);
    };
    returnedFn.dependencies = this.dependencies;
    return returnedFn;
  },

  generateSource: function () {
    var opts = this.opts;

    if (opts.rmWhitespace) {
      // Have to use two separate replace here as `^` and `$` operators don't
      // work well with `\r`.
      this.templateText =
        this.templateText.replace(/\r/g, '').replace(/^\s+|\s+$/gm, '');
    }

    // Slurp spaces and tabs before <%_ and after _%>
    this.templateText =
      this.templateText.replace(/[ \t]*<%_/gm, '<%_').replace(/_%>[ \t]*/gm, '_%>');

    var self = this;
    var matches = this.parseTemplateText();
    var d = this.opts.delimiter;

    if (matches && matches.length) {
      matches.forEach(function (line, index) {
        var opening;
        var closing;
        var include;
        var includeOpts;
        var includeObj;
        var includeSrc;
        // If this is an opening tag, check for closing tags
        // FIXME: May end up with some false positives here
        // Better to store modes as k/v with '<' + delimiter as key
        // Then this can simply check against the map
        if ( line.indexOf('<' + d) === 0        // If it is a tag
          && line.indexOf('<' + d + d) !== 0) { // and is not escaped
          closing = matches[index + 2];
          if (!(closing == d + '>' || closing == '-' + d + '>' || closing == '_' + d + '>')) {
            throw new Error('Could not find matching close tag for "' + line + '".');
          }
        }
        // HACK: backward-compat `include` preprocessor directives
        if ((include = line.match(/^\s*include\s+(\S+)/))) {
          opening = matches[index - 1];
          // Must be in EVAL or RAW mode
          if (opening && (opening == '<' + d || opening == '<' + d + '-' || opening == '<' + d + '_')) {
            includeOpts = utils.shallowCopy({}, self.opts);
            includeObj = includeSource(include[1], includeOpts);
            if (self.opts.compileDebug) {
              includeSrc =
                  '    ; (function(){' + '\n'
                  + '      var __line = 1' + '\n'
                  + '      , __lines = ' + JSON.stringify(includeObj.template) + '\n'
                  + '      , __filename = ' + JSON.stringify(includeObj.filename) + ';' + '\n'
                  + '      try {' + '\n'
                  + includeObj.source
                  + '      } catch (e) {' + '\n'
                  + '        rethrow(e, __lines, __filename, __line, escapeFn);' + '\n'
                  + '      }' + '\n'
                  + '    ; }).call(this)' + '\n';
            }else{
              includeSrc = '    ; (function(){' + '\n' + includeObj.source +
                  '    ; }).call(this)' + '\n';
            }
            self.source += includeSrc;
            self.dependencies.push(exports.resolveInclude(include[1],
              includeOpts.filename));
            return;
          }
        }
        self.scanLine(line);
      });
    }

  },

  parseTemplateText: function () {
    var str = this.templateText;
    var pat = this.regex;
    var result = pat.exec(str);
    var arr = [];
    var firstPos;

    while (result) {
      firstPos = result.index;

      if (firstPos !== 0) {
        arr.push(str.substring(0, firstPos));
        str = str.slice(firstPos);
      }

      arr.push(result[0]);
      str = str.slice(result[0].length);
      result = pat.exec(str);
    }

    if (str) {
      arr.push(str);
    }

    return arr;
  },

  _addOutput: function (line) {
    if (this.truncate) {
      // Only replace single leading linebreak in the line after
      // -%> tag -- this is the single, trailing linebreak
      // after the tag that the truncation mode replaces
      // Handle Win / Unix / old Mac linebreaks -- do the \r\n
      // combo first in the regex-or
      line = line.replace(/^(?:\r\n|\r|\n)/, '');
      this.truncate = false;
    }
    else if (this.opts.rmWhitespace) {
      // rmWhitespace has already removed trailing spaces, just need
      // to remove linebreaks
      line = line.replace(/^\n/, '');
    }
    if (!line) {
      return line;
    }

    // Preserve literal slashes
    line = line.replace(/\\/g, '\\\\');

    // Convert linebreaks
    line = line.replace(/\n/g, '\\n');
    line = line.replace(/\r/g, '\\r');

    // Escape double-quotes
    // - this will be the delimiter during execution
    line = line.replace(/"/g, '\\"');
    this.source += '    ; __append("' + line + '")' + '\n';
  },

  scanLine: function (line) {
    var self = this;
    var d = this.opts.delimiter;
    var newLineCount = 0;

    newLineCount = (line.split('\n').length - 1);

    switch (line) {
    case '<' + d:
    case '<' + d + '_':
      this.mode = Template.modes.EVAL;
      break;
    case '<' + d + '=':
      this.mode = Template.modes.ESCAPED;
      break;
    case '<' + d + '-':
      this.mode = Template.modes.RAW;
      break;
    case '<' + d + '#':
      this.mode = Template.modes.COMMENT;
      break;
    case '<' + d + d:
      this.mode = Template.modes.LITERAL;
      this.source += '    ; __append("' + line.replace('<' + d + d, '<' + d) + '")' + '\n';
      break;
    case d + d + '>':
      this.mode = Template.modes.LITERAL;
      this.source += '    ; __append("' + line.replace(d + d + '>', d + '>') + '")' + '\n';
      break;
    case d + '>':
    case '-' + d + '>':
    case '_' + d + '>':
      if (this.mode == Template.modes.LITERAL) {
        this._addOutput(line);
      }

      this.mode = null;
      this.truncate = line.indexOf('-') === 0 || line.indexOf('_') === 0;
      break;
    default:
      // In script mode, depends on type of tag
      if (this.mode) {
        // If '//' is found without a line break, add a line break.
        switch (this.mode) {
        case Template.modes.EVAL:
        case Template.modes.ESCAPED:
        case Template.modes.RAW:
          if (line.lastIndexOf('//') > line.lastIndexOf('\n')) {
            line += '\n';
          }
        }
        switch (this.mode) {
        // Just executing code
        case Template.modes.EVAL:
          this.source += '    ; ' + line + '\n';
          break;
          // Exec, esc, and output
        case Template.modes.ESCAPED:
          this.source += '    ; __append(escapeFn(' + stripSemi(line) + '))' + '\n';
          break;
          // Exec and output
        case Template.modes.RAW:
          this.source += '    ; __append(' + stripSemi(line) + ')' + '\n';
          break;
        case Template.modes.COMMENT:
          // Do nothing
          break;
          // Literal <%% mode, append as raw output
        case Template.modes.LITERAL:
          this._addOutput(line);
          break;
        }
      }
      // In string mode, just add the output
      else {
        this._addOutput(line);
      }
    }

    if (self.opts.compileDebug && newLineCount) {
      this.currentLine += newLineCount;
      this.source += '    ; __line = ' + this.currentLine + '\n';
    }
  }
};

/**
 * Escape characters reserved in XML.
 *
 * This is simply an export of {@link module:utils.escapeXML}.
 *
 * If `markup` is `undefined` or `null`, the empty string is returned.
 *
 * @param {String} markup Input string
 * @return {String} Escaped string
 * @public
 * @func
 * */
exports.escapeXML = utils.escapeXML;

/**
 * Express.js support.
 *
 * This is an alias for {@link module:ejs.renderFile}, in order to support
 * Express.js out-of-the-box.
 *
 * @func
 */

exports.__express = exports.renderFile;

// Add require support
/* istanbul ignore else */
if (require.extensions) {
  require.extensions['.ejs'] = function (module, flnm) {
    var filename = flnm || /* istanbul ignore next */ module.filename;
    var options = {
      filename: filename,
      client: true
    };
    var template = fileLoader(filename).toString();
    var fn = exports.compile(template, options);
    module._compile('module.exports = ' + fn.toString() + ';', filename);
  };
}

/**
 * Version of EJS.
 *
 * @readonly
 * @type {String}
 * @public
 */

exports.VERSION = _VERSION_STRING;

/**
 * Name for detection of EJS.
 *
 * @readonly
 * @type {String}
 * @public
 */

exports.name = _NAME;

/* istanbul ignore if */
if (typeof window != 'undefined') {
  window.ejs = exports;
}

},{"../package.json":5,"./utils":4,"fs":2,"path":6}],4:[function(require,module,exports){
/*
 * EJS Embedded JavaScript templates
 * Copyright 2112 Matthew Eernisse (mde@fleegix.org)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
*/

/**
 * Private utility functions
 * @module utils
 * @private
 */

'use strict';

var regExpChars = /[|\\{}()[\]^$+*?.]/g;

/**
 * Escape characters reserved in regular expressions.
 *
 * If `string` is `undefined` or `null`, the empty string is returned.
 *
 * @param {String} string Input string
 * @return {String} Escaped string
 * @static
 * @private
 */
exports.escapeRegExpChars = function (string) {
  // istanbul ignore if
  if (!string) {
    return '';
  }
  return String(string).replace(regExpChars, '\\$&');
};

var _ENCODE_HTML_RULES = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&#34;',
  "'": '&#39;'
};
var _MATCH_HTML = /[&<>'"]/g;

function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
}

/**
 * Stringified version of constants used by {@link module:utils.escapeXML}.
 *
 * It is used in the process of generating {@link ClientFunction}s.
 *
 * @readonly
 * @type {String}
 */

var escapeFuncStr =
  'var _ENCODE_HTML_RULES = {\n'
+ '      "&": "&amp;"\n'
+ '    , "<": "&lt;"\n'
+ '    , ">": "&gt;"\n'
+ '    , \'"\': "&#34;"\n'
+ '    , "\'": "&#39;"\n'
+ '    }\n'
+ '  , _MATCH_HTML = /[&<>\'"]/g;\n'
+ 'function encode_char(c) {\n'
+ '  return _ENCODE_HTML_RULES[c] || c;\n'
+ '};\n';

/**
 * Escape characters reserved in XML.
 *
 * If `markup` is `undefined` or `null`, the empty string is returned.
 *
 * @implements {EscapeCallback}
 * @param {String} markup Input string
 * @return {String} Escaped string
 * @static
 * @private
 */

exports.escapeXML = function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
exports.escapeXML.toString = function () {
  return Function.prototype.toString.call(this) + ';\n' + escapeFuncStr;
};

/**
 * Naive copy of properties from one object to another.
 * Does not recurse into non-scalar properties
 * Does not check to see if the property has a value before copying
 *
 * @param  {Object} to   Destination object
 * @param  {Object} from Source object
 * @return {Object}      Destination object
 * @static
 * @private
 */
exports.shallowCopy = function (to, from) {
  from = from || {};
  for (var p in from) {
    to[p] = from[p];
  }
  return to;
};

/**
 * Naive copy of a list of key names, from one object to another.
 * Only copies property if it is actually defined
 * Does not recurse into non-scalar properties
 *
 * @param  {Object} to   Destination object
 * @param  {Object} from Source object
 * @param  {Array} list List of properties to copy
 * @return {Object}      Destination object
 * @static
 * @private
 */
exports.shallowCopyFromList = function (to, from, list) {
  for (var i = 0; i < list.length; i++) {
    var p = list[i];
    if (typeof from[p] != 'undefined') {
      to[p] = from[p];
    }
  }
  return to;
};

/**
 * Simple in-process cache implementation. Does not implement limits of any
 * sort.
 *
 * @implements Cache
 * @static
 * @private
 */
exports.cache = {
  _data: {},
  set: function (key, val) {
    this._data[key] = val;
  },
  get: function (key) {
    return this._data[key];
  },
  reset: function () {
    this._data = {};
  }
};

},{}],5:[function(require,module,exports){
module.exports={
  "_from": "ejs",
  "_id": "ejs@2.6.1",
  "_inBundle": false,
  "_integrity": "sha512-0xy4A/twfrRCnkhfk8ErDi5DqdAsAqeGxht4xkCUrsvhhbQNs7E+4jV0CN7+NKIY0aHE72+XvqtBIXzD31ZbXQ==",
  "_location": "/ejs",
  "_phantomChildren": {},
  "_requested": {
    "type": "tag",
    "registry": true,
    "raw": "ejs",
    "name": "ejs",
    "escapedName": "ejs",
    "rawSpec": "",
    "saveSpec": null,
    "fetchSpec": "latest"
  },
  "_requiredBy": [
    "#USER",
    "/"
  ],
  "_resolved": "https://registry.npmjs.org/ejs/-/ejs-2.6.1.tgz",
  "_shasum": "498ec0d495655abc6f23cd61868d926464071aa0",
  "_spec": "ejs",
  "_where": "/home/kate/Стільниця/Sell-yourself",
  "author": {
    "name": "Matthew Eernisse",
    "email": "mde@fleegix.org",
    "url": "http://fleegix.org"
  },
  "bugs": {
    "url": "https://github.com/mde/ejs/issues"
  },
  "bundleDependencies": false,
  "contributors": [
    {
      "name": "Timothy Gu",
      "email": "timothygu99@gmail.com",
      "url": "https://timothygu.github.io"
    }
  ],
  "dependencies": {},
  "deprecated": false,
  "description": "Embedded JavaScript templates",
  "devDependencies": {
    "browserify": "^13.1.1",
    "eslint": "^4.14.0",
    "git-directory-deploy": "^1.5.1",
    "istanbul": "~0.4.3",
    "jake": "^8.0.16",
    "jsdoc": "^3.4.0",
    "lru-cache": "^4.0.1",
    "mocha": "^5.0.5",
    "uglify-js": "^3.3.16"
  },
  "engines": {
    "node": ">=0.10.0"
  },
  "homepage": "https://github.com/mde/ejs",
  "keywords": [
    "template",
    "engine",
    "ejs"
  ],
  "license": "Apache-2.0",
  "main": "./lib/ejs.js",
  "name": "ejs",
  "repository": {
    "type": "git",
    "url": "git://github.com/mde/ejs.git"
  },
  "scripts": {
    "coverage": "istanbul cover node_modules/mocha/bin/_mocha",
    "devdoc": "jake doc[dev]",
    "doc": "jake doc",
    "lint": "eslint \"**/*.js\" Jakefile",
    "test": "jake test"
  },
  "version": "2.6.1"
}

},{}],6:[function(require,module,exports){
(function (process){
// .dirname, .basename, and .extname methods are extracted from Node.js v8.11.1,
// backported and transplited with Babel, with backwards-compat fixes

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function (path) {
  if (typeof path !== 'string') path = path + '';
  if (path.length === 0) return '.';
  var code = path.charCodeAt(0);
  var hasRoot = code === 47 /*/*/;
  var end = -1;
  var matchedSlash = true;
  for (var i = path.length - 1; i >= 1; --i) {
    code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        if (!matchedSlash) {
          end = i;
          break;
        }
      } else {
      // We saw the first non-path separator
      matchedSlash = false;
    }
  }

  if (end === -1) return hasRoot ? '/' : '.';
  if (hasRoot && end === 1) {
    // return '//';
    // Backwards-compat fix:
    return '/';
  }
  return path.slice(0, end);
};

function basename(path) {
  if (typeof path !== 'string') path = path + '';

  var start = 0;
  var end = -1;
  var matchedSlash = true;
  var i;

  for (i = path.length - 1; i >= 0; --i) {
    if (path.charCodeAt(i) === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          start = i + 1;
          break;
        }
      } else if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // path component
      matchedSlash = false;
      end = i + 1;
    }
  }

  if (end === -1) return '';
  return path.slice(start, end);
}

// Uses a mixed approach for backwards-compatibility, as ext behavior changed
// in new Node.js versions, so only basename() above is backported here
exports.basename = function (path, ext) {
  var f = basename(path);
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};

exports.extname = function (path) {
  if (typeof path !== 'string') path = path + '';
  var startDot = -1;
  var startPart = 0;
  var end = -1;
  var matchedSlash = true;
  // Track the state of characters (if any) we see before our first dot and
  // after any path separator we find
  var preDotState = 0;
  for (var i = path.length - 1; i >= 0; --i) {
    var code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }
        continue;
      }
    if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // extension
      matchedSlash = false;
      end = i + 1;
    }
    if (code === 46 /*.*/) {
        // If this is our first dot, mark it as the start of our extension
        if (startDot === -1)
          startDot = i;
        else if (preDotState !== 1)
          preDotState = 1;
    } else if (startDot !== -1) {
      // We saw a non-dot and non-path separator before our dot, so we should
      // have a good chance at having a non-empty extension
      preDotState = -1;
    }
  }

  if (startDot === -1 || end === -1 ||
      // We saw a non-dot character immediately before the dot
      preDotState === 0 ||
      // The (right-most) trimmed path component is exactly '..'
      preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return '';
  }
  return path.slice(startDot, end);
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

}).call(this,require('_process'))
},{"_process":7}],7:[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],8:[function(require,module,exports){

var ejs = require('ejs');

exports.oneUser = ejs.compile("<div class=\"oneuser\">\n  <div class=\"oneuserphoto\">\n    <img src=\"<%= user.icon %>\" alt=\"./images/avs/anon.jpg\" style=\"width: 100%; height: 100%\" />\n  </div>\n  <div style=\"width:72%\">\n    <p style=\"margin-left: 5px;\"><%= user.nickname %></p>\n    <hr>\n    <div style=\"display:flex\">\n      <% var image; if (user.brain > 0) { image =\n        \"../images/brainOfPanel1.png\" } else { image =\n        \"../images/brainOfPanel2.png\"; if (user.brain < 0) {\n        image.css('visibility', 'hidden' ); } } %>\n      <img src=\"<%=image%>\" style=\"width:12.5%; height: 12.5%;\" />\n      <% if (user.rightlung > 0) { image = \"../images/rightLungOfPanel1.png\" }\n        else { image = \"../images/rightLungOfPanel2.png\"; if (user.rightlung <\n        0) { image.css('visibility', 'hidden' ); } } %>\n      <img src=\"<%=image%>\" style=\"width:12.5%; height: 12.5%;\" />\n      <% if (user.leftlung > 0) { image = \"../images/leftLungOfPanel1.png\" }\n        else { image = \"../images/leftLungOfPanel2.png\"; if (user.leftlung < 0)\n        { image.css('visibility', 'hidden' ); } } %>\n      <img src=\"<%=image%>\" style=\"width:12.5%; height: 12.5%;\" />\n      <% if (user.rightkidney > 0) { image =\n        \"../images/rightKidneyOfPanel1.png\" } else { image =\n        \"../images/rightKidneyOfPanel2.png\"; if (user.rightkidney < 0) {\n        image.css('visibility', 'hidden' ); } } %>\n      <img src=\"<%=image%>\" style=\"width:12.5%; height: 12.5%;\" />\n      <% if (user.leftkidney > 0) { image = \"../images/leftKidneyOfPanel1.png\"\n        } else { image = \"../images/leftKidneyOfPanel2.png\"; if (user.leftkidney\n        < 0) { image.css('visibility', 'hidden' ); } } %>\n      <img src=\"<%=image%>\" style=\"width:12.5%; height: 12.5%;\" />\n      <% if (user.liver > 0) { image = \"../images/liverOfPanel1.png\" } else {\n        image = \"../images/liverOfPanel2.png\"; if (user.liver < 0) {\n        image.css('visibility', 'hidden' ); } } %>\n      <img src=\"<%=image%>\" style=\"width:12.5%; height: 12.5%;\" />\n      <% if (user.stomach > 0) { image = \"../images/stomachOfPanel1.png\" }\n        else { image = \"../images/stomachOfPanel2.png\"; if (user.stomach < 0) {\n        image.css('visibility', 'hidden'); } } %>\n      <img src=\"<%=image%>\" style=\"width:12.5%; height: 12.5%;\" />\n    </div>\n  </div>\n  <button class=\"oneuserbutton\">Написати</button>\n</div>");
exports.mailWindow = ejs.compile("<div style=\"border-bottom: .5px grey dotted; height: 30px; padding: 4px\">Написати</div>\n<div><input type=\"text\" style=\"height: 80%; width: 100%\"></div>\n<div style=\"border-top: .5px grey dotted; height: 30px; padding: 4px\">\n    <button class=\"submit\">Надіслати</button>\n</div>");
exports.userProfile = ejs.compile("<%\nvar sex, country, resus;\nif (user.sex) { sex = \"Чоловік\";} else { sex = \"Жінка\";}\nif (user.profile-country == \"Не вибрано\") {country = \"\";} else {country = user.profile-country;}\nif (user.resus) {resus = \"+\";} else {resus = \"-\";}\n%>\n\n<div id=\"profile-head\">\n    <span id=\"profile-foto\"><img src=\"<%=user.icon %>\"></span>\n    <span id=\"profile-name\"><%=user.nickname %></span>\n    <div id=\"profile-country\"><%=country %></div>\n</div>\n<div class=\"col-*-12 \">\n    <h2><b>Статус органів:</b></h2>\n    <h4>Мозок:<p style=\"display: none\" id=\"statusOrgan11\">Продано</p>\n        <p style=\"display: none\" id=\"statusOrgan12\">Не продається</p>\n        <p style=\"display: none\" id=\"statusOrgan13\">\"Ціна\"</p>\n    </h4>\n    <hr>\n    <h4>Ліва легеня:<p style=\"display: none\" id=\"statusOrgan21\">Продано</p>\n        <p style=\"display: none\" id=\"statusOrgan22\">Не продається</p>\n        <p style=\"display: none\" id=\"statusOrgan23\">\"Ціна\"</p>\n    </h4>\n    <hr>\n    <h4>Права легеня:<p style=\"display: none\" id=\"statusOrgan31\">Продано</p>\n        <p style=\"display: none\" id=\"statusOrgan32\">Не продається</p>\n        <p style=\"display: none\" id=\"statusOrgan33\">\"Ціна\"</p>\n    </h4>\n    <hr>\n    <h4>Печінка:<p style=\"display: none\" id=\"statusOrgan41\">Продано</p>\n        <p style=\"display: none\" id=\"statusOrgan42\">Не продається</p>\n        <p style=\"display: none\" id=\"statusOrgan43\">\"Ціна\"</p>\n    </h4>\n    <hr>\n    <h4>Ліва нирка:<p style=\"display: none\" id=\"statusOrgan51\">Продано</p>\n        <p style=\"display: none\" id=\"statusOrgan52\">Не продається</p>\n        <p style=\"display: none\" id=\"statusOrgan53\">\"Ціна\"</p>\n    </h4>\n    <hr>\n    <h4>Права нирка:<p style=\"display: none\" id=\"statusOrgan61\">Продано</p>\n        <p style=\"display: none\" id=\"statusOrgan62\">Не продається</p>\n        <p style=\"display: none\" id=\"statusOrgan63\">\"Ціна\"</p>\n    </h4>\n    <hr>\n    <h4>Шлунок:<p style=\"display: none\" id=\"statusOrgan71\">Продано</p>\n        <p style=\"display: none\" id=\"statusOrgan72\">Не продається</p>\n        <p style=\"display: none\" id=\"statusOrgan73\">\"Ціна\"</p>\n    </h4>\n    <br>\n    <button id=\"edit\">Редагувати</button>\n</div>");
},{"ejs":3}],9:[function(require,module,exports){
var API_URL = "http://localhost:9080";

function backendGet(url, callback) {
    $.ajax({
        url: API_URL + url,
        type: 'GET',
        success: function (data) {
            callback(null, data);
        },
        error: function () {
            callback(new Error("Ajax Failed"));
        }
    });
}

function backendPost(url, data, callback) {
    $.ajax({
        url: API_URL + url,
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(data),
        success: function (data) {
            callback(null, data);
        },
        error: function () {
            callback(new Error("Ajax Failed"));
        }
    });
}

exports.getUserList = function (callback) {
    backendGet("/api/profiles", callback);
};
exports.getBList = function (callback) {
    backendGet("/api/brain", callback);
};
exports.getLKList = function (callback) {
    backendGet("/api/leftkidney", callback);
};
exports.getRKList = function (callback) {
    backendGet("/api/rightkidney", callback);
};
exports.getLLList = function (callback) {
    backendGet("/api/leftlung", callback);
};
exports.getRLList = function (callback) {
    backendGet("/api/rightlung", callback);
};
exports.getSList = function (callback) {
    backendGet("/api/stomach", callback);
};
exports.getLList = function (callback) {
    backendGet("/api/liver", callback);
};

exports.loginUser = function (email, password, callback) {
    backendPost('/api/login', {
        email: [email],
        password: [password]
    }, function (error, data) {
        if (error) {
            console.log('--Error in loginUser: ' + error);
            callback(error);
        } else {
            backendGet('/api/loggedUser', function (error, data) {
                callback(null, data);
            });
        }
    });
};

exports.saveChangedOrgan = function (organ, price) {
    //
};
},{}],10:[function(require,module,exports){
function validateEmail(email) {
    var pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return pattern.test(String(email).toLowerCase());
}

$("input").on('input', function () {
    if ($(this).val() != "") {
        $(this).removeClass('incorrect');
    } else {
        $(this).addClass('incorrect');
    }
});

$("#email-input").on('input', function () {
    if (!validateEmail($("#email-input").val())) {
        $("#email-input").addClass('incorrect');
    } else {
        $("#email-input").removeClass('incorrect');
    }
});

function enableP2() {
    if ($("#password-1").val() != "") {
        $("#password-2").removeAttr('disabled');
        $("#repeat-password").css('color', '#333');
    } else {
        $("#password-2").attr('disabled', 'true');
        $("#repeat-password").css('color', 'gray');
    }
}

$("#password-1").complexify({}, function (valid, complexity) {
    $('#per').text(Math.round(complexity));
    $("#progressbar").progressbar({
        value: complexity
    });
    console.log(" Complexity : " + complexity + " , valid : " + valid);
});


$('#reg-form').on('submit', function (event) {
    event.preventDefault();
    var $sex = false,
        $resus = false;
    if ($('#sex').val() == "Чоловік") {
        $sex = true;
    }
    if ($('#resus').val() == "+") {
        $sex = true;
    }
    if ($('input').val() == "") {
        alert("Ви зaповнили не всі поля!");
    } else if ($("#password-1").val() != $("#password-2").val()) {
        alert("Неправильний пароль!");
    } else {
        var newUser = {
            email: $('#email-input').val(),
            password: $('#password-1').val(),
            nickname: $('#nick-input').val(),
            icon: "./images/avs/avatar-js.png",
            sex: $sex,
            country: $('#country').val(),
            bloodgroup: $('#bloodgroup').val(),
            resus: $resus,
            brain: 1,
            leftkidney: 1,
            rightkidney: 1,
            leftlung: 1,
            rightlung: 0,
            stomach: 0,
            liver: 1
        };

        backendPost('/api/registration', newUser, function (error, data) {
            if (error) {
                console.log("--Database error" + error);
            } else {
                console.log("--Database success");
                localStorage.setItem('user', JSON.stringify(data));
                sessionStorage.setItem("id", "2");
                $("#2").trigger('click');
                $("#login").text("Вийти");
                window.location.href = "/profile";
            }
        });
    }
});


function backendPost(url, data, callback) {
    $.ajax({
        url: "http://localhost:9080" + url,
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(data),
        success: function (data) {
            callback(null, data);
        },
        error: function () {
            callback(new Error("Ajax Failed"));
        }
    });
}
},{}],11:[function(require,module,exports){
$(function () {

    $("#organ1").on("click", function () {
        $("#organRed1").css("display", "initial");
        $("#organRed2").css("display", "none");
        $("#organRed3").css("display", "none");
        $("#organRed4").css("display", "none");
        $("#organRed5").css("display", "none");
        $("#organRed6").css("display", "none");
        $("#organRed7").css("display", "none");
    });

    $("#organ2").on("click", function () {
        $("#organRed2").css("display", "initial");
        $("#organRed1").css("display", "none");
        $("#organRed3").css("display", "none");
        $("#organRed4").css("display", "none");
        $("#organRed5").css("display", "none");
        $("#organRed6").css("display", "none");
        $("#organRed7").css("display", "none");
    });

    $("#organ3").on("click", function () {
        $("#organRed3").css("display", "initial");
        $("#organRed2").css("display", "none");
        $("#organRed1").css("display", "none");
        $("#organRed4").css("display", "none");
        $("#organRed5").css("display", "none");
        $("#organRed6").css("display", "none");
        $("#organRed7").css("display", "none");
    });

    $("#organ4").on("click", function () {
        $("#organRed4").css("display", "initial");
        $("#organRed2").css("display", "none");
        $("#organRed3").css("display", "none");
        $("#organRed1").css("display", "none");
        $("#organRed5").css("display", "none");
        $("#organRed6").css("display", "none");
        $("#organRed7").css("display", "none");
    });

    $("#organ5").on("click", function () {
        $("#organRed5").css("display", "initial");
        $("#organRed2").css("display", "none");
        $("#organRed3").css("display", "none");
        $("#organRed4").css("display", "none");
        $("#organRed1").css("display", "none");
        $("#organRed6").css("display", "none");
        $("#organRed7").css("display", "none");
    });

    $("#organ6").on("click", function () {
        $("#organRed6").css("display", "initial");
        $("#organRed2").css("display", "none");
        $("#organRed3").css("display", "none");
        $("#organRed4").css("display", "none");
        $("#organRed5").css("display", "none");
        $("#organRed1").css("display", "none");
        $("#organRed7").css("display", "none");
    });

    $("#organ7").on("click", function () {
        $("#organRed7").css("display", "initial");
        $("#organRed2").css("display", "none");
        $("#organRed3").css("display", "none");
        $("#organRed4").css("display", "none");
        $("#organRed5").css("display", "none");
        $("#organRed6").css("display", "none");
        $("#organRed1").css("display", "none");
    });

    $("#notForSale1").on("click", function () {
        $("#twoFields1").css("display", "none");
    });

    $("#forSale1").on("click", function () {
        $("#twoFields1").css("display", "initial");
    });

    $("#sold1").on("click", function () {
        $("#twoFields1").css("display", "none");
    });

    $("#notForSale2").on("click", function () {
        $("#twoFields2").css("display", "none");
    });

    $("#forSale2").on("click", function () {
        $("#twoFields2").css("display", "initial");
    });

    $("#sold2").on("click", function () {
        $("#twoFields2").css("display", "none");
    });

    $("#notForSale3").on("click", function () {
        $("#twoFields3").css("display", "none");
    });

    $("#forSale3").on("click", function () {
        $("#twoFields3").css("display", "initial");
    });

    $("#sold3").on("click", function () {
        $("#twoFields3").css("display", "none");
    });

    $("#notForSale4").on("click", function () {
        $("#twoFields4").css("display", "none");
    });

    $("#forSale4").on("click", function () {
        $("#twoFields4").css("display", "initial");
    });

    $("#sold4").on("click", function () {
        $("#twoFields4").css("display", "none");
    });

    $("#notForSale5").on("click", function () {
        $("#twoFields5").css("display", "none");
    });

    $("#forSale5").on("click", function () {
        $("#twoFields5").css("display", "initial");
    });

    $("#sold5").on("click", function () {
        $("#twoFields5").css("display", "none");
    });

    $("#notForSale6").on("click", function () {
        $("#twoFields6").css("display", "none");
    });

    $("#forSale6").on("click", function () {
        $("#twoFields6").css("display", "initial");
    });

    $("#sold6").on("click", function () {
        $("#twoFields6").css("display", "none");
    });

    $("#notForSale7").on("click", function () {
        $("#twoFields7").css("display", "none");
    });

    $("#forSale7").on("click", function () {
        $("#twoFields7").css("display", "initial");
    });

    $("#sold7").on("click", function () {
        $("#twoFields7").css("display", "none");
    });
});
//var db = require("../scripts-backend/db");
//var api = require('./api');
/*
var back = $("#pro-logsite");

$("#edit").click(function () {
    var editsite = document.createElement('div');
    editsite.id = "editsite";
    var editwind = document.createElement('div');
    editwind.id = "editwind";
    editwind.className = "logwind";
    editwind.innerHTML = ' <div style="padding: 3% 5% 1%; border-bottom: 1px grey dotted">' +
        ' <p style="color: black; font-size:17px"> <b> Редагування </b> ' +

        '</p></div>' +
        '<img src="images/instruction.png" class="img">' +
        '<img src="images/contour.png" class="img" id="body"> ' +
        '<div style="padding: 3%; border-top: 1px grey dotted">' +
        '<button type="submit" class="submit">Зберегти</button>' +

        '</div>';

    editsite.append(editwind);
    back.append(editsite);

    // ============= adding organs ================
    var image = document.createElement('img');
    image.src = "../images/stomach1.png";
    image.style.position = 'absolute';
    image.style.top = '270px';
    image.style.left = '291px';
    image.style.zIndex = '4';
    image.style.width = '50px';
    $('#body').append(image);
    // ============================================

    $('#body').click(function (e) {
        e.preventDefault();
        if ($('#toolwindow')) {
            $('#toolwindow').remove();
        }
        var $window = document.createElement('form');
        var x = e.clientX,
            y = e.clientY;
        $window.innerHTML = ' <p style = "background-color: #30a2f0; color:  white; text-align: center; padding-top: 5px; padding-bottom: 5px" >' +
            '<b> Зміна стану органа "" </b></p >' +
            '<p> <input name = "condition" type = "radio" value = "notForSale" id = "notForSale" > Не продається </p>' +
            '<p> <input name = "condition" type = "radio" value = "isForSale" id = "newBlock" > Продається </p>' +
            '<div id = "twoFields" style = "display: none">' +
            '<p> Введіть нову ціну </p> <p style = "padding-bottom: 30px"> <input> </p>' +
            '</div>' +
            '<p> <input name = "condition" type = "radio" value = "sold" id = "attention"> Продано </p>' +
            '<p id = "attTexts" style = "color: red; display: none" > Ця дія невідворотня! </p>' +
            '<p> <input type = "submit" value = "Зберегти" style = "margin-bottom: 0.8em"> </p>';
        $window.style.left = x + 'px';
        $window.style.top = y + 'px';
        $window.id = "toolwindow";
        $('#editwind').append($window);
        /* $window.submit(function (e) {
             e.preventDefault();
             db.updateUser(ourUser);
         });


    });
    $(document).mouseup(function (e) {
        var logwind = $('.logwind');
        if (logwind.has(e.target).length === 0) {
            back.empty();
            back.id = "pro-logsite";
        }
    });
});

$("#newBlock").on("click", function () {
    $("#twoFields").css("display", "initial");
    $("#attTexts").css("display", "none");
});

$("#notForSale").on("click", function () {
    $("#twoFields").css("display", "none");
    $("#attTexts").css("display", "none");
});

$("#attention").on("click", function () {
    $("#twoFields").css("display", "none");
    $("#attTexts").css("display", "initial");
});
/*
var ourUser;
if (ourUser.stomach > 0) {
    var image = document.createElement('img');
    image.src = "../images/stomach1.png";
    image.style.position = 'absolute';
    image.style.top = '270px';
    image.style.left = '291px';
    $('#body').append(image);
}
if (ourUser.stomach == 0) {
    var image = document.createElement('img');
    image.src = "../images/stomach2.png";
    image.style.position = 'absolute';
    image.style.top = '270px';
    image.style.left = '291px';
    $('#body').append(image);
}
if (ourUser.brain > 0) {
    var image = document.createElement('img');
    image.src = "../images/brain1.png";
    image.style.position = 'absolute';
    image.style.top = '261px';
    image.style.left = '56px';
    $('#body').append(image);
}
if (ourUser.brain == 0) {
    var image = document.createElement('img');
    image.src = "../images/brain2.png";
    image.style.position = 'absolute';
    image.style.top = '261px';
    image.style.left = '56px';
    $('#body').append(image);
}
if (ourUser.leftkidney > 0) {
    var image = document.createElement('img');
    image.src = "../images/leftKidney1.png";
    image.style.position = 'absolute';
    image.style.top = ' 309px';
    image.style.left = '332px';
    $('#body').append(image);
}
if (ourUser.leftkidney == 0) {
    var image = document.createElement('img');
    image.src = "../images/leftKidney2.png";
    image.style.position = 'absolute';
    image.style.top = ' 309px';
    image.style.left = '332px';
    $('#body').append(image);
}
if (ourUser.leftlung > 0) {
    var image = document.createElement('img');
    image.src = "../images/leftLung1.png";
    image.style.position = 'absolute';
    image.style.top = '300px';
    image.style.left = '180px';
    $('#body').append(image);
}
if (ourUser.leftlung == 0) {
    var image = document.createElement('img');
    image.src = "../images/leftLung2.png";
    image.style.position = 'absolute';
    image.style.top = '300px';
    image.style.left = '180px';
    $('#body').append(image);
}
if (ourUser.liver > 0) {
    var image = document.createElement('img');
    image.src = "../images/liver1.png";
    image.style.position = 'absolute';
    image.style.top = ' 236px';
    image.style.left = '288px';
    $('#body').append(image);
}
if (ourUser.liver == 0) {
    var image = document.createElement('img');
    image.src = "../images/liver2.png";
    image.style.position = 'absolute';
    image.style.top = '236px';
    image.style.left = '288px';
    $('#body').append(image);
}
if (ourUser.rightkidney > 0) {
    var image = document.createElement('img');
    image.src = "../images/rightKidney1.png";
    image.style.position = 'absolute';
    image.style.top = ' 237px';
    image.style.left = '331px';
    $('#body').append(image);
}
if (ourUser.rightkidney == 0) {
    var image = document.createElement('img');
    image.src = "../images/rightKidney2.png";
    image.style.position = 'absolute';
    image.style.top = ' 237px';
    image.style.left = '331px';
    $('#body').append(image);
}
if (ourUser.rightlung > 0) {
    var image = document.createElement('img');
    image.src = "../images/rightLung1.png";
    image.style.position = 'absolute';
    image.style.top = ' 247px';
    image.style.left = '178px';
    $('#body').append(image);
}
if (ourUser.rightlung == 0) {
    var image = document.createElement('img');
    image.src = "../images/rightLung2.png";
    image.style.position = 'absolute';
    image.style.top = ' 247px';
    image.style.left = '178px';
    $('#body').append(image);
}*/
},{}],12:[function(require,module,exports){
$(function () {

    $("#newBlock").on("click", function () {
        $("#twoFields").css("display", "initial");
        $("#attTexts").css("display", "none");
    });

    $("#notForSale").on("click", function () {
        $("#twoFields").css("display", "none");
        $("#attTexts").css("display", "none");
    });

    $("#attention").on("click", function () {
        $("#twoFields").css("display", "none");
        $("#attTexts").css("display", "initial");
    });

});
},{}],13:[function(require,module,exports){
var fotowindow = $("#pro-logsite");

$('#profile-foto').click(function () {
    var fotosite = document.createElement('div');
    fotosite.id = "logsite";
    var fotowind = document.createElement('div');
    fotowind.id = "fotowind";
    fotowind.className = "logwind";
    fotowind.innerHTML = '<span><b style = "color: black; font-size:17px; display:block"> Фото профіля </b> ' +
        '<button id="choose-file">Вибрати файл</button>' +
        '<span id="newfoto">newfoto</span></span>  ' +
        '<span id="profile-foto-edit"></span>';


    fotosite.append(fotowind);
    fotowindow.append(fotosite);
    $(document).mouseup(function (e) {
        var logwind = $('.logwind');
        if (logwind.has(e.target).length === 0) {
            loginwindow.empty();
            loginwindow.id = "pro-logsite";
        }
    });
});
},{}],14:[function(require,module,exports){
var loginwindow = $("#pro-logsite");
var api = require("./api"); // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

$("#login").click(function () {
  if (!localStorage.getItem('user')) { //  UNCOMMENT WHEN YOU`RE READY
    var logsite = document.createElement("div");
    logsite.id = "logsite";
    var logwind = document.createElement("form");
    logwind.id = "logwind";
    logwind.className = "logwind";
    logwind.innerHTML =
      '<div style = "padding: 5% 5% 2%; border-bottom: 1px grey dotted" >' +
      '<p style = "color: black; font-size:17px"> <b> Авторизація </b> </p>' +
      "</div>" +
      '<div style=" padding: 5% ">' +
      "  <span>Email</span>" +
      '<input type="text" id="input1">  </div>' +
      '   <div style=" padding: 5%"> <span>Пароль</span>' +
      '      <input type="password" id="input2">  </div>' +
      '<div id="wrong-password">Неправильний логін або пароль!</div>' +
      '<div style="padding: 5%; border-top: 1px grey dotted; display: flex">' +
      '<a href="/registration" style="color: black; margin-right: .6em;">Ще не зареєстровані?</a>' +
      '<button class="submit" id="login-submit">Увійти</button>' +
      "</div >";

    logsite.append(logwind);
    loginwindow.append(logsite);

    $("#login-submit").click(function (e) {
      e.preventDefault();
      api.loginUser($("#input1").val(), $("#input2").val(), function (error, data) {
        if (error) {
          console.log("--login failed: " + error);
          $("#wrong-password").css("display", "block");
        } else {
          localStorage.setItem('kate', JSON.stringify(data));
          alert("успішний вхід");
          console.log("--success");
          $("#login").text("Вийти");
          //  require('./main').ifUser();
          window.location.href = "/profile";
        }
      });
    });

  } else { //  UNCOMMENT WHEN YOU`RE READY
    localStorage.removeItem('user');
    $("#login").text("Увійти");
    window.location.href = "/";
  }
});
$(document).mouseup(function (e) {
  var logwind = $(".logwind");
  if (logwind.has(e.target).length === 0) {
    loginwindow.empty();
    loginwindow.id = "pro-logsite";
  }
});
},{"./api":9}],15:[function(require,module,exports){
var Templates = require('./Templates');

$(function () {
    ifUser();
    require("../complexify/jquery.complexify");
    require('./api.js');
    require('./Templates.js');
    require('./checks.js');
    require('./edit-profile.js');
    require('./editWindow.js');
    require('./fotowindow.js');
    require('./loginwindow.js');
    require('./menu.js');
    require('./oneuserbuttonclick');
    require('./users.js');
});

function ifUser() {
    if (!!localStorage.getItem('user')) {
        $('#2').css('display', 'block');
        var text = Templates.userProfile({
            user: [JSON.parse(localStorage.getItem('user'))]
        });
        $('#usercontent').html(text);
    } else {
        $('#2').css('display', 'none');
        $('#usercontent').html('<div style="font-size: 16px; margin: 16px">' +
            'Ви не авторизовані! Увійдіть до свого акаунта, щоб мати доступ до цієї сторінки.</div>');
    }
}
},{"../complexify/jquery.complexify":1,"./Templates":8,"./Templates.js":8,"./api.js":9,"./checks.js":10,"./edit-profile.js":11,"./editWindow.js":12,"./fotowindow.js":13,"./loginwindow.js":14,"./menu.js":16,"./oneuserbuttonclick":17,"./users.js":18}],16:[function(require,module,exports){
$(function () {

    if (sessionStorage.getItem("id")) {
        $("#menu #" + sessionStorage.getItem("id")).css("background-color", "#30a2f0");
        $("#menu #" + sessionStorage.getItem("id")).css("color", "#ffffff");
    } else {
        sessionStorage.setItem("id", "1");
        $("#menu #" + sessionStorage.getItem("id")).css("background-color", "#30a2f0");
        $("#menu #" + sessionStorage.getItem("id")).css("color", "#ffffff");
    }

    $('#logo').click(function () {
        sessionStorage.setItem("id", "1");
        $("#1").trigger('click');
    });

    $('.list-group-item').click(function (e) {
        $(this).addClass('active').siblings().removeClass('active');
        sessionStorage.setItem("id", $(this).attr("id"));
        console.log(sessionStorage.getItem("id"));
    });

    $(window).resize(function () {
        if ($(window).width() >= 745) {
            $('#menu').css('display', 'block');
        } else {
            $('#menu').css('display', 'none');
        }
    });

    $('#menu-open').click(function () {
        if ($('#menu').css('display') == 'block') {
            $('#menu').css('display', 'none');
        } else {
            $('#menu').css('display', 'block');
        }
    });

});
},{}],17:[function(require,module,exports){
$('.oneuserbutton').click(function () {

    // this function doesn`t work at all
    $('.oneuserbutton').css('background-color', 'red');

    if (!!localStorage.getItem('user')) {
        alert("Ви не можете писати повідомлення користувачу, доки не авторизуєтесь.");
        console.log('preserved writing by not signed up person');
    } else {
        var mailwindow = $("#pro-logsite");
        var mailsite = document.createElement('div');
        mailsite.id = "logsite";
        var mailwind = document.createElement('form');
        mailwind.id = "mailwind";
        mailwind.className = "logwind";
        mailwind.innerHTML = '<div style="border-bottom: .5px grey dotted; height: 30px; padding: 4px">Написати</div>' +
            '<div><input type="text" style="height: 80%; width: 100%"></div>' +
            '<div style="border-top: .5px grey dotted; height: 30px; padding: 4px">' +
            '<button class="submit">Надіслати</button>' +
            '</div>';
        mailsite.append(mailwind);
        mailwindow.append(mailsite);
        console.log('mailwindow appeared');
    }
    $(document).mouseup(function (e) {
        var logwind = $('#mailwind');
        if (logwind.has(e.target).length === 0) {
            loginwindow.empty();
            loginwindow.id = "pro-logsite";
        }
    });
});
},{}],18:[function(require,module,exports){
var Templates = require("./Templates");
var api = require("./api");

var $User_list = $("#userlist");

function showUserList(list) {

  function showOneUser(User) {
    var html_code = Templates.oneUser({
      user: User
    });
    var $node = $(html_code);
    $User_list.append($node);
  }

  list.forEach(showOneUser);
  console.log('--successfully showed user list');
}

$(document).ready(function () {
  var currentLocation = window.location.pathname;
  switch (currentLocation) {
    case '/users':
      api.getUserList(function (error, data) {
        if (error) {
          console.log("--not get user list in users.js.api.getUserList" + error);
        } else {
          showUserList(data);
        }
      });
      break;
    case '/offers-brain':
      api.getBList(function (error, data) {
        if (error) {
          console.log("--not get user list in users.js.api.getBList" + error);
        } else {
          showUserList(data);
        }
      });
      break;
    case '/offers-leftkidney':
      api.getLKList(function (error, data) {
        if (error) {
          console.log("--not get user list in users.js.api.getLKList" + error);
        } else {
          showUserList(data);
        }
      });
      break;
    case '/offers-rightkidney':
      api.getRKList(function (error, data) {
        if (error) {
          console.log("--not get user list in users.js.api.getRKList" + error);
        } else {
          showUserList(data);
        }
      });
      break;
    case '/offers-leftlung':
      api.getLLList(function (error, data) {
        if (error) {
          console.log("--not get user list in users.js.api.getUserList" + error);
        } else {
          showUserList(data);
        }
      });
      break;
    case '/offers-rightlung':
      api.getRLList(function (error, data) {
        if (error) {
          console.log("--not get user list in users.js.api.getUserList" + error);
        } else {
          showUserList(data);
        }
      });
      break;
    case '/offers-stomach':
      api.getSList(function (error, data) {
        if (error) {
          console.log("--not get user list in users.js.api.getUserList" + error);
        } else {
          showUserList(data);
        }
      });
      break;
    case '/offers-liver':
      api.getLList(function (error, data) {
        if (error) {
          console.log("--not get user list in users.js.api.getUserList" + error);
        } else {
          showUserList(data);
        }
      });
      break;
  }
});
},{"./Templates":8,"./api":9}]},{},[15]);
