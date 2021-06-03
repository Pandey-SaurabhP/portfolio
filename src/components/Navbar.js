import React, {useState, useEffect} from 'react';
import styled from 'styled-components'
import './Navbar.css'

function Navbar() {

    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 30){
                handleShow(true);
            }
            else handleShow(false);
        });

        return () => {
            window.removeEventListener("scroll",  () => {
                if(window.scrollY > 30){
                   handleShow(true);
                }
                else handleShow(false);
            });
        };
    }, []);

    return (

        <Container className={`${show && "navbar-color"}`}>

            <a href = "https://www.codechef.com/users/saurabh59373#">
                <MenuImg src = "https://s3.amazonaws.com/codechef_shared/sites/all/themes/abessive/logo.svg" alt = "logo" />
            </a>

            <a href = "codeforces.com/profile/pSaurabh">
                <MenuImg src = "https://upload.wikimedia.org/wikipedia/commons/b/b1/Codeforces_logo.svg" alt = "logo" />
            </a>

            <a href = "https://www.linkedin.com/in/saurabh-pandey-055794204/">
                <MenuImg src = {'/images/linkedin.svg'} alt = "logo" />
            </a>

        </Container>     
    )
}

export default Navbar;


const Container = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    position: fixed;
    padding-top:10px;
    transition: all 0.5s ease-out;
    justify-content: space-between;
`

const MenuImg = styled.img`
    height: 50px;
    margin: 0 30px;
    transition: ease-in-out all 0.2s;

    &:hover {
        -webkit-transform : scale(1.25);
    }
`