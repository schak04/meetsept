import { useState, useEffect } from 'react';
import {
    Cpu,
    Wifi,
    Battery,
    Sun,
    Moon,
    Terminal,
    Layout,
    Calendar,
    Clock
} from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export default function Waybar({ activeWindow, onNavigate }) {
    const { theme, toggleTheme } = useTheme();
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const formatDate = (date) => date.toLocaleDateString('en-US', { day: '2-digit', month: 'short' });
    const formatTime = (date) => date.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' });

    return (
        <header className='fixed top-0 left-0 right-0 h-8 flex items-center justify-between px-2 z-50 pointer-events-none'>
            <div className='flex items-center gap-1 pointer-events-auto'>
                <button
                    onClick={() => onNavigate && onNavigate('terminal')}
                    className='waybar-module text-arch-blue border-arch-blue/50 font-bold hover:bg-arch-blue/10 transition-colors cursor-pointer group'
                >
                    <Terminal size={12} className='group-hover:scale-110 transition-transform' />
                    <span>MeetSept</span>
                </button>
                <div className='waybar-module shadow-sm'>
                    <Layout size={12} className='text-arch-blue' />
                    <span className='capitalize'>{activeWindow || 'Desktop'}</span>
                </div>
            </div>

            <div className='hidden md:flex items-center gap-1 pointer-events-auto'>
                <div className='waybar-module border-transparent bg-transparent text-[12px]'>
                    Saptaparno Chakraborty (Aspiring Software Engineer | Hobbyist Game Developer)
                </div>
            </div>

            <div className='flex items-center gap-1 pointer-events-auto'>
                <div className='waybar-module'>
                    <Wifi size={12} className='text-green-500' />
                    <span>up</span>
                </div>
                <div className='waybar-module'>
                    <Cpu size={12} className='text-arch-blue' />
                    <span>0.42%</span>
                </div>
                <div className='waybar-module'>
                    <Battery size={12} className='text-yellow-500' />
                    <span>84%</span>
                </div>

                <button
                    onClick={toggleTheme}
                    className='waybar-module hover:bg-arch-blue/10 hover:border-arch-blue/30 transition-all active:scale-95 cursor-pointer group'
                    aria-label='Toggle Theme'
                >
                    {theme === 'dark' ? (
                        <Moon size={12} className='text-arch-blue group-hover:rotate-12 transition-transform' />
                    ) : (
                        <Sun size={12} className='text-arch-blue group-hover:rotate-90 transition-transform' />
                    )}
                </button>

                <div className='waybar-module bg-arch-blue/10 border-arch-blue/30 text-arch-blue font-bold'>
                    <Calendar size={12} />
                    <span>{formatDate(time)}</span>
                    <span className='mx-1 opacity-20'>|</span>
                    <Clock size={12} />
                    <span>{formatTime(time)}</span>
                </div>
            </div>
        </header>
    );
}
