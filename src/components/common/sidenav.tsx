import React, {useEffect, useState} from "react";
import {Col, Container, Image} from "react-bootstrap";
// @ts-ignore
import {Link, useLocation} from "react-router-dom";

import dashboard from '../../assets/dashboard.png';
import menu from '../../assets/menu.png';
import orders from '../../assets/orders.png';
import payments from '../../assets/payments.png';
import logout from '../../assets/log out.png';

const Sidenav = () => {
    const location = useLocation();
    const [url, setUrl] = useState('');
    const [showSubNav, setShowSubNav] = useState(false);

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
        <Col className='side-navigation shadow-effect p-3' lg={3}>
            <ul className='list-unstyled h-100 d-grid justify-content-evenly align-content-around '>
                <Link to='/home'>
                    <li className={url === '/home' ? 'active-item' : 'inactive-item'}>
                        <Image src={dashboard} width='25%' fluid/>
                        Home
                    </li>
                </Link>

                <Link to='/menu'>
                    <li className={url === '/menu' ? 'active-item' : 'inactive-item'}>
                        <Image src={menu} width='25%' fluid/>
                        Menu
                    </li>
                </Link>

                <Link to='/order'>
                    <li className={url === '/order' ? 'active-item' : 'inactive-item'}>
                        <Image src={orders} width='25%' fluid/>
                        Order
                    </li>
                </Link>

                <Link to='/payment'>
                    <li className={url === '/payment' ? 'active-item' : 'inactive-item'}>
                        <Image src={payments} width='25%' fluid/>
                        Payments
                    </li>
                </Link>

                <Link to='/'>
                    <li className={url === '/' ? 'active-item' : 'inactive-item'}>
                        <Image src={logout} width='25%' fluid/>
                        Log out
                    </li>
                </Link>
            </ul>
        </Col>
    );
};

export default Sidenav;