//******* @author: CareCart App-Wheelify - Abdullah Butt **************************************************
//****** Store Frontend JS - carecartSpinnerApp.js GH v.7.0.0 - Build ver 1.0.34 **************************
//****** Updated at: 20-Sept-2021, 11:10 AM ***************************************************************

(function () {
	var d = new Date();
	//var version = d.getSeconds();

	var API_URL = 'https://app-spinner.carecart.io' + '/';

	//var API_URL = 'https://uat-spinner.carecart.io' + '/';

	//var API_URL = 'https://new-ui-spinner.carecart.io' + '/';

	//var API_URL = 'https://dev-spinner.carecart.io' + '/';

	var CDN_WHEELIFY_URL = 'https://cdn.jsdelivr.net/gh/carecartapp/app-wheelify@1.0.34/';

	var dataSpin = false;

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

	//cssFileInjection(API_URL +"public/app/css/front-store-spinner-min.css?v=" + new Date().toLocaleTimeString());
	cssFileInjection(CDN_WHEELIFY_URL + "front-store-spinner-min.css");
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
				} else {
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
					console.log('ccCareCartSpinner Data Updated: ' + window.localStorage.getItem('cc-sas-spinner-cookies-data'));
				} else {
					console.log('ccCareCartSpinner Data Already Exists: ' + window.localStorage.getItem('cc-sas-spinner-cookies-data'));
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
						u = carecartSpinnerJquery("input[name='coupon']");
					carecartSpinnerJquery(".copy-button").click(function () {
						var copiedTextVal = carecartSpinnerJquery("#copied_text_only").text();
						if (Shopify.shop == 'organicforeverybody.myshopify.com') {
							carecartSpinnerJquery(this).html('<i class="fa fa-clone" aria-hidden="true"></i> ' + copiedTextVal);
						} else {
							clipboard.writeText(u.val()), carecartSpinnerJquery(this).html('<i class="fa fa-clone" aria-hidden="true"></i> ' + copiedTextVal);
						}
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
						} else {
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
						} else {
							//console.log("SAS Checkbox is NOT Mandatory");
						}
						var t = s.val(),
							e = d.val(),
							x = 1,
							n = carecartSpinnerJquery(".wheelify-textInfo"),
							a = carecartSpinnerJquery(".btn-submit-form"),
							o = carecartSpinnerJquery(".btn-submit-form-ok");
						s = carecartSpinnerJquery("#cc-spinner-full-name");
						w = carecartSpinnerJquery("#cc-spin-a-sale-consent-checkbox");
						q = carecartSpinnerJquery("#wheelify-cc-spin-a-sale-already-used-spin-quota");
						d = carecartSpinnerJquery('#cc-spinner-email'),
							n.text("");
						var emailError = carecartSpinnerJquery('#wheelify-cc-spin-invalid-email');

						if (checkboxIsMandatory == 1) {
							if (w.prop("checked") == true) {
								//console.log("SAS Checkbox is Mandatory & Checkbox Checked");
							} else {
								x = "";
								//console.log("SAS Checkbox is Mandatory & Checkbox is NOT Checked");
							}
							//console.log("SAS value of x : " + x);
						} else {
							//console.log("SAS x value should be 0 as NOT needed: " + x);
						}
						return "" == t ? (s.addClass("animated shake"), void setTimeout(function () {
							s.removeClass("animated shake")
						}, 1e3), carecartSpinnerJquery('.btn-submit-form').prop('disabled', false)) : "" == e ? (d.addClass("animated shake"), void setTimeout(function () {
							d.removeClass("animated shake")
						}, 1e3), carecartSpinnerJquery('.btn-submit-form').prop('disabled', false)) : isValidEmailAddress(e) ? (d.addClass("animated shake"), emailError.addClass("animated shake"), emailError.show(), void setTimeout(function () {
							d.removeClass("animated shake")
						}, 1e3), carecartSpinnerJquery('.btn-submit-form').prop('disabled', false), emailError.addClass("animated shake")) : "" == x ? (w.addClass("animated shake"), void setTimeout(function () {
								w.removeClass("animated shake");
							},
							1e3), carecartSpinnerJquery('.btn-submit-form').prop('disabled', false)) : "" != e ? void setTimeout(function () {
							//var sendCall = true;
							if (window.localStorage.getItem('cc-sas-spinner-anti-cheat-shield') !== null && window.localStorage.getItem('cc-sas-spinner-anti-cheat-shield') == 1) {
								carecartSpinnerJquery('#wheelify-cc-spin-a-sale-loader-on-click').show();
								console.log('SAS Try your luck clicked and about to spin 2');

								emailError.hide();
								emailError.removeClass("animated shake");
								//q.show();
								//q.addClass("animated shake");
								//console.log("SAS validation Success");
								carecartSpinnerJquery.ajax({
									type: "POST",
									url: API_URL + "store-front-api/post-engine",
									data: {
										shop: Shopify.shop,
										email: e,
										iPData: window.localStorage.getItem('cc-sas-spinner-user-ip-address'),
										CData: window.localStorage.getItem('cc-sas-spinner-cookies-data'),
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
					if (Shopify.shop == "almowear.myshopify.com") {
						timeToDisplay = 60;
					}

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
						/*if (checkCachedTime()) {
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
						}*/
					}
					/*Custom fix*/
					if (Shopify.shop == 'presha-luxury.myshopify.com') {
						carecartSpinnerJquery("#NewsletterPopup-newsletter-popup").removeAttr("tabindex");
					}
					if (Shopify.shop == 'auscrystals-com-au.myshopify.com') {
						carecartSpinnerJquery("body").append("<style type='text/css'>.pegContainer{transform-origin: 0px 0px 0px;transform: matrix(1.70666, 0, 0, 1.70666, -374.604, 62.2927);}</style>");
					}
					/*if(Shopify.shop == 'dorsila.myshopify.com'){
						let selector = carecartSpinnerJquery(".wheelify-wheelContainer svg").find('g.valueContainer').children();
						for (let i = 1; i < selector.length; i++) {
							let textTag = $(selector[i]).find('text').attr("transform","rotate(90, 440, -2)");
						}
					}*/
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

				function pupulateData(response) {
					console.log(response);
					//console.log('SAS AJAX Success ');
					if (response && response._metadata && response._metadata.outcome && response._metadata.outcome == "SUCCESS") {
						console.log('SAS Success Response');
						/* Check If Module is Active*/
						if (response.records && response.records.store_settings && response.records.store_settings.is_active) {
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
							if (Shopify.shop == 'geniani-products.myshopify.com') {
								var thisStatus = checkStoreSpecificUrlCcSpinASale("https://geniani.com/pages/geniani-rewards-club");
								//console.log('checkStoreSpecificUrlCcSpinASale Status: ' + thisStatus);
								if (thisStatus) {
									console.log('SAS Custom Page Matched for store: ' + Shopify.shop);
								} else {
									console.log('SAS Custom Page NOT Matched for store: ' + Shopify.shop);
									return;
								}
							}

							if (Shopify.shop == 'little-miss-juliette.myshopify.com') {
								var thisStatus = checkStoreSpecificUrlCcSpinASale("https://www.littlemissjuliette.com/pages/spin-win");
								//console.log('checkStoreSpecificUrlCcSpinASale Status: ' + thisStatus);
								if (thisStatus) {
									console.log('SAS Custom Page Matched for store: ' + Shopify.shop);
								} else {
									console.log('SAS Custom Page NOT Matched for store: ' + Shopify.shop);
									return;
								}
							}

							if (Shopify.shop == 'beebielove-webshop.myshopify.com') {
								var thisStatus = checkStoreSpecificUrlCcSpinASale("https://www.beebielove.com/pages/spin-win");
								//console.log('checkStoreSpecificUrlCcSpinASale Status: ' + thisStatus);
								if (thisStatus) {
									console.log('SAS Custom Page Matched for store: ' + Shopify.shop);
								} else {
									console.log('SAS Custom Page NOT Matched for store: ' + Shopify.shop);
									return;
								}
							}

							if (Shopify.shop == 'jumping-the-couch.myshopify.com') {
								var thisStatus = checkStoreSpecificUrlCcSpinASale("https://jumpingthecouch.com/pages/spin-win");
								//console.log('checkStoreSpecificUrlCcSpinASale Status: ' + thisStatus);
								if (thisStatus) {
									console.log('SAS Custom Page Matched for store: ' + Shopify.shop);
								} else {
									console.log('SAS Custom Page NOT Matched for store: ' + Shopify.shop);
									return;
								}
							}
							/* New custom fixes added from here */
							if (Shopify.shop == 'tweetprintshop.myshopify.com') {
								carecartSpinnerJquery("body").append('<style type="text/css"> .wheelify-content-spinner {background-color: #008affd1 !important;} #wheelify-spin-trigger-cc img {opacity: 1}</style>');
							}
							if (Shopify.shop == 'hho-kit.myshopify.com') {
								carecartSpinnerJquery("body").append('<style type="text/css">.pegContainer {transform-origin: 0px 0px 0px;transform: matrix(1.70666, 0, 0, 1.70666, -374.604, 62.2927)}</style>');
							}
							if ("mist-jewels.myshopify.com" == Shopify.shop) {
								carecartSpinnerJquery("body").append('<style type="text/css">.wheelify-signupContainer p {color: black !important;} span#cc-spin-a-sale-consent-text {color: black !important;}</style>');
							}
							if ("our-little-hero.myshopify.com" == Shopify.shop) {
								carecartSpinnerJquery("body").append('<style type="text/css">#wheelify-spin_a_sale_cc_store_front_module.wheelify-wrapper-spinner {top: 0;left: 0;transform: translate(calc(50vw - 50%), calc(50vh - 50%));width: 40%;min-width: 700px;height: 63%;} .medium-up--one-quarter {width:15%;} .medium-up--one-half {width:70%;}</style>');
								carecartSpinnerJquery(".site-nav").append('<li><a id="wheelify-spin-trigger-2" onclick="displaySpinnerOnTigger()" href="javascript:void(0)" class="site-nav__link site-nav__link--main"><span class="site-nav__label">Spin to Win</span></a></li>');
								carecartSpinnerJquery("#wheelify-spin-trigger-cc").css("display", "none");
							}
							if ("santhigram.myshopify.com" == Shopify.shop) {
								carecartSpinnerJquery("body").append('<style type="text/css">.wheelify-winContainer .copy-button {color: #384f66 !important} .wheelify-signupContainer .btn-submit-form{background-color: rgb(255 255 255) !important;color: black!important;}</style>');
							}
							if ("celovis.myshopify.com" == Shopify.shop) {
								carecartSpinnerJquery("body").append('<style type="text/css">@media only screen and (max-width: 575px){#wheelify-spin_a_sale_cc_store_front_module .wheelify-ContentRight {min-height: 370px;}#wheelify-spin_a_sale_cc_store_front_module .wheelify-content-spinner {padding: 60px 15px;}}</style>');
							}

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
							carecartSpinnerJquery("body").append('<style type="text/css">wheelify-text-description{font-size:15px;} *, ::after, ::before {box-sizing: border-box!important;}button, input, optgroup, select, textarea{-webkit-appearance: auto;-moz-appearance: auto;appearance: auto;}</style>');
							if (response.records.store_settings.settings_data.display_thank_you_page_enabled && parseInt(response.records.store_settings.settings_data.display_thank_you_page_enabled) == 0) {
								var thisStatus = checkThanksYouCcSpinASale();
								// console.log('checkThanksYouCcSpinASale Status: ' + thisStatus);
								if (thisStatus) {
									carecartSpinnerJquery("#wheelify-spin-trigger-2").css("display", "none");
									console.log('SAS load on Thank You page is disabled');
									return;
								}
							}
//****************************** If SAS is enabled on Home page, Collections, Blog post pages, Products, Cart & on Thank You page, it will NOT be loaded on any other page **********************************
							if (response.records.store_settings.settings_data.display_all_other_pages_enabled && parseInt(response.records.store_settings.settings_data.display_all_other_pages_enabled) == 0) {
								var thisStatus = checkIfAnyOtherPage();
								//console.log('checkIfAnyOtherPage Status: ' + thisStatus);
								if (!thisStatus) {
									console.log('SAS is disabled on all other pages');
									return;
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

								/* Append triggered button */
								if (response.records.store_settings.settings_data.is_triggered_enable && parseInt(response.records.store_settings.settings_data.is_triggered_enable) == 1 && response.records.store_settings.settings_data.button_position != "hidden") {
									carecartSpinnerJquery("body").append(response.records.store_front_trigger_button);
									if ("our-little-hero.myshopify.com" == Shopify.shop) {
										carecartSpinnerJquery("#wheelify-spin-trigger-cc").css("display", "none");
									}
									const settingsData = response.records.store_settings.settings_data;
									var tBtn = carecartSpinnerJquery('body').find('#wheelify-spin-trigger-cc');
									if (settingsData.button_position === 'middle_right') {
										tBtn.css({
											bottom: '48vh',
											right: '20px'
										});
									} else if (settingsData.button_position === 'bottom_right') {
										tBtn.css({
											bottom: '8vh',
											right: '20px'
										});
									}//new added
									else if (settingsData.button_position === 'bottom_left') {
										tBtn.css({
											left: '20px'
										});
									} else if (settingsData.button_position === 'middle_left') {
										tBtn.css({
											left: '20px',
											bottom: '48vh'
										});
									}
								} else {
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
											return;
										}
										//console.log('SAS out of screen');
										if (carecartSpinnerJquery('#wheelify-spin_a_sale_cc_store_front_module:visible').length == 0) {
											if (window.localStorage.getItem('cc-sas-spinner-copy-button-clicked') != 1) {
												//************* 60 Min (1 min = 60 * 1000 milliseconds) *******************
												var timeInMin = 60 * 60 * 1000;
												if (window.localStorage.getItem('screenExitDisplaySpinnerExpire') == 1) {
													//console.log("screenExitDisplaySpinnerExpire is Defined");
												} else {
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
											} else {
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
														} else {
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
									} else {
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
									carecartSpinnerJquery('.wheelify-cc-spin-a-sale-spinner-progress-bar-inner').css({
										"background-color": response.records.store_settings.conversion_booster_settings.conversion_booster_progress_bar_color,
										"display": "block"
									});
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
							}
							/* ************************************** Display Background Image - End *********************************************************** */
							if (Shopify.shop == 'srnsmart.myshopify.com') {
								carecartSpinnerJquery('#customer_login_link').append('<div class="customer-login-links-new"><a href="#." id="cc-spin-a-wheel-open-spinner-mate">Spin to win</a></div>');
								//console.log('SAS In srnsmart.myshopify.com');

								carecartSpinnerJquery("#cc-spin-a-wheel-open-spinner-mate").click(function () {
									carecartSpinnerJquery('#wheelify-spin-trigger-cc').click();
								});
							}
						}
					} else {
						console.log('SAS ' + response._metadata.message);
					}
					if (response.records.store_settings.conversion_booster_settings != null && response.records.store_settings.conversion_booster_settings.is_urgency_timer_bar_enabled != null && parseInt(response.records.store_settings.conversion_booster_settings.is_urgency_timer_bar_enabled) == 1 && window.localStorage.getItem("cc-sas-spinner-copy-button-clicked") == 1) {
						couponAndMsgAreSetThenLoad();
					}
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
							shop: Shopify.shop,
							postImpression: 'postImpression'
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
					var isConsent = (carecartSpinnerJquery('#cc-spin-a-sale-consent-checkbox').prop('checked') == true) ? 'consent_accepted' : 'consent_rejected';
					var couponUsed = coupon;
					var winResult = result;

					var customerInformation = {
						name: customerName,
						email: customerEmail,
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
							shop: Shopify.shop,
							customerInformation: customerInformation,
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
								shop: Shopify.shop,
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
											shop: Shopify.shop
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
								shop: Shopify.shop,
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
					// console.log('SAS inside checkThanksYouCcSpinASale');
					//var is_page = !(!window.location.pathname.match("(.*)/orders/(.*)") && !window.location.pathname.match("(.*)/orders") || window.location.pathname.match("(.*)/checkouts/(.*)") || window.location.pathname.match("(.*)/thank_you"));
					let is_page = (window.location.pathname.match("(.*)/thank_you") ? true : false);
					console.log("Thanks you page =>> " + is_page);
					return is_page;
				}

				function checkIfAnyOtherPage() {
					//console.log('SAS inside checkIfAnyOtherPage');
					if (checkHomePageCcSpinASale()) {
						//console.log('SAS valid homepage');
						return true;
					}
					if (checkCollectionsCcSpinASale()) {
						//console.log('SAS valid collections page');
						return true;
					}
					if (checkBlogPageCcSpinASale()) {
						//console.log('SAS valid blog page');
						return true;
					}
					if (checkProductCcSpinASale()) {
						//console.log('SAS valid products page');
						return true;
					}
					if (checkCartCcSpinASale()) {
						//console.log('SAS valid cart page');
						return true;
					}
					if (checkThanksYouCcSpinASale()) {
						//console.log('SAS valid Thank You page');
						return true;
					}
					return false;
				}

				function checkStoreSpecificUrlCcSpinASale(url) {
					//console.log('SAS inside checkStoreSpecificUrlCcSpinASale');
					var is_page = true;
					var currentPageUrl = window.location.href;
					//console.log('SAS url: ' + url);
					//console.log('SAS currentPageUrl: ' + currentPageUrl);

					if (url == currentPageUrl) {
						is_page = true;
					} else {
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

					carecartSpinnerJquery.ajax({
						url: API_URL + "store-front-api/get-store-information",
						type: 'GET',
						data: {
							shop: Shopify.shop,

						},
						crossDomain: true,
						contentType: "application/json",
						dataType: "json",
						success: function (response) {
							if (response.records !== null) {
								window.localStorage.setItem('cc-sas-spinner-ajax-cached-time', d);
								window.localStorage.setItem('cc-sas-spinner-ajax-cached-data', JSON.stringify(response));
								pupulateData(response);
							}
						},
						error: function (error) {
							console.log('SAS Error in Spin A Sale request');
							console.log('SAS Error: ' + error);
						}
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

				/* Test on your store flow
				 * cc-show-spin-a-sale-test=yes
				 * */
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

					carecartSpinnerJquery.ajax({
						url: API_URL + "store-front-api/get-store-information-test",
						type: 'GET',
						data: {
							shop: Shopify.shop,
							type: 'test_spinner'
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
									/* Append triggered button */
									if (response.records.store_settings.settings_data.is_triggered_enable && parseInt(response.records.store_settings.settings_data.is_triggered_enable) == 1 && response.records.store_settings.settings_data.button_position != "hidden") {
										carecartSpinnerJquery("body").append(response.records.store_front_trigger_button);
										const settingsData = response.records.store_settings.settings_data;
										var tBtn = carecartSpinnerJquery('body').find('#wheelify-spin-trigger-cc');
										if (settingsData.button_position === 'middle_right') {
											tBtn.css({
												bottom: '48vh',
												right: '20px'
											});
										} else if (settingsData.button_position === 'bottom_right') {
											tBtn.css({
												bottom: '8vh',
												right: '20px'
											});
										}//new added
										else if (settingsData.button_position === 'bottom_left') {
											tBtn.css({
												left: '20px'
											});
										} else if (settingsData.button_position === 'middle_left') {
											tBtn.css({
												left: '20px',
												bottom: '48vh'
											});
										}
									} else {
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
									}
									/* ************************************** Display Background Image - End *********************************************************** */
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
										} else {
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
											} else {
												//console.log("SAS Checkbox is NOT Mandatory");
											}
											var t = s.val(),
												e = d.val(),
												x = 1,
												n = carecartSpinnerJquery(".wheelify-textInfo"),
												a = carecartSpinnerJquery(".btn-submit-form"),
												o = carecartSpinnerJquery(".btn-submit-form-ok");
											s = carecartSpinnerJquery("#cc-spinner-full-name");
											w = carecartSpinnerJquery("#cc-spin-a-sale-consent-checkbox");
											d = carecartSpinnerJquery('#cc-spinner-email'),
												n.text("");

											if (checkboxIsMandatory == 1) {
												if (w.prop("checked") == true) {
													//console.log("SAS Checkbox is Mandatory & Checkbox Checked");
												} else {
													x = "";
													//console.log("SAS Checkbox is Mandatory & Checkbox is NOT Checked");
												}
												//console.log("SAS value of x : " + x);
											} else {
												//console.log("SAS x value should be 0 as NOT needed: " + x);
											}
											return "" == t ? (s.addClass("animated shake"), void setTimeout(function () {
												s.removeClass("animated shake")
											}, 1e3)) : "" == e ? (d.addClass("animated shake"), void setTimeout(function () {
												d.removeClass("animated shake")
											}, 1e3)) : isValidEmailAddress(e) ? (d.addClass("animated shake"), void setTimeout(function () {
												d.removeClass("animated shake")
											}, 1e3)) : "" == x ? (w.addClass("animated shake"), void setTimeout(function () {
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
				if (Shopify.shop == 'portland-pickles-baseball.myshopify.com') {
					carecartSpinnerJquery('head').append('<style type="text/css">#wheelify-spin_a_sale_cc_store_front_module .wheelify-signupContainer,#wheelify-spin_a_sale_cc_store_front_module .wheelify-winContainer, #wheelify-spin_a_sale_cc_store_front_module .wheelify-loseContainer{width: 55%;}</style>');
				}
				if (Shopify.shop == 'the-party-champions.myshopify.com') {
					carecartSpinnerJquery('head').append('<style type="text/css">.wheelify-signupContainer ::-webkit-input-placeholder { /* Chrome/Opera/Safari */ color: #aaaaaa;}</style>');
					//console.log("SAS https://partychampions.com/");
				}
				if (Shopify.shop == 'blackhawksurvival.myshopify.com') {
					carecartSpinnerJquery('head').append('<style type="text/css">#wheelify-spin_a_sale_cc_store_front_module .checkbox {padding: 5px 100px 15px 1px;text-align: left;text-indent: 5px;line-height: 1;background: transparent;border: none;width: 100%;height: auto;box-shadow: none;margin: 0 !important;}</style>');
					//console.log("SAS blackhawksurvival.myshopify.com");
				}
				if (Shopify.shop == 'beauty-box-by-tori-spelling.myshopify.com') {
					carecartSpinnerJquery('head').append('<style type="text/css">#wheelify-spin_a_sale_cc_store_front_module .wheelify-signupContainer,#wheelify-spin_a_sale_cc_store_front_module .wheelify-winContainer, #wheelify-spin_a_sale_cc_store_front_module .wheelify-loseContainer{width: 52%; float: right; padding: 0 3%;}</style>');
				}
				if (Shopify.shop == 'petculiari.myshopify.com') {
					carecartSpinnerJquery('head').append('<style type="text/css">#wheelify-spin_a_sale_cc_store_front_module .wheelify-signupContainer p { color: #000;} #wheelify-spin_a_sale_cc_store_front_module p.wheelify-text-description {color: #000;}span#cc-spin-a-sale-consent-text {color: #000 !important;}div#wheelify-cc-spin-a-sale-powered-by-carecart { color: #000000;} #wheelify-spin-trigger-cc img, #wheelify-spin-trigger-cc span { color: #000 !important;}#wheelify-spin_a_sale_cc_store_front_module .form-group input {border: 1px solid #000;}#wheelify-spin_a_sale_cc_store_front_module .btn-submit-form, #wheelify-spin_a_sale_cc_store_front_module .btn-submit-form-ok, #wheelify-spin_a_sale_cc_store_front_module .copy-button {border: 1px solid #000;}#wheelify-spin_a_sale_cc_store_front_module .wheelify-closeButton i {font-size: 20px;color: #000;}#wheelify-spin_a_sale_cc_store_front_module .wheelify-text-heading {color: #000;}</style>');
				}
				if (Shopify.shop == 'store-e11even.myshopify.com') {
					carecartSpinnerJquery('head').append('<style type="text/css">@media only screen and (max-width: 568px) {#wheelify-spin_a_sale_cc_store_front_module .wheelify-signupContainer p{text-align: center;padding: 0px 30px;}#wheelify-spin_a_sale_cc_store_front_module .wheelify-content-spinner {padding: 38px 10px;}.wheelify-signupContainer .checkbox label {display: flex;}.wheelify-signupContainer .checkbox input {margin-right: 8px;}.wheelify-signupContainer .btn-submit-form{margin-top: 22px;}#wheelify-spin_a_sale_cc_store_front_module .checkbox {padding: 5px 30px 15px 1px;}}</style>');
				}
				if (Shopify.shop == 'greenrepublicau.myshopify.com') {
					carecartSpinnerJquery('head').append('<style type="text/css">#wheelify-spin-trigger-cc, #wheelify-spin-trigger-cc:active, #wheelify-spin-trigger-cc:focus, #wheelify-spin-trigger-cc:hover, #wheelify-spin-trigger-cc:visited {bottom: 98px;}</style>');
				}
				if (Shopify.shop == 'rana-phulkari.myshopify.com') {
					carecartSpinnerJquery('head').append('<style type="text/css">.wheelify-signupContainer .checkbox input {display: inline;vertical-align: baseline;margin-right: 6px;}</style>');
				}
				if (Shopify.shop == 'tinyfied.myshopify.com') {
					carecartSpinnerJquery('head').append('<style type="text/css">#wheelify-spin-trigger-cc span {z-index: -1;}</style>');
				}
//************************ Make Placeholders black for store whose placeholders are showing white ********************************
				/*
								if(Shopify.shop == 'sky-fit-store.myshopify.com' || Shopify.shop == 'courtsidecases.myshopify.com' || Shopify.shop == 'period-poo-boutique.myshopify.com'){
									//carecartSpinnerJquery('head').append('<style type="text/css">.form-group input::placeholder { color: black !important; }</style>');
									carecartSpinnerJquery('head').append('<style type="text/css">#wheelify-spin_a_sale_cc_store_front_module .form-group input::-webkit-input-placeholder {color: #000;}#wheelify-spin_a_sale_cc_store_front_module .form-group input:-ms-input-placeholder {color: #000;}#wheelify-spin_a_sale_cc_store_front_module .form-group input::placeholder{color: #000;}</style>');
									console.log('SAS Make Placeholders black');
								}
				*/
//*********************** Move spinner 25px above from bottom (current 30px) ***************************************************
				if (Shopify.shop == 'kingsonsbags.myshopify.com' || Shopify.shop == 'cocolouisau.myshopify.com') {
					carecartSpinnerJquery('head').append('<style type="text/css">#wheelify-spin-trigger-cc { bottom:55px !important;}</style>');
				}
//*********************** Custom Fix - longdan1.myshopify.com ***************************************************
				if (Shopify.shop == 'longdan1.myshopify.com') {
					carecartSpinnerJquery('head').append('<style type="text/css">#wheelify-spin_a_sale_cc_store_front_module .checkbox {width: 100%;background-color: transparent;height: auto;border: none;}</style>');
				}
//*********************** Custom Fix - sugar-ruff.myshopify.com ***** Make Slices Text Color Black **********************************
				if (Shopify.shop == 'sugar-ruff.myshopify.com') {
					carecartSpinnerJquery('head').append('<style type="text/css">#wheelify-spin_a_sale_cc_store_front_module .wheelText {fill: #000;}</style>');
				}
//********************** In mobile view, hide the Spinner Trigger Text and display ONLY the wheel ***********************************
				(function (a) {
					(carecartSpinnerJquery.browser = carecartSpinnerJquery.browser || {}).mobile = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))
				})(navigator.userAgent || navigator.vendor || window.opera);

				if (Shopify.shop == 'pawmerang-pet-store.myshopify.com') {
					/*(function (a) {
						(carecartSpinnerJquery.browser = carecartSpinnerJquery.browser || {}).mobile = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))
					})(navigator.userAgent || navigator.vendor || window.opera);*/

					if (carecartSpinnerJquery.browser.mobile) {
						console.log('SAS pawmerang-pet-store.myshopify.com opened in mobile');
						carecartSpinnerJquery('head').append('<style type="text/css">#wheelify-spin-trigger-cc span {display: none;}</style>');
						console.log('SAS spinner text should be hidden now');
					} else {
						console.log('SAS pawmerang-pet-store.myshopify.com opened in desktop');
						//tBtnText.show();
						carecartSpinnerJquery('head').append('<style type="text/css">#wheelify-spin-trigger-cc span {display: block;}</style>');
						console.log('SAS spinner text should be displayed now');
					}
				}
				if (Shopify.shop == 'forestsuperfood.myshopify.com') {
					carecartSpinnerJquery('head').append('<style type="text/css">#wheelify-spin-trigger-cc {bottom: 14vh !important;}</style>');
					/*if (carecartSpinnerJquery.browser.mobile){

					}*/
				}
				if (Shopify.shop == 'gammalife.myshopify.com') {
					if (carecartSpinnerJquery.browser.mobile) {
						carecartSpinnerJquery('head').append('<style type="text/css">#wheelify-spin-trigger-cc {bottom: 2vh !important;}</style>');
					} else {
						carecartSpinnerJquery('head').append('<style type="text/css">#wheelify-spin-trigger-cc {bottom: 4vh !important;}</style>');
					}
				}
				//carecartSpinnerJquery('head').append('<style type="text/css"> :empty{display: block; !important;}</style>');

//*********************** Custom Fix - gammalifestyle.myshopify.com - Urgency Bar Top Styling Fix ************************
				/*
								if(Shopify.shop == 'gammalifestyle.myshopify.com' || Shopify.shop == 'almowear.myshopify.com'){
									carecartSpinnerJquery('head').append('<style type="text/css">.bar-top{bottom: auto;}</style>');
								}
				*/
			});

		}, 1000);
	});
/* Script code manually  */
var _gsScope;((_gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window)._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine("plugins.ThrowPropsPlugin",["plugins.TweenPlugin","TweenLite","easing.Ease","utils.VelocityTracker"],function(t,e,i,r){var n,s,o,a,l=function(){t.call(this,"throwProps"),this._overwriteProps.length=0},h=999999999999999,u=_gsScope._gsDefine.globals,c=!1,f={x:1,y:1,z:2,scale:1,scaleX:1,scaleY:1,rotation:1,rotationZ:1,rotationX:2,rotationY:2,skewX:1,skewY:1,xPercent:1,yPercent:1},p=String.fromCharCode(103,114,101,101,110,115,111,99,107,46,99,111,109),d=(String.fromCharCode(47,114,101,113,117,105,114,101,115,45,109,101,109,98,101,114,115,104,105,112,47),function(t){for(var e=-1!==(window?window.location.href:"").indexOf(String.fromCharCode(103,114,101,101,110,115,111,99,107))&&-1!==t.indexOf(String.fromCharCode(108,111,99,97,108,104,111,115,116)),i=[p,String.fromCharCode(99,111,100,101,112,101,110,46,105,111),String.fromCharCode(99,111,100,101,112,101,110,46,100,101,118),String.fromCharCode(99,115,115,45,116,114,105,99,107,115,46,99,111,109),String.fromCharCode(99,100,112,110,46,105,111),String.fromCharCode(103,97,110,110,111,110,46,116,118),String.fromCharCode(99,111,100,101,99,97,110,121,111,110,46,110,101,116),String.fromCharCode(116,104,101,109,101,102,111,114,101,115,116,46,110,101,116),String.fromCharCode(99,101,114,101,98,114,97,120,46,99,111,46,117,107),String.fromCharCode(116,121,109,112,97,110,117,115,46,110,101,116),String.fromCharCode(116,119,101,101,110,109,97,120,46,99,111,109),String.fromCharCode(116,119,101,101,110,108,105,116,101,46,99,111,109),String.fromCharCode(112,108,110,107,114,46,99,111),String.fromCharCode(104,111,116,106,97,114,46,99,111,109),String.fromCharCode(119,101,98,112,97,99,107,98,105,110,46,99,111,109),String.fromCharCode(97,114,99,104,105,118,101,46,111,114,103),String.fromCharCode(106,115,102,105,100,100,108,101,46,110,101,116)],r=i.length;--r>-1;)if(-1!==t.indexOf(i[r]))return!0;return e&&window&&window.console&&console.log(String.fromCharCode(87,65,82,78,73,78,71,58,32,97,32,115,112,101,99,105,97,108,32,118,101,114,115,105,111,110,32,111,102,32)+"ThrowPropsPlugin"+String.fromCharCode(32,105,115,32,114,117,110,110,105,110,103,32,108,111,99,97,108,108,121,44,32,98,117,116,32,105,116,32,119,105,108,108,32,110,111,116,32,119,111,114,107,32,111,110,32,97,32,108,105,118,101,32,100,111,109,97,105,110,32,98,101,99,97,117,115,101,32,105,116,32,105,115,32,97,32,109,101,109,98,101,114,115,104,105,112,32,98,101,110,101,102,105,116,32,111,102,32,67,108,117,98,32,71,114,101,101,110,83,111,99,107,46,32,80,108,101,97,115,101,32,115,105,103,110,32,117,112,32,97,116,32,104,116,116,112,58,47,47,103,114,101,101,110,115,111,99,107,46,99,111,109,47,99,108,117,98,47,32,97,110,100,32,116,104,101,110,32,100,111,119,110,108,111,97,100,32,116,104,101,32,39,114,101,97,108,39,32,118,101,114,115,105,111,110,32,102,114,111,109,32,121,111,117,114,32,71,114,101,101,110,83,111,99,107,32,97,99,99,111,117,110,116,32,119,104,105,99,104,32,104,97,115,32,110,111,32,115,117,99,104,32,108,105,109,105,116,97,116,105,111,110,115,46,32,84,104,101,32,102,105,108,101,32,121,111,117,39,114,101,32,117,115,105,110,103,32,119,97,115,32,108,105,107,101,108,121,32,100,111,119,110,108,111,97,100,101,100,32,102,114,111,109,32,101,108,115,101,119,104,101,114,101,32,111,110,32,116,104,101,32,119,101,98,32,97,110,100,32,105,115,32,114,101,115,116,114,105,99,116,101,100,32,116,111,32,108,111,99,97,108,32,117,115,101,32,111,114,32,111,110,32,115,105,116,101,115,32,108,105,107,101,32,99,111,100,101,112,101,110,46,105,111,46)),e}(window?window.location.host:"")),_=function(t,e,i,r,n){var s,o,a,l,u=e.length,c=0,f=h;if("object"==typeof t){for(;--u>-1;){for(a in s=e[u],o=0,t)o+=(l=s[a]-t[a])*l;f>o&&(c=u,f=o)}if(h>(n||h)&&n<Math.sqrt(f))return t}else for(;--u>-1;)0>(o=(s=e[u])-t)&&(o=-o),o>=f||r>s||s>i||(c=u,f=o);return e[c]},g=function(t,e,i,r,n,s){if("auto"===t.end)return t;var o,a,l=t.end;if(i=isNaN(i)?h:i,r=isNaN(r)?-h:r,"object"==typeof e){if(o=e.calculated?e:("function"==typeof l?l(e):_(e,l,i,r,s))||e,!e.calculated){for(a in o)e[a]=o[a];e.calculated=!0}o=o[n]}else o="function"==typeof l?l(e):l instanceof Array?_(e,l,i,r,s):+l;return o>i?o=i:r>o&&(o=r),{max:o,min:o,unitFactor:t.unitFactor}},m=function(t,e,i){for(var r in e)void 0===t[r]&&r!==i&&(t[r]=e[r]);return t},v=l.calculateChange=function(t,r,n,s){return null==s&&(s=.05),n*s*t/(r instanceof i?r:r?new i(r):e.defaultEase).getRatio(s)},y=l.calculateDuration=function(t,r,n,s,o){o=o||.05;var a=s instanceof i?s:s?new i(s):e.defaultEase;return Math.abs((r-t)*a.getRatio(o)/n/o)},x=l.calculateTweenDuration=function(t,n,s,o,a,h){if("string"==typeof t&&(t=e.selector(t)),!t)return 0;null==s&&(s=10),null==o&&(o=.2),null==a&&(a=1),t.length&&(t=t[0]||t);var u,f,p,d,_,x,w,T,b,P,S,k,C,O=0,R=9999999999,A=n.throwProps||n,D=n.ease instanceof i?n.ease:n.ease?new i(n.ease):e.defaultEase,M=isNaN(A.checkpoint)?.05:+A.checkpoint,N=isNaN(A.resistance)?l.defaultResistance:+A.resistance;if(A.linkedProps)for(k=A.linkedProps.split(","),S={},C=0;C<k.length;C++)(f=A[u=k[C]])&&(void 0!==f.velocity&&"number"==typeof f.velocity?d=+f.velocity||0:d=(b=b||r.getByTarget(t))&&b.isTrackingProp(u)?b.getVelocity(u):0,p=d*(_=isNaN(f.resistance)?N:+f.resistance)>0?d/_:d/-_,x="function"==typeof t[u]?t[u.indexOf("set")||"function"!=typeof t["get"+u.substr(3)]?u:"get"+u.substr(3)]():t[u]||0,S[u]=x+v(d,D,p,M));for(u in A)"resistance"!==u&&"checkpoint"!==u&&"preventOvershoot"!==u&&"linkedProps"!==u&&"radius"!==u&&("object"!=typeof(f=A[u])&&((b=b||r.getByTarget(t))&&b.isTrackingProp(u)?f="number"==typeof f?{velocity:f}:{velocity:b.getVelocity(u)}:p=(d=+f||0)*N>0?d/N:d/-N),"object"==typeof f&&(void 0!==f.velocity&&"number"==typeof f.velocity?d=+f.velocity||0:d=(b=b||r.getByTarget(t))&&b.isTrackingProp(u)?b.getVelocity(u):0,p=d*(_=isNaN(f.resistance)?N:+f.resistance)>0?d/_:d/-_,w=(x="function"==typeof t[u]?t[u.indexOf("set")||"function"!=typeof t["get"+u.substr(3)]?u:"get"+u.substr(3)]():t[u]||0)+v(d,D,p,M),void 0!==f.end&&(f=g(f,S&&u in S?S:w,f.max,f.min,u,A.radius),(h||c)&&(A[u]=m(f,A[u],"end"))),void 0!==f.max&&w>+f.max+1e-10?(P=f.unitFactor||l.defaultUnitFactors[u]||1,R>(T=x>f.max&&f.min!==f.max||d*P>-15&&45>d*P?o+.1*(s-o):y(x,f.max,d,D,M))+a&&(R=T+a)):void 0!==f.min&&w<+f.min-1e-10&&(P=f.unitFactor||l.defaultUnitFactors[u]||1,R>(T=x<f.min&&f.min!==f.max||d*P>-45&&15>d*P?o+.1*(s-o):y(x,f.min,d,D,M))+a&&(R=T+a)),T>O&&(O=T)),p>O&&(O=p));return O>R&&(O=R),O>s?s:o>O?o:O},w=l.prototype=new t("throwProps");return w.constructor=l,l.version="0.11.0",l.API=2,l._autoCSS=!0,l.defaultResistance=100,l.defaultUnitFactors={time:1e3,totalTime:1e3},l.track=function(t,e,i){return r.track(t,e,i)},l.untrack=function(t,e){r.untrack(t,e)},l.isTracking=function(t,e){return r.isTracking(t,e)},l.getVelocity=function(t,e){var i=r.getByTarget(t);return i?i.getVelocity(e):NaN},l._cssRegister=function(){var t=u.com.greensock.plugins.CSSPlugin;if(t){var e=t._internals,i=e._parseToProxy,o=e._setPluginRatio,a=e.CSSPropTween;e._registerComplexSpecialProp("throwProps",{parser:function(t,e,h,u,c,p){p=new l;var d,_,g,m,v={},y={},x={},w={},T={},b={};for(_ in s={},e)"resistance"!==_&&"preventOvershoot"!==_&&"linkedProps"!==_&&"radius"!==_&&("object"==typeof(d=e[_])?(void 0!==d.velocity&&"number"==typeof d.velocity?v[_]=+d.velocity||0:(m=m||r.getByTarget(t),v[_]=m&&m.isTrackingProp(_)?m.getVelocity(_):0),void 0!==d.end&&(w[_]=d.end),void 0!==d.min&&(y[_]=d.min),void 0!==d.max&&(x[_]=d.max),d.preventOvershoot&&(b[_]=!0),void 0!==d.resistance&&(!0,T[_]=d.resistance)):"number"==typeof d?v[_]=d:(m=m||r.getByTarget(t),v[_]=m&&m.isTrackingProp(_)?m.getVelocity(_):d||0),f[_]&&u._enableTransforms(2===f[_]));for(_ in g=i(t,v,u,c,p),n=g.proxy,v=g.end,n)s[_]={velocity:v[_],min:y[_],max:x[_],end:w[_],resistance:T[_],preventOvershoot:b[_]};return null!=e.resistance&&(s.resistance=e.resistance),null!=e.linkedProps&&(s.linkedProps=e.linkedProps),null!=e.radius&&(s.radius=e.radius),e.preventOvershoot&&(s.preventOvershoot=!0),c=new a(t,"throwProps",0,0,g.pt,2),u._overwriteProps.pop(),c.plugin=p,c.setRatio=o,c.data=g,p._onInitTween(n,s,u._tween),c}})}},l.to=function(t,i,r,l,h){i.throwProps||(i={throwProps:i}),0===h&&(i.throwProps.preventOvershoot=!0),c=!0;var u=new e(t,l||1,i);return u.render(0,!0,!0),u.vars.css?(u.duration(x(n,{throwProps:s,ease:i.ease},r,l,h)),u._delay&&!u.vars.immediateRender?u.invalidate():o._onInitTween(n,a,u),c=!1,u):(u.kill(),u=new e(t,x(t,i,r,l,h),i),c=!1,u)},w._onInitTween=function(t,e,i,n){this.target=t,this._props=[],o=this,a=e;var s,l,h,u,f,p,_,y,x,w,T,b,P=i._ease,S=isNaN(e.checkpoint)?.05:+e.checkpoint,k=i._duration,C=e.preventOvershoot,O=0;if(e.linkedProps)for(T=e.linkedProps.split(","),w={},b=0;b<T.length;b++)(l=e[s=T[b]])&&(void 0!==l.velocity&&"number"==typeof l.velocity?f=+l.velocity||0:f=(x=x||r.getByTarget(t))&&x.isTrackingProp(s)?x.getVelocity(s):0,h="function"==typeof t[s]?t[s.indexOf("set")||"function"!=typeof t["get"+s.substr(3)]?s:"get"+s.substr(3)]():t[s]||0,w[s]=h+v(f,P,k,S));for(s in e)if("resistance"!==s&&"checkpoint"!==s&&"preventOvershoot"!==s&&"linkedProps"!==s&&"radius"!==s){if("function"==typeof(l=e[s])&&(l=l(n,t)),"number"==typeof l)f=+l||0;else if("object"!=typeof l||isNaN(l.velocity)){if(!(x=x||r.getByTarget(t))||!x.isTrackingProp(s))throw"ERROR: No velocity was defined in the throwProps tween of "+t+" property: "+s;f=x.getVelocity(s)}else f=+l.velocity;p=v(f,P,k,S),y=0,h=(u="function"==typeof t[s])?t[s.indexOf("set")||"function"!=typeof t["get"+s.substr(3)]?s:"get"+s.substr(3)]():t[s],"object"==typeof l&&(_=h+p,void 0!==l.end&&(l=g(l,w&&s in w?w:_,l.max,l.min,s,e.radius),c&&(e[s]=m(l,e[s],"end"))),void 0!==l.max&&+l.max<_?C||l.preventOvershoot?p=l.max-h:y=l.max-h-p:void 0!==l.min&&+l.min>_&&(C||l.preventOvershoot?p=l.min-h:y=l.min-h-p)),this._overwriteProps[O]=s,this._props[O++]={p:s,s:h,c1:p,c2:y,f:u,r:!1}}return d},w._kill=function(e){for(var i=this._props.length;--i>-1;)null!=e[this._props[i].p]&&this._props.splice(i,1);return t.prototype._kill.call(this,e)},w._mod=function(t){for(var e,i=this._props,r=i.length;--r>-1;)"function"==typeof(e=t[i[r].p]||t.throwProps)&&(i[r].m=e)},w.setRatio=function(t){for(var e,i,r=this._props.length;--r>-1;)i=(e=this._props[r]).s+e.c1*t+e.c2*t*t,e.m?i=e.m(i,this.target):1===t&&(i=(1e4*i+(0>i?-.5:.5)|0)/1e4),e.f?this.target[e.p](i):this.target[e.p]=i},t.activate([l]),l},!0),_gsScope._gsDefine("utils.VelocityTracker",["TweenLite"],function(t){var e,i,r,n=/([A-Z])/g,s={},o={x:1,y:1,z:2,scale:1,scaleX:1,scaleY:1,rotation:1,rotationZ:1,rotationX:2,rotationY:2,skewX:1,skewY:1,xPercent:1,yPercent:1},a=document.defaultView?document.defaultView.getComputedStyle:function(){},l=function(t,e,i){var r=(t._gsTransform||s)[e];return r||0===r?r:(t.style[e]?r=t.style[e]:(i=i||a(t,null))?r=i[e]||i.getPropertyValue(e)||i.getPropertyValue(e.replace(n,"-$1").toLowerCase()):t.currentStyle&&(r=t.currentStyle[e]),parseFloat(r)||0)},h=t.ticker,u=function(t,e,i){this.p=t,this.f=e,this.v1=this.v2=0,this.t1=this.t2=h.time,this.css=!1,this.type="",this._prev=null,i&&(this._next=i,i._prev=this)},c=function(){var t,i,n=e,s=h.time;if(s-r>=.03)for(r,r=s;n;){for(i=n._firstVP;i;)((t=i.css?l(n.target,i.p):i.f?n.target[i.p]():n.target[i.p])!==i.v1||s-i.t1>.15)&&(i.v2=i.v1,i.v1=t,i.t2=i.t1,i.t1=s),i=i._next;n=n._next}},f=function(t){this._lookup={},this.target=t,this.elem=!(!t.style||!t.nodeType),i||(h.addEventListener("tick",c,null,!1,-100),r=h.time,i=!0),e&&(this._next=e,e._prev=this),e=this},p=f.getByTarget=function(t){for(var i=e;i;){if(i.target===t)return i;i=i._next}},d=f.prototype;return d.addProp=function(e,i){if(!this._lookup[e]){var r=this.target,n="function"==typeof r[e],s=n?this._altProp(e):e,a=this._firstVP;this._firstVP=this._lookup[e]=this._lookup[s]=a=new u(s!==e&&0===e.indexOf("set")?s:e,n,a),a.css=this.elem&&(void 0!==this.target.style[a.p]||o[a.p]),a.css&&o[a.p]&&!r._gsTransform&&t.set(r,{x:"+=0",overwrite:!1}),a.type=i||a.css&&0===e.indexOf("rotation")?"deg":"",a.v1=a.v2=a.css?l(r,a.p):n?r[a.p]():r[a.p]}},d.removeProp=function(t){var e=this._lookup[t];e&&(e._prev?e._prev._next=e._next:e===this._firstVP&&(this._firstVP=e._next),e._next&&(e._next._prev=e._prev),this._lookup[t]=0,e.f&&(this._lookup[this._altProp(t)]=0))},d.isTrackingProp=function(t){return this._lookup[t]instanceof u},d.getVelocity=function(t){var e,i,r=this._lookup[t],n=this.target;if(!r)throw"The velocity of "+t+" is not being tracked.";return e=(r.css?l(n,r.p):r.f?n[r.p]():n[r.p])-r.v2,("rad"===r.type||"deg"===r.type)&&((e%=i="rad"===r.type?2*Math.PI:360)!==e%(i/2)&&(e=0>e?e+i:e-i)),e/(h.time-r.t2)},d._altProp=function(t){var e=t.substr(0,3),i=("get"===e?"set":"set"===e?"get":e)+t.substr(3);return"function"==typeof this.target[i]?i:t},f.getByTarget=function(i){var r=e;for("string"==typeof i&&(i=t.selector(i)),i.length&&i!==window&&i[0]&&i[0].style&&!i.nodeType&&(i=i[0]);r;){if(r.target===i)return r;r=r._next}},f.track=function(t,e,i){var r=p(t),n=e.split(","),s=n.length;for(i=(i||"").split(","),r||(r=new f(t));--s>-1;)r.addProp(n[s],i[s]||i[0]);return r},f.untrack=function(t,i){var r=p(t),n=(i||"").split(","),s=n.length;if(r){for(;--s>-1;)r.removeProp(n[s]);r._firstVP&&i||(r._prev?r._prev._next=r._next:r===e&&(e=r._next),r._next&&(r._next._prev=r._prev))}},f.isTracking=function(t,e){var i=p(t);return!!i&&(!(e||!i._firstVP)||i.isTrackingProp(e))},f},!0)}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(t){"use strict";var e=function(){return(_gsScope.GreenSockGlobals||_gsScope).ThrowPropsPlugin};"function"==typeof define&&define.amd?define(["TweenLite"],e):"undefined"!=typeof module&&module.exports&&(require("./TweenLite.js"),module.exports=e()),"function"==typeof define&&define.amd?define(["TweenLite"],e):"undefined"!=typeof module&&module.exports&&(require("./TweenLite.js"),module.exports=e())}(),((_gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window)._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";var t,e,i,r,n,s,o,a,l,h,u,c,f,p,d,_;_gsScope._gsDefine("TweenMax",["core.Animation","core.SimpleTimeline","TweenLite"],function(t,e,i){var r=function(t){var e,i=[],r=t.length;for(e=0;e!==r;i.push(t[e++]));return i},n=function(t,e,i){var r,n,s=t.cycle;for(r in s)n=s[r],t[r]="function"==typeof n?n(i,e[i]):n[i%n.length];delete t.cycle},s=function(t,e,r){i.call(this,t,e,r),this._cycle=0,this._yoyo=!0===this.vars.yoyo,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._dirty=!0,this.render=s.prototype.render},o=1e-10,a=i._internals,l=a.isSelector,h=a.isArray,u=s.prototype=i.to({},.1,{}),c=[];s.version="1.19.0",u.constructor=s,u.kill()._gc=!1,s.killTweensOf=s.killDelayedCallsTo=i.killTweensOf,s.getTweensOf=i.getTweensOf,s.lagSmoothing=i.lagSmoothing,s.ticker=i.ticker,s.render=i.render,u.invalidate=function(){return this._yoyo=!0===this.vars.yoyo,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._uncache(!0),i.prototype.invalidate.call(this)},u.updateTo=function(t,e){var r,n=this.ratio,s=this.vars.immediateRender||t.immediateRender;for(r in e&&this._startTime<this._timeline._time&&(this._startTime=this._timeline._time,this._uncache(!1),this._gc?this._enabled(!0,!1):this._timeline.insert(this,this._startTime-this._delay)),t)this.vars[r]=t[r];if(this._initted||s)if(e)this._initted=!1,s&&this.render(0,!0,!0);else if(this._gc&&this._enabled(!0,!1),this._notifyPluginsOfEnabled&&this._firstPT&&i._onPluginEvent("_onDisable",this),this._time/this._duration>.998){var o=this._totalTime;this.render(0,!0,!1),this._initted=!1,this.render(o,!0,!1)}else if(this._initted=!1,this._init(),this._time>0||s)for(var a,l=1/(1-n),h=this._firstPT;h;)a=h.s+h.c,h.c*=l,h.s=a-h.c,h=h._next;return this},u.render=function(t,e,i){this._initted||0===this._duration&&this.vars.repeat&&this.invalidate();var r,n,s,l,h,u,c,f,p=this._dirty?this.totalDuration():this._totalDuration,d=this._time,_=this._totalTime,g=this._cycle,m=this._duration,v=this._rawPrevTime;if(t>=p-1e-7?(this._totalTime=p,this._cycle=this._repeat,this._yoyo&&0!=(1&this._cycle)?(this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0):(this._time=m,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1),this._reversed||(r=!0,n="onComplete",i=i||this._timeline.autoRemoveChildren),0===m&&(this._initted||!this.vars.lazy||i)&&(this._startTime===this._timeline._duration&&(t=0),(0>v||0>=t&&t>=-1e-7||v===o&&"isPause"!==this.data)&&v!==t&&(i=!0,v>o&&(n="onReverseComplete")),this._rawPrevTime=f=!e||t||v===t?t:o)):1e-7>t?(this._totalTime=this._time=this._cycle=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==_||0===m&&v>0)&&(n="onReverseComplete",r=this._reversed),0>t&&(this._active=!1,0===m&&(this._initted||!this.vars.lazy||i)&&(v>=0&&(i=!0),this._rawPrevTime=f=!e||t||v===t?t:o)),this._initted||(i=!0)):(this._totalTime=this._time=t,0!==this._repeat&&(l=m+this._repeatDelay,this._cycle=this._totalTime/l>>0,0!==this._cycle&&this._cycle===this._totalTime/l&&t>=_&&this._cycle--,this._time=this._totalTime-this._cycle*l,this._yoyo&&0!=(1&this._cycle)&&(this._time=m-this._time),this._time>m?this._time=m:this._time<0&&(this._time=0)),this._easeType?(h=this._time/m,(1===(u=this._easeType)||3===u&&h>=.5)&&(h=1-h),3===u&&(h*=2),1===(c=this._easePower)?h*=h:2===c?h*=h*h:3===c?h*=h*h*h:4===c&&(h*=h*h*h*h),1===u?this.ratio=1-h:2===u?this.ratio=h:this._time/m<.5?this.ratio=h/2:this.ratio=1-h/2):this.ratio=this._ease.getRatio(this._time/m)),d!==this._time||i||g!==this._cycle){if(!this._initted){if(this._init(),!this._initted||this._gc)return;if(!i&&this._firstPT&&(!1!==this.vars.lazy&&this._duration||this.vars.lazy&&!this._duration))return this._time=d,this._totalTime=_,this._rawPrevTime=v,this._cycle=g,a.lazyTweens.push(this),void(this._lazy=[t,e]);this._time&&!r?this.ratio=this._ease.getRatio(this._time/m):r&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(0===this._time?0:1))}for(!1!==this._lazy&&(this._lazy=!1),this._active||!this._paused&&this._time!==d&&t>=0&&(this._active=!0),0===_&&(2===this._initted&&t>0&&this._init(),this._startAt&&(t>=0?this._startAt.render(t,e,i):n||(n="_dummyGS")),this.vars.onStart&&(0!==this._totalTime||0===m)&&(e||this._callback("onStart"))),s=this._firstPT;s;)s.f?s.t[s.p](s.c*this.ratio+s.s):s.t[s.p]=s.c*this.ratio+s.s,s=s._next;this._onUpdate&&(0>t&&this._startAt&&this._startTime&&this._startAt.render(t,e,i),e||(this._totalTime!==_||n)&&this._callback("onUpdate")),this._cycle!==g&&(e||this._gc||this.vars.onRepeat&&this._callback("onRepeat")),n&&(!this._gc||i)&&(0>t&&this._startAt&&!this._onUpdate&&this._startTime&&this._startAt.render(t,e,i),r&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[n]&&this._callback(n),0===m&&this._rawPrevTime===o&&f!==o&&(this._rawPrevTime=0))}else _!==this._totalTime&&this._onUpdate&&(e||this._callback("onUpdate"))},s.to=function(t,e,i){return new s(t,e,i)},s.from=function(t,e,i){return i.runBackwards=!0,i.immediateRender=0!=i.immediateRender,new s(t,e,i)},s.fromTo=function(t,e,i,r){return r.startAt=i,r.immediateRender=0!=r.immediateRender&&0!=i.immediateRender,new s(t,e,r)},s.staggerTo=s.allTo=function(t,e,o,a,u,f,p){a=a||0;var d,_,g,m,v=0,y=[],x=function(){o.onComplete&&o.onComplete.apply(o.onCompleteScope||this,arguments),u.apply(p||o.callbackScope||this,f||c)},w=o.cycle,T=o.startAt&&o.startAt.cycle;for(h(t)||("string"==typeof t&&(t=i.selector(t)||t),l(t)&&(t=r(t))),t=t||[],0>a&&((t=r(t)).reverse(),a*=-1),d=t.length-1,g=0;d>=g;g++){for(m in _={},o)_[m]=o[m];if(w&&(n(_,t,g),null!=_.duration&&(e=_.duration,delete _.duration)),T){for(m in T=_.startAt={},o.startAt)T[m]=o.startAt[m];n(_.startAt,t,g)}_.delay=v+(_.delay||0),g===d&&u&&(_.onComplete=x),y[g]=new s(t[g],e,_),v+=a}return y},s.staggerFrom=s.allFrom=function(t,e,i,r,n,o,a){return i.runBackwards=!0,i.immediateRender=0!=i.immediateRender,s.staggerTo(t,e,i,r,n,o,a)},s.staggerFromTo=s.allFromTo=function(t,e,i,r,n,o,a,l){return r.startAt=i,r.immediateRender=0!=r.immediateRender&&0!=i.immediateRender,s.staggerTo(t,e,r,n,o,a,l)},s.delayedCall=function(t,e,i,r,n){return new s(e,0,{delay:t,onComplete:e,onCompleteParams:i,callbackScope:r,onReverseComplete:e,onReverseCompleteParams:i,immediateRender:!1,useFrames:n,overwrite:0})},s.set=function(t,e){return new s(t,0,e)},s.isTweening=function(t){return i.getTweensOf(t,!0).length>0};var f=function(t,e){for(var r=[],n=0,s=t._first;s;)s instanceof i?r[n++]=s:(e&&(r[n++]=s),n=(r=r.concat(f(s,e))).length),s=s._next;return r},p=s.getAllTweens=function(e){return f(t._rootTimeline,e).concat(f(t._rootFramesTimeline,e))};s.killAll=function(t,i,r,n){null==i&&(i=!0),null==r&&(r=!0);var s,o,a,l=p(0!=n),h=l.length,u=i&&r&&n;for(a=0;h>a;a++)o=l[a],(u||o instanceof e||(s=o.target===o.vars.onComplete)&&r||i&&!s)&&(t?o.totalTime(o._reversed?0:o.totalDuration()):o._enabled(!1,!1))},s.killChildTweensOf=function(t,e){if(null!=t){var n,o,u,c,f,p=a.tweenLookup;if("string"==typeof t&&(t=i.selector(t)||t),l(t)&&(t=r(t)),h(t))for(c=t.length;--c>-1;)s.killChildTweensOf(t[c],e);else{for(u in n=[],p)for(o=p[u].target.parentNode;o;)o===t&&(n=n.concat(p[u].tweens)),o=o.parentNode;for(f=n.length,c=0;f>c;c++)e&&n[c].totalTime(n[c].totalDuration()),n[c]._enabled(!1,!1)}}};var d=function(t,i,r,n){i=!1!==i,r=!1!==r;for(var s,o,a=p(n=!1!==n),l=i&&r&&n,h=a.length;--h>-1;)o=a[h],(l||o instanceof e||(s=o.target===o.vars.onComplete)&&r||i&&!s)&&o.paused(t)};return s.pauseAll=function(t,e,i){d(!0,t,e,i)},s.resumeAll=function(t,e,i){d(!1,t,e,i)},s.globalTimeScale=function(e){var r=t._rootTimeline,n=i.ticker.time;return arguments.length?(e=e||o,r._startTime=n-(n-r._startTime)*r._timeScale/e,r=t._rootFramesTimeline,n=i.ticker.frame,r._startTime=n-(n-r._startTime)*r._timeScale/e,r._timeScale=t._rootTimeline._timeScale=e,e):r._timeScale},u.progress=function(t,e){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&0!=(1&this._cycle)?1-t:t)+this._cycle*(this._duration+this._repeatDelay),e):this._time/this.duration()},u.totalProgress=function(t,e){return arguments.length?this.totalTime(this.totalDuration()*t,e):this._totalTime/this.totalDuration()},u.time=function(t,e){return arguments.length?(this._dirty&&this.totalDuration(),t>this._duration&&(t=this._duration),this._yoyo&&0!=(1&this._cycle)?t=this._duration-t+this._cycle*(this._duration+this._repeatDelay):0!==this._repeat&&(t+=this._cycle*(this._duration+this._repeatDelay)),this.totalTime(t,e)):this._time},u.duration=function(e){return arguments.length?t.prototype.duration.call(this,e):this._duration},u.totalDuration=function(t){return arguments.length?-1===this._repeat?this:this.duration((t-this._repeat*this._repeatDelay)/(this._repeat+1)):(this._dirty&&(this._totalDuration=-1===this._repeat?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat,this._dirty=!1),this._totalDuration)},u.repeat=function(t){return arguments.length?(this._repeat=t,this._uncache(!0)):this._repeat},u.repeatDelay=function(t){return arguments.length?(this._repeatDelay=t,this._uncache(!0)):this._repeatDelay},u.yoyo=function(t){return arguments.length?(this._yoyo=t,this):this._yoyo},s},!0),_gsScope._gsDefine("TimelineLite",["core.Animation","core.SimpleTimeline","TweenLite"],function(t,e,i){var r=function(t){e.call(this,t),this._labels={},this.autoRemoveChildren=!0===this.vars.autoRemoveChildren,this.smoothChildTiming=!0===this.vars.smoothChildTiming,this._sortChildren=!0,this._onUpdate=this.vars.onUpdate;var i,r,n=this.vars;for(r in n)i=n[r],l(i)&&-1!==i.join("").indexOf("{self}")&&(n[r]=this._swapSelfInParams(i));l(n.tweens)&&this.add(n.tweens,0,n.align,n.stagger)},n=1e-10,s=i._internals,o=r._internals={},a=s.isSelector,l=s.isArray,h=s.lazyTweens,u=s.lazyRender,c=_gsScope._gsDefine.globals,f=function(t){var e,i={};for(e in t)i[e]=t[e];return i},p=function(t,e,i){var r,n,s=t.cycle;for(r in s)n=s[r],t[r]="function"==typeof n?n.call(e[i],i):n[i%n.length];delete t.cycle},d=o.pauseCallback=function(){},_=function(t){var e,i=[],r=t.length;for(e=0;e!==r;i.push(t[e++]));return i},g=r.prototype=new e;return r.version="1.19.0",g.constructor=r,g.kill()._gc=g._forcingPlayhead=g._hasPause=!1,g.to=function(t,e,r,n){var s=r.repeat&&c.TweenMax||i;return e?this.add(new s(t,e,r),n):this.set(t,r,n)},g.from=function(t,e,r,n){return this.add((r.repeat&&c.TweenMax||i).from(t,e,r),n)},g.fromTo=function(t,e,r,n,s){var o=n.repeat&&c.TweenMax||i;return e?this.add(o.fromTo(t,e,r,n),s):this.set(t,n,s)},g.staggerTo=function(t,e,n,s,o,l,h,u){var c,d,g=new r({onComplete:l,onCompleteParams:h,callbackScope:u,smoothChildTiming:this.smoothChildTiming}),m=n.cycle;for("string"==typeof t&&(t=i.selector(t)||t),a(t=t||[])&&(t=_(t)),0>(s=s||0)&&((t=_(t)).reverse(),s*=-1),d=0;d<t.length;d++)(c=f(n)).startAt&&(c.startAt=f(c.startAt),c.startAt.cycle&&p(c.startAt,t,d)),m&&(p(c,t,d),null!=c.duration&&(e=c.duration,delete c.duration)),g.to(t[d],e,c,d*s);return this.add(g,o)},g.staggerFrom=function(t,e,i,r,n,s,o,a){return i.immediateRender=0!=i.immediateRender,i.runBackwards=!0,this.staggerTo(t,e,i,r,n,s,o,a)},g.staggerFromTo=function(t,e,i,r,n,s,o,a,l){return r.startAt=i,r.immediateRender=0!=r.immediateRender&&0!=i.immediateRender,this.staggerTo(t,e,r,n,s,o,a,l)},g.call=function(t,e,r,n){return this.add(i.delayedCall(0,t,e,r),n)},g.set=function(t,e,r){return r=this._parseTimeOrLabel(r,0,!0),null==e.immediateRender&&(e.immediateRender=r===this._time&&!this._paused),this.add(new i(t,0,e),r)},r.exportRoot=function(t,e){null==(t=t||{}).smoothChildTiming&&(t.smoothChildTiming=!0);var n,s,o=new r(t),a=o._timeline;for(null==e&&(e=!0),a._remove(o,!0),o._startTime=0,o._rawPrevTime=o._time=o._totalTime=a._time,n=a._first;n;)s=n._next,e&&n instanceof i&&n.target===n.vars.onComplete||o.add(n,n._startTime-n._delay),n=s;return a.add(o,0),o},g.add=function(n,s,o,a){var h,u,c,f,p,d;if("number"!=typeof s&&(s=this._parseTimeOrLabel(s,0,!0,n)),!(n instanceof t)){if(n instanceof Array||n&&n.push&&l(n)){for(o=o||"normal",a=a||0,h=s,u=n.length,c=0;u>c;c++)l(f=n[c])&&(f=new r({tweens:f})),this.add(f,h),"string"!=typeof f&&"function"!=typeof f&&("sequence"===o?h=f._startTime+f.totalDuration()/f._timeScale:"start"===o&&(f._startTime-=f.delay())),h+=a;return this._uncache(!0)}if("string"==typeof n)return this.addLabel(n,s);if("function"!=typeof n)throw"Cannot add "+n+" into the timeline; it is not a tween, timeline, function, or string.";n=i.delayedCall(0,n)}if(e.prototype.add.call(this,n,s),(this._gc||this._time===this._duration)&&!this._paused&&this._duration<this.duration())for(d=(p=this).rawTime()>n._startTime;p._timeline;)d&&p._timeline.smoothChildTiming?p.totalTime(p._totalTime,!0):p._gc&&p._enabled(!0,!1),p=p._timeline;return this},g.remove=function(e){if(e instanceof t){this._remove(e,!1);var i=e._timeline=e.vars.useFrames?t._rootFramesTimeline:t._rootTimeline;return e._startTime=(e._paused?e._pauseTime:i._time)-(e._reversed?e.totalDuration()-e._totalTime:e._totalTime)/e._timeScale,this}if(e instanceof Array||e&&e.push&&l(e)){for(var r=e.length;--r>-1;)this.remove(e[r]);return this}return"string"==typeof e?this.removeLabel(e):this.kill(null,e)},g._remove=function(t,i){e.prototype._remove.call(this,t,i);var r=this._last;return r?this._time>r._startTime+r._totalDuration/r._timeScale&&(this._time=this.duration(),this._totalTime=this._totalDuration):this._time=this._totalTime=this._duration=this._totalDuration=0,this},g.append=function(t,e){return this.add(t,this._parseTimeOrLabel(null,e,!0,t))},g.insert=g.insertMultiple=function(t,e,i,r){return this.add(t,e||0,i,r)},g.appendMultiple=function(t,e,i,r){return this.add(t,this._parseTimeOrLabel(null,e,!0,t),i,r)},g.addLabel=function(t,e){return this._labels[t]=this._parseTimeOrLabel(e),this},g.addPause=function(t,e,r,n){var s=i.delayedCall(0,d,r,n||this);return s.vars.onComplete=s.vars.onReverseComplete=e,s.data="isPause",this._hasPause=!0,this.add(s,t)},g.removeLabel=function(t){return delete this._labels[t],this},g.getLabelTime=function(t){return null!=this._labels[t]?this._labels[t]:-1},g._parseTimeOrLabel=function(e,i,r,n){var s;if(n instanceof t&&n.timeline===this)this.remove(n);else if(n&&(n instanceof Array||n.push&&l(n)))for(s=n.length;--s>-1;)n[s]instanceof t&&n[s].timeline===this&&this.remove(n[s]);if("string"==typeof i)return this._parseTimeOrLabel(i,r&&"number"==typeof e&&null==this._labels[i]?e-this.duration():0,r);if(i=i||0,"string"!=typeof e||!isNaN(e)&&null==this._labels[e])null==e&&(e=this.duration());else{if(-1===(s=e.indexOf("=")))return null==this._labels[e]?r?this._labels[e]=this.duration()+i:i:this._labels[e]+i;i=parseInt(e.charAt(s-1)+"1",10)*Number(e.substr(s+1)),e=s>1?this._parseTimeOrLabel(e.substr(0,s-1),0,r):this.duration()}return Number(e)+i},g.seek=function(t,e){return this.totalTime("number"==typeof t?t:this._parseTimeOrLabel(t),!1!==e)},g.stop=function(){return this.paused(!0)},g.gotoAndPlay=function(t,e){return this.play(t,e)},g.gotoAndStop=function(t,e){return this.pause(t,e)},g.render=function(t,e,i){this._gc&&this._enabled(!0,!1);var r,s,o,a,l,c,f,p=this._dirty?this.totalDuration():this._totalDuration,d=this._time,_=this._startTime,g=this._timeScale,m=this._paused;if(t>=p-1e-7)this._totalTime=this._time=p,this._reversed||this._hasPausedChild()||(s=!0,a="onComplete",l=!!this._timeline.autoRemoveChildren,0===this._duration&&(0>=t&&t>=-1e-7||this._rawPrevTime<0||this._rawPrevTime===n)&&this._rawPrevTime!==t&&this._first&&(l=!0,this._rawPrevTime>n&&(a="onReverseComplete"))),this._rawPrevTime=this._duration||!e||t||this._rawPrevTime===t?t:n,t=p+1e-4;else if(1e-7>t)if(this._totalTime=this._time=0,(0!==d||0===this._duration&&this._rawPrevTime!==n&&(this._rawPrevTime>0||0>t&&this._rawPrevTime>=0))&&(a="onReverseComplete",s=this._reversed),0>t)this._active=!1,this._timeline.autoRemoveChildren&&this._reversed?(l=s=!0,a="onReverseComplete"):this._rawPrevTime>=0&&this._first&&(l=!0),this._rawPrevTime=t;else{if(this._rawPrevTime=this._duration||!e||t||this._rawPrevTime===t?t:n,0===t&&s)for(r=this._first;r&&0===r._startTime;)r._duration||(s=!1),r=r._next;t=0,this._initted||(l=!0)}else{if(this._hasPause&&!this._forcingPlayhead&&!e){if(t>=d)for(r=this._first;r&&r._startTime<=t&&!c;)r._duration||"isPause"!==r.data||r.ratio||0===r._startTime&&0===this._rawPrevTime||(c=r),r=r._next;else for(r=this._last;r&&r._startTime>=t&&!c;)r._duration||"isPause"===r.data&&r._rawPrevTime>0&&(c=r),r=r._prev;c&&(this._time=t=c._startTime,this._totalTime=t+this._cycle*(this._totalDuration+this._repeatDelay))}this._totalTime=this._time=this._rawPrevTime=t}if(this._time!==d&&this._first||i||l||c){if(this._initted||(this._initted=!0),this._active||!this._paused&&this._time!==d&&t>0&&(this._active=!0),0===d&&this.vars.onStart&&(0===this._time&&this._duration||e||this._callback("onStart")),(f=this._time)>=d)for(r=this._first;r&&(o=r._next,f===this._time&&(!this._paused||m));)(r._active||r._startTime<=f&&!r._paused&&!r._gc)&&(c===r&&this.pause(),r._reversed?r.render((r._dirty?r.totalDuration():r._totalDuration)-(t-r._startTime)*r._timeScale,e,i):r.render((t-r._startTime)*r._timeScale,e,i)),r=o;else for(r=this._last;r&&(o=r._prev,f===this._time&&(!this._paused||m));){if(r._active||r._startTime<=d&&!r._paused&&!r._gc){if(c===r){for(c=r._prev;c&&c.endTime()>this._time;)c.render(c._reversed?c.totalDuration()-(t-c._startTime)*c._timeScale:(t-c._startTime)*c._timeScale,e,i),c=c._prev;c=null,this.pause()}r._reversed?r.render((r._dirty?r.totalDuration():r._totalDuration)-(t-r._startTime)*r._timeScale,e,i):r.render((t-r._startTime)*r._timeScale,e,i)}r=o}this._onUpdate&&(e||(h.length&&u(),this._callback("onUpdate"))),a&&(this._gc||(_===this._startTime||g!==this._timeScale)&&(0===this._time||p>=this.totalDuration())&&(s&&(h.length&&u(),this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[a]&&this._callback(a)))}},g._hasPausedChild=function(){for(var t=this._first;t;){if(t._paused||t instanceof r&&t._hasPausedChild())return!0;t=t._next}return!1},g.getChildren=function(t,e,r,n){n=n||-9999999999;for(var s=[],o=this._first,a=0;o;)o._startTime<n||(o instanceof i?!1!==e&&(s[a++]=o):(!1!==r&&(s[a++]=o),!1!==t&&(a=(s=s.concat(o.getChildren(!0,e,r))).length))),o=o._next;return s},g.getTweensOf=function(t,e){var r,n,s=this._gc,o=[],a=0;for(s&&this._enabled(!0,!0),n=(r=i.getTweensOf(t)).length;--n>-1;)(r[n].timeline===this||e&&this._contains(r[n]))&&(o[a++]=r[n]);return s&&this._enabled(!1,!0),o},g.recent=function(){return this._recent},g._contains=function(t){for(var e=t.timeline;e;){if(e===this)return!0;e=e.timeline}return!1},g.shiftChildren=function(t,e,i){i=i||0;for(var r,n=this._first,s=this._labels;n;)n._startTime>=i&&(n._startTime+=t),n=n._next;if(e)for(r in s)s[r]>=i&&(s[r]+=t);return this._uncache(!0)},g._kill=function(t,e){if(!t&&!e)return this._enabled(!1,!1);for(var i=e?this.getTweensOf(e):this.getChildren(!0,!0,!1),r=i.length,n=!1;--r>-1;)i[r]._kill(t,e)&&(n=!0);return n},g.clear=function(t){var e=this.getChildren(!1,!0,!0),i=e.length;for(this._time=this._totalTime=0;--i>-1;)e[i]._enabled(!1,!1);return!1!==t&&(this._labels={}),this._uncache(!0)},g.invalidate=function(){for(var e=this._first;e;)e.invalidate(),e=e._next;return t.prototype.invalidate.call(this)},g._enabled=function(t,i){if(t===this._gc)for(var r=this._first;r;)r._enabled(t,!0),r=r._next;return e.prototype._enabled.call(this,t,i)},g.totalTime=function(e,i,r){this._forcingPlayhead=!0;var n=t.prototype.totalTime.apply(this,arguments);return this._forcingPlayhead=!1,n},g.duration=function(t){return arguments.length?(0!==this.duration()&&0!==t&&this.timeScale(this._duration/t),this):(this._dirty&&this.totalDuration(),this._duration)},g.totalDuration=function(t){if(!arguments.length){if(this._dirty){for(var e,i,r=0,n=this._last,s=999999999999;n;)e=n._prev,n._dirty&&n.totalDuration(),n._startTime>s&&this._sortChildren&&!n._paused?this.add(n,n._startTime-n._delay):s=n._startTime,n._startTime<0&&!n._paused&&(r-=n._startTime,this._timeline.smoothChildTiming&&(this._startTime+=n._startTime/this._timeScale),this.shiftChildren(-n._startTime,!1,-9999999999),s=0),(i=n._startTime+n._totalDuration/n._timeScale)>r&&(r=i),n=e;this._duration=this._totalDuration=r,this._dirty=!1}return this._totalDuration}return t&&this.totalDuration()?this.timeScale(this._totalDuration/t):this},g.paused=function(e){if(!e)for(var i=this._first,r=this._time;i;)i._startTime===r&&"isPause"===i.data&&(i._rawPrevTime=0),i=i._next;return t.prototype.paused.apply(this,arguments)},g.usesFrames=function(){for(var e=this._timeline;e._timeline;)e=e._timeline;return e===t._rootFramesTimeline},g.rawTime=function(){return this._paused?this._totalTime:(this._timeline.rawTime()-this._startTime)*this._timeScale},r},!0),_gsScope._gsDefine("TimelineMax",["TimelineLite","TweenLite","easing.Ease"],function(t,e,i){var r=function(e){t.call(this,e),this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._cycle=0,this._yoyo=!0===this.vars.yoyo,this._dirty=!0},n=1e-10,s=e._internals,o=s.lazyTweens,a=s.lazyRender,l=_gsScope._gsDefine.globals,h=new i(null,null,1,0),u=r.prototype=new t;return u.constructor=r,u.kill()._gc=!1,r.version="1.19.0",u.invalidate=function(){return this._yoyo=!0===this.vars.yoyo,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._uncache(!0),t.prototype.invalidate.call(this)},u.addCallback=function(t,i,r,n){return this.add(e.delayedCall(0,t,r,n),i)},u.removeCallback=function(t,e){if(t)if(null==e)this._kill(null,t);else for(var i=this.getTweensOf(t,!1),r=i.length,n=this._parseTimeOrLabel(e);--r>-1;)i[r]._startTime===n&&i[r]._enabled(!1,!1);return this},u.removePause=function(e){return this.removeCallback(t._internals.pauseCallback,e)},u.tweenTo=function(t,i){i=i||{};var r,n,s,o={ease:h,useFrames:this.usesFrames(),immediateRender:!1},a=i.repeat&&l.TweenMax||e;for(n in i)o[n]=i[n];return o.time=this._parseTimeOrLabel(t),r=Math.abs(Number(o.time)-this._time)/this._timeScale||.001,s=new a(this,r,o),o.onStart=function(){s.target.paused(!0),s.vars.time!==s.target.time()&&r===s.duration()&&s.duration(Math.abs(s.vars.time-s.target.time())/s.target._timeScale),i.onStart&&s._callback("onStart")},s},u.tweenFromTo=function(t,e,i){i=i||{},t=this._parseTimeOrLabel(t),i.startAt={onComplete:this.seek,onCompleteParams:[t],callbackScope:this},i.immediateRender=!1!==i.immediateRender;var r=this.tweenTo(e,i);return r.duration(Math.abs(r.vars.time-t)/this._timeScale||.001)},u.render=function(t,e,i){this._gc&&this._enabled(!0,!1);var r,s,l,h,u,c,f,p,d=this._dirty?this.totalDuration():this._totalDuration,_=this._duration,g=this._time,m=this._totalTime,v=this._startTime,y=this._timeScale,x=this._rawPrevTime,w=this._paused,T=this._cycle;if(t>=d-1e-7)this._locked||(this._totalTime=d,this._cycle=this._repeat),this._reversed||this._hasPausedChild()||(s=!0,h="onComplete",u=!!this._timeline.autoRemoveChildren,0===this._duration&&(0>=t&&t>=-1e-7||0>x||x===n)&&x!==t&&this._first&&(u=!0,x>n&&(h="onReverseComplete"))),this._rawPrevTime=this._duration||!e||t||this._rawPrevTime===t?t:n,this._yoyo&&0!=(1&this._cycle)?this._time=t=0:(this._time=_,t=_+1e-4);else if(1e-7>t)if(this._locked||(this._totalTime=this._cycle=0),this._time=0,(0!==g||0===_&&x!==n&&(x>0||0>t&&x>=0)&&!this._locked)&&(h="onReverseComplete",s=this._reversed),0>t)this._active=!1,this._timeline.autoRemoveChildren&&this._reversed?(u=s=!0,h="onReverseComplete"):x>=0&&this._first&&(u=!0),this._rawPrevTime=t;else{if(this._rawPrevTime=_||!e||t||this._rawPrevTime===t?t:n,0===t&&s)for(r=this._first;r&&0===r._startTime;)r._duration||(s=!1),r=r._next;t=0,this._initted||(u=!0)}else if(0===_&&0>x&&(u=!0),this._time=this._rawPrevTime=t,this._locked||(this._totalTime=t,0!==this._repeat&&(c=_+this._repeatDelay,this._cycle=this._totalTime/c>>0,0!==this._cycle&&this._cycle===this._totalTime/c&&t>=m&&this._cycle--,this._time=this._totalTime-this._cycle*c,this._yoyo&&0!=(1&this._cycle)&&(this._time=_-this._time),this._time>_?(this._time=_,t=_+1e-4):this._time<0?this._time=t=0:t=this._time)),this._hasPause&&!this._forcingPlayhead&&!e){if((t=this._time)>=g)for(r=this._first;r&&r._startTime<=t&&!f;)r._duration||"isPause"!==r.data||r.ratio||0===r._startTime&&0===this._rawPrevTime||(f=r),r=r._next;else for(r=this._last;r&&r._startTime>=t&&!f;)r._duration||"isPause"===r.data&&r._rawPrevTime>0&&(f=r),r=r._prev;f&&(this._time=t=f._startTime,this._totalTime=t+this._cycle*(this._totalDuration+this._repeatDelay))}if(this._cycle!==T&&!this._locked){var b=this._yoyo&&0!=(1&T),P=b===(this._yoyo&&0!=(1&this._cycle)),S=this._totalTime,k=this._cycle,C=this._rawPrevTime,O=this._time;if(this._totalTime=T*_,this._cycle<T?b=!b:this._totalTime+=_,this._time=g,this._rawPrevTime=0===_?x-1e-4:x,this._cycle=T,this._locked=!0,g=b?0:_,this.render(g,e,0===_),e||this._gc||this.vars.onRepeat&&this._callback("onRepeat"),g!==this._time)return;if(P&&(g=b?_+1e-4:-1e-4,this.render(g,!0,!1)),this._locked=!1,this._paused&&!w)return;this._time=O,this._totalTime=S,this._cycle=k,this._rawPrevTime=C}if(this._time!==g&&this._first||i||u||f){if(this._initted||(this._initted=!0),this._active||!this._paused&&this._totalTime!==m&&t>0&&(this._active=!0),0===m&&this.vars.onStart&&(0===this._totalTime&&this._totalDuration||e||this._callback("onStart")),(p=this._time)>=g)for(r=this._first;r&&(l=r._next,p===this._time&&(!this._paused||w));)(r._active||r._startTime<=this._time&&!r._paused&&!r._gc)&&(f===r&&this.pause(),r._reversed?r.render((r._dirty?r.totalDuration():r._totalDuration)-(t-r._startTime)*r._timeScale,e,i):r.render((t-r._startTime)*r._timeScale,e,i)),r=l;else for(r=this._last;r&&(l=r._prev,p===this._time&&(!this._paused||w));){if(r._active||r._startTime<=g&&!r._paused&&!r._gc){if(f===r){for(f=r._prev;f&&f.endTime()>this._time;)f.render(f._reversed?f.totalDuration()-(t-f._startTime)*f._timeScale:(t-f._startTime)*f._timeScale,e,i),f=f._prev;f=null,this.pause()}r._reversed?r.render((r._dirty?r.totalDuration():r._totalDuration)-(t-r._startTime)*r._timeScale,e,i):r.render((t-r._startTime)*r._timeScale,e,i)}r=l}this._onUpdate&&(e||(o.length&&a(),this._callback("onUpdate"))),h&&(this._locked||this._gc||(v===this._startTime||y!==this._timeScale)&&(0===this._time||d>=this.totalDuration())&&(s&&(o.length&&a(),this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[h]&&this._callback(h)))}else m!==this._totalTime&&this._onUpdate&&(e||this._callback("onUpdate"))},u.getActive=function(t,e,i){null==t&&(t=!0),null==e&&(e=!0),null==i&&(i=!1);var r,n,s=[],o=this.getChildren(t,e,i),a=0,l=o.length;for(r=0;l>r;r++)(n=o[r]).isActive()&&(s[a++]=n);return s},u.getLabelAfter=function(t){t||0!==t&&(t=this._time);var e,i=this.getLabelsArray(),r=i.length;for(e=0;r>e;e++)if(i[e].time>t)return i[e].name;return null},u.getLabelBefore=function(t){null==t&&(t=this._time);for(var e=this.getLabelsArray(),i=e.length;--i>-1;)if(e[i].time<t)return e[i].name;return null},u.getLabelsArray=function(){var t,e=[],i=0;for(t in this._labels)e[i++]={time:this._labels[t],name:t};return e.sort(function(t,e){return t.time-e.time}),e},u.progress=function(t,e){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&0!=(1&this._cycle)?1-t:t)+this._cycle*(this._duration+this._repeatDelay),e):this._time/this.duration()},u.totalProgress=function(t,e){return arguments.length?this.totalTime(this.totalDuration()*t,e):this._totalTime/this.totalDuration()},u.totalDuration=function(e){return arguments.length?-1!==this._repeat&&e?this.timeScale(this.totalDuration()/e):this:(this._dirty&&(t.prototype.totalDuration.call(this),this._totalDuration=-1===this._repeat?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat),this._totalDuration)},u.time=function(t,e){return arguments.length?(this._dirty&&this.totalDuration(),t>this._duration&&(t=this._duration),this._yoyo&&0!=(1&this._cycle)?t=this._duration-t+this._cycle*(this._duration+this._repeatDelay):0!==this._repeat&&(t+=this._cycle*(this._duration+this._repeatDelay)),this.totalTime(t,e)):this._time},u.repeat=function(t){return arguments.length?(this._repeat=t,this._uncache(!0)):this._repeat},u.repeatDelay=function(t){return arguments.length?(this._repeatDelay=t,this._uncache(!0)):this._repeatDelay},u.yoyo=function(t){return arguments.length?(this._yoyo=t,this):this._yoyo},u.currentLabel=function(t){return arguments.length?this.seek(t,!0):this.getLabelBefore(this._time+1e-8)},r},!0),t=180/Math.PI,e=[],i=[],r=[],n={},s=_gsScope._gsDefine.globals,o=function(t,e,i,r){i===r&&(i=r-(r-e)/1e6),t===e&&(e=t+(i-t)/1e6),this.a=t,this.b=e,this.c=i,this.d=r,this.da=r-t,this.ca=i-t,this.ba=e-t},a=function(t,e,i,r){var n={a:t},s={},o={},a={c:r},l=(t+e)/2,h=(e+i)/2,u=(i+r)/2,c=(l+h)/2,f=(h+u)/2,p=(f-c)/8;return n.b=l+(t-l)/4,s.b=c+p,n.c=s.a=(n.b+s.b)/2,s.c=o.a=(c+f)/2,o.b=f-p,a.b=u+(r-u)/4,o.c=a.a=(o.b+a.b)/2,[n,s,o,a]},l=function(t,n,s,o,l){var h,u,c,f,p,d,_,g,m,v,y,x,w,T=t.length-1,b=0,P=t[0].a;for(h=0;T>h;h++)u=(p=t[b]).a,c=p.d,f=t[b+1].d,l?(y=e[h],w=((x=i[h])+y)*n*.25/(o?.5:r[h]||.5),g=c-((d=c-(c-u)*(o?.5*n:0!==y?w/y:0))+(((_=c+(f-c)*(o?.5*n:0!==x?w/x:0))-d)*(3*y/(y+x)+.5)/4||0))):g=c-((d=c-(c-u)*n*.5)+(_=c+(f-c)*n*.5))/2,d+=g,_+=g,p.c=m=d,p.b=0!==h?P:P=p.a+.6*(p.c-p.a),p.da=c-u,p.ca=m-u,p.ba=P-u,s?(v=a(u,P,m,c),t.splice(b,1,v[0],v[1],v[2],v[3]),b+=4):b++,P=_;(p=t[b]).b=P,p.c=P+.4*(p.d-P),p.da=p.d-p.a,p.ca=p.c-p.a,p.ba=P-p.a,s&&(v=a(p.a,P,p.c,p.d),t.splice(b,1,v[0],v[1],v[2],v[3]))},h=function(t,r,n,s){var a,l,h,u,c,f,p=[];if(s)for(l=(t=[s].concat(t)).length;--l>-1;)"string"==typeof(f=t[l][r])&&"="===f.charAt(1)&&(t[l][r]=s[r]+Number(f.charAt(0)+f.substr(2)));if(0>(a=t.length-2))return p[0]=new o(t[0][r],0,0,t[-1>a?0:1][r]),p;for(l=0;a>l;l++)h=t[l][r],u=t[l+1][r],p[l]=new o(h,0,0,u),n&&(c=t[l+2][r],e[l]=(e[l]||0)+(u-h)*(u-h),i[l]=(i[l]||0)+(c-u)*(c-u));return p[l]=new o(t[l][r],0,0,t[l+1][r]),p},u=function(t,s,o,a,u,c){var f,p,d,_,g,m,v,y,x={},w=[],T=c||t[0];for(p in u="string"==typeof u?","+u+",":",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",null==s&&(s=1),t[0])w.push(p);if(t.length>1){for(y=t[t.length-1],v=!0,f=w.length;--f>-1;)if(p=w[f],Math.abs(T[p]-y[p])>.05){v=!1;break}v&&(t=t.concat(),c&&t.unshift(c),t.push(t[1]),c=t[t.length-3])}for(e.length=i.length=r.length=0,f=w.length;--f>-1;)p=w[f],n[p]=-1!==u.indexOf(","+p+","),x[p]=h(t,p,n[p],c);for(f=e.length;--f>-1;)e[f]=Math.sqrt(e[f]),i[f]=Math.sqrt(i[f]);if(!a){for(f=w.length;--f>-1;)if(n[p])for(m=(d=x[w[f]]).length-1,_=0;m>_;_++)g=d[_+1].da/i[_]+d[_].da/e[_]||0,r[_]=(r[_]||0)+g*g;for(f=r.length;--f>-1;)r[f]=Math.sqrt(r[f])}for(f=w.length,_=o?4:1;--f>-1;)d=x[p=w[f]],l(d,s,o,a,n[p]),v&&(d.splice(0,_),d.splice(d.length-_,_));return x},c=function(t,e,i){var r,n,s,a,l,h,u,c,f,p,d,_={},g="cubic"===(e=e||"soft")?3:2,m="soft"===e,v=[];if(m&&i&&(t=[i].concat(t)),null==t||t.length<g+1)throw"invalid Bezier data";for(f in t[0])v.push(f);for(h=v.length;--h>-1;){for(_[f=v[h]]=l=[],p=0,c=t.length,u=0;c>u;u++)r=null==i?t[u][f]:"string"==typeof(d=t[u][f])&&"="===d.charAt(1)?i[f]+Number(d.charAt(0)+d.substr(2)):Number(d),m&&u>1&&c-1>u&&(l[p++]=(r+l[p-2])/2),l[p++]=r;for(c=p-g+1,p=0,u=0;c>u;u+=g)r=l[u],n=l[u+1],s=l[u+2],a=2===g?0:l[u+3],l[p++]=d=3===g?new o(r,n,s,a):new o(r,(2*n+r)/3,(2*n+s)/3,s);l.length=p}return _},f=function(t,e,i){for(var r,n,s,o,a,l,h,u,c,f,p,d=1/i,_=t.length;--_>-1;)for(s=(f=t[_]).a,o=f.d-s,a=f.c-s,l=f.b-s,r=n=0,u=1;i>=u;u++)r=n-(n=((h=d*u)*h*o+3*(c=1-h)*(h*a+c*l))*h),e[p=_*i+u-1]=(e[p]||0)+r*r},p=function(t,e){var i,r,n,s,o=[],a=[],l=0,h=0,u=(e=e>>0||6)-1,c=[],p=[];for(i in t)f(t[i],o,e);for(n=o.length,r=0;n>r;r++)l+=Math.sqrt(o[r]),p[s=r%e]=l,s===u&&(h+=l,c[s=r/e>>0]=p,a[s]=h,l=0,p=[]);return{length:h,lengths:a,segments:c}},d=_gsScope._gsDefine.plugin({propName:"bezier",priority:-1,version:"1.3.7",API:2,global:!0,init:function(t,e,i){this._target=t,e instanceof Array&&(e={values:e}),this._func={},this._mod={},this._props=[],this._timeRes=null==e.timeResolution?6:parseInt(e.timeResolution,10);var r,n,s,o,a,l=e.values||[],h={},f=l[0],d=e.autoRotate||i.vars.orientToBezier;for(r in this._autoRotate=d?d instanceof Array?d:[["x","y","rotation",!0===d?0:Number(d)||0]]:null,f)this._props.push(r);for(s=this._props.length;--s>-1;)r=this._props[s],this._overwriteProps.push(r),n=this._func[r]="function"==typeof t[r],h[r]=n?t[r.indexOf("set")||"function"!=typeof t["get"+r.substr(3)]?r:"get"+r.substr(3)]():parseFloat(t[r]),a||h[r]!==l[0][r]&&(a=h);if(this._beziers="cubic"!==e.type&&"quadratic"!==e.type&&"soft"!==e.type?u(l,isNaN(e.curviness)?1:e.curviness,!1,"thruBasic"===e.type,e.correlate,a):c(l,e.type,h),this._segCount=this._beziers[r].length,this._timeRes){var _=p(this._beziers,this._timeRes);this._length=_.length,this._lengths=_.lengths,this._segments=_.segments,this._l1=this._li=this._s1=this._si=0,this._l2=this._lengths[0],this._curSeg=this._segments[0],this._s2=this._curSeg[0],this._prec=1/this._curSeg.length}if(d=this._autoRotate)for(this._initialRotations=[],d[0]instanceof Array||(this._autoRotate=d=[d]),s=d.length;--s>-1;){for(o=0;3>o;o++)r=d[s][o],this._func[r]="function"==typeof t[r]&&t[r.indexOf("set")||"function"!=typeof t["get"+r.substr(3)]?r:"get"+r.substr(3)];r=d[s][2],this._initialRotations[s]=(this._func[r]?this._func[r].call(this._target):this._target[r])||0,this._overwriteProps.push(r)}return this._startRatio=i.vars.runBackwards?1:0,!0},set:function(e){var i,r,n,s,o,a,l,h,u,c,f=this._segCount,p=this._func,d=this._target,_=e!==this._startRatio;if(this._timeRes){if(u=this._lengths,c=this._curSeg,e*=this._length,n=this._li,e>this._l2&&f-1>n){for(h=f-1;h>n&&(this._l2=u[++n])<=e;);this._l1=u[n-1],this._li=n,this._curSeg=c=this._segments[n],this._s2=c[this._s1=this._si=0]}else if(e<this._l1&&n>0){for(;n>0&&(this._l1=u[--n])>=e;);0===n&&e<this._l1?this._l1=0:n++,this._l2=u[n],this._li=n,this._curSeg=c=this._segments[n],this._s1=c[(this._si=c.length-1)-1]||0,this._s2=c[this._si]}if(i=n,e-=this._l1,n=this._si,e>this._s2&&n<c.length-1){for(h=c.length-1;h>n&&(this._s2=c[++n])<=e;);this._s1=c[n-1],this._si=n}else if(e<this._s1&&n>0){for(;n>0&&(this._s1=c[--n])>=e;);0===n&&e<this._s1?this._s1=0:n++,this._s2=c[n],this._si=n}a=(n+(e-this._s1)/(this._s2-this._s1))*this._prec||0}else a=(e-(i=0>e?0:e>=1?f-1:f*e>>0)*(1/f))*f;for(r=1-a,n=this._props.length;--n>-1;)s=this._props[n],l=(a*a*(o=this._beziers[s][i]).da+3*r*(a*o.ca+r*o.ba))*a+o.a,this._mod[s]&&(l=this._mod[s](l,d)),p[s]?d[s](l):d[s]=l;if(this._autoRotate){var g,m,v,y,x,w,T,b=this._autoRotate;for(n=b.length;--n>-1;)s=b[n][2],w=b[n][3]||0,T=!0===b[n][4]?1:t,o=this._beziers[b[n][0]],g=this._beziers[b[n][1]],o&&g&&(o=o[i],g=g[i],m=o.a+(o.b-o.a)*a,m+=((y=o.b+(o.c-o.b)*a)-m)*a,y+=(o.c+(o.d-o.c)*a-y)*a,v=g.a+(g.b-g.a)*a,v+=((x=g.b+(g.c-g.b)*a)-v)*a,x+=(g.c+(g.d-g.c)*a-x)*a,l=_?Math.atan2(x-v,y-m)*T+w:this._initialRotations[n],this._mod[s]&&(l=this._mod[s](l,d)),p[s]?d[s](l):d[s]=l)}}}),_=d.prototype,d.bezierThrough=u,d.cubicToQuadratic=a,d._autoCSS=!0,d.quadraticToCubic=function(t,e,i){return new o(t,(2*e+t)/3,(2*e+i)/3,i)},d._cssRegister=function(){var t=s.CSSPlugin;if(t){var e=t._internals,i=e._parseToProxy,r=e._setPluginRatio,n=e.CSSPropTween;e._registerComplexSpecialProp("bezier",{parser:function(t,e,s,o,a,l){e instanceof Array&&(e={values:e}),l=new d;var h,u,c,f=e.values,p=f.length-1,_=[],g={};if(0>p)return a;for(h=0;p>=h;h++)c=i(t,f[h],o,a,l,p!==h),_[h]=c.end;for(u in e)g[u]=e[u];return g.values=_,(a=new n(t,"bezier",0,0,c.pt,2)).data=c,a.plugin=l,a.setRatio=r,0===g.autoRotate&&(g.autoRotate=!0),!g.autoRotate||g.autoRotate instanceof Array||(h=!0===g.autoRotate?0:Number(g.autoRotate),g.autoRotate=null!=c.end.left?[["left","top","rotation",h,!1]]:null!=c.end.x&&[["x","y","rotation",h,!1]]),g.autoRotate&&(o._transform||o._enableTransforms(!1),c.autoRotate=o._target._gsTransform,c.proxy.rotation=c.autoRotate.rotation||0,o._overwriteProps.push("rotation")),l._onInitTween(c.proxy,g,o._tween),a}})}},_._mod=function(t){for(var e,i=this._overwriteProps,r=i.length;--r>-1;)(e=t[i[r]])&&"function"==typeof e&&(this._mod[i[r]]=e)},_._kill=function(t){var e,i,r=this._props;for(e in this._beziers)if(e in t)for(delete this._beziers[e],delete this._func[e],i=r.length;--i>-1;)r[i]===e&&r.splice(i,1);if(r=this._autoRotate)for(i=r.length;--i>-1;)t[r[i][2]]&&r.splice(i,1);return this._super._kill.call(this,t)},_gsScope._gsDefine("plugins.CSSPlugin",["plugins.TweenPlugin","TweenLite"],function(t,e){var i,r,n,s,o=function(){t.call(this,"css"),this._overwriteProps.length=0,this.setRatio=o.prototype.setRatio},a=_gsScope._gsDefine.globals,l={},h=o.prototype=new t("css");h.constructor=o,o.version="1.19.0",o.API=2,o.defaultTransformPerspective=0,o.defaultSkewType="compensated",o.defaultSmoothOrigin=!0,h="px",o.suffixMap={top:h,right:h,bottom:h,left:h,width:h,height:h,fontSize:h,padding:h,margin:h,perspective:h,lineHeight:""};var u,c,f,p,d,_,g,m,v=/(?:\-|\.|\b)(\d|\.|e\-)+/g,y=/(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,x=/(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,w=/(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,T=/(?:\d|\-|\+|=|#|\.)*/g,b=/opacity *= *([^)]*)/i,P=/opacity:([^;]*)/i,S=/alpha\(opacity *=.+?\)/i,k=/^(rgb|hsl)/,C=/([A-Z])/g,O=/-([a-z])/gi,R=/(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,A=function(t,e){return e.toUpperCase()},D=/(?:Left|Right|Width)/i,M=/(M11|M12|M21|M22)=[\d\-\.e]+/gi,N=/progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,L=/,(?=[^\)]*(?:\(|$))/gi,X=/[\s,\(]/i,E=Math.PI/180,F=180/Math.PI,Y={},B=document,I=function(t){return B.createElementNS?B.createElementNS("http://www.w3.org/1999/xhtml",t):B.createElement(t)},z=I("div"),V=I("img"),j=o._internals={_specialProps:l},W=navigator.userAgent,U=function(){var t=W.indexOf("Android"),e=I("a");return f=-1!==W.indexOf("Safari")&&-1===W.indexOf("Chrome")&&(-1===t||Number(W.substr(t+8,1))>3),d=f&&Number(W.substr(W.indexOf("Version/")+8,1))<6,p=-1!==W.indexOf("Firefox"),(/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(W)||/Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(W))&&(_=parseFloat(RegExp.$1)),!!e&&(e.style.cssText="top:1px;opacity:.55;",/^0.55/.test(e.style.opacity))}(),G=function(t){return b.test("string"==typeof t?t:(t.currentStyle?t.currentStyle.filter:t.style.filter)||"")?parseFloat(RegExp.$1)/100:1},H=function(t){window.console&&console.log(t)},q="",Z="",Q=function(t,e){var i,r,n=(e=e||z).style;if(void 0!==n[t])return t;for(t=t.charAt(0).toUpperCase()+t.substr(1),i=["O","Moz","ms","Ms","Webkit"],r=5;--r>-1&&void 0===n[i[r]+t];);return r>=0?(q="-"+(Z=3===r?"ms":i[r]).toLowerCase()+"-",Z+t):null},$=B.defaultView?B.defaultView.getComputedStyle:function(){},K=o.getStyle=function(t,e,i,r,n){var s;return U||"opacity"!==e?(!r&&t.style[e]?s=t.style[e]:(i=i||$(t))?s=i[e]||i.getPropertyValue(e)||i.getPropertyValue(e.replace(C,"-$1").toLowerCase()):t.currentStyle&&(s=t.currentStyle[e]),null==n||s&&"none"!==s&&"auto"!==s&&"auto auto"!==s?s:n):G(t)},J=j.convertToPixels=function(t,i,r,n,s){if("px"===n||!n)return r;if("auto"===n||!r)return 0;var a,l,h,u=D.test(i),c=t,f=z.style,p=0>r,d=1===r;if(p&&(r=-r),d&&(r*=100),"%"===n&&-1!==i.indexOf("border"))a=r/100*(u?t.clientWidth:t.clientHeight);else{if(f.cssText="border:0 solid red;position:"+K(t,"position")+";line-height:0;","%"!==n&&c.appendChild&&"v"!==n.charAt(0)&&"rem"!==n)f[u?"borderLeftWidth":"borderTopWidth"]=r+n;else{if(l=(c=t.parentNode||B.body)._gsCache,h=e.ticker.frame,l&&u&&l.time===h)return l.width*r/100;f[u?"width":"height"]=r+n}c.appendChild(z),a=parseFloat(z[u?"offsetWidth":"offsetHeight"]),c.removeChild(z),u&&"%"===n&&!1!==o.cacheWidths&&((l=c._gsCache=c._gsCache||{}).time=h,l.width=a/r*100),0!==a||s||(a=J(t,i,r,n,!0))}return d&&(a/=100),p?-a:a},tt=j.calculateOffset=function(t,e,i){if("absolute"!==K(t,"position",i))return 0;var r="left"===e?"Left":"Top",n=K(t,"margin"+r,i);return t["offset"+r]-(J(t,e,parseFloat(n),n.replace(T,""))||0)},et=function(t,e){var i,r,n,s={};if(e=e||$(t,null))if(i=e.length)for(;--i>-1;)(-1===(n=e[i]).indexOf("-transform")||Ot===n)&&(s[n.replace(O,A)]=e.getPropertyValue(n));else for(i in e)(-1===i.indexOf("Transform")||Ct===i)&&(s[i]=e[i]);else if(e=t.currentStyle||t.style)for(i in e)"string"==typeof i&&void 0===s[i]&&(s[i.replace(O,A)]=e[i]);return U||(s.opacity=G(t)),r=It(t,e,!1),s.rotation=r.rotation,s.skewX=r.skewX,s.scaleX=r.scaleX,s.scaleY=r.scaleY,s.x=r.x,s.y=r.y,At&&(s.z=r.z,s.rotationX=r.rotationX,s.rotationY=r.rotationY,s.scaleZ=r.scaleZ),s.filters&&delete s.filters,s},it=function(t,e,i,r,n){var s,o,a,l={},h=t.style;for(o in i)"cssText"!==o&&"length"!==o&&isNaN(o)&&(e[o]!==(s=i[o])||n&&n[o])&&-1===o.indexOf("Origin")&&("number"==typeof s||"string"==typeof s)&&(l[o]="auto"!==s||"left"!==o&&"top"!==o?""!==s&&"auto"!==s&&"none"!==s||"string"!=typeof e[o]||""===e[o].replace(w,"")?s:0:tt(t,o),void 0!==h[o]&&(a=new mt(h,o,h[o],a)));if(r)for(o in r)"className"!==o&&(l[o]=r[o]);return{difs:l,firstMPT:a}},rt={width:["Left","Right"],height:["Top","Bottom"]},nt=["marginLeft","marginRight","marginTop","marginBottom"],st=function(t,e,i){if("svg"===(t.nodeName+"").toLowerCase())return(i||$(t))[e]||0;if(t.getBBox&&Ft(t))return t.getBBox()[e]||0;var r=parseFloat("width"===e?t.offsetWidth:t.offsetHeight),n=rt[e],s=n.length;for(i=i||$(t,null);--s>-1;)r-=parseFloat(K(t,"padding"+n[s],i,!0))||0,r-=parseFloat(K(t,"border"+n[s]+"Width",i,!0))||0;return r},ot=function(t,e){if("contain"===t||"auto"===t||"auto auto"===t)return t+" ";(null==t||""===t)&&(t="0 0");var i,r=t.split(" "),n=-1!==t.indexOf("left")?"0%":-1!==t.indexOf("right")?"100%":r[0],s=-1!==t.indexOf("top")?"0%":-1!==t.indexOf("bottom")?"100%":r[1];if(r.length>3&&!e){for(r=t.split(", ").join(",").split(","),t=[],i=0;i<r.length;i++)t.push(ot(r[i]));return t.join(",")}return null==s?s="center"===n?"50%":"0":"center"===s&&(s="50%"),("center"===n||isNaN(parseFloat(n))&&-1===(n+"").indexOf("="))&&(n="50%"),t=n+" "+s+(r.length>2?" "+r[2]:""),e&&(e.oxp=-1!==n.indexOf("%"),e.oyp=-1!==s.indexOf("%"),e.oxr="="===n.charAt(1),e.oyr="="===s.charAt(1),e.ox=parseFloat(n.replace(w,"")),e.oy=parseFloat(s.replace(w,"")),e.v=t),e||t},at=function(t,e){return"function"==typeof t&&(t=t(m,g)),"string"==typeof t&&"="===t.charAt(1)?parseInt(t.charAt(0)+"1",10)*parseFloat(t.substr(2)):parseFloat(t)-parseFloat(e)||0},lt=function(t,e){return"function"==typeof t&&(t=t(m,g)),null==t?e:"string"==typeof t&&"="===t.charAt(1)?parseInt(t.charAt(0)+"1",10)*parseFloat(t.substr(2))+e:parseFloat(t)||0},ht=function(t,e,i,r){var n,s,o,a,l;return"function"==typeof t&&(t=t(m,g)),null==t?a=e:"number"==typeof t?a=t:(n=360,s=t.split("_"),o=((l="="===t.charAt(1))?parseInt(t.charAt(0)+"1",10)*parseFloat(s[0].substr(2)):parseFloat(s[0]))*(-1===t.indexOf("rad")?1:F)-(l?0:e),s.length&&(r&&(r[i]=e+o),-1!==t.indexOf("short")&&((o%=n)!==o%180&&(o=0>o?o+n:o-n)),-1!==t.indexOf("_cw")&&0>o?o=(o+9999999999*n)%n-(o/n|0)*n:-1!==t.indexOf("ccw")&&o>0&&(o=(o-9999999999*n)%n-(o/n|0)*n)),a=e+o),1e-6>a&&a>-1e-6&&(a=0),a},ut={aqua:[0,255,255],lime:[0,255,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,255],navy:[0,0,128],white:[255,255,255],fuchsia:[255,0,255],olive:[128,128,0],yellow:[255,255,0],orange:[255,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[255,0,0],pink:[255,192,203],cyan:[0,255,255],transparent:[255,255,255,0]},ct=function(t,e,i){return 255*(1>6*(t=0>t?t+1:t>1?t-1:t)?e+(i-e)*t*6:.5>t?i:2>3*t?e+(i-e)*(2/3-t)*6:e)+.5|0},ft=o.parseColor=function(t,e){var i,r,n,s,o,a,l,h,u,c,f;if(t)if("number"==typeof t)i=[t>>16,t>>8&255,255&t];else{if(","===t.charAt(t.length-1)&&(t=t.substr(0,t.length-1)),ut[t])i=ut[t];else if("#"===t.charAt(0))4===t.length&&(r=t.charAt(1),n=t.charAt(2),s=t.charAt(3),t="#"+r+r+n+n+s+s),i=[(t=parseInt(t.substr(1),16))>>16,t>>8&255,255&t];else if("hsl"===t.substr(0,3))if(i=f=t.match(v),e){if(-1!==t.indexOf("="))return t.match(y)}else o=Number(i[0])%360/360,a=Number(i[1])/100,r=2*(l=Number(i[2])/100)-(n=.5>=l?l*(a+1):l+a-l*a),i.length>3&&(i[3]=Number(t[3])),i[0]=ct(o+1/3,r,n),i[1]=ct(o,r,n),i[2]=ct(o-1/3,r,n);else i=t.match(v)||ut.transparent;i[0]=Number(i[0]),i[1]=Number(i[1]),i[2]=Number(i[2]),i.length>3&&(i[3]=Number(i[3]))}else i=ut.black;return e&&!f&&(r=i[0]/255,n=i[1]/255,s=i[2]/255,l=((h=Math.max(r,n,s))+(u=Math.min(r,n,s)))/2,h===u?o=a=0:(c=h-u,a=l>.5?c/(2-h-u):c/(h+u),o=h===r?(n-s)/c+(s>n?6:0):h===n?(s-r)/c+2:(r-n)/c+4,o*=60),i[0]=o+.5|0,i[1]=100*a+.5|0,i[2]=100*l+.5|0),i},pt=function(t,e){var i,r,n,s=t.match(dt)||[],o=0,a=s.length?"":t;for(i=0;i<s.length;i++)r=s[i],o+=(n=t.substr(o,t.indexOf(r,o)-o)).length+r.length,3===(r=ft(r,e)).length&&r.push(1),a+=n+(e?"hsla("+r[0]+","+r[1]+"%,"+r[2]+"%,"+r[3]:"rgba("+r.join(","))+")";return a+t.substr(o)},dt="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";for(h in ut)dt+="|"+h+"\\b";dt=new RegExp(dt+")","gi"),o.colorStringFilter=function(t){var e,i=t[0]+t[1];dt.test(i)&&(e=-1!==i.indexOf("hsl(")||-1!==i.indexOf("hsla("),t[0]=pt(t[0],e),t[1]=pt(t[1],e)),dt.lastIndex=0},e.defaultStringFilter||(e.defaultStringFilter=o.colorStringFilter);var _t=function(t,e,i,r){if(null==t)return function(t){return t};var n,s=e?(t.match(dt)||[""])[0]:"",o=t.split(s).join("").match(x)||[],a=t.substr(0,t.indexOf(o[0])),l=")"===t.charAt(t.length-1)?")":"",h=-1!==t.indexOf(" ")?" ":",",u=o.length,c=u>0?o[0].replace(v,""):"";return u?n=e?function(t){var e,f,p,d;if("number"==typeof t)t+=c;else if(r&&L.test(t)){for(d=t.replace(L,"|").split("|"),p=0;p<d.length;p++)d[p]=n(d[p]);return d.join(",")}if(e=(t.match(dt)||[s])[0],p=(f=t.split(e).join("").match(x)||[]).length,u>p--)for(;++p<u;)f[p]=i?f[(p-1)/2|0]:o[p];return a+f.join(h)+h+e+l+(-1!==t.indexOf("inset")?" inset":"")}:function(t){var e,s,f;if("number"==typeof t)t+=c;else if(r&&L.test(t)){for(s=t.replace(L,"|").split("|"),f=0;f<s.length;f++)s[f]=n(s[f]);return s.join(",")}if(f=(e=t.match(x)||[]).length,u>f--)for(;++f<u;)e[f]=i?e[(f-1)/2|0]:o[f];return a+e.join(h)+l}:function(t){return t}},gt=function(t){return t=t.split(","),function(e,i,r,n,s,o,a){var l,h=(i+"").split(" ");for(a={},l=0;4>l;l++)a[t[l]]=h[l]=h[l]||h[(l-1)/2>>0];return n.parse(e,a,s,o)}},mt=(j._setPluginRatio=function(t){this.plugin.setRatio(t);for(var e,i,r,n,s,o=this.data,a=o.proxy,l=o.firstMPT;l;)e=a[l.v],l.r?e=Math.round(e):1e-6>e&&e>-1e-6&&(e=0),l.t[l.p]=e,l=l._next;if(o.autoRotate&&(o.autoRotate.rotation=o.mod?o.mod(a.rotation,this.t):a.rotation),1===t||0===t)for(l=o.firstMPT,s=1===t?"e":"b";l;){if((i=l.t).type){if(1===i.type){for(n=i.xs0+i.s+i.xs1,r=1;r<i.l;r++)n+=i["xn"+r]+i["xs"+(r+1)];i[s]=n}}else i[s]=i.s+i.xs0;l=l._next}},function(t,e,i,r,n){this.t=t,this.p=e,this.v=i,this.r=n,r&&(r._prev=this,this._next=r)}),vt=(j._parseToProxy=function(t,e,i,r,n,s){var o,a,l,h,u,c=r,f={},p={},d=i._transform,_=Y;for(i._transform=null,Y=e,r=u=i.parse(t,e,r,n),Y=_,s&&(i._transform=d,c&&(c._prev=null,c._prev&&(c._prev._next=null)));r&&r!==c;){if(r.type<=1&&(p[a=r.p]=r.s+r.c,f[a]=r.s,s||(h=new mt(r,"s",a,h,r.r),r.c=0),1===r.type))for(o=r.l;--o>0;)l="xn"+o,p[a=r.p+"_"+l]=r.data[l],f[a]=r[l],s||(h=new mt(r,l,a,h,r.rxp[l]));r=r._next}return{proxy:f,end:p,firstMPT:h,pt:u}},j.CSSPropTween=function(t,e,r,n,o,a,l,h,u,c,f){this.t=t,this.p=e,this.s=r,this.c=n,this.n=l||e,t instanceof vt||s.push(this.n),this.r=h,this.type=a||0,u&&(this.pr=u,i=!0),this.b=void 0===c?r:c,this.e=void 0===f?r+n:f,o&&(this._next=o,o._prev=this)}),yt=function(t,e,i,r,n,s){var o=new vt(t,e,i,r-i,n,-1,s);return o.b=i,o.e=o.xs0=r,o},xt=o.parseComplex=function(t,e,i,r,n,s,a,l,h,c){i=i||s||"","function"==typeof r&&(r=r(m,g)),a=new vt(t,e,0,0,a,c?2:1,null,!1,l,i,r),r+="",n&&dt.test(r+i)&&(r=[i,r],o.colorStringFilter(r),i=r[0],r=r[1]);var f,p,d,_,x,w,T,b,P,S,k,C,O,R=i.split(", ").join(",").split(" "),A=r.split(", ").join(",").split(" "),D=R.length,M=!1!==u;for((-1!==r.indexOf(",")||-1!==i.indexOf(","))&&(R=R.join(" ").replace(L,", ").split(" "),A=A.join(" ").replace(L,", ").split(" "),D=R.length),D!==A.length&&(D=(R=(s||"").split(" ")).length),a.plugin=h,a.setRatio=c,dt.lastIndex=0,f=0;D>f;f++)if(_=R[f],x=A[f],(b=parseFloat(_))||0===b)a.appendXtra("",b,at(x,b),x.replace(y,""),M&&-1!==x.indexOf("px"),!0);else if(n&&dt.test(_))C=")"+((C=x.indexOf(")")+1)?x.substr(C):""),O=-1!==x.indexOf("hsl")&&U,_=ft(_,O),x=ft(x,O),(P=_.length+x.length>6)&&!U&&0===x[3]?(a["xs"+a.l]+=a.l?" transparent":"transparent",a.e=a.e.split(A[f]).join("transparent")):(U||(P=!1),O?a.appendXtra(P?"hsla(":"hsl(",_[0],at(x[0],_[0]),",",!1,!0).appendXtra("",_[1],at(x[1],_[1]),"%,",!1).appendXtra("",_[2],at(x[2],_[2]),P?"%,":"%"+C,!1):a.appendXtra(P?"rgba(":"rgb(",_[0],x[0]-_[0],",",!0,!0).appendXtra("",_[1],x[1]-_[1],",",!0).appendXtra("",_[2],x[2]-_[2],P?",":C,!0),P&&(_=_.length<4?1:_[3],a.appendXtra("",_,(x.length<4?1:x[3])-_,C,!1))),dt.lastIndex=0;else if(w=_.match(v)){if(!(T=x.match(y))||T.length!==w.length)return a;for(d=0,p=0;p<w.length;p++)k=w[p],S=_.indexOf(k,d),a.appendXtra(_.substr(d,S-d),Number(k),at(T[p],k),"",M&&"px"===_.substr(S+k.length,2),0===p),d=S+k.length;a["xs"+a.l]+=_.substr(d)}else a["xs"+a.l]+=a.l||a["xs"+a.l]?" "+x:x;if(-1!==r.indexOf("=")&&a.data){for(C=a.xs0+a.data.s,f=1;f<a.l;f++)C+=a["xs"+f]+a.data["xn"+f];a.e=C+a["xs"+f]}return a.l||(a.type=-1,a.xs0=a.e),a.xfirst||a},wt=9;for((h=vt.prototype).l=h.pr=0;--wt>0;)h["xn"+wt]=0,h["xs"+wt]="";h.xs0="",h._next=h._prev=h.xfirst=h.data=h.plugin=h.setRatio=h.rxp=null,h.appendXtra=function(t,e,i,r,n,s){var o=this,a=o.l;return o["xs"+a]+=s&&(a||o["xs"+a])?" "+t:t||"",i||0===a||o.plugin?(o.l++,o.type=o.setRatio?2:1,o["xs"+o.l]=r||"",a>0?(o.data["xn"+a]=e+i,o.rxp["xn"+a]=n,o["xn"+a]=e,o.plugin||(o.xfirst=new vt(o,"xn"+a,e,i,o.xfirst||o,0,o.n,n,o.pr),o.xfirst.xs0=0),o):(o.data={s:e+i},o.rxp={},o.s=e,o.c=i,o.r=n,o)):(o["xs"+a]+=e+(r||""),o)};var Tt=function(t,e){e=e||{},this.p=e.prefix&&Q(t)||t,l[t]=l[this.p]=this,this.format=e.formatter||_t(e.defaultValue,e.color,e.collapsible,e.multi),e.parser&&(this.parse=e.parser),this.clrs=e.color,this.multi=e.multi,this.keyword=e.keyword,this.dflt=e.defaultValue,this.pr=e.priority||0},bt=j._registerComplexSpecialProp=function(t,e,i){"object"!=typeof e&&(e={parser:i});var r,n=t.split(","),s=e.defaultValue;for(i=i||[s],r=0;r<n.length;r++)e.prefix=0===r&&e.prefix,e.defaultValue=i[r]||s,new Tt(n[r],e)},Pt=j._registerPluginProp=function(t){if(!l[t]){var e=t.charAt(0).toUpperCase()+t.substr(1)+"Plugin";bt(t,{parser:function(t,i,r,n,s,o,h){var u=a.com.greensock.plugins[e];return u?(u._cssRegister(),l[r].parse(t,i,r,n,s,o,h)):(H("Error: "+e+" js file not loaded."),s)}})}};(h=Tt.prototype).parseComplex=function(t,e,i,r,n,s){var o,a,l,h,u,c,f=this.keyword;if(this.multi&&(L.test(i)||L.test(e)?(a=e.replace(L,"|").split("|"),l=i.replace(L,"|").split("|")):f&&(a=[e],l=[i])),l){for(h=l.length>a.length?l.length:a.length,o=0;h>o;o++)e=a[o]=a[o]||this.dflt,i=l[o]=l[o]||this.dflt,f&&((u=e.indexOf(f))!==(c=i.indexOf(f))&&(-1===c?a[o]=a[o].split(f).join(""):-1===u&&(a[o]+=" "+f)));e=a.join(", "),i=l.join(", ")}return xt(t,this.p,e,i,this.clrs,this.dflt,r,this.pr,n,s)},h.parse=function(t,e,i,r,s,o,a){return this.parseComplex(t.style,this.format(K(t,this.p,n,!1,this.dflt)),this.format(e),s,o)},o.registerSpecialProp=function(t,e,i){bt(t,{parser:function(t,r,n,s,o,a,l){var h=new vt(t,n,0,0,o,2,n,!1,i);return h.plugin=a,h.setRatio=e(t,r,s._tween,n),h},priority:i})},o.useSVGTransformAttr=f||p;var St,kt="scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),Ct=Q("transform"),Ot=q+"transform",Rt=Q("transformOrigin"),At=null!==Q("perspective"),Dt=j.Transform=function(){this.perspective=parseFloat(o.defaultTransformPerspective)||0,this.force3D=!(!1===o.defaultForce3D||!At)&&(o.defaultForce3D||"auto")},Mt=window.SVGElement,Nt=function(t,e,i){var r,n=B.createElementNS("http://www.w3.org/2000/svg",t),s=/([a-z])([A-Z])/g;for(r in i)n.setAttributeNS(null,r.replace(s,"$1-$2").toLowerCase(),i[r]);return e.appendChild(n),n},Lt=B.documentElement,Xt=function(){var t,e,i,r=_||/Android/i.test(W)&&!window.chrome;return B.createElementNS&&!r&&(t=Nt("svg",Lt),i=(e=Nt("rect",t,{width:100,height:50,x:100})).getBoundingClientRect().width,e.style[Rt]="50% 50%",e.style[Ct]="scaleX(0.5)",r=i===e.getBoundingClientRect().width&&!(p&&At),Lt.removeChild(t)),r}(),Et=function(t,e,i,r,n,s){var a,l,h,u,c,f,p,d,_,g,m,v,y,x,w=t._gsTransform,T=Bt(t,!0);w&&(y=w.xOrigin,x=w.yOrigin),(!r||(a=r.split(" ")).length<2)&&(p=t.getBBox(),a=[(-1!==(e=ot(e).split(" "))[0].indexOf("%")?parseFloat(e[0])/100*p.width:parseFloat(e[0]))+p.x,(-1!==e[1].indexOf("%")?parseFloat(e[1])/100*p.height:parseFloat(e[1]))+p.y]),i.xOrigin=u=parseFloat(a[0]),i.yOrigin=c=parseFloat(a[1]),r&&T!==Yt&&(f=T[0],p=T[1],d=T[2],_=T[3],g=T[4],l=u*(_/(v=f*_-p*d))+c*(-d/v)+(d*(m=T[5])-_*g)/v,h=u*(-p/v)+c*(f/v)-(f*m-p*g)/v,u=i.xOrigin=a[0]=l,c=i.yOrigin=a[1]=h),w&&(s&&(i.xOffset=w.xOffset,i.yOffset=w.yOffset,w=i),n||!1!==n&&!1!==o.defaultSmoothOrigin?(l=u-y,h=c-x,w.xOffset+=l*T[0]+h*T[2]-l,w.yOffset+=l*T[1]+h*T[3]-h):w.xOffset=w.yOffset=0),s||t.setAttribute("data-svg-origin",a.join(" "))},Ft=function(t){return!!(Mt&&t.getBBox&&t.getCTM&&function(t){try{return t.getBBox()}catch(t){}}(t)&&(!t.parentNode||t.parentNode.getBBox&&t.parentNode.getCTM))},Yt=[1,0,0,1,0,0],Bt=function(t,e){var i,r,n,s,o,a,l=t._gsTransform||new Dt,h=t.style;if(Ct?r=K(t,Ot,null,!0):t.currentStyle&&(r=(r=t.currentStyle.filter.match(M))&&4===r.length?[r[0].substr(4),Number(r[2].substr(4)),Number(r[1].substr(4)),r[3].substr(4),l.x||0,l.y||0].join(","):""),(i=!r||"none"===r||"matrix(1, 0, 0, 1, 0, 0)"===r)&&Ct&&((a="none"===$(t).display)||!t.parentNode)&&(a&&(s=h.display,h.display="block"),t.parentNode||(o=1,Lt.appendChild(t)),i=!(r=K(t,Ot,null,!0))||"none"===r||"matrix(1, 0, 0, 1, 0, 0)"===r,s?h.display=s:a&&Wt(h,"display"),o&&Lt.removeChild(t)),(l.svg||t.getBBox&&Ft(t))&&(i&&-1!==(h[Ct]+"").indexOf("matrix")&&(r=h[Ct],i=0),n=t.getAttribute("transform"),i&&n&&(-1!==n.indexOf("matrix")?(r=n,i=0):-1!==n.indexOf("translate")&&(r="matrix(1,0,0,1,"+n.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",")+")",i=0))),i)return Yt;for(n=(r||"").match(v)||[],wt=n.length;--wt>-1;)s=Number(n[wt]),n[wt]=(o=s-(s|=0))?(1e5*o+(0>o?-.5:.5)|0)/1e5+s:s;return e&&n.length>6?[n[0],n[1],n[4],n[5],n[12],n[13]]:n},It=j.getTransform=function(t,i,r,n){if(t._gsTransform&&r&&!n)return t._gsTransform;var s,a,l,h,u,c,f=r&&t._gsTransform||new Dt,p=f.scaleX<0,d=1e5,_=At&&(parseFloat(K(t,Rt,i,!1,"0 0 0").split(" ")[2])||f.zOrigin)||0,g=parseFloat(o.defaultTransformPerspective)||0;if(f.svg=!(!t.getBBox||!Ft(t)),f.svg&&(Et(t,K(t,Rt,i,!1,"50% 50%")+"",f,t.getAttribute("data-svg-origin")),St=o.useSVGTransformAttr||Xt),(s=Bt(t))!==Yt){if(16===s.length){var m,v,y,x,w,T=s[0],b=s[1],P=s[2],S=s[3],k=s[4],C=s[5],O=s[6],R=s[7],A=s[8],D=s[9],M=s[10],N=s[12],L=s[13],X=s[14],E=s[11],Y=Math.atan2(O,M);f.zOrigin&&(N=A*(X=-f.zOrigin)-s[12],L=D*X-s[13],X=M*X+f.zOrigin-s[14]),f.rotationX=Y*F,Y&&(m=k*(x=Math.cos(-Y))+A*(w=Math.sin(-Y)),v=C*x+D*w,y=O*x+M*w,A=k*-w+A*x,D=C*-w+D*x,M=O*-w+M*x,E=R*-w+E*x,k=m,C=v,O=y),Y=Math.atan2(-P,M),f.rotationY=Y*F,Y&&(v=b*(x=Math.cos(-Y))-D*(w=Math.sin(-Y)),y=P*x-M*w,D=b*w+D*x,M=P*w+M*x,E=S*w+E*x,T=m=T*x-A*w,b=v,P=y),Y=Math.atan2(b,T),f.rotation=Y*F,Y&&(T=T*(x=Math.cos(-Y))+k*(w=Math.sin(-Y)),v=b*x+C*w,C=b*-w+C*x,O=P*-w+O*x,b=v),f.rotationX&&Math.abs(f.rotationX)+Math.abs(f.rotation)>359.9&&(f.rotationX=f.rotation=0,f.rotationY=180-f.rotationY),f.scaleX=(Math.sqrt(T*T+b*b)*d+.5|0)/d,f.scaleY=(Math.sqrt(C*C+D*D)*d+.5|0)/d,f.scaleZ=(Math.sqrt(O*O+M*M)*d+.5|0)/d,f.rotationX||f.rotationY?f.skewX=0:(f.skewX=k||C?Math.atan2(k,C)*F+f.rotation:f.skewX||0,Math.abs(f.skewX)>90&&Math.abs(f.skewX)<270&&(p?(f.scaleX*=-1,f.skewX+=f.rotation<=0?180:-180,f.rotation+=f.rotation<=0?180:-180):(f.scaleY*=-1,f.skewX+=f.skewX<=0?180:-180))),f.perspective=E?1/(0>E?-E:E):0,f.x=N,f.y=L,f.z=X,f.svg&&(f.x-=f.xOrigin-(f.xOrigin*T-f.yOrigin*k),f.y-=f.yOrigin-(f.yOrigin*b-f.xOrigin*C))}else if(!At||n||!s.length||f.x!==s[4]||f.y!==s[5]||!f.rotationX&&!f.rotationY){var B=s.length>=6,I=B?s[0]:1,z=s[1]||0,V=s[2]||0,j=B?s[3]:1;f.x=s[4]||0,f.y=s[5]||0,l=Math.sqrt(I*I+z*z),h=Math.sqrt(j*j+V*V),u=I||z?Math.atan2(z,I)*F:f.rotation||0,c=V||j?Math.atan2(V,j)*F+u:f.skewX||0,Math.abs(c)>90&&Math.abs(c)<270&&(p?(l*=-1,c+=0>=u?180:-180,u+=0>=u?180:-180):(h*=-1,c+=0>=c?180:-180)),f.scaleX=l,f.scaleY=h,f.rotation=u,f.skewX=c,At&&(f.rotationX=f.rotationY=f.z=0,f.perspective=g,f.scaleZ=1),f.svg&&(f.x-=f.xOrigin-(f.xOrigin*I+f.yOrigin*V),f.y-=f.yOrigin-(f.xOrigin*z+f.yOrigin*j))}for(a in f.zOrigin=_,f)f[a]<2e-5&&f[a]>-2e-5&&(f[a]=0)}return r&&(t._gsTransform=f,f.svg&&(St&&t.style[Ct]?e.delayedCall(.001,function(){Wt(t.style,Ct)}):!St&&t.getAttribute("transform")&&e.delayedCall(.001,function(){t.removeAttribute("transform")}))),f},zt=function(t){var e,i,r=this.data,n=-r.rotation*E,s=n+r.skewX*E,o=1e5,a=(Math.cos(n)*r.scaleX*o|0)/o,l=(Math.sin(n)*r.scaleX*o|0)/o,h=(Math.sin(s)*-r.scaleY*o|0)/o,u=(Math.cos(s)*r.scaleY*o|0)/o,c=this.t.style,f=this.t.currentStyle;if(f){i=l,l=-h,h=-i,e=f.filter,c.filter="";var p,d,g=this.t.offsetWidth,m=this.t.offsetHeight,v="absolute"!==f.position,y="progid:DXImageTransform.Microsoft.Matrix(M11="+a+", M12="+l+", M21="+h+", M22="+u,x=r.x+g*r.xPercent/100,w=r.y+m*r.yPercent/100;if(null!=r.ox&&(x+=(p=(r.oxp?g*r.ox*.01:r.ox)-g/2)-(p*a+(d=(r.oyp?m*r.oy*.01:r.oy)-m/2)*l),w+=d-(p*h+d*u)),v?y+=", Dx="+((p=g/2)-(p*a+(d=m/2)*l)+x)+", Dy="+(d-(p*h+d*u)+w)+")":y+=", sizingMethod='auto expand')",-1!==e.indexOf("DXImageTransform.Microsoft.Matrix(")?c.filter=e.replace(N,y):c.filter=y+" "+e,(0===t||1===t)&&1===a&&0===l&&0===h&&1===u&&(v&&-1===y.indexOf("Dx=0, Dy=0")||b.test(e)&&100!==parseFloat(RegExp.$1)||-1===e.indexOf(e.indexOf("Alpha"))&&c.removeAttribute("filter")),!v){var P,S,k,C=8>_?1:-1;for(p=r.ieOffsetX||0,d=r.ieOffsetY||0,r.ieOffsetX=Math.round((g-((0>a?-a:a)*g+(0>l?-l:l)*m))/2+x),r.ieOffsetY=Math.round((m-((0>u?-u:u)*m+(0>h?-h:h)*g))/2+w),wt=0;4>wt;wt++)k=(i=-1!==(P=f[S=nt[wt]]).indexOf("px")?parseFloat(P):J(this.t,S,parseFloat(P),P.replace(T,""))||0)!==r[S]?2>wt?-r.ieOffsetX:-r.ieOffsetY:2>wt?p-r.ieOffsetX:d-r.ieOffsetY,c[S]=(r[S]=Math.round(i-k*(0===wt||2===wt?1:C)))+"px"}}},Vt=j.set3DTransformRatio=j.setTransformRatio=function(t){var e,i,r,n,s,o,a,l,h,u,c,f,d,_,g,m,v,y,x,w,T,b,P,S=this.data,k=this.t.style,C=S.rotation,O=S.rotationX,R=S.rotationY,A=S.scaleX,D=S.scaleY,M=S.scaleZ,N=S.x,L=S.y,X=S.z,F=S.svg,Y=S.perspective,B=S.force3D;if(!((1!==t&&0!==t||"auto"!==B||this.tween._totalTime!==this.tween._totalDuration&&this.tween._totalTime)&&B||X||Y||R||O||1!==M)||St&&F||!At)C||S.skewX||F?(C*=E,b=S.skewX*E,P=1e5,e=Math.cos(C)*A,n=Math.sin(C)*A,i=Math.sin(C-b)*-D,s=Math.cos(C-b)*D,b&&"simple"===S.skewType&&(v=Math.tan(b-S.skewY*E),i*=v=Math.sqrt(1+v*v),s*=v,S.skewY&&(v=Math.tan(S.skewY*E),e*=v=Math.sqrt(1+v*v),n*=v)),F&&(N+=S.xOrigin-(S.xOrigin*e+S.yOrigin*i)+S.xOffset,L+=S.yOrigin-(S.xOrigin*n+S.yOrigin*s)+S.yOffset,St&&(S.xPercent||S.yPercent)&&(_=this.t.getBBox(),N+=.01*S.xPercent*_.width,L+=.01*S.yPercent*_.height),(_=1e-6)>N&&N>-_&&(N=0),_>L&&L>-_&&(L=0)),x=(e*P|0)/P+","+(n*P|0)/P+","+(i*P|0)/P+","+(s*P|0)/P+","+N+","+L+")",F&&St?this.t.setAttribute("transform","matrix("+x):k[Ct]=(S.xPercent||S.yPercent?"translate("+S.xPercent+"%,"+S.yPercent+"%) matrix(":"matrix(")+x):k[Ct]=(S.xPercent||S.yPercent?"translate("+S.xPercent+"%,"+S.yPercent+"%) matrix(":"matrix(")+A+",0,0,"+D+","+N+","+L+")";else{if(p&&((_=1e-4)>A&&A>-_&&(A=M=2e-5),_>D&&D>-_&&(D=M=2e-5),!Y||S.z||S.rotationX||S.rotationY||(Y=0)),C||S.skewX)C*=E,g=e=Math.cos(C),m=n=Math.sin(C),S.skewX&&(C-=S.skewX*E,g=Math.cos(C),m=Math.sin(C),"simple"===S.skewType&&(v=Math.tan((S.skewX-S.skewY)*E),g*=v=Math.sqrt(1+v*v),m*=v,S.skewY&&(v=Math.tan(S.skewY*E),e*=v=Math.sqrt(1+v*v),n*=v))),i=-m,s=g;else{if(!(R||O||1!==M||Y||F))return void(k[Ct]=(S.xPercent||S.yPercent?"translate("+S.xPercent+"%,"+S.yPercent+"%) translate3d(":"translate3d(")+N+"px,"+L+"px,"+X+"px)"+(1!==A||1!==D?" scale("+A+","+D+")":""));e=s=1,i=n=0}h=1,r=o=a=l=u=c=0,f=Y?-1/Y:0,d=S.zOrigin,_=1e-6,w=",",T="0",(C=R*E)&&(g=Math.cos(C),a=-(m=Math.sin(C)),u=f*-m,r=e*m,o=n*m,h=g,f*=g,e*=g,n*=g),(C=O*E)&&(v=i*(g=Math.cos(C))+r*(m=Math.sin(C)),y=s*g+o*m,l=h*m,c=f*m,r=i*-m+r*g,o=s*-m+o*g,h*=g,f*=g,i=v,s=y),1!==M&&(r*=M,o*=M,h*=M,f*=M),1!==D&&(i*=D,s*=D,l*=D,c*=D),1!==A&&(e*=A,n*=A,a*=A,u*=A),(d||F)&&(d&&(N+=r*-d,L+=o*-d,X+=h*-d+d),F&&(N+=S.xOrigin-(S.xOrigin*e+S.yOrigin*i)+S.xOffset,L+=S.yOrigin-(S.xOrigin*n+S.yOrigin*s)+S.yOffset),_>N&&N>-_&&(N=T),_>L&&L>-_&&(L=T),_>X&&X>-_&&(X=0)),x=S.xPercent||S.yPercent?"translate("+S.xPercent+"%,"+S.yPercent+"%) matrix3d(":"matrix3d(",x+=(_>e&&e>-_?T:e)+w+(_>n&&n>-_?T:n)+w+(_>a&&a>-_?T:a),x+=w+(_>u&&u>-_?T:u)+w+(_>i&&i>-_?T:i)+w+(_>s&&s>-_?T:s),O||R||1!==M?(x+=w+(_>l&&l>-_?T:l)+w+(_>c&&c>-_?T:c)+w+(_>r&&r>-_?T:r),x+=w+(_>o&&o>-_?T:o)+w+(_>h&&h>-_?T:h)+w+(_>f&&f>-_?T:f)+w):x+=",0,0,0,0,1,0,",x+=N+w+L+w+X+w+(Y?1+-X/Y:1)+")",k[Ct]=x}};(h=Dt.prototype).x=h.y=h.z=h.skewX=h.skewY=h.rotation=h.rotationX=h.rotationY=h.zOrigin=h.xPercent=h.yPercent=h.xOffset=h.yOffset=0,h.scaleX=h.scaleY=h.scaleZ=1,bt("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin",{parser:function(t,e,i,r,s,a,l){if(r._lastParsedTransform===l)return s;var h;r._lastParsedTransform=l,"function"==typeof l[i]&&(h=l[i],l[i]=e);var u,c,f,p,d,_,v,y,x,w=t._gsTransform,T=t.style,b=kt.length,P=l,S={},k="transformOrigin",C=It(t,n,!0,P.parseTransform),O=P.transform&&("function"==typeof P.transform?P.transform(m,g):P.transform);if(r._transform=C,O&&"string"==typeof O&&Ct)(c=z.style)[Ct]=O,c.display="block",c.position="absolute",B.body.appendChild(z),u=It(z,null,!1),C.svg&&(_=C.xOrigin,v=C.yOrigin,u.x-=C.xOffset,u.y-=C.yOffset,(P.transformOrigin||P.svgOrigin)&&(O={},Et(t,ot(P.transformOrigin),O,P.svgOrigin,P.smoothOrigin,!0),_=O.xOrigin,v=O.yOrigin,u.x-=O.xOffset-C.xOffset,u.y-=O.yOffset-C.yOffset),(_||v)&&(y=Bt(z,!0),u.x-=_-(_*y[0]+v*y[2]),u.y-=v-(_*y[1]+v*y[3]))),B.body.removeChild(z),u.perspective||(u.perspective=C.perspective),null!=P.xPercent&&(u.xPercent=lt(P.xPercent,C.xPercent)),null!=P.yPercent&&(u.yPercent=lt(P.yPercent,C.yPercent));else if("object"==typeof P){if(u={scaleX:lt(null!=P.scaleX?P.scaleX:P.scale,C.scaleX),scaleY:lt(null!=P.scaleY?P.scaleY:P.scale,C.scaleY),scaleZ:lt(P.scaleZ,C.scaleZ),x:lt(P.x,C.x),y:lt(P.y,C.y),z:lt(P.z,C.z),xPercent:lt(P.xPercent,C.xPercent),yPercent:lt(P.yPercent,C.yPercent),perspective:lt(P.transformPerspective,C.perspective)},null!=(d=P.directionalRotation))if("object"==typeof d)for(c in d)P[c]=d[c];else P.rotation=d;"string"==typeof P.x&&-1!==P.x.indexOf("%")&&(u.x=0,u.xPercent=lt(P.x,C.xPercent)),"string"==typeof P.y&&-1!==P.y.indexOf("%")&&(u.y=0,u.yPercent=lt(P.y,C.yPercent)),u.rotation=ht("rotation"in P?P.rotation:"shortRotation"in P?P.shortRotation+"_short":"rotationZ"in P?P.rotationZ:C.rotation-C.skewY,C.rotation-C.skewY,"rotation",S),At&&(u.rotationX=ht("rotationX"in P?P.rotationX:"shortRotationX"in P?P.shortRotationX+"_short":C.rotationX||0,C.rotationX,"rotationX",S),u.rotationY=ht("rotationY"in P?P.rotationY:"shortRotationY"in P?P.shortRotationY+"_short":C.rotationY||0,C.rotationY,"rotationY",S)),u.skewX=ht(P.skewX,C.skewX-C.skewY),(u.skewY=ht(P.skewY,C.skewY))&&(u.skewX+=u.skewY,u.rotation+=u.skewY)}for(At&&null!=P.force3D&&(C.force3D=P.force3D,p=!0),C.skewType=P.skewType||C.skewType||o.defaultSkewType,(f=C.force3D||C.z||C.rotationX||C.rotationY||u.z||u.rotationX||u.rotationY||u.perspective)||null==P.scale||(u.scaleZ=1);--b>-1;)((O=u[x=kt[b]]-C[x])>1e-6||-1e-6>O||null!=P[x]||null!=Y[x])&&(p=!0,s=new vt(C,x,C[x],O,s),x in S&&(s.e=S[x]),s.xs0=0,s.plugin=a,r._overwriteProps.push(s.n));return O=P.transformOrigin,C.svg&&(O||P.svgOrigin)&&(_=C.xOffset,v=C.yOffset,Et(t,ot(O),u,P.svgOrigin,P.smoothOrigin),s=yt(C,"xOrigin",(w?C:u).xOrigin,u.xOrigin,s,k),s=yt(C,"yOrigin",(w?C:u).yOrigin,u.yOrigin,s,k),(_!==C.xOffset||v!==C.yOffset)&&(s=yt(C,"xOffset",w?_:C.xOffset,C.xOffset,s,k),s=yt(C,"yOffset",w?v:C.yOffset,C.yOffset,s,k)),O=St?null:"0px 0px"),(O||At&&f&&C.zOrigin)&&(Ct?(p=!0,x=Rt,O=(O||K(t,x,n,!1,"50% 50%"))+"",(s=new vt(T,x,0,0,s,-1,k)).b=T[x],s.plugin=a,At?(c=C.zOrigin,O=O.split(" "),C.zOrigin=(O.length>2&&(0===c||"0px"!==O[2])?parseFloat(O[2]):c)||0,s.xs0=s.e=O[0]+" "+(O[1]||"50%")+" 0px",(s=new vt(C,"zOrigin",0,0,s,-1,s.n)).b=c,s.xs0=s.e=C.zOrigin):s.xs0=s.e=O):ot(O+"",C)),p&&(r._transformType=C.svg&&St||!f&&3!==this._transformType?2:3),h&&(l[i]=h),s},prefix:!0}),bt("boxShadow",{defaultValue:"0px 0px 0px 0px #999",prefix:!0,color:!0,multi:!0,keyword:"inset"}),bt("borderRadius",{defaultValue:"0px",parser:function(t,e,i,s,o,a){e=this.format(e);var l,h,u,c,f,p,d,_,g,m,v,y,x,w,T,b,P=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"],S=t.style;for(g=parseFloat(t.offsetWidth),m=parseFloat(t.offsetHeight),l=e.split(" "),h=0;h<P.length;h++)this.p.indexOf("border")&&(P[h]=Q(P[h])),-1!==(f=c=K(t,P[h],n,!1,"0px")).indexOf(" ")&&(c=f.split(" "),f=c[0],c=c[1]),p=u=l[h],d=parseFloat(f),y=f.substr((d+"").length),(x="="===p.charAt(1))?(_=parseInt(p.charAt(0)+"1",10),p=p.substr(2),_*=parseFloat(p),v=p.substr((_+"").length-(0>_?1:0))||""):(_=parseFloat(p),v=p.substr((_+"").length)),""===v&&(v=r[i]||y),v!==y&&(w=J(t,"borderLeft",d,y),T=J(t,"borderTop",d,y),"%"===v?(f=w/g*100+"%",c=T/m*100+"%"):"em"===v?(f=w/(b=J(t,"borderLeft",1,"em"))+"em",c=T/b+"em"):(f=w+"px",c=T+"px"),x&&(p=parseFloat(f)+_+v,u=parseFloat(c)+_+v)),o=xt(S,P[h],f+" "+c,p+" "+u,!1,"0px",o);return o},prefix:!0,formatter:_t("0px 0px 0px 0px",!1,!0)}),bt("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius",{defaultValue:"0px",parser:function(t,e,i,r,s,o){return xt(t.style,i,this.format(K(t,i,n,!1,"0px 0px")),this.format(e),!1,"0px",s)},prefix:!0,formatter:_t("0px 0px",!1,!0)}),bt("backgroundPosition",{defaultValue:"0 0",parser:function(t,e,i,r,s,o){var a,l,h,u,c,f,p="background-position",d=n||$(t,null),g=this.format((d?_?d.getPropertyValue(p+"-x")+" "+d.getPropertyValue(p+"-y"):d.getPropertyValue(p):t.currentStyle.backgroundPositionX+" "+t.currentStyle.backgroundPositionY)||"0 0"),m=this.format(e);if(-1!==g.indexOf("%")!=(-1!==m.indexOf("%"))&&m.split(",").length<2&&((f=K(t,"backgroundImage").replace(R,""))&&"none"!==f)){for(a=g.split(" "),l=m.split(" "),V.setAttribute("src",f),h=2;--h>-1;)(u=-1!==(g=a[h]).indexOf("%"))!==(-1!==l[h].indexOf("%"))&&(c=0===h?t.offsetWidth-V.width:t.offsetHeight-V.height,a[h]=u?parseFloat(g)/100*c+"px":parseFloat(g)/c*100+"%");g=a.join(" ")}return this.parseComplex(t.style,g,m,s,o)},formatter:ot}),bt("backgroundSize",{defaultValue:"0 0",formatter:function(t){return ot(-1===(t+="").indexOf(" ")?t+" "+t:t)}}),bt("perspective",{defaultValue:"0px",prefix:!0}),bt("perspectiveOrigin",{defaultValue:"50% 50%",prefix:!0}),bt("transformStyle",{prefix:!0}),bt("backfaceVisibility",{prefix:!0}),bt("userSelect",{prefix:!0}),bt("margin",{parser:gt("marginTop,marginRight,marginBottom,marginLeft")}),bt("padding",{parser:gt("paddingTop,paddingRight,paddingBottom,paddingLeft")}),bt("clip",{defaultValue:"rect(0px,0px,0px,0px)",parser:function(t,e,i,r,s,o){var a,l,h;return 9>_?(l=t.currentStyle,h=8>_?" ":",",a="rect("+l.clipTop+h+l.clipRight+h+l.clipBottom+h+l.clipLeft+")",e=this.format(e).split(",").join(h)):(a=this.format(K(t,this.p,n,!1,this.dflt)),e=this.format(e)),this.parseComplex(t.style,a,e,s,o)}}),bt("textShadow",{defaultValue:"0px 0px 0px #999",color:!0,multi:!0}),bt("autoRound,strictUnits",{parser:function(t,e,i,r,n){return n}}),bt("border",{defaultValue:"0px solid #000",parser:function(t,e,i,r,s,o){var a=K(t,"borderTopWidth",n,!1,"0px"),l=this.format(e).split(" "),h=l[0].replace(T,"");return"px"!==h&&(a=parseFloat(a)/J(t,"borderTopWidth",1,h)+h),this.parseComplex(t.style,this.format(a+" "+K(t,"borderTopStyle",n,!1,"solid")+" "+K(t,"borderTopColor",n,!1,"#000")),l.join(" "),s,o)},color:!0,formatter:function(t){var e=t.split(" ");return e[0]+" "+(e[1]||"solid")+" "+(t.match(dt)||["#000"])[0]}}),bt("borderWidth",{parser:gt("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")}),bt("float,cssFloat,styleFloat",{parser:function(t,e,i,r,n,s){var o=t.style,a="cssFloat"in o?"cssFloat":"styleFloat";return new vt(o,a,0,0,n,-1,i,!1,0,o[a],e)}});var jt=function(t){var e,i=this.t,r=i.filter||K(this.data,"filter")||"",n=this.s+this.c*t|0;100===n&&(-1===r.indexOf("atrix(")&&-1===r.indexOf("radient(")&&-1===r.indexOf("oader(")?(i.removeAttribute("filter"),e=!K(this.data,"filter")):(i.filter=r.replace(S,""),e=!0)),e||(this.xn1&&(i.filter=r=r||"alpha(opacity="+n+")"),-1===r.indexOf("pacity")?0===n&&this.xn1||(i.filter=r+" alpha(opacity="+n+")"):i.filter=r.replace(b,"opacity="+n))};bt("opacity,alpha,autoAlpha",{defaultValue:"1",parser:function(t,e,i,r,s,o){var a=parseFloat(K(t,"opacity",n,!1,"1")),l=t.style,h="autoAlpha"===i;return"string"==typeof e&&"="===e.charAt(1)&&(e=("-"===e.charAt(0)?-1:1)*parseFloat(e.substr(2))+a),h&&1===a&&"hidden"===K(t,"visibility",n)&&0!==e&&(a=0),U?s=new vt(l,"opacity",a,e-a,s):((s=new vt(l,"opacity",100*a,100*(e-a),s)).xn1=h?1:0,l.zoom=1,s.type=2,s.b="alpha(opacity="+s.s+")",s.e="alpha(opacity="+(s.s+s.c)+")",s.data=t,s.plugin=o,s.setRatio=jt),h&&((s=new vt(l,"visibility",0,0,s,-1,null,!1,0,0!==a?"inherit":"hidden",0===e?"hidden":"inherit")).xs0="inherit",r._overwriteProps.push(s.n),r._overwriteProps.push(i)),s}});var Wt=function(t,e){e&&(t.removeProperty?(("ms"===e.substr(0,2)||"webkit"===e.substr(0,6))&&(e="-"+e),t.removeProperty(e.replace(C,"-$1").toLowerCase())):t.removeAttribute(e))},Ut=function(t){if(this.t._gsClassPT=this,1===t||0===t){this.t.setAttribute("class",0===t?this.b:this.e);for(var e=this.data,i=this.t.style;e;)e.v?i[e.p]=e.v:Wt(i,e.p),e=e._next;1===t&&this.t._gsClassPT===this&&(this.t._gsClassPT=null)}else this.t.getAttribute("class")!==this.e&&this.t.setAttribute("class",this.e)};bt("className",{parser:function(t,e,r,s,o,a,l){var h,u,c,f,p,d=t.getAttribute("class")||"",_=t.style.cssText;if((o=s._classNamePT=new vt(t,r,0,0,o,2)).setRatio=Ut,o.pr=-11,i=!0,o.b=d,u=et(t,n),c=t._gsClassPT){for(f={},p=c.data;p;)f[p.p]=1,p=p._next;c.setRatio(1)}return t._gsClassPT=o,o.e="="!==e.charAt(1)?e:d.replace(new RegExp("(?:\\s|^)"+e.substr(2)+"(?![\\w-])"),"")+("+"===e.charAt(0)?" "+e.substr(2):""),t.setAttribute("class",o.e),h=it(t,u,et(t),l,f),t.setAttribute("class",d),o.data=h.firstMPT,t.style.cssText=_,o.xfirst=s.parse(t,h.difs,o,a)}});var Gt=function(t){if((1===t||0===t)&&this.data._totalTime===this.data._totalDuration&&"isFromStart"!==this.data.data){var e,i,r,n,s,o=this.t.style,a=l.transform.parse;if("all"===this.e)o.cssText="",n=!0;else for(r=(e=this.e.split(" ").join("").split(",")).length;--r>-1;)i=e[r],l[i]&&(l[i].parse===a?n=!0:i="transformOrigin"===i?Rt:l[i].p),Wt(o,i);n&&(Wt(o,Ct),(s=this.t._gsTransform)&&(s.svg&&(this.t.removeAttribute("data-svg-origin"),this.t.removeAttribute("transform")),delete this.t._gsTransform))}};for(bt("clearProps",{parser:function(t,e,r,n,s){return(s=new vt(t,r,0,0,s,2)).setRatio=Gt,s.e=e,s.pr=-10,s.data=n._tween,i=!0,s}}),h="bezier,throwProps,physicsProps,physics2D".split(","),wt=h.length;wt--;)Pt(h[wt]);(h=o.prototype)._firstPT=h._lastParsedTransform=h._transform=null,h._onInitTween=function(t,e,a,h){if(!t.nodeType)return!1;this._target=g=t,this._tween=a,this._vars=e,m=h,u=e.autoRound,i=!1,r=e.suffixMap||o.suffixMap,n=$(t,""),s=this._overwriteProps;var p,_,v,y,x,w,T,b,S,k=t.style;if(c&&""===k.zIndex&&(("auto"===(p=K(t,"zIndex",n))||""===p)&&this._addLazySet(k,"zIndex",0)),"string"==typeof e&&(y=k.cssText,p=et(t,n),k.cssText=y+";"+e,p=it(t,p,et(t)).difs,!U&&P.test(e)&&(p.opacity=parseFloat(RegExp.$1)),e=p,k.cssText=y),e.className?this._firstPT=_=l.className.parse(t,e.className,"className",this,null,null,e):this._firstPT=_=this.parse(t,e,null),this._transformType){for(S=3===this._transformType,Ct?f&&(c=!0,""===k.zIndex&&(("auto"===(T=K(t,"zIndex",n))||""===T)&&this._addLazySet(k,"zIndex",0)),d&&this._addLazySet(k,"WebkitBackfaceVisibility",this._vars.WebkitBackfaceVisibility||(S?"visible":"hidden"))):k.zoom=1,v=_;v&&v._next;)v=v._next;b=new vt(t,"transform",0,0,null,2),this._linkCSSP(b,null,v),b.setRatio=Ct?Vt:zt,b.data=this._transform||It(t,n,!0),b.tween=a,b.pr=-1,s.pop()}if(i){for(;_;){for(w=_._next,v=y;v&&v.pr>_.pr;)v=v._next;(_._prev=v?v._prev:x)?_._prev._next=_:y=_,(_._next=v)?v._prev=_:x=_,_=w}this._firstPT=y}return!0},h.parse=function(t,e,i,s){var o,a,h,c,f,p,d,_,v,y,x=t.style;for(o in e)"function"==typeof(p=e[o])&&(p=p(m,g)),(a=l[o])?i=a.parse(t,p,o,this,i,s,e):(f=K(t,o,n)+"",v="string"==typeof p,"color"===o||"fill"===o||"stroke"===o||-1!==o.indexOf("Color")||v&&k.test(p)?(v||(p=((p=ft(p)).length>3?"rgba(":"rgb(")+p.join(",")+")"),i=xt(x,o,f,p,!0,"transparent",i,0,s)):v&&X.test(p)?i=xt(x,o,f,p,!0,null,i,0,s):(d=(h=parseFloat(f))||0===h?f.substr((h+"").length):"",(""===f||"auto"===f)&&("width"===o||"height"===o?(h=st(t,o,n),d="px"):"left"===o||"top"===o?(h=tt(t,o,n),d="px"):(h="opacity"!==o?0:1,d="")),(y=v&&"="===p.charAt(1))?(c=parseInt(p.charAt(0)+"1",10),p=p.substr(2),c*=parseFloat(p),_=p.replace(T,"")):(c=parseFloat(p),_=v?p.replace(T,""):""),""===_&&(_=o in r?r[o]:d),p=c||0===c?(y?c+h:c)+_:e[o],d!==_&&""!==_&&(c||0===c)&&h&&(h=J(t,o,h,d),"%"===_?(h/=J(t,o,100,"%")/100,!0!==e.strictUnits&&(f=h+"%")):"em"===_||"rem"===_||"vw"===_||"vh"===_?h/=J(t,o,1,_):"px"!==_&&(c=J(t,o,c,_),_="px"),y&&(c||0===c)&&(p=c+h+_)),y&&(c+=h),!h&&0!==h||!c&&0!==c?void 0!==x[o]&&(p||p+""!="NaN"&&null!=p)?(i=new vt(x,o,c||h||0,0,i,-1,o,!1,0,f,p)).xs0="none"!==p||"display"!==o&&-1===o.indexOf("Style")?p:f:H("invalid "+o+" tween value: "+e[o]):(i=new vt(x,o,h,c-h,i,0,o,!1!==u&&("px"===_||"zIndex"===o),0,f,p)).xs0=_)),s&&i&&!i.plugin&&(i.plugin=s);return i},h.setRatio=function(t){var e,i,r,n=this._firstPT;if(1!==t||this._tween._time!==this._tween._duration&&0!==this._tween._time)if(t||this._tween._time!==this._tween._duration&&0!==this._tween._time||-1e-6===this._tween._rawPrevTime)for(;n;){if(e=n.c*t+n.s,n.r?e=Math.round(e):1e-6>e&&e>-1e-6&&(e=0),n.type)if(1===n.type)if(2===(r=n.l))n.t[n.p]=n.xs0+e+n.xs1+n.xn1+n.xs2;else if(3===r)n.t[n.p]=n.xs0+e+n.xs1+n.xn1+n.xs2+n.xn2+n.xs3;else if(4===r)n.t[n.p]=n.xs0+e+n.xs1+n.xn1+n.xs2+n.xn2+n.xs3+n.xn3+n.xs4;else if(5===r)n.t[n.p]=n.xs0+e+n.xs1+n.xn1+n.xs2+n.xn2+n.xs3+n.xn3+n.xs4+n.xn4+n.xs5;else{for(i=n.xs0+e+n.xs1,r=1;r<n.l;r++)i+=n["xn"+r]+n["xs"+(r+1)];n.t[n.p]=i}else-1===n.type?n.t[n.p]=n.xs0:n.setRatio&&n.setRatio(t);else n.t[n.p]=e+n.xs0;n=n._next}else for(;n;)2!==n.type?n.t[n.p]=n.b:n.setRatio(t),n=n._next;else for(;n;){if(2!==n.type)if(n.r&&-1!==n.type)if(e=Math.round(n.s+n.c),n.type){if(1===n.type){for(r=n.l,i=n.xs0+e+n.xs1,r=1;r<n.l;r++)i+=n["xn"+r]+n["xs"+(r+1)];n.t[n.p]=i}}else n.t[n.p]=e+n.xs0;else n.t[n.p]=n.e;else n.setRatio(t);n=n._next}},h._enableTransforms=function(t){this._transform=this._transform||It(this._target,n,!0),this._transformType=this._transform.svg&&St||!t&&3!==this._transformType?2:3};var Ht=function(t){this.t[this.p]=this.e,this.data._linkCSSP(this,this._next,null,!0)};h._addLazySet=function(t,e,i){var r=this._firstPT=new vt(t,e,0,0,this._firstPT,2);r.e=i,r.setRatio=Ht,r.data=this},h._linkCSSP=function(t,e,i,r){return t&&(e&&(e._prev=t),t._next&&(t._next._prev=t._prev),t._prev?t._prev._next=t._next:this._firstPT===t&&(this._firstPT=t._next,r=!0),i?i._next=t:r||null!==this._firstPT||(this._firstPT=t),t._next=e,t._prev=i),t},h._mod=function(t){for(var e=this._firstPT;e;)"function"==typeof t[e.p]&&t[e.p]===Math.round&&(e.r=1),e=e._next},h._kill=function(e){var i,r,n,s=e;if(e.autoAlpha||e.alpha){for(r in s={},e)s[r]=e[r];s.opacity=1,s.autoAlpha&&(s.visibility=1)}for(e.className&&(i=this._classNamePT)&&((n=i.xfirst)&&n._prev?this._linkCSSP(n._prev,i._next,n._prev._prev):n===this._firstPT&&(this._firstPT=i._next),i._next&&this._linkCSSP(i._next,i._next._next,n._prev),this._classNamePT=null),i=this._firstPT;i;)i.plugin&&i.plugin!==r&&i.plugin._kill&&(i.plugin._kill(e),r=i.plugin),i=i._next;return t.prototype._kill.call(this,s)};var qt=function(t,e,i){var r,n,s,o;if(t.slice)for(n=t.length;--n>-1;)qt(t[n],e,i);else for(n=(r=t.childNodes).length;--n>-1;)o=(s=r[n]).type,s.style&&(e.push(et(s)),i&&i.push(s)),1!==o&&9!==o&&11!==o||!s.childNodes.length||qt(s,e,i)};return o.cascadeTo=function(t,i,r){var n,s,o,a,l=e.to(t,i,r),h=[l],u=[],c=[],f=[],p=e._internals.reservedProps;for(t=l._targets||l.target,qt(t,u,f),l.render(i,!0,!0),qt(t,c),l.render(0,!0,!0),l._enabled(!0),n=f.length;--n>-1;)if((s=it(f[n],u[n],c[n])).firstMPT){for(o in s=s.difs,r)p[o]&&(s[o]=r[o]);for(o in a={},s)a[o]=u[n][o];h.push(e.fromTo(f[n],i,a,s))}return h},t.activate([o]),o},!0),function(){var t=_gsScope._gsDefine.plugin({propName:"roundProps",version:"1.6.0",priority:-1,API:2,init:function(t,e,i){return this._tween=i,!0}}),e=function(t){for(;t;)t.f||t.blob||(t.m=Math.round),t=t._next},i=t.prototype;i._onInitAllProps=function(){for(var t,i,r,n=this._tween,s=n.vars.roundProps.join?n.vars.roundProps:n.vars.roundProps.split(","),o=s.length,a={},l=n._propLookup.roundProps;--o>-1;)a[s[o]]=Math.round;for(o=s.length;--o>-1;)for(t=s[o],i=n._firstPT;i;)r=i._next,i.pg?i.t._mod(a):i.n===t&&(2===i.f&&i.t?e(i.t._firstPT):(this._add(i.t,t,i.s,i.c),r&&(r._prev=i._prev),i._prev?i._prev._next=r:n._firstPT===i&&(n._firstPT=r),i._next=i._prev=null,n._propLookup[t]=l)),i=r;return!1},i._add=function(t,e,i,r){this._addTween(t,e,i,i+r,e,Math.round),this._overwriteProps.push(e)}}(),_gsScope._gsDefine.plugin({propName:"attr",API:2,version:"0.6.0",init:function(t,e,i,r){var n,s;if("function"!=typeof t.setAttribute)return!1;for(n in e)"function"==typeof(s=e[n])&&(s=s(r,t)),this._addTween(t,"setAttribute",t.getAttribute(n)+"",s+"",n,!1,n),this._overwriteProps.push(n);return!0}}),_gsScope._gsDefine.plugin({propName:"directionalRotation",version:"0.3.0",API:2,init:function(t,e,i,r){"object"!=typeof e&&(e={rotation:e}),this.finals={};var n,s,o,a,l,h,u=!0===e.useRadians?2*Math.PI:360;for(n in e)"useRadians"!==n&&("function"==typeof(a=e[n])&&(a=a(r,t)),s=(h=(a+"").split("_"))[0],o=parseFloat("function"!=typeof t[n]?t[n]:t[n.indexOf("set")||"function"!=typeof t["get"+n.substr(3)]?n:"get"+n.substr(3)]()),l=(a=this.finals[n]="string"==typeof s&&"="===s.charAt(1)?o+parseInt(s.charAt(0)+"1",10)*Number(s.substr(2)):Number(s)||0)-o,h.length&&(-1!==(s=h.join("_")).indexOf("short")&&((l%=u)!==l%(u/2)&&(l=0>l?l+u:l-u)),-1!==s.indexOf("_cw")&&0>l?l=(l+9999999999*u)%u-(l/u|0)*u:-1!==s.indexOf("ccw")&&l>0&&(l=(l-9999999999*u)%u-(l/u|0)*u)),(l>1e-6||-1e-6>l)&&(this._addTween(t,n,o,o+l,n),this._overwriteProps.push(n)));return!0},set:function(t){var e;if(1!==t)this._super.setRatio.call(this,t);else for(e=this._firstPT;e;)e.f?e.t[e.p](this.finals[e.p]):e.t[e.p]=this.finals[e.p],e=e._next}})._autoCSS=!0,_gsScope._gsDefine("easing.Back",["easing.Ease"],function(t){var e,i,r,n=_gsScope.GreenSockGlobals||_gsScope,s=n.com.greensock,o=2*Math.PI,a=Math.PI/2,l=s._class,h=function(e,i){var r=l("easing."+e,function(){},!0),n=r.prototype=new t;return n.constructor=r,n.getRatio=i,r},u=t.register||function(){},c=function(t,e,i,r,n){var s=l("easing."+t,{easeOut:new e,easeIn:new i,easeInOut:new r},!0);return u(s,t),s},f=function(t,e,i){this.t=t,this.v=e,i&&(this.next=i,i.prev=this,this.c=i.v-e,this.gap=i.t-t)},p=function(e,i){var r=l("easing."+e,function(t){this._p1=t||0===t?t:1.70158,this._p2=1.525*this._p1},!0),n=r.prototype=new t;return n.constructor=r,n.getRatio=i,n.config=function(t){return new r(t)},r},d=c("Back",p("BackOut",function(t){return(t-=1)*t*((this._p1+1)*t+this._p1)+1}),p("BackIn",function(t){return t*t*((this._p1+1)*t-this._p1)}),p("BackInOut",function(t){return(t*=2)<1?.5*t*t*((this._p2+1)*t-this._p2):.5*((t-=2)*t*((this._p2+1)*t+this._p2)+2)})),_=l("easing.SlowMo",function(t,e,i){e=e||0===e?e:.7,null==t?t=.7:t>1&&(t=1),this._p=1!==t?e:0,this._p1=(1-t)/2,this._p2=t,this._p3=this._p1+this._p2,this._calcEnd=!0===i},!0),g=_.prototype=new t;return g.constructor=_,g.getRatio=function(t){var e=t+(.5-t)*this._p;return t<this._p1?this._calcEnd?1-(t=1-t/this._p1)*t:e-(t=1-t/this._p1)*t*t*t*e:t>this._p3?this._calcEnd?1-(t=(t-this._p3)/this._p1)*t:e+(t-e)*(t=(t-this._p3)/this._p1)*t*t*t:this._calcEnd?1:e},_.ease=new _(.7,.7),g.config=_.config=function(t,e,i){return new _(t,e,i)},(g=(e=l("easing.SteppedEase",function(t){t=t||1,this._p1=1/t,this._p2=t+1},!0)).prototype=new t).constructor=e,g.getRatio=function(t){return 0>t?t=0:t>=1&&(t=.999999999),(this._p2*t>>0)*this._p1},g.config=e.config=function(t){return new e(t)},i=l("easing.RoughEase",function(e){for(var i,r,n,s,o,a,l=(e=e||{}).taper||"none",h=[],u=0,c=0|(e.points||20),p=c,d=!1!==e.randomize,_=!0===e.clamp,g=e.template instanceof t?e.template:null,m="number"==typeof e.strength?.4*e.strength:.4;--p>-1;)i=d?Math.random():1/c*p,r=g?g.getRatio(i):i,"none"===l?n=m:"out"===l?n=(s=1-i)*s*m:"in"===l?n=i*i*m:.5>i?n=(s=2*i)*s*.5*m:n=(s=2*(1-i))*s*.5*m,d?r+=Math.random()*n-.5*n:p%2?r+=.5*n:r-=.5*n,_&&(r>1?r=1:0>r&&(r=0)),h[u++]={x:i,y:r};for(h.sort(function(t,e){return t.x-e.x}),a=new f(1,1,null),p=c;--p>-1;)o=h[p],a=new f(o.x,o.y,a);this._prev=new f(0,0,0!==a.t?a:a.next)},!0),(g=i.prototype=new t).constructor=i,g.getRatio=function(t){var e=this._prev;if(t>e.t){for(;e.next&&t>=e.t;)e=e.next;e=e.prev}else for(;e.prev&&t<=e.t;)e=e.prev;return this._prev=e,e.v+(t-e.t)/e.gap*e.c},g.config=function(t){return new i(t)},i.ease=new i,c("Bounce",h("BounceOut",function(t){return 1/2.75>t?7.5625*t*t:2/2.75>t?7.5625*(t-=1.5/2.75)*t+.75:2.5/2.75>t?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375}),h("BounceIn",function(t){return(t=1-t)<1/2.75?1-7.5625*t*t:2/2.75>t?1-(7.5625*(t-=1.5/2.75)*t+.75):2.5/2.75>t?1-(7.5625*(t-=2.25/2.75)*t+.9375):1-(7.5625*(t-=2.625/2.75)*t+.984375)}),h("BounceInOut",function(t){var e=.5>t;return t=1/2.75>(t=e?1-2*t:2*t-1)?7.5625*t*t:2/2.75>t?7.5625*(t-=1.5/2.75)*t+.75:2.5/2.75>t?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375,e?.5*(1-t):.5*t+.5})),c("Circ",h("CircOut",function(t){return Math.sqrt(1-(t-=1)*t)}),h("CircIn",function(t){return-(Math.sqrt(1-t*t)-1)}),h("CircInOut",function(t){return(t*=2)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)})),c("Elastic",(r=function(e,i,r){var n=l("easing."+e,function(t,e){this._p1=t>=1?t:1,this._p2=(e||r)/(1>t?t:1),this._p3=this._p2/o*(Math.asin(1/this._p1)||0),this._p2=o/this._p2},!0),s=n.prototype=new t;return s.constructor=n,s.getRatio=i,s.config=function(t,e){return new n(t,e)},n})("ElasticOut",function(t){return this._p1*Math.pow(2,-10*t)*Math.sin((t-this._p3)*this._p2)+1},.3),r("ElasticIn",function(t){return-this._p1*Math.pow(2,10*(t-=1))*Math.sin((t-this._p3)*this._p2)},.3),r("ElasticInOut",function(t){return(t*=2)<1?this._p1*Math.pow(2,10*(t-=1))*Math.sin((t-this._p3)*this._p2)*-.5:this._p1*Math.pow(2,-10*(t-=1))*Math.sin((t-this._p3)*this._p2)*.5+1},.45)),c("Expo",h("ExpoOut",function(t){return 1-Math.pow(2,-10*t)}),h("ExpoIn",function(t){return Math.pow(2,10*(t-1))-.001}),h("ExpoInOut",function(t){return(t*=2)<1?.5*Math.pow(2,10*(t-1)):.5*(2-Math.pow(2,-10*(t-1)))})),c("Sine",h("SineOut",function(t){return Math.sin(t*a)}),h("SineIn",function(t){return 1-Math.cos(t*a)}),h("SineInOut",function(t){return-.5*(Math.cos(Math.PI*t)-1)})),l("easing.EaseLookup",{find:function(e){return t.map[e]}},!0),u(n.SlowMo,"SlowMo","ease,"),u(i,"RoughEase","ease,"),u(e,"SteppedEase","ease,"),d},!0)}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(t,e){"use strict";var i={},r=t.GreenSockGlobals=t.GreenSockGlobals||t;if(!r.TweenLite){var n,s,o,a,l,h=function(t){var e,i=t.split("."),n=r;for(e=0;e<i.length;e++)n[i[e]]=n=n[i[e]]||{};return n},u=h("com.greensock"),c=1e-10,f=function(t){var e,i=[],r=t.length;for(e=0;e!==r;i.push(t[e++]));return i},p=function(){},d=function(){var t=Object.prototype.toString,e=t.call([]);return function(i){return null!=i&&(i instanceof Array||"object"==typeof i&&!!i.push&&t.call(i)===e)}}(),_={},g=function(n,s,o,a){this.sc=_[n]?_[n].sc:[],_[n]=this,this.gsClass=null,this.func=o;var l=[];this.check=function(u){for(var c,f,p,d,m,v=s.length,y=v;--v>-1;)(c=_[s[v]]||new g(s[v],[])).gsClass?(l[v]=c.gsClass,y--):u&&c.sc.push(this);if(0===y&&o){if(p=(f=("com.greensock."+n).split(".")).pop(),d=h(f.join("."))[p]=this.gsClass=o.apply(o,l),a)if(r[p]=i[p]=d,!(m="undefined"!=typeof module&&module.exports)&&"function"==typeof define&&define.amd)define((t.GreenSockAMDPath?t.GreenSockAMDPath+"/":"")+n.split(".").pop(),[],function(){return d});else if(m)if(n===e)for(v in module.exports=i[e]=d,i)d[v]=i[v];else i[e]&&(i[e][p]=d);for(v=0;v<this.sc.length;v++)this.sc[v].check()}},this.check(!0)},m=t._gsDefine=function(t,e,i,r){return new g(t,e,i,r)},v=u._class=function(t,e,i){return e=e||function(){},m(t,[],function(){return e},i),e};m.globals=r;var y=[0,0,1,1],x=v("easing.Ease",function(t,e,i,r){this._func=t,this._type=i||0,this._power=r||0,this._params=e?y.concat(e):y},!0),w=x.map={},T=x.register=function(t,e,i,r){for(var n,s,o,a,l=e.split(","),h=l.length,c=(i||"easeIn,easeOut,easeInOut").split(",");--h>-1;)for(s=l[h],n=r?v("easing."+s,null,!0):u.easing[s]||{},o=c.length;--o>-1;)a=c[o],w[s+"."+a]=w[a+s]=n[a]=t.getRatio?t:t[a]||new t};for((o=x.prototype)._calcEnd=!1,o.getRatio=function(t){if(this._func)return this._params[0]=t,this._func.apply(null,this._params);var e=this._type,i=this._power,r=1===e?1-t:2===e?t:.5>t?2*t:2*(1-t);return 1===i?r*=r:2===i?r*=r*r:3===i?r*=r*r*r:4===i&&(r*=r*r*r*r),1===e?1-r:2===e?r:.5>t?r/2:1-r/2},s=(n=["Linear","Quad","Cubic","Quart","Quint,Strong"]).length;--s>-1;)o=n[s]+",Power"+s,T(new x(null,null,1,s),o,"easeOut",!0),T(new x(null,null,2,s),o,"easeIn"+(0===s?",easeNone":"")),T(new x(null,null,3,s),o,"easeInOut");w.linear=u.easing.Linear.easeIn,w.swing=u.easing.Quad.easeInOut;var b=v("events.EventDispatcher",function(t){this._listeners={},this._eventTarget=t||this});(o=b.prototype).addEventListener=function(t,e,i,r,n){n=n||0;var s,o,h=this._listeners[t],u=0;for(this!==a||l||a.wake(),null==h&&(this._listeners[t]=h=[]),o=h.length;--o>-1;)(s=h[o]).c===e&&s.s===i?h.splice(o,1):0===u&&s.pr<n&&(u=o+1);h.splice(u,0,{c:e,s:i,up:r,pr:n})},o.removeEventListener=function(t,e){var i,r=this._listeners[t];if(r)for(i=r.length;--i>-1;)if(r[i].c===e)return void r.splice(i,1)},o.dispatchEvent=function(t){var e,i,r,n=this._listeners[t];if(n)for((e=n.length)>1&&(n=n.slice(0)),i=this._eventTarget;--e>-1;)(r=n[e])&&(r.up?r.c.call(r.s||i,{type:t,target:i}):r.c.call(r.s||i))};var P=t.requestAnimationFrame,S=t.cancelAnimationFrame,k=Date.now||function(){return(new Date).getTime()},C=k();for(s=(n=["ms","moz","webkit","o"]).length;--s>-1&&!P;)P=t[n[s]+"RequestAnimationFrame"],S=t[n[s]+"CancelAnimationFrame"]||t[n[s]+"CancelRequestAnimationFrame"];v("Ticker",function(t,e){var i,r,n,s,o,h=this,u=k(),f=!(!1===e||!P)&&"auto",d=500,_=33,g=function(t){var e,a,l=k()-C;l>d&&(u+=l-_),C+=l,h.time=(C-u)/1e3,e=h.time-o,(!i||e>0||!0===t)&&(h.frame++,o+=e+(e>=s?.004:s-e),a=!0),!0!==t&&(n=r(g)),a&&h.dispatchEvent("tick")};b.call(h),h.time=h.frame=0,h.tick=function(){g(!0)},h.lagSmoothing=function(t,e){d=t||1/c,_=Math.min(e,d,0)},h.sleep=function(){null!=n&&(f&&S?S(n):clearTimeout(n),r=p,n=null,h===a&&(l=!1))},h.wake=function(t){null!==n?h.sleep():t?u+=-C+(C=k()):h.frame>10&&(C=k()-d+5),r=0===i?p:f&&P?P:function(t){return setTimeout(t,1e3*(o-h.time)+1|0)},h===a&&(l=!0),g(2)},h.fps=function(t){return arguments.length?(s=1/((i=t)||60),o=this.time+s,void h.wake()):i},h.useRAF=function(t){return arguments.length?(h.sleep(),f=t,void h.fps(i)):f},h.fps(t),setTimeout(function(){"auto"===f&&h.frame<5&&"hidden"!==document.visibilityState&&h.useRAF(!1)},1500)}),(o=u.Ticker.prototype=new u.events.EventDispatcher).constructor=u.Ticker;var O=v("core.Animation",function(t,e){if(this.vars=e=e||{},this._duration=this._totalDuration=t||0,this._delay=Number(e.delay)||0,this._timeScale=1,this._active=!0===e.immediateRender,this.data=e.data,this._reversed=!0===e.reversed,G){l||a.wake();var i=this.vars.useFrames?U:G;i.add(this,i._time),this.vars.paused&&this.paused(!0)}});a=O.ticker=new u.Ticker,(o=O.prototype)._dirty=o._gc=o._initted=o._paused=!1,o._totalTime=o._time=0,o._rawPrevTime=-1,o._next=o._last=o._onUpdate=o._timeline=o.timeline=null,o._paused=!1;var R=function(){l&&k()-C>2e3&&a.wake(),setTimeout(R,2e3)};R(),o.play=function(t,e){return null!=t&&this.seek(t,e),this.reversed(!1).paused(!1)},o.pause=function(t,e){return null!=t&&this.seek(t,e),this.paused(!0)},o.resume=function(t,e){return null!=t&&this.seek(t,e),this.paused(!1)},o.seek=function(t,e){return this.totalTime(Number(t),!1!==e)},o.restart=function(t,e){return this.reversed(!1).paused(!1).totalTime(t?-this._delay:0,!1!==e,!0)},o.reverse=function(t,e){return null!=t&&this.seek(t||this.totalDuration(),e),this.reversed(!0).paused(!1)},o.render=function(t,e,i){},o.invalidate=function(){return this._time=this._totalTime=0,this._initted=this._gc=!1,this._rawPrevTime=-1,(this._gc||!this.timeline)&&this._enabled(!0),this},o.isActive=function(){var t,e=this._timeline,i=this._startTime;return!e||!this._gc&&!this._paused&&e.isActive()&&(t=e.rawTime())>=i&&t<i+this.totalDuration()/this._timeScale},o._enabled=function(t,e){return l||a.wake(),this._gc=!t,this._active=this.isActive(),!0!==e&&(t&&!this.timeline?this._timeline.add(this,this._startTime-this._delay):!t&&this.timeline&&this._timeline._remove(this,!0)),!1},o._kill=function(t,e){return this._enabled(!1,!1)},o.kill=function(t,e){return this._kill(t,e),this},o._uncache=function(t){for(var e=t?this:this.timeline;e;)e._dirty=!0,e=e.timeline;return this},o._swapSelfInParams=function(t){for(var e=t.length,i=t.concat();--e>-1;)"{self}"===t[e]&&(i[e]=this);return i},o._callback=function(t){var e=this.vars,i=e[t],r=e[t+"Params"],n=e[t+"Scope"]||e.callbackScope||this;switch(r?r.length:0){case 0:i.call(n);break;case 1:i.call(n,r[0]);break;case 2:i.call(n,r[0],r[1]);break;default:i.apply(n,r)}},o.eventCallback=function(t,e,i,r){if("on"===(t||"").substr(0,2)){var n=this.vars;if(1===arguments.length)return n[t];null==e?delete n[t]:(n[t]=e,n[t+"Params"]=d(i)&&-1!==i.join("").indexOf("{self}")?this._swapSelfInParams(i):i,n[t+"Scope"]=r),"onUpdate"===t&&(this._onUpdate=e)}return this},o.delay=function(t){return arguments.length?(this._timeline.smoothChildTiming&&this.startTime(this._startTime+t-this._delay),this._delay=t,this):this._delay},o.duration=function(t){return arguments.length?(this._duration=this._totalDuration=t,this._uncache(!0),this._timeline.smoothChildTiming&&this._time>0&&this._time<this._duration&&0!==t&&this.totalTime(this._totalTime*(t/this._duration),!0),this):(this._dirty=!1,this._duration)},o.totalDuration=function(t){return this._dirty=!1,arguments.length?this.duration(t):this._totalDuration},o.time=function(t,e){return arguments.length?(this._dirty&&this.totalDuration(),this.totalTime(t>this._duration?this._duration:t,e)):this._time},o.totalTime=function(t,e,i){if(l||a.wake(),!arguments.length)return this._totalTime;if(this._timeline){if(0>t&&!i&&(t+=this.totalDuration()),this._timeline.smoothChildTiming){this._dirty&&this.totalDuration();var r=this._totalDuration,n=this._timeline;if(t>r&&!i&&(t=r),this._startTime=(this._paused?this._pauseTime:n._time)-(this._reversed?r-t:t)/this._timeScale,n._dirty||this._uncache(!1),n._timeline)for(;n._timeline;)n._timeline._time!==(n._startTime+n._totalTime)/n._timeScale&&n.totalTime(n._totalTime,!0),n=n._timeline}this._gc&&this._enabled(!0,!1),(this._totalTime!==t||0===this._duration)&&(N.length&&q(),this.render(t,e,!1),N.length&&q())}return this},o.progress=o.totalProgress=function(t,e){var i=this.duration();return arguments.length?this.totalTime(i*t,e):i?this._time/i:this.ratio},o.startTime=function(t){return arguments.length?(t!==this._startTime&&(this._startTime=t,this.timeline&&this.timeline._sortChildren&&this.timeline.add(this,t-this._delay)),this):this._startTime},o.endTime=function(t){return this._startTime+(0!=t?this.totalDuration():this.duration())/this._timeScale},o.timeScale=function(t){if(!arguments.length)return this._timeScale;if(t=t||c,this._timeline&&this._timeline.smoothChildTiming){var e=this._pauseTime,i=e||0===e?e:this._timeline.totalTime();this._startTime=i-(i-this._startTime)*this._timeScale/t}return this._timeScale=t,this._uncache(!1)},o.reversed=function(t){return arguments.length?(t!=this._reversed&&(this._reversed=t,this.totalTime(this._timeline&&!this._timeline.smoothChildTiming?this.totalDuration()-this._totalTime:this._totalTime,!0)),this):this._reversed},o.paused=function(t){if(!arguments.length)return this._paused;var e,i,r=this._timeline;return t!=this._paused&&r&&(l||t||a.wake(),i=(e=r.rawTime())-this._pauseTime,!t&&r.smoothChildTiming&&(this._startTime+=i,this._uncache(!1)),this._pauseTime=t?e:null,this._paused=t,this._active=this.isActive(),!t&&0!==i&&this._initted&&this.duration()&&(e=r.smoothChildTiming?this._totalTime:(e-this._startTime)/this._timeScale,this.render(e,e===this._totalTime,!0))),this._gc&&!t&&this._enabled(!0,!1),this};var A=v("core.SimpleTimeline",function(t){O.call(this,0,t),this.autoRemoveChildren=this.smoothChildTiming=!0});(o=A.prototype=new O).constructor=A,o.kill()._gc=!1,o._first=o._last=o._recent=null,o._sortChildren=!1,o.add=o.insert=function(t,e,i,r){var n,s;if(t._startTime=Number(e||0)+t._delay,t._paused&&this!==t._timeline&&(t._pauseTime=t._startTime+(this.rawTime()-t._startTime)/t._timeScale),t.timeline&&t.timeline._remove(t,!0),t.timeline=t._timeline=this,t._gc&&t._enabled(!0,!0),n=this._last,this._sortChildren)for(s=t._startTime;n&&n._startTime>s;)n=n._prev;return n?(t._next=n._next,n._next=t):(t._next=this._first,this._first=t),t._next?t._next._prev=t:this._last=t,t._prev=n,this._recent=t,this._timeline&&this._uncache(!0),this},o._remove=function(t,e){return t.timeline===this&&(e||t._enabled(!1,!0),t._prev?t._prev._next=t._next:this._first===t&&(this._first=t._next),t._next?t._next._prev=t._prev:this._last===t&&(this._last=t._prev),t._next=t._prev=t.timeline=null,t===this._recent&&(this._recent=this._last),this._timeline&&this._uncache(!0)),this},o.render=function(t,e,i){var r,n=this._first;for(this._totalTime=this._time=this._rawPrevTime=t;n;)r=n._next,(n._active||t>=n._startTime&&!n._paused)&&(n._reversed?n.render((n._dirty?n.totalDuration():n._totalDuration)-(t-n._startTime)*n._timeScale,e,i):n.render((t-n._startTime)*n._timeScale,e,i)),n=r},o.rawTime=function(){return l||a.wake(),this._totalTime};var D=v("TweenLite",function(e,i,r){if(O.call(this,i,r),this.render=D.prototype.render,null==e)throw"Cannot tween a null target.";this.target=e="string"!=typeof e?e:D.selector(e)||e;var n,s,o,a=e.jquery||e.length&&e!==t&&e[0]&&(e[0]===t||e[0].nodeType&&e[0].style&&!e.nodeType),l=this.vars.overwrite;if(this._overwrite=l=null==l?W[D.defaultOverwrite]:"number"==typeof l?l>>0:W[l],(a||e instanceof Array||e.push&&d(e))&&"number"!=typeof e[0])for(this._targets=o=f(e),this._propLookup=[],this._siblings=[],n=0;n<o.length;n++)(s=o[n])?"string"!=typeof s?s.length&&s!==t&&s[0]&&(s[0]===t||s[0].nodeType&&s[0].style&&!s.nodeType)?(o.splice(n--,1),this._targets=o=o.concat(f(s))):(this._siblings[n]=Z(s,this,!1),1===l&&this._siblings[n].length>1&&$(s,this,null,1,this._siblings[n])):"string"==typeof(s=o[n--]=D.selector(s))&&o.splice(n+1,1):o.splice(n--,1);else this._propLookup={},this._siblings=Z(e,this,!1),1===l&&this._siblings.length>1&&$(e,this,null,1,this._siblings);(this.vars.immediateRender||0===i&&0===this._delay&&!1!==this.vars.immediateRender)&&(this._time=-c,this.render(Math.min(0,-this._delay)))},!0),M=function(e){return e&&e.length&&e!==t&&e[0]&&(e[0]===t||e[0].nodeType&&e[0].style&&!e.nodeType)};(o=D.prototype=new O).constructor=D,o.kill()._gc=!1,o.ratio=0,o._firstPT=o._targets=o._overwrittenProps=o._startAt=null,o._notifyPluginsOfEnabled=o._lazy=!1,D.version="1.19.0",D.defaultEase=o._ease=new x(null,null,1,1),D.defaultOverwrite="auto",D.ticker=a,D.autoSleep=120,D.lagSmoothing=function(t,e){a.lagSmoothing(t,e)},D.selector=t.$||t.jQuery||function(e){var i=t.$||t.jQuery;return i?(D.selector=i,i(e)):"undefined"==typeof document?e:document.querySelectorAll?document.querySelectorAll(e):document.getElementById("#"===e.charAt(0)?e.substr(1):e)};var N=[],L={},X=/(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,E=function(t){for(var e,i=this._firstPT;i;)e=i.blob?t?this.join(""):this.start:i.c*t+i.s,i.m?e=i.m(e,this._target||i.t):1e-6>e&&e>-1e-6&&(e=0),i.f?i.fp?i.t[i.p](i.fp,e):i.t[i.p](e):i.t[i.p]=e,i=i._next},F=function(t,e,i,r){var n,s,o,a,l,h,u,c=[t,e],f=0,p="",d=0;for(c.start=t,i&&(i(c),t=c[0],e=c[1]),c.length=0,n=t.match(X)||[],s=e.match(X)||[],r&&(r._next=null,r.blob=1,c._firstPT=c._applyPT=r),l=s.length,a=0;l>a;a++)u=s[a],p+=(h=e.substr(f,e.indexOf(u,f)-f))||!a?h:",",f+=h.length,d?d=(d+1)%5:"rgba("===h.substr(-5)&&(d=1),u===n[a]||n.length<=a?p+=u:(p&&(c.push(p),p=""),o=parseFloat(n[a]),c.push(o),c._firstPT={_next:c._firstPT,t:c,p:c.length-1,s:o,c:("="===u.charAt(1)?parseInt(u.charAt(0)+"1",10)*parseFloat(u.substr(2)):parseFloat(u)-o)||0,f:0,m:d&&4>d?Math.round:0}),f+=u.length;return(p+=e.substr(f))&&c.push(p),c.setRatio=E,c},Y=function(t,e,i,r,n,s,o,a,l){"function"==typeof r&&(r=r(l||0,t));var h,u="get"===i?t[e]:i,c=typeof t[e],f="string"==typeof r&&"="===r.charAt(1),p={t:t,p:e,s:u,f:"function"===c,pg:0,n:n||e,m:s?"function"==typeof s?s:Math.round:0,pr:0,c:f?parseInt(r.charAt(0)+"1",10)*parseFloat(r.substr(2)):parseFloat(r)-u||0};return"number"!==c&&("function"===c&&"get"===i&&(h=e.indexOf("set")||"function"!=typeof t["get"+e.substr(3)]?e:"get"+e.substr(3),p.s=u=o?t[h](o):t[h]()),"string"==typeof u&&(o||isNaN(u))?(p.fp=o,p={t:F(u,r,a||D.defaultStringFilter,p),p:"setRatio",s:0,c:1,f:2,pg:0,n:n||e,pr:0,m:0}):f||(p.s=parseFloat(u),p.c=parseFloat(r)-p.s||0)),p.c?((p._next=this._firstPT)&&(p._next._prev=p),this._firstPT=p,p):void 0},B=D._internals={isArray:d,isSelector:M,lazyTweens:N,blobDif:F},I=D._plugins={},z=B.tweenLookup={},V=0,j=B.reservedProps={ease:1,delay:1,overwrite:1,onComplete:1,onCompleteParams:1,onCompleteScope:1,useFrames:1,runBackwards:1,startAt:1,onUpdate:1,onUpdateParams:1,onUpdateScope:1,onStart:1,onStartParams:1,onStartScope:1,onReverseComplete:1,onReverseCompleteParams:1,onReverseCompleteScope:1,onRepeat:1,onRepeatParams:1,onRepeatScope:1,easeParams:1,yoyo:1,immediateRender:1,repeat:1,repeatDelay:1,data:1,paused:1,reversed:1,autoCSS:1,lazy:1,onOverwrite:1,callbackScope:1,stringFilter:1,id:1},W={none:0,all:1,auto:2,concurrent:3,allOnStart:4,preexisting:5,true:1,false:0},U=O._rootFramesTimeline=new A,G=O._rootTimeline=new A,H=30,q=B.lazyRender=function(){var t,e=N.length;for(L={};--e>-1;)(t=N[e])&&!1!==t._lazy&&(t.render(t._lazy[0],t._lazy[1],!0),t._lazy=!1);N.length=0};G._startTime=a.time,U._startTime=a.frame,G._active=U._active=!0,setTimeout(q,1),O._updateRoot=D.render=function(){var t,e,i;if(N.length&&q(),G.render((a.time-G._startTime)*G._timeScale,!1,!1),U.render((a.frame-U._startTime)*U._timeScale,!1,!1),N.length&&q(),a.frame>=H){for(i in H=a.frame+(parseInt(D.autoSleep,10)||120),z){for(t=(e=z[i].tweens).length;--t>-1;)e[t]._gc&&e.splice(t,1);0===e.length&&delete z[i]}if((!(i=G._first)||i._paused)&&D.autoSleep&&!U._first&&1===a._listeners.tick.length){for(;i&&i._paused;)i=i._next;i||a.sleep()}}},a.addEventListener("tick",O._updateRoot);var Z=function(t,e,i){var r,n,s=t._gsTweenID;if(z[s||(t._gsTweenID=s="t"+V++)]||(z[s]={target:t,tweens:[]}),e&&((r=z[s].tweens)[n=r.length]=e,i))for(;--n>-1;)r[n]===e&&r.splice(n,1);return z[s].tweens},Q=function(t,e,i,r){var n,s,o=t.vars.onOverwrite;return o&&(n=o(t,e,i,r)),(o=D.onOverwrite)&&(s=o(t,e,i,r)),!1!==n&&!1!==s},$=function(t,e,i,r,n){var s,o,a,l;if(1===r||r>=4){for(l=n.length,s=0;l>s;s++)if((a=n[s])!==e)a._gc||a._kill(null,t,e)&&(o=!0);else if(5===r)break;return o}var h,u=e._startTime+c,f=[],p=0,d=0===e._duration;for(s=n.length;--s>-1;)(a=n[s])===e||a._gc||a._paused||(a._timeline!==e._timeline?(h=h||K(e,0,d),0===K(a,h,d)&&(f[p++]=a)):a._startTime<=u&&a._startTime+a.totalDuration()/a._timeScale>u&&((d||!a._initted)&&u-a._startTime<=2e-10||(f[p++]=a)));for(s=p;--s>-1;)if(a=f[s],2===r&&a._kill(i,t,e)&&(o=!0),2!==r||!a._firstPT&&a._initted){if(2!==r&&!Q(a,e))continue;a._enabled(!1,!1)&&(o=!0)}return o},K=function(t,e,i){for(var r=t._timeline,n=r._timeScale,s=t._startTime;r._timeline;){if(s+=r._startTime,n*=r._timeScale,r._paused)return-100;r=r._timeline}return(s/=n)>e?s-e:i&&s===e||!t._initted&&2*c>s-e?c:(s+=t.totalDuration()/t._timeScale/n)>e+c?0:s-e-c};o._init=function(){var t,e,i,r,n,s,o=this.vars,a=this._overwrittenProps,l=this._duration,h=!!o.immediateRender,u=o.ease;if(o.startAt){for(r in this._startAt&&(this._startAt.render(-1,!0),this._startAt.kill()),n={},o.startAt)n[r]=o.startAt[r];if(n.overwrite=!1,n.immediateRender=!0,n.lazy=h&&!1!==o.lazy,n.startAt=n.delay=null,this._startAt=D.to(this.target,0,n),h)if(this._time>0)this._startAt=null;else if(0!==l)return}else if(o.runBackwards&&0!==l)if(this._startAt)this._startAt.render(-1,!0),this._startAt.kill(),this._startAt=null;else{for(r in 0!==this._time&&(h=!1),i={},o)j[r]&&"autoCSS"!==r||(i[r]=o[r]);if(i.overwrite=0,i.data="isFromStart",i.lazy=h&&!1!==o.lazy,i.immediateRender=h,this._startAt=D.to(this.target,0,i),h){if(0===this._time)return}else this._startAt._init(),this._startAt._enabled(!1),this.vars.immediateRender&&(this._startAt=null)}if(this._ease=u=u?u instanceof x?u:"function"==typeof u?new x(u,o.easeParams):w[u]||D.defaultEase:D.defaultEase,o.easeParams instanceof Array&&u.config&&(this._ease=u.config.apply(u,o.easeParams)),this._easeType=this._ease._type,this._easePower=this._ease._power,this._firstPT=null,this._targets)for(s=this._targets.length,t=0;s>t;t++)this._initProps(this._targets[t],this._propLookup[t]={},this._siblings[t],a?a[t]:null,t)&&(e=!0);else e=this._initProps(this.target,this._propLookup,this._siblings,a,0);if(e&&D._onPluginEvent("_onInitAllProps",this),a&&(this._firstPT||"function"!=typeof this.target&&this._enabled(!1,!1)),o.runBackwards)for(i=this._firstPT;i;)i.s+=i.c,i.c=-i.c,i=i._next;this._onUpdate=o.onUpdate,this._initted=!0},o._initProps=function(e,i,r,n,s){var o,a,l,h,u,c;if(null==e)return!1;for(o in L[e._gsTweenID]&&q(),this.vars.css||e.style&&e!==t&&e.nodeType&&I.css&&!1!==this.vars.autoCSS&&function(t,e){var i,r={};for(i in t)j[i]||i in e&&"transform"!==i&&"x"!==i&&"y"!==i&&"width"!==i&&"height"!==i&&"className"!==i&&"border"!==i||!(!I[i]||I[i]&&I[i]._autoCSS)||(r[i]=t[i],delete t[i]);t.css=r}(this.vars,e),this.vars)if(c=this.vars[o],j[o])c&&(c instanceof Array||c.push&&d(c))&&-1!==c.join("").indexOf("{self}")&&(this.vars[o]=c=this._swapSelfInParams(c,this));else if(I[o]&&(h=new I[o])._onInitTween(e,this.vars[o],this,s)){for(this._firstPT=u={_next:this._firstPT,t:h,p:"setRatio",s:0,c:1,f:1,n:o,pg:1,pr:h._priority,m:0},a=h._overwriteProps.length;--a>-1;)i[h._overwriteProps[a]]=this._firstPT;(h._priority||h._onInitAllProps)&&(l=!0),(h._onDisable||h._onEnable)&&(this._notifyPluginsOfEnabled=!0),u._next&&(u._next._prev=u)}else i[o]=Y.call(this,e,o,"get",c,o,0,null,this.vars.stringFilter,s);return n&&this._kill(n,e)?this._initProps(e,i,r,n,s):this._overwrite>1&&this._firstPT&&r.length>1&&$(e,this,i,this._overwrite,r)?(this._kill(i,e),this._initProps(e,i,r,n,s)):(this._firstPT&&(!1!==this.vars.lazy&&this._duration||this.vars.lazy&&!this._duration)&&(L[e._gsTweenID]=!0),l)},o.render=function(t,e,i){var r,n,s,o,a=this._time,l=this._duration,h=this._rawPrevTime;if(t>=l-1e-7)this._totalTime=this._time=l,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1,this._reversed||(r=!0,n="onComplete",i=i||this._timeline.autoRemoveChildren),0===l&&(this._initted||!this.vars.lazy||i)&&(this._startTime===this._timeline._duration&&(t=0),(0>h||0>=t&&t>=-1e-7||h===c&&"isPause"!==this.data)&&h!==t&&(i=!0,h>c&&(n="onReverseComplete")),this._rawPrevTime=o=!e||t||h===t?t:c);else if(1e-7>t)this._totalTime=this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==a||0===l&&h>0)&&(n="onReverseComplete",r=this._reversed),0>t&&(this._active=!1,0===l&&(this._initted||!this.vars.lazy||i)&&(h>=0&&(h!==c||"isPause"!==this.data)&&(i=!0),this._rawPrevTime=o=!e||t||h===t?t:c)),this._initted||(i=!0);else if(this._totalTime=this._time=t,this._easeType){var u=t/l,f=this._easeType,p=this._easePower;(1===f||3===f&&u>=.5)&&(u=1-u),3===f&&(u*=2),1===p?u*=u:2===p?u*=u*u:3===p?u*=u*u*u:4===p&&(u*=u*u*u*u),this.ratio=1===f?1-u:2===f?u:.5>t/l?u/2:1-u/2}else this.ratio=this._ease.getRatio(t/l);if(this._time!==a||i){if(!this._initted){if(this._init(),!this._initted||this._gc)return;if(!i&&this._firstPT&&(!1!==this.vars.lazy&&this._duration||this.vars.lazy&&!this._duration))return this._time=this._totalTime=a,this._rawPrevTime=h,N.push(this),void(this._lazy=[t,e]);this._time&&!r?this.ratio=this._ease.getRatio(this._time/l):r&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(0===this._time?0:1))}for(!1!==this._lazy&&(this._lazy=!1),this._active||!this._paused&&this._time!==a&&t>=0&&(this._active=!0),0===a&&(this._startAt&&(t>=0?this._startAt.render(t,e,i):n||(n="_dummyGS")),this.vars.onStart&&(0!==this._time||0===l)&&(e||this._callback("onStart"))),s=this._firstPT;s;)s.f?s.t[s.p](s.c*this.ratio+s.s):s.t[s.p]=s.c*this.ratio+s.s,s=s._next;this._onUpdate&&(0>t&&this._startAt&&-1e-4!==t&&this._startAt.render(t,e,i),e||(this._time!==a||r||i)&&this._callback("onUpdate")),n&&(!this._gc||i)&&(0>t&&this._startAt&&!this._onUpdate&&-1e-4!==t&&this._startAt.render(t,e,i),r&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[n]&&this._callback(n),0===l&&this._rawPrevTime===c&&o!==c&&(this._rawPrevTime=0))}},o._kill=function(t,e,i){if("all"===t&&(t=null),null==t&&(null==e||e===this.target))return this._lazy=!1,this._enabled(!1,!1);e="string"!=typeof e?e||this._targets||this.target:D.selector(e)||e;var r,n,s,o,a,l,h,u,c,f=i&&this._time&&i._startTime===this._startTime&&this._timeline===i._timeline;if((d(e)||M(e))&&"number"!=typeof e[0])for(r=e.length;--r>-1;)this._kill(t,e[r],i)&&(l=!0);else{if(this._targets){for(r=this._targets.length;--r>-1;)if(e===this._targets[r]){a=this._propLookup[r]||{},this._overwrittenProps=this._overwrittenProps||[],n=this._overwrittenProps[r]=t?this._overwrittenProps[r]||{}:"all";break}}else{if(e!==this.target)return!1;a=this._propLookup,n=this._overwrittenProps=t?this._overwrittenProps||{}:"all"}if(a){if(h=t||a,u=t!==n&&"all"!==n&&t!==a&&("object"!=typeof t||!t._tempKill),i&&(D.onOverwrite||this.vars.onOverwrite)){for(s in h)a[s]&&(c||(c=[]),c.push(s));if((c||!t)&&!Q(this,i,e,c))return!1}for(s in h)(o=a[s])&&(f&&(o.f?o.t[o.p](o.s):o.t[o.p]=o.s,l=!0),o.pg&&o.t._kill(h)&&(l=!0),o.pg&&0!==o.t._overwriteProps.length||(o._prev?o._prev._next=o._next:o===this._firstPT&&(this._firstPT=o._next),o._next&&(o._next._prev=o._prev),o._next=o._prev=null),delete a[s]),u&&(n[s]=1);!this._firstPT&&this._initted&&this._enabled(!1,!1)}}return l},o.invalidate=function(){return this._notifyPluginsOfEnabled&&D._onPluginEvent("_onDisable",this),this._firstPT=this._overwrittenProps=this._startAt=this._onUpdate=null,this._notifyPluginsOfEnabled=this._active=this._lazy=!1,this._propLookup=this._targets?{}:[],O.prototype.invalidate.call(this),this.vars.immediateRender&&(this._time=-c,this.render(Math.min(0,-this._delay))),this},o._enabled=function(t,e){if(l||a.wake(),t&&this._gc){var i,r=this._targets;if(r)for(i=r.length;--i>-1;)this._siblings[i]=Z(r[i],this,!0);else this._siblings=Z(this.target,this,!0)}return O.prototype._enabled.call(this,t,e),!(!this._notifyPluginsOfEnabled||!this._firstPT)&&D._onPluginEvent(t?"_onEnable":"_onDisable",this)},D.to=function(t,e,i){return new D(t,e,i)},D.from=function(t,e,i){return i.runBackwards=!0,i.immediateRender=0!=i.immediateRender,new D(t,e,i)},D.fromTo=function(t,e,i,r){return r.startAt=i,r.immediateRender=0!=r.immediateRender&&0!=i.immediateRender,new D(t,e,r)},D.delayedCall=function(t,e,i,r,n){return new D(e,0,{delay:t,onComplete:e,onCompleteParams:i,callbackScope:r,onReverseComplete:e,onReverseCompleteParams:i,immediateRender:!1,lazy:!1,useFrames:n,overwrite:0})},D.set=function(t,e){return new D(t,0,e)},D.getTweensOf=function(t,e){if(null==t)return[];var i,r,n,s;if(t="string"!=typeof t?t:D.selector(t)||t,(d(t)||M(t))&&"number"!=typeof t[0]){for(i=t.length,r=[];--i>-1;)r=r.concat(D.getTweensOf(t[i],e));for(i=r.length;--i>-1;)for(s=r[i],n=i;--n>-1;)s===r[n]&&r.splice(i,1)}else for(i=(r=Z(t).concat()).length;--i>-1;)(r[i]._gc||e&&!r[i].isActive())&&r.splice(i,1);return r},D.killTweensOf=D.killDelayedCallsTo=function(t,e,i){"object"==typeof e&&(i=e,e=!1);for(var r=D.getTweensOf(t,e),n=r.length;--n>-1;)r[n]._kill(i,t)};var J=v("plugins.TweenPlugin",function(t,e){this._overwriteProps=(t||"").split(","),this._propName=this._overwriteProps[0],this._priority=e||0,this._super=J.prototype},!0);if(o=J.prototype,J.version="1.19.0",J.API=2,o._firstPT=null,o._addTween=Y,o.setRatio=E,o._kill=function(t){var e,i=this._overwriteProps,r=this._firstPT;if(null!=t[this._propName])this._overwriteProps=[];else for(e=i.length;--e>-1;)null!=t[i[e]]&&i.splice(e,1);for(;r;)null!=t[r.n]&&(r._next&&(r._next._prev=r._prev),r._prev?(r._prev._next=r._next,r._prev=null):this._firstPT===r&&(this._firstPT=r._next)),r=r._next;return!1},o._mod=o._roundProps=function(t){for(var e,i=this._firstPT;i;)(e=t[this._propName]||null!=i.n&&t[i.n.split(this._propName+"_").join("")])&&"function"==typeof e&&(2===i.f?i.t._applyPT.m=e:i.m=e),i=i._next},D._onPluginEvent=function(t,e){var i,r,n,s,o,a=e._firstPT;if("_onInitAllProps"===t){for(;a;){for(o=a._next,r=n;r&&r.pr>a.pr;)r=r._next;(a._prev=r?r._prev:s)?a._prev._next=a:n=a,(a._next=r)?r._prev=a:s=a,a=o}a=e._firstPT=n}for(;a;)a.pg&&"function"==typeof a.t[t]&&a.t[t]()&&(i=!0),a=a._next;return i},J.activate=function(t){for(var e=t.length;--e>-1;)t[e].API===J.API&&(I[(new t[e])._propName]=t[e]);return!0},m.plugin=function(t){if(!(t&&t.propName&&t.init&&t.API))throw"illegal plugin definition.";var e,i=t.propName,r=t.priority||0,n=t.overwriteProps,s={init:"_onInitTween",set:"setRatio",kill:"_kill",round:"_mod",mod:"_mod",initAll:"_onInitAllProps"},o=v("plugins."+i.charAt(0).toUpperCase()+i.substr(1)+"Plugin",function(){J.call(this,i,r),this._overwriteProps=n||[]},!0===t.global),a=o.prototype=new J(i);for(e in a.constructor=o,o.API=t.API,s)"function"==typeof t[e]&&(a[s[e]]=t[e]);return o.version=t.version,J.activate([o]),o},n=t._gsQueue){for(s=0;s<n.length;s++)n[s]();for(o in _)_[o].func||t.console.log("GSAP encountered missing dependency: "+o)}l=!1}}("undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window,"TweenMax"),((_gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window)._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine("utils.Draggable",["events.EventDispatcher","TweenLite","plugins.CSSPlugin"],function(t,e,i){var r,n,s,o,a,l,h,u,c={css:{}},f={css:{}},p={css:{}},d={css:{}},_=_gsScope._gsDefine.globals,g={},m=document,v=m.documentElement||{},y=function(t){return m.createElementNS?m.createElementNS("http://www.w3.org/1999/xhtml",t):m.createElement(t)},x=y("div"),w=[],T=function(){return!1},b=180/Math.PI,P=Date.now||function(){return(new Date).getTime()},S=!(m.addEventListener||!m.all),k=m.createElement("div"),C=[],O={},R=0,A=/^(?:a|input|textarea|button|select)$/i,D=0,M=-1!==navigator.userAgent.toLowerCase().indexOf("android"),N=0,L={},X={},E=function(){for(var t=C.length;--t>-1;)C[t]()},F=function(t){C.push(t),1===C.length&&e.ticker.addEventListener("tick",E,this,!1,1)},Y=function(t){for(var i=C.length;--i>-1;)C[i]===t&&C.splice(i,1);e.to(B,0,{overwrite:"all",delay:15,onComplete:B})},B=function(){C.length||e.ticker.removeEventListener("tick",E)},I=function(){return null!=window.pageYOffset?window.pageYOffset:null!=m.scrollTop?m.scrollTop:v.scrollTop||m.body.scrollTop||0},z=function(){return null!=window.pageXOffset?window.pageXOffset:null!=m.scrollLeft?m.scrollLeft:v.scrollLeft||m.body.scrollLeft||0},V=function(t,e){Ct(t,"scroll",e),W(t.parentNode)||V(t.parentNode,e)},j=function(t,e){Ot(t,"scroll",e),W(t.parentNode)||j(t.parentNode,e)},W=function(t){return!(t&&t!==v&&t!==m&&t!==m.body&&t!==window&&t.nodeType&&t.parentNode)},U=function(t,e){var i="x"===e?"Width":"Height",r="scroll"+i,n="client"+i,s=m.body;return Math.max(0,W(t)?Math.max(v[r],s[r])-(window["inner"+i]||v[n]||s[n]):t[r]-t[n])},G=function(t){var e=W(t),i=U(t,"x"),r=U(t,"y");e?t=X:G(t.parentNode),t._gsMaxScrollX=i,t._gsMaxScrollY=r,t._gsScrollX=t.scrollLeft||0,t._gsScrollY=t.scrollTop||0},H=function(t,e){return t=t||window.event,g.pageX=t.clientX+m.body.scrollLeft+v.scrollLeft,g.pageY=t.clientY+m.body.scrollTop+v.scrollTop,e&&(t.returnValue=!1),g},q=function(t){return t?("string"==typeof t&&(t=e.selector(t)),t.length&&t!==window&&t[0]&&t[0].style&&!t.nodeType&&(t=t[0]),t===window||t.nodeType&&t.style?t:null):t},Z=function(t,e){var i,r,n,s=t.style;if(void 0===s[e]){for(n=["O","Moz","ms","Ms","Webkit"],r=5,i=e.charAt(0).toUpperCase()+e.substr(1);--r>-1&&void 0===s[n[r]+i];);if(0>r)return"";e=(3===r?"ms":n[r])+i}return e},Q=function(t,e,i){var r=t.style;r&&(void 0===r[e]&&(e=Z(t,e)),null==i?r.removeProperty?r.removeProperty(e.replace(/([A-Z])/g,"-$1").toLowerCase()):r.removeAttribute(e):void 0!==r[e]&&(r[e]=i))},$=m.defaultView?m.defaultView.getComputedStyle:T,K=/(?:Left|Right|Width)/i,J=/(?:\d|\-|\+|=|#|\.)*/g,tt=function(t,e,i,r,n){if("px"===r||!r)return i;if("auto"===r||!i)return 0;var s,o=K.test(e),a=t,l=x.style,h=0>i;return h&&(i=-i),"%"===r&&-1!==e.indexOf("border")?s=i/100*(o?t.clientWidth:t.clientHeight):(l.cssText="border:0 solid red;position:"+et(t,"position",!0)+";line-height:0;","%"!==r&&a.appendChild?l[o?"borderLeftWidth":"borderTopWidth"]=i+r:(a=t.parentNode||m.body,l[o?"width":"height"]=i+r),a.appendChild(x),s=parseFloat(x[o?"offsetWidth":"offsetHeight"]),a.removeChild(x),0!==s||n||(s=tt(t,e,i,r,!0))),h?-s:s},et=function(t,e,i){var r,n=(t._gsTransform||{})[e];return n||0===n?n:(t.style[e]?n=t.style[e]:(r=$(t))?n=(n=r.getPropertyValue(e.replace(/([A-Z])/g,"-$1").toLowerCase()))||r.length?n:r[e]:t.currentStyle&&(n=t.currentStyle[e]),"auto"!==n||"top"!==e&&"left"!==e||(n=function(t,e){if("absolute"!==et(t,"position",!0))return 0;var i="left"===e?"Left":"Top",r=et(t,"margin"+i,!0);return t["offset"+i]-(tt(t,e,parseFloat(r),(r+"").replace(J,""))||0)}(t,e)),i?n:parseFloat(n)||0)},it=function(t,e,i){var r=t.vars,n=r[i],s=t._listeners[e];"function"==typeof n&&n.apply(r[i+"Scope"]||r.callbackScope||t,r[i+"Params"]||[t.pointerEvent]),s&&t.dispatchEvent(e)},rt=function(t,e){var i,r,n,s=q(t);return s?bt(s,e):void 0!==t.left?(n=mt(e),{left:t.left-n.x,top:t.top-n.y,width:t.width,height:t.height}):{left:r=t.min||t.minX||t.minRotation||0,top:i=t.min||t.minY||0,width:(t.max||t.maxX||t.maxRotation||0)-r,height:(t.max||t.maxY||0)-i}},nt=function(){if(!m.createElementNS)return s=0,void(o=!1);var t,e,i,r,n=y("div"),u=m.createElementNS("http://www.w3.org/2000/svg","svg"),c=y("div"),f=n.style,p=m.body||v;m.body&&at&&(f.position="absolute",p.appendChild(c),c.appendChild(n),r=n.offsetParent,c.style[at]="rotate(1deg)",h=n.offsetParent===r,c.style.position="absolute",f.height="10px",r=n.offsetTop,c.style.border="5px solid red",l=r!==n.offsetTop,p.removeChild(c)),f=u.style,u.setAttributeNS(null,"width","400px"),u.setAttributeNS(null,"height","400px"),u.setAttributeNS(null,"viewBox","0 0 400 400"),f.display="block",f.boxSizing="border-box",f.border="0px solid red",f.transform="none",n.style.cssText="width:100px;height:100px;overflow:scroll;-ms-overflow-style:none;",p.appendChild(n),n.appendChild(u),e=(i=u.createSVGPoint().matrixTransform(u.getScreenCTM())).y,n.scrollTop=100,i.x=i.y=0,i=i.matrixTransform(u.getScreenCTM()),a=e-i.y<100.1?0:e-i.y-150,n.removeChild(u),p.removeChild(n),p.appendChild(u),e=(t=u.getScreenCTM()).e,f.border="50px solid red",t=u.getScreenCTM(),0===e&&0===t.e&&0===t.f&&1===t.a?(s=1,o=!0):(s=e!==t.e?1:0,o=1!==t.a),p.removeChild(u)},st=""!==Z(x,"perspective"),ot=Z(x,"transformOrigin").replace(/^ms/g,"Ms").replace(/([A-Z])/g,"-$1").toLowerCase(),at=Z(x,"transform"),lt=at.replace(/^ms/g,"Ms").replace(/([A-Z])/g,"-$1").toLowerCase(),ht={},ut={},ct=window.SVGElement,ft=function(t){return!!(ct&&"function"==typeof t.getBBox&&t.getCTM&&(!t.parentNode||t.parentNode.getBBox&&t.parentNode.getCTM))},pt=(/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(navigator.userAgent)||/Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(navigator.userAgent))&&parseFloat(RegExp.$1)<11,dt=[],_t=[],gt=function(t){if(!t.getBoundingClientRect||!t.parentNode||!at)return{offsetTop:0,offsetLeft:0,scaleX:1,scaleY:1,offsetParent:v};if(!1!==Et.cacheSVGData&&t._gsCache&&t._gsCache.lastUpdate===e.ticker.frame)return t._gsCache;var i,r,n,l,h,u,c,f,p,d,_,g,y=t,x=vt(t);if(x.lastUpdate=e.ticker.frame,t.getBBox&&!x.isSVGRoot){for(y=t.parentNode,i=t.getBBox();y&&"svg"!==(y.nodeName+"").toLowerCase();)y=y.parentNode;return l=gt(y),x.offsetTop=i.y*l.scaleY,x.offsetLeft=i.x*l.scaleX,x.scaleX=l.scaleX,x.scaleY=l.scaleY,x.offsetParent=y||v,x}for((n=x.offsetParent)===m.body&&(n=v),_t.length=dt.length=0;y&&("matrix(1, 0, 0, 1, 0, 0)"!==(h=et(y,at,!0))&&"none"!==h&&"translate3d(0px, 0px, 0px)"!==h&&(_t.push(y),dt.push(y.style[at]),y.style[at]="none"),y!==n);)y=y.parentNode;for(r=n.getBoundingClientRect(),h=t.getScreenCTM(),c=(f=t.createSVGPoint()).matrixTransform(h),f.x=f.y=10,f=f.matrixTransform(h),x.scaleX=(f.x-c.x)/10,x.scaleY=(f.y-c.y)/10,void 0===s&&nt(),x.borderBox&&!o&&t.getAttribute("width")&&(l=$(t)||{},p=parseFloat(l.borderLeftWidth)+parseFloat(l.borderRightWidth)||0,d=parseFloat(l.borderTopWidth)+parseFloat(l.borderBottomWidth)||0,_=parseFloat(l.width)||0,g=parseFloat(l.height)||0,x.scaleX*=(_-p)/_,x.scaleY*=(g-d)/g),a?(i=t.getBoundingClientRect(),x.offsetLeft=i.left-r.left,x.offsetTop=i.top-r.top):(x.offsetLeft=c.x-r.left,x.offsetTop=c.y-r.top),x.offsetParent=n,u=_t.length;--u>-1;)_t[u].style[at]=dt[u];return x},mt=function(t,i){if(i=i||{},!t||t===v||!t.parentNode||t===window)return{x:0,y:0};var r=$(t),n=ot&&r?r.getPropertyValue(ot):"50% 50%",s=n.split(" "),o=-1!==n.indexOf("left")?"0%":-1!==n.indexOf("right")?"100%":s[0],a=-1!==n.indexOf("top")?"0%":-1!==n.indexOf("bottom")?"100%":s[1];return("center"===a||null==a)&&(a="50%"),("center"===o||isNaN(parseFloat(o)))&&(o="50%"),t.getBBox&&ft(t)?(t._gsTransform||(e.set(t,{x:"+=0",overwrite:!1}),void 0===t._gsTransform.xOrigin&&console.log("Draggable requires at least GSAP 1.17.0")),n=t.getBBox(),i.x=t._gsTransform.xOrigin-n.x,i.y=t._gsTransform.yOrigin-n.y):(t.getBBox&&-1!==(o+a).indexOf("%")&&(t={offsetWidth:(t=t.getBBox()).width,offsetHeight:t.height}),i.x=-1!==o.indexOf("%")?t.offsetWidth*parseFloat(o)/100:parseFloat(o),i.y=-1!==a.indexOf("%")?t.offsetHeight*parseFloat(a)/100:parseFloat(a)),i},vt=function(t){if(!1!==Et.cacheSVGData&&t._gsCache&&t._gsCache.lastUpdate===e.ticker.frame)return t._gsCache;var i,r=t._gsCache=t._gsCache||{},n=$(t),s=t.getBBox&&ft(t),o="svg"===(t.nodeName+"").toLowerCase();if(r.isSVG=s,r.isSVGRoot=o,r.borderBox="border-box"===n.boxSizing,r.computedStyle=n,o)(i=t.parentNode||v).insertBefore(x,t),r.offsetParent=x.offsetParent||v,i.removeChild(x);else if(s){for(i=t.parentNode;i&&"svg"!==(i.nodeName+"").toLowerCase();)i=i.parentNode;r.offsetParent=i}else r.offsetParent=t.offsetParent;return r},yt=function(t,e,i,r){if(t===window||!t||!t.style||!t.parentNode)return[1,0,0,1,0,0];var n,o,a,u,c,f,p,d,_,g,y,x,w,T,b=t._gsCache||vt(t),P=t.parentNode,S=P._gsCache||vt(P),k=b.computedStyle,C=b.isSVG?S.offsetParent:P.offsetParent;return n=b.isSVG&&-1!==(t.style[at]+"").indexOf("matrix")?t.style[at]:k?k.getPropertyValue(lt):t.currentStyle?t.currentStyle[at]:"1,0,0,1,0,0",t.getBBox&&-1!==(t.getAttribute("transform")+"").indexOf("matrix")&&(n=t.getAttribute("transform")),(n=(n+"").match(/(?:\-|\.|\b)(\d|\.|e\-)+/g)||[1,0,0,1,0,0]).length>6&&(n=[n[0],n[1],n[4],n[5],n[12],n[13]]),r?n[4]=n[5]=0:b.isSVG&&(c=t._gsTransform)&&(c.xOrigin||c.yOrigin)&&(n[0]=parseFloat(n[0]),n[1]=parseFloat(n[1]),n[2]=parseFloat(n[2]),n[3]=parseFloat(n[3]),n[4]=parseFloat(n[4])-(c.xOrigin-(c.xOrigin*n[0]+c.yOrigin*n[2])),n[5]=parseFloat(n[5])-(c.yOrigin-(c.xOrigin*n[1]+c.yOrigin*n[3]))),e&&(void 0===s&&nt(),a=b.isSVG||b.isSVGRoot?gt(t):t,b.isSVG?(u=t.getBBox(),g=S.isSVGRoot?{x:0,y:0}:P.getBBox(),a={offsetLeft:u.x-g.x,offsetTop:u.y-g.y,offsetParent:b.offsetParent}):b.isSVGRoot?(y=parseInt(k.borderTopWidth,10)||0,x=parseInt(k.borderLeftWidth,10)||0,w=(n[0]-s)*x+n[2]*y,T=n[1]*x+(n[3]-s)*y,f=e.x,p=e.y,d=f-(f*n[0]+p*n[2]),_=p-(f*n[1]+p*n[3]),n[4]=parseFloat(n[4])+d,n[5]=parseFloat(n[5])+_,e.x-=d,e.y-=_,f=a.scaleX,p=a.scaleY,e.x*=f,e.y*=p,n[0]*=f,n[1]*=p,n[2]*=f,n[3]*=p,pt||(e.x+=w,e.y+=T)):!l&&t.offsetParent&&(e.x+=parseInt(et(t.offsetParent,"borderLeftWidth"),10)||0,e.y+=parseInt(et(t.offsetParent,"borderTopWidth"),10)||0),o=P===v||P===m.body,n[4]=Number(n[4])+e.x+(a.offsetLeft||0)-i.x-(o?0:P.scrollLeft||0),n[5]=Number(n[5])+e.y+(a.offsetTop||0)-i.y-(o?0:P.scrollTop||0),P&&"fixed"===et(t,"position",k)&&(n[4]+=z(),n[5]+=I()),!P||P===v||C!==a.offsetParent||S.isSVG||h&&"100100"!==yt(P).join("")||(a=S.isSVGRoot?gt(P):P,n[4]-=a.offsetLeft||0,n[5]-=a.offsetTop||0,l||!S.offsetParent||b.isSVG||b.isSVGRoot||(n[4]-=parseInt(et(S.offsetParent,"borderLeftWidth"),10)||0,n[5]-=parseInt(et(S.offsetParent,"borderTopWidth"),10)||0))),n},xt=function(t,e){if(!t||t===window||!t.parentNode)return[1,0,0,1,0,0];for(var i,r,n,s,o,a,l,h,u=mt(t,ht),c=mt(t.parentNode,ut),f=yt(t,u,c);(t=t.parentNode)&&t.parentNode&&t!==v;)u=c,c=mt(t.parentNode,u===ht?ut:ht),l=yt(t,u,c),i=f[0],r=f[1],n=f[2],s=f[3],o=f[4],a=f[5],f[0]=i*l[0]+r*l[2],f[1]=i*l[1]+r*l[3],f[2]=n*l[0]+s*l[2],f[3]=n*l[1]+s*l[3],f[4]=o*l[0]+a*l[2]+l[4],f[5]=o*l[1]+a*l[3]+l[5];return e&&(i=f[0],r=f[1],n=f[2],s=f[3],o=f[4],a=f[5],h=i*s-r*n,f[0]=s/h,f[1]=-r/h,f[2]=-n/h,f[3]=i/h,f[4]=(n*a-s*o)/h,f[5]=-(i*a-r*o)/h),f},wt=function(t,e,i,r,n){t=q(t);var s=xt(t,!1),o=e.x,a=e.y;return i&&(mt(t,e),o-=e.x,a-=e.y),(r=!0===r?e:r||{}).x=o*s[0]+a*s[2]+s[4],r.y=o*s[1]+a*s[3]+s[5],r},Tt=function(t,e,i){var r=t.x*e[0]+t.y*e[2]+e[4],n=t.x*e[1]+t.y*e[3]+e[5];return t.x=r*i[0]+n*i[2]+i[4],t.y=r*i[1]+n*i[3]+i[5],t},bt=function(t,e,i){if(!(t=q(t)))return null;e=q(e);var r,n,s,o,a,l,h,u,c,f,p,d,_,g,y,x,w,T,b,P,k,C,O=t.getBBox&&ft(t);if(t===window)o=I(),s=(n=z())+(v.clientWidth||t.innerWidth||m.body.clientWidth||0),a=o+((t.innerHeight||0)-20<v.clientHeight?v.clientHeight:t.innerHeight||m.body.clientHeight||0);else{if(void 0===e||e===window)return t.getBoundingClientRect();n=-(r=mt(t)).x,o=-r.y,O?(_=(d=t.getBBox()).width,g=d.height):"svg"!==(t.nodeName+"").toLowerCase()&&t.offsetWidth?(_=t.offsetWidth,g=t.offsetHeight):(k=$(t),_=parseFloat(k.width),g=parseFloat(k.height)),s=n+_,a=o+g,"svg"!==t.nodeName.toLowerCase()||S||(C=(y=gt(t)).computedStyle||{},T=(t.getAttribute("viewBox")||"0 0").split(" "),b=parseFloat(T[0]),P=parseFloat(T[1]),x=parseFloat(C.borderLeftWidth)||0,w=parseFloat(C.borderTopWidth)||0,s-=_-(_-x)/y.scaleX-b,a-=g-(g-w)/y.scaleY-P,n-=x/y.scaleX-b,o-=w/y.scaleY-P,k&&(s+=(parseFloat(C.borderRightWidth)+x)/y.scaleX,a+=(w+parseFloat(C.borderBottomWidth))/y.scaleY))}return t===e?{left:n,top:o,width:s-n,height:a-o}:(l=xt(t),h=xt(e,!0),u=Tt({x:n,y:o},l,h),c=Tt({x:s,y:o},l,h),f=Tt({x:s,y:a},l,h),p=Tt({x:n,y:a},l,h),n=Math.min(u.x,c.x,f.x,p.x),o=Math.min(u.y,c.y,f.y,p.y),L.x=L.y=0,i&&mt(e,L),{left:n+L.x,top:o+L.y,width:Math.max(u.x,c.x,f.x,p.x)-n,height:Math.max(u.y,c.y,f.y,p.y)-o})},Pt=function(t){return!!(t&&t.length&&t[0]&&(t[0].nodeType&&t[0].style&&!t.nodeType||t[0].length&&t[0][0]))},St="ontouchstart"in v&&"orientation"in window,kt=function(t){for(var e=t.split(","),i=(void 0!==x.onpointerdown?"pointerdown,pointermove,pointerup,pointercancel":void 0!==x.onmspointerdown?"MSPointerDown,MSPointerMove,MSPointerUp,MSPointerCancel":t).split(","),r={},n=8;--n>-1;)r[e[n]]=i[n],r[i[n]]=e[n];return r}("touchstart,touchmove,touchend,touchcancel"),Ct=function(t,e,i,r){t.addEventListener?t.addEventListener(kt[e]||e,i,r):t.attachEvent&&t.attachEvent("on"+e,i)},Ot=function(t,e,i){t.removeEventListener?t.removeEventListener(kt[e]||e,i):t.detachEvent&&t.detachEvent("on"+e,i)},Rt=function(t){r=t.touches&&D<t.touches.length,Ot(t.target,"touchend",Rt)},At=function(t){r=t.touches&&D<t.touches.length,Ct(t.target,"touchend",Rt)},Dt=function(t,e,i,r,n,s){var o,a,l,h={};if(e)if(1!==n&&e instanceof Array){for(h.end=o=[],l=e.length,a=0;l>a;a++)o[a]=e[a]*n;i+=1.1,r-=1.1}else h.end="function"==typeof e?function(i){return e.call(t,i)*n}:e;return(i||0===i)&&(h.max=i),(r||0===r)&&(h.min=r),s&&(h.velocity=0),h},Mt=function(t){var e;return!(!t||!t.getAttribute||"BODY"===t.nodeName)&&(!("true"!==(e=t.getAttribute("data-clickable"))&&("false"===e||!t.onclick&&!A.test(t.nodeName+"")&&"true"!==t.getAttribute("contentEditable")))||Mt(t.parentNode))},Nt=function(t,e){for(var i,r=t.length;--r>-1;)(i=t[r]).ondragstart=i.onselectstart=e?null:T,Q(i,"userSelect",e?"text":"none")},Lt=function(){var t,e=m.createElement("div"),i=m.createElement("div"),r=i.style,n=m.body||x;return r.display="inline-block",r.position="relative",e.style.cssText=i.innerHTML="width:90px; height:40px; padding:10px; overflow:auto; visibility: hidden",e.appendChild(i),n.appendChild(e),u=i.offsetHeight+18>e.scrollHeight,r.width="100%",at||(r.paddingRight="500px",t=e.scrollLeft=e.scrollWidth-e.clientWidth,r.left="-90px",t=t!==e.scrollLeft),n.removeChild(e),t}(),Xt=function(t,i){t=q(t),i=i||{};var r,n,s,o,a,l,h=m.createElement("div"),c=h.style,f=t.firstChild,p=0,d=0,_=t.scrollTop,g=t.scrollLeft,v=t.scrollWidth,y=t.scrollHeight,x=0,w=0,T=0;st&&!1!==i.force3D?(a="translate3d(",l="px,0px)"):at&&(a="translate(",l="px)"),this.scrollTop=function(t,e){return arguments.length?void this.top(-t,e):-this.top()},this.scrollLeft=function(t,e){return arguments.length?void this.left(-t,e):-this.left()},this.left=function(r,n){if(!arguments.length)return-(t.scrollLeft+d);var s=t.scrollLeft-g,o=d;return(s>2||-2>s)&&!n?(g=t.scrollLeft,e.killTweensOf(this,!0,{left:1,scrollLeft:1}),this.left(-g),void(i.onKill&&i.onKill())):(0>(r=-r)?(d=r-.5|0,r=0):r>w?(d=r-w|0,r=w):d=0,(d||o)&&(a?this._suspendTransforms||(c[at]=a+-d+"px,"+-p+l):c.left=-d+"px",Lt&&d+x>=0&&(c.paddingRight=d+x+"px")),t.scrollLeft=0|r,void(g=t.scrollLeft))},this.top=function(r,n){if(!arguments.length)return-(t.scrollTop+p);var s=t.scrollTop-_,o=p;return(s>2||-2>s)&&!n?(_=t.scrollTop,e.killTweensOf(this,!0,{top:1,scrollTop:1}),this.top(-_),void(i.onKill&&i.onKill())):(0>(r=-r)?(p=r-.5|0,r=0):r>T?(p=r-T|0,r=T):p=0,(p||o)&&(a?this._suspendTransforms||(c[at]=a+-d+"px,"+-p+l):c.top=-p+"px"),t.scrollTop=0|r,void(_=t.scrollTop))},this.maxScrollTop=function(){return T},this.maxScrollLeft=function(){return w},this.disable=function(){for(f=h.firstChild;f;)o=f.nextSibling,t.appendChild(f),f=o;t===h.parentNode&&t.removeChild(h)},this.enable=function(){if((f=t.firstChild)!==h){for(;f;)o=f.nextSibling,h.appendChild(f),f=o;t.appendChild(h),this.calibrate()}},this.calibrate=function(e){var i,o,a=t.clientWidth===r;_=t.scrollTop,g=t.scrollLeft,(!a||t.clientHeight!==n||h.offsetHeight!==s||v!==t.scrollWidth||y!==t.scrollHeight||e)&&((p||d)&&(i=this.left(),o=this.top(),this.left(-t.scrollLeft),this.top(-t.scrollTop)),(!a||e)&&(c.display="block",c.width="auto",c.paddingRight="0px",(x=Math.max(0,t.scrollWidth-t.clientWidth))&&(x+=et(t,"paddingLeft")+(u?et(t,"paddingRight"):0))),c.display="inline-block",c.position="relative",c.overflow="visible",c.verticalAlign="top",c.width="100%",c.paddingRight=x+"px",u&&(c.paddingBottom=et(t,"paddingBottom",!0)),S&&(c.zoom="1"),r=t.clientWidth,n=t.clientHeight,v=t.scrollWidth,y=t.scrollHeight,w=t.scrollWidth-r,T=t.scrollHeight-n,s=h.offsetHeight,c.display="block",(i||o)&&(this.left(i),this.top(o)))},this.content=h,this.element=t,this._suspendTransforms=!1,this.enable()},Et=function(s,o){t.call(this,s),s=q(s),n||(n=_.com.greensock.plugins.ThrowPropsPlugin),this.vars=o=function(t){var e,i={};for(e in t)i[e]=t[e];return i}(o||{}),this.target=s,this.x=this.y=this.rotation=0,this.dragResistance=parseFloat(o.dragResistance)||0,this.edgeResistance=isNaN(o.edgeResistance)?1:parseFloat(o.edgeResistance)||0,this.lockAxis=o.lockAxis,this.autoScroll=o.autoScroll||0,this.lockedAxis=null,this.allowEventDefault=!!o.allowEventDefault;var a,l,h,u,g,y,x,T,C,A,L,E,B,I,z,U,Z,$,K,J,tt,nt,st,ot,at,lt,ht,ut,ct,ft,pt,dt=(o.type||(S?"top,left":"x,y")).toLowerCase(),_t=-1!==dt.indexOf("x")||-1!==dt.indexOf("y"),gt=-1!==dt.indexOf("rotation"),mt=gt?"rotation":_t?"x":"left",vt=_t?"y":"top",yt=-1!==dt.indexOf("x")||-1!==dt.indexOf("left")||"scroll"===dt,Tt=-1!==dt.indexOf("y")||-1!==dt.indexOf("top")||"scroll"===dt,bt=o.minimumMovement||2,Pt=this,Rt=function(t){if("string"==typeof t&&(t=e.selector(t)),!t||t.nodeType)return[t];var i,r=[],n=t.length;for(i=0;i!==n;r.push(t[i++]));return r}(o.trigger||o.handle||s),Lt={},Ft=0,Yt=!1,It=o.clickableTest||Mt,zt=0,Vt=function(t){if(Pt.autoScroll&&Pt.isDragging&&(Yt||$)){var e,i,r,n,o,a,h,u,c=s,f=15*Pt.autoScroll;for(Yt=!1,X.scrollTop=null!=window.pageYOffset?window.pageYOffset:null!=v.scrollTop?v.scrollTop:m.body.scrollTop,X.scrollLeft=null!=window.pageXOffset?window.pageXOffset:null!=v.scrollLeft?v.scrollLeft:m.body.scrollLeft,n=Pt.pointerX-X.scrollLeft,o=Pt.pointerY-X.scrollTop;c&&!i;)e=(i=W(c.parentNode))?X:c.parentNode,r=i?{bottom:Math.max(v.clientHeight,window.innerHeight||0),right:Math.max(v.clientWidth,window.innerWidth||0),left:0,top:0}:e.getBoundingClientRect(),a=h=0,Tt&&(0>(u=e._gsMaxScrollY-e.scrollTop)?h=u:o>r.bottom-40&&u?(Yt=!0,h=Math.min(u,f*(1-Math.max(0,r.bottom-o)/40)|0)):o<r.top+40&&e.scrollTop&&(Yt=!0,h=-Math.min(e.scrollTop,f*(1-Math.max(0,o-r.top)/40)|0)),h&&(e.scrollTop+=h)),yt&&(0>(u=e._gsMaxScrollX-e.scrollLeft)?a=u:n>r.right-40&&u?(Yt=!0,a=Math.min(u,f*(1-Math.max(0,r.right-n)/40)|0)):n<r.left+40&&e.scrollLeft&&(Yt=!0,a=-Math.min(e.scrollLeft,f*(1-Math.max(0,n-r.left)/40)|0)),a&&(e.scrollLeft+=a)),i&&(a||h)&&(window.scrollTo(e.scrollLeft,e.scrollTop),ee(Pt.pointerX+a,Pt.pointerY+h)),c=e}if($){var p=Pt.x,d=Pt.y,_=1e-6;_>p&&p>-_&&(p=0),_>d&&d>-_&&(d=0),gt?(lt.data.rotation=Pt.rotation=p,lt.setRatio(1)):l?(Tt&&l.top(d),yt&&l.left(p)):_t?(Tt&&(lt.data.y=d),yt&&(lt.data.x=p),lt.setRatio(1)):(Tt&&(s.style.top=d+"px"),yt&&(s.style.left=p+"px")),!T||t||ct||(ct=!0,it(Pt,"drag","onDrag"),ct=!1)}$=!1},jt=function(t,i){var r;Pt.x,Pt.y,s._gsTransform||!_t&&!gt||e.set(s,{x:"+=0",overwrite:!1}),_t?(Pt.y=s._gsTransform.y,Pt.x=s._gsTransform.x):gt?Pt.x=Pt.rotation=s._gsTransform.rotation:l?(Pt.y=l.top(),Pt.x=l.left()):(Pt.y=parseInt(s.style.top,10)||0,Pt.x=parseInt(s.style.left,10)||0),!J&&!tt||i||(J&&((r=J(Pt.x))!==Pt.x&&(Pt.x=r,gt&&(Pt.rotation=r),$=!0)),tt&&((r=tt(Pt.y))!==Pt.y&&(Pt.y=r),$=!0)),$&&Vt(!0),t||it(Pt,"throwupdate","onThrowUpdate")},Wt=function(){var t,e,i,r;x=!1,l?(l.calibrate(),Pt.minX=A=-l.maxScrollLeft(),Pt.minY=E=-l.maxScrollTop(),Pt.maxX=C=Pt.maxY=L=0,x=!0):o.bounds&&(t=rt(o.bounds,s.parentNode),gt?(Pt.minX=A=t.left,Pt.maxX=C=t.left+t.width,Pt.minY=E=Pt.maxY=L=0):void 0!==o.bounds.maxX||void 0!==o.bounds.maxY?(t=o.bounds,Pt.minX=A=t.minX,Pt.minY=E=t.minY,Pt.maxX=C=t.maxX,Pt.maxY=L=t.maxY):(e=rt(s,s.parentNode),Pt.minX=A=et(s,mt)+t.left-e.left,Pt.minY=E=et(s,vt)+t.top-e.top,Pt.maxX=C=A+(t.width-e.width),Pt.maxY=L=E+(t.height-e.height)),A>C&&(Pt.minX=C,Pt.maxX=C=A,A=Pt.minX),E>L&&(Pt.minY=L,Pt.maxY=L=E,E=Pt.minY),gt&&(Pt.minRotation=A,Pt.maxRotation=C),x=!0),o.liveSnap&&(r=(i=!0===o.liveSnap?o.snap||{}:o.liveSnap)instanceof Array||"function"==typeof i,gt?(J=Kt(r?i:i.rotation,A,C,1),tt=null):(yt&&(J=Kt(r?i:i.x||i.left||i.scrollLeft,A,C,l?-1:1)),Tt&&(tt=Kt(r?i:i.y||i.top||i.scrollTop,E,L,l?-1:1))))},Ut=function(){Pt.isThrowing=!1,it(Pt,"throwcomplete","onThrowComplete")},Gt=function(){Pt.isThrowing=!1},Ht=function(t,e){var i,r,a,h;t&&n?(!0===t&&(r=(i=o.snap||{})instanceof Array||"function"==typeof i,t={resistance:(o.throwResistance||o.resistance||1e3)/(gt?10:1)},gt?t.rotation=Dt(Pt,r?i:i.rotation,C,A,1,e):(yt&&(t[mt]=Dt(Pt,r?i:i.x||i.left||i.scrollLeft,C,A,l?-1:1,e||"x"===Pt.lockedAxis)),Tt&&(t[vt]=Dt(Pt,r?i:i.y||i.top||i.scrollTop,L,E,l?-1:1,e||"y"===Pt.lockedAxis)))),Pt.isThrowing=!0,h=isNaN(o.overshootTolerance)?1===o.edgeResistance?0:1-Pt.edgeResistance+.2:o.overshootTolerance,Pt.tween=a=n.to(l||s,{throwProps:t,ease:o.ease||_.Power3.easeOut,onComplete:Ut,onOverwrite:Gt,onUpdate:o.fastMode?it:jt,onUpdateParams:o.fastMode?[Pt,"onthrowupdate","onThrowUpdate"]:w},isNaN(o.maxDuration)?2:o.maxDuration,isNaN(o.minDuration)?0===h?0:.5:o.minDuration,h),o.fastMode||(l&&(l._suspendTransforms=!0),a.render(a.duration(),!0,!0),jt(!0,!0),Pt.endX=Pt.x,Pt.endY=Pt.y,gt&&(Pt.endRotation=Pt.x),a.play(0),jt(!0,!0),l&&(l._suspendTransforms=!1))):x&&Pt.applyBounds()},qt=function(t){var e,i,r,n,o,a,l,c,f,p=ot||[1,0,0,1,0,0];ot=xt(s.parentNode,!0),t&&Pt.isPressed&&p.join(",")!==ot.join(",")&&(e=p[0],i=p[1],r=p[2],n=p[3],o=p[4],a=p[5],f=h*(-i/(l=e*n-i*r))+u*(e/l)+-(e*a-i*o)/l,u=(c=h*(n/l)+u*(-r/l)+(r*a-n*o)/l)*ot[1]+f*ot[3]+ot[5],h=c*ot[0]+f*ot[2]+ot[4]),ot[1]||ot[2]||1!=ot[0]||1!=ot[3]||0!=ot[4]||0!=ot[5]||(ot=null)},Zt=function(){var t=1-Pt.edgeResistance;qt(!1),ot&&(h=Pt.pointerX*ot[0]+Pt.pointerY*ot[2]+ot[4],u=Pt.pointerX*ot[1]+Pt.pointerY*ot[3]+ot[5]),$&&(ee(Pt.pointerX,Pt.pointerY),Vt(!0)),l?(Wt(),y=l.top(),g=l.left()):(Qt()?(jt(!0,!0),Wt()):Pt.applyBounds(),gt?(Z=wt(s,{x:0,y:0}),jt(!0,!0),g=Pt.x,y=Pt.y=Math.atan2(Z.y-Pt.pointerY,Pt.pointerX-Z.x)*b):(s.parentNode&&s.parentNode.scrollTop||0,s.parentNode&&s.parentNode.scrollLeft||0,y=et(s,vt),g=et(s,mt))),x&&t&&(g>C?g=C+(g-C)/t:A>g&&(g=A-(A-g)/t),gt||(y>L?y=L+(y-L)/t:E>y&&(y=E-(E-y)/t)))},Qt=function(){return Pt.tween&&Pt.tween.isActive()},$t=function(){!k.parentNode||Qt()||Pt.isDragging||k.parentNode.removeChild(k)},Kt=function(t,e,i,r){return"function"==typeof t?function(n){var s=Pt.isPressed?1-Pt.edgeResistance:1;return t.call(Pt,n>i?i+(n-i)*s:e>n?e+(n-e)*s:n)*r}:t instanceof Array?function(r){for(var n,s,o=t.length,a=0,l=999999999999999;--o>-1;)0>(s=(n=t[o])-r)&&(s=-s),l>s&&n>=e&&i>=n&&(a=o,l=s);return t[a]}:isNaN(t)?function(t){return t}:function(){return t*r}},Jt=function(t){var i;if(!(!a||Pt.isPressed||!t||("mousedown"===t.type||"pointerdown"===t.type)&&P()-zt<30&&kt[Pt.pointerEvent.type])){if(at=Qt(),Pt.pointerEvent=t,kt[t.type]?(st=-1!==t.type.indexOf("touch")?t.currentTarget||t.target:m,Ct(st,"touchend",ie),Ct(st,"touchmove",te),Ct(st,"touchcancel",ie),Ct(m,"touchstart",At)):(st=null,Ct(m,"mousemove",te)),ut=null,Ct(m,"mouseup",ie),t&&t.target&&Ct(t.target,"mouseup",ie),nt=It.call(Pt,t.target)&&!o.dragClickables)return Ct(t.target,"change",ie),it(Pt,"press","onPress"),void Nt(Rt,!0);if(ht=!(!st||yt===Tt||l||!1===Pt.vars.allowNativeTouchScrolling)&&(yt?"y":"x"),S?t=H(t,!0):ht||Pt.allowEventDefault||(t.preventDefault(),t.preventManipulation&&t.preventManipulation()),t.changedTouches?(t=z=t.changedTouches[0],U=t.identifier):t.pointerId?U=t.pointerId:z=U=null,D++,F(Vt),u=Pt.pointerY=t.pageY,h=Pt.pointerX=t.pageX,(ht||Pt.autoScroll)&&G(s.parentNode),s.parentNode&&(l||Pt.autoScroll&&!gt&&s.parentNode._gsMaxScrollX&&!k.parentNode)&&!s.getBBox&&(k.style.width=s.parentNode.scrollWidth+"px",s.parentNode.appendChild(k)),Zt(),Pt.tween&&Pt.tween.kill(),Pt.isThrowing=!1,e.killTweensOf(l||s,!0,Lt),l&&e.killTweensOf(s,!0,{scrollTo:1}),Pt.tween=Pt.lockedAxis=null,(o.zIndexBoost||!gt&&!l&&!1!==o.zIndexBoost)&&(s.style.zIndex=Et.zIndex++),Pt.isPressed=!0,T=!(!o.onDrag&&!Pt._listeners.drag),!gt)for(i=Rt.length;--i>-1;)Q(Rt[i],"cursor",o.cursor||"move");it(Pt,"press","onPress")}},te=function(t){var e,i,n,s,o=t;if(a&&!r&&Pt.isPressed&&t){if(Pt.pointerEvent=t,e=t.changedTouches){if((t=e[0])!==z&&t.identifier!==U){for(s=e.length;--s>-1&&(t=e[s]).identifier!==U;);if(0>s)return}}else if(t.pointerId&&U&&t.pointerId!==U)return;if(S)t=H(t,!0);else{if(st&&ht&&!ut&&(i=t.pageX,n=t.pageY,ot&&(s=i*ot[0]+n*ot[2]+ot[4],n=i*ot[1]+n*ot[3]+ot[5],i=s),ut=Math.abs(i-h)>Math.abs(n-u)&&yt?"x":"y",!1!==Pt.vars.lockAxisOnTouchScroll&&(Pt.lockedAxis="x"===ut?"y":"x","function"==typeof Pt.vars.onLockAxis&&Pt.vars.onLockAxis.call(Pt,o)),M&&ht===ut))return void ie(o);Pt.allowEventDefault||ht&&(!ut||ht===ut)||!1===o.cancelable||(o.preventDefault(),o.preventManipulation&&o.preventManipulation())}Pt.autoScroll&&(Yt=!0),ee(t.pageX,t.pageY)}},ee=function(t,e){var i,r,n,s,o,a,l=1-Pt.dragResistance,c=1-Pt.edgeResistance;Pt.pointerX=t,Pt.pointerY=e,gt?(s=Math.atan2(Z.y-e,t-Z.x)*b,o=Pt.y-s,Pt.y=s,o>180?y-=360:-180>o&&(y+=360),n=g+(y-s)*l):(ot&&(a=t*ot[0]+e*ot[2]+ot[4],e=t*ot[1]+e*ot[3]+ot[5],t=a),bt>(r=e-u)&&r>-bt&&(r=0),bt>(i=t-h)&&i>-bt&&(i=0),(Pt.lockAxis||Pt.lockedAxis)&&(i||r)&&((a=Pt.lockedAxis)||(Pt.lockedAxis=a=yt&&Math.abs(i)>Math.abs(r)?"y":Tt?"x":null,a&&"function"==typeof Pt.vars.onLockAxis&&Pt.vars.onLockAxis.call(Pt,Pt.pointerEvent)),"y"===a?r=0:"x"===a&&(i=0)),n=g+i*l,s=y+r*l),J||tt?(J&&(n=J(n)),tt&&(s=tt(s))):x&&(n>C?n=C+(n-C)*c:A>n&&(n=A+(n-A)*c),gt||(s>L?s=L+(s-L)*c:E>s&&(s=E+(s-E)*c))),gt||(n=Math.round(n),s=Math.round(s)),(Pt.x!==n||Pt.y!==s&&!gt)&&(gt?Pt.endRotation=Pt.x=Pt.endX=n:(Tt&&(Pt.y=Pt.endY=s),yt&&(Pt.x=Pt.endX=n)),$=!0,!Pt.isDragging&&Pt.isPressed&&(Pt.isDragging=!0,it(Pt,"dragstart","onDragStart")))},ie=function(t,i){if(a&&Pt.isPressed&&(!t||null==U||i||!(t.pointerId&&t.pointerId!==U||t.changedTouches&&!function(t,e){for(var i=t.length;--i>-1;)if(t[i].identifier===e)return!0;return!1}(t.changedTouches,U)))){Pt.isPressed=!1;var r,n,l,h,u,c=t,f=Pt.isDragging,p=e.delayedCall(.001,$t);if(st?(Ot(st,"touchend",ie),Ot(st,"touchmove",te),Ot(st,"touchcancel",ie),Ot(m,"touchstart",At)):Ot(m,"mousemove",te),Ot(m,"mouseup",ie),t&&t.target&&Ot(t.target,"mouseup",ie),$=!1,nt)return t&&Ot(t.target,"change",ie),Nt(Rt,!1),it(Pt,"release","onRelease"),it(Pt,"click","onClick"),void(nt=!1);if(Y(Vt),!gt)for(n=Rt.length;--n>-1;)Q(Rt[n],"cursor",o.cursor||"move");if(f&&(Ft=N=P(),Pt.isDragging=!1),D--,t){if(S&&(t=H(t,!1)),(r=t.changedTouches)&&((t=r[0])!==z&&t.identifier!==U)){for(n=r.length;--n>-1&&(t=r[n]).identifier!==U;);if(0>n)return}Pt.pointerEvent=c,Pt.pointerX=t.pageX,Pt.pointerY=t.pageY}return c&&!f?(at&&(o.snap||o.bounds)&&Ht(o.throwProps),it(Pt,"release","onRelease"),M&&"touchmove"===c.type||(it(Pt,"click","onClick"),h=c.target||c.srcElement||s,zt=P(),u=function(){zt!==ft&&Pt.enabled()&&!Pt.isPressed&&(h.click?h.click():m.createEvent&&((l=m.createEvent("MouseEvents")).initMouseEvent("click",!0,!0,window,1,Pt.pointerEvent.screenX,Pt.pointerEvent.screenY,Pt.pointerX,Pt.pointerY,!1,!1,!1,!1,0,null),h.dispatchEvent(l)))},M||e.delayedCall(1e-5,u))):(Ht(o.throwProps),S||Pt.allowEventDefault||!c||!o.dragClickables&&It.call(Pt,c.target)||!f||ht&&(!ut||ht!==ut)||!1===c.cancelable||(c.preventDefault(),c.preventManipulation&&c.preventManipulation()),it(Pt,"release","onRelease")),Qt()&&p.duration(Pt.tween.duration()),f&&it(Pt,"dragend","onDragEnd"),!0}},re=function(t){if(t&&Pt.isDragging){var e=t.target||t.srcElement||s.parentNode,i=e.scrollLeft-e._gsScrollX,r=e.scrollTop-e._gsScrollY;(i||r)&&(ot?(h-=i*ot[0]+r*ot[2],u-=r*ot[3]+i*ot[1]):(h-=i,u-=r),e._gsScrollX+=i,e._gsScrollY+=r,ee(Pt.pointerX,Pt.pointerY))}},ne=function(t){var e=P(),i=40>e-zt,r=40>e-Ft,n=i&&ft===zt,s=!!t.preventDefault,o=i&&pt===zt,a=t.isTrusted||null==t.isTrusted&&i&&n;return s&&(n||r&&!1!==Pt.vars.suppressClickOnDrag)&&t.stopImmediatePropagation(),!i||n&&a===o?void((Pt.isPressed||r||i)&&(s?a&&t.detail&&i||(t.preventDefault(),t.preventManipulation&&t.preventManipulation()):t.returnValue=!1)):(a&&n&&(pt=zt),void(ft=zt))};(K=Et.get(this.target))&&K.kill(),this.startDrag=function(t){Jt(t),Pt.isDragging||(Pt.isDragging=!0,it(Pt,"dragstart","onDragStart"))},this.drag=te,this.endDrag=function(t){ie(t,!0)},this.timeSinceDrag=function(){return Pt.isDragging?0:(P()-Ft)/1e3},this.hitTest=function(t,e){return Et.hitTest(Pt.target,t,e)},this.getDirection=function(t,e){var i,r,s,o,a,l,h="velocity"===t&&n?t:"object"!=typeof t||gt?"start":"element";return"element"===h&&(a=Bt(Pt.target),l=Bt(t)),i="start"===h?Pt.x-g:"velocity"===h?n.getVelocity(this.target,mt):a.left+a.width/2-(l.left+l.width/2),gt?0>i?"counter-clockwise":"clockwise":(e=e||2,r="start"===h?Pt.y-y:"velocity"===h?n.getVelocity(this.target,vt):a.top+a.height/2-(l.top+l.height/2),o=1/e>(s=Math.abs(i/r))?"":0>i?"left":"right",e>s&&(""!==o&&(o+="-"),o+=0>r?"up":"down"),o)},this.applyBounds=function(t){var e,i,r,n,a,l;if(t&&o.bounds!==t)return o.bounds=t,Pt.update(!0);if(jt(!0),Wt(),x){if(e=Pt.x,i=Pt.y,e>C?e=C:A>e&&(e=A),i>L?i=L:E>i&&(i=E),(Pt.x!==e||Pt.y!==i)&&(r=!0,Pt.x=Pt.endX=e,gt?Pt.endRotation=e:Pt.y=Pt.endY=i,$=!0,Vt(!0),Pt.autoScroll&&!Pt.isDragging))for(G(s.parentNode),n=s,X.scrollTop=null!=window.pageYOffset?window.pageYOffset:null!=v.scrollTop?v.scrollTop:m.body.scrollTop,X.scrollLeft=null!=window.pageXOffset?window.pageXOffset:null!=v.scrollLeft?v.scrollLeft:m.body.scrollLeft;n&&!l;)a=(l=W(n.parentNode))?X:n.parentNode,Tt&&a.scrollTop>a._gsMaxScrollY&&(a.scrollTop=a._gsMaxScrollY),yt&&a.scrollLeft>a._gsMaxScrollX&&(a.scrollLeft=a._gsMaxScrollX),n=a;Pt.isThrowing&&(r||Pt.endX>C||Pt.endX<A||Pt.endY>L||Pt.endY<E)&&Ht(o.throwProps,r)}return Pt},this.update=function(t,e,i){var r=Pt.x,n=Pt.y;return qt(!e),t?Pt.applyBounds():($&&i&&Vt(!0),jt(!0)),e&&(ee(Pt.pointerX,Pt.pointerY),$&&Vt(!0)),Pt.isPressed&&!e&&(yt&&Math.abs(r-Pt.x)>.01||Tt&&Math.abs(n-Pt.y)>.01&&!gt)&&Zt(),Pt.autoScroll&&(G(s.parentNode),Yt=Pt.isDragging,Vt(!0)),Pt.autoScroll&&(j(s,re),V(s,re)),Pt},this.enable=function(t){var r,h,u;if("soft"!==t){for(h=Rt.length;--h>-1;)u=Rt[h],Ct(u,"mousedown",Jt),Ct(u,"touchstart",Jt),Ct(u,"click",ne,!0),gt||Q(u,"cursor",o.cursor||"move"),Q(u,"touchCallout","none"),Q(u,"touchAction",yt===Tt||l?"none":yt?"pan-y":"pan-x");Nt(Rt,!1)}return V(s,re),a=!0,n&&"soft"!==t&&n.track(l||s,_t?"x,y":gt?"rotation":"top,left"),l&&l.enable(),s._gsDragID=r="d"+R++,O[r]=this,l&&(l.element._gsDragID=r),e.set(s,{x:"+=0",overwrite:!1}),lt={t:s,data:S?I:s._gsTransform,tween:{},setRatio:S?function(){e.set(s,B)}:i._internals.setTransformRatio||i._internals.set3DTransformRatio},Zt(),Pt.update(!0),Pt},this.disable=function(t){var e,i,r=Pt.isDragging;if(!gt)for(e=Rt.length;--e>-1;)Q(Rt[e],"cursor",null);if("soft"!==t){for(e=Rt.length;--e>-1;)i=Rt[e],Q(i,"touchCallout",null),Q(i,"touchAction",null),Ot(i,"mousedown",Jt),Ot(i,"touchstart",Jt),Ot(i,"click",ne);Nt(Rt,!0),st&&(Ot(st,"touchcancel",ie),Ot(st,"touchend",ie),Ot(st,"touchmove",te)),Ot(m,"mouseup",ie),Ot(m,"mousemove",te)}return j(s,re),a=!1,n&&"soft"!==t&&n.untrack(l||s,_t?"x,y":gt?"rotation":"top,left"),l&&l.disable(),Y(Vt),Pt.isDragging=Pt.isPressed=nt=!1,r&&it(Pt,"dragend","onDragEnd"),Pt},this.enabled=function(t,e){return arguments.length?t?Pt.enable(e):Pt.disable(e):a},this.kill=function(){return Pt.isThrowing=!1,e.killTweensOf(l||s,!0,Lt),Pt.disable(),delete O[s._gsDragID],Pt},-1!==dt.indexOf("scroll")&&(l=this.scrollProxy=new Xt(s,function(t,e){var i;for(i in e)void 0===t[i]&&(t[i]=e[i]);return t}({onKill:function(){Pt.isPressed&&ie(null)}},o)),s.style.overflowY=Tt&&!St?"auto":"hidden",s.style.overflowX=yt&&!St?"auto":"hidden",s=l.content),!1!==o.force3D&&e.set(s,{force3D:!0}),gt?Lt.rotation=1:(yt&&(Lt[mt]=1),Tt&&(Lt[vt]=1)),gt?(I=(B=d).css,B.overwrite=!1):_t&&(I=(B=yt&&Tt?c:yt?f:p).css,B.overwrite=!1),this.enable()},Ft=Et.prototype=new t;Ft.constructor=Et,Ft.pointerX=Ft.pointerY=0,Ft.isDragging=Ft.isPressed=!1,Et.version="0.14.8",Et.zIndex=1e3,Ct(m,"touchcancel",function(){}),Ct(m,"contextmenu",function(t){var e;for(e in O)O[e].isPressed&&O[e].endDrag()}),Et.create=function(t,i){"string"==typeof t&&(t=e.selector(t));for(var r=t&&0!==t.length?Pt(t)?function(t){var e,i,r,n=[],s=t.length;for(e=0;s>e;e++)if(i=t[e],Pt(i))for(r=i.length,r=0;r<i.length;r++)n.push(i[r]);else i&&0!==i.length&&n.push(i);return n}(t):[t]:[],n=r.length;--n>-1;)r[n]=new Et(r[n],i);return r},Et.get=function(t){return O[(q(t)||{})._gsDragID]},Et.timeSinceDrag=function(){return(P()-N)/1e3};var Yt={},Bt=function(t,e){if(t===window)return Yt.left=Yt.top=0,Yt.width=Yt.right=v.clientWidth||t.innerWidth||m.body.clientWidth||0,Yt.height=Yt.bottom=(t.innerHeight||0)-20<v.clientHeight?v.clientHeight:t.innerHeight||m.body.clientHeight||0,Yt;var i=t.pageX!==e?{left:t.pageX-z(),top:t.pageY-I(),right:t.pageX-z()+1,bottom:t.pageY-I()+1}:t.nodeType||t.left===e||t.top===e?S?function(t){var e,i,r=0,n=0;for(e=(t=q(t)).offsetWidth,i=t.offsetHeight;t;)r+=t.offsetTop,n+=t.offsetLeft,t=t.offsetParent;return{top:r,left:n,width:e,height:i}}(t):q(t).getBoundingClientRect():t;return i.right===e&&i.width!==e?(i.right=i.left+i.width,i.bottom=i.top+i.height):i.width===e&&(i={width:i.right-i.left,height:i.bottom-i.top,right:i.right,left:i.left,bottom:i.bottom,top:i.top}),i};return Et.hitTest=function(t,e,i){if(t===e)return!1;var r,n,s,o=Bt(t),a=Bt(e),l=a.left>o.right||a.right<o.left||a.top>o.bottom||a.bottom<o.top;return l||!i?!l:(s=-1!==(i+"").indexOf("%"),i=parseFloat(i)||0,(r={left:Math.max(o.left,a.left),top:Math.max(o.top,a.top)}).width=Math.min(o.right,a.right)-r.left,r.height=Math.min(o.bottom,a.bottom)-r.top,!(r.width<0||r.height<0)&&(s?(i*=.01,(n=r.width*r.height)>=o.width*o.height*i||n>=a.width*a.height*i):r.width>i&&r.height>i))},k.style.cssText="visibility:hidden;height:1px;top:-1px;pointer-events:none;position:relative;clear:both;",Et},!0)}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(t){"use strict";var e=function(){return(_gsScope.GreenSockGlobals||_gsScope).Draggable};"function"==typeof define&&define.amd?define(["TweenLite","CSSPlugin"],e):"undefined"!=typeof module&&module.exports&&(require("../TweenLite.js"),require("../plugins/CSSPlugin.js"),module.exports=e())}(),((_gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window)._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";var t=function(e){var i=e.nodeType,r="";if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)r+=t(e)}else if(3===i||4===i)return e.nodeValue;return r},e=_gsScope._gsDefine.plugin({propName:"text",API:2,version:"0.5.2",init:function(e,i,r,n){var s,o=e.nodeName.toUpperCase();if("function"==typeof i&&(i=i(n,e)),this._svg=e.getBBox&&("TEXT"===o||"TSPAN"===o),!("innerHTML"in e||this._svg))return!1;if(this._target=e,"object"!=typeof i&&(i={value:i}),void 0===i.value)return this._text=this._original=[""],!0;for(this._delimiter=i.delimiter||"",this._original=t(e).replace(/\s+/g," ").split(this._delimiter),this._text=i.value.replace(/\s+/g," ").split(this._delimiter),this._runBackwards=!0===r.vars.runBackwards,this._runBackwards&&(o=this._original,this._original=this._text,this._text=o),"string"==typeof i.newClass&&(this._newClass=i.newClass,this._hasClass=!0),"string"==typeof i.oldClass&&(this._oldClass=i.oldClass,this._hasClass=!0),s=0>(o=this._original.length-this._text.length)?this._original:this._text,this._fillChar=i.fillChar||(i.padSpace?"&nbsp;":""),0>o&&(o=-o);--o>-1;)s.push(this._fillChar);return!0},set:function(t){t>1?t=1:0>t&&(t=0),this._runBackwards&&(t=1-t);var e,i,r,n=this._text.length,s=t*n+.5|0;this._hasClass?(e=this._newClass&&0!==s,i=this._oldClass&&s!==n,r=(e?"<span class='"+this._newClass+"'>":"")+this._text.slice(0,s).join(this._delimiter)+(e?"</span>":"")+(i?"<span class='"+this._oldClass+"'>":"")+this._delimiter+this._original.slice(s).join(this._delimiter)+(i?"</span>":"")):r=this._text.slice(0,s).join(this._delimiter)+this._delimiter+this._original.slice(s).join(this._delimiter),this._svg?this._target.textContent=r:this._target.innerHTML="&nbsp;"===this._fillChar&&-1!==r.indexOf("  ")?r.split("  ").join("&nbsp;&nbsp;"):r}}).prototype;e._newClass=e._oldClass=e._delimiter=""}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.clipboard=e():t.clipboard=e()}(this,function(){return function(t){function e(r){if(i[r])return i[r].exports;var n=i[r]={i:r,l:!1,exports:{}};return t[r].call(n.exports,n,n.exports,e),n.l=!0,n.exports}var i={};return e.m=t,e.c=i,e.d=function(t,i,r){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=0)}([function(t,e,i){"use strict";function r(t){var e=new m,i=function(t,e,i){f("listener called"),t.success=!0,e.forEach(function(e,r){i.clipboardData.setData(r,e),r===_&&i.clipboardData.getData(r)!=e&&(f("setting text/plain failed"),t.success=!1)}),i.preventDefault()}.bind(this,e,t);document.addEventListener("copy",i);try{document.execCommand("copy")}finally{document.removeEventListener("copy",i)}return e}function n(t,e){o(t);var i=r(e);return a(),i}function s(t){f("copyTextUsingDOM");var e=document.createElement("div"),i=e.attachShadow({mode:"open"});document.body.appendChild(e);var r=document.createElement("span");r.innerText=t,i.appendChild(r),o(r);var n=document.execCommand("copy");return a(),document.body.removeChild(e),n}function o(t){var e=document.getSelection(),i=document.createRange();i.selectNodeContents(t),e.removeAllRanges(),e.addRange(i)}function a(){document.getSelection().removeAllRanges()}function l(){return"undefined"==typeof ClipboardEvent&&void 0!==window.clipboardData&&void 0!==window.clipboardData.setData}function h(){return new u.Promise(function(t,e){var i=window.clipboardData.getData("Text");""===i?e(new Error("Empty clipboard or could not read plain text from clipboard")):t(i)})}Object.defineProperty(e,"__esModule",{value:!0});var u=i(1),c=i(5),f=function(t){},p=!0,d=(console.warn||console.log).bind(console,"[clipboard-polyfill]"),_="text/plain",g=function(){function t(){}return t.setDebugLog=function(t){f=t},t.suppressWarnings=function(){p=!1,c.suppressDTWarnings()},t.write=function(t){return p&&!t.getData(_)&&d("clipboard.write() was called without a `text/plain` data type. On some platforms, this may result in an empty clipboard. Call clipboard.suppressWarnings() to suppress this warning."),new u.Promise(function(e,i){if(l())(function(t){var e=t.getData("text/plain");if(void 0!==e)return window.clipboardData.setData("Text",e);throw"No `text/plain` value was specified."})(t)?e():i(new Error("Copying failed, possibly because the user rejected it."));else{var o=r(t);if(o.success)return f("regular execCopy worked"),void e();if(navigator.userAgent.indexOf("Edge")>-1)return f('UA "Edge" => assuming success'),void e();if((o=n(document.body,t)).success)return f("copyUsingTempSelection worked"),void e();if((o=function(t){var e=document.createElement("div");e.textContent="temporary element",document.body.appendChild(e);var i=n(e,t);return document.body.removeChild(e),i}(t)).success)return f("copyUsingTempElem worked"),void e();var a=t.getData(_);if(void 0!==a&&s(a))return f("copyTextUsingDOM worked"),void e();i(new Error("Copy command failed."))}})},t.writeText=function(t){var e=new c.DT;return e.setData(_,t),this.write(e)},t.read=function(){return new u.Promise(function(t,e){l()?h().then(function(e){return t(function(t){var e=new c.DT;return e.setData("text/plain",t),e}(e))},e):e("Read is not supported in your browser.")})},t.readText=function(){return l()?h():new u.Promise(function(t,e){e("Read is not supported in your browser.")})},t.DT=c.DT,t}();e.default=g;var m=function(){return function(){this.success=!1}}();t.exports=g},function(t,e,i){(function(e,r){!function(e,i){t.exports=i()}(0,function(){"use strict";function t(t){return"function"==typeof t}function n(){var t=setTimeout;return function(){return t(s,1)}}function s(){for(var t=0;t<b;t+=2)(0,M[t])(M[t+1]),M[t]=void 0,M[t+1]=void 0;b=0}function o(t,e){var i=arguments,r=this,n=new this.constructor(l);void 0===n[L]&&y(n);var s=r._state;return s?function(){var t=i[s-1];k(function(){return v(s,n,t,r._result)})}():_(r,n,t,e),n}function a(t){if(t&&"object"==typeof t&&t.constructor===this)return t;var e=new this(l);return c(e,t),e}function l(){}function h(t){try{return t.then}catch(t){return Y.error=t,Y}}function u(e,i,r){i.constructor===e.constructor&&r===o&&i.constructor.resolve===a?function(t,e){e._state===E?p(t,e._result):e._state===F?d(t,e._result):_(e,void 0,function(e){return c(t,e)},function(e){return d(t,e)})}(e,i):r===Y?(d(e,Y.error),Y.error=null):void 0===r?p(e,i):t(r)?function(t,e,i){k(function(t){var r=!1,n=function(t,e,i,r){try{t.call(e,i,r)}catch(t){return t}}(i,e,function(i){r||(r=!0,e!==i?c(t,i):p(t,i))},function(e){r||(r=!0,d(t,e))},t._label);!r&&n&&(r=!0,d(t,n))},t)}(e,i,r):p(e,i)}function c(t,e){t===e?d(t,new TypeError("You cannot resolve a promise with itself")):function(t){var e=typeof t;return null!==t&&("object"===e||"function"===e)}(e)?u(t,e,h(e)):p(t,e)}function f(t){t._onerror&&t._onerror(t._result),g(t)}function p(t,e){t._state===X&&(t._result=e,t._state=E,0!==t._subscribers.length&&k(g,t))}function d(t,e){t._state===X&&(t._state=F,t._result=e,k(f,t))}function _(t,e,i,r){var n=t._subscribers,s=n.length;t._onerror=null,n[s]=e,n[s+E]=i,n[s+F]=r,0===s&&t._state&&k(g,t)}function g(t){var e=t._subscribers,i=t._state;if(0!==e.length){for(var r=void 0,n=void 0,s=t._result,o=0;o<e.length;o+=3)r=e[o],n=e[o+i],r?v(i,r,n,s):n(s);t._subscribers.length=0}}function m(){this.error=null}function v(e,i,r,n){var s=t(r),o=void 0,a=void 0,l=void 0,h=void 0;if(s){if((o=function(t,e){try{return t(e)}catch(t){return B.error=t,B}}(r,n))===B?(h=!0,a=o.error,o.error=null):l=!0,i===o)return void d(i,new TypeError("A promises callback cannot return that same promise."))}else o=n,l=!0;i._state!==X||(s&&l?c(i,o):h?d(i,a):e===E?p(i,o):e===F&&d(i,o))}function y(t){t[L]=I++,t._state=void 0,t._result=void 0,t._subscribers=[]}function x(t,e){this._instanceConstructor=t,this.promise=new t(l),this.promise[L]||y(this.promise),T(e)?(this.length=e.length,this._remaining=e.length,this._result=new Array(this.length),0===this.length?p(this.promise,this._result):(this.length=this.length||0,this._enumerate(e),0===this._remaining&&p(this.promise,this._result))):d(this.promise,new Error("Array Methods must be provided an Array"))}function w(t){this[L]=I++,this._result=this._state=void 0,this._subscribers=[],l!==t&&("function"!=typeof t&&function(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}(),this instanceof w?function(t,e){try{e(function(e){c(t,e)},function(e){d(t,e)})}catch(e){d(t,e)}}(this,t):function(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}())}var T=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)},b=0,P=void 0,S=void 0,k=function(t,e){M[b]=t,M[b+1]=e,2===(b+=2)&&(S?S(s):N())},C="undefined"!=typeof window?window:void 0,O=C||{},R=O.MutationObserver||O.WebKitMutationObserver,A="undefined"==typeof self&&void 0!==e&&"[object process]"==={}.toString.call(e),D="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,M=new Array(1e3),N=void 0;N=A?function(){return e.nextTick(s)}:R?function(){var t=0,e=new R(s),i=document.createTextNode("");return e.observe(i,{characterData:!0}),function(){i.data=t=++t%2}}():D?function(){var t=new MessageChannel;return t.port1.onmessage=s,function(){return t.port2.postMessage(0)}}():void 0===C?function(){try{var t=i(4);return void 0!==(P=t.runOnLoop||t.runOnContext)?function(){P(s)}:n()}catch(t){return n()}}():n();var L=Math.random().toString(36).substring(16),X=void 0,E=1,F=2,Y=new m,B=new m,I=0;return x.prototype._enumerate=function(t){for(var e=0;this._state===X&&e<t.length;e++)this._eachEntry(t[e],e)},x.prototype._eachEntry=function(t,e){var i=this._instanceConstructor,r=i.resolve;if(r===a){var n=h(t);if(n===o&&t._state!==X)this._settledAt(t._state,e,t._result);else if("function"!=typeof n)this._remaining--,this._result[e]=t;else if(i===w){var s=new i(l);u(s,t,n),this._willSettleAt(s,e)}else this._willSettleAt(new i(function(e){return e(t)}),e)}else this._willSettleAt(r(t),e)},x.prototype._settledAt=function(t,e,i){var r=this.promise;r._state===X&&(this._remaining--,t===F?d(r,i):this._result[e]=i),0===this._remaining&&p(r,this._result)},x.prototype._willSettleAt=function(t,e){var i=this;_(t,void 0,function(t){return i._settledAt(E,e,t)},function(t){return i._settledAt(F,e,t)})},w.all=function(t){return new x(this,t).promise},w.race=function(t){var e=this;return new e(T(t)?function(i,r){for(var n=t.length,s=0;s<n;s++)e.resolve(t[s]).then(i,r)}:function(t,e){return e(new TypeError("You must pass an array to race."))})},w.resolve=a,w.reject=function(t){var e=new this(l);return d(e,t),e},w._setScheduler=function(t){S=t},w._setAsap=function(t){k=t},w._asap=k,w.prototype={constructor:w,then:o,catch:function(t){return this.then(null,t)}},w.polyfill=function(){var t=void 0;if(void 0!==r)t=r;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(t){throw new Error("polyfill failed because global object is unavailable in this environment")}var e=t.Promise;if(e){var i=null;try{i=Object.prototype.toString.call(e.resolve())}catch(t){}if("[object Promise]"===i&&!e.cast)return}t.Promise=w},w.Promise=w,w})}).call(e,i(2),i(3))},function(t,e){function i(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function n(t){if(h===setTimeout)return setTimeout(t,0);if((h===i||!h)&&setTimeout)return h=setTimeout,setTimeout(t,0);try{return h(t,0)}catch(e){try{return h.call(null,t,0)}catch(e){return h.call(this,t,0)}}}function s(){d&&f&&(d=!1,f.length?p=f.concat(p):_=-1,p.length&&o())}function o(){if(!d){var t=n(s);d=!0;for(var e=p.length;e;){for(f=p,p=[];++_<e;)f&&f[_].run();_=-1,e=p.length}f=null,d=!1,function(t){if(u===clearTimeout)return clearTimeout(t);if((u===r||!u)&&clearTimeout)return u=clearTimeout,clearTimeout(t);try{u(t)}catch(e){try{return u.call(null,t)}catch(e){return u.call(this,t)}}}(t)}}function a(t,e){this.fun=t,this.array=e}function l(){}var h,u,c=t.exports={};!function(){try{h="function"==typeof setTimeout?setTimeout:i}catch(t){h=i}try{u="function"==typeof clearTimeout?clearTimeout:r}catch(t){u=r}}();var f,p=[],d=!1,_=-1;c.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var i=1;i<arguments.length;i++)e[i-1]=arguments[i];p.push(new a(t,e)),1!==p.length||d||n(o)},a.prototype.run=function(){this.fun.apply(null,this.array)},c.title="browser",c.browser=!0,c.env={},c.argv=[],c.version="",c.versions={},c.on=l,c.addListener=l,c.once=l,c.off=l,c.removeListener=l,c.removeAllListeners=l,c.emit=l,c.prependListener=l,c.prependOnceListener=l,c.listeners=function(t){return[]},c.binding=function(t){throw new Error("process.binding is not supported")},c.cwd=function(){return"/"},c.chdir=function(t){throw new Error("process.chdir is not supported")},c.umask=function(){return 0}},function(t,e){var i;i=function(){return this}();try{i=i||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(i=window)}t.exports=i},function(t,e){},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r={TEXT_PLAIN:"text/plain",TEXT_HTML:"text/html"},n=new Set;for(var s in r)n.add(r[s]);var o=(console.warn||console.log).bind(console,"[clipboard-polyfill]"),a=!0;e.suppressDTWarnings=function(){a=!1};var l=function(){function t(){this.m=new Map}return t.prototype.setData=function(t,e){a&&!n.has(t)&&o("Unknown data type: "+t,"Call clipboard.suppressWarnings() to suppress this warning."),this.m.set(t,e)},t.prototype.getData=function(t){return this.m.get(t)},t.prototype.forEach=function(t){return this.m.forEach(t)},t}();e.DT=l}])}),((_gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window)._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine("plugins.ThrowPropsPlugin",["plugins.TweenPlugin","TweenLite","easing.Ease","utils.VelocityTracker"],function(t,e,i,r){var n,s,o,a,l=function(){t.call(this,"throwProps"),this._overwriteProps.length=0},h=999999999999999,u=_gsScope._gsDefine.globals,c=!1,f={x:1,y:1,z:2,scale:1,scaleX:1,scaleY:1,rotation:1,rotationZ:1,rotationX:2,rotationY:2,skewX:1,skewY:1,xPercent:1,yPercent:1},p=String.fromCharCode(103,114,101,101,110,115,111,99,107,46,99,111,109),d=(String.fromCharCode(47,114,101,113,117,105,114,101,115,45,109,101,109,98,101,114,115,104,105,112,47),function(t){for(var e=-1!==(window?window.location.href:"").indexOf(String.fromCharCode(103,114,101,101,110,115,111,99,107))&&-1!==t.indexOf(String.fromCharCode(108,111,99,97,108,104,111,115,116)),i=[p,String.fromCharCode(99,111,100,101,112,101,110,46,105,111),String.fromCharCode(99,111,100,101,112,101,110,46,100,101,118),String.fromCharCode(99,115,115,45,116,114,105,99,107,115,46,99,111,109),String.fromCharCode(99,100,112,110,46,105,111),String.fromCharCode(103,97,110,110,111,110,46,116,118),String.fromCharCode(99,111,100,101,99,97,110,121,111,110,46,110,101,116),String.fromCharCode(116,104,101,109,101,102,111,114,101,115,116,46,110,101,116),String.fromCharCode(99,101,114,101,98,114,97,120,46,99,111,46,117,107),String.fromCharCode(116,121,109,112,97,110,117,115,46,110,101,116),String.fromCharCode(116,119,101,101,110,109,97,120,46,99,111,109),String.fromCharCode(116,119,101,101,110,108,105,116,101,46,99,111,109),String.fromCharCode(112,108,110,107,114,46,99,111),String.fromCharCode(104,111,116,106,97,114,46,99,111,109),String.fromCharCode(119,101,98,112,97,99,107,98,105,110,46,99,111,109),String.fromCharCode(97,114,99,104,105,118,101,46,111,114,103),String.fromCharCode(106,115,102,105,100,100,108,101,46,110,101,116)],r=i.length;--r>-1;)if(-1!==t.indexOf(i[r]))return!0;return e&&window&&window.console&&console.log(String.fromCharCode(87,65,82,78,73,78,71,58,32,97,32,115,112,101,99,105,97,108,32,118,101,114,115,105,111,110,32,111,102,32)+"ThrowPropsPlugin"+String.fromCharCode(32,105,115,32,114,117,110,110,105,110,103,32,108,111,99,97,108,108,121,44,32,98,117,116,32,105,116,32,119,105,108,108,32,110,111,116,32,119,111,114,107,32,111,110,32,97,32,108,105,118,101,32,100,111,109,97,105,110,32,98,101,99,97,117,115,101,32,105,116,32,105,115,32,97,32,109,101,109,98,101,114,115,104,105,112,32,98,101,110,101,102,105,116,32,111,102,32,67,108,117,98,32,71,114,101,101,110,83,111,99,107,46,32,80,108,101,97,115,101,32,115,105,103,110,32,117,112,32,97,116,32,104,116,116,112,58,47,47,103,114,101,101,110,115,111,99,107,46,99,111,109,47,99,108,117,98,47,32,97,110,100,32,116,104,101,110,32,100,111,119,110,108,111,97,100,32,116,104,101,32,39,114,101,97,108,39,32,118,101,114,115,105,111,110,32,102,114,111,109,32,121,111,117,114,32,71,114,101,101,110,83,111,99,107,32,97,99,99,111,117,110,116,32,119,104,105,99,104,32,104,97,115,32,110,111,32,115,117,99,104,32,108,105,109,105,116,97,116,105,111,110,115,46,32,84,104,101,32,102,105,108,101,32,121,111,117,39,114,101,32,117,115,105,110,103,32,119,97,115,32,108,105,107,101,108,121,32,100,111,119,110,108,111,97,100,101,100,32,102,114,111,109,32,101,108,115,101,119,104,101,114,101,32,111,110,32,116,104,101,32,119,101,98,32,97,110,100,32,105,115,32,114,101,115,116,114,105,99,116,101,100,32,116,111,32,108,111,99,97,108,32,117,115,101,32,111,114,32,111,110,32,115,105,116,101,115,32,108,105,107,101,32,99,111,100,101,112,101,110,46,105,111,46)),e}(window?window.location.host:"")),_=function(t,e,i,r,n){var s,o,a,l,u=e.length,c=0,f=h;if("object"==typeof t){for(;--u>-1;){for(a in s=e[u],o=0,t)o+=(l=s[a]-t[a])*l;f>o&&(c=u,f=o)}if(h>(n||h)&&n<Math.sqrt(f))return t}else for(;--u>-1;)0>(o=(s=e[u])-t)&&(o=-o),o>=f||r>s||s>i||(c=u,f=o);return e[c]},g=function(t,e,i,r,n,s){if("auto"===t.end)return t;var o,a,l=t.end;if(i=isNaN(i)?h:i,r=isNaN(r)?-h:r,"object"==typeof e){if(o=e.calculated?e:("function"==typeof l?l(e):_(e,l,i,r,s))||e,!e.calculated){for(a in o)e[a]=o[a];e.calculated=!0}o=o[n]}else o="function"==typeof l?l(e):l instanceof Array?_(e,l,i,r,s):+l;return o>i?o=i:r>o&&(o=r),{max:o,min:o,unitFactor:t.unitFactor}},m=function(t,e,i){for(var r in e)void 0===t[r]&&r!==i&&(t[r]=e[r]);return t},v=l.calculateChange=function(t,r,n,s){return null==s&&(s=.05),n*s*t/(r instanceof i?r:r?new i(r):e.defaultEase).getRatio(s)},y=l.calculateDuration=function(t,r,n,s,o){o=o||.05;var a=s instanceof i?s:s?new i(s):e.defaultEase;return Math.abs((r-t)*a.getRatio(o)/n/o)},x=l.calculateTweenDuration=function(t,n,s,o,a,h){if("string"==typeof t&&(t=e.selector(t)),!t)return 0;null==s&&(s=10),null==o&&(o=.2),null==a&&(a=1),t.length&&(t=t[0]||t);var u,f,p,d,_,x,w,T,b,P,S,k,C,O=0,R=9999999999,A=n.throwProps||n,D=n.ease instanceof i?n.ease:n.ease?new i(n.ease):e.defaultEase,M=isNaN(A.checkpoint)?.05:+A.checkpoint,N=isNaN(A.resistance)?l.defaultResistance:+A.resistance;if(A.linkedProps)for(k=A.linkedProps.split(","),S={},C=0;C<k.length;C++)(f=A[u=k[C]])&&(void 0!==f.velocity&&"number"==typeof f.velocity?d=+f.velocity||0:d=(b=b||r.getByTarget(t))&&b.isTrackingProp(u)?b.getVelocity(u):0,p=d*(_=isNaN(f.resistance)?N:+f.resistance)>0?d/_:d/-_,x="function"==typeof t[u]?t[u.indexOf("set")||"function"!=typeof t["get"+u.substr(3)]?u:"get"+u.substr(3)]():t[u]||0,S[u]=x+v(d,D,p,M));for(u in A)"resistance"!==u&&"checkpoint"!==u&&"preventOvershoot"!==u&&"linkedProps"!==u&&"radius"!==u&&("object"!=typeof(f=A[u])&&((b=b||r.getByTarget(t))&&b.isTrackingProp(u)?f="number"==typeof f?{velocity:f}:{velocity:b.getVelocity(u)}:p=(d=+f||0)*N>0?d/N:d/-N),"object"==typeof f&&(void 0!==f.velocity&&"number"==typeof f.velocity?d=+f.velocity||0:d=(b=b||r.getByTarget(t))&&b.isTrackingProp(u)?b.getVelocity(u):0,p=d*(_=isNaN(f.resistance)?N:+f.resistance)>0?d/_:d/-_,w=(x="function"==typeof t[u]?t[u.indexOf("set")||"function"!=typeof t["get"+u.substr(3)]?u:"get"+u.substr(3)]():t[u]||0)+v(d,D,p,M),void 0!==f.end&&(f=g(f,S&&u in S?S:w,f.max,f.min,u,A.radius),(h||c)&&(A[u]=m(f,A[u],"end"))),void 0!==f.max&&w>+f.max+1e-10?(P=f.unitFactor||l.defaultUnitFactors[u]||1,R>(T=x>f.max&&f.min!==f.max||d*P>-15&&45>d*P?o+.1*(s-o):y(x,f.max,d,D,M))+a&&(R=T+a)):void 0!==f.min&&w<+f.min-1e-10&&(P=f.unitFactor||l.defaultUnitFactors[u]||1,R>(T=x<f.min&&f.min!==f.max||d*P>-45&&15>d*P?o+.1*(s-o):y(x,f.min,d,D,M))+a&&(R=T+a)),T>O&&(O=T)),p>O&&(O=p));return O>R&&(O=R),O>s?s:o>O?o:O},w=l.prototype=new t("throwProps");return w.constructor=l,l.version="0.11.0",l.API=2,l._autoCSS=!0,l.defaultResistance=100,l.defaultUnitFactors={time:1e3,totalTime:1e3},l.track=function(t,e,i){return r.track(t,e,i)},l.untrack=function(t,e){r.untrack(t,e)},l.isTracking=function(t,e){return r.isTracking(t,e)},l.getVelocity=function(t,e){var i=r.getByTarget(t);return i?i.getVelocity(e):NaN},l._cssRegister=function(){var t=u.com.greensock.plugins.CSSPlugin;if(t){var e=t._internals,i=e._parseToProxy,o=e._setPluginRatio,a=e.CSSPropTween;e._registerComplexSpecialProp("throwProps",{parser:function(t,e,h,u,c,p){p=new l;var d,_,g,m,v={},y={},x={},w={},T={},b={};for(_ in s={},e)"resistance"!==_&&"preventOvershoot"!==_&&"linkedProps"!==_&&"radius"!==_&&("object"==typeof(d=e[_])?(void 0!==d.velocity&&"number"==typeof d.velocity?v[_]=+d.velocity||0:(m=m||r.getByTarget(t),v[_]=m&&m.isTrackingProp(_)?m.getVelocity(_):0),void 0!==d.end&&(w[_]=d.end),void 0!==d.min&&(y[_]=d.min),void 0!==d.max&&(x[_]=d.max),d.preventOvershoot&&(b[_]=!0),void 0!==d.resistance&&(!0,T[_]=d.resistance)):"number"==typeof d?v[_]=d:(m=m||r.getByTarget(t),v[_]=m&&m.isTrackingProp(_)?m.getVelocity(_):d||0),f[_]&&u._enableTransforms(2===f[_]));for(_ in g=i(t,v,u,c,p),n=g.proxy,v=g.end,n)s[_]={velocity:v[_],min:y[_],max:x[_],end:w[_],resistance:T[_],preventOvershoot:b[_]};return null!=e.resistance&&(s.resistance=e.resistance),null!=e.linkedProps&&(s.linkedProps=e.linkedProps),null!=e.radius&&(s.radius=e.radius),e.preventOvershoot&&(s.preventOvershoot=!0),c=new a(t,"throwProps",0,0,g.pt,2),u._overwriteProps.pop(),c.plugin=p,c.setRatio=o,c.data=g,p._onInitTween(n,s,u._tween),c}})}},l.to=function(t,i,r,l,h){i.throwProps||(i={throwProps:i}),0===h&&(i.throwProps.preventOvershoot=!0),c=!0;var u=new e(t,l||1,i);return u.render(0,!0,!0),u.vars.css?(u.duration(x(n,{throwProps:s,ease:i.ease},r,l,h)),u._delay&&!u.vars.immediateRender?u.invalidate():o._onInitTween(n,a,u),c=!1,u):(u.kill(),u=new e(t,x(t,i,r,l,h),i),c=!1,u)},w._onInitTween=function(t,e,i,n){this.target=t,this._props=[],o=this,a=e;var s,l,h,u,f,p,_,y,x,w,T,b,P=i._ease,S=isNaN(e.checkpoint)?.05:+e.checkpoint,k=i._duration,C=e.preventOvershoot,O=0;if(e.linkedProps)for(T=e.linkedProps.split(","),w={},b=0;b<T.length;b++)(l=e[s=T[b]])&&(void 0!==l.velocity&&"number"==typeof l.velocity?f=+l.velocity||0:f=(x=x||r.getByTarget(t))&&x.isTrackingProp(s)?x.getVelocity(s):0,h="function"==typeof t[s]?t[s.indexOf("set")||"function"!=typeof t["get"+s.substr(3)]?s:"get"+s.substr(3)]():t[s]||0,w[s]=h+v(f,P,k,S));for(s in e)if("resistance"!==s&&"checkpoint"!==s&&"preventOvershoot"!==s&&"linkedProps"!==s&&"radius"!==s){if("function"==typeof(l=e[s])&&(l=l(n,t)),"number"==typeof l)f=+l||0;else if("object"!=typeof l||isNaN(l.velocity)){if(!(x=x||r.getByTarget(t))||!x.isTrackingProp(s))throw"ERROR: No velocity was defined in the throwProps tween of "+t+" property: "+s;f=x.getVelocity(s)}else f=+l.velocity;p=v(f,P,k,S),y=0,h=(u="function"==typeof t[s])?t[s.indexOf("set")||"function"!=typeof t["get"+s.substr(3)]?s:"get"+s.substr(3)]():t[s],"object"==typeof l&&(_=h+p,void 0!==l.end&&(l=g(l,w&&s in w?w:_,l.max,l.min,s,e.radius),c&&(e[s]=m(l,e[s],"end"))),void 0!==l.max&&+l.max<_?C||l.preventOvershoot?p=l.max-h:y=l.max-h-p:void 0!==l.min&&+l.min>_&&(C||l.preventOvershoot?p=l.min-h:y=l.min-h-p)),this._overwriteProps[O]=s,this._props[O++]={p:s,s:h,c1:p,c2:y,f:u,r:!1}}return d},w._kill=function(e){for(var i=this._props.length;--i>-1;)null!=e[this._props[i].p]&&this._props.splice(i,1);return t.prototype._kill.call(this,e)},w._mod=function(t){for(var e,i=this._props,r=i.length;--r>-1;)"function"==typeof(e=t[i[r].p]||t.throwProps)&&(i[r].m=e)},w.setRatio=function(t){for(var e,i,r=this._props.length;--r>-1;)i=(e=this._props[r]).s+e.c1*t+e.c2*t*t,e.m?i=e.m(i,this.target):1===t&&(i=(1e4*i+(0>i?-.5:.5)|0)/1e4),e.f?this.target[e.p](i):this.target[e.p]=i},t.activate([l]),l},!0),_gsScope._gsDefine("utils.VelocityTracker",["TweenLite"],function(t){var e,i,r,n=/([A-Z])/g,s={},o={x:1,y:1,z:2,scale:1,scaleX:1,scaleY:1,rotation:1,rotationZ:1,rotationX:2,rotationY:2,skewX:1,skewY:1,xPercent:1,yPercent:1},a=document.defaultView?document.defaultView.getComputedStyle:function(){},l=function(t,e,i){var r=(t._gsTransform||s)[e];return r||0===r?r:(t.style[e]?r=t.style[e]:(i=i||a(t,null))?r=i[e]||i.getPropertyValue(e)||i.getPropertyValue(e.replace(n,"-$1").toLowerCase()):t.currentStyle&&(r=t.currentStyle[e]),parseFloat(r)||0)},h=t.ticker,u=function(t,e,i){this.p=t,this.f=e,this.v1=this.v2=0,this.t1=this.t2=h.time,this.css=!1,this.type="",this._prev=null,i&&(this._next=i,i._prev=this)},c=function(){var t,i,n=e,s=h.time;if(s-r>=.03)for(r,r=s;n;){for(i=n._firstVP;i;)((t=i.css?l(n.target,i.p):i.f?n.target[i.p]():n.target[i.p])!==i.v1||s-i.t1>.15)&&(i.v2=i.v1,i.v1=t,i.t2=i.t1,i.t1=s),i=i._next;n=n._next}},f=function(t){this._lookup={},this.target=t,this.elem=!(!t.style||!t.nodeType),i||(h.addEventListener("tick",c,null,!1,-100),r=h.time,i=!0),e&&(this._next=e,e._prev=this),e=this},p=f.getByTarget=function(t){for(var i=e;i;){if(i.target===t)return i;i=i._next}},d=f.prototype;return d.addProp=function(e,i){if(!this._lookup[e]){var r=this.target,n="function"==typeof r[e],s=n?this._altProp(e):e,a=this._firstVP;this._firstVP=this._lookup[e]=this._lookup[s]=a=new u(s!==e&&0===e.indexOf("set")?s:e,n,a),a.css=this.elem&&(void 0!==this.target.style[a.p]||o[a.p]),a.css&&o[a.p]&&!r._gsTransform&&t.set(r,{x:"+=0",overwrite:!1}),a.type=i||a.css&&0===e.indexOf("rotation")?"deg":"",a.v1=a.v2=a.css?l(r,a.p):n?r[a.p]():r[a.p]}},d.removeProp=function(t){var e=this._lookup[t];e&&(e._prev?e._prev._next=e._next:e===this._firstVP&&(this._firstVP=e._next),e._next&&(e._next._prev=e._prev),this._lookup[t]=0,e.f&&(this._lookup[this._altProp(t)]=0))},d.isTrackingProp=function(t){return this._lookup[t]instanceof u},d.getVelocity=function(t){var e,i,r=this._lookup[t],n=this.target;if(!r)throw"The velocity of "+t+" is not being tracked.";return e=(r.css?l(n,r.p):r.f?n[r.p]():n[r.p])-r.v2,("rad"===r.type||"deg"===r.type)&&((e%=i="rad"===r.type?2*Math.PI:360)!==e%(i/2)&&(e=0>e?e+i:e-i)),e/(h.time-r.t2)},d._altProp=function(t){var e=t.substr(0,3),i=("get"===e?"set":"set"===e?"get":e)+t.substr(3);return"function"==typeof this.target[i]?i:t},f.getByTarget=function(i){var r=e;for("string"==typeof i&&(i=t.selector(i)),i.length&&i!==window&&i[0]&&i[0].style&&!i.nodeType&&(i=i[0]);r;){if(r.target===i)return r;r=r._next}},f.track=function(t,e,i){var r=p(t),n=e.split(","),s=n.length;for(i=(i||"").split(","),r||(r=new f(t));--s>-1;)r.addProp(n[s],i[s]||i[0]);return r},f.untrack=function(t,i){var r=p(t),n=(i||"").split(","),s=n.length;if(r){for(;--s>-1;)r.removeProp(n[s]);r._firstVP&&i||(r._prev?r._prev._next=r._next:r===e&&(e=r._next),r._next&&(r._next._prev=r._prev))}},f.isTracking=function(t,e){var i=p(t);return!!i&&(!(e||!i._firstVP)||i.isTrackingProp(e))},f},!0)}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(t){"use strict";var e=function(){return(_gsScope.GreenSockGlobals||_gsScope).ThrowPropsPlugin};"function"==typeof define&&define.amd?define(["TweenLite"],e):"undefined"!=typeof module&&module.exports&&(require("./TweenLite.js"),module.exports=e()),"function"==typeof define&&define.amd?define(["TweenLite"],e):"undefined"!=typeof module&&module.exports&&(require("./TweenLite.js"),module.exports=e())}();

})();
