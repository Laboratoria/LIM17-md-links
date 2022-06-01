const { existRoute,
  convertToAbsolute,
  verifyDirectory,
  openedDirectory,
  filterFile,
  gettinlinks,
  statusLinks}= require('../src/md-links');


const routeRelative="exampleFile";
const routeAbsolute="C:\\Users\\Joss\\Documents\\GitHub\\LIM017-md-links\\exampleFile";



describe('convertToAbsolute', () => {
  it('convertToAbsolute', () => {
          expect(convertToAbsolute(routeRelative)).toEqual(routeAbsolute);
      });
  });

  describe('existRoute is false ', () => {
    test('existRoute', () => {
      expect(existRoute()).toBe(false)
    });
    });
    
    describe('existsRoute is true', () => {
    test('existRoute', () => {
        expect(existRoute(routeRelative)).toBe(true)
    });
    });
  
  /* it("deberia retornar false si la ruta existe",()=>{
expect(checkAbsolute(falsePath)).toBe(false);
  })
});


describe('verifiesPathExist', () => {
  it('should return True if a path exists', () => {
    expect(verifiesPathExist(path)).toBe(true)
  });
  it('should return False if a path does not exists', () => {
    expect(verifiesPathExist(falsePath)).toBe(false)
  }); */