export const isExistParseCodeUrl = () => {
  const pattern = new RegExp(/^\?code=\w+$/);
  return pattern.test(window.location.search);
};

export const getCode = () => {
  const pattern = new RegExp(/[^(?code=)]\w+/);
  const code = pattern.exec(window.location.search);
  return code ? code[0] : null;
};

export const getChatroomId = () => {
  const chatroomUrlpattern = new RegExp(/^\/client\/[0-9]+(\/thread\/[0-9]+)*$/);
  if (chatroomUrlpattern.test(window.location.pathname)) {
    const pattern = new RegExp(/[0-9]+/g);
    const code = pattern.exec(window.location.pathname);
    return code ? Number(code[0]) : null;
  }
  return null;
};

export const getThreadId = () => {
  const threadUrlpattern = new RegExp(/^\/client\/[0-9]+(\/thread\/[0-9]+)$/);
  if (threadUrlpattern.test(window.location.pathname)) {
    const pattern = new RegExp(/[0-9]+$/g);
    const code = pattern.exec(window.location.pathname);
    return code ? Number(code[0]) : null;
  }
  return null;
};
