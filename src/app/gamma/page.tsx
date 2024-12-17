import { Image } from "@/components/gamma/image";
import styles from "./gamma.module.css";

export default function Gamma() {
	return (
		<div className="bg-black text-white">
			<main>
				<div id="hero" className="px-10 bg-purple-700">
					<img src={"/gamma/gammalogo.png"} width="282" height="136" alt="Gamma" />
					<p>
						Gamma is the third official class of Michigan’s Alpha Theta Delta
						chapter. Inspired by electric imagery, purple and orange hues, and fluid
						patterns, our theme encapsulates the “new wave” nature of our class. We
						invite you to hop on the Gamma wave.
					</p>
				</div>
				<div id="members" className="px-10 py-20">
					<h2 className="text-center text-5xl mb-16">Our Members.</h2>
					<div className="grid grid-cols-4 gap-24">
						<Image src={"/gamma/amelia.jpg"} className="aspect-[3/4]" caption="Amelia Learner" />
						<Image src={"/gamma/angel.jpg"} caption="Angel Huang" />
						<Image src={"/gamma/angela.jpg"} caption="Angela Li" />
						<Image src={"/gamma/ben.jpg"} caption="Ben Neumaier" />
						<Image src={"/gamma/charlotte.jpg"} caption="Charlotte Foley" />
						<Image src={"/gamma/chloe.jpg"} caption="Chloe Powell" />
						<Image src={"/gamma/ellie.jpg"} caption="Ellie Lee" />
						<Image src={"/gamma/grant.jpg"} caption="Grant Ho" />
						<Image src={"/gamma/iris.jpg"} caption="Iris Ding" />
						<Image src={"/gamma/jack.jpg"} caption="Jack Thompson" />
						<Image src={"/gamma/jackson.jpg"} caption="Jackson Gelbard" />
						<Image src={"/gamma/jane.jpg"} caption="Jane Joyce" />
						<Image src={"/gamma/janna.jpg"} caption="Janna Jacobson" />
						<Image src={"/gamma/jon.jpg"} caption="Jon Haisfield" />
						<Image src={"/gamma/ksshiraja.jpg"} caption="Ksshiraja Bagadiaa" />
						<Image src={"/gamma/meera.jpg"} caption="Meera Agrawal" />
						<Image src={"/gamma/natalie.jpg"} caption="Natalie Koster" />
						<Image src={"/gamma/nick.jpg"} caption="Nick Pippen" />
						<Image src={"/gamma/niki.jpg"} caption="Niki Moore" />
						<Image src={"/gamma/sachin.jpg"} caption="Sachin Vijayaraj" />
						<Image src={"/gamma/sam.jpg"} caption="Sam Adkins" />
						<Image src={"/gamma/sammy.jpg"} caption="Samantha Rosenberg" />
						<Image src={"/gamma/skylar.jpg"} caption="Skylar Farah" />
						<Image src={"/gamma/summer.jpg"} caption="Summer Daniel" />
						<Image src={"/gamma/tiffany.jpg"} caption="Tiffany Chang" />
					</div>
				</div>
				<div className="px-10 py-40 bg-orange-600">
					<h2 className="text-center text-5xl">Our Merch.</h2>
					<div className="grid grid-cols-3 gap-4">
						<Image src={"/gamma/gammasweatshirt.png"} caption="Sweatshirt" />
						<Image src={"/gamma/gammasticker.jpg"} caption="Sticker" />
						<Image src={"/gamma/gammakoozie.jpg"} caption="Koozie" />
					</div>
				</div>
				<div className="h-[50vh]">
					<div id={styles.motionDemo}>HOP ON THE GAMMA WAVE.</div>
				</div>
			</main>
		</div>
	);
}
