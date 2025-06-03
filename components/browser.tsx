'use client'

import React, { useState, useEffect } from 'react'
import { X, Minus, Square, ArrowLeft, ArrowRight, RotateCcw, Share, Shield, Coffee, Zap, Leaf, Gem, Calendar, Users, Star, TrendingUp, Clock } from 'lucide-react'

interface BrowserProps {
  isOpen: boolean
  onClose: () => void
}

const BrowserWindow: React.FC<BrowserProps> = ({ isOpen, onClose }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [loadingProgress, setLoadingProgress] = useState(0)

  console.log('BrowserWindow render - isOpen:', isOpen)

  useEffect(() => {
    if (isOpen) {
      console.log('Browser opening effect triggered')
      setIsLoading(true)
      setLoadingProgress(0)
      
      const interval = setInterval(() => {
        setLoadingProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval)
            setTimeout(() => setIsLoading(false), 500)
            return 100
          }
          return prev + 8
        })
      }, 50)
      
      return () => clearInterval(interval)
    }
  }, [isOpen])

  // Add keyboard support for closing browser
  useEffect(() => {
    if (isOpen) {
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          onClose()
        }
      }
      
      document.addEventListener('keydown', handleKeyDown)
      return () => document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen) {
    console.log('Browser not open, returning null')
    return null
  }

  console.log('Browser is open, rendering browser window')

  return (
    <div 
      className="fixed inset-0 flex items-center justify-center p-2 md:p-4" 
      style={{ zIndex: 10000 }}
    >
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm cursor-pointer"
        onClick={onClose}
      />
      
      {/* Browser Window */}
      <div 
        className="relative w-full max-w-6xl h-[95vh] md:h-[90vh] bg-white rounded-lg md:rounded-xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Browser Header */}
        <div className="h-10 md:h-12 bg-gray-100 border-b border-gray-200 flex items-center px-2 md:px-4">
          {/* Traffic Light Buttons */}
          <div className="flex items-center space-x-1.5 md:space-x-2">
            <button 
              onClick={onClose}
              className="w-2.5 h-2.5 md:w-3 md:h-3 bg-red-500 rounded-full hover:bg-red-600 transition-colors flex items-center justify-center group touch-manipulation"
              aria-label="Close browser"
              title="Close browser (Esc)"
            >
              <X className="w-1.5 h-1.5 md:w-2 md:h-2 text-red-800 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity" />
            </button>
            <button className="w-2.5 h-2.5 md:w-3 md:h-3 bg-yellow-500 rounded-full hover:bg-yellow-600 transition-colors flex items-center justify-center group">
              <Minus className="w-1.5 h-1.5 md:w-2 md:h-2 text-yellow-800 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
            <button className="w-2.5 h-2.5 md:w-3 md:h-3 bg-green-500 rounded-full hover:bg-green-600 transition-colors flex items-center justify-center group">
              <Square className="w-1 h-1 md:w-1.5 md:h-1.5 text-green-800 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          </div>
          
          {/* Navigation Controls - Hidden on mobile */}
          <div className="hidden md:flex items-center space-x-2 ml-6">
            <button className="p-1 hover:bg-gray-200 rounded transition-colors">
              <ArrowLeft className="w-4 h-4 text-gray-600" />
            </button>
            <button className="p-1 hover:bg-gray-200 rounded transition-colors">
              <ArrowRight className="w-4 h-4 text-gray-600" />
            </button>
            <button className="p-1 hover:bg-gray-200 rounded transition-colors">
              <RotateCcw className="w-4 h-4 text-gray-600" />
            </button>
          </div>
          
          {/* Address Bar */}
          <div className="flex-1 mx-2 md:mx-4">
            <div className="bg-white border border-gray-300 rounded-md md:rounded-lg px-2 md:px-4 py-1 md:py-1.5 flex items-center space-x-1 md:space-x-2">
              <Shield className="w-3 h-3 md:w-4 md:h-4 text-green-600" />
              <span className="text-xs md:text-sm text-gray-700 font-mono truncate">https://bullish.cafe</span>
            </div>
          </div>
          
          {/* Browser Actions - Hidden on mobile */}
          <div className="hidden md:flex items-center space-x-2">
            <button className="p-1 hover:bg-gray-200 rounded transition-colors">
              <Share className="w-4 h-4 text-gray-600" />
            </button>
          </div>
        </div>
        
        {/* Loading Bar */}
        {isLoading && (
          <div className="h-0.5 md:h-1 bg-gray-200">
            <div 
              className="h-full bg-blue-500 transition-all duration-100 ease-out"
              style={{ width: `${loadingProgress}%` }}
            />
          </div>
        )}
        
        {/* Browser Content */}
        <div className="h-full overflow-y-auto bg-white">
          {!isLoading ? (
            <StrategicRelaunchPage onClose={onClose} />
          ) : (
            <div className="flex items-center justify-center h-full">
              <div className="text-center">
                <div className="animate-spin w-6 h-6 md:w-8 md:h-8 border-2 border-blue-500 border-t-transparent rounded-full mx-auto mb-4" />
                <p className="text-gray-600 text-sm md:text-base">Loading Bullish Cafe...</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

const StrategicRelaunchPage: React.FC<{ onClose?: () => void }> = ({ onClose }) => {
  return (
    <div className="min-h-full bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white overflow-hidden relative">
      {/* Mobile Close Button */}
      {onClose && (
        <button
          onClick={onClose}
          className="fixed top-4 right-4 z-50 md:hidden w-10 h-10 bg-gray-800/80 backdrop-blur-sm rounded-full flex items-center justify-center border border-gray-600/50 hover:bg-gray-700/80 transition-colors"
          aria-label="Close browser"
        >
          <X className="w-5 h-5 text-white" />
        </button>
      )}
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-64 h-64 border border-green-400/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 border border-green-400/20 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-green-400/10 rounded-full animate-pulse delay-500"></div>
      </div>

      {/* Header */}
      <nav className="relative z-10 flex items-center justify-between px-4 md:px-8 py-4 md:py-6 border-b border-gray-800/50 backdrop-blur-sm">
        <div className="flex items-center space-x-2 md:space-x-3">
          <div className="text-2xl md:text-3xl">🐂</div>
          <span className="text-lg md:text-2xl font-bold text-green-400">Bullish Cafe</span>
        </div>
        <div className="flex items-center space-x-1 md:space-x-2 text-xs md:text-sm">
          <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-green-400 font-semibold hidden sm:inline">Strategic Relaunch in Progress</span>
          <span className="text-green-400 font-semibold sm:hidden">Relaunch in Progress</span>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 md:px-8">
        <div className="max-w-6xl mx-auto text-center space-y-8 md:space-y-12">
          
          {/* Hero Section */}
          <div className="space-y-6 md:space-y-8">
            <div className="inline-flex items-center space-x-1 md:space-x-2 bg-green-400/10 border border-green-400/30 rounded-full px-4 md:px-6 py-2 md:py-3 backdrop-blur-sm">
              <Zap className="w-4 h-4 md:w-5 md:h-5 text-green-400" />
              <span className="text-green-400 font-semibold text-sm md:text-base">Something Revolutionary is Brewing</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black leading-tight">
              <span className="block text-white mb-2 md:mb-4">WE'RE</span>
              <span className="block bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">EVOLVING</span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-4">
              Bullish Cafe is undergoing a <span className="text-green-400 font-bold">strategic transformation</span> that will redefine how coffee meets cryptocurrency
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-12 md:mt-16">
            <div className="bg-gray-800/30 border border-gray-700/50 rounded-xl md:rounded-2xl p-6 md:p-8 backdrop-blur-sm hover:bg-gray-800/50 transition-all duration-300 group">
              <div className="text-4xl md:text-5xl mb-4 md:mb-6 group-hover:scale-110 transition-transform">⚡</div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4">Lightning-Fast XRP Integration</h3>
              <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                Next-generation payment processing with instant settlements and zero-fee transactions on the XRP Ledger
              </p>
            </div>

            <div className="bg-gray-800/30 border border-gray-700/50 rounded-xl md:rounded-2xl p-6 md:p-8 backdrop-blur-sm hover:bg-gray-800/50 transition-all duration-300 group">
              <div className="text-4xl md:text-5xl mb-4 md:mb-6 group-hover:scale-110 transition-transform">🌍</div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4">Global Coffee Ecosystem</h3>
              <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                Connecting coffee lovers worldwide through blockchain-verified sourcing and transparent supply chains
              </p>
            </div>

            <div className="bg-gray-800/30 border border-gray-700/50 rounded-xl md:rounded-2xl p-6 md:p-8 backdrop-blur-sm hover:bg-gray-800/50 transition-all duration-300 group">
              <div className="text-4xl md:text-5xl mb-4 md:mb-6 group-hover:scale-110 transition-transform">💎</div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4">Exclusive NFT Rewards</h3>
              <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                Earn unique digital collectibles, unlock premium experiences, and access exclusive coffee drops
              </p>
            </div>
          </div>

          {/* Launch Timeline */}
          <div className="bg-gradient-to-r from-green-400/10 to-emerald-400/10 border border-green-400/20 rounded-3xl p-12 backdrop-blur-sm mt-20">
            <div className="flex items-center justify-center space-x-3 mb-8">
              <Calendar className="w-8 h-8 text-green-400" />
              <h2 className="text-4xl font-bold text-white">Launch Timeline</h2>
            </div>
            
            <div className="text-6xl font-black text-green-400 mb-4">JULY 2025</div>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We're not just reopening – we're launching the most advanced crypto-coffee platform ever created. 
              Every detail is being perfected to deliver an experience that's never been seen before.
            </p>

            <div className="grid md:grid-cols-4 gap-6 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-400/20 border border-green-400/40 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔬</span>
                </div>
                <h4 className="font-bold text-white mb-2">Research & Development</h4>
                <p className="text-sm text-gray-400">Advanced blockchain integration</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-400/20 border border-green-400/40 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎨</span>
                </div>
                <h4 className="font-bold text-white mb-2">Brand Evolution</h4>
                <p className="text-sm text-gray-400">Revolutionary visual identity</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-400/20 border border-green-400/40 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h4 className="font-bold text-white mb-2">Platform Launch</h4>
                <p className="text-sm text-gray-400">Next-gen coffee experience</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-400/20 border border-green-400/40 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌟</span>
                </div>
                <h4 className="font-bold text-white mb-2">Community Rewards</h4>
                <p className="text-sm text-gray-400">Exclusive early access benefits</p>
              </div>
            </div>
          </div>

          {/* Bullish Cafe Founders Club */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h2 className="text-5xl font-bold text-white mb-6">Bullish Cafe Founders Club</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Join an exclusive community of <span className="text-green-400 font-bold">55 founding members</span> who shape the future of premium coffee experiences
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <button className="bg-green-400 text-black font-bold px-8 py-3 rounded-xl hover:bg-green-300 transition-all duration-300 hover:scale-105 flex items-center space-x-2 shadow-lg shadow-green-400/25">
                  <span>Connect Wallet</span>
                </button>
                <button className="border border-green-400 text-green-400 font-bold px-8 py-3 rounded-xl hover:bg-green-400/10 transition-all duration-300">
                  Learn More
                </button>
              </div>

              {/* Revenue Share Legal Information */}
              <div className="bg-gray-800/30 border border-gray-700/50 rounded-xl p-6 max-w-4xl mx-auto">
                <h3 className="text-lg font-bold text-white mb-4">Revenue Share Legal Information</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  The 5% revenue share is distributed quarterly among Founder NFT holders in BREW tokens or XRP. 
                  This is not an investment contract and does not represent ownership in Bullish Cafe.
                </p>
                <button className="text-green-400 hover:text-green-300 text-sm font-semibold underline">
                  View Full Disclaimer
                </button>
              </div>
            </div>

            {/* Core Founder Benefits */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold text-white text-center mb-4">Core Founder Benefits</h3>
              <p className="text-gray-400 text-center mb-12">Exclusive perks and privileges for our founding members</p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Lifetime Founder Status */}
                <div className="bg-gray-800/30 border border-gray-700/50 rounded-xl p-6 text-center hover:bg-gray-800/50 transition-all duration-300">
                  <div className="w-16 h-16 bg-green-400/20 border border-green-400/40 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">👑</span>
                  </div>
                  <h4 className="font-bold text-white mb-2">Lifetime Founder Status</h4>
                  <p className="text-sm text-gray-400">Permanent recognition as a founding member</p>
                </div>

                {/* Early Access to Roasts */}
                <div className="bg-gray-800/30 border border-gray-700/50 rounded-xl p-6 text-center hover:bg-gray-800/50 transition-all duration-300">
                  <div className="w-16 h-16 bg-green-400/20 border border-green-400/40 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Coffee className="w-8 h-8 text-green-400" />
                  </div>
                  <h4 className="font-bold text-white mb-2">Early Access to Roasts</h4>
                  <p className="text-sm text-gray-400">First access to all new coffee releases</p>
                </div>

                {/* Exclusive Merchandise */}
                <div className="bg-gray-800/30 border border-gray-700/50 rounded-xl p-6 text-center hover:bg-gray-800/50 transition-all duration-300">
                  <div className="w-16 h-16 bg-green-400/20 border border-green-400/40 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🎁</span>
                  </div>
                  <h4 className="font-bold text-white mb-2">Exclusive Merchandise</h4>
                  <p className="text-sm text-gray-400">Limited edition Bullish Beans merchandise</p>
                </div>

                {/* Limited Availability */}
                <div className="bg-gray-800/30 border border-gray-700/50 rounded-xl p-6 text-center hover:bg-gray-800/50 transition-all duration-300">
                  <div className="w-16 h-16 bg-red-500/20 border border-red-500/40 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">⏰</span>
                  </div>
                  <h4 className="font-bold text-white mb-2">Limited Availability</h4>
                  <p className="text-sm text-gray-400">Only 55 founding memberships available</p>
                </div>
              </div>
            </div>

            {/* Premium Coffee Benefits */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold text-white text-center mb-4">Premium Coffee Benefits</h3>
              <p className="text-gray-400 text-center mb-12">Exceptional coffee experiences reserved for founders</p>
              
              <div className="grid md:grid-cols-3 gap-8">
                {/* 24 Bags of Coffee */}
                <div className="bg-gray-800/30 border border-gray-700/50 rounded-xl p-8 text-center hover:bg-gray-800/50 transition-all duration-300">
                  <div className="text-4xl mb-4">☕</div>
                  <h4 className="text-xl font-bold text-white mb-3">24 Bags of Coffee</h4>
                  <p className="text-gray-400">Annual allocation of premium coffee</p>
                </div>

                {/* Revenue Share */}
                <div className="bg-gray-800/30 border border-gray-700/50 rounded-xl p-8 text-center hover:bg-gray-800/50 transition-all duration-300">
                  <div className="text-4xl mb-4">💰</div>
                  <h4 className="text-xl font-bold text-white mb-3">Revenue Share</h4>
                  <p className="text-gray-400">5% of monthly revenue shared among Founders</p>
                </div>

                {/* VIP Affiliate Status */}
                <div className="bg-gray-800/30 border border-gray-700/50 rounded-xl p-8 text-center hover:bg-gray-800/50 transition-all duration-300">
                  <div className="text-4xl mb-4">🎯</div>
                  <h4 className="text-xl font-bold text-white mb-3">VIP Affiliate Status</h4>
                  <p className="text-gray-400">Earn 10% commission on referrals with exclusive tracking dashboard</p>
                </div>
              </div>
            </div>

            {/* Community & Governance */}
            <div>
              <h3 className="text-3xl font-bold text-white text-center mb-4">Community & Governance</h3>
              <p className="text-gray-400 text-center mb-12">Shape the future of Bullish Beans</p>
              
              <div className="grid md:grid-cols-3 gap-8">
                {/* Discord Channel and Role */}
                <div className="bg-gray-800/30 border border-gray-700/50 rounded-xl p-8 text-center hover:bg-gray-800/50 transition-all duration-300">
                  <div className="text-4xl mb-4">💬</div>
                  <h4 className="text-xl font-bold text-white mb-3">Discord Channel and Role</h4>
                  <p className="text-gray-400">Exclusive access to Founders community</p>
                </div>

                {/* Governance Rights */}
                <div className="bg-gray-800/30 border border-gray-700/50 rounded-xl p-8 text-center hover:bg-gray-800/50 transition-all duration-300">
                  <div className="text-4xl mb-4">🗳️</div>
                  <h4 className="text-xl font-bold text-white mb-3">Governance Rights</h4>
                  <p className="text-gray-400">Vote on new blends and company decisions</p>
                </div>

                {/* 10,000 BREW Tokens */}
                <div className="bg-gray-800/30 border border-gray-700/50 rounded-xl p-8 text-center hover:bg-gray-800/50 transition-all duration-300">
                  <div className="text-4xl mb-4">🪙</div>
                  <h4 className="text-xl font-bold text-white mb-3">10,000 BREW Tokens</h4>
                  <p className="text-gray-400">Governance and utility token allocation</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-20 space-y-8">
            <h2 className="text-4xl font-bold text-white">Don't Miss the Revolution</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              This isn't just a relaunch – it's the birth of an entirely new industry. 
              Be among the first to experience the future of coffee.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="bg-green-400 text-black font-bold px-10 py-4 rounded-xl hover:bg-green-300 transition-all duration-300 hover:scale-105 flex items-center space-x-3 shadow-lg shadow-green-400/25">
                <Star className="w-6 h-6" />
                <span>Get VIP Early Access</span>
              </button>
              <button className="border-2 border-green-400 text-green-400 font-bold px-10 py-4 rounded-xl hover:bg-green-400/10 transition-all duration-300 flex items-center space-x-3">
                <Users className="w-6 h-6" />
                <span>Join the Community</span>
              </button>
            </div>

            <p className="text-gray-500 text-sm mt-8">
              © 2024 Bullish Cafe • Revolutionizing Coffee Through Blockchain Technology
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BrowserWindow 