import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            // <div style={{display:'flex',padding:'0.5',textAlign:'center'}}>
            <div className='flex-con'>
                <Link to="/" style={{textDecoration:'none'}}><h2 style={{marginTop:'1rem',marginLeft:'1rem',color:'black'}}>Trendify</h2></Link>
                <Link to="/favourites" style={{textDecoration:'none'}}><h2 style={{marginLeft:'2rem',marginTop:'1rem',color:'black'}}>Go to favourites</h2></Link>
                
                
            </div>
        )
    }
}