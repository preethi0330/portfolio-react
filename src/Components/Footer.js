import React from "react";
import '../Styles/Footer.css'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

const Footer = () => {
    return(
        <div className="footer">
            <div className="socialMedia"> 
                <InstagramIcon/>
                <LinkedInIcon/>
            </div>
            <p> &copy; 2023</p>
        </div>
    )
}

export default Footer