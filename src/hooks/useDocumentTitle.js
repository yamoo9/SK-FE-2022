import {useEffect} from 'react';

const BASE_DOCUMENT_TITLE = process.env.REACT_APP_TITLE;

export const useDocumentTitle = (pageTitle) => {

  useEffect(() => {
    document.title = `${pageTitle} ← ${BASE_DOCUMENT_TITLE}`;
  }, [pageTitle]);
  
}