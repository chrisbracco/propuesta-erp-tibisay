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
    key: '<circle cx="7.5" cy="15.5" r="5.5"/><path d="m21 2-9.6 9.6"/><path d="m15.5 7.5 3 3L22 7l-3-3"/>',
    chev: '<path d="m6 9 6 6 6-6"/>',
    x: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
    arrow: '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>'
  };
  function icon(name, cls) {
    return '<svg class="ico ' + (cls || "") + '" viewBox="0 0 24 24" aria-hidden="true">' + (P[name] || "") + "</svg>";
  }

  // Logo oficial Tibisay (PNG con transparencia en assets/)
  function logo() {
    return '<img src="assets/logo-tibisay.png" alt="Hoteles Tibisay">';
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
    { href: "it.html", label: "Panel de IT", icon: "server" }
  ];

  /* ------------------------------------------------------------ Vista por rol */
  // Cada rol ve primero sus módulos; el resto queda plegado en «Más módulos».
  var ROLES = [
    { id: "gerencia", label: "Gerencia", mods: ["tablero.html", "crm.html", "operaciones.html", "inventarios.html", "rrhh.html"] },
    { id: "frontdesk", label: "Front Desk", mods: ["operaciones.html", "crm.html"] },
    { id: "ab", label: "A&B", mods: ["inventarios.html", "crm.html", "operaciones.html"] },
    { id: "rrhh", label: "RRHH", mods: ["rrhh.html"] },
    { id: "almacen", label: "Almacén", mods: ["inventarios.html"] },
    { id: "it", label: "IT", mods: ["it.html"] }
  ];
  var roleListeners = [];
  function role() {
    var s = session(), id = (s && s.vista) || "gerencia";
    return ROLES.find(function (r) { return r.id === id; }) || ROLES[0];
  }
  function onRole(fn) { roleListeners.push(fn); fn(role()); }

  function navHTML(page) {
    var r = role();
    function link(m) {
      return '<a class="sb-link' + (m.href === page ? " active" : "") + '" href="' + m.href + '" title="' + m.label + '">' +
        icon(m.icon) + '<span class="sb-text">' + m.label + "</span>" +
        (m.count ? '<span class="sb-count">' + m.count + "</span>" : "") + "</a>";
    }
    var mods = MODULOS.filter(function (m) { return m.href && m.href !== "dashboard.html"; });
    var mine = r.mods.map(function (h) { return mods.find(function (m) { return m.href === h; }); });
    var rest = mods.filter(function (m) { return r.mods.indexOf(m.href) < 0; });
    var open = rest.some(function (m) { return m.href === page; });
    try { open = open || localStorage.getItem("tibisay_sb_rest") === "1"; } catch (e) {}
    return link(MODULOS[0]) + '<div class="sb-label">Tu área · ' + r.label + "</div>" + mine.map(link).join("") +
      (rest.length ? '<button class="sb-link sb-more" type="button" aria-expanded="' + open + '" title="Más módulos">' + icon("menu") +
        '<span class="sb-text">Más módulos (' + rest.length + ")</span>" + icon("chev", "chev") + "</button>" +
        '<div class="sb-rest' + (open ? " open" : "") + '">' + rest.map(link).join("") + "</div>" : "");
  }

  function buildShell() {
    var s = session();
    var page = location.pathname.split("/").pop() || "dashboard.html";

    var aside = document.createElement("aside");
    aside.className = "sidebar";
    aside.innerHTML =
      '<a class="sb-brand" href="dashboard.html" title="Hoteles Tibisay · Inicio"><span class="sb-logo">' + logo() + "</span></a>" +
      '<nav class="sb-nav">' + navHTML(page) + "</nav>" +
      '<div class="sb-foot"><button class="sb-link sb-collapse" type="button" title="Plegar menú">' + icon("panel") + '<span class="sb-text">Plegar menú</span></button></div>';
    document.body.prepend(aside);

    var back = document.createElement("div");
    back.className = "backdrop";
    document.body.appendChild(back);

    var opts = '<option value="todas">Todas las propiedades</option>' + D.propiedades.map(function (p) {
      return '<option value="' + p.id + '">Hotel Tibisay ' + p.nombre + "</option>";
    }).join("");

    var nav = aside.querySelector(".sb-nav");
    nav.addEventListener("click", function (e) {
      var b = e.target.closest(".sb-more");
      if (!b) return;
      var rest = nav.querySelector(".sb-rest"), open = rest.classList.toggle("open");
      b.setAttribute("aria-expanded", open);
      try { localStorage.setItem("tibisay_sb_rest", open ? "1" : "0"); } catch (err) {}
    });

    var ropts = ROLES.map(function (r) { return '<option value="' + r.id + '">' + r.label.replace("&", "&amp;") + "</option>"; }).join("");
    var top = document.createElement("header");
    top.className = "topbar";
    top.innerHTML =
      '<button class="icon-btn menu-btn" type="button" aria-label="Abrir menú">' + icon("menu") + "</button>" +
      '<div class="search">' + icon("search") + '<input class="input" id="globalSearch" type="search" placeholder="Buscar huésped, reserva, habitación, OC…"><kbd>/</kbd></div>' +
      '<div class="top-right">' +
        '<div class="role-select" title="Vista por rol (demo): reordena el menú y el inicio"><label for="roleSelect">Vista</label><select class="select" id="roleSelect" aria-label="Vista por rol">' + ropts + "</select></div>" +
        '<div class="prop-select">' + icon("building") + '<select class="select" id="propSelect" aria-label="Propiedad">' + opts + "</select></div>" +
        '<div class="notif-wrap"><button class="icon-btn" type="button" id="notifBtn" aria-label="Notificaciones">' + icon("bell") + '<span class="dot-notif" id="notifDot"></span></button>' +
          '<div class="menu notif-menu" id="notifMenu"><div class="between" style="padding:6px 10px 8px"><b class="small">Notificaciones</b><a href="#" class="small" id="notifRead">Marcar como leídas</a></div>' +
          '<a href="inventarios.html#aud">' + icon("box") + '<span><b>23 botellas sin venta registrada</b><small>A&amp;B · Margarita · hace 12 min</small></span></a>' +
          '<a href="inventarios.html#compras">' + icon("cart") + '<span><b>OC-2026-1190 por aprobar</b><small>A&amp;B · Maracaibo · hace 40 min</small></span></a>' +
          '<a href="operaciones.html#mt">' + icon("wrench") + '<span><b>Ticket urgente: A/A hab. 410</b><small>Mantenimiento · Margarita · hace 25 min</small></span></a></div></div>' +
        '<div class="user-chip" id="userChip"><div class="avatar">' + initials(s.usuario) + '</div>' +
          '<div class="who"><b>' + s.usuario + '</b><small id="whoRole">' + role().label.replace("&", "&amp;") + "</small></div>" +
          '<div class="menu" id="userMenu"><a href="dashboard.html">' + icon("home") + "Mi inicio</a>" +
          '<a href="#" id="profileLink">' + icon("users") + "Mi perfil</a>" +
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
    var nmenu = document.getElementById("notifMenu");
    chip.addEventListener("click", function (e) { e.stopPropagation(); nmenu.classList.remove("open"); menu.classList.toggle("open"); });
    document.getElementById("notifBtn").addEventListener("click", function (e) { e.stopPropagation(); menu.classList.remove("open"); nmenu.classList.toggle("open"); });
    document.getElementById("notifRead").addEventListener("click", function (e) {
      e.preventDefault(); e.stopPropagation();
      document.getElementById("notifDot").remove();
      nmenu.querySelectorAll("a[href]:not(#notifRead)").forEach(function (a) { a.style.opacity = ".6"; });
      toast("Notificaciones marcadas como leídas");
    });
    document.addEventListener("click", function () { menu.classList.remove("open"); nmenu.classList.remove("open"); });
    document.getElementById("profileLink").addEventListener("click", function (e) {
      e.preventDefault();
      var ss = session();
      drawer('<div class="drawer-h"><div><h2>' + ss.usuario + "</h2><p>Mi perfil</p></div>" + '<button class="icon-btn" data-close-drawer aria-label="Cerrar">' + icon("x") + "</button></div>" +
        '<div class="drawer-b"><div class="card-b"><div class="row" style="margin-bottom:16px"><span class="avatar" style="width:52px;height:52px;font-size:17px">' + initials(ss.usuario) + "</span><div><b>" + ss.usuario + '</b><div class="small muted">' + role().label + "</div></div></div>" +
        '<dl class="dl"><dt>Vista</dt><dd>' + role().label + "</dd><dt>Propiedad</dt><dd>" + D.sedeNombre(prop()) + "</dd><dt>Sesión iniciada</dt><dd>" + (ss.inicio ? new Date(ss.inicio).toLocaleString("es-VE") : "—") + "</dd><dt>Idioma</dt><dd>Español</dd></dl></div></div>" +
        '<div class="drawer-f"><a class="btn btn-ghost btn-sm" href="#" id="logout2">' + icon("logout") + "Cerrar sesión</a></div>");
      document.getElementById("logout2").onclick = function (ev) { ev.preventDefault(); document.getElementById("logout").click(); };
    });
    document.getElementById("logout").addEventListener("click", function (e) {
      e.preventDefault();
      try { localStorage.removeItem(KEY); } catch (err) {}
      location.href = "index.html";
    });

    // Selector de vista por rol
    var rs = document.getElementById("roleSelect");
    rs.value = role().id;
    rs.addEventListener("change", function () {
      s.vista = rs.value;
      setSession(s);
      nav.innerHTML = navHTML(page);
      document.getElementById("whoRole").textContent = role().label;
      roleListeners.forEach(function (fn) { fn(role()); });
      toast("Vista " + role().label + ": el menú y el inicio muestran primero lo tuyo");
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
    document.body.classList.toggle("searching", !!q);
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
          closeDrawer();
          redraw();
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
    // Modales genéricos: [data-modal="id"] abre, [data-close] o clic fuera cierra
    document.addEventListener("click", function (e) {
      var o = e.target.closest("[data-modal]");
      if (o) { e.preventDefault(); document.getElementById(o.dataset.modal).classList.add("open"); }
      if (e.target.closest("[data-close]") || e.target.classList.contains("modal-back")) closeModals();
      if (e.target.closest("[data-close-drawer]") || e.target.classList.contains("drawer-back")) closeDrawer();
      var ex = e.target.closest("[data-export]");
      if (ex) { e.preventDefault(); exportCSV(document.querySelector(ex.dataset.export), ex.dataset.file); }
    });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") { closeModals(); closeDrawer(); } });
    // Al abrir un acordeón se redibujan sus gráficos con el ancho real
    document.addEventListener("toggle", function (e) { if (e.target.open) redraw(); }, true);
  }
  function closeModals() { document.querySelectorAll(".modal-back").forEach(function (m) { m.classList.remove("open"); }); }

  /* ------------------------------------------------------------ Exportar tabla a CSV */
  // [data-export="#selectorTabla"] descarga las filas visibles de la tabla como CSV (Excel)
  function exportCSV(table, name) {
    if (!table) return;
    var rows = [].slice.call(table.querySelectorAll("thead tr, tbody tr, tfoot tr")).filter(function (tr) { return !tr.hidden && tr.style.display !== "none" && !tr.classList.contains("prow-detail"); });
    var csv = rows.map(function (tr) {
      return [].map.call(tr.cells, function (td) { return '"' + td.innerText.replace(/\s+/g, " ").trim().replace(/"/g, '""') + '"'; }).join(";");
    }).join("\r\n");
    var a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob(["\ufeff" + csv], { type: "text/csv;charset=utf-8" }));
    a.download = (name || "tibisay") + ".csv";
    document.body.appendChild(a); a.click(); a.remove();
    toast("Descargado " + a.download + " · " + (rows.length - 1) + " filas");
  }

  // Etiqueta cada celda con el encabezado de su columna: en móvil las tablas se apilan como fichas
  function labelTables() {
    document.querySelectorAll("table.table, table.shifts").forEach(function (t) {
      var hs = [].map.call(t.querySelectorAll("thead th"), function (th) { return th.textContent.trim(); });
      if (!hs.length) return;
      t.querySelectorAll("tbody tr, tfoot tr").forEach(function (tr) {
        var i = 0;
        [].forEach.call(tr.cells, function (td) {
          if (!td.hasAttribute("data-label")) td.setAttribute("data-label", td.colSpan > 1 ? "" : hs[i] || "");
          i += td.colSpan || 1;
        });
      });
    });
  }
  var lt;
  new MutationObserver(function () { cancelAnimationFrame(lt); lt = requestAnimationFrame(labelTables); }).observe(document.documentElement, { childList: true, subtree: true });

  /* ------------------------------------------------------------ Drawer lateral */
  function drawer(html) {
    var d = document.getElementById("drawer");
    if (!d) {
      document.body.insertAdjacentHTML("beforeend", '<div class="drawer-back"></div><aside class="drawer" id="drawer" aria-modal="true" role="dialog"></aside>');
      d = document.getElementById("drawer");
    }
    d.innerHTML = html;
    d.classList.add("open");
    document.body.classList.add("drawer-open");
    return d;
  }
  function closeDrawer() {
    var d = document.getElementById("drawer");
    if (d) d.classList.remove("open");
    document.body.classList.remove("drawer-open");
  }

  /* ------------------------------------------------------------ Asistente por pasos */
  // App.wizard({ title, sub, wide, steps: [{ t, html(st), after(el, st), read(el, st) }], done: { label, toast(st) } })
  function wizard(o) {
    var back = document.getElementById("wz");
    if (!back) {
      document.body.insertAdjacentHTML("beforeend", '<div class="modal-back" id="wz"><div class="modal"></div></div>');
      back = document.getElementById("wz");
    }
    var box = back.querySelector(".modal"), st = o.state || {}, k = 0;
    box.className = "modal" + (o.wide ? " modal-lg" : "");
    function draw() {
      var step = o.steps[k], last = k === o.steps.length - 1;
      box.innerHTML = '<div class="card-h"><div><h2>' + o.title + "</h2>" + (o.sub ? "<p>" + o.sub + "</p>" : "") + '</div><button class="icon-btn" data-close aria-label="Cerrar">' + icon("x") + "</button></div>" +
        (o.steps.length > 1 ? '<div class="wz-steps">' + o.steps.map(function (s2, i) { return (i ? "<em>—</em>" : "") + '<span class="' + (i < k ? "done" : i === k ? "now" : "") + '"><i>' + (i < k ? "✓" : i + 1) + "</i>" + s2.t + "</span>"; }).join("") + "</div>" : "") +
        '<div class="card-b" id="wzBody">' + step.html(st) + "</div>" +
        '<div class="card-f row" style="justify-content:space-between"><button class="btn btn-ghost btn-sm" data-close>Cancelar</button><div class="row">' +
        (k ? '<button class="btn btn-ghost btn-sm" data-wz="prev">Atrás</button>' : "") +
        '<button class="btn btn-primary btn-sm" data-wz="' + (last ? "done" : "next") + '">' + (last ? o.done.label : "Siguiente") + "</button></div></div>";
      if (step.after) step.after(box.querySelector("#wzBody"), st);
    }
    box.onclick = function (e) {
      var b = e.target.closest("[data-wz]");
      if (!b) return;
      var step = o.steps[k];
      if (step.read) step.read(box.querySelector("#wzBody"), st);
      if (b.dataset.wz === "prev") k--;
      else if (b.dataset.wz === "next") k++;
      else { back.classList.remove("open"); toast(typeof o.done.toast === "function" ? o.done.toast(st) : o.done.toast); if (o.done.fn) o.done.fn(st); return; }
      draw();
    };
    draw();
    back.classList.add("open");
  }

  /* ------------------------------------------------------------ «Ver más» */
  // Muestra solo las primeras n filas visibles de un tbody/ul y agrega un botón para ver el resto
  function more(list, n) {
    if (!list) return;
    list._moreN = n = n || list._moreN || 6;
    var wrap = list.closest(".table-wrap") || list, btn = wrap.nextElementSibling;
    if (!btn || !btn.classList.contains("more-btn")) btn = null;
    [].forEach.call(list.children, function (el) { el.classList.remove("more-hidden"); });
    var items = [].filter.call(list.children, function (el) { return !el.hidden && el.style.display !== "none" && !el.classList.contains("prow-detail"); });
    if (items.length <= n) { if (btn) btn.remove(); return; }
    if (!list._moreOpen) items.slice(n).forEach(function (el) { el.classList.add("more-hidden"); });
    if (!btn) {
      btn = document.createElement("button");
      btn.type = "button"; btn.className = "more-btn";
      wrap.after(btn);
      btn.addEventListener("click", function () { list._moreOpen = !list._moreOpen; more(list); });
    }
    btn.textContent = list._moreOpen ? "Ver menos" : "Ver " + (items.length - n) + " más";
  }

  /* ------------------------------------------------------------ Tarjeta hero */
  // hero({ label, value, unit, sub, dark }, [[label, value, sub, cls]])
  function hero(h, stats) {
    return '<div class="hero-main"><span class="kpi-label">' + h.label + '</span><div class="hero-value">' + h.value + (h.unit ? "<small>" + h.unit + "</small>" : "") + '</div><div class="kpi-sub">' + (h.sub || "") + "</div></div>" +
      '<div class="hero-side">' + stats.map(function (x) { return '<div class="stat"><small>' + x[0] + '</small><b class="' + (x[3] || "") + '">' + x[1] + "</b>" + (x[2] ? "<span>" + x[2] + "</span>" : "") + "</div>"; }).join("") + "</div>";
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
  function redraw() {
    setTimeout(function () { charts.forEach(function (el) { if (el.offsetParent && el._draw) el._draw(); }); });
  }
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
    svg += '</g><text x="70" y="68" text-anchor="middle" style="font:700 18px Inter,sans-serif;fill:#1c1c1c">' + center[0] + "</text>" +
      '<text x="70" y="86" text-anchor="middle" style="font:500 10px Inter,sans-serif;fill:#8a8883">' + center[1] + "</text></svg>";
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
  window.App = { icon: icon, logo: logo, prop: prop, onProp: onProp, toast: toast, barChart: barChart, lineChart: lineChart, donut: donut, session: session,
    role: role, onRole: onRole, roles: ROLES, drawer: drawer, closeDrawer: closeDrawer, wizard: wizard, more: more, hero: hero, redraw: redraw, exportCSV: exportCSV };

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
      // Enlaces profundos: pagina.html#tab abre la pestaña; #accion dispara [data-hash="accion"]
      function deepLink() {
        var h = decodeURIComponent(location.hash.slice(1));
        if (h) setTimeout(function () {
          var t = document.querySelector('.tab[data-tab="' + h + '"]');
          if (t) t.click();
          var a = document.querySelector('[data-hash="' + h + '"]');
          if (a) a.click();
        }, 80);
      }
      deepLink();
      window.addEventListener("hashchange", deepLink);
    }
  });
})();
