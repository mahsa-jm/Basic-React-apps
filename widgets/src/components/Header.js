import React from "react";
import Link from "./Link";

const Header = () => {
    return (
        <div className="ui secondary ui menu">
            <Link href="/" className="item">Accordion</Link>
            <Link href="/Search" className="item">Search</Link>
            <Link href="/Dropdown" className="item">Dropdown</Link>
            <Link href="/Translate" className="item">Translate</Link>
        </div>
    )
};

export default Header;