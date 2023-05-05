import { useEffect, useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css';

// services
import { getAccessToken } from './services/getAccessToken';

function App() {

  useEffect( () => {
    const f = async () => {
      const res = await getAccessToken();
      console.log(res);
    }
    f();
  }, [] );

  return (
    <main>
      <p>hola</p>
    </main>
  )
}

export default App
