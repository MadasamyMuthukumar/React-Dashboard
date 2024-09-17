import React, { useState } from 'react'
import { SIDEBAR_ITEMS } from '../constants'
import { motion } from 'framer-motion'
import { Menu } from 'lucide-react'
import { Link } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true) //by default sidebar will open
  return (
    <motion.div className={`relative z-10 transition-all duration-300 ease-in-out flex-shrink-0
    ${isOpen ? 'w-64' : 'w-20'}` }
    // animate={{width: isOpen ? '500' : '10'}}
    >

        <div className='h-full bg-gray-700 bg-opacity-50 p-4 backdrop-blur-sm border-r border-gray-800 flex flex-col p'>
            <motion.button 
            whileHover={{ scale: 1.1}}
            whileTap={{ scale: 0.9 }}
            onClick={()=>setIsOpen(!isOpen)}
            //max-w-fit -> will take only neccesasry width for menu icon
            className='p-2 rounded-full hover:bg-gray-700 transition-colors max-w-fit'>   
                <Menu size={24} />
            </motion.button>

            {/**sidebar items 
             * the items section can grow to max width of side bar
            */}
        <nav className='mt-8 flex-grow'>
            {
                SIDEBAR_ITEMS.map((item,_index)=>(
                    <Link key={item.href} to={item.href}>
                        <motion.div className='flex items-center justify-start px-2 py-4 text-sm font-medium rounded-lg
                         hover:bg-gray-700 transition-colors mb-2'>
                            <item.icon size={20} style={{color: item.color , minWidth:"20px"}} />

                            {/**Item Name */}
                            <AnimatePresence>
                                {
                                    isOpen && (
                                        <motion.div
                                        className='ml-4 whitespace-nowrap'
                                        initial={{opacity:0, width:0}}
                                        animate={{opacity:1, width:"full"}}
                                        exit={{opacity:0, width:0}}>
                                            {item.name}
                                        </motion.div>
                                    )
                                }

                               
                            </AnimatePresence>

                        </motion.div>
                    </Link>

                ))
            }

        </nav>

        </div>
      
    </motion.div>
  )
}

export default Sidebar
