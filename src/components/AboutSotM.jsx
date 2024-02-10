import { Container } from "@/components/Container";
import LogoAntwerpBlue from "@/images/icons/Antwerp_Icon_Blue.svg";
// import LogoRomeYellow from '@/images/icons/Rome_Icon_Yellow.svg'
import LogoBrusselsBlue from "@/images/icons/Brussels_Icon_Blue.svg";
// import LogoAntwerpYellow from '@/images/icons/Antwerp_Icon_Yellow.svg'
import LogoNetherlandsBlue from "@/images/icons/Netherlands_Icon_Blue.svg";
// import LogoNetherlandsYellow from '@/images/icons/Netherlands_Icon_Yellow.svg'
import LogoParisBlue from "@/images/icons/Paris_Icon_Blue.svg";
// import LogoParisYellow from '@/images/icons/Paris_Icon_Yellow.svg'
import LogoRomeBlue from "@/images/icons/Rome_Icon_Blue.svg";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
// import LogoBrusselsYellow from '@/images/icons/Brussels_Icon_Yellow.svg'

export function AboutSotm({ id }) {
	const [background, setBackground] = useState(LogoAntwerpBlue);

	useEffect(() => {
		const logos = [
			// LogoAntwerpYellow,
			// LogoBrusselsYellow,
			// LogoNetherlandsYellow,
			// LogoParisYellow,
			// LogoRomeYellow,
			LogoAntwerpBlue,
			LogoBrusselsBlue,
			LogoNetherlandsBlue,
			LogoParisBlue,
			LogoRomeBlue,
		];
		const index = Math.random() * logos.length;
		return setBackground(logos[Math.floor(index)]);
	}, []);

	return (
		<section
			id={id}
			aria-label="About State of the Map"
			className="py-20 sm:py-32"
		>
			<div className="relative">
				<div className="absolute inset-x-0 -bottom-14 -top-48 overflow-hidden bg-indigo-50">
					<Image
						className="absolute right-full top-0 -translate-x-1/2 opacity-10 sm:right-1/2 sm:translate-x-[-20%] sm:translate-y-[-15%] md:translate-x-0 lg:translate-x-[5%] lg:translate-y-[4%] xl:translate-x-[27%] xl:translate-y-[-8%]"
						src={background}
						alt=""
						width={918}
						height={1495}
						priority
						unoptimized
					/>
				</div>
				<Container className="relative">
					<h2 className="mx-auto max-w-2xl text-center font-dunbar text-4xl font-medium tracking-tighter text-sotm-blue sm:text-5xl">
						The SotM Europe event
					</h2>
					<div className="mt-6 space-y-6 font-poppins text-2xl tracking-tight text-sotm-blue">
						<p>
							The State of the Map European organizing committee, in
							collaboration with the OpenStreetMap Belgium community, is
							organizing the State of the Map Europe 2023 conference (SotM EU
							2023) taking place on November 10th – 12th in Antwerp, Belgium.
						</p>
						<p>
							State of the Map addresses and builds bridges between OSM mappers
							and community activists, open- source developers, researchers from
							universities and academic institutions, designers, cartographers,
							as well as GIS professionals from private and public institutions.
						</p>
						<p>
							This conference offers an opportunity for this diverse group of
							individuals, from various disciplines and backgrounds, to meet and
							exchange knowledge, experiences and plans for developing use and
							improvement of OSM. Around 400 attendees are expected to
							participate in this conference from Europe and from all over the
							world. The conference will be offered as a hybrid event, allowing
							additional participants to join via live- stream if they are
							unable to join in-person.
						</p>
					</div>

					<h3 className="mx-auto mt-6 max-w-2xl text-center font-dunbar text-2xl font-medium tracking-tighter text-sotm-blue sm:text-3xl">
						OSMScience 2023
					</h3>
					<div className="mt-6 space-y-6 font-poppins text-xl tracking-tight text-sotm-blue">
						<p>
							OSMScience 2023 is a meeting focused on the scientific study of
							OpenStreetMap. Its 6th edition will be part of the State of the
							Map Europe 2023 conference where a full day of sessions will be
							dedicated to scientific research about, and with, OpenStreetMap.
						</p>
						<p>
							The goal of OSMScience 2023 is to showcase the research and
							innovation of scientific investigations into OpenStreetMap, while
							at the same time providing a bridge to connect members of the
							OpenStreetMap community and the scientific community through an
							open passage to exchange ideas and opportunities for increased
							collaboration. We expect empirical, methodological, conceptual, or
							literature-review-based contributions addressing any scientific
							aspect related to OpenStreetMap, in particular, but not limited
							to, data collection, integration and quality analysis in
							OpenStreetMap; contribution patterns and the human/social
							dimensions of the project; integration of machine learning and
							applications in which OpenStreetMap takes a central role.
						</p>
						<p>
							In an effort to improve the interaction and collaboration between
							the academic and the more general OpenStreetMap communities,
							authors are invited to particularly highlight the practical
							implications or impacts of their research on the OpenStreetMap
							community at large.
						</p>
						<p className="mx-auto max-w-2xl text-center">
							More information on{" "}
							<Link
								className="font-bold"
								target="_blank"
								href="https://osmscience.github.io/OSMScience2023/"
							>
								OSMScience 2023 website
							</Link>
							!
						</p>
					</div>
				</Container>
			</div>
		</section>
	);
}
