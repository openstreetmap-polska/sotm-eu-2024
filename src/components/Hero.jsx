import { Container } from "@/components/Container";
import Logo from "@/images/logos/SOTM_Blue_full_logo_black.png";
import Image from "next/image";

export function Hero({ id }) {
	return (
		<div id={id} className="relative pb-20">
			<Container className="relative">
				<div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
					<h1 className="font-poppins text-5xl font-bold tracking-tighter text-sotm-blue sm:text-7xl">
						{/* <span className="sr-only">State of the Map EU 2023 - </span>A design conference for the dark side. */}
						<Image
							src={Logo}
							width={500}
							height={500}
							alt="State of the Map EU 2023"
							className="h-auto w-full"
						/>
					</h1>
					<div className="mt-6 space-y-6 font-poppins text-2xl tracking-tight text-sotm-blue">
						<p>
							This year’s State of the Map Europe Conference (SotM EU), taking
							place in Belgium, will bring together the brightest and most
							active members of the OpenStreetMap mapping and developing
							community for a detailed exchange of results and ideas that
							support the continued success of the various initiatives by
							strengthening the ongoing projects and collaboration.
						</p>
					</div>
					<dl className="mt-10 grid grid-cols-2 gap-x-10 gap-y-6 sm:mt-16 sm:gap-x-16 sm:gap-y-10 sm:text-center lg:auto-cols-auto lg:grid-flow-col lg:grid-cols-none lg:justify-start lg:text-left">
						{[
							// ['Speakers', '18'],
							["People Attending", "400-500"],
							["Venue", "BluePoint"],
							["Location", "Antwerp, Belgium"],
						].map(([name, value]) => (
							<div key={name}>
								<dt className="font-mono text-sotm-blue">{name}</dt>
								<dd className="mt-0.5 text-2xl font-semibold tracking-tight text-sotm-yellow">
									{value}
								</dd>
							</div>
						))}
					</dl>
				</div>
			</Container>
		</div>
	);
}
