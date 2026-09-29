/* ==========================================================================
   Tibisay ERP · Tour guiado de primer uso (sin dependencias)
   Tour.init({ id, titulo, intro, pasos: [{ sel, titulo, texto, lista, antes }] })
   - Se muestra solo la primera vez (localStorage) o al llamar Tour.start().
   - "antes" es un selector que se clickea antes del paso (p. ej. una pestaña).
   ========================================================================== */
(function () {
  var cfg, i = 0, mask, spot, pop;

  function key() { return "tibisay_tour_" + cfg.id; }
  function seen() { try { return localStorage.getItem(key()) === "1"; } catch (e) { return false; } }
  function mark() { try { localStorage.setItem(key(), "1"); } catch (e) {} }

  function welcome() {
    var w = document.createElement("div");
    w.className = "tour-welcome";
    w.innerHTML =
      '<div class="card"><span class="kpi-ico">' + App.icon(cfg.icono || "star") + "</span>" +
      "<h2>" + cfg.titulo + "</h2><p class=\"muted\" style=\"margin-top:6px\">" + cfg.intro + "</p>" +
      "<ol>" + cfg.pasos.map(function (p) { return "<li><b>" + p.titulo + "</b></li>"; }).join("") + "</ol>" +
      '<div class="row" style="justify-content:center"><button class="btn btn-ghost" data-t="skip">Ahora no</button>' +
      '<button class="btn btn-primary" data-t="go">Empezar recorrido (' + cfg.pasos.length + " pasos)</button></div></div>";
    document.body.appendChild(w);
    w.addEventListener("click", function (e) {
      var b = e.target.closest("[data-t]");
      if (!b) return;
      w.remove();
      if (b.dataset.t === "go") start(); else { mark(); App.toast("Puedes ver el recorrido cuando quieras con el botón «Cómo usar este módulo»"); }
    });
  }

  function start() {
    i = 0;
    mask = document.createElement("div"); mask.className = "tour-mask";
    spot = document.createElement("div"); spot.className = "tour-spot";
    pop = document.createElement("div"); pop.className = "tour-pop";
    document.body.append(mask, spot, pop);
    pop.addEventListener("click", function (e) {
      var b = e.target.closest("[data-t]");
      if (!b) return;
      if (b.dataset.t === "next") go(i + 1);
      if (b.dataset.t === "prev") go(i - 1);
      if (b.dataset.t === "end") end();
    });
    document.addEventListener("keydown", keys);
    window.addEventListener("resize", place);
    go(0);
  }

  function keys(e) {
    if (e.key === "Escape") end();
    if (e.key === "ArrowRight") go(i + 1);
    if (e.key === "ArrowLeft") go(i - 1);
  }

  function go(n) {
    if (n < 0) return;
    if (n >= cfg.pasos.length) { end(true); return; }
    i = n;
    var p = cfg.pasos[i];
    if (p.antes) { var a = document.querySelector(p.antes); if (a) a.click(); }
    var el = document.querySelector(p.sel);
    if (el) {
      var h = el.getBoundingClientRect().height;
      if (h > window.innerHeight * 0.6) window.scrollTo({ top: Math.max(0, el.getBoundingClientRect().top + window.scrollY - 80), behavior: "smooth" });
      else el.scrollIntoView({ block: "center", behavior: "smooth" });
    }
    var last = i === cfg.pasos.length - 1;
    pop.innerHTML =
      '<div class="tour-step">Paso ' + (i + 1) + " de " + cfg.pasos.length + "</div>" +
      "<h3>" + p.titulo + "</h3><p>" + p.texto + "</p>" +
      (p.lista ? "<ul>" + p.lista.map(function (x) { return "<li>" + x + "</li>"; }).join("") + "</ul>" : "") +
      '<div class="between"><div class="tour-dots">' + cfg.pasos.map(function (_, k) { return "<i" + (k === i ? ' class="on"' : "") + "></i>"; }).join("") + "</div>" +
      '<div class="row"><button class="btn btn-ghost btn-sm" data-t="end">Salir</button>' +
      (i ? '<button class="btn btn-ghost btn-sm" data-t="prev">Atrás</button>' : "") +
      '<button class="btn btn-primary btn-sm" data-t="next">' + (last ? "Terminar" : "Siguiente") + "</button></div></div>";
    setTimeout(place, 320);
    place();
  }

  function place() {
    if (!pop) return;
    var el = document.querySelector(cfg.pasos[i].sel);
    var W = window.innerWidth, H = window.innerHeight, pw = Math.min(340, W - 32), ph = pop.offsetHeight;
    if (!el) { spot.style.cssText = "top:50%;left:50%;width:0;height:0"; pop.style.top = (H - ph) / 2 + "px"; pop.style.left = (W - pw) / 2 + "px"; return; }
    var r = el.getBoundingClientRect(), pad = 6;
    var top = Math.max(4, r.top - pad), h = Math.min(r.height + pad * 2, H - top - 4);
    spot.style.cssText = "top:" + top + "px;left:" + (r.left - pad) + "px;width:" + (r.width + pad * 2) + "px;height:" + h + "px";
    var y = r.bottom + 14, x = Math.min(Math.max(16, r.left), W - pw - 16);
    if (y + ph > H - 8) y = r.top - ph - 14;
    if (y < 8) {
      // No cabe arriba ni abajo: al costado del elemento, o en la esquina inferior
      y = Math.min(Math.max(top + 12, 8), H - ph - 16);
      if (r.left - pw - 20 > 0) x = r.left - pw - 20;
      else if (r.right + pw + 20 < W) x = r.right + 20;
      else { x = W - pw - 24; y = H - ph - 24; }
    }
    pop.style.top = y + "px";
    pop.style.left = x + "px";
  }

  function end(done) {
    mark();
    [mask, spot, pop].forEach(function (n) { n && n.remove(); });
    mask = spot = pop = null;
    document.removeEventListener("keydown", keys);
    window.removeEventListener("resize", place);
    if (cfg.fin && cfg.fin.sel) { var a = document.querySelector(cfg.fin.sel); if (a) a.click(); }
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (done) App.toast("¡Listo! Ya conoces el módulo. Repite el recorrido cuando quieras.");
  }

  window.Tour = {
    init: function (c) {
      cfg = c;
      document.querySelectorAll("[data-tour-start]").forEach(function (b) {
        b.addEventListener("click", function (e) { e.preventDefault(); start(); });
      });
      if (!seen()) setTimeout(welcome, 500);
    },
    start: function () { start(); }
  };
})();
