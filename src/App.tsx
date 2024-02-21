import './App.css'
import Chip from './components/Chip/Chip'

const App = () => {
	return (
		<div className="w-screen h-screen flex items-center justify-center test">
			<div className="my-box bg-black w-80 h-80 p-[25px]">
				<Chip />
			</div>
		</div>
	)
}

export default App
