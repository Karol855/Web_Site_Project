import React from 'react';
import mediterranean from "../../images/mediterranean.jpg";
import {Link} from "react-router-dom";

import Blog from "./Blog";

const Diet = () => {
    return (
        <div className="main-diet--container">
            <h2>Diety</h2>
            <p className="diet-begining">Jednym z czynników, który zasadniczo wpływa na zdrowie jest sposób odżywiania,
                czyli stosowana dieta. W potocznym rozumieniu, dieta ma prowadzić do utraty zbędnych kilogramów i polega
                na spożywaniu określonych posiłków przez pewien czas, aż do uzyskania zadowalającego efektu. A co potem?
                Potem, jeśli wrócimy do starego modelu odżywiania, kilogramy także powrócą. Dieta to coś więcej.
                To stosowanie zdrowego modelu żywienia, opartego na dobrze skomponowanych posiłkach, dostarczających nam
                wszystkich niezbędnych składników odżywczych. Bardzo przydatne okazują się w takiej sytuacji porady dietetyka
                i pomoc w odpowiednim ułożeniu posiłków.</p>
            <div className="diet-container">
                <div className="diet1">
                    <div className="mediterranean-diet">
                        <img className="mediterranean-photo" src={mediterranean} alt=""/>
                        <p><strong>Dieta śródziemnomorska <br/> </strong>
                            Dieta śródziemnomorska jest sposobem odżywiania i jednocześnie stylem życia typowym dla ludności zamieszkującej
                            basen Morza Śródziemnego – Greków, Włochów, Hiszpan i Francuzów z południa.
                            W tych rejonach jest kultywowana od tysięcy lat, natomiast popularna w wielu regionach świata
                            stała się w latach 90-tych XX wieku, kiedy naukowcy  zaczęli udowadniać powiązania między dłuższym życiem
                            i mniejszą śmiertelnością z powodu chorób serca a sposobem odżywiania ludności zamieszkującej basen Morza Śródziemnego.
                            Nie ma jednej diety śródziemnomorskiej, nie jest to ściśle usystematyzowana dieta z rozkładem
                            makroskładników i dokładnymi wytycznymi produktów dozwolonych do spożycia. Różni się ona nieco
                            w zależności od regionu. Wszędzie jednak bazuje na podobnych założeniach.Dieta śródziemnomorska
                            jest bogata w błonnik pokarmowy, zdrowe kwasy tłuszczowe oraz witaminy i przeciwutleniacze, które...
                        </p>
                    </div>
                    <Link to="/blog" className="mediterranean-button">Czytaj dalej</Link>
                </div>

                <div className="diet1">
                    <div className="mediterranean-diet">
                        <img className="mediterranean-photo" src={mediterranean} alt=""/>
                        <p><strong>Dieta śródziemnomorska <br/> </strong>
                            Dieta śródziemnomorska jest sposobem odżywiania i jednocześnie stylem życia typowym dla ludności zamieszkującej
                            basen Morza Śródziemnego – Greków, Włochów, Hiszpan i Francuzów z południa.
                            W tych rejonach jest kultywowana od tysięcy lat, natomiast popularna w wielu regionach świata
                            stała się w latach 90-tych XX wieku, kiedy naukowcy  zaczęli udowadniać powiązania między dłuższym życiem
                            i mniejszą śmiertelnością z powodu chorób serca a sposobem odżywiania ludności zamieszkującej basen Morza Śródziemnego.
                            Nie ma jednej diety śródziemnomorskiej, nie jest to ściśle usystematyzowana dieta z rozkładem
                            makroskładników i dokładnymi wytycznymi produktów dozwolonych do spożycia. Różni się ona nieco
                            w zależności od regionu. Wszędzie jednak bazuje na podobnych założeniach.Dieta śródziemnomorska
                            jest bogata w błonnik pokarmowy, zdrowe kwasy tłuszczowe oraz witaminy i przeciwutleniacze, które...
                        </p>
                    </div>
                    <Link to="/blog" className="mediterranean-button">Czytaj dalej</Link>
                </div>
                <div className="diet1">
                    <div className="mediterranean-diet">
                        <img className="mediterranean-photo" src={mediterranean} alt=""/>
                        <p><strong>Dieta śródziemnomorska <br/> </strong>
                            Dieta śródziemnomorska jest sposobem odżywiania i jednocześnie stylem życia typowym dla ludności zamieszkującej
                            basen Morza Śródziemnego – Greków, Włochów, Hiszpan i Francuzów z południa.
                            W tych rejonach jest kultywowana od tysięcy lat, natomiast popularna w wielu regionach świata
                            stała się w latach 90-tych XX wieku, kiedy naukowcy  zaczęli udowadniać powiązania między dłuższym życiem
                            i mniejszą śmiertelnością z powodu chorób serca a sposobem odżywiania ludności zamieszkującej basen Morza Śródziemnego.
                            Nie ma jednej diety śródziemnomorskiej, nie jest to ściśle usystematyzowana dieta z rozkładem
                            makroskładników i dokładnymi wytycznymi produktów dozwolonych do spożycia. Różni się ona nieco
                            w zależności od regionu. Wszędzie jednak bazuje na podobnych założeniach.Dieta śródziemnomorska
                            jest bogata w błonnik pokarmowy, zdrowe kwasy tłuszczowe oraz witaminy i przeciwutleniacze, które...
                        </p>
                    </div>
                    <Link to="/blog" className="mediterranean-button">Czytaj dalej</Link>
                </div>

            </div>
        </div>
    );
};

export default Diet;