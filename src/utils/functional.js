const _pipe = (f, g) => (...args) => g(f(...args));

export const pipe = (...fns) => fns.reduce(_pipe);

export const compose = (...fns) =>
  fns.reduce((f, g) => (...args) => f(g(...args)));
