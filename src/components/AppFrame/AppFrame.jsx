import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar' // barra superior
import IconButton from '@material-ui/core/IconButton' // icono que funciona como boton
import { IconContext } from 'react-icons' // agrega propiedades al tamaño del icono
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link' // ayuda a que el IconButton funcione correctamente como menu
import { Link as LinkRouter } from 'react-router-dom'
import Typography from '@material-ui/core/Typography'
import Toolbar from '@material-ui/core/Toolbar' 
import { WiDaySunny } from 'react-icons/wi'
import ErrorBoundary from './../../generic/ErrorBoundary'

// children es palabra reservada, son elementos o componentes hijos
// que se ubican dentro del tag JSX apertura y cierre 
const AppFrame = ({ children }) => {

    const iconContextSize = useMemo(() => ({size:'2em'}), [])
    return (
                            // aria-label menu indica que el icono trabaja como menu
                        // generador del link del iconoButton linea 28
                            // relaciona el link con el react-router-dom linea 29 
        <Grid container
            justify="center">
            <AppBar position="static">
                <Toolbar variant="dense">
                    <IconButton color="inherit" aria-label="menu">
                        <Link 
                            component={LinkRouter} 
                            to="/main" 
                            color="inherit" 
                            aria-label="menu">
                            <IconContext.Provider value={iconContextSize}>
                                <WiDaySunny />
                            </IconContext.Provider>
                        </Link>
                    </IconButton>
                    <Typography variant="h6" color="inherit">
                        Weather App
                    </Typography>
                </Toolbar>
            </AppBar>
            <Grid item
                xs={12}
                sm={11}
                md={10}
                lg={8}>
                <ErrorBoundary>{children}</ErrorBoundary>
            </Grid>
        </Grid>
    )
}

// <ErrorBoundary>{children}</ErrorBoundary>
// children mostrara todo lo que se ponga entre el tag AppFrame
// de los componentes envueltos en AppFrame, ver ejemplo MainPage


// valida que children. node hacer referencia a cualquier elemento react que sea valido
AppFrame.propTypes = {
    children: PropTypes.node
}

export default AppFrame
