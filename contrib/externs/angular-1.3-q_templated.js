/*
 * Copyright 2014 The Closure Compiler Authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Externs for the $q service in Angular 1.3
 * @see https://docs.angularjs.org/api/ng/service/$q
 * @externs
 */

/******************************************************************************
 * $q Service
 *****************************************************************************/

/**
 * @constructor
 */
angular.$q;

/**
 * @param {!Object.<!angular.$q.Promise>|!Array.<!angular.$q.Promise>} promises
 * @return {!angular.$q.Promise.<!Object|!Array>}
 */
angular.$q.prototype.all = function(promises) {};

/**
 * @return {!angular.$q.Deferred}
 */
angular.$q.prototype.defer = function() {};

/**
 * @param {*} reason
 * @return {!angular.$q.Promise}
 */
angular.$q.prototype.reject = function(reason) {};

/**
 * @param {RESULT} value
 * @return {!angular.$q.Promise.<RESULT>}
 * @template RESULT
 */
angular.$q.prototype.when = function(value) {};

/**
 * @constructor
 * @template T
 */
angular.$q.Deferred;

/** @param {T=} opt_value */
angular.$q.Deferred.prototype.resolve = function(opt_value) {};

/** @param {*=} opt_reason */
angular.$q.Deferred.prototype.reject = function(opt_reason) {};

/** @param {*=} opt_value */
angular.$q.Deferred.prototype.notify = function(opt_value) {};

/** @type {!angular.$q.Promise.<T>} */
angular.$q.Deferred.prototype.promise;

/**
 * @constructor
 * @template T
 */
angular.$q.Promise;

/**
 * @param {?function(T): RESULT} successCallback
 * @param {?function(?)=} opt_errorCallback
 * @param {?function(?)=} opt_notifyCallback
 * @return {!angular.$q.Promise.<RESULT>}
 * @template RESULT
 */
angular.$q.Promise.prototype.then =
    function(successCallback, opt_errorCallback, opt_notifyCallback) {};

/**
 * @param {?function(?)} callback
 * @return {!angular.$q.Promise.<T>}
 */
angular.$q.Promise.prototype.catch = function(callback) {};

/**
 * @param {?function(?)} callback
 * @return {!angular.$q.Promise.<T>}
 */
angular.$q.Promise.prototype.finally = function(callback) {};

