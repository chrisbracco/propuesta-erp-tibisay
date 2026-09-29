/* Propuesta ERP Tibisay — JS mínimo: header al hacer scroll, menú móvil,
   enlace activo y pestañas/filtros de los mockups. */
(function () {
  var header = document.querySelector(".header");
  var toggle = document.querySelector(".menu-toggle");

  // Header transparente -> crema al hacer scroll
  function onScroll() {
    if (!header) return;
    header.classList.toggle("scrolled", window.scrollY > 40);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Menú móvil
  if (toggle && header) {
    toggle.addEventListener("click", function () {
      var open = header.classList.toggle("nav-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    header.querySelectorAll(".nav a").forEach(function (a) {
      a.addEventListener("click", function () { header.classList.remove("nav-open"); });
    });
  }

  // Marca el enlace de la página actual
  var page = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav a").forEach(function (a) {
    if (a.getAttribute("href") === page) a.classList.add("active");
  });

  // Pestañas: <div data-tabs> con .tab[data-tab="x"] y .tab-panel[data-panel="x"]
  document.querySelectorAll("[data-tabs]").forEach(function (box) {
    var tabs = box.querySelectorAll(".tab");
    tabs.forEach(function (tab) {
      tab.addEventListener("click", function () {
        tabs.forEach(function (t) { t.classList.remove("active"); });
        box.querySelectorAll(".tab-panel").forEach(function (p) {
          p.classList.toggle("active", p.dataset.panel === tab.dataset.tab);
        });
        tab.classList.add("active");
      });
    });
  });

  // Chips de filtro (solo visual): <div class="chips" data-filter="selector-de-filas">
  document.querySelectorAll(".chips[data-filter]").forEach(function (group) {
    var rows = document.querySelectorAll(group.dataset.filter);
    group.querySelectorAll(".chip").forEach(function (chip) {
      chip.addEventListener("click", function () {
        group.querySelectorAll(".chip").forEach(function (c) { c.classList.remove("active"); });
        chip.classList.add("active");
        var val = chip.dataset.value;
        rows.forEach(function (r) {
          r.style.display = !val || val === "todas" || r.dataset.sede === val ? "" : "none";
        });
      });
    });
  });
})();
