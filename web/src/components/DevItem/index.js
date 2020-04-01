import React from 'react';
import { TrashFill } from 'react-bootstrap-icons';

import './styles.css';

function DevItem({ dev, deleteDev }) {
 
  function devDelete(){
    deleteDev(dev.github_username)
  }


  return (
    <li className="dev-item">
    <header>
      <img src={dev.avatar_url} alt={dev.name} />
      <div className="user-info">
        <strong>{dev.name}</strong>
        <span>{dev.techs.join(', ')}</span>
      </div>
      <div className="icon">
        <TrashFill onClick={devDelete} />
      </div>
    </header>
    <p>{dev.bio}</p>
    <a href={`https://github.com/${dev.github_username}`}>Acess profile on Github</a>
  </li>
  );
}


export default DevItem;