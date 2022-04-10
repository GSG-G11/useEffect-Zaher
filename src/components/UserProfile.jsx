import { useState, useEffect } from 'react';

const UserProfile = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();

    fetch('https://jsonplaceholder.typicode.com/users', {
      signal: abortController.signal,
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setData(data);
      })
      .catch((err) => console.log(err));

    return () => abortController.abort();
  }, []);

  return (
    <>
      {!loading
        ? data.map((user) => {
            return (
              <div key={user.id}>
                <h3>{user.name}</h3>
                <button
                  onClick={() =>
                    setData((prev) =>
                      prev.filter((person) => person.id !== user.id)
                    )
                  }
                >
                  Delete
                </button>
                <button
                  onClick={() => {
                    const newName = prompt('New username: ');

                    if (newName.trim() === '') return;

                    setData((prev) =>
                      prev.map((person) =>
                        person.id === user.id
                          ? { ...person, name: newName }
                          : person
                      )
                    );
                  }}
                >
                  Edit
                </button>
              </div>
            );
          })
        : 'Loading'}
    </>
  );
};

export default UserProfile;
