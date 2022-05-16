import path from 'path';

export const getArgPathAbsolute = (argPath) => path.isAbsolute(argPath) ? argPath : path.resolve(argPath);