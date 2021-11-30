import React, { useState } from "react";

function CalculatorBMI() {
    const [height, setHeight] = useState(0);
    const [mass, setMass] = useState(0);
    const [bmi, setBmi] = useState(0);
    const [info, setInfo] = useState([]);

    const calculate = (e) => {
        e.preventDefault();
        const formValid = +height > 0 && +mass > 0;
        if (!formValid) {
            return;
        }
        const bmi = (mass / ((height * height)
            / 10000)).toFixed(2);
        setBmi(bmi);

        const _info = [];
        if (bmi < 18.6) {
            _info.push(<span className="underweight">Masz niedowagę!</span>);
        }

        else if (bmi >= 18.6 && bmi < 24.9) {
            _info.push(<span className="normal">Masz odpowiednią wagę :)</span>);
        }

        else {
            _info.push(<span className="overweight">Masz nadwagę!</span>);
        }

        setInfo(_info);
        if (_info.length > 0) {
            return false;
        }

    };

    return (
        <div className="calculator-bmi">
            <h3 className="calculator-title">Kalkulator BMI</h3>
            <form onSubmit={calculate}>
                <div className="height-container">
                    <label className="height-label">Podaj swój wzrost w cm:</label>
                    <input className="input-height" value={height} onChange={(e) => setHeight(e.target.value)} />
                </div>

                <div className="mass-container">
                    <label className="mass-label">Podaj swoją wagę w kg:</label>
                    <input className="input-mass" value={mass} onChange={(e) => setMass(e.target.value)} />
                </div>
                <div className="button-bmi--container">
                <button className="third-button" type="submit">Oblicz BMI</button>
                </div>
                <div className="info-bmi--container">
                    <p className="info-bmi">Twoje BMI wynosi: <span className="bmi">{bmi}</span></p>
                </div>
                <div className="info-container">
                {info.map(info => <p className="info" key={info}>{info}</p>)}
                </div>
            </form>

        </div>
    );
}

export default CalculatorBMI;