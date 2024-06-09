import React, { useContext } from 'react';
import { StateContext } from './store/StateContext';

function Home() {
  const context = useContext(StateContext)
  return (
    <div className="Home">
      <h2>Hello {context.name}</h2>
    </div>
  );
}

export default Home;
