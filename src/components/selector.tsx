import React, { useState } from 'react'
import { ProjectsComponent } from './projects'
import { TechnologiesComponent } from './techs'

export function Selector() {
	const [open, setOpen] = useState('University')

	const blocks = {
		University,
		Techs,
		Projects,
	}

	const errorMsg = 'Sorry, this should not be happening =('

	return (
		<section className="m-2 p-2">
			<ul className="flex">
				<button
					className="mr-2 p-2 text-lg text-indigo-950 font-semibold hover:underline transition"
					type="button"
					onClick={() => {
						setOpen('University')
					}}
				>
					University
				</button>
				<button
					className="mx-2 p-2 text-lg text-indigo-950 font-semibold hover:underline transition"
					type="button"
					onClick={() => {
						setOpen('Techs')
					}}
				>
					Techs
				</button>
				<button
					className="mx-2 p-2 text-lg text-indigo-950 font-semibold hover:underline"
					type="button"
					onClick={() => {
						setOpen('Projects')
					}}
				>
					Projects
				</button>
			</ul>

			<div className="mx-2 my-4">
				{/* Pretty confusing, but I promise makes sense =p */}
				{(blocks[open] ? blocks[open]() : errorMsg) || errorMsg}
			</div>
		</section>
	)
}

function University() {
	return (
		<div>
			<h2 className="text-2xl font-semibold text-slate-800">
				⚙️ Engenharia de Computação 💻
			</h2>
			<p className="my-1">
				<span className="text-indigo-950 font-semibold">UERGS</span> -
				Universidade Estadual do Rio Grande do Sul <br />
				Guaíba - RS | Brazil
			</p>
			<p>
				<span className="text-slate-800 font-semibold">2023/2</span> -{' '}
				<span className="text-slate-800 font-semibold">2027/2</span> (expected)
			</p>
		</div>
	)
}

function Techs() {
	return <TechnologiesComponent />
}

function Projects() {
	return <ProjectsComponent />
}
