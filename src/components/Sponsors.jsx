import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/Container";
import logoEsri from "@/images/sponsors/esri.png";
import logoGeofabrik from "@/images/sponsors/geofabrik.png";
import logoGeoPostcodes from "@/images/sponsors/geopostcodes.jpg";
import logoGrab from "@/images/sponsors/grab.png";
import logoHere from "@/images/sponsors/here.svg";
import logoMapbox from "@/images/sponsors/mapbox.svg";
import logoMeta from "@/images/sponsors/meta.svg";
import logoMicrosoft from "@/images/sponsors/microsoft.png";
import logoNextBillion from "@/images/sponsors/nextbillionai.png";
import logoNgi from "@/images/sponsors/ngi.png";
import logoOverture from "@/images/sponsors/overture.png";
import logoTomTom from "@/images/sponsors/tomtom.svg";
import logoYm from "@/images/sponsors/youthmappers.png";

const platinum = [{ name: "TomTom", logo: logoTomTom }];

const organizingPartner = [
	{ name: "TomTom", logo: logoTomTom, website: "https://www.tomtom.com" },
];

const supporter = [
	{ name: "Open Cage", website: "https://opencagedata.com/" },
	{ name: "ANYWAYS", website: "https://www.anyways.eu/" },
	{ name: "Stoomlink", website: "https://stoomlink.com/" },
	{ name: "Champs Libres", website: "https://www.champs-libres.coop/" },
	{ name: "GIM", website: "https://www.gim.be/nl" },
	{ name: "Geo-6", website: "https://geo6.be/en/" },
	{ name: "Nazka Mapps", website: "https://www.nazka.be/" },
	{ name: "Geoapify", website: "https://www.geoapify.com/" },
	{
		name: "Toerisme Vlaanderen",
		website: "https://www.toerismevlaanderen.be/",
	},
];

const gold = [
	{
		name: "Meta",
		logo: logoMeta,
		website: "https://about.meta.com/",
		width: 400,
	},
	{ name: "ESRI", logo: logoEsri, website: "https://esri.com/", width: 300 },
];

const silver = [
	{
		name: "Overture Maps",
		logo: logoOverture,
		website: "https://overturemaps.org/",
		width: 350,
	},
	{
		name: "Microsoft",
		logo: logoMicrosoft,
		website: "https://www.microsoft.com/",
		width: 350,
	},
	{
		name: "IGN-NGI",
		logo: logoNgi,
		website: "https://www.ngi.be/website/",
		width: 350,
	},
];

const bronze = [
	{
		name: "HERE",
		logo: logoHere,
		website: "https://www.here.com/",
		width: 100,
	},
	{
		name: "Geofabrik",
		logo: logoGeofabrik,
		website: "https://www.geofabrik.de/",
		width: 160,
	},
	{
		name: "GeoPostcodes",
		logo: logoGeoPostcodes,
		website: "https://www.geopostcodes.com/",
		width: 200,
	},
];

const pastSponsors = [
	{ name: "Next Billion", logo: logoNextBillion },
	{ name: "ESRI", logo: logoEsri },
	{ name: "Grab", logo: logoGrab },
	{ name: "Microsoft", logo: logoMicrosoft },
	{ name: "Meta", logo: logoMeta },
	{ name: "Youth Mappers", logo: logoYm },
	{ name: "Mapbox", logo: logoMapbox },
];

export function Sponsors({ id }) {
	return (
		<section id={id} aria-label="Sponsors" className="py-20 sm:py-32">
			<Container>
				<h2 className="mx-auto max-w-2xl text-center font-dunbar text-4xl font-medium tracking-tighter text-sotm-blue sm:text-5xl">
					Our sponsors
				</h2>
				<div className="mx-auto mt-6 space-y-6 text-center text-2xl tracking-tight text-sotm-blue">
					Want to sponsor too? Check{" "}
					<Link
						className="font-bold"
						target="_blank"
						href="/pdf/SotmEU_Sponsorship_Packet.pdf"
					>
						here
					</Link>{" "}
					for more info!
				</div>
				<h3 className="mx-auto max-w-2xl pt-8 text-center font-dunbar text-4xl font-semibold tracking-tight text-sotm-blue">
					Platinum
				</h3>
				{/* <div className="mx-auto mt-8 grid max-w-max grid-cols-1 place-content-center gap-x-32 gap-y-12 sm:grid-cols-1 md:gap-x-16 lg:gap-x-32">
          {platinum.map((sponsor) => (
            <div
              key={sponsor.name}
              className="flex items-center justify-center"
            >
              <Image src={sponsor.logo} alt={sponsor.name} sizes="(max-width: 250px) 100vw" unoptimized />
            </div>
          ))}
        </div> */}
				<div className="mx-auto max-w-2xl pt-8 text-center font-dunbar font-semibold tracking-tight text-sotm-blue">
					Your logo here? Check the{" "}
					<Link
						className="font-bold"
						target="_blank"
						href="/pdf/SotmEU_Sponsorship_Packet.pdf"
					>
						sponsorship package
					</Link>
					!
				</div>
				<h3 className="mx-auto max-w-2xl pt-8 text-center font-dunbar text-3xl font-semibold tracking-tight text-sotm-blue">
					Gold
				</h3>
				<div className="mx-auto mt-8 grid max-w-max grid-cols-1 place-content-center gap-x-32 gap-y-12 sm:grid-cols-2 md:gap-x-16 lg:gap-x-32">
					{gold.map((sponsor) => (
						<div
							key={sponsor.name}
							className="flex items-center justify-center"
						>
							<Link target="_blank" href={sponsor.website}>
								<Image
									src={sponsor.logo}
									alt={sponsor.name}
									sizes="(max-width: 150px) 100vw"
									unoptimized
									width={sponsor.width}
								/>
							</Link>
						</div>
					))}
				</div>
				<h3 className="mx-auto max-w-2xl pt-8 text-center font-dunbar text-2xl font-semibold tracking-tight text-sotm-blue">
					Silver
				</h3>
				<div className="mx-auto mt-8 grid max-w-max grid-cols-1 place-content-center gap-x-32 gap-y-12 sm:grid-cols-3 md:gap-x-16 lg:gap-x-32">
					{silver.map((sponsor) => (
						<div
							key={sponsor.name}
							className="flex items-center justify-center"
						>
							<Link target="_blank" href={sponsor.website}>
								<Image
									src={sponsor.logo}
									alt={sponsor.name}
									sizes="(max-width: 150px) 100vw"
									unoptimized
									width={sponsor.width}
								/>
							</Link>
						</div>
					))}
				</div>
				<h3 className="text-1xl mx-auto max-w-2xl pt-8 text-center font-dunbar font-semibold tracking-tight text-sotm-blue">
					Bronze
				</h3>
				<div className="mx-auto mt-8 grid max-w-max grid-cols-1 place-content-center gap-x-32 gap-y-12 sm:grid-cols-3 md:gap-x-16 lg:gap-x-32">
					{bronze.map((sponsor) => (
						<div
							key={sponsor.name}
							className="flex items-center justify-center"
						>
							<Link target="_blank" href={sponsor.website}>
								<Image
									src={sponsor.logo}
									alt={sponsor.name}
									sizes="(max-width: 150px) 100vw"
									unoptimized
									width={sponsor.width}
								/>
							</Link>
						</div>
					))}
				</div>
				<h3 className="text-1xl mx-auto max-w-2xl pt-8 text-center font-dunbar font-semibold tracking-tight text-sotm-blue">
					Supporter
				</h3>
				<div className="mx-auto mt-8 grid max-w-max grid-cols-1 place-content-center gap-x-32 gap-y-12 text-sotm-blue sm:grid-cols-4 md:gap-x-16  lg:gap-x-32">
					{supporter.map((sponsor) => (
						<div
							key={sponsor.name}
							className="flex items-center justify-center"
						>
							<Link target="_blank" href={sponsor.website}>
								{sponsor.name}
							</Link>
						</div>
					))}
				</div>
				<h3 className="mx-auto max-w-2xl pt-8 text-center font-dunbar text-2xl font-semibold tracking-tight text-sotm-blue">
					Our organizing partner
				</h3>
				<div className="mx-auto mt-8 grid max-w-max grid-cols-1 place-content-center gap-x-32 gap-y-12 sm:grid-cols-1 md:gap-x-16 lg:gap-x-32">
					{organizingPartner.map((sponsor) => (
						<div
							key={sponsor.name}
							className="flex items-center justify-center"
						>
							<Link target="_blank" href={sponsor.website}>
								<Image
									src={sponsor.logo}
									alt={sponsor.name}
									sizes="(max-width: 250px) 100vw"
									unoptimized
									height={80}
								/>
							</Link>
						</div>
					))}
				</div>
				<div className="mx-auto max-w-2xl pt-8 text-center font-dunbar font-semibold tracking-tight text-sotm-blue">
					TomTom has supported this conference from the beginning as a
					production partner in collaboration with OpenStreetMap Belgium.
				</div>
				{/* <h3 className="mx-auto max-w-2xl text-center font-dunbar text-2xl font-semibold tracking-tight text-sotm-blue pt-8">
          Some of the past State of the Map sponsors
        </h3>
        <div className="mx-auto mt-20 grid max-w-max grid-cols-1 place-content-center gap-x-32 gap-y-12 sm:grid-cols-6 md:gap-x-16 lg:gap-x-32">
          {pastSponsors.map((sponsor) => (
            <div
              key={sponsor.name}
              className="flex items-center justify-center"
            >
              <Image src={sponsor.logo} alt={sponsor.name} sizes="(max-width: 50px) 100vw" unoptimized />
            </div>
          ))}
        </div> */}
			</Container>
		</section>
	);
}
