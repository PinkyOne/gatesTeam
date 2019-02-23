export function snakeToCamel(string) {
  return string.replace(/(_\w)/g, m => m[1].toUpperCase());
}

export const normalizeResponse = ({ errors, data }, period) => {
  const normalizedResponse = { errors, data: {} };
  Object.keys(data).forEach(
    (key) => {
      const indexToCut = key.indexOf(`_${period}`);
      const newKey = snakeToCamel(indexToCut > 0 ? key.substring(0, indexToCut) : key);
      normalizedResponse.data[newKey] = data[key];
    },
  );
  return normalizedResponse;
};
