import { useEffect, useState } from 'react';
import { Route, Link, useHistory } from 'react-router-dom';
import logoPath from '../images/logo.svg';
import * as auth from "../utils/auth_api";
import "../index.css"


function Header () {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [email, setEmail] = useState("No email set");
    const history = useHistory();

    useEffect(() => {
        const token = localStorage.getItem("jwt");
        if (token) {
            auth
                .checkToken(token)
                .then((res) => {
                    setEmail(res.data.email);
                    setIsLoggedIn(true);
                    history.push("/");
                })
                .catch((err) => {
                    localStorage.removeItem("jwt");
                    console.log(err);
                });
        }
    }, [history]);

    function onSignOut() {
        // при вызове обработчика onSignOut происходит удаление jwt
        localStorage.removeItem("jwt");
        setIsLoggedIn(false);
        // После успешного вызова обработчика onSignOut происходит редирект на /signin
        history.push("/signin");
    }

  return (

    <header className="header page__section">
        <img src={logoPath} alt="Логотип проекта Mesto" className="logo header__logo" />
        <Route exact path="/">
        <div className="header__wrapper">
          <p className="header__user">{ email }</p>
          <button className="header__logout" onClick={onSignOut}>Выйти</button>
        </div>
      </Route>
      <Route path="/signup">
        <Link className="header__auth-link" to="signin">Войти</Link>
      </Route>
      <Route path="/signin">
        <Link className="header__auth-link" to="signup">Регистрация</Link>
      </Route>
    </header>
  )
}

export default Header;
