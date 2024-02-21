type AvatarProps = {
	width?: number
	src: string
	alt: string
}

const Avatar = ({ width = 40, src, alt }: AvatarProps) => {
	return (
		<div className="avatar">
			<div className={`w-[${width}px] rounded-full mr-3`}>
				<img loading="lazy" src={src} alt={alt} />
			</div>
		</div>
	)
}

export default Avatar
