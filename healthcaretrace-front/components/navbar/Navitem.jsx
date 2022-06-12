import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSignOut
  } from "@fortawesome/free-solid-svg-icons";

const Navitem = ( {href, text, active} ) => {
        return (
            <Link href={href}>
                <a
                    className={`
                        nav__link ${active ? "active" : ""}
                    `}
                >
                        <FontAwesomeIcon icon= {faSignOut}
                        style={{ fontSize: 25, color: "white" }}/>      
                    {text}
                </a>
            </Link>
        );
};

export default Navitem