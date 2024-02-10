import { DiamondIcon } from "@/components/DiamondIcon";
import { Menu } from "@/components/Menu";

export function Header() {
	return (
		<header>
			<div className="relative flex-none lg:pt-11">
				<div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center px-4 sm:justify-between sm:px-6 lg:flex-nowrap lg:px-8">
					<div className="order-first -mx-4 flex flex-auto basis-full overflow-x-auto whitespace-nowrap border-b border-blue-600/10 py-4 font-mono text-sotm-blue sm:-mx-6 lg:order-none lg:mx-0 lg:basis-auto lg:border-0 lg:py-0">
						<div className="mx-auto flex items-center gap-4 px-4">
							<p>
								<time dateTime="2023-11-10">10</time>-
								<time dateTime="2023-11-12">12 of November, 2023</time>
							</p>
							<DiamondIcon className="h-1.5 w-1.5 overflow-visible fill-current stroke-current text-sotm-yellow" />
							<p>Antwerp, Belgium</p>
						</div>
					</div>
				</div>
			</div>
			<Menu />
		</header>
	);
}
