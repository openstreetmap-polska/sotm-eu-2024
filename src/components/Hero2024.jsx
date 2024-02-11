import { Container } from "@/components/Container";
import LodzPiotrkowska from "@/images/Lodz_Piotrkowska.jpg";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

function CalendarJuly2024({ className }) {
	const weekdays = "Mo Tu We Th Fr Sa Su".split(" ");
	const dayNumbers = [
		"1 2 3 4 5 6 7".split(" "),
		"8 9 10 11 12 13 14".split(" "),
		"15 16 17 18 19 20 21".split(" "),
		"22 23 24 25 26 27 28".split(" "),
		"29 30 31".split(" "),
	];
	const daysOfConference = ["18", "19", "20", "21"];
	return (
		<div className={className}>
			<div className="flex flex-col">
				<div className="text-4xl font-bold font-rubik mb-8">July</div>
				<div className="flex">
					{weekdays.map((day) => (
						<span className="text-2xl font-bold font-rubik basis-1/7" key={day}>
							{day}
						</span>
					))}
				</div>
				{dayNumbers.map((week, i) => (
					// biome-ignore lint/suspicious/noArrayIndexKey: static array
					<div key={i} className="flex">
						{week.map((day) => (
							<span
								className={clsx(
									"text-2xl font-rubik basis-1/7",
									daysOfConference.includes(day)
										? "text-darkOrange font-bold underline"
										: "text-black",
								)}
								key={day}
							>
								{day}
							</span>
						))}
					</div>
				))}
			</div>
		</div>
	);
}

export function Hero2024({ id }) {
	return (
		<div id={id} className="relative pb-4">
			<Container className="relative flex flex-col lg:flex">
				<div className="flex flex-col lg:flex-row">
					<div className="lg:basis-8/12 text-5xl text-orange font-bold font-rubik">
						State of the Map Europe 2024
					</div>
					<div className="lg:basis-4/12 text-xl text-black font-rubik lg:ml-4">
						Organized in cooperation with the board of State of the Map and
						<Link href="https://openstreetmap.org.pl" className="underline p-1">
							OpenStreetMap&nbsp;Poland
						</Link>
					</div>
				</div>
				<div className="flex flex-col lg:flex-row my-4 lg:mb-0">
					<Image src={LodzPiotrkowska} alt="Łódź" className="lg:basis-8/12" />
					<CalendarJuly2024 className="lg:basis-4/12 my-2 lg:my-0 lg:ml-4 bg-beige shadow-xl shadow-beige rounded-xl p-4" />
				</div>
				<div className="flex flex-col lg:flex-row py-4 text-3xl text-black font-rubik font-bold">
					<div className="lg:basis-8/12">Will take place in Łódź, Poland</div>
					<div className="lg:basis-4/12">18-21 July, 2024</div>
				</div>
			</Container>
		</div>
	);
}
