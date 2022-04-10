import { useState, useEffect } from 'react';

const GiphyFetch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();

    if (searchTerm.trim() === '') return;

    fetch(
      `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&limit=5&api_key=GB2TIpB11wLmKBbNbYZ5b6F9HMYXs38a`,
      {
        signal: abortController.signal,
      }
    )
      .then((res) => res.json())
      .then((data) => setData(data.data.map((obj) => obj.images.original.url)))
      .catch((err) => console.log(err));

    return () => abortController.abort();
  }, [searchTerm]);

  return (
    <>
      <input
        type="text"
        onChange={({ target: { value } }) => setSearchTerm(value)}
      />

      {data.map((img) => {
        return <img key={img} src={img} alt="img" />;
      })}
    </>
  );
};

export default GiphyFetch;
