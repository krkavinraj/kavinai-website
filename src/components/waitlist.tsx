import { HeartHandshakeIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

export const Waitlist = () => {
    return (
        <section className='flex justify-center py-20 px-4'>
            <div className="waitlist max-w-4xl space-y-8 text-center">
                <div className="icon flex justify-center animate-pulse">
                    <HeartHandshakeIcon className='size-32 text-rose-600 dark:text-rose-400 bg-gradient-to-br from-pink-100 to-blue-100 dark:from-pink-900/30 dark:to-blue-900/30 p-6 rounded-[2rem] shadow-lg' />
                </div>
                <div className="details space-y-6 text-center">
                    <h2 className='text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-800 to-rose-600 dark:from-gray-100 dark:to-rose-400 bg-clip-text text-transparent mx-auto'>
                        Try it for free
                    </h2>

                    <p className='text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed'>
                        Supercharge your productivity with Kavi. Deploy AI agents to handle your workload and experience next-level performance today.
                    </p>

                    <div className='mt-8 hover:scale-[1.02] transition-transform flex justify-center'>
                        <Link href={'/waitlist'}>
                            <Button>Join Waitlist</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
