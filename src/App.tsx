import React from 'react'
import { BlockyLink } from './components/blockyLink.tsx'
import { Project } from './components/Project'

export function App() {
	return (
		<div className="w-screen flex items-center justify-center overflow-x-hidden text-slate-950 font-mono font-medium bg-zinc-200 p-4">
			<div className="container m-4 min-h-svh lg:w-3/6 mt-20 sm:mt-16">
				<header>
					<h1 className="text-indigo-950 font-semibold text-6xl">
						<span className="inline-block">Hello,&nbsp;</span>
						<span className="inline-block">I am&nbsp;</span>
						<span className="inline-block underline">Lucas</span>!
					</h1>
				</header>
				<main className="my-12 flex flex-col sm:flex-row">
					<img
						height={208}
						width={208}
						className="w-52 ml-6 rounded-full border-indigo-950 border-4"
						src="https://avatars.githubusercontent.com/u/57202598?s=400&u=07d28aa77c08dcef79364a50831a494c1b16fecf&v=4"
						alt="My profile"
					/>
					<div className="m-4 md:ml-6 h-2/6">
						<p className="text-slate-900">
							I am a 19 years old student, looking for experience and self
							development.
						</p>
						<address className="mt-12">
							<div className="flex flex-col md:flex-row">
								<div className="mr-2">
									<BlockyLink href="https://github.com/Coffee-for-Cats">
										Github
									</BlockyLink>
								</div>
								<div className="mr-2 mt-2 md:mt-0">
									<BlockyLink href="https://www.linkedin.com/in/lucas-schwalm-silva/">
										LinkedIn
									</BlockyLink>
								</div>
							</div>
						</address>
					</div>
				</main>

				<footer className="leading-7 mb-12 p-px">
					<h2 className="text-indigo-950 text-2xl font-semibold mt-12">
						Technologies
					</h2>
					{/* Techonologies Images */}
					<div className="flex">
						<img
							className="w-8 mr-3"
							alt="typescript"
							src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
						/>
						<img
							className="w-8 mr-3"
							alt="golang"
							src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg"
						/>
						<img
							className="w-8 mr-3"
							alt="postgres"
							src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"
						/>
						<img
							className="w-8 mr-3"
							alt="react"
							src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
						/>
						<img
							className="w-8 mr-3"
							alt="tailwindcss"
							src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
						/>
					</div>

					<h2 className="text-indigo-950 text-2xl font-semibold mt-12">
						Projects
					</h2>
					<Project
						link="https://github.com/Coffee-for-Cats/golang-quizzes"
						name="Golang Quizzes"
						techs="Go, Postgres, Docker Compose"
						desc="A golang server, implementing a quiz application with authentication."
					/>
					<Project
						link="https://www.uergs.edu.br/pro-reitoria-de-pesquisa-e-pos-graduacao-desenvolve-sistema-proprio-de-submissao-de-projetos-de-pesquisa"
						name="SSP UERGS"
						techs="PHP, JS, Bootstrap"
						desc="A Project Submission System for master's students. I am an active
			contributor and scholarship holder for the system."
					/>
					<Project
						link="https://github.com/Coffee-for-Cats/kes-simulator"
						name="K&S Simulator"
						techs="TS, ASM"
						desc="A Knob and Switch simulator, often used for teaching assembly; built
						to improve usuability and acessibility for my university."
					/>
					<div className="flex flex-col float-right items-end mt-12">
						<a
							className="float-right text-indigo-800 underline block"
							href="mailto:lucas-silva06@uergs.edu.br"
						>
							lucas-silva06@uergs.edu.br
						</a>
						<a
							className="float-right text-indigo-800 underline mt-6"
							href="mailto:lucas.schwalm.silva@gmail.com"
						>
							lucas.schwalm.silva@gmail.com
						</a>
					</div>
				</footer>
			</div>
		</div>
	)
}
