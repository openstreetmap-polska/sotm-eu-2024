import clsx from "clsx";
import Link from "next/link";

export function Button({ href, className, ...props }) {
	className = clsx(
		"inline-flex justify-center rounded-2xl bg-sotm-blue p-4 text-base font-semibold text-sotm-yellow hover:bg-sotm-yellow hover:text-sotm-blue focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sotm-blue active:text-white/70",
		className,
	);

	return <Link href={href} className={className} {...props} />;
}
