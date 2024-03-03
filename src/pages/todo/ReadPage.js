import React, { useCallback } from 'react';
import {
  createSearchParams,
  useNavigate,
  useParams,
  useSearchParams,
} from 'react-router-dom';

export default function ReadPage() {
  const navigate = useNavigate();
  const { tno } = useParams();

  const [queryParams] = useSearchParams();

  const page = queryParams.get('page') ? parseInt(queryParams.get('page')) : 1;
  const size = queryParams.get('size') ? parseInt(queryParams.get('size')) : 10;

  const queryStr = createSearchParams({ page, size }).toString();

  const moveToModify = (tno) => {
    navigate({ pathname: `/todo/modify/${tno}`, search: queryStr });
  };

  const moveToList = useCallback(() => {
    navigate({
      pathname: '/todo/list',
      search: queryStr,
    });
  }, [navigate, queryStr]);

  return (
    <div className={'text-3xl'}>
      Todo Read Page {tno}
      <div>
        <button onClick={() => moveToList()}>Test List</button>
        <button onClick={() => moveToModify(tno)}>Test Modify</button>
      </div>
    </div>
  );
}
