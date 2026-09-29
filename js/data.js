/* ==========================================================================
   Datos mock del sistema Tibisay. Edita aquí para ajustar cifras en vivo.
   ========================================================================== */
window.TIBISAY = {
  propiedades: [
    { id: "margarita", nombre: "Margarita", ciudad: "Pampatar · Costa Azul", hab: 138, pms: "Opera", erp: "Profit Plus", occ: 81, adr: 142, fb: 312, gerente: "Gabriela Marcano" },
    { id: "canaima",   nombre: "Canaima",   ciudad: "Parque Nacional Canaima", hab: 36, pms: "Prestige", erp: "a2", occ: 72, adr: 210, fb: 88, gerente: "Héctor Salazar" },
    { id: "catatumbo", nombre: "Catatumbo", ciudad: "Sur del Lago · Zulia", hab: 58, pms: "Prestige", erp: "a2", occ: 63, adr: 104, fb: 64, gerente: "Rosa Urdaneta" },
    { id: "maracaibo", nombre: "Maracaibo", ciudad: "Del Lago · Zulia", hab: 120, pms: "Opera", erp: "Profit Plus", occ: 74, adr: 118, fb: 214, gerente: "Luis Fernández" },
    { id: "morrocoy",  nombre: "Morrocoy",  ciudad: "Tucacas · Falcón", hab: 64, pms: "Prestige", erp: "Saint", occ: 69, adr: 126, fb: 96, gerente: "Andreína Colina" },
    { id: "merida",    nombre: "Mérida",    ciudad: "Mérida · Andes", hab: 60, pms: "Prestige", erp: "Saint", occ: 66, adr: 98, fb: 71, gerente: "José Gregorio Rondón" },
    { id: "maturin",   nombre: "Maturín",   ciudad: "Maturín · Monagas", hab: 56, pms: "Prestige", erp: "Saint", occ: 61, adr: 96, fb: 58, gerente: "Carlos Méndez" }
  ],

  // Ocupación mensual (%) por propiedad, oct-2025 → sep-2026, y año anterior
  meses: ["Oct", "Nov", "Dic", "Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep"],
  ocupacionMensual: {
    margarita: [68, 70, 86, 74, 72, 84, 90, 71, 73, 88, 92, 81],
    canaima:   [58, 62, 88, 80, 66, 78, 84, 55, 57, 76, 82, 72],
    catatumbo: [60, 61, 58, 59, 62, 64, 63, 62, 61, 60, 62, 63],
    maracaibo: [72, 74, 66, 70, 73, 75, 70, 74, 75, 71, 69, 74],
    morrocoy:  [52, 55, 80, 62, 60, 82, 88, 54, 56, 84, 90, 69],
    merida:    [58, 60, 78, 72, 62, 70, 76, 58, 60, 74, 78, 66],
    maturin:   [62, 63, 55, 60, 62, 63, 61, 62, 63, 60, 59, 61]
  },
  crecimientoAnual: 0.9, // factor para simular el año anterior

  sedeNombre: function (id) {
    if (!id || id === "todas") return "Todas las propiedades";
    var p = this.propiedades.find(function (x) { return x.id === id; });
    return p ? p.nombre : id;
  }
};
