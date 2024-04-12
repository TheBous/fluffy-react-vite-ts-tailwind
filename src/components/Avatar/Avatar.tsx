import cx from 'classnames'

type AvatarProps = {
	width?: number
	src: string
	alt: string
	rounded?: 'rounded-full' | 'rounded-md' | 'rounded-lg' | 'rounded-xl'
	className?: string
	full?: boolean
}

const Avatar = ({ width = 40, src, alt, rounded = 'rounded-full', className = '', full }: AvatarProps) => {
	return (
		<div className="avatar">
			<div
				className={cx(`w-[${width}px] h-[${width}px]  mr-3`, className, {
					[rounded]: true,
					'w-full': full,
					'h-full': full,
				})}
			>
				<img loading="lazy" src={src} alt={alt} />
			</div>
		</div>
	)
}

export default Avatar
