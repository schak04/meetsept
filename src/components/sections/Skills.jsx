import { motion } from 'framer-motion';
import {
    Code2,
    Database,
    Globe,
    Terminal as TerminalIcon,
    Server
} from 'lucide-react';
import {
    SiCplusplus,
    SiC,
    SiJavascript,
    SiTypescript,
    SiPython,
    SiSharp,
    SiNodedotjs,
    SiExpress,
    SiSocketdotio,
    SiReact,
    SiRedux,
    SiTailwindcss,
    SiHtml5,
    SiCss,
    SiVite,
    SiMongodb,
    SiPostgresql,
    SiMysql,
    SiSqlite,
    SiArchlinux,
    SiVim,
    SiNeovim,
    SiGit,
    SiGithub,
    SiPostman,
    SiDocker,
    SiOpenjdk
} from 'react-icons/si';

const SKILL_ICONS = {
    'C++': SiCplusplus,
    'C': SiC,
    'JavaScript': SiJavascript,
    'TypeScript (Learning)': SiTypescript,
    'Java': SiOpenjdk,
    'Python': SiPython,
    'C# (Learning)': SiSharp,
    'C++ STL': SiCplusplus,
    'Node.js': SiNodedotjs,
    'Express': SiExpress,
    'REST APIs': Server,
    'WebSockets': SiSocketdotio,
    'Systems Programming (Basics)': TerminalIcon,
    'React.js': SiReact,
    'Redux': SiRedux,
    'Tailwind CSS': SiTailwindcss,
    'HTML5': SiHtml5,
    'CSS3': SiCss,
    'Vite': SiVite,
    'MongoDB': SiMongodb,
    'PostgreSQL': SiPostgresql,
    'MySQL': SiMysql,
    'SQLite': SiSqlite,
    'Arch Linux': SiArchlinux,
    'Vim': SiVim,
    'Neovim': SiNeovim,
    'Git': SiGit,
    'GitHub': SiGithub,
    'Postman': SiPostman,
    'Docker (Basics)': SiDocker
};

const SKILL_GROUPS = [
    {
        title: 'Languages',
        icon: Code2,
        skills: ['C++', 'C', 'JavaScript', 'TypeScript (Learning)', 'Java', 'Python', 'C# (Learning)']
    },
    {
        title: 'Systems and Backend',
        icon: Server,
        skills: ['C++ STL', 'Node.js', 'Express', 'REST APIs', 'WebSockets', 'Systems Programming (Basics)']
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
        skills: ['Arch Linux', 'Vim', 'Neovim', 'Git', 'GitHub', 'Postman', 'Docker (Basics)']
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
                            {group.skills.map(skill => {
                                const Icon = SKILL_ICONS[skill];
                                return (
                                    <span
                                        key={skill}
                                        className='px-3 py-1.5 bg-black/5 dark:bg-black/40 border border-border dark:border-dark-border rounded-full text-xs font-mono text-muted hover:text-arch-blue hover:border-arch-blue transition-all flex items-center gap-2'
                                    >
                                        {Icon && <Icon size={14} className='opacity-70 group-hover:opacity-100 transition-opacity' />}
                                        {skill}
                                    </span>
                                );
                            })}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}