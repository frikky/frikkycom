import React, {useState, useEffect} from 'react';
import {isMobile} from "react-device-detect";
import ReactGA from 'react-ga';

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

//import SEO from "./seo"
import { SocialIcon } from 'react-social-icons';
import { Helmet } from "react-helmet"

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
	const subtitle = "Entrepreneur, developer and security engineer"
	const mainImage = "https://frikky.com/images/me.jpg"
	const description = "Co-founder & CTO of Niceable. Developer and security engineer"
	const googleAnalyticsCode = "UA-147420730-2"

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
		"title": "Niceable - Fundraising for charities",
		"role": "Co-Founder & CTO",
		"description": "Niceable is a fundraising platform for non-profits. We use Raffles to make charitable giving accessible and fun with a minimum entry amount of only $1.",
		"link": "https://niceable.co",
		"image": "/images/niceable.png",
	},
	{
		"title": "Shuffle - Cyber Security automation",
		"role": "Co-Founder & CEO",
		"description": "Shuffle was created as a need for framework implementation automation in Information Security. Being a security engineer and forensic analyst taught me a lot about the need for automation, and this was a new, accessible approach.",
		"link": "https://shuffler.io",
		"image": "/images/shuffler.png",
	},
	{
		"title": "Alpakafarm - Webshop",
		"role": "Tech and sales help",
		"description": "Alpakafarm is my dad's tourist farm that started struggling due to COVID-19. We're setting up a webshop to help them through it :)",
		"link": "https://alpakafarm.eu",
		"image": "/images/alpaca.webp",
	},
	{
		"title": "Habitual - Routine chatbot",
		"role": "Developer",
		"description": "Habitual is a chatbot I made to help keep myself accountable. It periodically checks in to see whether I've done the habit I'm trying to incorporate. Future vision is more dynamic chatting and a personal CRM-like system. Has an accountability system where if you screw up, it will tell a friend",
		"link": "https://m.me/habitualbot",
		"image": "/images/torbjorn.jpg",
	},
	]

  useEffect(() => {
		if (window.location.hostname !== "localhost") {
			ReactGA.initialize(googleAnalyticsCode);
			ReactGA.pageview(window.location.pathname+window.location.search)
		}
	})

	const SocialIconHandler = (props) => {
		const [hover, ] = useState(false)	
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
		paddingTop: isMobile ? 50 : 200,
		paddingBottom: 200,
	}

	console.log("MOB: ", isMobile)

	const WorkingOnItem = (props) => {
		const data = props.data	
		const innerStyle = {
			margin: 15,
			padding: 10,
			textAlign: "left",
		}
		//minHeight: 250,
		//maxHeight: 250,

		const elevation = 5

		return (
			<div elevation={elevation} style={innerStyle}>
				<div style={{minWidth: isMobile ? "100%" : 302, maxHeight: "100%", textAlign: "center",}}>
					<img alt={props.title} src={data.image} style={{maxWidth: isMobile ? "100%" : "100%", borderRadius: 25, maxHeight: "100%",}}/>
				</div>
				<div style={{marginLeft: isMobile ? 0 : 30, marginTop: 30}}>
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
				<Divider style={{marginTop: 30}}/>
			</div>
		)
	}

	const nameStyle = {
		lineHeight: "1em", 
		fontSize: isMobile ? 40 : null,
	}

	const introduction = 
		<div style={heroStyle}>
			<div style={{margin: "auto", textAlign: "center", maxWidth: 1000, paddingTop: isMobile ? 50 : 0}}>
				<Typography variant="body1" color="textPrimary" style={{lineHeight: "1em", }}>
					Hey, I'm
				</Typography>
				<Typography variant="h1" color="textPrimary" style={nameStyle}>
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
				<Typography variant={isMobile ? "h6" : "h4"} color="textPrimary" style={{marginTop: 20, marginLeft: 15, marginRight: 15, marginBottom: 30,}}>
					<b>Current projects</b>
				</Typography>
				{workingOn.map(data => {
					return <div style={{marginTop: isMobile ? 50 : 30,}}>
						<WorkingOnItem data={data} style={{}} /> 	
						{isMobile ? <Divider /> : null}
					</div>
				})}
				<Typography variant={isMobile ? "h6" : "h4"} color="textPrimary" style={{marginTop: 20, marginLeft: 15, marginRight: 15}}>
					Old projects and workplaces can be found on <a href="https://github.com/frikky">Github</a> and <a href="https://www.linkedin.com/in/frikky">Linkedin</a> :)	
				</Typography>
			</div>
		</div>

	// FIXME - add appbar
	// const AppbarButton = (props) => {
	// 	const style = {
	// 		fontSize: 20,
	// 		height: 34,
	// 		marginTop: 9,
	// 	}

	// 	//var tmpStyle = JSON.parse(JSON.stringify(style))
	// 	return (
	// 		<a href={props.href} style={{paddingRight: 35, textDecoration: "none"}}>
	// 			<Typography color="textSecondary" style={style}>
	// 				{props.text}	
	// 			</Typography>
	// 		</a>
	// 	)
	// }
	//const appbar = 
	//		<AppBar elevation={1} id="appbar" style={{boxShadow: "none", backgroundColor: "rgba(255,255,255,1)", color: "rgba(0,0,0,0.9)"}}>	
	//			<div style={{margin: "auto", textAlign: "center",}}>
	//				<AppbarButton href="/" text={"Home"} />
	//			</div>
	//		</AppBar>	
	
	const firstJson = JSON.stringify({
					"@context": "http://schema.org",
					"@type": "Organization",
					"name": "Frikky",
					"url": "https://frikky.com",
					"logo": {mainImage},
					"email": "fredrik@niceable.co",
					"sameAs" : [
							"https://twitter.com/frikky",
							"https://www.youtube.com/channel/UCdk-NpmnoPwP4_6bHZYGKIQ?view_as=subscriber",
							"https://www.instagram.com/frikkylikeme",
							"https://www.linkedin.com/in/frikky/",
							"https://github.com/frikky",
							"https://medium.com/@Frikkylikeme"
					],
					"contactPoint" : [
							{
									"@type" : "ContactPoint",
									"contactType" : "customer service",
									"email": "fredrik@niceable.co",
									"url": "https://niceable.co"
							}
					]
			})
	
	const secondJson = JSON.stringify({
				"@context": "http://schema.org",
				"@type": "WebSite",
				"name": "Frikky",
				"url": "https://frikky.com",
				"sameAs" : [
						"https://twitter.com/frikky",
						"https://www.youtube.com/channel/UCdk-NpmnoPwP4_6bHZYGKIQ?view_as=subscriber",
						"https://www.instagram.com/frikkylikeme",
						"https://www.linkedin.com/in/frikky/",
						"https://github.com/frikky",
						"https://medium.com/@Frikkylikeme"
				]
		})


	const helmet = 
		<Helmet>
			<title>I'm {title}</title>
			<link rel="canonical" href="https://frikky.com" />
			<meta
				name="Description"
				content={description}
			/>
			<meta property="og:title" content={`${title}'s`} />
			<meta property="og:description" content={description} />
			<meta property="og:image" content={mainImage} />
			<meta property="og:url" content="https://frikky.com" />
			<script type="application/ld+json">{firstJson}</script>
			<script type="application/ld+json">{secondJson}</script>
		</Helmet>

	return (
		<MuiThemeProvider theme={theme}>
			{helmet}
			<div style={{paddingTop: 50, backgroundColor: "white", scrollBehavior: "smooth"}}>
				{introduction}
			</div>
		</MuiThemeProvider>
	)
}

export default App
