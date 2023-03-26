import * as React from "react";
import './Header.css';
import {Routes, Route, useNavigate,Link} from 'react-router-dom';
import { Grid } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { BsFillCartFill } from 'react-icons/bs'
import { FcAddDatabase } from 'react-icons/fc'
function Header() {
	
	
return (
	
	<AppBar position="static" class="headerContainer">
		<Toolbar>
		<Grid container sm={12} xl={12} lg={12} xs={12} md={12} >
		<Grid item lg={10} xl={10} style={{justifyContent:"left",display:"flex"}}>
        {/* <span class="title" > E-Commerce</span> */}
		<Link to={"/" } className="title" >
							<h3>E-Commerce</h3>
		</Link>
		</Grid>
		<Grid item lg={1} xl={1} style={{justifyContent:"right",display:"flex"}}>
				<Link to={"/createForm" }>
									{/* <h3>AddProduct</h3> */}
									<FcAddDatabase style={{color:"white",marginTop:"10px"}}/>
				</Link>
		</Grid>
		<Grid item lg={1} xl={1}  style={{justifyContent:"right",display:"flex"}}>
			<Link to={"/cart" }>
							{/* <h3>ListCart</h3> */}
							<BsFillCartFill style={{color:"white",marginTop:"10px"}}/>
			</Link>
		</Grid>

		
		
		</Grid>
	 	</Toolbar> 
	 </AppBar>
);
}
export default Header;