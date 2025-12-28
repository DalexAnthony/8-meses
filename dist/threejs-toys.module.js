import { EventDispatcher as $e, Vector3 as q, MOUSE as B, TOUCH as K, Quaternion as Ee, Spherical as Ce, Vector2 as M, WebGLRenderer as Qe, PerspectiveCamera as Me, Scene as De, SplineCurve as Je, Color as Q, OrthographicCamera as et, PlaneGeometry as ee, ShaderMaterial as te, Mesh as se, Camera as tt, WebGLRenderTarget as nt, RGBAFormat as Ne, DataTexture as ot, FloatType as Ae, NearestFilter as ne, ClampToEdgeWrapping as Re, HalfFloatType as Ie, BufferGeometry as it, BufferAttribute as le, AdditiveBlending as at, Points as rt, MathUtils as _e, CanvasTexture as st, PointLight as lt, DirectionalLight as ct, AmbientLight as ut, InstancedBufferAttribute as ke, DoubleSide as dt, TextureLoader as vt, MeshBasicMaterial as mt, MeshPhongMaterial as ft, MeshStandardMaterial as pt, InstancedMesh as ht } from "./three.module.js"; const Oe = { type: "change" }, ce = { type: "start" }, Le = { type: "end" }; class xt extends $e { constructor(t, o) { super(); o === void 0 && console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'), o === document && console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'), this.object = t, this.domElement = o, this.domElement.style.touchAction = "none", this.enabled = !0, this.target = new q, this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = !1, this.dampingFactor = .05, this.enableZoom = !0, this.zoomSpeed = 1, this.enableRotate = !0, this.rotateSpeed = 1, this.enablePan = !0, this.panSpeed = 1, this.screenSpacePanning = !0, this.keyPanSpeed = 7, this.autoRotate = !1, this.autoRotateSpeed = 2, this.keys = { LEFT: "ArrowLeft", UP: "ArrowUp", RIGHT: "ArrowRight", BOTTOM: "ArrowDown" }, this.mouseButtons = { LEFT: B.ROTATE, MIDDLE: B.DOLLY, RIGHT: B.PAN }, this.touches = { ONE: K.ROTATE, TWO: K.DOLLY_PAN }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this._domElementKeyEvents = null, this.getPolarAngle = function () { return l.phi }, this.getAzimuthalAngle = function () { return l.theta }, this.getDistance = function () { return this.object.position.distanceTo(this.target) }, this.listenToKeyEvents = function (n) { n.addEventListener("keydown", Se), this._domElementKeyEvents = n }, this.saveState = function () { e.target0.copy(e.target), e.position0.copy(e.object.position), e.zoom0 = e.object.zoom }, this.reset = function () { e.target.copy(e.target0), e.object.position.copy(e.position0), e.object.zoom = e.zoom0, e.object.updateProjectionMatrix(), e.dispatchEvent(Oe), e.update(), c = i.NONE }, this.update = function () { const n = new q, m = new Ee().setFromUnitVectors(t.up, new q(0, 1, 0)), O = m.clone().invert(), V = new q, G = new Ee, Z = 2 * Math.PI; return function () { const ze = e.object.position; n.copy(ze).sub(e.target), n.applyQuaternion(m), l.setFromVector3(n), e.autoRotate && c === i.NONE && L(W()), e.enableDamping ? (l.theta += d.theta * e.dampingFactor, l.phi += d.phi * e.dampingFactor) : (l.theta += d.theta, l.phi += d.phi); let Y = e.minAzimuthAngle, X = e.maxAzimuthAngle; return isFinite(Y) && isFinite(X) && (Y < -Math.PI ? Y += Z : Y > Math.PI && (Y -= Z), X < -Math.PI ? X += Z : X > Math.PI && (X -= Z), Y <= X ? l.theta = Math.max(Y, Math.min(X, l.theta)) : l.theta = l.theta > (Y + X) / 2 ? Math.max(Y, l.theta) : Math.min(X, l.theta)), l.phi = Math.max(e.minPolarAngle, Math.min(e.maxPolarAngle, l.phi)), l.makeSafe(), l.radius *= v, l.radius = Math.max(e.minDistance, Math.min(e.maxDistance, l.radius)), e.enableDamping === !0 ? e.target.addScaledVector(s, e.dampingFactor) : e.target.add(s), n.setFromSpherical(l), n.applyQuaternion(O), ze.copy(e.target).add(n), e.object.lookAt(e.target), e.enableDamping === !0 ? (d.theta *= 1 - e.dampingFactor, d.phi *= 1 - e.dampingFactor, s.multiplyScalar(1 - e.dampingFactor)) : (d.set(0, 0, 0), s.set(0, 0, 0)), v = 1, p || V.distanceToSquared(e.object.position) > w || 8 * (1 - G.dot(e.object.quaternion)) > w ? (e.dispatchEvent(Oe), V.copy(e.object.position), G.copy(e.object.quaternion), p = !1, !0) : !1 } }(), this.dispose = function () { e.domElement.removeEventListener("contextmenu", be), e.domElement.removeEventListener("pointerdown", ge), e.domElement.removeEventListener("pointercancel", ye), e.domElement.removeEventListener("wheel", we), e.domElement.removeEventListener("pointermove", ie), e.domElement.removeEventListener("pointerup", ae), e._domElementKeyEvents !== null && e._domElementKeyEvents.removeEventListener("keydown", Se) }; const e = this, i = { NONE: -1, ROTATE: 0, DOLLY: 1, PAN: 2, TOUCH_ROTATE: 3, TOUCH_PAN: 4, TOUCH_DOLLY_PAN: 5, TOUCH_DOLLY_ROTATE: 6 }; let c = i.NONE; const w = 1e-6, l = new Ce, d = new Ce; let v = 1; const s = new q; let p = !1; const g = new M, P = new M, r = new M, a = new M, x = new M, S = new M, f = new M, b = new M, C = new M, u = [], _ = {}; function W() { return 2 * Math.PI / 60 / 60 * e.autoRotateSpeed } function z() { return Math.pow(.95, e.zoomSpeed) } function L(n) { d.theta -= n } function E(n) { d.phi -= n } const F = function () { const n = new q; return function (O, V) { n.setFromMatrixColumn(V, 0), n.multiplyScalar(-O), s.add(n) } }(), N = function () { const n = new q; return function (O, V) { e.screenSpacePanning === !0 ? n.setFromMatrixColumn(V, 1) : (n.setFromMatrixColumn(V, 0), n.crossVectors(e.object.up, n)), n.multiplyScalar(O), s.add(n) } }(), R = function () { const n = new q; return function (O, V) { const G = e.domElement; if (e.object.isPerspectiveCamera) { const Z = e.object.position; n.copy(Z).sub(e.target); let J = n.length(); J *= Math.tan(e.object.fov / 2 * Math.PI / 180), F(2 * O * J / G.clientHeight, e.object.matrix), N(2 * V * J / G.clientHeight, e.object.matrix) } else e.object.isOrthographicCamera ? (F(O * (e.object.right - e.object.left) / e.object.zoom / G.clientWidth, e.object.matrix), N(V * (e.object.top - e.object.bottom) / e.object.zoom / G.clientHeight, e.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), e.enablePan = !1) } }(); function I(n) { e.object.isPerspectiveCamera ? v /= n : e.object.isOrthographicCamera ? (e.object.zoom = Math.max(e.minZoom, Math.min(e.maxZoom, e.object.zoom * n)), e.object.updateProjectionMatrix(), p = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), e.enableZoom = !1) } function h(n) { e.object.isPerspectiveCamera ? v *= n : e.object.isOrthographicCamera ? (e.object.zoom = Math.max(e.minZoom, Math.min(e.maxZoom, e.object.zoom / n)), e.object.updateProjectionMatrix(), p = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), e.enableZoom = !1) } function D(n) { g.set(n.clientX, n.clientY) } function A(n) { f.set(n.clientX, n.clientY) } function j(n) { a.set(n.clientX, n.clientY) } function U(n) { P.set(n.clientX, n.clientY), r.subVectors(P, g).multiplyScalar(e.rotateSpeed); const m = e.domElement; L(2 * Math.PI * r.x / m.clientHeight), E(2 * Math.PI * r.y / m.clientHeight), g.copy(P), e.update() } function H(n) { b.set(n.clientX, n.clientY), C.subVectors(b, f), C.y > 0 ? I(z()) : C.y < 0 && h(z()), f.copy(b), e.update() } function T(n) { x.set(n.clientX, n.clientY), S.subVectors(x, a).multiplyScalar(e.panSpeed), R(S.x, S.y), a.copy(x), e.update() } function k(n) { n.deltaY < 0 ? h(z()) : n.deltaY > 0 && I(z()), e.update() } function We(n) { let m = !1; switch (n.code) { case e.keys.UP: R(0, e.keyPanSpeed), m = !0; break; case e.keys.BOTTOM: R(0, -e.keyPanSpeed), m = !0; break; case e.keys.LEFT: R(e.keyPanSpeed, 0), m = !0; break; case e.keys.RIGHT: R(-e.keyPanSpeed, 0), m = !0; break }m && (n.preventDefault(), e.update()) } function ve() { if (u.length === 1) g.set(u[0].pageX, u[0].pageY); else { const n = .5 * (u[0].pageX + u[1].pageX), m = .5 * (u[0].pageY + u[1].pageY); g.set(n, m) } } function me() { if (u.length === 1) a.set(u[0].pageX, u[0].pageY); else { const n = .5 * (u[0].pageX + u[1].pageX), m = .5 * (u[0].pageY + u[1].pageY); a.set(n, m) } } function fe() { const n = u[0].pageX - u[1].pageX, m = u[0].pageY - u[1].pageY, O = Math.sqrt(n * n + m * m); f.set(0, O) } function je() { e.enableZoom && fe(), e.enablePan && me() } function He() { e.enableZoom && fe(), e.enableRotate && ve() } function pe(n) { if (u.length == 1) P.set(n.pageX, n.pageY); else { const O = re(n), V = .5 * (n.pageX + O.x), G = .5 * (n.pageY + O.y); P.set(V, G) } r.subVectors(P, g).multiplyScalar(e.rotateSpeed); const m = e.domElement; L(2 * Math.PI * r.x / m.clientHeight), E(2 * Math.PI * r.y / m.clientHeight), g.copy(P) } function he(n) { if (u.length === 1) x.set(n.pageX, n.pageY); else { const m = re(n), O = .5 * (n.pageX + m.x), V = .5 * (n.pageY + m.y); x.set(O, V) } S.subVectors(x, a).multiplyScalar(e.panSpeed), R(S.x, S.y), a.copy(x) } function xe(n) { const m = re(n), O = n.pageX - m.x, V = n.pageY - m.y, G = Math.sqrt(O * O + V * V); b.set(0, G), C.set(0, Math.pow(b.y / f.y, e.zoomSpeed)), I(C.y), f.copy(b) } function Ge(n) { e.enableZoom && xe(n), e.enablePan && he(n) } function qe(n) { e.enableZoom && xe(n), e.enableRotate && pe(n) } function ge(n) { e.enabled !== !1 && (u.length === 0 && (e.domElement.setPointerCapture(n.pointerId), e.domElement.addEventListener("pointermove", ie), e.domElement.addEventListener("pointerup", ae)), Ke(n), n.pointerType === "touch" ? Ze(n) : Ye(n)) } function ie(n) { e.enabled !== !1 && (n.pointerType === "touch" ? Be(n) : Xe(n)) } function ae(n) { Te(n), u.length === 0 && (e.domElement.releasePointerCapture(n.pointerId), e.domElement.removeEventListener("pointermove", ie), e.domElement.removeEventListener("pointerup", ae)), e.dispatchEvent(Le), c = i.NONE } function ye(n) { Te(n) } function Ye(n) { let m; switch (n.button) { case 0: m = e.mouseButtons.LEFT; break; case 1: m = e.mouseButtons.MIDDLE; break; case 2: m = e.mouseButtons.RIGHT; break; default: m = -1 }switch (m) { case B.DOLLY: if (e.enableZoom === !1) return; A(n), c = i.DOLLY; break; case B.ROTATE: if (n.ctrlKey || n.metaKey || n.shiftKey) { if (e.enablePan === !1) return; j(n), c = i.PAN } else { if (e.enableRotate === !1) return; D(n), c = i.ROTATE } break; case B.PAN: if (n.ctrlKey || n.metaKey || n.shiftKey) { if (e.enableRotate === !1) return; D(n), c = i.ROTATE } else { if (e.enablePan === !1) return; j(n), c = i.PAN } break; default: c = i.NONE }c !== i.NONE && e.dispatchEvent(ce) } function Xe(n) { if (e.enabled !== !1) switch (c) { case i.ROTATE: if (e.enableRotate === !1) return; U(n); break; case i.DOLLY: if (e.enableZoom === !1) return; H(n); break; case i.PAN: if (e.enablePan === !1) return; T(n); break } } function we(n) { e.enabled === !1 || e.enableZoom === !1 || c !== i.NONE || (n.preventDefault(), e.dispatchEvent(ce), k(n), e.dispatchEvent(Le)) } function Se(n) { e.enabled === !1 || e.enablePan === !1 || We(n) } function Ze(n) { switch (Pe(n), u.length) { case 1: switch (e.touches.ONE) { case K.ROTATE: if (e.enableRotate === !1) return; ve(), c = i.TOUCH_ROTATE; break; case K.PAN: if (e.enablePan === !1) return; me(), c = i.TOUCH_PAN; break; default: c = i.NONE }break; case 2: switch (e.touches.TWO) { case K.DOLLY_PAN: if (e.enableZoom === !1 && e.enablePan === !1) return; je(), c = i.TOUCH_DOLLY_PAN; break; case K.DOLLY_ROTATE: if (e.enableZoom === !1 && e.enableRotate === !1) return; He(), c = i.TOUCH_DOLLY_ROTATE; break; default: c = i.NONE }break; default: c = i.NONE }c !== i.NONE && e.dispatchEvent(ce) } function Be(n) { switch (Pe(n), c) { case i.TOUCH_ROTATE: if (e.enableRotate === !1) return; pe(n), e.update(); break; case i.TOUCH_PAN: if (e.enablePan === !1) return; he(n), e.update(); break; case i.TOUCH_DOLLY_PAN: if (e.enableZoom === !1 && e.enablePan === !1) return; Ge(n), e.update(); break; case i.TOUCH_DOLLY_ROTATE: if (e.enableZoom === !1 && e.enableRotate === !1) return; qe(n), e.update(); break; default: c = i.NONE } } function be(n) { e.enabled !== !1 && n.preventDefault() } function Ke(n) { u.push(n) } function Te(n) { delete _[n.pointerId]; for (let m = 0; m < u.length; m++)if (u[m].pointerId == n.pointerId) { u.splice(m, 1); return } } function Pe(n) { let m = _[n.pointerId]; m === void 0 && (m = new M, _[n.pointerId] = m), m.set(n.pageX, n.pageY) } function re(n) { const m = n.pointerId === u[0].pointerId ? u[1] : u[0]; return _[m.pointerId] } e.domElement.addEventListener("contextmenu", be), e.domElement.addEventListener("pointerdown", ge), e.domElement.addEventListener("pointercancel", ye), e.domElement.addEventListener("wheel", we, { passive: !1 }), this.update() } } function gt(y) { const { domElement: t, onClick: o = () => { }, onEnter: e = () => { }, onMove: i = () => { }, onLeave: c = () => { }, onDragStart: w = () => { }, onDragMove: l = () => { }, onDragStop: d = () => { } } = y, v = new M, s = new M, p = new M, g = new M, P = new M, r = { position: v, nPosition: s, hover: !1, down: !1, removeListeners: W }; return _(), r; function a(z) { p.distanceTo(v) < 20 && (u(z), o({ position: v, nPosition: s })) } function x(z) { r.hover = z.pointerType === "mouse", u(z), e({ position: v, nPosition: s }) } function S(z) { r.down = !0, u(z), p.copy(v), g.copy(v), w({ position: v, nPosition: s }) } function f(z) { u(z), P.copy(v).sub(g), r.down ? l({ position: v, nPosition: s, startPosition: p, lastPosition: g, delta: P }) : r.hover || (r.hover = !0), i({ position: v, nPosition: s, startPosition: p, lastPosition: g, delta: P }), g.copy(v) } function b(z) { r.down = !1, d() } function C(z) { r.down && (r.down = !1, d()), r.hover = !1, c() } function u(z) { const L = t.getBoundingClientRect(); v.x = z.clientX - L.left, v.y = z.clientY - L.top, s.x = v.x / L.width * 2 - 1, s.y = -(v.y / L.height) * 2 + 1 } function _() { t.addEventListener("click", a), t.addEventListener("pointerenter", x), t.addEventListener("pointerdown", S), t.addEventListener("pointermove", f), t.addEventListener("pointerup", b), t.addEventListener("pointerleave", C) } function W() { t.removeEventListener("click", a), t.removeEventListener("pointerenter", x), t.removeEventListener("pointerdown", S), t.removeEventListener("pointermove", f), t.removeEventListener("pointerup", b), t.removeEventListener("pointerleave", C) } } function oe(y) { const t = { el: null, canvas: null, eventsEl: null, width: null, height: null, resize: !0, alpha: !1, antialias: !1, orbitControls: !1, init() { }, initCamera() { }, initScene() { }, afterResize() { }, beforeRender() { }, ...y }, o = { renderer: null, camera: null, scene: null, pointer: null, width: 0, height: 0, wWidth: 0, wHeight: 0, clock: { startTime: 0, time: 0, elapsed: 0 }, options: t }; let e, i; return c(), o; function c() { var s, p, g, P, r; let a; if (t.el) a = document.createElement("canvas"), t.el.appendChild(a); else if (t.canvas) a = t.canvas; else throw new Error("Missing parameter : el or canvas is required"); (s = t.init) == null || s.call(t, o), o.renderer = new Qe({ canvas: a, alpha: t.alpha, antialias: t.antialias }), (p = t.initRenderer) == null || p.call(t, o), o.camera = new Me, o.camera.position.z = 50, (g = t.initCamera) == null || g.call(t, o), t.orbitControls && (i = new xt(o.camera, (P = t.eventsEl) != null ? P : o.renderer.domElement), i.enableDamping = !0, i.dampingFactor = .1, typeof t.orbitControls == "object" && Object.keys(t.orbitControls).forEach(x => { i[x] = t.orbitControls[x] })), d(), t.resize && !t.width && !t.height && window.addEventListener("resize", d), o.scene = new De, (r = t.initScene) == null || r.call(t, o), w(), e = t.render ? t.render : () => { o.renderer.render(o.scene, o.camera) }, requestAnimationFrame(x => { o.clock.startTime = o.clock.time = x, requestAnimationFrame(l) }) } function w() { var s, p; const g = {}; t.onPointerEnter && (g.onEnter = t.onPointerEnter), t.onPointerMove && (g.onMove = t.onPointerMove), t.onPointerMove && (g.onLeave = t.onPointerLeave), Object.keys(g).length > 0 && (o.pointer = gt({ domElement: (p = t.eventsEl) != null ? p : (s = t.el) != null ? s : t.canvas, ...g })) } function l(s) { const { clock: p } = o; p.elapsed = s - p.time, p.time = s, t.beforeRender(o), i && i.update(), e(o), requestAnimationFrame(l) } function d() { var s; if (t.width && t.height) o.width = t.width, o.height = t.height; else if (t.resize === "window") o.width = window.innerWidth, o.height = window.innerHeight; else { const p = o.renderer.domElement.parentElement; o.width = p.clientWidth, o.height = p.clientHeight } if (o.renderer.setSize(o.width, o.height), o.camera.aspect = o.width / o.height, o.camera.updateProjectionMatrix(), o.camera instanceof Me) { const p = v(); o.wWidth = p[0], o.wHeight = p[1] } else o.wWidth = o.camera.top - o.camera.bottom, o.wHeight = o.camera.right - o.camera.left; (s = t.afterResize) == null || s.call(t, o) } function v() { const s = o.camera.fov * Math.PI / 180, p = 2 * Math.tan(s / 2) * Math.abs(o.camera.position.z); return [p * o.camera.aspect, p] } } function yt(y) { const t = {}; return ["el", "canvas", "eventsEl", "width", "height", "resize", "orbitControls"].forEach(o => { y[o] !== void 0 && (t[o] = y[o]) }), t } const wt = { shaderPoints: 8, curvePoints: 80, curveLerp: .75, radius1: 3, radius2: 5, velocityTreshold: 10, sleepRadiusX: 150, sleepRadiusY: 150, sleepTimeCoefX: .0025, sleepTimeCoefY: .0025 }; function St(y) {
  const t = { ...wt, ...y }, o = new Array(t.curvePoints).fill(0).map(() => new M), e = new Je(o), i = new q, c = new q, w = { value: new M }, l = { value: new M }, d = { value: new Array(t.shaderPoints).fill(0).map(() => new M) }, v = { value: new Q(16711935) }; let s, p, g = !1; const P = {}; return ["el", "canvas", "width", "height", "resize"].forEach(r => { y[r] !== void 0 && (P[r] = y[r]) }), oe({
    ...P, antialias: !1, initCamera(r) { r.camera = new et }, initScene({ scene: r }) {
      const a = new ee(2, 2); s = new te({
        uniforms: { uRatio: w, uSize: l, uPoints: d, uColor: v }, defines: { SHADER_POINTS: t.shaderPoints }, vertexShader: `
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = vec4(position, 1.0);
          }
        `, fragmentShader: `
          // https://www.shadertoy.com/view/wdy3DD
          // https://www.shadertoy.com/view/MlKcDD
          // Signed distance to a quadratic bezier
          float sdBezier(vec2 pos, vec2 A, vec2 B, vec2 C) {
            vec2 a = B - A;
            vec2 b = A - 2.0*B + C;
            vec2 c = a * 2.0;
            vec2 d = A - pos;
            float kk = 1.0 / dot(b,b);
            float kx = kk * dot(a,b);
            float ky = kk * (2.0*dot(a,a)+dot(d,b)) / 3.0;
            float kz = kk * dot(d,a);
            float res = 0.0;
            float p = ky - kx*kx;
            float p3 = p*p*p;
            float q = kx*(2.0*kx*kx - 3.0*ky) + kz;
            float h = q*q + 4.0*p3;
            if(h >= 0.0){
              h = sqrt(h);
              vec2 x = (vec2(h, -h) - q) / 2.0;
              vec2 uv = sign(x)*pow(abs(x), vec2(1.0/3.0));
              float t = uv.x + uv.y - kx;
              t = clamp( t, 0.0, 1.0 );
              // 1 root
              vec2 qos = d + (c + b*t)*t;
              res = length(qos);
            } else {
              float z = sqrt(-p);
              float v = acos( q/(p*z*2.0) ) / 3.0;
              float m = cos(v);
              float n = sin(v)*1.732050808;
              vec3 t = vec3(m + m, -n - m, n - m) * z - kx;
              t = clamp( t, 0.0, 1.0 );
              // 3 roots
              vec2 qos = d + (c + b*t.x)*t.x;
              float dis = dot(qos,qos);
              res = dis;
              qos = d + (c + b*t.y)*t.y;
              dis = dot(qos,qos);
              res = min(res,dis);
              qos = d + (c + b*t.z)*t.z;
              dis = dot(qos,qos);
              res = min(res,dis);
              res = sqrt( res );
            }
            return res;
          }

          uniform vec2 uRatio;
          uniform vec2 uSize;
          uniform vec2 uPoints[SHADER_POINTS];
          uniform vec3 uColor;
          varying vec2 vUv;
          void main() {
            float intensity = 1.0;
            float radius = 0.015;

            vec2 pos = (vUv - 0.5) * uRatio;

            vec2 c = (uPoints[0] + uPoints[1]) / 2.0;
            vec2 c_prev;
            float dist = 10000.0;
            for(int i = 0; i < SHADER_POINTS - 1; i++){
              c_prev = c;
              c = (uPoints[i] + uPoints[i + 1]) / 2.0;
              dist = min(dist, sdBezier(pos, c_prev, uPoints[i], c));
            }
            dist = max(0.0, dist);

            float glow = pow(uSize.y / dist, intensity);
            vec3 col = vec3(0.0);
            col += 10.0 * vec3(smoothstep(uSize.x, 0.0, dist));
            col += glow * uColor;

            // Tone mapping
            col = 1.0 - exp(-col);
            col = pow(col, vec3(0.4545));
  
            gl_FragColor = vec4(col, 1.0);
          }
        `}), p = new se(a, s), r.add(p)
    }, afterResize({ width: r, height: a }) { l.value.set(t.radius1, t.radius2), r >= a ? (w.value.set(1, a / r), l.value.multiplyScalar(1 / r)) : (w.value.set(r / a, 1), l.value.multiplyScalar(1 / a)) }, beforeRender({ clock: r, width: a, height: x, wWidth: S }) { for (let f = 1; f < t.curvePoints; f++)o[f].lerp(o[f - 1], t.curveLerp); for (let f = 0; f < t.shaderPoints; f++)e.getPoint(f / (t.shaderPoints - 1), d.value[f]); if (g) v.value.r = i.z, v.value.g = 0, v.value.b = 1 - i.z, i.multiplyScalar(.95); else { const f = r.time * t.sleepTimeCoefX, b = r.time * t.sleepTimeCoefY, C = Math.cos(f), u = Math.sin(b), _ = t.sleepRadiusX * S / a, W = t.sleepRadiusY * S / a, z = _ * C, L = W * u; e.points[0].set(z, L), v.value.r = .5 + .5 * Math.cos(r.time * .0015), v.value.g = 0, v.value.b = 1 - v.value.r } }, onPointerMove({ nPosition: r, delta: a }) { g = !0; const x = .5 * r.x * w.value.x, S = .5 * r.y * w.value.y; e.points[0].set(x, S), c.x = Math.min(i.x + Math.abs(a.x) / t.velocityTreshold, 1), c.y = Math.min(i.y + Math.abs(a.y) / t.velocityTreshold, 1), c.z = Math.sqrt(c.x * c.x + c.y * c.y), i.lerp(c, .05) }, onPointerLeave() { g = !1 }
  }), { config: t }
} class Fe {
  constructor(t, o, e) {
    this.variables = [], this.currentTextureIndex = 0; let i = Ae; const c = new De, w = new tt; w.position.z = 1; const l = { passThruTexture: { value: null } }, d = p(P(), l), v = new se(new ee(2, 2), d); c.add(v), this.setDataType = function (r) { return i = r, this }, this.addVariable = function (r, a, x) { const S = this.createShaderMaterial(a), f = { name: r, initialValueTexture: x, material: S, dependencies: null, renderTargets: [], wrapS: null, wrapT: null, minFilter: ne, magFilter: ne }; return this.variables.push(f), f }, this.setVariableDependencies = function (r, a) { r.dependencies = a }, this.init = function () {
      if (e.capabilities.isWebGL2 === !1 && e.extensions.has("OES_texture_float") === !1) return "No OES_texture_float support for float textures."; if (e.capabilities.maxVertexTextures === 0) return "No support for vertex shader textures."; for (let r = 0; r < this.variables.length; r++) {
        const a = this.variables[r]; a.renderTargets[0] = this.createRenderTarget(t, o, a.wrapS, a.wrapT, a.minFilter, a.magFilter), a.renderTargets[1] = this.createRenderTarget(t, o, a.wrapS, a.wrapT, a.minFilter, a.magFilter), this.renderTexture(a.initialValueTexture, a.renderTargets[0]), this.renderTexture(a.initialValueTexture, a.renderTargets[1]); const x = a.material, S = x.uniforms; if (a.dependencies !== null) for (let f = 0; f < a.dependencies.length; f++) {
          const b = a.dependencies[f]; if (b.name !== a.name) { let C = !1; for (let u = 0; u < this.variables.length; u++)if (b.name === this.variables[u].name) { C = !0; break } if (!C) return "Variable dependency not found. Variable=" + a.name + ", dependency=" + b.name } S[b.name] = { value: null }, x.fragmentShader = `
uniform sampler2D `+ b.name + `;
`+ x.fragmentShader
        }
      } return this.currentTextureIndex = 0, null
    }, this.compute = function () { const r = this.currentTextureIndex, a = this.currentTextureIndex === 0 ? 1 : 0; for (let x = 0, S = this.variables.length; x < S; x++) { const f = this.variables[x]; if (f.dependencies !== null) { const b = f.material.uniforms; for (let C = 0, u = f.dependencies.length; C < u; C++) { const _ = f.dependencies[C]; b[_.name].value = _.renderTargets[r].texture } } this.doRenderTarget(f.material, f.renderTargets[a]) } this.currentTextureIndex = a }, this.getCurrentRenderTarget = function (r) { return r.renderTargets[this.currentTextureIndex] }, this.getAlternateRenderTarget = function (r) { return r.renderTargets[this.currentTextureIndex === 0 ? 1 : 0] }; function s(r) { r.defines.resolution = "vec2( " + t.toFixed(1) + ", " + o.toFixed(1) + " )" } this.addResolutionDefine = s; function p(r, a) { a = a || {}; const x = new te({ uniforms: a, vertexShader: g(), fragmentShader: r }); return s(x), x } this.createShaderMaterial = p, this.createRenderTarget = function (r, a, x, S, f, b) { return r = r || t, a = a || o, x = x || Re, S = S || Re, f = f || ne, b = b || ne, new nt(r, a, { wrapS: x, wrapT: S, minFilter: f, magFilter: b, format: Ne, type: i, depthBuffer: !1 }) }, this.createTexture = function () { const r = new Float32Array(t * o * 4), a = new ot(r, t, o, Ne, Ae); return a.needsUpdate = !0, a }, this.renderTexture = function (r, a) { l.passThruTexture.value = r, this.doRenderTarget(d, a), l.passThruTexture.value = null }, this.doRenderTarget = function (r, a) { const x = e.getRenderTarget(); v.material = r, e.setRenderTarget(a), e.render(c, w), v.material = d, e.setRenderTarget(x) }; function g() {
      return `void main()	{

	gl_Position = vec4( position, 1.0 );

}
`} function P() {
      return `uniform sampler2D passThruTexture;

void main() {

	vec2 uv = gl_FragCoord.xy / resolution.xy;

	gl_FragColor = texture2D( passThruTexture, uv );

}
`}
  }
} function ue(y) { let t = []; e(y); const o = new Q; return { setColors: e, getColorAt: i }; function e(c) { t = [], c.forEach(w => { t.push(new Q(w)) }) } function i(c) { const w = Math.max(0, Math.min(1, c)) * (y.length - 1), l = Math.floor(w), d = t[l]; if (l === y.length - 1) return d.getHex(); const v = w - l, s = t[l + 1]; return o.r = d.r + v * (s.r - d.r), o.g = d.g + v * (s.g - d.g), o.b = d.b + v * (s.b - d.b), o.clone() } } var de = `vec4 permute(vec4 x){vec4 xm=mod(x,289.0);return mod(((xm*34.0)+10.0)*xm,289.0);}float psrdnoise(vec3 x,vec3 period,float alpha,out vec3 gradient){
#ifndef PERLINGRID
const mat3 M=mat3(0.0,1.0,1.0,1.0,0.0,1.0,1.0,1.0,0.0);const mat3 Mi=mat3(-0.5,0.5,0.5,0.5,-0.5,0.5,0.5,0.5,-0.5);
#endif
vec3 uvw;
#ifndef PERLINGRID
uvw=M*x;
#else
uvw=x+dot(x,vec3(1.0/3.0));
#endif
vec3 i0=floor(uvw);vec3 f0=fract(uvw);vec3 g_=step(f0.xyx,f0.yzz);vec3 l_=1.0-g_;vec3 g=vec3(l_.z,g_.xy);vec3 l=vec3(l_.xy,g_.z);vec3 o1=min(g,l);vec3 o2=max(g,l);vec3 i1=i0+o1;vec3 i2=i0+o2;vec3 i3=i0+vec3(1.0);vec3 v0,v1,v2,v3;
#ifndef PERLINGRID
v0=Mi*i0;v1=Mi*i1;v2=Mi*i2;v3=Mi*i3;
#else
v0=i0-dot(i0,vec3(1.0/6.0));v1=i1-dot(i1,vec3(1.0/6.0));v2=i2-dot(i2,vec3(1.0/6.0));v3=i3-dot(i3,vec3(1.0/6.0));
#endif
vec3 x0=x-v0;vec3 x1=x-v1;vec3 x2=x-v2;vec3 x3=x-v3;if(any(greaterThan(period,vec3(0.0)))){vec4 vx=vec4(v0.x,v1.x,v2.x,v3.x);vec4 vy=vec4(v0.y,v1.y,v2.y,v3.y);vec4 vz=vec4(v0.z,v1.z,v2.z,v3.z);if(period.x>0.0)vx=mod(vx,period.x);if(period.y>0.0)vy=mod(vy,period.y);if(period.z>0.0)vz=mod(vz,period.z);
#ifndef PERLINGRID
i0=M*vec3(vx.x,vy.x,vz.x);i1=M*vec3(vx.y,vy.y,vz.y);i2=M*vec3(vx.z,vy.z,vz.z);i3=M*vec3(vx.w,vy.w,vz.w);
#else
v0=vec3(vx.x,vy.x,vz.x);v1=vec3(vx.y,vy.y,vz.y);v2=vec3(vx.z,vy.z,vz.z);v3=vec3(vx.w,vy.w,vz.w);i0=v0+dot(v0,vec3(1.0/3.0));i1=v1+dot(v1,vec3(1.0/3.0));i2=v2+dot(v2,vec3(1.0/3.0));i3=v3+dot(v3,vec3(1.0/3.0));
#endif
i0=floor(i0+0.5);i1=floor(i1+0.5);i2=floor(i2+0.5);i3=floor(i3+0.5);}vec4 hash=permute(permute(permute(vec4(i0.z,i1.z,i2.z,i3.z))+vec4(i0.y,i1.y,i2.y,i3.y))+vec4(i0.x,i1.x,i2.x,i3.x));vec4 theta=hash*3.883222077;vec4 sz=hash*-0.006920415+0.996539792;vec4 psi=hash*0.108705628;vec4 Ct=cos(theta);vec4 St=sin(theta);vec4 sz_prime=sqrt(1.0-sz*sz);vec4 gx,gy,gz;
#ifdef FASTROTATION
vec4 qx=St;vec4 qy=-Ct;vec4 qz=vec4(0.0);vec4 px=sz*qy;vec4 py=-sz*qx;vec4 pz=sz_prime;psi+=alpha;vec4 Sa=sin(psi);vec4 Ca=cos(psi);gx=Ca*px+Sa*qx;gy=Ca*py+Sa*qy;gz=Ca*pz+Sa*qz;
#else
if(alpha!=0.0){vec4 Sp=sin(psi);vec4 Cp=cos(psi);vec4 px=Ct*sz_prime;vec4 py=St*sz_prime;vec4 pz=sz;vec4 Ctp=St*Sp-Ct*Cp;vec4 qx=mix(Ctp*St,Sp,sz);vec4 qy=mix(-Ctp*Ct,Cp,sz);vec4 qz=-(py*Cp+px*Sp);vec4 Sa=vec4(sin(alpha));vec4 Ca=vec4(cos(alpha));gx=Ca*px+Sa*qx;gy=Ca*py+Sa*qy;gz=Ca*pz+Sa*qz;}else{gx=Ct*sz_prime;gy=St*sz_prime;gz=sz;}
#endif
vec3 g0=vec3(gx.x,gy.x,gz.x);vec3 g1=vec3(gx.y,gy.y,gz.y);vec3 g2=vec3(gx.z,gy.z,gz.z);vec3 g3=vec3(gx.w,gy.w,gz.w);vec4 w=0.5-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3));w=max(w,0.0);vec4 w2=w*w;vec4 w3=w2*w;vec4 gdotx=vec4(dot(g0,x0),dot(g1,x1),dot(g2,x2),dot(g3,x3));float n=dot(w3,gdotx);vec4 dw=-6.0*w2*gdotx;vec3 dn0=w3.x*g0+dw.x*x0;vec3 dn1=w3.y*g1+dw.y*x1;vec3 dn2=w3.z*g2+dw.z*x2;vec3 dn3=w3.w*g3+dw.w*x3;gradient=39.5*(dn0+dn1+dn2+dn3);return 39.5*n;}`; const { randFloat: Ve, randFloatSpread: Ue } = _e, bt = { gpgpuSize: 256, colors: [65280, 255], color: 16711680, coordScale: 1.5, noiseIntensity: .001, noiseTimeCoef: 1e-4, pointSize: 5, pointDecay: .005, sleepRadiusX: 250, sleepRadiusY: 250, sleepTimeCoefX: .001, sleepTimeCoefY: .002 }; function Tt(y) {
  const t = { ...bt, ...y }, o = t.gpgpuSize, e = o * o; let i, c, w, l, d; const v = { value: 0 }, s = { value: t.coordScale }, p = { value: t.noiseIntensity }, g = { value: t.pointSize }, P = { value: t.pointDecay }, r = { value: new Q(t.color) }, a = { value: new M }, x = { value: new M }, S = { uTime: v, uCoordScale: s, uNoiseIntensity: p, uPointSize: g, uPointDecay: P, uColor: r, uMouse: a, uMouseDirection: x }; let f, b, C, u = !1; const _ = new M; return oe({ ...Pt(y), antialias: !1, initRenderer({ renderer: E }) { W(E) }, initScene({ scene: E }) { z(), E.add(C) }, beforeRender({ width: E, wWidth: F, wHeight: N, clock: R, pointer: I }) { if (u) _.x = I.nPosition.x * .5 * F, _.y = I.nPosition.y * .5 * N; else { const h = R.time * t.sleepTimeCoefX, D = R.time * t.sleepTimeCoefY, A = Math.cos(h), j = Math.sin(D), U = t.sleepRadiusX * F / E, H = t.sleepRadiusY * F / E; _.x = U * A, _.y = H * j } a.value.lerp(_, .05), v.value = R.time * t.noiseTimeCoef, i.compute(), b.uniforms.texturePosition.value = i.getCurrentRenderTarget(d).texture, b.uniforms.textureVelocity.value = i.getCurrentRenderTarget(l).texture }, onPointerMove({ delta: E }) { u = !0, x.value.copy(E) }, onPointerLeave() { u = !1 } }), { config: t, uniforms: S }; function W(E) {
    i = new Fe(o, o, E), E.capabilities.isWebGL2 || i.setDataType(Ie), c = i.createTexture(), w = i.createTexture(), L(c, w), l = i.addVariable("textureVelocity", `
      ${de}
      uniform float uTime;
      uniform float uCoordScale;
      uniform float uNoiseIntensity;
      void main() {
        vec2 uv = gl_FragCoord.xy / resolution.xy;
        vec4 pos = texture2D(texturePosition, uv);
        vec4 vel = texture2D(textureVelocity, uv);

        if (pos.w < 0.0) {
          vel.x = 0.0;
          vel.y = 0.0;
          vel.z = 0.0;
        } else {
          vec3 grad;
          vec3 p = vec3(0.0);
          float n = psrdnoise(pos.xyz * uCoordScale, p, uTime, grad);
          vel.xyz += grad * uNoiseIntensity * pos.w;
        }
        gl_FragColor = vel;
      }
    `, w), d = i.addVariable("texturePosition", `
      uniform float uPointDecay;
      uniform vec2 uMouse;
      uniform vec2 uMouseDirection;
      void main() {
        vec2 uv = gl_FragCoord.xy / resolution.xy;
        vec4 pos = texture2D(texturePosition, uv);
        vec4 vel = texture2D(textureVelocity, uv);
        if (pos.w < 0.0) { pos.w = vel.w; }
        pos.w -= uPointDecay;
        if (pos.w <= 0.0) {
          pos.xy = uMouse.xy;
          pos.z = 0.0;
        } else {
          pos.xyz += vel.xyz;
        }
        gl_FragColor = pos;
      }
    `, c), i.setVariableDependencies(l, [d, l]), i.setVariableDependencies(d, [d, l]), Object.keys(S).forEach(N => { l.material.uniforms[N] = S[N], d.material.uniforms[N] = S[N] }); const F = i.init(); F !== null && console.error(F)
  } function z() {
    f = new it; const E = new Float32Array(e * 3), F = new Float32Array(e * 2), N = new Float32Array(e * 3); for (let h = 0; h < e * 3; h += 3)E[h] = 0, E[h + 1] = 0, E[h + 2] = 0; let R = 0; for (let h = 0; h < o; h++)for (let D = 0; D < o; D++)F[R++] = D / (o - 1), F[R++] = h / (o - 1); const I = ue(t.colors); for (let h = 0; h < e * 3; h += 3) { const D = I.getColorAt(Math.random()); N[h] = D.r, N[h + 1] = D.g, N[h + 2] = D.b } f.setAttribute("position", new le(E, 3)), f.setAttribute("uv", new le(F, 2)), f.setAttribute("color", new le(N, 3)), b = new te({
      blending: at, depthTest: !1, transparent: !0, vertexColors: !0, uniforms: { texturePosition: { value: null }, textureVelocity: { value: null }, uPointSize: g, uColor: r }, vertexShader: `
        uniform sampler2D texturePosition;
        uniform sampler2D textureVelocity;
        uniform float uPointSize;
        varying vec4 vPos;
        varying vec4 vVel;
        varying vec3 vCol;
        void main() {
          vCol = color;
          vPos = texture2D(texturePosition, uv);
          vVel = texture2D(textureVelocity, uv);
          vec4 mvPosition = modelViewMatrix * vec4(vPos.xyz, 1.0);
          // gl_PointSize = smoothstep(0.0, 2.0, vPos.w) * uPointSize;
          gl_PointSize = vPos.w * (vVel.w + 0.5) * uPointSize;
          gl_Position = projectionMatrix * mvPosition;
        }
      `, fragmentShader: `
        uniform vec3 uColor;
        varying vec4 vPos;
        varying vec4 vVel;
        varying vec3 vCol;
        void main() {
          float dist = length(gl_PointCoord - 0.5);
          if (dist > 0.5) discard;
          // float a = smoothstep(0.0, 1.0, vPos.w);
          gl_FragColor = vec4(mix(vCol, uColor, vPos.w), vPos.w);
        }
      `}), C = new rt(f, b), C.matrixAutoUpdate = !1, C.updateMatrix()
  } function L(E, F) { const N = E.image.data, R = F.image.data; for (let I = 0, h = N.length; I < h; I += 4)N[I + 0] = Ue(1), N[I + 1] = Ue(1), N[I + 2] = -1e5, N[I + 3] = Ve(.1, 1), R[I + 0] = 0, R[I + 1] = 0, R[I + 2] = 0, R[I + 3] = Ve(.1, 1) }
} function Pt(y) { const t = {}; return ["el", "canvas", "width", "height", "resize"].forEach(o => { y[o] !== void 0 && (t[o] = y[o]) }), t } const zt = { width: 256, height: 256 }; function Et(y) { const t = { ...zt, ...y }, o = document.createElement("canvas"); o.width = t.width, o.height = t.height; const e = o.getContext("2d"), i = new st(e.canvas); return { canvas: o, ctx: e, texture: i } } var Ct = "float psrdnoise(vec2 x,vec2 period,float alpha,out vec2 gradient){vec2 uv=vec2(x.x+x.y*0.5,x.y);vec2 i0=floor(uv);vec2 f0=fract(uv);float cmp=step(f0.y,f0.x);vec2 o1=vec2(cmp,1.0-cmp);vec2 i1=i0+o1;vec2 i2=i0+vec2(1.0,1.0);vec2 v0=vec2(i0.x-i0.y*0.5,i0.y);vec2 v1=vec2(v0.x+o1.x-o1.y*0.5,v0.y+o1.y);vec2 v2=vec2(v0.x+0.5,v0.y+1.0);vec2 x0=x-v0;vec2 x1=x-v1;vec2 x2=x-v2;vec3 iu,iv;vec3 xw,yw;if(any(greaterThan(period,vec2(0.0)))){xw=vec3(v0.x,v1.x,v2.x);yw=vec3(v0.y,v1.y,v2.y);if(period.x>0.0)xw=mod(vec3(v0.x,v1.x,v2.x),period.x);if(period.y>0.0)yw=mod(vec3(v0.y,v1.y,v2.y),period.y);iu=floor(xw+0.5*yw+0.5);iv=floor(yw+0.5);}else{iu=vec3(i0.x,i1.x,i2.x);iv=vec3(i0.y,i1.y,i2.y);}vec3 hash=mod(iu,289.0);hash=mod((hash*51.0+2.0)*hash+iv,289.0);hash=mod((hash*34.0+10.0)*hash,289.0);vec3 psi=hash*0.07482+alpha;vec3 gx=cos(psi);vec3 gy=sin(psi);vec2 g0=vec2(gx.x,gy.x);vec2 g1=vec2(gx.y,gy.y);vec2 g2=vec2(gx.z,gy.z);vec3 w=0.8-vec3(dot(x0,x0),dot(x1,x1),dot(x2,x2));w=max(w,0.0);vec3 w2=w*w;vec3 w4=w2*w2;vec3 gdotx=vec3(dot(g0,x0),dot(g1,x1),dot(g2,x2));float n=dot(w4,gdotx);vec3 w3=w2*w;vec3 dw=-8.0*w3*gdotx;vec2 dn0=w4.x*g0+dw.x*x0;vec2 dn1=w4.y*g1+dw.y*x1;vec2 dn2=w4.z*g2+dw.z*x2;gradient=10.9*(dn0+dn1+dn2);return 10.9*n;}"; const Mt = { colors: [16777215, 0], minStroke: 5, maxStroke: 5, timeCoef: 5e-4, coordScale: 2, displacementScale: .002, mouseScale: .25, mouseLerp: .025 }; function Dt(y) {
  const t = { ...Mt, ...y }, o = Et({ width: 1, height: 4096 }); v(); const e = { uMap: { value: o.texture }, uTime: { value: 0 }, uCoordScale: { value: t.coordScale }, uDisplacementScale: { value: t.displacementScale }, uMouse: { value: new M } }, i = new ee, c = new te({
    uniforms: e, vertexShader: `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `, fragmentShader: `
      uniform sampler2D uMap;
      uniform float uTime;
      uniform float uCoordScale;
      uniform float uDisplacementScale;
      uniform vec2 uMouse;
      varying vec2 vUv;
      ${Ct}
      void main() {
        vec2 p = vec2(0.0);
        vec2 grad;
        float n = psrdnoise(vUv * uCoordScale + uMouse, p, uTime, grad);
        // grad *= uCoordScale;
        vec2 uv = vUv + uDisplacementScale * grad;
        gl_FragColor = texture2D(uMap, uv.yx);
      }
    `}), w = new se(i, c), l = new M, d = {}; return ["el", "canvas", "width", "height", "resize"].forEach(s => { y[s] !== void 0 && (d[s] = y[s]) }), oe({ ...d, antialias: !0, initScene({ camera: s, scene: p, wWidth: g, wHeight: P }) { w.scale.set(g * 2, P * 2, 1), p.add(w), s.position.set(0, -30, 7), s.lookAt(0, -19, 0) }, beforeRender({ clock: s }) { e.uTime.value = s.time * t.timeCoef, e.uMouse.value.lerp(l, t.mouseLerp) }, onPointerMove({ nPosition: s }) { l.set(-s.x, s.y).multiplyScalar(t.mouseScale) }, onPointerLeave() { l.set(0, 0) } }), { config: t, uniforms: e, drawTexture: v }; function v() { const s = o.ctx; s.lineWidth = 0; const { width: p, height: g } = o.canvas, P = ue(t.colors); let r = 0, a; for (; r < g;)a = t.minStroke + Math.random() * (t.maxStroke - t.minStroke), s.fillStyle = P.getColorAt(Math.random()).getStyle(), s.beginPath(), s.rect(0, r - 1, p, a + 1), s.fill(), s.closePath(), r += a; o.texture.needsUpdate = !0 }
} const { randFloat: Nt, randFloatSpread: $ } = _e, At = { gpgpuSize: 64, background: 16777215, material: "basic", materialParams: {}, texture: null, textureCount: 1, colors: [16777215, 16777215], lights: [{ type: "ambient", color: 16777215, intensity: .5 }, { type: "directional", position: [0, 10, 0], color: 16777215, intensity: 1 }], wingsScale: [1, 1, 1], wingsWidthSegments: 8, wingsHeightSegments: 8, wingsSpeed: .75, wingsDisplacementScale: 1.25, noiseCoordScale: .01, noiseTimeCoef: 5e-4, noiseIntensity: .0025, attractionRadius1: 100, attractionRadius2: 150, maxVelocity: .1 }; function Rt(y) {
  const t = { ...At, ...y }; if (!["basic", "phong", "standard"].includes(t.material)) throw new Error(`Invalid material ${t.material}`); if (!Number.isInteger(t.wingsWidthSegments) || t.wingsWidthSegments % 2 !== 0) throw new Error(`Invalid wingsWidthSegments ${t.wingsWidthSegments}`); const o = t.gpgpuSize, e = o * o; let i, c, w, l, d; const v = { value: null }, s = { value: null }, p = { value: null }, g = { value: 0 }, P = { value: t.noiseCoordScale }, r = { value: t.noiseIntensity }, a = { value: t.maxVelocity }, x = { value: t.attractionRadius1 }, S = { value: t.attractionRadius2 }, f = { value: new q(...t.wingsScale) }, b = { value: t.wingsSpeed }, C = { value: t.wingsDisplacementScale }, u = { uTexturePosition: v, uOldTexturePosition: s, uTextureVelocity: p }, _ = { uTime: g, uNoiseCoordScale: P, uNoiseIntensity: r, uMaxVelocity: a, uAttractionRadius1: x, uAttractionRadius2: S, uWingsScale: f, uWingsSpeed: b, uWingsDisplacementScale: C }, W = { ...u, ..._ }; let z, L, E; return { three: oe({ ...yt(y), antialias: !0, orbitControls: !0, initRenderer({ renderer: h }) { F(h) }, initCamera({ camera: h }) { h.position.set(0, 50, 70) }, initScene({ scene: h }) { N(h) }, beforeRender({ clock: h }) { g.value = h.time * t.noiseTimeCoef, i.compute(), v.value = d.renderTargets[i.currentTextureIndex].texture, s.value = d.renderTargets[i.currentTextureIndex === 0 ? 1 : 0].texture, p.value = l.renderTargets[i.currentTextureIndex].texture } }), config: t, uniforms: W, setColors: R }; function F(h) {
    i = new Fe(o, o, h), h.capabilities.isWebGL2 || i.setDataType(Ie), c = i.createTexture(), w = i.createTexture(), I(c, w), l = i.addVariable("textureVelocity", `
      ${de}
      uniform float uTime;
      uniform float uNoiseCoordScale;
      uniform float uNoiseIntensity;
      uniform float uMaxVelocity;
      uniform float uAttractionRadius1;
      uniform float uAttractionRadius2;
      uniform float uWingsSpeed;
      void main() {
        vec2 uv = gl_FragCoord.xy / resolution.xy;
        vec4 pos = texture2D(texturePosition, uv);
        vec4 vel = texture2D(textureVelocity, uv);

        vec3 grad;
        float n = psrdnoise(pos.xyz * uNoiseCoordScale, vec3(0), uTime, grad);
        grad = grad * uNoiseIntensity;
        vel.xyz = vel.xyz + (pos.w * 0.75) * grad;

        vec3 dv = -pos.xyz;
        float coef = smoothstep(uAttractionRadius1, uAttractionRadius2, length(dv));
        vel.xyz = vel.xyz + pos.w * coef * normalize(dv);
        vel.xyz = clamp(vel.xyz, -uMaxVelocity, uMaxVelocity);

        vel.w = mod(vel.w + length(vel.xyz) * (0.5 + pos.w) * uWingsSpeed, 6.2831853071);
        gl_FragColor = vel;
      }
    `, w), d = i.addVariable("texturePosition", `
      ${de}
      uniform float uTime;
      void main() {
        vec2 uv = gl_FragCoord.xy / resolution.xy;
        vec4 pos = texture2D(texturePosition, uv);
        vec4 vel = texture2D(textureVelocity, uv);
        pos.xyz += vel.xyz;
        gl_FragColor = pos;
      }
    `, c), i.setVariableDependencies(l, [d, l]), i.setVariableDependencies(d, [d, l]), Object.keys(_).forEach(A => { l.material.uniforms[A] = W[A], d.material.uniforms[A] = W[A] }); const D = i.init(); if (D !== null) throw new Error(D)
  } function N(h) {
    if (t.background !== void 0 && (h.background = new Q(t.background)), Array.isArray(t.lights) && t.lights.length > 0) { let T; t.lights.forEach(k => { switch (k.type) { case "ambient": T = new ut(k.color, k.intensity); break; case "directional": T = new ct(k.color, k.intensity); break; case "point": T = new lt(k.color, k.intensity); break; default: console.error(`Unknown light type ${k.type}`) }T && (k.position && T.position.set(...k.position), h.add(T)) }) } z = new ee(2, 2, t.wingsWidthSegments, t.wingsHeightSegments).rotateX(Math.PI / 2); const D = new Float32Array(e * 2), A = new Float32Array(e); let j = 0, U = 0; for (let T = 0; T < o; T++)for (let k = 0; k < o; k++)D[j++] = k / (o - 1), D[j++] = T / (o - 1), A[U++] = Math.floor(Math.random() * t.textureCount); z.setAttribute("gpuUv", new ke(D, 2)), z.setAttribute("mapIndex", new ke(A, 1)); const H = { side: dt, ...t.materialParams }; switch (t.texture && (H.map = new vt().load(t.texture)), H.onBeforeCompile = T => {
      T.defines = { COMPUTE_NORMALS: t.material !== "basic", WINGS_WIDTH_SEGMENTS: t.wingsWidthSegments, WINGS_HEIGHT_SEGMENTS: t.wingsHeightSegments, WINGS_DX: (2 / t.wingsWidthSegments).toFixed(10), WINGS_DZ: (2 / t.wingsHeightSegments).toFixed(10), TEXTURE_COUNT: t.textureCount.toFixed(10) }, Object.keys(W).forEach(k => { T.uniforms[k] = W[k] }), T.vertexShader = `
        uniform sampler2D uTexturePosition;
        uniform sampler2D uOldTexturePosition;
        uniform sampler2D uTextureVelocity;
        uniform vec3 uWingsScale;
        uniform float uWingsDisplacementScale;
        attribute vec2 gpuUv;
        attribute float mapIndex;
        varying vec4 vPos;
        varying vec4 vVel;
        varying float vMapIndex;

        mat3 lookAt(vec3 origin, vec3 target, vec3 up) {
          vec3 z = target - origin;
          if (z.x * z.x + z.y * z.y + z.z * z.z == 0.0) { z.z = 1.0; }
          z = normalize(z);
          vec3 x = cross(up, z);
          if (x.x * x.x + x.y * x.y + x.z * x.z == 0.0) {
            if (abs(up.z) == 1.0) { z.x += 0.0001; }
            else { z.z += 0.0001; }
            x = cross(up, z);
          }
          x = normalize(x);
          vec3 y = cross(z, x);
          return mat3(x, y, z);
        }

        mat4 iMatrix(vec3 pos, mat3 rmat, vec3 scale) {
          return mat4(
            rmat[0][0] * scale.x, rmat[0][1] * scale.x, rmat[0][2] * scale.x, 0.0,
            rmat[1][0] * scale.y, rmat[1][1] * scale.y, rmat[1][2] * scale.y, 0.0,
            rmat[2][0] * scale.z, rmat[2][1] * scale.z, rmat[2][2] * scale.z, 0.0,
            pos.x, pos.y, pos.z, 1.0
          );
        }
      `+ T.vertexShader, T.vertexShader = T.vertexShader.replace("#include <defaultnormal_vertex>", ""), T.vertexShader = T.vertexShader.replace("#include <normal_vertex>", ""), T.vertexShader = T.vertexShader.replace("#include <begin_vertex>", `
        vPos = texture2D(uTexturePosition, gpuUv);
        vec4 oldPos = texture2D(uOldTexturePosition, gpuUv);
        vVel = texture2D(uTextureVelocity, gpuUv);
        vMapIndex = float(mapIndex);

        mat3 rmat = lookAt(oldPos.xyz, vPos.xyz, vec3(0, 1, 0));
        mat4 im = iMatrix(vPos.xyz, rmat, (0.5 + vPos.w) * uWingsScale);

        vec3 transformed = vec3(position);

        #ifdef COMPUTE_NORMALS
          vec3 transformedNormal = objectNormal; 
        #endif

        float dx = abs(transformed.x);
        if (dx > 0.0) {
          float sdx = smoothstep(0.0, 1.0 + WINGS_DX, dx);
          #if WINGS_HEIGHT_SEGMENTS > 1
            float dz = transformed.z + 1.0;
            float sdz = smoothstep(0.0, 2.0 + WINGS_DZ, dz);
            transformed.y = sin(vVel.w - sdx + sdz) * sdx * uWingsDisplacementScale;
          #else
            transformed.y = sin(vVel.w - sdx) * sdx * uWingsDisplacementScale;
          #endif

          #ifdef COMPUTE_NORMALS
            #if WINGS_HEIGHT_SEGMENTS > 1
              float s = sign(transformed.x);
              float sdx1 = smoothstep(0.0, 1.0 + WINGS_DX, dx + WINGS_DX);
              float sdz1 = smoothstep(0.0, 2.0 + WINGS_DZ, dz + WINGS_DZ);
              float dvy1 = sin(vVel.w - sdx + sdz1) * sdx * uWingsDisplacementScale - transformed.y;
              float dvy2 = sin(vVel.w - sdx1 + sdz) * sdx1 * uWingsDisplacementScale - transformed.y;
              vec3 v1 = vec3(0.0, dvy1, s * WINGS_DZ);
              vec3 v2 = vec3(s * WINGS_DX, dvy2, 0.0);
              transformedNormal = -normalize(cross(v1, v2));
            #else
              float s = sign(transformed.x);
              float sdx1 = smoothstep(0.0, 1.0 + WINGS_DX, dx + WINGS_DX);
              float dvy1 = sin(vVel.w - sdx1) * sdx * uWingsDisplacementScale - transformed.y;
              vec3 v1 = vec3(0.0, 0.0, s);
              vec3 v2 = vec3(s * WINGS_DX, dvy1, 0.0);
              transformedNormal = -normalize(cross(v1, v2));
            #endif  
          #endif
        }

        #ifdef COMPUTE_NORMALS
          #ifdef USE_INSTANCING
            mat3 m = mat3( im );
            transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
            transformedNormal = m * transformedNormal;
          #endif
          transformedNormal = normalMatrix * transformedNormal;
          #ifdef FLIP_SIDED
            transformedNormal = - transformedNormal;
          #endif
          #ifdef USE_TANGENT
            vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
            #ifdef FLIP_SIDED
              transformedTangent = - transformedTangent;
            #endif
          #endif
          #ifndef FLAT_SHADED
            vNormal = normalize( transformedNormal );
            #ifdef USE_TANGENT
              vTangent = normalize( transformedTangent );
              vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
            #endif
          #endif
        #endif
      `), T.vertexShader = T.vertexShader.replace("#include <project_vertex>", `
        vec4 mvPosition = vec4( transformed, 1.0 );
        #ifdef USE_INSTANCING
          mvPosition = im * mvPosition;
        #endif
        mvPosition = modelViewMatrix * mvPosition;
        gl_Position = projectionMatrix * mvPosition;
      `), T.fragmentShader = `
        varying float vMapIndex;
      `+ T.fragmentShader, T.fragmentShader = T.fragmentShader.replace("#include <map_fragment>", `
        #ifdef USE_MAP
          vec2 uv = vUv;
          uv.x = (vMapIndex + vUv.x) / TEXTURE_COUNT;
          vec4 sampledDiffuseColor = texture2D(map, uv);
          diffuseColor *= sampledDiffuseColor;
        #endif
      `)
    }, t.material) { case "standard": L = new pt(H); break; case "phong": L = new ft(H); break; default: L = new mt(H) }E = new ht(z, L, e), R(t.colors), h.add(E)
  } function R(h) { if (Array.isArray(h) && h.length > 1) { for (let A = 0; A < e; A++) { const colorHex = h[Math.floor(Math.random() * h.length)]; E.setColorAt(A, new Q(colorHex)); } E.instanceColor.needsUpdate = !0 } } function I(h, D) { const A = h.image.data, j = D.image.data; for (let U = 0, H = A.length; U < H; U += 4)A[U + 0] = $(150), A[U + 1] = $(150), A[U + 2] = $(150), A[U + 3] = Nt(.1, 1), j[U + 0] = $(.5), j[U + 1] = $(.5), j[U + 2] = $(.5), j[U + 3] = 0 }
} export { Rt as butterfliesBackground, St as neonCursor, Dt as noisyLinesBackground, Tt as particlesCursor };
//# sourceMappingURL=threejs-toys.module.cdn.min.js.map
