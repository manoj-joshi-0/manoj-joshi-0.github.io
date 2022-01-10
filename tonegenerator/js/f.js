(function(sttc) {
    /* 
     
     Copyright The Closure Library Authors. 
     SPDX-License-Identifier: Apache-2.0 
    */
    var n;

    function aa(a) { var b = 0; return function() { return b < a.length ? { done: !1, value: a[b++] } : { done: !0 } } }
    var ba = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) { if (a == Array.prototype || a == Object.prototype) return a;
        a[b] = c.value; return a };

    function ca(a) { a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global]; for (var b = 0; b < a.length; ++b) { var c = a[b]; if (c && c.Math == Math) return c } throw Error("Cannot find global object"); }
    var da = ca(this),
        ea = "function" === typeof Symbol && "symbol" === typeof Symbol("x"),
        q = {},
        fa = {};

    function u(a, b) { var c = fa[b]; if (null == c) return a[b];
        c = a[c]; return void 0 !== c ? c : a[b] }

    function ha(a, b, c) { if (b) a: { var d = a.split(".");a = 1 === d.length; var e = d[0],
                f;!a && e in q ? f = q : f = da; for (e = 0; e < d.length - 1; e++) { var g = d[e]; if (!(g in f)) break a;
                f = f[g] }
            d = d[d.length - 1];c = ea && "es6" === c ? f[d] : null;b = b(c);null != b && (a ? ba(q, d, { configurable: !0, writable: !0, value: b }) : b !== c && (void 0 === fa[d] && (fa[d] = ea ? da.Symbol(d) : "$jscp$" + d), ba(f, fa[d], { configurable: !0, writable: !0, value: b }))) } }
    ha("Symbol", function(a) {
        function b(e) { if (this instanceof b) throw new TypeError("Symbol is not a constructor"); return new c("jscomp_symbol_" + (e || "") + "_" + d++, e) }

        function c(e, f) { this.g = e;
            ba(this, "description", { configurable: !0, writable: !0, value: f }) } if (a) return a;
        c.prototype.toString = function() { return this.g }; var d = 0; return b }, "es6");
    ha("Symbol.iterator", function(a) { if (a) return a;
        a = (0, q.Symbol)("Symbol.iterator"); for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) { var d = da[b[c]]; "function" === typeof d && "function" != typeof d.prototype[a] && ba(d.prototype, a, { configurable: !0, writable: !0, value: function() { return ia(aa(this)) } }) } return a }, "es6");

    function ia(a) { a = { next: a };
        a[u(q.Symbol, "iterator")] = function() { return this }; return a }

    function ja(a) { return a.raw = a }

    function w(a) { var b = "undefined" != typeof q.Symbol && u(q.Symbol, "iterator") && a[u(q.Symbol, "iterator")]; return b ? b.call(a) : { next: aa(a) } }

    function ka(a) { if (!(a instanceof Array)) { a = w(a); for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
            a = c } return a }
    var la = "function" == typeof Object.create ? Object.create : function(a) {
            function b() {}
            b.prototype = a; return new b },
        ma;
    if (ea && "function" == typeof Object.setPrototypeOf) ma = Object.setPrototypeOf;
    else { var na;
        a: { var oa = { a: !0 },
                qa = {}; try { qa.__proto__ = oa;
                na = qa.a; break a } catch (a) {}
            na = !1 }
        ma = na ? function(a, b) { a.__proto__ = b; if (a.__proto__ !== b) throw new TypeError(a + " is not extensible"); return a } : null }
    var ra = ma;

    function x(a, b) { a.prototype = la(b.prototype);
        a.prototype.constructor = a; if (ra) ra(a, b);
        else
            for (var c in b)
                if ("prototype" != c)
                    if (Object.defineProperties) { var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d) } else a[c] = b[c];
        a.cb = b.prototype }

    function sa(a, b, c) { if (null == a) throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined"); if (b instanceof RegExp) throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression"); return a + "" }
    ha("String.prototype.endsWith", function(a) { return a ? a : function(b, c) { var d = sa(this, b, "endsWith");
            void 0 === c && (c = d.length);
            c = Math.max(0, Math.min(c | 0, d.length)); for (var e = b.length; 0 < e && 0 < c;)
                if (d[--c] != b[--e]) return !1;
            return 0 >= e } }, "es6");

    function ta(a, b, c) { a instanceof String && (a = String(a)); for (var d = a.length, e = 0; e < d; e++) { var f = a[e]; if (b.call(c, f, e, a)) return { ya: e, Ka: f } } return { ya: -1, Ka: void 0 } }
    ha("Array.prototype.find", function(a) { return a ? a : function(b, c) { return ta(this, b, c).Ka } }, "es6");
    ha("String.prototype.startsWith", function(a) { return a ? a : function(b, c) { var d = sa(this, b, "startsWith"),
                e = d.length,
                f = b.length;
            c = Math.max(0, Math.min(c | 0, d.length)); for (var g = 0; g < f && c < e;)
                if (d[c++] != b[g++]) return !1;
            return g >= f } }, "es6");

    function ua(a, b) { return Object.prototype.hasOwnProperty.call(a, b) }
    var va = ea && "function" == typeof u(Object, "assign") ? u(Object, "assign") : function(a, b) { for (var c = 1; c < arguments.length; c++) { var d = arguments[c]; if (d)
                for (var e in d) ua(d, e) && (a[e] = d[e]) } return a };
    ha("Object.assign", function(a) { return a || va }, "es6");
    ha("Promise", function(a) {
        function b(g) { this.g = 0;
            this.i = void 0;
            this.h = [];
            this.C = !1; var h = this.j(); try { g(h.resolve, h.reject) } catch (k) { h.reject(k) } }

        function c() { this.g = null }

        function d(g) { return g instanceof b ? g : new b(function(h) { h(g) }) }
        if (a) return a;
        c.prototype.h = function(g) { if (null == this.g) { this.g = []; var h = this;
                this.i(function() { h.l() }) }
            this.g.push(g) };
        var e = da.setTimeout;
        c.prototype.i = function(g) { e(g, 0) };
        c.prototype.l = function() {
            for (; this.g && this.g.length;) {
                var g = this.g;
                this.g = [];
                for (var h = 0; h < g.length; ++h) {
                    var k =
                        g[h];
                    g[h] = null;
                    try { k() } catch (l) { this.j(l) }
                }
            }
            this.g = null
        };
        c.prototype.j = function(g) { this.i(function() { throw g; }) };
        b.prototype.j = function() {
            function g(l) { return function(m) { k || (k = !0, l.call(h, m)) } } var h = this,
                k = !1; return { resolve: g(this.N), reject: g(this.l) } };
        b.prototype.N = function(g) { if (g === this) this.l(new TypeError("A Promise cannot resolve to itself"));
            else if (g instanceof b) this.W(g);
            else { a: switch (typeof g) {
                    case "object":
                        var h = null != g; break a;
                    case "function":
                        h = !0; break a;
                    default:
                        h = !1 }
                h ? this.M(g) : this.s(g) } };
        b.prototype.M = function(g) { var h = void 0; try { h = g.then } catch (k) { this.l(k); return } "function" == typeof h ? this.$(h, g) : this.s(g) };
        b.prototype.l = function(g) { this.u(2, g) };
        b.prototype.s = function(g) { this.u(1, g) };
        b.prototype.u = function(g, h) { if (0 != this.g) throw Error("Cannot settle(" + g + ", " + h + "): Promise already settled in state" + this.g);
            this.g = g;
            this.i = h;
            2 === this.g && this.O();
            this.H() };
        b.prototype.O = function() { var g = this;
            e(function() { if (g.L()) { var h = da.console; "undefined" !== typeof h && h.error(g.i) } }, 1) };
        b.prototype.L =
            function() { if (this.C) return !1; var g = da.CustomEvent,
                    h = da.Event,
                    k = da.dispatchEvent; if ("undefined" === typeof k) return !0; "function" === typeof g ? g = new g("unhandledrejection", { cancelable: !0 }) : "function" === typeof h ? g = new h("unhandledrejection", { cancelable: !0 }) : (g = da.document.createEvent("CustomEvent"), g.initCustomEvent("unhandledrejection", !1, !0, g));
                g.promise = this;
                g.reason = this.i; return k(g) };
        b.prototype.H = function() { if (null != this.h) { for (var g = 0; g < this.h.length; ++g) f.h(this.h[g]);
                this.h = null } };
        var f = new c;
        b.prototype.W = function(g) { var h = this.j();
            g.ca(h.resolve, h.reject) };
        b.prototype.$ = function(g, h) { var k = this.j(); try { g.call(h, k.resolve, k.reject) } catch (l) { k.reject(l) } };
        b.prototype.then = function(g, h) {
            function k(p, t) { return "function" == typeof p ? function(v) { try { l(p(v)) } catch (B) { m(B) } } : t } var l, m, r = new b(function(p, t) { l = p;
                m = t });
            this.ca(k(g, l), k(h, m)); return r };
        b.prototype.catch = function(g) { return this.then(void 0, g) };
        b.prototype.ca = function(g, h) {
            function k() {
                switch (l.g) {
                    case 1:
                        g(l.i);
                        break;
                    case 2:
                        h(l.i);
                        break;
                    default:
                        throw Error("Unexpected state: " + l.g);
                }
            }
            var l = this;
            null == this.h ? f.h(k) : this.h.push(k);
            this.C = !0
        };
        b.resolve = d;
        b.reject = function(g) { return new b(function(h, k) { k(g) }) };
        b.race = function(g) { return new b(function(h, k) { for (var l = w(g), m = l.next(); !m.done; m = l.next()) d(m.value).ca(h, k) }) };
        b.all = function(g) {
            var h = w(g),
                k = h.next();
            return k.done ? d([]) : new b(function(l, m) {
                function r(v) { return function(B) { p[v] = B;
                        t--;
                        0 == t && l(p) } }
                var p = [],
                    t = 0;
                do p.push(void 0), t++, d(k.value).ca(r(p.length - 1), m), k = h.next();
                while (!k.done)
            })
        };
        return b
    }, "es6");
    ha("WeakMap", function(a) {
        function b(g) { this.g = (f += Math.random() + 1).toString(); if (g) { g = w(g); for (var h; !(h = g.next()).done;) h = h.value, this.set(h[0], h[1]) } }

        function c() {}

        function d(g) { var h = typeof g; return "object" === h && null !== g || "function" === h }
        if (function() { if (!a || !Object.seal) return !1; try { var g = Object.seal({}),
                        h = Object.seal({}),
                        k = new a([
                            [g, 2],
                            [h, 3]
                        ]); if (2 != k.get(g) || 3 != k.get(h)) return !1;
                    k.delete(g);
                    k.set(h, 4); return !k.has(g) && 4 == k.get(h) } catch (l) { return !1 } }()) return a;
        var e = "$jscomp_hidden_" + Math.random(),
            f = 0;
        b.prototype.set = function(g, h) { if (!d(g)) throw Error("Invalid WeakMap key"); if (!ua(g, e)) { var k = new c;
                ba(g, e, { value: k }) } if (!ua(g, e)) throw Error("WeakMap key fail: " + g);
            g[e][this.g] = h; return this };
        b.prototype.get = function(g) { return d(g) && ua(g, e) ? g[e][this.g] : void 0 };
        b.prototype.has = function(g) { return d(g) && ua(g, e) && ua(g[e], this.g) };
        b.prototype.delete = function(g) { return d(g) && ua(g, e) && ua(g[e], this.g) ? delete g[e][this.g] : !1 };
        return b
    }, "es6");
    ha("Map", function(a) {
        function b() { var h = {}; return h.K = h.next = h.head = h }

        function c(h, k) { var l = h.g; return ia(function() { if (l) { for (; l.head != h.g;) l = l.K; for (; l.next != l.head;) return l = l.next, { done: !1, value: k(l) };
                    l = null } return { done: !0, value: void 0 } }) }

        function d(h, k) {
            var l = k && typeof k;
            "object" == l || "function" == l ? f.has(k) ? l = f.get(k) : (l = "" + ++g, f.set(k, l)) : l = "p_" + k;
            var m = h.h[l];
            if (m && ua(h.h, l))
                for (h = 0; h < m.length; h++) { var r = m[h]; if (k !== k && r.key !== r.key || k === r.key) return { id: l, list: m, index: h, v: r } }
            return {
                id: l,
                list: m,
                index: -1,
                v: void 0
            }
        }

        function e(h) { this.h = {};
            this.g = b();
            this.size = 0; if (h) { h = w(h); for (var k; !(k = h.next()).done;) k = k.value, this.set(k[0], k[1]) } }
        if (function() {
                if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
                try {
                    var h = Object.seal({ x: 4 }),
                        k = new a(w([
                            [h, "s"]
                        ]));
                    if ("s" != k.get(h) || 1 != k.size || k.get({ x: 4 }) || k.set({ x: 4 }, "t") != k || 2 != k.size) return !1;
                    var l = k.entries(),
                        m = l.next();
                    if (m.done || m.value[0] != h || "s" != m.value[1]) return !1;
                    m = l.next();
                    return m.done || 4 != m.value[0].x ||
                        "t" != m.value[1] || !l.next().done ? !1 : !0
                } catch (r) { return !1 }
            }()) return a;
        var f = new q.WeakMap;
        e.prototype.set = function(h, k) { h = 0 === h ? 0 : h; var l = d(this, h);
            l.list || (l.list = this.h[l.id] = []);
            l.v ? l.v.value = k : (l.v = { next: this.g, K: this.g.K, head: this.g, key: h, value: k }, l.list.push(l.v), this.g.K.next = l.v, this.g.K = l.v, this.size++); return this };
        e.prototype.delete = function(h) {
            h = d(this, h);
            return h.v && h.list ? (h.list.splice(h.index, 1), h.list.length || delete this.h[h.id], h.v.K.next = h.v.next, h.v.next.K = h.v.K, h.v.head = null, this.size--, !0) : !1
        };
        e.prototype.clear = function() { this.h = {};
            this.g = this.g.K = b();
            this.size = 0 };
        e.prototype.has = function(h) { return !!d(this, h).v };
        e.prototype.get = function(h) { return (h = d(this, h).v) && h.value };
        e.prototype.entries = function() { return c(this, function(h) { return [h.key, h.value] }) };
        e.prototype.keys = function() { return c(this, function(h) { return h.key }) };
        e.prototype.values = function() { return c(this, function(h) { return h.value }) };
        e.prototype.forEach = function(h, k) {
            for (var l = this.entries(), m; !(m = l.next()).done;) m = m.value,
                h.call(k, m[1], m[0], this)
        };
        e.prototype[u(q.Symbol, "iterator")] = e.prototype.entries;
        var g = 0;
        return e
    }, "es6");
    ha("Set", function(a) {
        function b(c) { this.g = new q.Map; if (c) { c = w(c); for (var d; !(d = c.next()).done;) this.add(d.value) }
            this.size = this.g.size }
        if (function() {
                if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
                try {
                    var c = Object.seal({ x: 4 }),
                        d = new a(w([c]));
                    if (!d.has(c) || 1 != d.size || d.add(c) != d || 1 != d.size || d.add({ x: 4 }) != d || 2 != d.size) return !1;
                    var e = d.entries(),
                        f = e.next();
                    if (f.done || f.value[0] != c || f.value[1] != c) return !1;
                    f = e.next();
                    return f.done || f.value[0] == c || 4 != f.value[0].x ||
                        f.value[1] != f.value[0] ? !1 : e.next().done
                } catch (g) { return !1 }
            }()) return a;
        b.prototype.add = function(c) { c = 0 === c ? 0 : c;
            this.g.set(c, c);
            this.size = this.g.size; return this };
        b.prototype.delete = function(c) { c = this.g.delete(c);
            this.size = this.g.size; return c };
        b.prototype.clear = function() { this.g.clear();
            this.size = 0 };
        b.prototype.has = function(c) { return this.g.has(c) };
        b.prototype.entries = function() { return this.g.entries() };
        b.prototype.values = function() { return u(this.g, "values").call(this.g) };
        b.prototype.keys = u(b.prototype,
            "values");
        b.prototype[u(q.Symbol, "iterator")] = u(b.prototype, "values");
        b.prototype.forEach = function(c, d) { var e = this;
            this.g.forEach(function(f) { return c.call(d, f, f, e) }) };
        return b
    }, "es6");

    function wa(a, b) { a instanceof String && (a += ""); var c = 0,
            d = !1,
            e = { next: function() { if (!d && c < a.length) { var f = c++; return { value: b(f, a[f]), done: !1 } }
                    d = !0; return { done: !0, value: void 0 } } };
        e[u(q.Symbol, "iterator")] = function() { return e }; return e }
    ha("Array.prototype.findIndex", function(a) { return a ? a : function(b, c) { return ta(this, b, c).ya } }, "es6");
    ha("Array.prototype.keys", function(a) { return a ? a : function() { return wa(this, function(b) { return b }) } }, "es6");
    ha("Array.prototype.values", function(a) { return a ? a : function() { return wa(this, function(b, c) { return c }) } }, "es8");
    var y = this || self;

    function xa(a) { if (a && a != y) return ya(a.document);
        null === za && (za = ya(y.document)); return za }
    var Aa = /^[\w+/_-]+[=]{0,2}$/,
        za = null;

    function ya(a) { return (a = a.querySelector && a.querySelector("script[nonce]")) && (a = a.nonce || a.getAttribute("nonce")) && Aa.test(a) ? a : "" }

    function Ba(a) { a = a.split("."); for (var b = y, c = 0; c < a.length; c++)
            if (b = b[a[c]], null == b) return null;
        return b }

    function Ca() {}

    function Da(a) { a.la = void 0;
        a.m = function() { return a.la ? a.la : a.la = new a } }

    function Ea(a) { var b = typeof a; return "object" == b && null != a || "function" == b }

    function Fa(a) { return Object.prototype.hasOwnProperty.call(a, Ga) && a[Ga] || (a[Ga] = ++Ha) }
    var Ga = "closure_uid_" + (1E9 * Math.random() >>> 0),
        Ha = 0;

    function Ja(a, b, c) { return a.call.apply(a.bind, arguments) }

    function Ka(a, b, c) { if (!a) throw Error(); if (2 < arguments.length) { var d = Array.prototype.slice.call(arguments, 2); return function() { var e = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(e, d); return a.apply(b, e) } } return function() { return a.apply(b, arguments) } }

    function La(a, b, c) { Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? La = Ja : La = Ka; return La.apply(null, arguments) }

    function Ma(a, b) { var c = Array.prototype.slice.call(arguments, 1); return function() { var d = c.slice();
            d.push.apply(d, arguments); return a.apply(this, d) } }

    function Na(a) { var b = ["__uspapi"],
            c = y;
        b[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + b[0]); for (var d; b.length && (d = b.shift());) b.length || void 0 === a ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = a }

    function z(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.cb = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.fb = function(d, e, f) { for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++) g[h - 2] = arguments[h]; return b.prototype[e].apply(d, g) } }

    function Oa(a) { return a };
    var Pa = (new Date).getTime();
    var Qa;

    function Ra(a, b) { for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++) e in d && b.call(void 0, d[e], e, a) }

    function Sa(a, b) { for (var c = a.length, d = [], e = 0, f = "string" === typeof a ? a.split("") : a, g = 0; g < c; g++)
            if (g in f) { var h = f[g];
                b.call(void 0, h, g, a) && (d[e++] = h) }
        return d }

    function Ta(a, b) { for (var c = a.length, d = Array(c), e = "string" === typeof a ? a.split("") : a, f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a)); return d }

    function Ua(a, b) { for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a)) return !0;
        return !1 }

    function Va(a, b) { a: { for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
                if (e in d && b.call(void 0, d[e], e, a)) { b = e; break a }
            b = -1 } return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b] }

    function Wa(a, b) { a: { for (var c = "string" === typeof a ? a.split("") : a, d = a.length - 1; 0 <= d; d--)
                if (d in c && b.call(void 0, c[d], d, a)) { b = d; break a }
            b = -1 } return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b] }

    function Xa(a, b) { a: if ("string" === typeof a) a = "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
            else { for (var c = 0; c < a.length; c++)
                    if (c in a && a[c] === b) { a = c; break a }
                a = -1 } return 0 <= a };

    function Ya(a) { return function() { return !a.apply(this, arguments) } }

    function Za(a) { var b = !1,
            c; return function() { b || (c = a(), b = !0); return c } }

    function $a(a) { var b = a; return function() { if (b) { var c = b;
                b = null;
                c() } } };

    function ab(a, b) { var c = {},
            d; for (d in a) b.call(void 0, a[d], d, a) && (c[d] = a[d]); return c }

    function bb(a, b) { for (var c in a)
            if (b.call(void 0, a[c], c, a)) return !0;
        return !1 }

    function cb(a, b) { return null !== a && b in a }

    function db(a) { var b = {},
            c; for (c in a) b[c] = a[c]; return b };
    var eb;

    function fb() { if (void 0 === eb) { var a = null,
                b = y.trustedTypes; if (b && b.createPolicy) { try { a = b.createPolicy("goog#html", { createHTML: Oa, createScript: Oa, createScriptURL: Oa }) } catch (c) { y.console && y.console.error(c.message) }
                eb = a } else eb = a } return eb };

    function gb(a, b) { this.h = a === hb && b || "";
        this.g = ib }

    function jb(a) { return a instanceof gb && a.constructor === gb && a.g === ib ? a.h : "type_error:Const" }
    var ib = {},
        hb = {};
    var kb = {};

    function lb(a, b) { this.g = b === kb ? a : "" }
    lb.prototype.toString = function() { return this.g.toString() };

    function mb(a, b) { this.g = b === nb ? a : "" }

    function ob(a, b, c) { a = pb.exec(qb(a).toString()); var d = a[3] || ""; return rb(a[1] + sb("?", a[2] || "", b) + sb("#", d, c)) }
    mb.prototype.toString = function() { return this.g + "" };

    function qb(a) { return a instanceof mb && a.constructor === mb ? a.g : "type_error:TrustedResourceUrl" }

    function tb() { var a = {},
            b = jb(new gb(hb, "https://pagead2.googlesyndication.com/pagead/gen_204")); if (!ub.test(b)) throw Error("Invalid TrustedResourceUrl format: " + b); var c = b.replace(vb, function(d, e) { if (!Object.prototype.hasOwnProperty.call(a, e)) throw Error('Found marker, "' + e + '", in format string, "' + b + '", but no valid label mapping found in args: ' + JSON.stringify(a));
            d = a[e]; return d instanceof gb ? jb(d) : encodeURIComponent(String(d)) }); return rb(c) }
    var vb = /%{(\w+)}/g,
        ub = /^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^/\\]|[^:/\\%]+\/|[^:/\\%]*[?#]|about:blank#)/i,
        pb = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/,
        nb = {};

    function rb(a) { var b = fb();
        a = b ? b.createScriptURL(a) : a; return new mb(a, nb) }

    function sb(a, b, c) { if (null == c) return b; if ("string" === typeof c) return c ? a + encodeURIComponent(c) : ""; for (var d in c)
            if (Object.prototype.hasOwnProperty.call(c, d)) { var e = c[d];
                e = Array.isArray(e) ? e : [e]; for (var f = 0; f < e.length; f++) { var g = e[f];
                    null != g && (b || (b = a), b += (b.length > a.length ? "&" : "") + encodeURIComponent(d) + "=" + encodeURIComponent(String(g))) } }
        return b };

    function wb(a) { return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1] }
    var xb = /&/g,
        yb = /</g,
        zb = />/g,
        Ab = /"/g,
        Bb = /'/g,
        Cb = /\x00/g;

    function Db(a, b) { var c = 0;
        a = wb(String(a)).split(".");
        b = wb(String(b)).split("."); for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) { var f = a[e] || "",
                g = b[e] || "";
            do { f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""]; if (0 == f[0].length && 0 == g[0].length) break;
                c = Eb(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == g[1].length ? 0 : parseInt(g[1], 10)) || Eb(0 == f[2].length, 0 == g[2].length) || Eb(f[2], g[2]);
                f = f[3];
                g = g[3] } while (0 == c) } return c }

    function Eb(a, b) { return a < b ? -1 : a > b ? 1 : 0 };
    var Fb;
    a: { var Gb = y.navigator; if (Gb) { var Hb = Gb.userAgent; if (Hb) { Fb = Hb; break a } }
        Fb = "" }

    function A(a) { return -1 != Fb.indexOf(a) }

    function Ib(a) { for (var b = /(\w[\w ]+)\/([^\s]+)\s*(?:\((.*?)\))?/g, c = [], d; d = b.exec(a);) c.push([d[1], d[2], d[3] || void 0]); return c };

    function Jb() { return (A("Chrome") || A("CriOS")) && !A("Edge") }

    function Kb() {
        function a(e) { e = Va(e, d); return c[e] || "" } var b = Fb; if (A("Trident") || A("MSIE")) return Lb(b);
        b = Ib(b); var c = {};
        Ra(b, function(e) { c[e[0]] = e[1] }); var d = Ma(cb, c); return A("Opera") ? a(["Version", "Opera"]) : A("Edge") ? a(["Edge"]) : A("Edg/") ? a(["Edg"]) : Jb() ? a(["Chrome", "CriOS", "HeadlessChrome"]) : (b = b[2]) && b[1] || "" }

    function Lb(a) { var b = /rv: *([\d\.]*)/.exec(a); if (b && b[1]) return b[1];
        b = ""; var c = /MSIE +([\d\.]+)/.exec(a); if (c && c[1])
            if (a = /Trident\/(\d.\d)/.exec(a), "7.0" == c[1])
                if (a && a[1]) switch (a[1]) {
                    case "4.0":
                        b = "8.0"; break;
                    case "5.0":
                        b = "9.0"; break;
                    case "6.0":
                        b = "10.0"; break;
                    case "7.0":
                        b = "11.0" } else b = "7.0";
                else b = c[1];
        return b };

    function Mb(a, b, c) { this.g = c === Nb ? a : "" }
    Mb.prototype.toString = function() { return this.g.toString() };

    function Ob(a) { return a instanceof Mb && a.constructor === Mb ? a.g : "type_error:SafeHtml" }
    var Nb = {},
        Pb = new Mb(y.trustedTypes && y.trustedTypes.emptyHTML || "", 0, Nb);
    var Qb = Za(function() { var a = document.createElement("div"),
            b = document.createElement("div");
        b.appendChild(document.createElement("div"));
        a.appendChild(b);
        b = a.firstChild.firstChild;
        a.innerHTML = Ob(Pb); return !b.parentElement });

    function Rb(a, b) { if (Qb())
            for (; a.lastChild;) a.removeChild(a.lastChild);
        a.innerHTML = Ob(b) };
    var Sb = { "\x00": "\\0", "\b": "\\b", "\f": "\\f", "\n": "\\n", "\r": "\\r", "\t": "\\t", "\x0B": "\\x0B", '"': '\\"', "\\": "\\\\", "<": "\\u003C" },
        Tb = { "'": "\\'" };

    function Ub(a) { return String(a).replace(/\-([a-z])/g, function(b, c) { return c.toUpperCase() }) };

    function Vb() { return A("iPhone") && !A("iPod") && !A("iPad") };

    function Wb(a) { Wb[" "](a); return a }
    Wb[" "] = Ca;
    var Xb = Vb() || A("iPod"),
        Yb = A("Safari") && !(Jb() || A("Coast") || A("Opera") || A("Edge") || A("Edg/") || A("OPR") || A("Firefox") || A("FxiOS") || A("Silk") || A("Android")) && !(Vb() || A("iPad") || A("iPod"));
    var Zb = {},
        $b = null;

    function C() {}
    var ac = "function" == typeof Uint8Array;

    function E(a, b, c, d) { a.g = null;
        b || (b = []);
        a.u = void 0;
        a.j = -1;
        a.h = b;
        a: { if (b = a.h.length) {--b; var e = a.h[b]; if (!(null === e || "object" != typeof e || Array.isArray(e) || ac && e instanceof Uint8Array)) { a.l = b - a.j;
                    a.i = e; break a } }
            a.l = Number.MAX_VALUE }
        a.C = {}; if (c)
            for (b = 0; b < c.length; b++) e = c[b], e < a.l ? (e += a.j, a.h[e] = a.h[e] || bc) : (cc(a), a.i[e] = a.i[e] || bc); if (d && d.length)
            for (b = 0; b < d.length; b++) dc(a, d[b]) }
    var bc = [];

    function cc(a) { var b = a.l + a.j;
        a.h[b] || (a.i = a.h[b] = {}) }

    function F(a, b) { if (b < a.l) { b += a.j; var c = a.h[b]; return c !== bc ? c : a.h[b] = [] } if (a.i) return c = a.i[b], c === bc ? a.i[b] = [] : c }

    function ec(a, b) { a = F(a, b); return null == a ? a : !!a }

    function G(a, b, c) { a = F(a, b); return null == a ? c : a }

    function H(a, b) { return G(a, b, "") }

    function fc(a, b, c) { c = void 0 === c ? !1 : c;
        a = ec(a, b); return null == a ? c : a }

    function gc(a, b) { var c = void 0 === c ? 0 : c;
        a = F(a, b);
        a = null == a ? a : +a; return null == a ? c : a }

    function hc(a, b, c) { b < a.l ? a.h[b + a.j] = c : (cc(a), a.i[b] = c); return a }

    function dc(a, b) { for (var c, d, e = 0; e < b.length; e++) { var f = b[e],
                g = F(a, f);
            null != g && (c = f, d = g, hc(a, f, void 0)) } return c ? (hc(a, c, d), c) : 0 }

    function I(a, b, c) { a.g || (a.g = {}); if (!a.g[c]) { var d = F(a, c);
            d && (a.g[c] = new b(d)) } return a.g[c] }

    function J(a, b, c) { a.g || (a.g = {}); if (!a.g[c]) { for (var d = F(a, c), e = [], f = 0; f < d.length; f++) e[f] = new b(d[f]);
            a.g[c] = e }
        b = a.g[c];
        b == bc && (b = a.g[c] = []); return b }

    function ic(a) { if (a.g)
            for (var b in a.g)
                if (Object.prototype.hasOwnProperty.call(a.g, b)) { var c = a.g[b]; if (Array.isArray(c))
                        for (var d = 0; d < c.length; d++) c[d] && ic(c[d]);
                    else c && ic(c) }
        return a.h }
    C.prototype.s = ac ? function() {
        var a = Uint8Array.prototype.toJSON;
        Uint8Array.prototype.toJSON = function() {
            var b;
            void 0 === b && (b = 0);
            if (!$b) { $b = {}; for (var c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), d = ["+/=", "+/", "-_=", "-_.", "-_"], e = 0; 5 > e; e++) { var f = c.concat(d[e].split(""));
                    Zb[e] = f; for (var g = 0; g < f.length; g++) { var h = f[g];
                        void 0 === $b[h] && ($b[h] = g) } } }
            b = Zb[b];
            c = [];
            for (d = 0; d < this.length; d += 3) {
                var k = this[d],
                    l = (e = d + 1 < this.length) ? this[d + 1] : 0;
                h = (f = d + 2 < this.length) ? this[d + 2] : 0;
                g = k >>
                    2;
                k = (k & 3) << 4 | l >> 4;
                l = (l & 15) << 2 | h >> 6;
                h &= 63;
                f || (h = 64, e || (l = 64));
                c.push(b[g], b[k], b[l] || "", b[h] || "")
            }
            return c.join("")
        };
        try { return JSON.stringify(this.h && ic(this), jc) } finally { Uint8Array.prototype.toJSON = a }
    } : function() { return JSON.stringify(this.h && ic(this), jc) };

    function jc(a, b) { return "number" !== typeof b || !isNaN(b) && Infinity !== b && -Infinity !== b ? b : String(b) }

    function kc(a, b) { return new a(b ? JSON.parse(b) : null) };

    function lc(a) { E(this, a, mc, null) }
    z(lc, C);

    function nc(a) { E(this, a, null, null) }
    z(nc, C);
    var mc = [2, 3];

    function K(a) { a.google_ad_modifications || (a.google_ad_modifications = {}); return a.google_ad_modifications }

    function pc(a) { a = K(a); var b = a.space_collapsing || "none"; return a.remove_ads_by_default ? { sa: !0, ab: b, ia: a.ablation_viewport_offset } : null }

    function qc(a) { a = K(a);
        a.eids || (a.eids = []); return a.eids }

    function rc(a, b) { a = K(a);
        a.tag_partners = a.tag_partners || [];
        a.tag_partners.push(b) }

    function sc(a, b) { a = K(a);
        a.remove_ads_by_default = !0;
        a.space_collapsing = "slot";
        a.ablation_viewport_offset = b }

    function tc(a) { K(L).allow_second_reactive_tag = a };
    var M = {},
        uc = (M.google_ad_channel = !0, M.google_ad_client = !0, M.google_ad_host = !0, M.google_ad_host_channel = !0, M.google_adtest = !0, M.google_tag_for_child_directed_treatment = !0, M.google_tag_for_under_age_of_consent = !0, M.google_tag_partner = !0, M.google_restrict_data_processing = !0, M.google_page_url = !0, M.google_debug_params = !0, M.google_adbreak_test = !0, M.google_ad_frequency_hint = !0, M.google_admob_interstitial_slot = !0, M.google_admob_rewarded_slot = !0, M);

    function vc(a) { return !!a }

    function wc(a) { if (!(xc || vc)(a)) throw Error(String(a)); };
    var yc = {};

    function zc(a) { if (a !== yc) throw Error("Bad secret"); };

    function Ac() { var a = "undefined" !== typeof window ? window.trustedTypes : void 0; return null !== a && void 0 !== a ? a : null }
    var Bc;

    function Cc() { var a, b;
        void 0 === Bc && (Bc = null !== (b = null === (a = Ac()) || void 0 === a ? void 0 : a.createPolicy("google#safe", { createHTML: function(c) { return c }, createScript: function(c) { return c }, createScriptURL: function(c) { return c } })) && void 0 !== b ? b : null); return Bc };
    var Dc;

    function Ec() {}

    function Fc(a, b) { zc(b);
        this.g = a }
    x(Fc, Ec);
    Fc.prototype.toString = function() { return this.g.toString() };

    function Gc(a, b) { return new Fc(null !== b && void 0 !== b ? b : a, yc) }
    Gc("", null === (Dc = Ac()) || void 0 === Dc ? void 0 : Dc.emptyScript);

    function Hc(a, b) { if (!Array.isArray(a) || !Array.isArray(a.raw)) throw new TypeError(b); };

    function Ic() {}

    function Jc(a, b) { zc(b);
        this.g = a }
    x(Jc, Ic);
    Jc.prototype.toString = function() { return this.g.toString() };

    function Kc(a) { var b, c = null === (b = Cc()) || void 0 === b ? void 0 : b.createScriptURL(a); return new Jc(null !== c && void 0 !== c ? c : a, yc) }

    function Lc(a) { var b; var c; if (null === (c = Ac()) || void 0 === c || !c.isScriptURL(a))
            if (a instanceof Jc) a = a.g;
            else throw Error("wrong type");
        return (null === (b = Ac()) || void 0 === b ? 0 : b.isScriptURL(a)) ? TrustedScriptURL.prototype.toString.apply(a) : a };

    function Mc(a, b) {
        for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d];
        Hc(a, "trustedResourceUrl is a template literal tag function that only accepts template literals with or without expressions. For example, trustedResourceUrl`foo`; or trustedResourceUrl`foo${bar}`");
        if (0 === c.length) return Kc(a[0]);
        d = a[0].toLowerCase();
        if (u(d, "startsWith").call(d, "data:")) throw Error("Data URLs cannot have expressions in the template literal input.");
        if (u(d, "startsWith").call(d, "https://") || u(d, "startsWith").call(d,
                "//")) { var e = d.indexOf("//") + 2; var f = d.indexOf("/", e); if (f <= e) throw Error("Can't interpolate data in a url's origin, Please make sure to fully specify the origin, terminated with '/'."); if (!/^[0-9a-z.:-]+$/i.test(d.substring(e, f))) throw Error("The origin contains unsupported characters.");
            e = !0 } else e = !1;
        if (e = !e) { if (u(d, "startsWith").call(d, "/"))
                if ("/" === d || 1 < d.length && "/" !== d[1] && "\\" !== d[1]) e = !0;
                else throw Error("The path start in the url is invalid.");
            else e = !1;
            e = !e }
        if (e) {
            if (u(d, "startsWith").call(d,
                    "about:blank")) { if ("about:blank" !== d && !u(d, "startsWith").call(d, "about:blank#")) throw Error("The about url is invalid.");
                d = !0 } else d = !1;
            e = !d
        }
        if (e) throw Error("Trying to interpolate expressions in an unsupported url format.");
        d = [a[0]];
        for (e = 0; e < c.length; e++) d.push(encodeURIComponent(c[e])), d.push(a[e + 1]);
        return Kc(d.join(""))
    };
    var Nc = ja(["https://pagead2.googlesyndication.com/pagead/managed/js/adsense/", "/slotcar_library", ".js"]),
        Oc = ja(["https://pagead2.googlesyndication.com/pagead/js/", "/", "/slotcar_library", ".js"]),
        Pc = ja(["https://pagead2.googlesyndication.com/pagead/managed/js/adsense/", "/show_ads_impl", ".js"]),
        Qc = ja(["https://pagead2.googlesyndication.com/pagead/js/", "/", "/show_ads_impl", ".js"]),
        Rc = ja(["https://pagead2.googlesyndication.com/pagead/managed/js/adsense/", "/show_ads_impl_exp", ".js"]),
        Sc = ja(["https://pagead2.googlesyndication.com/pagead/js/",
            "/", "/show_ads_impl_exp", ".js"
        ]),
        Tc = ja(["https://pagead2.googlesyndication.com/pagead/managed/js/adsense/", "/show_ads_impl_with_ama", ".js"]),
        Uc = ja(["https://pagead2.googlesyndication.com/pagead/js/", "/", "/show_ads_impl_with_ama", ".js"]),
        Vc = ja(["https://pagead2.googlesyndication.com/pagead/managed/js/adsense/", "/show_ads_impl_instrumented", ".js"]),
        Wc = ja(["https://pagead2.googlesyndication.com/pagead/js/", "/", "/show_ads_impl_instrumented", ".js"]);
    var Xc = document,
        L = window;
    var Yc = { "120x90": !0, "160x90": !0, "180x90": !0, "200x90": !0, "468x15": !0, "728x15": !0 };

    function Zc(a, b) { if (15 == b) { if (728 <= a) return 728; if (468 <= a) return 468 } else if (90 == b) { if (200 <= a) return 200; if (180 <= a) return 180; if (160 <= a) return 160; if (120 <= a) return 120 } return null };

    function $c(a, b) { var c = void 0 === c ? {} : c;
        this.error = a;
        this.context = b.context;
        this.msg = b.message || "";
        this.id = b.id || "jserror";
        this.meta = c }

    function ad(a) { return !!(a.error && a.meta && a.id) };

    function bd(a, b, c) { a.addEventListener && a.addEventListener(b, c, !1) }

    function cd(a, b, c) { a.removeEventListener && a.removeEventListener(b, c, !1) };

    function dd(a, b) { b = String(b); "application/xhtml+xml" === a.contentType && (b = b.toLowerCase()); return a.createElement(b) }

    function ed(a) { this.g = a || y.document || document }
    ed.prototype.contains = function(a, b) { if (!a || !b) return !1; if (a.contains && 1 == b.nodeType) return a == b || a.contains(b); if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16); for (; b && a != b;) b = b.parentNode; return b == a };

    function fd() { return !gd() && (A("iPod") || A("iPhone") || A("Android") || A("IEMobile")) }

    function gd() { return A("iPad") || A("Android") && !A("Mobile") || A("Silk") };
    var hd = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;

    function id(a) { try { var b; if (b = !!a && null != a.location.href) a: { try { Wb(a.foo);
                    b = !0; break a } catch (c) {}
                b = !1 }
            return b } catch (c) { return !1 } }

    function jd(a, b, c) { var d = a.createElement("script");
        (void 0 === c ? 0 : c) && d.setAttribute("crossorigin", "anonymous");
        d.src = qb(b);
        (b = xa(d.ownerDocument && d.ownerDocument.defaultView)) && d.setAttribute("nonce", b); return (a = a.getElementsByTagName("script")[0]) && a.parentNode ? (a.parentNode.insertBefore(d, a), d) : null }

    function kd(a, b) { return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle }

    function ld(a, b) { if (!md() && !nd()) { var c = Math.random(); if (c < b) return c = od(y), a[Math.floor(c * a.length)] } return null }

    function od(a) { if (!a.crypto) return Math.random(); try { var b = new Uint32Array(1);
            a.crypto.getRandomValues(b); return b[0] / 65536 / 65536 } catch (c) { return Math.random() } }

    function pd(a, b) { if (a)
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b.call(void 0, a[c], c, a) }

    function rd(a) { var b = a.length; if (0 == b) return 0; for (var c = 305419896, d = 0; d < b; d++) c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295; return 0 < c ? c : 4294967296 + c }
    var nd = Za(function() { return Ua(["Google Web Preview", "Mediapartners-Google", "Google-Read-Aloud", "Google-Adwords"], sd) || 1E-4 > Math.random() });

    function td(a, b) { var c = -1; try { a && (c = parseInt(a.getItem(b), 10)) } catch (d) { return null } return 0 <= c && 1E3 > c ? c : null }

    function ud(a, b, c) { a = nd() ? null : Math.floor(1E3 * od(a)); var d; if (d = null != a && b) a: { var e = String(a); try { if (b) { b.setItem(c, e);
                    d = e; break a } } catch (f) {}
            d = null }
        return d ? a : null }
    var md = Za(function() { return sd("MSIE") });

    function sd(a) { return -1 != Fb.indexOf(a) }
    var vd = /^([0-9.]+)px$/,
        wd = /^(-?[0-9.]{1,30})$/;

    function xd(a) { return wd.test(a) && (a = Number(a), !isNaN(a)) ? a : null }

    function N(a) { return (a = vd.exec(a)) ? +a[1] : null }

    function yd(a, b) { for (var c = 0; 50 > c; ++c) { try { var d = !(!a.frames || !a.frames[b]) } catch (g) { d = !1 } if (d) return a;
            a: { try { var e = a.parent; if (e && e != a) { var f = e; break a } } catch (g) {}
                f = null }
            if (!(a = f)) break } return null }
    var zd = Za(function() { return fd() ? 2 : gd() ? 1 : 0 });

    function Ad(a) { var b = { display: "none" };
        a.style.setProperty ? pd(b, function(c, d) { a.style.setProperty(d, c, "important") }) : a.style.cssText = Bd(Cd(Dd(a.style.cssText), Ed(b, function(c) { return c + " !important" }))) }
    var Cd = u(Object, "assign") || function(a, b) { for (var c = 1; c < arguments.length; c++) { var d = arguments[c]; if (d)
                for (var e in d) Object.prototype.hasOwnProperty.call(d, e) && (a[e] = d[e]) } return a };

    function Ed(a, b) { var c = {},
            d; for (d in a) Object.prototype.hasOwnProperty.call(a, d) && (c[d] = b.call(void 0, a[d], d, a)); return c }

    function Bd(a) { var b = [];
        pd(a, function(c, d) { null != c && "" !== c && b.push(d + ":" + c) }); return b.length ? b.join(";") + ";" : "" }

    function Dd(a) { var b = {}; if (a) { var c = /\s*:\s*/;
            Ra((a || "").split(/\s*;\s*/), function(d) { if (d) { var e = d.split(c);
                    d = e[0];
                    e = e[1];
                    d && e && (b[d.toLowerCase()] = e) } }) } return b }
    var Fd = [];

    function Gd() { var a = Fd;
        Fd = [];
        a = w(a); for (var b = a.next(); !b.done; b = a.next()) { b = b.value; try { b() } catch (c) {} } }

    function Hd(a) { var b = void 0 === b ? window.document : b; if (a && b.head) { var c = document.createElement("meta");
            c.httpEquiv = "origin-trial";
            c.content = a;
            b.head.appendChild(c) } }

    function Id(a) { "complete" === Xc.readyState || "interactive" === Xc.readyState ? (Fd.push(a), 1 == Fd.length && (q.Promise ? q.Promise.resolve().then(Gd) : window.setImmediate ? setImmediate(Gd) : setTimeout(Gd, 0))) : Xc.addEventListener("DOMContentLoaded", a) };

    function Jd(a) { a = void 0 === a ? y : a; var b = a.context || a.AMP_CONTEXT_DATA; if (!b) try { b = a.parent.context || a.parent.AMP_CONTEXT_DATA } catch (c) {}
        try { if (b && b.pageViewId && b.canonicalUrl) return b } catch (c) {} return null }

    function Kd(a) { return (a = a || Jd()) ? id(a.master) ? a.master : null : null };

    function Ld(a, b, c) { a.google_image_requests || (a.google_image_requests = []); var d = a.document.createElement("img"); if (c) { var e = function(f) { c && c(f);
                cd(d, "load", e);
                cd(d, "error", e) };
            bd(d, "load", e);
            bd(d, "error", e) }
        d.src = b;
        a.google_image_requests.push(d) }

    function Md(a, b) { var c = "https://pagead2.googlesyndication.com/pagead/gen_204?id=" + b;
        pd(a, function(d, e) { d && (c += "&" + e + "=" + encodeURIComponent(d)) });
        Nd(c) }

    function Nd(a) { var b = window;
        b.fetch ? b.fetch(a, { keepalive: !0, credentials: "include", redirect: "follow", method: "get", mode: "no-cors" }) : Ld(b, a, null) };

    function Od() { this.i = "&";
        this.h = {};
        this.j = 0;
        this.g = [] }

    function Pd(a, b) { var c = {};
        c[a] = b; return [c] }

    function Qd(a, b, c, d, e) { var f = [];
        pd(a, function(g, h) {
            (g = Rd(g, b, c, d, e)) && f.push(h + "=" + g) }); return f.join(b) }

    function Rd(a, b, c, d, e) { if (null == a) return "";
        b = b || "&";
        c = c || ",$"; "string" == typeof c && (c = c.split("")); if (a instanceof Array) { if (d = d || 0, d < c.length) { for (var f = [], g = 0; g < a.length; g++) f.push(Rd(a[g], b, c, d + 1, e)); return f.join(c[d]) } } else if ("object" == typeof a) return e = e || 0, 2 > e ? encodeURIComponent(Qd(a, b, c, d, e + 1)) : "..."; return encodeURIComponent(String(a)) }

    function Sd(a, b, c) { b = b + "//pagead2.googlesyndication.com" + c; var d = Td(a) - c.length; if (0 > d) return "";
        a.g.sort(function(m, r) { return m - r });
        c = null; for (var e = "", f = 0; f < a.g.length; f++)
            for (var g = a.g[f], h = a.h[g], k = 0; k < h.length; k++) { if (!d) { c = null == c ? g : c; break } var l = Qd(h[k], a.i, ",$"); if (l) { l = e + l; if (d >= l.length) { d -= l.length;
                        b += l;
                        e = a.i; break }
                    c = null == c ? g : c } }
        a = "";
        null != c && (a = e + "trn=" + c); return b + a }

    function Td(a) { var b = 1,
            c; for (c in a.h) b = c.length > b ? c.length : b; return 3997 - b - a.i.length - 1 };

    function Ud(a, b, c, d, e, f) { if ((d ? a.g : Math.random()) < (e || .01)) try { if (c instanceof Od) var g = c;
            else g = new Od, pd(c, function(k, l) { var m = g,
                    r = m.j++;
                k = Pd(l, k);
                m.g.push(r);
                m.h[r] = k }); var h = Sd(g, a.h, "/pagead/gen_204?id=" + b + "&");
            h && ("undefined" !== typeof f ? Ld(y, h, void 0 === f ? null : f) : Ld(y, h, null)) } catch (k) {} };
    var Vd;

    function Wd() {}

    function Xd(a, b) { zc(b);
        this.g = a }
    x(Xd, Wd);
    Xd.prototype.toString = function() { return this.g.toString() };
    var Yd = null === (Vd = Ac()) || void 0 === Vd ? void 0 : Vd.emptyHTML;
    new Xd(null !== Yd && void 0 !== Yd ? Yd : "", yc);

    function Zd() {}

    function $d(a, b) { zc(b);
        this.g = a }
    x($d, Zd);
    $d.prototype.toString = function() { return this.g };
    new $d("about:blank", yc);
    new $d("about:invalid#zTSz", yc);

    function ae(a) { be(); var b = fb();
        a = b ? b.createHTML(a) : a; return new Mb(a, null, Nb) }
    var be = Ca;

    function ce(a, b) { if (a)
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b.call(void 0, a[c], c, a) }

    function de(a) { return !(!a || !a.call) && "function" === typeof a }

    function ee(a) { var b = void 0 === b ? 1 : b;
        a = Kd(Jd(a)) || a;
        a.google_unique_id = (a.google_unique_id || 0) + b; return a.google_unique_id }

    function fe(a) { a = a.google_unique_id; return "number" === typeof a ? a : 0 }

    function ge(a) { a = Kd(Jd(a)) || a;
        a = a.google_unique_id; return "number" === typeof a ? a : 0 }
    var he = !!window.google_async_iframe_id,
        ie = he && window.parent || window;

    function je() { if (he && !id(ie)) { var a = "." + Xc.domain; try { for (; 2 < a.split(".").length && !id(ie);) Xc.domain = a = a.substr(a.indexOf(".") + 1), ie = window.parent } catch (b) {}
            id(ie) || (ie = window) } return ie }
    var ke = /(^| )adsbygoogle($| )/;

    function le() { var a = void 0 === a ? L : a; if (!a) return !1; try { return !(!a.navigator.standalone && !a.top.navigator.standalone) } catch (b) { return !1 } }

    function me(a) { a = a.top; return id(a) ? a : null };

    function ne(a, b) { if (!a) return !1;
        a = a.hash; if (!a || !a.indexOf) return !1; if (-1 != a.indexOf(b)) return !0;
        b = oe(b); return "go" != b && -1 != a.indexOf(b) ? !0 : !1 }

    function oe(a) { var b = "";
        ce(a.split("_"), function(c) { b += c.substr(0, 2) }); return b };

    function pe(a) { E(this, a, qe, re) }
    z(pe, C);
    var qe = [2, 8],
        re = [
            [3, 4, 5],
            [6, 7]
        ];

    function se(a) { return null != a ? !a : a }

    function te(a, b) { for (var c = !1, d = 0; d < a.length; d++) { var e = a[d].call(); if (e == b) return e;
            null == e && (c = !0) } if (!c) return !b }

    function ue(a, b) { var c = J(a, pe, 2); if (!c.length) return ve(a, b);
        a = G(a, 1, 0); if (1 == a) return se(ue(c[0], b));
        c = Ta(c, function(d) { return function() { return ue(d, b) } }); switch (a) {
            case 2:
                return te(c, !1);
            case 3:
                return te(c, !0) } }

    function ve(a, b) {
        var c = dc(a, re[0]);
        a: { switch (c) {
                case 3:
                    var d = G(a, 3, 0); break a;
                case 4:
                    d = G(a, 4, 0); break a;
                case 5:
                    d = G(a, 5, 0); break a }
            d = void 0 }
        if (d && (b = (b = b[c]) && b[d])) {
            try { var e = b.apply(null, F(a, 8)) } catch (f) { return }
            b = G(a, 1, 0);
            if (4 == b) return !!e;
            d = null != e;
            if (5 == b) return d;
            if (12 == b) a = H(a, 7);
            else a: { switch (c) {
                    case 4:
                        a = gc(a, 6); break a;
                    case 5:
                        a = H(a, 7); break a }
                a = void 0 }
            if (null != a) {
                if (6 == b) return e === a;
                if (9 == b) return 0 == Db(e, a);
                if (d) switch (b) {
                    case 7:
                        return e < a;
                    case 8:
                        return e > a;
                    case 12:
                        return (new RegExp(a)).test(e);
                    case 10:
                        return -1 == Db(e, a);
                    case 11:
                        return 1 == Db(e, a)
                }
            }
        }
    }

    function we(a, b) { return !a || !(!b || !ue(a, b)) };
    var xe = null;

    function ye(a, b) { b = void 0 === b ? [] : b; var c = !1;
        y.google_logging_queue || (c = !0, y.google_logging_queue = []);
        y.google_logging_queue.push([a, b]); if (a = c) { if (null == xe) { xe = !1; try { var d = me(y);
                    d && -1 !== d.location.hash.indexOf("google_logging") && (xe = !0);
                    y.localStorage.getItem("google_logging") && (xe = !0) } catch (e) {} }
            a = xe }
        a && (d = y.document, a = rb(jb(new gb(hb, "https://pagead2.googlesyndication.com/pagead/js/logging_library.js"))), jd(d, a)) };

    function O(a) { E(this, a, ze, null) }
    z(O, C);
    var ze = [4];
    O.prototype.getId = function() { return F(this, 3) };

    function Ae(a) { E(this, a, null, null) }
    z(Ae, C);

    function Be(a) { E(this, a, null, null) }
    z(Be, C);

    function Ce(a) { E(this, a, null, null) }
    z(Ce, C);

    function De(a) { E(this, a, Ee, null) }
    z(De, C);
    var Ee = [6, 7, 9, 10, 11];

    function Fe(a) { E(this, a, null, null) }
    z(Fe, C);

    function Ge(a) { E(this, a, null, null) }
    z(Ge, C);

    function He(a) { E(this, a, null, null) }
    z(He, C);

    function Ie(a) { E(this, a, null, null) }
    z(Ie, C);

    function Je(a) { E(this, a, null, null) }
    z(Je, C);

    function Ke(a) { this.g = a || { cookie: "" } }
    Ke.prototype.set = function(a, b, c) {
        var d = !1;
        if ("object" === typeof c) { var e = c.ib;
            d = c.jb || !1; var f = c.domain || void 0; var g = c.path || void 0; var h = c.gb }
        if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
        void 0 === h && (h = -1);
        this.g.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (g ? ";path=" + g : "") + (0 > h ? "" : 0 == h ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Date.now() + 1E3 * h)).toUTCString()) + (d ? ";secure" : "") + (null != e ? ";samesite=" +
            e : "")
    };
    Ke.prototype.get = function(a, b) { for (var c = a + "=", d = (this.g.cookie || "").split(";"), e = 0, f; e < d.length; e++) { f = wb(d[e]); if (0 == f.lastIndexOf(c, 0)) return f.substr(c.length); if (f == a) return "" } return b };

    function Le(a) { a = (a = (new Ke(a)).get("FCCDCF", "")) ? a : null; try { return a ? kc(He, a) : null } catch (b) { return null } }

    function Me(a) { return (a = Le(a)) ? I(a, Ie, 4) : null };

    function Ne(a) { E(this, a, null, null) }
    z(Ne, C);

    function Oe(a) { var b = new Ne; return hc(b, 5, a) };

    function Pe(a) { if (!a) return "";
        (a = a.toLowerCase()) && "ca-" != a.substring(0, 3) && (a = "ca-" + a); return a };
    var Qe = /^https?:\/\/(\w|-)+\.cdn\.ampproject\.(net|org)(\?|\/|$)/;

    function Re(a, b) { this.g = a;
        this.h = b }

    function Se(a, b, c) { this.url = a;
        this.g = b;
        this.za = !!c;
        this.depth = null };
    var Te = null;

    function Ue() { if (null === Te) { Te = ""; try { var a = ""; try { a = y.top.location.hash } catch (c) { a = y.location.hash } if (a) { var b = a.match(/\bdeid=([\d,]+)/);
                    Te = b ? b[1] : "" } } catch (c) {} } return Te };

    function Ve() { var a = y.performance; return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now() }

    function We() { var a = void 0 === a ? y : a; return (a = a.performance) && a.now ? a.now() : null };

    function Xe(a, b) { var c = We() || Ve();
        this.label = a;
        this.type = b;
        this.value = c;
        this.duration = 0;
        this.uniqueId = Math.random();
        this.slotId = void 0 };
    var Ye = y.performance,
        Ze = !!(Ye && Ye.mark && Ye.measure && Ye.clearMarks),
        $e = Za(function() { var a; if (a = Ze) a = Ue(), a = !!a.indexOf && 0 <= a.indexOf("1337"); return a });

    function af() { var a = bf;
        this.events = [];
        this.h = a || y; var b = null;
        a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [], this.events = a.google_js_reporting_queue, b = a.google_measure_js_timing);
        this.g = $e() || (null != b ? b : 1 > Math.random()) }

    function cf(a) { a && Ye && $e() && (Ye.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_start"), Ye.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_end")) }
    af.prototype.start = function(a, b) { if (!this.g) return null;
        a = new Xe(a, b);
        b = "goog_" + a.label + "_" + a.uniqueId + "_start";
        Ye && $e() && Ye.mark(b); return a };

    function df() { var a = ef;
        this.l = ff;
        this.h = null;
        this.j = this.D;
        this.g = void 0 === a ? null : a;
        this.i = !1 }
    n = df.prototype;
    n.Ha = function(a) { this.j = a };
    n.ma = function(a) { this.h = a };
    n.Ia = function(a) { this.i = a };
    n.ga = function(a, b, c) { try { if (this.g && this.g.g) { var d = this.g.start(a.toString(), 3); var e = b(); var f = this.g;
                b = d; if (f.g && "number" === typeof b.value) { b.duration = (We() || Ve()) - b.value; var g = "goog_" + b.label + "_" + b.uniqueId + "_end";
                    Ye && $e() && Ye.mark(g);!f.g || 2048 < f.events.length || f.events.push(b) } } else e = b() } catch (l) { f = !0; try { cf(d), f = this.j(a, new $c(l, { message: gf(l) }), void 0, c) } catch (m) { this.D(217, m) } if (f) { var h, k;
                null == (h = window.console) || null == (k = h.error) || k.call(h, l) } else throw l; } return e };
    n.Ca = function(a, b, c, d) { var e = this; return function(f) { for (var g = [], h = 0; h < arguments.length; ++h) g[h] = arguments[h]; return e.ga(a, function() { return b.apply(c, g) }, d) } };
    n.D = function(a, b, c, d, e) {
        e = e || "jserror";
        try {
            var f = new Od;
            f.g.push(1);
            f.h[1] = Pd("context", a);
            ad(b) || (b = new $c(b, { message: gf(b) }));
            if (b.msg) { var g = b.msg.substring(0, 512);
                f.g.push(2);
                f.h[2] = Pd("msg", g) }
            var h = b.meta || {};
            if (this.h) try { this.h(h) } catch (oc) {}
            if (d) try { d(h) } catch (oc) {}
            b = [h];
            f.g.push(3);
            f.h[3] = b;
            d = y;
            b = [];
            g = null;
            do { var k = d; if (id(k)) { var l = k.location.href;
                    g = k.document && k.document.referrer || null } else l = g, g = null;
                b.push(new Se(l || "", k)); try { d = k.parent } catch (oc) { d = null } } while (d && k != d);
            l = 0;
            for (var m =
                    b.length - 1; l <= m; ++l) b[l].depth = m - l;
            k = y;
            if (k.location && k.location.ancestorOrigins && k.location.ancestorOrigins.length == b.length - 1)
                for (m = 1; m < b.length; ++m) { var r = b[m];
                    r.url || (r.url = k.location.ancestorOrigins[m - 1] || "", r.za = !0) }
            var p = new Se(y.location.href, y, !1);
            k = null;
            var t = b.length - 1;
            for (r = t; 0 <= r; --r) { var v = b[r];!k && Qe.test(v.url) && (k = v); if (v.url && !v.za) { p = v; break } }
            v = null;
            var B = b.length && b[t].url;
            0 != p.depth && B && (v = b[t]);
            var D = new Re(p, v);
            if (D.h) { var pa = D.h.url || "";
                f.g.push(4);
                f.h[4] = Pd("top", pa) }
            var Ia = { url: D.g.url || "" };
            if (D.g.url) { var qd = D.g.url.match(hd),
                    Lf = qd[1],
                    Mf = qd[3],
                    Nf = qd[4];
                p = "";
                Lf && (p += Lf + ":");
                Mf && (p += "//", p += Mf, Nf && (p += ":" + Nf)); var Of = p } else Of = "";
            Ia = [Ia, { url: Of }];
            f.g.push(5);
            f.h[5] = Ia;
            Ud(this.l, e, f, this.i, c)
        } catch (oc) { try { Ud(this.l, e, { context: "ecmserr", rctx: a, msg: gf(oc), url: D && D.g.url }, this.i, c) } catch (an) {} }
        return !0
    };

    function gf(a) { var b = a.toString();
        a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
        a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message); if (a.stack) { a = a.stack; try {-1 == a.indexOf(b) && (a = b + "\n" + a); for (var c; a != c;) c = a, a = a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, "$1");
                b = a.replace(/\n */g, "\n") } catch (d) {} } return b };

    function P(a) { a = void 0 === a ? "" : a; var b = Error.call(this);
        this.message = b.message; "stack" in b && (this.stack = b.stack);
        this.name = "TagError";
        this.message = a ? "adsbygoogle.push() error: " + a : "";
        Error.captureStackTrace ? Error.captureStackTrace(this, P) : this.stack = Error().stack || "" }
    x(P, Error);

    function hf() { this.g = null;
        this.i = !1;
        this.j = Math.random();
        this.h = this.D;
        this.l = null }
    n = hf.prototype;
    n.ma = function(a) { this.g = a };
    n.Ia = function(a) { this.i = a };
    n.Ha = function(a) { this.h = a };
    n.D = function(a, b, c, d, e) { if ((this.i ? this.j : Math.random()) > (void 0 === c ? .01 : c)) return !1;
        ad(b) || (b = new $c(b, { context: a, id: void 0 === e ? "jserror" : e })); if (d || this.g) b.meta = {}, this.g && this.g(b.meta), d && d(b.meta);
        y.google_js_errors = y.google_js_errors || [];
        y.google_js_errors.push(b);
        y.error_rep_loaded || (a = y.location.protocol, b = y.document, (c = this.l) || (be(), c = rb(a + "//pagead2.googlesyndication.com/pagead/js/err_rep.js")), jd(b, c), y.error_rep_loaded = !0); return !1 };
    n.ga = function(a, b, c) { try { var d = b() } catch (e) { if (!this.h(a, e, .01, c, "jserror")) throw e; } return d };
    n.Ca = function(a, b, c, d) { var e = this; return function(f) { for (var g = [], h = 0; h < arguments.length; ++h) g[h] = arguments[h]; return e.ga(a, function() { return b.apply(c, g) }, d) } };
    var ff, jf, bf = je(),
        ef = new af;

    function kf(a) { null != a && (bf.google_measure_js_timing = a);
        bf.google_measure_js_timing || (a = ef, a.g = !1, a.events != a.h.google_js_reporting_queue && ($e() && Ra(a.events, cf), a.events.length = 0)) }
    ff = new function() { var a = void 0 === a ? L : a;
        this.h = "http:" === a.location.protocol ? "http:" : "https:";
        this.g = Math.random() };
    "number" !== typeof bf.google_srt && (bf.google_srt = Math.random());
    var lf = ff,
        mf = bf.google_srt;
    0 <= mf && 1 >= mf && (lf.g = mf);
    jf = new df;
    jf.ma(function() {});
    jf.Ia(!0);
    "complete" == bf.document.readyState ? kf() : ef.g && bd(bf, "load", function() { kf() });

    function nf(a, b, c) { return jf.ga(a, b, c) }

    function of(a, b) { return jf.Ca(a, b, void 0, void 0) }

    function pf(a, b, c) { Ud(ff, a, b, !0, c, void 0) }

    function qf(a, b, c, d) { var e;
        ad(b) ? e = b.msg || gf(b.error) : e = gf(b); return 0 == e.indexOf("TagError") ? (c = b instanceof $c ? b.error : b, c.pbr || (c.pbr = !0, jf.D(a, b, .1, d, "puberror")), !1) : jf.D(a, b, c, d) };

    function rf(a, b) { try { return JSON.parse(a) } catch (c) { return b } };

    function sf() { return "r20210224" }
    var tf = /^true$/.test("false"),
        uf = /^true$/.test("false");

    function vf(a) { var b = window; var c = void 0 === c ? null : c;
        bd(b, "message", function(d) { try { var e = JSON.parse(d.data) } catch (f) { return }!e || "sc-cnf" !== e.googMsgType || c && /[:|%3A]javascript\(/i.test(d.data) && !c(e, d) || a(e, d) }) };
    var wf = { overlays: 1, interstitials: 2, vignettes: 2, inserts: 3, immersives: 4, list_view: 5 };

    function xf() { this.wasPlaTagProcessed = !1;
        this.wasReactiveAdConfigReceived = {};
        this.adCount = {};
        this.wasReactiveAdVisible = {};
        this.stateForType = {};
        this.reactiveTypeEnabledInAsfe = {};
        this.wasReactiveTagRequestSent = !1;
        this.reactiveTypeDisabledByPublisher = {};
        this.tagSpecificState = {};
        this.messageValidationEnabled = !1;
        this.floatingAdsStacking = new yf }

    function zf(a) { a.google_reactive_ads_global_state ? null == a.google_reactive_ads_global_state.floatingAdsStacking && (a.google_reactive_ads_global_state.floatingAdsStacking = new yf) : a.google_reactive_ads_global_state = new xf; return a.google_reactive_ads_global_state }

    function yf() { this.maxZIndexRestrictions = {};
        this.nextRestrictionId = 0;
        this.maxZIndexListeners = [] };

    function Af(a) { a = a.document; var b = {};
        a && (b = "CSS1Compat" == a.compatMode ? a.documentElement : a.body); return b || {} }

    function Q(a) { return Af(a).clientWidth };

    function R() { this.s = this.s;
        this.C = this.C }
    R.prototype.s = !1;
    R.prototype.i = function() { if (this.C)
            for (; this.C.length;) this.C.shift()() };

    function Bf(a, b, c) { return Cf(a, void 0 === c ? "" : c, function(d) { return Ua(J(d, nc, 2), function(e) { return F(e, 1) === b }) }) }

    function Df(a, b, c) { c = void 0 === c ? "" : c; var d = me(a) || a; return Ef(d, b) ? !0 : Cf(a, c, function(e) { return Ua(F(e, 3), function(f) { return f === b }) }) }

    function Ff(a) { return Cf(y, void 0 === a ? "" : a, function() { return !0 }) }

    function Ef(a, b) { a = (a = (a = a.location && a.location.hash) && a.match(/forced_clientside_labs=([\d,]+)/)) && a[1]; return !!a && Xa(a.split(","), b.toString()) }

    function Cf(a, b, c) { a = me(a) || a; var d = Gf(a);
        b && (b = Pe(String(b))); return bb(d, function(e, f) { return Object.prototype.hasOwnProperty.call(d, f) && (!b || b === f) && c(e) }) }

    function Gf(a) { a = Hf(a); var b = {};
        ce(a, function(c, d) { try { var e = new lc(c);
                b[d] = e } catch (f) {} }); return b }

    function Hf(a) { try { var b = a.localStorage.getItem("google_adsense_settings"); if (!b) return {}; var c = JSON.parse(b); return c !== Object(c) ? {} : ab(c, function(d, e) { return Object.prototype.hasOwnProperty.call(c, e) && "string" === typeof e && Array.isArray(d) }) } catch (d) { return {} } };

    function If() { var a = Wb(""); return /^\d+$/.test(a) ? a : "" };

    function Jf() { var a = {};
        this[3] = (a[23] = function(b) { return Bf(L, parseInt(b, 10)) }, a[24] = function(b) { return Df(L, parseInt(b, 10)) }, a);
        a = {};
        this[4] = (a[7] = function(b) { try { var c = window.localStorage } catch (f) { c = null } var d = b;
            b = window;
            d = void 0 === d ? 0 : d;
            d = 0 != d ? "google_experiment_mod" + d : "google_experiment_mod"; var e = td(c, d);
            c = null === e ? ud(b, c, d) : e; return null != c ? c : void 0 }, a);
        a = {};
        this[5] = (a[6] = If, a) }
    Da(Jf);

    function Kf(a) { E(this, a, Pf, null) }
    z(Kf, C);
    var Pf = [4];

    function Qf(a) { E(this, a, Rf, Sf) }
    z(Qf, C);

    function Tf(a) { E(this, a, null, null) }
    z(Tf, C);
    var Rf = [5],
        Sf = [
            [1, 2, 3, 6, 7]
        ];

    function Uf() { var a = {};
        this.g = (a[3] = {}, a[4] = {}, a[5] = {}, a) }
    Da(Uf);
    var Vf = /^true$/.test("false");

    function Wf(a, b) { switch (b) {
            case 1:
                return G(a, 1, 0);
            case 2:
                return G(a, 2, 0);
            case 3:
                return G(a, 3, 0);
            case 6:
                return G(a, 6, 0);
            default:
                return null } }

    function Xf(a, b) { if (!a) return null; switch (b) {
            case 1:
                return fc(a, 1);
            case 7:
                return H(a, 3);
            case 2:
                return gc(a, 2);
            case 3:
                return H(a, 3);
            case 6:
                return F(a, 4);
            default:
                return null } }
    var Yf = Za(function() { if (!Vf) return {}; try { var a = window.sessionStorage && window.sessionStorage.getItem("GGDFSSK"); if (a) return JSON.parse(a) } catch (b) {} return {} });

    function Zf(a, b, c, d) { d = void 0 === d ? 0 : d; var e = Yf(); if (null != e[b]) return e[b];
        b = $f(d)[b]; if (!b) return c;
        b = new Qf(b);
        b = ag(b);
        a = Xf(b, a); return null != a ? a : c }

    function ag(a) { var b = Uf.m().g; if (b) { var c = Wa(J(a, Tf, 5), function(d) { return we(I(d, pe, 1), b) }); if (c) return I(c, Kf, 2) } return I(a, Kf, 4) }

    function bg() { this.g = {};
        this.h = [] }
    Da(bg);

    function cg(a, b, c) { return !!Zf(1, a, void 0 === b ? !1 : b, c) }

    function dg(a, b, c) { b = void 0 === b ? 0 : b;
        a = Number(Zf(2, a, b, c)); return isNaN(a) ? b : a }

    function eg(a, b, c) { return Zf(3, a, void 0 === b ? "" : b, c) }

    function fg(a, b, c) { b = void 0 === b ? [] : b; return Zf(6, a, b, c) }

    function $f(a) { return bg.m().g[a] || (bg.m().g[a] = {}) }

    function gg(a, b) { var c = $f(b);
        pd(a, function(d, e) { return c[e] = d }) }

    function hg(a, b) { var c = $f(b);
        Ra(a, function(d) { var e = dc(d, Sf[0]);
            (e = Wf(d, e)) && (c[e] = ic(d)) }) }

    function ig(a, b) { var c = $f(b);
        Ra(a, function(d) { var e = new Qf(d),
                f = dc(e, Sf[0]);
            (e = Wf(e, f)) && (c[e] || (c[e] = d)) }) }

    function jg() { return Ta(u(Object, "keys").call(Object, bg.m().g), function(a) { return Number(a) }) }

    function kg(a) { Xa(bg.m().h, a) || gg($f(4), a) };

    function S(a) { this.methodName = a }
    var lg = new S(1),
        mg = new S(15),
        ng = new S(2),
        og = new S(3),
        pg = new S(4),
        qg = new S(5),
        rg = new S(6),
        sg = new S(7),
        tg = new S(8),
        ug = new S(9),
        vg = new S(10),
        wg = new S(11),
        xg = new S(12),
        yg = new S(13),
        zg = new S(14);

    function T(a, b, c) { c.hasOwnProperty(a.methodName) || Object.defineProperty(c, String(a.methodName), { value: b }) }

    function Ag(a, b, c) { return b[a.methodName] || c || function() {} }

    function Bg(a) { T(qg, cg, a);
        T(rg, dg, a);
        T(sg, eg, a);
        T(tg, fg, a);
        T(yg, ig, a);
        T(mg, kg, a) }

    function Cg(a) { T(pg, function(b) { Uf.m().g = b }, a);
        T(ug, function(b, c) { var d = Uf.m();
            d.g[3][b] || (d.g[3][b] = c) }, a);
        T(vg, function(b, c) { var d = Uf.m();
            d.g[4][b] || (d.g[4][b] = c) }, a);
        T(wg, function(b, c) { var d = Uf.m();
            d.g[5][b] || (d.g[5][b] = c) }, a);
        T(zg, function(b) { for (var c = Uf.m(), d = w([3, 4, 5]), e = d.next(); !e.done; e = d.next()) { var f = e.value;
                e = void 0; var g = c.g[f];
                f = b[f]; for (e in f) g[e] = f[e] } }, a) }

    function Dg(a) { a.hasOwnProperty("init-done") || Object.defineProperty(a, "init-done", { value: !0 }) };

    function Eg(a) { a = void 0 === a ? y : a; return a.ggeac || (a.ggeac = {}) };

    function Fg() { this.h = function() {};
        this.g = function() { return [] } }

    function Gg(a, b, c) { a.h = function(d) { Ag(ng, b, function() { return [] })(d, c) };
        a.g = function() { return Ag(og, b, function() { return [] })(c) } }
    Da(Fg);

    function Hg(a, b) { try { a: { var c = a.split(".");a = y; for (var d = 0, e; d < c.length; d++)
                    if (e = a, a = a[c[d]], null == a) { var f = null; break a }
                f = "function" === typeof a ? e[c[d - 1]]() : a } if (typeof f === b) return f }
        catch (g) {} }

    function Ig() {
        var a = {};
        this[3] = (a[8] = function(b) { try { return null != Ba(b) } catch (c) {} }, a[9] = function(b) { try { var c = Ba(b) } catch (d) { return } if (b = "function" === typeof c) c = c && c.toString && c.toString(), b = "string" === typeof c && -1 != c.indexOf("[native code]"); return b }, a[10] = function() { return window == window.top }, a[6] = function(b) { return Xa(Fg.m().g(), parseInt(b, 10)) }, a[27] = function(b) { b = Hg(b, "boolean"); return void 0 !== b ? b : void 0 }, a);
        a = {};
        this[4] = (a[3] = function() { return zd() }, a[6] = function(b) {
            b = Hg(b, "number");
            return void 0 !==
                b ? b : void 0
        }, a);
        a = {};
        this[5] = (a[2] = function() { return window.location.href }, a[3] = function() { try { return window.top.location.hash } catch (b) { return "" } }, a[4] = function(b) { b = Hg(b, "string"); return void 0 !== b ? b : void 0 }, a)
    }
    Da(Ig);

    function Jg(a) { E(this, a, Kg, null) }
    z(Jg, C);
    var Kg = [2];
    Jg.prototype.getId = function() { return G(this, 1, 0) };
    Jg.prototype.da = function() { return G(this, 7, 0) };

    function Lg(a) { E(this, a, Mg, null) }
    z(Lg, C);
    var Mg = [2];
    Lg.prototype.da = function() { return G(this, 5, 0) };

    function Ng(a) { E(this, a, Og, null) }
    z(Ng, C);

    function Pg(a) { E(this, a, Qg, null) }
    z(Pg, C);
    var Og = [1, 4, 2, 3],
        Qg = [2];
    Pg.prototype.da = function() { return G(this, 1, 0) };
    var Rg = [12, 13];

    function Sg() {}
    Sg.prototype.init = function(a, b, c) { var d = this;
        c = void 0 === c ? {} : c; var e = void 0 === c.xa ? !1 : c.xa,
            f = void 0 === c.Sa ? {} : c.Sa;
        c = void 0 === c.Va ? [] : c.Va;
        this.i = a;
        this.l = {};
        this.s = e;
        this.j = f;
        a = {};
        this.g = (a[b] = [], a[4] = [], a);
        this.h = {};
        (b = Ue()) && Ra(b.split(",") || [], function(g) {
            (g = parseInt(g, 10)) && (d.h[g] = !0) });
        Ra(c, function(g) { d.h[g] = !0 }); return this };

    function Tg(a, b, c) { if (a.l[b]) return .001 >= Math.random() && Md({ b: c, dp: b }, "tagging_dupdiv"), !0;
        a.l[b] = !0; return !1 }

    function Ug(a, b, c) { var d = [],
            e = Vg(a.i, b); if (9 !== b && Tg(a, b, c) || !e.length) return d; var f = Xa(Rg, b);
        Ra(e, function(g) { if (g = Wg(a, g, c)) { var h = g.getId();
                d.push(h);
                Xg(a, h, f ? 4 : c); var k = J(g, Qf, 2);
                k && (f ? Ra(jg(), function(l) { return hg(k, l) }) : hg(k, c)) } }); return d }

    function Xg(a, b, c) { a.g[c] || (a.g[c] = []);
        a = a.g[c];
        Xa(a, b) ? Md({ eids: JSON.stringify(a), dup: b }, "gpt_dupeid") : a.push(b) }

    function Yg(a, b) { a.i.push.apply(a.i, ka(Sa(Ta(b, function(c) { return new Pg(c) }), function(c) { return !Xa(Rg, c.da()) }))) }

    function Wg(a, b, c) {
        var d = Uf.m().g;
        if (!we(I(b, pe, 3), d)) return null;
        var e = J(b, Jg, 2),
            f = e.length * G(b, 1, 0),
            g = G(b, 6, 0);
        if (g) { f = d[4]; switch (c) {
                case 2:
                    var h = f[8]; break;
                case 1:
                    h = f[7] }
            c = void 0; if (h) try { c = h(g) } catch (k) {}
            return (b = Zg(b, c)) ? $g(a, [b], 1) : null }
        if (g = G(b, 10, 0)) { f = null; switch (c) {
                case 1:
                    f = d[4][9]; break;
                case 2:
                    f = d[4][10]; break;
                default:
                    return null }
            c = f ? f(String(g)) : void 0; return void 0 === c && 1 === G(b, 11, 0) ? null : (b = Zg(b, c)) ? $g(a, [b], 1) : null }
        c = d ? Sa(e, function(k) { return we(I(k, pe, 3), d) }) : e;
        return c.length ? (b =
            G(b, 4, 0)) ? ah(a, b, f, c) : $g(a, c, f / 1E3) : null
    }

    function ah(a, b, c, d) { var e = null != a.j[b] ? a.j[b] : 1E3; if (0 >= e) return null;
        d = $g(a, d, c / e);
        a.j[b] = d ? 0 : e - c; return d }

    function $g(a, b, c) { var d = a.h,
            e = Va(b, function(f) { return !!d[f.getId()] }); return e ? e : a.s ? null : ld(b, c) }

    function bh(a, b) { T(lg, function(c) { a.h[c] = !0 }, b);
        T(ng, function(c, d) { return Ug(a, c, d) }, b);
        T(og, function(c) { return (a.g[c] || []).concat(a.g[4]) }, b);
        T(xg, function(c) { return Yg(a, c) }, b) }
    Da(Sg);

    function Vg(a, b) { return (a = Va(a, function(c) { return c.da() == b })) && J(a, Lg, 2) || [] }

    function Zg(a, b) { var c = J(a, Jg, 2),
            d = c.length,
            e = G(a, 1, 0);
        a = G(a, 8, 0);
        b = void 0 !== b ? b : Math.floor(1E3 * od(window)); var f = (b - a) % d; if (b < a || b - a - f >= d * e - 1) return null;
        c = c[f];
        d = Uf.m().g; return !c || d && !we(I(c, pe, 3), d) ? null : c };

    function ch() { var a = {};
        this.g = function(b, c) { return null != a[b] ? a[b] : c };
        this.h = function(b, c) { return null != a[b] ? a[b] : c };
        this.i = function(b, c) { return null != a[b] ? a[b] : c };
        this.j = function(b, c) { return null != a[b] ? a[b] : c };
        this.l = function() {} }
    Da(ch);

    function U(a) { var b = void 0 === b ? !1 : b; return ch.m().g(a, b) }

    function dh(a, b) { b = void 0 === b ? 0 : b; return ch.m().h(a, b) }

    function eh(a) { var b = void 0 === b ? "" : b; return ch.m().i(a, b) }

    function fh() { var a = void 0 === a ? [] : a; return ch.m().j(1932, a) };

    function gh() { this.g = function() {} }
    Da(gh);

    function hh(a) { gh.m().g(a) };

    function ih(a, b, c, d) { var e = 1;
        d = void 0 === d ? Eg() : d;
        e = void 0 === e ? 0 : e;
        d.hasOwnProperty("init-done") ? (Ag(xg, d)(Ta(J(a, Pg, 2), function(f) { return ic(f) })), Ag(yg, d)(Ta(J(a, Qf, 1), function(f) { return ic(f) }), e), b && Ag(zg, d)(b), jh(d, e)) : (bh(Sg.m().init(J(a, Pg, 2), e, c), d), Bg(d), Cg(d), Dg(d), jh(d, e), hg(J(a, Qf, 1), e), Vf = Vf || !(!c || !c.Qa), hh(Ig.m()), b && hh(b)) }

    function jh(a, b) { a = void 0 === a ? Eg() : a;
        b = void 0 === b ? 0 : b; var c = a,
            d = b;
        d = void 0 === d ? 0 : d;
        Gg(Fg.m(), c, d);
        kh(a, b);
        gh.m().g = Ag(zg, a);
        ch.m().l() }

    function kh(a, b) { b = void 0 === b ? 0 : b; var c = ch.m();
        c.g = function(d, e) { return Ag(qg, a, function() { return !1 })(d, e, b) };
        c.h = function(d, e) { return Ag(rg, a, function() { return 0 })(d, e, b) };
        c.i = function(d, e) { return Ag(sg, a, function() { return "" })(d, e, b) };
        c.j = function(d, e) { return Ag(tg, a, function() { return [] })(d, e, b) };
        c.l = function() { Ag(mg, a)(b) } };

    function lh(a) { var b = K(a); if (b.plle) jh(Eg(a), 1);
        else { b.plle = !0; try { var c = a.localStorage } catch (d) { c = null }
            b = c;
            null == td(b, "goog_pem_mod") && ud(a, b, "goog_pem_mod");
            b = rf("[[[null,62,null,[null,0.001]],[null,1010,null,[null,1]],[null,1044,null,[null,50]],[350,null,null,[1]],[365,null,null,[1]],[1011,null,null,[1]],[null,1017,null,[null,-1]],[225,null,null,[1]],[1915,null,null,[1]],[1006,null,null,[1]],[1047,null,null,[1]],[1020,null,null,[1]],[375,null,null,[1]],[1012,null,null,[1]],[1016,null,null,[1]],[1022,null,null,[1]],[209,null,null,[1]],[205,null,null,[1]],[null,29,null,[null,2]],[null,30,null,[null,3]],[210,null,null,[1]],[211,null,null,[1]],[1931,null,null,[1]],[null,null,1924,[null,null,\"A3HucHUo1oW9s+9kIKz8mLkbcmdaj5lxt3eiIMp1Nh49dkkBlg1Fhg4Fd\/r0vL69mRRA36YutI9P\/lJUfL8csQoAAACFeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjI2MjIwNzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==\"]],[1007,null,null,[1]],[1028,null,null,[1]],[207,null,null,[1]],[370,null,null,[1]],[null,1008,null,[null,2]],[null,63,null,[null,30]],[null,1034,null,[]],[null,1027,null,[null,10]],[null,57,null,[null,120]],[null,1050,null,[null,30]],[null,58,null,[null,120]],[null,64,null,[null,300]],[215,null,null,[1]],[null,null,null,[null,null,null,[\"A+pvvGjoiNPDAn2JQFsT0CQbtlBZ8PLmAA4ReIHeP5mnOrPRuXf1nuQa1Dlu\/MdwAmPuAC7cVDJLU1oBuOqMkQkAAAB5eyJvcmlnaW4iOiJodHRwczovL2dvb2dsZWFwaS5jb206NDQzIiwiZmVhdHVyZSI6IlRydXN0VG9rZW5zIiwiZXhwaXJ5IjoxNjI2MjIwNzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==\",\"A9ZgbRtm4pU3oZiuNzOsKcC8ppFSZdcjP2qYcdQrFKVzkmiWH1kdYY1Mi9x7G8+PS8HV9Ha9Cz0gaMdKsiVZIgMAAAB7eyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2MjYyMjA3OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9\",\"AxL6oBxcpn5rQDPKSAs+d0oxNyJYq2\/4esBUh3Yx5z8QfcLu+AU8iFCXYRcr\/CEEfDnkxxLTsvXPJFQBxHfvkgMAAACBeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2MjYyMjA3OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9\",\"A9KPtG5kl3oLTk21xqynDPGQ5t18bSOpwt0w6kGa6dEWbuwjpffmdUpR3W+faZDubGT+KIk2do0BX2ca16x8qAcAAACBeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2MjYyMjA3OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9\"]],null,1932],[230,null,null,[1]],[191,null,null,[1]],[null,null,null,[null,null,null,[\"facebook[.]com\",\"whatsapp[.]com\",\"youtube[.]com\",\"google[.]com\",\"\\\\\/ads?\\\\\/\"]],null,9],[1925,null,null,[1]],[371,null,null,[1]]],[[10,[[1,[[21066649,null,[1,[[3,[[6,null,null,null,6,null,\"31060008\"],[6,null,null,null,6,null,\"31060009\"]]]]]],[21066650,[[null,null,14,[null,null,\"exp=21066650\"]]],[1,[[3,[[6,null,null,null,6,null,\"31060008\"],[6,null,null,null,6,null,\"31060009\"]]]]]],[21066651,[[null,null,14,[null,null,\"exp=21066651\"]],[null,1008,null,[null,1]]],[1,[[3,[[6,null,null,null,6,null,\"31060008\"],[6,null,null,null,6,null,\"31060009\"]]]]]],[21066652,[[1006,null,null,[]],[356,null,null,[1]],[null,null,14,[null,null,\"exp=21066652\"]],[null,1008,null,[null,1]]],[1,[[3,[[6,null,null,null,6,null,\"31060008\"],[6,null,null,null,6,null,\"31060009\"]]]]]],[21066653,[[357,null,null,[1]],[null,1008,null,[null,1]]],[1,[[3,[[6,null,null,null,6,null,\"31060008\"],[6,null,null,null,6,null,\"31060009\"]]]]]]],null,null,null,47,null,5],[null,[[21066699,null,[1,[[3,[[6,null,null,null,6,null,\"31060008\"],[6,null,null,null,6,null,\"31060009\"]]]]]],[21066700,[[1006,null,null,[1]],[375,null,null,[1]],[1028,null,null,[1]],[null,1008,null,[null,2]]],[1,[[3,[[6,null,null,null,6,null,\"31060008\"],[6,null,null,null,6,null,\"31060009\"]]]]]]],null,null,null,47,25,400],[null,[[21066792,null,[1,[[3,[[6,null,null,null,6,null,\"31060008\"],[6,null,null,null,6,null,\"31060009\"]]]]]],[21066793,null,[1,[[3,[[6,null,null,null,6,null,\"31060008\"],[6,null,null,null,6,null,\"31060009\"]]]]]]],null,null,null,47,25,400],[10,[[31060292],[31060293,[[1051,null,null,[1]]]]]],[1,[[21066108],[21066109,[[316,null,null,[1]]]]],null,null,null,34,18,1],[1,[[21066110],[21066111,[[316,null,null,[1]]]]],null,null,null,34,18,1],[1,[[42530528],[42530529,[[368,null,null,[1]]]],[42530530,[[369,null,null,[1]],[368,null,null,[1]]]]]],[150,[[42530671],[42530672,[[1004,null,null,[1]]]]]],[1,[[42530887,[[290,null,null,[1]]]],[42530888,[[290,null,null,[1]]]],[42530889,[[290,null,null,[1]]]],[42530890,[[290,null,null,[1]]]],[42530891,[[290,null,null,[1]]]],[42530892,[[290,null,null,[1]]]],[42530893,[[290,null,null,[1]]]]],null,null,null,53],[1,[[44719338],[44719339,[[334,null,null,[1]],[null,54,null,[null,100]],[null,66,null,[null,10]],[null,65,null,[null,1000]]]]]],[10,[[44731609],[44731610]]],[10,[[44737536],[44737537,[[1036,null,null,[1]]]]]],[10,[[21067213],[21067214]]],[100,[[31060287],[31060288,[[1048,null,null,[1]]]]]],[50,[[44735931],[44735932,[[1045,null,null,[1]]]]]],[50,[[44736376],[44736377,[[1047,null,null,[1]]]]]],[50,[[44736524],[44736525,[[null,57,null,[null,180]],[null,58,null,[null,180]]]]]],[10,[[44737561],[44737562,[[null,1050,null,[null,40]]]],[44737563,[[null,1050,null,[null,50]]]],[44737564,[[null,1050,null,[null,60]]]]]],[1,[[21067422,null,[1,[[12,null,null,null,2,null,\"\\\\.wiki(dogs|how)(-fun)?\\\\.\"]]]],[21067423,[[233,null,null,[1]],[232,null,null,[1]]],[1,[[12,null,null,null,2,null,\"\\\\.wiki(dogs|how)(-fun)?\\\\.\"]]]]]],[1,[[21067424,null,[1,[[12,null,null,null,2,null,\"\\\\.wiki(dogs|how)(-fun)?\\\\.\"]]]],[21067425,[[1002,null,null,[1]]],[1,[[12,null,null,null,2,null,\"\\\\.wiki(dogs|how)(-fun)?\\\\.\"]]]]]],[20,[[182982000,[[218,null,null,[1]]],[1,[[12,null,null,null,2,null,\"\\\\.wiki(dogs|how)(-fun)?\\\\.\"]]]],[182982100,[[217,null,null,[1]]],[1,[[12,null,null,null,2,null,\"\\\\.wiki(dogs|how)(-fun)?\\\\.\"]]]]],null,null,null,36,8,1],[20,[[182982200,null,[1,[[12,null,null,null,2,null,\"\\\\.wiki(dogs|how)(-fun)?\\\\.\"]]]],[182982300,null,[1,[[12,null,null,null,2,null,\"\\\\.wiki(dogs|how)(-fun)?\\\\.\"]]]]],null,null,null,36,8,1],[10,[[182984000,null,[4,null,23,null,null,null,null,[\"1\"]]],[182984100,[[218,null,null,[1]]],[4,null,23,null,null,null,null,[\"1\"]]]],null,null,null,37,10,1],[10,[[182984200,null,[4,null,23,null,null,null,null,[\"1\"]]],[182984300,null,[4,null,23,null,null,null,null,[\"1\"]]]],null,null,null,37,10,1],[10,[[21066428],[21066429]]],[10,[[21066430],[21066431],[21066432],[21066433]],null,null,null,44,22],[10,[[21066434],[21066435]],null,null,null,44,null,500],[30,[[21066922],[21066923,[[325,null,null,[1]]]]],null,23],[1,[[21067569],[21067570,[[1019,null,null,[1]]]]]],[100,[[21068083],[21068084,[[1025,null,null,[1]]]]]],[10,[[21068108],[21068109,[[1026,null,null,[1]]]]]],[50,[[21068495],[21068496,[[1009,null,null,[1]]]]]],[50,[[21068944],[21068945,[[1029,null,null,[1]]]],[21068946,[[1029,null,null,[1]],[1030,null,null,[1]]]]]],[10,[[21068999],[21069000,[[1039,null,null,[1]]]]]],[500,[[31060004,null,[2,[[12,null,null,null,4,null,\"Android\",[\"navigator.userAgent\"]],[12,null,null,null,4,null,\"Chrome\/(89|9\\\\d|\\\\d{3,})\",[\"navigator.userAgent\"]]]]],[31060005,[[1928,null,null,[1]]],[2,[[12,null,null,null,4,null,\"Android\",[\"navigator.userAgent\"]],[12,null,null,null,4,null,\"Chrome\/(89|9\\\\d|\\\\d{3,})\",[\"navigator.userAgent\"]]]]]]],[1000,[[31060008,[[null,null,14,[null,null,\"exp=31060008\"]]],[6,null,null,null,6,null,\"31060008\"]],[31060009,[[null,null,14,[null,null,\"exp=31060009\"]]],[6,null,null,null,6,null,\"31060009\"]]]],[10,[[31060030],[31060031,[[1928,null,null,[1]]]]]],[1,[[31060138],[31060139,[[1043,null,null,[1]]]]]],[1,[[44736076],[44736077,[[null,1046,null,[null,0.01]]]]]],[null,[[44737458],[44737459,[[310,null,null,[1]]]]]]]],[12,[[10,[[44738206],[44738207,[[1925,null,null,[]]]]]],[20,[[21065724],[21065725,[[203,null,null,[1]]]]],[4,null,9,null,null,null,null,[\"LayoutShift\"]]],[1,[[21065784]]],[1,[[21065785,null,[4,null,8,null,null,null,null,[\"navigator.connection.saveData\"]]]]],[1,[[21065786,null,[4,null,27,null,null,null,null,[\"navigator.connection.saveData\"]]]]],[1,[[21065787,null,[1,[[4,null,27,null,null,null,null,[\"navigator.connection.saveData\"]]]]]]],[1,[[21065798,null,[2,[[5,null,8,null,null,null,null,[\"localStorage\"]],[4,null,8,null,null,null,null,[\"localStorage\"]]]]]]],[1,[[21065799,null,[2,[[5,null,8,null,null,null,null,[\"localStorage\"]],[1,[[4,null,8,null,null,null,null,[\"localStorage\"]]]]]]]]],[1,[[21066438,null,[1,[[5,null,8,null,null,null,null,[\"localStorage\"]]]]]]],[10,[[21066612],[21066613,[[83,null,null,[1]],[84,null,null,[1]]]]]],[50,[[21069710],[21069711,[[1911,null,null,[1]]]]]]]],[11,[[1000,[[21067496]],[4,null,9,null,null,null,null,[\"document.hasTrustToken\"]]],[50,[[21068785],[21068786,[[1031,null,null,[1]]]]],null,null,null,54]]],[17,[[10,[[31060047]],null,null,null,44,22],[10,[[31060048],[31060049]],null,null,null,null,null,null,null,101]]],[13,[[10,[[21065726,null,[4,null,6,null,null,null,null,[\"21065725\"]]],[21065727,[[240,null,null,[1]]],[4,null,6,null,null,null,null,[\"21065725\"]]],[21065728,[[241,null,null,[1]]],[4,null,6,null,null,null,null,[\"21065725\"]]]],[4,null,9,null,null,null,null,[\"LayoutShift\"]]],[500,[[21066614],[21066615,[[77,null,null,[1]],[78,null,null,[1]],[85,null,null,[1]],[80,null,null,[1]],[76,null,null,[1]]]]],[4,null,6,null,null,null,null,[\"21066613\"]]],[1000,[[21066970,null,[2,[[6,null,null,6,null,8582400,null,[\"__gsaExp.id\"]],[1,[[6,null,null,null,4,null,\"\",[\"frameElement.src\"]]]]]]],[21066971,null,[2,[[6,null,null,6,null,8582400,null,[\"__gsaExp.id\"]],[6,null,null,null,4,null,\"\",[\"frameElement.src\"]]]]],[21066972,null,[2,[[5,null,null,6,null,null,null,[\"__gsaExp.id\"]],[1,[[6,null,null,6,null,8582400,null,[\"__gsaExp.id\"]]]]]]]]],[1000,[[21066973,null,[2,[[12,null,null,null,4,null,\"Linux.*Chrome\",[\"navigator.userAgent\"]],[1,[[6,null,null,null,4,null,\"\",[\"frameElement.src\"]]]],[1,[[5,null,null,6,null,null,null,[\"__gsaExp.id\"]]]]]]],[21066974,null,[2,[[12,null,null,null,4,null,\"Linux.*Chrome\",[\"navigator.userAgent\"]],[6,null,null,null,4,null,\"\",[\"frameElement.src\"]],[1,[[5,null,null,6,null,null,null,[\"__gsaExp.id\"]]]]]]]]],[100,[[21067087],[21067088,[[78,null,null,[1]]]]],[2,[[4,null,6,null,null,null,null,[\"21066613\"]]]]],[10,[[21067664,null,[4,null,6,null,null,null,null,[\"21065725\"]]],[21067665,[[null,1905,null,[null,30]]],[4,null,6,null,null,null,null,[\"21065725\"]]],[21067666,[[null,1905,null,[null,60]]],[4,null,6,null,null,null,null,[\"21065725\"]]],[21067667,[[null,1905,null,[null,120]]],[4,null,6,null,null,null,null,[\"21065725\"]]]],[4,null,9,null,null,null,null,[\"LayoutShift\"]]],[10,[[21069888,[[null,1929,null,[null,50]]],[4,null,6,null,null,null,null,[\"21065725\"]]],[21069889,[[null,1929,null,[null,25]]],[4,null,6,null,null,null,null,[\"21065725\"]]],[21069890,[[null,1929,null,[null,1]]],[4,null,6,null,null,null,null,[\"21065725\"]]],[21069891,[[null,1929,null,[null,75]]],[4,null,6,null,null,null,null,[\"21065725\"]]],[21069892,[[null,1929,null,[null,100]]],[4,null,6,null,null,null,null,[\"21065725\"]]]],[4,null,9,null,null,null,null,[\"LayoutShift\"]]]]]]]", [null, null]);
            ye(13, [b]);
            ih(new Ng(b), Jf.m(), { xa: tf && !!a.google_disable_experiments, Qa: tf }, Eg(a));
            Fg.m().h(12);
            Fg.m().h(10);
            b = qc(a);
            wb("") && b.push("");
            a = me(a) || a;
            ne(a.location, "google_mc_lab") && b.push("242104166") } };

    function mh(a) { var b = /[a-zA-Z0-9._~-]/,
            c = /%[89a-zA-Z]./; return a.replace(/(%[a-zA-Z0-9]{2})/g, function(d) { if (!d.match(c)) { var e = decodeURIComponent(d); if (e.match(b)) return e } return d.toUpperCase() }) }

    function nh(a) { for (var b = "", c = /[/%?&=]/, d = 0; d < a.length; ++d) { var e = a[d];
            b = e.match(c) ? b + e : b + encodeURIComponent(e) } return b };

    function oh(a) { E(this, a, null, ph) }
    z(oh, C);

    function qh(a) { E(this, a, null, null) }
    z(qh, C);

    function rh(a) { E(this, a, null, null) }
    z(rh, C);

    function sh(a) { E(this, a, null, null) }
    z(sh, C);
    var ph = [
        [1, 2, 3]
    ];

    function th(a) { E(this, a, uh, null) }
    z(th, C);

    function vh(a) { E(this, a, null, wh) }
    z(vh, C);

    function xh(a) { E(this, a, null, null) }
    z(xh, C);
    var uh = [1],
        wh = [
            [1, 2]
        ];

    function yh(a) { E(this, a, zh, null) }
    z(yh, C);

    function Ah(a) { E(this, a, null, null) }
    z(Ah, C);

    function Bh(a) { E(this, a, Ch, null) }
    z(Bh, C);

    function Dh(a) { E(this, a, null, null) }
    z(Dh, C);

    function Eh(a) { E(this, a, null, null) }
    z(Eh, C);

    function Fh(a) { E(this, a, null, null) }
    z(Fh, C);
    var zh = [1, 2, 5, 7],
        Ch = [2, 5, 6, 11];

    function Gh(a, b) { a = nh(mh(a.location.pathname)).replace(/(^\/)|(\/$)/g, ""); var c = rd(a),
            d = Hh(a); return u(b, "find").call(b, function(e) { var f = null != F(e, 7) ? F(I(e, Dh, 7), 1) : F(e, 1);
            e = null != F(e, 7) ? F(I(e, Dh, 7), 2) : 2; if ("number" !== typeof f) return !1; switch (e) {
                case 1:
                    return f == c;
                case 2:
                    return d[f] || !1 } return !1 }) || null }

    function Hh(a) { for (var b = {};;) { b[rd(a)] = !0; if (!a) return b;
            a = a.substring(0, a.lastIndexOf("/")) } };

    function Ih(a) { this.g = a.slice(0) }
    Ih.prototype.apply = function(a) { return new Ih(a(this.g.slice(0))) };
    Ih.prototype.add = function(a) { var b = this.g.slice(0);
        b.push(a); return new Ih(b) };

    function Jh(a) { var b = void 0 === a.ta ? void 0 : a.ta,
            c = void 0 === a.Pa ? void 0 : a.Pa,
            d = void 0 === a.Ea ? void 0 : a.Ea;
        this.g = void 0 === a.Ma ? void 0 : a.Ma;
        this.j = new Ih(b || []);
        this.i = d;
        this.h = c };

    function Kh() { this.g = {};
        this.h = {} }
    Kh.prototype.set = function(a, b) { var c = Lh(a);
        this.g[c] = b;
        this.h[c] = a };
    Kh.prototype.get = function(a, b) { a = Lh(a); return void 0 !== this.g[a] ? this.g[a] : b };

    function Lh(a) { return a instanceof Object ? String(Fa(a)) : a + "" };

    function Mh(a) { var b = [],
            c = a.j;
        c && c.g.length && b.push({ R: "a", Y: Nh(c) });
        null != a.g && b.push({ R: "as", Y: a.g });
        null != a.h && b.push({ R: "i", Y: String(a.h) });
        null != a.i && b.push({ R: "rp", Y: String(a.i) });
        b.sort(function(d, e) { return d.R.localeCompare(e.R) });
        b.unshift({ R: "t", Y: "aa" }); return b }

    function Nh(a) { a = a.g.slice(0).map(Oh);
        a = JSON.stringify(a); return rd(a) }

    function Oh(a) { var b = {};
        null != F(a, 7) && (b.q = F(a, 7));
        null != F(a, 2) && (b.o = F(a, 2));
        null != F(a, 5) && (b.p = F(a, 5)); return b };

    function Ph(a, b) { this.va = a;
        this.Da = b }

    function Qh(a) { var b = [].slice.call(arguments).filter(Ya(function(e) { return null === e })); if (!b.length) return null; var c = [],
            d = {};
        b.forEach(function(e) { c = c.concat(e.va || []);
            d = u(Object, "assign").call(Object, d, e.Da) }); return new Ph(c, d) }

    function Rh(a) { switch (a) {
            case 1:
                return new Ph(null, { google_ad_semantic_area: "mc" });
            case 2:
                return new Ph(null, { google_ad_semantic_area: "h" });
            case 3:
                return new Ph(null, { google_ad_semantic_area: "f" });
            case 4:
                return new Ph(null, { google_ad_semantic_area: "s" });
            default:
                return null } }

    function Sh(a) { if (null == a) a = null;
        else { var b = Mh(a);
            a = [];
            b = w(b); for (var c = b.next(); !c.done; c = b.next()) { c = c.value; var d = String(c.Y);
                a.push(c.R + "." + (20 >= d.length ? d : d.slice(0, 19) + "_")) }
            a = new Ph(null, { google_placement_id: a.join("~") }) } return a };
    var Th = new Ph(["google-auto-placed"], { google_tag_origin: "qs" });
    var Uh = {},
        Vh = (Uh.google_ad_channel = !0, Uh.google_ad_host = !0, Uh);

    function Wh(a, b) { a.location.href && a.location.href.substring && (b.url = a.location.href.substring(0, 200));
        pf("ama", b, .01) }

    function Xh(a) { var b = {};
        pd(Vh, function(c, d) { d in a && (b[d] = a[d]) }); return b };

    function Yh(a) { if (U(316)) var b = null;
        else try { b = a.getItem("google_ama_config") } catch (d) { b = null }
        try { var c = b ? kc(yh, b) : null } catch (d) { c = null } return c };

    function Zh(a) { a = I(a, Ah, 3); return !a || F(a, 1) <= Date.now() ? !1 : !0 }

    function $h(a) { return (a = Yh(a)) ? Zh(a) ? a : null : null }

    function ai(a, b) { try { b.removeItem("google_ama_config") } catch (c) { Wh(a, { lserr: 1 }) } };

    function bi(a) { this.g = new Kh; if (a)
            for (var b = 0; b < a.length; ++b) this.add(a[b]) }
    bi.prototype.add = function(a) { this.g.set(a, !0) };
    bi.prototype.contains = function(a) { return void 0 !== this.g.g[Lh(a)] };

    function ci(a) { E(this, a, null, null) }
    z(ci, C);

    function di(a, b) { this.g = a;
        this.h = b }

    function ei(a) { return null != a.g ? a.g.value : null }

    function fi(a, b) { null != a.g && b(a.g.value); return a }
    di.prototype.map = function(a) { return null != this.g ? (a = a(this.g.value), a instanceof di ? a : gi(a)) : this };

    function hi(a, b) { null != a.g || b(a.h); return a }

    function gi(a) { return new di({ value: a }, null) }

    function ii(a) { return new di(null, a) }

    function ji(a) { try { return gi(a()) } catch (b) { return ii(b) } };
    var ki = { rectangle: 1, horizontal: 2, vertical: 4 };

    function li(a, b) { for (var c = ["width", "height"], d = 0; d < c.length; d++) { var e = "google_ad_" + c[d]; if (!b.hasOwnProperty(e)) { var f = N(a[c[d]]);
                f = null === f ? null : Math.round(f);
                null != f && (b[e] = f) } } }

    function mi(a, b) { return !((wd.test(b.google_ad_width) || vd.test(a.style.width)) && (wd.test(b.google_ad_height) || vd.test(a.style.height))) }

    function ni(a, b) { return (a = oi(a, b)) ? a.y : 0 }

    function oi(a, b) { try { var c = b.document.documentElement.getBoundingClientRect(),
                d = a.getBoundingClientRect(); return { x: d.left - c.left, y: d.top - c.top } } catch (e) { return null } }

    function pi(a, b) { do { var c = kd(a, b); if (c && "fixed" == c.position) return !1 } while (a = a.parentElement); return !0 }

    function qi(a) { var b = 0,
            c; for (c in ki) - 1 != a.indexOf(c) && (b |= ki[c]); return b }

    function ri(a, b, c, d, e) { if (a.top != a) return me(a) ? 3 : 16; if (!(488 > Q(a))) return 4; if (!(a.innerHeight >= a.innerWidth)) return 5; var f = Q(a); if (!f || (f - c) / f > d) a = 6;
        else { if (c = "true" != e.google_full_width_responsive) a: { c = Q(a); for (b = b.parentElement; b; b = b.parentElement)
                    if ((d = kd(b, a)) && (e = N(d.width)) && !(e >= c) && "visible" != d.overflow) { c = !0; break a }
                c = !1 }
            a = c ? 7 : !0 } return a }

    function si(a, b, c, d) { var e = ri(b, c, a, .3, d);!0 !== e ? a = e : "true" == d.google_full_width_responsive || pi(c, b) ? ti(b) ? a = !0 : (b = Q(b), a = b - a, a = b && 0 <= a ? !0 : b ? -10 > a ? 11 : 0 > a ? 14 : 12 : 10) : a = 9; return a }

    function ui(a, b, c) { a = a.style; "rtl" == b ? U(251) ? a.setProperty("margin-right", c, "important") : a.marginRight = c : U(251) ? a.setProperty("margin-left", c, "important") : a.marginLeft = c }

    function vi(a, b) { if (3 == b.nodeType) return /\S/.test(b.data); if (1 == b.nodeType) { if (/^(script|style)$/i.test(b.nodeName)) return !1; try { var c = kd(b, a) } catch (d) {} return !c || "none" != c.display && !("absolute" == c.position && ("hidden" == c.visibility || "collapse" == c.visibility)) } return !1 }

    function wi(a, b) { for (var c = 0; 100 > c && b.parentElement; ++c) { for (var d = b.parentElement.childNodes, e = 0; e < d.length; ++e) { var f = d[e]; if (f != b && vi(a, f)) return }
            b = b.parentElement;
            b.style.width = "100%";
            b.style.height = "auto" } }

    function xi(a, b, c) { a = oi(b, a); return "rtl" == c ? -a.x : a.x }

    function yi(a, b) { var c;
        c = (c = b.parentElement) ? (c = kd(c, a)) ? c.direction : "" : ""; if (c) { b.style.border = b.style.borderStyle = b.style.outline = b.style.outlineStyle = b.style.transition = "none";
            b.style.borderSpacing = b.style.padding = "0";
            ui(b, c, "0px");
            b.style.width = Q(a) + "px"; if (0 !== xi(a, b, c)) { ui(b, c, "0px"); var d = xi(a, b, c);
                ui(b, c, -1 * d + "px");
                a = xi(a, b, c);
                0 !== a && a !== d && ui(b, c, d / (a - d) * d + "px") }
            b.style.zIndex = 30 } }

    function ti(a) { return U(233) || a.location && "#bffwroe2etoq" == a.location.hash };

    function V(a, b) { this.h = a;
        this.g = b }
    n = V.prototype;
    n.minWidth = function() { return this.h };
    n.height = function() { return this.g };
    n.X = function(a) { return 300 < a && 300 < this.g ? this.h : Math.min(1200, Math.round(a)) };
    n.ka = function(a) { return this.X(a) + "x" + this.height() };
    n.ba = function() {};

    function zi(a, b, c, d) { d = void 0 === d ? function(f) { return f } : d; var e; return a.style && a.style[c] && d(a.style[c]) || (e = kd(a, b)) && e[c] && d(e[c]) || null }

    function Ai(a) { return function(b) { return b.minWidth() <= a } }

    function Bi(a, b, c, d) { var e = a && Ci(c, b),
            f = Di(b, d); return function(g) { return !(e && g.height() >= f) } }

    function Ei(a) { return function(b) { return b.height() <= a } }

    function Ci(a, b) { return ni(a, b) < Af(b).clientHeight - 100 }

    function Fi(a, b) { var c = zi(b, a, "height", N); if (c) return c; var d = b.style.height;
        b.style.height = "inherit";
        c = zi(b, a, "height", N);
        b.style.height = d; if (c) return c;
        c = Infinity;
        do(d = b.style && N(b.style.height)) && (c = Math.min(c, d)), (d = zi(b, a, "maxHeight", N)) && (c = Math.min(c, d)); while ((b = b.parentElement) && "HTML" != b.tagName); return c }

    function Di(a, b) { var c = 0 == fe(a); return b && c ? Math.max(250, 2 * Af(a).clientHeight / 3) : 250 };

    function Gi(a, b) { for (var c = [], d = a.length, e = 0; e < d; e++) c.push(a[e]);
        c.forEach(b, void 0) };

    function Hi(a) { if (1 != a.nodeType) var b = !1;
        else if (b = "INS" == a.tagName) a: { b = ["adsbygoogle-placeholder"];a = a.className ? a.className.split(/\s+/) : []; for (var c = {}, d = 0; d < a.length; ++d) c[a[d]] = !0; for (d = 0; d < b.length; ++d)
                if (!c[b[d]]) { b = !1; break a }
            b = !0 }
        return b };

    function Ii(a, b, c) { switch (c) {
            case 0:
                b.parentNode && b.parentNode.insertBefore(a, b); break;
            case 3:
                if (c = b.parentNode) { var d = b.nextSibling; if (d && d.parentNode != c)
                        for (; d && 8 == d.nodeType;) d = d.nextSibling;
                    c.insertBefore(a, d) } break;
            case 1:
                b.insertBefore(a, b.firstChild); break;
            case 2:
                b.appendChild(a) }
        Hi(b) && (b.setAttribute("data-init-display", b.style.display), b.style.display = "block") };

    function Ji(a, b, c) {
        function d(f) { f = Ki(f); return null == f ? !1 : c > f }

        function e(f) { f = Ki(f); return null == f ? !1 : c < f }
        switch (b) {
            case 0:
                return { init: Li(a.previousSibling, e), ea: function(f) { return Li(f.previousSibling, e) }, fa: 0 };
            case 2:
                return { init: Li(a.lastChild, e), ea: function(f) { return Li(f.previousSibling, e) }, fa: 0 };
            case 3:
                return { init: Li(a.nextSibling, d), ea: function(f) { return Li(f.nextSibling, d) }, fa: 3 };
            case 1:
                return { init: Li(a.firstChild, d), ea: function(f) { return Li(f.nextSibling, d) }, fa: 3 } }
        throw Error("Un-handled RelativePosition: " +
            b);
    }

    function Ki(a) { return a.hasOwnProperty("google-ama-order-assurance") ? a["google-ama-order-assurance"] : null }

    function Li(a, b) { return a && b(a) ? a : null };

    function Mi(a, b) { for (var c = 0; c < b.length; c++) { var d = b[c],
                e = Ub(d.hb);
            a[e] = d.value } };

    function Ni(a, b, c, d) { this.j = a;
        this.h = b;
        this.i = c;
        this.g = d }

    function Oi(a, b) { var c = []; try { c = b.querySelectorAll(a.j) } catch (g) {} if (!c.length) return [];
        b = c;
        c = b.length; if (0 < c) { for (var d = Array(c), e = 0; e < c; e++) d[e] = b[e];
            b = d } else b = [];
        b = Pi(a, b); "number" === typeof a.h && (c = a.h, 0 > c && (c += b.length), b = 0 <= c && c < b.length ? [b[c]] : []); if ("number" === typeof a.i) { c = []; for (d = 0; d < b.length; d++) { e = Qi(b[d]); var f = a.i;
                0 > f && (f += e.length);
                0 <= f && f < e.length && c.push(e[f]) }
            b = c } return b }
    Ni.prototype.toString = function() { return JSON.stringify({ nativeQuery: this.j, occurrenceIndex: this.h, paragraphIndex: this.i, ignoreMode: this.g }) };

    function Pi(a, b) { if (null == a.g) return b; switch (a.g) {
            case 1:
                return b.slice(1);
            case 2:
                return b.slice(0, b.length - 1);
            case 3:
                return b.slice(1, b.length - 1);
            case 0:
                return b;
            default:
                throw Error("Unknown ignore mode: " + a.g); } }

    function Qi(a) { var b = [];
        Gi(a.getElementsByTagName("p"), function(c) { 100 <= Ri(c) && b.push(c) }); return b }

    function Ri(a) { if (3 == a.nodeType) return a.length; if (1 != a.nodeType || "SCRIPT" == a.tagName) return 0; var b = 0;
        Gi(a.childNodes, function(c) { b += Ri(c) }); return b }

    function Si(a) { return 0 == a.length || isNaN(a[0]) ? a : "\\" + (30 + parseInt(a[0], 10)) + " " + a.substring(1) };

    function Ti(a) { if (!a) return null; var b = F(a, 7); if (F(a, 1) || a.getId() || 0 < F(a, 4).length) { var c = a.getId(),
                d = F(a, 1),
                e = F(a, 4);
            b = F(a, 2); var f = F(a, 5);
            a = Ui(F(a, 6)); var g = "";
            d && (g += d);
            c && (g += "#" + Si(c)); if (e)
                for (c = 0; c < e.length; c++) g += "." + Si(e[c]);
            b = (e = g) ? new Ni(e, b, f, a) : null } else b = b ? new Ni(b, F(a, 2), F(a, 5), Ui(F(a, 6))) : null; return b }
    var Vi = { 1: 1, 2: 2, 3: 3, 0: 0 };

    function Ui(a) { return null == a ? a : Vi[a] }
    var Wi = { 1: 0, 2: 1, 3: 2, 4: 3 };

    function Xi(a) { switch (F(a, 8)) {
            case 1:
            case 2:
                if (null == a) var b = null;
                else b = I(a, O, 1), null == b ? b = null : (a = F(a, 2), b = null == a ? null : new Jh({ ta: [b], Ea: a })); return null != b ? gi(b) : ii(Error("Missing dimension when creating placement id"));
            case 3:
                return ii(Error("Missing dimension when creating placement id"));
            default:
                return ii(Error("Invalid type: " + F(a, 8))) } };

    function Yi() { this.g = new Kh }
    Yi.prototype.set = function(a, b) { var c = this.g.get(a);
        c || (c = new bi, this.g.set(a, c));
        c.add(b) };

    function Zi(a, b) {
        function c() { d.push({ anchor: e.anchor, position: e.position }); return e.anchor == b.anchor && e.position == b.position }
        for (var d = [], e = a; e;) {
            switch (e.position) {
                case 1:
                    if (c()) return d;
                    e.position = 2;
                case 2:
                    if (c()) return d; if (e.anchor.firstChild) { e = { anchor: e.anchor.firstChild, position: 1 }; continue } else e.position = 3;
                case 3:
                    if (c()) return d;
                    e.position = 4;
                case 4:
                    if (c()) return d }
            for (; e && !e.anchor.nextSibling && e.anchor.parentNode != e.anchor.ownerDocument.body;) {
                e = { anchor: e.anchor.parentNode, position: 3 };
                if (c()) return d;
                e.position = 4;
                if (c()) return d
            }
            e && e.anchor.nextSibling ? e = { anchor: e.anchor.nextSibling, position: 1 } : e = null
        }
        return d
    };

    function $i(a, b) { this.h = a;
        this.g = b }

    function aj(a, b) {
        var c = new Yi,
            d = new bi;
        b.forEach(function(e) {
            if (I(e, qh, 1)) { e = I(e, qh, 1); if (I(e, Ae, 1) && I(I(e, Ae, 1), O, 1) && I(e, Ae, 2) && I(I(e, Ae, 2), O, 1)) { var f = bj(a, I(I(e, Ae, 1), O, 1)),
                        g = bj(a, I(I(e, Ae, 2), O, 1)); if (f && g)
                        for (f = w(Zi({ anchor: f, position: F(I(e, Ae, 1), 2) }, { anchor: g, position: F(I(e, Ae, 2), 2) })), g = f.next(); !g.done; g = f.next()) g = g.value, c.set(Fa(g.anchor), g.position) }
                I(e, Ae, 3) && I(I(e, Ae, 3), O, 1) && (f = bj(a, I(I(e, Ae, 3), O, 1))) && c.set(Fa(f), F(I(e, Ae, 3), 2)) } else I(e, rh, 2) ? cj(a, I(e, rh, 2), c) : I(e, sh, 3) && dj(a, I(e,
                sh, 3), d)
        });
        return new $i(c, d)
    }

    function cj(a, b, c) { I(b, O, 1) && (a = ej(a, I(b, O, 1))) && a.forEach(function(d) { d = Fa(d);
            c.set(d, 1);
            c.set(d, 4);
            c.set(d, 2);
            c.set(d, 3) }) }

    function dj(a, b, c) { I(b, O, 1) && (a = ej(a, I(b, O, 1))) && a.forEach(function(d) { c.add(Fa(d)) }) }

    function bj(a, b) { return (a = ej(a, b)) && 0 < a.length ? a[0] : null }

    function ej(a, b) { return (b = Ti(b)) ? Oi(b, a) : null };

    function fj(a, b) { if (!a) return !1;
        a = kd(a, b); if (!a) return !1;
        a = a.cssFloat || a.styleFloat; return "left" == a || "right" == a }

    function gj(a) { for (a = a.previousSibling; a && 1 != a.nodeType;) a = a.previousSibling; return a ? a : null }

    function hj(a) { return !!a.nextSibling || !!a.parentNode && hj(a.parentNode) };

    function ij(a, b) { return a && null != F(a, 4) && b[F(I(a, Ce, 4), 2)] ? !1 : !0 }

    function jj(a) { var b = {};
        a && F(a, 6).forEach(function(c) { b[c] = !0 }); return b }

    function kj(a, b, c, d, e) { this.g = a;
        this.u = b;
        this.i = c;
        this.l = e || null;
        this.s = (this.C = d) ? aj(a.document, J(d, oh, 5)) : aj(a.document, []);
        this.h = 0;
        this.j = !1 }

    function lj(a, b) {
        if (a.j) return !0;
        a.j = !0;
        var c = J(a.i, De, 1);
        a.h = 0;
        var d = jj(a.C);
        try { var e = a.g.localStorage.getItem("google_ama_settings"); var f = e ? kc(ci, e) : null } catch (m) { f = null }
        if (null !== f && fc(f, 2, !1)) return mj(a).eatf = !0, ye(7, [!0, 0, !1]), !0;
        f = new bi([2]);
        for (e = 0; e < c.length; e++) {
            var g = a;
            var h = c[e],
                k = e,
                l = b;
            if (I(h, Ce, 4) && f.contains(F(I(h, Ce, 4), 1)) && 1 === F(h, 8) && ij(h, d)) {
                g.h++;
                if (h = nj(g, h, l, d)) l = mj(g), l.numAutoAdsPlaced || (l.numAutoAdsPlaced = 0), null == l.placed && (l.placed = []), l.numAutoAdsPlaced++, l.placed.push({
                    index: k,
                    element: h.aa
                }), ye(7, [!1, g.h, !0]);
                g = h
            } else g = null;
            if (g) return !0
        }
        ye(7, [!1, a.h, !1]);
        return !1
    }

    function nj(a, b, c, d) {
        if (!ij(b, d) || 1 != F(b, 8)) return null;
        d = I(b, O, 1);
        if (!d) return null;
        d = Ti(d);
        if (!d) return null;
        d = Oi(d, a.g.document);
        if (0 == d.length) return null;
        d = d[0];
        var e = F(b, 2);
        e = Wi[e];
        e = void 0 === e ? null : e;
        var f;
        if (!(f = null == e)) { a: { f = a.g; switch (e) {
                    case 0:
                        f = fj(gj(d), f); break a;
                    case 3:
                        f = fj(d, f); break a;
                    case 2:
                        var g = d.lastChild;
                        f = fj(g ? 1 == g.nodeType ? g : gj(g) : null, f); break a }
                f = !1 } if (c = !f && !(!c && 2 == e && !hj(d))) c = 1 == e || 2 == e ? d : d.parentNode, c = !(c && !Hi(c) && 0 >= c.offsetWidth);f = !c }
        if (!(c = f)) {
            c = a.s;
            f = F(b, 2);
            g =
                Fa(d);
            g = c.h.g.get(g);
            if (!(g = g ? g.contains(f) : !1)) a: { if (c.g.contains(Fa(d))) switch (f) {
                    case 2:
                    case 3:
                        g = !0; break a;
                    default:
                        g = !1; break a }
                for (f = d.parentElement; f;) { if (c.g.contains(Fa(f))) { g = !0; break a }
                    f = f.parentElement }
                g = !1 }
            c = g
        }
        if (c) return null;
        c = I(b, Be, 3);
        f = {};
        c && (f.Ja = F(c, 1), f.ua = F(c, 2), f.clearBoth = !!ec(c, 3));
        c = I(b, Ce, 4) && F(I(b, Ce, 4), 2) ? F(I(b, Ce, 4), 2) : null;
        c = Rh(c);
        g = null == F(b, 12) ? null : F(b, 12);
        g = null == g ? null : new Ph(null, { google_ml_rank: g });
        b = oj(a, b);
        b = Qh(a.l, c, g, b);
        c = a.g;
        a = a.u;
        var h = c.document,
            k = f.clearBoth ||
            !1;
        g = dd((new ed(h)).g, "DIV");
        var l = g.style;
        l.width = "100%";
        l.height = "auto";
        l.clear = k ? "both" : "none";
        k = g.style;
        k.textAlign = "center";
        f.Ta && Mi(k, f.Ta);
        h = dd((new ed(h)).g, "INS");
        k = h.style;
        k.display = "block";
        k.margin = "auto";
        k.backgroundColor = "transparent";
        f.Ja && (k.marginTop = f.Ja);
        f.ua && (k.marginBottom = f.ua);
        f.La && Mi(k, f.La);
        g.appendChild(h);
        f = { ja: g, aa: h };
        f.aa.setAttribute("data-ad-format", "auto");
        g = [];
        if (h = b && b.va) f.ja.className = h.join(" ");
        h = f.aa;
        h.className = "adsbygoogle";
        h.setAttribute("data-ad-client",
            a);
        g.length && h.setAttribute("data-ad-channel", g.join("+"));
        a: {
            try {
                var m = f.ja;
                var r = void 0 === r ? 0 : r;
                if (U(313)) { r = void 0 === r ? 0 : r; var p = Ji(d, e, r); if (p.init) { var t = p.init; for (d = t; d = p.ea(d);) t = d; var v = { anchor: t, position: p.fa } } else v = { anchor: d, position: e };
                    m["google-ama-order-assurance"] = r;
                    Ii(m, v.anchor, v.position) } else Ii(m, d, e);
                b: {
                    var B = f.aa;B.setAttribute("data-adsbygoogle-status", "reserved");B.className += " adsbygoogle-noablate";m = { element: B };
                    var D = b && b.Da;
                    if (B.hasAttribute("data-pub-vars")) { try { D = JSON.parse(B.getAttribute("data-pub-vars")) } catch (pa) { break b }
                        B.removeAttribute("data-pub-vars") }
                    D &&
                    (m.params = D);
                    (c.adsbygoogle = c.adsbygoogle || []).push(m)
                }
            } catch (pa) {
                (B = f.ja) && B.parentNode && (D = B.parentNode, D.removeChild(B), Hi(D) && (D.style.display = D.getAttribute("data-init-display") || "none"));
                B = !1; break a }
            B = !0
        }
        return B ? f : null
    }

    function mj(a) { a = a.g; return a.google_ama_state = a.google_ama_state || {} }

    function oj(a, b) { return ei(hi(Xi(b).map(Sh), function(c) { mj(a).exception = c })) };

    function pj() { this.h = new qj(this);
        this.g = 0 }
    pj.prototype.resolve = function(a) { rj(this);
        this.g = 1;
        this.j = a;
        sj(this.h) };
    pj.prototype.reject = function(a) { rj(this);
        this.g = 2;
        this.i = a;
        sj(this.h) };

    function rj(a) { if (0 != a.g) throw Error("Already resolved/rejected."); }

    function qj(a) { this.g = a }
    qj.prototype.then = function(a, b) { if (this.h) throw Error("Then functions already set.");
        this.h = a;
        this.i = b;
        sj(this) };

    function sj(a) { switch (a.g.g) {
            case 0:
                break;
            case 1:
                a.h && a.h(a.g.j); break;
            case 2:
                a.i && a.i(a.g.i); break;
            default:
                throw Error("Unhandled deferred state."); } };

    function tj(a) { this.exception = a }

    function uj(a, b, c) { this.i = a;
        this.g = b;
        this.h = c }
    uj.prototype.start = function() { this.j() };
    uj.prototype.j = function() { try { switch (this.i.document.readyState) {
                case "complete":
                case "interactive":
                    lj(this.g, !0);
                    vj(this); break;
                default:
                    lj(this.g, !1) ? vj(this) : this.i.setTimeout(La(this.j, this), 100) } } catch (a) { vj(this, a) } };

    function vj(a, b) { try { var c = a.h,
                d = c.resolve,
                e = a.g;
            mj(e);
            J(e.i, De, 1);
            d.call(c, new tj(b)) } catch (f) { a.h.reject(f) } };

    function wj(a) { Wh(a, { atf: 1 }) }

    function xj(a, b) {
        (a.google_ama_state = a.google_ama_state || {}).exception = b;
        Wh(a, { atf: 0 }) };

    function yj() { var a = this;
        this.promise = new q.Promise(function(b, c) { a.resolve = b;
            a.reject = c }) };

    function zj() { var a = new yj;
        this.promise = a.promise;
        this.resolve = a.resolve }

    function Aj(a) { y.google_llp || (y.google_llp = {}); var b = y.google_llp;
        b[7] || (b[7] = new zj, a && a()); return b[7] }

    function Bj(a) { return Aj(function() { jd(y.document, a) }).promise };

    function Cj(a) { var b = {}; return { enable_page_level_ads: (b.pltais = !0, b), google_ad_client: a } };

    function Dj(a) { var b = Df(y, 12, a.google_ad_client);
        a = "google_ad_host" in a; var c = .5 > Math.random(),
            d = ne(y.location, "google_ads_preview"); return b && !a && c || d }

    function Ej(a) { if (y.google_apltlad || y.top != y || !a.google_ad_client) return null; var b = Dj(a);
        y.google_apltlad = !0; var c = Cj(a.google_ad_client),
            d = c.enable_page_level_ads;
        pd(a, function(e, f) { uc[f] && "google_ad_client" !== f && (d[f] = e) }); if (b) d.google_ad_channel = "AutoInsertAutoAdCode";
        else if (d.google_pgb_reactive = 7, "google_ad_section" in a || "google_ad_region" in a) d.google_ad_section = a.google_ad_section || a.google_ad_region; return c }

    function Fj(a) { return Ea(a.enable_page_level_ads) && 7 === a.enable_page_level_ads.google_pgb_reactive };
    var Gj = null;

    function Hj() { if (!Gj) { for (var a = y, b = a, c = 0; a && a != a.parent;)
                if (a = a.parent, c++, id(a)) b = a;
                else break;
            Gj = b } return Gj };

    function Ij() { this.S = {} }

    function Jj() { if (Kj) return Kj; var a = Kd() || je(),
            b = a.google_persistent_state_async; return null != b && "object" == typeof b && null != b.S && "object" == typeof b.S ? Kj = b : a.google_persistent_state_async = Kj = new Ij }

    function Lj(a, b, c) { b = Mj[b] || "google_ps_" + b;
        a = a.S; var d = a[b]; return void 0 === d ? a[b] = c : d }

    function Nj(a, b, c) { a.S[Mj[b] || "google_ps_" + b] = c }
    var Kj = null,
        Oj = {},
        Mj = (Oj[8] = "google_prev_ad_formats_by_region", Oj[9] = "google_prev_ad_slotnames_by_region", Oj);

    function Pj(a) { E(this, a, null, null) }
    z(Pj, C);

    function Qj(a) { try { var b = a.localStorage.getItem("google_auto_fc_cmp_setting") || null } catch (d) { b = null } var c = b; return c ? ji(function() { return kc(Pj, c) }) : gi(null) };

    function Rj(a) { void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
        void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0); return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3 }

    function Sj(a, b) { b = void 0 === b ? 500 : b;
        R.call(this);
        this.h = a;
        this.g = null;
        this.l = {};
        this.H = 0;
        this.u = b;
        this.j = null }
    x(Sj, R);
    Sj.prototype.i = function() { this.l = {};
        this.j && (cd(this.h, "message", this.j), delete this.j);
        delete this.l;
        delete this.h;
        delete this.g;
        R.prototype.i.call(this) };

    function Tj(a) { return "function" === typeof a.h.__tcfapi || null != Uj(a) }

    function Vj(a) {
        function b(g, h) { clearTimeout(f);
            g ? (d = g, d.internalErrorState = Rj(d), h && 0 === d.internalErrorState || (d.tcString = "tcunavailable", h || (d.internalErrorState = 3))) : (d.tcString = "tcunavailable", d.internalErrorState = 3);
            c(d) } var c = Wj,
            d = {},
            e = $a(function() { return c(d) }),
            f = 0; - 1 !== a.u && (f = setTimeout(function() { d.tcString = "tcunavailable";
            d.internalErrorState = 1;
            e() }, a.u)); try { Xj(a, b) } catch (g) { d.tcString = "tcunavailable", d.internalErrorState = 3, f && (clearTimeout(f), f = 0), e() } }

    function Xj(a, b) { b || (b = function() {}); if ("function" === typeof a.h.__tcfapi) a = a.h.__tcfapi, a("addEventListener", 2, b, void 0);
        else if (Uj(a)) { Yj(a); var c = ++a.H;
            a.l[c] = b;
            a.g && (b = {}, a.g.postMessage((b.__tcfapiCall = { command: "addEventListener", version: 2, callId: c, parameter: void 0 }, b), "*")) } else b({}, !1) }

    function Uj(a) { if (a.g) return a.g;
        a.g = yd(a.h, "__tcfapiLocator"); return a.g }

    function Yj(a) { a.j || (a.j = function(b) { try { var c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                a.l[c.callId](c.returnValue, c.success) } catch (d) {} }, bd(a.h, "message", a.j)) }

    function Zj(a) { if (!1 === a.gdprApplies) return !0;
        void 0 === a.internalErrorState && (a.internalErrorState = Rj(a)); return "error" === a.cmpStatus || 0 !== a.internalErrorState || "loaded" === a.cmpStatus && ("tcloaded" === a.eventStatus || "useractioncomplete" === a.eventStatus) ? !0 : !1 };

    function ak(a, b, c) { if (bk(a)) { var d = Lj(Jj(), 24, void 0);
            d ? c(ck(a, dk(d))) : ek(a, b).then(function(e) { return e.map(dk) }).then(function(e) { return e.map(function(f) { return ck(a, f) }) }).then(c) } else c(ck(a, Oe(!0))) }

    function bk(a) { var b; if (!(b = Tj(new Sj(a))) && (b = uf)) { a = Qj(a); if (null != a.g)
                if ((a = a.g.value) && null != F(a, 1)) b: switch (a = F(a, 1), a) {
                    case 1:
                        a = !0; break b;
                    default:
                        throw Error("Unhandled AutoGdprFeatureStatus: " + a); } else a = !1;
                else jf.D(806, a.h, void 0, void 0), a = !1;
            b = !a } return b ? !0 : !1 }

    function ek(a, b) { return q.Promise.race([fk(), gk(a, b)]) }

    function fk() { return (new q.Promise(function(a) { var b = Jj();
            a = { resolve: a }; var c = Lj(b, 25, []);
            c.push(a);
            Nj(b, 25, c) })).then(hk) }

    function gk(a, b) { return new q.Promise(function(c) { a.setTimeout(c, b, ii(Error("tcto"))) }) }

    function hk(a) { return a ? gi(a) : ii(Error("tcnull")) }

    function dk(a) {
        var b = void 0 === b ? !1 : b;
        if (Zj(a))
            if (!1 === a.gdprApplies || "tcunavailable" === a.tcString || void 0 === a.gdprApplies && !b || "string" !== typeof a.tcString || !a.tcString.length) a = !0;
            else {
                var c = void 0 === c ? "755" : c;
                b: { if (a.publisher && a.publisher.restrictions && (b = a.publisher.restrictions["1"], void 0 !== b)) { b = b[void 0 === c ? "755" : c]; break b }
                    b = void 0 }
                0 === b ? a = !1 : a.purpose && a.vendor ? (b = a.vendor.consents, (c = !(!b || !b[void 0 === c ? "755" : c])) && a.purposeOneTreatment && "DE" === a.publisherCC ? a = !0 : (c && (a = a.purpose.consents,
                    c = !(!a || !a["1"])), a = c)) : a = !0
            }
        else a = !1;
        return Oe(a)
    }

    function ck(a, b) { a: { a = void 0 === a ? window : a; if (ec(b, 5)) try { var c = a.localStorage; break a } catch (d) {}
            c = null } return (b = c) ? gi(b) : ii(Error("unav")) };

    function ik(a) { var b = U(1040),
            c = dh(1041),
            d = U(1042);
        this.g = y;
        this.l = a;
        this.i = b;
        this.h = c;
        this.j = d }

    function jk(a) { if (a.i) ak(a.g, a.h, function(c) { return kk(a, c) });
        else { try { var b = gi(a.g.localStorage) } catch (c) { b = ii(Error("unav")) }
            kk(a, b) } }

    function kk(a, b) { hi(fi(b, function(c) { return lk(a.g, a.l, c) }), function(c) { a.j && pf("abg::amalserr", { err: c.message, guarding: a.i, timeout: a.h, rate: .01 }, .01) }) }

    function lk(a, b, c) {
        if (!K(L).ama_ran_on_page) {
            var d = $h(c);
            if (d) {
                if (Fj(b) && (c = Gh(a, J(d, Bh, 7)), !c || !ec(c, 8))) return;
                K(L).ama_ran_on_page = !0;
                if ((c = I(d, Eh, 13)) && 1 === F(c, 1)) { var e = 0,
                        f = I(c, Fh, 6);
                    f && F(f, 3) && (e = F(f, 3) || 0);
                    sc(a, e) } else(null == (e = I(d, th, 24)) ? 0 : null == (f = I(e, vh, 3)) ? 0 : I(f, xh, 2)) && sc(a, 1);
                ye(3, [ic(d)]);
                var g = b.google_ad_client || "";
                b = Xh(Ea(b.enable_page_level_ads) ? b.enable_page_level_ads : {});
                U(1009) && (b.google_reactive_ad_format = 40);
                var h = Qh(Th, new Ph(null, b));
                nf(782, function() {
                    var k = h;
                    try {
                        var l =
                            Gh(a, J(d, Bh, 7)),
                            m;
                        if (m = l) a: { var r; if (r = F(l, 2))
                                for (var p = 0; p < r.length; p++)
                                    if (1 == r[p]) { m = !0; break a }
                            m = !1 }
                        if (m) { if (F(l, 4)) { m = {}; var t = new Ph(null, (m.google_package = F(l, 4), m));
                                k = Qh(k, t) } var v = new kj(a, g, d, l, k),
                                B = new pj;
                            (new uj(a, v, B)).start();
                            B.h.then(Ma(wj, a), Ma(xj, a)) }
                    } catch (D) { Wh(a, { atf: -1 }) }
                })
            } else ai(a, c)
        }
    };

    function mk() { this.debugCard = null;
        this.debugCardRequested = !1 };

    function nk(a, b) { b = void 0 === b ? sf() : b;
        a.ma(function(c) { c.shv = String(b);
            c.mnvr = ""; var d = Fg.m().g(); var e = qc(y);
            (d = d.concat(e).join(",")) && (c.eid = 50 < d.length ? d.substring(0, 50) + "T" : d) }) };

    function xc(a) { return "string" === typeof a };
    var ok = "undefined" === typeof sttc ? void 0 : sttc;

    function pk(a) { try { return wc(a), new Ge(JSON.parse(a)) } catch (b) { jf.D(838, b instanceof Error ? b : Error(String(b)), void 0, function(c) { c.jspb = String(a) }) } return new Ge }

    function qk(a, b, c, d, e) { var f = a === b;
        Ud(d, "flddiff", { left: String(a), right: String(b), eq: String(f), fld: c, bvr: e, jsvr: "" }, void 0, f ? .001 : .01) }

    function rk(a) { var b = ff,
            c = new Fe(rf("[]", [])); if (.1 > Math.random()) { var d = I(a, Fe, 5);
            qk(String(c), String(d), 5, b, H(a, 2)) }
        a.g || (a.g = {});
        d = c ? ic(c) : c;
        a.g[5] = c;
        hc(a, 5, d);
        qk(uf, fc(a, 6), 6, b, H(a, 2));!1 !== uf ? hc(a, 6, uf) : 6 < a.l ? a.h[6 + a.j] = null : (cc(a), delete a.i[6]); return a };

    function sk(a) { var b = this;
        this.g = a;
        a.google_iframe_oncopy || (a.google_iframe_oncopy = { handlers: {}, upd: function(c, d) { var e = tk("rx", c),
                    f = Number;
                a: { if (c && (c = c.match("dt=([^&]+)")) && 2 == c.length) { c = c[1]; break a }
                    c = "" }
                f = (new Date).getTime() - f(c);
                e = e.replace(/&dtd=(\d+|-?M)/, "&dtd=" + (1E5 <= f ? "M" : 0 <= f ? f : "-M"));
                b.set(d, e); return e } });
        this.h = a.google_iframe_oncopy }
    sk.prototype.set = function(a, b) { var c = this;
        this.h.handlers[a] = b;
        this.g.addEventListener && this.g.addEventListener("load", function() { var d = c.g.document.getElementById(a); try { var e = d.contentWindow.document; if (d.onload && e && (!e.body || !e.body.firstChild)) d.onload() } catch (f) {} }, !1) };

    function tk(a, b) { var c = new RegExp("\\b" + a + "=(\\d+)"),
            d = c.exec(b);
        d && (b = b.replace(c, a + "=" + (+d[1] + 1 || 1))); return b }
    var uk, vk = "var i=this.id,s=window.google_iframe_oncopy,H=s&&s.handlers,h=H&&H[i],w=this.contentWindow,d;try{d=w.document}catch(e){}if(h&&d&&(!d.body||!d.body.firstChild)){if(h.call){setTimeout(h,0)}else if(h.match){try{h=s.upd(h,i)}catch(e){}w.location.replace(h)}}";
    var W = vk;
    /[\x00&<>"']/.test(W) && (-1 != W.indexOf("&") && (W = W.replace(xb, "&amp;")), -1 != W.indexOf("<") && (W = W.replace(yb, "&lt;")), -1 != W.indexOf(">") && (W = W.replace(zb, "&gt;")), -1 != W.indexOf('"') && (W = W.replace(Ab, "&quot;")), -1 != W.indexOf("'") && (W = W.replace(Bb, "&#39;")), -1 != W.indexOf("\x00") && (W = W.replace(Cb, "&#0;")));
    vk = W;
    uk = vk;

    function wk(a) { return JSON.stringify(a).replace(/</g, "\\x3c") }

    function xk(a, b) {
        for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d];
        if (c.some(function(e) { return "" !== e })) throw Error("safeScriptWithArgs only allows empty string expressions to enable inline comments.");
        Hc(a, "safeScriptWithArgs is a template literal tag function that only accepts template literals. For example, safeScriptWithArgs`foo`;");
        return function(e) {
            for (var f = [], g = 0; g < arguments.length; ++g) f[g] = arguments[g];
            f = f.map(wk);
            f = "(" + a.join("") + ")(" + f.join(",") + ")";
            var h;
            return Gc(f, null ===
                (h = Cc()) || void 0 === h ? void 0 : h.createScript(f))
        }
    };
    var yk = ja(["", "function(iframeId, globalVarName){", "document.getElementById(iframeId)", ".addEventListener('load', function() {", "var i=this.id,", "s=window[globalVarName],", "H=s&&s.handlers,", "h=H&&H[i],", "w=this.contentWindow,d;", "try{d=w.document}catch(e){}", "if(h&&d&&(!d.body||!d.body.firstChild)){", "if(h.call){setTimeout(h,0)}", "else if(h.match){", "try{h=s.upd(h,i)}catch(e){}", "w.location.replace(h)", "}", "}", "});}"]);
    var zk = null;

    function X(a, b, c, d) { d = void 0 === d ? !1 : d;
        V.call(this, a, b);
        this.Z = c;
        this.Ra = d }
    x(X, V);
    X.prototype.ha = function() { return this.Z };
    X.prototype.ba = function(a, b, c) { b.google_ad_resize || (c.style.height = this.height() + "px", b.rpe = !0) };

    function Ak(a) { return function(b) { return !!(b.Z & a) } };
    var Bk = Wb("script");

    function Ck(a, b, c, d, e, f, g, h, k, l, m, r) { this.s = a;
        this.W = b;
        this.Z = void 0 === c ? null : c;
        this.h = void 0 === d ? null : d;
        this.N = void 0 === e ? null : e;
        this.g = void 0 === f ? null : f;
        this.i = void 0 === g ? null : g;
        this.H = void 0 === h ? null : h;
        this.L = void 0 === k ? null : k;
        this.j = void 0 === l ? null : l;
        this.l = void 0 === m ? null : m;
        this.M = void 0 === r ? null : r;
        this.O = this.u = this.C = null }
    Ck.prototype.size = function() { return this.W };

    function Dk(a, b, c) {
        null != a.Z && (c.google_responsive_formats = a.Z);
        null != a.N && (c.google_safe_for_responsive_override = a.N);
        null != a.g && (!0 === a.g ? c.google_full_width_responsive_allowed = !0 : (c.google_full_width_responsive_allowed = !1, c.gfwrnwer = a.g));
        null != a.i && !0 !== a.i && (c.gfwrnher = a.i);
        var d = a.l || c.google_ad_width;
        null != d && (c.google_resizing_width = d);
        d = a.j || c.google_ad_height;
        null != d && (c.google_resizing_height = d);
        d = a.size().X(b);
        var e = a.size().height();
        c.google_ad_resize || (c.google_ad_width = d, c.google_ad_height =
            e, c.google_ad_format = a.size().ka(b), c.google_responsive_auto_format = a.s, null != a.h && (c.armr = a.h), c.google_ad_resizable = !0, c.google_override_format = 1, c.google_loader_features_used = 128, !0 === a.g && (c.gfwrnh = a.size().height() + "px"));
        null != a.H && (c.gfwroml = a.H);
        null != a.L && (c.gfwromr = a.L);
        null != a.j && (c.gfwroh = a.j);
        null != a.l && (c.gfwrow = a.l);
        null != a.M && (c.gfwroz = a.M);
        null != a.C && (c.gml = a.C);
        null != a.u && (c.gmr = a.u);
        null != a.O && (c.gzi = a.O);
        b = je();
        b = me(b) || b;
        ne(b.location, "google_responsive_slot_debug") && (c.ds = "outline:thick dashed " +
            (d && e ? !0 !== a.g || !0 !== a.i ? "#ffa500" : "#0f0" : "#f00") + " !important;");
        ne(b.location, "google_responsive_dummy_ad") && (Xa([1, 2, 3, 4, 5, 6, 7, 8], a.s) || 1 === a.h) && 2 !== a.h && (a = JSON.stringify({ googMsgType: "adpnt", key_value: [{ key: "qid", value: "DUMMY_AD" }] }), c.dash = "<" + Bk + ">window.top.postMessage('" + a + "', '*');\n          </" + Bk + '>\n          <div id="dummyAd" style="width:' + d + "px;height:" + e + 'px;\n            background:#ddd;border:3px solid #f00;box-sizing:border-box;\n            color:#000;">\n            <p>Requested size:' +
            d + "x" + e + "</p>\n            <p>Rendered size:" + d + "x" + e + "</p>\n          </div>")
    };
    /* 
     
     Copyright 2019 The AMP HTML Authors. All Rights Reserved. 
     
     Licensed under the Apache License, Version 2.0 (the "License"); 
     you may not use this file except in compliance with the License. 
     You may obtain a copy of the License at 
     
          http://www.apache.org/licenses/LICENSE-2.0 
     
     Unless required by applicable law or agreed to in writing, software 
     distributed under the License is distributed on an "AS-IS" BASIS, 
     WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. 
     See the License for the specific language governing permissions and 
     limitations under the License. 
    */
    var Ek = {},
        Fk = (Ek.image_stacked = 1 / 1.91, Ek.image_sidebyside = 1 / 3.82, Ek.mobile_banner_image_sidebyside = 1 / 3.82, Ek.pub_control_image_stacked = 1 / 1.91, Ek.pub_control_image_sidebyside = 1 / 3.82, Ek.pub_control_image_card_stacked = 1 / 1.91, Ek.pub_control_image_card_sidebyside = 1 / 3.74, Ek.pub_control_text = 0, Ek.pub_control_text_card = 0, Ek),
        Gk = {},
        Hk = (Gk.image_stacked = 80, Gk.image_sidebyside = 0, Gk.mobile_banner_image_sidebyside = 0, Gk.pub_control_image_stacked = 80, Gk.pub_control_image_sidebyside = 0, Gk.pub_control_image_card_stacked =
            85, Gk.pub_control_image_card_sidebyside = 0, Gk.pub_control_text = 80, Gk.pub_control_text_card = 80, Gk),
        Ik = {},
        Jk = (Ik.pub_control_image_stacked = 100, Ik.pub_control_image_sidebyside = 200, Ik.pub_control_image_card_stacked = 150, Ik.pub_control_image_card_sidebyside = 250, Ik.pub_control_text = 100, Ik.pub_control_text_card = 150, Ik);

    function Kk(a) {
        var b = 0;
        a.J && b++;
        a.F && b++;
        a.G && b++;
        if (3 > b) return { I: "Tags data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num should be set together." };
        b = a.J.split(",");
        var c = a.G.split(",");
        a = a.F.split(",");
        if (b.length !== c.length || b.length !== a.length) return { I: 'Lengths of parameters data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num must match. Example: \n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside"' };
        if (2 < b.length) return { I: "The parameter length of attribute data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num is too long. At most 2 parameters for each attribute are needed: one for mobile and one for desktop, while you are providing " + (b.length + ' parameters. Example: \n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside".') };
        for (var d = [], e = [], f = 0; f < b.length; f++) {
            var g =
                Number(c[f]);
            if (isNaN(g) || 0 === g) return { I: "Wrong value '" + c[f] + "' for data-matched-content-rows-num." };
            d.push(g);
            g = Number(a[f]);
            if (isNaN(g) || 0 === g) return { I: "Wrong value '" + a[f] + "' for data-matched-content-columns-num." };
            e.push(g)
        }
        return { G: d, F: e, Ba: b }
    }

    function Lk(a) { return 1200 <= a ? { width: 1200, height: 600 } : 850 <= a ? { width: a, height: Math.floor(.5 * a) } : 550 <= a ? { width: a, height: Math.floor(.6 * a) } : 468 <= a ? { width: a, height: Math.floor(.7 * a) } : { width: a, height: Math.floor(3.44 * a) } };
    var Mk = ["google_content_recommendation_ui_type", "google_content_recommendation_columns_num", "google_content_recommendation_rows_num"];

    function Nk(a, b) { V.call(this, a, b) }
    x(Nk, V);
    Nk.prototype.X = function(a) { return Math.min(1200, Math.max(this.minWidth(), Math.round(a))) };

    function Ok(a, b) { Pk(a, b); if ("pedestal" == b.google_content_recommendation_ui_type) return new Ck(9, new Nk(a, Math.floor(a * b.google_phwr))); var c = fd();
        468 > a ? c ? (c = a - 8 - 8, c = Math.floor(c / 1.91 + 70) + Math.floor(11 * (c * Fk.mobile_banner_image_sidebyside + Hk.mobile_banner_image_sidebyside) + 96), a = { V: a, T: c, F: 1, G: 12, J: "mobile_banner_image_sidebyside" }) : (a = Lk(a), a = { V: a.width, T: a.height, F: 1, G: 13, J: "image_sidebyside" }) : (a = Lk(a), a = { V: a.width, T: a.height, F: 4, G: 2, J: "image_stacked" });
        Qk(b, a); return new Ck(9, new Nk(a.V, a.T)) }

    function Rk(a, b) {
        Pk(a, b);
        var c = Kk({ G: b.google_content_recommendation_rows_num, F: b.google_content_recommendation_columns_num, J: b.google_content_recommendation_ui_type });
        if (c.I) a = { V: 0, T: 0, F: 0, G: 0, J: "image_stacked", I: c.I };
        else {
            var d = 2 === c.Ba.length && 468 <= a ? 1 : 0;
            var e = c.Ba[d];
            e = 0 === e.indexOf("pub_control_") ? e : "pub_control_" + e;
            var f = Jk[e];
            for (var g = c.F[d]; a / g < f && 1 < g;) g--;
            f = g;
            c = c.G[d];
            d = Math.floor(((a - 8 * f - 8) / f * Fk[e] + Hk[e]) * c + 8 * c + 8);
            a = 1500 < a ? { width: 0, height: 0, na: "Calculated slot width is too large: " + a } :
                1500 < d ? { width: 0, height: 0, na: "Calculated slot height is too large: " + d } : { width: a, height: d };
            a = a.na ? { V: 0, T: 0, F: 0, G: 0, J: e, I: a.na } : { V: a.width, T: a.height, F: f, G: c, J: e }
        }
        if (a.I) throw new P(a.I);
        Qk(b, a);
        return new Ck(9, new Nk(a.V, a.T))
    }

    function Pk(a, b) { if (0 >= a) throw new P("Invalid responsive width from Matched Content slot " + b.google_ad_slot + ": " + a + ". Please ensure to put this Matched Content slot into a non-zero width div container."); }

    function Qk(a, b) { a.google_content_recommendation_ui_type = b.J;
        a.google_content_recommendation_columns_num = b.F;
        a.google_content_recommendation_rows_num = b.G };

    function Sk(a, b) { V.call(this, a, b) }
    x(Sk, V);
    Sk.prototype.X = function() { return this.minWidth() };
    Sk.prototype.ba = function(a, b, c) { yi(a, c);
        b.google_ad_resize || (c.style.height = this.height() + "px", b.rpe = !0) };
    var Tk = { "image-top": function(a) { return 600 >= a ? 284 + .414 * (a - 250) : 429 }, "image-middle": function(a) { return 500 >= a ? 196 - .13 * (a - 250) : 164 + .2 * (a - 500) }, "image-side": function(a) { return 500 >= a ? 205 - .28 * (a - 250) : 134 + .21 * (a - 500) }, "text-only": function(a) { return 500 >= a ? 187 - .228 * (a - 250) : 130 }, "in-article": function(a) { return 420 >= a ? a / 1.2 : 460 >= a ? a / 1.91 + 130 : 800 >= a ? a / 4 : 200 } };

    function Uk(a, b) { V.call(this, a, b) }
    x(Uk, V);
    Uk.prototype.X = function() { return Math.min(1200, this.minWidth()) };

    function Vk(a, b, c, d, e) {
        var f = e.google_ad_layout || "image-top";
        if ("in-article" == f && "false" != e.google_full_width_responsive) { var g = ri(b, c, a, .2, e); if (!0 !== g) e.gfwrnwer = g;
            else if (g = Q(b)) e.google_full_width_responsive_allowed = !0, c.parentElement && (wi(b, c), yi(b, c), a = g) }
        if (250 > a) throw new P("Fluid responsive ads must be at least 250px wide: availableWidth=" + a);
        a = Math.min(1200, Math.floor(a));
        if (d && "in-article" != f) {
            f = Math.ceil(d);
            if (50 > f) throw new P("Fluid responsive ads must be at least 50px tall: height=" +
                f);
            return new Ck(11, new V(a, f))
        }
        if ("in-article" != f && (d = e.google_ad_layout_key)) {
            f = "" + d;
            b = Math.pow(10, 3);
            if (d = (c = f.match(/([+-][0-9a-z]+)/g)) && c.length) { e = []; for (g = 0; g < d; g++) e.push(parseInt(c[g], 36) / b);
                b = e } else b = null;
            if (!b) throw new P("Invalid data-ad-layout-key value: " + f);
            f = (a + -725) / 1E3;
            c = 0;
            d = 1;
            e = b.length;
            for (g = 0; g < e; g++) c += b[g] * d, d *= f;
            f = Math.ceil(1E3 * c - -725 + 10);
            if (isNaN(f)) throw new P("Invalid height: height=" + f);
            if (50 > f) throw new P("Fluid responsive ads must be at least 50px tall: height=" + f);
            if (1200 < f) throw new P("Fluid responsive ads must be at most 1200px tall: height=" + f);
            return new Ck(11, new V(a, f))
        }
        d = Tk[f];
        if (!d) throw new P("Invalid data-ad-layout value: " + f);
        c = Ci(c, b);
        b = Q(b);
        b = "in-article" !== f || c || a !== b ? Math.ceil(d(a)) : Math.ceil(1.25 * d(a));
        return new Ck(11, "in-article" == f ? new Uk(a, b) : new V(a, b))
    };

    function Wk(a) { return function(b) { for (var c = a.length - 1; 0 <= c; --c)
                if (!a[c](b)) return !1;
            return !0 } }

    function Xk(a, b, c) { for (var d = a.length, e = null, f = 0; f < d; ++f) { var g = a[f]; if (b(g)) { if (!c || c(g)) return g;
                null === e && (e = g) } } return e };
    var Y = [new X(970, 90, 2), new X(728, 90, 2), new X(468, 60, 2), new X(336, 280, 1), new X(320, 100, 2), new X(320, 50, 2), new X(300, 600, 4), new X(300, 250, 1), new X(250, 250, 1), new X(234, 60, 2), new X(200, 200, 1), new X(180, 150, 1), new X(160, 600, 4), new X(125, 125, 1), new X(120, 600, 4), new X(120, 240, 4), new X(120, 120, 1, !0)],
        Yk = [Y[6], Y[12], Y[3], Y[0], Y[7], Y[14], Y[1], Y[8], Y[10], Y[4], Y[15], Y[2], Y[11], Y[5], Y[13], Y[9], Y[16]];

    function Zk(a, b, c, d, e) { "false" == e.google_full_width_responsive ? c = { A: a, B: 1 } : "autorelaxed" == b && e.google_full_width_responsive || $k(b) || e.google_ad_resize ? (488 > Q(c) && (ti(c) || U(1002)) && wi(c, d), b = si(a, c, d, e), c = !0 !== b ? { A: a, B: b } : { A: Q(c) || a, B: !0 }) : c = { A: a, B: 2 };
        b = c.B; return !0 !== b ? { A: a, B: b } : d.parentElement ? { A: c.A, B: b } : { A: a, B: b } }

    function al(a, b, c, d, e) { var f = nf(247, function() { return Zk(a, b, c, d, e) }),
            g = f.A;
        f = f.B; var h = !0 === f,
            k = N(d.style.width),
            l = N(d.style.height),
            m = bl(g, b, c, d, e, h);
        g = m.U;
        h = m.P; var r = m.ha;
        m = m.Aa; var p = cl(b, r),
            t, v = (t = zi(d, c, "marginLeft", N)) ? t + "px" : "",
            B = (t = zi(d, c, "marginRight", N)) ? t + "px" : "";
        t = zi(d, c, "zIndex") || ""; return new Ck(p, g, r, null, m, f, h, v, B, l, k, t) }

    function $k(a) { return "auto" == a || /^((^|,) *(horizontal|vertical|rectangle) *)+$/.test(a) }

    function bl(a, b, c, d, e, f) {
        b = "auto" == b ? .25 >= a / Math.min(1200, Q(c)) ? 4 : 3 : qi(b);
        var g = !1,
            h = !1;
        if (488 > Q(c)) { var k = pi(d, c); var l = Ci(d, c);
            g = !l && k;
            h = l && k }
        l = 488 > Q(c);
        var m = [Ai(a), Ak(b)];
        ti(c) || m.push(Bi(l, c, d, h));
        null != e.google_max_responsive_height && m.push(Ei(e.google_max_responsive_height));
        var r = [function(t) { return !t.Ra }];
        !g && !h || ti(c) || (g = Fi(c, d), r.push(Ei(g)));
        var p = l && !f && 3 === b && dl(c) ? new X(a, Math.floor(a / 1.2), 1) : Xk(Yk.slice(0), Wk(m), Wk(r));
        if (!p) throw new P("No slot size for availableWidth=" + a);
        l = nf(248,
            function() {
                var t;
                a: if (f) {
                    if (e.gfwrnh && (t = N(e.gfwrnh))) { t = { U: new Sk(a, t), P: !0 }; break a }
                    t = a / 1.2;
                    if (ti(c)) var v = t;
                    else { v = Math; var B = v.min; if (e.google_resizing_allowed || "true" == e.google_full_width_responsive) var D = Infinity;
                        else { D = d; var pa = Infinity;
                            do { var Ia = zi(D, c, "height", N);
                                Ia && (pa = Math.min(pa, Ia));
                                (Ia = zi(D, c, "maxHeight", N)) && (pa = Math.min(pa, Ia)) } while ((D = D.parentElement) && "HTML" != D.tagName);
                            D = pa }
                        v = B.call(v, t, D); if (v < .5 * t || 100 > v) v = t }
                    U(282) && !Ci(d, c) && (v = Math.max(v, .5 * Af(c).clientHeight));
                    t = {
                        U: new Sk(a,
                            Math.floor(v)),
                        P: v < t ? 102 : !0
                    }
                } else t = { U: p, P: 100 };
                return t
            });
        g = l.U;
        l = l.P;
        return "in-article" === e.google_ad_layout && el(c) ? { U: fl(a, c, d, g, e), P: !1, ha: b, Aa: k } : { U: g, P: l, ha: b, Aa: k }
    }

    function cl(a, b) { if ("auto" == a) return 1; switch (b) {
            case 2:
                return 2;
            case 1:
                return 3;
            case 4:
                return 4;
            case 3:
                return 5;
            case 6:
                return 6;
            case 5:
                return 7;
            case 7:
                return 8 } throw Error("bad mask"); }

    function fl(a, b, c, d, e) { var f = e.google_ad_height || zi(c, b, "height", N);
        b = Vk(a, b, c, f, e).size(); return b.minWidth() * b.height() > a * d.height() ? new X(b.minWidth(), b.height(), 1) : d }

    function el(a) { return U(227) || a.location && "#hffwroe2etoq" == a.location.hash }

    function dl(a) { return U(232) || a.location && "#affwroe2etoq" == a.location.hash };

    function gl(a, b) { V.call(this, a, b) }
    x(gl, V);
    gl.prototype.X = function() { return this.minWidth() };
    gl.prototype.ka = function(a) { return V.prototype.ka.call(this, a) + "_0ads_al" };
    var hl = [new gl(728, 15), new gl(468, 15), new gl(200, 90), new gl(180, 90), new gl(160, 90), new gl(120, 90)];

    function il(a, b, c) { var d = 250,
            e = 90;
        d = void 0 === d ? 130 : d;
        e = void 0 === e ? 30 : e; var f = Xk(hl, Ai(a)); if (!f) throw new P("No link unit size for width=" + a + "px");
        a = Math.min(a, 1200);
        f = f.height();
        b = Math.max(f, b);
        d = (new Ck(10, new gl(a, Math.min(b, 15 == f ? e : d)))).size();
        b = d.minWidth();
        d = d.height();
        15 <= c && (d = c); return new Ck(10, new gl(b, d)) }

    function jl(a, b, c, d) { if ("false" == d.google_full_width_responsive) return d.google_full_width_responsive_allowed = !1, d.gfwrnwer = 1, a; var e = si(a, b, c, d); if (!0 !== e) return d.google_full_width_responsive_allowed = !1, d.gfwrnwer = e, a;
        e = Q(b); if (!e) return a;
        d.google_full_width_responsive_allowed = !0;
        yi(b, c); return e };

    function kl(a, b, c, d, e) { var f;
        (f = Q(b)) ? 488 > Q(b) ? b.innerHeight >= b.innerWidth ? (e.google_full_width_responsive_allowed = !0, yi(b, c), f = { A: f, B: !0 }) : f = { A: a, B: 5 } : f = { A: a, B: 4 }: f = { A: a, B: 10 }; var g = f;
        f = g.A;
        g = g.B; if (!0 !== g || a == f) return new Ck(12, new V(a, d), null, null, !0, g, 100);
        a = bl(f, "auto", b, c, e, !0); return new Ck(1, a.U, a.ha, 2, !0, g, a.P) };

    function ll(a, b) { var c = b.google_ad_format; if ("autorelaxed" == c) { a: { if ("pedestal" != b.google_content_recommendation_ui_type)
                    for (a = w(Mk), c = a.next(); !c.done; c = a.next())
                        if (null != b[c.value]) { b = !0; break a }
                b = !1 } return b ? 9 : 5 } if ($k(c)) return 1; if ("link" == c) return 4; if ("fluid" == c) { if (c = "in-article" === b.google_ad_layout) c = U(208) || U(227) || a.location && ("#hffwroe2etop" == a.location.hash || "#hffwroe2etoq" == a.location.hash); return c ? (ml(b), 1) : 8 } if (27 === b.google_reactive_ad_format) return ml(b), 1 }

    function nl(a, b, c, d, e) { e = b.offsetWidth || (c.google_ad_resize || (void 0 === e ? !1 : e)) && zi(b, d, "width", N) || c.google_ad_width || 0;
        (U(310) || d.location && "#ooimne2e" == d.location.hash) && 4 === a && (c.google_ad_format = "auto", a = 1); var f = (f = ol(a, e, b, c, d)) ? f : al(e, c.google_ad_format, d, b, c);
        f.size().ba(d, c, b);
        Dk(f, e, c);
        1 != a && (a = f.size().height(), b.style.height = a + "px") }

    function ol(a, b, c, d, e) { var f = d.google_ad_height || zi(c, e, "height", N); switch (a) {
            case 5:
                return a = nf(247, function() { return Zk(b, d.google_ad_format, e, c, d) }), f = a.A, a = a.B, !0 === a && b != f && yi(e, c), !0 === a ? d.google_full_width_responsive_allowed = !0 : (d.google_full_width_responsive_allowed = !1, d.gfwrnwer = a), Ok(f, d);
            case 9:
                return Rk(b, d);
            case 4:
                return a = jl(b, e, c, d), il(a, Fi(e, c), f);
            case 8:
                return Vk(b, e, c, f, d);
            case 10:
                return kl(b, e, c, f, d) } }

    function ml(a) { a.google_ad_format = "auto";
        a.armr = 3 };

    function Z(a) { this.j = [];
        this.h = a || window;
        this.g = 0;
        this.i = null;
        this.l = 0 }
    var pl;
    n = Z.prototype;
    n.Na = function(a, b) { 0 != this.g || 0 != this.j.length || b && b != window ? this.wa(a, b) : (this.g = 2, this.Ga(new ql(a, window))) };
    n.wa = function(a, b) { this.j.push(new ql(a, b || this.h));
        rl(this) };
    n.Ua = function(a) { this.g = 1; if (a) { var b = of(188, La(this.Fa, this, !0));
            this.i = this.h.setTimeout(b, a) } };
    n.Fa = function(a) { a && ++this.l;
        1 == this.g && (null != this.i && (this.h.clearTimeout(this.i), this.i = null), this.g = 0);
        rl(this) };
    n.bb = function() { return !(!window || !Array) };
    n.Oa = function() { return this.l };

    function rl(a) { var b = of(189, La(a.eb, a));
        a.h.setTimeout(b, 0) }
    n.eb = function() { if (0 == this.g && this.j.length) { var a = this.j.shift();
            this.g = 2; var b = of(190, La(this.Ga, this, a));
            a.g.setTimeout(b, 0);
            rl(this) } };
    n.Ga = function(a) { this.g = 0;
        a.h() };

    function sl(a) { try { return a.sz() } catch (b) { return !1 } }

    function tl(a) { return !!a && ("object" === typeof a || "function" === typeof a) && sl(a) && de(a.nq) && de(a.nqa) && de(a.al) && de(a.rl) }

    function ul() { if (pl && sl(pl)) return pl; var a = Hj(),
            b = a.google_jobrunner; return tl(b) ? pl = b : a.google_jobrunner = pl = new Z(a) }

    function vl(a, b) { ul().nq(a, b) }

    function wl(a, b) { ul().nqa(a, b) }
    Z.prototype.nq = Z.prototype.Na;
    Z.prototype.nqa = Z.prototype.wa;
    Z.prototype.al = Z.prototype.Ua;
    Z.prototype.rl = Z.prototype.Fa;
    Z.prototype.sz = Z.prototype.bb;
    Z.prototype.tc = Z.prototype.Oa;

    function ql(a, b) { this.h = a;
        this.g = b };

    function xl(a, b) { var c = me(b); if (c) { c = Q(c); var d = kd(a, b) || {},
                e = d.direction; if ("0px" === d.width && "none" != d.cssFloat) return -1; if ("ltr" === e && c) return Math.floor(Math.min(1200, c - a.getBoundingClientRect().left)); if ("rtl" === e && c) return a = b.document.body.getBoundingClientRect().right - a.getBoundingClientRect().right, Math.floor(Math.min(1200, c - a - Math.floor((c - b.document.body.clientWidth) / 2))) } return -1 };
    var yl = {},
        zl = (yl.google_ad_modifications = !0, yl.google_analytics_domain_name = !0, yl.google_analytics_uacct = !0, yl.google_pause_ad_requests = !0, yl.google_trust_token_operation_status = !0, yl.google_user_agent_client_hint = !0, yl);

    function Al(a) { return (a = a.innerText || a.innerHTML) && (a = a.replace(/^\s+/, "").split(/\r?\n/, 1)[0].match(/^\x3c!--+(.*?)(?:--+>)?\s*$/)) && /google_ad_client/.test(a[1]) ? a[1] : null }

    function Bl(a) { if (a = a.innerText || a.innerHTML)
            if (a = a.replace(/^\s+|\s+$/g, "").replace(/\s*(\r?\n)+\s*/g, ";"), (a = a.match(/^\x3c!--+(.*?)(?:--+>)?$/) || a.match(/^\/*\s*<!\[CDATA\[(.*?)(?:\/*\s*\]\]>)?$/i)) && /google_ad_client/.test(a[1])) return a[1];
        return null }

    function Cl(a) { switch (a) {
            case "true":
                return !0;
            case "false":
                return !1;
            case "null":
                return null;
            case "undefined":
                break;
            default:
                try { var b = a.match(/^(?:'(.*)'|"(.*)")$/); if (b) return b[1] || b[2] || ""; if (/^[-+]?\d*(\.\d+)?$/.test(a)) { var c = parseFloat(a); return c === c ? c : void 0 } } catch (d) {} } };

    function Dl(a, b, c) { var d = window; return function() { var e = We(),
                f = 3; try { var g = b.apply(this, arguments) } catch (h) { f = 13; if (c) return c(a, h), g; throw h; } finally { d.google_measure_js_timing && e && (e = { label: a.toString(), value: e, duration: (We() || 0) - e, type: f }, f = d.google_js_reporting_queue = d.google_js_reporting_queue || [], 2048 > f.length && f.push(e)) } return g } }

    function El(a, b) { return Dl(a, b, function(c, d) {
            (new hf).D(c, d) }) };

    function Fl(a, b) { return null == b ? "&" + a + "=null" : "&" + a + "=" + Math.floor(b) }

    function Gl() { var a = new q.Set; try { if ("undefined" === typeof googletag || !googletag.pubads) return a; for (var b = googletag.pubads(), c = w(b.getSlots()), d = c.next(); !d.done; d = c.next()) a.add(d.value.getSlotId().getDomId()) } catch (e) {} return a }

    function Hl(a) { a = a.id; return null != a && (Gl().has(a) || u(a, "startsWith").call(a, "google_ads_iframe_") || u(a, "startsWith").call(a, "aswift")) }

    function Il() { var a = [].concat(ka(document.getElementsByTagName("iframe"))).filter(Hl),
            b = [].concat(ka(Gl())).map(function(c) { return document.getElementById(c) }).filter(function(c) { return null !== c }); return [].concat(ka(a), ka(b)).map(function(c) { return c.getBoundingClientRect() }) }

    function Jl(a, b) { if (!a.sources) return !1; var c = a.sources.reduce(function(d, e) { e = e.previousRect; return d ? e ? e.top < d.top ? e : d : d : e }, null); return !!c && b.some(function(d) { var e = dh(1929, 50); if (0 === e) d = !0;
            else { var f = Math.min(c.right, d.right) - Math.max(c.left, d.left),
                    g = Math.min(c.bottom, d.bottom) - Math.max(c.top, d.top);
                d = 0 >= f || 0 >= g ? !1 : 100 * f * g / ((d.right - d.left) * (d.bottom - d.top)) >= e } return d }) }

    function Kl() { R.call(this);
        this.O = this.$ = this.oa = this.pa = this.g = this.H = this.u = this.j = 0;
        this.W = !1;
        this.L = this.l = this.h = 0; var a = document.querySelector("[data-google-query-id]");
        this.ra = a ? a.getAttribute("data-google-query-id") : null;
        this.M = null;
        this.qa = !1;
        this.N = function() {} }
    x(Kl, R);

    function Ll() { var a = new Kl; if (U(203) && !window.google_plmetrics && window.PerformanceObserver) { window.google_plmetrics = !0; for (var b = w(["layout-shift", "largest-contentful-paint", "first-input", "longtask"]), c = b.next(); !c.done; c = b.next()) c = c.value, Ml(a).observe({ type: c, buffered: !U(240) });
            Nl(a) } }

    function Ml(a) {
        a.M || (a.M = new PerformanceObserver(El(640, function(b) {
            var c = [];
            b = w(b.getEntries());
            for (var d = b.next(); !d.done; d = b.next()) switch (d = d.value, d.entryType) {
                case "layout-shift":
                    0 === c.length && c.push.apply(c, ka(Il()));
                    var e = a;
                    d.hadRecentInput || U(241) && !(.01 < d.value) || (e.j += Number(d.value), Number(d.value) > e.u && (e.u = Number(d.value)), e.H += 1, Jl(d, c) && (e.g += d.value, e.pa++));
                    break;
                case "largest-contentful-paint":
                    a.oa = Math.floor(d.renderTime || d.loadTime);
                    a.$ = d.size;
                    break;
                case "first-input":
                    a.O = Number((d.processingStart -
                        d.startTime).toFixed(3));
                    a.W = !0;
                    break;
                case "longtask":
                    d = Math.max(0, d.duration - 50), a.h += d, a.l = Math.max(a.l, d), a.L += 1
            }
        })));
        return a.M
    }

    function Nl(a) { var b = El(641, function() { var f = document;
                2 == ({ visible: 1, hidden: 2, prerender: 3, preview: 4, unloaded: 5 }[f.visibilityState || f.webkitVisibilityState || f.mozVisibilityState || ""] || 0) && Ol(a) }),
            c = El(641, function() { return void Ol(a) });
        document.addEventListener("visibilitychange", b);
        document.addEventListener("unload", c); var d = dh(1905),
            e;
        0 < d && (e = setTimeout(c, 1E3 * d));
        a.N = function() { document.removeEventListener("visibilitychange", b);
            document.removeEventListener("unload", c);
            Ml(a).disconnect();
            e && clearTimeout(e) } }
    Kl.prototype.i = function() { R.prototype.i.call(this);
        this.N() };

    function Ol(a) {
        if (!a.qa) {
            a.qa = !0;
            Ml(a).takeRecords();
            var b = "https://pagead2.googlesyndication.com/pagead/gen_204?id=plmetrics";
            window.LayoutShift && (b += "&cls=" + a.j.toFixed(3), b += "&mls=" + a.u.toFixed(3), b += Fl("nls", a.H), window.LayoutShiftAttribution && (b += "&cas=" + a.g.toFixed(3), b += Fl("nas", a.pa)));
            window.LargestContentfulPaint && (b += Fl("lcp", a.oa), b += Fl("lcps", a.$));
            window.PerformanceEventTiming && a.W && (b += Fl("fid", a.O));
            window.PerformanceLongTaskTiming && (b += Fl("cbt", a.h), b += Fl("mbt", a.l), b += Fl("nlt", a.L));
            for (var c = 0, d = w(document.getElementsByTagName("iframe")), e = d.next(); !e.done; e = d.next()) Hl(e.value) && c++;
            b += Fl("nif", c);
            b += Fl("ifi", fe(window));
            c = Fg.m().g();
            b += "&eid=" + encodeURIComponent(c.join());
            b += "&top=" + (y === y.top ? 1 : 0);
            if (a.ra) c = "&qqid=" + encodeURIComponent(a.ra);
            else { if ("number" !== typeof y.goog_pvsid) try { Object.defineProperty(y, "goog_pvsid", { value: Math.floor(Math.random() * Math.pow(2, 52)), configurable: !1 }) } catch (f) {}
                c = Fl("pvsid", Number(y.goog_pvsid) || -1) }
            b += c;
            window.googletag && (b += "&gpt=1");
            window.fetch(b, { keepalive: !0, credentials: "include", redirect: "follow", method: "get", mode: "no-cors" });
            a.s || (a.s = !0, a.i())
        }
    };

    function Pl() { if (U(1928)) { var a = window.navigator.userAgent,
                b = /Chrome\/(\S+)/.exec(a); if (/Android/.test(a) && b) return 0 <= Db(b[1], "89.0.4380.2") } return !1 };
    var Ql = [{ issuerOrigin: "https://adservice.google.com", issuancePath: "/tt/i", redemptionPath: "/tt/r", shouldRedeemToken: function() { return !0 }, shouldRequestToken: function() { return !1 } }, { issuerOrigin: "https://attestation.android.com", issuancePath: "/att/i", redemptionPath: "/att/r", shouldRedeemToken: function() { return Pl() }, shouldRequestToken: function() { return Pl() } }];

    function Rl(a) { R.call(this);
        Sl();
        this.j = Ql;
        this.h = a;
        document.hasTrustToken && (this.g = Tl(this)) }
    x(Rl, R);

    function Sl() { var a = fh();
        0 < a.length ? a.forEach(function(b) { b && Hd(b) }) : (a = eh(1923)) && Hd(a) }

    function Tl(a) { var b = a.j.map(function(c) { return { issuerOrigin: c.issuerOrigin, state: 1 } });
        a.h(b); return b }

    function Ul(a, b, c) { var d = u(a.g, "findIndex").call(a.g, function(e) { return e.issuerOrigin === b });
        0 <= d && (a.g[d].state = c, a.h(a.g)) }

    function Vl(a, b) { window.fetch(b.issuerOrigin + b.redemptionPath, { keepalive: !0, redirect: "follow", method: "get", trustToken: { type: /Chrome\/8[4-7]/.test(window.navigator.userAgent) ? "srr-token-redemption" : "token-redemption", issuer: b.issuerOrigin, refreshPolicy: "none" } }).then(function(c) { if (!c.ok) throw Error(c.status + ": Network response was not ok!");
            Ul(a, b.issuerOrigin, 6) }).catch(function(c) { c && "NoModificationAllowedError" === c.name ? Ul(a, b.issuerOrigin, 6) : Ul(a, b.issuerOrigin, 5) });
        Ul(a, b.issuerOrigin, 2) }

    function Wl(a, b, c) { window.fetch(b.issuerOrigin + b.issuancePath, { trustToken: { type: "token-request" } }).then(function(d) { if (!d.ok) throw Error(d.status + ": Network response was not ok!");
            Ul(a, b.issuerOrigin, 10);
            c && Vl(a, b) }).catch(function(d) { d && "NoModificationAllowedError" === d.name ? (Ul(a, b.issuerOrigin, 10), c && Vl(a, b)) : Ul(a, b.issuerOrigin, 9) });
        Ul(a, b.issuerOrigin, 8) }

    function Xl(a) { document.hasTrustToken && a.j.forEach(function(b) { var c = b.shouldRedeemToken(),
                d = b.shouldRequestToken();
            c || d ? document.hasTrustToken(b.issuerOrigin).then(function(e) { e ? c && Vl(a, b) : d ? Wl(a, b, c) : Ul(a, b.issuerOrigin, 3) }) : Ul(a, b.issuerOrigin, 7) }) };

    function Yl(a) { E(this, a, Zl, null) }
    z(Yl, C);
    var Zl = [6];
    var $l = ["platform", "platformVersion", "architecture", "model", "uaFullVersion"];

    function am() { var a = L; return a.navigator && a.navigator.userAgentData && "function" === typeof a.navigator.userAgentData.getHighEntropyValues ? a.navigator.userAgentData.getHighEntropyValues($l).then(function(b) { var c = new Yl;
            c = hc(c, 1, b.platform);
            c = hc(c, 2, b.platformVersion);
            c = hc(c, 3, b.architecture);
            c = hc(c, 4, b.model); return hc(c, 5, b.uaFullVersion) }) : null };
    var bm = ja(["function(showAdsImplFn,slotVarsMap,iframeId){", "window.parent[showAdsImplFn]({", "iframeWin: window,pubWin: window.parent,", "vars: window.parent[slotVarsMap][iframeId]});}"]),
        cm = ja(["", "function(singleLoadWindow,iframeStartTime,asyncIframeId,iframeId){", "window[singleLoadWindow]=window.parent;", "window[iframeStartTime]=new Date().getTime();", "window[asyncIframeId]=iframeId;", "}"]);

    function dm(a) { a.google_sa_impl && !a.document.getElementById("google_shimpl") && (a.google_sa_queue = null, a.google_sl_win = null, a.google_sa_impl = null) }

    function em(a, b, c) { var d = L;
        c = void 0 === c ? "" : c;
        dm(d);
        d.google_sa_queue || (d.google_sa_queue = [], d.google_sl_win = d, d.google_process_slots = function() { return fm(d) }, a = gm(d, c, a, b), jd(d.document, a, U(356)).id = "google_shimpl") }
    var fm = of(215, function(a) { var b = a.google_sa_queue,
            c = b.shift();
        a.google_sa_impl || pf("shimpl", { t: "no_fn" }); "function" === typeof c && nf(216, c);
        b.length && a.setTimeout(function() { return fm(a) }, 0) });

    function hm(a, b, c) { a.google_sa_queue = a.google_sa_queue || [];
        a.google_sa_impl ? c(b) : a.google_sa_queue.push(b) }

    function im(a) { if (Math.random() < dh(1046)) return rb(Lc(a.Ya)); switch (dh(1008)) {
            case 1:
                return rb(Lc(a.Xa));
            case 2:
                return rb(Lc(a.Wa)) } return null }

    function gm(a, b, c, d) { var e = im(c);
        c = !e || U(1006) && !fc(d, 4) ? rb(Lc(c.Za)) : e;
        a = jm(a, b, d); return ob(c, a) }

    function jm(a, b, c) { if (eh(14)) return { bust: eh(14) }; if (U(357)) return { bust: a.location.host }; if (fc(c, 4) && U(375)) { b || (b = km(a)); if (b) return c = {}, c.client = b, c.plah = a.location.host, c.amaexp = 1, c; throw Error("PublisherCodeNotFoundForAma"); } return {} }

    function km(a) {
        if (a.google_ad_client) return a.google_ad_client;
        var b = a.document.querySelector('script[src*="/pagead/js/adsbygoogle.js"][data-ad-client]');
        if (b || (b = a.document.querySelector(".adsbygoogle[data-ad-client]"))) return b.getAttribute("data-ad-client");
        if (U(1051)) {
            if (U(1051)) {
                b: {
                    b = a.document.getElementsByTagName("script");a = a.navigator && a.navigator.userAgent || "";a = /appbankapppuzdradb|daumapps|fban|fbios|fbav|fb_iab|gsa\/|messengerforios|naver|niftyappmobile|nonavigation|pinterest|twitter|ucbrowser|yjnewsapp|youtube/i.test(a) ||
                    /i(phone|pad|pod)/i.test(a) && /applewebkit/i.test(a) && !/version|safari/i.test(a) && !le() ? Al : Bl;
                    for (var c = b.length - 1; 0 <= c; c--) { var d = b[c]; if (!d.google_parsed_script_for_pub_code && (d.google_parsed_script_for_pub_code = !0, d = a(d))) { b = d; break b } }
                    b = null
                }
                if (b) { a = /(google_\w+) *= *(['"]?[\w.-]+['"]?) *(?:;|$)/gm; for (c = {}; d = a.exec(b);) c[d[1]] = Cl(d[2]);
                    b = c.google_ad_client ? c.google_ad_client : "" } else b = ""
            }
            else b = "";
            if (b) return b
        }
        return ""
    }

    function lm(a, b, c, d) {
        return function() {
            var e = !1;
            d && ul().al(3E4);
            try {
                if (id(a.document.getElementById(b).contentWindow)) { var f = a.document.getElementById(b).contentWindow,
                        g = f.document; if (!g.body || !g.body.firstChild) { /Firefox/.test(navigator.userAgent) ? g.open("text/html", "replace") : g.open();
                        f.google_async_iframe_close = !0; var h = ae(c);
                        g.write(Ob(h)) } } else {
                    var k = a.document.getElementById(b).contentWindow;
                    f = c;
                    f = String(f);
                    g = ['"'];
                    for (h = 0; h < f.length; h++) {
                        var l = f.charAt(h),
                            m = l.charCodeAt(0),
                            r = h + 1,
                            p;
                        if (!(p = Sb[l])) {
                            if (31 <
                                m && 127 > m) var t = l;
                            else { var v = void 0,
                                    B = l; if (B in Tb) t = Tb[B];
                                else if (B in Sb) t = Tb[B] = Sb[B];
                                else { var D = B.charCodeAt(0); if (31 < D && 127 > D) v = B;
                                    else { if (256 > D) { if (v = "\\x", 16 > D || 256 < D) v += "0" } else v = "\\u", 4096 > D && (v += "0");
                                        v += D.toString(16).toUpperCase() }
                                    t = Tb[B] = v } }
                            p = t
                        }
                        g[r] = p
                    }
                    g.push('"');
                    k.location.replace("javascript:" + g.join(""))
                }
                e = !0
            } catch (pa) { k = Hj().google_jobrunner, tl(k) && k.rl() }
            e && (e = tk("google_async_rrc", c), (new sk(a)).set(b, lm(a, b, e, !1)))
        }
    }

    function mm(a) {
        if (!zk) a: { for (var b = [y.top], c = [], d = 0, e; e = b[d++];) { c.push(e); try { if (e.frames)
                        for (var f = e.frames.length, g = 0; g < f && 1024 > b.length; ++g) b.push(e.frames[g]) } catch (k) {} } for (b = 0; b < c.length; b++) try { var h = c[b].frames.google_esf; if (h) { zk = h; break a } } catch (k) {}
            zk = null }
        if (!zk) {
            if (/[^a-z0-9-]/.test(a)) return null;
            c = dd(document, "IFRAME");
            c.id = "google_esf";
            c.name = "google_esf";
            c.src = ["https://googleads.g.doubleclick.net", ["/pagead/html/", sf(), "/r20190131/zrt_lookup.html#"].join("")].join("");
            c.style.display = "none";
            c.setAttribute("data-ad-client", Pe(a));
            return c
        }
        return null
    }

    function nm(a, b, c) {
        om(a, b, c, function(d, e, f) {
            d = d.document;
            var g = f.google_unique_id;
            if (U(1048)) g = "aswift_" + g;
            else { g = e.id; for (var h = 0; !g || d.getElementById(g + "_anchor");) g = "aswift_" + h++ }
            e.id = g;
            e.name = g;
            g = Number(f.google_ad_width || 0);
            h = Number(f.google_ad_height || 0);
            var k = f.ds || "";
            k && (k += u(k, "endsWith").call(k, ";") ? "" : ";");
            var l = "",
                m = "";
            if (!f.google_enable_single_iframe) {
                l = ["<iframe"];
                for (v in e)
                    if (e.hasOwnProperty(v))
                        if ("onload" === v && U(381)) {
                            var r = e.id;
                            m = "<script nonce='" + xa() + "'>";
                            var p = void 0;
                            var t =
                                void 0;
                            r = xk(yk, "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "")(r, "google_iframe_oncopy");
                            if (null === (t = Ac()) || void 0 === t ? 0 : t.isScript(r)) t = r;
                            else if (r instanceof Fc) t = r.g;
                            else throw Error("wrong type");
                            t = (null === (p = Ac()) || void 0 === p ? 0 : p.isScript(t)) ? TrustedScript.prototype.toString.apply(t) : t;
                            p = (p = fb()) ? p.createScript(t) : t;
                            p = new lb(p, kb);
                            m = m + (p instanceof lb && p.constructor === lb ? p.g : "type_error:SafeScript").toString() + "\x3c/script>"
                        } else l.push(v + "=" + e[v]);
                l.push('style="left:0;position:absolute;top:0;border:0px;width:' +
                    (g + "px;height:" + (h + 'px;"')));
                l.push("></iframe>");
                l = l.join(" ")
            }
            var v = e.id;
            p = "";
            p = void 0 === p ? "" : p;
            g = "border:none;height:" + h + "px;margin:0;padding:0;position:relative;visibility:visible;width:" + (g + "px;background-color:transparent;");
            v = ['<ins id="' + (v + '_expand"'), ' style="display:inline-table;' + g + (void 0 === k ? "" : k) + '"', p ? ' data-ad-slot="' + p + '">' : ">", '<ins id="' + (v + '_anchor" style="display:block;') + g + '">', l, "</ins></ins>"].join("") + m;
            16 == f.google_reactive_ad_format || f.rss ? (f = d.createElement("div"), d = ae(v),
                Rb(f, d), c.appendChild(f.firstChild)) : (f = ae(v), Rb(c, f));
            return e.id
        })
    }

    function pm(a) { a = xk(bm, "", "", "")("google_sa_impl", "google_sv_map", a); return "<script nonce='" + xa() + "'>" + a + "\x3c/script>" }

    function om(a, b, c, d) {
        var e = b.google_ad_width,
            f = b.google_ad_height;
        if (!Xb && !Yb || U(325)) b.google_enable_single_iframe = !0;
        var g = {};
        null != e && (g.width = e && '"' + e + '"');
        null != f && (g.height = f && '"' + f + '"');
        g.frameborder = '"0"';
        g.marginwidth = '"0"';
        g.marginheight = '"0"';
        g.vspace = '"0"';
        g.hspace = '"0"';
        g.allowtransparency = '"true"';
        g.scrolling = '"no"';
        g.allowfullscreen = '"true"';
        g.onload = '"' + uk + '"';
        var h = d(a, g, b);
        qm(a, c, b);
        (c = mm(b.google_ad_client)) && a.document.documentElement.appendChild(c);
        c = Pa;
        d = (new Date).getTime();
        b.google_lrv = sf();
        b.google_async_iframe_id = h;
        U(1048) || (b.google_unique_id = ge(a));
        b.google_start_time = c;
        b.google_bpp = d > c ? d - c : 1;
        b.google_async_rrc = 0;
        a.google_sv_map = a.google_sv_map || {};
        a.google_sv_map[h] = b;
        b.dninfo = b.google_loader_used + "_" + b.google_enable_single_iframe;
        if (b.google_enable_single_iframe) {
            d = (c = !!a.document.getElementById(h + "_anchor")) ? vl : wl;
            b.dninfo += "_" + c;
            var k = { pubWin: a, iframeWin: null, vars: b };
            hm(a, function() { b.dninfo += "_" + !!a.document.getElementById(h + "_anchor");
                    a.google_sa_impl(k) },
                d)
        } else e = ["<!doctype html><html><body>", "<script nonce='" + xa() + "'>", xk(cm, "", "", "", "", "")("google_sl_win", "google_iframe_start_time", "google_async_iframe_id", h), "\x3c/script>", pm(h), "</body></html>"].join(""), d = (c = !!a.document.getElementById(h)) ? vl : wl, e = lm(a, h, e, !0), b.dninfo += "_" + c, hm(a, e, d)
    }

    function qm(a, b, c) {
        var d = c.google_ad_output,
            e = c.google_ad_format,
            f = c.google_ad_width || 0,
            g = c.google_ad_height || 0;
        e || "html" != d && null != d || (e = f + "x" + g);
        d = !c.google_ad_slot || c.google_override_format || !Yc[c.google_ad_width + "x" + c.google_ad_height] && "aa" == c.google_loader_used;
        e && d ? e = e.toLowerCase() : e = "";
        c.google_ad_format = e;
        if ("number" !== typeof c.google_reactive_sra_index || !c.google_ad_unit_key) {
            e = [c.google_ad_slot, c.google_orig_ad_format || c.google_ad_format, c.google_ad_type, c.google_orig_ad_width || c.google_ad_width,
                c.google_orig_ad_height || c.google_ad_height
            ];
            d = [];
            f = 0;
            for (g = b; g && 25 > f; g = g.parentNode, ++f) 9 === g.nodeType ? d.push("") : d.push(g.id);
            (d = d.join()) && e.push(d);
            c.google_ad_unit_key = rd(e.join(":")).toString();
            var h = void 0 === h ? !1 : h;
            e = [];
            for (d = 0; b && 25 > d; ++d) {
                f = "";
                void 0 !== h && h || (f = (f = 9 !== b.nodeType && b.id) ? "/" + f : "");
                a: {
                    if (b && b.nodeName && b.parentElement) {
                        g = b.nodeName.toString().toLowerCase();
                        for (var k = b.parentElement.childNodes, l = 0, m = 0; m < k.length; ++m) {
                            var r = k[m];
                            if (r.nodeName && r.nodeName.toString().toLowerCase() ===
                                g) { if (b === r) { g = "." + l; break a }++l }
                        }
                    }
                    g = ""
                }
                e.push((b.nodeName && b.nodeName.toString().toLowerCase()) + f + g);
                b = b.parentElement
            }
            h = e.join() + ":";
            b = [];
            if (a) try { var p = a.parent; for (e = 0; p && p !== a && 25 > e; ++e) { var t = p.frames; for (d = 0; d < t.length; ++d)
                        if (a === t[d]) { b.push(d); break }
                    a = p;
                    p = a.parent } } catch (v) {}
            c.google_ad_dom_fingerprint = rd(h + b.join()).toString()
        }
    };

    function rm(a, b) { a = a.attributes; for (var c = a.length, d = 0; d < c; d++) { var e = a[d]; if (/data-/.test(e.name)) { var f = wb(e.name.replace("data-matched-content", "google_content_recommendation").replace("data", "google").replace(/-/g, "_")); if (!b.hasOwnProperty(f)) { a: switch (e = e.value, f) {
                        case "google_reactive_ad_format":
                            e = parseInt(e, 10);
                            e = isNaN(e) ? 0 : e; break a;
                        case "google_allow_expandable_ads":
                            e = /^true$/.test(e) }
                    null !== e && (b[f] = e) } } } }

    function sm(a) { if (a = Jd(a)) switch (a.data && a.data.autoFormat) {
            case "rspv":
                return 13;
            case "mcrspv":
                return 15;
            default:
                return 14 } else return 12 }

    function tm(a, b, c) {
        rm(a, b);
        if (c.document && c.document.body && !ll(c, b) && !b.google_reactive_ad_format) {
            var d = parseInt(a.style.width, 10),
                e = xl(a, c);
            if (0 < e && d > e) {
                var f = parseInt(a.style.height, 10);
                d = !!Yc[d + "x" + f];
                var g = e;
                if (d) { var h = Zc(e, f); if (h) g = h, b.google_ad_format = h + "x" + f + "_0ads_al";
                    else throw new P("No slot size for availableWidth=" + e); }
                b.google_ad_resize = !0;
                b.google_ad_width = g;
                d || (b.google_ad_format = null, b.google_override_format = !0);
                e = g;
                a.style.width = e + "px";
                f = al(e, "auto", c, a, b);
                g = e;
                f.size().ba(c, b,
                    a);
                Dk(f, g, b);
                f = f.size();
                b.google_responsive_formats = null;
                f.minWidth() > e && !d && (b.google_ad_width = f.minWidth(), a.style.width = f.minWidth() + "px")
            }
        }
        d = a.offsetWidth || zi(a, c, "width", N) || b.google_ad_width || 0;
        e = Ma(al, d, "auto", c, a, b, !1, !0);
        f = me(c) || c;
        g = b.google_ad_client;
        f = f.location && "#ftptohbh" === f.location.hash ? 2 : ne(f.location, "google_responsive_slot_debug") || ne(f.location, "google_responsive_slot_preview") || U(217) ? 1 : U(218) ? 2 : Bf(f, 1, g) ? 1 : 0;
        if (g = 0 !== f) b: if (!(488 > Q(c) || U(216)) || b.google_reactive_ad_format ||
                ll(c, b) || mi(a, b)) g = !1;
            else { for (g = a; g; g = g.parentElement) { h = kd(g, c); if (!h) { b.gfwrnwer = 18;
                        g = !1; break b } if (!Xa(["static", "relative"], h.position)) { b.gfwrnwer = 17;
                        g = !1; break b } } if (!U(216) && (g = ri(c, a, d, .3, b), !0 !== g)) { b.gfwrnwer = g;
                    g = !1; break b }
                g = c.top == c ? !0 : !1 }
        g ? (b.google_resizing_allowed = !0, b.ovlp = !0, 2 === f ? (f = {}, Dk(e(), d, f), b.google_resizing_width = f.google_ad_width, b.google_resizing_height = f.google_ad_height, f.ds && (b.ds = f.ds), b.iaaso = !1) : (b.google_ad_format = "auto", b.iaaso = !0, b.armr = 1), d = !0) : d = !1;
        if (e = ll(c,
                b)) nl(e, a, b, c, d);
        else {
            if (mi(a, b)) { if (d = kd(a, c)) a.style.width = d.width, a.style.height = d.height, li(d, b);
                b.google_ad_width || (b.google_ad_width = a.offsetWidth);
                b.google_ad_height || (b.google_ad_height = a.offsetHeight);
                b.google_loader_features_used = 256;
                b.google_responsive_auto_format = sm(c) } else li(a.style, b);
            c.location && "#gfwmrp" == c.location.hash || 12 == b.google_responsive_auto_format && "true" == b.google_full_width_responsive ? nl(10, a, b, c, !1) : .01 > Math.random() && 12 === b.google_responsive_auto_format && (a = si(a.offsetWidth ||
                parseInt(a.style.width, 10) || b.google_ad_width, c, a, b), !0 !== a ? (b.efwr = !1, b.gfwrnwer = a) : b.efwr = !0)
        }
    };

    function um(a) {
        function b() { if (!a.frames.__uspapiLocator)
                if (c.body) { var e = dd(d.g, "IFRAME");
                    e.style.display = "none";
                    e.style.width = "0px";
                    e.style.height = "0px";
                    e.style.border = "none";
                    e.style.zIndex = "-1000";
                    e.style.left = "-1000px";
                    e.style.top = "-1000px";
                    e.name = "__uspapiLocator";
                    c.body.appendChild(e) } else a.setTimeout(b, 5) } var c = a.document,
            d = a ? new ed(9 == a.nodeType ? a : a.ownerDocument || a.document) : Qa || (Qa = new ed);
        b() };

    function vm(a) { this.g = a;
        this.h = a.document;
        this.i = (a = (a = Le(this.h)) ? I(a, Je, 5) || null : null) ? F(a, 2) : null;
        (a = Me(this.h)) && null != F(a, 1) && F(a, 1);
        (a = Me(this.h)) && null != F(a, 2) && F(a, 2) }

    function wm() { var a = window;
        a.__uspapi || a.frames.__uspapiLocator || (a = new vm(a), xm(a)) }

    function xm(a) {!a.i || a.g.__uspapi || a.g.frames.__uspapiLocator || (a.g.__uspapiManager = "fc", um(a.g), Na(function(b) { for (var c = [], d = 0; d < arguments.length; ++d) c[d] = arguments[d]; return a.j.apply(a, ka(c)) })) }
    vm.prototype.j = function(a, b, c) { "function" === typeof c && "getUSPData" === a && c({ version: 1, uspString: this.i }, !0) };

    function ym(a) { R.call(this);
        this.h = a;
        this.g = null;
        this.l = {};
        this.j = null }
    x(ym, R);
    ym.prototype.i = function() { this.l = {};
        this.j && (cd(this.h, "message", this.j), delete this.j);
        delete this.l;
        delete this.h;
        delete this.g;
        R.prototype.i.call(this) };

    function zm(a) { R.call(this);
        this.h = a;
        this.g = null;
        this.g || (this.h.googlefc ? this.g = this.h : this.g = yd(this.h, "googlefcPresent")) }
    x(zm, R);
    var Am = null,
        Bm = [];

    function Cm(a) { return ke.test(a.className) && "done" != a.getAttribute("data-adsbygoogle-status") }

    function Dm(a, b) { a.setAttribute("data-adsbygoogle-status", "done");
        Em(a, b) }

    function Fm() { if (!(.01 < Math.random())) { var a = .5 < Math.random(),
                b = ob(tb(), { id: "rmvasftr", type: a }, void 0),
                c = dd(document, "IFRAME");
            c.style.display = "none";
            c.src = qb(b).toString(); if (a) { var d = dd(document, "IFRAME");
                d.addEventListener("load", function() { d.contentWindow.document.documentElement.appendChild(c) });
                d.style.display = "none";
                document.documentElement.appendChild(d) } else document.documentElement.appendChild(c) } }

    function Em(a, b) {
        var c = window,
            d = je();
        d.google_spfd || (d.google_spfd = tm);
        (d = b.google_reactive_ads_config) || tm(a, b, c);
        if (!Gm(a, b, c)) {
            d || (c.google_lpabyc = ni(a, c) + zi(a, c, "height", N));
            if (d) { d = d.page_level_pubvars || {}; if (K(L).page_contains_reactive_tag && !K(L).allow_second_reactive_tag) { if (d.pltais) { tc(!1); return } throw new P("Only one 'enable_page_level_ads' allowed per page."); }
                K(L).page_contains_reactive_tag = !0;
                tc(7 === d.google_pgb_reactive) }
            U(1048) ? b.google_unique_id = ee(c) : ee(c);
            ce(zl, function(e, f) {
                b[f] =
                    b[f] || c[f]
            });
            b.google_loader_used = "aa";
            b.google_reactive_tag_first = 1 === (K(L).first_tag_on_page || 0);
            nf(164, function() { nm(c, b, a) })
        }
    }

    function Gm(a, b, c) {
        var d = b.google_reactive_ads_config,
            e = "string" === typeof a.className && /(\W|^)adsbygoogle-noablate(\W|$)/.test(a.className),
            f = pc(c);
        if (f && f.sa && "on" != b.google_adtest && !e) {
            e = ni(a, c);
            var g = Af(c).clientHeight;
            if (!f.ia || f.ia && ((0 == g ? null : e / g) || 0) >= f.ia) return a.className += " adsbygoogle-ablated-ad-slot", c = c.google_sv_map = c.google_sv_map || {}, d = Fa(a), b.google_element_uid = d, c[b.google_element_uid] = b, a.setAttribute("google_element_uid", d), "slot" == f.ab && (null !== xd(a.getAttribute("width")) &&
                a.setAttribute("width", 0), null !== xd(a.getAttribute("height")) && a.setAttribute("height", 0), a.style.width = "0px", a.style.height = "0px"), !0
        }
        if ((f = kd(a, c)) && "none" == f.display && !("on" == b.google_adtest || 0 < b.google_reactive_ad_format || d)) return c.document.createComment && a.appendChild(c.document.createComment("No ad requested because of display:none on the adsbygoogle tag")), !0;
        a = null == b.google_pgb_reactive || 3 === b.google_pgb_reactive;
        return 1 !== b.google_reactive_ad_format && 8 !== b.google_reactive_ad_format ||
            !a ? !1 : (y.console && y.console.warn("Adsbygoogle tag with data-reactive-ad-format=" + b.google_reactive_ad_format + " is deprecated. Check out page-level ads at https://www.google.com/adsense"), !0)
    }

    function Hm(a) { var b = document.getElementsByTagName("INS"); for (var c = 0, d = b[c]; c < b.length; d = b[++c]) { var e = d; if (Cm(e) && "reserved" != e.getAttribute("data-adsbygoogle-status") && (!a || d.id == a)) return d } return null }

    function Im(a, b, c) { if (a && a.shift)
            for (var d = 20; 0 < a.length && 0 < d;) { try { Jm(a.shift(), b, c) } catch (e) { setTimeout(function() { throw e; }) }--d } }

    function Km() { var a = dd(document, "INS");
        a.className = "adsbygoogle";
        a.className += " adsbygoogle-noablate";
        Ad(a); return a }

    function Lm(a) { var b = {};
        ce(wf, function(e, f) {!1 === a.enable_page_level_ads ? b[f] = !1 : a.hasOwnProperty(f) && (b[f] = a[f]) });
        Ea(a.enable_page_level_ads) && (b.page_level_pubvars = a.enable_page_level_ads); var c = Km();
        Xc.body.appendChild(c); var d = {};
        d = (d.google_reactive_ads_config = b, d.google_ad_client = a.google_ad_client, d);
        d.google_pause_ad_requests = !!K(L).pause_ad_requests;
        Dm(c, d) }

    function Mm(a) {
        function b() { return Lm(a) } var c = void 0 === c ? L : c;
        zf(c).wasPlaTagProcessed = !0; var d = c.document; if (d.body || "complete" == d.readyState || "interactive" == d.readyState) b();
        else { var e = $a(of(191, b));
            bd(d, "DOMContentLoaded", e);
            (new y.MutationObserver(function(f, g) { d.body && (e(), g.disconnect()) })).observe(d, { childList: !0, subtree: !0 }) } }

    function Jm(a, b, c) { var d = {};
        nf(165, function() { Nm(a, d, b, c) }, function(e) { e.client = e.client || d.google_ad_client || a.google_ad_client;
            e.slotname = e.slotname || d.google_ad_slot;
            e.tag_origin = e.tag_origin || d.google_tag_origin }) }

    function Om(a) { delete a.google_checked_head;
        pd(a, function(b, c) { uc[c] || (delete a[c], y.console.warn("AdSense head tag doesn't support " + c.replace("google", "data").replace(/_/g, "-") + " attribute.")) }) }

    function Pm(a) {
        var b = L,
            c = b.document.querySelector('script[src*="/pagead/js/adsbygoogle.js"][data-ad-client]:not([data-checked-head])');
        if (c) {
            c.setAttribute("data-checked-head", "true");
            var d = K(window);
            if (d.head_tag_slot_vars) throw new P("Only one AdSense head tag supported per page. The second tag is ignored.");
            var e = {};
            rm(c, e);
            Om(e);
            var f = db(e);
            d.head_tag_slot_vars = f;
            c = { google_ad_client: e.google_ad_client, enable_page_level_ads: e };
            b.adsbygoogle || (b.adsbygoogle = []);
            b = b.adsbygoogle;
            b.loaded ? b.push(c) :
                b.splice(0, 0, c);
            e.google_adbreak_test && Qm(f, a);
            vf(function() { Qm(f, a) })
        }
    }

    function Nm(a, b, c, d) {
        if (null == a) throw new P("push() called with no parameters.");
        a: { if ("object" === typeof a && null != a) { if ("string" === typeof a.type) { var e = 2; break a } if ("string" === typeof a.sound || "string" === typeof a.preloadAdBreaks || "string" === typeof a.EXPERIMENTAL_userInteractionChecks) { e = 3; break a } }
            e = 0 }
        if (0 !== e) null == Am ? 3 === e && Bm.push(a) : 3 === e ? nf(787, function() { Am.handleAdConfig(a) }) : Am.handleAdBreak(a).catch(function(f) { jf.D(730, f instanceof Error ? f : Error(String(f)), void 0, void 0) });
        else {
            Pa = (new Date).getTime();
            em(c, d, Rm(a));
            Sm();
            a: { if (void 0 != a.enable_page_level_ads) { if ("string" === typeof a.google_ad_client) { c = !0; break a } throw new P("'google_ad_client' is missing from the tag config."); }
                c = !1 }
            if (c) Tm(a, b);
            else if ((c = a.params) && ce(c, function(f, g) { b[g] = f }), "js" === b.google_ad_output) console.warn("Ads with google_ad_output='js' have been deprecated and no longer work. Contact your AdSense account manager or switch to standard AdSense ads.");
            else {
                c = Um(a.element);
                rm(c, b);
                d = K(y).head_tag_slot_vars || {};
                pd(d, function(f,
                    g) { b.hasOwnProperty(g) || (b[g] = f) });
                if (c.hasAttribute("data-require-head") && !K(y).head_tag_slot_vars) throw new P("AdSense head tag is missing. AdSense body tags don't work without the head tag. You can copy the head tag from your account on https://adsense.com.");
                if (!b.google_ad_client) throw new P("Ad client is missing from the slot.");
                b.google_apsail = Ff(b.google_ad_client);
                e = (d = 0 === (K(L).first_tag_on_page || 0) && Ej(b)) && Fj(d);
                d && !e && (Tm(d), K(L).skip_next_reactive_tag = !0);
                0 === (K(L).first_tag_on_page ||
                    0) && (K(L).first_tag_on_page = 2);
                b.google_pause_ad_requests = !!K(L).pause_ad_requests;
                Dm(c, b);
                d && e && Vm(d)
            }
        }
    }

    function Rm(a) { return a.google_ad_client ? a.google_ad_client : (a = a.params) && a.google_ad_client ? a.google_ad_client : "" }

    function Sm() { var a = L; if (U(369)) { var b = pc(a); if (!(b = b && b.sa)) { try { var c = a.localStorage } catch (d) { c = null }
                c = c ? Yh(c) : null;
                b = !(c && Zh(c) && c) }
            b || sc(a, 1) } }

    function Vm(a) { Id(function() { zf(y).wasPlaTagProcessed || y.adsbygoogle && y.adsbygoogle.push(a) }) }

    function Tm(a, b) { K(L).skip_next_reactive_tag ? K(L).skip_next_reactive_tag = !1 : (0 === (K(L).first_tag_on_page || 0) && (K(L).first_tag_on_page = 1), b && a.tag_partner && (rc(y, a.tag_partner), rc(b, a.tag_partner)), K(L).ama_ran_on_page || jk(new ik(a)), Mm(a)) }

    function Um(a) { if (a) { if (!Cm(a) && (a.id ? a = Hm(a.id) : a = null, !a)) throw new P("'element' has already been filled."); if (!("innerHTML" in a)) throw new P("'element' is not a good DOM element."); } else if (a = Hm(), !a) throw new P("All ins elements in the DOM with class=adsbygoogle already have ads in them."); return a }

    function Wm() { var a = L,
            b = new Sj(a),
            c = new ym(a),
            d = new zm(a);
        a = a.__cmp ? 1 : 0;
        b = Tj(b) ? 1 : 0; var e;
        (e = "function" === typeof c.h.__uspapi) || (c.g ? c = c.g : (c.g = yd(c.h, "__uspapiLocator"), c = c.g), e = null != c);
        pf("cmpMet", { tcfv1: a, tcfv2: b, usp: e ? 1 : 0, fc: d.g ? 1 : 0, ptt: 9 }, dh(62)) }

    function Wj(a) { var b = Jj(); if (Zj(a)) { Nj(b, 24, a); for (var c = w(Lj(b, 25, [])), d = c.next(); !d.done; d = c.next()) d.value.resolve(a);
            Nj(b, 25, []) } else Nj(b, 24, null) }

    function Xm(a) { var b = Jj();
        Nj(b, 26, !!Number(a)) }

    function Ym(a) {
        Number(a) ? K(L).pause_ad_requests = !0 : (K(L).pause_ad_requests = !1, a = function() {
            if (!K(L).pause_ad_requests) {
                var b = je(),
                    c = je();
                try {
                    if (Xc.createEvent) { var d = Xc.createEvent("CustomEvent");
                        d.initCustomEvent("adsbygoogle-pub-unpause-ad-requests-event", !1, !1, "");
                        b.dispatchEvent(d) } else if (de(c.CustomEvent)) { var e = new c.CustomEvent("adsbygoogle-pub-unpause-ad-requests-event", { bubbles: !1, cancelable: !1, detail: "" });
                        b.dispatchEvent(e) } else if (de(c.Event)) {
                        var f = new Event("adsbygoogle-pub-unpause-ad-requests-event", { bubbles: !1, cancelable: !1 });
                        b.dispatchEvent(f)
                    }
                } catch (g) {}
            }
        }, y.setTimeout(a, 0), y.setTimeout(a, 1E3))
    }

    function Zm(a) { switch (a) {
            case 0:
            case 2:
                a = !0; break;
            case 1:
                a = !1; break;
            default:
                throw Error("Illegal value of cookieOptions: " + a); }
        L._gfp_a_ = a }

    function $m(a) { de(a) && window.setTimeout(a, 0) }

    function Qm(a, b) { Bj(rb(Lc(b.$a))).then(function(c) { if (null == Am) { c.init(a);
                Am = c; for (var d = w(Bm), e = d.next(); !e.done; e = d.next()) c.handleAdConfig(e.value) } }).catch(function(c) { jf.D(723, c instanceof Error ? c : Error(String(c)), void 0, void 0) }) };
    (function(a, b, c, d) {
        d = void 0 === d ? function() {} : d;
        jf.Ha(qf);
        nf(166, function() {
            var e = rk(pk(b));
            nk(jf, H(e, 2));
            d();
            var f = Kd(Jd(L)) || L;
            lh(f);
            if ((!A("Trident") && !A("MSIE") || 0 <= Db(Kb(), 11)) && (null == (L.Prototype || {}).Version || !U(1026))) {
                var g = c(a, e);
                Fm();
                kf(U(84));
                var h = of(780, function(p) { L.google_trust_token_operation_status = p });
                of(779, function() { Xl(new Rl(h)) })();
                f = am();
                null != f && f.then(function(p) { L.google_user_agent_client_hint = p.s() });
                (f = eh(1924)) && Hd(f);
                U(1035) && wm();
                if (U(1030) && (f = dh(1017), 0 > f && (f = -1),
                        f = new Sj(window, f), Tj(f))) { var k = Jj();
                    void 0 === Lj(k, 24, void 0) && (Nj(k, 24, null), Vj(f)) }
                try { Ll() } catch (p) {}
                if (f = me(y)) f = zf(f), f.tagSpecificState[1] || (f.tagSpecificState[1] = new mk);
                Pm(g);
                f = window;
                k = f.adsbygoogle;
                if (!k || !k.loaded) {
                    dh(62) && Wm();
                    var l = { push: function(p) { Jm(p, g, e) }, loaded: !0 };
                    try { Object.defineProperty(l, "requestNonPersonalizedAds", { set: Xm }), Object.defineProperty(l, "pauseAdRequests", { set: Ym }), Object.defineProperty(l, "cookieOptions", { set: Zm }), Object.defineProperty(l, "onload", { set: $m }) } catch (p) {}
                    if (k)
                        for (var m =
                                w(["requestNonPersonalizedAds", "pauseAdRequests", "cookieOptions"]), r = m.next(); !r.done; r = m.next()) r = r.value, void 0 !== k[r] && (l[r] = k[r]);
                    "_gfp_a_" in window || (window._gfp_a_ = !0);
                    Im(k, g, e);
                    f.adsbygoogle = l;
                    k && (l.onload = k.onload)
                }
            }
        })
    })("", ok, function(a, b) { var c = 2012 < G(b, 1, 0) ? "_fy" + G(b, 1, 0) : "";
        H(b, 3); var d = H(b, 3).replace(/^\//, ""); return { $a: a ? Mc(Nc, a, c) : Mc(Oc, H(b, 2), d, c), Za: a ? Mc(Pc, a, c) : Mc(Qc, H(b, 2), d, c), Xa: a ? Mc(Rc, a, c) : Mc(Sc, H(b, 2), d, c), Wa: a ? Mc(Tc, a, c) : Mc(Uc, H(b, 2), d, c), Ya: a ? Mc(Vc, a, c) : Mc(Wc, H(b, 2), d, c) } });
}).call(this, "[2019,\"r20210224\",\"\/r20190131\",null,[]]");