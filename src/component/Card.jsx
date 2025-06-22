import Input from './Input'
import SearchButton from './SearchButton'
import Data from './Data'


function Card() {
  return (
  <div className="w-full max-w-[700px] mx-auto h-auto flex flex-col items-center rounded-[42px] bg-[linear-gradient(145deg,_#8facd4,_#7991b2)] shadow-[35px_35px_70px_#4a596d,-35px_-35px_70px_#c2e9ff] p-6">
  
  <div className="w-full flex flex-col sm:flex-row justify-center gap-4 mb-10 px-2">
  <Input />
  <SearchButton />
</div>


  <Data />
</div>



  )
}

export default Card   