const players = [
  { id: "jaros", number: 1, name: "Vitezslav Jaroš", role: "Keeper" },
  { id: "rosa", number: 2, name: "Lucas Rosa", role: "Verdediger" },
  { id: "gaaei", number: 3, name: "Anton Gaaei", role: "Verdediger" },
  { id: "itakura", number: 4, name: "Ko Itakura", role: "Verdediger" },
  { id: "wijndal", number: 5, name: "Owen Wijndal", role: "Verdediger" },
  { id: "regeer", number: 6, name: "Youri Regeer", role: "Middenvelder" },
  { id: "carrizo", number: 7, name: "Maher Carrizo", role: "Aanvaller" },
  { id: "dolberg", number: 9, name: "Kasper Dolberg", role: "Aanvaller" },
  { id: "gloukh", number: 10, name: "Oscar Gloukh", role: "Middenvelder" },
  { id: "godts", number: 11, name: "Mika Godts", role: "Aanvaller" },
  { id: "heerkens", number: 12, name: "Joeri Heerkens", role: "Doelman" },
  { id: "baas", number: 15, name: "Youri Baas", role: "Verdediger" },
  { id: "edvardsen", number: 17, name: "Oliver Edvardsen", role: "Aanvaller" },
  { id: "klaassen", number: 18, name: "Davy Klaassen", role: "Middenvelder" },
  { id: "konadu", number: 19, name: "Don-Angelo Konadu", role: "Aanvaller" },
  { id: "berghuis", number: 23, name: "Steven Berghuis", role: "Aanvaller" },
  { id: "mokio", number: 24, name: "Jorthy Mokio", role: "Middenvelder" },
  { id: "weghorst", number: 25, name: "Wout Weghorst", role: "Aanvaller" },
  { id: "paes", number: 26, name: "Maarten Paes", role: "Keeper" },
  { id: "fitz-jim", number: 28, name: "Kian Fitz-Jim", role: "Middenvelder" },
  { id: "bouwman", number: 30, name: "Aaron Bouwman", role: "Verdediger" },
  { id: "tomiyasu", number: 32, name: "Takehiro Tomiyasu", role: "Verdediger" },
  { id: "sutalo", number: 37, name: "Josip Šutalo", role: "Verdediger" },
  { id: "bounida", number: 43, name: "Rayane Bounida", role: "Aanvaller" },
  { id: "zinchenko", number: 47, name: "Oleksandr Zinchenko", role: "Verdediger" },
  { id: "steur", number: 48, name: "Sean Steur", role: "Middenvelder" },
];

const formations = [
  "4-3-3",
  "4-4-2",
  "4-2-3-1",
  "4-1-4-1",
  "4-3-2-1",
  "4-1-2-1-2",
  "3-4-3",
  "3-5-2",
  "5-4-1",
  "4-5-1",
  "4-4-1-1",
  "4-2-2-2",
  "4-2-4",
  "3-4-2-1",
  "3-4-1-2",
  "3-3-4",
  "3-3-3-1",
  "5-3-1-1",
  "3-3-2-2",
  "3-5-1-1",
  "2-3-2-3",
  "5-2-3",
  "5-2-2-1",
  "4-2-1-3",
  "4-1-2-3",
  "3-1-4-2",
  "4-1-3-2",
  "4-1-2-2-1",
];

const state = {
  formation: "4-3-3",
  assignments: {},
  search: "",
};

const els = {
  list: document.querySelector("#playerList"),
  search: document.querySelector("#playerSearch"),
  pitch: document.querySelector("#pitch"),
  formation: document.querySelector("#formationSelect"),
  formationTitle: document.querySelector("#formationTitle"),
  reset: document.querySelector("#resetButton"),
  count: document.querySelector("#selectedCount"),
  status: document.querySelector("#statusPill"),
};

function getSlotLabels(formation) {
  const lines = formation.split("-").map(Number);
  const labels = ["K"];
  lines.forEach((amount, lineIndex) => {
    const isLast = lineIndex === lines.length - 1;
    const prefix = lineIndex === 0 ? "V" : isLast ? "A" : "M";
    for (let i = 1; i <= amount; i += 1) {
      labels.push(`${prefix}${i}`);
    }
  });
  return labels;
}

function getSlotCoordinates(formation) {
  const lines = formation.split("-").map(Number);
  const rows = [{ amount: 1, y: 86 }, ...lines.map((amount, index) => {
    const top = 73;
    const bottom = 16;
    const y = lines.length === 1 ? 45 : top - (index * (top - bottom)) / (lines.length - 1);
    return { amount, y };
  })];

  const coords = [];
  rows.forEach((row) => {
    const spread = row.amount === 1 ? [50] : Array.from({ length: row.amount }, (_, index) => {
      const min = row.amount >= 5 ? 14 : 18;
      const max = 100 - min;
      return min + (index * (max - min)) / (row.amount - 1);
    });

    spread.forEach((x) => coords.push({ x, y: row.y }));
  });

  return coords;
}

function assignedSlotFor(playerId) {
  return Object.entries(state.assignments).find(([, id]) => id === playerId)?.[0] || "";
}

function assignPlayer(playerId, slotValue) {
  Object.entries(state.assignments).forEach(([slot, id]) => {
    if (id === playerId) {
      delete state.assignments[slot];
    }
  });

  if (!slotValue) {
    render();
    return;
  }

  state.assignments[slotValue] = playerId;
  render();
}

function renderFormationOptions() {
  els.formation.innerHTML = formations
    .map((formation) => `<option value="${formation}">${formation}</option>`)
    .join("");
  els.formation.value = state.formation;
}

function renderPlayers() {
  const labels = getSlotLabels(state.formation);
  const search = state.search.trim().toLowerCase();
  const visiblePlayers = players.filter((player) => {
    const haystack = `${player.name} ${player.role} ${player.number}`.toLowerCase();
    return haystack.includes(search);
  });

  if (!visiblePlayers.length) {
    els.list.innerHTML = '<div class="empty-state">Geen spelers gevonden.</div>';
    return;
  }

  els.list.innerHTML = visiblePlayers
    .map((player) => {
      const currentSlot = assignedSlotFor(player.id);
      const options = [
        '<option value="">Geen positie</option>',
        ...labels.map((label, index) => {
          const slot = String(index + 1);
          const occupiedBy = state.assignments[slot];
          const occupiedPlayer = players.find((item) => item.id === occupiedBy);
          const suffix = occupiedPlayer && occupiedPlayer.id !== player.id ? ` - ${occupiedPlayer.name}` : "";
          const selected = slot === currentSlot ? "selected" : "";
          return `<option value="${slot}" ${selected}>${slot}. ${label}${suffix}</option>`;
        }),
      ].join("");

      return `
        <article class="player-row ${currentSlot ? "is-selected" : ""}" data-player-id="${player.id}">
          <div class="shirt-number">${player.number}</div>
          <div class="player-meta">
            <p class="player-name">${player.name}</p>
            <p class="player-role">${player.role}</p>
          </div>
          <select aria-label="Positie voor ${player.name}" data-position-select="${player.id}">
            ${options}
          </select>
        </article>
      `;
    })
    .join("");
}

function renderPitch() {
  const coords = getSlotCoordinates(state.formation);
  const labels = getSlotLabels(state.formation);
  const existingMarkers = els.pitch.querySelectorAll(".player-marker");
  existingMarkers.forEach((marker) => marker.remove());

  coords.forEach((coord, index) => {
    const slot = String(index + 1);
    const player = players.find((item) => item.id === state.assignments[slot]);
    if (!player) return;

    const marker = document.createElement("div");
    marker.className = "player-marker";
    marker.style.setProperty("--x", `${coord.x}%`);
    marker.style.setProperty("--y", `${coord.y}%`);
    marker.innerHTML = `
      <div class="marker-number">${player.number}</div>
      <div class="marker-label">${player.name}</div>
      <div class="marker-slot">${slot}. ${labels[index]}</div>
    `;
    els.pitch.appendChild(marker);
  });
}

function renderStatus() {
  const selected = Object.keys(state.assignments).length;
  els.count.textContent = String(selected);
  els.formationTitle.textContent = state.formation;
  els.status.textContent = selected === 11 ? "Basiself compleet" : `${11 - selected} posities vrij`;
}

function render() {
  renderPlayers();
  renderPitch();
  renderStatus();
}

els.list.addEventListener("change", (event) => {
  const select = event.target.closest("[data-position-select]");
  if (!select) return;
  assignPlayer(select.dataset.positionSelect, select.value);
});

els.search.addEventListener("input", (event) => {
  state.search = event.target.value;
  renderPlayers();
});

els.formation.addEventListener("change", (event) => {
  state.formation = event.target.value;
  const allowedSlots = new Set(getSlotLabels(state.formation).map((_, index) => String(index + 1)));
  Object.keys(state.assignments).forEach((slot) => {
    if (!allowedSlots.has(slot)) delete state.assignments[slot];
  });
  render();
});

els.reset.addEventListener("click", () => {
  state.assignments = {};
  state.search = "";
  els.search.value = "";
  render();
});

renderFormationOptions();
assignPlayer("jaros", "1");
assignPlayer("rosa", "2");
assignPlayer("itakura", "3");
assignPlayer("sutalo", "4");
assignPlayer("wijndal", "5");
assignPlayer("regeer", "6");
assignPlayer("klaassen", "7");
assignPlayer("gloukh", "8");
assignPlayer("godts", "9");
assignPlayer("dolberg", "10");
assignPlayer("berghuis", "11");
