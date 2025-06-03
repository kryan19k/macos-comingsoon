'use client'

import React from 'react'
import { Coffee, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-700 to-pink-600 flex items-center justify-center p-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Back Button */}
        <div className="absolute top-8 left-8">
          <Link 
            href="/"
            className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors bg-white/10 backdrop-blur-xl rounded-xl px-4 py-2 border border-white/20"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Terminal</span>
          </Link>
        </div>

        {/* Main Content */}
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-12 shadow-2xl">
          <div className="text-8xl mb-8">☕</div>
          
          <h1 className="text-6xl font-bold text-white mb-6">
            Welcome to Bullish Cafe
          </h1>
          
          <p className="text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            The future of crypto-coffee is here. Experience premium coffee with XRP Ledger integration.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-xl font-semibold text-white mb-2">Sustainable</h3>
              <p className="text-white/80">100% organic, fair-trade coffee sourced directly from farmers</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="text-4xl mb-4">💎</div>
              <h3 className="text-xl font-semibold text-white mb-2">Blockchain Verified</h3>
              <p className="text-white/80">Every bean tracked on XRP Ledger for complete transparency</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-white mb-2">Lightning Fast</h3>
              <p className="text-white/80">Instant XRP payments for seamless transactions</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <button className="bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold px-8 py-4 rounded-xl hover:scale-105 transition-transform shadow-lg">
              <Coffee className="w-5 h-5 inline mr-2" />
              Order Your Coffee
            </button>
            
            <p className="text-white/70 text-sm">
              Coming Soon • Follow us for updates
            </p>
          </div>
        </div>
        
        {/* Footer */}
        <div className="mt-12 text-white/60 text-sm">
          <p>© 2024 Bullish Cafe. Powered by XRP Ledger Technology.</p>
        </div>
      </div>
    </div>
  )
} 