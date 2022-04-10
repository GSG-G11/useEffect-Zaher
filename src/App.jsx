import { Suspense } from 'react';
import Avatar from './components/Avatar';
import Counter from './components/Counter';
import GiphyFetch from './components/GiphyFetch';
import MouseMove from './components/MouseMove';
import UserProfile from './components/UserProfile';

const App = () => {
  return (
    <>
      <Counter />
      <MouseMove />
      <GiphyFetch />
      <Avatar />
      <UserProfile />
    </>
  );
};

export default App;
