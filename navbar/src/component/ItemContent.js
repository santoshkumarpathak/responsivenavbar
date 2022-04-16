import { alpha, Grid, Link } from "@material-ui/core";
import { Route, Routes } from "react-router-dom";
import { AiFillCaretDown } from "react-icons/ai";
import { makeStyles } from "@material-ui/core";
// import { SidebarData } from './SidebarData'

import Home from './landing pages/Home.js'
import { useState } from "react";

const style = makeStyles((theme) => ({


    sidebaritem: {
        display: "block",
        cursor: "pointer",

        paddingTop: theme.spacing(2),
        paddingLeft: theme.spacing(2),
        [theme.breakpoints.down('sm')]: {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
            paddingBottom: theme.spacing(0),
        },
        paddingBottom: theme.spacing(2),

        "&:hover": {
            // width: "1em",
            backgroundColor: alpha(theme.palette.common.white, 0.25),
            borderRadius: "8px",
        }
    },
    link: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: "#fafafd"
    },


}))
const ItemContent = (props) => {

    const classes = style()
    const [toggle, setToggle] = useState(false)
    console.log(toggle)

    if (props.item.childrens) {
        return (
            <>
                <div className={toggle ? "sidebarItem toggle" : "sidebarItem"}>
                    <Link to={props.item.path} className={classes.link}>
                        <div >
                            <i className={props.item.icon}></i>
                            &nbsp;
                            {props.item.title}
                        </div>
                        <AiFillCaretDown className="toggelbtn" onClick={() => { setToggle(!toggle) }} />
                    </Link>
                </div>
                <div>

                </div>
            </>
        )
    }
    else {
        return (
            <>
                <div className={classes.sidebaritem}>
                    <Link to={props.item.path} className={classes.link}>
                        <div >
                            <i className={props.item.icon}></i>

                            &nbsp;
                            {props.item.title}
                        </div>
                        <AiFillCaretDown className={classes.toggelbtn} onClick={() => { setToggle(!toggle) }} />
                    </Link>
                </div>
            </>
        )
    }

    return

}

export default ItemContent;