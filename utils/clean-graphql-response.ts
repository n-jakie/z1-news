export const cleanGraphQLResponse = function (data: any) {
  if (!data) return null;
  const dataAfterConvert: any = {};
  const isObject = (obj: null) => {
    return obj !== null && typeof obj === 'object' && !Array.isArray(obj);
  };

  Object.keys(data).forEach((key) => {
    if (data[key] && data[key].node) {
      dataAfterConvert[key] = cleanGraphQLResponse(data[key].node);
    } else if (data[key] && data[key].edges) {
      dataAfterConvert[key] = data[key].edges.map((edge: { node: any }) =>
        cleanGraphQLResponse(edge.node)
      );
    } else if (isObject(data[key])) {
      dataAfterConvert[key] = cleanGraphQLResponse(data[key]);
    } else if (key !== '__typename') {
      dataAfterConvert[key] = data[key];
    }
  });
  return dataAfterConvert;
};
