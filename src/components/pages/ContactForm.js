import React, {useState} from "react";

function ContactForm() {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [errors, setErrors] = useState([]);
    const [success, setSuccess] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();
        const _errors = [];

        if (name.length < 2) {
            _errors.push("Imię : powinno zawierać więcej niż dwa znaki.");
        }
        if (surname.length < 2) {
            _errors.push("Nazwisko : powinno zawierać więcej niż znaki.");
        }

        if (email.length < 3 || email.indexOf("@") === -1) {
            _errors.push("Email: nieprawidłowy. Sprawdź czy zawiera znak - @ ");
        }

        if (message.length < 10) {
            _errors.push("Wiadomość: powinna być dłuższa niż 10 znaków.");
        }

        setErrors(_errors);
        if (_errors.length > 0) {
            return false;
        }

        const obj = {
            name,
            surname,
            email,
            message
        };
        setSuccess(true);
    };

    return (
        <div className="contact-form">
        <div className="full-form">
            <h3 className="contact-form--title">Skontaktuj się z nami :)</h3>
            <form className="form" onSubmit={handleSubmit}>
                <div className="name">
                <label className="label-name" htmlFor="text">Imię:</label>
                <input type="text" className="form-control" value={name} onChange={e => setName(e.target.value)} placeholder="np.Jan"/>
                </div>
                <div className="surname">
                <label className="label-surname" htmlFor="text">Nazwisko:</label>
                <input type="text" className="form-control" value={surname} onChange={e => setSurname(e.target.value)} placeholder="np.Kowalski"/>
                </div>
                <div className="email">
                <label className="label-email" htmlFor="text">Adres e-mail:</label>
                <input type="email" className="form-control" value={email} onChange={e => setEmail(e.target.value)} placeholder="np.kowalski@gmail.com"/>
                </div>
                <div className="message">
                <label className="label-message" htmlFor="message">Wiadomość:</label>
                <textarea value={message} className="form-control message-control" onChange={e => setMessage(e.target.value)} placeholder="Wiadomość musi zawierać conajmniej 10 znaków"/>
                </div>
                <button className="btn btn-primary" type="submit">Wyślij</button>
                <div className="errors-table">
                    {success && <h3>Wiadomość wysłana!</h3>}
                    {errors.map(error => <p className="errors" key={error}>{error}</p>)}
                </div>

            </form>

        </div>

        </div>
    );
}

export default ContactForm;