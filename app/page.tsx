'use client'

import React, { useState, useEffect } from 'react'
import { Terminal, TypingAnimation, AnimatedSpan } from '@/components/terminal'
import { Dock, DockIcon } from '@/components/ui/dock'
import { Globe } from '@/components/ui/globe'
import { OrbitingCircles } from '@/components/ui/orbiting-circles'
import { AnimatedList } from '@/components/ui/animated-list'
import { IconCloud } from '@/components/ui/icon-cloud'
import BrowserWindow from '@/components/browser'
import { 
  Coffee, 
  Terminal as TerminalIcon, 
  Globe as GlobeIcon, 
  Settings, 
  Folder, 
  Mail, 
  Calendar,
  Camera,
  Music,
  Calculator,
  Clock,
  Wifi,
  Battery,
  Search,
  Apple
} from 'lucide-react'

interface TerminalCommand {
  command: string
  output: string[]
  delay: number
  type: 'system' | 'success' | 'warning' | 'error' | 'info'
}

const bootSequence: TerminalCommand[] = [
  {
    command: 'sudo systemctl start bullish-cafe-rebrand.service',
    output: [
      'Starting Bullish Cafe Rebranding Service...',
      '✓ Service started successfully',
      '🚀 Initializing crypto-coffee fusion protocols...'
    ],
    delay: 500,
    type: 'system'
  },
  {
    command: 'brew --version',
    output: [
      'BULLISH BREW SYSTEM v2.0.1-rebrand',
      '☕ Powered by XRP Ledger Technology',
      '🌱 Sustainable • Organic • Blockchain-Verified'
    ],
    delay: 1500,
    type: 'info'
  },
  {
    command: 'xrpl-verify --check-coffee-supply',
    output: [
      '🔍 Scanning blockchain for coffee authenticity...',
      '✓ 100% Organic certification verified',
      '✓ Fair Trade partnerships confirmed',
      '✓ Farm-to-cup traceability established',
      '✓ NFT reward system operational',
      '💎 Premium coffee collections ready'
    ],
    delay: 2500,
    type: 'system'
  },
  {
    command: 'tail -f /var/log/rebrand/transformation.log',
    output: [
      '[2024-12-15 10:30:15] ☕ BREW: Upgrading coffee experience...',
      '[2024-12-15 10:30:16] 🎨 DESIGN: New visual identity brewing...',
      '[2024-12-15 10:30:17] ✓ SUCCESS: XRP payment integration enhanced',
      '[2024-12-15 10:30:18] 🎯 UX: User experience optimization complete',
      '[2024-12-15 10:30:19] ✓ SUCCESS: NFT loyalty program upgraded',
      '[2024-12-15 10:30:20] 🚀 LAUNCH: Cold brew collections ready',
      '[2024-12-15 10:30:21] ✓ SUCCESS: Blockchain verification active',
      '[2024-12-15 10:30:22] ⚡ SPEED: Lightning-fast XRP settlements',
      '[2024-12-15 10:30:23] 🎉 READY: New Bullish Cafe experience prepared!'
    ],
    delay: 4000,
    type: 'info'
  }
]

// Desktop notification items
const notifications = [
  {
    name: "System Update",
    description: "macOS Sonoma 14.2.1",
    time: "2m ago",
    icon: "⚙️",
    color: "#007AFF",
  },
  {
    name: "Bullish Cafe",
    description: "New menu items available",
    time: "5m ago",
    icon: "☕",
    color: "#FF9500",
  },
  {
    name: "XRP Ledger",
    description: "Transaction confirmed",
    time: "8m ago",
    icon: "💎",
    color: "#00D4AA",
  },
  {
    name: "Calendar",
    description: "Coffee tasting at 3 PM",
    time: "15m ago",
    icon: "📅",
    color: "#FF3B30",
  },
]

// macOS wallpaper with actual image
const DesktopWallpaper = () => (
  <div className="fixed inset-0">
    {/* macOS wallpaper image */}
    <div 
      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('/10-15-Day-thumb.jpg')`
      }}
    />
    {/* Subtle overlay for better contrast */}
    <div className="absolute inset-0 bg-black/10" />
  </div>
)

// Interactive macOS Menu Bar
const MenuBar = ({ 
  activeApp, 
  showAppleMenu, 
  showAppMenu, 
  toggleAppleMenu, 
  toggleAppMenu, 
  openApp 
}: {
  activeApp: string
  showAppleMenu: boolean
  showAppMenu: string | null
  toggleAppleMenu: () => void
  toggleAppMenu: (menu: string) => void
  openApp: (app: string) => void
}) => {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 h-6 md:h-6 bg-black/30 backdrop-blur-xl border-b border-white/10 z-50 flex items-center justify-between px-2 md:px-4 text-white text-xs md:text-sm font-medium font-sf-pro">
      <div className="flex items-center space-x-2 md:space-x-6 relative">
        {/* Apple Menu */}
        <div className="relative">
          <div 
            className="text-sm md:text-lg cursor-pointer hover:bg-white/10 px-1 rounded transition-colors"
            onClick={toggleAppleMenu}
          >
            🍎
          </div>
          {showAppleMenu && (
            <div className="absolute top-6 left-0 w-48 md:w-64 bg-gray-800/95 backdrop-blur-xl rounded-lg border border-white/20 shadow-2xl py-2 z-[100] menu-dropdown">
              <div className="px-3 md:px-4 py-2 hover:bg-white/10 cursor-pointer transition-colors text-xs md:text-sm" onClick={() => openApp('About')}>
                About This Mac
              </div>
              <div className="border-t border-white/10 my-1"></div>
              <div className="px-3 md:px-4 py-2 hover:bg-white/10 cursor-pointer transition-colors text-xs md:text-sm" onClick={() => openApp('Preferences')}>
                System Preferences...
              </div>
              <div className="px-3 md:px-4 py-2 hover:bg-white/10 cursor-pointer transition-colors text-xs md:text-sm">
                App Store...
              </div>
              <div className="border-t border-white/10 my-1"></div>
              <div className="px-3 md:px-4 py-2 hover:bg-white/10 cursor-pointer transition-colors text-xs md:text-sm">
                Recent Items
              </div>
              <div className="border-t border-white/10 my-1"></div>
              <div className="px-3 md:px-4 py-2 hover:bg-white/10 cursor-pointer transition-colors text-xs md:text-sm">
                Force Quit {activeApp}...
              </div>
              <div className="border-t border-white/10 my-1"></div>
              <div className="px-3 md:px-4 py-2 hover:bg-white/10 cursor-pointer transition-colors text-xs md:text-sm">
                Sleep
              </div>
              <div className="px-3 md:px-4 py-2 hover:bg-white/10 cursor-pointer transition-colors text-xs md:text-sm">
                Restart...
              </div>
              <div className="px-3 md:px-4 py-2 hover:bg-white/10 cursor-pointer transition-colors text-xs md:text-sm">
                Shut Down...
              </div>
            </div>
          )}
        </div>

        {/* Active App Name */}
        <div className="font-semibold text-xs md:text-sm truncate max-w-20 md:max-w-none">{activeApp}</div>

        {/* App Menus - Hidden on mobile */}
        <div className="hidden md:flex items-center space-x-6">
          <div className="relative">
            <div 
              className="text-white/80 hover:text-white cursor-pointer transition-colors hover:bg-white/10 px-2 py-1 rounded"
              onClick={() => toggleAppMenu('File')}
            >
              File
            </div>
            {showAppMenu === 'File' && (
              <div className="absolute top-6 left-0 w-48 bg-gray-800/95 backdrop-blur-xl rounded-lg border border-white/20 shadow-2xl py-2 z-[100] menu-dropdown">
                <div className="px-4 py-2 hover:bg-white/10 cursor-pointer transition-colors">New Window</div>
                <div className="px-4 py-2 hover:bg-white/10 cursor-pointer transition-colors">New Tab</div>
                <div className="border-t border-white/10 my-1"></div>
                <div className="px-4 py-2 hover:bg-white/10 cursor-pointer transition-colors">Open...</div>
                <div className="px-4 py-2 hover:bg-white/10 cursor-pointer transition-colors">Save</div>
                <div className="border-t border-white/10 my-1"></div>
                <div className="px-4 py-2 hover:bg-white/10 cursor-pointer transition-colors">Close Window</div>
              </div>
            )}
          </div>

          <div className="relative">
            <div 
              className="text-white/80 hover:text-white cursor-pointer transition-colors hover:bg-white/10 px-2 py-1 rounded"
              onClick={() => toggleAppMenu('Edit')}
            >
              Edit
            </div>
            {showAppMenu === 'Edit' && (
              <div className="absolute top-6 left-0 w-48 bg-gray-800/95 backdrop-blur-xl rounded-lg border border-white/20 shadow-2xl py-2 z-[100]">
                <div className="px-4 py-2 hover:bg-white/10 cursor-pointer transition-colors">Undo</div>
                <div className="px-4 py-2 hover:bg-white/10 cursor-pointer transition-colors">Redo</div>
                <div className="border-t border-white/10 my-1"></div>
                <div className="px-4 py-2 hover:bg-white/10 cursor-pointer transition-colors">Cut</div>
                <div className="px-4 py-2 hover:bg-white/10 cursor-pointer transition-colors">Copy</div>
                <div className="px-4 py-2 hover:bg-white/10 cursor-pointer transition-colors">Paste</div>
              </div>
            )}
          </div>

          <div className="relative">
            <div 
              className="text-white/80 hover:text-white cursor-pointer transition-colors hover:bg-white/10 px-2 py-1 rounded"
              onClick={() => toggleAppMenu('View')}
            >
              View
            </div>
            {showAppMenu === 'View' && (
              <div className="absolute top-6 left-0 w-48 bg-gray-800/95 backdrop-blur-xl rounded-lg border border-white/20 shadow-2xl py-2 z-[100]">
                <div className="px-4 py-2 hover:bg-white/10 cursor-pointer transition-colors">Show Toolbar</div>
                <div className="px-4 py-2 hover:bg-white/10 cursor-pointer transition-colors">Customize Toolbar...</div>
                <div className="border-t border-white/10 my-1"></div>
                <div className="px-4 py-2 hover:bg-white/10 cursor-pointer transition-colors">Enter Full Screen</div>
              </div>
            )}
          </div>

          <div className="text-white/80 hover:text-white cursor-pointer transition-colors hover:bg-white/10 px-2 py-1 rounded">
            Window
          </div>
          <div className="text-white/80 hover:text-white cursor-pointer transition-colors hover:bg-white/10 px-2 py-1 rounded">
            Help
          </div>
        </div>
      </div>

      {/* Right side - System controls */}
      <div className="flex items-center space-x-2 md:space-x-4">
        <div className="flex items-center space-x-1 md:space-x-2">
          <Wifi className="w-3 h-3 md:w-4 md:h-4 cursor-pointer hover:text-blue-400 transition-colors" />
          <Battery className="w-3 h-3 md:w-4 md:h-4 cursor-pointer hover:text-green-400 transition-colors" />
          <div className="font-sf-mono text-xs md:text-sm cursor-pointer hover:bg-white/10 px-1 md:px-2 py-1 rounded transition-colors">
            {/* Mobile: Show only time */}
            <span className="md:hidden">
              {currentTime.toLocaleTimeString([], { 
                hour: '2-digit', 
                minute: '2-digit' 
              })}
            </span>
            {/* Desktop: Show full date and time */}
            <span className="hidden md:inline">
              {currentTime.toLocaleDateString('en-US', { 
                weekday: 'short', 
                month: 'short', 
                day: 'numeric' 
              })} {currentTime.toLocaleTimeString([], { 
                hour: '2-digit', 
                minute: '2-digit' 
              })}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

// Interactive Desktop Icons
const DesktopIcons = ({ openApp }: { openApp: (app: string) => void }) => (
  <div className="fixed top-8 right-2 md:right-6 space-y-4 md:space-y-6 z-30">
    <div 
      className="flex flex-col items-center space-y-1 md:space-y-2 cursor-pointer group"
      onClick={() => openApp('Finder')}
      onDoubleClick={() => openApp('Finder')}
    >
      <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-105 group-active:scale-95 transition-transform">
        <Folder className="w-6 h-6 md:w-8 md:h-8 text-white" />
      </div>
      <span className="text-white text-xs font-medium bg-black/20 px-1.5 md:px-2 py-0.5 md:py-1 rounded backdrop-blur-sm group-hover:bg-black/40 transition-colors">
        Documents
      </span>
    </div>
    <div 
      className="flex flex-col items-center space-y-1 md:space-y-2 cursor-pointer group"
      onClick={() => openApp('Coffee')}
      onDoubleClick={() => openApp('Coffee')}
    >
      <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-105 group-active:scale-95 transition-transform">
        <Coffee className="w-6 h-6 md:w-8 md:h-8 text-white" />
      </div>
      <span className="text-white text-xs font-medium bg-black/20 px-1.5 md:px-2 py-0.5 md:py-1 rounded backdrop-blur-sm group-hover:bg-black/40 transition-colors">
        Bullish Cafe
      </span>
    </div>
    <div 
      className="flex flex-col items-center space-y-1 md:space-y-2 cursor-pointer group"
      onClick={() => openApp('Network')}
      onDoubleClick={() => openApp('Network')}
    >
      <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-105 group-active:scale-95 transition-transform">
        <GlobeIcon className="w-6 h-6 md:w-8 md:h-8 text-white" />
      </div>
      <span className="text-white text-xs font-medium bg-black/20 px-1.5 md:px-2 py-0.5 md:py-1 rounded backdrop-blur-sm group-hover:bg-black/40 transition-colors">
        XRP Network
      </span>
    </div>
  </div>
)

// Notification Center with macOS styling
const NotificationCenter = () => (
  <div className="fixed top-8 left-2 md:left-6 w-72 md:w-80 z-30">
    <div className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-3 md:p-4 shadow-2xl">
      <h3 className="text-white font-semibold mb-3 md:mb-4 text-base md:text-lg">Notifications</h3>
      <AnimatedList className="space-y-2 md:space-y-3">
        {notifications.map((notification, idx) => (
          <div
            key={idx}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-3 md:p-4 border border-white/10 hover:bg-white/15 transition-colors cursor-pointer"
          >
            <div className="flex items-center space-x-2 md:space-x-3">
              <div
                className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center text-sm md:text-lg shadow-lg"
                style={{ backgroundColor: notification.color }}
              >
                {notification.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-white font-semibold text-xs md:text-sm truncate">{notification.name}</div>
                <div className="text-white/80 text-xs md:text-sm truncate">{notification.description}</div>
              </div>
              <div className="text-white/60 text-xs flex-shrink-0">{notification.time}</div>
            </div>
          </div>
        ))}
      </AnimatedList>
    </div>
  </div>
)

// Main Terminal Window with authentic macOS Terminal styling
const TerminalWindow = ({ 
  currentPhase, 
  currentCommandIndex, 
  showCommand, 
  showOutput, 
  loadingProgress, 
  redirectCountdown,
  handleCommandComplete 
}: any) => (
  <div className="fixed inset-0 flex items-center justify-center z-40 p-2 md:p-4">
    <div className="w-full max-w-5xl">
      {/* macOS Terminal Window */}
      <div className="bg-gray-900/95 backdrop-blur-xl rounded-lg md:rounded-xl shadow-2xl border border-gray-700/50 overflow-hidden">
        {/* Terminal Title Bar */}
        <div className="h-8 md:h-10 bg-gray-800/90 flex items-center px-3 md:px-4 border-b border-gray-700/50">
          <div className="flex space-x-1.5 md:space-x-2">
            <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-red-500 hover:bg-red-400 transition-colors cursor-pointer"></div>
            <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-yellow-500 hover:bg-yellow-400 transition-colors cursor-pointer"></div>
            <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-green-500 hover:bg-green-400 transition-colors cursor-pointer"></div>
          </div>
          <div className="absolute inset-x-0 text-center text-xs md:text-sm text-gray-300 font-medium">
            <span className="hidden md:inline">Terminal — zsh — 120×40</span>
            <span className="md:hidden">Terminal</span>
          </div>
        </div>
        
        {/* Terminal Content */}
        <div className="p-3 md:p-6 h-[70vh] md:h-[600px] overflow-auto bg-black/95 font-sf-mono text-xs md:text-sm custom-scrollbar">
          {currentPhase === 'boot' && (
            <div className="space-y-4">
              {bootSequence.slice(0, currentCommandIndex + 1).map((cmd, index) => (
                <div key={index} className="space-y-2">
                  {(index < currentCommandIndex || showCommand) && (
                    <div className="flex items-center space-x-2">
                      <span className="text-green-400 font-bold">$</span>
                      <TypingAnimation
                        key={`command-${index}`}
                        text={cmd.command}
                        className="text-green-300 font-sf-mono"
                        speed={30}
                        onComplete={index === currentCommandIndex ? handleCommandComplete : undefined}
                      />
                    </div>
                  )}
                  {(index < currentCommandIndex || showOutput) && (
                    <AnimatedSpan delay={index === currentCommandIndex ? 1000 : 0}>
                      <div className="ml-4 space-y-1">
                        {cmd.output.map((line, lineIndex) => (
                          <div key={lineIndex} className="text-gray-300 font-sf-mono text-sm">
                            {line}
                          </div>
                        ))}
                      </div>
                    </AnimatedSpan>
                  )}
                </div>
              ))}
            </div>
          )}

          {currentPhase === 'loading' && (
            <div className="space-y-6">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-green-400 mb-4">
                  🚀 Bullish Cafe Transformation Complete!
                </h2>
                <div className="w-full bg-gray-700 rounded-full h-4 mb-4">
                  <div 
                    className="bg-green-400 h-4 rounded-full transition-all duration-300 ease-out"
                    style={{ width: `${loadingProgress}%` }}
                  />
                </div>
                <p className="text-gray-300">
                  Loading progress: {loadingProgress.toFixed(1)}%
                </p>
              </div>
            </div>
          )}

          {currentPhase === 'complete' && (
            <div className="text-center space-y-6">
              <div className="text-6xl mb-4">🎉</div>
              <h2 className="text-3xl font-bold text-green-400">
                Welcome to the New Bullish Cafe!
              </h2>
              <p className="text-gray-300 text-lg">
                Your crypto-coffee experience is ready to brew...
              </p>
              <div className="text-yellow-400 text-xl font-sf-mono">
                Opening browser in {redirectCountdown} seconds...
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
)

// Realistic macOS App Icon Component
const AppIcon = ({ 
  gradient, 
  icon: Icon, 
  isActive = false 
}: { 
  gradient: string; 
  icon: any; 
  isActive?: boolean 
}) => (
  <div className={`relative w-full h-full rounded-2xl overflow-hidden ${gradient} shadow-lg`}>
    {/* App icon background with realistic styling */}
    <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-black/20" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
    
    {/* Icon container */}
    <div className="relative w-full h-full flex items-center justify-center">
      <Icon className="w-7 h-7 text-white drop-shadow-sm" />
    </div>
    
    {/* Realistic highlight */}
    <div className="absolute top-1 left-1 right-4 h-3 bg-gradient-to-r from-white/30 to-transparent rounded-full blur-sm" />
    
    {/* Border highlight */}
    <div className="absolute inset-0 rounded-2xl ring-1 ring-white/20" />
  </div>
)

// Interactive macOS Dock
const MacDock = ({ openApp, activeApp }: { openApp: (app: string) => void, activeApp: string }) => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <div className="fixed bottom-2 md:bottom-4 left-1/2 transform -translate-x-1/2 z-50">
      <Dock 
        direction="bottom" 
        iconSize={isMobile ? 40 : 56} 
        iconMagnification={isMobile ? 50 : 80} 
        iconDistance={isMobile ? 100 : 140}
      >
      <DockIcon onClick={() => openApp('Spotlight')}>
        <AppIcon 
          gradient="bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600" 
          icon={Search}
        />
      </DockIcon>
      <DockIcon isActive={activeApp === 'Terminal'} onClick={() => openApp('Terminal')}>
        <AppIcon 
          gradient="bg-gradient-to-br from-gray-700 via-gray-800 to-black" 
          icon={TerminalIcon}
          isActive={activeApp === 'Terminal'}
        />
      </DockIcon>
      <DockIcon onClick={() => openApp('Coffee')}>
        <AppIcon 
          gradient="bg-gradient-to-br from-amber-400 via-orange-500 to-orange-600" 
          icon={Coffee}
        />
      </DockIcon>
      <DockIcon onClick={() => openApp('Mail')}>
        <AppIcon 
          gradient="bg-gradient-to-br from-blue-300 via-blue-400 to-blue-500" 
          icon={Mail}
        />
      </DockIcon>
      <DockIcon onClick={() => openApp('Calendar')}>
        <AppIcon 
          gradient="bg-gradient-to-br from-red-400 via-red-500 to-red-600" 
          icon={Calendar}
        />
      </DockIcon>
      {/* Hide some icons on mobile to prevent overcrowding */}
      <div className="hidden sm:block">
        <DockIcon onClick={() => openApp('Camera')}>
          <AppIcon 
            gradient="bg-gradient-to-br from-purple-400 via-purple-500 to-purple-600" 
            icon={Camera}
          />
        </DockIcon>
      </div>
      <div className="hidden sm:block">
        <DockIcon onClick={() => openApp('Music')}>
          <AppIcon 
            gradient="bg-gradient-to-br from-pink-400 via-pink-500 to-pink-600" 
            icon={Music}
          />
        </DockIcon>
      </div>
      <DockIcon onClick={() => openApp('Calculator')}>
        <AppIcon 
          gradient="bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600" 
          icon={Calculator}
        />
      </DockIcon>
      <DockIcon onClick={() => openApp('Browser')}>
        <AppIcon 
          gradient="bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700" 
          icon={GlobeIcon}
        />
      </DockIcon>
      <DockIcon onClick={() => openApp('Preferences')}>
        <AppIcon 
          gradient="bg-gradient-to-br from-gray-500 via-gray-600 to-gray-700" 
          icon={Settings}
        />
      </DockIcon>
    </Dock>
  </div>
  )
}

// System Dialogs and Application Windows
const SystemDialogs = ({ 
  systemDialogs, 
  closeApp 
}: { 
  systemDialogs: {[key: string]: boolean}
  closeApp: (app: string) => void 
}) => (
  <>
    {/* About This Mac Dialog */}
    {systemDialogs.about && (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[200] p-4">
        <div className="bg-gray-800/95 backdrop-blur-xl rounded-xl border border-white/20 shadow-2xl w-full max-w-sm md:w-96 overflow-hidden window-enter window-shadow">
          <div className="h-8 md:h-10 bg-gray-700/90 flex items-center px-3 md:px-4 border-b border-white/10">
            <div className="flex space-x-1.5 md:space-x-2">
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-red-500 hover:bg-red-400 cursor-pointer" onClick={() => closeApp('About')}></div>
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-yellow-500 hover:bg-yellow-400 cursor-pointer"></div>
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-green-500 hover:bg-green-400 cursor-pointer"></div>
            </div>
            <div className="absolute inset-x-0 text-center text-xs md:text-sm text-white font-medium">
              About This Mac
            </div>
          </div>
          <div className="p-4 md:p-6 text-center">
            <div className="text-4xl md:text-6xl mb-3 md:mb-4">🍎</div>
            <h2 className="text-lg md:text-xl font-bold text-white mb-2">macOS Sonoma</h2>
            <p className="text-gray-300 mb-3 md:mb-4 text-sm md:text-base">Version 14.2.1 (23C71)</p>
            <div className="text-xs md:text-sm text-gray-400 space-y-1">
              <p>MacBook Pro (16-inch, 2023)</p>
              <p>Apple M3 Max</p>
              <p>36 GB Memory</p>
              <p>Startup Disk: Macintosh HD</p>
            </div>
          </div>
        </div>
      </div>
    )}

    {/* System Preferences */}
    {systemDialogs.preferences && (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[200] p-4">
        <div className="bg-gray-800/95 backdrop-blur-xl rounded-xl border border-white/20 shadow-2xl w-full max-w-lg md:w-[600px] h-[80vh] md:h-[500px] overflow-hidden">
          <div className="h-8 md:h-10 bg-gray-700/90 flex items-center px-3 md:px-4 border-b border-white/10">
            <div className="flex space-x-1.5 md:space-x-2">
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-red-500 hover:bg-red-400 cursor-pointer" onClick={() => closeApp('Preferences')}></div>
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-yellow-500 hover:bg-yellow-400 cursor-pointer"></div>
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-green-500 hover:bg-green-400 cursor-pointer"></div>
            </div>
            <div className="absolute inset-x-0 text-center text-xs md:text-sm text-white font-medium">
              System Preferences
            </div>
          </div>
          <div className="p-4 md:p-6 overflow-y-auto h-full">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              {[
                { name: 'General', icon: '⚙️', color: 'bg-gray-600' },
                { name: 'Desktop & Screen Saver', icon: '🖼️', color: 'bg-blue-600' },
                { name: 'Dock & Menu Bar', icon: '📱', color: 'bg-purple-600' },
                { name: 'Mission Control', icon: '🚀', color: 'bg-indigo-600' },
                { name: 'Siri', icon: '🎤', color: 'bg-pink-600' },
                { name: 'Spotlight', icon: '🔍', color: 'bg-blue-500' },
                { name: 'Language & Region', icon: '🌍', color: 'bg-green-600' },
                { name: 'Notifications', icon: '🔔', color: 'bg-red-600' },
              ].map((pref, idx) => (
                <div key={idx} className="flex flex-col items-center space-y-1 md:space-y-2 p-2 md:p-3 rounded-lg hover:bg-white/10 cursor-pointer transition-colors">
                  <div className={`w-10 h-10 md:w-12 md:h-12 ${pref.color} rounded-lg md:rounded-xl flex items-center justify-center text-lg md:text-xl shadow-lg`}>
                    {pref.icon}
                  </div>
                  <span className="text-white text-xs text-center leading-tight">{pref.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )}

    {/* Calculator App */}
    {systemDialogs.calculator && (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[200]">
        <div className="bg-gray-900/95 backdrop-blur-xl rounded-xl border border-white/20 shadow-2xl w-80 overflow-hidden">
          <div className="h-10 bg-gray-700/90 flex items-center px-4 border-b border-white/10">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 cursor-pointer" onClick={() => closeApp('Calculator')}></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-400 cursor-pointer"></div>
              <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-400 cursor-pointer"></div>
            </div>
            <div className="absolute inset-x-0 text-center text-sm text-white font-medium">
              Calculator
            </div>
          </div>
          <div className="p-4">
            <div className="bg-black rounded-lg p-4 mb-4">
              <div className="text-right text-white text-3xl font-mono">0</div>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {['C', '±', '%', '÷', '7', '8', '9', '×', '4', '5', '6', '−', '1', '2', '3', '+', '0', '', '.', '='].map((btn, idx) => (
                <button
                  key={idx}
                  className={`h-12 rounded-lg font-semibold transition-colors ${
                    ['C', '±', '%'].includes(btn) ? 'bg-gray-600 hover:bg-gray-500 text-white' :
                    ['÷', '×', '−', '+', '='].includes(btn) ? 'bg-orange-500 hover:bg-orange-400 text-white' :
                    btn === '0' ? 'col-span-2 bg-gray-700 hover:bg-gray-600 text-white' :
                    btn === '' ? 'invisible' :
                    'bg-gray-700 hover:bg-gray-600 text-white'
                  }`}
                >
                  {btn}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    )}

    {/* Mail App */}
    {systemDialogs.mail && (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[200]">
        <div className="bg-gray-800/95 backdrop-blur-xl rounded-xl border border-white/20 shadow-2xl w-[800px] h-[600px] overflow-hidden">
          <div className="h-10 bg-gray-700/90 flex items-center px-4 border-b border-white/10">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 cursor-pointer" onClick={() => closeApp('Mail')}></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-400 cursor-pointer"></div>
              <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-400 cursor-pointer"></div>
            </div>
            <div className="absolute inset-x-0 text-center text-sm text-white font-medium">
              Mail
            </div>
          </div>
          <div className="flex h-[calc(100%-2.5rem)]">
            <div className="w-64 bg-gray-700/50 border-r border-white/10 p-4">
              <h3 className="text-white font-semibold mb-4">Mailboxes</h3>
              <div className="space-y-2">
                <div className="text-blue-400 cursor-pointer hover:bg-white/10 p-2 rounded">📥 Inbox (3)</div>
                <div className="text-gray-300 cursor-pointer hover:bg-white/10 p-2 rounded">📤 Sent</div>
                <div className="text-gray-300 cursor-pointer hover:bg-white/10 p-2 rounded">📋 Drafts</div>
                <div className="text-gray-300 cursor-pointer hover:bg-white/10 p-2 rounded">🗑️ Trash</div>
              </div>
            </div>
            <div className="flex-1 p-4">
              <div className="text-center text-gray-400 mt-20">
                <Mail className="w-16 h-16 mx-auto mb-4 opacity-50" />
                <p>No messages selected</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )}

    {/* Other app dialogs can be added here */}
  </>
)

// Background decorative elements
const BackgroundElements = () => (
  <div className="fixed inset-0 pointer-events-none z-10">
    {/* Floating Globe */}
    <div className="absolute top-20 right-20 opacity-20">
      <Globe className="w-32 h-32" />
    </div>
    
    {/* Orbiting Circles */}
    <div className="absolute bottom-20 left-20 opacity-15">
      <OrbitingCircles iconSize={20} radius={60}>
        <Coffee className="w-4 h-4 text-white" />
        <GlobeIcon className="w-4 h-4 text-white" />
        <TerminalIcon className="w-4 h-4 text-white" />
        <Settings className="w-4 h-4 text-white" />
      </OrbitingCircles>
    </div>

    {/* Icon Cloud */}
    <div className="absolute top-1/2 left-10 transform -translate-y-1/2 opacity-10">
      <IconCloud 
        icons={[
          <Coffee key="coffee" className="w-6 h-6 text-white" />,
          <GlobeIcon key="globe" className="w-6 h-6 text-white" />,
          <TerminalIcon key="terminal" className="w-6 h-6 text-white" />,
          <Settings key="settings" className="w-6 h-6 text-white" />,
          <Mail key="mail" className="w-6 h-6 text-white" />,
          <Calendar key="calendar" className="w-6 h-6 text-white" />,
        ]}
      />
    </div>
  </div>
)

export default function ComingSoonPage() {
  const [currentPhase, setCurrentPhase] = useState<'boot' | 'loading' | 'complete'>('boot')
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0)
  const [showCommand, setShowCommand] = useState(false)
  const [showOutput, setShowOutput] = useState(false)
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [redirectCountdown, setRedirectCountdown] = useState(3)
  const [isBrowserOpen, setIsBrowserOpen] = useState(false)
  const [browserManuallyClosed, setBrowserManuallyClosed] = useState(false)

  // macOS System State
  const [openWindows, setOpenWindows] = useState<string[]>([])
  const [activeApp, setActiveApp] = useState<string>('Terminal')
  const [showAppleMenu, setShowAppleMenu] = useState(false)
  const [showAppMenu, setShowAppMenu] = useState<string | null>(null)
  const [systemDialogs, setSystemDialogs] = useState<{[key: string]: boolean}>({
    about: false,
    preferences: false,
    calculator: false,
    mail: false,
    calendar: false,
    camera: false,
    music: false,
    finder: false
  })

  // App Management Functions
  const openApp = (appName: string) => {
    if (!openWindows.includes(appName)) {
      setOpenWindows(prev => [...prev, appName])
    }
    setActiveApp(appName)
    
    // Special handling for browser app
    if (appName.toLowerCase() === 'browser' || appName.toLowerCase() === 'safari') {
      setIsBrowserOpen(true)
      setBrowserManuallyClosed(false)
      return
    }
    
    setSystemDialogs(prev => ({ ...prev, [appName.toLowerCase()]: true }))
  }

  const closeApp = (appName: string) => {
    setOpenWindows(prev => prev.filter(app => app !== appName))
    setSystemDialogs(prev => ({ ...prev, [appName.toLowerCase()]: false }))
    if (activeApp === appName) {
      setActiveApp(openWindows.length > 1 ? openWindows[0] : 'Finder')
    }
  }

  const toggleAppleMenu = () => {
    setShowAppleMenu(!showAppleMenu)
    setShowAppMenu(null)
  }

  const toggleAppMenu = (menuName: string) => {
    setShowAppMenu(showAppMenu === menuName ? null : menuName)
    setShowAppleMenu(false)
  }

  // Click outside to close menus
  useEffect(() => {
    const handleClickOutside = () => {
      setShowAppleMenu(false)
      setShowAppMenu(null)
    }

    if (showAppleMenu || showAppMenu) {
      document.addEventListener('click', handleClickOutside)
      return () => document.removeEventListener('click', handleClickOutside)
    }
  }, [showAppleMenu, showAppMenu])

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Cmd+Space for Spotlight
      if (e.metaKey && e.code === 'Space') {
        e.preventDefault()
        openApp('Spotlight')
      }
      // Cmd+Q to quit current app
      if (e.metaKey && e.code === 'KeyQ') {
        e.preventDefault()
        if (activeApp !== 'Finder') {
          closeApp(activeApp)
        }
      }
      // Escape to close dialogs
      if (e.code === 'Escape') {
        const openDialog = Object.keys(systemDialogs).find(key => systemDialogs[key])
        if (openDialog) {
          closeApp(openDialog.charAt(0).toUpperCase() + openDialog.slice(1))
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [activeApp, systemDialogs, openApp, closeApp])

  // Boot sequence logic
  useEffect(() => {
    if (currentPhase === 'boot') {
      const command = bootSequence[currentCommandIndex]
      if (command) {
        const timer = setTimeout(() => {
          setShowCommand(true)
        }, command.delay)
        return () => clearTimeout(timer)
      }
    }
  }, [currentPhase, currentCommandIndex])

  const handleCommandComplete = () => {
    // Prevent multiple calls for the same command
    if (currentCommandIndex >= bootSequence.length) {
      return
    }
    
    setShowOutput(true)
    
    setTimeout(() => {
      if (currentCommandIndex < bootSequence.length - 1) {
        setCurrentCommandIndex(prev => prev + 1)
        setShowCommand(false)
        setShowOutput(false)
      } else {
        setTimeout(() => {
          setCurrentPhase('loading')
        }, 2000)
      }
    }, 1500)
  }

  // Loading progress
  useEffect(() => {
    if (currentPhase === 'loading') {
      const interval = setInterval(() => {
        setLoadingProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval)
            setTimeout(() => {
              setCurrentPhase('complete')
            }, 1000)
            return 100
          }
          return prev + 2
        })
      }, 100)
      return () => clearInterval(interval)
    }
  }, [currentPhase])

  // Browser opening logic instead of redirect
  useEffect(() => {
    if (currentPhase === 'complete' && !browserManuallyClosed) {
      const interval = setInterval(() => {
        setRedirectCountdown(prev => {
          if (prev <= 1) {
            clearInterval(interval)
            setIsBrowserOpen(true)
            return 0
          }
          return prev - 1
        })
      }, 1000)
      return () => clearInterval(interval)
    }
  }, [currentPhase, browserManuallyClosed])

  // Additional effect to ensure browser opens when countdown reaches 0
  useEffect(() => {
    if (currentPhase === 'complete' && redirectCountdown === 0 && !isBrowserOpen && !browserManuallyClosed) {
      setIsBrowserOpen(true)
    }
  }, [currentPhase, redirectCountdown, isBrowserOpen, browserManuallyClosed])

  const handleBrowserClose = () => {
    setIsBrowserOpen(false)
    setBrowserManuallyClosed(true)
  }

  return (
    <div className="min-h-screen overflow-hidden relative font-sf-pro">

      
      {/* Desktop Content with conditional blur */}
      <div className={`transition-all duration-300 ${isBrowserOpen ? 'blur-sm scale-105' : ''}`}>
        {/* Desktop Wallpaper */}
        <DesktopWallpaper />
        
        {/* Background Decorative Elements */}
        <BackgroundElements />
        
        {/* macOS Menu Bar */}
        <MenuBar 
          activeApp={activeApp}
          showAppleMenu={showAppleMenu}
          showAppMenu={showAppMenu}
          toggleAppleMenu={toggleAppleMenu}
          toggleAppMenu={toggleAppMenu}
          openApp={openApp}
        />
        
        {/* Desktop Icons */}
        <DesktopIcons openApp={openApp} />
        
        {/* Notification Center */}
        <NotificationCenter />
        
        {/* Main Terminal Window */}
        <TerminalWindow
          currentPhase={currentPhase}
          currentCommandIndex={currentCommandIndex}
          showCommand={showCommand}
          showOutput={showOutput}
          loadingProgress={loadingProgress}
          redirectCountdown={redirectCountdown}
          handleCommandComplete={handleCommandComplete}
        />
        
        {/* macOS Dock */}
        <MacDock openApp={openApp} activeApp={activeApp} />
      </div>
      
      {/* Browser Window */}
      <BrowserWindow 
        isOpen={isBrowserOpen} 
        onClose={handleBrowserClose} 
      />

      {/* System Dialogs */}
      <SystemDialogs 
        systemDialogs={systemDialogs} 
        closeApp={closeApp} 
      />
    </div>
  )
} 