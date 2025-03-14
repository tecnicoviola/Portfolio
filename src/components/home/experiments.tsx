'use client'

import { motion } from 'framer-motion'

import SectionTitle from '@/components/shared/section-title'
import Icons from '@/components/svgs/icons'
import { GeneratedIllustration } from '@/components/home/experiments/generated-illustration'
import { AiIllustration } from '@/components/home/experiments/ai-illustration'
import { UntickIllustration } from '@/components/home/experiments/untick-illustration'
import { animate, transitions, variants } from '@/utils/animations'

export const experiments = [
  {
    name: 'Lorem',
    description: 'Lorem ipsum dolor sit amet.', 
    link: '#',
    illustration: <GeneratedIllustration />,
  },
  {
    name: 'Lorem',
    description: 'Lorem ipsum dolor sit amet.',
    link: '#',
    illustration: <AiIllustration />,
  },
  {
    name: 'Lorem',
    description: 'Lorem ipsum dolor sit amet.',
    link: '#',
    illustration: <UntickIllustration />,
  },
]

// Experiments
export default function Experiments() {
  return (
    <div className="order-3 col-span-12 border-x border-t border-gray-30 bg-gray-5/20 bg-dotted-light bg-center p-4 dark:border-gray-500 dark:bg-transparent dark:bg-dotted-dark xs:p-8 xl:order-3 xl:col-span-4 xl:border-l-0 xl:border-t-0">
      {/* Title */}
      <SectionTitle title="Experiments" icon={Icons.Labs} />

      {/* List of experiments */}
      <motion.div
        {...animate}
        transition={{ ...transitions.default, delay: 0.75 }}
        variants={variants.staggerChildren}
        className="mt-4 grid grid-cols-6 gap-4 xs:mt-6 xs:gap-5"
      >
        {experiments.map((experiment) => {
          return (
            <motion.a
              transition={transitions.default}
              variants={variants.fadeInDown}
              target="_blank"
              href={experiment.link}
              key={experiment.name}
              className="group/card relative col-span-6 overflow-hidden rounded-2xl border border-gray-30 bg-white bg-gradient-to-br from-gray-35 via-white to-gray-40 transition-colors hover:border-gray-35 active:top-[1px] dark:border-gray-500 dark:bg-gray-1000 dark:from-gray-900 dark:via-gray-1000 dark:to-gray-800 dark:hover:border-gray-200/70 last:max-[1103px]:col-span-6 md:col-span-3 min-[1104px]:col-span-2 xl:col-span-6"
            >
              {/* Experiment */}
              <div className="flex h-full items-center justify-between space-x-4 lg:h-36 bg-white transition-colors hover:bg-white/90 dark:bg-gray-1000 dark:hover:bg-transparent">
                <div className="flex-shrink-0 p-6 pr-2">
                  <h3 className="text-3xl font-bold leading-none">
                    {experiment.name}
                  </h3>
                  <div className="relative mt-3 text-lg leading-snug text-gray-50">
                    {experiment.description}
                  </div>
                </div>
                <div className='relative right-3 lg:-bottom-3'> 
                    {experiment.illustration}
                </div>
                
              </div>
            </motion.a>
          )
        })}
      </motion.div>
    </div>
  )
}
