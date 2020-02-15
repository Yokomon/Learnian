import React from 'react';

const Login =() =>{
    return(
        <div className="d-flex justify-content-center container">
        <div className="col-md-9 py-5 my-5">
          <div className="bg-white text-left row shadow-lg auth-box">
            <div className="col-md-6 mx-0 py-5 px-5 mb-0">
              <div className="component">
                <h5 className="text-secondary text-left mb-0">LOGIN</h5>
            
                <hr align="left" className="smallhr border-primary mt-2" />
  
                <form method="POST" action="/user/login">
                  <div class="form-group title mt-5">
                    <label for="email">Email</label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="awesome@student.com"
                      required="required"
                      autofocus="autofocus"
                      className="form-control material-input"
                    />
                  </div>
                  <div className="form-group title">
                    <label for="password">Password</label>
                    <input
                      id="password"
                      type="password"
                      name="password"
                      placeholder="******"
                      required="required"
                      className="form-control material-input"
                    />
                  </div>
                  <div className="title align-items-center form-group mt-5 mb-0">
                    <div className>
                      <button
                        type="submit"
                        className="py-2 btn btn-primary shadow-lg btn-rounded btn-block"
                      >Login</button>
                    </div>
                  </div>
                </form>
  
                <h5 class="text-center mt-5 h6">
                  New Here?
                  <a href="/">Create an Account</a>
                </h5>
                <p className="mt-3 text-right">
                  <a href="/password/reset" class="mt-2 d-block text-center">Forgot Password?</a>
                </p>
              </div>
            </div>
            <div
              className="col-md-6 mx-0 mb-0 d-none d-md-flex flex-column py-5 px-4 bg-primary text-white"
            >
              <h1 className="h5 mb-0">Academic excellence via student collaboration</h1>
              <hr align="left" class="smallhr thickhr" />
              <div className="feature-img-container mx-auto my-4">
                <img src="/images/group-4.svg" alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Login;