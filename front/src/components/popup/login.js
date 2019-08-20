import React from 'react';
import './login.css';

class Login extends React.Component {
  render() {
    return (
      <div className='popup'>
        <div className='popup_inner'>
          <span id="annuler" onClick={this.props.closePopup}>X</span>
          <section class="signup-section spad">
            <div class="signup-bg set-bg" data-setbg="img/signup-bg.jpg"></div>
            <div class="container-fluid">
              <div class="row">
                <div class="col-lg-6">
                  <div class="signup-warp">
                    <form class="signup-form">
                      <input type="text" placeholder="Your E-mail"/>
                      <input type="password" placeholder="Your password"/>
                      <button class="site-btn">Hiditra</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}


export default Login;