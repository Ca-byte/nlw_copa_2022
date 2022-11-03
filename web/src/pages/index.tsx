import Image from "next/image"
import mobilePreviewImg from '../assets/app-nlw-copa-preview.png'
import logoImg from '../assets/logo.svg'
import usersAvatarExampleImg from '../assets/users-avatar-example.png'
import iconCheckImg from '../assets/icon-check.svg'


export default function Home() {
  return (
    <div className="max-w-[1124px] h-screen mx-auto grid grid-cols-2 gap-28 items-center">
      <main>
        <Image 
          src={logoImg} 
          alt="NLW copa"
        />
        <h1 className="mt-14 text-white text-5xl font-bold leading-tight">
          Create you sweepstake and share it with your friends
        </h1>
        
        <div className="mt-10 flex items-center gap-2">
          <Image 
            src={usersAvatarExampleImg} 
            alt="" 
          />
          <strong className="text-gray-100 text-xl">
            <span className="text-green-500">+12.441</span> users
          </strong>
        </div>
        <form className="mt-10 flex gap-2">
          <input 
            className="flex-1 px-6 py-4 rounded bg-gray-800 border border-gray-600 text-sm"
            type="text" 
            placeholder="What is your lucky sweepstake name?" 
            required
          />

          <button 
            className="bg-yellow-500 px-6 py-4 rounded text-gray-900 font-bold text-sm uppercase hover:bg-yellow-700 transition-colors"
            type="submit"> Create sweepstake
          </button>
        </form>

        <p 
          className="text-gray-300 mt-4 text-sm leading-relaxed">
          After creating your pool, you will receive a unique code that you can use to invite others 🚀
        </p>

        <div className="mt-10 pt-10 border-t border-gray-600  flex items-center justify-between text-gray-100">
          <div className="flex items-center gap-6">
            <Image src={iconCheckImg} alt="" />
            <div className="flex flex-col">
              <span className="text-bold text-2xl">+3.012</span>
              <span> Sweepstakes created</span>
            </div>
          </div>
          <div className="w-px h-14 bg-gray-600"></div>
          <div  className="flex items-center gap-6">
            <Image src={iconCheckImg} alt="" />
            <div className="flex flex-col">
              <span className="text-bold text-2xl">+5.110</span>
              <span> Guesses sent</span>
            </div>

          </div>
        </div>
      </main>
      <Image 
        src={mobilePreviewImg} 
        alt="two mobile displaying the world cup nlw sweepstake aplication"
        quality={100}
      />

    </div>
  )
}

// export const getServerSideProps = async()=> {
//   const response = await fetch('http://localhost:3333/pools/count')
//   const data = await response.json()
  
//   console.log(data)

//   return {
//     props: {
//       count: data.count
//     }
//   }
// }
