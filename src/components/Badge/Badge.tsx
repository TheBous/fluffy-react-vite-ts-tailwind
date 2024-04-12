import ArrowSvg from '../Icons/Arrow'

const Badge = () => {
	return (
		<div
			className="bg-[#98FE14] px-[8px] py-[4px] max-h-[28px] rounded-[10px] flex items-center"
			style={{
				width: 'fit-content',
			}}
		>
			<ArrowSvg />
			<span className="ml-[2px] text-black">1.84%</span>
		</div>
	)
}

export default Badge
