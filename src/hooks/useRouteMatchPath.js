import { useLocation, useParams } from 'react-router-dom';

export const useRouteMatchPath = () => {

  const params = useParams();
  const { pathname } = useLocation();

  if (!Object.keys(params).length) return pathname;

  let path = pathname;

  Object.entries(params).forEach(([paramName, paramValue]) => {
    if (paramValue) path = path.replace(paramValue, `:${paramName}`);
  });

  return path;
  
};
