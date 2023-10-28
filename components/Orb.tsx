import clsx from "clsx";

export function OrbContainer({ children }: { children: React.ReactNode }) {
	return (
		<div className="absolute left-0 -z-10 w-screen overflow-x-clip  md:relative md:w-full md:overflow-x-visible">
			{children}
		</div>
	);
}

export function Orb({ className }: { className?: string }) {
	return (
		<div
			className={clsx(
				className,
				"overflow-clip absolute  rounded-full blur-3xl",
			)}
		/>
	);
}
