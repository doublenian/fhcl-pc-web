// Copyright 2012 Google Inc. All rights reserved.
;(function() {
  var data = {
    resource: {
      version: '1',

      macros: [
        {
          function: '__e'
        },
        {
          function: '__cid'
        }
      ],
      tags: [
        {
          function: '__rep',
          once_per_event: true,
          vtp_containerId: ['macro', 1],
          tag_id: 1
        }
      ],
      predicates: [
        {
          function: '_eq',
          arg0: ['macro', 0],
          arg1: 'gtm.js'
        }
      ],
      rules: [
        [
          ['if', 0],
          ['add', 0]
        ]
      ]
    },
    runtime: []
  }
  /*
    
     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
  var ba,
    ca =
      'function' == typeof Object.create
        ? Object.create
        : function(a) {
            var b = function() {}
            b.prototype = a
            return new b()
          },
    ea
  if ('function' == typeof Object.setPrototypeOf) ea = Object.setPrototypeOf
  else {
    var fa
    a: {
      var ha = { Gf: !0 },
        ia = {}
      try {
        ia.__proto__ = ha
        fa = ia.Gf
        break a
      } catch (a) {}
      fa = !1
    }
    ea = fa
      ? function(a, b) {
          a.__proto__ = b
          if (a.__proto__ !== b) throw new TypeError(a + ' is not extensible')
          return a
        }
      : null
  }
  var ja = ea,
    ka = this || self,
    la = /^[\w+/_-]+[=]{0,2}$/,
    ma = null
  var oa = function() {},
    pa = function(a) {
      return 'function' == typeof a
    },
    g = function(a) {
      return 'string' == typeof a
    },
    qa = function(a) {
      return 'number' == typeof a && !isNaN(a)
    },
    ra = function(a) {
      return '[object Array]' == Object.prototype.toString.call(Object(a))
    },
    n = function(a, b) {
      if (Array.prototype.indexOf) {
        var c = a.indexOf(b)
        return 'number' == typeof c ? c : -1
      }
      for (var d = 0; d < a.length; d++) if (a[d] === b) return d
      return -1
    },
    sa = function(a, b) {
      if (a && ra(a))
        for (var c = 0; c < a.length; c++) if (a[c] && b(a[c])) return a[c]
    },
    wa = function(a, b) {
      if (!qa(a) || !qa(b) || a > b) (a = 0), (b = 2147483647)
      return Math.floor(Math.random() * (b - a + 1) + a)
    },
    ya = function(a, b) {
      for (var c = new xa(), d = 0; d < a.length; d++) c.set(a[d], !0)
      for (var e = 0; e < b.length; e++) if (c.get(b[e])) return !0
      return !1
    },
    za = function(a, b) {
      for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c])
    },
    Aa = function(a) {
      return Math.round(Number(a)) || 0
    },
    Ba = function(a) {
      return 'false' == String(a).toLowerCase() ? !1 : !!a
    },
    Ca = function(a) {
      var b = []
      if (ra(a)) for (var c = 0; c < a.length; c++) b.push(String(a[c]))
      return b
    },
    Da = function(a) {
      return a ? a.replace(/^\s+|\s+$/g, '') : ''
    },
    Fa = function() {
      return new Date().getTime()
    },
    xa = function() {
      this.prefix = 'gtm.'
      this.values = {}
    }
  xa.prototype.set = function(a, b) {
    this.values[this.prefix + a] = b
  }
  xa.prototype.get = function(a) {
    return this.values[this.prefix + a]
  }
  var Ga = function(a, b, c) {
      return a && a.hasOwnProperty(b) ? a[b] : c
    },
    Ha = function(a) {
      var b = !1
      return function() {
        if (!b)
          try {
            a()
          } catch (c) {}
        b = !0
      }
    },
    Ia = function(a, b) {
      for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
    },
    Ja = function(a) {
      for (var b in a) if (a.hasOwnProperty(b)) return !0
      return !1
    },
    Ka = function(a, b) {
      for (var c = [], d = 0; d < a.length; d++)
        c.push(a[d]), c.push.apply(c, b[a[d]] || [])
      return c
    },
    La = function(a, b) {
      for (var c = {}, d = c, e = a.split('.'), f = 0; f < e.length - 1; f++)
        d = d[e[f]] = {}
      d[e[e.length - 1]] = b
      return c
    },
    Ma = function(a) {
      var b = []
      za(a, function(c, d) {
        10 > c.length && d && b.push(c)
      })
      return b.join(',')
    } /*
     jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
  var Na = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
    Oa = function(a) {
      if (null == a) return String(a)
      var b = Na.exec(Object.prototype.toString.call(Object(a)))
      return b ? b[1].toLowerCase() : 'object'
    },
    Pa = function(a, b) {
      return Object.prototype.hasOwnProperty.call(Object(a), b)
    },
    Qa = function(a) {
      if (!a || 'object' != Oa(a) || a.nodeType || a == a.window) return !1
      try {
        if (
          a.constructor &&
          !Pa(a, 'constructor') &&
          !Pa(a.constructor.prototype, 'isPrototypeOf')
        )
          return !1
      } catch (c) {
        return !1
      }
      for (var b in a);
      return void 0 === b || Pa(a, b)
    },
    C = function(a, b) {
      var c = b || ('array' == Oa(a) ? [] : {}),
        d
      for (d in a)
        if (Pa(a, d)) {
          var e = a[d]
          'array' == Oa(e)
            ? ('array' != Oa(c[d]) && (c[d] = []), (c[d] = C(e, c[d])))
            : Qa(e)
            ? (Qa(c[d]) || (c[d] = {}), (c[d] = C(e, c[d])))
            : (c[d] = e)
        }
      return c
    }
  var pb
  var qb = [],
    rb = [],
    sb = [],
    tb = [],
    ub = [],
    vb = {},
    wb,
    xb,
    yb,
    zb = function(a, b) {
      var c = {}
      c['function'] = '__' + a
      for (var d in b) b.hasOwnProperty(d) && (c['vtp_' + d] = b[d])
      return c
    },
    Bb = function(a, b) {
      var c = a['function']
      if (!c) throw Error('Error: No function name given for function call.')
      var d = vb[c],
        e = {},
        f
      for (f in a)
        a.hasOwnProperty(f) &&
          0 === f.indexOf('vtp_') &&
          (e[void 0 !== d ? f : f.substr(4)] = a[f])
      return void 0 !== d ? d(e) : pb(c, e, b)
    },
    Db = function(a, b, c) {
      c = c || []
      var d = {},
        e
      for (e in a) a.hasOwnProperty(e) && (d[e] = Cb(a[e], b, c))
      return d
    },
    Eb = function(a) {
      var b = a['function']
      if (!b) throw 'Error: No function name given for function call.'
      var c = vb[b]
      return c ? c.priorityOverride || 0 : 0
    },
    Cb = function(a, b, c) {
      if (ra(a)) {
        var d
        switch (a[0]) {
          case 'function_id':
            return a[1]
          case 'list':
            d = []
            for (var e = 1; e < a.length; e++) d.push(Cb(a[e], b, c))
            return d
          case 'macro':
            var f = a[1]
            if (c[f]) return
            var h = qb[f]
            if (!h || b.Uc(h)) return
            c[f] = !0
            try {
              var k = Db(h, b, c)
              k.vtp_gtmEventId = b.id
              d = Bb(k, b)
              yb && (d = yb.eg(d, k))
            } catch (x) {
              b.Ce && b.Ce(x, Number(f)), (d = !1)
            }
            c[f] = !1
            return d
          case 'map':
            d = {}
            for (var l = 1; l < a.length; l += 2)
              d[Cb(a[l], b, c)] = Cb(a[l + 1], b, c)
            return d
          case 'template':
            d = []
            for (var m = !1, q = 1; q < a.length; q++) {
              var r = Cb(a[q], b, c)
              xb && (m = m || r === xb.Gb)
              d.push(r)
            }
            return xb && m ? xb.hg(d) : d.join('')
          case 'escape':
            d = Cb(a[1], b, c)
            if (xb && ra(a[1]) && 'macro' === a[1][0] && xb.Hg(a))
              return xb.Zg(d)
            d = String(d)
            for (var u = 2; u < a.length; u++) Ra[a[u]] && (d = Ra[a[u]](d))
            return d
          case 'tag':
            var p = a[1]
            if (!tb[p])
              throw Error('Unable to resolve tag reference ' + p + '.')
            return (d = { oe: a[2], index: p })
          case 'zb':
            var t = { arg0: a[2], arg1: a[3], ignore_case: a[5] }
            t['function'] = a[1]
            var v = Fb(t, b, c),
              w = !!a[4]
            return w || 2 !== v ? w !== (1 === v) : null
          default:
            throw Error(
              'Attempting to expand unknown Value type: ' + a[0] + '.'
            )
        }
      }
      return a
    },
    Fb = function(a, b, c) {
      try {
        return wb(Db(a, b, c))
      } catch (d) {
        JSON.stringify(a)
      }
      return 2
    }
  var Gb = (function() {
    var a = function(b) {
      return {
        toString: function() {
          return b
        }
      }
    }
    return {
      xd: a('convert_case_to'),
      yd: a('convert_false_to'),
      zd: a('convert_null_to'),
      Ad: a('convert_true_to'),
      Bd: a('convert_undefined_to'),
      Gh: a('debug_mode_metadata'),
      va: a('function'),
      ef: a('instance_name'),
      kf: a('live_only'),
      nf: a('malware_disabled'),
      pf: a('metadata'),
      Hh: a('original_vendor_template_id'),
      tf: a('once_per_event'),
      Id: a('once_per_load'),
      Qd: a('setup_tags'),
      Sd: a('tag_id'),
      Td: a('teardown_tags')
    }
  })()
  var Hb = null,
    Kb = function(a) {
      function b(r) {
        for (var u = 0; u < r.length; u++) d[r[u]] = !0
      }
      var c = [],
        d = []
      Hb = Ib(a)
      for (var e = 0; e < rb.length; e++) {
        var f = rb[e],
          h = Jb(f)
        if (h) {
          for (var k = f.add || [], l = 0; l < k.length; l++) c[k[l]] = !0
          b(f.block || [])
        } else null === h && b(f.block || [])
      }
      for (var m = [], q = 0; q < tb.length; q++) c[q] && !d[q] && (m[q] = !0)
      return m
    },
    Jb = function(a) {
      for (var b = a['if'] || [], c = 0; c < b.length; c++) {
        var d = Hb(b[c])
        if (0 === d) return !1
        if (2 === d) return null
      }
      for (var e = a.unless || [], f = 0; f < e.length; f++) {
        var h = Hb(e[f])
        if (2 === h) return null
        if (1 === h) return !1
      }
      return !0
    },
    Ib = function(a) {
      var b = []
      return function(c) {
        void 0 === b[c] && (b[c] = Fb(sb[c], a))
        return b[c]
      }
    } /*
     Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */
  var D = window,
    E = document,
    fc = navigator,
    gc = E.currentScript && E.currentScript.src,
    hc = function(a, b) {
      var c = D[a]
      D[a] = void 0 === c ? b : c
      return D[a]
    },
    ic = function(a, b) {
      b &&
        (a.addEventListener
          ? (a.onload = b)
          : (a.onreadystatechange = function() {
              a.readyState in { loaded: 1, complete: 1 } &&
                ((a.onreadystatechange = null), b())
            }))
    },
    jc = function(a, b, c) {
      var d = E.createElement('script')
      d.type = 'text/javascript'
      d.async = !0
      d.src = a
      ic(d, b)
      c && (d.onerror = c)
      var e
      if (null === ma)
        b: {
          var f = ka.document,
            h = f.querySelector && f.querySelector('script[nonce]')
          if (h) {
            var k = h.nonce || h.getAttribute('nonce')
            if (k && la.test(k)) {
              ma = k
              break b
            }
          }
          ma = ''
        }
      e = ma
      e && d.setAttribute('nonce', e)
      var l = E.getElementsByTagName('script')[0] || E.body || E.head
      l.parentNode.insertBefore(d, l)
      return d
    },
    kc = function() {
      if (gc) {
        var a = gc.toLowerCase()
        if (0 === a.indexOf('https://')) return 2
        if (0 === a.indexOf('http://')) return 3
      }
      return 1
    },
    lc = function(a, b) {
      var c = E.createElement('iframe')
      c.height = '0'
      c.width = '0'
      c.style.display = 'none'
      c.style.visibility = 'hidden'
      var d = (E.body && E.body.lastChild) || E.body || E.head
      d.parentNode.insertBefore(c, d)
      ic(c, b)
      void 0 !== a && (c.src = a)
      return c
    },
    mc = function(a, b, c) {
      var d = new Image(1, 1)
      d.onload = function() {
        d.onload = null
        b && b()
      }
      d.onerror = function() {
        d.onerror = null
        c && c()
      }
      d.src = a
      return d
    },
    nc = function(a, b, c, d) {
      a.addEventListener
        ? a.addEventListener(b, c, !!d)
        : a.attachEvent && a.attachEvent('on' + b, c)
    },
    oc = function(a, b, c) {
      a.removeEventListener
        ? a.removeEventListener(b, c, !1)
        : a.detachEvent && a.detachEvent('on' + b, c)
    },
    H = function(a) {
      D.setTimeout(a, 0)
    },
    pc = function(a, b) {
      return a && b && a.attributes && a.attributes[b]
        ? a.attributes[b].value
        : null
    },
    qc = function(a) {
      var b = a.innerText || a.textContent || ''
      b && ' ' != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ''))
      b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, ' '))
      return b
    },
    rc = function(a) {
      var b = E.createElement('div')
      b.innerHTML = 'A<div>' + a + '</div>'
      b = b.lastChild
      for (var c = []; b.firstChild; ) c.push(b.removeChild(b.firstChild))
      return c
    },
    sc = function(a, b, c) {
      c = c || 100
      for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0
      for (var f = a, h = 0; f && h <= c; h++) {
        if (d[String(f.tagName).toLowerCase()]) return f
        f = f.parentElement
      }
      return null
    },
    tc = function(a) {
      ;(fc.sendBeacon && fc.sendBeacon(a)) || mc(a)
    },
    uc = function(a, b) {
      var c = a[b]
      c && 'string' === typeof c.animVal && (c = c.animVal)
      return c
    }
  var wc = function(a) {
      return vc ? E.querySelectorAll(a) : null
    },
    xc = function(a, b) {
      if (!vc) return null
      if (Element.prototype.closest)
        try {
          return a.closest(b)
        } catch (e) {
          return null
        }
      var c =
          Element.prototype.matches ||
          Element.prototype.webkitMatchesSelector ||
          Element.prototype.mozMatchesSelector ||
          Element.prototype.msMatchesSelector ||
          Element.prototype.oMatchesSelector,
        d = a
      if (!E.documentElement.contains(d)) return null
      do {
        try {
          if (c.call(d, b)) return d
        } catch (e) {
          break
        }
        d = d.parentElement || d.parentNode
      } while (null !== d && 1 === d.nodeType)
      return null
    },
    yc = !1
  if (E.querySelectorAll)
    try {
      var zc = E.querySelectorAll(':root')
      zc && 1 == zc.length && zc[0] == E.documentElement && (yc = !0)
    } catch (a) {}
  var vc = yc
  var Pc = {},
    Qc = null,
    Rc = Math.random()
  Pc.w = 'UA-144771807-2'
  Pc.Kb = '4f0'
  var Sc = {
      __cl: !0,
      __ecl: !0,
      __ehl: !0,
      __evl: !0,
      __fal: !0,
      __fil: !0,
      __fsl: !0,
      __hl: !0,
      __jel: !0,
      __lcl: !0,
      __sdl: !0,
      __tl: !0,
      __ytl: !0,
      __paused: !0,
      __tg: !0
    },
    Tc = 'www.googletagmanager.com/gtm.js'
  Tc = 'www.googletagmanager.com/gtag/js'
  var Uc = Tc,
    Vc = null,
    Wc = null,
    Xc = null,
    Yc = '//www.googletagmanager.com/a?id=' + Pc.w + '&cv=1',
    Zc = {},
    $c = {},
    ad = function() {
      var a = Qc.sequence || 0
      Qc.sequence = a + 1
      return a
    }
  var bd = {},
    I = function(a, b) {
      bd[a] = bd[a] || []
      bd[a][b] = !0
    },
    cd = function(a) {
      for (var b = [], c = bd[a] || [], d = 0; d < c.length; d++)
        c[d] && (b[Math.floor(d / 6)] ^= 1 << d % 6)
      for (var e = 0; e < b.length; e++)
        b[
          e
        ] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_'.charAt(
          b[e] || 0
        )
      return b.join('')
    }
  var dd = function() {
      return (
        '&tc=' +
        tb.filter(function(a) {
          return a
        }).length
      )
    },
    gd = function() {
      ed || (ed = D.setTimeout(fd, 500))
    },
    fd = function() {
      ed && (D.clearTimeout(ed), (ed = void 0))
      void 0 === id ||
        (jd[id] && !kd && !ld) ||
        (md[id] || nd.Jg() || 0 >= od--
          ? (I('GTM', 1), (md[id] = !0))
          : (nd.hh(), mc(pd()), (jd[id] = !0), (qd = rd = ld = kd = '')))
    },
    pd = function() {
      var a = id
      if (void 0 === a) return ''
      var b = cd('GTM'),
        c = cd('TAGGING')
      return [
        sd,
        jd[a] ? '' : '&es=1',
        td[a],
        b ? '&u=' + b : '',
        c ? '&ut=' + c : '',
        dd(),
        kd,
        ld,
        rd,
        qd,
        '&z=0'
      ].join('')
    },
    ud = function() {
      return [Yc, '&v=3&t=t', '&pid=' + wa(), '&rv=' + Pc.Kb].join('')
    },
    vd = '0.005000' > Math.random(),
    sd = ud(),
    wd = function() {
      sd = ud()
    },
    jd = {},
    kd = '',
    ld = '',
    qd = '',
    rd = '',
    id = void 0,
    td = {},
    md = {},
    ed = void 0,
    nd = (function(a, b) {
      var c = 0,
        d = 0
      return {
        Jg: function() {
          if (c < a) return !1
          Fa() - d >= b && (c = 0)
          return c >= a
        },
        hh: function() {
          Fa() - d >= b && (c = 0)
          c++
          d = Fa()
        }
      }
    })(2, 1e3),
    od = 1e3,
    xd = function(a, b) {
      if (vd && !md[a] && id !== a) {
        fd()
        id = a
        qd = kd = ''
        var c
        c = 0 === b.indexOf('gtm.') ? encodeURIComponent(b) : '*'
        td[a] = '&e=' + c + '&eid=' + a
        gd()
      }
    },
    yd = function(a, b, c) {
      if (vd && !md[a] && b) {
        a !== id && (fd(), (id = a))
        var d,
          e = String(b[Gb.va] || '').replace(/_/g, '')
        0 === e.indexOf('cvt') && (e = 'cvt')
        d = e
        var f = c + d
        kd = kd ? kd + '.' + f : '&tr=' + f
        var h = b['function']
        if (!h) throw Error('Error: No function name given for function call.')
        var k = (vb[h] ? '1' : '2') + d
        qd = qd ? qd + '.' + k : '&ti=' + k
        gd()
        2022 <= pd().length && fd()
      }
    },
    zd = function(a, b, c) {
      if (vd && !md[a]) {
        a !== id && (fd(), (id = a))
        var d = c + b
        ld = ld ? ld + '.' + d : '&epr=' + d
        gd()
        2022 <= pd().length && fd()
      }
    }
  var Ad = {},
    Bd = new xa(),
    Cd = {},
    Dd = {},
    Gd = {
      name: 'dataLayer',
      set: function(a, b) {
        C(La(a, b), Cd)
        Ed()
      },
      get: function(a) {
        return Fd(a, 2)
      },
      reset: function() {
        Bd = new xa()
        Cd = {}
        Ed()
      }
    },
    Fd = function(a, b) {
      if (2 != b) {
        var c = Bd.get(a)
        if (vd) {
          var d = Hd(a)
          c !== d && I('GTM', 5)
        }
        return c
      }
      return Hd(a)
    },
    Hd = function(a) {
      var b = a.split('.'),
        c = !1,
        d = void 0
      var e = function(f, h) {
        for (var k = 0; void 0 !== f && k < b.length; k++) {
          if (null === f) return !1
          f = f[b[k]]
        }
        var l
        if (void 0 !== f || 1 < k) l = f
        else {
          var m
          if (h.length) {
            var q
            var r = h.pop()
            if (r) {
              var u = Id(['gtag', 'targets', r])
              q = Qa(u) ? u : void 0
            } else q = void 0
            m = e(q, h)
          } else m = Id(b)
          l = m
        }
        return l
      }
      c = !0
      d = e(Cd.eventModel, [void 0, void 0])
      return c ? d : Id(b)
    },
    Id = function(a) {
      for (var b = Cd, c = 0; c < a.length; c++) {
        if (null === b) return !1
        if (void 0 === b) break
        b = b[a[c]]
      }
      return b
    }
  var Jd = function(a, b) {
      Dd.hasOwnProperty(a) || (Bd.set(a, b), C(La(a, b), Cd), Ed())
    },
    Ed = function(a) {
      za(Dd, function(b, c) {
        Bd.set(b, c)
        C(La(b, void 0), Cd)
        C(La(b, c), Cd)
        a && delete Dd[b]
      })
    },
    Kd = function(a, b, c) {
      Ad[a] = Ad[a] || {}
      var d = 1 !== c ? Hd(b) : Bd.get(b)
      'array' === Oa(d) || 'object' === Oa(d)
        ? (Ad[a][b] = C(d))
        : (Ad[a][b] = d)
    },
    Ld = function(a, b) {
      if (Ad[a]) return Ad[a][b]
    },
    Md = function(a, b) {
      Ad[a] && delete Ad[a][b]
    }
  var J = {
    ra: '_ee',
    Jh: '_uci',
    yc: 'event_callback',
    Fb: 'event_timeout',
    D: 'gtag.config',
    aa: 'allow_ad_personalization_signals',
    zc: 'restricted_data_processing',
    Za: 'allow_google_signals',
    ba: 'cookie_expires',
    Eb: 'cookie_update',
    $a: 'session_duration',
    ja: 'user_properties'
  }
  J.rd = 'page_view'
  J.zh = 'user_engagement'
  J.ma = 'purchase'
  J.Qb = 'refund'
  J.eb = 'begin_checkout'
  J.Nb = 'add_to_cart'
  J.Ob = 'remove_from_cart'
  J.mh = 'view_cart'
  J.Gd = 'add_to_wishlist'
  J.Ia = 'view_item'
  J.xh = 'view_promotion'
  J.vh = 'select_promotion'
  J.sh = 'select_item'
  J.pd = 'view_item_list'
  J.Fd = 'add_payment_info'
  J.fh = 'add_shipping_info'
  J.Dh = 'allow_custom_scripts'
  J.Eh = 'allow_display_features'
  J.Fh = 'allow_enhanced_conversions'
  J.be = 'enhanced_conversions'
  J.Ub = 'client_id'
  J.W = 'cookie_domain'
  J.Wb = 'cookie_name'
  J.La = 'cookie_path'
  J.fa = 'cookie_flags'
  J.ia = 'currency'
  J.Yb = 'custom_params'
  J.Wd = 'custom_map'
  J.wc = 'groups'
  J.Ma = 'language'
  J.Xe = 'country'
  J.Kh = 'non_interaction'
  J.ib = 'page_location'
  J.jb = 'page_referrer'
  J.xc = 'page_title'
  J.kb = 'send_page_view'
  J.wa = 'send_to'
  J.Ac = 'session_engaged'
  J.ac = 'session_id'
  J.Cc = 'session_number'
  J.Af = 'tracking_id'
  J.sa = 'linker'
  J.ve = 'url_passthrough'
  J.fb = 'accept_incoming'
  J.H = 'domains'
  J.hb = 'url_position'
  J.gb = 'decorate_forms'
  J.ne = 'phone_conversion_number'
  J.fe = 'phone_conversion_callback'
  J.me = 'phone_conversion_css_class'
  J.ue = 'phone_conversion_options'
  J.vf = 'phone_conversion_ids'
  J.rf = 'phone_conversion_country_code'
  J.Hd = 'aw_remarketing'
  J.Jd = 'aw_remarketing_only'
  J.Z = 'value'
  J.wf = 'quantity'
  J.af = 'affiliation'
  J.ae = 'tax'
  J.df = 'shipping'
  J.sd = 'list_name'
  J.$d = 'checkout_step'
  J.Zd = 'checkout_option'
  J.bf = 'coupon'
  J.cf = 'promotions'
  J.lb = 'transaction_id'
  J.mb = 'user_id'
  J.Ka = 'conversion_linker'
  J.Ja = 'conversion_cookie_prefix'
  J.X = 'cookie_prefix'
  J.R = 'items'
  J.Rd = 'aw_merchant_id'
  J.Md = 'aw_feed_country'
  J.Pd = 'aw_feed_language'
  J.Ld = 'discount'
  J.Yd = 'disable_merchant_reported_purchases'
  J.vd = 'new_customer'
  J.Vd = 'customer_lifetime_value'
  J.$e = 'dc_natural_search'
  J.Ye = 'dc_custom_params'
  J.Bf = 'trip_type'
  J.ce = 'passengers'
  J.lf = 'method'
  J.yf = 'search_term'
  J.Ve = 'content_type'
  J.qf = 'optimize_id'
  J.ff = 'experiments'
  J.$b = 'google_signals'
  J.vc = 'google_tld'
  J.bc = 'update'
  J.uc = 'firebase_id'
  J.Zb = 'ga_restrict_domain'
  J.td = 'event_settings'
  J.xf = 'screen_name'
  J.jf = '_x_19'
  J.hf = '_x_20'
  J.xa = 'transport_url'
  J.ze = [
    J.aa,
    J.Za,
    J.zc,
    J.W,
    J.ba,
    J.fa,
    J.Wb,
    J.La,
    J.X,
    J.Eb,
    J.Wd,
    J.Yb,
    J.yc,
    J.td,
    J.Fb,
    J.Zb,
    J.$b,
    J.vc,
    J.wc,
    J.sa,
    J.wa,
    J.kb,
    J.$a,
    J.bc,
    J.ja,
    J.xa
  ]
  J.ze.push(J.R)
  J.xe = [J.ib, J.jb, J.xc, J.Ma, J.xf, J.mb, J.uc]
  J.Df = [
    J.ma,
    J.Qb,
    J.eb,
    J.Nb,
    J.Ob,
    J.mh,
    J.Gd,
    J.Ia,
    J.xh,
    J.vh,
    J.pd,
    J.sh,
    J.Fd,
    J.fh
  ]
  J.Ed = [
    J.wa,
    J.Hd,
    J.Jd,
    J.Yb,
    J.kb,
    J.Ma,
    J.Z,
    J.ia,
    J.lb,
    J.mb,
    J.Ka,
    J.Ja,
    J.X,
    J.W,
    J.ba,
    J.fa,
    J.ib,
    J.jb,
    J.ne,
    J.fe,
    J.me,
    J.ue,
    J.R,
    J.Rd,
    J.Md,
    J.Pd,
    J.Ld,
    J.Yd,
    J.vd,
    J.Vd,
    J.aa,
    J.zc,
    J.bc,
    J.uc,
    J.be,
    J.xa,
    J.ve
  ]
  J.ye = [J.aa, J.Za, J.Eb]
  J.Be = [J.ba, J.Fb, J.$a]
  var Pd = /[A-Z]+/,
    Qd = /\s/,
    Rd = function(a) {
      if (g(a) && ((a = Da(a)), !Qd.test(a))) {
        var b = a.indexOf('-')
        if (!(0 > b)) {
          var c = a.substring(0, b)
          if (Pd.test(c)) {
            for (
              var d = a.substring(b + 1).split('/'), e = 0;
              e < d.length;
              e++
            )
              if (!d[e]) return
            return { id: a, prefix: c, containerId: c + '-' + d[0], s: d }
          }
        }
      }
    },
    Td = function(a) {
      for (var b = {}, c = 0; c < a.length; ++c) {
        var d = Rd(a[c])
        d && (b[d.id] = d)
      }
      Sd(b)
      var e = []
      za(b, function(f, h) {
        e.push(h)
      })
      return e
    }
  function Sd(a) {
    var b = [],
      c
    for (c in a)
      if (a.hasOwnProperty(c)) {
        var d = a[c]
        'AW' === d.prefix && d.s[1] && b.push(d.containerId)
      }
    for (var e = 0; e < b.length; ++e) delete a[b[e]]
  }
  var Ud = function() {
    var a = !1
    return a
  }
  var Q = function(a, b, c, d) {
      return (2 === Vd() || d || 'http:' != D.location.protocol ? a : b) + c
    },
    Vd = function() {
      var a = kc(),
        b
      if (1 === a)
        a: {
          var c = Uc
          c = c.toLowerCase()
          for (
            var d = 'https://' + c,
              e = 'http://' + c,
              f = 1,
              h = E.getElementsByTagName('script'),
              k = 0;
            k < h.length && 100 > k;
            k++
          ) {
            var l = h[k].src
            if (l) {
              l = l.toLowerCase()
              if (0 === l.indexOf(e)) {
                b = 3
                break a
              }
              1 === f && 0 === l.indexOf(d) && (f = 2)
            }
          }
          b = f
        }
      else b = a
      return b
    }
  var Xd = function(a, b, c) {
      if (D[a.functionName]) return b.$c && H(b.$c), D[a.functionName]
      var d = Wd()
      D[a.functionName] = d
      if (a.Mb)
        for (var e = 0; e < a.Mb.length; e++) D[a.Mb[e]] = D[a.Mb[e]] || Wd()
      a.Xb && void 0 === D[a.Xb] && (D[a.Xb] = c)
      jc(Q('https://', 'http://', a.kd), b.$c, b.Ug)
      return d
    },
    Wd = function() {
      var a = function() {
        a.q = a.q || []
        a.q.push(arguments)
      }
      return a
    },
    Yd = {
      functionName: '_googWcmImpl',
      Xb: '_googWcmAk',
      kd: 'www.gstatic.com/wcm/loader.js'
    },
    Zd = {
      functionName: '_gaPhoneImpl',
      Xb: 'ga_wpid',
      kd: 'www.gstatic.com/gaphone/loader.js'
    },
    $d = { We: '', zf: '1' },
    ae = {
      functionName: '_googCallTrackingImpl',
      Mb: [Zd.functionName, Yd.functionName],
      kd:
        'www.gstatic.com/call-tracking/call-tracking_' +
        ($d.We || $d.zf) +
        '.js'
    },
    be = {},
    ce = function(a, b, c, d) {
      I('GTM', 22)
      if (c) {
        d = d || {}
        var e = Xd(Yd, d, a),
          f = { ak: a, cl: b }
        void 0 === d.ka && (f.autoreplace = c)
        e(2, d.ka, f, c, 0, new Date(), d.options)
      }
    },
    de = function(a, b, c, d) {
      I('GTM', 21)
      if (b && c) {
        d = d || {}
        for (
          var e = {
              countryNameCode: c,
              destinationNumber: b,
              retrievalTime: new Date()
            },
            f = 0;
          f < a.length;
          f++
        ) {
          var h = a[f]
          be[h.id] ||
            (h && 'AW' === h.prefix && !e.adData && 2 <= h.s.length
              ? ((e.adData = { ak: h.s[0], cl: h.s[1] }), (be[h.id] = !0))
              : h &&
                'UA' === h.prefix &&
                !e.gaData &&
                ((e.gaData = { gaWpid: h.containerId }), (be[h.id] = !0)))
        }
        ;(e.gaData || e.adData) && Xd(ae, d)(d.ka, e, d.options)
      }
    },
    ee = function() {
      var a = !1
      return a
    },
    fe = function(a, b) {
      if (a)
        if (Ud()) {
        } else {
          if (g(a)) {
            var c = Rd(a)
            if (!c) return
            a = c
          }
          var d = void 0,
            e = !1,
            f = b.getWithConfig(J.vf)
          if (f && ra(f)) {
            d = []
            for (var h = 0; h < f.length; h++) {
              var k = Rd(f[h])
              k &&
                (d.push(k),
                (a.id === k.id ||
                  (a.id === a.containerId &&
                    a.containerId === k.containerId)) &&
                  (e = !0))
            }
          }
          if (!d || e) {
            var l = b.getWithConfig(J.ne),
              m
            if (l) {
              ra(l) ? (m = l) : (m = [l])
              var q = b.getWithConfig(J.fe),
                r = b.getWithConfig(J.me),
                u = b.getWithConfig(J.ue),
                p = b.getWithConfig(J.rf),
                t = q || r,
                v = 1
              'UA' !== a.prefix || d || (v = 5)
              for (var w = 0; w < m.length; w++)
                if (w < v)
                  if (d) de(d, m[w], p, { ka: t, options: u })
                  else if ('AW' === a.prefix && a.s[1])
                    ee()
                      ? de([a], m[w], p || 'US', { ka: t, options: u })
                      : ce(a.s[0], a.s[1], m[w], { ka: t, options: u })
                  else if ('UA' === a.prefix)
                    if (ee()) de([a], m[w], p || 'US', { ka: t })
                    else {
                      var x = a.containerId,
                        y = m[w],
                        B = { ka: t }
                      I('GTM', 23)
                      if (y) {
                        B = B || {}
                        var z = Xd(Zd, B, x),
                          A = {}
                        void 0 !== B.ka ? (A.receiver = B.ka) : (A.replace = y)
                        A.ga_wpid = x
                        A.destination = y
                        z(2, new Date(), A)
                      }
                    }
            }
          }
        }
    }
  var ie = new RegExp(
      /^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/
    ),
    je = {
      cl: ['ecl'],
      customPixels: ['nonGooglePixels'],
      ecl: ['cl'],
      ehl: ['hl'],
      hl: ['ehl'],
      html: [
        'customScripts',
        'customPixels',
        'nonGooglePixels',
        'nonGoogleScripts',
        'nonGoogleIframes'
      ],
      customScripts: [
        'html',
        'customPixels',
        'nonGooglePixels',
        'nonGoogleScripts',
        'nonGoogleIframes'
      ],
      nonGooglePixels: [],
      nonGoogleScripts: ['nonGooglePixels'],
      nonGoogleIframes: ['nonGooglePixels']
    },
    ke = {
      cl: ['ecl'],
      customPixels: ['customScripts', 'html'],
      ecl: ['cl'],
      ehl: ['hl'],
      hl: ['ehl'],
      html: ['customScripts'],
      customScripts: ['html'],
      nonGooglePixels: [
        'customPixels',
        'customScripts',
        'html',
        'nonGoogleScripts',
        'nonGoogleIframes'
      ],
      nonGoogleScripts: ['customScripts', 'html'],
      nonGoogleIframes: ['customScripts', 'html', 'nonGoogleScripts']
    },
    le = 'google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes'.split(
      ' '
    )
  var ne = function(a) {
      var b = Fd('gtm.whitelist')
      b && I('GTM', 9)
      b = 'google gtagfl lcl zone oid op'.split(' ')
      var c = b && Ka(Ca(b), je),
        d = Fd('gtm.blacklist')
      d || ((d = Fd('tagTypeBlacklist')) && I('GTM', 3))
      d ? I('GTM', 8) : (d = [])
      me() &&
        ((d = Ca(d)),
        d.push('nonGooglePixels', 'nonGoogleScripts', 'sandboxedScripts'))
      0 <= n(Ca(d), 'google') && I('GTM', 2)
      var e = d && Ka(Ca(d), ke),
        f = {}
      return function(h) {
        var k = h && h[Gb.va]
        if (!k || 'string' != typeof k) return !0
        k = k.replace(/^_*/, '')
        if (void 0 !== f[k]) return f[k]
        var l = $c[k] || [],
          m = a(k, l)
        if (b) {
          var q
          if ((q = m))
            a: {
              if (0 > n(c, k))
                if (l && 0 < l.length)
                  for (var r = 0; r < l.length; r++) {
                    if (0 > n(c, l[r])) {
                      I('GTM', 11)
                      q = !1
                      break a
                    }
                  }
                else {
                  q = !1
                  break a
                }
              q = !0
            }
          m = q
        }
        var u = !1
        if (d) {
          var p = 0 <= n(e, k)
          if (p) u = p
          else {
            var t = ya(e, l || [])
            t && I('GTM', 10)
            u = t
          }
        }
        var v = !m || u
        v ||
          !(0 <= n(l, 'sandboxedScripts')) ||
          (c && -1 !== n(c, 'sandboxedScripts')) ||
          (v = ya(e, le))
        return (f[k] = v)
      }
    },
    me = function() {
      return ie.test(D.location && D.location.hostname)
    }
  var oe = {
    eg: function(a, b) {
      b[Gb.xd] &&
        'string' === typeof a &&
        (a = 1 == b[Gb.xd] ? a.toLowerCase() : a.toUpperCase())
      b.hasOwnProperty(Gb.zd) && null === a && (a = b[Gb.zd])
      b.hasOwnProperty(Gb.Bd) && void 0 === a && (a = b[Gb.Bd])
      b.hasOwnProperty(Gb.Ad) && !0 === a && (a = b[Gb.Ad])
      b.hasOwnProperty(Gb.yd) && !1 === a && (a = b[Gb.yd])
      return a
    }
  }
  var pe = {
      active: !0,
      isWhitelisted: function() {
        return !0
      }
    },
    qe = function(a) {
      var b = Qc.zones
      !b && a && (b = Qc.zones = a())
      return b
    }
  var re = function() {}
  var se = !1,
    te = 0,
    ue = []
  function ve(a) {
    if (!se) {
      var b = E.createEventObject,
        c = 'complete' == E.readyState,
        d = 'interactive' == E.readyState
      if (!a || 'readystatechange' != a.type || c || (!b && d)) {
        se = !0
        for (var e = 0; e < ue.length; e++) H(ue[e])
      }
      ue.push = function() {
        for (var f = 0; f < arguments.length; f++) H(arguments[f])
        return 0
      }
    }
  }
  function we() {
    if (!se && 140 > te) {
      te++
      try {
        E.documentElement.doScroll('left'), ve()
      } catch (a) {
        D.setTimeout(we, 50)
      }
    }
  }
  var xe = function(a) {
    se ? a() : ue.push(a)
  }
  var ye = {},
    ze = {},
    Ae = function(a, b, c, d) {
      if (!ze[a] || Sc[b] || '__zone' === b) return -1
      var e = {}
      Qa(d) && (e = C(d, e))
      e.id = c
      e.status = 'timeout'
      return ze[a].tags.push(e) - 1
    },
    Be = function(a, b, c, d) {
      if (ze[a]) {
        var e = ze[a].tags[b]
        e && ((e.status = c), (e.executionTime = d))
      }
    }
  function Ce(a) {
    for (var b = ye[a] || [], c = 0; c < b.length; c++) b[c]()
    ye[a] = {
      push: function(d) {
        d(Pc.w, ze[a])
      }
    }
  }
  var Fe = function(a, b, c) {
      ze[a] = { tags: [] }
      pa(b) && De(a, b)
      c &&
        D.setTimeout(function() {
          return Ce(a)
        }, Number(c))
      return Ee(a)
    },
    De = function(a, b) {
      ye[a] = ye[a] || []
      ye[a].push(
        Ha(function() {
          return H(function() {
            b(Pc.w, ze[a])
          })
        })
      )
    }
  function Ee(a) {
    var b = 0,
      c = 0,
      d = !1
    return {
      add: function() {
        c++
        return Ha(function() {
          b++
          d && b >= c && Ce(a)
        })
      },
      Rf: function() {
        d = !0
        b >= c && Ce(a)
      }
    }
  }
  var Ge = function() {
    function a(d) {
      return !qa(d) || 0 > d ? 0 : d
    }
    if (!Qc._li && D.performance && D.performance.timing) {
      var b = D.performance.timing.navigationStart,
        c = qa(Gd.get('gtm.start')) ? Gd.get('gtm.start') : 0
      Qc._li = { cst: a(c - b), cbt: a(Wc - b) }
    }
  }
  var Ke = {},
    Le = function() {
      return D.GoogleAnalyticsObject && D[D.GoogleAnalyticsObject]
    },
    Me = !1
  var Ne = function(a) {
      D.GoogleAnalyticsObject || (D.GoogleAnalyticsObject = a || 'ga')
      var b = D.GoogleAnalyticsObject
      if (D[b]) D.hasOwnProperty(b) || I('GTM', 12)
      else {
        var c = function() {
          c.q = c.q || []
          c.q.push(arguments)
        }
        c.l = Number(new Date())
        D[b] = c
      }
      Ge()
      return D[b]
    },
    Oe = function(a, b, c, d) {
      b = String(b)
        .replace(/\s+/g, '')
        .split(',')
      var e = Le()
      e(a + 'require', 'linker')
      e(a + 'linker:autoLink', b, c, d)
    }
  var Qe = function(a) {},
    Pe = function() {
      return D.GoogleAnalyticsObject || 'ga'
    }
  var Se = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i
  var Te = /:[0-9]+$/,
    Ue = function(a, b, c) {
      for (var d = a.split('&'), e = 0; e < d.length; e++) {
        var f = d[e].split('=')
        if (decodeURIComponent(f[0]).replace(/\+/g, ' ') === b) {
          var h = f.slice(1).join('=')
          return c ? h : decodeURIComponent(h).replace(/\+/g, ' ')
        }
      }
    },
    Xe = function(a, b, c, d, e) {
      b && (b = String(b).toLowerCase())
      if ('protocol' === b || 'port' === b)
        a.protocol = Ve(a.protocol) || Ve(D.location.protocol)
      'port' === b
        ? (a.port = String(
            Number(a.hostname ? a.port : D.location.port) ||
              ('http' == a.protocol ? 80 : 'https' == a.protocol ? 443 : '')
          ))
        : 'host' === b &&
          (a.hostname = (a.hostname || D.location.hostname)
            .replace(Te, '')
            .toLowerCase())
      var f = b,
        h,
        k = Ve(a.protocol)
      f && (f = String(f).toLowerCase())
      switch (f) {
        case 'url_no_fragment':
          h = We(a)
          break
        case 'protocol':
          h = k
          break
        case 'host':
          h = a.hostname.replace(Te, '').toLowerCase()
          if (c) {
            var l = /^www\d*\./.exec(h)
            l && l[0] && (h = h.substr(l[0].length))
          }
          break
        case 'port':
          h = String(
            Number(a.port) || ('http' == k ? 80 : 'https' == k ? 443 : '')
          )
          break
        case 'path':
          a.pathname || a.hostname || I('TAGGING', 1)
          h = '/' == a.pathname.substr(0, 1) ? a.pathname : '/' + a.pathname
          var m = h.split('/')
          0 <= n(d || [], m[m.length - 1]) && (m[m.length - 1] = '')
          h = m.join('/')
          break
        case 'query':
          h = a.search.replace('?', '')
          e && (h = Ue(h, e, void 0))
          break
        case 'extension':
          var q = a.pathname.split('.')
          h = 1 < q.length ? q[q.length - 1] : ''
          h = h.split('/')[0]
          break
        case 'fragment':
          h = a.hash.replace('#', '')
          break
        default:
          h = a && a.href
      }
      return h
    },
    Ve = function(a) {
      return a ? a.replace(':', '').toLowerCase() : ''
    },
    We = function(a) {
      var b = ''
      if (a && a.href) {
        var c = a.href.indexOf('#')
        b = 0 > c ? a.href : a.href.substr(0, c)
      }
      return b
    },
    Ye = function(a) {
      var b = E.createElement('a')
      a && (b.href = a)
      var c = b.pathname
      '/' !== c[0] && (a || I('TAGGING', 1), (c = '/' + c))
      var d = b.hostname.replace(Te, '')
      return {
        href: b.href,
        protocol: b.protocol,
        host: b.host,
        hostname: d,
        pathname: c,
        search: b.search,
        hash: b.hash,
        port: b.port
      }
    }
  function cf(a, b, c, d) {
    var e = tb[a],
      f = df(a, b, c, d)
    if (!f) return null
    var h = Cb(e[Gb.Qd], c, [])
    if (h && h.length) {
      var k = h[0]
      f = cf(
        k.index,
        { C: f, B: 1 === k.oe ? b.terminate : f, terminate: b.terminate },
        c,
        d
      )
    }
    return f
  }
  function df(a, b, c, d) {
    function e() {
      if (f[Gb.nf]) k()
      else {
        var w = Db(f, c, []),
          x = Ae(c.id, String(f[Gb.va]), Number(f[Gb.Sd]), w[Gb.pf]),
          y = !1
        w.vtp_gtmOnSuccess = function() {
          if (!y) {
            y = !0
            var A = Fa() - z
            yd(c.id, tb[a], '5')
            Be(c.id, x, 'success', A)
            h()
          }
        }
        w.vtp_gtmOnFailure = function() {
          if (!y) {
            y = !0
            var A = Fa() - z
            yd(c.id, tb[a], '6')
            Be(c.id, x, 'failure', A)
            k()
          }
        }
        w.vtp_gtmTagId = f.tag_id
        w.vtp_gtmEventId = c.id
        yd(c.id, f, '1')
        var B = function() {
          var A = Fa() - z
          yd(c.id, f, '7')
          Be(c.id, x, 'exception', A)
          y || ((y = !0), k())
        }
        var z = Fa()
        try {
          Bb(w, c)
        } catch (A) {
          B(A)
        }
      }
    }
    var f = tb[a],
      h = b.C,
      k = b.B,
      l = b.terminate
    if (c.Uc(f)) return null
    var m = Cb(f[Gb.Td], c, [])
    if (m && m.length) {
      var q = m[0],
        r = cf(q.index, { C: h, B: k, terminate: l }, c, d)
      if (!r) return null
      h = r
      k = 2 === q.oe ? l : r
    }
    if (f[Gb.Id] || f[Gb.tf]) {
      var u = f[Gb.Id] ? ub : c.qh,
        p = h,
        t = k
      if (!u[a]) {
        e = Ha(e)
        var v = ef(a, u, e)
        h = v.C
        k = v.B
      }
      return function() {
        u[a](p, t)
      }
    }
    return e
  }
  function ef(a, b, c) {
    var d = [],
      e = []
    b[a] = ff(d, e, c)
    return {
      C: function() {
        b[a] = gf
        for (var f = 0; f < d.length; f++) d[f]()
      },
      B: function() {
        b[a] = hf
        for (var f = 0; f < e.length; f++) e[f]()
      }
    }
  }
  function ff(a, b, c) {
    return function(d, e) {
      a.push(d)
      b.push(e)
      c()
    }
  }
  function gf(a) {
    a()
  }
  function hf(a, b) {
    b()
  }
  var lf = function(a, b) {
    for (var c = [], d = 0; d < tb.length; d++)
      if (a.ub[d]) {
        var e = tb[d]
        var f = b.add()
        try {
          var h = cf(d, { C: f, B: f, terminate: f }, a, d)
          h ? c.push({ Se: d, Me: Eb(e), pg: h }) : (jf(d, a), f())
        } catch (l) {
          f()
        }
      }
    b.Rf()
    c.sort(kf)
    for (var k = 0; k < c.length; k++) c[k].pg()
    return 0 < c.length
  }
  function kf(a, b) {
    var c,
      d = b.Me,
      e = a.Me
    c = d > e ? 1 : d < e ? -1 : 0
    var f
    if (0 !== c) f = c
    else {
      var h = a.Se,
        k = b.Se
      f = h > k ? 1 : h < k ? -1 : 0
    }
    return f
  }
  function jf(a, b) {
    if (!vd) return
    var c = function(d) {
      var e = b.Uc(tb[d]) ? '3' : '4',
        f = Cb(tb[d][Gb.Qd], b, [])
      f && f.length && c(f[0].index)
      yd(b.id, tb[d], e)
      var h = Cb(tb[d][Gb.Td], b, [])
      h && h.length && c(h[0].index)
    }
    c(a)
  }
  var mf = !1,
    nf = function(a, b, c, d, e) {
      if ('gtm.js' == b) {
        if (mf) return !1
        mf = !0
      }
      xd(a, b)
      var f = Fe(a, d, e)
      Kd(a, 'event', 1)
      Kd(a, 'ecommerce', 1)
      Kd(a, 'gtm')
      var h = {
        id: a,
        name: b,
        Uc: ne(c),
        ub: [],
        qh: [],
        Ce: function() {
          I('GTM', 6)
        }
      }
      h.ub = Kb(h)
      var k = lf(h, f)
      ;('gtm.js' !== b && 'gtm.sync' !== b) || Qe(Pc.w)
      if (!k) return k
      for (var l = 0; l < h.ub.length; l++)
        if (h.ub[l]) {
          var m = tb[l]
          if (m && !Sc[String(m[Gb.va])]) return !0
        }
      return !1
    }
  var of = []
  function pf() {
    var a = hc('google_tag_data', {})
    a.ics ||
      (a.ics = {
        entries: {},
        set: qf,
        update: rf,
        addListener: sf,
        notifyListeners: tf,
        active: !1
      })
    return a.ics
  }
  function qf(a, b, c, d, e) {
    var f = pf()
    f.active = !0
    if (void 0 != b) {
      var h = f.entries,
        k = h[a] || {},
        l = k.region,
        m = c && g(c) ? c.toUpperCase() : void 0
      d = d.toUpperCase()
      e = e.toUpperCase()
      ;(m !== e && (m === d ? l === e : m || l)) ||
        (h[a] = { region: m, initial: 'granted' === b, update: k.update })
    }
  }
  function rf(a, b) {
    var c = pf()
    c.active = !0
    if (void 0 != b) {
      var d = uf(a),
        e = c.entries
      e[a] = e[a] || {}
      e[a].update = 'granted' === b
      if (uf(a) !== d)
        for (var f = 0; f < of.length; ++f) {
          var h = of[f]
          ra(h.ie) && -1 !== h.ie.indexOf(a) && (h.Le = !0)
        }
    }
  }
  function sf(a, b) {
    of.push({ ie: a, rg: b })
  }
  function tf() {
    for (var a = 0; a < of.length; ++a) {
      var b = of[a]
      if (b.Le) {
        b.Le = !1
        try {
          b.rg.call()
        } catch (c) {}
      }
    }
  }
  var uf = function(a) {
      var b = pf().entries[a] || {}
      return void 0 !== b.update
        ? b.update
        : void 0 !== b.initial
        ? b.initial
        : void 0
    },
    vf = function() {
      return pf().active
    },
    wf = function(a, b) {
      pf().addListener(a, b)
    },
    xf = function(a, b) {
      if (!1 === uf(b)) {
        var c = !1
        wf([b], function() {
          !c && uf(b) && (a(), (c = !0))
        })
      }
    }
  var yf = [J.o, J.J],
    zf = function(a) {
      for (var b = a.region, c = ra(b) ? b : [b], d = 0; d < c.length; ++d)
        for (var e = 0; e < yf.length; e++) {
          var f = yf[e],
            h = a[yf[e]],
            k = c[d]
          pf().set(f, h, k, 'CN', 'CN-31')
        }
    },
    Af = function(a) {
      for (var b = 0; b < yf.length; b++) {
        var c = yf[b],
          d = a[yf[b]]
        pf().update(c, d)
      }
      pf().notifyListeners()
    },
    Bf = function(a) {
      var b = uf(a)
      return void 0 != b ? b : !0
    },
    Cf = function() {
      for (var a = [], b = 0; b < yf.length; b++) {
        var c = uf(yf[b])
        a[b] = !0 === c ? '1' : !1 === c ? '0' : '-'
      }
      return 'G1' + a.join('')
    }
  var Df = function(a, b) {
    var c = zb(a, b)
    tb.push(c)
    return tb.length - 1
  }
  var Ef = /^https?:\/\/www\.googletagmanager\.com/
  function Ff() {
    var a
    return a
  }
  function Hf(a, b) {}
  function Gf(a) {
    0 !== a.indexOf('http://') &&
      0 !== a.indexOf('https://') &&
      (a = 'https://' + a)
    '/' === a[a.length - 1] && (a = a.substring(0, a.length - 1))
    return a
  }
  function If() {
    var a = !1
    return a
  }
  var Jf = function() {
      this.eventModel = {}
      this.targetConfig = {}
      this.containerConfig = {}
      this.h = {}
      this.globalConfig = {}
      this.C = function() {}
      this.B = function() {}
      this.he = void 0
    },
    Kf = function(a) {
      var b = new Jf()
      b.eventModel = a
      return b
    },
    Lf = function(a, b) {
      a.targetConfig = b
      return a
    },
    Mf = function(a, b) {
      a.containerConfig = b
      return a
    },
    Nf = function(a, b) {
      a.h = b
      return a
    },
    Of = function(a, b) {
      a.globalConfig = b
      return a
    },
    Pf = function(a, b) {
      a.C = b
      return a
    },
    Qf = function(a, b) {
      a.B = b
      return a
    }
  Jf.prototype.getWithConfig = function(a) {
    if (void 0 !== this.eventModel[a]) return this.eventModel[a]
    if (void 0 !== this.targetConfig[a]) return this.targetConfig[a]
    if (void 0 !== this.containerConfig[a]) return this.containerConfig[a]
    if (void 0 !== this.h[a]) return this.h[a]
    if (void 0 !== this.globalConfig[a]) return this.globalConfig[a]
  }
  var Rf = function(a) {
    function b(e) {
      za(e, function(f) {
        c[f] = null
      })
    }
    var c = {}
    b(a.eventModel)
    b(a.targetConfig)
    b(a.containerConfig)
    b(a.globalConfig)
    var d = []
    za(c, function(e) {
      d.push(e)
    })
    return d
  }
  function Sf(a, b, c) {
    for (var d = [], e = b.split(';'), f = 0; f < e.length; f++) {
      var h = e[f].split('='),
        k = h[0].replace(/^\s*|\s*$/g, '')
      if (k && k == a) {
        var l = h
          .slice(1)
          .join('=')
          .replace(/^\s*|\s*$/g, '')
        l && c && (l = decodeURIComponent(l))
        d.push(l)
      }
    }
    return d
  }
  var Tf = {},
    Uf = function(a) {
      return void 0 == Tf[a] ? !1 : Tf[a]
    }
  var Wf = function(a, b, c, d) {
      return Vf(d) ? Sf(a, String(b || document.cookie), c) : []
    },
    Zf = function(a, b, c, d, e) {
      if (Vf(e)) {
        var f = Xf(a, d, e)
        if (1 === f.length) return f[0].id
        if (0 !== f.length) {
          f = Yf(
            f,
            function(h) {
              return h.Sb
            },
            b
          )
          if (1 === f.length) return f[0].id
          f = Yf(
            f,
            function(h) {
              return h.vb
            },
            c
          )
          return f[0] ? f[0].id : void 0
        }
      }
    }
  function $f(a, b, c, d) {
    var e = document.cookie
    document.cookie = a
    var f = document.cookie
    return e != f || (void 0 != c && 0 <= Wf(b, f, !1, d).indexOf(c))
  }
  var dg = function(a, b, c) {
      function d(p, t, v) {
        if (null == v) return delete h[t], p
        h[t] = v
        return p + '; ' + t + '=' + v
      }
      function e(p, t) {
        if (null == t) return delete h[t], p
        h[t] = !0
        return p + '; ' + t
      }
      if (!Vf(c.Ca)) return !1
      var f
      void 0 == b
        ? (f = a + '=deleted; expires=' + new Date(0).toUTCString())
        : (c.encode && (b = encodeURIComponent(b)),
          (b = ag(b)),
          (f = a + '=' + b))
      var h = {}
      f = d(f, 'path', c.path)
      var k
      c.expires instanceof Date
        ? (k = c.expires.toUTCString())
        : null != c.expires && (k = '' + c.expires)
      f = d(f, 'expires', k)
      f = d(f, 'max-age', c.Th)
      f = d(f, 'samesite', c.Zh)
      c.$h && (f = e(f, 'secure'))
      f = e(f, c.flags)
      var l = c.domain
      if ('auto' === l) {
        for (var m = bg(), q = 0; q < m.length; ++q) {
          var r = 'none' !== m[q] ? m[q] : void 0,
            u = d(f, 'domain', r)
          if (!cg(r, c.path) && $f(u, a, b, c.Ca)) return !0
        }
        return !1
      }
      l && 'none' !== l && (f = d(f, 'domain', l))
      return cg(l, c.path) ? !1 : $f(f, a, b, c.Ca)
    },
    eg = function(a, b, c) {
      null == c.path && (c.path = '/')
      c.domain || (c.domain = 'auto')
      return dg(a, b, c)
    }
  function Yf(a, b, c) {
    for (var d = [], e = [], f, h = 0; h < a.length; h++) {
      var k = a[h],
        l = b(k)
      l === c
        ? d.push(k)
        : void 0 === f || l < f
        ? ((e = [k]), (f = l))
        : l === f && e.push(k)
    }
    return 0 < d.length ? d : e
  }
  function Xf(a, b, c) {
    for (var d = [], e = Wf(a, void 0, void 0, c), f = 0; f < e.length; f++) {
      var h = e[f].split('.'),
        k = h.shift()
      if (!b || -1 !== b.indexOf(k)) {
        var l = h.shift()
        l &&
          ((l = l.split('-')),
          d.push({ id: h.join('.'), Sb: 1 * l[0] || 1, vb: 1 * l[1] || 1 }))
      }
    }
    return d
  }
  var ag = function(a) {
      a && 1200 < a.length && (a = a.substring(0, 1200))
      return a
    },
    fg = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
    gg = /(^|\.)doubleclick\.net$/i,
    cg = function(a, b) {
      return gg.test(document.location.hostname) || ('/' === b && fg.test(a))
    },
    bg = function() {
      var a = [],
        b = document.location.hostname.split('.')
      if (4 === b.length) {
        var c = b[b.length - 1]
        if (parseInt(c, 10).toString() === c) return ['none']
      }
      for (var d = b.length - 2; 0 <= d; d--) a.push(b.slice(d).join('.'))
      var e = document.location.hostname
      gg.test(e) || fg.test(e) || a.push('none')
      return a
    },
    Vf = function(a) {
      if (!Uf('gtag_cs_api') || !a || !vf()) return !0
      var b = uf(a)
      return null == b ? !0 : !!b
    }
  var hg = function() {
      for (
        var a = fc.userAgent + (E.cookie || '') + (E.referrer || ''),
          b = a.length,
          c = D.history.length;
        0 < c;

      )
        a += c-- ^ b++
      var d = 1,
        e,
        f,
        h
      if (a)
        for (d = 0, f = a.length - 1; 0 <= f; f--)
          (h = a.charCodeAt(f)),
            (d = ((d << 6) & 268435455) + h + (h << 14)),
            (e = d & 266338304),
            (d = 0 != e ? d ^ (e >> 21) : d)
      return [
        Math.round(2147483647 * Math.random()) ^ (d & 2147483647),
        Math.round(Fa() / 1e3)
      ].join('.')
    },
    kg = function(a, b, c, d, e) {
      var f = ig(b)
      return Zf(a, f, jg(c), d, e)
    },
    lg = function(a, b, c, d) {
      var e = '' + ig(c),
        f = jg(d)
      1 < f && (e += '-' + f)
      return [b, e, a].join('.')
    },
    ig = function(a) {
      if (!a) return 1
      a = 0 === a.indexOf('.') ? a.substr(1) : a
      return a.split('.').length
    },
    jg = function(a) {
      if (!a || '/' === a) return 1
      '/' !== a[0] && (a = '/' + a)
      '/' !== a[a.length - 1] && (a += '/')
      return a.split('/').length - 1
    }
  function mg(a, b, c) {
    var d,
      e = a.tb
    null == e && (e = 7776e3)
    0 !== e && (d = new Date((b || Fa()) + 1e3 * e))
    return {
      path: a.path,
      domain: a.domain,
      flags: a.flags,
      encode: !!c,
      expires: d
    }
  }
  function ng() {
    for (var a = pg, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c
    return b
  }
  function qg() {
    var a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    a += a.toLowerCase() + '0123456789-_'
    return a + '.'
  }
  var pg, rg
  function sg(a) {
    pg = pg || qg()
    rg = rg || ng()
    for (var b = [], c = 0; c < a.length; c += 3) {
      var d = c + 1 < a.length,
        e = c + 2 < a.length,
        f = a.charCodeAt(c),
        h = d ? a.charCodeAt(c + 1) : 0,
        k = e ? a.charCodeAt(c + 2) : 0,
        l = f >> 2,
        m = ((f & 3) << 4) | (h >> 4),
        q = ((h & 15) << 2) | (k >> 6),
        r = k & 63
      e || ((r = 64), d || (q = 64))
      b.push(pg[l], pg[m], pg[q], pg[r])
    }
    return b.join('')
  }
  function tg(a) {
    function b(l) {
      for (; d < a.length; ) {
        var m = a.charAt(d++),
          q = rg[m]
        if (null != q) return q
        if (!/^[\s\xa0]*$/.test(m))
          throw Error('Unknown base64 encoding at char: ' + m)
      }
      return l
    }
    pg = pg || qg()
    rg = rg || ng()
    for (var c = '', d = 0; ; ) {
      var e = b(-1),
        f = b(0),
        h = b(64),
        k = b(64)
      if (64 === k && -1 === e) return c
      c += String.fromCharCode((e << 2) | (f >> 4))
      64 != h &&
        ((c += String.fromCharCode(((f << 4) & 240) | (h >> 2))),
        64 != k && (c += String.fromCharCode(((h << 6) & 192) | k)))
    }
  }
  var ug
  var yg = function() {
      var a = vg,
        b = wg,
        c = xg(),
        d = function(h) {
          a(h.target || h.srcElement || {})
        },
        e = function(h) {
          b(h.target || h.srcElement || {})
        }
      if (!c.init) {
        nc(E, 'mousedown', d)
        nc(E, 'keyup', d)
        nc(E, 'submit', e)
        var f = HTMLFormElement.prototype.submit
        HTMLFormElement.prototype.submit = function() {
          b(this)
          f.call(this)
        }
        c.init = !0
      }
    },
    zg = function(a, b, c, d, e) {
      var f = {
        callback: a,
        domains: b,
        fragment: 2 === c,
        placement: c,
        forms: d,
        sameHost: e
      }
      xg().decorators.push(f)
    },
    Ag = function(a, b, c) {
      for (var d = xg().decorators, e = {}, f = 0; f < d.length; ++f) {
        var h = d[f],
          k
        if ((k = !c || h.forms))
          a: {
            var l = h.domains,
              m = a
            if (l && (h.sameHost || m !== E.location.hostname))
              for (var q = 0; q < l.length; q++)
                if (l[q] instanceof RegExp) {
                  if (l[q].test(m)) {
                    k = !0
                    break a
                  }
                } else if (0 <= m.indexOf(l[q])) {
                  k = !0
                  break a
                }
            k = !1
          }
        if (k) {
          var r = h.placement
          void 0 == r && (r = h.fragment ? 2 : 1)
          r === b && Ia(e, h.callback())
        }
      }
      return e
    },
    xg = function() {
      var a = hc('google_tag_data', {}),
        b = a.gl
      ;(b && b.decorators) || ((b = { decorators: [] }), (a.gl = b))
      return b
    }
  var Bg = /(.*?)\*(.*?)\*(.*)/,
    Cg = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
    Dg = /^(?:www\.|m\.|amp\.)+/,
    Eg = /([^?#]+)(\?[^#]*)?(#.*)?/
  function Fg(a) {
    return new RegExp('(.*?)(^|&)' + a + '=([^&]*)&?(.*)')
  }
  var Hg = function(a) {
      var b = [],
        c
      for (c in a)
        if (a.hasOwnProperty(c)) {
          var d = a[c]
          void 0 !== d &&
            d === d &&
            null !== d &&
            '[object Object]' !== d.toString() &&
            (b.push(c), b.push(sg(String(d))))
        }
      var e = b.join('*')
      return ['1', Gg(e), e].join('*')
    },
    Gg = function(a, b) {
      var c = [
          window.navigator.userAgent,
          new Date().getTimezoneOffset(),
          window.navigator.userLanguage || window.navigator.language,
          Math.floor(new Date().getTime() / 60 / 1e3) - (void 0 === b ? 0 : b),
          a
        ].join('*'),
        d
      if (!(d = ug)) {
        for (var e = Array(256), f = 0; 256 > f; f++) {
          for (var h = f, k = 0; 8 > k; k++)
            h = h & 1 ? (h >>> 1) ^ 3988292384 : h >>> 1
          e[f] = h
        }
        d = e
      }
      ug = d
      for (var l = 4294967295, m = 0; m < c.length; m++)
        l = (l >>> 8) ^ ug[(l ^ c.charCodeAt(m)) & 255]
      return ((l ^ -1) >>> 0).toString(36)
    },
    Jg = function() {
      return function(a) {
        var b = Ye(D.location.href),
          c = b.search.replace('?', ''),
          d = Ue(c, '_gl', !0) || ''
        a.query = Ig(d) || {}
        var e = Xe(b, 'fragment').match(Fg('_gl'))
        a.fragment = Ig((e && e[3]) || '') || {}
      }
    },
    Kg = function() {
      var a = Jg(),
        b = xg()
      b.data || ((b.data = { query: {}, fragment: {} }), a(b.data))
      var c = {},
        d = b.data
      d && (Ia(c, d.query), Ia(c, d.fragment))
      return c
    },
    Ig = function(a) {
      var b
      b = void 0 === b ? 3 : b
      try {
        if (a) {
          var c
          a: {
            for (var d = a, e = 0; 3 > e; ++e) {
              var f = Bg.exec(d)
              if (f) {
                c = f
                break a
              }
              d = decodeURIComponent(d)
            }
            c = void 0
          }
          var h = c
          if (h && '1' === h[1]) {
            var k = h[3],
              l
            a: {
              for (var m = h[2], q = 0; q < b; ++q)
                if (m === Gg(k, q)) {
                  l = !0
                  break a
                }
              l = !1
            }
            if (l) {
              for (
                var r = {}, u = k ? k.split('*') : [], p = 0;
                p < u.length;
                p += 2
              )
                r[u[p]] = tg(u[p + 1])
              return r
            }
          }
        }
      } catch (t) {}
    }
  function Lg(a, b, c, d) {
    function e(q) {
      var r = q,
        u = Fg(a).exec(r),
        p = r
      if (u) {
        var t = u[2],
          v = u[4]
        p = u[1]
        v && (p = p + t + v)
      }
      q = p
      var w = q.charAt(q.length - 1)
      q && '&' !== w && (q += '&')
      return q + m
    }
    d = void 0 === d ? !1 : d
    var f = Eg.exec(c)
    if (!f) return ''
    var h = f[1],
      k = f[2] || '',
      l = f[3] || '',
      m = a + '=' + b
    d ? (l = '#' + e(l.substring(1))) : (k = '?' + e(k.substring(1)))
    return '' + h + k + l
  }
  function Mg(a, b) {
    var c = 'FORM' === (a.tagName || '').toUpperCase(),
      d = Ag(b, 1, c),
      e = Ag(b, 2, c),
      f = Ag(b, 3, c)
    if (Ja(d)) {
      var h = Hg(d)
      c ? Ng('_gl', h, a) : Og('_gl', h, a, !1)
    }
    if (!c && Ja(e)) {
      var k = Hg(e)
      Og('_gl', k, a, !0)
    }
    for (var l in f)
      if (f.hasOwnProperty(l))
        a: {
          var m = l,
            q = f[l],
            r = a
          if (r.tagName) {
            if ('a' === r.tagName.toLowerCase()) {
              Og(m, q, r, void 0)
              break a
            }
            if ('form' === r.tagName.toLowerCase()) {
              Ng(m, q, r)
              break a
            }
          }
          'string' == typeof r && Lg(m, q, r, void 0)
        }
  }
  function Og(a, b, c, d) {
    if (c.href) {
      var e = Lg(a, b, c.href, void 0 === d ? !1 : d)
      Se.test(e) && (c.href = e)
    }
  }
  function Ng(a, b, c) {
    if (c && c.action) {
      var d = (c.method || '').toLowerCase()
      if ('get' === d) {
        for (var e = c.childNodes || [], f = !1, h = 0; h < e.length; h++) {
          var k = e[h]
          if (k.name === a) {
            k.setAttribute('value', b)
            f = !0
            break
          }
        }
        if (!f) {
          var l = E.createElement('input')
          l.setAttribute('type', 'hidden')
          l.setAttribute('name', a)
          l.setAttribute('value', b)
          c.appendChild(l)
        }
      } else if ('post' === d) {
        var m = Lg(a, b, c.action)
        Se.test(m) && (c.action = m)
      }
    }
  }
  var vg = function(a) {
      try {
        var b
        a: {
          for (var c = a, d = 100; c && 0 < d; ) {
            if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
              b = c
              break a
            }
            c = c.parentNode
            d--
          }
          b = null
        }
        var e = b
        if (e) {
          var f = e.protocol
          ;('http:' !== f && 'https:' !== f) || Mg(e, e.hostname)
        }
      } catch (h) {}
    },
    wg = function(a) {
      try {
        if (a.action) {
          var b = Xe(Ye(a.action), 'host')
          Mg(a, b)
        }
      } catch (c) {}
    },
    Pg = function(a, b, c, d) {
      yg()
      zg(a, b, 'fragment' === c ? 2 : 1, !!d, !1)
    },
    Qg = function(a) {
      yg()
      zg(a, [D.location.hostname], 3, !0, !0)
    },
    Rg = function() {
      var a = E.location.hostname,
        b = Cg.exec(E.referrer)
      if (!b) return !1
      var c = b[2],
        d = b[1],
        e = ''
      if (c) {
        var f = c.split('/'),
          h = f[1]
        e = 's' === h ? decodeURIComponent(f[2]) : decodeURIComponent(h)
      } else if (d) {
        if (0 === d.indexOf('xn--')) return !1
        e = d.replace(/-/g, '.').replace(/\.\./g, '-')
      }
      var k = a.replace(Dg, ''),
        l = e.replace(Dg, ''),
        m
      if (!(m = k === l)) {
        var q = '.' + l
        m = k.substring(k.length - q.length, k.length) === q
      }
      return m
    },
    Sg = function(a, b) {
      return !1 === a ? !1 : a || b || Rg()
    }
  var Tg = /^\w+$/,
    Ug = /^[\w-]+$/,
    Vg = /^~?[\w-]+$/,
    Wg = { aw: '_aw', dc: '_dc', gf: '_gf', ha: '_ha', gp: '_gp' },
    Xg = function() {
      if (!Uf('gtag_cs_api') || !vf()) return !0
      var a = uf('ad_storage')
      return null == a ? !0 : !!a
    },
    Yg = function(a) {
      Xg() ? a() : xf(a, 'ad_storage')
    }
  function Zg(a) {
    return a && 'string' == typeof a && a.match(Tg) ? a : '_gcl'
  }
  var ah = function() {
      var a = Ye(D.location.href),
        b = Xe(a, 'query', !1, void 0, 'gclid'),
        c = Xe(a, 'query', !1, void 0, 'gclsrc'),
        d = Xe(a, 'query', !1, void 0, 'dclid')
      if (!b || !c) {
        var e = a.hash.replace('#', '')
        b = b || Ue(e, 'gclid', void 0)
        c = c || Ue(e, 'gclsrc', void 0)
      }
      return $g(b, c, d)
    },
    $g = function(a, b, c) {
      var d = {},
        e = function(f, h) {
          d[h] || (d[h] = [])
          d[h].push(f)
        }
      d.gclid = a
      d.gclsrc = b
      d.dclid = c
      if (void 0 !== a && a.match(Ug))
        switch (b) {
          case void 0:
            e(a, 'aw')
            break
          case 'aw.ds':
            e(a, 'aw')
            e(a, 'dc')
            break
          case 'ds':
            e(a, 'dc')
            break
          case '3p.ds':
            Uf('gtm_3pds') && e(a, 'dc')
            break
          case 'gf':
            e(a, 'gf')
            break
          case 'ha':
            e(a, 'ha')
            break
          case 'gp':
            e(a, 'gp')
        }
      c && e(c, 'dc')
      return d
    },
    ch = function(a) {
      var b = ah()
      Yg(function() {
        return bh(b, a)
      })
    }
  function bh(a, b, c) {
    function d(m, q) {
      var r = dh(m, e)
      r && (eg(r, q, f), (h = !0))
    }
    b = b || {}
    var e = Zg(b.prefix)
    c = c || Fa()
    var f = mg(b, c, !0)
    f.Ca = 'ad_storage'
    var h = !1,
      k = Math.round(c / 1e3),
      l = function(m) {
        return ['GCL', k, m].join('.')
      }
    a.aw && (!0 === b.di ? d('aw', l('~' + a.aw[0])) : d('aw', l(a.aw[0])))
    a.dc && d('dc', l(a.dc[0]))
    a.gf && d('gf', l(a.gf[0]))
    a.ha && d('ha', l(a.ha[0]))
    a.gp && d('gp', l(a.gp[0]))
    return h
  }
  var fh = function(a, b) {
      var c = Kg()
      Yg(function() {
        for (var d = Zg(b.prefix), e = 0; e < a.length; ++e) {
          var f = a[e]
          if (void 0 !== Wg[f]) {
            var h = dh(f, d),
              k = c[h]
            if (k) {
              var l = Math.min(eh(k), Fa()),
                m
              b: {
                for (
                  var q = l, r = Wf(h, E.cookie, void 0, 'ad_storage'), u = 0;
                  u < r.length;
                  ++u
                )
                  if (eh(r[u]) > q) {
                    m = !0
                    break b
                  }
                m = !1
              }
              if (!m) {
                var p = mg(b, l, !0)
                p.Ca = 'ad_storage'
                eg(h, k, p)
              }
            }
          }
        }
        bh($g(c.gclid, c.gclsrc), b)
      })
    },
    dh = function(a, b) {
      var c = Wg[a]
      if (void 0 !== c) return b + c
    },
    eh = function(a) {
      var b = a.split('.')
      return 3 !== b.length || 'GCL' !== b[0] ? 0 : 1e3 * (Number(b[1]) || 0)
    }
  function gh(a) {
    var b = a.split('.')
    if (3 == b.length && 'GCL' == b[0] && b[1]) return b[2]
  }
  var hh = function(a, b, c, d, e) {
      if (ra(b)) {
        var f = Zg(e),
          h = function() {
            for (var k = {}, l = 0; l < a.length; ++l) {
              var m = dh(a[l], f)
              if (m) {
                var q = Wf(m, E.cookie, void 0, 'ad_storage')
                q.length && (k[m] = q.sort()[q.length - 1])
              }
            }
            return k
          }
        Yg(function() {
          Pg(h, b, c, d)
        })
      }
    },
    ih = function(a) {
      return a.filter(function(b) {
        return Vg.test(b)
      })
    },
    jh = function(a, b) {
      for (var c = Zg(b.prefix), d = {}, e = 0; e < a.length; e++)
        Wg[a[e]] && (d[a[e]] = Wg[a[e]])
      Yg(function() {
        za(d, function(f, h) {
          var k = Wf(c + h, E.cookie, void 0, 'ad_storage')
          if (k.length) {
            var l = k[0],
              m = eh(l),
              q = {}
            q[f] = [gh(l)]
            bh(q, b, m)
          }
        })
      })
    },
    kh = function() {
      var a = ['', 'aw.ds'],
        b = ah(),
        c = b.gclid,
        d = b.gclsrc || ''
      c &&
        -1 !== a.indexOf(d) &&
        Qg(function() {
          var e = { gclid: c }
          d && (e.gclsrc = d)
          return e
        })
    },
    lh = function() {
      var a
      if (Xg()) {
        for (
          var b = [],
            c = E.cookie.split(';'),
            d = /^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,
            e = 0;
          e < c.length;
          e++
        ) {
          var f = c[e].match(d)
          f && b.push({ md: f[1], value: f[2] })
        }
        var h = {}
        if (b && b.length)
          for (var k = 0; k < b.length; k++) {
            var l = b[k].value.split('.')
            '1' == l[0] &&
              3 == l.length &&
              l[1] &&
              (h[b[k].md] || (h[b[k].md] = []),
              h[b[k].md].push({ timestamp: l[1], ug: l[2] }))
          }
        a = h
      } else a = {}
      return a
    }
  function mh() {
    var a = !1
    return a
  }
  function nh(a) {
    function b(l) {
      var m
      Qc.reported_gclid || (Qc.reported_gclid = {})
      m = Qc.reported_gclid
      var q = d + (l ? 'gcu' : 'gcs')
      if (!m[q]) {
        m[q] = !0
        var r = [],
          u = function(v, w) {
            w && r.push(v + '=' + encodeURIComponent(w))
          },
          p = d
        u('gclid', p)
        u('gclsrc', e)
        var t = 'https://www.google.com/pagead/landing?' + r.join('&')
        tc(t)
      }
    }
    var c = ah(),
      d = c.gclid || '',
      e = c.gclsrc,
      f = !a && (!d || (e && 'aw.ds' !== e) ? !1 : !0),
      h = mh()
    if (f || h) {
      var k = '' + hg()
      b()
    }
  }
  var oh
  if (3 === Pc.Kb.length) oh = 'g'
  else {
    var ph = 'G'
    ph = 'g'
    oh = ph
  }
  var qh = {
      '': 'n',
      UA: 'u',
      AW: 'a',
      DC: 'd',
      G: 'e',
      GF: 'f',
      HA: 'h',
      GTM: oh,
      OPT: 'o'
    },
    rh = function(a) {
      var b = Pc.w.split('-'),
        c = b[0].toUpperCase(),
        d = qh[c] || 'i',
        e = a && 'GTM' === c ? b[1] : 'OPT' === c ? b[1] : '',
        f
      if (3 === Pc.Kb.length) {
        var h = void 0
        h = h || (Ud() ? 's' : 'o')
        f = '2' + (h || 'w')
      } else f = ''
      return f + d + Pc.Kb + e
    }
  var sh = function(a) {
      var b = Hf(a, '/pagead/conversion_async.js')
      return b
        ? b
        : -1 === navigator.userAgent.toLowerCase().indexOf('firefox')
        ? Q(
            'https://',
            'http://',
            'www.googleadservices.com/pagead/conversion_async.js'
          )
        : 'https://www.google.com/pagead/conversion_async.js'
    },
    th = !1,
    uh = [],
    vh = ['aw', 'dc'],
    wh = function(a) {
      var b = D.google_trackConversion,
        c = a.gtm_onFailure
      'function' == typeof b ? b(a) || c() : c()
    },
    xh = function() {
      for (; 0 < uh.length; ) wh(uh.shift())
    },
    yh = function(a) {
      if (!th) {
        th = !0
        Ge()
        var b = function() {
          xh()
          uh = { push: wh }
        }
        Ud()
          ? b()
          : jc(a, b, function() {
              xh()
              th = !1
            })
      }
    },
    zh = function(a) {
      if (a) {
        for (var b = [], c = 0; c < a.length; ++c) {
          var d = a[c]
          d &&
            b.push({
              item_id: d.id,
              quantity: d.quantity,
              value: d.price,
              start_date: d.start_date,
              end_date: d.end_date
            })
        }
        return b
      }
    },
    Ah = function(a, b, c, d) {
      var e = Rd(a),
        f = b == J.D,
        h = e.s[0],
        k = e.s[1],
        l = void 0 !== k,
        m = function(aa) {
          return d.getWithConfig(aa)
        },
        q = !1 !== m(J.Ka),
        r = m(J.Ja) || m(J.X),
        u = m(J.W),
        p = m(J.ba),
        t = m(J.fa),
        v = m(J.xa),
        w = sh(v),
        x = { prefix: r, domain: u, tb: p, flags: t }
      if (f) {
        var y = m(J.sa) || {}
        q && (Sg(y[J.fb], !!y[J.H]) && fh(vh, x), ch(x), jh(['aw', 'dc'], x))
        y[J.H] && hh(vh, y[J.H], y[J.hb], !!y[J.gb], r)
        fe(e, d)
        nh(!1)
      }
      var B = !1 === m(J.Hd) || !1 === m(J.kb)
      if (f && (l || B)) yh(w)
      else if ((!0 === m(J.Jd) && (l = !1), !1 !== m(J.aa) || l)) {
        var z = {
          google_conversion_id: h,
          google_remarketing_only: !l,
          onload_callback: d.C,
          gtm_onFailure: d.B,
          google_conversion_format: '3',
          google_conversion_color: 'ffffff',
          google_conversion_domain: '',
          google_conversion_label: k,
          google_conversion_language: m(J.Ma),
          google_conversion_value: m(J.Z),
          google_conversion_currency: m(J.ia),
          google_conversion_order_id: m(J.lb),
          google_user_id: m(J.mb),
          google_conversion_page_url: m(J.ib),
          google_conversion_referrer_url: m(J.jb),
          google_gtm: rh()
        }
        l && (z.google_transport_url = Hf(v, '/'))
        z.google_restricted_data_processing = m(J.zc)
        Ud() &&
          ((z.opt_image_generator = function() {
            return new Image()
          }),
          (z.google_enable_display_cookie_match = !1))
        !1 === m(J.aa) && (z.google_allow_ad_personalization_signals = !1)
        z.google_read_gcl_cookie_opt_out = !q
        q && r && (z.google_gcl_cookie_prefix = r)
        var A = (function() {
          var aa = m(J.Yb),
            da = { event: b }
          if (ra(aa)) {
            I('GTM', 26)
            for (var X = 0; X < aa.length; ++X) {
              var M = aa[X],
                N = m(M)
              void 0 !== N && (da[M] = N)
            }
            return da
          }
          var P = d.eventModel
          if (!P) return null
          C(P, da)
          for (var S = 0; S < J.Ed.length; ++S) delete da[J.Ed[S]]
          return da
        })()
        A && (z.google_custom_params = A)
        !l &&
          m(J.R) &&
          (z.google_gtag_event_data = { items: m(J.R), value: m(J.Z) })
        if (l && b == J.ma) {
          z.google_conversion_merchant_id = m(J.Rd)
          z.google_basket_feed_country = m(J.Md)
          z.google_basket_feed_language = m(J.Pd)
          z.google_basket_discount = m(J.Ld)
          z.google_basket_transaction_type = b
          z.google_disable_merchant_reported_conversions = !0 === m(J.Yd)
          Ud() && (z.google_disable_merchant_reported_conversions = !0)
          var F = zh(m(J.R))
          F && (z.google_conversion_items = F)
        }
        var G = function(aa, da) {
          void 0 != da &&
            '' !== da &&
            ((z.google_additional_conversion_params =
              z.google_additional_conversion_params || {}),
            (z.google_additional_conversion_params[aa] = da))
        }
        l && (G('vdnc', m(J.vd)), G('vdltv', m(J.Vd)))
        var L = !0
        L && uh.push(z)
        yh(w)
      } else yh(w)
    }
  var Bh = ['1'],
    Ch = {},
    Gh = function(a) {
      var b = Dh(a.prefix)
      Ch[b] ||
        Eh(b, a.path, a.domain) ||
        (Fh(b, hg(), a), Eh(b, a.path, a.domain))
    }
  function Fh(a, b, c) {
    var d = lg(b, '1', c.domain, c.path),
      e = mg(c)
    e.Ca = 'ad_storage'
    eg(a, d, e)
  }
  function Eh(a, b, c) {
    var d = kg(a, b, c, Bh, 'ad_storage')
    d && (Ch[a] = d)
    return d
  }
  function Dh(a) {
    return (a || '_gcl') + '_au'
  }
  var Hh = /^\d+\.fls\.doubleclick\.net$/
  function Ih(a) {
    Bf('ad_storage') ? a() : xf(a, 'ad_storage')
  }
  function Jh(a) {
    var b = Ye(D.location.href),
      c = Xe(b, 'host', !1)
    if (c && c.match(Hh)) {
      var d = Xe(b, 'path').split(a + '=')
      if (1 < d.length) return d[1].split(';')[0].split('?')[0]
    }
  }
  function Kh(a, b) {
    if ('aw' == a || 'dc' == a) {
      var c = Jh('gcl' + a)
      if (c) return c.split('.')
    }
    var d = Zg(b)
    if (Bf('ad_storage') && '_gcl' == d) {
      var e
      e = ah()[a] || []
      if (0 < e.length) return e
    }
    var f = dh(a, d),
      h
    if (f) {
      var k = []
      if (E.cookie) {
        var l = Wf(f, E.cookie, void 0, 'ad_storage')
        if (l && 0 != l.length) {
          for (var m = 0; m < l.length; m++) {
            var q = gh(l[m])
            q && -1 === n(k, q) && k.push(q)
          }
          h = ih(k)
        } else h = k
      } else h = k
    } else h = []
    return h
  }
  var Lh = function() {
      var a = Jh('gac')
      if (a) return decodeURIComponent(a)
      var b = lh(),
        c = []
      za(b, function(d, e) {
        for (var f = [], h = 0; h < e.length; h++) f.push(e[h].ug)
        f = ih(f)
        f.length && c.push(d + ':' + f.join(','))
      })
      return c.join(';')
    },
    Mh = function(a, b) {
      var c = ah().dc || []
      Ih(function() {
        Gh(b)
        var d = Ch[Dh(b.prefix)],
          e = !1
        if (d && 0 < c.length) {
          var f = (Qc.joined_au = Qc.joined_au || {}),
            h = b.prefix || '_gcl'
          if (!f[h])
            for (var k = 0; k < c.length; k++) {
              var l = 'http://ad.doubleclick.net/ddm/regclk'
              l = l + '?gclid=' + c[k] + '&auiddc=' + d
              tc(l)
              e = f[h] = !0
            }
        }
        null == a && (a = e)
        if (a && d) {
          var m = Dh(b.prefix),
            q = Ch[m]
          q && Fh(m, q, b)
        }
      })
    }
  var Nh = function(a) {
      return !(void 0 === a || null === a || 0 === (a + '').length)
    },
    Oh = function(a, b) {
      var c
      if (2 === b.V) return a('ord', wa(1e11, 1e13)), !0
      if (3 === b.V) return a('ord', '1'), a('num', wa(1e11, 1e13)), !0
      if (4 === b.V) return Nh(b.sessionId) && a('ord', b.sessionId), !0
      if (5 === b.V) c = '1'
      else if (6 === b.V) c = b.hd
      else return !1
      Nh(c) && a('qty', c)
      Nh(b.Pb) && a('cost', b.Pb)
      Nh(b.transactionId) && a('ord', b.transactionId)
      return !0
    },
    Qh = function(a, b, c) {
      function d(u, p, t) {
        h.hasOwnProperty(u) ||
          ((p += ''), (f += ';' + u + '=' + (t ? p : Ph(p))))
      }
      var e = a.Nc,
        f = a.protocol
      f += a.jc
        ? '//' + e + '.fls.doubleclick.net/activityi'
        : '//ad.doubleclick.net/activity'
      f += ';src=' + Ph(e) + (';type=' + Ph(a.Qc)) + (';cat=' + Ph(a.ob))
      var h = a.jg || {}
      za(h, function(u, p) {
        f += ';' + Ph(u) + '=' + Ph(p + '')
      })
      if (Oh(d, a)) {
        Nh(a.sc) && d('u', a.sc)
        Nh(a.qc) && d('tran', a.qc)
        d('gtm', rh())
        !1 === a.Of && d('npa', '1')
        var k = !0
        if (a.Mc && k) {
          var l = Kh('dc', a.Na)
          l && l.length && d('gcldc', l.join('.'))
          var m = Kh('aw', a.Na)
          m && m.length && d('gclaw', m.join('.'))
          var q = Lh()
          q && d('gac', q)
          Gh({ prefix: a.Na, tb: a.gg, domain: a.fg, flags: a.Nh })
          var r = Ch[Dh(a.Na)]
          r && d('auiddc', r)
        }
        Nh(a.dd) && d('prd', a.dd, !0)
        za(a.od, function(u, p) {
          d(u, p)
        })
        f += b || ''
        Nh(a.cc) && d('~oref', a.cc)
        a.jc ? lc(f + '?', a.C) : mc(f + '?', a.C, a.B)
      } else H(a.B)
    },
    Ph = encodeURIComponent,
    Rh = function(a, b) {
      Qh(a, b)
    }
  var Sh = function(a, b, c, d) {
      function e() {
        var f = { config: a, gtm: rh() }
        c && (Gh(d), (f.auiddc = Ch[Dh(d.prefix)]))
        b && (f.loadInsecure = b)
        void 0 === D.__dc_ns_processor && (D.__dc_ns_processor = [])
        D.__dc_ns_processor.push(f)
        jc((b ? 'http' : 'https') + '://www.googletagmanager.com/dclk/ns/v1.js')
      }
      Bf(J.o) ? e() : xf(e, J.o)
    },
    Th = function(a) {
      var b = /^u([1-9]\d?|100)$/,
        c = a.getWithConfig(J.Wd) || {},
        d = Rf(a),
        e = {},
        f = {}
      if (Qa(c))
        for (var h in c)
          if (c.hasOwnProperty(h) && b.test(h)) {
            var k = c[h]
            g(k) && (e[h] = k)
          }
      for (var l = 0; l < d.length; l++) {
        var m = d[l]
        b.test(m) && (e[m] = m)
      }
      for (var q in e) e.hasOwnProperty(q) && (f[q] = a.getWithConfig(e[q]))
      return f
    },
    Uh = function(a) {
      function b(l, m, q) {
        void 0 !== q && 0 !== (q + '').length && d.push(l + m + ':' + c(q + ''))
      }
      var c = encodeURIComponent,
        d = [],
        e = a(J.R) || []
      if (ra(e))
        for (var f = 0; f < e.length; f++) {
          var h = e[f],
            k = f + 1
          b('i', k, h.id)
          b('p', k, h.price)
          b('q', k, h.quantity)
          b('c', k, a(J.Xe))
          b('l', k, a(J.Ma))
        }
      return d.join('|')
    },
    Vh = function(a) {
      var b = /^DC-(\d+)(\/([\w-]+)\/([\w-]+)\+(\w+))?$/.exec(a)
      if (b) {
        var c = {
          standard: 2,
          unique: 3,
          per_session: 4,
          transactions: 5,
          items_sold: 6,
          '': 1
        }[(b[5] || '').toLowerCase()]
        if (c)
          return {
            containerId: 'DC-' + b[1],
            Y: b[3] ? a : '',
            If: b[1],
            Hf: b[3] || '',
            ob: b[4] || '',
            V: c
          }
      }
    },
    Xh = function(a, b, c, d) {
      var e = Vh(a)
      if (e) {
        var f = function(R) {
            return d.getWithConfig(R)
          },
          h = !1 !== f(J.Ka),
          k = f(J.Ja) || f(J.X),
          l = f(J.W),
          m = f(J.ba),
          q = f(J.fa),
          r = f(J.$e),
          u = 3 === Vd()
        if (b === J.D) {
          var p = { prefix: k, domain: l, tb: m, flags: q },
            t = f(J.sa) || {},
            v = f(J.Eb),
            w = void 0 === v ? !0 : !!v
          if (h) {
            if (Sg(t[J.fb], !!t[J.H])) {
              fh(Wh, p)
            }
            ch(p)
            jh(Wh, p)
            Mh(w, p)
          }
          if (t[J.H]) {
            hh(Wh, t[J.H], t[J.hb], !!t[J.gb], k)
          }
          if (r && r.exclusion_parameters && r.engines)
            if (Ud()) {
            } else Sh(r, u, h, p)
          H(d.C)
        } else {
          var x = {},
            y = f(J.Ye)
          if (Qa(y))
            for (var B in y)
              if (y.hasOwnProperty(B)) {
                var z = y[B]
                void 0 !== z && null !== z && (x[B] = z)
              }
          var A = ''
          if (5 === e.V || 6 === e.V) A = Uh(f)
          var F = Th(d),
            G = !0 === f(J.Dh)
          if (Ud() && G) {
            G = !1
          }
          var L = {
            ob: e.ob,
            Mc: h,
            fg: l,
            gg: m,
            Na: k,
            Pb: f(J.Z),
            V: e.V,
            jg: x,
            Nc: e.If,
            Qc: e.Hf,
            B: d.B,
            C: d.C,
            cc: We(Ye(D.location.href)),
            dd: A,
            protocol: u ? 'http:' : 'https:',
            hd: f(J.wf),
            jc: G,
            sessionId: f(J.ac),
            qc: void 0,
            transactionId: f(J.lb),
            sc: void 0,
            od: F,
            Of: !1 !== f(J.aa),
            he: d.he
          }
          Rh(L)
        }
      } else H(d.B)
    },
    Wh = ['aw', 'dc']
  var Zh = function(a) {
      function b() {
        var e = c,
          f = Yh(JSON.stringify(a[e])),
          h =
            'https://www.google.com/travel/flights/click/conversion/' +
            Yh(a.conversion_id) +
            '/?' +
            e +
            '=' +
            f
        if (a.conversionLinkerEnabled) {
          var k = Kh('gf', a.cookiePrefix)
          if (k && k.length)
            for (var l = 0; l < k.length; l++) h += '&gclgf=' + Yh(k[l])
        }
        mc(h, a.onSuccess, a.onFailure)
      }
      var c
      if (a.hasOwnProperty('conversion_data')) c = 'conversion_data'
      else if (a.hasOwnProperty('price')) c = 'price'
      else return
      var d = !0
      d ? b() : xf(b, J.o)
    },
    Yh = function(a) {
      return null === a || void 0 === a || 0 === String(a).length
        ? ''
        : encodeURIComponent(String(a))
    }
  var $h = /.*\.google\.com(:\d+)?\/booking\/flights.*/,
    bi = function(a, b, c, d) {
      var e = function(y) {
          return d.getWithConfig(y)
        },
        f = Rd(a).s[0],
        h = !1 !== e(J.Ka),
        k = e(J.Ja) || e(J.X),
        l = e(J.W),
        m = e(J.ba),
        q = e(J.fa)
      if (b === J.D) {
        if (h) {
          var r = function() {
              var y = { prefix: k, domain: l, flags: q, tb: m }
              ch(y)
              jh(['aw', 'dc'], y)
            },
            u = !0
          u ? r() : xf(r, J.o)
        }
        H(d.C)
      } else {
        var p = {
            conversion_id: f,
            onFailure: d.B,
            onSuccess: d.C,
            conversionLinkerEnabled: h,
            cookiePrefix: k
          },
          t = $h.test(D.location.href)
        if (b !== J.ma) H(d.B)
        else {
          var w = {
              partner_id: f,
              trip_type: e(J.Bf),
              total_price: e(J.Z),
              currency: e(J.ia),
              is_direct_booking: t,
              flight_segment: ai(e(J.R))
            },
            x = e(J.ce)
          x &&
            'object' === typeof x &&
            ((w.passengers_total = Aa(x.total)),
            (w.passengers_adult = Aa(x.adult)),
            (w.passengers_child = Aa(x.child)),
            (w.passengers_infant_in_seat = Aa(x.infant_in_seat)),
            (w.passengers_infant_in_lap = Aa(x.infant_in_lap)))
          p.conversion_data = w
          Zh(p)
        }
      }
    },
    ai = function(a) {
      if (a) {
        for (var b = [], c = 0, d = 0; d < a.length; ++d) {
          var e = a[d]
          !e ||
            (void 0 !== e.category &&
              '' !== e.category &&
              'FlightSegment' !== e.category) ||
            ((b[c] = {
              cabin: e.travel_class,
              fare_product: e.fare_product,
              booking_code: e.booking_code,
              flight_number: e.flight_number,
              origin: e.origin,
              destination: e.destination,
              departure_date: e.start_date
            }),
            c++)
        }
        return b
      }
    }

  var gi = function(a, b, c, d) {
      function e() {
        if (k) {
          var z = b === J.Ia ? Kh('aw', l) : Kh('ha', l)
          w += z
            .map(function(A) {
              return '&gclha=' + encodeURIComponent(A)
            })
            .join('')
        }
        mc(w, d.C, d.B)
      }
      var f = Rd(a),
        h = function(z) {
          return d.getWithConfig(z)
        },
        k = !1 !== h(J.Ka),
        l = h(J.Ja) || h(J.X),
        m = h(J.W),
        q = h(J.ba),
        r = h(J.fa)
      if (b === J.D) {
        var u = function() {
            if (k) {
              var z = { prefix: l, domain: m, flags: r, tb: q }
              Sg(p[J.fb], !!p[J.H]) && fh(ci, z)
              ch(z)
              jh(['aw', 'dc'], z)
            }
            if (p[J.H]) {
              hh(ci, p[J.H], p[J.hb], !!p[J.gb], l)
            }
          },
          p = h(J.sa) || {},
          t = !0
        t ? u() : xf(u, J.o)
        H(d.C)
      } else {
        var v = f.s[0]
        if (/^\d+$/.test(v)) {
          var w =
            'https://www.googletraveladservices.com/travel/clk/pagead/conversion/' +
            encodeURIComponent(v) +
            '/'
          if (b === J.ma) {
            var x = di(h(J.lb), h(J.Z), h(J.ia), h(J.R))
            x = encodeURIComponent(ei(x))
            w += '?data=' + x
          } else if (b === J.Ia) {
            var y = fi(v, h(J.Z), h(J.ae), h(J.ia), h(J.R))
            y = encodeURIComponent(ei(y))
            w +=
              '?label=FH&guid=ON&script=0&ord=' +
              wa(0, 4294967295) +
              ('&price=' + y)
          } else {
            H(d.B)
            return
          }
          var B = !0
          B ? e() : xf(e, J.o)
        } else H(d.B)
      }
    },
    di = function(a, b, c, d) {
      var e = {}
      hi(a) && (e.hct_booking_xref = a)
      g(c) && (e.hct_currency_code = c)
      hi(b) && ((e.hct_total_price = b), (e.hct_base_price = b))
      if (!ra(d) || 0 === d.length) return e
      var f = d[0]
      if (!Qa(f)) return e
      hi(f[ii.ya]) && (e.hct_partner_hotel_id = f[ii.ya])
      g(f[ii.na]) && (e.hct_checkin_date = f[ii.na])
      g(f[ii.Ya]) && (e.hct_checkout_date = f[ii.Ya])
      return e
    },
    fi = function(a, b, c, d, e) {
      function f(q) {
        void 0 === q && (q = 0)
        if (hi(q)) return l + q
      }
      function h(q, r, u) {
        u(r) && (k[q] = r)
      }
      var k = {}
      k.partner_id = a
      var l = 'USD'
      g(d) && (l = k.currency = d)
      hi(b) &&
        ((k.base_price_value_string = f(b)),
        (k.display_price_value_string = f(b)))
      hi(c) && (k.tax_price_value_string = f(c))
      g('LANDING_PAGE') && (k.page_type = 'LANDING_PAGE')
      if (!ra(e) || 0 == e.length) return k
      var m = e[0]
      if (!Qa(m)) return k
      hi(m[ii.Kd]) && (k.total_price_value_string = f(m[ii.Kd]))
      h('partner_hotel_id', m[ii.ya], hi)
      h('check_in_date', m[ii.na], g)
      h('check_out_date', m[ii.Ya], g)
      h('adults', m[ii.sf], ji)
      h(ii.Od, m[ii.Od], g)
      h(ii.Nd, m[ii.Nd], g)
      return k
    },
    ei = function(a) {
      var b = []
      za(a, function(c, d) {
        b.push(c + '=' + d)
      })
      return b.join(';')
    },
    hi = function(a) {
      return g(a) || ji(a)
    },
    ji = function(a) {
      return 'number' === typeof a
    },
    ii = {
      ya: 'id',
      Kd: 'price',
      na: 'start_date',
      Ya: 'end_date',
      sf: 'occupancy',
      Od: 'room_id',
      Nd: 'rate_rule_id'
    },
    ci = ['ha']
  var mi = function(a, b, c, d) {
      var e = Rd(a),
        f = !1 !== d.getWithConfig(J.Ka),
        h = d.getWithConfig(J.Ja) || d.getWithConfig(J.X),
        k = d.getWithConfig(J.fa)
      if (b === J.D) {
        if (f) {
          var l = function() {
              var r = { prefix: h, flags: k }
              ch(r)
              jh(['aw', 'dc'], r)
            },
            m = !0
          m ? l() : xf(l, J.o)
        }
        H(d.C)
      } else if (b === J.ma) {
        var q = ki(
          d.getWithConfig(J.Z),
          d.getWithConfig(J.ia),
          d.getWithConfig(J.ce),
          d.getWithConfig(J.R)
        )
        li(e.s[0], q, f, h, d.C, d.B)
      } else H(d.B)
    },
    ki = function(a, b, c, d) {
      var e = {}
      if (g(a) || 'number' === typeof a)
        (e.base_price_value_string = '' + b + a),
          (e.tax_price_value_string = b + '0')
      Qa(c) && 'number' === typeof c.adult && (e.adult_count = c.adult)
      if (!ra(d) || 0 === d.length) return e
      var f = d[0]
      if (!Qa(f)) return e
      if (g(f[ni.ya]) || 'number' === typeof f[ni.ya])
        e.partner_hotel_id = f[ni.ya]
      g(f[ni.na]) && (e.hotel_checkin_date = f[ni.na])
      var h = f[ni.Ya]
      g(h) && ((e.hotel_checkout_date = h), (e.return_date = h))
      if (1 === d.length) return e
      var k = d[1]
      if (!Qa(k)) return e
      e.origin_airport = k[ni.uf]
      e.departure_date = k[ni.na]
      for (
        var l = [k[ni.Ud]],
          m = [k[ni.wd]],
          q = [k[ni.Cd]],
          r = null !== h && g(h),
          u = 1,
          p = 2;
        p < d.length;
        p++
      ) {
        var t = d[p]
        Qa(t) &&
          (l.push(t[ni.Ud]),
          m.push(t[ni.wd]),
          q.push(t[ni.Cd]),
          r && t[ni.na] < h && (u = p))
      }
      r && (e.destination_airport = d[u][ni.Ze])
      e.cabins = l.join(',')
      e.booking_codes = m.join(',')
      e.flight_numbers = q.join(',')
      return e
    },
    li = function(a, b, c, d, e, f) {
      function h() {
        c &&
          (m += Kh('gp', d)
            .map(function(r) {
              return '&gclgp=' + encodeURIComponent(r)
            })
            .join(''))
        mc(m, e, f)
      }
      if (/^\d+$/.test(a)) {
        var k = encodeURIComponent(a),
          l = encodeURIComponent(oi(b)),
          m =
            'https://www.googletraveladservices.com/travel/vacations/clk/pagead/conversion/' +
            k +
            '/?data=' +
            l,
          q = !0
        q ? h() : xf(h, J.o)
      } else H(f)
    },
    oi = function(a) {
      var b = [],
        c
      for (c in a) a.hasOwnProperty(c) && b.push(c + '=' + a[c])
      return b.join(';')
    },
    ni = {
      ya: 'id',
      na: 'start_date',
      Ya: 'end_date',
      uf: 'origin',
      Ud: 'travel_class',
      wd: 'booking_code',
      Cd: 'flight_number',
      Ze: 'destination'
    }
  var yi = function(a, b, c, d) {
      var e = 'https://www.google-analytics.com/analytics.js',
        f = Ne()
      if (pa(f)) {
        var h = 'gtag_' + a.split('-').join('_'),
          k = function(x) {
            var y = [].slice.call(arguments, 0)
            y[0] = h + '.' + y[0]
            f.apply(window, y)
          },
          l = function() {
            var x = function(A, F) {
                for (var G = 0; F && G < F.length; G++) k(A, F[G])
              },
              y = pi(b, d)
            if (y) {
              var B = y.action
              if ('impressions' === B) x('ec:addImpression', y.Cg)
              else if ('promo_click' === B || 'promo_view' === B) {
                var z = y.ed
                x('ec:addPromo', y.ed)
                z && 0 < z.length && 'promo_click' === B && k('ec:setAction', B)
              } else x('ec:addProduct', y.Ra), k('ec:setAction', B, y.nb)
            }
          },
          m = function() {
            if (Ud()) {
            } else {
              var x = d.getWithConfig(J.qf)
              x &&
                (k('require', x, { dataLayer: 'dataLayer' }),
                k('require', 'render'))
            }
          },
          q = qi(a, h, b, d)
        ri(h, q.Oa) &&
          (f(function() {
            Le() && Le().remove(h)
          }),
          (si[h] = !1))
        f('create', a, q.Oa)
        ;(function() {
          var x = d.getWithConfig('custom_map')
          f(function() {
            if (Qa(x)) {
              var y = q.oa,
                B = Le().getByName(h),
                z
              for (z in x)
                if (
                  x.hasOwnProperty(z) &&
                  /^(dimension|metric)\d+$/.test(z) &&
                  void 0 != x[z]
                ) {
                  var A = B.get(ti(x[z]))
                  ui(y, z, A)
                }
            }
          })
        })()
        ;(function(x) {
          if (x) {
            var y = {}
            if (Qa(x))
              for (var B in vi) vi.hasOwnProperty(B) && wi(vi[B], B, x[B], y)
            k('require', 'linkid', y)
          }
        })(q.linkAttribution)
        var u = q[J.sa]
        if (u && u[J.H]) {
          var p = u[J.hb]
          Oe(
            h + '.',
            u[J.H],
            void 0 === p ? !!u.use_anchor : 'fragment' === p,
            !!u[J.gb]
          )
        }
        var t = function(x, y, B) {
          B && (y = '' + y)
          q.oa[x] = y
        }
        b === J.rd
          ? (m(), k('send', 'pageview', q.oa))
          : b === J.D
          ? (m(), fe(a, d), 0 != q.sendPageView && k('send', 'pageview', q.oa))
          : 'screen_view' === b
          ? k('send', 'screenview', q.oa)
          : 'timing_complete' === b
          ? (t('timingCategory', q.eventCategory, !0),
            t('timingVar', q.name, !0),
            t('timingValue', Aa(q.value)),
            void 0 !== q.eventLabel && t('timingLabel', q.eventLabel, !0),
            k('send', 'timing', q.oa))
          : 'exception' === b
          ? k('send', 'exception', q.oa)
          : 'optimize.callback' !== b &&
            (0 <=
              n(
                [
                  J.pd,
                  'select_content',
                  J.Ia,
                  J.Nb,
                  J.Ob,
                  J.eb,
                  'set_checkout_option',
                  J.ma,
                  J.Qb,
                  'view_promotion',
                  'checkout_progress'
                ],
                b
              ) && (k('require', 'ec', 'ec.js'), l()),
            t('eventCategory', q.eventCategory, !0),
            t('eventAction', q.eventAction || b, !0),
            void 0 !== q.eventLabel && t('eventLabel', q.eventLabel, !0),
            void 0 !== q.value && t('eventValue', Aa(q.value)),
            k('send', 'event', q.oa))
        if (!xi) {
          xi = !0
          Ge()
          var v = d.B,
            w = function() {
              Le().loaded || v()
            }
          Ud() ? H(w) : jc(e, w, v)
        }
      } else H(d.B)
    },
    xi,
    si = {},
    zi = {
      client_id: 1,
      client_storage: 'storage',
      cookie_name: 1,
      cookie_domain: 1,
      cookie_expires: 1,
      cookie_path: 1,
      cookie_update: 1,
      cookie_flags: 1,
      sample_rate: 1,
      site_speed_sample_rate: 1,
      use_amp_client_id: 1,
      store_gac: 1,
      conversion_linker: 'storeGac'
    },
    Ai = {
      anonymize_ip: 1,
      app_id: 1,
      app_installer_id: 1,
      app_name: 1,
      app_version: 1,
      campaign: {
        name: 'campaignName',
        source: 'campaignSource',
        medium: 'campaignMedium',
        term: 'campaignTerm',
        content: 'campaignContent',
        id: 'campaignId'
      },
      currency: 'currencyCode',
      description: 'exDescription',
      fatal: 'exFatal',
      language: 1,
      non_interaction: 1,
      page_hostname: 'hostname',
      page_referrer: 'referrer',
      page_path: 'page',
      page_location: 'location',
      page_title: 'title',
      screen_name: 1,
      transport_type: 'transport',
      user_id: 1
    },
    Bi = {
      content_id: 1,
      event_category: 1,
      event_action: 1,
      event_label: 1,
      link_attribution: 1,
      linker: 1,
      method: 1,
      name: 1,
      send_page_view: 1,
      value: 1
    },
    vi = { cookie_name: 1, cookie_expires: 'duration', levels: 1 },
    Ci = {
      anonymize_ip: 1,
      fatal: 1,
      non_interaction: 1,
      use_amp_client_id: 1,
      send_page_view: 1,
      store_gac: 1,
      conversion_linker: 1
    },
    wi = function(a, b, c, d) {
      if (void 0 !== c)
        if (
          (Ci[b] && (c = Ba(c)),
          'anonymize_ip' !== b || c || (c = void 0),
          1 === a)
        )
          d[ti(b)] = c
        else if (g(a)) d[a] = c
        else
          for (var e in a)
            a.hasOwnProperty(e) && void 0 !== c[e] && (d[a[e]] = c[e])
    },
    ti = function(a) {
      return a && g(a)
        ? a.replace(/(_[a-z])/g, function(b) {
            return b[1].toUpperCase()
          })
        : a
    },
    Di = function(a) {
      var b = 'general'
      0 <=
      n(
        [
          J.Fd,
          J.Nb,
          J.Gd,
          J.eb,
          'checkout_progress',
          J.ma,
          J.Qb,
          J.Ob,
          'set_checkout_option'
        ],
        a
      )
        ? (b = 'ecommerce')
        : 0 <=
          n(
            'generate_lead login search select_content share sign_up view_item view_item_list view_promotion view_search_results'.split(
              ' '
            ),
            a
          )
        ? (b = 'engagement')
        : 'exception' === a && (b = 'error')
      return b
    },
    ui = function(a, b, c) {
      a.hasOwnProperty(b) || (a[b] = c)
    },
    Ei = function(a) {
      if (ra(a)) {
        for (var b = [], c = 0; c < a.length; c++) {
          var d = a[c]
          if (void 0 != d) {
            var e = d.id,
              f = d.variant
            void 0 != e && void 0 != f && b.push(String(e) + '.' + String(f))
          }
        }
        return 0 < b.length ? b.join('!') : void 0
      }
    },
    qi = function(a, b, c, d) {
      var e = function(A) {
          return d.getWithConfig(A)
        },
        f = {},
        h = {},
        k = {},
        l = Ei(e(J.ff))
      l && ui(h, 'exp', l)
      var m = e('custom_map')
      if (Qa(m))
        for (var q in m)
          if (
            m.hasOwnProperty(q) &&
            /^(dimension|metric)\d+$/.test(q) &&
            void 0 != m[q]
          ) {
            var r = e(String(m[q]))
            void 0 !== r && ui(h, q, r)
          }
      for (var u = Rf(d), p = 0; p < u.length; ++p) {
        var t = u[p],
          v = e(t)
        if (Bi.hasOwnProperty(t)) wi(Bi[t], t, v, f)
        else if (Ai.hasOwnProperty(t)) wi(Ai[t], t, v, h)
        else if (zi.hasOwnProperty(t)) wi(zi[t], t, v, k)
        else if (/^(dimension|metric|content_group)\d+$/.test(t)) wi(1, t, v, h)
        else if ('developer_id' === t) {
        } else t === J.X && 0 > n(u, J.Wb) && (k.cookieName = v + '_ga')
      }
      ui(k, 'cookieDomain', 'auto')
      ui(h, 'forceSSL', !0)
      ui(f, 'eventCategory', Di(c))
      0 <=
        n(
          [
            'view_item',
            'view_item_list',
            'view_promotion',
            'view_search_results'
          ],
          c
        ) && ui(h, 'nonInteraction', !0)
      'login' === c || 'sign_up' === c || 'share' === c
        ? ui(f, 'eventLabel', e(J.lf))
        : 'search' === c || 'view_search_results' === c
        ? ui(f, 'eventLabel', e(J.yf))
        : 'select_content' === c && ui(f, 'eventLabel', e(J.Ve))
      var x = f[J.sa] || {},
        y = x[J.fb]
      y || (0 != y && x[J.H])
        ? (k.allowLinker = !0)
        : !1 === y && ui(k, 'useAmpClientId', !1)
      if (!1 === e(J.Eh) || !1 === e(J.aa) || !1 === e(J.Za))
        h.allowAdFeatures = !1
      !1 === e(J.aa) && I('GTM', 27)
      k.name = b
      h['&gtm'] = rh(!0)
      h.hitCallback = d.C
      var B = e(J.jf) || Fd('gtag.remote_config.' + a + '.url', 2),
        z = e(J.hf) || Fd('gtag.remote_config.' + a + '.dualId', 2)
      B && null != gc && (k._x_19 = B)
      z && (k._x_20 = z)
      f.oa = h
      f.Oa = k
      return f
    },
    pi = function(a, b) {
      function c(v) {
        var w = C(v)
        w.list = v.list_name
        w.listPosition = v.list_position
        w.position = v.list_position || v.creative_slot
        w.creative = v.creative_name
        return w
      }
      function d(v) {
        for (var w = [], x = 0; v && x < v.length; x++) v[x] && w.push(c(v[x]))
        return w.length ? w : void 0
      }
      function e(v) {
        return {
          id: f(J.lb),
          affiliation: f(J.af),
          revenue: f(J.Z),
          tax: f(J.ae),
          shipping: f(J.df),
          coupon: f(J.bf),
          list: f(J.sd) || v
        }
      }
      for (
        var f = function(v) {
            return b.getWithConfig(v)
          },
          h = f(J.R),
          k,
          l = 0;
        h && l < h.length && !(k = h[l][J.sd]);
        l++
      );
      var m = f('custom_map')
      if (Qa(m))
        for (var q = 0; h && q < h.length; ++q) {
          var r = h[q],
            u
          for (u in m)
            m.hasOwnProperty(u) &&
              /^(dimension|metric)\d+$/.test(u) &&
              void 0 != m[u] &&
              ui(r, u, r[m[u]])
        }
      var p = null,
        t = f(J.cf)
      a === J.ma || a === J.Qb
        ? (p = { action: a, nb: e(), Ra: d(h) })
        : a === J.Nb
        ? (p = { action: 'add', Ra: d(h) })
        : a === J.Ob
        ? (p = { action: 'remove', Ra: d(h) })
        : a === J.Ia
        ? (p = { action: 'detail', nb: e(k), Ra: d(h) })
        : a === J.pd
        ? (p = { action: 'impressions', Cg: d(h) })
        : 'view_promotion' === a
        ? (p = { action: 'promo_view', ed: d(t) })
        : 'select_content' === a && t && 0 < t.length
        ? (p = { action: 'promo_click', ed: d(t) })
        : 'select_content' === a
        ? (p = { action: 'click', nb: { list: f(J.sd) || k }, Ra: d(h) })
        : a === J.eb || 'checkout_progress' === a
        ? (p = {
            action: 'checkout',
            Ra: d(h),
            nb: { step: a === J.eb ? 1 : f(J.$d), option: f(J.Zd) }
          })
        : 'set_checkout_option' === a &&
          (p = {
            action: 'checkout_option',
            nb: { step: f(J.$d), option: f(J.Zd) }
          })
      p && (p.Oh = f(J.ia))
      return p
    },
    Fi = {},
    ri = function(a, b) {
      var c = Fi[a]
      Fi[a] = C(b)
      if (!c) return !1
      for (var d in b) if (b.hasOwnProperty(d) && b[d] !== c[d]) return !0
      for (var e in c) if (c.hasOwnProperty(e) && c[e] !== b[e]) return !0
      return !1
    }
  var Gi = {},
    Hi = ['G', 'GP']
  Gi.Ue = ''
  var Ii = Gi.Ue.split(',')
  function Ji() {
    var a = Qc
    return (a.gcq = a.gcq || new Ki())
  }
  var Li = function(a, b, c) {
      Ji().register(a, b, c)
    },
    Mi = function(a, b, c, d) {
      Ji().push('event', [b, a], c, d)
    },
    Ni = function(a, b) {
      Ji().push('config', [a], b)
    },
    Oi = {},
    Pi = function(a) {
      return !0
    },
    Qi = function() {
      this.status = 1
      this.containerConfig = {}
      this.targetConfig = {}
      this.i = {}
      this.m = null
      this.h = !1
    },
    Ri = function(a, b, c, d, e) {
      this.type = a
      this.m = b
      this.Y = c || ''
      this.h = d
      this.i = e
    },
    Ki = function() {
      this.i = {}
      this.m = {}
      this.h = []
    },
    Si = function(a, b) {
      var c = Rd(b)
      return (a.i[c.containerId] = a.i[c.containerId] || new Qi())
    },
    Ti = function(a, b) {
      if (b) {
        var c = Rd(b)
        if (c && 1 === Si(a, b).status && Pi(c.prefix)) {
          Si(a, b).status = 2
          var d = {}
          vd &&
            (d.timeoutId = D.setTimeout(function() {
              I('GTM', 38)
              gd()
            }, 3e3))
          a.push('require', [d], c.containerId)
          Oi[c.containerId] = Fa()
          if (Ud()) {
          } else {
            var f = encodeURIComponent(c.containerId),
              h =
                ('http:' != D.location.protocol ? 'https:' : 'http:') +
                '//www.googletagmanager.com'
            jc(h + '/gtag/js?id=' + f + '&l=dataLayer&cx=c')
          }
        }
      }
    },
    Ui = function(a, b, c, d) {
      if (d.Y) {
        var e = Si(a, d.Y),
          f = e.m
        if (f) {
          var h = C(c),
            k = C(e.targetConfig[d.Y]),
            l = C(e.containerConfig),
            m = C(e.i),
            q = C(a.m),
            r = Fd('gtm.uniqueEventId'),
            u = Rd(d.Y).prefix,
            p = Qf(
              Pf(Of(Nf(Mf(Lf(Kf(h), k), l), m), q), function() {
                zd(r, u, '2')
              }),
              function() {
                zd(r, u, '3')
              }
            )
          try {
            zd(r, u, '1')
            f(d.Y, b, d.m, p)
          } catch (t) {
            zd(r, u, '4')
          }
        }
      }
    }
  Ki.prototype.register = function(a, b, c) {
    if (3 !== Si(this, a).status) {
      Si(this, a).m = b
      Si(this, a).status = 3
      c && (Si(this, a).i = c)
      var d = Rd(a),
        e = Oi[d.containerId]
      if (void 0 !== e) {
        var f = Qc[d.containerId].bootstrap,
          h = d.prefix.toUpperCase()
        Qc[d.containerId]._spx && (h = h.toLowerCase())
        var k = Fd('gtm.uniqueEventId'),
          l = h,
          m = Fa() - f
        if (vd && !md[k]) {
          k !== id && (fd(), (id = k))
          var q = l + '.' + Math.floor(f - e) + '.' + Math.floor(m)
          rd = rd ? rd + ',' + q : '&cl=' + q
        }
        delete Oi[d.containerId]
      }
      this.flush()
    }
  }
  Ki.prototype.push = function(a, b, c, d) {
    var e = Math.floor(Fa() / 1e3)
    Ti(this, c)
    this.h.push(new Ri(a, e, c, b, d))
    d || this.flush()
  }
  Ki.prototype.flush = function(a) {
    for (var b = this; this.h.length; ) {
      var c = this.h[0]
      if (c.i) (c.i = !1), this.h.push(c)
      else
        switch (c.type) {
          case 'require':
            if (3 !== Si(this, c.Y).status && !a) return
            vd && D.clearTimeout(c.h[0].timeoutId)
            break
          case 'set':
            za(c.h[0], function(l, m) {
              C(La(l, m), b.m)
            })
            break
          case 'config':
            var d = c.h[0],
              e = !!d[J.bc]
            delete d[J.bc]
            var f = Si(this, c.Y),
              h = Rd(c.Y),
              k = h.containerId === h.id
            e || (k ? (f.containerConfig = {}) : (f.targetConfig[c.Y] = {}))
            ;(f.h && e) || Ui(this, J.D, d, c)
            f.h = !0
            delete d[J.ra]
            k ? C(d, f.containerConfig) : C(d, f.targetConfig[c.Y])
            break
          case 'event':
            Ui(this, c.h[1], c.h[0], c)
        }
      this.h.shift()
    }
  }
  var Vi = ['GP', 'G'],
    Wi = 'G'.split(/,/)
  Wi.push('GF')
  Wi.push('HA')
  var Xi = !1
  Xi = !0
  var Yi = null,
    Zi = {},
    $i = {},
    aj
  function bj(a, b) {
    var c = { event: a }
    b &&
      ((c.eventModel = C(b)),
      b[J.yc] && (c.eventCallback = b[J.yc]),
      b[J.Fb] && (c.eventTimeout = b[J.Fb]))
    return c
  }
  var cj = function() {
      Yi = Yi || !Qc.gtagRegistered
      Qc.gtagRegistered = !0
      return Yi
    },
    dj = function(a) {
      if (void 0 === $i[a.id]) {
        var b
        switch (a.prefix) {
          case 'UA':
            b = Df('gtagua', { trackingId: a.id })
            break
          case 'AW':
            b = Df('gtagaw', { conversionId: a })
            break
          case 'DC':
            b = Df('gtagfl', { targetId: a.id })
            break
          case 'GF':
            b = Df('gtaggf', { conversionId: a })
            break
          case 'HA':
            b = Df('gtagha', { conversionId: a })
            break
          case 'GP':
            b = Df('gtaggp', { conversionId: a.id })
            break
          default:
            return
        }
        if (!aj) {
          var c = zb('v', { name: 'send_to', dataLayerVersion: 2 })
          qb.push(c)
          aj = ['macro', qb.length - 1]
        }
        var d = { arg0: aj, arg1: a.id, ignore_case: !1 }
        d[Gb.va] = '_lc'
        sb.push(d)
        var e = { if: [sb.length - 1], add: [b] }
        e['if'] && (e.add || e.block) && rb.push(e)
        $i[a.id] = b
      }
    },
    ej = function(a) {
      za(Zi, function(b, c) {
        var d = n(c, a)
        0 <= d && c.splice(d, 1)
      })
    },
    fj = Ha(function() {}),
    gj = function(a) {
      if (a.containerId !== Pc.w && 'G' !== a.prefix) {
        var b
        switch (a.prefix) {
          case 'UA':
            b = 14
            break
          case 'AW':
            b = 15
            break
          case 'DC':
            b = 16
            break
          default:
            b = 17
        }
        I('GTM', b)
      }
    }
  var hj = {
    config: function(a) {
      var b = a[2] || {}
      if (2 > a.length || !g(a[1]) || !Qa(b)) return
      var c = Rd(a[1])
      if (!c) return
      ej(c.id)
      var d = c.id,
        e = b[J.wc] || 'default'
      e = e.toString().split(',')
      for (var f = 0; f < e.length; f++)
        (Zi[e[f]] = Zi[e[f]] || []), Zi[e[f]].push(d)
      delete b[J.wc]
      if (cj()) {
        ad()
        C(b)
        if ((Xi && -1 !== n(Wi, c.prefix)) || -1 !== n(Vi, c.prefix)) {
          'G' === c.prefix && (b[J.ra] = !0)
          Ni(b, c.id)
          return
        }
        dj(c)
        gj(c)
      } else fj()
      Jd('gtag.targets.' + c.id, void 0)
      Jd('gtag.targets.' + c.id, C(b))
      var h = {}
      h[J.wa] = c.id
      return bj(J.D, h)
    },
    event: function(a) {
      var b = a[1]
      if (g(b) && !(3 < a.length)) {
        var c
        if (2 < a.length) {
          if (!Qa(a[2]) && void 0 != a[2]) return
          c = a[2]
        }
        var d = bj(b, c)
        var e
        var f = c && c[J.wa]
        void 0 === f && ((f = Fd(J.wa, 2)), void 0 === f && (f = 'default'))
        if (g(f) || ra(f)) {
          for (
            var h = f
                .toString()
                .replace(/\s+/g, '')
                .split(','),
              k = [],
              l = 0;
            l < h.length;
            l++
          )
            0 <= h[l].indexOf('-')
              ? k.push(h[l])
              : (k = k.concat(Zi[h[l]] || []))
          e = Td(k)
        } else e = void 0
        var m = e
        if (!m) return
        ad()
        var q = cj()
        q || fj()
        for (var r = [], u = 0; q && u < m.length; u++) {
          var p = m[u]
          gj(p)
          if ((Xi && -1 !== n(Wi, p.prefix)) || -1 !== n(Vi, p.prefix)) {
            var t = C(c)
            'G' === p.prefix && (t[J.ra] = !0)
            Mi(b, t, p.id)
          } else dj(p)
          r.push(p.id)
        }
        d.eventModel = d.eventModel || {}
        0 < m.length
          ? (d.eventModel[J.wa] = r.join())
          : delete d.eventModel[J.wa]
        return d
      }
    },
    js: function(a) {
      if (2 == a.length && a[1].getTime)
        return { event: 'gtm.js', 'gtm.start': a[1].getTime() }
    },
    policy: function() {},
    set: function(a) {
      var b
      2 == a.length && Qa(a[1])
        ? (b = C(a[1]))
        : 3 == a.length &&
          g(a[1]) &&
          ((b = {}),
          Qa(a[2]) || ra(a[2]) ? (b[a[1]] = C(a[2])) : (b[a[1]] = a[2]))
      if (b) {
        if (cj()) {
          var c = C(b)
          Ji().push('set', [c])
          C(b)
        }
        b._clear = !0
        return b
      }
    }
  }
  var ij = { policy: !0 }
  var jj = function(a, b) {
      var c = a.hide
      if (c && void 0 !== c[b] && c.end) {
        c[b] = !1
        var d = !0,
          e
        for (e in c)
          if (c.hasOwnProperty(e) && !0 === c[e]) {
            d = !1
            break
          }
        d && (c.end(), (c.end = null))
      }
    },
    lj = function(a) {
      var b = kj(),
        c = b && b.hide
      c && c.end && (c[a] = !0)
    }
  var mj = !1,
    nj = []
  function oj() {
    if (!mj) {
      mj = !0
      for (var a = 0; a < nj.length; a++) H(nj[a])
    }
  }
  var pj = function(a) {
    mj ? H(a) : nj.push(a)
  }
  var Hj = function(a) {
    if (Gj(a)) return a
    this.h = a
  }
  Hj.prototype.yg = function() {
    return this.h
  }
  var Gj = function(a) {
    return !a || 'object' !== Oa(a) || Qa(a)
      ? !1
      : 'getUntrustedUpdateValue' in a
  }
  Hj.prototype.getUntrustedUpdateValue = Hj.prototype.yg
  var Ij = [],
    Jj = !1,
    Kj = function(a) {
      return D['dataLayer'].push(a)
    },
    Lj = function(a) {
      var b = Qc['dataLayer'],
        c = b ? b.subscribers : 1,
        d = 0
      return function() {
        ++d === c && a()
      }
    }
  function Mj(a) {
    var b = a._clear
    za(a, function(f, h) {
      '_clear' !== f && (b && Jd(f, void 0), Jd(f, h))
    })
    Vc || (Vc = a['gtm.start'])
    var c = a.event
    if (!c) return !1
    var d = a['gtm.uniqueEventId']
    d || ((d = ad()), (a['gtm.uniqueEventId'] = d), Jd('gtm.uniqueEventId', d))
    Xc = c
    var e = Nj(a)
    Xc = null
    switch (c) {
      case 'gtm.init':
        I('GTM', 19), e && I('GTM', 20)
    }
    return e
  }
  function Nj(a) {
    var b = a.event,
      c = a['gtm.uniqueEventId'],
      d,
      e = Qc.zones
    d = e ? e.checkState(Pc.w, c) : pe
    return d.active
      ? nf(c, b, d.isWhitelisted, a.eventCallback, a.eventTimeout)
        ? !0
        : !1
      : !1
  }
  function Oj() {
    for (var a = !1; !Jj && 0 < Ij.length; ) {
      Jj = !0
      delete Cd.eventModel
      Ed()
      var b = Ij.shift()
      if (null != b) {
        var c = Gj(b)
        if (c) {
          var d = b
          b = Gj(d) ? d.getUntrustedUpdateValue() : void 0
          for (
            var e = ['gtm.whitelist', 'gtm.blacklist', 'tagTypeBlacklist'],
              f = 0;
            f < e.length;
            f++
          ) {
            var h = e[f],
              k = Fd(h, 1)
            if (ra(k) || Qa(k)) k = C(k)
            Dd[h] = k
          }
        }
        try {
          if (pa(b))
            try {
              b.call(Gd)
            } catch (v) {}
          else if (ra(b)) {
            var l = b
            if (g(l[0])) {
              var m = l[0].split('.'),
                q = m.pop(),
                r = l.slice(1),
                u = Fd(m.join('.'), 2)
              if (void 0 !== u && null !== u)
                try {
                  u[q].apply(u, r)
                } catch (v) {}
            }
          } else {
            var p = b
            if (
              p &&
              ('[object Arguments]' == Object.prototype.toString.call(p) ||
                Object.prototype.hasOwnProperty.call(p, 'callee'))
            ) {
              a: {
                if (b.length && g(b[0])) {
                  var t = hj[b[0]]
                  if (t && (!c || !ij[b[0]])) {
                    b = t(b)
                    break a
                  }
                }
                b = void 0
              }
              if (!b) {
                Jj = !1
                continue
              }
            }
            a = Mj(b) || a
          }
        } finally {
          c && Ed(!0)
        }
      }
      Jj = !1
    }
    return !a
  }
  function Pj() {
    var a = Oj()
    try {
      jj(D['dataLayer'], Pc.w)
    } catch (b) {}
    return a
  }
  var Rj = function() {
      var a = hc('dataLayer', []),
        b = hc('google_tag_manager', {})
      b = b['dataLayer'] = b['dataLayer'] || {}
      xe(function() {
        b.gtmDom || ((b.gtmDom = !0), a.push({ event: 'gtm.dom' }))
      })
      pj(function() {
        b.gtmLoad || ((b.gtmLoad = !0), a.push({ event: 'gtm.load' }))
      })
      b.subscribers = (b.subscribers || 0) + 1
      var c = a.push
      a.push = function() {
        var d
        if (0 < Qc.SANDBOXED_JS_SEMAPHORE) {
          d = []
          for (var e = 0; e < arguments.length; e++) d[e] = new Hj(arguments[e])
        } else d = [].slice.call(arguments, 0)
        var f = c.apply(a, d)
        Ij.push.apply(Ij, d)
        if (300 < this.length)
          for (I('GTM', 4); 300 < this.length; ) this.shift()
        var h = 'boolean' !== typeof f || f
        return Oj() && h
      }
      Ij.push.apply(Ij, a.slice(0))
      Qj() && H(Pj)
    },
    Qj = function() {
      var a = !0
      return a
    }
  var Sj = {}
  Sj.Gb = new String('undefined')
  var Tj = function(a) {
    this.h = function(b) {
      for (var c = [], d = 0; d < a.length; d++)
        c.push(a[d] === Sj.Gb ? b : a[d])
      return c.join('')
    }
  }
  Tj.prototype.toString = function() {
    return this.h('undefined')
  }
  Tj.prototype.valueOf = Tj.prototype.toString
  Sj.Cf = Tj
  Sj.Gc = {}
  Sj.hg = function(a) {
    return new Tj(a)
  }
  var Uj = {}
  Sj.ih = function(a, b) {
    var c = ad()
    Uj[c] = [a, b]
    return c
  }
  Sj.je = function(a) {
    var b = a ? 0 : 1
    return function(c) {
      var d = Uj[c]
      if (d && 'function' === typeof d[b]) d[b]()
      Uj[c] = void 0
    }
  }
  Sj.Hg = function(a) {
    for (var b = !1, c = !1, d = 2; d < a.length; d++)
      (b = b || 8 === a[d]), (c = c || 16 === a[d])
    return b && c
  }
  Sj.Zg = function(a) {
    if (a === Sj.Gb) return a
    var b = ad()
    Sj.Gc[b] = a
    return 'google_tag_manager["' + Pc.w + '"].macro(' + b + ')'
  }
  Sj.Rg = function(a, b, c) {
    a instanceof Sj.Cf && ((a = a.h(Sj.ih(b, c))), (b = oa))
    return { Sc: a, C: b }
  }
  var Vj = function(a, b, c) {
      function d(f, h) {
        var k = f[h]
        return k
      }
      var e = {
        event: b,
        'gtm.element': a,
        'gtm.elementClasses': d(a, 'className'),
        'gtm.elementId': a['for'] || pc(a, 'id') || '',
        'gtm.elementTarget': a.formTarget || d(a, 'target') || ''
      }
      c && (e['gtm.triggers'] = c.join(','))
      e['gtm.elementUrl'] =
        (a.attributes && a.attributes.formaction ? a.formAction : '') ||
        a.action ||
        d(a, 'href') ||
        a.src ||
        a.code ||
        a.codebase ||
        ''
      return e
    },
    Wj = function(a) {
      Qc.hasOwnProperty('autoEventsSettings') || (Qc.autoEventsSettings = {})
      var b = Qc.autoEventsSettings
      b.hasOwnProperty(a) || (b[a] = {})
      return b[a]
    },
    Xj = function(a, b, c) {
      Wj(a)[b] = c
    },
    Yj = function(a, b, c, d) {
      var e = Wj(a),
        f = Ga(e, b, d)
      e[b] = c(f)
    },
    Zj = function(a, b, c) {
      var d = Wj(a)
      return Ga(d, b, c)
    }
  var ak = ['input', 'select', 'textarea'],
    bk = ['button', 'hidden', 'image', 'reset', 'submit'],
    ck = function(a) {
      var b = a.tagName.toLowerCase()
      return !sa(ak, function(c) {
        return c === b
      }) ||
        ('input' === b &&
          sa(bk, function(c) {
            return c === a.type.toLowerCase()
          }))
        ? !1
        : !0
    },
    dk = function(a) {
      return a.form
        ? a.form.tagName
          ? a.form
          : E.getElementById(a.form)
        : sc(a, ['form'], 100)
    },
    ek = function(a, b, c) {
      if (!a.elements) return 0
      for (
        var d = b.getAttribute(c), e = 0, f = 1;
        e < a.elements.length;
        e++
      ) {
        var h = a.elements[e]
        if (ck(h)) {
          if (h.getAttribute(c) === d) return f
          f++
        }
      }
      return 0
    }
  var fk = !!D.MutationObserver,
    gk = void 0,
    hk = function(a) {
      if (!gk) {
        var b = function() {
          var c = E.body
          if (c)
            if (fk)
              new MutationObserver(function() {
                for (var e = 0; e < gk.length; e++) H(gk[e])
              }).observe(c, { childList: !0, subtree: !0 })
            else {
              var d = !1
              nc(c, 'DOMNodeInserted', function() {
                d ||
                  ((d = !0),
                  H(function() {
                    d = !1
                    for (var e = 0; e < gk.length; e++) H(gk[e])
                  }))
              })
            }
        }
        gk = []
        E.body ? b() : H(b)
      }
      gk.push(a)
    }
  var Ck = D.clearTimeout,
    Dk = D.setTimeout,
    T = function(a, b, c) {
      if (Ud()) {
        b && H(b)
      } else return jc(a, b, c)
    },
    Ek = function() {
      return D.location.href
    },
    Fk = function(a) {
      return Xe(Ye(a), 'fragment')
    },
    Gk = function(a) {
      return We(Ye(a))
    },
    U = function(a, b) {
      return Fd(a, b || 2)
    },
    Hk = function(a, b, c) {
      var d
      b
        ? ((a.eventCallback = b), c && (a.eventTimeout = c), (d = Kj(a)))
        : (d = Kj(a))
      return d
    },
    Ik = function(a, b) {
      D[a] = b
    },
    V = function(a, b, c) {
      b && (void 0 === D[a] || (c && !D[a])) && (D[a] = b)
      return D[a]
    },
    Jk = function(a, b, c) {
      return Wf(a, b, void 0 === c ? !0 : !!c)
    },
    Kk = function(a, b) {
      if (Ud()) {
        b && H(b)
      } else lc(a, b)
    },
    Lk = function(a) {
      return !!Zj(a, 'init', !1)
    },
    Mk = function(a) {
      Xj(a, 'init', !0)
    },
    Nk = function(a, b) {
      var c = (void 0 === b ? 0 : b) ? 'www.googletagmanager.com/gtag/js' : Uc
      c += '?id=' + encodeURIComponent(a) + '&l=dataLayer'
      T(Q('https://', 'http://', c))
    },
    Ok = function(a, b) {
      var c = a[b]
      return c
    }
  var Pk = Sj.Rg
  var ll = new xa()
  function ml(a, b) {
    function c(h) {
      var k = Ye(h),
        l = Xe(k, 'protocol'),
        m = Xe(k, 'host', !0),
        q = Xe(k, 'port'),
        r = Xe(k, 'path')
          .toLowerCase()
          .replace(/\/$/, '')
      if (
        void 0 === l ||
        ('http' == l && '80' == q) ||
        ('https' == l && '443' == q)
      )
        (l = 'web'), (q = 'default')
      return [l, m, q, r]
    }
    for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
      if (d[f] !== e[f]) return !1
    return !0
  }
  function nl(a) {
    return ol(a) ? 1 : 0
  }
  function ol(a) {
    var b = a.arg0,
      c = a.arg1
    if (a.any_of && ra(c)) {
      for (var d = 0; d < c.length; d++)
        if (nl({ function: a['function'], arg0: b, arg1: c[d] })) return !0
      return !1
    }
    switch (a['function']) {
      case '_cn':
        return 0 <= String(b).indexOf(String(c))
      case '_css':
        var e
        a: {
          if (b) {
            var f = [
              'matches',
              'webkitMatchesSelector',
              'mozMatchesSelector',
              'msMatchesSelector',
              'oMatchesSelector'
            ]
            try {
              for (var h = 0; h < f.length; h++)
                if (b[f[h]]) {
                  e = b[f[h]](c)
                  break a
                }
            } catch (v) {}
          }
          e = !1
        }
        return e
      case '_ew':
        var k, l
        k = String(b)
        l = String(c)
        var m = k.length - l.length
        return 0 <= m && k.indexOf(l, m) == m
      case '_eq':
        return String(b) == String(c)
      case '_ge':
        return Number(b) >= Number(c)
      case '_gt':
        return Number(b) > Number(c)
      case '_lc':
        var q
        q = String(b).split(',')
        return 0 <= n(q, String(c))
      case '_le':
        return Number(b) <= Number(c)
      case '_lt':
        return Number(b) < Number(c)
      case '_re':
        var r
        var u = a.ignore_case ? 'i' : void 0
        try {
          var p = String(c) + u,
            t = ll.get(p)
          t || ((t = new RegExp(c, u)), ll.set(p, t))
          r = t.test(b)
        } catch (v) {
          r = !1
        }
        return r
      case '_sw':
        return 0 == String(b).indexOf(String(c))
      case '_um':
        return ml(b, c)
    }
    return !1
  }
  var pl = function(a, b) {
    var c = function() {}
    c.prototype = a.prototype
    var d = new c()
    a.apply(d, Array.prototype.slice.call(arguments, 1))
    return d
  }
  var ql = {},
    rl = encodeURI,
    W = encodeURIComponent,
    sl = mc
  var tl = function(a, b) {
    if (!a) return !1
    var c = Xe(Ye(a), 'host')
    if (!c) return !1
    for (var d = 0; b && d < b.length; d++) {
      var e = b[d] && b[d].toLowerCase()
      if (e) {
        var f = c.length - e.length
        0 < f && '.' != e.charAt(0) && (f--, (e = '.' + e))
        if (0 <= f && c.indexOf(e, f) == f) return !0
      }
    }
    return !1
  }
  var ul = function(a, b, c) {
    for (var d = {}, e = !1, f = 0; a && f < a.length; f++)
      a[f] &&
        a[f].hasOwnProperty(b) &&
        a[f].hasOwnProperty(c) &&
        ((d[a[f][b]] = a[f][c]), (e = !0))
    return e ? d : null
  }
  ql.Ig = function() {
    var a = !1
    return a
  }
  var Hm = function() {
    var a = (D.gaGlobal = D.gaGlobal || {})
    a.hid = a.hid || wa()
    return a.hid
  }
  var Sm = window,
    Tm = document,
    Um = function(a) {
      var b = Sm._gaUserPrefs
      if ((b && b.ioo && b.ioo()) || (a && !0 === Sm['ga-disable-' + a]))
        return !0
      try {
        var c = Sm.external
        if (c && c._gaUserPrefs && 'oo' == c._gaUserPrefs) return !0
      } catch (f) {}
      for (
        var d = Sf('AMP_TOKEN', String(Tm.cookie), !0), e = 0;
        e < d.length;
        e++
      )
        if ('$OPT_OUT' == d[e]) return !0
      return Tm.getElementById('__gaOptOutExtension') ? !0 : !1
    }
  var Xm = function(a) {
    za(a, function(c) {
      '_' === c.charAt(0) && delete a[c]
    })
    var b = a[J.ja] || {}
    za(b, function(c) {
      '_' === c.charAt(0) && delete b[c]
    })
  }
  var an = function(a, b, c) {
      Mi(b, c, a)
    },
    bn = function(a, b, c) {
      Mi(b, c, a, !0)
    },
    dn = function(a, b) {}
  function cn(a, b) {}
  var Z = { a: {} }

  ;(Z.a.gtagha = ['google']),
    (function() {
      ;(function(a) {
        Z.__gtagha = a
        Z.__gtagha.b = 'gtagha'
        Z.__gtagha.g = !0
        Z.__gtagha.priorityOverride = 0
      })(function(a) {
        var b = a.vtp_conversionId,
          c = Xc,
          d = U('eventModel')
        Li(b.id, gi)
        if (c === J.D) {
          var e = U('gtag.targets.' + b.id)
          Ni(e, b.id)
        } else Mi(c, d, b.id)
        H(a.vtp_gtmOnSuccess)
      })
    })()
  ;(Z.a.e = ['google']),
    (function() {
      ;(function(a) {
        Z.__e = a
        Z.__e.b = 'e'
        Z.__e.g = !0
        Z.__e.priorityOverride = 0
      })(function(a) {
        return String(Ld(a.vtp_gtmEventId, 'event'))
      })
    })()
  ;(Z.a.v = ['google']),
    (function() {
      ;(function(a) {
        Z.__v = a
        Z.__v.b = 'v'
        Z.__v.g = !0
        Z.__v.priorityOverride = 0
      })(function(a) {
        var b = a.vtp_name
        if (!b || !b.replace) return !1
        var c = U(b.replace(/\\\./g, '.'), a.vtp_dataLayerVersion || 1)
        return void 0 !== c ? c : a.vtp_defaultValue
      })
    })()
  ;(Z.a.rep = ['google']),
    (function() {
      ;(function(a) {
        Z.__rep = a
        Z.__rep.b = 'rep'
        Z.__rep.g = !0
        Z.__rep.priorityOverride = 0
      })(function(a) {
        var b
        switch (Rd(a.vtp_containerId).prefix) {
          case 'AW':
            b = Ah
            break
          case 'DC':
            b = Xh
            break
          case 'GF':
            b = bi
            break
          case 'GP':
            b = mi
            break
          case 'HA':
            b = gi
            break
          case 'UA':
            b = yi
            break
          default:
            H(a.vtp_gtmOnFailure)
            return
        }
        H(a.vtp_gtmOnSuccess)
        Li(a.vtp_containerId, b, a.vtp_remoteConfig || {})
      })
    })()
  ;(Z.a.cid = ['google']),
    (function() {
      ;(function(a) {
        Z.__cid = a
        Z.__cid.b = 'cid'
        Z.__cid.g = !0
        Z.__cid.priorityOverride = 0
      })(function() {
        return Pc.w
      })
    })()
  ;(Z.a.gtagaw = ['google']),
    (function() {
      ;(function(a) {
        Z.__gtagaw = a
        Z.__gtagaw.b = 'gtagaw'
        Z.__gtagaw.g = !0
        Z.__gtagaw.priorityOverride = 0
      })(function(a) {
        var b = a.vtp_conversionId,
          c = Xc
        Li(b.id, Ah)
        if (c === J.D) {
          var d = U('gtag.targets.' + b.id)
          Ni(d, b.id)
        } else {
          var e = U('eventModel')
          Mi(c, e, b.id)
        }
        H(a.vtp_gtmOnSuccess)
      })
    })()
  ;(Z.a.get = ['google']),
    (function() {
      ;(function(a) {
        Z.__get = a
        Z.__get.b = 'get'
        Z.__get.g = !0
        Z.__get.priorityOverride = 0
      })(function(a) {
        if (a.vtp_isAutoTag) {
          var b = String(a.vtp_trackingId),
            c = Xc || '',
            d = {}
          if (c === J.D) {
            var e = U('gtag.targets.' + b)
            C(e, d)
            d[J.ra] = !0
            Ni(d, b)
          } else {
            var f = U('eventModel')
            C(f, d)
            d[J.ra] = !0
            Mi(c, d, b)
          }
        } else {
          var h = a.vtp_settings
          ;(a.vtp_deferrable ? bn : an)(
            String(h.streamId),
            String(a.vtp_eventName),
            h.eventParameters || {}
          )
        }
        a.vtp_gtmOnSuccess()
      })
    })()
  ;(Z.a.gtagfl = []),
    (function() {
      ;(function(a) {
        Z.__gtagfl = a
        Z.__gtagfl.b = 'gtagfl'
        Z.__gtagfl.g = !0
        Z.__gtagfl.priorityOverride = 0
      })(function(a) {
        var b = a.vtp_targetId,
          c = Xc,
          d = U('eventModel')
        Li(b, Xh)
        if (c === J.D) {
          var e = U('gtag.targets.' + b)
          Ni(e, b)
        } else Mi(c, d, b)
        H(a.vtp_gtmOnSuccess)
      })
    })()
  ;(Z.a.gtaggf = ['google']),
    (function() {
      ;(function(a) {
        Z.__gtaggf = a
        Z.__gtaggf.b = 'gtaggf'
        Z.__gtaggf.g = !0
        Z.__gtaggf.priorityOverride = 0
      })(function(a) {
        var b = a.vtp_conversionId,
          c = Xc,
          d = U('eventModel')
        Li(b.id, bi)
        if (c === J.D) {
          var e = U('gtag.targets.' + b.id)
          Ni(e, b.id)
        } else Mi(c, d, b.id)
        H(a.vtp_gtmOnSuccess)
      })
    })()
  ;(Z.a.gtaggp = ['google']),
    (function() {
      ;(function(a) {
        Z.__gtaggp = a
        Z.__gtaggp.b = 'gtaggp'
        Z.__gtaggp.g = !0
        Z.__gtaggp.priorityOverride = 0
      })(function(a) {
        var b = a.vtp_conversionId,
          c = Xc,
          d = U('eventModel')
        Li(b, mi)
        if (c === J.D) {
          var e = U('gtag.targets.' + b)
          Ni(e, b)
        } else Mi(c, d, b)
        H(a.vtp_gtmOnSuccess)
      })
    })()
  ;(Z.a.gtagua = ['google']),
    (function() {
      ;(function(a) {
        Z.__gtagua = a
        Z.__gtagua.b = 'gtagua'
        Z.__gtagua.g = !0
        Z.__gtagua.priorityOverride = 0
      })(function(a) {
        var b = a.vtp_trackingId,
          c = Xc,
          d = U('eventModel')
        Li(b, yi)
        if (c === J.D) {
          var e = U('gtag.targets.' + b)
          Ni(e, b)
        } else Mi(c, d, b)
        H(a.vtp_gtmOnSuccess)
      })
    })()

  var en = {}
  ;(en.macro = function(a) {
    if (Sj.Gc.hasOwnProperty(a)) return Sj.Gc[a]
  }),
    (en.onHtmlSuccess = Sj.je(!0)),
    (en.onHtmlFailure = Sj.je(!1))
  en.dataLayer = Gd
  en.callback = function(a) {
    Zc.hasOwnProperty(a) && pa(Zc[a]) && Zc[a]()
    delete Zc[a]
  }
  function fn() {
    Qc[Pc.w] = en
    Ia($c, Z.a)
    xb = xb || Sj
    yb = oe
  }
  function gn() {
    Tf.gtm_3pds = !0
    Qc = D.google_tag_manager = D.google_tag_manager || {}
    if (Qc[Pc.w]) {
      var a = Qc.zones
      a && a.unregisterChild(Pc.w)
    } else {
      for (
        var b = data.resource || {}, c = b.macros || [], d = 0;
        d < c.length;
        d++
      )
        qb.push(c[d])
      for (var e = b.tags || [], f = 0; f < e.length; f++) tb.push(e[f])
      for (var h = b.predicates || [], k = 0; k < h.length; k++) sb.push(h[k])
      for (var l = b.rules || [], m = 0; m < l.length; m++) {
        for (var q = l[m], r = {}, u = 0; u < q.length; u++)
          r[q[u][0]] = Array.prototype.slice.call(q[u], 1)
        rb.push(r)
      }
      vb = Z
      wb = nl
      fn()
      Rj()
      se = !1
      te = 0
      if (
        ('interactive' == E.readyState && !E.createEventObject) ||
        'complete' == E.readyState
      )
        ve()
      else {
        nc(E, 'DOMContentLoaded', ve)
        nc(E, 'readystatechange', ve)
        if (E.createEventObject && E.documentElement.doScroll) {
          var p = !0
          try {
            p = !D.frameElement
          } catch (x) {}
          p && we()
        }
        nc(D, 'load', ve)
      }
      mj = !1
      'complete' === E.readyState ? oj() : nc(D, 'load', oj)
      a: {
        if (!vd) break a
        D.setInterval(wd, 864e5)
      }
      Wc = new Date().getTime()
      en.bootstrap = Wc
    }
  }
  gn()
})()
