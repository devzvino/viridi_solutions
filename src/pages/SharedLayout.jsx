import React from 'react'
import NavigationBar from '../components/NavigationBar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import { useEffect } from 'react'

const SharedLayout = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div>
            <NavigationBar />
            <div>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default SharedLayout