import Image from "next/image"
import mobilePreviewImg from '../assets/app-nlw-copa-preview.png'
import logoImg from '../assets/logo.svg'
import usersAvatarExampleImg from '../assets/users-avatar-example.png'
import iconCheckImg from '../assets/icon-check.svg'
import { api } from "../lib/axios"
import { FormEvent, useState } from "react"

interface HomeProps {
  poolCount: number;
  guessCount: number;
  userCount: number;
}

export default function Home(props: HomeProps) {
  const [ poolTitle, setPoolTitle] = useState('')

  async function createPool(event: FormEvent){
    event.preventDefault()
try {
  const response = await api.post('/pools', {
    title: poolTitle,
  })
   const { code } = response.data

   await navigator.clipboard.writeText(code)
   alert('Successfully Created sweepstake, the code was copied to your clipboard!')
   setPoolTitle('')
} catch (error) {
  console.log(error)
  alert('Oh boy! Could you try to do again?')
}

  }
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
            <span className="text-green-500">+{props.userCount}</span> users
          </strong>
        </div>
        <form 
        onSubmit={createPool}
          className="mt-10 flex gap-2">
          <input 
            className="flex-1 px-6 py-4 rounded bg-gray-800 border border-gray-600 text-sm text-gray-100"
            type="text" 
            placeholder="What is your lucky sweepstake name?" 
            required
            onChange={(event)=> setPoolTitle(event?.target.value)}
            value={poolTitle}
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
              <span className="text-bold text-2xl">+{props.poolCount}</span>
              <span> Sweepstakes created</span>
            </div>
          </div>
          <div className="w-px h-14 bg-gray-600"></div>
          <div  className="flex items-center gap-6">
            <Image src={iconCheckImg} alt="" />
            <div className="flex flex-col">
              <span className="text-bold text-2xl">+{props.guessCount}</span>
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

export const getServerSideProps = async()=> {
  const [poolCountResponse, guessCountResponse, userCountResponse] = await Promise.all([
    api.get('pools/count'),
    api.get('guesses/count'),
    api.get('users/count')
  ])
 
  
  return {
    props: {
      poolCount: poolCountResponse.data.count,
      guessCount: guessCountResponse.data.count,
      userCount: userCountResponse.data.count
    }
  }
}
