import React from 'react';
import {Link} from "react-router-dom";
import mediterranean from "../../images/mediterranean.jpg";

const Blog = () => {
    return (
        <div className="blog-container">
            <div className="article-container">
                <div>
                    <img className="mediterranean-photo2" src={mediterranean} alt=""/>
                    <p className="article-text"><strong className="title-article">Dieta śródziemnomorska <br/> </strong>
                    Dieta śródziemnomorska jest sposobem odżywiania i jednocześnie stylem życia typowym dla ludności zamieszkującej
                    basen Morza Śródziemnego – Greków, Włochów, Hiszpan i Francuzów z południa.
                    W tych rejonach jest kultywowana od tysięcy lat, natomiast popularna w wielu regionach świata
                    stała się w latach 90-tych XX wieku, kiedy naukowcy  zaczęli udowadniać powiązania między dłuższym życiem
                    i mniejszą śmiertelnością z powodu chorób serca a sposobem odżywiania ludności zamieszkującej basen Morza Śródziemnego.
                    Nie ma jednej diety śródziemnomorskiej, nie jest to ściśle usystematyzowana dieta z rozkładem
                    makroskładników i dokładnymi wytycznymi produktów dozwolonych do spożycia. Różni się ona nieco
                    w zależności od regionu. Wszędzie jednak bazuje na podobnych założeniach.Dieta śródziemnomorska
                    jest bogata w błonnik pokarmowy, zdrowe kwasy tłuszczowe oraz witaminy i przeciwutleniacze, które
                    wspólnie odpowiadają za prozdrowotne działanie tego stylu odżywiania. Jej przestrzeganie nie sprawia trudności,
                    ponieważ jest smaczna, urozmaicona i mało restrykcyjna, a wręcz przyjemna.
                    Według rankingu ekspertów publikowanego przez U.S. News & World Report dieta śródziemnomorska zajmuje pierwsze
                    miejsce wśród wszystkich analizowanych diet – uchodzi za najkorzystniejszą w zdrowym odżywianiu.
                    Jest uznawana za najlepszą dietę przy cukrzycy i drugą w kolejności dla zdrowia układu krążenia,
                    a przy tym za łatwą do przestrzegania.<br/>
                    <strong>Dieta śródziemnomorska - efekty zdrowotne <br/> </strong>
                    Dieta śródziemnomorska należy do najzdrowszych sposobów odżywiania. W ciągu ostatnich 30 lat
                    przeprowadzono bardzo wiele badań naukowych, które dokumentują jej pozytywny wpływ na zdrowie i
                    wysoki potencjał w zapobieganiu chorobom.<br/>
                    <strong>Zdrowe odżywianie - 10 najważniejszych zasad <br/> </strong>
                    Specjaliści są zgodni, że za prozdrowotne działanie diety odpowiada żywność przeciwzapalna:
                    warzywa oraz źródła zdrowych tłuszczów (ryby, oliwa z oliwek, orzechy).
                    Cytując wypowiedź specjalistów z Harvard School of Public Health : „W połączeniu z regularną aktywnością fizyczną
                    i niepaleniem wyrobów tytoniowych, analizy sugerują, że ponad 80% chorób serca, 70% zawałów i 90% przypadków
                    cukrzycy typu 2 można uniknąć, dokonując zdrowych wyborów żywieniowych, które wpisują się w zasady diety śródziemnomorskiej.”
                    </p>
                </div>
                <Link to="/diety" className="return-button">Powrót</Link>
            </div>

        </div>
    );
};

export default Blog;



// import { useParams } from 'react-router-dom';
//
// const Blog = (props) => {
//     let { id } = useParams();
//
//     return (
//         <div>
//             {id}
//             To jest BLOG.
//             <img src={photo} alt="" height="500px" width="500px"/>
//         </div>
//     );
// };