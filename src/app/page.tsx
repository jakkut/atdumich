import Link from "next/link";

export default function Home() {
	return (
		<div className="bg-black text-white">
			<main>
                <Link href="/gamma">Gamma</Link>
			</main>
		</div>
	);
}
