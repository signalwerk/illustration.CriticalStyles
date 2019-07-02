let playCard = (illo, z, fg, bg, outline) => {
  var groupCard = new Zdog.Group({
    addTo: illo
  });

  var groupCardBG = new Zdog.Group({
    addTo: illo
  });

  new Zdog.Rect({
    addTo: groupCard,
    width: cardDimension[0],
    height: cardDimension[1],
    translate: { z: z },
    stroke: 3 * scaler,
    color: fg,
    fill: true
  });

  if (outline) {
    new Zdog.Rect({
      addTo: groupCard,
      width: cardDimension[0],
      height: cardDimension[1],
      translate: { z: z },
      stroke: 2 * scaler,
      color: bg
    });
  }

  // invisible Shape to counter-balance group z-index
  new Zdog.Rect({
    addTo: groupCard,
    width: radius * 2,
    height: radius * 2,
    translate: { z: z },
    visible: false
  });

  new Zdog.Rect({
    addTo: groupCardBG,
    width: cardDimension[0],
    height: cardDimension[1],
    translate: { z: z - 1 * scaler },
    stroke: 7 * scaler,
    color: bg,
    fill: true
  });

  // invisible Shape to counter-balance group z-index
  new Zdog.Rect({
    addTo: groupCardBG,
    width: radius * 2,
    height: radius * 2,
    translate: { z: z - 4 * scaler },
    visible: false
  });
};
