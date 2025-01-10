import React from 'react'
import { BlockyLink } from '../components/blockyLink'

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
