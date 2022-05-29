import React from 'react'
import { BrowserRouter as Router,
    Switch, 
    Route } from 'react-router-dom' // BrowserRouter asemeja a url normal
                                    // MemoryRouter es para testeo
import WelcomePage from './pages/WelcomePage'
import MainPage from './pages/MainPage'
import CityPage from './pages/CityPage'
import NotFoundPage from './pages/NotFoundPage'
import { WeatherContext } from './WeatherContext'

//<Router> manejador por defecto dentro de los tags
// Switch ante una cantidad de opciones de routeo decanta por la mas proxima, encuentra la mejor opcion
//  de routeo que se ajuste a la url. Con la palabra exact se ajusta a la perfeccion
// <Route exact path="/"></Route> resuelve la ruta que comience con el valor asignado a path
const App = () => {
    return (
        <WeatherContext>
            <Router> 
                <Switch>
                    <Route exact path="/">
                        <WelcomePage />
                    </Route>
                    <Route path="/main">
                        <MainPage />
                    </Route>      
                    <Route path="/city/:countryCode/:city">
                        <CityPage />
                    </Route> 
                    <Route>
                        <NotFoundPage />
                    </Route>                                                           
                </Switch>
            </Router>
        </WeatherContext>
    )
}

export default App
