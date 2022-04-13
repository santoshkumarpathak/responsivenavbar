import { AppBar, Avatar, Toolbar } from "@mui/material"
import DehazeIcon from '@mui/icons-material/Dehaze';
import { AiOutlineClose } from "react-icons/ai";
import { Typography } from "@material-ui/core";
import { makeStyles, Grid } from "@material-ui/core";
import { SidebarData } from './SidebarData'
import { useState } from "react";

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
        alignItems: "center",
        flexWrap: "nowrap"
    },
    sidebaritem: {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
        cursor:"poitner"

    },
    sidebarTitle: {

        [theme.breakpoints.down('sm')]: {
            display: "none"
        }
    },

}))
const Navbar = () => {
    const classes = Styles()
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
                                            <span>{ele.icon}</span>&nbsp;<span className={classes.sidebarTitle}>{ele.title}</span>
                                        </div>
                                    )
                                })}

                        </Grid>
                    </>
                }



                <Grid item md={10} >
                    containet bar
                </Grid>


            </Grid>
        </>
    )
}

export default Navbar
