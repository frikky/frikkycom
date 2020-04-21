import React, {useState} from 'react';
import {isMobile, BrowserView, MobileView} from "react-device-detect";

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Paper from '@material-ui/core/Paper';

import SEO from "./seo"
import { SocialIcon } from 'react-social-icons';

// main: '#4285F5',
// main: '#41dcab',
const theme = createMuiTheme({
	palette: {
		type: 'light',
    primary: {
      main: '#00AAE1',
      dark: '#143C8C',
      contrastText: '#fff',
    },
    secondary: {
      main: '#64B42D',
      dark: '#008732',
      contrastText: '#fff',
    },
    error: {
      main: '#BD0043',
      contrastText: '#fff',
    },
    divider: '#D7D6D5',
    background: {
      paper: '#fff',
      default: "#ff0000"
    },
  },
  typography: {
	 body1: {
	  fontSize: 18,
	 },
	 fontFamily: [
			'helvetica',
		].join(','),
	},
});

const App = () => {
	const title = "Fredrik"
	const subtitle = "Founder, developer and security engineer"
	const platforms = [{
		"url": "https://twitter.com/frikkylikeme",
		"network": "twitter",
	},
	{
		"url": "https://www.linkedin.com/in/frikky/",
		"network": "linkedin",
	},
	{
		"network": "github",
		"url": "https://github.com/frikky"
	},
	{	
		"network": "medium",
		"url": "https://medium.com/@Frikkylikeme",
	}
	]

	const workingOn = [{
		"title": "Niceable - Fundraising",
		"role": "Co-Founder & CTO",
		"description": "This is Niceable",
		"link": "https://niceable.co",
	},
	{
		"title": "Habitual - Chatbot",
		"role": "Developer",
		"description": "Habit bot to stop all the habits",
		"link": "https://m.me/habitualbot",
	},
	{
		"title": "Shuffle - Cyber Security",
		"role": "Co-Founder & CEO",
		"description": "This is Shuffle",
		"link": "https://shuffler.io",
	}
	]

	const AppbarButton = (props) => {
		const [hover, setHover] = useState(false)	
		const style = {
			fontSize: 20,
			height: 34,
			marginTop: 9,
		}

		var tmpStyle = JSON.parse(JSON.stringify(style))
		if (hover) {
			tmpStyle.borderBottom = "2px solid #4285F5"
			tmpStyle.color = "#4285F5"
		}

		return (
			<a href={props.href} style={{paddingRight: 35, textDecoration: "none"}} onMouseOut={() => {setHover(false)}} onMouseOver={() => {setHover(true)}}>
				<Typography color="textSecondary" style={tmpStyle}>
					{props.text}	
				</Typography>
			</a>
		)
	}

	const SocialIconHandler = (props) => {
		const [hover, setHover] = useState(false)	
		const platform = props.data
		const style = {
			height: 80,
			width: 80,
			margin: 10,
		}

		var tmpStyle = JSON.parse(JSON.stringify(style))
		if (hover) {
			tmpStyle.height = 120
			tmpStyle.width = 120
		}

		return (
			<SocialIcon key={platform.url} network={platform.name} url={platform.url} style={tmpStyle}/>	
		)
	}

	const heroStyle = {
		width: "100%",
		minHeight: isMobile ? "100%" : 711,
		paddingTop: 200,
	}

	const WorkingOnItem = (props) => {
		const data = props.data	

		var innerStyle = {
			margin: 10,
			padding: 10,
			display: "flex",
			textAlign: "left",
		}
		//minHeight: 250,
		//maxHeight: 250,

		const elevation = 5

		return (
			<div elevation={elevation} style={innerStyle}>
				<img alt={props.title} src={data.image} style={{width: 302, borderRadius: 25, height: "100%",}}/>
				<div>
					<a href={data.link} style={{textDecoration: "none"}}>
						<Typography variant={isMobile ? "h6" : "h4"} style={{color: "#3377CC"}}>
								{data.title}
						</Typography>
					</a>
					<Typography variant={isMobile ? "h6" : "h5"} style={{color: "#5e9516"}}>
						{data.role}
					</Typography>
					<Typography variant={"body1"} color={"textSecondary"} style={{marginTop: 30,}}>
						{data.description}
					</Typography>
				</div>
			</div>
		)
	}

	const introduction = 
		<div style={heroStyle}>
			<div style={{margin: "auto", textAlign: "center", maxWidth: 850, paddingTop: isMobile ? 50 : 0}}>
				<Typography variant="body1" color="textPrimary" style={{lineHeight: "1em", fontSize: isMobile ? 40 : null}}>
					Hey, I'm
				</Typography>
				<Typography variant="h1" color="textPrimary" style={{lineHeight: "1em", fontSize: isMobile ? 40 : null}}>
					<b>{title}</b>
				</Typography>
				<Typography variant={isMobile ? "h6" : "h4"} color="textPrimary" style={{marginTop: 20, marginLeft: 15, marginRight: 15}}>
					{subtitle}
				</Typography>
				<div style={{width: "100%", margin: "auto", textAlign: "center", marginTop: 100, }}>
					{platforms.map(data => {
						return (
							<SocialIconHandler data={data} />
						)
					})}
				</div>
				<Divider style={{marginTop: 100}}/>
				<Typography variant={isMobile ? "h6" : "h4"} color="textPrimary" style={{marginTop: 20, marginLeft: 15, marginRight: 15}}>
					What I'm working on
				</Typography>
				{workingOn.map(data => {
					return <WorkingOnItem data={data}/> 	
				})}
			</div>
		</div>

	const appbar = 
			<AppBar elevation={1} id="appbar" style={{boxShadow: "none", backgroundColor: "rgba(255,255,255,1)", color: "rgba(0,0,0,0.9)"}}>	
				<div style={{margin: "auto", textAlign: "center",}}>
					<AppbarButton href="/" text={"Home"} />
				</div>
			</AppBar>	

	return (
		<MuiThemeProvider theme={theme}>
			<div style={{paddingTop: 50, backgroundColor: "white", scrollBehavior: "smooth"}}>
				{introduction}
			</div>
			{SEO}
		</MuiThemeProvider>
	)
}

export default App
