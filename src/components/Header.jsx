import React, { useState } from "react";
import images from "../images/images-removebg-preview.png";
import "../css/Header.css";
import { CiShoppingBasket } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Badge from "@mui/material/Badge";
import { useSelector } from "react-redux";

function Header() {
    const [theme, setTheme] = useState(true);
    const navigate = useNavigate();
    const { products } = useSelector((store) => store.basket);

    const changeTheme = () => {
        const root = document.getElementById("root");

        if (theme) {
            root.style.backgroundColor = "black";
            root.style.color = "#fff";
        } else {
            root.style.backgroundColor = "white";
            root.style.color = "black";
        }
        setTheme(!theme);
    };

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
            }}
        >
            <div
                style={{ cursor: "pointer" }}
                className="flex-row"
                onClick={() => navigate("/")}
            >
                <img className="logo" src={images} alt="" />
                <p className="logo-text">TrenYolu</p>
            </div>
            <div className="flex-row">
                <input
                    className="search-input"
                    type="text"
                    placeholder="Bir şeyler ara.."
                />
                <div>
                    {theme ? (
                        <FaMoon onClick={changeTheme} className="icons" />
                    ) : (
                        <CiLight className="icons" onClick={changeTheme} />
                    )}

                    <Badge badgeContent={products.length} color="error">
                        <CiShoppingBasket style={{marginRight:"6px"}} className="icons" />
                    </Badge>
                </div>
            </div>
        </div>
    );
}

export default Header;
