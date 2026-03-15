import { motion } from 'framer-motion';

export default function Desktop({ onNavigate }) {
    return (
        <div className='flex flex-col items-center justify-center h-full space-y-8 p-4 text-center'>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className='space-y-2'
            >
                <h1 className='text-5xl sm:text-6xl md:text-8xl font-black tracking-tighter text-arch-blue'>
                    MeetSept
                </h1>
                <p className='text-[10px] sm:text-sm md:text-base font-mono text-muted uppercase tracking-[0.2em] sm:tracking-[0.3em] font-medium px-4'>
                    Saptaparno Chakraborty's Portfolio
                </p>
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
            >
                <button
                    onClick={() => onNavigate('terminal')}
                    className='btn btn-secondary group flex items-center gap-3 px-6 py-3 border-arch-blue/30 hover:border-arch-blue text-xs uppercase cursor-pointer tracking-widest'
                >
                    <div className='w-2 h-2 rounded-full bg-arch-blue animate-pulse' />
                    Open septerminal
                </button>
            </motion.div>
        </div>
    );
}
