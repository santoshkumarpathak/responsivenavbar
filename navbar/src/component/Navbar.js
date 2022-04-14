import { AppBar, Avatar, Toolbar } from "@mui/material"
import DehazeIcon from '@mui/icons-material/Dehaze';
import { AiOutlineClose } from "react-icons/ai";
import { Typography } from "@material-ui/core";
import { makeStyles, Grid } from "@material-ui/core";
import { SidebarData } from './SidebarData'
import { useState } from "react";
import Home from '../component/landing pages/Home.js'

import {Link, Route, Routes } from 'react-router-dom';
const Styles = makeStyles((theme) => ({
    toolbar: {
        display: "flex",
        justifyContent: "space-between"
    },
    sidebar: {
        display: "flex",
        // width: "100%",
        paddingTop: theme.spacing(8),
        [theme.breakpoints.down('sm')]: {
            paddingTop: theme.spacing(7)
        }
    },

    sidebarlist: {
        height: "100vh",
        backgroundColor: theme.palette.primary.light,
        display: "flex",
        flexDirection: "column",
        // alignItems: "center",
        flexWrap: "nowrap"
    },
    sidebaritem: {
        paddingTop: theme.spacing(2),
        marginLeft: theme.spacing(2),
        [theme.breakpoints.down('sm')]: {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
            paddingBottom: theme.spacing(0),
        },
        paddingBottom: theme.spacing(2),
        cursor: "poitner"

    },
    sidebarTitle: {

        [theme.breakpoints.down('sm')]: {
            display: "none"
        }
    },
    containerBar: {
        height: "100vh",
        width: "100%",
        backgroundColor: theme.palette.primary.dark,
    },

}))
const Navbar = () => {
    const classes = Styles({})
    const [sidebarHide, setSidebarHide] = useState(true)
    return (
        <>
            <Grid contianer >
                <Grid item xs={12}>
                    <AppBar position="fixed">
                        <Toolbar className={classes.toolbar}>
                            {sidebarHide &&
                                <DehazeIcon onClick={() => { setSidebarHide(!sidebarHide) }} />
                            }{!sidebarHide &&
                                <AiOutlineClose onClick={() => { setSidebarHide(true) }} />

                            }

                            <Typography> Welcome </Typography>
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                        </Toolbar>

                    </AppBar>
                </Grid>
            </Grid>
            <Grid contianer spacing={1} className={classes.sidebar} position="fixed">
                {!sidebarHide &&
                    <>
                        < Grid item md={2} className={classes.sidebarlist}>
                            {
                                SidebarData.map((ele, index) => {
                                    return (
                                        <div className={classes.sidebaritem}>
                                            <Link to={ele.path}>
                                                <span>{ele.icon}</span>&nbsp;
                                                <span className={classes.sidebarTitle}>{ele.title}</span>
                                            </Link>
                                        </div>
                                    )
                                })}
                        </Grid>
                    </>
                }

                <Grid item md={!sidebarHide ? 10 : 12} className={classes.containerBar}>

                    <Routes>
                        <Route path='/' exact element={<Home />} />

                    </Routes>

                </Grid>
            </Grid>
        </>
    )
}

export default Navbar
