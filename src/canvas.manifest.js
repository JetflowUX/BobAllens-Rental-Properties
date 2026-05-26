export const manifest = {
  screens: {
    scr_e4pio6: { name: "Home", route: "/", position: { "x": 160, "y": 220 } },
    scr_5f4ajf: { name: "Properties", route: "/properties", position: { "x": 1560, "y": 220 } },
    scr_rmn8yt: { name: "About", route: "/about", position: { "x": 2960, "y": 220 } },
    scr_6tzqjm: { name: "Contact", route: "/contact", position: { "x": 4360, "y": 220 } }
  },
  sections: {
    sec_hucqw5: { name: "Website Navigation", x: 0, y: 0, width: 5720, height: 1180 }
  },
  layers: [
  { kind: "section", id: "sec_hucqw5", children: [
    { kind: "screen", id: "scr_e4pio6" },
    { kind: "screen", id: "scr_5f4ajf" },
    { kind: "screen", id: "scr_rmn8yt" },
    { kind: "screen", id: "scr_6tzqjm" }]
  }]

};