"use client"

import React, { useState, useEffect, useRef } from 'react'
import { cn } from '@/lib/utils'

interface TerminalProps {
   children: React.ReactNode
   className?: string
}

export const Terminal = ({ children, className }: TerminalProps) => {
   return (
      <div 
         className={cn(
            "bg-gray-900/95 backdrop-blur-xl rounded-xl shadow-2xl border border-gray-700/50 overflow-hidden macos-window-shadow",
            className
         )}
      >
         {/* Terminal header */}
         <div className="h-10 bg-gray-800/90 flex items-center px-4 border-b border-gray-700/50">
            <div className="flex space-x-2">
               <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 transition-colors cursor-pointer traffic-light"></div>
               <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-400 transition-colors cursor-pointer traffic-light"></div>
               <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-400 transition-colors cursor-pointer traffic-light"></div>
            </div>
            <div className="absolute inset-x-0 text-center text-sm text-gray-300 font-medium font-sf-mono">
               Terminal — zsh — 120×40
            </div>
         </div>
         
         {/* Terminal content */}
         <div className="font-sf-mono text-sm w-full h-[calc(100%-2.5rem)] bg-black/95 custom-scrollbar">
            {children}
         </div>
      </div>
   )
}

interface AnimatedSpanProps {
   children: React.ReactNode
   className?: string
   delay?: number
}

export const AnimatedSpan = ({ children, className, delay = 0 }: AnimatedSpanProps) => {
   const [mounted, setMounted] = useState(false)
   
   useEffect(() => {
      const timer = setTimeout(() => {
         setMounted(true)
      }, delay)
      
      return () => clearTimeout(timer)
   }, [delay])
   
   return (
      <div 
         className={cn(
            "transition-opacity duration-300",
            mounted ? "opacity-100" : "opacity-0",
            className
         )}
      >
         {children}
      </div>
   )
}

interface TypingAnimationProps {
   text: string
   delay?: number
   className?: string
   speed?: number
   onComplete?: () => void
}

export const TypingAnimation = ({ 
   text, 
   delay = 0, 
   className, 
   speed = 50,
   onComplete
}: TypingAnimationProps) => {
   const [displayedText, setDisplayedText] = useState('')
   const [currentIndex, setCurrentIndex] = useState(0)
   const [started, setStarted] = useState(false)
   const [completed, setCompleted] = useState(false)
   
   useEffect(() => {
      // Wait for initial delay before starting
      const startTimer = setTimeout(() => {
         setStarted(true)
      }, delay)
      
      return () => clearTimeout(startTimer)
   }, [delay])
   
   useEffect(() => {
      if (!started || currentIndex >= text.length || completed) {
         if (currentIndex >= text.length && onComplete && !completed) {
            setCompleted(true)
            onComplete()
         }
         return
      }
      
      const timer = setTimeout(() => {
         setDisplayedText(prev => prev + text[currentIndex])
         setCurrentIndex(prev => prev + 1)
      }, speed)
      
      return () => clearTimeout(timer)
   }, [currentIndex, started, text, speed, onComplete, completed])
   
   return (
      <span className={cn("font-sf-mono", className)}>
         {displayedText}
         {!completed && <span className="animate-blink text-green-400">▋</span>}
      </span>
   )
} 