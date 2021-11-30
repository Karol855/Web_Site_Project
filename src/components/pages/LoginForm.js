import React, {useState} from "react";

function LoginForm () {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors2, setErrors2] = useState([]);
    const [success, setSuccess] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();
        const _errors2 = [];

        if (email.length < 3 || email.indexOf("@") === -1) {
            _errors2.push("Email: nieprawidłowy. Sprawdź czy zawiera znak - @ ");
        }

        if (password.length < 5) {
            _errors2.push("Hasło: powinno być dłuższe niż 5 znaków.");
        }

        setErrors2(_errors2);
        setSuccess(false);
        if (_errors2.length > 0) {
            return false;
        }

        const obj = {
            email,
            password
        };

    };

    return (
            <div className="full-login--form">
                <h3 className="login-form--title">Zaloguj się</h3>
                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="login-email">
                        <label className="label-email" htmlFor="text">Adres e-mail:</label>
                        <input type="email" className="form-control--login" value={email} onChange={e => setEmail(e.target.value)} placeholder="np.kowalski@gmail.com"/>
                    </div>
                    <div className="login-password">
                        <label className="label-password" htmlFor="text">Hasło:</label>
                        <input type="password" className="form-control--login" value={password} onChange={e => setPassword(e.target.value)} placeholder="hasło"/>
                    </div>
                    <div className="button">
                    <button className="btn btn-secondary" type="submit">Zaloguj</button>
                    </div>
                    <div className="errors2-table">
                        {success && <h3>Formularz wysłany!</h3>}
                        {errors2.map(error => <p className="errors2" key={error}>{error}</p>)}
                    </div>

                </form>

            </div>

    );
}

export default LoginForm;