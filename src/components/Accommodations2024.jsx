import { Container } from "@/components/Container";
import clsx from "clsx";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

const accommodations = [
	{
		name: "Vienna House by Wyndham Andel’s",
		description: "450 PLN for single night or 500 PLN for double night.",
		url: "https://www.hrg-hotels.com/en/viennahouse/andels-lodz/",
		osm: "https://www.openstreetmap.org/way/36894066",
		address: "Ogrodowa 17",
	},
	{
		name: "Holiday Inn",
		description:
			"340 PLN for single night or 400 for double night (with breakfast).",
		url: "https://hilodz.com/en",
		osm: "https://www.openstreetmap.org/way/175927646",
		address: "Piotrkowska 229/231",
	},
	{
		name: "Hotel Tobaco",
		description:
			"309 for single night or 399 for double night — (with breakfast).",
		url: "https://hoteltobaco.pl/en/",
		osm: "https://www.openstreetmap.org/way/194189143",
		address: "Kopernika 64",
	},
	{
		name: "Puro",
		description: "20% from the price of the day",
		url: "https://purohotel.pl/en/lodz/",
		osm: "https://www.openstreetmap.org/way/657207344",
		address: "Ogrodowa 16",
	},
	{
		name: "Novotel",
		description:
			"15% from the price of the day and −50% for parking services (The title of the message must contain the slogan: H7830-RE@accor.com).",
		url: "https://all.accor.com/hotel/7830/index.en.shtml",
		osm: "https://www.openstreetmap.org/way/147534720",
		address: "Piłsudskiego 11A",
	},
	{
		name: "Ibis Centrum",
		description:
			"15% from the price of the day / −50% for parking services (The title of the message must contain the slogan: H7830-RE@accor.com).",
		url: "https://all.accor.com/hotel/3096/index.en.shtml",
		osm: "https://www.openstreetmap.org/node/3005484233",
		address: "Piłsudskiego 11",
	},
	{
		name: "B&B Łódź Centrum",
		description: "10% from the price of the day.",
		url: "https://www.hotel-bb.com/en/hotel/lodz-centrum",
		osm: "https://www.openstreetmap.org/way/466659896",
		address: "Kościuszki 16",
	},
	{
		name: "Iness Hotel",
		description: "10% from the price of the day / free parking.",
		url: "https://inesshotel.pl/en/home-english/",
		osm: "https://www.openstreetmap.org/way/153886455",
		address: "Wróblewskiego 19/23",
	},
	{
		name: "Hampton by Hilton",
		description: "10% from the price of the day.",
		url: "https://www.hilton.com/en/hotels/lcjcchx-hampton-lodz-city-center/",
		osm: "https://www.openstreetmap.org/node/10076427494",
		address: "Piotrkowska 157",
	},
	{
		name: "Stare Kino",
		description: "10% from the price of the day",
		url: "https://www.cinemahotel.pl/en/",
		osm: "https://www.openstreetmap.org/node/5752716222",
		address: "Piotrkowska 120",
	},
];

// TODO: change name and deduplicate?
function Header({ text, className, ...props }) {
	return (
		<div
			className={clsx(className ?? "", "text-orange text-2xl font-bold")}
			{...props}
		/>
	);
}

// TODO: styling
function SideNote({ text, className, ...props }) {
	return <div className={clsx(className ?? "", "")} {...props} />;
}

export function Accommodations2024({ id }) {
	return (
		<section id={id} aria-label="Accommodations" className="py-20 sm:py-32">
			<Container className="relative">
				<span className="text-orange text-5xl font-bold">Accomodation</span>
				<Header>How to get?</Header>
				<p>
					State of the Map Europe 2024 will take place in the ”Alchemium”
					building of the Łódź University of Technology.
				</p>
				<p>
					Łódź is located in the heart of Poland. There are several ways to get
					to the city: directly to Łódź by plane, or you can also fly to another
					Polish city that is close to Łódź (Warsaw, Poznań or Gdańsk) and from
					there get to Łódź by train or bus.
				</p>
				<p>
					It may be more profitable to fly to Warsaw, Poznań or Gdańsk due to
					cheaper plane tickets to these cities (lowcosters fly to these
					cities).
				</p>
				<SideNote>
					Train tickets can be purchased on the{" "}
					<Link href="https://www.intercity.pl/en/">PKP Intercity</Link> website
					or the <Link href="https://koleo.pl/en/">KOLEO</Link> website
				</SideNote>
				<Header>If you are from UK</Header>
				<p>
					Below are the following ways to get to Łódź, for people from the
					United Kingdom (from London).
				</p>
				<table>
					<thead>
						<tr>
							<th>Company</th>
							<th>Arrive at</th>
							<th>Price both ways</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Ryanair Stanstead</td>
							<td>Łódź</td>
							<td>£90</td>
						</tr>
						<tr>
							<td>British Airways</td>
							<td>Warsaw</td>
							<td>£220</td>
						</tr>
						<tr>
							<td>Lot</td>
							<td>Warsaw</td>
							<td>£300</td>
						</tr>
					</tbody>
				</table>
				{/* TODO: Seat61? https://www.seat61.com/Poland.htm#London_to_Lodz */}
				<SideNote>
					You can also ride Eurostar train to Arnhem and from there by Flixbus
					to Poland. But it doesn't seem very comfortable :)
				</SideNote>
				<Header>Hotels</Header>
				<p>
					In cooperation with the Lodz Chamber of Tourism, we have prepared a
					list of places to stay, where by using the appropriate password
					(„State of the Map”) you will receive a discount on accommodation.
				</p>
				<ul className="list-disc">
					{accommodations.map((accommodation) => (
						<li key={accommodation.name}>
							{/* TODO: Address? */}
							<Link className="underline" href={accommodation.url}>
								{accommodation.name}
							</Link>
							<Link className="underline" href={accommodation.osm}>
								{" "}
								<sup>OSM</sup>
							</Link>{" "}
							— {accommodation.description}
						</li>
					))}
				</ul>
			</Container>
		</section>
	);
}
