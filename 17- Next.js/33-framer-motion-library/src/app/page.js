'use client'

import { motion } from 'framer-motion'

export default function Home() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 6 }}
      >
        Hello I am Arashad.
      </motion.div>

      <motion.button whileHover={{ scale: 4.1 }} whileTap={{ scale: 0.5 }}>
        Click Me
      </motion.button>

      <motion.div
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      > Lorem, ipsum dolor.</motion.div>
    </>
  )
}
