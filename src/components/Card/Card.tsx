import Avatar from '../Avatar/Avatar'
import Copy from '../Icons/Copy'
import ExplorerImg from '../../assets/explorer.png'
import Badge from '../Badge/Badge'
import Vitalik from '../../assets/vitalik.png'

const Card = () => {
	return (
		<div className="bg-black flex w-auto max-h-[116px] rounded-xl overflow-hidden">
			<Avatar className="w-[116px] h-[116px] mr-[24px]" rounded="rounded-xl" src={Vitalik} alt="avatar" />
			<div className="flex flex-col h-full justify-between">
				<div className="mb-[8px] flex gap-[8px]">
					<span className="text-base font-medium leading-tight text-[#00F0FF]">@Vitalik</span>
					<span className="text-base font-normal leading-tight text-[#FFFFFF80]">0xF8d...A82B</span>
					<img src={ExplorerImg} alt="explorer" loading="lazy" />
					<Copy className="cursor-pointer" />
				</div>
				<span className="text-[42px] leading-[52px] font-medium mb-[8px]">$22,413,887</span>
				<Badge />
			</div>
		</div>
	)
}

export default Card
