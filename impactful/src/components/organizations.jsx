import React, { Component } from 'react';
import Iframe from 'react-iframe'


export default class jobOpp extends Component {
    render() {
        return (
            <div>

            <div className="airtable-title">
            <h1> Organizations</h1>
            </div>

            <div  style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}   className="airtable-embed">
            <Iframe class="airtable-embed" src="https://airtable.com/embed/shrjElLGi3TuooVVf?backgroundColor=orange&viewControls=on"
            frameborder="0" onmousewheel="" width="900" height="533" style={{background: "transparent", border:" 1 solid #ccc"}}></Iframe>
            </div>

            </div>
        )
    }

}