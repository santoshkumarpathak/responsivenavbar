import { alpha, Grid, Link } from "@material-ui/core";
import { NavLink, Route, Routes } from "react-router-dom";
import { AiFillCaretDown } from "react-icons/ai";
import { makeStyles } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
// import { SidebarData } from './SidebarData'
import Home from './landing pages/Home.js'
import About from './landing pages/About.js'

import { useState } from "react";

const style = makeStyles((theme) => ({

}))
const ItemContent = (props) => {
    const navigate = useNavigate();
    const classes = style()
    const [toggle, setToggle] = useState(false)
    // console.log(toggle)
    if (props.item.childrens) {
        return (
            <>
                <div className={toggle ? "sidebarItem toggle" : "sidebarItem"}>
                    <div className="sidebarList">
                        <span>
                            {props.item.icon &&
                                <i className={props.item.icon}></i>}
                            {props.item.title}
                        </span>
                        <i className="bi-chevron-down toggelbtn" onClick={() => { setToggle(!toggle) }}></i>
                    </div>
                    <div className="sidebarContent">

                        {props.item.childrens.map((ele, index) => < ItemContent key={index} item={ele} />)}
                    </div>
                </div>
            </>
        )
    }
    else {
        return (
            <>
                <div className="sidebarItem nolink">
                    <nav>
                        <a to={props.item.path} onClick={() => navigate(props.item.path)}>
                            <div className="value">
                                <i className={props.item.icon}></i>
                                &nbsp;
                                {props.item.title}
                            </div>

                            {/* <AiFillCaretDown className={classes.toggelbtn} onClick={() => { setToggle(!toggle) }} /> */}
                        </a>
                    </nav>

                </div>

            </>
        )
    }

    return

}

export default ItemContent;