'use client'

import { motion } from 'framer-motion'

import Icons from '@/components/svgs/icons'
import { animate, transitions, variants } from '@/utils/animations'

export const links = [
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/suhani-v-6b30702a0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    icon: Icons.Linkedin,
  },
  {
    name: 'X',
    link: 'https://x.com/viola9584739128?t=Kqewkxa3O5JX0GlTFw-qSA&s=09',
    icon: Icons.X,
  },
  {
    name: 'Github',
    link: 'https://github.com/tecnicoviola',
    icon: Icons.Github,
  },
]

// Social component
export default function Social() {
  return (
    <motion.div
      {...animate}
      transition={transitions.default}
      variants={variants.staggerChildrenQuick}
      className="flex items-center justify-end space-x-2"
    >
      {links.map((link) => (
        <motion.a
          transition={transitions.default}
          variants={variants.fadeInDown}
          key={link.name}
          title={link.name}
          href={link.link}
          target="_blank"
          className="group relative flex h-12 w-12 items-center justify-center rounded-full border border-gray-30 transition-colors hover:border-green-400 active:top-[1px] dark:border-gray-500 dark:hover:border-gray-200"
        >
          <link.icon className="w-5 flex-shrink-0 text-gray-40 transition-all group-hover:text-gray-800 dark:text-gray-50 dark:group-hover:text-green-400" />
        </motion.a>
      ))}
    </motion.div>
  )
}
