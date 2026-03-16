import { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, BookOpen, Flame, Clock, ChevronRight } from 'lucide-react';

const TRACKS = [
    {
        label: 'Data Structures and Algorithms',
        progress: 45,
        status: 'Active',
        note: 'Revising fundamentals, solving LeetCode problems'
    },
    {
        label: 'CS Fundamentals (OS, Networking, Architecture, DBMS)',
        progress: 40,
        status: 'Active',
        note: 'Theory revision alongside my coursework'
    },
    {
        label: 'Low-level Development and Systems Programming',
        progress: 25,
        status: 'Exploring',
        note: 'Practicing C++/C: memory management, pointers, and small systems projects'
    },
    {
        label: 'System Design',
        progress: 20,
        status: 'Starting',
        note: 'Reading about scalability, caching, sharding, load balancing, distributed systems patterns'
    },
    {
        label: 'DevOps and Cloud Computing',
        progress: 18,
        status: 'Starting',
        note: 'Docker basics, planning to explore AWS'
    },
    {
        label: 'Arch Linux and the Linux Ecosystem',
        progress: 35,
        status: 'Active',
        note: 'Using daily, ricing Hyprland, learning the internals'
    }
];

const INTERESTS = [
    {
        area: 'Game Development',
        icon: Flame,
        description: 'Working on hobby projects in Unity using C#. Learned basic Godot scripting in GDScript to experiment with game mechanics.',
        tags: ['Unity', 'C#', 'Game Dev']
    },
    {
        area: 'Compiler and Language Theory',
        icon: BookOpen,
        description: 'Studying how programming languages work under the hood, including parsing, syntax, and runtime behavior.',
        tags: ['Compilers', 'Interpreters', 'Theory']
    },
    {
        area: 'Networking and Protocols',
        icon: Cpu,
        description: 'Studying TCP/IP, HTTP internals, and how the web actually works under the hood.',
        tags: ['TCP/IP', 'HTTP', 'DNS', 'Sockets']
    }
];

const QUEUE = [
    'Qt (C++ GUI)',
    'Next.js',
    'Rust',
    'Go',
    'Assembly',
    'WebAssembly',
    'GraphQL',
    'NGINX',
    'Kubernetes',
    'Lua (Neovim config)',
    'OpenGL / Vulkan',
    'Raylib / SFML',
];

export default function Learning() {
    const [activeTab, setActiveTab] = useState('tracks');

    return (
        <div className='space-y-6 max-w-4xl mx-auto'>
            <div className='flex gap-1 font-mono text-xs border-b border-border dark:border-dark-border'>
                {['tracks', 'interests', 'queue'].map(tab => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-4 py-2 transition-colors border-b-2 -mb-px ${
                            activeTab === tab
                                ? 'border-arch-blue text-arch-blue'
                                : 'border-transparent text-muted hover:text-text-primary dark:hover:text-dark-text-primary'
                        }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {activeTab === 'tracks' && (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className='space-y-5'
                >
                    <p className='text-xs font-mono text-muted'>
                        <ChevronRight size={10} className='inline mr-1 text-arch-blue' />
                        Active learning tracks with approximate progress
                    </p>
                    {TRACKS.map((track, i) => (
                        <motion.div
                            key={track.label}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.07 }}
                            className='space-y-2'
                        >
                            <div className='flex items-start justify-between gap-4'>
                                <span className='text-sm font-mono font-medium'>{track.label}</span>
                                <StatusBadge status={track.status} />
                            </div>
                            <p className='text-[11px] text-muted font-mono'>{track.note}</p>
                            <div className='relative h-1.5 w-full bg-black/5 dark:bg-white/5 rounded-full overflow-hidden border border-border dark:border-dark-border'>
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: `${track.progress}%` }}
                                    transition={{ duration: 1, delay: 0.3 + i * 0.07 }}
                                    className='h-full bg-arch-blue rounded-full'
                                />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            )}

            {activeTab === 'interests' && (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className='grid grid-cols-1 gap-4'
                >
                    {INTERESTS.map((item, i) => (
                        <motion.div
                            key={item.area}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className='p-5 bg-black/5 dark:bg-white/5 border border-border dark:border-dark-border rounded-xl hover:border-arch-blue/50 transition-all group'
                        >
                            <div className='flex items-center gap-3 mb-3'>
                                <div className='p-2 bg-arch-blue/10 rounded-lg text-arch-blue group-hover:bg-arch-blue group-hover:text-black transition-all'>
                                    <item.icon size={18} />
                                </div>
                                <h3 className='font-bold text-sm'>{item.area}</h3>
                            </div>
                            <p className='text-sm text-muted leading-relaxed mb-3'>{item.description}</p>
                            <div className='flex flex-wrap gap-2'>
                                {item.tags.map(tag => (
                                    <span key={tag} className='px-2 py-0.5 bg-arch-blue/10 rounded text-[10px] font-mono text-arch-blue'>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            )}

            {activeTab === 'queue' && (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className='space-y-3'
                >
                    <p className='text-xs font-mono text-muted'>
                        <ChevronRight size={10} className='inline mr-1 text-arch-blue' />
                        Technologies and topics queued up to learn in no particular order
                    </p>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
                        {QUEUE.map((item, i) => (
                            <motion.div
                                key={item}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.05 }}
                                className='flex items-center gap-3 p-3 bg-black/5 dark:bg-white/5 border border-border dark:border-dark-border rounded-lg hover:border-arch-blue/40 transition-colors group'
                            >
                                <Clock size={12} className='text-muted group-hover:text-arch-blue transition-colors shrink-0' />
                                <span className='text-sm font-mono group-hover:text-arch-blue transition-colors'>{item}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            )}
        </div>
    );
}

function StatusBadge({ status }) {
    const styles = {
        Active: 'text-arch-blue bg-arch-blue/10 border-arch-blue/30',
        Exploring: 'text-yellow-500 bg-yellow-500/10 border-yellow-500/30',
        Starting: 'text-green-500 bg-green-500/10 border-green-500/30'
    };
    return (
        <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded border shrink-0 ${styles[status] || styles.Exploring}`}>
            {status}
        </span>
    );
}
