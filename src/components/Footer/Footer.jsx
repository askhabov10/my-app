import FooterLogo from "../FooterLogo/FooterLogo.jsx";
import FooterMenu from "../FooterMenu/FooterMenu.jsx";
import Copyright from "../Copyright/Copyright.jsx"


function Footer() {
    return(
        <div className="footer">
            <FooterLogo/>
            <FooterMenu/>
             <Copyright/>
        </div>

    )

}


export default Footer;