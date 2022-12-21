const getFirstLetter = (string) => {
  if (!string) return '';
  return string.charAt(0).toUpperCase();
};

export default getFirstLetter;
