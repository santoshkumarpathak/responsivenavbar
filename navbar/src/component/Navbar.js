
import DehazeIcon from '@mui/icons-material/Dehaze';
import { AiOutlineClose } from "react-icons/ai";

import { SidebarData } from './SidebarData'
import React, { useState } from "react";
import Home from '../component/landing pages/Home.js'
import { AppBar, InputBase, makeStyles, Toolbar, Typography, alpha, Badge, Avatar, Grid } from '@material-ui/core'


import { Link, Route, Routes } from 'react-router-dom';
import { Cancel, Search } from "@material-ui/icons";
const style = makeStyles((theme) => ({
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
    userAvtar: {
        display: "flex",
        alignItems: "center",

        [theme.breakpoints.down('sm')]: {
            display: (props) =>(props.open ? "flex" : "none")
        }
    },
    Search: {

        display: "flex",
        alignItems: 'center',
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        border: "solid 1px",
        borderRadius: theme.shape.borderRadius,
        [theme.breakpoints.down('sm')]: {
            // display: "none",
            display: (props) => (props.open ? "flex" : "none"),
            width: "70%"
        }
    },

    searchInput: {
        color: "white",
        marginLeft: theme.spacing(1)

    },
    smallSearchButton: {
        [theme.breakpoints.up('md')]: {
            display: "none"
        },

        [theme.breakpoints.up('sm')]: {
            display: "none"
        }
    },
    userName: {
        [theme.breakpoints.down('sm')]: {
            display: "none"
        }
    },
    Cancel: {
        [theme.breakpoints.up('sm')]: {
            display: "none"
        }
    },
    link:{
        textDecoration:"none"
    }

}))
const Navbar = () => {

    const [sidebarHide, setSidebarHide] = useState(false)

    const [open, setOpen] = useState(false)
    const serchOpen = (e) => {
        e.preventDefault()
        setOpen(true)
        // alert('true')
    }
    const serchclosed = (e) =>{
        e.preventDefault()
        setOpen(false)
    }
    const classes = style({ open });
    console.log(classes, open);

    return (
        <>
            {/* <Grid contianer >
                <Grid item xs={12}> */}
            <AppBar position="fixed">
                <Toolbar className={classes.toolbar}>
                    {sidebarHide &&
                        <DehazeIcon onClick={() => { setSidebarHide(!sidebarHide) }} />
                    }{!sidebarHide &&
                        <AiOutlineClose onClick={() => { setSidebarHide(true) }} />
                    }

                    <Typography> Welcome </Typography>

                    <div className={classes.Search}>
                        <Search />
                        <InputBase placeholder="search..." className={classes.searchInput} />
                        <Cancel className={classes.Cancel} onClick={serchclosed}/>
                    </div>

                    <div className={classes.userAvtar}>
                        <Search className={classes.smallSearchButton}
                            onClick={serchOpen}
                        />
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" /> &nbsp;
                        <p className={classes.userName}>{"UserName"}</p>
                    </div>
                </Toolbar>

            </AppBar>
            {/* </Grid>
            </Grid> */}
            <Grid contianer spacing={1} className={classes.sidebar} position="fixed">
                {!sidebarHide &&
                    <>
                        < Grid item md={2} className={classes.sidebarlist}>
                            {
                                SidebarData.map((ele, index) => {
                                    return (
                                        <div className={classes.sidebaritem}>
                                            <Link to={ele.path} className={classes.link}>
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
