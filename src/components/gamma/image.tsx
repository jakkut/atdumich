// Shoutout shadcn/ui

const Image = ({ caption, className, ...props }: any) => (
	<div>
		<img className={"w-full mb-4" + " " + className} {...props} />
		<div className="text-2xl text-center">
            {caption}
        </div>
	</div>
);

export { Image };
