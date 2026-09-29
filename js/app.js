/* ==========================================================================
   Tibisay ERP · AppShell, sesión mock y utilidades (sin dependencias)
   ========================================================================== */
(function () {
  var KEY = "tibisay_session";
  var D = window.TIBISAY;

  /* ------------------------------------------------------------ Íconos */
  var P = {
    home: '<path d="m3 10 9-7 9 7v10a2 2 0 0 1-2 2h-4v-7H9v7H5a2 2 0 0 1-2-2z"/>',
    chart: '<path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/>',
    users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
    bed: '<path d="M2 4v16"/><path d="M2 8h18a2 2 0 0 1 2 2v10"/><path d="M2 17h20"/><path d="M6 8v9"/>',
    briefcase: '<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',
    box: '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><path d="M3.3 7 12 12l8.7-5"/><path d="M12 22V12"/>',
    plug: '<path d="M12 22v-5"/><path d="M9 8V2"/><path d="M15 8V2"/><path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z"/>',
    server: '<rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><path d="M6 6h.01"/><path d="M6 18h.01"/>',
    search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
    bell: '<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>',
    logout: '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="m16 17 5-5-5-5"/><path d="M21 12H9"/>',
    panel: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18"/><path d="m16 15-3-3 3-3"/>',
    menu: '<path d="M4 6h16"/><path d="M4 12h16"/><path d="M4 18h16"/>',
    building: '<rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01M12 6h.01M16 6h.01M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01"/>',
    dollar: '<path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>',
    percent: '<path d="M19 5 5 19"/><circle cx="6.5" cy="6.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/>',
    utensils: '<path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/>',
    trend: '<path d="m22 7-8.5 8.5-5-5L2 17"/><path d="M16 7h6v6"/>',
    alert: '<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/>',
    check: '<path d="M20 6 9 17l-5-5"/>',
    wrench: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>',
    calendar: '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4"/><path d="M8 2v4"/><path d="M3 10h18"/>',
    chat: '<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>',
    star: '<path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z"/>',
    truck: '<path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.62l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/>',
    cart: '<circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>',
    shield: '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>',
    cloud: '<path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>',
    wifi: '<path d="M12 20h.01"/><path d="M2 8.82a15 15 0 0 1 20 0"/><path d="M5 12.86a10 10 0 0 1 14 0"/><path d="M8.5 16.43a5 5 0 0 1 7 0"/>',
    camera: '<path d="m16.24 7.76-1.8 5.4-5.4 1.8 1.8-5.4z"/><circle cx="12" cy="12" r="10"/>',
    database: '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14a9 3 0 0 0 18 0V5"/><path d="M3 12a9 3 0 0 0 18 0"/>',
    mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
    code: '<path d="m16 18 6-6-6-6"/><path d="m8 6-6 6 6 6"/>',
    archive: '<rect x="2" y="3" width="20" height="5" rx="1"/><path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"/><path d="M10 12h4"/>',
    refresh: '<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/>',
    plus: '<path d="M5 12h14"/><path d="M12 5v14"/>',
    download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/><path d="M12 15V3"/>',
    eye: '<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>',
    clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
    key: '<circle cx="7.5" cy="15.5" r="5.5"/><path d="m21 2-9.6 9.6"/><path d="m15.5 7.5 3 3L22 7l-3-3"/>'
  };
  function icon(name, cls) {
    return '<svg class="ico ' + (cls || "") + '" viewBox="0 0 24 24" aria-hidden="true">' + (P[name] || "") + "</svg>";
  }

  // Emblema Tibisay (monograma T + olas)
  function logo() {
    return '<svg viewBox="0 0 96 96" aria-label="Hoteles Tibisay">' +
      '<circle cx="48" cy="48" r="46" fill="#1c2e2e"/>' +
      '<circle cx="48" cy="48" r="40" fill="none" stroke="#c99d6b" stroke-width="1.5"/>' +
      '<path d="M30 28h36v6H51v26h-6V34H30z" fill="#c99d6b"/>' +
      '<path d="M26 67c4-3 8-3 11 0s8 3 11 0 8-3 11 0 8 3 11 0" fill="none" stroke="#c99d6b" stroke-width="2.4" stroke-linecap="round"/>' +
      '<path d="M32 74c3-2 6-2 8 0s6 2 8 0 6-2 8 0 6 2 8 0" fill="none" stroke="#c99d6b" stroke-width="1.6" stroke-linecap="round" opacity=".6"/>' +
      "</svg>";
  }

  /* ------------------------------------------------------------ Sesión */
  function getSession() {
    try { return JSON.parse(localStorage.getItem(KEY)) || null; } catch (e) { return null; }
  }
  function setSession(s) {
    try { localStorage.setItem(KEY, JSON.stringify(s)); } catch (e) { /* modo privado */ }
    window.__session = s;
  }
  function session() { return window.__session || getSession(); }
  function initials(name) {
    return (name || "?").split(/\s+/).filter(Boolean).slice(0, 2).map(function (w) { return w[0]; }).join("").toUpperCase();
  }

  /* ------------------------------------------------------------ Menú */
  var MODULOS = [
    { href: "dashboard.html", label: "Inicio", icon: "home" },
    { sep: "Módulos" },
    { href: "tablero.html", label: "Tablero directivo", icon: "chart" },
    { href: "crm.html", label: "CRM & Huéspedes", icon: "users", count: 27 },
    { href: "operaciones.html", label: "Operaciones", icon: "bed", count: 9 },
    { href: "rrhh.html", label: "Gestión Humana", icon: "briefcase" },
    { href: "inventarios.html", label: "IMS · Inventarios", icon: "box", count: 3 },
    { href: "integracion.html", label: "Integración", icon: "plug" },
    { href: "servicios.html", label: "Servicios", icon: "server" }
  ];

  function buildShell() {
    var s = session();
    var page = location.pathname.split("/").pop() || "dashboard.html";

    var nav = MODULOS.map(function (m) {
      if (m.sep) return '<div class="sb-label">' + m.sep + "</div>";
      return '<a class="sb-link' + (m.href === page ? " active" : "") + '" href="' + m.href + '" title="' + m.label + '">' +
        icon(m.icon) + '<span class="sb-text">' + m.label + "</span>" +
        (m.count ? '<span class="sb-count">' + m.count + "</span>" : "") + "</a>";
    }).join("");

    var aside = document.createElement("aside");
    aside.className = "sidebar";
    aside.innerHTML =
      '<div class="sb-brand">' + logo() + '<div class="sb-text"><b>TIBISAY</b><small>Sistema de Gestión Hotelera</small></div></div>' +
      '<nav class="sb-nav">' + nav + "</nav>" +
      '<div class="sb-foot"><button class="sb-link sb-collapse" type="button" title="Plegar menú">' + icon("panel") + '<span class="sb-text">Plegar menú</span></button></div>';
    document.body.prepend(aside);

    var back = document.createElement("div");
    back.className = "backdrop";
    document.body.appendChild(back);

    var opts = '<option value="todas">Todas las propiedades</option>' + D.propiedades.map(function (p) {
      return '<option value="' + p.id + '">Hotel Tibisay ' + p.nombre + "</option>";
    }).join("");

    var top = document.createElement("header");
    top.className = "topbar";
    top.innerHTML =
      '<button class="icon-btn menu-btn" type="button" aria-label="Abrir menú">' + icon("menu") + "</button>" +
      '<div class="search">' + icon("search") + '<input class="input" id="globalSearch" type="search" placeholder="Buscar huésped, reserva, habitación, OC…"><kbd>/</kbd></div>' +
      '<div class="top-right">' +
        '<div class="prop-select">' + icon("building") + '<select class="select" id="propSelect" aria-label="Propiedad">' + opts + "</select></div>" +
        '<button class="icon-btn" type="button" data-toast="3 notificaciones nuevas: 2 alertas A&B, 1 ticket urgente" aria-label="Notificaciones">' + icon("bell") + '<span class="dot-notif"></span></button>' +
        '<div class="user-chip" id="userChip"><div class="avatar">' + initials(s.usuario) + '</div>' +
          '<div class="who"><b>' + s.usuario + "</b><small>" + (s.rol || "Gerencia General") + "</small></div>" +
          '<div class="menu" id="userMenu"><a href="dashboard.html">' + icon("home") + "Mi inicio</a>" +
          '<a href="#" data-toast="Perfil de usuario (demo)">' + icon("users") + "Mi perfil</a>" +
          '<a href="#" id="logout">' + icon("logout") + "Cerrar sesión</a></div>" +
        "</div>" +
      "</div>";
    document.querySelector(".main-wrap").prepend(top);

    // Plegar / desplegar sidebar
    try { if (localStorage.getItem("tibisay_sb_min") === "1") document.body.classList.add("sb-min"); } catch (e) {}
    aside.querySelector(".sb-collapse").addEventListener("click", function () {
      var min = document.body.classList.toggle("sb-min");
      try { localStorage.setItem("tibisay_sb_min", min ? "1" : "0"); } catch (e) {}
    });
    top.querySelector(".menu-btn").addEventListener("click", function () { document.body.classList.add("sb-open"); });
    back.addEventListener("click", function () { document.body.classList.remove("sb-open"); });

    // Menú de usuario
    var chip = document.getElementById("userChip");
    var menu = document.getElementById("userMenu");
    chip.addEventListener("click", function (e) { e.stopPropagation(); menu.classList.toggle("open"); });
    document.addEventListener("click", function () { menu.classList.remove("open"); });
    document.getElementById("logout").addEventListener("click", function (e) {
      e.preventDefault();
      try { localStorage.removeItem(KEY); } catch (err) {}
      location.href = "index.html";
    });

    // Selector de propiedad
    var sel = document.getElementById("propSelect");
    sel.value = s.propiedad || "todas";
    sel.addEventListener("change", function () {
      s.propiedad = sel.value;
      setSession(s);
      applyProp();
      toast("Viendo: " + D.sedeNombre(sel.value));
    });

    // Buscador: filtra filas de tablas marcadas con data-searchable
    var gs = document.getElementById("globalSearch");
    gs.addEventListener("input", function () { filterTables(gs.value); });
    document.addEventListener("keydown", function (e) {
      if (e.key === "/" && document.activeElement.tagName !== "INPUT") { e.preventDefault(); gs.focus(); }
    });
  }

  /* ------------------------------------------------------------ Propiedad activa */
  var listeners = [];
  function prop() { var s = session(); return (s && s.propiedad) || "todas"; }
  function onProp(fn) { listeners.push(fn); fn(prop()); }
  function applyProp() {
    var p = prop();
    document.querySelectorAll("[data-sede]").forEach(function (el) {
      var v = el.getAttribute("data-sede");
      el.style.display = p === "todas" || v === p || v === "todas" ? "" : "none";
    });
    document.querySelectorAll("[data-prop-name]").forEach(function (el) { el.textContent = D.sedeNombre(p); });
    document.querySelectorAll("[data-prop-hotel]").forEach(function (el) {
      el.textContent = p === "todas" ? "Margarita" : D.sedeNombre(p);
    });
    listeners.forEach(function (fn) { fn(p); });
  }

  function filterTables(q) {
    q = (q || "").toLowerCase().trim();
    document.querySelectorAll("[data-searchable] tbody tr").forEach(function (tr) {
      tr.hidden = !!q && tr.textContent.toLowerCase().indexOf(q) === -1;
    });
  }

  /* ------------------------------------------------------------ UI */
  function toast(msg) {
    var t = document.querySelector(".toast");
    if (!t) { t = document.createElement("div"); t.className = "toast"; document.body.appendChild(t); }
    t.innerHTML = icon("check") + "<span>" + msg + "</span>";
    t.classList.add("show");
    clearTimeout(t._h);
    t._h = setTimeout(function () { t.classList.remove("show"); }, 2600);
  }

  function initUI() {
    document.querySelectorAll("[data-tabs]").forEach(function (box) {
      var tabs = box.querySelectorAll(":scope > .tabs .tab");
      tabs.forEach(function (tab) {
        tab.addEventListener("click", function () {
          tabs.forEach(function (t) { t.classList.toggle("active", t === tab); });
          box.querySelectorAll(":scope > .tab-panel, :scope > * > .tab-panel").forEach(function (p) {
            p.classList.toggle("active", p.dataset.panel === tab.dataset.tab);
          });
        });
      });
    });
    document.querySelectorAll(".seg").forEach(function (seg) {
      seg.querySelectorAll("button").forEach(function (b) {
        b.addEventListener("click", function () {
          seg.querySelectorAll("button").forEach(function (x) { x.classList.toggle("active", x === b); });
        });
      });
    });
    document.addEventListener("click", function (e) {
      var el = e.target.closest("[data-toast]");
      if (el) { e.preventDefault(); toast(el.getAttribute("data-toast")); }
    });
    document.querySelectorAll("[data-icon]").forEach(function (el) {
      el.insertAdjacentHTML("afterbegin", icon(el.getAttribute("data-icon")));
    });
    document.querySelectorAll("[data-logo]").forEach(function (el) { el.innerHTML = logo(); });
  }

  /* ------------------------------------------------------------ Gráficos SVG */
  function esc(n) { return String(n); }
  // Ancho real del contenedor para que el texto no se escale; se redibuja al cambiar tamaño
  function width(el) { return Math.max(300, Math.round(el.clientWidth - parseFloat(getComputedStyle(el).paddingLeft) * 2) || 560); }
  function nice(v) {
    var e = Math.pow(10, Math.floor(Math.log10(v))), f = v / e;
    return (f <= 1 ? 1 : f <= 2 ? 2 : f <= 2.5 ? 2.5 : f <= 5 ? 5 : 10) * e;
  }
  var charts = [];
  function track(el, fn, o) {
    if (!el._chart) { el._chart = true; charts.push(el); }
    el._draw = function () { fn(el, o); };
  }
  var rt;
  window.addEventListener("resize", function () {
    clearTimeout(rt);
    rt = setTimeout(function () { charts.forEach(function (el) { el._draw && el._draw(); }); }, 150);
  });

  // Barras verticales. opts: {labels, series:[{data, cls}], max, fmt, highlight}
  function barChart(el, o) {
    track(el, barChart, o);
    var W = width(el), H = 240, pl = 40, pr = 8, pt = 18, pb = 30;
    var n = o.labels.length, ns = o.series.length;
    var max = o.max || nice(Math.max.apply(null, o.series.map(function (s) { return Math.max.apply(null, s.data); })) * 1.1);
    var cw = (W - pl - pr) / n, bw = Math.min(28, (cw * 0.62) / ns);
    var fmt = o.fmt || function (v) { return v; };
    var svg = '<svg class="chart" viewBox="0 0 ' + W + " " + H + '" role="img">';
    for (var g = 0; g <= 4; g++) {
      var y = pt + (H - pt - pb) * (g / 4);
      svg += '<line class="grid-line" x1="' + pl + '" x2="' + (W - pr) + '" y1="' + y + '" y2="' + y + '"/>';
      svg += '<text x="' + (pl - 6) + '" y="' + (y + 4) + '" text-anchor="end">' + fmt(Math.round(max * (1 - g / 4))) + "</text>";
    }
    o.labels.forEach(function (lab, i) {
      var cx = pl + cw * i + cw / 2;
      o.series.forEach(function (s, j) {
        var v = s.data[i], h = (H - pt - pb) * (v / max);
        var x = cx - (bw * ns) / 2 + j * bw + (ns > 1 ? 1 : 0);
        var cls = s.cls || "";
        if (o.highlight != null && j === 0) cls = o.highlight === i || o.highlight === -1 ? "" : "soft";
        svg += '<rect class="bar ' + cls + '" x="' + x + '" y="' + (H - pb - h) + '" width="' + (bw - (ns > 1 ? 2 : 0)) + '" height="' + h + '" rx="4"><title>' + lab + ": " + fmt(v) + "</title></rect>";
        if (o.values && j === 0) svg += '<text class="val" x="' + (x + bw / 2) + '" y="' + (H - pb - h - 5) + '" text-anchor="middle">' + fmt(v) + "</text>";
      });
      svg += '<text x="' + cx + '" y="' + (H - 10) + '" text-anchor="middle">' + esc(lab) + "</text>";
    });
    el.innerHTML = svg + "</svg>";
  }

  // Líneas. opts: {labels, series:[{data, color, dash, area}], min, max, fmt}
  function lineChart(el, o) {
    track(el, lineChart, o);
    var W = width(el), H = 240, pl = 40, pr = 12, pt = 16, pb = 30;
    var all = [].concat.apply([], o.series.map(function (s) { return s.data; }));
    var min = o.min != null ? o.min : Math.floor(Math.min.apply(null, all) * 0.9 / 10) * 10;
    var max = o.max != null ? o.max : Math.ceil(Math.max.apply(null, all) * 1.05 / 10) * 10;
    var fmt = o.fmt || function (v) { return v; };
    var n = o.labels.length;
    function X(i) { return pl + ((W - pl - pr) * i) / (n - 1); }
    function Y(v) { return pt + (H - pt - pb) * (1 - (v - min) / (max - min)); }
    var svg = '<svg class="chart" viewBox="0 0 ' + W + " " + H + '" role="img">';
    for (var g = 0; g <= 4; g++) {
      var val = max - ((max - min) * g) / 4, y = Y(val);
      svg += '<line class="grid-line" x1="' + pl + '" x2="' + (W - pr) + '" y1="' + y + '" y2="' + y + '"/>';
      svg += '<text x="' + (pl - 6) + '" y="' + (y + 4) + '" text-anchor="end">' + fmt(Math.round(val)) + "</text>";
    }
    o.labels.forEach(function (l, i) { svg += '<text x="' + X(i) + '" y="' + (H - 10) + '" text-anchor="middle">' + l + "</text>"; });
    o.series.forEach(function (s) {
      var pts = s.data.map(function (v, i) { return X(i) + "," + Y(v); }).join(" ");
      if (s.area) svg += '<polygon points="' + X(0) + "," + (H - pb) + " " + pts + " " + X(n - 1) + "," + (H - pb) + '" fill="' + s.color + '" opacity=".12"/>';
      svg += '<polyline points="' + pts + '" fill="none" stroke="' + s.color + '" stroke-width="' + (s.dash ? 1.6 : 2.4) + '"' + (s.dash ? ' stroke-dasharray="4 4"' : "") + ' stroke-linejoin="round" stroke-linecap="round"/>';
      if (!s.dash) s.data.forEach(function (v, i) {
        svg += '<circle cx="' + X(i) + '" cy="' + Y(v) + '" r="3" fill="#fff" stroke="' + s.color + '" stroke-width="2"><title>' + o.labels[i] + ": " + fmt(v) + "</title></circle>";
      });
    });
    el.innerHTML = svg + "</svg>";
  }

  // Dona. parts: [{v, color}]
  function donut(el, parts, center) {
    var total = parts.reduce(function (a, p) { return a + p.v; }, 0), acc = 0, r = 52, c = 2 * Math.PI * r;
    var svg = '<svg viewBox="0 0 140 140" width="140" height="140"><g transform="rotate(-90 70 70)">';
    parts.forEach(function (p) {
      var len = (p.v / total) * c;
      svg += '<circle cx="70" cy="70" r="' + r + '" fill="none" stroke="' + p.color + '" stroke-width="18" stroke-dasharray="' + len + " " + (c - len) + '" stroke-dashoffset="' + -acc + '"/>';
      acc += len;
    });
    svg += '</g><text x="70" y="68" text-anchor="middle" style="font:700 18px Inter,sans-serif;fill:#1f2a2a">' + center[0] + "</text>" +
      '<text x="70" y="86" text-anchor="middle" style="font:500 10px Inter,sans-serif;fill:#8a918f">' + center[1] + "</text></svg>";
    el.innerHTML = svg;
  }

  /* ------------------------------------------------------------ Login */
  function initLogin() {
    var form = document.getElementById("loginForm");
    if (!form) return;
    var sel = document.getElementById("loginProp");
    sel.innerHTML = D.propiedades.map(function (p) { return '<option value="' + p.id + '">Hotel Tibisay ' + p.nombre + " · " + p.ciudad + "</option>"; }).join("") +
      '<option value="todas">Oficina corporativa · todas las propiedades</option>';
    var prev = getSession();
    if (prev) { document.getElementById("loginUser").value = prev.usuario; sel.value = prev.propiedad; }
    document.getElementById("togglePwd").addEventListener("click", function () {
      var i = document.getElementById("loginPwd");
      i.type = i.type === "password" ? "text" : "password";
    });
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var u = document.getElementById("loginUser").value.trim() || "Invitado Demo";
      var btn = form.querySelector("button[type=submit]");
      btn.disabled = true;
      btn.textContent = "Verificando…";
      setSession({ usuario: u.replace(/@.*/, "").replace(/[._]/g, " ").replace(/\b\w/g, function (c) { return c.toUpperCase(); }), propiedad: sel.value, rol: sel.value === "todas" ? "Dirección corporativa" : "Gerencia de hotel", inicio: Date.now() });
      setTimeout(function () { location.href = "dashboard.html"; }, 450);
    });
  }

  /* ------------------------------------------------------------ Arranque */
  window.App = { icon: icon, logo: logo, prop: prop, onProp: onProp, toast: toast, barChart: barChart, lineChart: lineChart, donut: donut, session: session };

  document.addEventListener("DOMContentLoaded", function () {
    var isApp = document.body.classList.contains("app");
    if (isApp) {
      if (!getSession()) { location.replace("index.html"); return; }
      window.__session = getSession();
      buildShell();
    }
    initUI();
    initLogin();
    if (isApp) {
      document.querySelectorAll("[data-user-name]").forEach(function (el) { el.textContent = session().usuario.split(" ")[0]; });
      applyProp();
    }
  });
})();
