import React from 'react'
import '../styles.css';

export default function Header() {
    return(
        <div className='header'>
            <img className='logo' src='logo.png' alt='moviegallery' />
            <h2 className='app-subtitle'>Ooga booga let's watch some movies.</h2>
        </div>
    );
}