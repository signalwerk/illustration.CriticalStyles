// Made with Zdog
// https://danismm.tumblr.com/image/185875302174

// Converts from degrees to radians.

let bgColor = "#EC0";
let fillColor = "#000";

let degToRad = degrees => {
  return (degrees * Math.PI) / 180;
};

let isSpinning = true;
let scaler = 2;

let illo = new Zdog.Illustration({
  element: ".zdog-canvas",
  dragRotate: true,
  // stop spinning when drag starts
  onDragStart: function() {
    isSpinning = false;
  },
  rotate: { x: degToRad(25),  y: degToRad(-25),  z: degToRad(0) }
});

let flashCount = 30;
let angle = 4;
let cardDimension = [80 * scaler, 120 * scaler];
let radius = 250 * scaler;
let xR = radius * Math.cos(degToRad(angle) / 2);
let yR = radius * Math.sin(degToRad(angle) / 2);


let xRBig = radius * Math.cos(degToRad(angle + 3) / 2);
let yRBig = radius * Math.sin(degToRad(angle + 3) / 2);

var groupStar = new Zdog.Group({
  addTo: illo
});
var groupStarBG = new Zdog.Group({
  addTo: illo
});

// 3D shape
let arr1 = Array.from(
  {
    length: flashCount // Create 5 indexes with undefined values
  },
  (v, i) => {
    new Zdog.Shape({
      addTo: groupStarBG,
      path: [
        { x: 0, y: 0, z: -1 },
        { x: xR, y: 0 - yRBig, z: -1 },
        { x: xR, y: yRBig, z: -1 }
      ],
      // rotate: { z: Zdog.TAU/360*90 },
      rotate: { z: (Zdog.TAU / flashCount) * i + Zdog.TAU / degToRad(1) },

      closed: true,
      // stroke: 5 * scaler,
      color: bgColor,
      fill: true
    });

    new Zdog.Shape({
      addTo: groupStar,
      path: [{ x: 0, y: 0, z: 0 }, { x: xR, y: 0 - yR, z: 0 }],
      // rotate: { z: Zdog.TAU/360*90 },
      rotate: { z: (Zdog.TAU / flashCount) * i },

      closed: true,
      stroke: 1.2 * scaler,
      color: fillColor,
      fill: true
    });

    new Zdog.Shape({
      addTo: groupStar,
      path: [{ x: 0, y: 0, z: 0 }, { x: xR, y: yR, z: -1 }],
      // rotate: { z: Zdog.TAU/360*90 },
      rotate: { z: (Zdog.TAU / flashCount) * i },

      closed: true,
      stroke: 1.65 * scaler,
      color: fillColor,
      fill: true
    });
  }
);


let appart = 7;
let arr2 = Array.from(
  {
    length: 4 // Create 5 indexes with undefined values
  },
  (v, i) => {
    playCard(illo, (-35 + appart * i) * scaler, bgColor, fillColor);
  }
);
playCard(illo, (-35 + appart * 4) * scaler, bgColor, fillColor);



let arr3 = Array.from(
  {
    length: 2 // Create 5 indexes with undefined values
  },
  (v, i) => {
    playCard(illo, (20 + appart * i) * scaler, bgColor, fillColor);
  }
);

playCard(illo, (20 + appart * 2) * scaler, bgColor, fillColor);

// circle
// new Zdog.Ellipse({
//   addTo: illo,
//   diameter: 80,
//   translate: { z: 40 },
//   stroke: 20,
//   color: "#636"
// });

// square

let backForth = 30;
let direction = -1;
function animate() {
  backForth = backForth - 1;
  if (backForth < 1) {
    backForth = 30;
    direction = direction * -1;
  }
  // illo.rotate.y = illo.rotate.y + (isSpinning ? 0.005 * direction : 0);
  groupStar.rotate.z = groupStar.rotate.z + 0.005 ;
  groupStarBG.rotate.z = groupStarBG.rotate.z + 0.005 ;
  illo.updateRenderGraph();
  requestAnimationFrame(animate);
}

animate();
