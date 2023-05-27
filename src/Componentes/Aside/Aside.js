import React from 'react'
import ardillesImage from "../../Imagenes/ardilles.jpg";
import carranzaImage from "../../Imagenes/Garrett.jpg";
import GarrettImage from "../../Imagenes/carranza.jpg";
import "./Aside.css"

const Aside = () => {
    return(
        <aside className="Aside">

        <div className="card" style={{width: "18rem"}}>
            <img src={ardillesImage} className="card-img-top" alt="..."/>
            <div className="card-body">
                <p className="card-text">Mi nombre es DAvid Ardillez y soy integrante del grupo 7 ...</p>
            </div>
        </div>
        <div className="card" style={{width: "18rem"}} >
            <img src={carranzaImage} className="card-img-top" alt="..."/>
            <div className="card-body">
                <p className="card-text">Mi nombre es DAvid Ardillez y soy integrante del grupo 7 ...</p>
            </div>
        </div>
        <div className="card" style={{width: "18rem"}}>
            <img src={GarrettImage} className="card-img-top" alt="..."/>
            <div className="card-body">
                <p className="card-text">Mi nombre es DAvid Ardillez y soy integrante del grupo 7 ...</p>
            </div>
        </div>
        </aside>
    )
}

export default Aside


/*
<div class="card text-bg-dark">
  <img src="{GarrettImage}" class="card-img" alt="...">
  <div class="card-img-overlay">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p class="card-text"><small>Last updated 3 mins ago</small></p>
  </div>
</div>

<div class="card text-bg-dark">
  <img src="{carranzaImage}" class="card-img" alt="...">
  <div class="card-img-overlay">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p class="card-text"><small>Last updated 3 mins ago</small></p>
  </div>
</div>

<div class="card text-bg-dark">
  <img src="{GarrettImage}" class="card-img" alt="...">
  <div class="card-img-overlay">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p class="card-text"><small>Last updated 3 mins ago</small></p>
  </div>
</div>
*/




/*

*/