'use client'

import { motion } from 'framer-motion'

import { transitions, variants, whileInView } from '@/utils/animations'

// Footer component
export default function Footer() {
  return (
    <>
      <footer className="border-b border-gray-30 dark:border-gray-500">
        <div className="mx-auto max-w-8xl px-2 xs:px-6 sm:px-10">
          <div className="border-x border-gray-30 p-8 dark:border-gray-500 xs:p-20">
            <motion.div
              {...whileInView}
              transition={transitions.default}
              variants={variants.fadeInDown}
              className="text-center"
            >
              <div className="mb-2 text-gray-50">
                Have something in your mind you&#39;d like to share?
                Let&#39;s connect! {` `}
              </div>
              <div className="mb-2 text-gray-50">
                Email – <a href="mailto:suhani4007@gmail.com">suhani4007@gmail.com</a>
              </div>
              <div className="mx-auto max-w-2xl text-gray-35 dark:text-gray-300">
                {new Date().getFullYear()} &copy; Sunny
              </div>
              <div className="mb-0 text-gray-500 font-light mt-1">
                {/* <span className='italic'>All credits goes to <a href="https://www.youtube.com/@kuldar/videos" target='_blank' className='text-gray-100'>Kuldar Kalvik</a></span>  */}
              </div>
            </motion.div>
          </div>
        </div>
      </footer>

      {/* Bottom bar */}
      <div className="mx-auto max-w-8xl px-2 xs:px-6 sm:px-10">
        <div className="h-2 border-x border-gray-30 dark:border-gray-500 xs:h-6 sm:h-16"></div>
      </div>
    </>
  )
}
