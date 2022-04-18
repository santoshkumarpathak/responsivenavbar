import { alpha, Grid, Link } from "@material-ui/core";
import { Route, Routes } from "react-router-dom";
import { AiFillCaretDown } from "react-icons/ai";
import { makeStyles } from "@material-ui/core";
// import { SidebarData } from './SidebarData'


import { useState } from "react";

const style = makeStyles((theme) => ({

}))
const ItemContent = (props) => {

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
                    <a to={props.item.path} >
                        <div className="value">
                            <i className={props.item.icon}></i>
                            &nbsp;
                            {props.item.title}
                        </div>
                        {/* <AiFillCaretDown className={classes.toggelbtn} onClick={() => { setToggle(!toggle) }} /> */}
                    </a>
                </div>
            </>
        )
    }

    return

}

export default ItemContent;