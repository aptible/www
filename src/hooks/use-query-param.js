import { useEffect, useState } from 'react';
import * as queryString from 'query-string';
import { querystring } from '../lib/util';

export const useQueryParam = paramName => {
  const queryParams = queryString.parse(querystring());
  const [param, setParam] = useState(null);

  useEffect(() => {
    setParam(queryParams[paramName]);
  }, [param]);

  return { [paramName]: param };
};
