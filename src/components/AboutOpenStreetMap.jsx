import { Container } from "@/components/Container";

export function AboutOsm({ id }) {
	return (
		<section
			id={id}
			aria-label="About OpenStreetMap"
			className="py-20 sm:py-32"
		>
			<Container>
				<h2 className="mx-auto max-w-2xl text-center font-dunbar text-4xl font-medium tracking-tighter text-sotm-blue sm:text-5xl">
					About OpenStreetMap
				</h2>
				<div className="mt-6 space-y-6 font-poppins text-2xl tracking-tight text-sotm-blue">
					<p>
						Founded in 2004, the OpenStreetMap community enables millions of
						individuals to contribute up to date information about their local
						surroundings and neighborhoods.
					</p>
					<p>
						OpenStreetMap makes geospatial data available to everyone, for free,
						under an open license. It has revolutionized the way we see, use and
						sell mapping data and services. State of the Map enables this
						community to keep up to date with the ever-changing geospatial
						industry by providing opportunities to meet the wider community of
						software developers, volunteers and users.
					</p>
				</div>
			</Container>
		</section>
	);
}
