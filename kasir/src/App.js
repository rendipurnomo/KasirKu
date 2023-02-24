import React, { Component } from 'react'
import {
  Routes,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavbarComponent } from './components'
import { Home, Sukses } from './pages'

export default class App extends Component {
  render() {
    return (
      <>
          <NavbarComponent />
          <main>
            <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route  path="/sukses" element={<Sukses/>} exact/>
            </Routes>
          </main>
      </>
    )
  }
}
