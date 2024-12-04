import React from 'react'
import { BlockyLink } from './blockyLink'

export function App() {
	return (
		<div className="w-screen h-screen flex items-center justify-center text-slate-950 font-mono font-medium bg-zinc-200 overflow-x-hidden">
			<div className="container m-4 min-h-svh sm:w-5/6 lg:w-3/6">
				<header className="mt-24">
					<h1 className="text-indigo-950 font-semibold text-6xl">
						Hello, I am Lucas!
					</h1>
				</header>
				<main className="my-12 m-6 flex flex-col sm:flex-row">
					<img
						className="w-52 rounded-full border-indigo-950 border-4"
						src="https://avatars.githubusercontent.com/u/57202598?s=400&u=07d28aa77c08dcef79364a50831a494c1b16fecf&v=4"
						alt="My profile"
					/>
					<div className="m-4 sm:ml-6 h-2/6">
						<p className="text-slate-900">
							I am a 19 years old student, looking for experience and self
							development.
						</p>
						<address className="mt-12">
							<ul className="flex flex-row">
								<div className="mr-2">
									<BlockyLink href="https://github.com/Coffee-for-Cats">
										Github
									</BlockyLink>
								</div>
								<div className="mr-2">
									<BlockyLink href="https://www.linkedin.com/in/lucas-schwalm-silva-39a318207/">
										Linkedin
									</BlockyLink>
								</div>
							</ul>
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
							alt="react"
							src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
						/>
						<img
							className="w-8 mr-3"
							alt="postgres"
							src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"
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
					<div>
						<BlockyLink href="https://www.uergs.edu.br/pro-reitoria-de-pesquisa-e-pos-graduacao-desenvolve-sistema-proprio-de-submissao-de-projetos-de-pesquisa">
							SSP UERGS
						</BlockyLink>{' '}
						a Submission System for Projects of master's students. I am an
						active contributor and scholarship holder for the system.
					</div>
					<div className="mt-4">
						<BlockyLink href="https://github.com/Coffee-for-Cats/kes-simulator">
							K&S Simulator
						</BlockyLink>{' '}
						a Knob and Switch simulator, often used for teaching assembly; built
						to improve usuability and acessibility for my university.
					</div>
					<a
						className="float-right text-indigo-800 underline"
						href="mailto:lucas-silva06@uergs.edu.br"
					>
						lucas-silva06@uergs.edu.br
					</a>
				</footer>
			</div>
		</div>
	)
}
