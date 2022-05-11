//******* @author: CareCart App-Wheelify - Rehan Azaz *******************************************
//****** Store Frontend JS - carecartSpinnerApp.js GH v.6.0.0 - Build ver 2.0.29 *******************
//****** Updated at: 18-Feb-2022, 11:52 AM  ********************************************************

(function () {
    var d = new Date();
    //var version = d.getSeconds();

    var API_URL = 'https://serious-newt-67.telebit.io/';

    var CDN_WHEELIFY_URL = 'https://cdn.jsdelivr.net/gh/carecartapp/app-wheelify@2.0.29/';

    var dataSpin = false;

    var campaignId = null;          // Ab Test Module
    var abTestId = null;            // Ab Test Module
    var abTestVariationId = null;   // Ab Test Module
    var isPhoneNumberMandatory = 0;

    function scriptInjection(src, callback) {
        var script = document.createElement('script');
        script.type = "text/javascript";

        script.src = src;
        if (typeof callback == 'function') {
            script.addEventListener('load', callback);
        }

        document.getElementsByTagName('head')[0].appendChild(script);
    }

    window.displaySpinnerOnTigger = function displaySpinnerOnTigger() {
        carecartSpinnerJquery("#wheelify-spin-trigger-cc").click();
    }

    function cssFileInjection(href) {
        var link = document.createElement("link");
        link.href = href;
        link.type = "text/css";
        link.rel = "stylesheet";
        document.getElementsByTagName("head")[0].appendChild(link);
    }

    function getParameterByName(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }
    
    cssFileInjection(API_URL + "public/phone/css/intlTelInput.css?v=" + new Date().toLocaleTimeString());               // Dev and UAT URL
    cssFileInjection(API_URL + "public/phone/css/phoneStyle.css?v=" + new Date().toLocaleTimeString());                 // Dev and UAT URL
    //cssFileInjection(API_URL +"public/phone/js/intlTelInput.js?v=" + new Date().toLocaleTimeString());                 // Dev and UAT URL

    cssFileInjection(API_URL + "public/app/css/front-store-spinner-min.css?v=" + new Date().toLocaleTimeString());      // Dev and UAT URL
    //cssFileInjection(CDN_WHEELIFY_URL +"front-store-spinner-min.css");                                               // Production URL
    //cssFileInjection(API_URL +"public/app/css/front-store-spinner.css?v=time()");

    scriptInjection("https://code.jquery.com/jquery-3.2.1.min.js", function () {

        window.carecartSpinnerJquery = jQuery.noConflict(true);
        setTimeout(function () {
            scriptInjection(CDN_WHEELIFY_URL + "spinner.min.js", function () {

                if (window.localStorage.getItem('cc-sas-spinner-user-ip-address') === null) {
                    var ccCareCartSpinnerUserIPAddress = null;
                    carecartSpinnerJquery.getJSON("https://api.ipify.org/?format=json", function (e) {
                        ccCareCartSpinnerUserIPAddress = e.ip;
                        //console.log('User IP Address Mate: ' + ccCareCartSpinnerUserIPAddress);
                        window.localStorage.setItem('cc-sas-spinner-user-ip-address', ccCareCartSpinnerUserIPAddress);
                        //console.log('User IP Address Updated: ' + window.localStorage.getItem('cc-sas-spinner-user-ip-address'));
                    });
                }
                else {
                    //console.log('User IP Address Already Exists: ' + window.localStorage.getItem('cc-sas-spinner-user-ip-address'));
                }


                if (window.localStorage.getItem('cc-sas-spinner-cookies-data') === null) {
                    var ccCareCartSpinnerUserCookieInfo = document.cookie;

                    //console.log('ccCareCartSpinnerUserCookieInfo: ' + ccCareCartSpinnerUserCookieInfo);

                    var firstBracket = ccCareCartSpinnerUserCookieInfo.indexOf(';');
                    var secondBracket = ccCareCartSpinnerUserCookieInfo.indexOf(';', firstBracket + 1);
                    ccCareCartSpinnerUserCookieInfo = ccCareCartSpinnerUserCookieInfo.substring(0, secondBracket);
                    ccCareCartSpinnerUserCookieInfo = ccCareCartSpinnerUserCookieInfo.split(';')[1];
                    ccCareCartSpinnerUserCookieInfo = carecartSpinnerJquery.trim(ccCareCartSpinnerUserCookieInfo);
                    window.localStorage.setItem('cc-sas-spinner-cookies-data', 'cc-sas-spinner-coo-' + ccCareCartSpinnerUserCookieInfo);
                    //console.log('ccCareCartSpinner Data Updated: ' + window.localStorage.getItem('cc-sas-spinner-cookies-data'));
                }
                else {
                    //console.log('ccCareCartSpinner Data Already Exists: ' + window.localStorage.getItem('cc-sas-spinner-cookies-data'));
                }

                function Spin2WinWheel() {
                    var t, e, n, r, i, o, a, l, s, u, h, c, d, g, p, f, S, m, b, w, T, y, x, N, v, A, M, C, E, k, I, P,
                        O,
                        R, B, W, D, G, z, L, V, _, F, H, U = "http://www.w3.org/2000/svg",
                        Y = "http://www.w3.org/1999/xlink",
                        q = function (t) {
                            return document.querySelector(t)
                        },
                        J = this,
                        X = q(".wheelify-wheelSVG"),
                        j = q(".wheel"),
                        K = q(".wheelOutline"),
                        Q = q(".wheelify-wheelContainer"),
                        Z = q(".peg"),
                        $ = q(".pegContainer"),
                        tt = q(".mainContainer"),
                        et = q(".valueContainer"),
                        nt = q(".centerCircle"),
                        rt = q(".toast"),
                        it = q(".toast p"),
                        ot = 0,
                        at = 0,
                        lt = 2,
                        st = 0,
                        ut = 0,
                        ht = ut,
                        ct = [],
                        dt = null,
                        gt = [],
                        pt = !0,
                        ft = null,
                        St = !1,
                        mt = function () {
                            r = t.wheelStrokeColor, o = t.wheelSize, a = o / 2, l = t.wheelTextColor, r = t.wheelStrokeColor, i = t.wheelStrokeWidth, s = t.wheelTextOffsetY, u = t.wheelImageOffsetY, c = t.wheelImageSize, h = t.wheelTextSize, p = t.centerCircleStrokeColor, f = t.centerCircleStrokeWidth, S = t.centerCircleFillColor, m = t.centerCircleSize, b = m / 2, w = t.segmentStrokeColor, T = t.segmentStrokeWidth, y = t.segmentValuesArray, x = y.length, N = -1 == t.numSpins ? 1e16 : parseInt(t.numSpins), I = t.minSpinDuration, P = t.gameOverText, O = t.invalidSpinText, R = t.introText, W = t.hasSound, B = t.gameId, G = t.clickToSpin, A = (v = 360 / x) / 2, C = t.centerX, E = t.centerY, k = t.colorArray, D = t.hasShadows, F = t.spinDestinationArray, D && (K.setAttributeNS(null, "filter", "url(#shadow)"), et.setAttributeNS(null, "filter", "url(#shadow)"), nt.setAttributeNS(null, "filter", "url(#shadow)"), $.setAttributeNS(null, "filter", "url(#shadow)"), rt.style.boxShadow = "0px 0px 20px rgba(21,21,21,0.5)")
                        },
                        bt = function () {
                            TweenMax.set("#wheelify-spin_a_sale_cc_store_front_module svg", {
                                visibility: "visible"
                            }), TweenMax.set(j, {
                                svgOrigin: C + " " + E,
                                x: 0,
                                y: 0
                            }), TweenMax.set(Z, {
                                x: C - Z.getBBox().width / 2,
                                y: E - a - Z.getBBox().height / 2,
                                transformOrigin: "50% 25%",
                                visibility: "visible"
                            }), TweenMax.set($, {
                                transformOrigin: "50% 100%",
                                scale: o / 600
                            }), TweenMax.set(tt, {
                                svgOrigin: C + " " + E,
                                rotation: -90,
                                x: 0,
                                y: 0
                            }), TweenMax.set([rt], {
                                xPercent: -50,
                                left: "50%"
                            }), TweenMax.set("#wheelify-spin_a_sale_cc_store_front_module svg", {
                                xPercent: -50,
                                left: "50%"
                            })
                        },
                        wt = function () {
                            if (0 != N) {
                                if (!St) {
                                    if (F.length > 0) {
                                        pt = !1, N = F.length;
                                        for (var t = 0; t < F.length; t++) {
                                            if (F[t] > x || 0 === F[t]) return showInitError("Invalid destination set - please ensure the destination in spinDestinationArray is greater than 0 and less than or equal to the number of segments"), void (rt.style.backgroundColor = "red");
                                            F[t] = F[t] - 1, F[t] = -1 * F[t] * v - 1080 * lt, lt += 2
                                        }
                                    }
                                    G ? createClickToSpin() : Dt(), showIntroText()
                                }
                            } else showInitError("numSpins MUST BE GREATER THAN 0")
                        },
                        Tt = function (t, e) {
                            return Math.floor(Math.random() * (e - t + 1) + t)
                        },
                        yt = function () {
                            for (var t, e, n, r, i, o, l, s, u = 0; u < x; u++) ht = (ut = -A) + v, t = C + a * Math.cos(Math.PI * ut / 180), n = E + a * Math.sin(Math.PI * ut / 180), e = C + a * Math.cos(Math.PI * ht / 180), r = E + a * Math.sin(Math.PI * ht / 180), i = "M" + C + "," + E + "  L" + t + "," + n + "  A" + a + "," + a + " 0 0,1 " + e + "," + r + "z", l = document.createElementNS(U, "g"), o = document.createElementNS(U, "path"), l.appendChild(o), j.appendChild(l), TweenMax.set(o, {
                                rotation: u * v,
                                svgOrigin: C + " " + E
                            }), o.setAttributeNS(null, "d", i), k[u] ? s = k[u] : (s = k[st], ++st == k.length && (st = 0)), o.setAttributeNS(null, "fill", s), o.setAttributeNS(null, "stroke", 0), ct.push({
                                path: o,
                                x1: t,
                                x2: e,
                                y1: n,
                                y2: r
                            });
                            T > 0 && xt(), Nt()
                        },
                        xt = function () {
                            for (var t = 0; t < x; t++) {
                                var e = document.createElementNS(U, "line");
                                e.setAttributeNS(null, "x1", C), e.setAttributeNS(null, "x2", ct[t].x2), e.setAttributeNS(null, "y1", E), e.setAttributeNS(null, "y2", ct[t].y2), e.setAttributeNS(null, "stroke", w), e.setAttributeNS(null, "stroke-width", T), j.appendChild(e), TweenMax.set(e, {
                                    svgOrigin: C + " " + E,
                                    rotation: t * v
                                })
                            }
                        },
                        Nt = function () {
                            var t = document.createElementNS(U, "g"),
                                e = document.createElementNS(U, "image");
                            t.appendChild(e), e.setAttribute("class", "wheelLogo"), e.setAttributeNS(null, "x", C - 60), e.setAttributeNS(null, "y", E - 60), e.setAttributeNS(Y, "xlink:href", CDN_WHEELIFY_URL + "cc_spinner_app_icon.png"), e.setAttributeNS(null, "width", 120), e.setAttributeNS(null, "height", 120), et.appendChild(t);
                            for (var n = 0; n < x; n++) {
                                var r = document.createElementNS(U, "g");
                                if ("image" == y[n].type) {
                                    e = document.createElementNS(U, "image");
                                    r.appendChild(e), e.setAttribute("class", "wheelImage"), e.setAttributeNS(null, "x", C - c / 2), e.setAttributeNS(null, "y", E - a + u), e.setAttributeNS(null, "width", c), e.setAttributeNS(null, "height", c), e.setAttributeNS(Y, "xlink:href", y[n].value)
                                } else if ("string" == y[n].type) {
                                    var i, o, d = document.createElementNS(U, "text");
                                    y[n].value.split("^").forEach(function (t, e) {
                                        i = document.createTextNode(t), (o = document.createElementNS(U, "tspan")).setAttributeNS(null, "dy", e ? "1.2em" : 0), o.setAttributeNS(null, "x", C), o.setAttributeNS(null, "text-anchor", "middle"), o.appendChild(i), d.appendChild(o)
                                    }), r.appendChild(d), d.setAttribute("class", "wheelText"), d.setAttributeNS(null, "fill", l), d.setAttributeNS(null, "x", C), d.setAttributeNS(null, "y", E - a + s), d.setAttributeNS(null, "transform", "rotate(-90, 590, -2)"), d.setAttributeNS(null, "text-anchor", "middle"), d.style.fontSize = h
                                }
                                et.appendChild(r), TweenMax.set(r, {
                                    svgOrigin: C + " " + E,
                                    rotation: n * v
                                })
                            }
                            TweenMax.set(et, {
                                svgOrigin: C + " " + E
                            })
                        },
                        vt = function () {
                            var t = document.createElementNS(U, "g"),
                                e = document.createElementNS(U, "circle");
                            return K.appendChild(t), e.setAttributeNS(null, "fill", "transparent"), e.setAttributeNS(null, "stroke", r), e.setAttributeNS(null, "stroke-width", i), e.setAttributeNS(null, "cx", C), e.setAttributeNS(null, "cy", E), e.setAttributeNS(null, "r", a), t.appendChild(e), t
                        },
                        At = function () {
                            var t = document.createElementNS(U, "circle");
                            return t.setAttributeNS(null, "fill", S), t.setAttributeNS(null, "stroke", p), t.setAttributeNS(null, "stroke-width", f), t.setAttributeNS(null, "cx", C), t.setAttributeNS(null, "cy", E), t.setAttributeNS(null, "r", b), t
                        },
                        Mt = function () {
                            null.play()
                        },
                        Ct = function () {
                            rt.style.visibility = "hidden"
                        },
                        Et = function () {
                            rt.style.visibility = "hidden", dt.onclick = null, lt += 2
                        },
                        kt = function () {
                            disableWheel(), pt && (_ = VelocityTracker.track(j, "rotation"))
                        },
                        It = function (t) {
                            if (M = ot, (ot = Math.round(j._gsTransform.rotation / v)) != M) {
                                var e = ot > M ? -35 : 35;
                                TweenMax.fromTo(Z, .2, {
                                    rotation: e
                                }, {
                                    onStart: W ? Mt : null,
                                    rotation: 0,
                                    ease: Back.easeOut
                                })
                            }
                            TweenMax.set(et, {
                                rotation: j._gsTransform.rotation
                            })
                        },
                        Pt = function () {
                            g = j._gsTransform.rotation;
                            var t = Math.round(g % 360);
                            if (t = t > 0 ? 360 - t : t, t = t < 0 ? t *= -1 : t, _ && _.getVelocity("rotation") <= .5) return enableWheel(), void showResult("invalidSpin");
                            var e = Math.round(t / v);
                            ct[e].path;
                            if (showResult(Math.abs(e)), pt) {
                                if (!(N > -1)) return;
                                at++
                            } else at++, d[0].vars.snap = [F[at]];
                            VelocityTracker.untrack(j), at >= N ? endGame() : enableWheel()
                        },
                        Ot = function () {
                            G || d[0].applyBounds({
                                minRotation: -1e16,
                                maxRotation: g
                            })
                        },
                        Rt = function (t) {
                            return function (e) {
                                return Math.round(e / v) * v - t
                            }
                        },
                        Bt = function () {
                            return -v * Tt(0, x) - 1080 * lt
                        },
                        Wt = function () {
                            var t = Math.floor(Math.random() * ft.length),
                                e = ft[t];
                            return -v * e - 1080 * lt
                        },
                        Dt = function () {
                            d = Draggable.create(j, {
                                type: "rotation",
                                bounds: {
                                    minRotation: -1e16,
                                    maxRotation: 0
                                },
                                throwProps: !0,
                                ease: Back.easeOut.config(.2),
                                snap: pt ? Rt(0) : [F[at]],
                                throwResistance: 0,
                                minDuration: I,
                                onThrowComplete: Pt,
                                onPress: Ct,
                                onDrag: It,
                                onThrowUpdate: It,
                                overshootTolerance: 1,
                                onDragEnd: kt
                            })
                        },
                        Gt = function () {
                            St = !0, y.forEach(function (t, e) {
                                isNaN(t.probability) && (St = !1)
                            }), St && (F = [], N = -1 == t.numSpins ? 1e16 : parseInt(t.numSpins), zt())
                        },
                        zt = function () {
                            var t = 0;
                            y.forEach(function (e, n) {
                                t += e.probability
                            }), H = t, Math.ceil(t) == H || Math.floor(t) == H ? createProbabilityArray() : 1 == confirm("Total probability: " + t + " - If you have set JSON probability values they must add up to 100") && (TweenMax.set(Q, {
                                autoAlpha: 0
                            }), TweenMax.set(Q, {
                                autoAlpha: 0
                            }))
                        };
                    createProbabilityArray = function () {
                        ft = [], y.forEach(function (t, e) {
                            for (var n = 0; n < t.probability; n++) ft.push(e)
                        })
                    }, showProbabilityError = function () {
                    }, createClickToSpin = function () {
                        Gt() && createProbabilityArray(), dt ? dt.onclick = getTrigger() : (dt = j, j.onclick = getTrigger())
                    }, getTrigger = function () {
                        return function () {
                            if (St) ThrowPropsPlugin.to(j, {
                                throwProps: {
                                    rotation: {
                                        velocity: Tt(-700, -500),
                                        end: Wt()
                                    }
                                },
                                onStart: Et,
                                onUpdate: It,
                                ease: Back.easeOut.config(.2),
                                overshootTolerance: 0,
                                onComplete: spinComplete
                            });
                            else {
                                ThrowPropsPlugin.to(j, {
                                    throwProps: {
                                        rotation: {
                                            velocity: Tt(-700, -500),
                                            end: pt ? Bt() : [F[at]]
                                        }
                                    },
                                    onStart: Et,
                                    onUpdate: It,
                                    ease: Back.easeOut.config(.2),
                                    overshootTolerance: 0,
                                    onComplete: spinComplete
                                })
                            }
                        }
                    }, spinComplete = function () {
                        g = j._gsTransform.rotation;
                        var t = Math.round(g % 360);
                        t = (t = t > 0 ? 360 - t : t) < 0 ? t *= -1 : t;
                        var e = Math.round(t / v);
                        ct[e].path;
                        if (showResult(Math.abs(e)), pt) {
                            if (!(N > -1)) return;
                            at++
                        } else at++;
                        at >= N ? endGame() : dt.onclick = getTrigger()
                    }, endGame = function () {
                        disableWheel(), TweenMax.set(X, {
                            alpha: .3
                        }), TweenMax.to(it, 1, {
                            text: P,
                            ease: Linear.easeNone,
                            delay: 2
                        }), L({
                            gameId: B,
                            target: J,
                            results: gt
                        })
                    }, disableWheel = function () {
                        G || d[0].disable()
                    }, enableWheel = function () {
                        G || d[0].enable()
                    }, showResult = function (t) {
                        Ot();
                        var e;
                        if ("invalidSpin" == t) return TweenMax.set(j, {
                            rotation: F[at]
                        }), showToast(O), e = {
                            target: J,
                            type: "error",
                            spinCount: at,
                            win: null,
                            msg: O,
                            gameId: B
                        }, V(e), void gt.push(e);
                        if (!isNaN(t)) {
                            var n = y[t].resultText;
                            showToast(n), e = {
                                target: J,
                                type: "result",
                                spinCount: at,
                                win: y[t].win,
                                msg: y[t].resultText,
                                gameId: B,
                                userData: y[t].userData
                            }, z(e), gt.push(e)
                        }
                    }, showIntroText = function (t) {
                        showToast(R)
                    }, showInitError = function (t) {
                        TweenMax.set([X, Z], {
                            visibility: "hidden"
                        }), alert(t)
                    }, showToast = function (t) {
                        rt.style.visibility = "visible", rt.style.backgroundColor = "#E81D62", it.innerHTML = t, TweenMax.fromTo(rt, .6, {
                            y: 20,
                            alpha: 0
                        }, {
                            y: 0,
                            alpha: 1,
                            delay: .2,
                            onStart: onresize,
                            ease: Elastic.easeOut.config(.7, .7)
                        })
                    }, checkNumSegments = function () {
                        x <= 1 && (showInitError("Not enough segments. Please add more entries to segmentValuesArray"), TweenMax.set(X, {
                            visibility: "hidden"
                        }), rt.style.backgroundColor = "red")
                    }, setSpinTrigger = function () {
                        dt && (G = !0), G && (dt ? dt.onclick = getTrigger() : j.onclick = getTrigger())
                    }, z = function (t) {
                        J.onResult(t)
                    }, V = function (t) {
                        J.onError(t)
                    }, L = function (t) {
                        J.onGameEnd(t)
                    }, this.onResult = z, this.onError = V, this.onGameEnd = L, this.getGameProgress = function () {
                        return gt
                    }, this.init = function (r) {
                        if (!r) return bt(), void showInitError("PLEASE INCLUDE THE INIT OBJECT");
                        e = r.data.svgWidth, n = r.data.svgHeight, X.setAttribute("viewBox", "0 0 " + e + " " + r.data.svgHeight), t = r.data, L = r.onGameEnd ? r.onGameEnd : function () {
                        }, z = r.onResult ? r.onResult : function () {
                        }, V = r.onError ? r.onError : function () {
                        }, dt = r.spinTrigger ? r.spinTrigger : null, setSpinTrigger(), mt(), bt(), yt(), K.appendChild(vt()), nt.appendChild(At()), wt(), checkNumSegments()
                    }, window.onresize = function () {
                        var t = E - n / 2,
                            e = (parseFloat(getComputedStyle(X).width), parseFloat(getComputedStyle(X).height)),
                            r = (parseFloat(getComputedStyle(rt).width), parseFloat(getComputedStyle(rt).height));
                        TweenMax.set(".toast", {
                            y: (e + t) / 2 - r / 2
                        })
                    }, this.restart = function () {
                        G || (d[0].kill(), ot = M = null, TweenMax.to([j, et], .3, {
                            rotation: "0_short",
                            onComplete: Dt
                        })), TweenMax.set(X, {
                            alpha: 1
                        }), TweenMax.to([j, et], .3, {
                            rotation: "0_short"
                        }), rt.style.visibility = "hidden", at = 0, lt = 2, gt = [], showIntroText()
                    }
                }

                function myGameEnd(i) {
                    var t = carecartSpinnerJquery(".wheelify-winContainer"),
                        l = carecartSpinnerJquery(".wheelify-loseContainer"),
                        e = carecartSpinnerJquery(".wheelify-signupContainer"),
                        n = carecartSpinnerJquery(".win_text"),
                        a = carecartSpinnerJquery(".coupon");

                    postSubscribersInformation(i.results[0].userData.coupon, i.results[0].msg)
                    window.localStorage.setItem('cc-sas-spinner-cached-coupon-code', i.results[0].userData.coupon);
                    window.localStorage.setItem('cc-sas-spinner-cached-coupon-code-message', i.results[0].msg);
                    if (i.results[0].userData.coupon) {
                        e.fadeOut(), n.text(i.results[0].msg), a.text(i.results[0].userData.coupon), t.find("input").val(i.results[0].userData.coupon), t.css({
                            paddingTop: (carecartSpinnerJquery(window).height() - t.height()) / 2
                        }),
                            carecartSpinnerJquery(window).resize(function () {
                                t.css({
                                    // paddingTop: (carecartSpinnerJquery(window).height() - t.height()) / 2
                                })
                            }),
                            t.fadeIn()
                    } else {
                        e.fadeOut(), n.text(i.results[0].msg), t.css({
                            paddingTop: (carecartSpinnerJquery(window).height() - t.height()) / 2
                        }),
                            carecartSpinnerJquery(window).resize(function () {
                                t.css({
                                    // paddingTop: (carecartSpinnerJquery(window).height() - t.height()) / 2
                                })
                            }),
                            l.fadeIn()
                    }

                }

                function myGameEndTest(i) {
                    var t = carecartSpinnerJquery(".wheelify-winContainer"),
                        l = carecartSpinnerJquery(".wheelify-loseContainer"),
                        e = carecartSpinnerJquery(".wheelify-signupContainer"),
                        n = carecartSpinnerJquery(".win_text"),
                        a = carecartSpinnerJquery(".coupon");

                    if (i.results[0].userData.coupon) {
                        e.fadeOut(), n.text(i.results[0].msg), a.text(i.results[0].userData.coupon), t.find("input").val(i.results[0].userData.coupon), t.css({
                            paddingTop: (carecartSpinnerJquery(window).height() - t.height()) / 2
                        }),
                            carecartSpinnerJquery(window).resize(function () {
                                t.css({
                                    // paddingTop: (carecartSpinnerJquery(window).height() - t.height()) / 2
                                })
                            }),
                            t.fadeIn()
                    } else {
                        e.fadeOut(), n.text(i.results[0].msg), t.css({
                            paddingTop: (carecartSpinnerJquery(window).height() - t.height()) / 2
                        }),
                            carecartSpinnerJquery(window).resize(function () {
                                t.css({
                                    // paddingTop: (carecartSpinnerJquery(window).height() - t.height()) / 2
                                })
                            }),
                            l.fadeIn()
                    }

                }

                function init() {
                    var i = document.querySelector(".btn-submit-form-ok");
                    (new Spin2WinWheel).init({
                        data: dataSpin,
                        onGameEnd: myGameEnd,
                        spinTrigger: i
                    })
                }

                function isValidPhoneNumber(i) {
                    if (i.length < 7 || i.length > 15) {
                        return true;
                    }
                    // return !/\S+@\S+\.\S+/.test(i)
                    var re = /^\d+$/;
                    return !re.test(i);
                }

                function isValidEmailAddress(i) {
                    // return !/\S+@\S+\.\S+/.test(i)
                    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    return !re.test(String(i).toLowerCase());
                }

                function applySASPlugin() {
                    function i() {
                        var i = carecartSpinnerJquery(window).width();
                        i < 680 && (t.css({
                            width: "100%",
                            padding: 0
                        }), v.css({
                            width: "100%",
                            padding: 0
                        }), e.css({
                            width: "100%",
                            position: "fixed",
                            bottom: "-30%",
                            left: 0,
                            right: 0,
                            transform: "translate(-51%)"
                        }), n.css({
                            width: "100%",
                            transform: "translateX(0)"
                        }), a.css({
                            maxWidth: "370"
                        })), i < 400 && e.css({
                            bottom: "-23%"
                        }), i >= 680 && t.css({
                            paddingTop: (carecartSpinnerJquery(window).height() - t.height()) / 2
                        })
                    }

                    var t = carecartSpinnerJquery(".wheelify-signupContainer"),
                        v = carecartSpinnerJquery(".wheelify-winContainer"),
                        e = carecartSpinnerJquery(".wheelify-wheelContainer"),
                        n = carecartSpinnerJquery(".wheelify-wheelSVG"),
                        a = carecartSpinnerJquery(".form-group input"),
                        o = carecartSpinnerJquery(".btn-submit-form"),
                        s = carecartSpinnerJquery('#cc-spinner-full-name'),
                        d = carecartSpinnerJquery('#cc-spinner-email'),
                        m = carecartSpinnerJquery('#cc-spinner-phone-number'),
                        u = carecartSpinnerJquery("input[name='coupon']");
                    carecartSpinnerJquery(".copy-button").click(function () {
                        var copiedTextVal = carecartSpinnerJquery("#copied_text_only").text();
                        // if (Shopify.shop == 'organicforeverybody.myshopify.com') {
                        //     carecartSpinnerJquery(this).html('<i class="fa fa-clone" aria-hidden="true"></i> ' + copiedTextVal);
                        // } else {
                        //     clipboard.writeText(u.val()), carecartSpinnerJquery(this).html('<i class="fa fa-clone" aria-hidden="true"></i> ' + copiedTextVal);
                        // }
                        if (window.localStorage.getItem('urgencyTimerBarEnabled') == 1 && window.localStorage.getItem('cc-sas-spinner-hide-timer-bar') != 1 && window.localStorage.getItem('cc-sas-spinner-copy-button-clicked') != 1) {
                            //if (!getParameterByName('cc-show-spin-a-sale-test')) {
                            //updateCachedTime();
                            //}
                            //hideSpinASaleModule();
                            //console.log('check is spinner bar hidden: ' + window.localStorage.getItem('cc-sas-spinner-hide-timer-bar'));
                            window.localStorage.setItem('cc-sas-spinner-copy-button-clicked', 1);
                            var spinASaleCcUrgencyTimeBarText = carecartSpinnerJquery('#wheelify-spin_a_sale_cc_urgency_time_bar_text').html();
                            var wonCouponCode = '<strong>' + window.localStorage.getItem('cc-sas-spinner-cached-coupon-code') + '</strong>';
                            //console.log('wonCouponCode: ' + wonCouponCode);
                            spinASaleCcUrgencyTimeBarText = spinASaleCcUrgencyTimeBarText.replace('{{coupon_code}}', wonCouponCode);
                            //console.log('spinASaleCcUrgencyTimeBarText ' + spinASaleCcUrgencyTimeBarText);
                            var spinASaleCcUrgencyTimeBarInMin = window.localStorage.getItem('urgencyTimerBarTimeInMin');
                            //console.log('spinASaleCcUrgencyTimeBarInMin: ' + spinASaleCcUrgencyTimeBarInMin);
                            var deadlineSpinAWheel = new Date(Date.parse(new Date()) + spinASaleCcUrgencyTimeBarInMin * 60 * 1000);
                            var timerDiv = '<span style="font-weight: bold;"><span class="cc-spin-a-sale-minutes">' + spinASaleCcUrgencyTimeBarInMin + '</span>:<span class="cc-spin-a-sale-seconds">00</span></span>';
                            //var spinASaleCcUrgencyTimeBarText = '<span class="cc-spin-a-sale-clock-div" id="cc-spin-a-sale-clock-div-preview"><span style="font-weight: bold;"><span class="cc-spin-a-sale-minutes"></span>:<span class="cc-spin-a-sale-seconds"></span></span></span>';
                            //console.log('timerDiv: ' + timerDiv);
                            //console.log('spinASaleCcUrgencyTimeBarText: ' + spinASaleCcUrgencyTimeBarText);
                            spinASaleCcUrgencyTimeBarText = spinASaleCcUrgencyTimeBarText.replace('{{time}}', timerDiv);
                            spinASaleCcUrgencyTimeBarText = spinASaleCcUrgencyTimeBarText.replace('{{ time }}', timerDiv);
                            //carecartSpinnerJquery('#wheelify-couponwheel_notice_timer').html(timerDiv);
                            carecartSpinnerJquery('#wheelify-spin_a_sale_cc_urgency_time_bar_text').html(spinASaleCcUrgencyTimeBarText);
                            //console.log('spinASaleCcUrgencyTimeBarText 2: ' + spinASaleCcUrgencyTimeBarText);
                            carecartSpinnerJquery('#wheelify-couponwheel_notice_content').show();
                            //console.log('deadlineSpinAWheel deadlineSpinAWheel: ' + deadlineSpinAWheel);
                            initializeClockSpinAWheel('cc-spin-a-sale-clock-div-preview', deadlineSpinAWheel);
                            carecartSpinnerJquery('#spin_a_sale_cc_store_front_module_close_button').click();
                        }
                        else {
                            console.log('SAS copy-button-clicked is already triggered & urgency bar is hence closed')
                        }
                    }), i(), carecartSpinnerJquery(window).resize(function () {
                        i()
                    }), o.click(function (i) {
                        carecartSpinnerJquery('.btn-submit-form').prop('disabled', true);
                        i.preventDefault();
                        var checkboxIsMandatory = 0;
                        if (carecartSpinnerJquery('#cc-spin-a-sale-consent-checkbox').prop('required')) {
                            checkboxIsMandatory = 1;
                            //console.log("SAS Checkbox is Mandatory");
                        }
                        else {
                            //console.log("SAS Checkbox is NOT Mandatory");
                        }
                        var t = s.val(),
                            e = d.val(),
                            mV = m.val(),
                            xpV = 1,
                            x = 1,
                            n = carecartSpinnerJquery(".wheelify-textInfo"),
                            a = carecartSpinnerJquery(".btn-submit-form"),
                            o = carecartSpinnerJquery(".btn-submit-form-ok");
                        s = carecartSpinnerJquery("#cc-spinner-full-name");
                        w = carecartSpinnerJquery("#cc-spin-a-sale-consent-checkbox");
                        q = carecartSpinnerJquery("#wheelify-cc-spin-a-sale-already-used-spin-quota");
                        d = carecartSpinnerJquery('#cc-spinner-email'),
                            m = carecartSpinnerJquery('#cc-spinner-phone-number'),
                            n.text("");
                        var emailError = carecartSpinnerJquery('#wheelify-cc-spin-invalid-email');
                        var phoneNumberError = carecartSpinnerJquery('#wheelify-cc-spin-invalid-phone-number');

                        emailError.hide();
                        phoneNumberError.hide();

                        if (checkboxIsMandatory == 1) {
                            if (w.prop("checked") == true) {
                                //console.log("SAS Checkbox is Mandatory & Checkbox Checked");
                            }
                            else {
                                x = "";
                                //console.log("SAS Checkbox is Mandatory & Checkbox is NOT Checked");
                            }
                            //console.log("SAS value of x : " + x);
                        }
                        else {
                            //console.log("SAS x value should be 0 as NOT needed: " + x);
                        }


                        var phoneNumberMandatory = 0;
                        if (carecartSpinnerJquery('#cc-spinner-phone-number').prop('required')) {
                            phoneNumberMandatory = 1;
                        }

                        var AllowPhoneNumberField = 0;
                        if (carecartSpinnerJquery('#cc-spinner-phone-number').length != 0) {
                            AllowPhoneNumberField = 1;
                        }

                        if (phoneNumberMandatory == 1) {
                            if (mV == '') {
                                xpV = "";
                            }
                        }

                        return "" == t ? (s.addClass("animated shake"), void setTimeout(function () {
                            s.removeClass("animated shake")
                        }, 1e3), carecartSpinnerJquery('.btn-submit-form').prop('disabled', false)) : "" == e ? (d.addClass("animated shake"), void setTimeout(function () {
                            d.removeClass("animated shake")
                        }, 1e3), carecartSpinnerJquery('.btn-submit-form').prop('disabled', false)) : isValidEmailAddress(e) ? (d.addClass("animated shake"), emailError.addClass("animated shake"), emailError.show(), void setTimeout(function () {
                            d.removeClass("animated shake")
                        }, 1e3), carecartSpinnerJquery('.btn-submit-form').prop('disabled', false)) : (AllowPhoneNumberField == 1 && "" == xpV) ? (m.addClass("animated shake"), void setTimeout(function () {
                            m.removeClass("animated shake")
                        }, 1e3), carecartSpinnerJquery('.btn-submit-form').prop('disabled', false))
                            : (isPhoneNumberMandatory == 1 && AllowPhoneNumberField == 1 && mV != '' && isValidPhoneNumber(mV)) ? (m.addClass("animated shake"), phoneNumberError.addClass("animated shake"), phoneNumberError.show(), void setTimeout(function () {
                                m.removeClass("animated shake")
                            }, 1e3), carecartSpinnerJquery('.btn-submit-form').prop('disabled', false)) : "" == x ? (w.addClass("animated shake"), void setTimeout(function () {
                                w.removeClass("animated shake");
                            },
                                1e3), carecartSpinnerJquery('.btn-submit-form').prop('disabled', false)) : "" != e ? void setTimeout(function () {
                                    //var sendCall = true;
                                    if (window.localStorage.getItem('cc-sas-spinner-anti-cheat-shield') !== null && window.localStorage.getItem('cc-sas-spinner-anti-cheat-shield') == 1) {
                                        carecartSpinnerJquery('#wheelify-cc-spin-a-sale-loader-on-click').show();
                                        console.log('SAS Try your luck clicked and about to spin');

                                        emailError.hide();
                                        emailError.removeClass("animated shake");
                                        //q.show();
                                        //q.addClass("animated shake");
                                        //console.log("SAS validation Success");
                                        carecartSpinnerJquery.ajax({
                                            type: "POST",
                                            url: API_URL + "store-front-api/post-engine",
                                            data: {
                                                shop: "www.dev-site-1x3730.wix-dev-center-test.org/",
                                                email: e,
                                                iPData: window.localStorage.getItem('cc-sas-spinner-user-ip-address'),
                                                CData: window.localStorage.getItem('cc-sas-spinner-cookies-data'),
                                                campaignId: (typeof window._campaignId !== 'udefined' ? window._campaignId : null),
                                            },
                                            crossDomain: true,
                                            dataType: "json",
                                            success: function (response) {
                                                carecartSpinnerJquery('.btn-submit-form').prop('disabled', false);
                                                carecartSpinnerJquery('#wheelify-cc-spin-a-sale-loader-on-click').hide();
                                                if (response && response._metadata && response._metadata.outcome && response._metadata.outcome == "SUCCESS") {
                                                    //console.log('response._metadata.outcome: ' + response._metadata.outcome);
                                                    q.hide();
                                                    q.removeClass("animated shake");
                                                    console.log('SAS post engine successfully');
                                                    o.click();
                                                } else if (response && response._metadata && response._metadata.outcome && response._metadata.outcome == "INVALID_EMAIL_DOMAIN") {
                                                    q.hide();
                                                    q.removeClass("animated shake");
                                                    emailError.show();
                                                    emailError.addClass("animated shake");
                                                } else {
                                                    console.log('SAS Engine Block response: ' + response._metadata.outcome);
                                                    q.show();
                                                    q.addClass("animated shake");
                                                }
                                            },
                                            error: function () {
                                                carecartSpinnerJquery('#wheelify-cc-spin-a-sale-loader-on-click').hide();
                                                carecartSpinnerJquery('.btn-submit-form').prop('disabled', false);
                                                q.show();
                                                q.addClass("animated shake");
                                                console.log('SAS Engine Error');
                                            }
                                        });
                                        return;
                                    }
                                    o.click();
                                }, (w.removeClass("animated shake"),
                                    1e3)) : o.click();
                        /*
                                                return "" == t ? (n.text("You should provide your fullname!"), n.addClass("animated shake"), void setTimeout(function () {
                                                    n.removeClass("animated shake")
                                                }, 1e3)) : "" == e ? (n.text("You should provide your email"), n.addClass("animated shake"), void setTimeout(function () {
                                                    n.removeClass("animated shake")
                                                }, 1e3)) : isValidEmailAddress(e) ? (n.text("Your email is not valid format"), n.addClass("animated shake"), void setTimeout(function () {
                                                    n.removeClass("animated shake")
                                                }, 1e3)) : o.click();
                        */

                        /*
                                                void $.ajax({
                                                type: "POST",
                                                url: "subscription_api_url",
                                                data: {
                                                    fullname: t,
                                                    email: e
                                                },
                                                success: function (i) {
                                                    var check = "0";
                                                    if (check == "1") {
                                                        a.css({
                                                            display: "none"
                                                        });
                                                        o.css({
                                                            "display": "block"
                                                        });
                                                    } else {
                                                        o.click();
                                                    }
                                                },
                                                error: function () {
                                                }
                                            })
                        */
                    })
                }

                function checkCachedTime() {
                    //console.log("SAS in checkCachedTime");
                    var globalSettingsDataCachedTime = window.localStorage.getItem('cc-sas-spinner-cached-time');
                    if (globalSettingsDataCachedTime !== undefined && globalSettingsDataCachedTime !== null) {
                        console.log("SAS globalSettingsDataCachedTime is NOT null & NOT undefined");
                        var currentTime = new Date();
                        var previousTime = new Date(globalSettingsDataCachedTime);
                        var msec = parseInt(currentTime - previousTime);
                        var minutes = parseInt(Math.floor(msec / 60000));
                        console.log('SAS Time : ' + minutes);

                        if (minutes <= 5) {
                            return false;
                        }
                    }
                    return true;

                }
                //************** Reset Coupon Code display to Form enabling Re-Run The Wheel ***************************************
                function checkSpinCouponLoadTime() {
                    //console.log("SAS in checkSpinCouponLoadTime");
                    var spinnerCouponLoadTime = window.localStorage.getItem('cc-sas-spinner-coupon-load-time');
                    if (spinnerCouponLoadTime !== undefined && spinnerCouponLoadTime !== null) {
                        //console.log("SAS spinnerCouponLoadTime is NOT null & NOT undefined");
                        var currentTime = new Date();
                        var previousTime = new Date(spinnerCouponLoadTime);
                        var msec = parseInt(currentTime - previousTime);
                        var minutes = parseInt(Math.floor(msec / 60000));
                        console.log('SAS Time checkSpinCouponLoadTime: ' + minutes);

                        if (minutes <= 59) {
                            return false;
                        }
                        if (minutes > 60) {
                            console.log('SAS Time checkSpinCouponLoadTime Now greater than 60 & about to reset: ' + minutes);
                            window.localStorage.setItem('cc-sas-spinner-cached-coupon-code', null);
                            window.localStorage.setItem('cc-sas-spinner-cached-coupon-code-message', null);
                            //console.log("SAS cached-coupon-code & cached-coupon-code-message is now reset");
                        }
                    }
                    return true;

                }
                //*************** Set Start Timer to Calculate time since Wheel has been Spun to get Discount Code ************************
                function setSpinCouponLoadTime() {
                    var timeNow = new Date();
                    window.localStorage.setItem('cc-sas-spinner-coupon-load-time', timeNow);
                    //console.log("SAS setSpinCouponLoadTime is NOW Set to current time");
                }
                function SASGoingToShow() {
                    let spinnerShowTime = window.localStorage.getItem("cc-sas-spinner-cached-time");
                    var currentTime = new Date();
                    var previousTime = new Date(spinnerShowTime);
                    var msec = parseInt(currentTime - previousTime);
                    var minutes = parseInt(Math.floor(msec / 60000));

                    /* Time when spinner will display again */
                    let timeToDisplay = 5;
                    // if (Shopify.shop == "almowear.myshopify.com") {
                    //     timeToDisplay = 60;
                    // }

                    if (spinnerShowTime == undefined) {
                        return true;
                    } else if (minutes >= timeToDisplay) {
                        return true;
                    } else {
                        return false;
                    }
                }
                function showSpinASaleModule(type = '') {
                    //console.log('showSpinASaleModule type: ' + type);
                    if (type && type == 'triggered') {
                        // carecartSpinnerJquery("body").find("#wheelify-spin_a_sale_cc_store_front_module").show(1000);
                        carecartSpinnerJquery("body").find("#wheelify-spin_a_sale_cc_store_front_module").fadeIn();
                        init();
                        applySASPlugin();
                        postImpressionData();
                    } else {
                        carecartSpinnerJquery("body").find("#wheelify-spin_a_sale_cc_store_front_module").fadeIn();
                        init();
                        applySASPlugin();
                        if (type == 'triggered' || type == 'auto') {
                            postImpressionData();
                        }
                        /*
                                                if (checkCachedTime()) {
                                                    // carecartSpinnerJquery("body").find("#wheelify-spin_a_sale_cc_store_front_module").show(1000);
                                                    carecartSpinnerJquery("body").find("#wheelify-spin_a_sale_cc_store_front_module").fadeIn();
                                                    init();
                                                    applySASPlugin();
                                                    //console.log('type Else: ' + type)
                                                    if(type == 'triggered' || type == 'auto')
                                                    {
                                                        //console.log('Triggering: ' + type);
                                                        postImpressionData();
                                                    }
                                                }
                        */
                    }
                    /*Custom fix*/
                    // if (Shopify.shop == 'presha-luxury.myshopify.com') {
                    //     carecartSpinnerJquery("#NewsletterPopup-newsletter-popup").removeAttr("tabindex");
                    // }
                    /*
                                        if(Shopify.shop == 'dorsila.myshopify.com'){
                                            let selector = carecartSpinnerJquery(".wheelify-wheelContainer svg").find('g.valueContainer').children();
                                            for (let i = 1; i < selector.length; i++) {
                                                let textTag = $(selector[i]).find('text').attr("transform","rotate(90, 440, -2)");
                                            }
                                        }
                    */
                }

                function hideSpinASaleModule() {
                    ///carecartSpinnerJquery("body").find("#wheelify-spin_a_sale_cc_store_front_module").hide();
                    carecartSpinnerJquery("body").find("#wheelify-spin_a_sale_cc_store_front_module").fadeOut();
                }

                function couponAndMsgAreSetThenLoad() {
                    //console.log("SAS In couponAndMsgAreSetThenLoad");
                    //console.log('cc-sas-spinner-timer-bar-set-html' + window.localStorage.getItem('cc-sas-spinner-timer-bar-set-html'));
                    if (window.localStorage.getItem('cc-sas-spinner-timer-bar-set-html') !== null && window.localStorage.getItem('cc-sas-spinner-hide-timer-bar') != 1) {
                        carecartSpinnerJquery('#cc-spin-a-sale-clock-div-preview').html(window.localStorage.getItem('cc-sas-spinner-timer-bar-set-html'));
                        carecartSpinnerJquery('#wheelify-couponwheel_notice_content').show();
                        var ccSpinASaleMinutes = carecartSpinnerJquery('.cc-spin-a-sale-minutes').html();
                        var ccSpinASaleSeconds = carecartSpinnerJquery('.cc-spin-a-sale-seconds').html();
                        //console.log('SAS ccSpinASaleMinutes: ' + ccSpinASaleMinutes);
                        //console.log('SAS ccSpinASaleSeconds: ' + ccSpinASaleSeconds);

                        //var deadlineSpinAWheel = new Date(Date.parse(new Date()) + ccSpinASaleMinutes * 60 * 1000);
                        var updatedTime = (ccSpinASaleMinutes * 60 * 1000) + (ccSpinASaleSeconds * 1000);
                        var deadlineSpinAWheel = new Date(Date.parse(new Date()) + updatedTime);

                        initializeClockSpinAWheel('cc-spin-a-sale-clock-div-preview', deadlineSpinAWheel);
                    }
                    //if(window.localStorage.getItem('cc-sas-spinner-copy-button-clicked') != 1) {
                    checkSpinCouponLoadTime();
                    var coupon = window.localStorage.getItem('cc-sas-spinner-cached-coupon-code');
                    var msg = window.localStorage.getItem('cc-sas-spinner-cached-coupon-code-message');
                    //console.log("SAS coupon value: " + coupon);
                    //console.log("SAS msg value: " + msg);

                    if (coupon && msg) {
                        if (coupon == null || msg == null || coupon == 'null' || msg == 'null') {
                            console.log("SAS coupon or msg is null");
                            //console.log("coupon: " + coupon);
                            //console.log("msg: " + msg);
                            return;
                        }
                        console.log("SAS coupon & msg are already set, so loading them");
                        var t = carecartSpinnerJquery(".wheelify-winContainer"),
                            w = carecartSpinnerJquery(".wheelify-wheelContainer"),
                            l = carecartSpinnerJquery(".wheelify-loseContainer"),
                            e = carecartSpinnerJquery(".wheelify-signupContainer"),
                            n = carecartSpinnerJquery(".win_text"),
                            a = carecartSpinnerJquery(".coupon");
                        if (coupon) {
                            e.fadeOut(), n.text(msg), a.text(coupon), t.find("input").val(coupon), t.css({
                                paddingTop: (carecartSpinnerJquery(window).height() - t.height()) / 2
                            }),
                                carecartSpinnerJquery(window).resize(function () {
                                    t.css({
                                        // paddingTop: (carecartSpinnerJquery(window).height() - t.height()) / 2
                                    })
                                }),
                                t.fadeIn()
                            w.css('opacity', '0.3');
                        } else {
                            e.fadeOut(), n.text(msg), t.css({
                                paddingTop: (carecartSpinnerJquery(window).height() - t.height()) / 2
                            }),
                                carecartSpinnerJquery(window).resize(function () {
                                    t.css({
                                        // paddingTop: (carecartSpinnerJquery(window).height() - t.height()) / 2
                                    })
                                }),
                                l.fadeIn()
                        }
                        return;
                    }
                    //}
                }

                function displayCouponOverSpinner() {
                    console.log("SAS In displayCouponOverSpinner");
                    if (!checkCachedTime()) {
                        //console.log("SAS checkCachedTime is NOT Set");
                        var coupon = window.localStorage.getItem('cc-sas-spinner-cached-coupon-code');
                        var msg = window.localStorage.getItem('cc-sas-spinner-cached-coupon-code-message');
                        //console.log("SAS displayCouponOverSpinner coupon value: " + coupon);
                        //console.log("SAS displayCouponOverSpinner msg value: " + msg);
                        if (coupon == null || msg == null || coupon == 'null' || msg == 'null') {
                            console.log("SAS Coupon Over Spinner coupon or msg is null");
                            //console.log("displayCouponOverSpinner coupon: " + coupon);
                            //console.log("SAS displayCouponOverSpinner msg: " + msg);
                            return;
                        }

                        if (window.localStorage.getItem('cc-sas-spinner-copy-button-clicked') != 1) {
                            if (coupon && msg) {
                                var t = carecartSpinnerJquery(".wheelify-winContainer"),
                                    w = carecartSpinnerJquery(".wheelify-wheelContainer"),
                                    l = carecartSpinnerJquery(".wheelify-loseContainer"),
                                    e = carecartSpinnerJquery(".wheelify-signupContainer"),
                                    n = carecartSpinnerJquery(".win_text"),
                                    a = carecartSpinnerJquery(".coupon");
                                if (coupon) {
                                    e.fadeOut(), n.text(msg), a.text(coupon), t.find("input").val(coupon), t.css({
                                        paddingTop: (carecartSpinnerJquery(window).height() - t.height()) / 2
                                    }),
                                        carecartSpinnerJquery(window).resize(function () {
                                            t.css({
                                                // paddingTop: (carecartSpinnerJquery(window).height() - t.height()) / 2
                                            })
                                        }),
                                        t.fadeIn()
                                    w.css('opacity', '0.3');
                                } else {
                                    e.fadeOut(), n.text(msg), t.css({
                                        paddingTop: (carecartSpinnerJquery(window).height() - t.height()) / 2
                                    }),
                                        carecartSpinnerJquery(window).resize(function () {
                                            t.css({
                                                // paddingTop: (carecartSpinnerJquery(window).height() - t.height()) / 2
                                            })
                                        }),
                                        l.fadeIn()
                                }

                                carecartSpinnerJquery("body").find("#wheelify-spin_a_sale_cc_store_front_module").fadeIn();
                                return;
                            }
                        }
                    }
                }

                function stopShakeButton(response) {
                    if (carecartSpinnerJquery('#wheelify-spin-trigger-cc').hasClass('triggerButton_shake') || carecartSpinnerJquery('#wheelify-spin-trigger-cc').hasClass('vtriggerButton_shake')) {
                        let settings = response.records.store_settings.settings_data;

                        if (settings.button_position === 'middle_right' || settings.button_position === 'middle_left') {
                             carecartSpinnerJquery('#wheelify-spin-trigger-cc').removeClass('shake vtriggerButton_shake');
                        } else {
                            carecartSpinnerJquery('#wheelify-spin-trigger-cc').removeClass('shake triggerButton_shake');
                        }

                        setTimeout(function (response) {
                            startShakeButton(response);
                        }, 5000, response);
                    }
                }

                function startShakeButton(response) {
                    let settings = response.records.store_settings.settings_data;

                    if (settings.button_position === 'middle_right' || settings.button_position === 'middle_left') {
                        carecartSpinnerJquery('#wheelify-spin-trigger-cc').addClass('shake vtriggerButton_shake');
                    } else {
                        carecartSpinnerJquery('#wheelify-spin-trigger-cc').addClass('shake triggerButton_shake');
                    }

                    setTimeout(function (response) {
                        stopShakeButton(response);
                    }, 1000, response);
                }

                function pupulateData(response) {
                    setTimeout(function (response) {
                        stopShakeButton(response);
                    }, 1000, response);
                    //console.log('SAS AJAX Success ');
                    if (response && response._metadata && response._metadata.outcome && response._metadata.outcome == "SUCCESS") {
                        console.log('SAS Success Response');
                        /* Check If Module is Active*/
                        if (response.records && response.records.store_settings && response.records.store_settings) {
                            console.log('SAS is active & enabled in Slices Menu');
                            //****************************************** Start - Allow Spinner on ONLY Specific URL ******************************
                            /*
                                                        if(Shopify.shop == 'dev-messenger-15.myshopify.com'){
                                                            var thisStatus = checkStoreSpecificUrlCcSpinASale("https://dev-messenger-15.myshopify.com/abc");
                                                            console.log('checkStoreSpecificUrlCcSpinASale Status: ' + thisStatus);
                                                            if(thisStatus)
                                                            {
                                                                console.log('SAS Custom Page Matched for store: ' + Shopify.shop);
                                                            }
                                                            else{
                                                                console.log('SAS Custom Page NOT Matched for store: ' + Shopify.shop);
                                                                return;
                                                            }
                                                        }
                            */
                            // if (Shopify.shop == 'geniani-products.myshopify.com') {
                            //     var thisStatus = checkStoreSpecificUrlCcSpinASale("https://geniani.com/pages/geniani-rewards-club");
                            //     //console.log('checkStoreSpecificUrlCcSpinASale Status: ' + thisStatus);
                            //     if (thisStatus) {
                            //         console.log('SAS Custom Page Matched for store: ' + Shopify.shop);
                            //     }
                            //     else {
                            //         console.log('SAS Custom Page NOT Matched for store: ' + Shopify.shop);
                            //         return;
                            //     }
                            // }

                            // if (Shopify.shop == 'little-miss-juliette.myshopify.com') {
                            //     var thisStatus = checkStoreSpecificUrlCcSpinASale("https://www.littlemissjuliette.com/pages/spin-win");
                            //     //console.log('checkStoreSpecificUrlCcSpinASale Status: ' + thisStatus);
                            //     if (thisStatus) {
                            //         console.log('SAS Custom Page Matched for store: ' + Shopify.shop);
                            //     }
                            //     else {
                            //         console.log('SAS Custom Page NOT Matched for store: ' + Shopify.shop);
                            //         return;
                            //     }
                            // }

                            // if (Shopify.shop == 'beebielove-webshop.myshopify.com') {
                            //     var thisStatus = checkStoreSpecificUrlCcSpinASale("https://www.beebielove.com/pages/spin-win");
                            //     //console.log('checkStoreSpecificUrlCcSpinASale Status: ' + thisStatus);
                            //     if (thisStatus) {
                            //         console.log('SAS Custom Page Matched for store: ' + Shopify.shop);
                            //     }
                            //     else {
                            //         console.log('SAS Custom Page NOT Matched for store: ' + Shopify.shop);
                            //         return;
                            //     }
                            // }

                            // if (Shopify.shop == 'jumping-the-couch.myshopify.com') {
                            //     var thisStatus = checkStoreSpecificUrlCcSpinASale("https://jumpingthecouch.com/pages/spin-win");
                            //     //console.log('checkStoreSpecificUrlCcSpinASale Status: ' + thisStatus);
                            //     if (thisStatus) {
                            //         console.log('SAS Custom Page Matched for store: ' + Shopify.shop);
                            //     }
                            //     else {
                            //         console.log('SAS Custom Page NOT Matched for store: ' + Shopify.shop);
                            //         return;
                            //     }
                            // }
                            /* New custom fixes added from here */
                            // if (Shopify.shop == 'tweetprintshop.myshopify.com') {
                            //     carecartSpinnerJquery("body").append('<style type="text/css"> .wheelify-content-spinner {background-color: #008affd1 !important;} #wheelify-spin-trigger-cc img {opacity: 1}</style>');
                            // }
                            // if (Shopify.shop == 'hho-kit.myshopify.com') {
                            //     carecartSpinnerJquery("body").append('<style type="text/css">.pegContainer {transform-origin: 0px 0px 0px;transform: matrix(1.70666, 0, 0, 1.70666, -374.604, 62.2927)}</style>');
                            // }
                            // if ("mist-jewels.myshopify.com" == Shopify.shop) {
                            //     carecartSpinnerJquery("body").append('<style type="text/css">.wheelify-signupContainer p {color: black !important;} span#cc-spin-a-sale-consent-text {color: black !important;}</style>');
                            // }
                            // if ("our-little-hero.myshopify.com" == Shopify.shop) {
                            //     carecartSpinnerJquery("body").append('<style type="text/css">#wheelify-spin_a_sale_cc_store_front_module.wheelify-wrapper-spinner {top: 0;left: 0;transform: translate(calc(50vw - 50%), calc(50vh - 50%));width: 40%;min-width: 700px;height: 63%;} .medium-up--one-quarter {width:15%;} .medium-up--one-half {width:70%;}</style>');
                            //     carecartSpinnerJquery(".site-nav").append('<li><a id="wheelify-spin-trigger-2" onclick="displaySpinnerOnTigger()" href="javascript:void(0)" class="site-nav__link site-nav__link--main"><span class="site-nav__label">Spin to Win</span></a></li>');
                            //     carecartSpinnerJquery("#wheelify-spin-trigger-cc").css("display", "none");
                            // }

                            //****************************************** End - Allow Spinner on ONLY Specific URL ******************************
                            //console.log('response.records.store_settings.settings_data.display_home_page_enabled: ' + response.records.store_settings.settings_data.display_home_page_enabled);
                            //console.log('response.records.store_settings.settings_data.display_collections_page_enabled: ' + response.records.store_settings.settings_data.display_collections_page_enabled);
                            //console.log('response.records.store_settings.settings_data.display_blog_posts_page_enabled: ' + response.records.store_settings.settings_data.display_blog_posts_page_enabled);
                            //console.log('response.records.store_settings.settings_data.display_products_page_enabled: ' + response.records.store_settings.settings_data.display_products_page_enabled);
                            //console.log('response.records.store_settings.settings_data.display_cart_page_enabled: ' + response.records.store_settings.settings_data.display_cart_page_enabled);
                            //console.log('response.records.store_settings.settings_data.display_thank_you_page_enabled: ' + response.records.store_settings.settings_data.display_thank_you_page_enabled);

                            //****************************** If SAS is disabled on Homepage, it will NOT be loaded on Homepage *************************************
                            if (response.records.store_settings.settings_data.display_home_page_enabled && parseInt(response.records.store_settings.settings_data.display_home_page_enabled) == 0) {
                                var thisStatus = checkHomePageCcSpinASale();
                                //console.log('checkHomePageCcSpinASale Status: ' + thisStatus);
                                if (thisStatus) {
                                    carecartSpinnerJquery("#wheelify-spin-trigger-2").css("display", "none");
                                    console.log('SAS load on homepage is disabled');
                                    return;
                                }
                            }
                            //****************************** If SAS is disabled on Collections page, it will NOT be loaded on Collections page *************************************
                            if (response.records.store_settings.settings_data.display_collections_page_enabled && parseInt(response.records.store_settings.settings_data.display_collections_page_enabled) == 0) {
                                var thisStatus = checkCollectionsCcSpinASale();
                                //console.log('checkCollectionsCcSpinASale Status: ' + thisStatus);
                                if (thisStatus) {
                                    carecartSpinnerJquery("#wheelify-spin-trigger-2").css("display", "none");
                                    console.log('SAS load on Collections Page is disabled');
                                    return;
                                }
                            }
                            //****************************** If SAS is disabled on Blog Posts, it will NOT be loaded on Blog Posts *************************************
                            if (response.records.store_settings.settings_data.display_blog_posts_page_enabled && parseInt(response.records.store_settings.settings_data.display_blog_posts_page_enabled) == 0) {
                                var thisStatus = checkBlogPageCcSpinASale();
                                //console.log('checkBlogPageCcSpinASale Status: ' + thisStatus);
                                if (thisStatus) {
                                    carecartSpinnerJquery("#wheelify-spin-trigger-2").css("display", "none");
                                    console.log('SAS load on Blog Posts is disabled');
                                    return;
                                }
                            }
                            //****************************** If SAS is disabled on Products Page, it will NOT be loaded on Products Page *************************************
                            if (response.records.store_settings.settings_data.display_products_page_enabled && parseInt(response.records.store_settings.settings_data.display_products_page_enabled) == 0) {
                                var thisStatus = checkProductCcSpinASale();
                                //console.log('checkProductCcSpinASale Status: ' + thisStatus);
                                if (thisStatus) {
                                    carecartSpinnerJquery("#wheelify-spin-trigger-2").css("display", "none");
                                    console.log('SAS load on Products Page is disabled');
                                    return;
                                }
                            }
                            //****************************** If SAS is disabled on Cart Page, it will NOT be loaded on Cart Page *************************************
                            if (response.records.store_settings.settings_data.display_cart_page_enabled && parseInt(response.records.store_settings.settings_data.display_cart_page_enabled) == 0) {
                                var thisStatus = checkCartCcSpinASale();
                                //console.log('checkCartCcSpinASale Status: ' + thisStatus);
                                if (thisStatus) {
                                    carecartSpinnerJquery("#wheelify-spin-trigger-2").css("display", "none");
                                    console.log('SAS load on Cart Page is disabled');
                                    return;
                                }
                            }
                            //****************************** If SAS is disabled on Thank You page, it will NOT be loaded on Thank You Page *************************************
                            if (response.records.store_settings.settings_data.display_thank_you_page_enabled && parseInt(response.records.store_settings.settings_data.display_thank_you_page_enabled) == 0) {
                                var thisStatus = checkThanksYouCcSpinASale();
                                //console.log('checkThanksYouCcSpinASale Status: ' + thisStatus);
                                if (thisStatus) {
                                    carecartSpinnerJquery("#wheelify-spin-trigger-2").css("display", "none");
                                    console.log('SAS load on Thank You page is disabled');
                                    return;
                                }
                            }
                            //****************************** If SAS is enabled on Home page, Collections, Blog post pages, Products, Cart & on Thank You page, it will NOT be loaded on any other page **********************************
                            if (response.records.store_settings.settings_data.display_all_other_pages_enabled && parseInt(response.records.store_settings.settings_data.display_all_other_pages_enabled) == 0) {
                                let customPagesStatus = false;
                                if (response.records.store_settings.settings_data.custom_urls_check == 1) {
                                    customPagesStatus = checkCustomUrls(response.records.store_settings.settings_data.custom_urls);
                                }
                                var thisStatus = checkIfAnyOtherPage();
                                if (!thisStatus && !customPagesStatus) {
                                    console.log('SAS is disabled on all other pages');
                                    return;
                                }
                            }
                            if (response.records.store_settings.settings_data && response.records.store_settings.settings_data.custom_urls_check == 1 && response.records.store_settings.settings_data.custom_urls !== null) {
                                var customPagesStatus = checkCustomUrls(response.records.store_settings.settings_data.custom_urls);
                                var isActive = isActiveOnAnyPages(response);
                                if (customPagesStatus || isActiveOnAnyPages) {
                                    console.log("SAS custom page matched");
                                } else {
                                    console.log("SAS custom page not matched");
                                    return
                                }
                            }
                            var w = carecartSpinnerJquery(window).width();
                            const is_enabled_on_mobile = (typeof response.records.store_settings.settings_data.is_mobile_enabled === 'undefined') ? 1 : parseInt(response.records.store_settings.settings_data.is_mobile_enabled);
                            if (w < 600 && is_enabled_on_mobile === 0) {
                                console.log('SAS is disabled on mobile');
                                return;
                            }

                            /* Check If Module template exist*/
                            if (response.records.store_front_template) {
                                console.log('SAS front template exist');
                                /* Append template*/
                                carecartSpinnerJquery("body").append(response.records.store_front_template);

                                /*********** Phone Number Collection ************/

                                //var phoneNumber = document.querySelector("#cc-spinner-phone-number");

                                scriptInjection(API_URL + "public/phone/js/intlTelInput.js", function () {
                                    var phoneNumber = document.querySelector("#cc-spinner-phone-number");

                                    var initialCountry = '';
                                    if (typeof (response.records.store_settings.settings_data.phone_number_country) != 'undefined' &&
                                        response.records.store_settings.settings_data.phone_number_country != null &&
                                        response.records.store_settings.settings_data.phone_number_country != '') {
                                        initialCountry = response.records.store_settings.settings_data.phone_number_country.trim();
                                    }

                                    if (phoneNumber != null) {
                                        var iti = window.intlTelInput(phoneNumber, {
                                            utilsScript: API_URL + "public/phone/js/utils.js",
                                            initialCountry: initialCountry == '' ? 'US' : initialCountry
                                        });

                                        phoneNumber.value = iti.getSelectedCountryData().dialCode;

                                        phoneNumber.addEventListener("countrychange", function () {
                                            console.log(iti.getSelectedCountryData());
                                            phoneNumber.value = iti.getSelectedCountryData().dialCode;
                                        });


                                        if (typeof (response.records.store_settings.settings_data.international_phone_number_mandatory) != 'undefined' &&
                                            response.records.store_settings.settings_data.international_phone_number_mandatory != null &&
                                            response.records.store_settings.settings_data.international_phone_number_mandatory == '0') {
                                            carecartSpinnerJquery('#cc-spinner-phone-number').closest('.iti--allow-dropdown').find('.iti__flag-container').css('cursor', 'default');
                                            carecartSpinnerJquery('#iti-0__country-listbox').addClass('forceHide');
                                            carecartSpinnerJquery('#cc-spinner-phone-number').closest('.iti--allow-dropdown').find('.iti__arrow').remove();
                                        }
                                    }

                                });

                                if (response.records.store_settings.settings_data.collect_phone_number_mandatory == 1) {
                                   isPhoneNumberMandatory = 1;
                                }
                                
                                if (response.records.store_settings.settings_data.collect_phone_number_mandatory == 0) {
                                   isPhoneNumberMandatory = 0;
                                }

                                /*********** Phone Number Collection ************/
                                
                                /*********** Wheel Margin ************/
                               
                                carecartSpinnerJquery("head").append(
                                    '<style type="text/css"> @media only screen and (max-width: 575px) {#wheelify-spin_a_sale_cc_store_front_module.wheelify-wrapper-spinner.popupview .wheelify-ContentRight {min-height: 468px;}} </style>'
                                );  
                                    carecartSpinnerJquery("head").append(
                                    '<style type="text/css"> @media only screen and (max-width: 575px) {#wheelify-spin_a_sale_cc_store_front_module .wheelify-ContentRight{ min-height: 560px;}} </style>'
                                );

                                // if(Shopify.shop == 'happilo-international-private-limited.myshopify.com') {
                                //     carecartSpinnerJquery("head").append(
                                //         '<style type="text/css"> @media only screen and (max-width: 575px) {#wheelify-spin_a_sale_cc_store_front_module.wheelify-wrapper-spinner.popupview .wheelify-ContentRight {height: 500px !important;}} </style>'
                                //     );
                                //     carecartSpinnerJquery("head").append(
                                //         '<style type="text/css"> @media only screen and (max-width: 575px) {#wheelify-spin_a_sale_cc_store_front_module.wheelify-wrapper-spinner.popupview{height: 650px !important;}} </style>'
                                //     );  
                                // }

                                /* Append triggered button */
                                    if (response.records.store_settings.settings_data.is_triggered_enable && parseInt(response.records.store_settings.settings_data.is_triggered_enable) == 1) {
                                        carecartSpinnerJquery("body").append(response.records.store_front_trigger_button); 
                                        // if(Shopify.shop == "")
                                        // if ("our-little-hero.myshopify.com" == Shopify.shop) {
                                        //     carecartSpinnerJquery("#wheelify-spin-trigger-cc").css("display", "none");
                                        // }
                                        const settingsData = response.records.store_settings.settings_data;
                                        var tBtn = carecartSpinnerJquery('body').find('#wheelify-spin-trigger-cc');
                                    
                                        // if (settingsData.button_position === 'middle_right') {  
                                        //     tBtn.css({
                                        //         bottom: '48vh',
                                        //         right: '-45px',
                                        //         transform: 'rotate(270deg)'
                                        //     });
                                        // }
                                        // else if (settingsData.button_position === 'bottom_right') {
                                        //     tBtn.css({
                                        //         bottom: '8vh',
                                        //         right: '20px'
                                        //     });
                                        // }//new added
                                        // else if (settingsData.button_position === 'bottom_left') {
                                        //     tBtn.css({
                                        //         left: '20px'
                                        //     });
                                        // } else if (settingsData.button_position === 'middle_left') {
                                        //     tBtn.css({
                                        //         left: '-48px',
                                        //         bottom: '48vh',
                                        //         transform: 'rotate(270deg)'
                                        //     });
                                        // }

                                        // Trigger Button Margin
                                        
                                        if(settingsData.button_position === 'middle_right' ) {
                                            let triggerBottom = settingsData.trigger_btn_margin_desktop / 3;
                                            triggerBottom === 0 ? triggerBottom =  8 : triggerBottom += 8;
                                            tBtn.css({
                                                right: '-45px', 
                                                bottom: triggerBottom+'vh',
                                                transform: 'rotate(270deg)'
                                            });
                                            if(carecartSpinnerJquery('#wheelify-spin-trigger-cc').hasClass('shake vtriggerButton_shake')){
                                                carecartSpinnerJquery('#wheelify-spin-trigger-cc').removeClass('shake vtriggerButton_shake');
                                                setInterval(function(){
                                                    shakeVertical('#wheelify-spin-trigger-cc', 50, triggerBottom, 10);
                                                }, 3000);
                                            }
                                        }

                                        else if(settingsData.button_position === 'middle_left' ) {
                                            let triggerBottom = settingsData.trigger_btn_margin_desktop / 3;
                                            triggerBottom === 0 ? triggerBottom =  8 : triggerBottom += 8;
                                            tBtn.css({
                                                left: '-45px',
                                                bottom: triggerBottom+'vh',
                                                transform: 'rotate(270deg)'
                                            });
                                            if(carecartSpinnerJquery('#wheelify-spin-trigger-cc').hasClass('shake vtriggerButton_shake')){
                                                carecartSpinnerJquery('#wheelify-spin-trigger-cc').removeClass('shake vtriggerButton_shake');
                                                setInterval(function(){
                                                    shakeVertical('#wheelify-spin-trigger-cc', 50, triggerBottom, 10);
                                                }, 3000);
                                            }
                                        }
                                        
                                        else if(settingsData.button_position === 'bottom_right' ) {
                                            let triggerBottom = settingsData.trigger_btn_margin_desktop / 3;
                                            triggerBottom === 0 ? triggerBottom =  8 : triggerBottom += 8;
                                            tBtn.css({
                                                bottom: triggerBottom+'vh',
                                                right: '20px'
                                            });
                                        }
                                        
                                        else if(settingsData.button_position === 'bottom_left' ) {
                                            let triggerBottom = settingsData.trigger_btn_margin_desktop / 3;
                                            triggerBottom === 0 ? triggerBottom =  8 : triggerBottom += 8;
                                            tBtn.css({
                                                bottom: triggerBottom+'vh',
                                                left: '20px'
                                            });
                                        }

                                        var windowWidth = window.screen.width < window.outerWidth ? window.screen.width : window.outerWidth;

                                        if (windowWidth < 575) {
                                            if(settingsData.button_position === 'middle_right' ) {
                                                let triggerBottom = settingsData.trigger_btn_margin_mobile / 3;
                                                triggerBottom === 0 ? triggerBottom =  15 : triggerBottom += 15;
                                                tBtn.css({
                                                    right: '-45px', 
                                                    bottom: triggerBottom+'vh',
                                                    transform: 'rotate(270deg)'
                                                });
                                            }
                                            
                                            else if(settingsData.button_position === 'middle_left' ) {
                                                let triggerBottom = settingsData.trigger_btn_margin_mobile / 3;
                                                triggerBottom === 0 ? triggerBottom =  15 : triggerBottom += 15;
                                                tBtn.css({
                                                    left: '-48px',
                                                    bottom: triggerBottom+'vh',
                                                    transform: 'rotate(270deg)'
                                                });
                                            }
                                            
                                            else if(settingsData.button_position === 'bottom_right' ) {
                                                let triggerBottom = settingsData.trigger_btn_margin_mobile / 4;
                                                triggerBottom === 0 ? triggerBottom =  10 : triggerBottom += 10;
                                                console.log(triggerBottom)
                                                tBtn.css({
                                                    bottom: triggerBottom+'vh',
                                                    right: '20px'
                                                });
                                            }
                                            
                                            else if(settingsData.button_position === 'bottom_left' ) {
                                                let triggerBottom = settingsData.trigger_btn_margin_mobile / 4;
                                                triggerBottom === 0 ? triggerBottom =  10 : triggerBottom += 10;
                                                tBtn.css({
                                                    bottom: triggerBottom+'vh',
                                                    left: '20px'
                                                });
                                            }
                                        }
                                    }
                                
                                else {
                                    carecartSpinnerJquery("body").append(response.records.store_front_trigger_button);
                                    var tBtn = carecartSpinnerJquery('body').find('#wheelify-spin-trigger-cc');
                                    tBtn.hide();
                                    //console.log('SAS spinner trigger button should display');
                                }
                                /* ************************************** Display Spinner on Mouse Screen Exit - START *********************************************************** */
                                if (response.records.store_settings.settings_data.is_exit_spinner_display_enabled && parseInt(response.records.store_settings.settings_data.is_exit_spinner_display_enabled) == 1) {
                                    console.log("SAS Spinner will load after Mouse exit's screen");
                                    carecartSpinnerJquery(document).mouseleave(function () {
                                        if (!SASGoingToShow()) {
                                            console.log("SAS Mouse exit: Trigger already");
                                            return;
                                        }
                                        //console.log('SAS out of screen');
                                        if (carecartSpinnerJquery('#wheelify-spin_a_sale_cc_store_front_module:visible').length == 0) {
                                            if (window.localStorage.getItem('cc-sas-spinner-copy-button-clicked') != 1) {
                                                //************* 60 Min (1 min = 60 * 1000 milliseconds) *******************
                                                var timeInMin = 60 * 60 * 1000;
                                                if (window.localStorage.getItem('screenExitDisplaySpinnerExpire') == 1) {
                                                    //console.log("screenExitDisplaySpinnerExpire is Defined");
                                                }
                                                else {
                                                    window.localStorage.setItem('screenExitDisplaySpinnerExpire', 1);
                                                    //carecartSpinnerJquery("body").find("#wheelify-spin_a_sale_cc_store_front_module").fadeIn();
                                                    carecartSpinnerJquery("#wheelify-spin-trigger-cc").click();
                                                    //******************************************* Do NOT Trigger after First Exit From Screen Until 60 Min (1 min = 60 * 1000 milliseconds *****************************
                                                    setTimeout(function () {
                                                        //console.log("SAS Time Set to 60 min");
                                                        window.localStorage.setItem('screenExitDisplaySpinnerExpire', null);
                                                    }, timeInMin);
                                                }
                                                //alert("out of screen");
                                            }
                                            else {
                                                console.log('SAS Urgency bar is already triggered, Exit Intent will not trigger');
                                            }
                                        }
                                    });
                                }
                                /* ************************************** Display Spinner on Mouse Screen Exit - END *********************************************************** */
                                /* ************************************** Display Spinner if percentage scroll is enabled  - START *********************************************************** */
                                if (response.records.store_settings.settings_data.is_scroll_spinner_percentage_enabled && parseInt(response.records.store_settings.settings_data.is_scroll_spinner_percentage_enabled) == 1) {
                                    //console.log("SAS is_scroll_spinner_percentage_enabled is ENABLED");
                                    var scrollPercentageRequired = response.records.store_settings.settings_data.scroll_spinner_percentage ? response.records.store_settings.settings_data.scroll_spinner_percentage : 50;
                                    //console.log('SAS scrollPercentageRequired: ' + scrollPercentageRequired);
                                    console.log("SAS Scroll Spinner Percentage is ENABLED & Percentage Set is: " + scrollPercentageRequired);
                                    //**************** Testing Scroll Page Percentage ****************************
                                    var timeInMinScroll = 60 * 60 * 1000;
                                    if (window.localStorage.getItem('scrollScreenDisplaySpinnerExpire') === null) {
                                        //console.log("SAS scrollScreenDisplaySpinnerExpire is NULL");
                                        console.log("SAS Scroll Screen NOT yet done to load Spinner");
                                        carecartSpinnerJquery(window).on('scroll', function () {
                                            if (!SASGoingToShow()) {
                                                console.log("SAS on Scroll: Trigger already");
                                                return;
                                            }
                                            var s = carecartSpinnerJquery(window).scrollTop(),
                                                d = carecartSpinnerJquery(document).height(),
                                                c = carecartSpinnerJquery(window).height();

                                            var scrolledPercentage = (s / (d - c)) * 100;

                                            //console.clear();
                                            //console.log('SAS scrolled percentage: ' + scrolledPercentage);
                                            if (scrolledPercentage >= scrollPercentageRequired) {
                                                if (window.localStorage.getItem('scrollScreenDisplaySpinnerExpire') === null) {
                                                    if (carecartSpinnerJquery('#wheelify-spin_a_sale_cc_store_front_module:visible').length == 0) {
                                                        window.localStorage.setItem('scrollScreenDisplaySpinnerExpire', 1);
                                                        console.log("SAS scrollScreenDisplaySpinnerExpire is NOW SET");
                                                        console.log("SAS scrolledPercentage is: " + scrolledPercentage + " >= scrollPercentageRequired: " + scrollPercentageRequired + " & Spiller Load is Due");
                                                        if (window.localStorage.getItem('cc-sas-spinner-copy-button-clicked') != 1) {
                                                            carecartSpinnerJquery("#wheelify-spin-trigger-cc").click();
                                                        }
                                                        else {
                                                            console.log("SAS scrollScreenDisplaySpinnerExpire WILL NOT Trigger as Urgency Bar is Triggered");
                                                        }
                                                        setTimeout(function () {
                                                            //console.log("SAS Time Set to 60 min");
                                                            window.localStorage.setItem('scrollScreenDisplaySpinnerExpire', null);
                                                        }, timeInMinScroll);

                                                        //console.log("SAS timeInMinScroll for reset: " + timeInMinScroll);
                                                    }
                                                }
                                            }
                                        });
                                    }
                                    else {
                                        //console.log("SAS scrollScreenDisplaySpinnerExpire is NOT NULL");
                                        console.log("SAS Scroll Screen has already loaded Spinner once");
                                    }
                                }
                                /* ************************************** Display Spinner if percentage scroll is enabled  - END *********************************************************** */
                                setTimeout(function () {
                                    var spinnerColors = response.records.store_slices_color;
                                    if (spinnerColors.every(element => element === null)) {
                                        spinnerColors = ["#000000", "#F1C40F", "#E67E22", "#E74C3C", "#95A5A6", "#16A085", "#27AE60", "#2980B9", "#8E44AD", "#2C3E50"];
                                    }
                                    var ccWheelStrokeColor = response.records.store_settings.wheel_stroke_color;
                                    var ccCenterCircleStrokeColor = response.records.store_settings.center_circle_stroke_color;
                                    var ccCenterCircleFillColor = response.records.store_settings.center_circle_fill_color;

                                    if (ccWheelStrokeColor === null) {
                                        ccWheelStrokeColor = "#D0BD0C";
                                    }
                                    if (ccCenterCircleStrokeColor === null) {
                                        ccCenterCircleStrokeColor = "#F1DC15";
                                    }
                                    if (ccCenterCircleFillColor === null) {
                                        ccCenterCircleFillColor = "#EDEDED";
                                    }
                                    //console.log(SAS spinnerColors);
                                    dataSpin = {
                                        //colorArray: ["#364C62", "#F1C40F", "#E67E22", "#E74C3C", "#95A5A6", "#16A085", "#27AE60", "#2980B9", "#8E44AD", "#2C3E50", "#F39C12", "#D35400", "#C0392B", "#1ABC9C", "#2ECC71", "#E87AC2", "#3498DB", "#9B59B6", "#7F8C8D"],
                                        //colorArray: ["#000000", "#F1C40F", "#E67E22", "#E74C3C", "#95A5A6", "#16A085", "#27AE60", "#2980B9", "#8E44AD", "#2C3E50"],
                                        //colorArray: response.records.store_slices_color,
                                        colorArray: spinnerColors,
                                        segmentValuesArray: response.records.store_slices,
                                        svgWidth: 1024,
                                        svgHeight: 768,
                                        //wheelStrokeColor: "#D0BD0C",
                                        wheelStrokeColor: ccWheelStrokeColor,
                                        wheelStrokeWidth: 20,
                                        wheelSize: 1024,
                                        wheelTextOffsetY: 60,
                                        wheelTextColor: "#FFFFFF",
                                        wheelTextSize: "30px",
                                        wheelImageOffsetY: 100,
                                        wheelImageSize: 200,
                                        centerCircleSize: 220,
                                        //centerCircleStrokeColor: "#F1DC15",
                                        centerCircleStrokeColor: ccCenterCircleStrokeColor,
                                        centerCircleStrokeWidth: 12,
                                        //centerCircleFillColor: "#EDEDED",
                                        centerCircleFillColor: ccCenterCircleFillColor,
                                        segmentStrokeColor: "#E2E2E2",
                                        segmentStrokeWidth: 3,
                                        centerX: 512,
                                        centerY: 384,
                                        hasShadows: !0,
                                        numSpins: 1,
                                        spinDestinationArray: [],
                                        minSpinDuration: 6,
                                        gameOverText: "",
                                        invalidSpinText: "INVALID SPIN. PLEASE SPIN AGAIN.",
                                        introText: "",
                                        hasSound: !1,
                                        gameId: "9a0232ec06bc431114e2a7f3aea03bbe2164f1aa",
                                        clickToSpin: !0
                                    };

                                }, 500);
                                if (SASGoingToShow()) {
                                    setTimeout(function () {
                                        var type = 'auto';
                                        showSpinASaleModule(type);
                                        couponAndMsgAreSetThenLoad();
                                    }, parseInt(response.records.store_settings.settings_data.delay_time) * 1000);
                                }
                                /* *********************************************** Start - Display Urgency Timer Bar **********************************	*/
                                if (response.records.store_settings.conversion_booster_settings != null && response.records.store_settings.conversion_booster_settings.is_urgency_timer_bar_enabled != null && parseInt(response.records.store_settings.conversion_booster_settings.is_urgency_timer_bar_enabled) == 1) {
                                    window.localStorage.setItem('urgencyTimerBarEnabled', 1);
                                    //console.log('SAS Urgency Bar is Active');
                                    //carecartSpinnerJquery('#wheelify-couponwheel_notice_content').show();
                                    var spinASaleCcUrgencyTimeBarTextHtml = '<span class="cc-spin-a-sale-clock-div" id="cc-spin-a-sale-clock-div-preview">' + response.records.store_settings.conversion_booster_settings.urgency_timer_bar_text + '</span>';
                                    carecartSpinnerJquery('#wheelify-spin_a_sale_cc_urgency_time_bar_text').html(spinASaleCcUrgencyTimeBarTextHtml);
                                    var spinASaleCcUrgencyTimeBarText = carecartSpinnerJquery('#wheelify-spin_a_sale_cc_urgency_time_bar_text').html();
                                    //var wonCouponCode = '<strong>' + window.localStorage.getItem('cc-sas-spinner-cached-coupon-code') + '</strong>';
                                    //spinASaleCcUrgencyTimeBarText = spinASaleCcUrgencyTimeBarText.replace('{{coupon_code}}',wonCouponCode);
                                    //console.log('SAS spinASaleCcUrgencyTimeBarText ' + spinASaleCcUrgencyTimeBarText);
                                    window.localStorage.setItem('urgencyTimerBarTimeInMin', response.records.store_settings.conversion_booster_settings.urgency_timer_bar_display_time_in_min);
                                    var spinASaleCcUrgencyTimeBarInMin = window.localStorage.getItem('urgencyTimerBarTimeInMin');
                                    //console.log('SAS spinASaleCcUrgencyTimeBarInMin: ' + spinASaleCcUrgencyTimeBarInMin);
                                    var deadlineSpinAWheel = new Date(Date.parse(new Date()) + spinASaleCcUrgencyTimeBarInMin * 60 * 1000);
                                    var timerDiv = '<span style="font-weight: bold;"><span class="cc-spin-a-sale-minutes">' + spinASaleCcUrgencyTimeBarInMin + '</span>:<span class="cc-spin-a-sale-seconds">00</span></span>';
                                    //console.log('SAS timerDiv: ' + timerDiv);
                                    //console.log('SAS spinASaleCcUrgencyTimeBarText: ' + spinASaleCcUrgencyTimeBarText);
                                    spinASaleCcUrgencyTimeBarText = spinASaleCcUrgencyTimeBarText.replace('{{time}}', timerDiv);
                                    spinASaleCcUrgencyTimeBarText = spinASaleCcUrgencyTimeBarText.replace('{{ time }}', timerDiv);
                                    var urgencyTimeBarBackgroundColor = '#FFD400';
                                    if (response.records.store_settings.conversion_booster_settings.urgency_time_bar_background_color && response.records.store_settings.conversion_booster_settings.urgency_time_bar_background_color != null) {
                                        urgencyTimeBarBackgroundColor = response.records.store_settings.conversion_booster_settings.urgency_time_bar_background_color;
                                    }
                                    //console.log('SAS urgencyTimeBarBackgroundColor: ' + urgencyTimeBarBackgroundColor);
                                    carecartSpinnerJquery('#wheelify-couponwheel_notice_content').css("background-color", urgencyTimeBarBackgroundColor);
                                    var urgencyTimeBarTextColor = '#000000';
                                    if (response.records.store_settings.conversion_booster_settings.urgency_time_bar_text_color && response.records.store_settings.conversion_booster_settings.urgency_time_bar_text_color != null) {
                                        urgencyTimeBarTextColor = response.records.store_settings.conversion_booster_settings.urgency_time_bar_text_color;
                                    }
                                    //console.log('SAS urgencyTimeBarTextColor: ' + urgencyTimeBarTextColor);
                                    carecartSpinnerJquery('#wheelify-couponwheel_notice_content').css("color", urgencyTimeBarTextColor);
                                    if (response.records.store_settings.conversion_booster_settings.urgency_timer_bar_position_top_or_bottom == 'top') {
                                        carecartSpinnerJquery('#wheelify-couponwheel_notice_content').removeClass('bar-bottom').addClass('bar-top');
                                    }
                                    //console.log('SAS spinASaleCcUrgencyTimeBarText after Timer Replacement: ' + spinASaleCcUrgencyTimeBarText);
                                    //carecartSpinnerJquery('#wheelify-couponwheel_notice_timer').html(timerDiv);
                                    //carecartSpinnerJquery('#wheelify-spin_a_sale_cc_urgency_time_bar_text').html(spinASaleCcUrgencyTimeBarText);
                                    //console.log('SAS spinASaleCcUrgencyTimeBarText: ' + spinASaleCcUrgencyTimeBarText);
                                    //carecartSpinnerJquery('#wheelify-couponwheel_notice_content').show();
                                    //console.log('SAS deadlineSpinAWheel deadlineSpinAWheel: ' + deadlineSpinAWheel);
                                    //initializeClockSpinAWheel('cc-spin-a-sale-clock-div-preview', deadlineSpinAWheel);
                                }
                                /* *********************************************** End - Display Urgency Timer Bar **********************************	*/
                                /* *********************************************** Start - Conversion Booster Progress Bar **********************************	*/
                                if (response.records.store_settings.conversion_booster_settings != null && response.records.store_settings.conversion_booster_settings.conversion_booster_show_offers_claimed != null && parseInt(response.records.store_settings.conversion_booster_settings.conversion_booster_show_offers_claimed) == 1) {
                                    console.log('SAS Conversion Booster Progress Bar is Active');
                                    carecartSpinnerJquery('.wheelify-cc-spin-a-sale-spinner-progress-bar').css("visibility", "visible");
                                    carecartSpinnerJquery('.wheelify-cc-spin-a-sale-spinner-progress-bar-inner').width(response.records.store_settings.conversion_booster_settings.conversion_booster_percentage_offers_claimed + '%');
                                    carecartSpinnerJquery('.wheelify-cc-spin-a-sale-spinner-progress-bar-inner').css({ "background-color": response.records.store_settings.conversion_booster_settings.conversion_booster_progress_bar_color, "display": "block" });
                                    carecartSpinnerJquery('.wheelify-cc-spin-a-sale-couponwheel_offers_text').text(response.records.store_settings.conversion_booster_settings.conversion_booster_offers_claimed_text);
                                }
                                /* *********************************************** End - Conversion Booster Progress Bar **********************************	*/
                                /* *********************************************** Start - Anti-Cheat Shield Settings **********************************	*/
                                if (response.records.store_settings.anti_cheat_engine_settings != null && (parseInt(response.records.store_settings.anti_cheat_engine_settings.anti_cheat_engine_limit_spin_by_cookies) == 1 || parseInt(response.records.store_settings.anti_cheat_engine_settings.anti_cheat_engine_limit_spin_by_email) == 1 || parseInt(response.records.store_settings.anti_cheat_engine_settings.anti_cheat_engine_limit_spin_by_ip_address) == 1)) {
                                    window.localStorage.setItem('cc-sas-spinner-anti-cheat-shield', 1);
                                    console.log('SAS  Anti-Cheat Shield is Active');
                                    //console.log(response.records.store_settings.anti_cheat_engine_settings.anti_cheat_engine_spin_limit_quota_text);
                                    carecartSpinnerJquery('#wheelify-cc-spin-a-sale-already-used-spin-quota p').text(response.records.store_settings.anti_cheat_engine_settings.anti_cheat_engine_spin_limit_quota_text);
                                }
                                /* *********************************************** End - Anti-Cheat Shield Settings **********************************	*/

                            }
                            var storeBgColor = response.records.store_settings.spinner_bg_color;
                            carecartSpinnerJquery('#wheelify-spin_a_sale_cc_store_front_module').css('background-color', storeBgColor);
                            carecartSpinnerJquery('#wheelify-spin-trigger-cc span').css('background-color', storeBgColor);
                            carecartSpinnerJquery('#wheelify-spin-trigger-cc img').css('background', storeBgColor);
                            carecartSpinnerJquery('.wheelify-content-spinner').css('background-color', storeBgColor);
                            carecartSpinnerJquery('.wheelify-content-spinner').css('background-size', 'cover');
                            carecartSpinnerJquery('.wheelify-content-spinner').css('background-repeat', 'no-repeat');
                            carecartSpinnerJquery('.wheelify-content-spinner').css('background-position', 'center');
                            var closeCrossColor = response.records.store_settings.spinner_close_cross_color;
                            carecartSpinnerJquery('#spin_a_sale_cc_store_front_module_close_button').find('i.fa-times').css('color', closeCrossColor);
                            //#wheelify-spin_a_sale_cc_store_front_module .wheelify-content-spinner{background-color: black;}
                            //************************************ Change Spinner Color if NOT default of Spinner i-e #FF0000 ****************************************
                            var spinnerPegColor = response.records.store_settings.spinner_peg_color;
                            if (response.records.store_settings.spinner_peg_color && spinnerPegColor != "" && spinnerPegColor != null && spinnerPegColor != "#FF0000") {
                                carecartSpinnerJquery('.peg').css('fill', spinnerPegColor);
                            }
                            //************************************ Change Try Your Luck Background Color if NOT default i-e #FFFFFF ****************************************
                            var tryYourLuckBgColor = response.records.store_settings.try_luck_bg_color;
                            if (response.records.store_settings.try_luck_bg_color && tryYourLuckBgColor != "" && tryYourLuckBgColor != null && tryYourLuckBgColor != "#FFFFFF") {
                                carecartSpinnerJquery('.btn-submit-form').css('background-color', tryYourLuckBgColor);
                            }
                            //************************************ Change Try Your Luck Text Color if NOT default i-e #384F66 ****************************************
                            var tryYourLuckTextColor = response.records.store_settings.try_luck_text_color;
                            if (response.records.store_settings.try_luck_text_color && tryYourLuckTextColor != "" && tryYourLuckTextColor != null && tryYourLuckTextColor != "#384F66") {
                                carecartSpinnerJquery('.btn-submit-form').css('color', tryYourLuckTextColor);
                            }
                            /* ************************************** Display Background Image - Start *********************************************************** */
                            if (response.records.store_settings.spinner_bg_image && response.records.store_settings.spinner_bg_image != "" && response.records.store_settings.spinner_bg_image != null) {
                                // Check For desktop/Mobile
                                var spinnerBgImage = '';
                                (function (a) {
                                    (carecartSpinnerJquery.browser = carecartSpinnerJquery.browser || {}).mobile = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))
                                })(navigator.userAgent || navigator.vendor || window.opera);

                                if (carecartSpinnerJquery.browser.mobile) {
                                    spinnerBgImage = response.records.store_settings.spinner_bg_mobile_image;
                                } else {
                                    spinnerBgImage = response.records.store_settings.spinner_bg_image;
                                }
                                
                                var themeBgImageURL = CDN_WHEELIFY_URL + spinnerBgImage;

                                carecartSpinnerJquery('.wheelify-content-spinner').css('background-image', 'url(' + themeBgImageURL + ')');
                            } else {
                                if(response.records.store_settings.spinner_theme && response.records.store_settings.spinner_theme == 'customTheme') {
                                    var windowWidth = window.screen.width < window.outerWidth ? window.screen.width : window.outerWidth;
                               
                                    if(response.records.store_settings.spinner_background_image_url)
                                    {
                                        var defaultThemeBgImage = response.records.store_settings.spinner_background_image_url;
                                        carecartSpinnerJquery('.wheelify-content-spinner').css('background-image', 'url(' + defaultThemeBgImage + ')');
                                        window.localStorage.setItem("spinner_background_image_url_desktop", defaultThemeBgImage);
                                    }

                                    if(response.records.store_settings.spinner_background_image_url_mobile)
                                    {
                                        var isMobile = false; //initiate as false
                                        // device detection
                                        if (windowWidth < 575) {                                        
                                            isMobile = true;
                                            console.log('Mobile View');
                                            var defaultThemeBgImage = response.records.store_settings.spinner_background_image_url_mobile;
                                            carecartSpinnerJquery('.wheelify-content-spinner').css('background-image', 'url(' + defaultThemeBgImage + ')');
                                            window.localStorage.setItem("spinner_background_image_url_mobile", defaultThemeBgImage);
                                        } else {
                                            console.log('Not Mobile View');
                                        }
                                        
                                        var windowSize = window.matchMedia("(max-width: 575px)")
                                        myFunction(windowSize) // Call listener function at run time
                                        windowSize.addListener(myFunction) // Attach listener function on state changes
                                    } else {
                                        if (windowWidth < 575) {                                        
                                            var defaultThemeBgImage = response.records.store_settings.spinner_background_image_url_mobile;
                                            carecartSpinnerJquery('.wheelify-content-spinner').css('background-image', 'url(' + defaultThemeBgImage + ')');
                                            window.localStorage.setItem("spinner_background_image_url_mobile", defaultThemeBgImage);
                                        } 
                                        
                                        var windowSize = window.matchMedia("(max-width: 575px)")
                                        myFunction(windowSize) //Call listener function at run time
                                        windowSize.addListener(myFunction) // Attach listener function on state changes
                                    }
                                }
                               
                            }
                            /* ************************************** Display Background Image - End *********************************************************** */
                            // if (Shopify.shop == 'srnsmart.myshopify.com') {
                            //     carecartSpinnerJquery('#customer_login_link').append('<div class="customer-login-links-new"><a href="#." id="cc-spin-a-wheel-open-spinner-mate">Spin to win</a></div>');
                            //     //console.log('SAS In srnsmart.myshopify.com');

                            //     carecartSpinnerJquery("#cc-spin-a-wheel-open-spinner-mate").click(function () {
                            //         carecartSpinnerJquery('#wheelify-spin-trigger-cc').click();
                            //     });
                            // }
                        }
                    } else {
                        console.log('SAS ' + response._metadata.message);
                    }
                    if (response.records.store_settings.conversion_booster_settings != null && response.records.store_settings.conversion_booster_settings.is_urgency_timer_bar_enabled != null && parseInt(response.records.store_settings.conversion_booster_settings.is_urgency_timer_bar_enabled) == 1 && window.localStorage.getItem("cc-sas-spinner-copy-button-clicked") == 1) {
                        couponAndMsgAreSetThenLoad();
                    }
                }

                function myFunction(windowSize) {
                    
                    console.log(windowSize);
                    console.log(localStorage.getItem("spinner_background_image_url_desktop"));
                    console.log(localStorage.getItem("spinner_background_image_url_mobile"));
                    
                    if (windowSize.matches) {                                                
                        carecartSpinnerJquery('.wheelify-content-spinner').css('background-image', 'url(' + localStorage.getItem("spinner_background_image_url_mobile") + ')');
                    } else {
                        carecartSpinnerJquery('.wheelify-content-spinner').css('background-image', 'url(' + localStorage.getItem("spinner_background_image_url_desktop") + ')');
                    }
                }


                function shakeVertical(div, interval=100, distance, times=6){
                    for(var iter=0;iter<(times+1);iter++){
                        carecartSpinnerJquery(div).animate({ "bottom": ((iter%2==0 ? distance : distance-1))+"vh"}, interval);
                    }
                    carecartSpinnerJquery(div).animate({ "bottom": distance+"vh"}, interval);
                }

                function displaySpinnerOnTigger() {
                    carecartSpinnerJquery("#wheelify-spin-trigger-cc").click();
                }
                /* Post Data to Server */

                function postImpressionData() {
                    carecartSpinnerJquery.ajax({
                        url: API_URL + "store-front-api/post-impression-information",
                        type: 'POST',
                        data: {
                            shop: "www.dev-site-1x3730.wix-dev-center-test.org/",
                            postImpression: 'postImpression',
                            campaignId: campaignId,              // Ab Test Module
                            abTestId: abTestId,              // Ab Test Module
                            abTestVariationId: abTestVariationId // Ab Test Module
                        },
                        crossDomain: true,
                        dataType: "json",
                        success: function (response) {
                            if (response.result) {
                                console.log('SAS Impression is post successfully');
                            }
                        },
                        error: function (error) {
                            //console.log('SAS Error in impression post');
                            //console.log('SAS Error: ' + error);
                        }
                    });
                }

                function postSubscribersInformation(coupon = null, result = null) {

                    var customerName = carecartSpinnerJquery('#cc-spinner-full-name').val();
                    var customerEmail = carecartSpinnerJquery('#cc-spinner-email').val();
                    var customerPhoneNumber = carecartSpinnerJquery('#cc-spinner-phone-number').val();
                    var customerPhoneNumberCountry = carecartSpinnerJquery('.iti__active').attr('data-country-code');
                    var customerPhoneNumberCountryCode = carecartSpinnerJquery('.iti__active').attr('data-dial-code');
                    console.log('customerPhoneNumberCountry');
                    console.log(customerPhoneNumberCountry);
                    console.log(customerPhoneNumberCountryCode);
                    var isConsent = (carecartSpinnerJquery('#cc-spin-a-sale-consent-checkbox').prop('checked') == true) ? 'consent_accepted' : 'consent_rejected';
                    var couponUsed = coupon;
                    var winResult = result;

                    var customerInformation = {
                        name: customerName,
                        email: customerEmail,
                        phone: customerPhoneNumber,
                        country: customerPhoneNumberCountry,
                        countryCode: customerPhoneNumberCountryCode,
                        isConsent: isConsent,
                        couponUsed: couponUsed,
                        winResult: winResult
                    }
                    carecartSpinnerJquery('#wheelify-cc-spin-a-sale-loader-on-click').hide();
                    console.log('SAS customerInformation: ' + customerInformation.name + ' ' + customerInformation.email);
                    setSpinCouponLoadTime();
                    carecartSpinnerJquery.ajax({
                        url: API_URL + "store-front-api/post-customer-information",
                        type: 'POST',
                        data: {
                            shop: "www.dev-site-1x3730.wix-dev-center-test.org/",
                            customerInformation: customerInformation,
                            campaignId: campaignId, // Ab Test Module
                            abTestId: abTestId,     // Ab Test Module
                            abTestVariationId: abTestVariationId  // Ab Test Module
                        },
                        crossDomain: true,
                        dataType: "json",
                        success: function (response) {
                            if (response.result) {
                                updateCachedTime();
                                console.log('SAS User information is posted successfully');
                            }
                        },
                        error: function (error) {
                            console.log('SAS Error in impression post');
                            console.log('SAS Error: ' + error);
                        }
                    });

                    /******** Klaviyo Integration ***********/

                    if (carecartSpinnerJquery('#cc-spin-a-sale-consent-checkbox').prop('checked') == true) {
                        carecartSpinnerJquery.ajax({
                            url: API_URL + "store-front-api/klaviyo/check-klaviyo-status",
                            type: 'POST',
                            data: {
                                shop: "www.dev-site-1x3730.wix-dev-center-test.org/",
                            },
                            crossDomain: true,
                            dataType: "json",
                            success: function (response) {
                                if (response.records == 1) {
                                    var kCustomerName = carecartSpinnerJquery('#cc-spinner-full-name').val();
                                    var kCustomerEmail = carecartSpinnerJquery('#cc-spinner-email').val();
                                    carecartSpinnerJquery.ajax({
                                        url: API_URL + "store-front-api/klaviyo/add-member-to-list",
                                        type: 'POST',
                                        data: {
                                            name: kCustomerName,
                                            email: kCustomerEmail,
                                            shop: "www.dev-site-1x3730.wix-dev-center-test.org/"
                                        },
                                        crossDomain: true,
                                        dataType: "json",
                                        success: function (response) {
                                            console.log('Success');
                                        },
                                        error: function (error) {
                                            console.log('SAS Error in impression post');
                                            console.log('SAS Error: ' + error);
                                        }
                                    });
                                }
                            },
                            error: function (error) {
                                console.log('SAS Error in impression post');
                                console.log('SAS Error: ' + error);
                            }
                        });
                    }

                    /***** Klaviyo Itegration ******/

                    if (carecartSpinnerJquery('#cc-spin-a-sale-consent-checkbox').prop('checked') == true) {
                        console.log('Trigger Mailchimp list');
                        carecartSpinnerJquery.ajax({
                            url: API_URL + "store-front-api/post-mailchimp-email-post-list",
                            type: 'POST',
                            data: {
                                shop: "www.dev-site-1x3730.wix-dev-center-test.org/",
                                customerEmail: customerInformation.email,
                            },
                            crossDomain: true,
                            dataType: "json",
                            success: function (response) {
                                //if (response.result) {
                                if (response._metadata.message) {
                                    //console.log('SAS User information posted successfully to Mailchimp');
                                    console.log('SAS ' + response._metadata.message);
                                }
                            },
                            error: function (error) {
                                console.log('SAS Mailchimp data not posted');
                                //console.log('SAS Error: ' + error);
                            }
                        });
                    }
                }
                /*
                                function checkCachedTimeForCoupon(){
                                    var globalSettingsDataCachedTime = window.localStorage.getItem('spinnerCachedTime');
                                    if(globalSettingsDataCachedTime!==undefined  && globalSettingsDataCachedTime!==null){
                                        var currentTime = new Date();
                                        var previousTime = new Date(globalSettingsDataCachedTime);
                                        var msec = parseInt(currentTime - previousTime);
                                        var minutes = parseInt(Math.floor(msec / 60000));
                                        console.log('SAS Time : '+minutes);
                                        if(minutes<=2){
                                            return false;
                                        }
                
                                    }
                                    return true;
                
                                }
                */

                function updateCachedTime() {
                    var timeNow = new Date();
                    window.localStorage.setItem('cc-sas-spinner-cached-time', timeNow);
                }

                /* Post Data to Server END */

                function ifCachedData() {
                    var settingsCachedTime = window.localStorage.getItem('cc-sas-spinner-ajax-cached-time');
                    var settingsCachedData = window.localStorage.getItem('cc-sas-spinner-ajax-cached-data');
                    if (settingsCachedTime !== undefined && settingsCachedTime !== null && settingsCachedData !== undefined && settingsCachedData !== null) {
                        console.log('SAS Settings cached data exist ');
                        var previousTime = new Date(settingsCachedTime);
                        var msec = parseInt(d - previousTime);
                        var minutes = parseInt(Math.floor(msec / 60000));
                        console.log('SAS Settings cached Time : ' + minutes);
                        if (minutes <= 30) {
                            //console.log('SAS Get settings from cached data');
                            console.log('SAS Remaining time: ' + (30 - minutes));
                            return true;
                        }
                    }
                    return false;
                }

                function checkHomePageCcSpinASale() {
                    //console.log('SAS inside checkHomePageCcSpinASale');
                    let status = (window.location.pathname == "/");
                    return status;
                }

                function checkCollectionsCcSpinASale() {
                    //console.log('SAS inside checkCollectionsCcSpinASale');
                    var is_page = !(!window.location.pathname.match("(.*)/collections/(.*)") && !window.location.pathname.match("(.*)/collections") || window.location.pathname.match("(.*)/products/(.*)") || window.location.pathname.match("(.*)/products"));
                    return is_page;
                }

                function checkBlogPageCcSpinASale() {
                    //console.log('SAS inside checkBlogPageCcSpinASale');
                    var is_page = !(!window.location.pathname.match("(.*)/blogs/(.*)") && !window.location.pathname.match("(.*)/blogs"));
                    return is_page;
                }

                function checkProductCcSpinASale() {
                    //console.log('SAS inside checkProductCcSpinASale');
                    var is_page = !(!window.location.pathname.match("(.*)/products/(.*)"));
                    return is_page;
                }

                function checkCartCcSpinASale() {
                    //console.log('SAS inside checkCartCcSpinASale');
                    var is_page = !(!window.location.pathname.match("(.*)/cart/(.*)") && !window.location.pathname.match("(.*)/cart"));
                    return is_page;
                }

                function checkThanksYouCcSpinASale() {
                    //console.log('SAS inside checkThanksYouCcSpinASale');
                    var is_page = !(!window.location.pathname.match("(.*)/orders/(.*)") && !window.location.pathname.match("(.*)/orders") || window.location.pathname.match("(.*)/checkouts/(.*)") || window.location.pathname.match("(.*)/thank_you"));
                    //console.log(is_page);
                    return is_page;
                }

                function checkIfAnyOtherPage() {
                    //console.log('SAS inside checkIfAnyOtherPage');
                    let status = false;
                    if (checkHomePageCcSpinASale()) {
                        console.log('SAS valid homepage');
                        //return true;
                        status = true;
                    }
                    if (checkCollectionsCcSpinASale()) {
                        console.log('SAS valid collections page');
                        //return true;
                        status = true;
                    }
                    if (checkBlogPageCcSpinASale()) {
                        console.log('SAS valid blog page');
                        //return true;
                        status = true;
                    }
                    if (checkProductCcSpinASale()) {
                        console.log('SAS valid products page');
                        //return true;
                        status = true;
                    }
                    if (checkCartCcSpinASale()) {
                        console.log('SAS valid cart page');
                        //return true;
                        status = true;
                    }
                    if (checkThanksYouCcSpinASale()) {
                        console.log('SAS valid Thank You page');
                        //return true;
                        status = true
                    }

                    return status;
                }
                function checkCustomUrls(urls) {
                    let customPagesStatus = false;
                    if (urls !== null) {
                        for (let i = 0; i < urls.length; i++) {
                            let status = checkStoreSpecificUrlCcSpinASale(urls[i]);
                            console.log("status of current page is =>>" + status);
                            if (status) {
                                customPagesStatus = true;
                                break;
                            }
                        }
                    }
                    return customPagesStatus;
                }
                function isActiveOnAnyPages(response) {
                    let flag = true;
                    if (parseInt(response.records.store_settings.settings_data.display_home_page_enabled) == 0) {
                        flag = false;
                    }
                    if (parseInt(response.records.store_settings.settings_data.display_collections_page_enabled) == 0) {
                        flag = false;
                    }
                    if (parseInt(response.records.store_settings.settings_data.display_blog_posts_page_enabled) == 0) {
                        flag = false;
                    }
                    if (parseInt(response.records.store_settings.settings_data.display_products_page_enabled) == 0) {
                        flag = false;
                    }
                    if (parseInt(response.records.store_settings.settings_data.display_cart_page_enabled) == 0) {
                        flag = false;
                    }
                    if (parseInt(response.records.store_settings.settings_data.display_thank_you_page_enabled) == 0) {
                        flag = false;
                    }
                    return flag;
                }

                function checkStoreSpecificUrlCcSpinASale(url) {
                    //console.log('SAS inside checkStoreSpecificUrlCcSpinASale');
                    var is_page = true;
                    var currentPageUrl = window.location.href;
                    //console.log('SAS url: ' + url);
                    //console.log('SAS currentPageUrl: ' + currentPageUrl);

                    if (url == currentPageUrl) {
                        is_page = true;
                    }
                    else {
                        is_page = false;
                    }
                    //console.log('SAS is_page:' + is_page);
                    return is_page;
                }
                if (!getParameterByName('cc-show-spin-a-sale-test')) {
                    /*
                                        if(Shopify.shop == 'the-happy-scalp.myshopify.com')
                                        {
                                            if(window.location.href != 'https://thehappyscalp.com/')
                                            {
                                                console.log("SAS Spinner Allowed ONLY on home page for thehappyscalp.com");
                                                return;
                                            }
                                        }
                    */
                    /*
                                        if (ifCachedData()) {
                                            console.log('SAS In Cached Data:');
                                            var cachedData = JSON.parse(window.localStorage.getItem('cc-sas-spinner-ajax-cached-data'));
                                            pupulateData(cachedData);
                                        } else {
                    */

                    var ccCurPage = '';
                    if (checkHomePageCcSpinASale()) {
                        ccCurPage = 'home';
                    } else if (checkCollectionsCcSpinASale()) {
                        ccCurPage = 'collections';
                    } else if (checkBlogPageCcSpinASale()) {
                        ccCurPage = 'blogs';
                    } else if (checkProductCcSpinASale()) {
                        ccCurPage = 'products';
                    } else if (checkCartCcSpinASale()) {
                        ccCurPage = 'cart';
                    } else if (checkThanksYouCcSpinASale()) {
                        ccCurPage = 'thankYou';
                    } else if (!checkIfAnyOtherPage()) {
                        ccCurPage = 'otherPage';
                    }

                    carecartSpinnerJquery.ajax({
                        url: API_URL + "store-front-api/get-store-information",
                        type: 'GET',
                        data: {
                            shop: 'www.dev-site-1x3730.wix-dev-center-test.org/',
                            ccPage: ccCurPage
                        },
                        crossDomain: true,
                        contentType: "application/json",
                        dataType: "json",
                        success: function (response) {
                            if (response.records !== null) {
                                campaignId = response.records.campaign_id; // Campaign Module
                                if (response.records.parent_campaign_id && response.records.parent_campaign_id !== "" && response.records.parent_campaign_id !== "undefined") {
                                    campaignId = response.records.parent_campaign_id; // Ab Test Module
                                }
                                window._campaignId = campaignId;
                                abTestId = response.records.ab_test_id; // Ab Test Module
                                abTestVariationId = response.records.ab_test_variation_id; // Ab Test Module

                                /* setTimeout(function () {
                                    window.localStorage.setItem('cc-sas-spinner-ajax-cached-time', d);
                                    window.localStorage.setItem('cc-sas-spinner-ajax-cached-data', JSON.stringify(response));
                                    pupulateData(response);
                                }, parseInt(response.records.store_settings.settings_data.delay_time) * 1000); */

                                setTimeout(function () {
                                    window.localStorage.setItem('cc-sas-spinner-ajax-cached-time', d);
                                    window.localStorage.setItem('cc-sas-spinner-ajax-cached-data', JSON.stringify(response));
                                    pupulateData(response);
                                }, 1000);
                            }
                        },
                        error: function (error) {
                            console.log('SAS Error in Spin A Sale request');
                            console.log('SAS Error: ' + error);
                        },
                    });
                    // }
                }


                carecartSpinnerJquery("body").on("click", "#spin_a_sale_cc_store_front_module_close_button", function () {
                    if (!getParameterByName('cc-show-spin-a-sale-test')) {
                        updateCachedTime();
                    }
                    hideSpinASaleModule();
                });

                carecartSpinnerJquery("body").on("click", "#wheelify-spin-trigger-cc", function () {
                    var type = 'triggered';
                    showSpinASaleModule(type);
                    displayCouponOverSpinner();
                    //console.log('wheelify-spin-trigger-cc Triggered');
                    //showSpinASaleModule();
                });

                carecartSpinnerJquery("body").on("click", "#wheelify-couponwheel_notice_close_btn", function () {
                    //arecartSpinnerJquery("#wheelify-couponwheel_notice_close_btn").click(function () {
                    //console.log('wheelify-couponwheel_notice_close_btn Clicked');
                    carecartSpinnerJquery('#wheelify-couponwheel_notice_content').hide();
                    window.localStorage.setItem('cc-sas-spinner-hide-timer-bar', 1);
                });

                /*
                                 * Test on your store flow
                                 * cc-show-spin-a-sale-test=yes
                                 * https://freeshippingbar2.myshopify.com/?cc-show-spin-a-sale-preview=yes
                */
                if (getParameterByName('cc-show-spin-a-sale-test')) {

                    carecartSpinnerJquery("body").prepend('<div id="test-spin-loader-dev" style="\n' +
                        '    z-index: 99999999;\n' +
                        '    margin-top: 9%;\n' +
                        '    /* position: fixed; */\n' +
                        '    position: fixed;\n' +
                        '    /* center the element */\n' +
                        '    right: 0;\n' +
                        '    left: 0;\n' +
                        '    margin-right: auto;\n' +
                        '    margin-left: auto;\n' +
                        '    /* give it dimensions */\n' +
                        '    min-height: 10em;\n' +
                        '    width: 90%;\n' +
                        '    "><img src="https://app-spinner.carecart.io/library/loader.gif?v1.0.0" style=" display: block; margin: auto; width: 50px; height: 50px;"><h4 style="text-align:center;"> Please wait</h4></div>');


                    const ccQueryString = window.location.search;
                    const ccUrlParams = new URLSearchParams(ccQueryString);
                    const ccCampaignId = ccUrlParams.get('campaign-id')

                    carecartSpinnerJquery.ajax({
                        url: API_URL + "store-front-api/get-store-information-test",
                        type: 'GET',
                        data: {
                            shop: "www.dev-site-1x3730.wix-dev-center-test.org/",
                            type: 'test_spinner',
                            campaignId: ccCampaignId
                        },
                        crossDomain: true,
                        contentType: "application/json",
                        dataType: "json",
                        success: function (response) {
                            console.log('SAS test on store Success ');
                            if (response && response._metadata && response._metadata.outcome && response._metadata.outcome == "SUCCESS") {
                                console.log('SAS TEST Success Response');
                                // check if enalbed on mobile
                                var w = carecartSpinnerJquery(window).width();
                                const is_enabled_on_mobile = (typeof response.records.store_settings.settings_data.is_mobile_enabled === 'undefined') ? 1 : parseInt(response.records.store_settings.settings_data.is_mobile_enabled);
                                if (w < 600 && is_enabled_on_mobile === 0) {
                                    console.log('SAS is disabled on mobile');
                                    carecartSpinnerJquery("#test-spin-loader-dev").remove();
                                    return;
                                }
                                /* Check If Module template exist*/
                                if (response.records.store_front_template) {
                                    console.log('SAS front template exist');
                                    /* Append template*/
                                    carecartSpinnerJquery("body").append(response.records.store_front_template);
                                    /*********** Wheel Margin ************/
                               
                                carecartSpinnerJquery("head").append(
                                    '<style type="text/css"> @media only screen and (max-width: 575px) {#wheelify-spin_a_sale_cc_store_front_module.wheelify-wrapper-spinner.popupview .wheelify-ContentRight {min-height: 468px;}} </style>'
                                );  
                                carecartSpinnerJquery("head").append(
                                    '<style type="text/css"> @media only screen and (max-width: 575px) {#wheelify-spin_a_sale_cc_store_front_module .wheelify-ContentRight{ min-height: 560px;}} </style>'
                                );

                                // if(Shopify.shop == 'happilo-international-private-limited.myshopify.com') {
                                //     carecartSpinnerJquery("head").append(
                                //         '<style type="text/css"> @media only screen and (max-width: 575px) {#wheelify-spin_a_sale_cc_store_front_module.wheelify-wrapper-spinner.popupview .wheelify-ContentRight {height: 500px !important;}} </style>'
                                //     );
                                //     carecartSpinnerJquery("head").append(
                                //         '<style type="text/css"> @media only screen and (max-width: 575px) {#wheelify-spin_a_sale_cc_store_front_module.wheelify-wrapper-spinner.popupview{height: 650px !important;}} </style>'
                                //     );  
                                // }

                                   /*********** Phone Number Collection ************/

                                    //var phoneNumber = document.querySelector("#cc-spinner-phone-number");

                                    scriptInjection(API_URL + "public/phone/js/intlTelInput.js", function () {
                                        var phoneNumber = document.querySelector("#cc-spinner-phone-number");

                                        var initialCountry = '';
                                        if (typeof (response.records.store_settings.settings_data.phone_number_country) != 'undefined' &&
                                            response.records.store_settings.settings_data.phone_number_country != null &&
                                            response.records.store_settings.settings_data.phone_number_country != '') {
                                            initialCountry = response.records.store_settings.settings_data.phone_number_country.trim();
                                        }

                                        if (phoneNumber != null) {
                                            var iti = window.intlTelInput(phoneNumber, {
                                                utilsScript: API_URL + "public/phone/js/utils.js",
                                                initialCountry: initialCountry == '' ? 'US' : initialCountry
                                            });

                                            phoneNumber.value = iti.getSelectedCountryData().dialCode;

                                            phoneNumber.addEventListener("countrychange", function () {
                                                console.log(iti.getSelectedCountryData());
                                                phoneNumber.value = iti.getSelectedCountryData().dialCode;
                                            });


                                            if (typeof (response.records.store_settings.settings_data.international_phone_number_mandatory) != 'undefined' &&
                                                response.records.store_settings.settings_data.international_phone_number_mandatory != null &&
                                                response.records.store_settings.settings_data.international_phone_number_mandatory == '0') {
                                                carecartSpinnerJquery('#cc-spinner-phone-number').closest('.iti--allow-dropdown').find('.iti__flag-container').css('cursor', 'default');
                                                carecartSpinnerJquery('#iti-0__country-listbox').addClass('forceHide');
                                                carecartSpinnerJquery('#cc-spinner-phone-number').closest('.iti--allow-dropdown').find('.iti__arrow').remove();
                                            }
                                        }

                                    });

                                    /* Append triggered button */
                                    
                                    if (response.records.store_settings.settings_data.is_triggered_enable && parseInt(response.records.store_settings.settings_data.is_triggered_enable) == 1) {
                                        carecartSpinnerJquery("body").append(response.records.store_front_trigger_button);
                                        // if ("our-little-hero.myshopify.com" == Shopify.shop) {
                                        //     carecartSpinnerJquery("#wheelify-spin-trigger-cc").css("display", "none");
                                        // }
                                        const settingsData = response.records.store_settings.settings_data;
                                        var tBtn = carecartSpinnerJquery('body').find('#wheelify-spin-trigger-cc');
                                    
                                        // Trigger Button Margin
                                        
                                        if(settingsData.button_position === 'middle_right' ) {
                                            let triggerBottom = settingsData.trigger_btn_margin_desktop / 3;
                                            triggerBottom === 0 ? triggerBottom =  8 : triggerBottom += 8;
                                            tBtn.css({
                                                right: '-45px', 
                                                bottom: triggerBottom+'vh',
                                                transform: 'rotate(270deg)'
                                            });
                                            if(carecartSpinnerJquery('#wheelify-spin-trigger-cc').hasClass('shake vtriggerButton_shake')){
                                                carecartSpinnerJquery('#wheelify-spin-trigger-cc').removeClass('shake vtriggerButton_shake');
                                                setInterval(function(){
                                                    shakeVertical('#wheelify-spin-trigger-cc', 50, triggerBottom, 10);
                                                }, 3000);
                                            }
                                        }

                                        else if(settingsData.button_position === 'middle_left' ) {
                                            let triggerBottom = settingsData.trigger_btn_margin_desktop / 3;
                                            triggerBottom === 0 ? triggerBottom =  8 : triggerBottom += 8;
                                            tBtn.css({
                                                left: '-45px',
                                                bottom: triggerBottom+'vh',
                                                transform: 'rotate(270deg)'
                                            });
                                            if(carecartSpinnerJquery('#wheelify-spin-trigger-cc').hasClass('shake vtriggerButton_shake')){
                                                carecartSpinnerJquery('#wheelify-spin-trigger-cc').removeClass('shake vtriggerButton_shake');
                                                setInterval(function(){
                                                    shakeVertical('#wheelify-spin-trigger-cc', 50, triggerBottom, 10);
                                                }, 3000);
                                            }
                                        }
                                        
                                        else if(settingsData.button_position === 'bottom_right' ) {
                                            let triggerBottom = settingsData.trigger_btn_margin_desktop / 3;
                                            triggerBottom === 0 ? triggerBottom =  8 : triggerBottom += 8;
                                            tBtn.css({
                                                bottom: triggerBottom+'vh',
                                                right: '20px'
                                            });
                                        }
                                        
                                        else if(settingsData.button_position === 'bottom_left' ) {
                                            let triggerBottom = settingsData.trigger_btn_margin_desktop / 3;
                                            triggerBottom === 0 ? triggerBottom =  8 : triggerBottom += 8;
                                            tBtn.css({
                                                bottom: triggerBottom+'vh',
                                                left: '20px'
                                            });
                                        }

                                        var windowWidth = window.screen.width < window.outerWidth ? window.screen.width : window.outerWidth;

                                        if (windowWidth < 575) {
                                            if(settingsData.button_position === 'middle_right' ) {
                                                let triggerBottom = settingsData.trigger_btn_margin_mobile / 3;
                                                triggerBottom === 0 ? triggerBottom =  15 : triggerBottom += 15;
                                                tBtn.css({
                                                    right: '-45px', 
                                                    bottom: triggerBottom+'vh',
                                                    transform: 'rotate(270deg)'
                                                });
                                            }
                                            
                                            else if(settingsData.button_position === 'middle_left' ) {
                                                let triggerBottom = settingsData.trigger_btn_margin_mobile / 3;
                                                triggerBottom === 0 ? triggerBottom =  15 : triggerBottom += 15;
                                                tBtn.css({
                                                    left: '-48px',
                                                    bottom: triggerBottom+'vh',
                                                    transform: 'rotate(270deg)'
                                                });
                                            }
                                            
                                            else if(settingsData.button_position === 'bottom_right' ) {
                                                let triggerBottom = settingsData.trigger_btn_margin_mobile / 4;
                                                triggerBottom === 0 ? triggerBottom =  10 : triggerBottom += 10;
                                                console.log(triggerBottom)
                                                tBtn.css({
                                                    bottom: triggerBottom+'vh',
                                                    right: '20px'
                                                });
                                            }
                                            
                                            else if(settingsData.button_position === 'bottom_left' ) {
                                                let triggerBottom = settingsData.trigger_btn_margin_mobile / 4;
                                                triggerBottom === 0 ? triggerBottom =  10 : triggerBottom += 10;
                                                tBtn.css({
                                                    bottom: triggerBottom+'vh',
                                                    left: '20px'
                                                });
                                            }
                                        }
                                    }
                                    else {
                                        carecartSpinnerJquery("body").append(response.records.store_front_trigger_button);
                                        var tBtn = carecartSpinnerJquery('body').find('#wheelify-spin-trigger-cc');
                                        tBtn.hide();
                                        //console.log('SAS spinner trigger button should display');
                                    }
                                    var storeBgColor = response.records.store_settings.spinner_bg_color;
                                    carecartSpinnerJquery('#wheelify-spin_a_sale_cc_store_front_module').css('background-color', storeBgColor);
                                    carecartSpinnerJquery('#wheelify-spin-trigger-cc span').css('background-color', storeBgColor);
                                    carecartSpinnerJquery('#wheelify-spin-trigger-cc img').css('background', storeBgColor);
                                    carecartSpinnerJquery('.wheelify-content-spinner').css('background-color', storeBgColor);
                                    carecartSpinnerJquery('.wheelify-content-spinner').css('background-size', 'cover');
                                    carecartSpinnerJquery('.wheelify-content-spinner').css('background-repeat', 'no-repeat');
                                    carecartSpinnerJquery('.wheelify-content-spinner').css('background-position', 'center');
                                    var closeCrossColor = response.records.store_settings.spinner_close_cross_color;
                                    carecartSpinnerJquery('#spin_a_sale_cc_store_front_module_close_button').find('i.fa-times').css('color', closeCrossColor);
                                    //************************************ Change Spinner Color if NOT default of Spinner i-e #FF0000 ****************************************
                                    var spinnerPegColor = response.records.store_settings.spinner_peg_color;
                                    if (response.records.store_settings.spinner_peg_color && spinnerPegColor != "" && spinnerPegColor != null && spinnerPegColor != "#FF0000") {
                                        carecartSpinnerJquery('.peg').css('fill', spinnerPegColor);
                                    }
                                    //************************************ Change Try Your Luck Background Color if NOT default i-e #FFFFFF ****************************************
                                    var tryYourLuckBgColor = response.records.store_settings.try_luck_bg_color;
                                    if (response.records.store_settings.try_luck_bg_color && tryYourLuckBgColor != "" && tryYourLuckBgColor != null && tryYourLuckBgColor != "#FFFFFF") {
                                        carecartSpinnerJquery('.btn-submit-form').css('background-color', tryYourLuckBgColor);
                                    }
                                    //************************************ Change Try Your Luck Text Color if NOT default i-e #384F66 ****************************************
                                    var tryYourLuckTextColor = response.records.store_settings.try_luck_text_color;
                                    if (response.records.store_settings.try_luck_text_color && tryYourLuckTextColor != "" && tryYourLuckTextColor != null && tryYourLuckTextColor != "#384F66") {
                                        carecartSpinnerJquery('.btn-submit-form').css('color', tryYourLuckTextColor);
                                    }
                                    console.log(" BG image")
                                    /* ************************************** Display Background Image - Start *********************************************************** */
                                    if (response.records.store_settings.spinner_bg_image && response.records.store_settings.spinner_bg_image != "" && response.records.store_settings.spinner_bg_image != null) {
                                        // Check For desktop/Mobile
                                        var spinnerBgImage = '';
                                        (function (a) {
                                            (carecartSpinnerJquery.browser = carecartSpinnerJquery.browser || {}).mobile = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))
                                        })(navigator.userAgent || navigator.vendor || window.opera);

                                        if (carecartSpinnerJquery.browser.mobile) {
                                            spinnerBgImage = response.records.store_settings.spinner_bg_mobile_image;
                                        } else {
                                            spinnerBgImage = response.records.store_settings.spinner_bg_image;
                                        }
                                        var themeBgImageURL = CDN_WHEELIFY_URL + spinnerBgImage;
                                        carecartSpinnerJquery('.wheelify-content-spinner').css('background-image', 'url(' + themeBgImageURL + ')');
                                    } else {
                                        if(response.records.store_settings.spinner_theme && response.records.store_settings.spinner_theme == 'customTheme') {
                                            var windowWidth = window.screen.width < window.outerWidth ? window.screen.width : window.outerWidth;
                                       
                                            if(response.records.store_settings.spinner_background_image_url)
                                            {
                                                var defaultThemeBgImage = response.records.store_settings.spinner_background_image_url;
                                                carecartSpinnerJquery('.wheelify-content-spinner').css('background-image', 'url(' + defaultThemeBgImage + ')');
                                                window.localStorage.setItem("spinner_background_image_url_desktop", defaultThemeBgImage);
                                            }
                                            console.log(" BG image")

                                            if(response.records.store_settings.spinner_background_image_url_mobile)
                                            {
                                                var isMobile = false; //initiate as false
                                                // device detection
                                                if (windowWidth < 575) {                                        
                                                    isMobile = true;
                                                    console.log('Mobile View');
                                                    var defaultThemeBgImage = response.records.store_settings.spinner_background_image_url_mobile;
                                                    carecartSpinnerJquery('.wheelify-content-spinner').css('background-image', 'url(' + defaultThemeBgImage + ')');
                                                    window.localStorage.setItem("spinner_background_image_url_mobile", defaultThemeBgImage);
                                                } else {
                                                    console.log('Not Mobile View');
                                                }
                                                
                                                var windowSize = window.matchMedia("(max-width: 575px)")
                                                myFunction(windowSize) // Call listener function at run time
                                                windowSize.addListener(myFunction) // Attach listener function on state changes
                                            } else {
                                                console.log(" BG image")

                                                if (windowWidth < 575) {                                        
                                                    var defaultThemeBgImage = response.records.store_settings.spinner_background_image_url_mobile;
                                                    carecartSpinnerJquery('.wheelify-content-spinner').css('background-image', 'url(' + defaultThemeBgImage + ')');
                                                    window.localStorage.setItem("spinner_background_image_url_mobile", defaultThemeBgImage);
                                                } 
                                                
                                                var windowSize = window.matchMedia("(max-width: 575px)")
                                                myFunction(windowSize) //Call listener function at run time
                                                windowSize.addListener(myFunction) // Attach listener function on state changes
                                            }
                                        }
                                       
                                    }
                                    /* ************************************** Display Background Image - End *********************************************************** */
                                    /* *********************************************** Start - Display Urgency Timer Bar **********************************	*/
                                if (response.records.store_settings.conversion_booster_settings != null && response.records.store_settings.conversion_booster_settings.is_urgency_timer_bar_enabled != null && parseInt(response.records.store_settings.conversion_booster_settings.is_urgency_timer_bar_enabled) == 1) {
                                    window.localStorage.setItem('urgencyTimerBarEnabled', 1);
                                    //console.log('SAS Urgency Bar is Active');
                                    //carecartSpinnerJquery('#wheelify-couponwheel_notice_content').show();
                                    var spinASaleCcUrgencyTimeBarTextHtml = '<span class="cc-spin-a-sale-clock-div" id="cc-spin-a-sale-clock-div-preview">' + response.records.store_settings.conversion_booster_settings.urgency_timer_bar_text + '</span>';
                                    carecartSpinnerJquery('#wheelify-spin_a_sale_cc_urgency_time_bar_text').html(spinASaleCcUrgencyTimeBarTextHtml);
                                    var spinASaleCcUrgencyTimeBarText = carecartSpinnerJquery('#wheelify-spin_a_sale_cc_urgency_time_bar_text').html();
                                    //var wonCouponCode = '<strong>' + window.localStorage.getItem('cc-sas-spinner-cached-coupon-code') + '</strong>';
                                    //spinASaleCcUrgencyTimeBarText = spinASaleCcUrgencyTimeBarText.replace('{{coupon_code}}',wonCouponCode);
                                    //console.log('SAS spinASaleCcUrgencyTimeBarText ' + spinASaleCcUrgencyTimeBarText);
                                    window.localStorage.setItem('urgencyTimerBarTimeInMin', response.records.store_settings.conversion_booster_settings.urgency_timer_bar_display_time_in_min);
                                    var spinASaleCcUrgencyTimeBarInMin = window.localStorage.getItem('urgencyTimerBarTimeInMin');
                                    //console.log('SAS spinASaleCcUrgencyTimeBarInMin: ' + spinASaleCcUrgencyTimeBarInMin);
                                    var deadlineSpinAWheel = new Date(Date.parse(new Date()) + spinASaleCcUrgencyTimeBarInMin * 60 * 1000);
                                    var timerDiv = '<span style="font-weight: bold;"><span class="cc-spin-a-sale-minutes">' + spinASaleCcUrgencyTimeBarInMin + '</span>:<span class="cc-spin-a-sale-seconds">00</span></span>';
                                    //console.log('SAS timerDiv: ' + timerDiv);
                                    //console.log('SAS spinASaleCcUrgencyTimeBarText: ' + spinASaleCcUrgencyTimeBarText);
                                    spinASaleCcUrgencyTimeBarText = spinASaleCcUrgencyTimeBarText.replace('{{time}}', timerDiv);
                                    spinASaleCcUrgencyTimeBarText = spinASaleCcUrgencyTimeBarText.replace('{{ time }}', timerDiv);
                                    var urgencyTimeBarBackgroundColor = '#FFD400';
                                    if (response.records.store_settings.conversion_booster_settings.urgency_time_bar_background_color && response.records.store_settings.conversion_booster_settings.urgency_time_bar_background_color != null) {
                                        urgencyTimeBarBackgroundColor = response.records.store_settings.conversion_booster_settings.urgency_time_bar_background_color;
                                    }
                                    //console.log('SAS urgencyTimeBarBackgroundColor: ' + urgencyTimeBarBackgroundColor);
                                    carecartSpinnerJquery('#wheelify-couponwheel_notice_content').css("background-color", urgencyTimeBarBackgroundColor);
                                    var urgencyTimeBarTextColor = '#000000';
                                    if (response.records.store_settings.conversion_booster_settings.urgency_time_bar_text_color && response.records.store_settings.conversion_booster_settings.urgency_time_bar_text_color != null) {
                                        urgencyTimeBarTextColor = response.records.store_settings.conversion_booster_settings.urgency_time_bar_text_color;
                                    }
                                    //console.log('SAS urgencyTimeBarTextColor: ' + urgencyTimeBarTextColor);
                                    carecartSpinnerJquery('#wheelify-couponwheel_notice_content').css("color", urgencyTimeBarTextColor);
                                    if (response.records.store_settings.conversion_booster_settings.urgency_timer_bar_position_top_or_bottom == 'top') {
                                        carecartSpinnerJquery('#wheelify-couponwheel_notice_content').removeClass('bar-bottom').addClass('bar-top');
                                    }
                                    //console.log('SAS spinASaleCcUrgencyTimeBarText after Timer Replacement: ' + spinASaleCcUrgencyTimeBarText);
                                    //carecartSpinnerJquery('#wheelify-couponwheel_notice_timer').html(timerDiv);
                                    //carecartSpinnerJquery('#wheelify-spin_a_sale_cc_urgency_time_bar_text').html(spinASaleCcUrgencyTimeBarText);
                                    //console.log('SAS spinASaleCcUrgencyTimeBarText: ' + spinASaleCcUrgencyTimeBarText);
                                    //carecartSpinnerJquery('#wheelify-couponwheel_notice_content').show();
                                    //console.log('SAS deadlineSpinAWheel deadlineSpinAWheel: ' + deadlineSpinAWheel);
                                    //initializeClockSpinAWheel('cc-spin-a-sale-clock-div-preview', deadlineSpinAWheel);
                                }
                                /* *********************************************** End - Display Urgency Timer Bar **********************************	*/
                                /* *********************************************** Start - Conversion Booster Progress Bar **********************************	*/
                                if (response.records.store_settings.conversion_booster_settings != null && response.records.store_settings.conversion_booster_settings.conversion_booster_show_offers_claimed != null && parseInt(response.records.store_settings.conversion_booster_settings.conversion_booster_show_offers_claimed) == 1) {
                                    console.log('SAS Conversion Booster Progress Bar is Active');
                                    carecartSpinnerJquery('.wheelify-cc-spin-a-sale-spinner-progress-bar').css("visibility", "visible");
                                    carecartSpinnerJquery('.wheelify-cc-spin-a-sale-spinner-progress-bar-inner').width(response.records.store_settings.conversion_booster_settings.conversion_booster_percentage_offers_claimed + '%');
                                    carecartSpinnerJquery('.wheelify-cc-spin-a-sale-spinner-progress-bar-inner').css({ "background-color": response.records.store_settings.conversion_booster_settings.conversion_booster_progress_bar_color, "display": "block" });
                                    carecartSpinnerJquery('.wheelify-cc-spin-a-sale-couponwheel_offers_text').text(response.records.store_settings.conversion_booster_settings.conversion_booster_offers_claimed_text);
                                }
                                /* *********************************************** End - Conversion Booster Progress Bar **********************************	*/
                                    /* ************************************** Display Spinner if percentage scroll is enabled  - START *********************************************************** */
                                    if (response.records.store_settings.settings_data.is_scroll_spinner_percentage_enabled && parseInt(response.records.store_settings.settings_data.is_scroll_spinner_percentage_enabled) == 1) {
                                        //console.log("SAS is_scroll_spinner_percentage_enabled is ENABLED");
                                        var scrollPercentageRequired = response.records.store_settings.settings_data.scroll_spinner_percentage ? response.records.store_settings.settings_data.scroll_spinner_percentage : 50;
                                        //console.log('SAS scrollPercentageRequired: ' + scrollPercentageRequired);
                                        console.log("SAS Scroll Spinner Percentage is ENABLED & Percentage Set is: " + scrollPercentageRequired);
                                        //**************** Testing Scroll Page Percentage ****************************
                                        var timeInMinScroll = 60 * 60 * 1000;
                                        if (window.localStorage.getItem('scrollScreenDisplaySpinnerExpire') === null) {
                                            //console.log("SAS scrollScreenDisplaySpinnerExpire is NULL");
                                            console.log("SAS Scroll Screen NOT yet done to load Spinner");
                                            carecartSpinnerJquery(window).on('scroll', function () {
                                                var s = carecartSpinnerJquery(window).scrollTop(),
                                                    d = carecartSpinnerJquery(document).height(),
                                                    c = carecartSpinnerJquery(window).height();

                                                var scrolledPercentage = (s / (d - c)) * 100;

                                                //console.clear();
                                                //console.log('SAS scrolled percentage: ' + scrolledPercentage);
                                                if (scrolledPercentage >= scrollPercentageRequired) {
                                                    if (window.localStorage.getItem('scrollScreenDisplaySpinnerExpire') === null) {
                                                        window.localStorage.setItem('scrollScreenDisplaySpinnerExpire', 1);
                                                        console.log("SAS scrollScreenDisplaySpinnerExpire is NOW SET");
                                                        console.log("SAS scrolledPercentage is: " + scrolledPercentage + " >= scrollPercentageRequired: " + scrollPercentageRequired + " & Spiller Load is Due");
                                                        carecartSpinnerJquery("#wheelify-spin-trigger-cc").click();

                                                        setTimeout(function () {
                                                            //console.log("SAS Time Set to 60 min");
                                                            window.localStorage.setItem('scrollScreenDisplaySpinnerExpire', null);
                                                        }, timeInMinScroll);

                                                        //console.log("SAS timeInMinScroll for reset: " + timeInMinScroll);
                                                    }
                                                }
                                            });
                                        }
                                        else {
                                            //console.log("SAS scrollScreenDisplaySpinnerExpire is NOT NULL");
                                            console.log("SAS Scroll Screen has already loaded Spinner once");
                                        }
                                    }
                                    /* ************************************** Display Spinner if percentage scroll is enabled  - END *********************************************************** */
                                    setTimeout(function () {
                                        var spinnerColors = response.records.store_slices_color;
                                        if (spinnerColors.every(element => element === null)) {
                                            spinnerColors = ["#000000", "#F1C40F", "#E67E22", "#E74C3C", "#95A5A6", "#16A085", "#27AE60", "#2980B9", "#8E44AD", "#2C3E50"];
                                        }
                                        var ccWheelStrokeColor = response.records.store_settings.wheel_stroke_color;
                                        var ccCenterCircleStrokeColor = response.records.store_settings.center_circle_stroke_color;
                                        var ccCenterCircleFillColor = response.records.store_settings.center_circle_fill_color;

                                        if (ccWheelStrokeColor === null) {
                                            ccWheelStrokeColor = "#D0BD0C";
                                        }
                                        if (ccCenterCircleStrokeColor === null) {
                                            ccCenterCircleStrokeColor = "#F1DC15";
                                        }
                                        if (ccCenterCircleFillColor === null) {
                                            ccCenterCircleFillColor = "#EDEDED";
                                        }
                                        dataSpin = {
                                            //colorArray: ["#364C62", "#F1C40F", "#E67E22", "#E74C3C", "#95A5A6", "#16A085", "#27AE60", "#2980B9", "#8E44AD", "#2C3E50", "#F39C12", "#D35400", "#C0392B", "#1ABC9C", "#2ECC71", "#E87AC2", "#3498DB", "#9B59B6", "#7F8C8D"],
                                            //colorArray: ["#000000", "#F1C40F", "#E67E22", "#E74C3C", "#95A5A6", "#16A085", "#27AE60", "#2980B9", "#8E44AD", "#2C3E50"],
                                            //colorArray: response.records.store_slices_color,
                                            colorArray: spinnerColors,
                                            segmentValuesArray: response.records.store_slices,
                                            svgWidth: 1024,
                                            svgHeight: 768,
                                            //wheelStrokeColor: "#D0BD0C",
                                            wheelStrokeColor: ccWheelStrokeColor,
                                            wheelStrokeWidth: 20,
                                            wheelSize: 1024,
                                            wheelTextOffsetY: 60,
                                            wheelTextColor: "#FFFFFF",
                                            wheelTextSize: "30px",
                                            wheelImageOffsetY: 100,
                                            wheelImageSize: 200,
                                            centerCircleSize: 220,
                                            //centerCircleStrokeColor: "#F1DC15",
                                            centerCircleStrokeColor: ccCenterCircleStrokeColor,
                                            centerCircleStrokeWidth: 12,
                                            //centerCircleFillColor: "#EDEDED",
                                            centerCircleFillColor: ccCenterCircleFillColor,
                                            segmentStrokeColor: "#E2E2E2",
                                            segmentStrokeWidth: 3,
                                            centerX: 512,
                                            centerY: 384,
                                            hasShadows: !0,
                                            numSpins: 1,
                                            spinDestinationArray: [],
                                            minSpinDuration: 6,
                                            gameOverText: "",
                                            invalidSpinText: "INVALID SPIN. PLEASE SPIN AGAIN.",
                                            introText: "",
                                            hasSound: !1,
                                            gameId: "9a0232ec06bc431114e2a7f3aea03bbe2164f1aa",
                                            clickToSpin: !0
                                        };
                                        carecartSpinnerJquery("body").find("#wheelify-spin_a_sale_cc_store_front_module").show(1000);
                                        var tb = document.querySelector(".btn-submit-form-ok");
                                        (new Spin2WinWheel).init({
                                            data: dataSpin,
                                            onGameEnd: myGameEndTest,
                                            spinTrigger: tb
                                        })

                                        function i() {
                                            var i = carecartSpinnerJquery(window).width();
                                            i < 680 && (t.css({
                                                width: "100%",
                                                padding: 0
                                            }), v.css({
                                                width: "100%",
                                                padding: 0
                                            }), e.css({
                                                width: "100%",
                                                position: "fixed",
                                                bottom: "-30%",
                                                left: 0,
                                                right: 0,
                                                transform: "translate(-51%)"
                                            }), n.css({
                                                width: "100%",
                                                transform: "translateX(0)"
                                            }), a.css({
                                                maxWidth: "370"
                                            })), i < 400 && e.css({
                                                bottom: "-23%"
                                            }), i >= 680 && t.css({
                                                paddingTop: (carecartSpinnerJquery(window).height() - t.height()) / 2
                                            })
                                        }

                                        var t = carecartSpinnerJquery(".wheelify-signupContainer"),
                                            v = carecartSpinnerJquery(".wheelify-winContainer"),
                                            e = carecartSpinnerJquery(".wheelify-wheelContainer"),
                                            n = carecartSpinnerJquery(".wheelify-wheelSVG"),
                                            a = carecartSpinnerJquery(".form-group input"),
                                            o = carecartSpinnerJquery(".btn-submit-form"),
                                            s = carecartSpinnerJquery('#cc-spinner-full-name'),
                                            d = carecartSpinnerJquery('#cc-spinner-email'),
                                            m = carecartSpinnerJquery('#cc-spinner-phone-number'),
                                            u = carecartSpinnerJquery("input[name='coupon']");
                                        carecartSpinnerJquery(".copy-button").click(function () {
                                            var copiedTextVal = carecartSpinnerJquery("#copied_text_only").text();
                                            carecartSpinnerJquery(this).html('<i class="fa fa-clone" aria-hidden="true"></i> ' + copiedTextVal)
                                        }), i(), carecartSpinnerJquery(window).resize(function () {
                                            i()
                                        }), o.click(function (i) {
                                            i.preventDefault();
                                            var checkboxIsMandatory = 0;
                                            if (carecartSpinnerJquery('#cc-spin-a-sale-consent-checkbox').prop('required')) {
                                                checkboxIsMandatory = 1;
                                                //console.log("SAS Checkbox is Mandatory");
                                            }
                                            else {
                                                //console.log("SAS Checkbox is NOT Mandatory");
                                            }
                                            var t = s.val(),
                                                e = d.val(),
                                                mV = m.val(),
                                                xpV = 1,
                                                x = 1,
                                                n = carecartSpinnerJquery(".wheelify-textInfo"),
                                                a = carecartSpinnerJquery(".btn-submit-form"),
                                                o = carecartSpinnerJquery(".btn-submit-form-ok");
                                            s = carecartSpinnerJquery("#cc-spinner-full-name");
                                            w = carecartSpinnerJquery("#cc-spin-a-sale-consent-checkbox");
                                            d = carecartSpinnerJquery('#cc-spinner-email'),
                                                m = carecartSpinnerJquery('#cc-spinner-phone-number'),
                                                n.text("");

                                            if (checkboxIsMandatory == 1) {
                                                if (w.prop("checked") == true) {
                                                    //console.log("SAS Checkbox is Mandatory & Checkbox Checked");
                                                }
                                                else {
                                                    x = "";
                                                    //console.log("SAS Checkbox is Mandatory & Checkbox is NOT Checked");
                                                }
                                                //console.log("SAS value of x : " + x);
                                            }
                                            else {
                                                //console.log("SAS x value should be 0 as NOT needed: " + x);
                                            }

                                            var phoneNumberMandatory = 0;
                                            if (carecartSpinnerJquery('#cc-spinner-phone-number').prop('required')) {
                                                phoneNumberMandatory = 1;
                                            }

                                            var AllowPhoneNumberField = 0;
                                            if (carecartSpinnerJquery('#cc-spinner-phone-number').length != 0) {
                                                AllowPhoneNumberField = 1;
                                            }

                                            if (phoneNumberMandatory == 1) {
                                                if (mV == '') {
                                                    xpV = "";
                                                }
                                            }

                                            return "" == t ? (s.addClass("animated shake"), void setTimeout(function () {
                                                s.removeClass("animated shake")
                                            }, 1e3)) : "" == e ? (d.addClass("animated shake"), void setTimeout(function () {
                                                d.removeClass("animated shake")
                                            }, 1e3)) : isValidEmailAddress(e) ? (d.addClass("animated shake"), void setTimeout(function () {
                                                d.removeClass("animated shake")
                                            }, 1e3)) : (AllowPhoneNumberField == 1 && "" == xpV) ? (m.addClass("animated shake"), void setTimeout(function () {
                                                m.removeClass("animated shake")
                                            }, 1e3), carecartSpinnerJquery('.btn-submit-form').prop('disabled', false))
                                                : (AllowPhoneNumberField == 1 && mV != '' && isValidPhoneNumber(mV)) ? (m.addClass("animated shake"), void setTimeout(function () {
                                                    m.removeClass("animated shake")
                                                }, 1e3), carecartSpinnerJquery('.btn-submit-form').prop('disabled', false)) : "" == x ? (w.addClass("animated shake"), void setTimeout(function () {
                                                    w.removeClass("animated shake")
                                                }, 1e3)) : o.click();
                                            /*
                                                                                        return "" == t ? (n.text("You should provide your fullname!"), n.addClass("animated shake"), void setTimeout(function () {
                                                                                            n.removeClass("animated shake")
                                                                                        }, 1e3)) : "" == e ? (n.text("You should provide your email"), n.addClass("animated shake"), void setTimeout(function () {
                                                                                            n.removeClass("animated shake")
                                                                                        }, 1e3)) : isValidEmailAddress(e) ? (n.text("You email is not valid format"), n.addClass("animated shake"), void setTimeout(function () {
                                                                                            n.removeClass("animated shake")
                                                                                        }, 1e3)) : o.click();
                                            */
                                        })

                                        carecartSpinnerJquery("#test-spin-loader-dev").remove();

                                    }, 2000);
                                }


                            } else {
                                console.log('SAS ' + response._metadata.message);
                                carecartSpinnerJquery("#test-spin-loader-dev").remove();
                            }
                        },
                        error: function (error) {
                            console.log('SAS Error in Spin A Sale requestTest');
                            carecartSpinnerJquery("#test-spin-loader-dev").remove();
                            console.log('SAS Error: ' + error);
                        }
                    });


                }

                //***************** Start - Countdown Timer function min & sec ********************
                function getTimeRemaining(endtime) {
                    //console.log('SAS Date.parse(endtime): ' + Date.parse(endtime));
                    //console.log('SAS Date.parse(new Date(): ' + Date.parse(new Date()));
                    var t = Date.parse(endtime) - Date.parse(new Date());
                    var minutes = Math.floor((t / 1000 / 60) % 60);
                    var seconds = Math.floor((t / 1000) % 60);
                    //console.log('SAS t: ' + t);
                    //console.log('SAS minutes: ' + minutes);
                    //console.log('SAS seconds: ' + seconds);
                    return {
                        'total': t,
                        'minutes': minutes,
                        'seconds': seconds
                    };
                }

                function initializeClockSpinAWheel(id, endtime = 5) {
                    //console.log('SAS initializeClockSpinAWheel id: ' + id);
                    //console.log('SAS initializeClockSpinAWheel endtime: ' + endtime);
                    //var clock = document.getElementById(id);
                    //console.log('SAS clock: ' + clock);

                    var ccSpinASaleClock = document.getElementById(id);
                    //console.log('SAS ccSpinASaleClock: ' + ccSpinASaleClock);

                    var ccSpinASaleMinutesSpan = ccSpinASaleClock.querySelector('.cc-spin-a-sale-minutes');
                    //var minutesSpan = carecartSpinnerJquery('.cc-spin-a-sale-minutes');
                    var ccSpinASaleSecondsSpan = ccSpinASaleClock.querySelector('.cc-spin-a-sale-seconds');
                    //var secondsSpan = carecartSpinnerJquery('.cc-spin-a-sale-seconds');

                    function updateClockSpinAWheel() {
                        //console.log('SAS inside updateClockSpinAWheel');
                        var ccSpinASaleTimeRemaining = getTimeRemaining(endtime);
                        //var ccSpinASalePreviewValue = window.localStorage.getItem('cc-sas-spinner-timer-bar-set-html');
                        var ccSpinASalePreviewValue = '';

                        ccSpinASaleMinutesSpan.innerHTML = ('0' + ccSpinASaleTimeRemaining.minutes).slice(-2);
                        ccSpinASaleSecondsSpan.innerHTML = ('0' + ccSpinASaleTimeRemaining.seconds).slice(-2);
                        //carecartSpinnerJquery('.cc-spin-a-sale-minutes').html(('0' + ccSpinASaleTimeRemaining.minutes).slice(-2));
                        //carecartSpinnerJquery('.cc-spin-a-sale-seconds').html(('0' + ccSpinASaleTimeRemaining.seconds).slice(-2));

                        //console.log('SAS Min: ' + ('0' + ccSpinASaleTimeRemaining.minutes).slice(-2));
                        //console.log('SAS Sec: ' + ('0' + ccSpinASaleTimeRemaining.seconds).slice(-2));
                        ccSpinASalePreviewValue = carecartSpinnerJquery('#cc-spin-a-sale-clock-div-preview').html();
                        window.localStorage.setItem('cc-sas-spinner-timer-bar-set-html', ccSpinASalePreviewValue);
                        ccSpinASalePreviewValue = window.localStorage.getItem('cc-sas-spinner-timer-bar-set-html');
                        //console.log('SAS ccSpinASalePreviewValue: ' + ccSpinASalePreviewValue);

                        if (ccSpinASaleTimeRemaining.total <= 0) {
                            console.log('SAS Urgency Bar will now close as count down timer is now complete');
                            clearInterval(timeintervalSpinAWheel);
                            carecartSpinnerJquery('#wheelify-couponwheel_notice_content').hide();
                            window.localStorage.setItem('cc-sas-spinner-hide-timer-bar', 1);
                        }
                    }

                    updateClockSpinAWheel();
                    var timeintervalSpinAWheel = setInterval(updateClockSpinAWheel, 1000);
                }
                //***************** End - Countdown Timer function min & sec ********************
                //***************************** Store Specific Styling ***********************************************************
                //***************************** Fix Text Positioning of Store in Spinner Pop-up **********************************

               

                // if (Shopify.shop == 'the-party-champions.myshopify.com') {
                //     carecartSpinnerJquery('head').append('<style type="text/css">.wheelify-signupContainer ::-webkit-input-placeholder { /* Chrome/Opera/Safari */ color: #aaaaaa;}</style>');
                //     //console.log("SAS https://partychampions.com/");
                // }
                // if (Shopify.shop == 'blackhawksurvival.myshopify.com') {
                //     carecartSpinnerJquery('head').append('<style type="text/css">#wheelify-spin_a_sale_cc_store_front_module .checkbox {padding: 5px 100px 15px 1px;text-align: left;text-indent: 5px;line-height: 1;background: transparent;border: none;width: 100%;height: auto;box-shadow: none;margin: 0 !important;}</style>');
                //     //console.log("SAS blackhawksurvival.myshopify.com");
                // }
                // if (Shopify.shop == 'beauty-box-by-tori-spelling.myshopify.com') {
                //     carecartSpinnerJquery('head').append('<style type="text/css">#wheelify-spin_a_sale_cc_store_front_module .wheelify-signupContainer,#wheelify-spin_a_sale_cc_store_front_module .wheelify-winContainer, #wheelify-spin_a_sale_cc_store_front_module .wheelify-loseContainer{width: 52%; float: right; padding: 0 3%;}</style>');
                // }
                // if (Shopify.shop == 'store-e11even.myshopify.com') {
                //     carecartSpinnerJquery('head').append('<style type="text/css">@media only screen and (max-width: 568px) {#wheelify-spin_a_sale_cc_store_front_module .wheelify-signupContainer p{text-align: center;padding: 0px 30px;}#wheelify-spin_a_sale_cc_store_front_module .wheelify-content-spinner {padding: 38px 10px;}.wheelify-signupContainer .checkbox label {display: flex;}.wheelify-signupContainer .checkbox input {margin-right: 8px;}.wheelify-signupContainer .btn-submit-form{margin-top: 22px;}#wheelify-spin_a_sale_cc_store_front_module .checkbox {padding: 5px 30px 15px 1px;}}</style>');
                // }
                // if (Shopify.shop == 'rana-phulkari.myshopify.com') {
                //     carecartSpinnerJquery('head').append('<style type="text/css">.wheelify-signupContainer .checkbox input {display: inline;vertical-align: baseline;margin-right: 6px;}</style>');
                // }
                // //*********************** Custom Fix - longdan1.myshopify.com ***************************************************
                // if (Shopify.shop == 'longdan1.myshopify.com') {
                //     carecartSpinnerJquery('head').append('<style type="text/css">#wheelify-spin_a_sale_cc_store_front_module .checkbox {width: 100%;background-color: transparent;height: auto;border: none;}</style>');
                // }
                // //*********************** Custom Fix - sugar-ruff.myshopify.com ***** Make Slices Text Color Black **********************************
                // if (Shopify.shop == 'sugar-ruff.myshopify.com') {
                //     carecartSpinnerJquery('head').append('<style type="text/css">#wheelify-spin_a_sale_cc_store_front_module .wheelText {fill: #000;}</style>');
                // }
                //********************** In mobile view, hide the Spinner Trigger Text and display ONLY the wheel ***********************************
                (function (a) {
                    (carecartSpinnerJquery.browser = carecartSpinnerJquery.browser || {}).mobile = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))
                })(navigator.userAgent || navigator.vendor || window.opera);
                // if (Shopify.shop == 'gammalife.myshopify.com') {
                //     if (carecartSpinnerJquery.browser.mobile) {
                //         carecartSpinnerJquery('head').append('<style type="text/css">#wheelify-spin-trigger-cc {bottom: 2vh !important;}</style>');
                //     }
                // }
                // if(Shopify.shop == "giovanco.myshopify.com") {
                //     carecartSpinnerJquery("#wheelify-spin-trigger-cc").removeClass("triggerButton_shake");
                //     carecartSpinnerJquery( "#wheelify-spin-trigger-cc" ).effect( "shake" );
                //     if(navigator.userAgent.match(/chrome|chromium|crios/i)){
                //         carecartSpinnerJquery('head').append('<style type="text/css">.triggerButton_shake{animation: shake 0.5s cubic-bezier(.36,.07,.19,.97) both infinite !important; transform: translate3d(0,0,0) !important; backface-visibility: hidden !important; perspective: 700px !important;}</style>');
                //     }
                //     else{
                //         carecartSpinnerJquery("#wheelify-spin-trigger-cc").removeClass("triggerButton_shake");
                //         carecartSpinnerJquery( "#wheelify-spin-trigger-cc" ).effect( "shake" );
                //     }
                // }

                // if(Shopify.shop == "celovis.myshopify.com"){
                //     carecartSpinnerJquery('head').append('<style type="text/css">@media only screen and (max-width: 768px){ #cc-spin-a-sale-consent-checkbox { width: auto !important; min-width: auto !important;} #wheelify-spin_a_sale_cc_store_front_module .wheelify-ContentRight {min-height: 415px !important;}}</style>');
                // }
                
                // if(Shopify.shop == "queens-growth.myshopify.com"){
                //     carecartSpinnerJquery('head').append('<style type="text/css"> #cc-spin-a-sale-consent-checkbox {position: inherit !important; width: auto !important; min-width: auto !important;} </style>');
                //     carecartSpinnerJquery('head').append('<style type="text/css">#cc-spin-a-sale-consent-checkbox{ width:20px !important; height:20px !important; } .checkbox label:after{ display:none !important; } .checkbox input[type=checkbox]{ z-index: 1 !important; opacity: 1 !important; } </style>');
                // }
                    
            });

        }, 1000);
    });

})();