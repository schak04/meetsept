import { motion } from 'framer-motion';
import { Power } from 'lucide-react';

export default function PowerOn({ onStart }) {
    return (
        <div className='fixed inset-0 bg-black flex flex-col items-center justify-center z-100 overflow-hidden'>
            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className='relative z-10 flex flex-col items-center gap-8'
            >
                <button
                    onClick={onStart}
                    className='group relative p-8 rounded-full border border-arch-blue/30 bg-black hover:border-arch-blue hover:bg-arch-blue/5 transition-all duration-700 cursor-pointer'
                >
                    <div className='absolute inset-0 rounded-full border border-arch-blue/20 animate-ping opacity-20' />
                    <Power 
                        size={48} 
                        className='text-arch-blue relative z-10 transition-all duration-700 group-hover:scale-110' 
                    />
                </button>
                <div className='flex flex-col items-center gap-3'>
                    <motion.div 
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className='flex items-center gap-2'
                    >
                        <p className='text-[12px] font-mono text-green-500 uppercase tracking-[0.5em] font-bold'>System Ready</p>
                    </motion.div>
                </div>
            </motion.div>
            <div className='absolute w-125 h-125 bg-arch-blue/5 rounded-full blur-[150px] pointer-events-none' />
        </div>
    );
}