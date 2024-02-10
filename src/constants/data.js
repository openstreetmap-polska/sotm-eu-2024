export const descriptiveTable = {
	"mobile-mapping-workshop": {
		name: "Andrew Hain",
		title: "Mobile mapping workshop",
		details: [
			{
				description:
					"A chance to improve your mobile mapping skills, or to learn if you haven’t done it before. Bring a smartphone or tablet with your favourite mapping app and practice it in the street.\n\nWe will try out StreetComplete, Vespucci and Every Door. Feel free to install one or more of these apps before the session begins.\n\nMeeting point: Antwerp Berchem Station",
			},
		],
		date: "11/10/2023",
		time: "14:00 - 16:00",
		place: "Antwerp Berchem Station Meeting Point",
	},
	"welcome-session": {
		name: "OSM BE",
		title: "Welcome Session",
		details: [
			{
				description:
					"Join us for the welcoming session of our networking evening",
			},
		],
		date: "11/10/2023",
		time: "16:30 - 17:00",
		place: "Marco Polo",
	},
	"meet-your-mapper": {
		name: "Ilya Zverev & Gregory Marler",
		title: "Meet Your Mapper",
		details: [
			{
				description:
					"Join us for an energetic engagement session. Network with fellow attendees and have some fun!",
			},
		],
		date: "11/10/2023",
		time: "17:00 - 18:00",
		place: "Marco Polo",
	},
	"opening-session": {
		name: "SotM EU Team featuring Mike Harrell",
		title: "Opening Session",
		details: [
			{
				description: "Join us for the official opening session of SotM EU 2023",
			},
		],
		date: "11/11/2023",
		time: "09:30 - 10:00",
		place: "Marco Polo",
	},
	"opening-keynote": {
		name: "Allan Mustard",
		title: "Opening Keynote",
		details: [
			{
				description: "Join us for an exciting keynote session by Allan.",
			},
		],
		date: "11/11/2023",
		time: "10:00 - 10:30",
		place: "Marco Polo",
	},
	"hiking-routes-the-past-the-present-and-the-future": {
		name: "Sarah Hoffmann",
		title: "Hiking Routes - the Past, the Present and the Future",
		details: [
			{
				description:
					"This talk takes a look at the state of hiking routes in Europe and other parts of the world. We look at the different systems and traditions for marking hiking routes in different countries and compare how they are\nmapped in OSM. We look at the strong and weak points of the current tagging.\n\nWhat works well, what parts are still controversial. The talk is meant to jumpstart a discussion at the conference between hiking enthusiasts from different countries.",
			},
		],
		date: "11/11/2023",
		time: "11:00 - 11:30",
		place: "Marco Polo",
	},
	"vector-tiles-with-the-shortbread-schema": {
		name: "Michael Reichert",
		title: "Vector tiles with the Shortbread schema",
		details: [
			{
				description:
					'In 2022, Geofabrik released a vector tile schema called "Shortbread", under the CC-0 lience (for the schema) and FTWPL (for its implementation).\n\nThis talk briefly discusses the motivation for developing an additional schema from scratch. It then presents the schema itself and the toolchain used at Geofabrik to generate world-wide vector tile sets with Tilemaker, on machines with no more than 128 GB of RAM.\n\nThe talk also presents a method of using vector tiles as Mapnik data source. This is a workflow we use at Geofabrik to produce server-side raster tiles from vector tile data sources, in order to support older clients.',
			},
		],
		date: "11/11/2023",
		time: "11:00 - 11:30",
		place: "Orangerie",
	},
	"from-belgium-to-europe-can-european-local-chapters-work-together-and-learn-from-each-other":
		{
			name: "Joost Schouppe",
			title:
				"From Belgium to Europe: can European Local chapters work together and learn from each other?",
			details: [
				{
					description:
						'Because Belgium is small and complicated, federation is at the core of what we do. That means most of our projects are built to be scalable. Still, we are a tiny organization and can’t do as much as we would like.\n\nWe propose a two-part session on this subject.\n\nFirst we explore the projects of OSMbe that could be interesting on a European scale: camera grants, State of the Map Europe and our corporate membership program.\n\nSecond, we invite the participants of the session to bring their ideas to the table. Which of their projects could be scaled up to Europe? What would a Europe-wide collaboration look like? Is there any sense in formal organization?\n\nFor the first part, we intend to invite guests who are involved in these projects.\n\nSome context:\n* <a href="https://openstreetmap.be/en/projects/streetlevelimagery.html">OSM Belgium has a small camera grant project</a>, financed by Corporate Membership. We are talking with Meta to roll this out towards all of Europe.\n* Our project to run a State of the Map Europe is intended to be a first run of something that might be a new bi-yearly tradition, especially considering the likelihood of more international SotM’s happening outside of Europa\n* After years of unfocused discussion, we started a simple Corporate Membership program (<a href="https://openstreetmap.be/en/support.html">explained here</a>), which has been surprisingly successful (see <a href="https://github.com/osmbe/working-group-bylaws/tree/master/corporate-members">here</a>). It hasn’t just given us some financial freedom, but also an opportunity to be present at expensive tech conferences (thank you Anyways.eu), support tile infrastructure (thank you Geo6.be) and increase our available manpower (thank you TomTom).\n* We try to build all our projects in a scalable way, though it is not always easy to help them grow elsewhere. Examples are the very succesful <a href="https://welcome.osm.be">Welcome Tool</a> and EqualStreetnames. But our <a href="https://github.com/osmbe/road-completion">Road Completion project</a> also runs on several areas. And our newer <a href="https://openstreetmap.be/en/projects/traffic-sign.html">Traffic Sign project</a> is also designed to be flexible (and the fully automated workflow Github Actions>MapRoulette is in itself interesting for other projects).\n\nWe hope to count with the presence of people active in Local Chapters and local communitties from around Europe!',
				},
			],
			date: "11/11/2023",
			time: "11:00 - 12:00",
			place: "Sacagawea",
		},
	"hands-on-id-development": {
		name: "Martin Raifer",
		title: "Hands-on iD development",
		details: [
			{
				description:
					'The iD editor is a central piece of software in the OSM ecosystem and used by thousands of mappers every day. In its over 11 years long development history, it has certainly accumulated some peculiarities and specifics. One example would be its reliance on the "d3" framework for everything UI related, which works quite differently from more modern popular approaches of building single page javascript applications.\n\nThis workshop starts with an overview of the technology, architecture and core concepts of the iD editor. This is followed by showing some of the used software development design patterns in form of examples from the code base. Important development commands and contributing guidelines are also showcased. After this, a hands-on part follows which illustrates how a small feature would be implemented in iD. Finally, there will be also some time reserved for questions from the audience.\n\nThe target audience for this workshop are people who know at least some programming and are potentially be interested into contributing a bug fix or implementing a small feature in the iD editor, as well as people who are just curious about how the iD editor is built under the hoods.',
			},
		],
		date: "11/11/2023",
		time: "11:00 - 12:00",
		place: "Vasco Da Gama",
	},
	"quantifying-europes-cycling-infrastructure-using-openstreetmap": {
		name: "Aleksander Buczyński",
		title: "Quantifying Europe’s Cycling Infrastructure Using OpenStreetMap",
		details: [
			{
				description:
					"There is great demand for data on cycling infrastructure, but currently no official source provides this kind of information on a European scale. The European Cyclists’ Federation (ECF) strives to fill the gap by extracting cycling infrastructure data from OpenStreetMap (OSM). In the Quantifying Europe’s Cycling Infrastructure Using OpenStreetMap (QECIO) dashboard we present the length of six different types of cycling infrastructure across 37 European countries and 1502 regions (level 3 of the Nomenclature of Territorial Units for Statistics). We also quantify the availability of additional data about cycling infrastructure and several specific parameters, such as uptake of contraflow cycling.",
			},
		],
		date: "11/11/2023",
		time: "11:30 - 12:00",
		place: "Marco Polo",
	},
	"clearance-monitoring-and-extracting-data-from-osm-under-quality-constraints":
		{
			name: "Frédéric Rodrigo",
			title:
				"Clearance: monitoring and extracting data from OSM under quality constraints",
			details: [
				{
					description:
						'"Clearance" aim to be a tool for produce OSM extract and keep it up to date while respecting quality rule. It based on local partial updates. Rejected data cluster should be fixed in OSM. OSM changes to be reviewed could be monitored by communities of interest.',
				},
			],
			date: "11/11/2023",
			time: "11:30 - 12:00",
			place: "Orangerie",
		},
	"does-openstreetmap-need-a-trustmark": {
		name: "Stefan Keller",
		title: "Does OpenStreetMap Need a Trustmark?",
		details: [
			{
				description:
					"Some users doubt the quality of OpenStreetMap (OSM) data and want a trustmark to certify it. We think that OSM data is already fit for many uses and does not need a trustmark. We show examples of tools that measure and evaluate OSM data quality in different aspects. We invite you to join our session and discuss these tools.",
			},
		],
		date: "11/11/2023",
		time: "12:00 - 12:30",
		place: "Marco Polo",
	},
	"accessibility-information-for-wheelchair-users-in-osm-and-the-on-wheels-app":
		{
			name: "Robin Julien",
			title:
				"Accessibility information for wheelchair users in OSM and the On Wheels app",
			details: [
				{
					description:
						"Introduction:\n\nFinding the correct accessibility data about public buildings and public space can be difficult for people with disabilities. Therefor On Wheels has been collecting and sharing data with a user friendly app since 2016. Looking at the future we wanted to make this data open and accessible for everyone by developing a whole new app based on OSM data.\n\nDevelopment process:\n*New accessibility tags for entrances, toilets and elevators.\n*User friendly UI in Flutter\n*Data transfer to OSM\n*Login with personal OSM account\n\nApp functionalities:\n*24 categories, like restaurants, hotels, shops, parking spaces, ...\n*Multiple languages\n*An interactive map with categories and wheelchair accessible routes\n*Filter data with personal wheelchair, bike and car profiles\n*Changing locations and adding new locations\n\nResearch projects:\n*Create a city dashboard with accessibility data from OSM\n*Using Ai and Machine Learning to integrate smart functions in the app\n*Linking with other apps and platforms",
				},
			],
			date: "11/11/2023",
			time: "12:00 - 12:30",
			place: "Sacagawea",
		},
	"the-local-knowledge-dilemma-a-data-driven-alert-for-osm": {
		name: "Pete Masters",
		title: "The Local Knowledge Dilemma: A Data-Driven Alert for OSM",
		details: [
			{
				description:
					"Is the local knowledge in OpenStreetMap built to last? Our data-driven study reveals a a critical issue masked by the upward trend in contributions. This presentation will delve into the implications of this unsustainability and why immediate intervention is essential for the future of OSM",
			},
		],
		date: "11/11/2023",
		time: "13:30 - 14:00",
		place: "Marco Polo",
	},
	"the-art-of-openstreetmap": {
		name: "Gregory Marler",
		title: "The Art of OpenStreetMap",
		details: [
			{
				description:
					"What art has been created with OpenStreetMap? An introduction and a showcase of creative expressions from our data.",
			},
		],
		date: "11/11/2023",
		time: "13:30 - 14:00",
		place: "Orangerie",
	},
	"ungap-the-map-designing-moonshot-cycling-networks": {
		name: "Dustin Carlino",
		title: "Ungap the Map: designing moonshot cycling networks",
		details: [
			{
				description:
					"Imagine every road in your region was safe for cycling, and many of the short driving trips that happen today were instead done by cycling. Which would be the most used roads? In this workshop, we'll start from OpenStreetMap and public census data and use 3 open source tools at different spatial resolutions to calculate this and design an improved cycling network.\n\n1) First we'll create a national travel demand model, calculate millions of routes in minutes, and determine the most important roads to prioritize.\n\n2) Then we'll use a web app to quickly sketch and share ideas for improvements.\n\n3) Finally we'll design a low-traffic neighbourhood to create quieter residential streets.\n\nThe workshop will use open source software developed at the Alan Turing Institute in collaboration with Active Travel England. Minimal technical background required to follow along, and we'll be able to apply the methods anywhere with sufficient OSM coverage.",
			},
		],
		date: "11/11/2023",
		time: "14:00 - 15:00",
		place: "Sacagawea",
	},
	"introducing-the-ohsomenow-stats-dashboard-a-workshop-for-measuring-your-impact":
		{
			name: "Benjamin Herfort & Nicole Siggins",
			title:
				"Introducing the ohsomeNow stats dashboard - a workshop for measuring your impact",
			details: [
				{
					description:
						"The ohsomeNow stats dashboard and API provide up-to-date and global scale overview statistics on mapping activity in OpenStreetMap. Join us in a workshop where you'll learn what the new dashboard is, a bit about its background, and how to use it to measure your impact across OSM.",
				},
			],
			date: "11/11/2023",
			time: "13:30 - 14:30",
			place: "Vasco Da Gama",
		},
	"sane-limits-for-new-accounts": {
		name: "Roland Olbricht",
		title: "Sane Limits for New Accounts",
		details: [
			{
				description:
					"Every now and then people express concerns that part of the OpenStreetMap data might get vandalized. While both the majority of those unhelpful edits are rather incompetence than malice and they account olny for a small part of all new users, a discussion on community.osm.org about limits for new accounts found a lot of attention. However, the discussion has shown that people there had no idea about the real numbers.\n\nWe will look into actual behaviour of new accounts within the first hour, the first 24 hours, and the first 30 days of activity by applying various metrics. This should help to get any future such discussion sufficiently evidence based.",
			},
		],
		date: "11/11/2023",
		time: "14:00 - 14:30",
		place: "Marco Polo",
	},
	"collecting-street-level-pictures-with-centimetric-geolocation-at-low-cost": {
		name: "Antoine Riche",
		title:
			"Collecting street level pictures with centimetric geolocation at low cost",
		details: [
			{
				description:
					"Street level pictures are very useful to contribute to OSM data, 360° pictures are even more useful, and what's even more useful is to have thousands and thousands of precisely geolocated 360° pictures. How can this be achieved efficiently and at low cost ?\n\nAt Carto’Cité we designed and built the RTK360 kit, a low-tech solution that achieves this goal. It combines a 360° action cam such as the GoPro Max or Ricoh Theta Z1, together with the Sparkfun RTK Surveyor. RTK stands for Real Time Kinematic, this is a satellite navigation system (GNSS) that achieves centimeter-level accuracy by applying corrections provided by a reference station. Networks of RTK stations have existed for years, but they require costly equipment and a costly subscription to obtain the correction data.\n\nHowever this is changing now : the Centipede network is a freely accessible network of RTK stations that covers a large part of France and is quickly extending over Belgium, Switzerland, Hungary. This growth has been made possible thanks to RTKBase, an open source and open hardware RTK station designed by Stéphane PÉNEAU, an amazing maker and Carto’Cité associate. This means you too can build an RTK station and an RTK rover, and enjoy taking and sharing thousands and thousands of 360° pictures with centimeter-level accuracy.",
			},
		],
		date: "11/11/2023",
		time: "14:00 - 14:30",
		place: "Orangerie",
	},
	"osm-in-belgian-train-stations-welcome-on-board": {
		name: "Julien Minet",
		title: "OSM in Belgian train stations: welcome on board",
		details: [
			{
				description:
					"For almost one year, Champs-Libres have been helping the SNCB Innovation Lab for reusing OSM data from Belgian train stations to create some new services for travelers. A first application is to provide information to the travelers about the accessibility of the railway platforms for bikes, in a dedicated route planner (BikeOnTrain Beta). In this talk, we’ll tell how and until where we’ve been so far.\nWe work on train station platform data and more specifically on their so-called accessibility objects: elevators, escalators, bike ramps, stairs, footways, etc. To our knowledge, it is the first time OSM data from train stations in Belgium was used in a specific application. More generally, we have also had the impression it is the first time a routeplanner gives a clear view to travelers on the different options to reach a platform.\nWhen we started the project, OSM data in the Belgian stations had varying degrees of completeness and quality. Fortunately, all train stations and 95% of the platforms were present in OSM. The quality of accessibility objects data was rather good, despite it is hard to quantitatively assess its completeness.\nWith the help of the Belgian OSM community and some paid jobbers, we gradually improve the OSM data by adding missing accessibility objects in railway platforms. Dissemination of information was made through a chat room, a wiki page, the writing of a tutorial and some OSM diary posts. We will share some tips and tricks learned from the field when mapping stations.\nThere are more mature examples of successful use of OSM data by railways companies, notably from France (SNCF). As train and OSM enthusiasts, we’d be excited about further development of practices around improving OSM data in railway stations. We also see a paved way for collaborations among railway companies for the use of OSM data.",
			},
		],
		date: "11/11/2023",
		time: "14:30 - 15:00",
		place: "Marco Polo",
	},
	"exploring-osm-based-geospatial-datasets-insights-from-the-italian-national-summary-database-dbsn":
		{
			name: "Alessandro Sarretta",
			title:
				"Exploring OSM-based geospatial datasets: insights from the Italian National Summary Database (DBSN)",
			details: [
				{
					description:
						"In recent years (and months), various open datasets including a varying degree of information derived from OpenStreetMap have been released and made available to the geographic community for broader reuse. Some international examples include, among others, Microsoft GlobalML Building Footprints, Overture Maps Data, EUBUCCO, Digital Building Stock Model (DBSM). In Italy, the National Summary Database (DBSN) has recently been published at a national coverage level. All these datasets have different modes of access, origins, purposes, and characteristics that make them more or less suitable for the purposes of users who may be interested in reusing them. The presentation aims to provide an overview of the current status and key characteristics of these open geospatial datasets, providing detailed examples with a particular focus on the DBSN, which has been recently updated by the IGM (Italian Military Geographical Institute) with data from all Italian regions. Examples of congruences and incongruences with OpenStreetMap data will be presented, along with technical, semantic, and legal opportunities and challenges for integrating these datasets back with OpenStreetMap.",
				},
			],
			date: "11/11/2023",
			time: "14:30 - 15:00",
			place: "Orangerie",
		},
	"mapy-cz-digital-traditional-hiking-map-of-the-whole-world": {
		name: "Jakub Zmrzlik",
		title: "Mapy.cz – digital traditional hiking map of the whole World",
		details: [
			{
				description:
					'Mapy.cz - most popular map portal and mobile phone app in Czech Republic and Slovakia with users over whole Europe visualizes OpenStreetMap data for whole World (except territory of Czech Republic). Main goal is to offer users map in a map key that they have been using for many years in paper form. In a map you can find all infrastructure and suprastructure for outdoor tourism – for hiking, cycling or winter tourism. App and map portal is for free. Map contains interactive points from OpenStreetMap with photos from users and Wikimedia Commons, texts from Wikipedia and additional information from Wikidata, which make map a comprehensive lexicon about our Earth.\n\nWe would like to introduce map portal and app mapy.cz, features used in portal and app, focusing on use of OpenStreetMap data and other open data such as Wikipedia and Wikidata. We will describe process of creating and updating maps and data and mention feedback from milions of mapy.cz users, which can improve OpenStreetMap data as well.\n\nWe will introduce you also our CSR activity – tactile maps as part of mapy.cz, which give blind people opportunity to read and navigate maps by touch. Worldwide and free. Built on OpenStreetMaps data.\n\n<a href="https://en.mapy.cz/">mapy</a>\n<a href="https://tactilemaps.eu/">tactilemaps</a>',
			},
		],
		date: "11/12/2023",
		time: "15:00 - 15:30",
		place: "Orangerie",
	},
	"liberated-maps-challenges-opportunities": {
		name: "Luke Seelenbinder, Bart Louwers",
		title: "Liberated Maps: Challenges & Opportunities",
		details: [
			{
				description:
					"There are increased expectations placed on the quality, feature set, performance, and visual appeal of maps. Up until recently, it seemed that free software can never truly compete in the maps space. That is starting to change… This talk will outline how the MapLibre project is setting in motion a revolution for free maps.",
			},
		],
		date: "11/11/2023",
		time: "15:30 - 16:00",
		place: "Orangerie",
	},
	"mapillary-2-billion-images-and-beyond": {
		name: "Edoardo Neerhut",
		title: "Mapillary: 2 billion images and beyond",
		details: [
			{
				description:
					"Mapillary is an open platform for street-level imagery and map data that began in 2013. Since then over 2 billion images have been contributed from around the world. Imagery has been contributed from horseback in Kyrgyzstan, boats in the canals of Amsterdam, and bicycles on the streets and trails of Sydney. With Mapillary surpassing 2 billion images, we’d like to summarize the latest features, acknowledge some of the amazing contributions, and hint at some of the updates that are coming.",
			},
		],
		date: "11/11/2023",
		time: "15:30 - 16:00",
		place: "Marco Polo",
	},
	"how-to-be-an-osm-ambassador-insights-into-building-your-community-through-storytelling":
		{
			name: "Courtney Williamson & Steve Coast",
			title:
				"How to be an OSM Ambassador: insights into building your community through storytelling",
			details: [
				{
					description:
						"In this session, we will share ideas for telling the global OpenStreetMap story. We will share insights from the early days of OSM ambassadorship and look at current examples of great storytelling. We will help you learn how to create great stories that will inspire others on the many social media channels used by OSM'ers worldwide. And, we will offer insights on how to promote local and regional events, including outreach to potential sponsors.",
				},
			],
			date: "11/11/2023",
			time: "15:30 - 16:30",
			place: "Sacagawea",
		},
	"how-to-put-an-entire-country-in-a-container-transportable-openstreetmap-data-integration-into-postgis-using-docker":
		{
			name: "Benjamin Deswysen",
			title:
				"How to put an entire country in a container: transportable OpenStreetMap data integration into Postgis using docker",
			details: [
				{
					description:
						"The presentation will spotlight the effective usage of the imposm command-line tool in synergy with Docker within an OpenStreetMap data pipeline, with a specific focus on integrating it with a PostGIS database.\nThe talk will delve into imposm's adeptness in seamlessly importing OSM data into the PostGIS spatial database system, bolstered by Docker's encapsulated and transportable runtime environment.\nBy harnessing imposm's robust schema mapping and data transformation capabilities alongside Docker's containerization advantages, the presentation will showcase how this combination allows speed, scalability, and replicability of OpenStreetMap data processing workflows, particularly in the context of PostGIS database utilization.",
				},
			],
			date: "11/11/2023",
			time: "15:30 - 16:30",
			place: "Vasco Da Gama",
		},
	"panoramax-the-full-floss-alternative-for-your-ground-level-imagery": {
		name: "Christian Quest",
		title:
			"Panoramax: the full FLOSS alternative for your ground level imagery",
		details: [
			{
				description:
					"Panoramax is a decentralized and federated project to collect and share ground level imagery under open licences using open standard APIs.\n\nInitiated almost a year ago by OpenStreetMap France and IGN, it is time to discover the current state of this project, available tools, APIs, content and first reuses.",
			},
		],
		date: "11/11/2023",
		time: "16:00 - 17:00",
		place: "Marco Polo",
	},
	"modern-osm2pgsql-tricks": {
		name: "Jochen Topf & Paul Norman",
		title: "Modern osm2pgsql tricks",
		details: [
			{
				description:
					"Over the last few years, osm2pgsql has changed a lot to become faster and easier to use. This talk covers how to use the new features in osm2pgsql for analysis, vector tiles, and anything else you might want to do.",
			},
		],
		date: "11/11/2023",
		time: "16:00 - 17:00",
		place: "Orangerie",
	},
	"maintaining-openstreetmap-org": {
		name: "Andy Allan",
		title: "Maintaining OpenStreetMap.org",
		details: [
			{
				description:
					"I volunteer as a maintainer for the \"openstreetmap-website\" project - the open-source code that powers the website, the API and the core database for OpenStreetMap. But what exactly does being a maintainer involve?\n\nIn this talk I'll be showing you behind the scenes. What do I work on in a typical week? How do I choose what to do? What makes a topic worth working on? How do I deal with the endless backlog of open issues and pull requests?\n\nI'll also be delving into some recent changes that we've made, along with giving you some inspiration to get you involved in the translation, design, and development work.",
			},
		],
		date: "11/12/2023",
		time: "09:30 - 10:00",
		place: "Marco Polo",
	},
	"nominatim-on-your-laptop": {
		name: "Sarah Hoffmann",
		title: "Nominatim on your laptop",
		details: [
			{
				description:
					"The search engine Nominatim may be known by many from the search box on OpenStreetMap's main website. But it is also a software you can simply install and use on your own computer. The latest release of Nominatim comes with a Python library that makes it even easier to use locally. This talks demonstrates how to bring search in OSM data to your laptop and shows some tricks how to make the most of the data.",
			},
		],
		date: "11/12/2023",
		time: "09:30 - 10:00",
		place: "Orangerie",
	},
	"mapping-pedestrian-network-accessibility-on-openstreetmap": {
		name: "Kauê de Moraes Vestena",
		title: "Mapping Pedestrian Network Accessibility on OpenStreetMap",
		details: [
			{
				description:
					"Accessibility matters affects people's lives on a daily basis. OSM ecosystem got all the tools for the mapping of the subject, concerning pedestrian networks. The mapping of sidewalks, that are the most frequent kind of pedestrian path, as separated geometries enables for richness of information and routing with the correct path length and connections. Still lots of people among OSM community are shy about the mapping of pedestrian networks. This kind of mapping benefits a lot from terrestrial imagery such as Mappilary that can be used for the inference of many fundamental attributes.",
			},
		],
		date: "11/12/2023",
		time: "11:30 - 12:30",
		place: "Sacagawea",
	},
	"openstreetmap-and-overture-the-case-for-collaboration": {
		name: "Marc Prioleau",
		title: "OpenStreetMap and Overture: The case for collaboration",
		details: [
			{
				description:
					"Overture Maps will be almost a year old at the time of SOTM-Europe This presentation will give a look at Overture, why it was founded, where it is headed and the case for collaboration to expand the availability and use of open map data.",
			},
		],
		date: "11/12/2023",
		time: "10:00 - 10:30",
		place: "Marco Polo",
	},
	"stadia-x-stamen-a-new-era-for-stamen-map-tiles": {
		name: "Luke Seelenbinder & Stephanie May",
		title: "Stadia x Stamen: A New Era for Stamen Map Tiles",
		details: [
			{
				description:
					"The renowned Stamen Map Tiles, after more than a decade of being used and loved by digital cartographers the world over, have received a facelift. Together, Stamen and Stadia Maps created all new vector versions of Toner and Terrain based on the modern mapping stack of open data and an open source toolbox of vector tiles and styles, while preserving backward compatibility for existing users. We will discuss the technical challenges to creating an affordable map tiling service at scale and provide some perspective on how OSM-based digital cartography has changed since these tilesets were originally created.",
			},
		],
		date: "11/12/2023",
		time: "10:00 - 11:00",
		place: "Orangerie",
	},
	"openstreetmap-foundations-budget-and-expenditures": {
		name: "Roland Olbricht",
		title: "OpenStreetMap Foundation's budget and expenditures",
		details: [
			{
				description:
					"\nThe OpenStreetMap Foundation is the organization that guards and legally owns the OpenStreetMap data. Every now and then people wonder what it costs to run OpenStreetMap and where the money goes, in particular as we currently run a fundraising drive to ensure the existence of OpenStreetMap in the near future.\n\nWe will go through the current budget, compare that with the actual expenditures, and have a look at the reserves. This way we will show how the current strategy of the OpenStreetMap Foundation manifests by the expenses.",
			},
		],
		date: "11/12/2023",
		time: "10:30 - 11:00",
		place: "Marco Polo",
	},
	"working-together-for-a-more-coherent-integration-of-eurovelo-routes-on-openstreetmap":
		{
			name: "Florence Grégoire",
			title:
				"Working together for a more coherent integration of EuroVelo routes on OpenStreetMap",
			details: [
				{
					description:
						"EuroVelo, the network of long-distance cycle routes that cross and connect Europe, is promoted on www.EuroVelo.com and included on OpenStreetMap, but there is no connection between these platforms and no collaboration between the EuroVelo team and the OpenStreetMap communities. We would like to propose the creation of a transnational group to work together on a more coherent integration of EuroVelo routes on OSM, particularly through harmonising the tagging across countries. This will improve the dissemination of updated information on various platforms and facilitate the gathering of GIS data related to each route, which allows for identifying where improvements are required, and ultimately helps the development of a high-quality cycle route network.",
				},
			],
			date: "11/12/2023",
			time: "11:30 - 12:00",
			place: "Orangerie",
		},
	"openstreetmap-almost-at-20-reflections-and-future-predictions": {
		name: "Steve Coast",
		title: "OpenStreetMap (almost) at 20: Reflections and Future Predictions",
		details: [
			{
				description:
					"As OSM approaches its 20th birthday, what has gone well, ok and badly? What does the future hold?",
			},
		],
		date: "11/12/2023",
		time: "11:30 - 12:00",
		place: "Marco Polo",
	},
	"using-openstreetmap-for-humanitarian-purposes-and-introduction-to-the-hot-tasking-manager":
		{
			name: "Nicole Siggins",
			title:
				"Using OpenStreetMap for Humanitarian Purposes - and introduction to the HOT Tasking Manager",
			details: [
				{
					description:
						"Are you curious how OpenStreetMap can be used for humanitarian purposes for large scale mapping campaigns? Join this hands-on workshop to learn more about the Tasking Manager, how to use it and how to get started.",
				},
			],
			date: "11/12/2023",
			time: "09:30 - 10:30",
			place: "Sacagawea",
		},
	"osmf-board-ama": {
		name: "OSMF Board",
		title: "OSMF Board AMA",
		details: [
			{
				description:
					"OpenStreetMap Foundation Board Ask Us Anything (i.e. AMA). We will take questions from the audience, or other questions that people can submit before the event, and we will talk about and answer them. We can talk about the past actions of the board, and what future plans we have.\n\nThis is a chance to ask the OSM Foundation Board questions, to engage with the board. Let’s have a conversation about the Foundation, the Board and how all the parts work together. If you know nothing about what the board is doing, this is a chance to find out. Find out what the Foundation does and doesn’t do, what it can and can’t do. Find out how you can help, how you can get involved. The Board is committed to openness and wants to engage with the community.",
			},
		],
		date: "11/12/2023",
		time: "12:00 - 13:00",
		place: "Marco Polo",
	},
	"un-maps-learning-hub-a-multi-lingual-educational-platform-on-osm": {
		name: "Rachele Amerini",
		title: "UN Maps Learning Hub: a multi-lingual educational platform on OSM",
		details: [
			{
				description:
					"UN Maps, a program within the United Nations Global Service Centre (UNGSC), released during SotM 2022 an online learning platform, the UN Maps Learning Hub, to guide new and seasoned OpenStreetMap users in the discovery of mapping and community practices and new tools.",
			},
		],
		date: "11/12/2023",
		time: "12:00 - 12:30",
		place: "Orangerie",
	},
	"utilizing-crowdsourced-mapping-to-enhance-food-security-among-lower-omo-agro-pastoralists-in-ethiopia":
		{
			name: "Binyam Dele",
			title:
				"Utilizing Crowdsourced Mapping to Enhance Food Security Among Lower OMO Agro-Pastoralists in Ethiopia",
			details: [
				{
					description:
						"In the Lower Omo Valley in Ethiopia, a food security crisis is unfolding. According to the Famine Early Warning Systems Network (FEWSNET), the situation in the area has passed ‘stressed’ to reach the ‘crisis’ stage. Against this background, we have been supporting a few affected agro-pastoralists\ncommunities in mapping the facilities and the natural resources, as part of an effort to better manage these resources and provide evidence to assess the scale of the disaster. The results from a pilot project (2021) demonstrate that the data generated by those affected is more accurate, complete, and locally relevant than authoritative maps or global machine-generated maps.\n\nThe Crowdmapping For Food Security in OMO Zone of Ethiopia Project aimed to support agro-pastoralist communities in mapping the natural resources and facilities they have access to and monitoring the state of such resources. The project further integrates the land user-generated data (in full or partially, depending on the communities’ decision) into OpenStreetMap.\n\nThe project also brought multiple groups together with distinct capabilities and knowledge, including OSM Ethiopia, the Humanitarian OpenStreetMap Team, YouthMappers, and the University College of London, who have come together to create the project's success. The project has already had a significant impact on the lives of those impacted by the food security crisis, improving circumstances and offering much-needed support. Furthermore, engaging and empowering youth to contribute to good change in their communities is a major goal of the project. This collaborative, multi-stakeholder approach has made it possible to achieve these goals.",
				},
			],
			date: "11/12/2023",
			time: "12:30 - 13:00",
			place: "Orangerie",
		},
	"a-hiking-map-created-by-the-club-alpino-italiano-parma-section": {
		name: "Marco Barbieri",
		title: "A hiking map created by the Club Alpino Italiano - Parma Section",
		details: [
			{
				description:
					"In 2022 the section of Parma of the Club Alpino Italiano (CAI) created a new 1:25,000 scale hiking trails map of the Parma Apennines. It is a series of 7 printed maps of 70x100 cm format with front/back cartography. The maps were created using OpenStreetMap (OSM) data, with the hiking theme (and more) entirely developed, updated and monitored by the volunteers of the CAI section directly on the OSM platform. We want to describe the entire process of creating the maps, starting from data processing and cartographic techniques, up to printing in the typography.",
			},
		],
		date: "11/11/2023",
		time: "12:00 - 12:30",
		place: "Orangerie",
	},
	"points-of-interest-anyone": {
		name: "Ilya Zverev",
		title: "Points of Interest Anyone?",
		details: [
			{
				description:
					"Does OpenStreetMap and its community even need shops and amenities on the map?\n\nWeird question, I know. But let's look closer at everything POI on the map imply. The community has always slowed down imports — without which it's impossible to get a good coverage. It treats shops and amenities tagging as an afterthought: proposals for these are much more rare than for linear features like power lines and railways. Mapping these has always been hard, and besides dozens of editors existing, only one does it good enough. Many important features, like freshness, get overlooked. And what about reviews and other community validation?\n\nIt's all too hard. Maybe we shouldn't even spend our time and thought on POI, and keep making the best base map for other companies to put POI on it?",
			},
		],
		date: "11/12/2023",
		time: "14:00 - 14:30",
		place: "Marco Polo",
	},
	"ramani-maps-a-new-android-compose-library-for-mapbox-and-maplibre": {
		name: "Jonas Vautherin",
		title: "Ramani-Maps: a new Android Compose library for Mapbox and MapLibre",
		details: [
			{
				description:
					"Ramani-Maps is a new open source maps library exposing an Android Jetpack Compose interface to manipulate Mapbox and MapLibre. It was first created because neither Mapbox nor MapLibre had a Compose interface, which has become the default on Android.\n\nWe strive to maintain a nearly identical API between the Mapbox and MapLibre versions, ensuring effortless transition between the two.\n\nWhile Ramani-Maps supports standard static annotations such as markers, symbols, circles, polylines, and polygons, it emphasizes interactive map editing - an aspect often intricate in other libraries. Creating a user interface allowing users to define map areas (e.g. through interactive polygons) or paths (e.g. in a hiking app for planning routes) becomes remarkably simple with Ramani-Maps.\n\nAlthough the library is relatively new, it improves steadily. This presentation will show how Ramani-Maps works and what can be done with it.",
			},
		],
		date: "11/12/2023",
		time: "14:00 - 14:30",
		place: "Orangerie",
	},
	"osm-wikidata-map-framework": {
		name: "Daniele Santini",
		title: "OSM-Wikidata Map Framework",
		details: [
			{
				description:
					"Combining OpenStreetMap and Wikidata allows to leverage the strengths of the two projects to create richer maps. This talk explores how OSM-Wikidata Map Framework simplifies this process.",
			},
		],
		date: "11/11/2023",
		time: "13:30 - 14:00",
		place: "Sacagawea",
	},
	"10-years-of-power-infrastructure-mapping-whats-next": {
		name: "François Lacombe",
		title: "10 years of power infrastructure mapping: what's next?",
		details: [
			{
				description:
					"Power infrastructure mapping is a thing in OpenStreetMap in many countries, especially in Europe. Community has been continuously improving data and tagging as well despite a very technical topic like many others. We can now take a step about the ten last years, consider some further improvements or partnership with operators and finally see how it is valuable for the whole community.",
			},
		],
		date: "11/12/2023",
		time: "14:30 - 15:30",
		place: "Marco Polo",
	},
	"exploring-taginfo": {
		name: "Jochen Topf",
		title: "Exploring taginfo",
		details: [
			{
				description:
					"For over a decade now taginfo has been an invaluable tool for OSM mappers and data users, bringing together a lot of information about OSM tags in one place. For mappers it helps with finding suitable tags. For data users it helps with figuring out what data there is and how to use it.",
			},
		],
		date: "11/12/2023",
		time: "14:30 - 15:00",
		place: "Orangerie",
	},
	"mapcomplete-progress-and-presenting-mapcomplete-studio": {
		name: "Pieter Vander Vennet",
		title: "MapComplete - progress and presenting MapComplete Studio",
		details: [
			{
				description:
					"MapComplete -an easy to use, web-based thematic editor- has been around for three years now. Thanks to NlNet, some big changes happened.\n\nThis talk will give a short outline and history of MapComplete and talk about some of the recent changes. It'll go in depth on how you can quickly create your own maps with the brand-new MapComplete Studio.",
			},
		],
		date: "11/12/2023",
		time: "14:00 - 15:00",
		place: "Sacagawea",
	},
	"closing-session": {
		name: "SotM EU Team",
		title: "Closing Session",
		details: [
			{
				description:
					"Join us for a closing session with our State of the Map Europe team.",
			},
		],
		date: "11/12/2023",
		time: "16:00 - 17:00",
		place: "Marco Polo",
	},
	"welcome-introduction-to-osm-science-2023osm-science-lightning-talks": {
		name: "by OSM Science 2023 Scientific Committee",
		title: "Welcome & Introduction to OSM Science 2023",
		secondTitle: "OSM Science Lightning Talks",
		secondName:
			"by Reid Passmore, Edson Augusto Melanda, Francis Andorful & Beatrice Olivari",
		details: [
			{
				description: "Assessing Bike-Transit Accessibility",
				authors:
					"Reid Passmore; Georgia Institute of Technology;\nKari E Watkins; University of California at Davis;\nRandall Guensler; Georgia Institute of Technology;",
			},
			{
				description:
					"OpenStreetMap Data for Automated Labelling Machine Learning Examples: The Challenge of Road Type Imbalance",
				authors:
					"Edson Augusto Melanda; Federal University of São Carlos; University of Heidelberg\nBenjamin Herfort; Heidelberg Institute for Geoinformation Technology\nVeit Ulrich; University of Heidelberg\nFrancis Andorful; University of Heidelberg\nAlexander Zipf; University of Heidelberg; Hidelberg Institute for Geoinformation Tecnology",
			},
			{
				description:
					"Exploring Road and Points of Interest (POIs) Associations in OpenStreetMap, A New Paradigm for OSM Road class Prediction",
				authors:
					"Andorful Francis, Heidelberg University\nChristina Ludwig, Heidelberg University",
			},
			{
				description:
					"Are Italian cities already 15-minute? Presenting a glocal proximity index, based on open data [ONLINE]",
				authors:
					"Beatrice Olivari, Deda Next;\nAngela Cimini, Sapienza University of Rome, Italian National Institute for Environmental Protection and Research (ISPRA)",
			},
		],
		date: "11/12/2023",
		time: "09:00 - 09:30",
		place: "Vasco Da Gama",
	},
	"fostering-osms-micromapping-through-combined-use-of-artificial-intelligence-and-street-view-imagery":
		{
			name: "Kauê de Moraes Vestena",
			title:
				"Fostering OSM’s Micromapping Through Combined Use of Artificial Intelligence and Street-View Imagery",
			details: [
				{
					description:
						"This work focuses on micromapping using street-view imagery and AI techniques to enhance OpenStreetMap (OSM). Micromapping involves mapping small geographic objects and has applications in infrastructure, security, 3D modeling, and more. Despite OSM's vast data, micromapping remains limited. The proposed methodology combines AI-based semantic segmentation and monocular depth estimation to accelerate OSM data generation. The process involves selecting an image, segmenting objects, generating 3D patches, and translating them into OSM data. Testing and future work involve accuracy improvement and data integration challenges. This approach can enrich OSM, enabling diverse applications and addressing specific urban needs.",
					authors:
						"Kauê de Moraes Vestena, Federal University of Paraná\nSilvana Philippi Camboim, Federal University of Paraná\nDaniel Rodrigues dos Santos, Militar Institute of Engineering",
				},
			],
			date: "11/12/2023",
			time: "09:30 - 10:00",
			place: "Vasco Da Gama",
		},
	"global-and-regional-level-of-use-of-buildings-and-roads-prepared-by-ai-for-osm-mapping":
		{
			name: "Benjamin Herfort, Milan Fila & Radim Štampach",
			title:
				"Global and regional level of use of buildings and roads prepared by AI for OSM mapping",
			details: [
				{
					description:
						"Despite the hard work of volunteers, OpenStreetMap is still poorly mapped in many parts of the world. Using AI-assisted tools was seen as one possibility to fill data gaps. We search the actual level of AI-assisted mapping, show the overall global level and highlight differences between countries and regions and their temporal evolution. In 2021-2023, a minimum of 5.6% of buildings and 0.8% of principal roads newly created in OSM came from AI-assisted mapping workflow.",
					authors:
						"Milan Fila, M.Sc.; Department of Geography, Faculty of Science, Masaryk University, Brno, Czechia;\nRadim Štampach, Ph.D.; Department of Geography, Faculty of Science, Masaryk University, Brno, Czechia;\nBenjamin Herfort, Ph.D.; Heidelberg Institute for Geoinformation Technology, Heidelberg, Germany;",
				},
			],
			date: "11/12/2023",
			time: "10:00 - 10:30",
			place: "Vasco Da Gama",
		},
	"bikedna-a-tool-for-bicycle-infrastructure-data-network-assessment": {
		name: "Ane Rahbek Vierø",
		title:
			"BikeDNA: A Tool for Bicycle Infrastructure Data & Network Assessment",
		details: [
			{
				description:
					"We present the open-source tool BikeDNA, developed for reproducible quality assessments of bicycle infrastructure data, and tailored to the OSM data model.",
				authors:
					"Ane Rahbek Vierø, ITU Copenhagen;\nAnastassia Vybornova, ITU Copenhagen",
			},
		],
		date: "11/12/2023",
		time: "10:30 - 11:00",
		place: "Vasco Da Gama",
	},
	"towards-an-open-high-resolution-land-use-dataset-in-great-britain-comparing-and-consolidating-retail-centre-areas-from-open-data-sources":
		{
			name: "Oliver O'Brien",
			title:
				"Towards an Open High-Resolution Land Use Dataset in Great Britain - Comparing and Consolidating Retail Centre Areas from Open Data Sources",
			details: [
				{
					description:
						"This analysis shows there is considerable potential for geolocated open Energy Performance Certificate (EPCs) data to improve the designation of retail land-use areas on OpenStreetMap in Great Britain. A number of omissions are identified by comparing EPCs, a new open retail centres product from the Consumer Data Research Centre, and OpenStreetMap itself.",
					authors:
						"Oliver O'Brien; Consumer Data Research Centre, Department of Geography, University College London",
				},
			],
			date: "11/12/2023",
			time: "11:30 - 12:00",
			place: "Vasco Da Gama",
		},
	"a-contemporary-nolli-map-using-openstreetmap-data-to-represent-urban-public-spaces":
		{
			name: "Ester Scheck",
			title:
				"A Contemporary Nolli Map: Using OpenStreetMap Data to Represent Urban Public Spaces",
			details: [
				{
					description:
						"Space in cities is contested and public space is an important resource for the urban society in this context. Against the background of social justice, sufficient and fairly distributed public space in a city is to be strived for. In order to investigate the status quo of spatial distribution and availability of public spaces, this research develops a framework and Python script for identifying, categorizing and ultimately mapping public spaces using OSM data. The work is inspired by the historical Nolli map from Rome and the framework is applied to case studies in Vienna.",
					authors:
						"Ester Scheck; FH Potsdam;\nFlorian Ledermann; TU Wien;\nMarian Därk; FH Potsdam;\nAndrea Binn; TU Wien;",
				},
			],
			date: "11/12/2023",
			time: "12:00 - 12:30",
			place: "Vasco Da Gama",
		},
	"osm-science-lightning-talks": {
		name: "Lynn Khellaf, Mark Herringer, Yao Sun, Hao Li, Piotr Gramacki, Kamil Raczycki & Kacper Leśniara, & Alistair Geddes",
		title: "OSM SCIENCE LIGHTNING TALKS",
		details: [
			{
				description:
					"SPOT: A Natural Language Interface for Geospatial Searches in OSM",
				authors:
					"Lynn Khellaf; Deutsche Welle - Research and Cooperation Projects\nIpek Baris Schlicht; Deutsche Welle - Research and Cooperation Projects\nRuben Bouwmeester; Deutsche Welle - Research and Cooperation Projects\nJulia Bayer; Deutsche Welle - Research and Cooperation Projects\nTilman Wagner; Deutsche Welle - Research and Cooperation Projects",
			},
			{
				description:
					"Building a baseline of health facility data with OpenStreetMap [ONLINE]",
				authors:
					"Mark Herringer - The Global healthsites Mapping project (healthsites.io)\nLamine Ndiaye - OpenStreetmap Senegal\nAndy South - Afrimapr",
			},
			{
				description:
					"Beyond Two Dimensions: Large-Scale Building Height Mapping in OpenStreetMap via Synthetic Aperture Radar and Street-View Imagery [ONLINE]",
				authors:
					"Dr. Yao Sun; Chair of Data Science in Earth Observation, Technical University of Munich;\nDr. Hao Li; Professorship of Big Geospatial Data Management, Technical University of Munich;",
			},
			{
				description:
					"Utilising OSM data in geospatial representation learning [ONLINE]",
				authors:
					"Piotr Gramacki; Wrocław University of Science and Technology;\nKacper Leśniara; Wrocław University of Science and Technology;\nKamil Raczycki; Wrocław University of Science and Technology;\nSzymon Woźniak; Wrocław University of Science and Technology;\nPiotr Szymański; Wrocław University of Science and Technology",
			},
			{
				description:
					"Rural water point mapping with/in OSM: implications of recent research in Malawi [ONLINE]",
				authors:
					"Dr Alistair Geddes, , Geography, Division of Energy, Environment & Society, School of Humanities, Social Sciences & Law, University of Dundee, UK.",
			},
		],
		date: "11/12/2023",
		time: "12:30 - 13:00",
		place: "Vasco Da Gama",
	},
	"social-technical-and-political-transformations-in-openstreetmap": {
		name: "Susanne Schröder-Bergen",
		title:
			"Social, technical and political transformations in OpenStreetMap- From volunteered geographic information to embedding digital commons in platform capitalism",
		details: [
			{
				description:
					"OpenStreetMap has undergone many changes since its beginnings. Coming from social and digital geography, this contribution focuses on the social, technical, and political changes within the project over the past few years. As OpenStreetMap grows, new challenges emerge for the project, the data, and the community as a whole. One of those challenges arises from the growing role of institutional/commercial actors. When understood as a digital commons, OpenStreetMap is characterized as relatively resilient and independent of other interested parties, allowing the project to continue to assert itself as an alternative in the larger context of the geospatial data industry.",
				authors:
					"Susanne Schröder-Bergen; Friedrich-Alexander-Universtität, Erlangen-Nürnberg, Germany",
			},
		],
		date: "11/12/2023",
		time: "14:00 - 14:30",
		place: "Vasco Da Gama",
	},
	"a-global-and-dynamic-completeness-assessment-of-the-openstreetmap-buildings":
		{
			name: "Laurens Oostwegel",
			title:
				"A global and dynamic completeness assessment of the OpenStreetMap buildings",
			details: [
				{
					description:
						"We calculated the completeness of all OpenStreetMap buildings with a reference to Earth Observation datasets and kept it up-to-date with each change in the dataset",
					authors:
						"Oostwegel, Laurens Jozef Nicolaas; GFZ German Research Centre for Geosciences\nEvaz Zadeh, Tara; GFZ German Research Centre for Geosciences\nLingner, Lars; GFZ German Research Centre for Geosciences\nSchorlemmer, Danijel; GFZ German Research Centre for Geosciences",
				},
			],
			date: "11/12/2023",
			time: "14:30 - 15:00",
			place: "Vasco Da Gama",
		},
	"improving-the-accuracy-of-earthquake-risk-estimates-with-openstreetmap-building-data":
		{
			name: "Tara Evaz Zadeh",
			title:
				"Improving the accuracy of earthquake risk estimates with OpenStreetMap building data",
			details: [
				{
					description:
						"We improve the accuracy of earthquake loss estimation by increasing the information content of models describing the building stock. This is done using OpenStreetMap building properties (number of stories and occupancy) and results in significantly more accurate damage assessment due to better knowledge of the buildings affected by earthquakes.",
					authors:
						"Tara Evaz Zadeh; GFZ-Potsdam\nLaurens Jozef Nicolaas Oostwegel; GFZ-Potsdam\nLars Lingner; GFZ-Potsdam\nSimantini Shinde; GFZ-Potsdam\nFabrice Cotton; GFZ-Potsdam\nDanijel Schorlemmer; GFZ-Potsdam",
				},
			],
			date: "11/12/2023",
			time: "15:00 - 15:30",
			place: "Vasco Da Gama",
		},
};
