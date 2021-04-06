import React from 'react'
import Container from './Container'
import Navbar from './Navbar'
import Sidemenu from './Sidemenu'
import '../../assets/css/help.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

const Help = () => {
  return(
    <Router>
      <main>
        <nav>
          <ul>
            <li><a href="help/navbar">Navbar</a></li>
            <li><a href="news.asp">Sitemenu</a></li>
            <li><a href="contact.asp">d-flex</a></li>
            <li><a href="about.asp">d-grid</a></li>
          </ul>
        </nav>
        <article>
          <Switch>
            <Route path="/help" exact component={Container} />
            <Route path="/help/navbar" component={Navbar}/>
            <Route path="/help/sidemenu" component={Sidemenu}/>
          </Switch>
        </article>  
      </main>
    </Router>
  )
}

export default Help