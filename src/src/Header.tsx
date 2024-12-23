import profileImage from "../assets/profile.png";
// import { Menu } from "./Menu";
import { Social } from "./Social";

export function Header() {
	return (
		<header
			id="header"
			className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24"
		>
			<div>
				<h1 className="text-4xl font-bold tracking-tight text-amber-300 sm:text-5xl">
					Raf Barbosa
				</h1>
				<h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
					Front End Developer
				</h2>
				<p className="mt-4 max-w-xs leading-normal">
					I build experiences for the web.
				</p>
				<div className="mt-6">
					<img
						src={profileImage}
						alt="Raf Barbosa"
						className="w-32 h-auto rounded"
					/>
				</div>
				{/* <Menu /> */}
			</div>
			<Social />
		</header>
	);
}
