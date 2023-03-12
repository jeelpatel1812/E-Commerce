import * as React from "react";
import './Header.css';
import {Routes, Route, useNavigate,Link} from 'react-router-dom';

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

function Header() {
	
	
return (
	
	<AppBar position="static" class="headerContainer">
		<Toolbar>
		<div class="head">
        <span class="title"> E-Commerce</span>

		<div className="viewCart">
			<Link to={"/cart" }>
							<h3>ListCart</h3>
			</Link>
		</div>
		
		</div>
		</Toolbar> 
	</AppBar>
);
}
export default Header;