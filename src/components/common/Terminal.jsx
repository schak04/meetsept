import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal as TerminalIcon, X, Minus, Square } from 'lucide-react';

const HELP_MESSAGE = `
Available commands:
  about           - Learn about Saptaparno
  skills          - View his skills
  projects        - View his projects
  learning        - Current & future-planned explorations
  training        - Trainings undergone
  cv              - View his CV
  contact         - Contact details
  help            - List all commands
  clear           - Clear terminal
`;

export default function Terminal({ onCommand, onClose }) {
    const [input, setInput] = useState('');
    const [history, setHistory] = useState([
        { type: 'output', content: "Welcome to MeetSept (Saptaparno's Portfolio)" },
        { type: 'output', content: 'Type "help" to see available commands.' }
    ]);
    const inputRef = useRef(null);
    const scrollRef = useRef(null);

    useEffect(() => {
        if (inputRef.current) inputRef.current.focus();
    }, []);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [history]);

    const handleCommand = (e) => {
        if (e.key === 'Enter') {
            const cmd = input.trim().toLowerCase();
            const newHistory = [...history, { type: 'input', content: input }];

            if (cmd === 'clear') {
                setHistory([]);
            } else if (cmd === 'help') {
                setHistory([...newHistory, { type: 'output', content: HELP_MESSAGE }]);
            } else if (['about', 'skills', 'projects', 'learning', 'training', 'cv', 'contact'].includes(cmd)) {
                setHistory([...newHistory, { type: 'output', content: `Executing ${cmd}...` }]);
                onCommand(cmd);
            } else if (cmd !== '') {
                setHistory([...newHistory, { type: 'output', content: `bash: command not found: ${cmd}` }]);
            } else {
                setHistory(newHistory);
            }

            setInput('');
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className='hypr-window flex flex-col w-full h-full rounded-lg overflow-hidden'
        >
            <div className='bg-black/5 dark:bg-black/40 px-4 py-2 flex items-center justify-between border-b border-border dark:border-dark-border'>
                <div className='flex items-center gap-3'>
                    <TerminalIcon size={14} className='text-arch-blue' />
                    <span className='text-xs font-mono text-muted'>~/meetsept/workspace</span>
                </div>
                <div className='flex items-center gap-1'>
                    <button className='w-6 h-6 flex items-center justify-center border border-border dark:border-white/10 rounded-sm text-muted hover:text-yellow-400 hover:bg-yellow-400/10 hover:border-yellow-400/40 transition-all duration-150 cursor-pointer group'>
                        <Minus size={10} className='transition-transform group-hover:scale-110' />
                    </button>
                    <button className='w-6 h-6 flex items-center justify-center border border-border dark:border-white/10 rounded-sm text-muted hover:text-green-400 hover:bg-green-400/10 hover:border-green-400/40 transition-all duration-150 cursor-pointer group'>
                        <Square size={10} className='transition-transform group-hover:scale-110' />
                    </button>
                    <button className='w-6 h-6 flex items-center justify-center border border-border dark:border-white/10 rounded-sm text-muted hover:text-red-400 hover:bg-red-400/10 hover:border-red-400/40 transition-all duration-150 cursor-pointer group' onClick={onClose}>
                        <X size={10} className='transition-transform group-hover:scale-110' />
                    </button>
                </div>
            </div>

            <div
                ref={scrollRef}
                className='flex-1 p-2 sm:p-4 overflow-y-auto font-mono text-[12px] sm:text-sm bg-bg-primary/50 dark:bg-dark-bg-primary/80 custom-scrollbar transition-colors'
                onClick={() => inputRef.current?.focus()}
            >
                {history.map((line, i) => (
                    <div key={i} className='mb-1'>
                        {line.type === 'input' ? (
                            <div className='flex gap-2'>
                                <span className='text-arch-blue'>~</span>
                                <span className='text-green-500'>$</span>
                                <span className='text-text-primary dark:text-dark-text-primary'>{line.content}</span>
                            </div>
                        ) : (
                            <pre className='whitespace-pre-wrap text-text-primary dark:text-dark-text-primary opacity-90 break-all sm:break-normal'>{line.content}</pre>
                        )}
                    </div>
                ))}

                <div className='flex gap-2 items-center'>
                    <span className='text-arch-blue'>~</span>
                    <span className='text-green-500'>$</span>
                    <input
                        ref={inputRef}
                        type='text'
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleCommand}
                        className='flex-1 bg-transparent border-none outline-none text-text-primary dark:text-dark-text-primary'
                        spellCheck='false'
                        autoComplete='off'
                    />
                </div>
            </div>

            <div className='bg-arch-blue text-black px-4 py-0.5 text-[9px] sm:text-[10px] font-bold uppercase flex justify-between'>
                <span>septerminal V0.21.0</span>
                <span className='hidden sm:block'>UTF-8 | BASH</span>
            </div>
        </motion.div>
    );
}

