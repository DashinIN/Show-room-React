
import { Outlet} from 'react-router-dom'

import React from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import AudioChecker from "./AudioChecker/AudioChecker"
import AudioContext from '../context'


const Layout = () => {


        const [volume, setVolume] = React.useState(0);

        const value = {
            volume, 
            setVolume
        }


        return (
           
             <AudioContext.Provider value={value}>
                <AudioChecker/>
                <Header />
                <Outlet />
                <Footer />
            </AudioContext.Provider>
           
            );
    }


export default Layout;