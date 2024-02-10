import { Container } from "./Container";

export function ProgramDetail({
	id,
	name,
	title,
	details,
	date,
	time,
	place,
	secondTitle,
	secondName,
}) {
	const formattedDate = new Date(date).toLocaleString("en-GB", {
		weekday: "long",
		year: "numeric",
		month: "long",
		day: "numeric",
	});

	return (
		<Container>
			<section
				id={id}
				aria-label={id}
				className="flex flex-row-reverse flex-wrap gap-6"
			>
				<div className="flex-grow basis-3/4">
					<h2 className="my-6 font-dunbar text-2xl font-extrabold text-sotm-blue">
						{title}
					</h2>
					<h3 className="mt-6 font-dunbar text-xl font-bold tracking-tight">
						{name}
					</h3>
					{secondTitle && (
						<h2 className="my-6 font-dunbar text-2xl font-bold text-sotm-blue">
							{secondTitle}
						</h2>
					)}
					{secondName && (
						<h3 className="mt-6 font-dunbar text-xl font-bold tracking-tight">
							{secondName}
						</h3>
					)}

					<div className="mt-6 space-y-6 text-xl">
						{details.map(({ description, authors }, index) => {
							const regexAllListItems = /(\n\*.*)/g;
							const regexAllLineBreaks = /\n/g;
							const regexAllHtmlLinkTags = /<a.*?>.*?<\/a>/g;

							const formattedDescription = description
								.replace(regexAllListItems, (match) => {
									const text = match.replace("\n*", "");
									return `<li class="ml-10 my-2 font-poppins text-gray-800">${text}</li>`;
								})
								.replace(regexAllLineBreaks, "<br />")
								.replace(regexAllHtmlLinkTags, (match) => {
									return match.replace(
										/<a.*?href="(.*?)".*?>(.*?)<\/a>/,
										'<a href="$1" class="text-sotm-blue underline hover:bg-sotm-blue hover:text-sotm-yellow px-1 rounded">$2</a>',
									);
								});

							return (
								<div key={index}>
									<div
										className="font-poppins"
										dangerouslySetInnerHTML={{ __html: formattedDescription }}
									/>
									<p className="font-poppins text-sotm-blue">{authors}</p>
								</div>
							);
						})}
					</div>
				</div>
				<div className="w-52 flex-grow">
					<h3 className="my-6 bg-sotm-blue p-6 text-center font-dunbar text-xl font-bold tracking-tight text-sotm-yellow">
						{place}
					</h3>
					<div className="text-center font-dunbar font-bold">
						<time dateTime={date}>{formattedDate}</time>
					</div>
					<div className="my-3 bg-sotm-yellow-200 p-3 text-center font-poppins font-bold text-sotm-blue">
						<time time={time}>{time}</time>
					</div>
				</div>
			</section>
		</Container>
	);
}
