import { useState, useEffect } from 'react';

const Avatar = () => {
  const [term, setTerm] = useState('');
  const [avatarLink, setAvatarLink] = useState('');

  useEffect(() => {
    const abortController = new AbortController();

    fetch(`https://robohash.org/${term}`, {
      signal: abortController.signal,
    })
      .then((res) => setAvatarLink(res.url))
      .catch((err) => console.log(err));

    return () => abortController.abort();
  }, [term]);

  return (
    <>
      <input
        type="text"
        value={term}
        onChange={({ target: { value } }) => setTerm(value)}
      />
      <img src={avatarLink} alt="avatar" />
    </>
  );
};

export default Avatar;
