const {existRoute, checkAbsolute, verifyDirectory,convertToAbsolute,filterFile, openedDirectory}= require('../src/md-links');

const path = "C:\Users\Joss\Documents\GitHub\LIM017-md-links\exampleFile";
const falsePath ="C:/Users/Joss/Documents/GitHub/LIM017-md-linksexampleFile";

describe ("existRoute", () => {
  it("deberia retornar true si la ruta existe",() => {
    expect(existRoute(path)).toBe(true);
  });

  it("deberia retornar false si la ruta existe",()=>{
expect(checkAbsolute(falsePath)).toBe(false);
  })
});


describe('verifiesPathExist', () => {
  it('should return True if a path exists', () => {
    expect(verifiesPathExist(path)).toBe(true)
  });
  it('should return False if a path does not exists', () => {
    expect(verifiesPathExist(falsePath)).toBe(false)
  });
});
