export function findBlockById(edges, id) {
  return edges.find(edge => edge.node.contentfulid === id);
}
