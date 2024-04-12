import cx from 'classnames'
import Avatar from '../Avatar/Avatar'

type ChipProps = {
	selected?: boolean
	onClick?: () => void
}

const Chip = ({ selected = false, onClick = () => null }: ChipProps) => {
	return (
		<div
			className={cx('w-full flex items-center p-[12px] pr-[24px] rounded-[100px] h-[64px]', {
				'bg-transparent': !selected,
				'bg-[#272727]': selected,
			})}
			onClick={onClick}
		>
			<Avatar width={40} src="https://placehold.co/600x400/EEE/31343C" alt="avatar" />
			<span className="mr-auto">Name</span>
			<span>988</span>
		</div>
	)
}

export default Chip
