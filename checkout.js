! function r(i, s, l) {
    function d(t, e) {
        if (!s[t]) {
            if (!i[t]) {
                var n = "function" == typeof require && require;
                if (!e && n) return n(t, !0);
                if (c) return c(t, !0);
                var o = new Error("Cannot find module '" + t + "'");
                throw o.code = "MODULE_NOT_FOUND", o
            }
            var a = s[t] = {
                exports: {}
            };
            i[t][0].call(a.exports, function(e) {
                return d(i[t][1][e] || e)
            }, a, a.exports, r, i, s, l)
        }
        return s[t].exports
    }
    for (var c = "function" == typeof require && require, e = 0; e < l.length; e++) d(l[e]);
    return d
}({
    1: [function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("./common/modules");
        (function() {
            function t() {
                if (!document.getElementById("im-checkout-css")) {
                    var e = document.getElementsByTagName("head")[0],
                        t = document.createElement("style");
                    t.setAttribute("id", "im-checkout-css"), t.innerHTML = ".im-modal{overflow-y:auto}.im-modal iframe{height:100%;width:100%}@-webkit-keyframes pace-spinner{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-moz-keyframes pace-spinner{0%{-moz-transform:rotate(0deg);transform:rotate(0deg)}100%{-moz-transform:rotate(360deg);transform:rotate(360deg)}}@-o-keyframes pace-spinner{0%{-o-transform:rotate(0deg);transform:rotate(0deg)}100%{-o-transform:rotate(360deg);transform:rotate(360deg)}}@-ms-keyframes pace-spinner{0%{-ms-transform:rotate(0deg);transform:rotate(0deg)}100%{-ms-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes pace-spinner{0%{transform:rotate(0deg);transform:rotate(0deg)}100%{transform:rotate(360deg);transform:rotate(360deg)}}.iframe-container{height:100%}.iframe-container .iframe-loader-wrapper{display:none}.iframe-container .iframe{transition:all 0.2s;visibility:visible;opacity:1;height:100%;position:relative;background:none;display:block;border:0px none transparent;margin:0px;padding:0px}.iframe-container.loader .iframe-loader-wrapper{display:block;position:relative;height:100%}.iframe-container.loader .iframe-loader-wrapper .iframe-loader{display:block;position:fixed;top:50%;left:50%;margin-left:-20px;margin-top:-20px;width:40px;height:40px;border:solid 2px transparent;border-top-color:#46DF89;border-left-color:#46DF89;border-radius:40px;-webkit-animation:pace-spinner 800ms linear infinite;-moz-animation:pace-spinner 800ms linear infinite;-ms-animation:pace-spinner 800ms linear infinite;-o-animation:pace-spinner 800ms linear infinite;animation:pace-spinner 800ms linear infinite}.iframe-container.loader .iframe{visibility:hidden;opacity:0}.im-background-overlay{min-height:100%;transition:0.3s ease-out;position:fixed;top:0px;left:0px;width:100%;height:100%;background:rgba(241,244,242,0.94)}.im-checkout{max-width:300px;margin-bottom:20px}iframe{border:none !important}", e.appendChild(t)
                }
            }
            var n = o.defaultModalOptions;
            window.Instamojo = window.Instamojo || {}, o.preloadResources(), window.Instamojo.open = function(e) {
                return o.loadPaymentModal(e, t, n)
            }, window.Instamojo.close = function() {
                return o.closePaymentModal(n)
            }, window.Instamojo.configure = function(e) {
                n = o.configureOptions(e)
            }
        }).call(this)
    }, {
        "./common/modules": 4
    }],
    2: [function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = window.addEventListener ? "addEventListener" : "attachEvent";
        n.eventMethod = o;
        var a = window.removeEventListener ? "removeEventListener" : "detachEvent";
        n.removeEventMethod = a;

        function r() {
            return "attachEvent" == o
        }
        var i = r() ? "onkeydown" : "keydown";
        n.keydownEvent = i;
        var s = r() ? "onmessage" : "message";
        n.messageEvent = s;
        var l = r() ? "onload" : "load";
        n.loadEvent = l;
        var d = r() ? "onclick" : "click";
        n.clickEvent = d
    }, {}],
    3: [function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.onModalOpenHandler = function(e) {
            if ("object" == typeof e.handlers) {
                var t = e.handlers.onOpen;
                "function" == typeof t && t()
            }
        }, n.onModalCloseHandler = function(e) {
            if ("object" == typeof e.handlers) {
                var t = e.handlers.onClose;
                "function" == typeof t && t()
            }
        }, n.onPaymentSuccessHandler = function(e, t) {
            if ("object" == typeof e.handlers) {
                var n = e.handlers.onSuccess;
                "function" == typeof n && n(t)
            }
        }, n.onPaymentFailureHandler = function(e, t) {
            if ("object" == typeof e.handlers) {
                var n = e.handlers.onFailure;
                "function" == typeof n && n(t)
            }
        }
    }, {}],
    4: [function(e, t, u) {
        "use strict";
        Object.defineProperty(u, "__esModule", {
            value: !0
        });
        var r, i = e("./clientHandlers"),
            n = e("./EventUtils"),
            s = e("./utils"),
            o = e("../modal"),
            l = !1,
            a = null,
            d = !1;

        function c(e) {
            var t = e[e.message ? "message" : "data"];
            if (d || "onRequestShow" === t && (f(!0), u.freezeBackgroundScrolling(), l || (i.onModalOpenHandler(r), l = !0)), "onRequestClose" === t && m(r), "changingIframeUrl" === t && function() {
                    var e = s.getIframeContainer();
                    s.addClass(s.closest(e, ".iframe-container"), "loader"), d = !1
                }(), "object" == typeof t) {
                var n = t.status,
                    o = t.name,
                    a = t.url;
                t.paymentId ? "success" === n ? i.onPaymentSuccessHandler(r, t) : "failure" === n && i.onPaymentFailureHandler(r, t) : o && "externalRedirect" === o && (window.location.href = a)
            }
        }

        function m(e) {
            window[n.removeEventMethod](n.messageEvent, c),
                function() {
                    try {
                        document.getElementById("instamojo-viewport").remove(), a && document.head.appendChild(a)
                    } catch (e) {}
                }(), u.restoreBackgroundScrolling(), i.onModalCloseHandler(e), d = l = !1
        }

        function f(e) {
            var t = s.getIframeContainer();
            if (s.removeClass(s.closest(t, ".iframe-container"), "loader"), e) try {
                var n = document.querySelector('meta[name="viewport"]');
                (a = n ? n.cloneNode() : null) && s.remove(n);
                var o = document.createElement("meta");
                o.name = "viewport", o.content = "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no", o.id = "instamojo-viewport", document.head.appendChild(o)
            } catch (e) {}
            window.innerWidth < 640 && (s.closest(t, ".im-modal-container").style.position = "absolute", window.scrollTo(0, 0)), d = !0
        }
        u.getModalOptions = function(e) {
            var t = {
                content: '\n      <div class="im-background-overlay"></div>\n      <div class="iframe-container loader">\n        <div class="iframe-loader-wrapper">\n          <div class="iframe-loader"></div>\n        </div>\n        <iframe class="iframe" src="' + function(e) {
                    var t = r.isInternalCheckout,
                        n = r.directPaymentMode,
                        o = e + (0 < e.indexOf("?") ? "&" : "?");
                    return (t ? o + "iframe=1&embed=form" : o + "checkout=remote&iframe=1&embed=form") + (n ? "&directPaymentMode=" + n : "")
                }(e) + '" seamless id="imojo-rc-iframe"></iframe>\n      </div>\n    '
            };
            return s.isIOSDevice || (t.modalContentStyle = {
                position: "fixed",
                width: "100%",
                height: "100%"
            }), t
        }, u.preloadHandler = function() {
            var e = s.getIframeContainer();
            window[n.eventMethod](n.messageEvent, c, !1), e[n.eventMethod](n.loadEvent, function() {
                d || f(!1)
            })
        }, u.loadPaymentModal = function(e, t, n) {
            e && (r = n, t(), o.loadModal(u.getModalOptions(e)), u.preloadHandler())
        }, u.closePaymentModal = function(e) {
            o.closeModal(), m(e)
        }, u.freezeBackgroundScrolling = function() {
            document.getElementsByTagName("html")[0].style.overflowY = "hidden", s.isIOSDevice && document.body.clientHeight < 1500 && (document.getElementsByTagName("body")[0].style.height = "1500px")
        }, u.restoreBackgroundScrolling = function() {
            document.getElementsByTagName("html")[0].style.overflowY = "auto", document.getElementsByTagName("body")[0].style.height = "auto"
        }, u.defaultModalOptions = {
            isInternalCheckout: !1,
            directPaymentMode: "",
            handlers: {}
        }, u.configureOptions = function(e) {
            try {
                var t = !0;
                if (!("object" == typeof e)) return console && console.error("Invalid Options", e), u.defaultModalOptions;
                var n = e.handlers,
                    o = e.handlers,
                    a = void 0 === o ? {} : o,
                    r = a.onOpen,
                    i = void 0 === r ? function() {} : r,
                    s = a.onClose,
                    l = void 0 === s ? function() {} : s,
                    d = a.onSuccess,
                    c = void 0 === d ? function(e) {} : d,
                    m = a.onFailure;
                return (!n || "object" == typeof n) && (!n || n && "function" == typeof i) && (!n || n && "function" == typeof l) && (!n || n && "function" == typeof c) && (!n || n && "function" == typeof(void 0 === m ? function(e) {} : m)) || (t = !1), t ? e : (console && console.error("Invalid Options", e), u.defaultModalOptions)
            } catch (e) {}
        };

        function p() {
            switch (window.Instamojo.environment) {
                case "local":
                    return "http://localhost:5000";
                case "staging":
                    return "https://staging.instamojo.com";
                case "test":
                    return "https://test.instamojo.com";
                default:
                    return "https://www.instamojo.com"
            }
        }
        u.preloadResources = function() {
            if (!window.Instamojo.hasPreloadedResources) {
                window.Instamojo.hasPreloadedResources = !0;
                var e = new XMLHttpRequest;
                e.onreadystatechange = function() {
                    4 === this.readyState && 200 === this.status && function(e) {
                        for (var t = document.querySelector("head"), n = document.documentElement, o = t || n, a = 0, r = e; a < r.length; a++) {
                            var i = r[a],
                                s = document.createElement("link");
                            s.rel = "preload", -1 !== i.indexOf(".js") ? s.as = "script" : -1 !== i.indexOf(".css") && (s.as = "style"), "local" === window.Instamojo.environment ? s.href = "" + p() + i : s.href = i, o.appendChild(s)
                        }
                    }(JSON.parse(this.responseText).preload_urls)
                }, e.open("GET", p() + "/webapi/checkout-assets/"), e.send()
            }
        }
    }, {
        "../modal": 6,
        "./EventUtils": 2,
        "./clientHandlers": 3,
        "./utils": 5
    }],
    5: [function(e, t, o) {
        "use strict";
        Object.defineProperty(o, "__esModule", {
            value: !0
        }), o.isIOSDevice = /iPhone|iPad|iPod/i.test(window.navigator.userAgent), o.getIframeContainer = function() {
            return document.getElementById("imojo-rc-iframe")
        }, o.closest = function(e, t) {
            var n, o, a = e;
            for (["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"].some(function(e) {
                    return "function" == typeof document.body[e] && (n = e, !0)
                }); a;) {
                if ((o = a.parentElement) && o[n](t)) return o;
                a = o
            }
            return null
        }, o.remove = function(e) {
            return e.parentNode.removeChild(e)
        }, o.hasClass = function(e, t) {
            return e.classList ? e.classList.contains(t) : !!e.className.match(new RegExp("(\\s|^)" + t + "(\\s|$)"))
        }, o.addClass = function(e, t) {
            e.classList ? e.classList.add(t) : o.hasClass(e, t) || (e.className += " " + t)
        }, o.removeClass = function(e, t) {
            if (e.classList) e.classList.remove(t);
            else if (o.hasClass(e, t)) {
                var n = new RegExp("(\\s|^)" + t + "(\\s|$)");
                e.className = e.className.replace(n, " ")
            }
        }, o.unicodeToHtmlEntity = function(e) {
            return e.replace(/[\u00A0-\u9999<>\&]/gim, function(e) {
                return "&#" + e.charCodeAt(0) + ";"
            })
        }
    }, {}],
    6: [function(e, t, n) {
        "use strict";
        var o = this && this.__assign || function() {
            return (o = Object.assign || function(e) {
                for (var t, n = 1, o = arguments.length; n < o; n++)
                    for (var a in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                return e
            }).apply(this, arguments)
        };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var m = e("./utils"),
            a = e("../common/EventUtils");
        n.loadModal = function(e) {
            void 0 === e && (e = m.defaultOptions);
            var t = o(o({}, m.defaultOptions), e);
            r(t), i(t), s(t)
        };
        var r = function(e) {
                var t = e.modalContainerClass,
                    n = e.modalClass,
                    o = e.modalContentClass;
                if (!document.querySelector("." + t)) {
                    var a = document.querySelector("body"),
                        r = document.documentElement,
                        i = a || r,
                        s = document.createElement("div");
                    s.setAttribute("class", t), s.style.display = "none", s.innerHTML = '<div class="' + n + '"><div class="' + o + '"></div></div>', i.appendChild(s)
                }
            },
            i = function(e) {
                window[a.eventMethod](a.keydownEvent, function(e) {
                    if (27 === e.keyCode) return n.closeModal()
                }), window[a.eventMethod](a.messageEvent, function(e) {
                    if ("onRequestClose" === e[e.message ? "message" : "data"]) return n.closeModal()
                }, !1)
            },
            s = function(e) {
                var t = e.content,
                    n = e.modalClass,
                    o = e.modalContainerClass,
                    a = e.modalContainerStyle,
                    r = e.modalContentClass,
                    i = e.modalContentStyle,
                    s = e.modalStyle,
                    l = document.querySelector("." + o),
                    d = l.querySelector("." + n),
                    c = l.querySelector("." + r);
                m.applyStyles(l, a), m.applyStyles(d, s), m.applyStyles(c, i), c.innerHTML = t
            };
        n.closeModal = function() {
            var e = m.defaultOptions.modalContainerClass,
                t = m.defaultOptions.modalContentClass,
                n = document.querySelector("." + e);
            n.style.display = "none", n.querySelector("." + t).innerHTML = ""
        }
    }, {
        "../common/EventUtils": 2,
        "./utils": 7
    }],
    7: [function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.defaultOptions = {
            content: "",
            modalClass: "im-modal",
            modalContainerClass: "im-modal-container",
            modalContentClass: "im-modal-content",
            modalContainer: !1,
            modalStyle: {
                position: "relative",
                top: "0",
                left: "0",
                width: "100%",
                "max-width": "100%",
                height: "100%",
                transform: "none!important",
                margin: "0 auto",
                background: "transparent",
                "box-shadow": "none",
                "overflow-y": "visible"
            },
            modalContainerStyle: {
                position: "fixed",
                top: "0px",
                display: "block",
                left: "0px",
                height: "100%",
                width: "100%",
                background: "transparent",
                "backface-visibility": "hidden",
                "-webkit-overflow-scrolling": "touch",
                "overflow-y": "visible",
                "z-index": "10000001"
            },
            modalContentStyle: {
                width: "100%",
                height: "100%"
            }
        }, n.applyStyles = function(e, t) {
            e.style.cssText = o(t)
        };
        var o = function(o) {
            return Object.keys(o).reduce(function(e, t, n) {
                return "" + e + t + ":" + o[t] + ";"
            }, "")
        }
    }, {}]
}, {}, [1]);
//# sourceMappingURL=checkout.min.js.map