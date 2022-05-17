import path from 'path';

// Convertir una ruta relativa en absoluta
export const getArgPathAbsolute = argPath =>
	path.isAbsolute(argPath) ? argPath : path.resolve(argPath);
