import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FcGoogle } from "react-icons/fc";
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../utlis/firebase.js';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setUserData } from '../redux/userSlice';
import { serverUrl } from '../App.jsx';

function Auth() {
  const dispatch=useDispatch()

  const handleGoogleAuth = async () => {
    try {
      const response = await signInWithPopup(auth, provider);
      const User = response.user;
      const name = User.displayName;
      const email = User.email;
      
      const result = await axios.post(
        `${serverUrl}/api/auth/google`,
        { name, email },
        { withCredentials: true }
      );
      dispatch(setUserData(result.data))
      
      } catch (err) {
        console.error(err);
        console.log(err.response?.status);   // status code
        console.log(err.response?.data);     // server error message
        console.log(err.message);   
      }
    };

  return (
    <div className='min-h-screen overflow-hidden bg-white text-black px-8 '>
      <motion.header
      initial={{y:-15,opacity:0}}
      animate={{y:0,opacity:1}}
      transition={{duration:2}}

      className='max-w-6xl mx-auto mt-8 
      rounded-2xl bg-black/80 backdrop-blur-xl 
      border border-white/10
      px-8 py-6
      shadow-[0_20px_45px_rgba(0,0,0,0.6)]
      '>
        <h1 className='text-2xl font-bold bg-linear-to-r from-white via-gray-400 to-white bg-clip-text text-transparent'>
            ExamNotes AI
        </h1>
        <p className='text-sm text-gray-400 mt-1'>
            AI-powered exam-oriented nots & revision
        </p>

      </motion.header>
      <main className='max-w-6xl mx-auto p-10 py-10 grid grid-cols-1 lg:grid-cols-2 gap-20 '>

        {/* left content*/}
        <motion.div
        initial={{x:-60,opacity:0}}
        animate={{y:0,opacity:1}}
        transition={{duration:1.5}}
        >
        <h1 className='text-5xl lg:text-6xl font-extrabold leading-tight bg-gradient-to-br from-black/90 via-black/60 to-black/90 bg-clip-text text-transparent'>
          Unlock Smart <br /> AI Notes
        </h1>
      
        <motion.button
          onClick={handleGoogleAuth}
      
          whileHover={{
            y: -10,
            rotateX: 8,
            rotateY: -8,
            scale: 1.07
          }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 200, damping: 18 }}
          className='mt-10 px-10 py-3 rounded-xl flex items-center gap-3 bg-gradient-to-br from-black/90 via-black/80 to-black/90 border border-white/10 text-white font-semibold text-lg shadow-[0_25px_60px_rgba(0,0,0,0.7)] disabled:opacity-50 disabled:cursor-not-allowed'
        >
          <FcGoogle size={22} />
          {'Continue with Google'}
        </motion.button>
        <p className='mt-6 max-w-xl text-lg bg-gradient-to-br from-gray-700 via-gray-500/80 to-gray-700 bg-clip-text text-transparent'>
            You get <span className='font-semibold'>50 Free credits</span> to create exam notes,project notes,charts,graphs and download clean PDFs - instantly using AI.
        </p>
        <p className='mt-4 text-sm'>Start with 50 free credits -Upgrade anytime for more credits -Instant access </p>

        </motion.div>
        {/* Right content */}
        <div className='grid grid-cols-1 md:grid-cols-2 sm:grid-cols-2 gap-8'>
            <Feature icon="🎁" title="50 Free Credits" des="Start with 50 credits to generate notes without paying."/>
            <Feature icon="📝" title="Exam Notes" des="High-yield,revision-ready."/>
            <Feature icon="📂" title="Project Notes" des="Well-Stuctured documentation for assignments & Projects."/>
            <Feature icon="⬇️" title="Download PDF" des="Download notes in PDF format."/>
        </div>

      </main>
    </div>  
  )
}
function Feature({icon,title,des}){
  return(
    <motion.div
    whileHover={{y:-12,rotateX:8,rotateY:-8,scale:1.07}}
    transition={{type:"spring",stiffness:200,damping:18}}
    className='relative rounded-2xl p-8 bg-gradient-to-br from-black/90 via-black/80 to-black/90 backdrop-blur-2xl border border-white/10 shadow-[0_30px_80px_rbga(0,0,0,0.7)]
    text-white' 
      style={{transformStyle:"preserve-3d"}}
    >
      <div className='absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent opacity-0 hover:opacity-100 transition-opacity pointer-events-none'/>
          <div className='relative z-10' style={{transform:"translateZ(30px)"}}>
            <div className='text-4xl mb-3'>{icon}</div>
            <h3 className='text-lg font-semibold mb-2'>{title}</h3>
            <p className='text-gray-300 text-sm leading-relaxed'>{des}</p>
          
      </div>
    </motion.div>
  )
}

export default Auth
