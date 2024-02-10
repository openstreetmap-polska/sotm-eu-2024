import { Container } from "@/components/Container";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

const accommodations = [
	{
		name: "Park Inn by Radisson Antwerp Berchem",
		address: "Borsbeeksebrug 34, 2600 Antwerpen",
		phone: "+32 (0)3 432 77 00",
		discount:
			'Enjoy a 10% discount on the booking rate by emailing info.berchem@parkinn.com and mentioning code "BAR-10%".',
		url: "https://www.radissonhotels.com/en-us/hotels/park-inn-antwerp-berchem",
		distance: 1.4,
		osm: "https://www.openstreetmap.org/node/7321150232",
	},
	{
		name: "Van der Valk Hotel Antwerpen",
		address: "Luitenant Lippenslaan 66, 2140 Antwerpen",
		phone: "+32 (0)3 235 91 91",
		discount:
			'Enjoy a 15% discount on the booking rate by emailing reservations@antwerpen.valk.com and mentioning that you\'re attending the event "State of the Map".',
		url: "https://www.vandervalkantwerpen.be/en",
		distance: 2.7,
		osm: "https://www.openstreetmap.org/node/7282987029",
	},
];

export function Accommodations({ id }) {
	return (
		<section id={id} aria-label="Accommodations" className="py-20 sm:py-32">
			<Container className="relative">
				<h2 className="mx-auto max-w-2xl text-center font-dunbar text-4xl font-medium tracking-tighter text-sotm-blue sm:text-5xl">
					Accommodations
				</h2>
				<div className="mt-6 space-y-6 font-poppins text-2xl tracking-tight text-sotm-blue">
					<p className="text-center">
						Discounted accommodations for State of the Map Europe 2023
					</p>
					<ul className="mx-auto max-w-4xl divide-y divide-gray-100 text-base text-sotm-blue">
						{accommodations.map((accommodation) => (
							<li
								key={accommodation.name}
								className="flex flex-col justify-between py-5 sm:flex-row"
							>
								<div className="pr-6 sm:w-1/2 sm:flex-none">
									<Link
										href={accommodation.url}
										target="_blank"
										className="min-w-0 flex-auto"
									>
										<p className="font-semibold leading-6">
											{accommodation.name}
										</p>
										<div className="mt-2 leading-5">
											<address>{accommodation.address}</address>
										</div>
										<p className="flex leading-5">{accommodation.phone}</p>
									</Link>
									<p className="mt-2">
										<Link href={accommodation.osm} target="_blank">
											Distance to BluePoint: Approximately{" "}
											{accommodation.distance} km
										</Link>
									</p>
								</div>
								<div className="flex items-center justify-between gap-x-4 sm:w-1/2 sm:flex-none">
									<div>
										<p className="leading-6">Discount:</p>
										<div className="mt-1 whitespace-pre-line leading-5">
											<ReactMarkdown>{accommodation.discount}</ReactMarkdown>
										</div>
									</div>
								</div>
							</li>
						))}
					</ul>
				</div>
			</Container>
		</section>
	);
}
