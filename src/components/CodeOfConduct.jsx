import Link from "next/link";

import { Container } from "@/components/Container";

export function CodeOfConduct({ id }) {
	return (
		<section id={id} aria-label="Code of Conduct" className="py-20 sm:py-32">
			<Container>
				<h2 className="mx-auto max-w-2xl text-center font-dunbar text-4xl font-medium tracking-tighter text-sotm-blue sm:text-5xl">
					Code of Conduct
				</h2>
				<div className="mt-6 space-y-6 font-poppins text-2xl tracking-tight text-sotm-blue">
					<p>
						The State of the Map Europe organizing team is dedicated to
						providing a harassment-free conference experience for everyone,
						regardless of gender, gender identity and expression, sexual
						orientation, disability, physical appearance, body size, race, age
						or religion. We do not tolerate harassment of conference
						participants in any form. Sexual language and imagery is not
						appropriate for any conference venue, including talks.
					</p>
					<p>
						Harassment includes verbal comments that reinforce social structures
						of domination related to gender, gender identity and expression,
						sexual orientation, disability, physical appearance, body size,
						race, age, religion; sexual images in public spaces; deliberate
						intimidation; stalking; following; harassing photography or
						recording; sustained disruption of talks or other events;
						inappropriate physical contact; and unwelcome sexual attention.
						Participants asked to stop any harassing behavior are expected to
						comply immediately.
					</p>
					<p>
						Exhibitors in the expo hall, sponsor or vendor booths, or similar
						activities are also subject to the anti-harassment policy. In
						particular, exhibitors should not use sexualized images, activities,
						or other material. Booth staff (including volunteers) should not use
						sexualized clothing, or otherwise create a sexualized environment.
					</p>
					<p>
						If a participant engages in harassing behavior, the conference
						organizers may take any action they deem appropriate, including
						warning the offender or expulsion from the conference with no
						refund. If you are being harassed, notice that someone else is being
						harassed, or have any other concerns that you are unable to
						satisfactorily resolve amongst the person(s) involved, please
						contact a member of conference staff immediately. Escalation to, and
						incident reporting by a small subset of conference team leaders will
						ensure that repeat offenders do not go unnoticed.
					</p>
					<p>
						We expect participants to follow these rules at all conference
						venues and conference-related social events.
					</p>
					<p>
						You can email the State of the Map Europe organizing team with any
						concerns at:{" "}
						<Link className="font-bold" href="mailto:contact@stateofthemap.eu">
							contact@stateofthemap.eu
						</Link>
					</p>
				</div>
			</Container>
		</section>
	);
}
