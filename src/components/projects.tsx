import React from 'react'
import { BlockyLink } from './blockyLink'

export function ProjectsComponent() {
	return (
		<>
			<h2 className="text-indigo-950 text-2xl font-semibold">Projects</h2>
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
		</>
	)
}

export function Project({ link, name, techs, desc }) {
	return (
		<div className="mt-2">
			<div className="flex flex-col md:flex-row md:items-center">
				<BlockyLink href={link}>{name}</BlockyLink>{' '}
				<div className="my-1.5 md:ml-3 font-semibold text-slate-600 text-sm">
					{techs}
				</div>
			</div>
			{desc}
		</div>
	)
}
