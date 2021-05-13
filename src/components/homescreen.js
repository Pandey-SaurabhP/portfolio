import React from 'react';
import {useState, useEffect} from 'react';

import "./homescreen.css";
import styled from "styled-components"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5 } from '@fortawesome/free-brands-svg-icons'
import { faCss3 } from '@fortawesome/free-brands-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faPython } from '@fortawesome/free-brands-svg-icons';
import { faJs } from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import { faJava } from '@fortawesome/free-brands-svg-icons';
import { faPencilRuler } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const words = ['', 'Saurabh Pandey', 'a Programmer', 'a Developer', 'an Illustrator', '', ''];

function Homescreen(){
    const [index, setindex] = useState(0);
    const [subindex, setsubindex] = useState(0);
    const [blink, setblink] = useState(0);
    const [reverse, setreverse] = useState(0);

    useEffect(() => {
        if(index == words.length - 2){
            setindex(0);
        }

        if(subindex == words[index].length && !reverse){
            setreverse(1);
        }
    
        if(subindex == 0 && reverse){
            setreverse(0);
            setindex(index + 1);
        }

        const timeout = setTimeout(() => {
            setsubindex((prev) => prev + (reverse? -1: 1));
        }, Math.max(reverse ? 25 : subindex === words[index].length ? 400 :
            50, parseInt(Math.random() * 100)));

        return () => clearTimeout(timeout);
    }, [subindex, index, setreverse]);

    useEffect(() => {
        const timeout2 = setTimeout(() => {
            setblink((prev) => !prev);
        }, 300);
        return () => clearTimeout(timeout2);
    }, [blink]); 

    const [show, setshow] = useState(0);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 200){
                setshow(1);
            }   
            else{
                setshow(0);
            }
        })
        return () => {
            window.removeEventListener("scroll",  () => {
                if(window.scrollY > 200){
                   setshow(1);
                }
                else setshow(0);
            });
        }
    }, [])

    return (
        <Main>
            <div className = "homescreen-main" style={{ backgroundImage: "url(images/desk.jpg)" }}>
                <p className = "homescreen-text">
                    I am {`${words[index].substring(0, subindex)}${blink? "|" : ""}`}
                </p>

                <HomescreenImg src = {'/images/dragon.jpg'} alt = "My Image" />
            </div>

            <Homescreen2 className = {`${show && 'Homescreen2-2'}`}>
                <Aboutme>
                    <Aboutmeheading>About Me</Aboutmeheading>
                    <p>Hi! I am Saurabh Pandey, a 12th grader passionate about exploring new technologies in Computer Science and related fields</p>
                    <p>I'm also an active competitive programmer on Codechef and Codeforces platform</p>
                    <p>So far I have developed and implemented logics for multiple games in C++ and have successfully developed and deployed a website</p>
                </Aboutme>
            </Homescreen2>

            <Homescreen3>
                <Skills>
                    Skills 
                </Skills>
                <IconContainerDiv>
                    <IconContainer>
                        <Onmr>
                            <IconDiv><img src="https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg" alt="" className="" /></IconDiv>
                            <p>C++</p>
                        </Onmr>
                        <Onmr>
                            <IconDiv><FontAwesomeIcon className = 'icons' icon = {faHtml5} size = '2x' color = 'red'/></IconDiv>
                            <p>HTML5</p>
                        </Onmr>
                        <Onmr>
                            <IconDiv><FontAwesomeIcon className = 'icons' icon = {faCss3} size = '2x' color = 'blue' /></IconDiv>
                            <p>CSS3</p>
                        </Onmr>
                        <Onmr>
                            <IconDiv><FontAwesomeIcon className = 'icons' icon = {faJs} size = '2x' color = 'orange' /></IconDiv>
                            <p>JavaScript</p>
                        </Onmr>
                        <Onmr>
                            <IconDiv><FontAwesomeIcon className = 'icons' icon = {faReact} size = '2x' color = 'cyan' /></IconDiv>
                            <p>React</p>
                        </Onmr>
                    </IconContainer>
                    
                    <IconContainer>
                        <Onmr>
                            <p>Python</p>
                            <IconDiv><FontAwesomeIcon className = 'icons' icon = {faPython} size = '2x' color = 'yellow' /></IconDiv>
                        </Onmr>
                        <Onmr>
                            <p>Algorithms</p>
                            <IconDiv><FontAwesomeIcon className = 'icons' icon = {faCode} size = '2x' color = 'grey' /></IconDiv>
                        </Onmr>
                        <Onmr>
                            <p>Data Structures</p>
                            <IconDiv><FontAwesomeIcon className = 'icons' icon = {faCodeBranch} size = '2x' color = 'purple'/></IconDiv>
                        </Onmr>
                        <Onmr>
                            <p>Java</p>
                            <IconDiv><FontAwesomeIcon className = 'icons' icon = {faJava} size = '2x' color = 'blue' /></IconDiv>
                        </Onmr>
                        <Onmr>
                            <p>Vector Design</p>
                            <IconDiv><FontAwesomeIcon className = 'icons' icon = {faPencilRuler} size = '2x' color = 'orange' /></IconDiv>
                        </Onmr>
                    </IconContainer>
                </IconContainerDiv>
            </Homescreen3>

            <Footer>
                <FooterHeading>Contact Me</FooterHeading>
                <p>Want to say hello to me? My Inbox is open for all</p>
                <IconContainer2>
                    <IconDiv2> 
                        <a href="mailto:saurabhpandey59373@gmail.com">
                            <FontAwesomeIcon className = "icons2" icon = {faGoogle} size = '2x' color = 'white'></FontAwesomeIcon>
                        </a>
                    </IconDiv2>

                    <IconDiv2> 
                        <a href="https://www.linkedin.com/in/saurabh-pandey-055794204/">
                        <FontAwesomeIcon className = "icons2" icon = {faLinkedin} size = '2x' color = 'white'></FontAwesomeIcon>
                        </a>
                    </IconDiv2>

                    <IconDiv2> 
                        <a href="https://github.com/pandey-SaurabhP/">
                            <FontAwesomeIcon className = "icons2" icon = {faGithub} size = '2x' color = 'white'></FontAwesomeIcon>
                        </a>
                        </IconDiv2>
                </IconContainer2>


                <p>None of the items(icons or images) used in the website are owned or created by me</p>
                <p>Website developed by Saurabh Pandey - No commercial purposes intended, made only for showing web development</p> 
                <p className = "endline"> techniques and to be included as a piece of portfolio. All icon copyrights are owned by FontAwesome, Codechef, Codeforces and C++.</p>
                
            </Footer>
        </Main>
    )
}

export default Homescreen;

const Main = styled.div`
    // background-color: black;
`

const HomeIconContainer = styled.div`
    display: flex;
    width: 20%;
    height: 10%;
    justify-content: space-between;
`

const HomescreenImg = styled.img`
    margin-top: 10%;
    margin-right: 10%;
    width: auto;
    height: 60%;
    border-radius: 100%;
    transition: ease-out all 0.3s;
`

const Onmr = styled.div`
    display: flex;
    font-size: 30px;
    margin: auto;
    width: 70%;
    height: 80px;
    justify-content: space-between;
`
const Homescreen2 = styled.div`
    height: 20%;
    background-color: black;
    height: calc(50vh);
    z-index: -1;
    transition: all ease-out 0.5s;
`
const Aboutmeheading = styled.h1`
    margin-top: 0px;
`

const Aboutme = styled.div`
    margin-top: 0px;
    opacity: 1;
    transition: 1s opacity;
    text-align: center;
    font-size: x-large;
`

const Homescreen3 = styled.div`
    // margin: auto;
    // linear-gradient(to bottom, rgba(255,255,0,0.5), rgba(0,0,255,0.5)),
    height: 20%;
    background-color: black;
    height: calc(85vh);
    z-index: -1;
    color: white;
`

const Skills = styled.h1`
    margin-top: 0px;
    font-size: 50px;
    width: 100%;
    text-align: center;
`
const IconContainerDiv = styled.div`
    display: flex;
    justify-content: space-between;
`

const IconContainer = styled.div`
    // padding-top: 15%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 70%;
    width: 40%;
`

const IconDiv = styled.div`
    font-size: 30px;
    margin: auto;

    img {
        height: 55px;
        width: auto;
        transition: ease-in-out all 0.2s;

        &:hover {
            scale: 1.25;
        }
    }
`

const Footer = styled.div`
    text-align: center;
    color: white;
    font-size: x-large;
    height: calc(65vh);
    background-color: rgb(9, 10, 92);
`

const FooterHeading = styled.h1`
    margin-top: 0px;
`

const IconContainer2 = styled.div`
    display:flex;
    margin-left: 40%;
    width: 20%;
    justify-content: space-between;
`

const IconDiv2 = styled.div`
`