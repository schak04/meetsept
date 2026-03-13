import { motion } from 'framer-motion';
import projectsData from '../../data/projects.json';
import { Github, ExternalLink, Folder } from 'lucide-react';

export default function Projects() {
    return (
        <div className='space-y-8'>
            <h2 className='text-2xl font-bold flex items-center gap-3'>
                <span className='text-arch-blue'>My Projects</span>
            </h2>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {projectsData.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className='group relative p-6 rounded-xl text-arch-blue bg-system-bg border border-system-border hover:border-arch-blue/50 transition-all duration-300'
                    >
                        <div className='flex justify-between items-start mb-4'>
                            <Folder className='text-arch-blue' size={28} />
                            <div className='flex gap-4'>
                                {project.links.github && (
                                    <a
                                        href={project.links.github}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className='text-system-muted hover:text-system-text transition-colors'
                                    >
                                        <Github size={20} />
                                    </a>
                                )}
                                {project.links.demo && (
                                    <a
                                        href={project.links.demo}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className='text-system-muted hover:text-system-text transition-colors'
                                    >
                                        <ExternalLink size={20} />
                                    </a>
                                )}
                            </div>
                        </div>

                        <h3 className='text-xl font-bold mb-2 group-hover:text-arch-blue transition-colors'>
                            {project.title}
                        </h3>

                        <p className='text-sm text-system-muted leading-relaxed mb-6'>
                            {project.description}
                        </p>

                        <div className='flex flex-wrap gap-2 mt-auto'>
                            {project.tags.map(tag => (
                                <span
                                    key={tag}
                                    className='px-2 py-1 rounded text-[10px] font-mono bg-system-border/30 text-system-muted'
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};