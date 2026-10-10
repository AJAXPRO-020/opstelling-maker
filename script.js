let players = [
  { id: "rosa", number: 2, name: "Lucas Rosa", role: "Verdediger", photo: "assets/players/rosa_2627.png" },
  {
    id: "gaaei",
    number: 3,
    name: "Anton Gaaei",
    role: "Verdediger",
    photo: "assets/players/gaaei_2627.png",
    memePhoto: "assets/players/meme/gaai_meme.webp",
  },
  { id: "amrabat", number: 4, name: "Sofyan Amrabat", role: "Middenvelder", photo: "assets/players/amrabat_2627.png" },
  { id: "itakura", number: 4, name: "Ko Itakura", role: "Verdediger", photo: "assets/players/itakura_2627.png" },
  { id: "wijndal", number: 5, name: "Owen Wijndal", role: "Verdediger", photo: "assets/players/wijndal_2627.png" },
  { id: "regeer", number: 6, name: "Youri Regeer", role: "Middenvelder", photo: "assets/players/regeer_2627.png" },
  {
    id: "carrizo",
    number: 7,
    name: "Maher Carrizo",
    role: "Aanvaller",
    photo: "assets/players/carrizo_2627.png",
    memePhoto: "assets/players/meme/carrizo_meme.webp",
  },
  {
    id: "caio-henrique",
    number: 12,
    name: "Caio Henrique",
    role: "Verdediger",
    photo: "assets/players/caio-henrique_2627.png",
    photoZoom: 1,
  },
  {
    id: "dolberg",
    number: 9,
    name: "Kasper Dolberg",
    role: "Aanvaller",
    photo: "assets/players/dolberg_2627.png",
    memePhoto: "assets/players/meme/dolberg_meme.webp",
  },
  { id: "gloukh", number: 10, name: "Oscar Gloukh", role: "Middenvelder", photo: "assets/players/gloukh_2627.png" },
  { id: "tsygankov", number: 11, name: "Viktor Tsygankov", role: "Aanvaller", photo: "assets/players/tsygankov_2627.png" },
  {
    id: "brandt",
    number: 8,
    name: "Julian Brandt",
    role: "Middenvelder",
    photo: "assets/players/julian-brandt_2627.png",
    photoZoom: 1,
  },
  { id: "heerkens", number: 22, name: "Joeri Heerkens", role: "Doelman", photo: "assets/players/heerkens_2627.png" },
  {
    id: "ter-stegen",
    number: 1,
    name: "Marc-André ter Stegen",
    role: "Doelman",
    photo: "assets/players/ter-stegen_2627.png",
  },
  { id: "baas", number: 15, name: "Youri Baas", role: "Verdediger", photo: "assets/players/baas_2627.png" },
  { id: "edvardsen", number: 20, name: "Oliver Edvardsen", role: "Aanvaller", photo: "assets/players/edvardsen_2627.png" },
  {
    id: "blind",
    number: 17,
    name: "Daley Blind",
    role: "Verdediger",
    photo: "assets/players/blind_2627.png",
    photoZoom: 1,
  },
  {
    id: "dies-janse",
    number: 36,
    name: "Dies Janse",
    role: "Verdediger",
    photo: "assets/players/dies-janse_2627.png",
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
    photo: "assets/players/klaassen_2627.png",
    memePhoto: "assets/players/meme/klaassen_meme.webp",
  },
  { id: "berghuis", number: 23, name: "Steven Berghuis", role: "Aanvaller", photo: "assets/players/berghuis_2627.png" },
  {
    id: "mokio",
    number: 24,
    name: "Jorthy Mokio",
    role: "Middenvelder",
    photo: "assets/players/mokio_2627.png",
    memePhoto: "assets/players/meme/mokio_meme.webp",
  },
  { id: "paes", number: 26, name: "Maarten Paes", role: "Doelman", photo: "assets/players/paes_2627.png" },
  {
    id: "ouazane",
    number: 68,
    name: "Abdellah Ouazane",
    role: "Middenvelder",
    photo: "assets/players/ouazane_2627.png",
  },
  { id: "bouwman", number: 30, name: "Aaron Bouwman", role: "Verdediger", photo: "assets/players/bouwman_2627.png" },
  { id: "sutalo", number: 37, name: "Josip Sutalo", role: "Verdediger", photo: "assets/players/sutalo_2627.png" },
  { id: "bounida", number: 43, name: "Rayane Bounida", role: "Middenvelder", photo: "assets/players/bounida_2627.png" },
  {
    id: "leonardo",
    number: 38,
    name: "Marcos Leonardo",
    role: "Aanvaller",
    photo: "assets/players/leonardo_2627.png",
    photoZoom: 1,
  },
  {
    id: "arokodare",
    number: 99,
    name: "Tolu Arokodare",
    role: "Aanvaller",
    photo: "assets/players/tolu-arokodare_2627.png",
    photoFocusX: 0.5,
    photoZoom: 1,
  },
];

const loadCentralPlayers=async()=>{
  try{
    const response=await fetch("https://ajaxpro.fans/api/players",{headers:{Accept:"application/json"}});
    if(!response.ok)throw new Error("PLAYER_REGISTRY_UNAVAILABLE");
    const payload=await response.json(),currentById=new Map(players.map(player=>[player.id,player]));
    if(!Array.isArray(payload.players)||!payload.players.length)throw new Error("PLAYER_REGISTRY_EMPTY");
    players=payload.players.filter(player=>player.active).map(player=>{
      const current=currentById.get(player.id)||{},imageUrl=String(player.imageUrl||"");
      const centralPhoto=imageUrl&&!imageUrl.endsWith(".svg")?new URL(imageUrl,"https://ajaxpro.fans").href:"";
      const photo=current.photo||centralPhoto;
      return {...current,id:player.id,number:player.shirtNumber,name:player.name,role:player.position,photo};
    });
    renderPlayers();renderPitch();renderMemeControlState();
  }catch(error){console.warn("Centrale spelerslijst tijdelijk niet beschikbaar; lokale fallback actief.");}
};

const playerAssetVersion = "20260830-add-tsygankov";
const defaultFormation = "4-3-3";
const formations = {
  "4-3-3": {
    positions: [
      { id: "1", number: 1, label: "Keeper", x: 50, y: 88 },
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
      { id: "1", number: 1, label: "Keeper", x: 50, y: 88 },
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
      { id: "1", number: 1, label: "Keeper", x: 50, y: 88 },
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
      <text x="120" y="87" text-anchor="middle" fill="#f6f7fb" font-family="Arial, sans-serif" font-size="42" font-weight="900">${escapeHtml(String(player.number ?? "—"))}</text>
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
  const fallbackPhoto = state.memePlayers.has(player.id) && player.photo
    ? versionedPhotoUrl(playerNormalPhoto(player))
    : playerPlaceholderPhoto(player);
  const fallback = ` data-photo-fallback="${escapeHtml(fallbackPhoto)}"`;
  const loading = lazy ? ' loading="lazy" fetchpriority="low"' : "";
  return `<img crossorigin="anonymous" src="${photo}" data-player-photo-id="${escapeHtml(player.id)}" alt="" decoding="async"${loading}${imageStyle}${fallback} />`;
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
    y: clamp(y, 10, 88),
  };
}

function assignPlayer(playerId, slotValue) {
  Object.entries(state.assignments).forEach(([slot, id]) => {
    if (id === playerId) delete state.assignments[slot];
  });

  if (slotValue) {
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
  schedulePosterExport();
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

function setFormation(formation) {
  const nextFormation = formations[formation] ? formation : defaultFormation;
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
      const options = [
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
  schedulePosterExport();
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
  schedulePosterExport();
}

function resetPoster() {
  state.creator = "";
  state.opponent = "";
  state.ajaxScore = "0";
  state.opponentScore = "0";
  state.venue = "home";
  state.memePlayers = new Set();
  state.search = "";
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
    let settled = false;
    const finish = (result) => {
      if (settled) return;
      settled = true;
      window.clearTimeout(timeoutId);
      resolve(result);
    };
    const timeoutId = window.setTimeout(() => finish(null), 8000);
    image.crossOrigin = "anonymous";
    image.onload = () => finish(image);
    image.onerror = () => finish(null);
    image.src = src;
  });
}

async function loadPlayerImage(player) {
  const assignedSlot = assignedSlotFor(player.id);
  const renderedImage = assignedSlot
    ? els.pitch.querySelector(`.player-marker[data-slot="${assignedSlot}"] img`)
    : null;
  const renderedImageIsCanvasSafe = renderedImage?.crossOrigin === "anonymous"
    || (renderedImage?.currentSrc && new URL(renderedImage.currentSrc, window.location.href).origin === window.location.origin);
  if (renderedImage?.complete && renderedImage.naturalWidth > 0 && renderedImageIsCanvasSafe) {
    return renderedImage;
  }

  const image = await loadImage(versionedPhotoUrl(playerActivePhoto(player)));
  if (image) return image;
  if (state.memePlayers.has(player.id) && player.photo) {
    const normalImage = await loadImage(versionedPhotoUrl(playerNormalPhoto(player)));
    if (normalImage) return normalImage;
  }
  return loadImage(playerPlaceholderPhoto(player));
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
    request.timeout = 8000;
    request.onload = () => {
      if (request.status >= 200 && request.status < 300) resolve(request.response);
      else reject(new Error(`Image request failed: ${request.status}`));
    };
    request.onerror = reject;
    request.ontimeout = reject;
    request.send();
  });
}

async function imageSourceToDataUrl(src, fallback = "") {
  if (!src) return fallback;
  if (src.startsWith("data:")) return src;

  try {
    let blob;
    if (typeof fetch === "function") {
      const controller = new AbortController();
      const timeoutId = window.setTimeout(() => controller.abort(), 8000);
      try {
        blob = await fetch(src, { signal: controller.signal })
          .then((response) => (response.ok ? response.blob() : null));
      } finally {
        window.clearTimeout(timeoutId);
      }
    } else {
      blob = await requestBlob(src);
    }
    const dataUrl = blob ? await blobToDataUrl(blob) : "";
    return dataUrl || fallback;
  } catch {
    return fallback;
  }
}

function drawPlayerSilhouette(ctx, player, card) {
  const centerX = card.x + card.width / 2;
  const headY = card.y + card.height * 0.3;
  const headRadius = card.width * 0.18;

  ctx.filter = "none";
  ctx.fillStyle = "#121b2a";
  ctx.fillRect(card.x, card.y, card.width, card.height);

  ctx.fillStyle = "#344158";
  ctx.beginPath();
  ctx.arc(centerX, headY, headRadius, 0, Math.PI * 2);
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(card.x + card.width * 0.15, card.y + card.height);
  ctx.quadraticCurveTo(centerX, card.y + card.height * 0.48, card.x + card.width * 0.85, card.y + card.height);
  ctx.closePath();
  ctx.fill();

  ctx.fillStyle = roleAccent(player);
  ctx.globalAlpha = 0.78;
  ctx.fillRect(card.x + card.width * 0.38, card.y + card.height * 0.55, card.width * 0.24, card.height * 0.45);
  ctx.globalAlpha = 1;
}

async function inlineCloneImages(clone) {
  const images = Array.from(clone.querySelectorAll("img"));
  await Promise.all(images.map(async (image) => {
    const player = playerById(image.dataset.playerPhotoId);
    const fallback = player ? playerPlaceholderPhoto(player) : "";
    image.setAttribute(
      "src",
      await imageSourceToDataUrl(image.getAttribute("src"), fallback),
    );
  }));
}

function exportRect(element, sourceRect, scale) {
  const rect = element.getBoundingClientRect();
  return {
    x: (rect.left - sourceRect.left) * scale,
    y: (rect.top - sourceRect.top) * scale,
    width: rect.width * scale,
    height: rect.height * scale,
  };
}

function drawPitchFallback(ctx, pitchRect, scale) {
  const x = pitchRect.x;
  const y = pitchRect.y;
  const width = pitchRect.width;
  const height = pitchRect.height;
  const px = (value) => x + (value / 100) * width;
  const py = (value) => y + (value / 100) * height;
  const fieldX = px(8);
  const fieldY = py(4);
  const fieldWidth = width * 0.84;
  const fieldHeight = height * 0.92;

  ctx.save();
  drawRoundedRect(ctx, x, y, width, height, 14 * scale);
  ctx.clip();
  ctx.fillStyle = "#0e0f0d";
  ctx.fillRect(x, y, width, height);
  ctx.fillStyle = "#191416";
  ctx.fillRect(px(6), py(1), width * 0.88, height * 0.98);
  ctx.fillStyle = "#211d1e";
  ctx.fillRect(fieldX, fieldY, fieldWidth, fieldHeight);

  for (let index = 0; index < 8; index += 1) {
    ctx.fillStyle = index % 2 ? "#30292a" : "#211d1e";
    ctx.fillRect(fieldX, fieldY + (fieldHeight / 8) * index, fieldWidth, fieldHeight / 8);
  }

  ctx.strokeStyle = "rgba(245, 243, 238, 0.5)";
  ctx.lineWidth = Math.max(1, 0.8 * scale);
  ctx.strokeRect(fieldX, fieldY, fieldWidth, fieldHeight);
  ctx.beginPath();
  ctx.moveTo(fieldX, py(50));
  ctx.lineTo(fieldX + fieldWidth, py(50));
  ctx.stroke();
  ctx.beginPath();
  ctx.ellipse(px(50), py(50), width * 0.125, height * 0.093, 0, 0, Math.PI * 2);
  ctx.stroke();

  const drawPenaltyArea = (top) => {
    const areaHeight = fieldHeight * 0.227;
    const smallHeight = fieldHeight * 0.086;
    const areaY = top ? fieldY : fieldY + fieldHeight - areaHeight;
    const smallY = top ? fieldY : fieldY + fieldHeight - smallHeight;
    ctx.strokeRect(px(25), areaY, width * 0.5, areaHeight);
    ctx.strokeRect(px(38), smallY, width * 0.24, smallHeight);
  };
  drawPenaltyArea(true);
  drawPenaltyArea(false);

  ctx.fillStyle = "rgba(245, 243, 238, 0.52)";
  [14.8, 50, 85.2].forEach((fieldYPercent) => {
    ctx.beginPath();
    ctx.arc(px(50), py(fieldYPercent), Math.max(2, 1.25 * scale), 0, Math.PI * 2);
    ctx.fill();
  });
  ctx.restore();
}

async function drawPosterCanvasFallback(ctx, source, sourceRect, scale) {
  const width = ctx.canvas.width;
  const height = ctx.canvas.height;
  const primaryRed = getComputedStyle(document.body).getPropertyValue("--primary-red").trim() || "#a50324";
  const background = ctx.createLinearGradient(0, 0, 0, height);
  background.addColorStop(0, "#151515");
  background.addColorStop(1, "#08090c");
  ctx.fillStyle = background;
  ctx.fillRect(0, 0, width, height);

  ctx.save();
  ctx.globalAlpha = 0.86;
  ctx.fillStyle = primaryRed;
  ctx.beginPath();
  ctx.moveTo(width * 0.16, 0);
  ctx.lineTo(width * 0.42, 0);
  ctx.lineTo(width * 0.27, height * 0.28);
  ctx.lineTo(width * 0.06, height * 0.28);
  ctx.closePath();
  ctx.fill();
  ctx.restore();

  const eyebrow = source.querySelector(".poster .eyebrow");
  const title = source.querySelector(".poster-title h1");
  const creator = source.querySelector(".creator-line");
  const scoreline = source.querySelector(".scoreline");
  const logo = source.querySelector(".poster-logo");
  const pitch = source.querySelector(".pitch");

  if (eyebrow) {
    const rect = exportRect(eyebrow, sourceRect, scale);
    ctx.fillStyle = "rgba(16, 16, 16, 0.78)";
    ctx.fillRect(rect.x, rect.y, rect.width, rect.height);
    ctx.fillStyle = primaryRed;
    ctx.fillRect(rect.x, rect.y, Math.max(3, 3 * scale), rect.height);
    ctx.fillStyle = "rgba(255, 255, 255, 0.92)";
    ctx.font = `900 ${Math.max(12, 12 * scale)}px Arial`;
    ctx.textBaseline = "middle";
    ctx.fillText("DE OPSTELLING", rect.x + 8 * scale, rect.y + rect.height / 2);
  }

  if (title) {
    const rect = exportRect(title, sourceRect, scale);
    const style = getComputedStyle(title);
    const fontSize = Number.parseFloat(style.fontSize) * scale;
    ctx.fillStyle = "#ffffff";
    ctx.font = `950 ${fontSize}px Arial`;
    ctx.textBaseline = "top";
    matchupText().split("\n").forEach((line, index) => {
      ctx.fillText(line.toUpperCase(), rect.x, rect.y + index * fontSize * 0.9, rect.width);
    });
  }

  if (creator) {
    const rect = exportRect(creator, sourceRect, scale);
    ctx.fillStyle = "rgba(255, 255, 255, 0.74)";
    ctx.font = `750 ${Number.parseFloat(getComputedStyle(creator).fontSize) * scale}px Arial`;
    ctx.textBaseline = "middle";
    ctx.fillText(creator.textContent.trim(), rect.x, rect.y + rect.height / 2, rect.width);
  }

  if (scoreline) {
    const rect = exportRect(scoreline, sourceRect, scale);
    drawRoundedRect(ctx, rect.x, rect.y, rect.width, rect.height, 10 * scale);
    ctx.fillStyle = "rgba(4, 5, 7, 0.88)";
    ctx.fill();
    ctx.strokeStyle = "rgba(217, 176, 111, 0.38)";
    ctx.lineWidth = Math.max(1, scale);
    ctx.stroke();
    ctx.fillStyle = "#ffffff";
    ctx.font = `950 ${Number.parseFloat(getComputedStyle(scoreline).fontSize) * scale}px Arial`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(scoreline.textContent.replace(/\s+/g, " ").trim(), rect.x + rect.width / 2, rect.y + rect.height / 2);
    ctx.textAlign = "left";
  }

  if (logo) {
    const rect = exportRect(logo, sourceRect, scale);
    const logoImage = await loadImage(logo.currentSrc || logo.src);
    if (logoImage) ctx.drawImage(logoImage, rect.x, rect.y, rect.width, rect.height);
  }

  if (pitch) drawPitchFallback(ctx, exportRect(pitch, sourceRect, scale), scale);
}

async function createPosterCanvas() {
  await document.fonts?.ready;

  const source = document.querySelector("#poster");
  const sourceRect = source.getBoundingClientRect();
  const headerRect = source.querySelector(".poster-header").getBoundingClientRect();
  const pitchRect = source.querySelector(".pitch").getBoundingClientRect();
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

  const exportScale = exportWidth / sourceWidth;
  let baseImage = null;

  if (!isIOSDevice()) {
    const clone = source.cloneNode(true);
    clone.style.width = `${sourceWidth}px`;
    clone.style.height = `${sourceHeight}px`;
    clone.style.minHeight = "0";
    clone.style.margin = "0";
    clone.style.borderRadius = "0";

    // Player cards are painted as one canvas layer below. Browser engines can
    // position transformed HTML inside an SVG foreignObject differently.
    clone.querySelectorAll(".player-marker").forEach((marker) => marker.remove());
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
            html, body { width: ${sourceWidth}px; height: ${sourceHeight}px; margin: 0; overflow: hidden; background: transparent; }
            body { display: block; }
            body::before { display: none !important; }
            .poster { display: block !important; position: relative !important; width: ${sourceWidth}px !important; height: ${sourceHeight}px !important; min-height: 0 !important; margin: 0 !important; border-radius: 0 !important; box-sizing: border-box !important; }
            .poster-header, .pitch { position: absolute !important; margin: 0 !important; box-sizing: border-box !important; }
            .poster-header { left: ${headerRect.left - sourceRect.left}px !important; top: ${headerRect.top - sourceRect.top}px !important; width: ${headerRect.width}px !important; height: ${headerRect.height}px !important; }
            .pitch { left: ${pitchRect.left - sourceRect.left}px !important; top: ${pitchRect.top - sourceRect.top}px !important; width: ${pitchRect.width}px !important; height: ${pitchRect.height}px !important; min-height: 0 !important; aspect-ratio: auto !important; }
          </style>
        </head>
        <body data-theme="${bodyTheme}" data-kit="${bodyKit}">${posterMarkup}</body>
      </html>
    `;
    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" width="${sourceWidth}" height="${sourceHeight}" viewBox="0 0 ${sourceWidth} ${sourceHeight}">
        <foreignObject width="100%" height="100%">${html}</foreignObject>
      </svg>
    `;
    baseImage = await loadImage(`data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`);
  }

  if (baseImage) {
    ctx.drawImage(baseImage, 0, 0, exportWidth, exportHeight);
  } else {
    await drawPosterCanvasFallback(ctx, source, sourceRect, exportScale);
  }

  const markerScale = 0.9;

  for (const marker of source.querySelectorAll(".player-marker")) {
    const player = playerById(state.assignments[marker.dataset.slot]);
    const photoElement = marker.querySelector(".marker-photo");
    const nameElement = marker.querySelector(".marker-name");
    if (!player || !photoElement || !nameElement) continue;

    const photo = await loadPlayerImage(player);
    const photoRect = photoElement.getBoundingClientRect();
    const nameRect = nameElement.getBoundingClientRect();
    const markerRect = marker.getBoundingClientRect();
    const markerCenterX = markerRect.left + markerRect.width / 2;
    const markerCenterY = markerRect.top + markerRect.height / 2;
    const unclampedY = Number.parseFloat(marker.style.getPropertyValue("--y"));
    const clampedY = clamp(unclampedY, 8, 88);
    const markerCenterYInClone = markerCenterY
      + ((clampedY - unclampedY) / 100) * pitchRect.height;
    const scaledExportRect = (rect) => {
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const width = rect.width * markerScale * exportScale;
      const height = rect.height * markerScale * exportScale;
      return {
        x: (
          markerCenterX + (centerX - markerCenterX) * markerScale - sourceRect.left
        ) * exportScale - width / 2,
        y: (
          markerCenterYInClone + (centerY - markerCenterY) * markerScale
          - sourceRect.top
        ) * exportScale - height / 2,
        width,
        height,
      };
    };
    const card = scaledExportRect(photoRect);
    const label = scaledExportRect(nameRect);
    const memeActive = state.memePlayers.has(player.id) && player.memePhoto;
    const zoom = memeActive
      ? (player.memePhotoZoom ?? 1.08)
      : (player.photoZoom ?? 1.08);
    const focusX = memeActive
      ? (player.memePhotoFocusX ?? 0.5)
      : (player.photoFocusX ?? 0.5);
    const radius = 10 * markerScale * exportScale;

    const photoBackground = ctx.createLinearGradient(
      card.x,
      card.y,
      card.x,
      card.y + card.height,
    );
    photoBackground.addColorStop(0, "#e9e2d8");
    photoBackground.addColorStop(1, "#d8cfc4");
    ctx.save();
    drawRoundedRect(ctx, card.x, card.y, card.width, card.height, radius);
    ctx.fillStyle = photoBackground;
    ctx.fill();
    ctx.restore();

    ctx.save();
    drawRoundedRect(ctx, card.x, card.y, card.width, card.height, radius);
    ctx.clip();
    let photoDrawn = false;
    if (photo) {
      try {
        ctx.filter = "saturate(1.05) contrast(1.04) brightness(1.04)";
        drawImageCover(ctx, photo, card.x, card.y, card.width, card.height, zoom, focusX);
        photoDrawn = true;
      } catch {
        photoDrawn = false;
      }
    }
    if (!photoDrawn) drawPlayerSilhouette(ctx, player, card);
    ctx.restore();

    ctx.save();
    drawRoundedRect(ctx, card.x, card.y, card.width, card.height, radius);
    ctx.strokeStyle = "rgba(255, 255, 255, 0.32)";
    ctx.lineWidth = Math.max(1, exportScale);
    ctx.stroke();
    ctx.restore();

    const nameStyle = getComputedStyle(nameElement);
    const nameFontSize = Number.parseFloat(nameStyle.fontSize) * markerScale * exportScale;
    ctx.save();
    drawRoundedRect(
      ctx,
      label.x,
      label.y,
      label.width,
      label.height,
      6 * markerScale * exportScale,
    );
    ctx.fillStyle = "rgba(5, 8, 13, 0.88)";
    ctx.fill();
    ctx.fillStyle = "#ffffff";
    ctx.font = `950 ${nameFontSize}px Arial`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(
      lastName(player.name),
      label.x + label.width / 2,
      label.y + label.height / 2,
      Math.max(1, label.width - 8 * markerScale * exportScale),
    );
    ctx.restore();
  }

  return canvas;
};

window.createPosterCanvas = createPosterCanvas;

async function canvasToBlob(canvas, type) {
  let blob = null;
  if (typeof canvas.toBlob === "function") {
    blob = await new Promise((resolve) => {
      try {
        canvas.toBlob(resolve, type, type === "image/jpeg" ? 0.92 : undefined);
      } catch {
        resolve(null);
      }
    });
  }
  if (blob) return blob;

  try {
    const dataUrl = canvas.toDataURL(type, type === "image/jpeg" ? 0.92 : undefined);
    const [header, encoded] = dataUrl.split(",");
    const mimeType = header.match(/data:([^;]+)/)?.[1] || type;
    const binary = window.atob(encoded);
    const bytes = new Uint8Array(binary.length);
    for (let index = 0; index < binary.length; index += 1) bytes[index] = binary.charCodeAt(index);
    return new Blob([bytes], { type: mimeType });
  } catch {
    return null;
  }
}

function isIOSDevice() {
  return /iPad|iPhone|iPod/.test(navigator.userAgent)
    || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
}

async function blobToDownloadUrl(blob) {
  // iOS Safari is more reliable with a data URL than with a blob URL.
  return isIOSDevice() ? (await blobToDataUrl(blob)) : URL.createObjectURL(blob);
}

async function downloadBlob(blob, filename) {
  const url = await blobToDownloadUrl(blob);
  if (!url) throw new Error("Downloadbestand kon niet worden aangemaakt.");

  const link = document.createElement("a");
  link.download = filename;
  link.setAttribute("download", filename);
  link.href = url;
  link.style.display = "none";
  document.body.appendChild(link);
  link.click();
  window.setTimeout(() => {
    link.remove();
    if (!isIOSDevice()) URL.revokeObjectURL(url);
  }, 30000);
}

async function shareOrDownloadOnIOS(blob, filename) {
  const file = new File([blob], filename, { type: "image/png" });
  const canShareFile = typeof navigator.share === "function"
    && typeof navigator.canShare === "function"
    && navigator.canShare({ files: [file] });

  if (canShareFile) {
    try {
      await navigator.share({ files: [file], title: "Mijn Ajax-opstelling" });
      return "shared";
    } catch (error) {
      if (error?.name === "AbortError") throw error;
      // Safari can expire the user gesture while the image is being prepared.
      // Opening the generated PNG still lets the user save or share it.
    }
  }

  await downloadBlob(blob, filename);
  return "opened";
}

let preparedPosterKey = "";
let preparedPosterBlob = null;
let preparedPosterPromise = null;
let posterExportTimer = 0;

function posterExportKey() {
  return JSON.stringify({
    creator: state.creator,
    opponent: state.opponent,
    ajaxScore: state.ajaxScore,
    opponentScore: state.opponentScore,
    venue: state.venue,
    formation: state.formation,
    assignments: state.assignments,
    positions: state.positions,
    memePlayers: Array.from(state.memePlayers).sort(),
    theme: document.body.dataset.theme || "",
    kit: document.body.dataset.kit || "",
    photos: players.map((player) => `${player.id}:${player.photo || ""}`),
  });
}

function invalidatePreparedPoster() {
  preparedPosterKey = "";
  preparedPosterBlob = null;
}

async function preparePosterBlob() {
  const key = posterExportKey();
  if (preparedPosterBlob && preparedPosterKey === key) return preparedPosterBlob;
  if (preparedPosterPromise?.key === key) return preparedPosterPromise.promise;

  const promise = (async () => {
    const canvas = await createPosterCanvas();
    const blob = await canvasToBlob(canvas, "image/png");
    if (!blob) throw new Error("Canvas export gaf geen afbeeldingsbestand terug.");
    if (posterExportKey() === key) {
      preparedPosterKey = key;
      preparedPosterBlob = blob;
    }
    return blob;
  })();
  preparedPosterPromise = { key, promise };

  try {
    return await promise;
  } finally {
    if (preparedPosterPromise?.promise === promise) preparedPosterPromise = null;
  }
}

function schedulePosterExport() {
  invalidatePreparedPoster();
  if (!isIOSDevice()) return;
  window.clearTimeout(posterExportTimer);
  posterExportTimer = window.setTimeout(() => {
    preparePosterBlob().catch(() => {});
  }, 500);
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
    const filename = posterFilename();
    const key = posterExportKey();
    const cachedBlob = preparedPosterKey === key ? preparedPosterBlob : null;
    const blob = cachedBlob || await preparePosterBlob();
    if (isIOSDevice()) {
      const result = await shareOrDownloadOnIOS(blob, filename);
      els.download.textContent = result === "shared" ? "Gedeeld" : "Afbeelding geopend";
    } else {
      await downloadBlob(blob, filename);
      els.download.textContent = "Gedownload";
    }
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
    const filename = posterFilename();
    const key = posterExportKey();
    const cachedBlob = preparedPosterKey === key ? preparedPosterBlob : null;
    const blob = cachedBlob || await preparePosterBlob();
    const file = new File([blob], filename, { type: "image/png" });
    const canShareFile = typeof navigator.share === "function"
      && typeof navigator.canShare === "function"
      && navigator.canShare({ files: [file] });

    if (!canShareFile) {
      await downloadBlob(blob, filename);
      els.share.textContent = "Gedownload";
      window.setTimeout(() => {
        els.share.textContent = originalText;
      }, 1400);
      return;
    }

    const opponent = cleanText(state.opponent, "Tegenstander");
    const matchup = state.venue === "home" ? `Ajax - ${opponent}` : `${opponent} - Ajax`;

    try {
      await navigator.share({
        files: [file],
        title: "Mijn Ajax-opstelling",
        text: `Dit is mijn opstelling voor ${matchup}.`,
      });
      els.share.textContent = "Gedeeld";
    } catch (error) {
      if (error?.name === "AbortError") throw error;
      await downloadBlob(blob, filename);
      els.share.textContent = "Afbeelding geopend";
    }
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
  schedulePosterExport();
}, true);

document.addEventListener("load", (event) => {
  const image = event.target;
  if (image instanceof HTMLImageElement && image.dataset.playerPhotoId) schedulePosterExport();
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
loadCentralPlayers();
