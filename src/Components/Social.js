import React from 'react';
import { FaGithub, FaTwitter, FaLinkedin, FaRegCopyright } from "react-icons/fa";
import styled from 'styled-components';
import geo from '../Img/geo.png'



const Icons = styled.a`
    color: grey;
    padding: 0 1rem;
    font-size: 2rem;
`
const Card = styled.div`
    background: #F8F9FA;
    border-radius:50%;
    width:200px;
    height:200px;
    overflow:hidden;
    display:flex;
    align-items:center;
`

const CardContainer = styled.div`
    width:100%;
    display:flex;
    justify-content:center;
    padding:2rem;
`
const Social = () => {
    return (
        <div className="p-2">
            <CardContainer>
                <Card>
                    <img className="w-100"src={geo}></img>
                </Card>
                <div className="border-left border-white ml-4 pl-4 d-flex align-items-start flex-column justify-content-center">
                    <bold>
                        <h4 className="text-light">Email</h4>
                    </bold>
                        <a className="text-light mb-4">giorginapqe@gmail.com</a>
                        <bold>
                        <h4 className="text-light">Phone</h4>
                    </bold>
                        <p className="text-light">+52 33-29-83-89-85</p>
                </div>
            </CardContainer>
            <h3 className="text-light text-center">Contacto</h3>
            <div className="p-3 mt-1 d-flex justify-content-center align-items-center" id="social">
                <Icons href="https://github.com/GeorginaPQ "><FaGithub/></Icons>
                <Icons href="https://www.linkedin.com/in/georgina-p%C3%A9rez-quintana/"><FaLinkedin/></Icons>
                <Icons href="https://www.linkedin.com/in/georgina-p%C3%A9rez-quintana/"><FaTwitter/></Icons>
            </div>
            <h6 className="text-secondary p-3 mt-1 d-flex justify-content-center align-items-center"> geoPQ © All rights reserved. Made with ❤ and React</h6>
        </div>
    )
}
export default Social
//cambiar el link a twitter
