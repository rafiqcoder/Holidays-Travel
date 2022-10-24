import React from 'react';
import './Button.css';
import { BsBookmarksFill } from 'react-icons/bs';
const Button = ({ children }) => {
    return (
        <div>
            <div className="dedcription-btn" href="/">
                <div className="name-descripeion pl-4 text-xl font-bold rounded-xl">{children}</div>
                <div className="btn-icon book">
                    <i className="fas fa-book"> <BsBookmarksFill/></i>
                </div>
            </div>
        </div>
        
    );
};

export default Button;