import { useState } from "react";
import { Link } from "react-router-dom"

function Navbar() {
    return (
        <div className="Navbar">
            <Logo />
            <ButtonsPanel />
        </div>
    );
}

function Logo(props) {
    const [logo, setLogo] = useState("Sabrysm");
    const logoIcon = <span class="material-symbols-outlined icon">terminal</span>;
    return (
        <div id="logo-container">
            <span 
                id="logo" 
                onChange={(e) => setLogo(e.target.value)}
                contentEditable="true">
                    {logo}
            </span>
            {logoIcon}
        </div>
    );
}

const ButtonsPanel = (props) => {
    const itemsList = ["Home", "Projects", "Contact", "Resume"];
    const PanelList = itemsList.map((item, key) => (
        <li key={key}>
            <Link to={"/"+item.toLowerCase()}>{item}</Link>
        </li>
        ));
    return (
        <div>
            <ul className="PanelList">{PanelList}</ul>
        </div>
    );
}


export default Navbar;