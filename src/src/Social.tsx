import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Social() {
	return (
		<ul className="ml-1 mt-8 flex items-center text-2xl">
			<li className="mr-5 shrink-0">
				<a
					href="https://github.com/RAFBarbosa"
					target="_blank"
					rel="noopener noreferrer"
					className="block hover:text-cyan-200"
				>
					<FaGithub />
				</a>
			</li>
			<li className="mr-5 shrink-0">
				<a
					href="https://www.linkedin.com/in/raf-barbosa/"
					target="_blank"
					rel="noopener noreferrer"
					className="block hover:text-cyan-200"
				>
					<FaLinkedin />
				</a>
			</li>
		</ul>
	);
}
