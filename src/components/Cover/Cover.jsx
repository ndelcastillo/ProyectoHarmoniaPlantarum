import React from 'react'
import './cover.css';

function Cover() {

    let styleDiv = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }

    let title1 = "909"
    let styleH1 = {
        color: "black",
        fontFamily: "helvetica",
        fontSize: "28px",
        fontWeight: "600",
        textDecoration: "none",
    }

    let styleImg = {
        width: "9px",
        height: "70px",
        marginLeft: "30px",
        opacity: "50%"
    }

    let title2 = "Harmonia"+" Plantarum."
    let styleH2 = {
        color: "black",
        fontFamily: "helvetica",
        fontSize: "18px",
        fontWeight: "500",
        textDecoration: "none",
        marginLeft: "30px",
    }

    return (
        <section className='sectionCover'>
            <div style={styleDiv}>
                <h1 style={styleH1}>{title1}</h1>
                <img src="." style={styleImg} />
                <h1 style={styleH2}>{title2}</h1>
            </div>
        </section>
    );
}

export default Cover