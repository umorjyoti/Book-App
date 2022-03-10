import {useState, useEffect} from 'react';
import BookAPI from '../api/BookAPI';

//Sleep function
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if (new Date().getTime() - start > milliseconds) {
      break;
    }
  }
}

export default () => {
  const [results, setResults] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const ApiSearch = async () => {
    try {
      setLoading(true);
      const response = await BookAPI.get();
      setResults(response.data.entries);
      setLoading(false);
    } catch (e) {
      setErrorMessage('Something went wrong ,Please try again later..');
    }
  };

  //  useEffect(() => {
  //     ApiSearch();
  //   }, []);

  return [ApiSearch, errorMessage, results, loading];
};
