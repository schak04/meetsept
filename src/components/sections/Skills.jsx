import { motion } from 'framer-motion';
import {
    Code2,
    Database,
    Globe,
    Terminal as TerminalIcon,
    Server
} from 'lucide-react';

const SKILL_GROUPS = [
    {
        title: 'Languages',
        icon: Code2,
        skills: ['C++', 'C', 'JavaScript', 'TypeScript', 'Java', 'Python', 'C# (Learning)']
    },
    {
        title: 'Systems and Backend',
        icon: Server,
        skills: ['C++ STL', 'Node.js', 'Express', 'REST APIs', 'WebSockets', 'Systems Programming']
    },
    {
        title: 'Web Technologies',
        icon: Globe,
        skills: ['React.js', 'Redux', 'Tailwind CSS', 'HTML5', 'CSS3', 'Vite']
    },
    {
        title: 'Database Management',
        icon: Database,
        skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'SQLite']
    },
    {
        title: 'Tools and Environment',
        icon: TerminalIcon,
        skills: ['Arch Linux', 'Vim/Neovim', 'Git/GitHub', 'Postman', 'Docker (Basics)']
    }
];

export default function Skills() {
    return (
        <div className='space-y-8 max-w-4xl mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {SKILL_GROUPS.map((group, i) => (
                    <motion.div
                        key={group.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className='p-6 bg-black/5 dark:bg-white/5 border border-border dark:border-dark-border rounded-xl hover:border-arch-blue/50 transition-all group'
                    >
                        <div className='flex items-center gap-3 mb-4'>
                            <div className='p-2 bg-arch-blue/10 rounded-lg text-arch-blue group-hover:bg-arch-blue group-hover:text-black transition-all'>
                                <group.icon size={20} />
                            </div>
                            <h3 className='text-lg font-bold'>{group.title}</h3>
                        </div>
                        <div className='flex flex-wrap gap-2'>
                            {group.skills.map(skill => (
                                <span
                                    key={skill}
                                    className='px-3 py-1 bg-black/5 dark:bg-black/40 border border-border dark:border-dark-border rounded-full text-xs font-mono text-muted hover:text-arch-blue hover:border-arch-blue transition-colors'
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}