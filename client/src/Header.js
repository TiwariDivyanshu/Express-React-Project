import React from 'react';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.css';

class Header extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
      return(
          <header>
              <nav className = 'navbar navbar-expand-sm bg-dark navbar-dark'>
                <div className = 'container'>
                    <div className = 'Header navbar-header navbar-brand col-sm-6 '>Weather Predictor</div>
                    <ul className = 'navbar-nav'>
                      
                    </ul>
                </div>
            </nav>
        </header>
      )
  }
}
export default Header;
