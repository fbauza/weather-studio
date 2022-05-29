import React from 'react'
import AppFrame from './AppFrame'
import { BrowserRouter as Router } from 'react-router-dom' // ruteo del link del componente appframe

export default {
    title: "AppFrame",
    component: AppFrame
}

export const AppFrameExample = () => (
    <Router>
        <AppFrame>
            // lo que se ubique aquí se reflejará en children
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas praesentium voluptate corrupti nulla aut suscipit accusantium. Veritatis alias expedita sed, cumque dolore sequi omnis, exercitationem nostrum ducimus magnam doloremque nihil!
        </AppFrame>
    </Router>
)