import Head from "next/head";

import { Accommodations2024 } from "@/components/Accommodations2024";
import { Footer2024 } from "@/components/Footer2024";
import { Menu2024 } from "@/components/Menu2024";

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
			<main className="font-rubik">
				<Accommodations2024 id="accommodations" />
			</main>
			<Footer2024 />
		</>
	);
}
