import React, { useState, useEffect } from 'react';
import api from './services/api';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

import DevItem from './components/DevItem';
import DevForm from './components/DevForm';


function App() {
  const [devs, setDevs] = useState([]);

   useEffect(() => {
    async function loadDevs() {
      const res = await api.get('/devs');

      setDevs(res.data);
    }

    loadDevs();
  }, []);

  async function handleAddDev(data) {

    const res = await api.post('/devs', data)

    setDevs([...devs, res.data]); // ...devs puxa todos devs que ja tem e res.data inclui novo dev
  }

     async function handleDeleteDev(github_username) {
      await api.delete(`devs/${github_username}`);
      setDevs(devs.filter(dev=>dev.github_username!==github_username));
    }
  return (
    <div id="app">
      <aside>
        <strong>Register</strong>
        <DevForm onSubmit={handleAddDev} />
      </aside>
      <main>
        <ul>
          {devs.map(dev => (
            <DevItem key={dev._id} dev={dev} deleteDev={handleDeleteDev}/>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;