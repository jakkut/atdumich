import Image from "next/image";

// Shoutout shadcn/ui

const Card = ({ className, ref, ...props }: any) => (
	<div
		ref={ref}
		className={"rounded-lg border bg-card text-card-foreground shadow-sm" + " " + className}
		{...props}
	/>
);

const CardHeader = ({ ref, className, ...props }: any) => (
	<div ref={ref} className={"flex flex-col space-y-1.5 p-6" + " " + className} {...props} />
);

const CardTitle = ({ ref, className, ...props }: any) => (
	<div
		ref={ref}
		className={"text-2xl font-semibold leading-none tracking-tight" + " " + className}
		{...props}
	/>
);

const CardDescription = ({ ref, className, ...props }: any) => (
	<div ref={ref} className={"text-sm text-muted-foreground" + " " + className} {...props} />
);

const CardContent = ({ ref, className, ...props }: any) => (
	<div ref={ref} className={"p-6 pt-0" + " " + className} {...props} />
);

const CardFooter = ({ ref, className, ...props }: any) => (
	<div ref={ref} className={"flex items-center p-6 pt-0" + " " + className} {...props} />
);

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter };
