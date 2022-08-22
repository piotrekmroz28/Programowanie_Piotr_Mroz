import React, {useState,useEffect} from 'react';
import Dodatki from '../dane.json';

function Skomponuj() {

    const [dodatki, setDodatki ] = useState([]);
    const [koszt, setKoszt] = useState(0);
    const [baza, setBaza] = useState(700);

    useEffect( () => {
        Dodatki.map((dodatek) => {
            dodatek.checked = dodatek.koszt === 0? true: false;
            return dodatek;
        })
        setDodatki(Dodatki);
    },[])

    useEffect(()=>{
        setKoszt(dodatki.reduce( (suma, dodatek) => {
            return dodatek.checked? suma + dodatek.koszt : suma;
        }, baza));
    },[baza, dodatki])

    const dodatekZmiana = (dodatek) => {
        setDodatki(
            dodatki.map( el => {
                if(el.nazwa === dodatek.nazwa){
                    el.checked = !el.checked;
                }
                return el;
            })
        );

        setKoszt(dodatki.reduce( (suma, dodatek) => {
            return dodatek.checked? suma + dodatek.koszt : suma;
        }, baza));
    }

    const zmienRozmiar = (rozmiar) => {
        setBaza(rozmiar);
    }

  return (
    <div className='skomponuj'>
        <h1>Skomponuj pizzę</h1>
        <h4>Cena: {(koszt / 100).toFixed(2)} zł</h4>
        <div>
            <img className={'wielkosc mala ' + (baza === 600? "zaznaczone" : "")} src={process.env.PUBLIC_URL + "/assets/size.png"} alt="rozmiar_maly" onClick={() => zmienRozmiar(600)}></img>
            <img className={'wielkosc srednia ' + (baza === 700? "zaznaczone" : "")} src={process.env.PUBLIC_URL + "/assets/size.png"} alt="rozmiar_sredni" onClick={() => zmienRozmiar(700)}></img>
            <img className={'wielkosc duza ' + (baza === 800? "zaznaczone" : "")} src={process.env.PUBLIC_URL + "/assets/size.png"} alt="rozmiar_duzy" onClick={() => zmienRozmiar(800)}></img>
        </div>
        <div><button>Dodaj</button></div>
        <div className="dodatki">
            {dodatki.map((dodatek,index) => {
                return (
                    <div key={index} className="dodatekRzad">
                        <input type="checkbox" checked={dodatek.checked} onChange={() => dodatekZmiana(dodatek)}/>
                        <img className='dodatek_ikonka' src={process.env.PUBLIC_URL + "/assets/" + dodatek.nazwa + ".png"} alt={dodatek.nazwa}></img>
                        <p>{dodatek.nazwa}</p>
                        {dodatek.koszt === 0 ? <p>free</p> : <p>{(dodatek.koszt / 100).toFixed(2) + " zł"}</p> }
                    </div>
                )
            })}
        </div>    
    </div>
    
  );
}

export default Skomponuj;