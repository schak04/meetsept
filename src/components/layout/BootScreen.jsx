import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { Sun, Moon } from 'lucide-react';

const BOOT_LOGS = [
    "Initializing Saptaparno\'s Portfolio (MeetSept)...",
    "Loading architectural modules...",
    "Mounting /about",
    "Mounting /skills",
    "Mounting /projects",
    "Mounting /training",
    "Mounting /learning",
    "Mounting /cv",
    "Mounting /contact",
    "Checking system integrity...",
    "Optimizing workspace layout...",
    "Starting environment...",
    "READY"
];

export default function BootScreen({ onComplete }) {
    const [logs, setLogs] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') onComplete();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onComplete]);

    useEffect(() => {
        if (currentIndex < BOOT_LOGS.length) {
            const timer = setTimeout(() => {
                setLogs(prev => [...prev, BOOT_LOGS[currentIndex]]);
                setCurrentIndex(prev => prev + 1);
            }, Math.random() * 500 + 200);
            return () => clearTimeout(timer);
        } else {
            const timer = setTimeout(onComplete, 800);
            return () => clearTimeout(timer);
        }
    }, [currentIndex, onComplete]);

    return (
        <div className='fixed inset-0 z-50 flex flex-col bg-black text-green-500 font-mono p-8 overflow-hidden'>
            <div className='absolute top-4 right-4'>
                <button
                    onClick={toggleTheme}
                    className='p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white'
                >
                    {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                </button>
            </div>

            <div className='flex-1 space-y-1'>
                {logs.map((log, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className='flex items-center gap-2'
                    >
                        {log === "READY" ? (
                            <span className='text-arch-blue font-bold'>[ DONE ] {log}</span>
                        ) : log.includes("Initializing") ? (
                            <span className='text-white font-bold'> --- {log} ---</span>
                        ) : (
                            <>
                                <span className='text-blue-400'>[ OK ]</span>
                                <span>{log}</span>
                            </>
                        )}
                    </motion.div>
                ))}
                {currentIndex < BOOT_LOGS.length && (
                    <motion.span
                        animate={{ opacity: [1, 0] }}
                        transition={{ repeat: Infinity, duration: 0.8 }}
                        className='inline-block w-2 h-5 bg-green-500 ml-1 translate-y-1'
                    />
                )}
            </div>

            <button
                onClick={onComplete}
                className='absolute bottom-8 right-8 text-sm text-gray-500 hover:text-white transition-colors flex items-center gap-2'
            >
                Press ESC to boot up instantly
            </button>
        </div>
    );
}