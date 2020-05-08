import React from 'react';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.css';

class Header extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      toggle:false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu(){
    this.setState({
      toggle: !this.state.toggle
    })
  }
  render(){
    const show = (this.state.toggle)? "show" : "";
      return(
          <header>
              <nav className = 'navbar navbar-expand-lg bg-dark navbar-dark '>
                <div className = 'container'>
                    <div className='col-sm-2'><img className='img-fluid img-thumbnail' src={require('./images/logo.jpg')} width='100px'></img></div>
                    <div className = 'Header navbar-header navbar-brand col-sm-4 '>WEATHER PREDICTOR</div>
                    <button className="navbar-toggler" type="button" onClick={this.toggleMenu}><span className='navbar-toggler-icon'></span></button>
                    <div className={"Navbar collapse navbar-collapse "+show}>
                      <ul className = 'navbar-nav '>
                      <li className = 'nav-item'><a className='nav-link' href='#'>Mumbai</a></li>
                      <li className = 'nav-item'><a className='nav-link' href='#'>Delhi</a></li>
                      <li className = 'nav-item'><a className='nav-link' href='#'>KolKata</a></li>
                      <li className = 'nav-item'><a className='nav-link' href='#'>Chennai</a></li>
                      </ul>
                    </div>
                  </div>
              </nav>
          </header>
      )
  }
}
export default Header;
