const {existRoute, checkAbsolute, verifyDirectory,convertToAbsolute,filterFile, openedDirectory}= require('../src/md-links');


describe ("checkAbsolute", () => {
  it("deberia retornar la misma ruta",()=>{
    expect(path.isAbsolute('/test/demo_path'))
    .toBe("/test/demo_path");
  });
  it("deberia retornar la ruta absoluta",()=>{
expect(checkAbsolute("index.js")).toBe("/test/index.js");
  })
});

