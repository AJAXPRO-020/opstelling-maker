const players = [
  { id: "rosa", number: 2, name: "Lucas Rosa", role: "Verdediger", photo: "assets/players/rosa_2526.webp" },
  {
    id: "gaaei",
    number: 3,
    name: "Anton Gaaei",
    role: "Verdediger",
    photo: "assets/players/gaaei_2526.webp",
    memePhoto: "assets/players/meme/gaai_meme.webp",
  },
  { id: "itakura", number: 4, name: "Ko Itakura", role: "Verdediger", photo: "assets/players/itakura_2526.webp" },
  { id: "wijndal", number: 5, name: "Owen Wijndal", role: "Verdediger", photo: "assets/players/wijndal_2526.webp" },
  { id: "regeer", number: 6, name: "Youri Regeer", role: "Middenvelder", photo: "assets/players/regeer_2526.webp" },
  {
    id: "carrizo",
    number: 7,
    name: "Maher Carrizo",
    role: "Aanvaller",
    photo: "assets/players/carrizo_2526.webp",
    memePhoto: "assets/players/meme/carrizo_meme.webp",
  },
  {
    id: "caio-henrique",
    number: "—",
    name: "Caio Henrique",
    role: "Verdediger",
    photo: "assets/players/caio-henrique_2526.webp",
    photoZoom: 1,
  },
  {
    id: "dolberg",
    number: 9,
    name: "Kasper Dolberg",
    role: "Aanvaller",
    photo: "assets/players/dolberg_2526.webp",
    memePhoto: "assets/players/meme/dolberg_meme.webp",
  },
  { id: "gloukh", number: 10, name: "Oscar Gloukh", role: "Middenvelder", photo: "assets/players/gloukh_2526.webp" },
  { id: "godts", number: 11, name: "Mika Godts", role: "Aanvaller", photo: "assets/players/godts_2526.webp" },
  { id: "heerkens", number: 12, name: "Joeri Heerkens", role: "Doelman", photo: "assets/players/heerkens_2526.webp" },
  {
    id: "ter-stegen",
    number: "—",
    name: "Marc-André ter Stegen",
    role: "Keeper",
    photo: "assets/players/ter-stegen_flight_2627.webp",
  },
  { id: "baas", number: 15, name: "Youri Baas", role: "Verdediger", photo: "assets/players/baas_2526.webp" },
  { id: "edvardsen", number: 17, name: "Oliver Edvardsen", role: "Aanvaller", photo: "assets/players/edvardsen_2526.webp" },
  {
    id: "blind",
    number: "—",
    name: "Daley Blind",
    role: "Verdediger",
    photo: "assets/players/blind_2627.webp",
    photoZoom: 1,
  },
  {
    id: "dies-janse",
    number: "—",
    name: "Dies Janse",
    role: "Verdediger",
    photo: "assets/players/dies-janse_2526.webp",
    memePhoto: "assets/players/meme/dies-janse-tractor.webp",
    photoFocusX: 0.5,
    photoZoom: 1.42,
    memePhotoZoom: 1,
  },
  {
    id: "klaassen",
    number: 18,
    name: "Davy Klaassen",
    role: "Middenvelder",
    photo: "assets/players/klaassen_2526.webp",
    memePhoto: "assets/players/meme/klaassen_meme.webp",
  },
  { id: "konadu", number: 19, name: "Don-Angelo Konadu", role: "Aanvaller", photo: "assets/players/konadu_2526.webp" },
  { id: "berghuis", number: 23, name: "Steven Berghuis", role: "Aanvaller", photo: "assets/players/berghuis_2526.webp" },
  {
    id: "mokio",
    number: 24,
    name: "Jorthy Mokio",
    role: "Middenvelder",
    photo: "assets/players/mokio_2526.webp",
    memePhoto: "assets/players/meme/mokio_meme.webp",
  },
  { id: "paes", number: 26, name: "Maarten Paes", role: "Keeper", photo: "assets/players/paes_2526.webp" },
  { id: "fitz-jim", number: 28, name: "Kian Fitz-Jim", role: "Middenvelder", photo: "assets/players/fitz-jim_2526.webp" },
  {
    id: "ouazane",
    number: "—",
    name: "Abdellah Ouazane",
    role: "Middenvelder",
    photo: "assets/players/ouazane_2526.webp",
  },
  { id: "bouwman", number: 30, name: "Aaron Bouwman", role: "Verdediger", photo: "assets/players/bouwman_2526.webp" },
  { id: "sutalo", number: 37, name: "Josip Sutalo", role: "Verdediger", photo: "assets/players/sutalo_2526.webp" },
  { id: "bounida", number: 43, name: "Rayane Bounida", role: "Aanvaller", photo: "assets/players/bounida_2526.webp" },
  {
    id: "leonardo",
    number: "—",
    name: "Marcos Leonardo",
    role: "Aanvaller",
    photo: "assets/players/leonardo_2627.webp",
    photoZoom: 1,
  },
  {
    id: "arokodare",
    number: "—",
    name: "Tolu Arokodare",
    role: "Aanvaller",
    photo: "assets/players/tolu-arokodare_2627.webp",
    photoFocusX: 0.5,
    photoZoom: 1,
  },
];

const playerAssetVersion = "20260729-facecards";
const defaultFormation = "4-3-3";
const formations = {
  "4-3-3": {
    positions: [
      { id: "1", number: 1, label: "Keeper", x: 50, y: 84 },
      { id: "2", number: 2, label: "Rechtsback", x: 86, y: 68 },
      { id: "3", number: 3, label: "Rechter centrale verdediger", x: 62, y: 68 },
      { id: "4", number: 4, label: "Linker centrale verdediger", x: 38, y: 68 },
      { id: "5", number: 5, label: "Linksback", x: 14, y: 68 },
      { id: "6", number: 6, label: "Controlerende middenvelder", x: 50, y: 48 },
      { id: "7", number: 8, label: "Rechter middenvelder", x: 72, y: 36 },
      { id: "8", number: 10, label: "Linker middenvelder", x: 28, y: 36 },
      { id: "9", number: 7, label: "Rechtsbuiten", x: 86, y: 16 },
      { id: "10", number: 9, label: "Spits", x: 50, y: 16 },
      { id: "11", number: 11, label: "Linksbuiten", x: 14, y: 16 },
    ],
  },
  "4-4-2": {
    positions: [
      { id: "1", number: 1, label: "Keeper", x: 50, y: 84 },
      { id: "2", number: 2, label: "Rechtsback", x: 86, y: 68 },
      { id: "3", number: 3, label: "Rechter centrale verdediger", x: 62, y: 68 },
      { id: "4", number: 4, label: "Linker centrale verdediger", x: 38, y: 68 },
      { id: "5", number: 5, label: "Linksback", x: 14, y: 68 },
      { id: "6", number: 6, label: "Rechtermiddenvelder", x: 84, y: 42 },
      { id: "7", number: 8, label: "Rechter centrale middenvelder", x: 62, y: 44 },
      { id: "8", number: 10, label: "Linker centrale middenvelder", x: 38, y: 44 },
      { id: "9", number: 11, label: "Linkermiddenvelder", x: 16, y: 42 },
      { id: "10", number: 9, label: "Rechter spits", x: 66, y: 16 },
      { id: "11", number: 7, label: "Linker spits", x: 34, y: 16 },
    ],
  },
  "5-3-2": {
    compactAll: true,
    positions: [
      { id: "1", number: 1, label: "Keeper", x: 50, y: 84 },
      { id: "2", number: 2, label: "Rechter wingback", x: 90, y: 63 },
      { id: "3", number: 3, label: "Rechter centrale verdediger", x: 70, y: 65 },
      { id: "4", number: 4, label: "Centrale verdediger", x: 50, y: 66 },
      { id: "5", number: 5, label: "Linker centrale verdediger", x: 30, y: 65 },
      { id: "6", number: 6, label: "Linker wingback", x: 10, y: 63 },
      { id: "7", number: 8, label: "Rechter middenvelder", x: 76, y: 33 },
      { id: "8", number: 10, label: "Centrale middenvelder", x: 50, y: 36 },
      { id: "9", number: 11, label: "Linker middenvelder", x: 24, y: 33 },
      { id: "10", number: 9, label: "Rechter spits", x: 66, y: 12 },
      { id: "11", number: 7, label: "Linker spits", x: 34, y: 12 },
    ],
  },
};

function formationPositions(formation = state?.formation || defaultFormation) {
  return formations[formation]?.positions || formations[defaultFormation].positions;
}

function formationCoordinates(formation = state?.formation || defaultFormation) {
  return formationPositions(formation).map(({ x, y }) => ({ x, y }));
}

const initialAssignments = {};

const state = {
  creator: "",
  opponent: "",
  ajaxScore: "0",
  opponentScore: "0",
  venue: "home",
  memePlayers: new Set(),
  search: "",
  wijndalBankChoice: "",
  formation: defaultFormation,
  assignments: { ...initialAssignments },
  positions: formationCoordinates(defaultFormation),
};

const themeStorageKey = "ajaxpro-lineup-theme";
const defaultTheme = "home";
const themes = {
  home: { label: "Home", theme: "ajaxpro-kit", kit: "home" },
  away: { label: "Away", theme: "ajaxpro-kit", kit: "away" },
  third: { label: "Third", theme: "ajaxpro-kit", kit: "third" },
  standard: { label: "Standaard", theme: "classic", kit: "" },
};
const legacyThemes = {
  classic: "standard",
  "ajaxpro-kit": "home",
};
const kitExportPitchPalettes = {
  away: {
    board: "#18140f",
    lip: "#30271b",
    rail: "#100e0b",
    dark: "#1f1a14",
    light: "#30271b",
    line: "rgba(245,243,238,0.34)",
  },
  third: {
    board: "#162033",
    lip: "#22334b",
    rail: "#101724",
    dark: "#172235",
    light: "#22334b",
    line: "rgba(238,246,253,0.36)",
  },
};

const els = {
  pitch: document.querySelector("#pitch"),
  list: document.querySelector("#playerList"),
  search: document.querySelector("#playerSearch"),
  count: document.querySelector("#selectedCount"),
  reset: document.querySelector("#resetButton"),
  creatorInput: document.querySelector("#creatorName"),
  opponentInput: document.querySelector("#opponentName"),
  ajaxScoreOutput: document.querySelector("#ajaxScoreOutput"),
  opponentScoreOutput: document.querySelector("#opponentScoreOutput"),
  opponentScoreLabel: document.querySelector("#opponentScoreLabel"),
  venueInputs: document.querySelectorAll('input[name="venue"]'),
  photoModeMeme: document.querySelector("#photoModeMeme"),
  scoreButtons: document.querySelectorAll("[data-score-action]"),
  posterCreatorTop: document.querySelector("#posterCreatorTop"),
  posterMatchup: document.querySelector("#posterMatchup"),
  posterAjaxScore: document.querySelector("#posterAjaxScore"),
  posterOpponentScore: document.querySelector("#posterOpponentScore"),
  download: document.querySelector("#downloadButton"),
  share: document.querySelector("#shareButton"),
  themeSelect: document.querySelector("#themeSelect"),
  formationSelect: document.querySelector("#formationSelect"),
};

let activeDrag = null;
let pitchSurfaceRendered = false;

const pitchPlane = {
  topLeft: { x: 8, y: 4 },
  topRight: { x: 92, y: 4 },
  bottomRight: { x: 92, y: 96 },
  bottomLeft: { x: 8, y: 96 },
};

const fieldInset = {
  x: 0,
  y: 0,
};

function createSvgElement(tag, attributes = {}) {
  const element = document.createElementNS("http://www.w3.org/2000/svg", tag);
  Object.entries(attributes).forEach(([name, value]) => {
    element.setAttribute(name, value);
  });
  return element;
}

function mapPitchPoint(xPercent, yPercent) {
  const yRatio = yPercent / 100;
  const left = {
    x: pitchPlane.topLeft.x + (pitchPlane.bottomLeft.x - pitchPlane.topLeft.x) * yRatio,
    y: pitchPlane.topLeft.y + (pitchPlane.bottomLeft.y - pitchPlane.topLeft.y) * yRatio,
  };
  const right = {
    x: pitchPlane.topRight.x + (pitchPlane.bottomRight.x - pitchPlane.topRight.x) * yRatio,
    y: pitchPlane.topRight.y + (pitchPlane.bottomRight.y - pitchPlane.topRight.y) * yRatio,
  };
  const xRatio = xPercent / 100;
  return {
    x: left.x + (right.x - left.x) * xRatio,
    y: left.y + (right.y - left.y) * xRatio,
  };
}

function pointsToPath(points, close = false) {
  return points
    .map((point, index) => `${index ? "L" : "M"} ${point.x.toFixed(2)} ${point.y.toFixed(2)}`)
    .join(" ")
    .concat(close ? " Z" : "");
}

function mappedPolygon(points) {
  return pointsToPath(points.map(([x, y]) => mapPitchPoint(x, y)), true);
}

function mappedLine(x1, y1, x2, y2) {
  return pointsToPath([mapPitchPoint(x1, y1), mapPitchPoint(x2, y2)]);
}

function mappedEllipsePath(centerX, centerY, radiusX, radiusY, startAngle, endAngle, steps = 48) {
  const points = [];
  for (let step = 0; step <= steps; step += 1) {
    const angle = startAngle + ((endAngle - startAngle) * step) / steps;
    points.push(mapPitchPoint(centerX + Math.cos(angle) * radiusX, centerY + Math.sin(angle) * radiusY));
  }
  return pointsToPath(points);
}

function mapFieldPoint(xPercent, yPercent) {
  const x = fieldInset.x + (xPercent / 100) * (100 - fieldInset.x * 2);
  const y = fieldInset.y + (yPercent / 100) * (100 - fieldInset.y * 2);
  return mapPitchPoint(x, y);
}

function mappedFieldPolygon(points) {
  return pointsToPath(points.map(([x, y]) => mapFieldPoint(x, y)), true);
}

function mappedFieldLine(x1, y1, x2, y2) {
  return pointsToPath([mapFieldPoint(x1, y1), mapFieldPoint(x2, y2)]);
}

function mappedFieldEllipsePath(centerX, centerY, radiusX, radiusY, startAngle, endAngle, steps = 48) {
  const points = [];
  for (let step = 0; step <= steps; step += 1) {
    const angle = startAngle + ((endAngle - startAngle) * step) / steps;
    points.push(mapFieldPoint(centerX + Math.cos(angle) * radiusX, centerY + Math.sin(angle) * radiusY));
  }
  return pointsToPath(points);
}

function appendPath(parent, className, d) {
  parent.appendChild(createSvgElement("path", { class: className, d }));
}

function appendMappedPolygon(parent, className, points) {
  appendPath(parent, className, mappedPolygon(points));
}

function appendMappedFieldPolygon(parent, className, points) {
  appendPath(parent, className, mappedFieldPolygon(points));
}

function appendDot(parent, x, y, radius) {
  const point = mapFieldPoint(x, y);
  parent.appendChild(createSvgElement("circle", {
    class: "field-dot",
    cx: point.x.toFixed(2),
    cy: point.y.toFixed(2),
    r: String(radius),
  }));
}

function renderBoardSurface() {
  const defs = els.pitch.querySelector("defs");
  const board = els.pitch.querySelector(".board-surface");
  const goal = els.pitch.querySelector(".goal-surface");
  defs.innerHTML = "";
  board.innerHTML = "";
  goal.innerHTML = "";

  const clip = createSvgElement("clipPath", {
    id: "pitchClip",
    clipPathUnits: "userSpaceOnUse",
  });
  clip.appendChild(createSvgElement("path", {
    d: pointsToPath([pitchPlane.topLeft, pitchPlane.topRight, pitchPlane.bottomRight, pitchPlane.bottomLeft], true),
  }));
  defs.appendChild(clip);

  appendPath(
    board,
    "board-shadow",
    "M 6 5 C 6 3, 8 2, 10 2 L 90 2 C 92 2, 94 3, 94 5 L 94 96 C 94 98, 92 99, 90 99 L 10 99 C 8 99, 6 98, 6 96 Z",
  );
  appendPath(
    board,
    "board-base",
    "M 6 4 C 6 2, 8 1, 10 1 L 90 1 C 92 1, 94 2, 94 4 L 94 96 C 94 98, 92 99, 90 99 L 10 99 C 8 99, 6 98, 6 96 Z",
  );
}

function renderPitchSurface() {
  if (pitchSurfaceRendered) return;

  renderBoardSurface();
  const surface = els.pitch.querySelector(".pitch-surface");
  surface.innerHTML = "";
  surface.setAttribute("clip-path", "url(#pitchClip)");

  appendMappedPolygon(surface, "pitch-fill", [[0, 0], [100, 0], [100, 100], [0, 100]]);

  for (let index = 0; index < 8; index += 1) {
    const yStart = index * 12.5;
    const yEnd = yStart + 12.5;
    appendMappedPolygon(
      surface,
      index % 2 ? "stripe stripe-light" : "stripe stripe-dark",
      [[0, yStart], [100, yStart], [100, yEnd], [0, yEnd]],
    );
  }

  appendPath(surface, "field-line boundary-line", mappedFieldPolygon([[0, 0], [100, 0], [100, 100], [0, 100]]));
  appendPath(surface, "field-line", mappedFieldLine(0, 50, 100, 50));
  appendPath(surface, "field-line", mappedFieldEllipsePath(50, 50, 14.9, 10.1, 0, Math.PI * 2, 80));
  appendDot(surface, 50, 50, 0.5);

  appendMappedFieldPolygon(surface, "field-line", [[20.2, 0], [79.8, 0], [79.8, 22.7], [20.2, 22.7]]);
  appendMappedFieldPolygon(surface, "field-line", [[35.7, 0], [64.3, 0], [64.3, 8.6], [35.7, 8.6]]);
  appendPath(surface, "field-line", mappedFieldEllipsePath(50, 22.7, 13.7, 6.2, 0.08 * Math.PI, 0.92 * Math.PI, 42));
  appendDot(surface, 50, 14.8, 0.46);

  appendMappedFieldPolygon(surface, "field-line", [[20.2, 77.3], [79.8, 77.3], [79.8, 100], [20.2, 100]]);
  appendMappedFieldPolygon(surface, "field-line", [[35.7, 91.4], [64.3, 91.4], [64.3, 100], [35.7, 100]]);
  appendPath(surface, "field-line", mappedFieldEllipsePath(50, 77.3, 13.7, 6.2, 1.08 * Math.PI, 1.92 * Math.PI, 42));
  appendDot(surface, 50, 85.2, 0.46);

  appendPath(surface, "field-line", mappedFieldEllipsePath(0, 100, 9.5, 6.2, 1.5 * Math.PI, 2 * Math.PI, 18));
  appendPath(surface, "field-line", mappedFieldEllipsePath(100, 100, 9.5, 6.2, Math.PI, 1.5 * Math.PI, 18));
  appendPath(surface, "field-line", mappedFieldEllipsePath(0, 0, 9.5, 6.2, 0, 0.5 * Math.PI, 18));
  appendPath(surface, "field-line", mappedFieldEllipsePath(100, 0, 9.5, 6.2, 0.5 * Math.PI, Math.PI, 18));

  pitchSurfaceRendered = true;
}

function playerById(playerId) {
  return players.find((player) => player.id === playerId);
}

function assignedSlotFor(playerId) {
  return Object.entries(state.assignments).find(([, id]) => id === playerId)?.[0] || "";
}

function cleanText(value, fallback) {
  const trimmed = value.trim();
  return trimmed || fallback;
}

function initials(name) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function lastName(name) {
  return name.split(" ").at(-1);
}

function roleAccent(player) {
  if (player.role.includes("Keeper") || player.role.includes("Doelman")) return "#f2c94c";
  if (player.role.includes("Verdediger")) return "#56ccf2";
  if (player.role.includes("Middenvelder")) return "#6fcf97";
  return "#eb5757";
}

function playerPlaceholderPhoto(player) {
  const accent = roleAccent(player);
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 300">
      <rect width="240" height="300" fill="#121b2a"/>
      <path d="M0 0h240v88H0z" fill="${accent}" opacity=".18"/>
      <circle cx="120" cy="92" r="50" fill="#273449"/>
      <path d="M44 256c9-67 42-105 76-105s67 38 76 105" fill="#273449"/>
      <path d="M57 300h126l-14-94H71z" fill="#b30f24"/>
      <path d="M103 202h34l-8 98h-18z" fill="#f6f7fb"/>
      <text x="120" y="87" text-anchor="middle" fill="#f6f7fb" font-family="Arial, sans-serif" font-size="42" font-weight="900">${escapeHtml(String(player.number))}</text>
      <text x="120" y="282" text-anchor="middle" fill="#f6f7fb" font-family="Arial, sans-serif" font-size="20" font-weight="900">${escapeHtml(initials(player.name))}</text>
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg.trim())}`;
}

function playerNormalPhoto(player) {
  return player.photo || playerPlaceholderPhoto(player);
}

function versionedPhotoUrl(photo) {
  if (!photo || photo.startsWith("data:")) return photo;
  return `${photo}${photo.includes("?") ? "&" : "?"}v=${playerAssetVersion}`;
}

function playerActivePhoto(player) {
  if (!player.photo) return playerPlaceholderPhoto(player);
  if (!state.memePlayers.has(player.id) || !player.memePhoto) return player.photo;
  return player.memePhoto;
}

function playerPhotoMarkup(player, lazy = false) {
  const photo = versionedPhotoUrl(playerActivePhoto(player));
  const memeActive = state.memePlayers.has(player.id) && player.memePhoto;
  const focusX = memeActive
    ? (player.memePhotoFocusX ?? 0.5)
    : (player.photoFocusX ?? 0.5);
  const zoom = memeActive
    ? (player.memePhotoZoom ?? 1.08)
    : (player.photoZoom ?? 1.08);
  const imageStyle = ` style="object-position: ${focusX * 100}% top; --photo-scale: ${zoom}"`;
  const fallback = state.memePlayers.has(player.id) && player.photo
    ? ` data-photo-fallback="${versionedPhotoUrl(playerNormalPhoto(player))}"`
    : "";
  const loading = lazy ? ' loading="lazy" fetchpriority="low"' : "";
  return `<img src="${photo}" alt="" decoding="async"${loading}${imageStyle}${fallback} />`;
}

function renderMemeControlState() {
  const memePlayers = players.filter((player) => player.memePhoto);
  const enabledCount = memePlayers.filter((player) => state.memePlayers.has(player.id)).length;

  els.photoModeMeme.disabled = memePlayers.length === 0;
  els.photoModeMeme.checked = memePlayers.length > 0 && enabledCount === memePlayers.length;
  els.photoModeMeme.indeterminate = enabledCount > 0 && enabledCount < memePlayers.length;
}

function splitNameMarkup(name) {
  const parts = name.split(" ");
  if (parts.length === 1) return `<span>${escapeHtml(name)}</span>`;
  const last = parts.pop();
  return `<span>${escapeHtml(parts.join(" "))}</span><span>${escapeHtml(last)}</span>`;
}

function matchupText() {
  const opponent = cleanText(state.opponent, "Tegenstander");
  return state.venue === "home" ? `Ajax\n${opponent}` : `${opponent}\nAjax`;
}

function fitMatchupText() {
  const heading = els.posterMatchup.closest("h1");
  const title = heading.closest(".poster-title");
  const header = heading.closest(".poster-header");
  const score = header.querySelector(".scoreline");
  heading.style.removeProperty("--matchup-size");
  title.style.removeProperty("--title-max-width");

  requestAnimationFrame(() => {
    const isMobile = window.matchMedia("(max-width: 719px)").matches;
    const headerRect = header.getBoundingClientRect();
    const titleRect = title.getBoundingClientRect();
    const scoreRect = score.getBoundingClientRect();
    const gap = isMobile ? 22 : 44;
    const minSize = isMobile ? 20 : 18;
    const availableWidth = scoreRect.x - gap - titleRect.left;
    const headerWidth = headerRect.right - gap - titleRect.left;
    const maxWidth = Math.max(0, Math.min(availableWidth, headerWidth));
    if (maxWidth < 1) return;

    title.style.setProperty("--title-max-width", `${maxWidth}px`);
    const canvas = fitMatchupText.canvas || document.createElement("canvas");
    fitMatchupText.canvas = canvas;
    const context = canvas.getContext("2d");
    const lines = matchupText().toUpperCase().split("\n");
    let size = Number.parseFloat(getComputedStyle(heading).fontSize);
    while (size > minSize) {
      heading.style.setProperty("--matchup-size", `${size}px`);
      const headingStyle = getComputedStyle(heading);
      context.font = `${headingStyle.fontWeight} ${size}px ${headingStyle.fontFamily}`;
      const widestLine = Math.max(...lines.map((line) => context.measureText(line).width));
      if (widestLine <= maxWidth) break;
      size -= 1;
    }
  });
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function setMultilineText(element, value) {
  const nodes = [];
  String(value).split("\n").forEach((line, index) => {
    if (index) nodes.push(document.createElement("br"));
    nodes.push(document.createTextNode(line));
  });
  element.replaceChildren(...nodes);
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function projectPitchPosition(coord) {
  return mapPitchPoint(coord.x, coord.y);
}

function unprojectPitchPosition(point) {
  const y = clamp(
    ((point.y - pitchPlane.topLeft.y) / (pitchPlane.bottomLeft.y - pitchPlane.topLeft.y)) * 100,
    0,
    100,
  );
  const yRatio = y / 100;
  const left = pitchPlane.topLeft.x + (pitchPlane.bottomLeft.x - pitchPlane.topLeft.x) * yRatio;
  const right = pitchPlane.topRight.x + (pitchPlane.bottomRight.x - pitchPlane.topRight.x) * yRatio;
  return {
    x: clamp(((point.x - left) / (right - left)) * 100, 12, 88),
    y: clamp(y, 10, 84),
  };
}

function assignPlayer(playerId, slotValue) {
  Object.entries(state.assignments).forEach(([slot, id]) => {
    if (id === playerId) delete state.assignments[slot];
  });

  const isWijndalBankChoice = playerId === "wijndal" && slotValue.startsWith("wijndal-bank-");
  if (playerId === "wijndal") {
    state.wijndalBankChoice = isWijndalBankChoice ? slotValue : "";
  }

  if (slotValue && !isWijndalBankChoice) {
    state.assignments[slotValue] = playerId;
  }

  render();
}

function updateMatchState() {
  state.creator = els.creatorInput.value;
  state.opponent = els.opponentInput.value;
  state.venue = document.querySelector('input[name="venue"]:checked')?.value || "home";
  renderPosterText();
}

function renderPosterText() {
  const creator = cleanText(state.creator, "");
  const ajaxScore = cleanText(state.ajaxScore, "0");
  const opponentScore = cleanText(state.opponentScore, "0");
  const ajaxPlaysAway = state.venue === "away";
  els.posterCreatorTop.textContent = creator;
  setMultilineText(els.posterMatchup, matchupText());
  els.posterAjaxScore.textContent = ajaxPlaysAway ? opponentScore : ajaxScore;
  els.posterOpponentScore.textContent = ajaxPlaysAway ? ajaxScore : opponentScore;
  els.ajaxScoreOutput.textContent = ajaxScore;
  els.opponentScoreOutput.textContent = opponentScore;
  els.opponentScoreLabel.textContent = cleanText(state.opponent, "Tegenstander");
  fitMatchupText();
}

function setTheme(theme) {
  const normalizedTheme = legacyThemes[theme] || theme;
  const nextTheme = themes[normalizedTheme] ? normalizedTheme : defaultTheme;
  const themeConfig = themes[nextTheme];

  document.body.dataset.theme = themeConfig.theme;
  if (themeConfig.kit) {
    document.body.dataset.kit = themeConfig.kit;
  } else {
    delete document.body.dataset.kit;
  }

  if (els.themeSelect) {
    els.themeSelect.value = nextTheme;
  }

  try {
    window.localStorage.setItem(themeStorageKey, nextTheme);
  } catch (error) {
    // Theme persistence is optional; the toggle should still work without storage.
  }
}

function initTheme() {
  let savedTheme = "";
  try {
    savedTheme = window.localStorage.getItem(themeStorageKey) || "";
  } catch (error) {
    savedTheme = "";
  }

  setTheme(savedTheme || document.body.dataset.theme || defaultTheme);
}

function formationLeftSideSlot(formation) {
  return formationPositions(formation).find((position) => (
    position.label === "Linksback" || position.label === "Linker wingback"
  ))?.id || "5";
}

function setFormation(formation) {
  const nextFormation = formations[formation] ? formation : defaultFormation;
  const previousWijndalSlot = formationLeftSideSlot(state.formation);
  const nextWijndalSlot = formationLeftSideSlot(nextFormation);
  if (
    state.assignments[previousWijndalSlot] === "wijndal"
    && previousWijndalSlot !== nextWijndalSlot
  ) {
    const displacedPlayer = state.assignments[nextWijndalSlot];
    state.assignments[nextWijndalSlot] = "wijndal";
    if (displacedPlayer) {
      state.assignments[previousWijndalSlot] = displacedPlayer;
    } else {
      delete state.assignments[previousWijndalSlot];
    }
  }

  state.formation = nextFormation;
  state.positions = formationCoordinates(nextFormation);
  document.body.dataset.formation = nextFormation;
  if (els.formationSelect) els.formationSelect.value = nextFormation;
  renderPlayers();
  renderPitch();
}

function changeScore(team, amount) {
  const key = team === "ajax" ? "ajaxScore" : "opponentScore";
  state[key] = String(clamp(Number(state[key]) + amount, 0, 15));
  renderPosterText();
}

function renderPlayers() {
  const search = state.search.trim().toLowerCase();
  const visiblePlayers = players.filter((player) => {
    const haystack = `${player.name} ${player.role} ${player.number}`.toLowerCase();
    return haystack.includes(search);
  });

  if (!visiblePlayers.length) {
    els.list.innerHTML = '<div class="empty-state">Geen spelers gevonden.</div>';
    return;
  }

  const playerGroups = [
    { id: "defenders", label: "Verdediging", roles: ["Verdediger"] },
    { id: "midfielders", label: "Middenveld", roles: ["Middenvelder"] },
    { id: "attackers", label: "Aanval", roles: ["Aanvaller"] },
    { id: "keepers", label: "Keepers", roles: ["Keeper", "Doelman"] },
  ];

  const playerRowMarkup = (player) => {
      const currentSlot = assignedSlotFor(player.id);
      const positions = formationPositions();
      const wijndalPosition = positions.find((position) => (
        position.label === "Linksback" || position.label === "Linker wingback"
      ));
      const wijndalSlot = wijndalPosition?.id || "5";
      const options = player.id === "wijndal"
        ? [
            `<option value="" ${!currentSlot && !state.wijndalBankChoice ? "selected" : ""}>Bank</option>`,
            `<option value="wijndal-bank-now" ${state.wijndalBankChoice === "wijndal-bank-now" ? "selected" : ""}>Laat hem nu op de bank</option>`,
            `<option value="wijndal-bank-easy" ${state.wijndalBankChoice === "wijndal-bank-easy" ? "selected" : ""}>Nee echt, niemand wil easy easy in de opstelling zien</option>`,
            `<option value="${wijndalSlot}" ${currentSlot === wijndalSlot ? "selected" : ""}>Ik ga toch voor de beste linker kant van Europa</option>`,
          ].join("")
        : [
            '<option value="">Bank</option>',
            ...positions.map((position) => {
              const slot = position.id;
              const selected = slot === currentSlot ? "selected" : "";
              const occupiedPlayer = playerById(state.assignments[slot]);
              const occupied = occupiedPlayer && occupiedPlayer.id !== player.id ? ` - ${occupiedPlayer.name}` : "";
              return `<option value="${slot}" ${selected}>${position.number}. ${position.label}${escapeHtml(occupied)}</option>`;
            }),
          ].join("");
      const memeToggle = player.memePhoto
        ? `
          <label class="player-meme-toggle">
            <input
              type="checkbox"
              data-player-meme="${player.id}"
              aria-label="Meme voor ${escapeHtml(player.name)}"
              ${state.memePlayers.has(player.id) ? "checked" : ""}
            />
            <span class="player-meme-control">
              <span class="player-meme-track" aria-hidden="true"></span>
              <span class="player-meme-status">
                ${state.memePlayers.has(player.id) ? "Meme aan" : "Meme uit"}
              </span>
            </span>
          </label>
        `
        : "";

      return `
        <article class="player-row ${currentSlot ? "is-selected" : ""} ${player.memePhoto ? "has-meme" : ""}" data-player-id="${player.id}">
          <div class="player-head">
            ${playerPhotoMarkup(player, true)}
          </div>
          <div class="player-meta">
            <p class="player-role">${escapeHtml(player.role)}</p>
            <p class="player-name">${splitNameMarkup(player.name)}</p>
          </div>
          <div class="player-actions">
            <select aria-label="Positie voor ${escapeHtml(player.name)}" data-position-select="${player.id}">
              ${options}
            </select>
            ${memeToggle}
          </div>
        </article>
      `;
  };

  els.list.innerHTML = playerGroups
    .map((group) => {
      const groupPlayers = visiblePlayers.filter((player) => group.roles.includes(player.role));
      if (!groupPlayers.length) return "";

      return `
        <section class="player-group" aria-labelledby="player-group-${group.id}">
          <h3 class="player-group-title" id="player-group-${group.id}">${group.label}</h3>
          <div class="player-group-list">
            ${groupPlayers.map(playerRowMarkup).join("")}
          </div>
        </section>
      `;
    })
    .join("");
}

function renderPitch() {
  renderPitchSurface();
  els.pitch.querySelectorAll(".player-marker").forEach((marker) => marker.remove());

  const positions = formationPositions();
  const formationConfig = formations[state.formation];
  const compactSlots = formationConfig.compactSlots || new Set();

  positions.forEach((position, index) => {
    const slot = position.id;
    const player = playerById(state.assignments[slot]);
    if (!player) return;

    const coord = projectPitchPosition(state.positions[index]);
    const marker = document.createElement("button");
    const isCompact = formationConfig.compactAll || compactSlots.has(slot);
    marker.className = isCompact ? "player-marker is-compact" : "player-marker";
    marker.type = "button";
    marker.dataset.slot = slot;
    marker.dataset.positionIndex = String(index);
    marker.style.setProperty("--x", `${coord.x}%`);
    marker.style.setProperty("--y", `${coord.y}%`);
    marker.setAttribute("aria-label", `${player.name} verslepen als ${position.label}`);

    marker.innerHTML = `
      <span class="marker-photo">
        ${playerPhotoMarkup(player)}
      </span>
      <span class="marker-name">${escapeHtml(lastName(player.name))}</span>
    `;

    els.pitch.appendChild(marker);
  });
}

function renderStatus() {
  els.count.textContent = String(Object.keys(state.assignments).length);
}

function render() {
  renderPosterText();
  renderPlayers();
  renderPitch();
  renderStatus();
  renderMemeControlState();
}

function pointerPositionInPitch(event) {
  const rect = els.pitch.getBoundingClientRect();
  const point = {
    x: clamp(((event.clientX - rect.left) / rect.width) * 100, 10, 90),
    y: clamp(((event.clientY - rect.top) / rect.height) * 100, 10, 90),
  };
  return unprojectPitchPosition(point);
}

function startDrag(event) {
  const marker = event.target.closest(".player-marker");
  if (!marker) return;
  event.preventDefault();

  activeDrag = {
    pointerId: event.pointerId,
    positionIndex: Number(marker.dataset.positionIndex),
    marker,
  };

  marker.setPointerCapture(event.pointerId);
  marker.classList.add("is-dragging");
}

function moveDrag(event) {
  if (!activeDrag || event.pointerId !== activeDrag.pointerId) return;
  event.preventDefault();

  const position = pointerPositionInPitch(event);
  const projectedPosition = projectPitchPosition(position);
  state.positions[activeDrag.positionIndex] = position;
  activeDrag.marker.style.setProperty("--x", `${projectedPosition.x}%`);
  activeDrag.marker.style.setProperty("--y", `${projectedPosition.y}%`);
}

function endDrag(event) {
  if (!activeDrag || event.pointerId !== activeDrag.pointerId) return;
  activeDrag.marker.classList.remove("is-dragging");
  activeDrag = null;
}

function resetPoster() {
  state.creator = "";
  state.opponent = "";
  state.ajaxScore = "0";
  state.opponentScore = "0";
  state.venue = "home";
  state.memePlayers = new Set();
  state.search = "";
  state.wijndalBankChoice = "";
  state.assignments = { ...initialAssignments };
  state.positions = formationCoordinates(state.formation);

  els.creatorInput.value = "";
  els.opponentInput.value = "";
  els.search.value = "";
  document.querySelector('input[name="venue"][value="home"]').checked = true;
  els.photoModeMeme.checked = false;
  render();
}

function loadImage(src) {
  return new Promise((resolve) => {
    if (!src) {
      resolve(null);
      return;
    }

    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = () => resolve(null);
    image.src = src;
  });
}

async function loadPlayerImage(player) {
  const assignedSlot = assignedSlotFor(player.id);
  const renderedImage = assignedSlot
    ? els.pitch.querySelector(`.player-marker[data-slot="${assignedSlot}"] img`)
    : null;
  if (renderedImage?.complete && renderedImage.naturalWidth > 0) return renderedImage;

  const image = await loadImage(versionedPhotoUrl(playerActivePhoto(player)));
  if (image || !state.memePlayers.has(player.id)) return image;
  return loadImage(versionedPhotoUrl(playerNormalPhoto(player)));
}

function drawRedTexture(ctx, x, y, width, height) {
  ctx.fillStyle = "#c90022";
  ctx.fillRect(x, y, width, height);
  ctx.fillStyle = "rgba(80, 0, 12, 0.2)";
  for (let row = 0; row < height; row += 18) {
    for (let col = 0; col < width; col += 22) {
      const offset = ((row * 17 + col * 31) % 19) - 9;
      ctx.fillRect(x + col + offset, y + row, 16, 7);
    }
  }
}

function drawRoundedRect(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
}

function drawImageCover(ctx, image, x, y, width, height, zoom = 1, focusX = 0.5) {
  const imageWidth = image.naturalWidth || image.width;
  const imageHeight = image.naturalHeight || image.height;
  const sourceRatio = imageWidth / imageHeight;
  const targetRatio = width / height;
  let sourceWidth = imageWidth;
  let sourceHeight = imageHeight;
  let sourceX = 0;
  let sourceY = 0;

  if (sourceRatio > targetRatio) {
    sourceWidth = imageHeight * targetRatio;
    sourceX = (imageWidth - sourceWidth) * focusX;
  } else {
    sourceHeight = imageWidth / targetRatio;
    sourceY = (imageHeight - sourceHeight) / 2;
  }

  if (zoom > 1) {
    const zoomedWidth = sourceWidth / zoom;
    const zoomedHeight = sourceHeight / zoom;
    sourceX += (sourceWidth - zoomedWidth) / 2;
    sourceY += (sourceHeight - zoomedHeight) / 4;
    sourceWidth = zoomedWidth;
    sourceHeight = zoomedHeight;
  }

  ctx.drawImage(image, sourceX, sourceY, sourceWidth, sourceHeight, x, y, width, height);
}

function drawCenteredText(ctx, text, x, y, maxWidth, lineHeight) {
  const words = text.split(" ");
  const lines = [];
  let line = "";

  words.forEach((word) => {
    const test = line ? `${line} ${word}` : word;
    if (ctx.measureText(test).width > maxWidth && line) {
      lines.push(line);
      line = word;
    } else {
      line = test;
    }
  });

  lines.push(line);
  lines.slice(0, 2).forEach((textLine, index) => {
    ctx.fillText(textLine, x, y + index * lineHeight);
  });
}

function setFitFont(ctx, text, weight, initialSize, minSize, family, maxWidth) {
  let size = initialSize;
  do {
    ctx.font = `${weight} ${size}px ${family}`;
    if (ctx.measureText(text).width <= maxWidth || size <= minSize) break;
    size -= 2;
  } while (size >= minSize);
  return size;
}

function collectDocumentStyles() {
  return Array.from(document.styleSheets)
    .map((sheet) => {
      try {
        return Array.from(sheet.cssRules).map((rule) => rule.cssText).join("\n");
      } catch {
        return "";
      }
    })
    .join("\n");
}

function blobToDataUrl(blob) {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => resolve("");
    reader.readAsDataURL(blob);
  });
}

function requestBlob(url) {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.open("GET", url);
    request.responseType = "blob";
    request.onload = () => {
      if (request.status >= 200 && request.status < 300) resolve(request.response);
      else reject(new Error(`Image request failed: ${request.status}`));
    };
    request.onerror = reject;
    request.send();
  });
}

async function imageSourceToDataUrl(src) {
  if (!src || src.startsWith("data:")) return src;

  try {
    const blob = typeof fetch === "function"
      ? await fetch(src).then((response) => (response.ok ? response.blob() : null))
      : await requestBlob(src);
    return blob ? await blobToDataUrl(blob) : src;
  } catch {
    return src;
  }
}

async function inlineCloneImages(clone) {
  const images = Array.from(clone.querySelectorAll("img"));
  await Promise.all(images.map(async (image) => {
    image.setAttribute("src", await imageSourceToDataUrl(image.getAttribute("src")));
  }));
}

async function createLegacyPosterCanvas(type = "image/png") {
  await document.fonts?.ready;

  const source = document.querySelector("#poster");
  const sourceRect = source.getBoundingClientRect();
  const sourceWidth = Math.round(sourceRect.width);
  const sourceHeight = Math.round(sourceRect.height);
  const exportWidth = 1080;
  const exportHeight = Math.round((sourceHeight / sourceWidth) * exportWidth);
  const scale = exportWidth / sourceWidth;
  const canvas = document.createElement("canvas");
  canvas.width = exportWidth;
  canvas.height = exportHeight;
  const ctx = canvas.getContext("2d");

  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = "high";
  ctx.scale(scale, scale);

  const styles = getComputedStyle(document.documentElement);
  const color = (token) => styles.getPropertyValue(token).trim();
  const panelBg = color("--panel-bg") || "#0a0f19";
  const cardBg = color("--card-bg") || "#111926";
  const activeBg = color("--card-active-bg") || "#182231";
  const inputBg = color("--input-bg") || "#121b2a";
  const text = color("--text-primary") || "#f6f7fb";
  const muted = color("--text-secondary") || "#a7afbf";
  const line = "rgba(246,247,251,0.42)";
  const activeKit = document.body.dataset.theme === "ajaxpro-kit" ? document.body.dataset.kit : "";
  const isClassicExport = document.body.dataset.theme === "classic";
  const accentRgb = color("--red-rgb") || "179, 15, 36";
  const exportPitch = kitExportPitchPalettes[activeKit] || null;
  const exportLine = isClassicExport ? "rgba(246,247,251,0.36)" : (exportPitch?.line || line);

  const rectInPoster = (selector) => {
    const element = source.querySelector(selector);
    if (!element) return null;
    const rect = element.getBoundingClientRect();
    return {
      x: rect.left - sourceRect.left,
      y: rect.top - sourceRect.top,
      width: rect.width,
      height: rect.height,
      right: rect.right - sourceRect.left,
      bottom: rect.bottom - sourceRect.top,
    };
  };

  ctx.fillStyle = panelBg;
  ctx.fillRect(0, 0, sourceWidth, sourceHeight);

  const headerGlow = ctx.createRadialGradient(sourceWidth * 0.32, sourceHeight * 0.14, 0, sourceWidth * 0.32, sourceHeight * 0.14, sourceWidth * 0.55);
  headerGlow.addColorStop(0, `rgba(${accentRgb},0.18)`);
  headerGlow.addColorStop(1, `rgba(${accentRgb},0)`);
  ctx.fillStyle = headerGlow;
  ctx.fillRect(0, 0, sourceWidth, sourceHeight * 0.42);

  ctx.save();
  ctx.strokeStyle = "rgba(246,247,251,0.025)";
  ctx.lineWidth = 1;
  for (let x = -sourceHeight; x < sourceWidth + sourceHeight; x += 14) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x + sourceHeight * 0.58, sourceHeight);
    ctx.stroke();
  }
  ctx.restore();

  const logoRect = rectInPoster(".poster-logo");
  const logo = await loadImage(source.querySelector(".poster-logo")?.getAttribute("src"));
  if (logo && logoRect) {
    ctx.drawImage(logo, logoRect.x, logoRect.y, logoRect.width, logoRect.height);
  }

  const titleRect = rectInPoster(".poster-title");
  const eyebrowRect = rectInPoster(".poster .eyebrow");
  const headingRect = rectInPoster(".poster h1");
  const creatorRect = rectInPoster(".creator-line");
  const scoreRect = rectInPoster(".scoreline");
  let headerContentBottom = 0;
  if (titleRect) {
    ctx.textAlign = "left";

    if (isClassicExport && eyebrowRect && headingRect && creatorRect) {
      ctx.fillStyle = "rgba(246,247,251,0.62)";
      ctx.font = "900 13px Arial";
      ctx.letterSpacing = "2.8px";
      ctx.fillText("DE OPSTELLING", eyebrowRect.x, eyebrowRect.y + eyebrowRect.height * 0.78);
      ctx.letterSpacing = "0px";

      const lines = matchupText().toUpperCase().split("\n");
      const maxTitleWidth = headingRect.width;
      let fontSize = Math.max(28, Math.min(46, headingRect.height / Math.max(1.8, lines.length * 0.9)));
      do {
        ctx.font = `950 ${fontSize}px Arial`;
        if (lines.every((lineText) => ctx.measureText(lineText).width <= maxTitleWidth) || fontSize <= 24) break;
        fontSize -= 1;
      } while (fontSize > 24);

      ctx.fillStyle = text;
      ctx.font = `950 ${fontSize}px Arial`;
      const titleLineHeight = fontSize * 0.9;
      const titleStartY = headingRect.y + fontSize * 0.82;
      lines.forEach((lineText, index) => {
        ctx.fillText(lineText, headingRect.x, titleStartY + index * titleLineHeight);
      });

      ctx.fillStyle = "rgba(246,247,251,0.58)";
      ctx.font = "800 18px Arial";
      ctx.fillText(`door ${cleanText(state.creator, "")}`, creatorRect.x, creatorRect.y + creatorRect.height * 0.78);
      headerContentBottom = Math.max(headerContentBottom, creatorRect.bottom);
    } else {
      const compactTitleY = Math.max(42, titleRect.y - 6);
      ctx.fillStyle = "rgba(246,247,251,0.62)";
      ctx.font = "900 12px Arial";
      ctx.letterSpacing = "2px";
      ctx.fillText("DE OPSTELLING", titleRect.x, compactTitleY + 86);
      ctx.letterSpacing = "0px";

      const lines = matchupText().toUpperCase().split("\n");
      const maxTitleWidth = scoreRect ? Math.max(120, scoreRect.x - titleRect.x - 44) : titleRect.width;
      let fontSize = 42;
      do {
        ctx.font = `950 ${fontSize}px Arial`;
        if (lines.every((lineText) => ctx.measureText(lineText).width <= maxTitleWidth) || fontSize <= 22) break;
        fontSize -= 1;
      } while (fontSize > 22);

      ctx.fillStyle = text;
      ctx.font = `950 ${fontSize}px Arial`;
      lines.forEach((lineText, index) => {
        ctx.fillText(lineText, titleRect.x, compactTitleY + 116 + index * fontSize * 0.84);
      });

      ctx.fillStyle = "rgba(246,247,251,0.58)";
      ctx.font = "800 18px Arial";
      ctx.fillText(`door ${cleanText(state.creator, "")}`, titleRect.x, compactTitleY + 188);
      headerContentBottom = Math.max(headerContentBottom, compactTitleY + 206);
    }
  }

  if (scoreRect) {
    const compactScore = {
      x: scoreRect.x,
      y: isClassicExport ? scoreRect.y : Math.max(126, scoreRect.y - 38),
      width: scoreRect.width,
      height: scoreRect.height,
    };
    ctx.fillStyle = isClassicExport ? "rgba(5,8,13,0.62)" : "rgba(5,8,13,0.58)";
    drawRoundedRect(ctx, compactScore.x, compactScore.y, compactScore.width, compactScore.height, isClassicExport ? 14 : 16);
    ctx.fill();
    ctx.strokeStyle = "rgba(246,247,251,0.12)";
    ctx.stroke();

    ctx.textAlign = "center";
    ctx.fillStyle = text;
    ctx.font = "950 42px Arial";
    ctx.fillText(
      `${cleanText(state.ajaxScore, "0")} - ${cleanText(state.opponentScore, "0")}`,
      compactScore.x + compactScore.width / 2,
      compactScore.y + compactScore.height / 2 + 15,
    );
    headerContentBottom = Math.max(headerContentBottom, compactScore.y + compactScore.height);
  }

  const basePitchRect = rectInPoster(".pitch");
  if (basePitchRect) {
    const pitchWidth = isClassicExport ? basePitchRect.width : Math.min(sourceWidth - 22, basePitchRect.width * 1.08);
    const pitchTop = isClassicExport ? basePitchRect.y : Math.max(basePitchRect.y * 0.78, headerContentBottom + 28);
    const pitchHeight = isClassicExport ? basePitchRect.height : Math.min(sourceHeight - pitchTop - 20, pitchWidth / 0.72);
    const pitchRect = {
      x: isClassicExport ? basePitchRect.x : (sourceWidth - pitchWidth) / 2,
      y: pitchTop,
      width: pitchWidth,
      height: pitchHeight,
    };
    const p = (x, y) => ({
      x: pitchRect.x + (x / 100) * pitchRect.width,
      y: pitchRect.y + (y / 100) * pitchRect.height,
    });
    const pitchPoint = (xPercent, yPercent) => {
      if (isClassicExport) {
        return p(xPercent, yPercent);
      }

      const yRatio = yPercent / 100;
      const left = {
        x: pitchPlane.topLeft.x + (pitchPlane.bottomLeft.x - pitchPlane.topLeft.x) * yRatio,
        y: pitchPlane.topLeft.y + (pitchPlane.bottomLeft.y - pitchPlane.topLeft.y) * yRatio,
      };
      const right = {
        x: pitchPlane.topRight.x + (pitchPlane.bottomRight.x - pitchPlane.topRight.x) * yRatio,
        y: pitchPlane.topRight.y + (pitchPlane.bottomRight.y - pitchPlane.topRight.y) * yRatio,
      };
      return p(left.x + (right.x - left.x) * (xPercent / 100), left.y + (right.y - left.y) * (xPercent / 100));
    };
    const fieldPoint = (xPercent, yPercent) => {
      const fieldX = fieldInset.x + (xPercent / 100) * (100 - fieldInset.x * 2);
      const fieldY = fieldInset.y + (yPercent / 100) * (100 - fieldInset.y * 2);
      return pitchPoint(fieldX, fieldY);
    };
    const drawPoly = (points, close = true) => {
      ctx.beginPath();
      points.forEach((point, index) => {
        if (index) ctx.lineTo(point.x, point.y);
        else ctx.moveTo(point.x, point.y);
      });
      if (close) ctx.closePath();
    };
    const mappedPoly = (coords) => drawPoly(coords.map(([x, y]) => pitchPoint(x, y)));
    const mappedFieldPoly = (coords) => drawPoly(coords.map(([x, y]) => fieldPoint(x, y)));
    const strokeLine = (x1, y1, x2, y2) => {
      const a = fieldPoint(x1, y1);
      const b = fieldPoint(x2, y2);
      ctx.beginPath();
      ctx.moveTo(a.x, a.y);
      ctx.lineTo(b.x, b.y);
      ctx.stroke();
    };
    const strokeEllipse = (cx, cy, rx, ry, start, end, steps = 56) => {
      ctx.beginPath();
      for (let step = 0; step <= steps; step += 1) {
        const angle = start + ((end - start) * step) / steps;
        const point = fieldPoint(cx + Math.cos(angle) * rx, cy + Math.sin(angle) * ry);
        if (step) ctx.lineTo(point.x, point.y);
        else ctx.moveTo(point.x, point.y);
      }
      ctx.stroke();
    };

    if (isClassicExport) {
      ctx.fillStyle = "rgba(0,0,0,0.28)";
      drawRoundedRect(ctx, pitchRect.x - 8, pitchRect.y + 9, pitchRect.width + 16, pitchRect.height - 4, 24);
      ctx.fill();

      ctx.fillStyle = cardBg;
      drawRoundedRect(ctx, pitchRect.x, pitchRect.y, pitchRect.width, pitchRect.height, 18);
      ctx.fill();
    } else {
      ctx.fillStyle = "rgba(0,0,0,0.42)";
      ctx.beginPath();
      ctx.roundRect?.(p(0, 8).x, p(8, 10).y, pitchRect.width * 0.92, pitchRect.height * 0.9, 24);
      if (typeof ctx.roundRect === "function") ctx.fill();

      ctx.fillStyle = exportPitch?.board || cardBg;
      drawPoly([
        p(8, 13), p(92, 13), p(99, 96), p(1, 96),
      ]);
      ctx.fill();

      ctx.fillStyle = exportPitch?.lip || inputBg;
      drawPoly([p(10.5, 13.5), p(89.5, 13.5), p(86.6, 14.8), p(13.4, 14.8)]);
      ctx.fill();

      ctx.fillStyle = exportPitch?.rail || panelBg;
      drawPoly([p(8.4, 15), p(13.5, 14.8), p(5.5, 95), p(1.1, 96)]);
      ctx.fill();
      drawPoly([p(91.6, 15), p(86.5, 14.8), p(94.5, 95), p(98.9, 96)]);
      ctx.fill();
    }

    ctx.save();
    mappedPoly([[0, 0], [100, 0], [100, 100], [0, 100]]);
    ctx.clip();
    for (let index = 0; index < 10; index += 1) {
      ctx.fillStyle = index % 2
        ? (exportPitch?.light || cardBg)
        : (exportPitch?.dark || panelBg);
      mappedPoly([[0, index * 10], [100, index * 10], [100, index * 10 + 10], [0, index * 10 + 10]]);
      ctx.fill();
    }

    ctx.strokeStyle = exportLine;
    ctx.lineWidth = 0.75;
    mappedFieldPoly([[0, 0], [100, 0], [100, 100], [0, 100]]);
    ctx.stroke();
    strokeLine(0, 50, 100, 50);
    strokeEllipse(50, 50, 14.4, 11.8, 0, Math.PI * 2, 80);
    [[50, 50], [50, 11.2], [50, 88.8]].forEach(([x, y]) => {
      const dot = fieldPoint(x, y);
      ctx.fillStyle = "rgba(246,247,251,0.55)";
      ctx.beginPath();
      ctx.arc(dot.x, dot.y, 2.2, 0, Math.PI * 2);
      ctx.fill();
    });
    [[[22, 0], [78, 0], [78, 16], [22, 16]], [[39, 0], [61, 0], [61, 7.2], [39, 7.2]], [[22, 84], [78, 84], [78, 100], [22, 100]], [[38.5, 92.8], [61.5, 92.8], [61.5, 100], [38.5, 100]]].forEach((coords) => {
      mappedFieldPoly(coords);
      ctx.stroke();
    });
    strokeEllipse(50, 16, 10.5, 8.3, 0.16 * Math.PI, 0.84 * Math.PI, 36);
    strokeEllipse(50, 84, 10.5, 8.3, 1.16 * Math.PI, 1.84 * Math.PI, 36);
    strokeEllipse(0, 100, 5.6, 5.4, 1.5 * Math.PI, 2 * Math.PI, 18);
    strokeEllipse(100, 100, 5.6, 5.4, Math.PI, 1.5 * Math.PI, 18);
    strokeEllipse(0, 0, 5.6, 5.4, 0, 0.5 * Math.PI, 18);
    strokeEllipse(100, 0, 5.6, 5.4, 0.5 * Math.PI, Math.PI, 18);
    ctx.restore();

    if (!isClassicExport) {
      ctx.strokeStyle = "rgba(246,247,251,0.9)";
      ctx.lineWidth = 1.2;
      const gf = [p(43.5, 14.8), p(43.5, 11.1), p(56.5, 11.1), p(56.5, 14.8)];
      ctx.beginPath();
      ctx.moveTo(gf[0].x, gf[0].y);
      gf.slice(1).forEach((point) => ctx.lineTo(point.x, point.y));
      ctx.stroke();
    }

    const positions = formationPositions();
    const formationConfig = formations[state.formation];
    const compactSlots = formationConfig.compactSlots || new Set();

    for (let index = 0; index < positions.length; index += 1) {
      const slot = positions[index].id;
      const player = playerById(state.assignments[slot]);
      if (!player) continue;

      const coord = projectPitchPosition(state.positions[index]);
      const photo = await loadPlayerImage(player);
      const isCompact = formationConfig.compactAll || compactSlots.has(slot);
      const markerWidth = isCompact ? 90 : Math.max(76, Math.min(112, sourceWidth * 0.16));
      const photoWidth = isCompact ? 64 : 76;
      const photoHeight = isCompact ? 82 : 96;
      const labelHeight = isCompact ? 24 : 27;
      let x = pitchRect.x + (coord.x / 100) * pitchRect.width;
      let y = pitchRect.y + (coord.y / 100) * pitchRect.height;
      x = clamp(x, pitchRect.x + photoWidth / 2 + 4, pitchRect.x + pitchRect.width - photoWidth / 2 - 4);
      y = clamp(
        y,
        pitchRect.y + photoHeight / 2 + 4,
        pitchRect.y + pitchRect.height - photoHeight / 2 - labelHeight - 6,
      );

      const glow = ctx.createRadialGradient(x - 8, y - 18, 0, x, y, 72);
      glow.addColorStop(0, "rgba(255,255,255,0.26)");
      glow.addColorStop(0.45, `rgba(${accentRgb},0.1)`);
      glow.addColorStop(1, `rgba(${accentRgb},0)`);
      ctx.fillStyle = glow;
      ctx.fillRect(x - 70, y - 72, 140, 144);

      const photoBg = ctx.createLinearGradient(x, y - photoHeight / 2, x, y + photoHeight / 2);
      photoBg.addColorStop(0, "#e9e2d8");
      photoBg.addColorStop(1, "#d8cfc4");
      ctx.fillStyle = photoBg;
      drawRoundedRect(ctx, x - photoWidth / 2, y - photoHeight / 2, photoWidth, photoHeight, 10);
      ctx.fill();
      ctx.strokeStyle = "rgba(255,255,255,0.38)";
      ctx.stroke();

      ctx.save();
      drawRoundedRect(ctx, x - photoWidth / 2, y - photoHeight / 2, photoWidth, photoHeight, 10);
      ctx.clip();
      const highlight = ctx.createRadialGradient(x - 16, y - 36, 0, x - 16, y - 36, 64);
      highlight.addColorStop(0, "rgba(255,255,255,0.55)");
      highlight.addColorStop(1, "rgba(255,255,255,0)");
      ctx.fillStyle = highlight;
      ctx.fillRect(x - photoWidth / 2, y - photoHeight / 2, photoWidth, photoHeight);
      ctx.restore();

      if (photo) {
        const memeActive = state.memePlayers.has(player.id) && player.memePhoto;
        const photoZoom = memeActive
          ? (player.memePhotoZoom ?? 1.02)
          : (player.photoZoom ?? 1.02);
        const photoFocusX = memeActive
          ? (player.memePhotoFocusX ?? 0.5)
          : (player.photoFocusX ?? 0.5);
        ctx.save();
        drawRoundedRect(ctx, x - photoWidth / 2, y - photoHeight / 2, photoWidth, photoHeight, 10);
        ctx.clip();
        ctx.filter = "saturate(1.04) contrast(1.05) brightness(1.04)";
        drawImageCover(
          ctx,
          photo,
          x - photoWidth / 2,
          y - photoHeight / 2,
          photoWidth,
          photoHeight,
          photoZoom,
          photoFocusX,
        );
        ctx.filter = "none";
        ctx.restore();
      } else {
        ctx.fillStyle = text;
        ctx.textAlign = "center";
        ctx.font = "950 24px Arial";
        ctx.fillText(initials(player.name), x, y + 8);
      }

      const name = lastName(player.name);
      ctx.font = `950 ${isCompact ? 10 : 12}px Arial`;
      const labelWidth = Math.min(markerWidth, Math.max(48, ctx.measureText(name).width + 18));
      ctx.fillStyle = "rgba(5,8,13,0.86)";
      drawRoundedRect(ctx, x - labelWidth / 2, y + photoHeight / 2 + 4, labelWidth, isCompact ? 20 : 23, 6);
      ctx.fill();
      ctx.fillStyle = text;
      ctx.textAlign = "center";
      ctx.fillText(name, x, y + photoHeight / 2 + (isCompact ? 18 : 20));
    }
  }

  ctx.textAlign = "right";
  ctx.fillStyle = text;
  ctx.font = "900 14px Arial";
  ctx.fillText("linktr.ee/AjaxPro_", sourceWidth - 18, sourceHeight - 16);

  return canvas;
}

async function createPosterCanvas() {
  await document.fonts?.ready;

  const source = document.querySelector("#poster");
  const sourceRect = source.getBoundingClientRect();
  const sourceWidth = Math.round(sourceRect.width);
  const sourceHeight = Math.round(sourceRect.height);
  const exportWidth = 1080;
  const exportHeight = Math.round((sourceHeight / sourceWidth) * exportWidth);
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  canvas.width = exportWidth;
  canvas.height = exportHeight;
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = "high";

  const clone = source.cloneNode(true);
  clone.style.width = `${sourceWidth}px`;
  clone.style.height = `${sourceHeight}px`;
  clone.style.minHeight = "0";
  clone.style.margin = "0";
  clone.style.borderRadius = "0";

  clone.querySelectorAll(".player-marker").forEach((marker) => {
    marker.style.setProperty("transform", "translate(-50%, -50%) scale(0.9)");
    const markerY = Number.parseFloat(marker.style.getPropertyValue("--y"));
    if (Number.isFinite(markerY)) {
      marker.style.setProperty("top", `${clamp(markerY, 8, 88)}%`);
    }
  });

  // Player photos are painted directly onto the final canvas below. Mobile
  // browsers can omit raster images inside an SVG foreignObject.
  clone.querySelectorAll(".marker-photo img").forEach((image) => {
    image.style.visibility = "hidden";
  });

  await inlineCloneImages(clone);

  const css = collectDocumentStyles();
  const posterMarkup = new XMLSerializer().serializeToString(clone);
  const bodyTheme = document.body.dataset.theme || "";
  const bodyKit = document.body.dataset.kit || "";
  const html = `
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <style>
          ${css}

          html,
          body {
            width: ${sourceWidth}px;
            height: ${sourceHeight}px;
            margin: 0;
            overflow: hidden;
            background: transparent;
          }

          body {
            display: block;
          }

          body::before {
            display: none !important;
          }

          .poster {
            width: ${sourceWidth}px !important;
            height: ${sourceHeight}px !important;
            min-height: 0 !important;
            margin: 0 !important;
            border-radius: 0 !important;
            box-sizing: border-box !important;
          }
        </style>
      </head>
      <body data-theme="${bodyTheme}" data-kit="${bodyKit}">
        ${posterMarkup}
      </body>
    </html>
  `;
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="${sourceWidth}" height="${sourceHeight}" viewBox="0 0 ${sourceWidth} ${sourceHeight}">
      <foreignObject width="100%" height="100%">
        ${html}
      </foreignObject>
    </svg>
  `;
  const image = await loadImage(`data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`);
  if (!image) throw new Error("Preview export kon niet worden gerenderd.");

  ctx.drawImage(image, 0, 0, exportWidth, exportHeight);

  const exportScale = exportWidth / sourceWidth;
  const markerScale = 0.9;
  const pitchRect = source.querySelector(".pitch").getBoundingClientRect();

  for (const marker of source.querySelectorAll(".player-marker")) {
    const player = playerById(state.assignments[marker.dataset.slot]);
    const photoElement = marker.querySelector(".marker-photo");
    if (!player || !photoElement) continue;

    const photo = await loadPlayerImage(player);
    if (!photo) continue;

    const photoRect = photoElement.getBoundingClientRect();
    const markerRect = marker.getBoundingClientRect();
    const markerCenterX = markerRect.left + markerRect.width / 2;
    const markerCenterY = markerRect.top + markerRect.height / 2;
    const unclampedY = Number.parseFloat(marker.style.getPropertyValue("--y"));
    const clampedY = clamp(unclampedY, 8, 88);
    const markerCenterYInClone = markerCenterY
      + ((clampedY - unclampedY) / 100) * pitchRect.height;
    const photoCenterX = photoRect.left + photoRect.width / 2;
    const photoCenterY = photoRect.top + photoRect.height / 2;
    const width = photoRect.width * markerScale * exportScale;
    const height = photoRect.height * markerScale * exportScale;
    const x = (
      markerCenterX + (photoCenterX - markerCenterX) * markerScale - sourceRect.left
    ) * exportScale - width / 2;
    const y = (
      markerCenterYInClone + (photoCenterY - markerCenterY) * markerScale
      - sourceRect.top
    ) * exportScale - height / 2;
    const memeActive = state.memePlayers.has(player.id) && player.memePhoto;
    const zoom = memeActive
      ? (player.memePhotoZoom ?? 1.08)
      : (player.photoZoom ?? 1.08);
    const focusX = memeActive
      ? (player.memePhotoFocusX ?? 0.5)
      : (player.photoFocusX ?? 0.5);
    const radius = 10 * markerScale * exportScale;

    ctx.save();
    drawRoundedRect(ctx, x, y, width, height, radius);
    ctx.clip();
    ctx.filter = "saturate(1.05) contrast(1.04) brightness(1.04)";
    drawImageCover(ctx, photo, x, y, width, height, zoom, focusX);
    ctx.restore();

    ctx.save();
    drawRoundedRect(ctx, x, y, width, height, radius);
    ctx.strokeStyle = "rgba(255, 255, 255, 0.32)";
    ctx.lineWidth = Math.max(1, exportScale);
    ctx.stroke();
    ctx.restore();
  }

  return canvas;
};

window.createPosterCanvas = createPosterCanvas;

async function canvasToBlob(canvas, type) {
  return new Promise((resolve) => {
    canvas.toBlob(resolve, type, type === "image/jpeg" ? 0.92 : undefined);
  });
}

function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.download = filename;
  link.setAttribute("download", filename);
  link.href = url;
  link.style.display = "none";
  document.body.appendChild(link);
  link.click();
  window.setTimeout(() => {
    link.remove();
    URL.revokeObjectURL(url);
  }, 30000);
}

function filenamePart(value, fallback) {
  return cleanText(value, fallback)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function posterFilename() {
  const opponent = filenamePart(state.opponent, "tegenstander");
  const creator = filenamePart(state.creator, "naam");
  const matchup = state.venue === "home" ? `ajax-${opponent}` : `${opponent}-ajax`;
  return `${matchup}_door_${creator}.png`;
}

window.posterFilename = posterFilename;

async function downloadPoster() {
  const originalText = els.download.textContent;
  els.download.disabled = true;
  els.download.textContent = "Bezig...";

  try {
    const canvas = await createPosterCanvas();
    const blob = await canvasToBlob(canvas, "image/png");
    if (!blob) throw new Error("Canvas export gaf geen afbeeldingsbestand terug.");
    downloadBlob(blob, posterFilename());
    els.download.textContent = "Gedownload";
    window.setTimeout(() => {
      els.download.textContent = originalText;
    }, 1400);
  } catch (error) {
    els.download.textContent = "Download mislukt";
    window.alert("Download lukt nu niet. Probeer de pagina te verversen en opnieuw te downloaden.");
    window.setTimeout(() => {
      els.download.textContent = originalText;
    }, 2000);
  } finally {
    els.download.disabled = false;
  }
}

async function sharePoster() {
  const originalText = els.share.textContent;
  els.share.disabled = true;
  els.share.textContent = "Bezig...";

  try {
    const canvas = await createPosterCanvas();
    const blob = await canvasToBlob(canvas, "image/png");
    if (!blob) throw new Error("Canvas export gaf geen afbeeldingsbestand terug.");

    const filename = posterFilename();
    const file = new File([blob], filename, { type: "image/png" });
    const canShareFile = typeof navigator.share === "function"
      && typeof navigator.canShare === "function"
      && navigator.canShare({ files: [file] });

    if (!canShareFile) {
      downloadBlob(blob, filename);
      els.share.textContent = "Gedownload";
      window.setTimeout(() => {
        els.share.textContent = originalText;
      }, 1400);
      return;
    }

    await navigator.share({
      files: [file],
      title: "Mijn Ajax-opstelling",
      text: "Mijn opstelling gemaakt met de AjaxPro Opstelling Maker.",
    });
    els.share.textContent = "Gedeeld";
    window.setTimeout(() => {
      els.share.textContent = originalText;
    }, 1400);
  } catch (error) {
    if (error?.name === "AbortError") {
      els.share.textContent = originalText;
      return;
    }

    els.share.textContent = "Delen mislukt";
    window.alert("Delen lukt nu niet. Je kunt de opstelling wel downloaden.");
    window.setTimeout(() => {
      els.share.textContent = originalText;
    }, 2000);
  } finally {
    els.share.disabled = false;
  }
}

els.list.addEventListener("change", (event) => {
  const select = event.target.closest("[data-position-select]");
  if (select) assignPlayer(select.dataset.positionSelect, select.value);

  const memeToggle = event.target.closest("[data-player-meme]");
  if (!memeToggle) return;

  if (memeToggle.checked) {
    state.memePlayers.add(memeToggle.dataset.playerMeme);
  } else {
    state.memePlayers.delete(memeToggle.dataset.playerMeme);
  }

  renderPlayers();
  renderPitch();
  renderMemeControlState();
});

document.addEventListener("error", (event) => {
  const image = event.target;
  if (!(image instanceof HTMLImageElement)) return;

  const fallback = image.dataset.photoFallback;
  if (!fallback || image.getAttribute("src") === fallback) return;

  image.src = fallback;
  delete image.dataset.photoFallback;
}, true);

els.pitch.addEventListener("pointerdown", startDrag);
els.pitch.addEventListener("pointermove", moveDrag);
els.pitch.addEventListener("pointerup", endDrag);
els.pitch.addEventListener("pointercancel", endDrag);

els.search.addEventListener("input", (event) => {
  state.search = event.target.value;
  renderPlayers();
});

[els.creatorInput, els.opponentInput, ...els.venueInputs].forEach((input) => {
  input.addEventListener("input", updateMatchState);
  input.addEventListener("change", updateMatchState);
});

els.photoModeMeme.addEventListener("change", () => {
  const memePlayerIds = players.filter((player) => player.memePhoto).map((player) => player.id);
  state.memePlayers = els.photoModeMeme.checked ? new Set(memePlayerIds) : new Set();
  renderPlayers();
  renderPitch();
  renderMemeControlState();
});

els.scoreButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const [team, direction] = button.dataset.scoreAction.split("-");
    changeScore(team, direction === "plus" ? 1 : -1);
  });
});

els.reset.addEventListener("click", resetPoster);
els.download.addEventListener("click", downloadPoster);
els.share.addEventListener("click", sharePoster);
els.themeSelect?.addEventListener("change", () => setTheme(els.themeSelect.value));
els.formationSelect?.addEventListener("change", () => setFormation(els.formationSelect.value));
window.addEventListener("resize", fitMatchupText);

const mobileLayout = window.matchMedia("(max-width: 719px)");
const faq = document.querySelector(".hub-faq");
const appShell = document.querySelector(".app-shell");
const editorScroll = document.querySelector(".editor-scroll");
const siteFooter = document.querySelector(".site-footer");

function placeFaq() {
  if (!faq || !appShell || !editorScroll || !siteFooter) return;

  if (mobileLayout.matches) {
    appShell.append(faq);
    return;
  }

  editorScroll.insertBefore(faq, siteFooter);
}

mobileLayout.addEventListener("change", placeFaq);
placeFaq();
initTheme();
render();
