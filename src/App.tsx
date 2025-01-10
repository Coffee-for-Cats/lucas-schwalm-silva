import React from 'react'
import { BlockyLink } from './components/blockyLink.tsx'
import { Selector } from './components/selector.tsx'

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

				{/* section selesctor with technologies and stuff */}
				<Selector />

				<footer className="leading-7 mb-12 p-px">
					<div className="flex flex-col float-right items-end mt-12">
						<a
							className="float-right text-indigo-800 underline"
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
