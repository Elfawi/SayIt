// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"4nnrR":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "af599da5850bd9e5";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && ![
        'localhost',
        '127.0.0.1',
        '0.0.0.0'
    ].includes(hostname) ? 'wss' : 'ws';
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        disposedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === 'reload') fullReload();
        else if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
                await hmrApplyUpdates(assets);
                hmrDisposeQueue();
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                let processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ('reload' in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"1GgH0":[function(require,module,exports,__globalThis) {
var _formJs = require("./form.js");
// if(document.forms.length === 2 && window.location.href !== "http://127.0.0.1:5500/home.html"){
// form.checkValidationLayerOne();
// form.checkValidationLayerTwo();
// }
if (document.forms.length === 2 && window.location.href !== "http://127.0.0.1:5500/home.html") (0, _formJs.form).initForm();
//   Temporary solution
const url = window.location.href;
if (url.includes("?")) window.location.href = url.split("?")[0];
console.log(url); //////////////////

},{"./form.js":"4Q2oS"}],"4Q2oS":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "form", ()=>form);
var _userJs = require("./user.js");
var _utilitiesJs = require("./utilities.js");
var _gsapanimationsJs = require("./GSAPAnimations.js");
//////// Form Animations
let sender;
let flagOne = false;
let flagTwo = false;
class Form {
    //////// Form Animations
    #signUpButton = document.getElementById("signUp");
    #signInButton = document.getElementById("signIn");
    #container = document.getElementById("container");
    /////////////////////////////
    // From validation
    initForm() {
        this.#initFormAnimations();
        console.log(flagTwo);
    }
    ///// SIGN IN Variables
    #signInUsername = document.getElementById("signInUsername");
    #password = document.getElementById("sign-in-password");
    ///// SIGN IN END Variables
    #message = document.querySelector(".form__message");
    //// SIGN UP  => Create Account
    #createAccountForm = document.getElementById("create-account__form");
    #signInForm = document.getElementById("sign-in__form");
    #username = document.getElementById("username");
    #email = document.getElementById("email");
    #CreateAccountpassword = document.getElementById("create-account-password");
    #confirmPassword = document.getElementById("confirm-password");
    #phone = document.getElementById("phone");
    #dateOfBirth = document.getElementById("dateOfBirth");
    #gender;
    ///// SIGN UP END 
    checkValidationLayerOne() {
        this.#createAccountForm.addEventListener("submit", (e)=>{
            e.preventDefault();
            this.#gender = [
                ...document.querySelectorAll('.form__radio-input[name="gender"]')
            ].map((gender)=>gender.checked ? gender.value : null).filter((gender)=>gender !== null)[0];
            if (this.#username.value && this.#email.value && this.#CreateAccountpassword.value && this.#confirmPassword.value && this.#phone.value && this.#dateOfBirth.value && this.#gender) flagOne = true;
            else {
                if (this.#gender === '' || this.#gender === null || this.#gender === undefined) this.#renderMessageError("Check your Gender");
                if (this.#dateOfBirth.value === '' || this.#dateOfBirth.value === null || this.#dateOfBirth.value === undefined) this.#renderMessageError("Check your Date of Birth, Cannot be empty");
                if (this.#phone.value === '' || this.#phone.value === null || this.#phone.value === undefined) this.#renderMessageError("Check your Phone Number, Cannot be empty");
                if (this.#confirmPassword.value === '' || this.#confirmPassword.value === null || this.#confirmPassword.value === undefined) this.#renderMessageError("Check your Confirm Password, Cannot be empty");
                if (this.#CreateAccountpassword.value === '' || this.#CreateAccountpassword.value === null || this.#CreateAccountpassword.value === undefined) this.#renderMessageError("Check your Password, Cannot be empty");
                if (this.#email.value === '' || this.#email.value === null || this.#email.value === undefined) this.#renderMessageError("Check your Email, Cannot be empty");
                if (this.#username.value === '' || this.#username.value === null || this.#username.value === undefined) this.#renderMessageError("Check your Username, Cannot be empty");
                flagOne = false;
            }
        });
        return flagOne;
    }
    checkValidationLayerTwo() {
        let username;
        let email;
        let password;
        let confirmPassword;
        let phone;
        let dateOfBirth;
        let gender;
        this.checkValidationLayerOne();
        this.#createAccountForm.addEventListener("submit", (e)=>{
            e.preventDefault();
            dateOfBirth = this.#dateOfBirth.value;
            gender = this.#gender;
            if (this.checkValidationLayerOne()) {
                flagTwo = false;
                if (this.#username.value.trim().includes(" ")) this.#renderMessageError("Check your Username, Cannot contain spaces");
                else username = this.#username.value.trim().toLowerCase();
                if (!(0, _utilitiesJs.emailRegex).test(this.#email.value.trim())) this.#renderMessageError("Your email is not valid");
                else email = this.#email.value.trim().toLowerCase();
                if (!(0, _utilitiesJs.passwordRegex).test(this.#CreateAccountpassword.value)) this.#renderMessageError("Your password is not valid , it must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number");
                if (this.#CreateAccountpassword.value !== this.#confirmPassword.value) this.#renderMessageError("Passwords do not match");
                else password = confirmPassword = this.#CreateAccountpassword.value;
                if (!(0, _utilitiesJs.phoneRegex).test(this.#phone.value.trim())) this.#renderMessageError("Your phone number is not valid");
                else phone = this.#phone.value.trim();
                sender = new (0, _userJs.User)(username, email, password, confirmPassword, phone, dateOfBirth, gender);
                console.log(sender.getUserData());
            // if(username && email && password && confirmPassword && phone && dateOfBirth && gender){
            //         flagTwo = true;
            //         sender = new User(username,email,password,confirmPassword,phone,dateOfBirth,gender);
            //         console.log(sender.getUserData());
            //         this.#renderMessageSuccess("Account Created Successfuly");
            //         // setTimeout(() => {
            //         //     e.target.submit();
            //         // }, 2000);
            //         }
            }
        });
        return flagTwo;
    }
    #showPassword() {
        const showIconSignUp = document.querySelector(".show-password");
        const showIconLogin = document.querySelector(".show-password-login");
        const showConfirmPassword = document.querySelector(".show-confirm-password");
        showIconSignUp.addEventListener("click", ()=>{
            (0, _utilitiesJs.togglePasswordVisibility)(showIconSignUp);
            if (this.#CreateAccountpassword.type === "password") this.#CreateAccountpassword.type = "text";
            else this.#CreateAccountpassword.type = "password";
        });
        showConfirmPassword.addEventListener("click", ()=>{
            (0, _utilitiesJs.togglePasswordVisibility)(showConfirmPassword);
            if (this.#confirmPassword.type === "password") this.#confirmPassword.type = "text";
            else this.#confirmPassword.type = "password";
        });
        showIconLogin.addEventListener("click", ()=>{
            (0, _utilitiesJs.togglePasswordVisibility)(showIconLogin);
            if (this.#password.type === "password") this.#password.type = "text";
            else this.#password.type = "password";
        });
    }
    #initFormAnimations() {
        this.#signUpButton.addEventListener("click", ()=>{
            container.classList.add("right-panel-active");
            (0, _gsapanimationsJs.animateFormTitle)(".form__title-sign-up", 0.3);
            (0, _gsapanimationsJs.animateFormTitle)(".overlay-title-right", 0.3);
        });
        this.#signInButton.addEventListener("click", ()=>{
            container.classList.remove("right-panel-active");
            (0, _gsapanimationsJs.animateFormTitle)(".form__title-login", 0);
            (0, _gsapanimationsJs.animateFormTitle)(".overlay-title-left", 0);
            (0, _gsapanimationsJs.fadeUp)(".overlay-subtitle-left");
        });
        this.#showPassword();
        (0, _gsapanimationsJs.animateFormContainer)(this.#container);
        (0, _gsapanimationsJs.animateFormTitle)(".form__title-login");
        (0, _gsapanimationsJs.animateFormTitle)(".overlay-title-left");
        (0, _gsapanimationsJs.fadeUp)(".overlay-subtitle-left", '<50%');
    }
    /////////////////// SIGN UP END   => Create Account //////////////////---
    #renderMessageError(message) {
        this.#message.style.display = "block";
        this.#message.textContent = `*${message}`;
        this.#message.classList.remove("form__message-success");
        this.#message.classList.add("form__message-error");
    }
    #renderMessageSuccess(message) {
        this.#message.style.display = "block";
        this.#message.textContent = message;
        this.#message.classList.remove("form__message-error");
        this.#message.classList.add("form__message-success");
    }
}
const form = new Form(); // console.log(sender.getUserData());

},{"./user.js":"3QxmH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./utilities.js":"f4wib","./GSAPAnimations.js":"jR4Ce"}],"3QxmH":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "User", ()=>User) // export const user = new User();
;
class User {
    #id;
    #username;
    #email;
    #password;
    #confirmPassword;
    #phone;
    #dateOfBirth;
    #gender;
    constructor(username, email, password, confirmPassword, phone, dateOfBirth, gender){
        this.#username = username;
        this.#email = email;
        this.#password = password;
        this.#confirmPassword = confirmPassword;
        this.#phone = phone;
        this.#dateOfBirth = dateOfBirth;
        this.#gender = gender;
    }
    setUserData(username, email, password, confirmPassword, phone, dateOfBirth, gender) {
        this.#username = username;
        this.#email = email;
        this.#password = password;
        this.#confirmPassword = confirmPassword;
        this.#phone = phone;
        this.#dateOfBirth = dateOfBirth;
        this.#gender = gender;
    }
    getUserData() {
        return {
            username: this.#username,
            email: this.#email,
            password: this.#password,
            confirmPassword: this.#confirmPassword,
            phone: this.#phone,
            dateOfBirth: this.#dateOfBirth,
            gender: this.#gender
        };
    }
    sendMessage() {
        console.log("Message sent");
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"f4wib":[function(require,module,exports,__globalThis) {
//////////////////////////////
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "emailRegex", ()=>emailRegex);
parcelHelpers.export(exports, "phoneRegex", ()=>phoneRegex);
parcelHelpers.export(exports, "passwordRegex", ()=>passwordRegex);
parcelHelpers.export(exports, "togglePasswordVisibility", ()=>togglePasswordVisibility);
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const phoneRegex = /^(\+2)?01[0125]\d{8}$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
function togglePasswordVisibility(icon) {
    icon.classList.toggle("fa-eye-slash");
    icon.classList.toggle("fa-eye");
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jR4Ce":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "fadeUp", ()=>fadeUp);
parcelHelpers.export(exports, "animateFormTitle", ()=>animateFormTitle);
parcelHelpers.export(exports, "animateFormContainer", ()=>animateFormContainer);
const tl = gsap.timeline({
    defaults: {
        duration: 0.5,
        ease: "power3.out"
    }
});
function fadeUp(text, sync = null) {
    tl.fromTo(text, {
        y: "100%",
        opacity: 0
    }, {
        y: 0,
        opacity: 1
    }, sync);
}
function animateFormTitle(title, delay = 0.5, sync = null) {
    const text = document.querySelector(title);
    const letters = Array.from(text.textContent);
    // console.log(letters);
    text.textContent = "";
    letters.forEach((letter)=>{
        text.innerHTML += `<span class="letter">${letter}</span>`;
    });
    gsap.set(".letter", {
        display: "inline-block"
    });
    gsap.fromTo(".letter", {
        y: "100%",
        opacity: 0
    }, {
        y: 0,
        opacity: 1,
        delay: delay,
        stagger: 0.05,
        ease: "back.out(3)"
    }, sync);
}
function animateFormContainer(formContainer) {
    tl.fromTo(formContainer, {
        scale: 1.5,
        opacity: 0,
        borderRadius: 0
    }, {
        scale: 1,
        opacity: 1,
        borderRadius: "2rem",
        delay: 0.35,
        duration: 2.5,
        ease: "elastic.out(1.5, 1)"
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["4nnrR","1GgH0"], "1GgH0", "parcelRequire94c2")

//# sourceMappingURL=index.850bd9e5.js.map
