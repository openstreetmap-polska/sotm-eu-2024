import { Container } from "@/components/Container";

import Link from "next/link";
import {
	BlueCell,
	EmptyCell,
	FourColumnGreyCell,
	ScientificTrackHeader,
	TableHeader,
	TimeCell,
	YellowCell,
} from "./ProgramTable";

export function Schedule({ id }) {
	return (
		<section id={id} aria-label="Schedule">
			<Container className="relative">
				<p className="font-poppins text-2xl tracking-tight text-sotm-blue">
					The conference will be packed with great talks, workshops and
					opportunities to meet and network with the OpenStreetMap community.
					Checkout our program below and have a look at the{" "}
					<Link
						className="font-bold"
						target="_blank"
						href="/pdf/SotmEU_FAQ.pdf"
					>
						State of the Map Europe 2023 - FAQs
					</Link>{" "}
					for any questions you may have.
				</p>
				<div className="w-full overflow-x-auto">
					<table className="table-fix my-20 w-full">
						<TableHeader day="1" date="Friday, November 10, 2023" />

						<tbody>
							<tr className="text-center">
								<TimeCell title="14:00 - 16:00" />
								<td
									colSpan={4}
									className="border border-sotm-yellow font-poppins text-sotm-blue"
								>
									<Link href="/program/mobile-mapping-workshop">
										<p>Mobile Mapping Workshop</p>
										<p className="font-bold">ACTIVE MOVEMENT</p>
										<p>by Andrew Hain</p>
										<p className="font-bold">
											Antwerp Berchem Station Meeting Point
										</p>
									</Link>
								</td>
							</tr>
							<tr className="text-center">
								<TimeCell title="16:00 - 16:30" />
								<FourColumnGreyCell title="Walk-in & Registration" />
							</tr>
							<tr className="text-center">
								<TimeCell title="16:30 - 17:00" />
								<YellowCell
									title="Welcome Session"
									text="by OSM BE"
									link="program/welcome-session"
								/>
								<EmptyCell />
								<EmptyCell />
								<EmptyCell />
							</tr>
							<tr className="text-center">
								<TimeCell title="17:00 - 18:00" />
								<YellowCell
									title="Meet your Mapper"
									text="by Ilya Zverev & Gregory Marler"
									link="program/meet-your-mapper"
								/>
								<EmptyCell />
								<EmptyCell />
								<EmptyCell />
							</tr>
							<tr className="text-center">
								<TimeCell title="18:00 - 20:00" />
								<FourColumnGreyCell title="Networking & Drinks" />
							</tr>
						</tbody>
					</table>
				</div>
				<div className="w-full overflow-x-auto">
					<table className="table-fix my-20 w-full">
						<TableHeader day="2" date="Saturday, November 11, 2023" />

						<tbody>
							<tr className="text-center">
								<TimeCell title="8:30 - 9:30" />
								<FourColumnGreyCell title="Walk-in & Registration" />
							</tr>

							<tr className="text-center">
								<TimeCell title="9:30 - 10:00" />
								<YellowCell
									title="Opening Session"
									text="by SotM EU Team featuring Mike Harrell"
									link="program/opening-session"
								/>
								<EmptyCell />
								<EmptyCell />
								<EmptyCell />
							</tr>
							<tr className="text-center">
								<TimeCell title="10:00 - 10:30" />
								<YellowCell
									title="Opening Keynote"
									text="by Allan Mustard"
									link="program/opening-keynote"
								/>
								<EmptyCell />
								<EmptyCell />
								<EmptyCell />
							</tr>
							<tr className="text-center">
								<TimeCell title="10:30 - 11:00" />
								<FourColumnGreyCell title="Break" />
							</tr>
							<tr className="text-center">
								<TimeCell title="11:00 - 11:30" />
								<YellowCell
									title="TALK"
									suptitle="Hiking Routes - the Past, the Present and the Future"
									text="by Sarah Hoffmann"
									link="program/hiking-routes-the-past-the-present-and-the-future"
								/>
								<YellowCell
									title="TALK"
									text="by Michael Reichert"
									suptitle="Vector tiles with the Shortbread schema"
									link="program/vector-tiles-with-the-shortbread-schema"
								/>
								<YellowCell
									rowSpan={2}
									title="WORKSHOP"
									text="by Joost Schouppe"
									suptitle="From Belgium to Europe: can European Local chapters work together and learn from each other?"
									link="program/from-belgium-to-europe-can-european-local-chapters-work-together-and-learn-from-each-other"
								/>
								<YellowCell
									rowSpan={2}
									title="WORKSHOP"
									text="by Martin Raifer"
									suptitle="Hands on iD development"
									link="program/hands-on-id-development"
								/>
							</tr>
							<tr className="text-center">
								<TimeCell title="11:30 - 12:00" />
								<YellowCell
									title="TALK"
									suptitle="Quantifying Europe’s Cycling Infrastructure Using OpenStreetMap"
									text="by Aleksander Buczyński"
									link="program/quantifying-europes-cycling-infrastructure-using-openstreetmap"
								/>
								<YellowCell
									title="TALK"
									text="by Frédéric Rodrigo"
									suptitle="Clearance: monitoring and extracting data from OSM under quality constraints"
									link="program/clearance-monitoring-and-extracting-data-from-osm-under-quality-constraints"
								/>
							</tr>
							<tr className="text-center">
								<TimeCell title="12:00 - 12:30" />
								<YellowCell
									title="TALK"
									suptitle="Does OpenStreetMap Need a Trustmark?"
									text="by Stefan Keller"
									link="program/does-openstreetmap-need-a-trustmark"
								/>
								<YellowCell
									suptitle="A hiking map created by the Club Alpino Italiano - Parma Section"
									title="TALK"
									text="by Marco Barbieri"
									link="program/a-hiking-map-created-by-the-club-alpino-italiano-parma-section"
								/>
								<YellowCell
									title="TALK"
									suptitle="Accessibility information for wheelchair users in OSM and the OnWheels app"
									text="by Robin Julien"
									link="program/accessibility-information-for-wheelchair-users-in-osm-and-the-on-wheels-app"
								/>

								<YellowCell title="LIGHTNING TALKS" />
							</tr>
						</tbody>
					</table>
				</div>
				<div className="w-full overflow-x-auto">
					<table className="table-fix my-20 w-full">
						<TableHeader day={2} date="Saturday, November 11, 2023" />
						<tbody>
							<tr className="text-center">
								<TimeCell title="12:30 - 13:30" />
								<FourColumnGreyCell title="Lunch" />
							</tr>
							<tr className="text-center">
								<TimeCell title="13:30 - 14:00" />
								<YellowCell
									title="TALK"
									text="by Pete Masters"
									suptitle="The Local Knowledge Dilemma: A Data-Driven Alert for OSM"
									link="program/the-local-knowledge-dilemma-a-data-driven-alert-for-osm"
								/>
								<YellowCell
									title="TALK"
									text="by Gregory Marler"
									suptitle="The Art of OpenStreetMap"
									link="program/the-art-of-openstreetmap"
								/>
								<YellowCell
									title="TALK"
									suptitle="OSM-Wikidata Map Framework"
									text="by Daniele Santini"
									link="program/osm-wikidata-map-framework"
								/>
								<YellowCell
									rowSpan={2}
									title="WORKSHOP"
									suptitle="Introducing the ohsomeNow stats dashboard - a workshop for measuring your impact"
									text="by Benjamin Herfort & Nicole Siggins"
									link="program/introducing-the-ohsomenow-stats-dashboard-a-workshop-for-measuring-your-impact"
								/>
							</tr>
							<tr className="text-center">
								<TimeCell title="14:00 - 14:30" />
								<YellowCell
									title="TALK"
									suptitle="Sane Limits for New Accounts"
									text="by Roland Olbricht"
									link="program/sane-limits-for-new-accounts"
								/>
								<YellowCell
									title="TALK"
									suptitle="Collecting street level pictures with centimetric geolocation at low cost"
									text="by Antoine Riche"
									link="program/collecting-street-level-pictures-with-centimetric-geolocation-at-low-cost"
								/>
								<YellowCell
									rowSpan={2}
									title="WORKSHOP"
									suptitle="Ungap the Map: Designing Moonshot Cycling Networks"
									text="by Dustin Carlino"
									link="program/ungap-the-map-designing-moonshot-cycling-networks"
								/>
							</tr>
							<tr className="text-center">
								<TimeCell title="14:30 - 15:00" />
								<YellowCell
									suptitle="OSM in Belgian train stations: welcome on board"
									title="TALK"
									text="by Julien Minet"
									link="program/osm-in-belgian-train-stations-welcome-on-board"
								/>
								<YellowCell
									suptitle="Exploring OSM-based geospatial datasets: insights from the Italian National Summary Database (DBSN)"
									title="TALK"
									text="by Alessandro Sarretta"
									link="program/exploring-osm-based-geospatial-datasets-insights-from-the-italian-national-summary-database-dbsn"
								/>
								<EmptyCell />
							</tr>
							<tr className="text-center">
								<TimeCell title="15:00 - 15:30" />
								<FourColumnGreyCell title="Break" />
							</tr>
							<tr className="text-center">
								<TimeCell title="15:30 - 16:00" />
								<YellowCell
									suptitle="Mapillary: 2 billion images and beyond"
									title="TALK"
									text="by Edoardo Neerhut"
									link="program/mapillary-2-billion-images-and-beyond"
								/>
								<YellowCell
									title="TALK"
									suptitle="Liberated Maps: Challenges & Opportunities"
									text="by Luke Seelenbinder & Bart Louwers"
									link="program/liberated-maps-challenges-opportunities"
								/>
								<YellowCell
									rowSpan={2}
									suptitle="How to be an OSM Ambassador: insights into building your community through storytelling"
									title="WORKSHOP"
									text="by Courtney Williamson & Steve Coast"
									link="program/how-to-be-an-osm-ambassador-insights-into-building-your-community-through-storytelling"
								/>
								<YellowCell
									rowSpan={2}
									suptitle="How to put an entire country in a container: transportable OpenStreetMap data integration into Postgis using docker"
									title="WORKSHOP"
									text="by Benjamin Deswysen"
									link="program/how-to-put-an-entire-country-in-a-container-transportable-openstreetmap-data-integration-into-postgis-using-docker"
								/>
							</tr>
							<tr className="text-center">
								<TimeCell title="16:00 - 16:30" />
								<YellowCell
									rowSpan={2}
									suptitle="Panoramax: the full FLOSS alternative for your ground level imagery"
									title="EXTENDED TALK"
									text="by Christian Quest"
									link="program/panoramax-the-full-floss-alternative-for-your-ground-level-imagery"
								/>
								<YellowCell
									rowSpan={2}
									suptitle="Modern osm2pgsql tricks"
									title="EXTENDED TALK"
									text="by Jochen Topf & Paul Norman"
									link="program/modern-osm2pgsql-tricks"
								/>
							</tr>
							<tr className="text-center">
								<TimeCell title="16:30 - 17:00" />
								<EmptyCell />
								<YellowCell title="LIGHTNING TALKS" />
							</tr>
							<tr className="text-center">
								<TimeCell title="18:30 - 22:30" />
								<FourColumnGreyCell
									title="Social Night"
									text="Balls and Glory - Theaterplein 1 naast Stadsschouwburg, Antwerpen"
								/>
							</tr>
						</tbody>
					</table>
				</div>
				<div className="w-full overflow-x-auto">
					{" "}
					<table className="table-fix my-20 w-full">
						<TableHeader
							hasScientificTrack
							day={3}
							date="Sunday, November 12, 2023"
						/>
						<tbody>
							<tr className="text-center">
								<TimeCell title="8:30 - 9:30" />
								<FourColumnGreyCell title="Walk-in & Registration" />
							</tr>
							<tr className="text-center">
								<TimeCell rowSpan={2} title="9:00 - 9:30" />
								<EmptyCell rowSpan={2} />
								<EmptyCell rowSpan={2} />
								<EmptyCell rowSpan={2} />
								<YellowCell
									title="Welcome & Introduction to OSM Science 2023"
									text="by OSM Science 2023 Scientific Committee"
									link="program/welcome-introduction-to-osm-science-2023osm-science-lightning-talks"
								/>
							</tr>
							<tr className="text-center">
								<YellowCell
									title=" OSM SCIENCE LIGHTNING TALKS"
									text="by Reid Passmore, Edson Augusto Melanda, Francis Andorful & Beatrice Olivari"
									link="program/welcome-introduction-to-osm-science-2023osm-science-lightning-talks"
								/>
							</tr>
							<tr className="text-center">
								<TimeCell title="9:30 - 10:00" />
								<YellowCell
									suptitle="Maintaining OpenStreetMap.org"
									title="TALK"
									text="by Andy Allan"
									link="program/maintaining-openstreetmap-org"
								/>
								<YellowCell
									suptitle="Nominatim on your laptop"
									title="TALK"
									text="by Sarah Hoffmann"
									link="program/nominatim-on-your-laptop"
								/>
								<YellowCell
									rowSpan={2}
									suptitle="Using OpenStreetMap for Humanitarian Purposes - and introduction to the HOT Tasking Manager"
									title="WORKSHOP"
									text="by Nicole Siggins"
									link="program/using-openstreetmap-for-humanitarian-purposes-and-introduction-to-the-hot-tasking-manager"
								/>
								<YellowCell
									suptitle="Fostering OSM’s Micromapping Through Combined Use of Artificial Intelligence and Street-View Imagery"
									title="TALK"
									text="by Kauê de Moraes Vestena"
									link="program/fostering-osms-micromapping-through-combined-use-of-artificial-intelligence-and-street-view-imagery"
								/>
							</tr>
							<tr className="text-center">
								<TimeCell title="10:00 - 10:30" />
								<YellowCell
									suptitle="OpenStreetMap and Overture: The case for collaboration"
									title="TALK"
									text="by Marc Prioleau"
									link="program/openstreetmap-and-overture-the-case-for-collaboration"
								/>
								<YellowCell
									rowSpan={2}
									suptitle="Stadia x Stamen: A New Era for Stamen Map Tiles"
									title="EXTENDED TALK"
									text="by Luke Seelenbinder & Stephanie May"
									link="program/stadia-x-stamen-a-new-era-for-stamen-map-tiles"
								/>
								<YellowCell
									suptitle="Global and regional level of use of buildings and roads prepared by AI for OSM mapping"
									title="TALK"
									text="by Benjamin Herfort, Milan Fila & Radim Štampach"
									link="program/global-and-regional-level-of-use-of-buildings-and-roads-prepared-by-ai-for-osm-mapping"
								/>
							</tr>
							<tr className="text-center">
								<TimeCell title="10:30 - 11:00" />
								<YellowCell
									suptitle="OpenStreetMap Foundation's budget and expenditures"
									title="TALK"
									text="by Roland Olbricht"
									link="program/openstreetmap-foundations-budget-and-expenditures"
								/>
								<YellowCell title="LIGHTNING TALKS" />
								<YellowCell
									suptitle="BikeDNA: A Tool for Bicycle Infrastructure Data & Network Assessment"
									title="TALK"
									text="by Ane Rahbek Vierø"
									link="program/bikedna-a-tool-for-bicycle-infrastructure-data-network-assessment"
								/>
							</tr>
							<tr className="text-center">
								<TimeCell title="11:00 - 11:30" />
								<FourColumnGreyCell title="Break" />
							</tr>
							<tr className="text-center">
								<TimeCell title="11:30 - 12:00" />
								<YellowCell
									suptitle="OpenStreetMap (almost) at 20: Reflections and Future Predictions"
									title="TALK"
									text="by Steve Coast"
									link="program/openstreetmap-almost-at-20-reflections-and-future-predictions"
								/>
								<YellowCell
									suptitle="Working together for a more coherent integration of EuroVelo routes on OpenStreetMap"
									title="TALK"
									text="by Florence Grégoire"
									link="program/working-together-for-a-more-coherent-integration-of-eurovelo-routes-on-openstreetmap"
								/>
								<YellowCell
									rowSpan={2}
									suptitle="Mapping Pedestrian Network Accessibility on OpenStreetMap"
									title="WORKSHOP"
									text="by Kauê de Moraes Vestena"
									link="program/mapping-pedestrian-network-accessibility-on-openstreetmap"
								/>
								<YellowCell
									suptitle="Towards an Open High-Resolution Land Use Dataset in Great Britain - Comparing and Consolidating Retail Centre Areas from Open Data Sources"
									title="TALK"
									text="by Oliver O'Brien"
									link="program/towards-an-open-high-resolution-land-use-dataset-in-great-britain-comparing-and-consolidating-retail-centre-areas-from-open-data-sources"
								/>
							</tr>
							<tr className="text-center">
								<TimeCell title="12:00 - 12:30" />
								<YellowCell
									suptitle="OSMF Board AMA"
									title="EXTENDED TALK"
									text="by OSMF Board"
									rowSpan={2}
									link="program/osmf-board-ama"
								/>
								<YellowCell
									suptitle="UN Maps Learning Hub: a multi-lingual educational platform on OSM"
									title="TALK"
									text="by Rachele Amerini"
									link="program/un-maps-learning-hub-a-multi-lingual-educational-platform-on-osm"
								/>
								<YellowCell
									suptitle="A Contemporary Nolli Map: Using OpenStreetMap Data to Represent Urban Public Spaces"
									title="TALK"
									text="by Ester Scheck"
									link="program/a-contemporary-nolli-map-using-openstreetmap-data-to-represent-urban-public-spaces"
								/>
							</tr>
							<tr className="text-center">
								<TimeCell title="12:30 - 13:00" />
								<YellowCell
									suptitle="Utilizing Crowdsourced Mapping to Enhance Food Security Among Lower OMO Agro-Pastoralists in Ethiopia"
									title="TALK"
									text="by Binyam Dele"
									link="program/utilizing-crowdsourced-mapping-to-enhance-food-security-among-lower-omo-agro-pastoralists-in-ethiopia"
								/>
								<EmptyCell />
								<YellowCell
									title="OSM SCIENCE LIGHTNING TALKS"
									text="by Lynn Khellaf, Mark Herringer, Yao Sun, Hao Li, Piotr Gramacki, Kamil Raczycki & Kacper Leśniara, & Alistair Geddes"
									link="program/osm-science-lightning-talks"
								/>
							</tr>
						</tbody>
					</table>
				</div>
				<div className="w-full overflow-x-auto">
					{" "}
					<table className="table-fix my-20 w-full">
						<TableHeader
							hasScientificTrack
							day={3}
							date="Sunday, November 12, 2023"
						/>
						<tbody>
							<tr className="text-center">
								<TimeCell title="13:00 - 14:00" />
								<FourColumnGreyCell title="Lunch" />
							</tr>
							<tr className="text-center">
								<TimeCell title="14:00 - 14:30" />
								<YellowCell
									suptitle="Points of Interest Anyone?"
									title="TALK"
									text="by Ilya Zverev"
									link="program/points-of-interest-anyone"
								/>
								<YellowCell
									suptitle="Ramani-Maps: a new Android Compose library for Mapbox and MapLibre"
									title="TALK"
									text="by Jonas Vautherin"
									link="program/ramani-maps-a-new-android-compose-library-for-mapbox-and-maplibre"
								/>
								<YellowCell
									suptitle="MapComplete - progress and presenting MapComplete Studio"
									title="WORKSHOP"
									text="by Pieter Vander Vennet"
									rowSpan={2}
									link="program/mapcomplete-progress-and-presenting-mapcomplete-studio"
								/>
								<YellowCell
									suptitle="Social, technical and political transformations in OpenStreetMap- From volunteered geographic information to embedding digital commons in platform capitalism"
									title="TALK"
									text="by Susanne Schröder-Bergen"
									link="program/social-technical-and-political-transformations-in-openstreetmap-from-volunteered-geographic-information-to-embedding-digital-commons-in-platform-capitalism"
								/>
							</tr>
							<tr className="text-center">
								<TimeCell title="14:30 - 15:00" />
								<YellowCell
									suptitle="10 years of power infrastructure mapping: what's next?"
									title="EXTENDED TALK"
									text="by François Lacombe"
									rowSpan={2}
									link="program/10-years-of-power-infrastructure-mapping-whats-next"
								/>
								<YellowCell
									suptitle="Exploring taginfo"
									title="TALK"
									text="by Jochen Topf"
									link="program/exploring-taginfo"
								/>

								<YellowCell
									suptitle="A global and dynamic completeness assessment of the OpenStreetMap buildings"
									title="TALK"
									text="by Laurens Oostwegel"
									link="program/a-global-and-dynamic-completeness-assessment-of-the-openstreetmap-buildings"
								/>
							</tr>
							<tr className="text-center">
								<TimeCell title="15:00 - 15:30" />
								<YellowCell
									suptitle="Mapy.cz – digital traditional hiking map of the whole World"
									title="TALK"
									text="by Jakub Zmrzlik"
									link="program/mapy-cz-digital-traditional-hiking-map-of-the-whole-world"
								/>
								<YellowCell title="LIGHTNING TALKS" />
								<YellowCell
									suptitle="Improving the accuracy of earthquake risk estimates with OpenStreetMap building data"
									title="TALK"
									text="by Tara Evaz Zadeh"
									link="program/improving-the-accuracy-of-earthquake-risk-estimates-with-openstreetmap-building-data"
								/>
							</tr>
							<tr className="text-center">
								<TimeCell title="15:30 - 16:00" />
								<FourColumnGreyCell title="Break" />
							</tr>
							<tr className="text-center">
								<TimeCell title="16:00 - 17:00" />
								<YellowCell
									title="Closing Session"
									text="by SotM EU Team"
									link="program/closing-session"
								/>
								<EmptyCell />
								<EmptyCell />
								<EmptyCell />
							</tr>
						</tbody>
					</table>
				</div>
			</Container>
		</section>
	);
}
