import { motion } from 'framer-motion';
import { Minus, Square, X } from 'lucide-react';

export default function Panel({ title, children, onClose, id }) {
    return (
        <motion.div
            layoutId={id}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className='hypr-window flex flex-col h-full w-full max-w-4xl mx-auto rounded-lg overflow-hidden'
        >
            <div className='bg-black/5 dark:bg-black/40 px-4 py-2 flex items-center justify-between border-b border-border dark:border-dark-border transition-colors'>
                <div className='flex items-center gap-3'>
                    <span className='text-[10px] font-mono font-bold text-arch-blue uppercase tracking-widest px-2 py-0.5 bg-arch-blue/10 rounded'>
                        {title}
                    </span>
                    <span className='text-[10px] font-mono text-muted'>~/meetsept/{title.toLowerCase()}</span>
                </div>
                <div className='flex items-center gap-1'>
                    <WmButton icon={Minus} hoverColor='text-yellow-400' hoverBg='hover:bg-yellow-400/10 hover:border-yellow-400/40' />
                    <WmButton icon={Square} hoverColor='text-green-400' hoverBg='hover:bg-green-400/10 hover:border-green-400/40' />
                    <WmButton icon={X} hoverColor='text-red-400' hoverBg='hover:bg-red-400/10 hover:border-red-400/40' onClick={onClose} />
                </div>
            </div>

            <div className='flex-1 overflow-y-auto p-8 custom-scrollbar bg-bg-secondary/50 dark:bg-dark-bg-secondary/80 backdrop-blur transition-colors'>
                {children}
            </div>

            <div className='bg-black/5 dark:bg-dark-bg-secondary text-[10px] font-mono text-muted px-4 py-1 flex justify-between border-t border-border dark:border-dark-border'>
                <span>[INFO] Workspace: Main</span>
                <span>meetsept@arch: ~/{title.toLowerCase()}</span>
            </div>

        </motion.div>
    );
}

function WmButton({ icon: Icon, hoverColor, hoverBg, onClick }) {
    return (
        <button
            onClick={onClick}
            className={`w-6 h-6 flex items-center justify-center border border-border dark:border-white/10 rounded-sm text-muted ${hoverColor} ${hoverBg} transition-all duration-150 cursor-pointer group`}
        >
            <Icon size={10} className='transition-transform group-hover:scale-110' />
        </button>
    );
}