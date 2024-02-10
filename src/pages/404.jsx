import { Container } from "@/components/Container";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import Head from "next/head";

export default function Page() {
	return (
		<>
			<Head>
				<title>State of the Map EU 2023</title>
				<meta
					name="description"
					content="State of the Map EU 2023 is the European conference of OpenStreetMap, organised this year by the OpenStreetMap Belgium community."
				/>
			</Head>
			<Header />
			<main>
				<section aria-label="Page not found" className="py-20 sm:py-32">
					<Container>
						<h2 className="mx-auto max-w-2xl text-center font-dunbar text-5xl font-extrabold tracking-tighter text-sotm-blue">
							Page not found
						</h2>
						<div className="mt-6 space-y-6 text-center font-poppins text-2xl tracking-tight text-sotm-blue">
							<p>
								The page you are looking for does not exist. Please check the
								URL and try again.
							</p>
						</div>
					</Container>
				</section>
			</main>
			<Footer />
		</>
	);
}
