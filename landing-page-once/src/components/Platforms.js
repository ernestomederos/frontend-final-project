import React from 'react';
import songs from "../data";
import logo from '../logos';

function Platforms() {
return (       
        <div className="links-to-music">
          {Object.entries(songs.platforms).map(([platform, url]) => (
            <div key={platform} className="platform-buttons">
              <a className="button" href={url} target="_blank" rel="noreferrer">
                <img src={logo[platform]} alt={`${platform} Icon`} />
                <span>{platform}</span>
              </a>
            </div>
          ))}
        </div>
    )};
export default Platforms;