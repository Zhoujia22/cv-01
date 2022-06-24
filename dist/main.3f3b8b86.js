// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"epB2":[function(require,module,exports) {
var html = document.querySelector("#html");
var style = document.querySelector("#style");
var n = 0;
var string = "/*\u4F60\u597D\uFF0C\u6211\u662F\u5468\u67D0\n *\u6211\u65B0\u5B66\u4E86\u70B9\u4E1C\u897F\n *\u5B66\u4E60\u5B8C\u603B\u8981\u663E\u6446\u4E00\u4E0B\n *\u9996\u5148\uFF0C\u6211\u9700\u8981\u641E\u4E00\u4E2Adiv\n**/\n#div1{\n    border: 1px solid red;\n    width: 200px;\n    height: 200px;\n  }\n/*\u7136\u540E\u6211\u8981\u641E\u4E00\u4E2A\u592A\u6781\u56FE\n *\u4F17\u6240\u5468\u77E5\uFF0C\u592A\u6781\u56FE\u662F\u4E2A\u5706\u5F62\n**/\n#div1 {\n    border-radius: 50%;\n    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);\n    border:none;\n  }\n/*\u6613\u6709\u592A\u6781\uFF0C\n *\u59CB\u751F\u4E24\u4EEA\uFF0C\n**/\n#div1 {\n    background: linear-gradient(\n      90deg,\n      rgba(254, 254, 254, 1) 0%,\n      rgba(255, 255, 255, 1) 50%,\n      rgba(0, 0, 0, 1) 50%,\n      rgba(0, 0, 0, 1) 100%\n    );\n}\n/*\u4E24\u4EEA\u751F\u56DB\u8C61\uFF0C\n *\u56DB\u8C61\u751F\u516B\u5366\u3002\n**/\n#div1::before {\n    width: 100px;\n    height: 100px;\n    top: 0;\n    left: 50%;\n    transform: translateX(-50%);\n    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(254,254,254,1) 100%);\n    border-radius: 50%;\n  }\n#div1::after {\n    width: 100px;\n    height: 100px;\n    bottom: 0;\n    left: 50%;\n    transform: translateX(-50%);\n    background: radial-gradient(circle, rgba(254,254,254,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);\n    border-radius: 50%;\n  }\n  \n";
var string2 = "";
var step = function step() {
  setTimeout(function () {
    if (string[n] === "\n") {
      string2 = string2 + "<br>";
    } else if (string[n] === " ") {
      string2 = string2 + "&nbsp;";
    } else {
      string2 = string2 + string[n];
    }
    html.innerHTML = string2;
    style.innerHTML = string.substring(0, n);
    window.scroll(0, 9999);
    html.scroll(0, 9999);
    if (n < string.length - 1) {
      step();
      n = n + 1;
    }
  }, 50);
};
step();
},{}]},{},["epB2"], null)
//# sourceMappingURL=main.3f3b8b86.map