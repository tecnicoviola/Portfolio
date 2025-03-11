'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

import { transitions, variants, whileInView } from '@/utils/animations'
import SectionTitle from '@/components/shared/section-title'
import Illustrations from '@/components/svgs/illustrations'
import Icons from '@/components/svgs/icons'

export const works = [
  {
    name: 'ExpenseIQ',
    description:
      'Your personal AI-Driven Finance Advisor',
    link: 'https://expenseiq.netlify.app/',
    illustration: Illustrations.Windows,
  },
  {
    name: 'Lorem Ipsum',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. In explicabo quas voluptatum! Rem magni vero eligendi ex recusandae odio molestiae!',
    link: 'https://github.com/tecnicoviola/TeleMate',
    illustration: Illustrations.Barber,
  },
  {
    name: 'Lorem Ipsum',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. In explicabo quas voluptatum! Rem magni vero eligendi ex recusandae odio molestiae!',
    link: 'https://github.com/tecnicoviola/Multi-Lingual_Stream',
    illustration: Illustrations.Ounaturg,
  },
  {
    name: 'Lorem Ipsum',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. In explicabo quas voluptatum! Rem magni vero eligendi ex recusandae odio molestiae!',
    link: 'https://github.com/tecnicoviola/Multi-Lingual_Stream',
    illustration: Illustrations.Barber,
  },
  {
    name: 'Lorem Ipsum',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum asperiores ad magni voluptatibus omnis, deleniti non nisi, nihil dolor iusto dolore! Nostrum aut iste porro, ratione earum ipsa tempore culpa quae quod beatae. Nesciunt, recusandae nostrum.', 
    link: '#',
    illustration: Illustrations.Ounaturg,
  },
]

// Works
export default function Works() {
  return (
    <div className="col-span-12 border-x border-t border-gray-30 bg-gray-5/20 bg-dotted-light bg-center p-4 dark:border-gray-500 dark:bg-transparent dark:bg-dotted-dark xs:p-8">
      {/* Title */}
      <SectionTitle title="Projects" icon={Icons.Code} />

      {/* List of work */}
      <div className="mt-4 grid grid-cols-6 gap-4 xs:mt-6 xs:gap-8">
        {works.map((work) => (
          <motion.div
            {...whileInView}
            transition={transitions.default}
            variants={variants.fadeInDown}
            key={work.name}
            className="group/card relative col-span-6 overflow-hidden rounded-2xl border-b border-t-0 border-gray-10 bg-gradient-to-br from-gray-10 via-white to-gray-5 active:top-[1px] dark:border-b-0 dark:border-gray-50/20 dark:from-gray-1000 dark:via-gray-800 dark:to-gray-950 md:col-span-3 last:md:col-span-6 lg:col-span-2 last:lg:col-span-4"
          >
            <Link href={work.link} className="h-full w-full">
              <work.illustration className="absolute text-gray-20 dark:text-gray-500/80" />

              {/* Content */}
              <div className="relative flex h-full flex-col items-start bg-white/50 p-8 transition-colors group-hover/card:bg-transparent dark:bg-gray-950/50">
                <h2 className="text-5xl font-bold tracking-snug">
                  {work.name}
                </h2>

                <div className="mb-10 mt-6 flex-1 space-y-6 pr-4 text-lg leading-normal text-gray-50">
                  {work.description}
                </div>

                <div className="inline-flex items-center space-x-2 rounded-lg border border-gray-30 bg-white py-2 pl-2.5 pr-2 transition-colors group-hover/card:border-gray-40 dark:border-gray-500 dark:bg-gray-900 dark:group-hover/card:border-gray-200">
                  <div className="text-sm font-bold leading-none text-gray-1000 dark:text-white">
                    View more
                  </div>
                  <div className="flex h-[18px] w-[18px] items-center justify-center rounded-full border border-gray-40 transition-colors group-hover/card:border-green-500 group-hover/card:bg-green-500 dark:border-gray-200 dark:group-hover/card:border-green-400 dark:group-hover/card:bg-green-400">
                    <Icons.Arrow className="h-2 w-2 text-gray-100 transition-colors group-hover/card:text-white dark:text-white dark:group-hover/card:text-gray-1000" />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
