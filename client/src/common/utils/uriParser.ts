export const isExistParseCode = () => {
  const pattern = new RegExp(/^\?code=\w+$/);
  return pattern.test(window.location.search);
};

export const getCode = () => {
  const pattern = new RegExp(/[^(?code=)]\w+/);
  const code = pattern.exec(window.location.search);
  return code ? code[0] : null;
};
