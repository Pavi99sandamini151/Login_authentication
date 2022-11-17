import React, {useEffect, useState} from "react";
import {Col, Container} from "react-bootstrap";
// @ts-ignore
import {Link, useLocation} from "react-router-dom";

const Sidenav = () => {
    const location = useLocation();
    const [url, setUrl] = useState('');
    const [showSubNav, setShowSubNav] = useState(false);

    //update the url when the location changes
    useEffect(() => {
        const newURL = location.pathname;
        setUrl(newURL);
    }, [location]);

    useEffect(() => {
        if (url === '') {
            return;
        }

        if (url.includes('/database/')) {
            setShowSubNav(true);
            console.log('true');
        } else {
            console.log('false');
            setShowSubNav(false);
        }
    }, [url]);



    const handleOnDBClicked = () => {
        const newState = !showSubNav;
        setShowSubNav(newState);
    }

    return(
        <Col className='side-navigation shadow-effect p-3' lg={2}>
            <ul className='list-unstyled h-100 d-grid justify-content-evenly align-content-around '>
                <Link to='/home'>
                    <li className={url === '/home' ? 'active-item' : 'inactive-item'}>
                        {/*<Image src={url === '/dashboard' ? dashboardIcon : unselectedDashboardIcon} fluid/>*/}
                        Home
                    </li>
                </Link>

                <Link to='/menu'>
                    <li className={url === '/menu' ? 'active-item' : 'inactive-item'}>
                        {/*<Image src={url === '/area-map' ? areaMapIcon : unselectedAreaMapIcon} fluid/>*/}
                        Menu
                    </li>
                </Link>

                <Link to='/order'>
                    <li className={url === '/order' ? 'active-item' : 'inactive-item'}>
                        {/*<Image src={url === '/complaints' ? complaintsIcon : unselectedComplaintsIcon} fluid/>*/}
                        Order
                    </li>
                </Link>

                <Link to='/payments'>
                    <li className={url === '/payments' ? 'active-item' : 'inactive-item'}>
                        {/*<Image src={url === '/maintenance' ? maintenanceIcon : unselectedMaintenanceIcon} fluid/>*/}
                        Payments
                    </li>
                </Link>

                <Link to='/'>
                    <li className={url === '/' ? 'active-item' : 'inactive-item'}>
                        {/*<Image src={url === '/garbage-collection' ? truckIcon : unselectedTruckIcon} fluid/>*/}
                        Log out
                    </li>
                </Link>
            </ul>
        </Col>
    );
};

export default Sidenav;