import { useLayoutEffect } from 'react';

const rootNode = document.documentElement;
const scrollbarWidth = window.innerWidth - rootNode.clientWidth;

export const useScrollPrevent = (condition) => {
  useLayoutEffect(() => {
    if (condition) {
      rootNode.style.cssText = `
      overflow-y: hidden;
      padding-right: ${scrollbarWidth}px;
      `;
    } else {
      rootNode.removeAttribute('style');
    }
  }, [condition]);
};
