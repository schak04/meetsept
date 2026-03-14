import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from './context/ThemeContext';
import BootScreen from './components/layout/BootScreen';
import Waybar from './components/layout/Waybar';
import Terminal from './components/common/Terminal';
import Editor from './components/sections/Editor';
import Panel from './components/common/Panel';
import About from './components/sections/About';
import { Cpu } from 'lucide-react';

import Skills from './components/sections/Skills';

const App = () => {
    const [isBooting, setIsBooting] = useState(true);
    const [activeWindow, setActiveWindow] = useState('terminal');
    const { theme } = useTheme();

    const renderWindowContent = () => {
        switch (activeWindow) {
            case 'terminal':
                return (
                    <Terminal
                        onCommand={(cmd) => setActiveWindow(cmd)}
                        onClose={() => setActiveWindow('desktop')}
                    />
                );
            case 'projects':
                return <Editor />;
            case 'about':
                return (
                    <Panel title="ABOUT" onClose={() => setActiveWindow('terminal')}>
                        <About />
                    </Panel>
                );
            case 'skills':
                return (
                    <Panel title="SKILLS" onClose={() => setActiveWindow('terminal')}>
                        <Skills />
                    </Panel>
                );
            case 'cv':
                return (
                    <Panel title='CV' onClose={() => setActiveWindow('terminal')}>
                        <div className='flex flex-col items-center justify-center space-y-8 py-12'>
                            <div className='p-8 bg-white/5 dark:bg-black/40 border border-border dark:border-dark-border rounded-2xl flex flex-col items-center gap-6 text-center max-w-md'>
                                <Cpu size={48} className='text-arch-blue' />
                                <div>
                                    <h3 className='text-xl font-bold mb-2'>Saptaparno's CV</h3>
                                    <p className='text-sm text-muted'>Keeps updating often.</p>
                                </div>
                                <a
                                    href='/assets/SaptaparnoChakrabortyCV.pdf'
                                    download
                                    className='btn btn-primary w-full flex items-center justify-center gap-2'
                                >
                                    Download
                                </a>
                            </div>
                        </div>
                    </Panel>
                );
            default:
                return (
                    <div className='flex flex-col items-center justify-center h-full text-muted space-y-4'>
                        <Cpu size={48} className='animate-pulse' />
                        <p className='font-mono text-sm uppercase tracking-widest text-center'>
                            Module '{activeWindow}' is currently being mapped to a window...
                        </p>
                        <button
                            onClick={() => setActiveWindow('terminal')}
                            className='btn btn-secondary text-xs'
                        >
                            Return to the terminal
                        </button>
                    </div>
                );
        }
    };

    return (
        <div className='h-screen w-screen overflow-hidden flex flex-col font-i relative'>
            <div className={`absolute inset-0 transition-all duration-1000 ${theme === 'dark' ? 'opacity-30' : 'opacity-10'}`}>
                <div className='absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-arch-blue/20 rounded-full blur-[120px] animate-pulse' />
                <div className='absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/20 rounded-full blur-[120px]' />
                <div className='absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-blue-400/10 rounded-full blur-[100px]' />
                <div className='absolute inset-0 bg-[linear-gradient(to_right,#8888880a_1px,transparent_1px),linear-gradient(to_bottom,#8888880a_1px,transparent_1px)] bg-size[40px_40px]' />
            </div>

            <AnimatePresence>
                {isBooting && (
                    <BootScreen onComplete={() => setIsBooting(false)} />
                )}
            </AnimatePresence>

            {!isBooting && (
                <>
                    <Waybar activeWindow={activeWindow} onNavigate={setActiveWindow} />

                    <main className='flex-1 mt-10 p-4 md:p-6 lg:p-8 flex items-center justify-center relative z-10'>
                        <AnimatePresence mode='wait'>
                            <motion.div
                                key={activeWindow}
                                className='w-full h-full max-w-6xl max-h-[85vh]'
                                initial={{ opacity: 0, scale: 0.97, filter: 'blur(10px)' }}
                                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                                exit={{ opacity: 0, scale: 1.03, filter: 'blur(10px)' }}
                                transition={{
                                    type: 'spring',
                                    stiffness: 300,
                                    damping: 30
                                }}
                            >
                                {renderWindowContent()}
                            </motion.div>
                        </AnimatePresence>
                    </main>
                </>
            )}
        </div>
    );
};

export default App;


