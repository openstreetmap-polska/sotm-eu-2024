import Head from "next/head";

import { AboutOsm } from "@/components/AboutOpenStreetMap";
import { AboutSotm } from "@/components/AboutSotM";
import { Footer2024 } from "@/components/Footer2024";
import { Hero2024 } from "@/components/Hero2024";
import { Menu2024 } from "@/components/Menu2024";
import { Newsletter } from "@/components/Newsletter";
import { Sponsors } from "@/components/Sponsors";
import { Venue } from "@/components/Venue";

export default function Page() {
	return (
		<>
			<Head>
				<title>State of the Map EU 2024</title>
				<meta
					name="description"
					content="State of the Map EU 2024 is the European conference of OpenStreetMap, organised this year by the OpenStreetMap Poland community."
				/>
			</Head>
			<Menu2024 />
			<main>
				<Hero2024 id="hero" />
				{/*<Sponsors id="sponsors" />*/}
				{/*<Venue id="venue" />*/}
				{/*<AboutOsm id="openstreetmap" />*/}
				{/*<AboutSotm id="stateofthemap" />*/}
				{/*<Newsletter id="newsletter" />*/}
			</main>
			<Footer2024 />
		</>
	);
}
