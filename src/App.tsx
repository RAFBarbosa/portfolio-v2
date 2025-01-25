import { About } from "./src/About";
import { Footer } from "./src/Footer";
import { Header } from "./src/Header";
import { Projects } from "./src/Projects";
import { Analytics } from "@vercel/analytics/react";

function App() {
	return (
		<div className="bg-neutral-700 leading-relaxed text-neutral-200 antialiased selection:bg-neutral-300 selection:text-amber-600">
			<div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-display md:px-12 md:py-16 lg:py-0 bg-neutral-700">
				<div className="lg:flex lg:justify-between lg:gap-4 min-h-screen">
					<Header />
					<main id="content" className="pt-16 lg:w-[52%] lg:py-21">
						<About />
						<Projects />
						<Analytics />
						<Footer />
					</main>
				</div>
			</div>
		</div>
	);
}

export default App;
