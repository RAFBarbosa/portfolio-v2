import { useState, useEffect } from "react";

interface Project {
	title: string;
	description: string;
	tools: string[];
	image: string;
	link: string;
}

export function Projects() {
	const [projects, setProjects] = useState<Project[]>([]);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchProjects = async () => {
			try {
				const response = await fetch("/projects.json");
				if (!response.ok) {
					throw new Error("Failed to fetch projects");
				}
				const data = await response.json();
				setProjects(data);
			} catch (err) {
				setError("Failed to load projects. Please try again later.");
			}
		};

		fetchProjects();
	}, []);

	return (
		<section id="projects" className="mb-16 md:mb-24" aria-label="Projects">
			<div className="sticky top-0 z-20 -mx-6 mb-4 w-screen md:w-[115%] bg-neutral-700/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12">
				<h2 className="text-sm font-bold uppercase tracking-widest text-neutral-200">
					Projects
				</h2>
			</div>
			<div>
				<ul className="group/list">
					{error ? (
						<p>{error}</p>
					) : (
						projects.map((project, index) => (
							<li className="mb-12" key={index}>
								<div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
									<div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-neutral-700/70 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
									<div className="z-10 sm:order-2 sm:col-span-6">
										<h3>
											<a
												href={project.link}
												target="_blank"
												rel="noopener noreferrer"
												className="inline-flex items-baseline font-medium leading-tight text-neutral-200 hover:text-amber-300 focus-visible:text-amber-300 group/link text-base transition-all"
											>
												<span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
												<span>
													{project.title}

													<span className="ml-2 group-hover:ml-3 transition-all">
														&rarr;
													</span>
												</span>
											</a>
											<p className="mt-2 text-sm leading-normal">
												{project.description}
											</p>

											<ul className="mt-2 flex flex-wrap">
												{project.tools.map(
													(tool, idx) => (
														<li
															key={idx}
															className="mr-1.5 mt-2"
														>
															<div className="flex items-center rounded-full bg-amber-300/10 px-3 py-1 text-xs font-medium leading-5 text-amber-300">
																{tool}
															</div>
														</li>
													)
												)}
											</ul>
										</h3>
									</div>
									<img
										src={project.image}
										alt={project.title}
										loading="lazy"
										decoding="async"
										width={200}
										height={48}
										className="aspect-video object-cover rounded border-2 border-neutral-200/10 transition-all group-hover:border-amber-200/50 sm:order-1 sm:col-span-2 sm:translate-y-1"
									/>
								</div>
							</li>
						))
					)}
				</ul>
			</div>
		</section>
	);
}
