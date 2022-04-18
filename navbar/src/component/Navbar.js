
import DehazeIcon from '@mui/icons-material/Dehaze';
import { AiOutlineClose } from "react-icons/ai";

import { SidebarData } from './SidebarData'
import React, { useState } from "react";
import Home from '../component/landing pages/Home.js'
import { AppBar, InputBase, makeStyles, Toolbar, Typography, alpha, Badge, Avatar, Grid, Button, Menu, MenuItem } from '@material-ui/core'


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
            display: (props) => (props.open ? "flex" : "none")
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
        color: "white",
        [theme.breakpoints.down('sm')]: {
            display: "none"
        }
    },
    Cancel: {
        [theme.breakpoints.up('sm')]: {
            display: "none"
        }
    },
    link: {
        textDecoration: "none"
    },
    popupmenu: {
        marginTop: theme.spacing(5),
        marginLeft: theme.spacing(2)

    }

}))
const Navbar = () => {
    //right avatar menu pop-up
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (e) => {
        console.log(e.currentTarget)
        setAnchorEl(e.currentTarget);
    }; const handleClose = () => {
        setAnchorEl(null);
    };
    //close right pop-up

    const [sidebarHide, setSidebarHide] = useState(false)

    const [searchOpen, setSearchopen] = useState(false)
    const serchOpen = (e) => {
        e.preventDefault()
        setSearchopen(true)
        // alert('true')
    }
    const serchclosed = (e) => {
        e.preventDefault()
        setSearchopen(false)
    }
    const classes = style({ searchOpen });
    console.log(classes, searchOpen);

    return (
        <>
            {/* <Grid contianer >
                <Grid item xs={12}> */}
            <AppBar position="fixed">
                <Toolbar className={classes.toolbar}>
                    {sidebarHide &&
                        <DehazeIcon onClick={() => { setSidebarHide(!sidebarHide) }} />
                    }{!sidebarHide &&
                        <DehazeIcon onClick={() => { setSidebarHide(true) }} />
                    }

                    <Typography> Welcome </Typography>

                    <div className={classes.Search}>
                        <Search />
                        <InputBase placeholder="search..." className={classes.searchInput} />
                        <Cancel className={classes.Cancel} onClick={serchclosed} />
                    </div>

                    <div className={classes.userAvtar}>
                        <Search className={classes.smallSearchButton}
                            onClick={serchOpen}
                        />
                        <Button id="demo-positioned-button"
                            aria-controls={open ? 'demo-positioned-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}>
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" /> &nbsp;
                            <p className={classes.userName}>{"UserName"}</p>
                        </Button>
                        <Menu className={classes.popupmenu}
                            id="demo-positioned-menu"
                            aria-labelledby="demo-positioned-button"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                        >
                            <MenuItem>Profile</MenuItem>
                            <MenuItem >My account</MenuItem>
                            <MenuItem >Logout</MenuItem>
                        </Menu>
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
