import React, { useState } from 'react'
import { ProjectsComponent } from './projects'
import { TechnologiesComponent } from './techs'

export function Selector() {
	const [open, setOpen] = useState('University')
	console.log(open)

	const blocks = {
		University: <University />,
		Techs: <Techs />,
		Projects: <Projects />,
	}

	const errorMsg = 'Sorry, this should not be happening =('

	return (
		<section className="m-2 p-2">
			<div className="flex">
				<SectionHeader setter={setOpen} getter={open}>
					University
				</SectionHeader>

				<SectionHeader setter={setOpen} getter={open}>
					Techs
				</SectionHeader>

				<SectionHeader setter={setOpen} getter={open}>
					Projects
				</SectionHeader>
			</div>

			<div className="mx-2 my-4">
				{/* Pretty confusing, but I promise it makes sense =p */}
				{(blocks[open] ? blocks[open] : errorMsg) || errorMsg}
			</div>
		</section>
	)
}

// typescripts gets messy after some time, better without
function SectionHeader({ children, setter, getter }) {
	const underlined = getter === children ? 'underline' : ' '

	return (
		<button
			// problem of react, just too many things all at once
			className={`mr-2 p-2 text-lg text-indigo-950 font-semibold hover:underline transition ${underlined}`}
			type="button"
			onClick={() => {
				setter(children)
			}}
		>
			{children}
		</button>
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
