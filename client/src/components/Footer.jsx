import React from 'react'
import {motion} from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setUserData } from '../redux/userSlice'
import { serverUrl } from '../App'
import axios from 'axios'



function Footer() {
    const naviagte=useNavigate()
    const dispatch=useDispatch()
    const handleSignOut=async()=>{
        try{
            await axios.get(serverUrl+"/api/auth/logout",{withCredentials:true})
            dispatch(setUserData(null))
            navigate("/auth")
        }catch(err){
            console.log(err)
        }
    }
  return (
    <motion.div 
        initial={{y:15,opacity:0}}
        whileInView={{opacity:1,y:0}}
        viewport={{once:true}}
        transition={{duration:0.6}}
        className="z-10 mx-6 mb-6 mt-24
        rounded-2xl
        bg-gradient-to-br from-black/90 via-black/80 to-black/90
        backdrop-blur-2xl
        border border-white/10
        shadow-[0_22px_55px_rgba(0,0,0,0.75)]
        px-8 py-4"
    >
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 items-start'>
            <motion.div
            whileHover={{rotateX:6,rotateY:-6}}
            className='flex flex-col gap-4 transform-gpu'
            style={{transformStyle:"preserve-3d"}}
            >
                <div className='flex items-center gap-3 cursor-pointer'
                    style={{transform:"translateZ(20px)"}}
                >
                    <img src="" alt="logo" 
                        className='h-9 w-9 object-contain'/>
                        <span
                        className='text-lg font-semibold
                            bg-gradient-to-br from-white via-gray-300 to-white 
                            bg-clip-text text-transparent
                        '
                        style={{textShadow:"0 6px 18px rgba(0,0,0,0.4)"}}
                        >
                        Exam <span className='text-gray-400'>AI</span>
                        </span>
                </div>
                <p className='text-sm text-gray-300 max-w-sm'>
                        ExamNotes AI helps students generate notes for their exams in seconds. It uses GPT-3 to generate notes based on the exam paper.
                </p>
            </motion.div>
            <div className='text-center'>
                <h1 className='text-sm font-semibold text-white mb-4'>Quick Links</h1>
                <ul className='space-y-2 text-sm cursor-pointer'>
                    <li onClick={()=>naviagte('/notes')} className='text-gray-300 hover:text-white transition-colors'>
                        Notes
                    </li>
                    <li onClick={()=>naviagte("/history")} className='text-gray-300 hover:text-white transition-colors'>
                        History
                    </li>
                    <li onClick={()=>naviagte("/pricing")} className='text-gray-300 hover:text-white transition-colors'>
                        Pricing
                    </li>
                </ul>
            </div>
            <div>
                <h1 className='text-sm font-semibold text-white mb-4'>Support & Account</h1>
                <ul className='space-y-2 text-sm cursor-pointer'>
                    <li className='text-gray-300 hover:text-white transition-colors'>
                        SignIn
                    </li>
                    <li onClick={handleSignOut} className='text-gray-300 hover:text-white transition-colors'>
                        SignOut
                    </li>
                    <li className='text-gray-300 hover:text-white transition-colors'>
                        mdkashifnisar@gamil.com
                    </li>
                </ul>
            </div>
        </div>
        <div className='my-6 h-px bg-white/10' />
        <p className='text-center text-xs text-gray-500'>
          ©️  {new Date().getFullYear()} ExamNotes AI. All rights reserved
        </p>
    </motion.div>
  )
}

export default Footer
