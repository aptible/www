export const titleize = (s) => {
  return s.replace(/\-/g, ' ').replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())));
};
