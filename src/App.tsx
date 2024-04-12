import './App.css'
import Card from './components/Card/Card'
import ProgressWheel from './components/ProgressWheel/ProgressWheel'

const App = () => {
	return (
		<div className="w-screen h-screen flex items-center justify-center test flex-col text-white">
			<div className="bg-black w-[800px] rounded-xl p-[24px]">
				<div className="w-full flex">
					<Card />
					<div className="relative ml-[30%]">
						<div className="absolute">
							<ProgressWheel percent={100} bg="#1C1C1C" showIndicator />
						</div>
						<div className="absolute">
							<ProgressWheel percent={70} showLinearGradient showOtherData />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default App
