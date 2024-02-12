import Head from "next/head";

import { Container } from "@/components/Container";
import { Footer2024 } from "@/components/Footer2024";
import { Hero2024 } from "@/components/Hero2024";
import { Menu2024 } from "@/components/Menu2024";
import Antwerp from "@/images/antwerp.jpg";
import Entrance from "@/images/entrance.jpg";
import Hall from "@/images/hall.jpg";
import Logo2023 from "@/images/logos/SOTM_Blue_full_logo_black.png";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

function Header({ text, className, ...props }) {
	return (
		<div
			className={clsx(className ?? "", "text-orange text-2xl font-bold")}
			{...props}
		/>
	);
}

function AboutEvent({ id }) {
	return (
		<Container id={id}>
			<Header>About event</Header>
			<div className="flex flex-row">
				<div className="basis-8/12 flex flex-col gap-2">
					<p>
						State of the Map is an international event that takes place every
						year in various countries around the world: from Japan to Belgium.
					</p>
					<p>
						The aim of this event is to exchange experience, improve existing
						mapping practices and popularize free cartography around the world.
					</p>
					<p>
						The participants of State of the Map are not only cartography
						enthusiasts, but also developers, scientists, designers, social
						activists and other people, enterprises and institutions who are
						familiar with the topic of cartography.
					</p>
					<p>
						This year, the management of Street of the Map together with the
						Open Street Map Poland association decided to hold this year's event
						in Łódź, which is located in the very heart of Poland. The event is
						scheduled for July 18-21, 2024
					</p>
				</div>
				<div className="basis-4/12 mx-24">
					<Image
						src={Logo2023}
						height={100}
						width={100}
						alt="SotM EU 2023 logo"
						className="w-auto"
					/>
					Last year, SotM took place in Antwerp, Belgium
				</div>
			</div>
		</Container>
	);
}

function PreviousEvents({ id }) {
	return (
		<Container className="mt-12" id={id}>
			<Image
				src={Antwerp}
				width={"100%"}
				alt="Attendees at the previous event in Antwerp"
			/>
			<div className="font-bold">Sotm 2023 in Antwerp. Author: Taїs Grippa</div>
			<Header className="mt-4">Previous events</Header>
			<div className="flex flex-row">
				<div className="basis-8/12">
					The several previous editions, which took place in Antwerp (2023),
					Florence (2022) and Heidelberg (2019), had on average around 350
					participants. We expect that over 400 participants from Europe and
					around the world will take part in this year's conference, due to its
					anniversary nature and the end of problems related to pandemics.
				</div>
				<div className="basis-4/12 items-end mx-24">
					<div className="text-orange text-5xl font-extrabold">400</div>
					<div className="text-xl">
						That many participants we expect to see in July in Łódź
					</div>
				</div>
			</div>
		</Container>
	);
}

function Venue({ id }) {
	return (
		<Container id={id} className="mt-12">
			<div className="flex flex-row gap-4">
				<div className="basis-4/12">
					<Image
						src={Entrance}
						width={"100%"}
						alt="Entrance to the venue"
						className="rounded-2xl"
					/>
					<div className="font-bold text-2xl">Main entrance</div>
				</div>
				<div className="basis-8/12">
					<Image
						src={Hall}
						width={"100%"}
						alt="Main hall of the venue"
						className="rounded-2xl"
					/>
					<div className="font-bold text-2xl">Main hall</div>
				</div>
			</div>
			<Header>Venue</Header>
			<div className="flex flex-row">
				<div className="basis-8/12">
					<p>
						In this year State of the Map EU 2024 event will take place at the
						open campus of the Technical University of Łódź, in a modern,
						2022-built building called “Alchemium”. There will be a main
						auditorium for 500 people with a foyer and at least two auditoriums
						for 100 people each.
					</p>
					<p className="mt-4">
						The organizers provide space for exhibition stands to present their
						products and services and space for delegate talks. Additional
						attractive options are provided for the various sponsorship levels.
					</p>
				</div>
				<div className="basis-4/12 mx-24 underline">
					<p>Alchemium</p>
					<p>Łódź University of Technology</p>
					<p>Stefana Żeromskiego 114, Łódź</p>
				</div>
			</div>
		</Container>
	);
}

function WhatsNext({ id }) {
	return (
		<Container id={id} className="bg-beige flex flex-col mt-12 py-8">
			<div className="font-bold text-3xl">What's next?</div>
			<div className="flex flex-row">
				<div className="basis-1/2">
					<div>
						If you are interested in the event, you can buy a ticket or read the
						event program.
					</div>
				</div>
				<Link
					href={"https://pretix.eu/sotm-eu/2024/"} // TODO: use constant
					className={clsx(
						"inline-flex justify-center rounded-2xl",
						"bg-orange w-full place-items-center font-bold text-white",
						"hover:bg-sotm-yellow text-5xl mx-4 basis-1/2 py-2",
					)}
				>
					BUY TICKET
				</Link>
			</div>
		</Container>
	);
}

function Sponsors({ id }) {
	return (
		<Container id={id}>
			<Header>Sponsors</Header>
			{/*TODO: sponsors*/}
		</Container>
	);
}

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
			<Menu2024 activeItem="/index2024" />
			<main className="font-rubik">
				<Hero2024 id="hero" />
				<AboutEvent id="aboutEvent" />
				<PreviousEvents id="previousEvents" />
				<Venue id="venue" />
				<WhatsNext id="whatsNext" />
				{/*<Sponsors id="sponsors" />*/}
				{/*<AboutOsm id="openstreetmap" />*/}
				{/*<AboutSotm id="stateofthemap" />*/}
				{/*<Newsletter id="newsletter" />*/}
			</main>
			<Footer2024 />
		</>
	);
}
