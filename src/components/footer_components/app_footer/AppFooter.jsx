import React from "react";
import FooterLogo from "../footer_logo/FooterLogo";
import MriyaResortLetters from "../mriya_resort_letters/MriyaResortLetters";
import Tablet from "../tablet/Tablet";

function AppFooter() {

    return (
        <footer>
            <MriyaResortLetters />
            <Tablet />
            <FooterLogo />
        </footer>
    )
}

export default AppFooter;