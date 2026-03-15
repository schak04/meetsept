import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FileCode,
    Folder,
    ChevronRight,
    Github,
    ExternalLink,
    // Terminal as TerminalIcon,
    Search
} from 'lucide-react';
import projectsData from '../../data/projects.json';

export default function Editor() {
    const [selectedId, setSelectedId] = useState(projectsData[0]?.id);
    const selectedProject = projectsData.find(p => p.id === selectedId);

    return (
        <div className='flex h-full w-full bg-bg-secondary dark:bg-dark-bg-secondary overflow-hidden border border-border dark:border-dark-border rounded-lg shadow-2xl transition-all'>
            <aside className='neovim-sidebar hidden md:flex'>
                <div className='p-4 border-b border-border dark:border-dark-border flex items-center justify-between'>
                    <span className='text-[10px] font-bold text-arch-blue uppercase tracking-widest'> Projects</span>
                    <Search size={12} className='text-muted' />
                </div>

                <div className='flex-1 py-2 overflow-y-auto custom-scrollbar'>
                    <div className='neovim-file text-muted'>
                        <Folder size={14} />
                        <span>projects/</span>
                    </div>

                    {projectsData.map(project => (
                        <div
                            key={project.id}
                            onClick={() => setSelectedId(project.id)}
                            className={`neovim-file pl-8 ${selectedId === project.id ? 'active-neovim-file' : 'text-muted'}`}
                        >
                            <FileCode size={14} className={selectedId === project.id ? 'text-arch-blue' : 'text-muted'} />
                            <span>{project.id}</span>
                        </div>
                    ))}
                </div>

                <div className='p-2 border-t border-border dark:border-dark-border bg-black/5 dark:bg-black/20'>
                    <div className='flex items-center gap-2 text-[10px] text-muted font-mono'>
                        <ChevronRight size={10} />
                        <span>[Project Details]</span>
                    </div>
                </div>
            </aside>

            <main className='flex-1 flex flex-col min-w-0 bg-bg-primary dark:bg-dark-bg-primary text-text-primary dark:text-dark-text-primary transition-colors'>
                <div className='flex bg-bg-secondary/50 dark:bg-dark-bg-secondary/50 border-b border-border dark:border-dark-border transition-colors overflow-x-auto custom-scrollbar whitespace-nowrap no-scrollbar'>
                    {projectsData.map(project => (
                        <div
                            key={project.id}
                            onClick={() => setSelectedId(project.id)}
                            className={`px-3 sm:px-4 py-2 text-[10px] sm:text-xs font-mono border-r border-border dark:border-dark-border cursor-pointer flex items-center gap-2 shrink-0 transition-colors ${selectedId === project.id ? 'bg-bg-primary dark:bg-dark-bg-primary text-text-primary dark:text-dark-text-primary border-t-2 border-t-arch-blue' : 'text-muted hover:bg-black/5 dark:hover:bg-white/5'
                                }`}
                        >
                            <FileCode size={12} />
                            {project.id}
                        </div>
                    ))}
                </div>

                <div className='flex-1 p-4 sm:p-8 overflow-y-auto custom-scrollbar relative bg-transparent'>
                    <AnimatePresence mode="wait">
                        {selectedProject && (
                            <motion.div
                                key={selectedId}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="max-w-3xl"
                            >
                                <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
                                    <div className="p-3 bg-arch-blue/10 rounded-lg text-arch-blue w-fit">
                                        <FileCode size={32} />
                                    </div>
                                    <div>
                                        <h2 className='text-2xl sm:text-3xl font-bold'>{selectedProject.title}</h2>
                                        <p className='text-muted font-mono text-[10px] sm:text-xs uppercase tracking-widest mt-1'>
                                            {selectedProject.tags[0]} | <span className='hidden sm:inline'>~/projects/{selectedProject.id}</span>
                                        </p>
                                    </div>
                                </div>

                                <div className='space-y-6'>
                                    <div className='p-4 bg-black/5 dark:bg-white/5 rounded-md font-mono text-xs sm:text-sm leading-relaxed border-l-4 border-arch-blue transition-colors'>
                                        {selectedProject.description}
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {selectedProject.links.github && (
                                            <a
                                                href={selectedProject.links.github}
                                                target="_blank"
                                                className="btn btn-secondary flex items-center justify-center gap-2 font-mono text-xs"
                                            >
                                                <Github size={16} /> <span className='truncate'>View on GitHub</span>
                                            </a>
                                        )}
                                        {selectedProject.links.demo && (
                                            <a
                                                href={selectedProject.links.demo}
                                                target="_blank"
                                                className="btn btn-primary flex items-center justify-center gap-2 font-mono text-xs"
                                            >
                                                <ExternalLink size={14} /> live view
                                            </a>
                                        )}
                                    </div>

                                    <div className='pt-4'>
                                        <h4 className='text-[10px] sm:text-xs font-mono text-arch-blue uppercase mb-3'>Tech Stack</h4>
                                        <div className='flex flex-wrap gap-2'>
                                            {selectedProject.tags.map(tag => (
                                                <span key={tag} className='px-2 sm:px-3 py-1 bg-black/5 dark:bg-white/5 rounded-full text-[9px] sm:text-[10px] font-mono text-muted border border-border dark:border-dark-border'>
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                <div className='flex items-center text-[9px] sm:text-[10px] font-bold transition-colors border-t border-border dark:border-dark-border'>
                    <div className='bg-arch-blue text-black px-2 sm:px-4 py-1'>NORMAL</div>
                    <div className='bg-bg-secondary dark:bg-[#1c1c1c] text-muted px-2 sm:px-4 py-1 flex-1 transition-colors truncate'>
                        ~/projects/{selectedId}
                    </div>
                    <div className='hidden sm:block bg-bg-secondary dark:bg-[#1c1c1c] text-arch-blue px-4 py-1 border-l border-border dark:border-white/10 transition-colors'>UTF-8</div>
                    <div className='bg-arch-blue text-black px-2 sm:px-4 py-1 uppercase truncate max-w-20 sm:max-w-none'>{selectedProject?.tags[0] || 'FILE'}</div>
                </div>
            </main>
        </div>
    );
}

const X = ({ className, size, onClick }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size || 14}
        height={size || 14}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        onClick={onClick}
    >
        <path d="M18 6 6 18" /><path d="m6 6 12 12" />
    </svg>
);
