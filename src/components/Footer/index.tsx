import './Footer.css';
import fb from '../../images/fb.png'
import tw from '../../images/tw.png'
import ig from '../../images/ig.png'
import logo from '../../images/logo.png'

const Footer = () =>{
    return(
        <div className='footer-container'>
            <div className='links'>
                <a href='/'><img src={fb} alt='fb' /></a>
                <a href='/'><img src={tw} alt='tw'/></a>
                <a href='/'><img src={ig} alt='ig'/></a>
            </div>
            <div className='logo'>
                <img src={logo} alt='logo'/>
            </div>
            <div className='logo'>
                <span><code>Desenvolvido por Gabriel</code>.</span>
            </div>
        </div>
    )
}

export default Footer;