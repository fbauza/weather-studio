import React from 'react'
import { useHistory } from 'react-router-dom'
import Paper from '@material-ui/core/Paper' // permite contener otros componentes 
                                            // dentro de ese componente
import AppFrame from './../components/AppFrame'
import CityList from './../components/CityList'
import { getCities } from './../utils/serviceCities'

// AppFrame es un componente que soporta children, debe contener otros componentes
// useHistory es provisto por react-router-dom
const MainPage = () => {
    const history = useHistory()

    const onClickHandler = React.useCallback((city, countryCode) => {
        // useHistory.push permite alterar la url por programacion (modifica el historial del navegador) 
        history.push(`/city/${countryCode}/${city}`)
    }, [history])

    return (
                // CityList pasa a ser un componente children dado que se envuelve en AppFrame
        <AppFrame>
            <Paper elevation={3}>
                <CityList
                    cities={getCities()} 
                    onClickCity={onClickHandler} />
            </Paper>
        </AppFrame>
    )
}

export default MainPage
