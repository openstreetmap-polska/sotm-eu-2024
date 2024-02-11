import Link from "next/link";

import { Container } from "@/components/Container";

export function Footer2024() {
	return (
		<footer className="my-0 py-0">
			<Container>
				<div className="flex flex-col lg:items-center justify-between md:flex-row font-rubik text-lg">
					<div className="flex flex-col">
						<p className="text-black md:mt-0">
							&copy; State of the Map Europe 2024
						</p>
						<Link
							className="text-black underline"
							href="https://openstreetmap.org.pl"
						>
							OpenStreetMap Poland
						</Link>
					</div>
					<div className="flex flex-row lg:flex-col items-center justify-between gap-1 md:flex-row">
						<div className="flex flex-col">
							<Link
								className="text-black underline"
								href="https://github.com/openstreetmap-polska/sotm-eu-2024"
							>
								Repository
							</Link>
							<span className="text-black">
								Designer &nbsp;
								<Link
									href="" // TODO: add link
									className="underline"
									target="_blank"
								>
									Arsen Mosiichuk
								</Link>
							</span>
						</div>
					</div>
				</div>
			</Container>
		</footer>
	);
}
