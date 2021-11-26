import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';

import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Myorder from '../Explore/Myorder'
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import { Button } from '@mui/material';
import Revew from './Revew';
import Pay from './Pay';
import MakeAdmin from './Admin/MakeAdmin';
import AddProduct from './Admin/AddProduct';
import useAuth from '../Login/useAuth';
import ManageAllorders from './Admin/ManageAllorders';


const drawerWidth = 200;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();
    const { admin, logout } = useAuth();
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <Link className='text-decoration-none  ' to="/explore"><Button color="inherit">Manage Order</Button></Link>
            <Link className='text-decoration-none  '  to={`${url}`}><Button color="inherit">My Order</Button></Link>
            <Box>
                <Link className='text-decoration-none  '  to={`${url}/pay`}><Button color="inherit">Pay</Button></Link>
                <br />
                <Link className='text-decoration-none  '  to={`${url}/revew`}><Button color="inherit">Revew</Button></Link>
            </Box>

            {
                admin && <Box sx={{ mt: 10 }}>

                    <Link className='text-decoration-none  '  to={`${url}/addproducts`}><Button color="inherit">Add Products</Button></Link>
                    <Link className='text-decoration-none  '  to={`${url}/makeadmin`}><Button color="inherit">Make Admin</Button></Link>
                    <Link className='text-decoration-none  '  to={`${url}/allorder`}><Button color="inherit">Manage ALl Orders</Button></Link>
                </Box>
            }


        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 3, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>

                    <Link className='ms-5' to='/'>   <button className='btn btn-danger text-white' onClick={logout}>Logout</button> </Link>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />

                <Switch>
                    <Route exact path={path}>
                        <Myorder></Myorder>

                    </Route>
                    <Route path={`${path}/pay`}>
                        <Pay></Pay>
                    </Route>
                    <Route path={`${path}/revew`}>
                        <Revew></Revew>
                    </Route>
                    <Route path={`${path}/addproducts`}>
                        <AddProduct />
                    </Route>
                    <Route path={`${path}/makeadmin`}>
                        <MakeAdmin />
                    </Route>
                    <Route path={`${path}/allorder`}>
                        <ManageAllorders></ManageAllorders>
                    </Route>

                </Switch>

            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;