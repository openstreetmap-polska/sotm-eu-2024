import Link from "next/link";

import { Container } from "@/components/Container";

export function Newsletter({ id }) {
	return (
		<section id={id} aria-label="Newsletter" className="py-20 sm:py-32">
			<Container>
				<h2 className="mx-auto max-w-2xl text-center font-dunbar text-4xl font-medium tracking-tighter text-sotm-blue sm:text-5xl">
					Stay up to date
				</h2>
				<div className="mx-auto mt-6 space-y-6 text-center font-poppins text-2xl tracking-tight text-sotm-blue">
					<p>
						Get updates on all of our events and be the first to get notified
						when tickets go on sale.
					</p>
					<p>
						<Link
							target="_blank"
							href="https://mailchi.mp/c799b1ff4844/stay-updated-for-sotm-eu-2023"
						>
							Sign up <span className="font-bold">here</span> for updates
						</Link>
						!
					</p>
				</div>
			</Container>
		</section>
	);
}
