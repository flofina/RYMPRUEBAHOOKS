import React, {useState, useEffect} from 'react';

const useData = (initialState) => {

  const [infoSearch, setInfoSearch] = useState(initialState);

  return (infoSearch, setInfoSearch);
};

export default useData;