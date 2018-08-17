import React from 'react'

const Fork = ({ stars }) => (
	<div>
		<div
			className="material-icons mdl-badge mdl-badge--overlap"
			data-badge={stars || 0}
		>
			Jesse
		</div>
		<style>{`
			.mdl-badge {
				position: absolute;
				top: 30px;
				right: 15px;
			}
		  `}</style>
	</div>
)

export default Fork
