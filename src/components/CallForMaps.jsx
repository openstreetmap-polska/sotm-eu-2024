import { Container } from "@/components/Container";
import Link from "next/link";

export function CallForMaps({ id }) {
	return (
		<section id={id} aria-label="CallForMaps" className="py-20 sm:py-32">
			<Container>
				<h1 className="mx-auto mb-6 max-w-2xl text-center font-dunbar text-5xl font-medium tracking-tighter text-sotm-blue sm:text-5xl">
					Call for Maps
				</h1>

				<div className="mx-auto mt-6 space-y-6 font-poppins text-2xl tracking-tight text-sotm-blue">
					<h3 className="mx-auto mt-6 max-w-2xl text-center font-dunbar text-2xl font-medium tracking-tighter text-sotm-blue sm:text-3xl">
						Submit your map
					</h3>
					<p>
						A State of the Map conference would not be complete without maps!
						That is why you are invited to showcase your maps at State of the
						Map Europe. We welcome you to submit beautiful maps made of OSM
						data. You could demonstrate to the community how well your area is
						mapped, show a new map style... Everything is possible in our map
						exhibition. The only condition is that your map is mainly based on
						OSM data.
					</p>
					<h3 className="mx-auto mt-6 max-w-2xl text-center font-dunbar text-2xl font-medium tracking-tighter text-sotm-blue sm:text-3xl">
						Map Requirements
					</h3>
					<p>
						Please submit an A1-sized PDF map in high resolution. We will print
						and display it in the conference venue. If you already have a
						printed copy of your submitted map, you may take it with you to the
						conference, but make sure it does not exceed A1 size. If you want to
						showcase a digital map style, we cannot provide a screen, but please
						consider submitting screenshots and a short explanation of the
						style. Note that if the number of maps we receive is larger than the
						space available, we will make a selection.
					</p>
					<h3 className="mx-auto mt-6 max-w-2xl text-center font-dunbar text-2xl font-medium tracking-tighter text-sotm-blue sm:text-3xl">
						Submission Guidelines
					</h3>
					<p>
						Simply write a email to{" "}
						<Link className="font-bold" href="mailto:maps@stateofthemap.eu">
							maps@stateofthemap.eu
						</Link>{" "}
						with &quot;Map Submission&quot; as the subject, containing the
						following information:
					</p>
					<ul className="list-inside list-disc">
						<li>The map or a link to download it</li>
						<li>A title for your map</li>
						<li>The name(s) of author(s)</li>
						<li>A short description (max. 250 words)</li>
						<li>Whether you will bring the map or want us to print it</li>
					</ul>

					<h3 className="mx-auto mt-6 max-w-2xl text-center font-dunbar text-2xl font-medium tracking-tighter text-sotm-blue sm:text-3xl">
						Deadline
					</h3>
					<div>
						<ul className="list-inside list-disc">
							<li>September 26: Call for maps open</li>
							<li>October 18 at 12:00 GMT: Deadline for map submission</li>
							<li>November 10-12: State of the Map Europe 2023</li>
						</ul>
					</div>
				</div>
			</Container>
		</section>
	);
}
