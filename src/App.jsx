import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from './context/ThemeContext';
import BootScreen from './components/layout/BootScreen';
import PowerOn from './components/layout/PowerOn';
import Waybar from './components/layout/Waybar';
import Desktop from './components/layout/Desktop';
import Terminal from './components/common/Terminal';
import Editor from './components/sections/Editor';
import Panel from './components/common/Panel';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Learning from './components/sections/Learning';
import Training from './components/sections/Training';
import Contact from './components/sections/Contact';
import CV from './components/sections/CV';
import { Cpu } from 'lucide-react';

const App = () => {
    const [hasStarted, setHasStarted] = useState(false);
    const [isBooting, setIsBooting] = useState(true);
    const [activeWindow, setActiveWindow] = useState('desktop');
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
                    <Panel title='ABOUT' onClose={() => setActiveWindow('terminal')}>
                        <About />
                    </Panel>
                );
            case 'skills':
                return (
                    <Panel title='SKILLS' onClose={() => setActiveWindow('terminal')}>
                        <Skills />
                    </Panel>
                );
            case 'learning':
                return (
                    <Panel title='LEARNING' onClose={() => setActiveWindow('terminal')}>
                        <Learning />
                    </Panel>
                );
            case 'training':
                return (
                    <Panel title='TRAINING' onClose={() => setActiveWindow('terminal')}>
                        <Training />
                    </Panel>
                );
            case 'cv':
                return (
                    <Panel title='CV' onClose={() => setActiveWindow('terminal')}>
                        <CV />
                    </Panel>
                );
            case 'contact':
                return (
                    <Panel title='CONTACT' onClose={() => setActiveWindow('terminal')}>
                        <Contact />
                    </Panel>
                );
            case 'desktop':
                return (
                    <Desktop onNavigate={setActiveWindow}/>
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
                            Return to septerminal
                        </button>
                    </div>
                );
        }
    };

    return (
        <div className='h-screen w-screen overflow-hidden flex flex-col font-i relative bg-bg-primary dark:bg-dark-bg-primary transition-colors duration-200'>
            <AnimatePresence>
                {!hasStarted && (
                    <PowerOn onStart={() => setHasStarted(true)} />
                )}
            </AnimatePresence>

            {hasStarted && (
                <>
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

                            <main className='flex-1 mt-8 sm:mt-10 p-2 sm:p-4 md:p-6 lg:p-8 flex items-center justify-center relative z-10 overflow-hidden'>
                                <AnimatePresence mode='wait'>
                                    <motion.div
                                        key={activeWindow}
                                        className='w-full h-full max-w-6xl max-h-[90vh] sm:max-h-[85vh]'
                                        initial={{ opacity: 0, scale: 0.98, filter: 'blur(5px)' }}
                                        animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                                        exit={{ opacity: 0, scale: 1.02, filter: 'blur(5px)' }}
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
                </>
            )}
        </div>
    );
};

export default App;