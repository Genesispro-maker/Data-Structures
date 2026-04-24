function mulberry32(seed) {
  return function() {
    let t = seed += 0x6D2B79F5;
    t = Math.imul(t ^ t >>> 15, t | 1);
    t ^= t + Math.imul(t ^ t >>> 7, t | 61);
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  }
}


function seedToString(str){
  let h = 1779033703;

  for (let i = 0; i < str.length; i++) {
    h = Math.imul(h ^ str.charCodeAt(i), 3432918353);
    h = (h << 13) | (h >>> 19);
  }

  return h >>> 0;
}

const eyes = [
  `<circle cx="35" cy="40" r="5" fill="black"/> 
   <circle cx="65" cy="40" r="5" fill="black"/>`,

  `<rect x="30" y="35" width="10" height="5" fill="black"/>
   <rect x="60" y="35" width="10" height="5" fill="black"/>`,

  `<ellipse cx="35" cy="40" rx="6" ry="3" fill="black"/>
   <ellipse cx="65" cy="40" rx="6" ry="3" fill="black"/>`,
];

const mouths = [
  `<path d="M35 65 Q50 75 65 65" stroke="black" stroke-width="3" fill="none"/>`,

  `<circle cx="50" cy="65" r="5" fill="black"/>`,

  `<path d="M35 70 Q50 60 65 70" stroke="black" stroke-width="3" fill="none"/>`,
];

const colors = [
  "#FEE440",
  "#00BBF9",
  "#F15BB5",
  "#9B5DE5",
  "#00F5D4",
  "#FFADAD",
];

function generateAvatar(seedString, size = 100) {

  const seed = stringToSeed(seedString);
  const rng = mulberry32(seed);

  const eye = eyes[Math.floor(rng() * eyes.length)];
  const mouth = mouths[Math.floor(rng() * mouths.length)];
  const color = colors[Math.floor(rng() * colors.length)];

  return `
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="${size}"
    height="${size}"
    viewBox="0 0 100 100"
  >
    <rect width="100" height="100" fill="${color}" rx="20"/>

    ${eye}

    ${mouth}
  </svg>
  `;
}