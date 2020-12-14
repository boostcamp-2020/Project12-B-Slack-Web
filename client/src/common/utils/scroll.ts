/* eslint-disable no-param-reassign */
export const moveScrollToTheBottom = (El: any) => {
  const { scrollHeight, clientHeight } = El.current;
  const maxScrollTop = scrollHeight - clientHeight;
  El.current.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
};
