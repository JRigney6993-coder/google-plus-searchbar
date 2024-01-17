import React from 'react';
import { FaYoutube, FaGithub, FaStackOverflow } from "react-icons/fa";
import { RiOpenaiFill } from "react-icons/ri";
import { BiLogoGmail } from "react-icons/bi";
import { SiGoogledocs } from "react-icons/si";

const QuickAccess = () => {
    return (
        <div className='Nav'>
            <div className='Nav-Item'>
                <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                    <FaYoutube className='Nav-Icon' />
                    <div>Youtube</div>
                </a>
            </div>

            <div className='Nav-Item'>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <FaGithub className='Nav-Icon' />
                    <div>GitHub</div>
                </a>
            </div>

            <div className='Nav-Item'>
                <a href="https://www.openai.com/chatgpt/" target="_blank" rel="noopener noreferrer">
                    <RiOpenaiFill className='Nav-Icon' />
                    <div>ChatGPT</div>
                </a>
            </div>

            <div className='Nav-Item'>
                <a href="https://mail.google.com" target="_blank" rel="noopener noreferrer">
                    <BiLogoGmail className='Nav-Icon' />
                    <div>Gmail</div>
                </a>
            </div>

            <div className='Nav-Item'>
                <a href="https://docs.google.com" target="_blank" rel="noopener noreferrer">
                    <SiGoogledocs className='Nav-Icon' />
                    <div>Docs</div>
                </a>
            </div>

            <div className='Nav-Item'>
                <a href="https://stackoverflow.com" target="_blank" rel="noopener noreferrer">
                    <FaStackOverflow className='Nav-Icon' />
                    <div>SoF</div>
                </a>
            </div>
        </div>
    )
}

export default QuickAccess;