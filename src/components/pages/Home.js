import React from 'react';
import photo1 from "../../images/cauliflower.jpg";
import photo2 from "../../images/girl.jpg";
import photo3 from "../../images/soup.jpg";
import photo4 from "../../images/wrestling.jpg";



const Home = () => {
    return (
        <div>
            <h3 className="title">BLOG O ZDROWYM STYLU ŻYCIA</h3>
            <div className="photos" >
                <img className="cauliflower" src={photo1} alt="cauliflower"/>
                <img className="girl" src={photo2} alt="girl"/>
                <img className="soup" src={photo3} alt="soup"/>
                <img className="wrestling" src={photo4} alt="wrestling"/>
            </div>
            <div>
                <p>
                </p>
                <p className="text">
                    Zdrowa żywność cieszy się coraz większą popularnością, gdyż wzrasta świadomość konsumentów, którzy
                    zaczynają coraz większą uwagę zwracać na to, co znajduje się na ich talerzach. Jako, że od jakości
                    spożywanego jedzenia zależy w ogromnym stopniu to, jak będziemy się czuć i wyglądać, warto zastanowić się
                    nad tym, za co tak naprawdę płacimy podczas zakupów. Pożywienie powinno być jak najmniej przetworzone,
                    a więc naturalne oraz pozbawione środków konserwujących i ulepszających.
                </p>
            </div>
        </div>

    );
};

export default Home;