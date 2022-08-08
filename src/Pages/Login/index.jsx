import React from "react";
import "./index.scss";
import Title from "../../Components/title";
import { ReactComponent as User } from "../../Assets/Images/Icons/user.svg";
import { ReactComponent as Lock } from "../../Assets/Images/Icons/lock.svg";

const Login = () => {
    return (
        <main className="login">
            <section className="login__container">
                <aside className="img__container">
                    <img src="Images/login.png" alt="login" />
                </aside>
                <aside className="input__container">
                    <Title>LOGIN</Title>
                    <form>
                        <div className="username__container">
                            <input type="text" />
                            <User className="icon" />
                        </div>
                        <div className="password__container">
                            <input type="password" />
                            <Lock className="icon" />
                        </div>
                        <div className="submit__container">
                            <button type="submit">SUBMIT</button>
                        </div>
                        <p>belum punya akun ? daftar sekarang</p>
                    </form>
                </aside>
            </section>
        </main>
    );
};

export default Login;
