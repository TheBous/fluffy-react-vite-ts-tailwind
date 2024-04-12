import './ProgressWheel.css'
import XSvg from '../../assets/x.svg'

type CircleProgressProps = {
	percent: number
	size?: number
	showOtherData?: boolean
	showLinearGradient?: boolean
	bg?: string
	showIndicator?: boolean
}

const CircleProgress = ({
	percent,
	size = 134,
	showOtherData = false,
	showLinearGradient = false,
	showIndicator = false,
	bg,
}: CircleProgressProps) => {
	const strokeWidth = 8
	const viewBoxSize = size
	const radius = size / 2 - strokeWidth / 2
	const circumference = radius * 2 * Math.PI
	const offset = circumference - (percent / 100) * ((circumference * 3) / 5)

	return (
		<div className="relative">
			<div>
				<svg
					width={viewBoxSize}
					height={viewBoxSize}
					viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
					style={{ transform: 'rotate(162deg)' }}
				>
					{showLinearGradient && (
						<defs>
							<linearGradient id="gradient" x1="0%" y1="100%" x2="100%" y2="0%">
								<stop offset="5%" stopColor="#ACFD00" />
								<stop offset="95%" stopColor="#00F0FF" />
							</linearGradient>
						</defs>
					)}
					<circle
						stroke={showLinearGradient ? 'url(#gradient)' : bg}
						fill="none"
						strokeWidth={strokeWidth}
						strokeDasharray={`${circumference} ${circumference}`}
						strokeDashoffset={offset}
						strokeLinecap="round"
						r={radius}
						cx={viewBoxSize / 2}
						cy={viewBoxSize / 2}
					/>
				</svg>
			</div>
			{showOtherData && (
				<div
					style={{
						top: '18%',
						left: '50%',
						transform: 'translate(-50%)',
					}}
					className="absolute flex flex-col items-center"
				>
					<span className="text-xl font-normal leading-tight">860</span>
					<span className="font-normal text-xs mb-2">Excellent</span>
					<button className="app-button rounded-xl px-5 py-[1px] text-black flex items-center justify-center gap-1">
						<img alt="x" src={XSvg} />
						<span>Share</span>
					</button>
				</div>
			)}
			{showIndicator && (
				<>
					<span className="absolute top-[75%] left-[2%] text-xs font-normal">2</span>
					<span className="absolute top-[75%] right-[1%] text-xs font-normal">4444</span>
				</>
			)}
		</div>
	)
}

export default CircleProgress
