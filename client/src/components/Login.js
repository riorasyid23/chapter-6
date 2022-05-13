import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from 'react-router-dom';

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import car from "../img/car.png"


//Proses 7. Menuju ke folder actions dan file auth.js
import { login } from "../actions/auth";

const required = (value) => {
  if (!value) {
    return (
      <div classNameName="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

//Task 1. Mencari kode yang menghasilkan return error, ex. "user not Found!"
/**
 * What? Return Error,    
 * Why? Error,
 * When? setelah di klik tombol login,
 * How? ketika memasukan username dan password, lalu muncul error
 */

const Login = (props) => {
  const form = useRef();
  const checkBtn = useRef();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  //Proses 10. Jika action login fail maka komponen ini akan membaca variable isLoggedIn dan juga variable message dari Global Store
  const { isLoggedIn } = useSelector(state => state.auth);
  const { message } = useSelector(state => state.message);

  const dispatch = useDispatch(); //Dia akan memantik action untuk mengakses global store dan atau api endpoint

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  //Task 4. Menemukan fungsi yang memantik proses autentikasi (jika benar langsung login, kalau salah ada pesas error), 
  const handleLogin = (e) => {
    e.preventDefault();

    setLoading(true);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      //Task 5. Memantik action login, untuk melakukan proses autentikasi, lalu kita cari action login()
      dispatch(login(username, password))
        .then(() => {
          //Proses 6. Jika berhasil akan masuk ke halaman /profile
          props.history.push("/profile");
          window.location.reload();
        })
        //Proses 7. Jika gagal dia return false
        .catch(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  };

  if (isLoggedIn) {
    return <Redirect to="/profile" />;
  }

  //Sebagai contoh
  const message2 = "Ini ujicoba notifikasi"

  return (
    // <div classNameName="col-md-12">
    //   <div classNameName="card card-container">
    //     <img
    //       src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
    //       alt="profile-img"
    //       classNameName="profile-img-card"
    //     />

    //     {/* Task 3. Menemukan fungsi yang memantik username dan password di proses, fokus handleLogin() */}
    //     <Form onSubmit={handleLogin} ref={form}>
    //       <div classNameName="form-group">
    //         <label htmlFor="username">Username</label>
    //         <Input
    //           type="text"
    //           classNameName="form-control"
    //           name="username"
    //           value={username}
    //           onChange={onChangeUsername}
    //           validations={[required]}
    //         />
    //       </div>

    //       <div classNameName="form-group">
    //         <label htmlFor="password">Password</label>
    //         <Input
    //           type="password"
    //           classNameName="form-control"
    //           name="password"
    //           value={password}
    //           onChange={onChangePassword}
    //           validations={[required]}
    //         />
    //       </div>

    //       {/* Task 2. Tombol login Ketemum (what, why, when, how) */}
    //       <div classNameName="form-group">
    //         <button classNameName="btn btn-primary btn-block" disabled={loading}>
    //           {loading && (
    //             <span classNameName="spinner-border spinner-border-sm"></span>
    //           )}
    //           <span>Login</span>
    //         </button>
    //       </div>

    //       {/* Proses 11. Ketika variable message true/ ada/available, maka dia otomatis mengeluarkan komponen message */}
    //       {message && (
    //         <div classNameName="form-group">
    //           <div classNameName="alert alert-danger" role="alert">
    //             {message}
    //           </div>
    //         </div>
    //       )}
    //       <CheckButton style={{ display: "none" }} ref={checkBtn} />
    //     </Form>
    //   </div>
    // </div>
    <div style={{display: "flex", flexDirection: "row-reverse"}}>
      <Form onSubmit={handleLogin} ref={form} className="form-login">
        <div className="form-wrapper">
          <Link to={"/home"}><div style={{width: "100px", height: "34px", backgroundColor: "#CFD4ED"}}>Home</div></Link>
            <h2 style={{fontSize: "1rem", fontWeight: "700", marginTop: "32px"}}>Welcome, Admin BCR</h2>
            <div className="log-wrapper">
              <div className="mb-3 input-dt">
                <label for="exampleInputEmail1" className="form-label cus-form-label">Username</label>
                <Input
                  type="text"
                  className="form-control cus-form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  name="username"
                  value={username}
                  onChange={onChangeUsername}
                  validations={[required]} />
              </div>
              <div className="mb-3 input-dt">
                <label for="exampleInputPassword1" className="form-label cus-form-label">Password</label>
                <Input
                  type="password"
                  className="form-control cus-form-control"
                  name="password"
                  value={password}
                  onChange={onChangePassword}
                  validations={[required]}
                  id="exampleInputPassword1"
                  placeholder="6+ Karakter"
                  />
              </div>

              <div className="form-group">
                <button className="btn btn-primary cus-btn" disabled={loading}>
                  {loading && (
                    <span className="spinner-border spinner-border-sm"></span>
                  )}
                  <span>Sign in</span>
                </button>
              </div>
            </div>
        </div> 
        {message && (
          <div classNameName="form-group">
              <div classNameName="alert alert-danger" role="alert">
                {message}
              </div>
          </div>
          )}
        <CheckButton style={{ display: "none" }} ref={checkBtn} />
      </Form>
      <div style={{position: "absolute"}}><img style={{width: "77.25%", height: "77.25%"}} src={car} alt="car.png" /></div>
    </div>
  );
};

export default Login;
