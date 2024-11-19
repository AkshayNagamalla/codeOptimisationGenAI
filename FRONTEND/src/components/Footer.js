import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "../styles/Footer.css";

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <TwitterIcon/> <LinkedInIcon/>
        </div>
        <div>
            <p>&copy;2024 codeoptimizer.com</p>
        </div>
    </div>
  )
}

export default Footer