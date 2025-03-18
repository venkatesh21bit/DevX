"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowPathIcon, ArrowUturnLeftIcon, StarIcon, XMarkIcon } from "@heroicons/react/24/solid"

export default function RetroGamingStore() {
  const [activeTab, setActiveTab] = useState("games")
  const [showPopup, setShowPopup] = useState(true)

  return (
    <div className="w-full bg-sky-200 text-black">
      {/* Top Navigation Bar */}
      <div className="w-full bg-gradient-to-r from-gray-200 to-gray-300 border-b-2 border-gray-400 p-1 flex items-center">
        <div className="flex items-center space-x-2 px-2">
          <div className="w-4 h-4 rounded-full bg-red-500"></div>
          <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
          <div className="w-4 h-4 rounded-full bg-green-500"></div>
        </div>
        <div className="flex-1 mx-2">
          <div className="bg-white rounded border border-gray-400 flex items-center px-2 py-1 text-xs">
            <span className="text-gray-600 mr-1">www.</span>
            <span className="font-bold">gamingzone2000.com</span>
            <span className="text-gray-600 ml-1">/games</span>
          </div>
        </div>
        <div className="flex space-x-1 px-2">
          <button className="w-6 h-6 bg-gray-300 border border-gray-400 rounded flex items-center justify-center">
            <ArrowUturnLeftIcon className="w-3 h-3" />
          </button>
          <button className="w-6 h-6 bg-gray-300 border border-gray-400 rounded flex items-center justify-center">
            <ArrowPathIcon className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* Site Header */}
      <div className="w-full bg-gradient-to-b from-blue-500 to-blue-700 p-2 flex justify-between items-center border-b-4 border-yellow-400">
        <div className="flex items-center">
          <motion.div
            className="bg-white rounded-lg p-1 mr-2 border-2 border-black shadow-md"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-yellow-500 to-blue-600">
              GAMING<span className="text-green-500">ZONE</span>
            </h1>
          </motion.div>
          <div className="hidden md:block text-white text-xs italic">Your #1 source for online games since 2003!</div>
        </div>
        <div className="flex space-x-2">
          <motion.button
            className="bg-green-500 text-white text-xs px-2 py-1 rounded border border-green-700 shadow hover:bg-green-600"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            LOGIN
          </motion.button>
          <motion.button
            className="bg-yellow-400 text-black text-xs px-2 py-1 rounded border border-yellow-600 shadow hover:bg-yellow-500"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            SIGN UP FREE!
          </motion.button>
        </div>
      </div>

      {/* Featured Game Banner */}
      <div className="w-full bg-gradient-to-r from-yellow-300 to-yellow-400 p-2 border-b-2 border-yellow-600">
        <div className="bg-white rounded-md border-2 border-blue-500 p-1 shadow-md">
          <div className="relative h-20 overflow-hidden">
            <div className="absolute inset-0 flex items-center">
              <Image
                src="/placeholder.svg?height=80&width=600"
                alt="New Game Release"
                width={600}
                height={80}
                className="object-cover"
              />
              <motion.div
                className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-blue-600 to-transparent flex items-center justify-center"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="transform rotate-12 bg-yellow-300 text-blue-800 font-bold px-4 py-1 rounded-lg border-2 border-blue-800 shadow-lg">
                  NEW GAME!
                </div>
              </motion.div>
              <motion.div
                className="absolute left-4 bottom-2 bg-black bg-opacity-70 text-white text-xs p-1 rounded"
                whileHover={{ scale: 1.1 }}
              >
                PLAY NOW &gt;&gt;
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="w-full bg-gray-200 border-b-2 border-gray-400 flex justify-center">
        <div className="flex">
          {["GAMES", "TOP RATED", "NEW RELEASES", "ACTION", "PUZZLE", "SPORTS"].map((tab) => (
            <button
              key={tab}
              className={`px-4 py-1 text-sm font-bold ${activeTab.toLowerCase() === tab.toLowerCase() ? "bg-white border-t-2 border-l-2 border-r-2 border-gray-400 rounded-t-md -mb-[2px]" : "bg-gradient-to-b from-gray-300 to-gray-200 border border-gray-400 rounded-t-md"}`}
              onClick={() => setActiveTab(tab.toLowerCase())}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row">
        {/* Left Sidebar */}
        <div className="w-full md:w-1/5 bg-gray-100 p-2 border-r-2 border-gray-300">
          <div className="bg-blue-100 border-2 border-blue-300 rounded-md p-2 mb-4">
            <h3 className="text-sm font-bold text-blue-800 mb-2 border-b border-blue-300 pb-1">CATEGORIES</h3>
            <ul className="text-xs space-y-1">
              {[
                "Action",
                "Adventure",
                "Arcade",
                "Board Games",
                "Card Games",
                "Driving",
                "Puzzle",
                "RPG",
                "Shooting",
                "Sports",
                "Strategy",
              ].map((category) => (
                <li key={category} className="hover:bg-blue-200 p-1 cursor-pointer">
                  &gt; {category}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-yellow-100 border-2 border-yellow-300 rounded-md p-2">
            <h3 className="text-sm font-bold text-yellow-800 mb-2 border-b border-yellow-300 pb-1">ONLINE NOW</h3>
            <div className="text-xs">
              <p className="font-bold">1,337 Gamers Online</p>
              <div className="w-full bg-gray-300 h-2 mt-1 mb-2 rounded-full overflow-hidden">
                <motion.div
                  className="bg-green-500 h-full"
                  initial={{ width: "0%" }}
                  animate={{ width: "75%" }}
                  transition={{ duration: 1 }}
                ></motion.div>
              </div>
              <p className="text-center italic">Join the fun!</p>
            </div>
          </div>
        </div>

        {/* Main Game Content */}
        <div className="w-full md:w-3/5 bg-white p-4">
          <div className="mb-4">
            <h2 className="text-lg font-bold text-blue-800 border-b-2 border-blue-300 pb-1 mb-2">FEATURED GAMES</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { title: "Space Blaster 3D", img: "/placeholder.svg?height=100&width=100" },
                { title: "Puzzle Master", img: "/placeholder.svg?height=100&width=100" },
                { title: "Racing Challenge", img: "/placeholder.svg?height=100&width=100" },
                { title: "Zombie Survival", img: "/placeholder.svg?height=100&width=100" },
                { title: "Fantasy Quest", img: "/placeholder.svg?height=100&width=100" },
                { title: "Ninja Fighter", img: "/placeholder.svg?height=100&width=100" },
              ].map((game, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-100 border-2 border-gray-300 rounded-md p-2 hover:bg-blue-100 hover:border-blue-400 transition-colors cursor-pointer"
                  whileHover={{ y: -5 }}
                >
                  <div className="relative">
                    <Image
                      src={game.img || "/placeholder.svg"}
                      alt={game.title}
                      width={100}
                      height={100}
                      className="w-full object-cover border border-gray-400"
                    />
                    {index === 0 && (
                      <motion.div
                        className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-1 rounded-full transform rotate-12 border border-white"
                        animate={{ rotate: [12, -12, 12] }}
                        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                      >
                        HOT!
                      </motion.div>
                    )}
                  </div>
                  <h3 className="text-xs font-bold mt-1 text-center">{game.title}</h3>
                  <div className="flex justify-center mt-1">
                    <motion.button
                      className="bg-green-500 text-white text-[10px] px-2 py-0.5 rounded border border-green-700"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      PLAY NOW!
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <h2 className="text-lg font-bold text-red-800 border-b-2 border-red-300 pb-1 mb-2">NEW RELEASES</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {["Super Racer 2000", "Alien Attack", "Treasure Hunt", "Bubble Pop"].map((game, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-100 border border-gray-300 rounded-md p-1 hover:bg-red-100 hover:border-red-400 transition-colors cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="bg-gray-200 h-12 flex items-center justify-center border border-gray-400">
                    <span className="text-xs font-bold">{game}</span>
                  </div>
                  <div className="flex justify-center mt-1">
                    <div className="flex items-center">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <StarIcon key={star} className="w-3 h-3 text-yellow-500" />
                        ))}
                      </div>
                      <span className="text-[10px] ml-1 text-gray-600">(New!)</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <motion.div
              className="bg-yellow-100 border-2 border-yellow-400 rounded-md p-2 text-center"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <p className="text-sm font-bold">DOWNLOAD OUR GAME LAUNCHER!</p>
              <p className="text-xs mb-2">Get access to exclusive games and faster loading times!</p>
              <motion.button
                className="bg-blue-600 text-white text-xs px-4 py-1 rounded-md border border-blue-800 shadow hover:bg-blue-700"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                DOWNLOAD NOW - FREE!
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-full md:w-1/5 bg-gray-100 p-2 border-l-2 border-gray-300">
          <div className="bg-red-100 border-2 border-red-300 rounded-md p-2 mb-4">
            <h3 className="text-sm font-bold text-red-800 mb-2 border-b border-red-300 pb-1">TOP PLAYERS</h3>
            <ol className="text-xs space-y-1 list-decimal list-inside">
              {["GameMaster99", "SuperPlayer1", "ProGamer2000", "GameKing", "UltimateGamer"].map((player) => (
                <li key={player} className="hover:bg-red-200 p-1 cursor-pointer flex justify-between">
                  <span>{player}</span>
                  <span className="font-bold">9999</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="bg-green-100 border-2 border-green-300 rounded-md p-2 mb-4">
            <h3 className="text-sm font-bold text-green-800 mb-2 border-b border-green-300 pb-1">GAME OF THE DAY</h3>
            <div className="text-center">
              <Image
                src="/placeholder.svg?height=80&width=120"
                alt="Game of the Day"
                width={120}
                height={80}
                className="mx-auto border-2 border-gray-400 mb-1"
              />
              <p className="text-xs font-bold">Mega Racer 3000</p>
              <motion.button
                className="bg-red-500 text-white text-xs px-2 py-0.5 mt-1 rounded border border-red-700"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                PLAY NOW!
              </motion.button>
            </div>
          </div>

          <div className="bg-gray-200 border-2 border-gray-400 rounded-md p-2 text-center">
            <p className="text-xs font-bold mb-1">ADVERTISEMENT</p>
            <div className="bg-white h-40 flex items-center justify-center border border-gray-400">
              <p className="text-xs text-gray-500">AD SPACE</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="w-full bg-gray-800 text-white p-4 text-center text-xs">
        <div className="mb-2">
          <a href="#" className="hover:underline mx-2">
            Home
          </a>
          <span>|</span>
          <a href="#" className="hover:underline mx-2">
            Games
          </a>
          <span>|</span>
          <a href="#" className="hover:underline mx-2">
            Top Rated
          </a>
          <span>|</span>
          <a href="#" className="hover:underline mx-2">
            Contact
          </a>
          <span>|</span>
          <a href="#" className="hover:underline mx-2">
            About
          </a>
        </div>
        <p>© 2000-2005 GamingZone. All Rights Reserved.</p>
        <p className="mt-1">Best viewed in Internet Explorer 6.0 or Netscape Navigator 7.0 at 800x600 resolution.</p>
      </div>

      {/* Popup */}
      {showPopup && (
        <motion.div
          className="fixed bottom-4 right-4 bg-white border-2 border-blue-500 rounded-md p-2 shadow-lg w-64"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-between items-center border-b border-gray-300 pb-1 mb-2">
            <h4 className="text-sm font-bold text-blue-800">NEWSLETTER</h4>
            <button
              className="text-xs bg-red-500 text-white w-4 h-4 rounded-full flex items-center justify-center"
              onClick={() => setShowPopup(false)}
            >
              <XMarkIcon className="w-3 h-3" />
            </button>
          </div>
          <p className="text-xs mb-2">Sign up for our newsletter to get the latest games and exclusive offers!</p>
          <input
            type="text"
            placeholder="Your Email Address"
            className="w-full text-xs border border-gray-400 p-1 mb-2"
          />
          <motion.button
            className="bg-green-500 text-white text-xs px-2 py-1 rounded border border-green-700 w-full"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            SUBSCRIBE NOW!
          </motion.button>
        </motion.div>
      )}
    </div>
  )
}

