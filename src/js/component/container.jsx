import React from "react";
import Card from "./card";

const Container = () => {
    var characters = [
        {title: "Anakin Skywalker", imageUrl: "https://lumiere-a.akamaihd.net/v1/images/anakin-skywalker-main_23e5105b.jpeg?region=387%2C27%2C1350%2C760"},
        {title: "Ahsoka", imageUrl: "https://lumiere-a.akamaihd.net/v1/images/clone-wars-chronological-order-ahsoka_tall_6768d628.jpeg?region=0%2C0%2C1536%2C864"},
        {title: "Obi-Wan Kenobi", imageUrl: "https://lumiere-a.akamaihd.net/v1/images/obi-wan-kenobi-tcw-main_2f8a4a14.jpeg?region=209%2C133%2C884%2C498"},
        {title: "Darth Maul", imageUrl: "https://lumiere-a.akamaihd.net/v1/images/maul-the-phantom-apprentice_f2cb0f52.jpeg?region=253%2C36%2C743%2C417"}
    ]
    return (
        <div>
            <div className="card" style={{
                backgroundImage: "url(https://preply.com/wp-content/uploads/2020/05/694px-Star_Wars_Logo.svg_.png)", height: "40rem", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'
                }}>
                <div className="card-body">
                    <h5 className="card-title" style={{color: "white"}}>Card title</h5>
                    <p className="card-text" style={{color: "white"}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            <div id="cardGroup" className="d-flex justify-content-around" style={{marginTop: '5vh'}}>
               {characters.map((character) => (
                <Card title ={character.title} imageUrl={character.imageUrl} />
               ))}
            </div>
        </div>
    )
}


export default Container;