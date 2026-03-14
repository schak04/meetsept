import { motion } from 'framer-motion';
import { CheckCircle, Clock, ChevronRight } from 'lucide-react';

const TRAININGS = [
    {
        id: 'cipherschools-mern',
        subject: 'Full-Stack Development & DevOps',
        course: 'MERN + DevOps + Cloud Computing',
        period: 'Feb 2026 - Present',
        status: 'ongoing',
        tags: ['MERN', 'DevOps', 'Cloud'],
        highlights: [
            'Full-stack web development with the MERN stack from fundamentals to deployment.',
            'Introduction to DevOps workflows: CI/CD pipelines, containerization with Docker.',
            'Cloud computing basics with exploration of AWS services and deployment strategies.',
            'Hands-on project-based curriculum with real-world application scenarios.'
        ]
    },
    {
        id: 'codequestdsa',
        subject: 'Data Structures & Algorithms',
        course: 'CodeQuest: DSA Summer Bootcamp - From Basics to Brilliance',
        period: 'Jun 2025 - Jul 2025',
        status: 'completed',
        tags: ['Data Structures', 'Algorithms', 'Problem Solving', 'C++'],
        highlights: [
            'Focused on core and advanced Data Structures and Algorithms.',
            'Covered arrays, linked lists, stacks, queues, trees, heaps, graphs, recursion, and dynamic programming.',
            'Emphasized algorithmic optimization, problem-solving, and real-world software applications.',
            'Included daily hands-on coding, debugging, and complexity analysis sessions.'
        ]
    }
];

export default function Training() {
    return (
        <div className='space-y-6 max-w-3xl mx-auto'>
            <p className='text-xs font-mono text-muted flex items-center gap-2'>
                <ChevronRight size={10} className='text-arch-blue' />
                Structured training programs
            </p>

            <div className='relative space-y-6 pl-6'>
                <div className='absolute left-0 top-2 bottom-2 w-px bg-arch-blue/20' />

                {TRAININGS.map((training, i) => (
                    <motion.div
                        key={training.id}
                        initial={{ opacity: 0, x: -16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.12 }}
                        className='relative'
                    >
                        <div className='absolute -left-9 top-1 w-6 h-6 rounded-full border-2 border-arch-blue bg-bg-primary dark:bg-dark-bg-primary flex items-center justify-center'>
                            {training.status === 'completed'
                                ? <CheckCircle size={12} className='text-arch-blue' />
                                : <Clock size={12} className='text-arch-blue animate-pulse' />
                            }
                        </div>

                        <div className='p-5 bg-black/5 dark:bg-white/5 border border-border dark:border-dark-border rounded-xl hover:border-arch-blue/40 transition-all'>
                            <div className='flex items-start justify-between gap-4 mb-3 flex-wrap'>
                                <div>
                                    <p className='text-[10px] font-mono text-arch-blue uppercase tracking-widest mb-1'>
                                        {training.subject}
                                    </p>
                                    <h3 className='text-base font-bold leading-tight'>{training.course}</h3>
                                </div>
                                <div className='flex flex-col items-end gap-1 shrink-0'>
                                    <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded border ${
                                        training.status === 'completed'
                                            ? 'text-green-500 bg-green-500/10 border-green-500/30'
                                            : 'text-arch-blue bg-arch-blue/10 border-arch-blue/30'
                                    }`}>
                                        {training.status === 'completed' ? 'Completed' : 'Ongoing'}
                                    </span>
                                    <span className='text-[10px] font-mono text-muted'>{training.period}</span>
                                </div>
                            </div>

                            <ul className='space-y-1.5 mb-4'>
                                {training.highlights.map((point, j) => (
                                    <motion.li
                                        key={j}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: i * 0.12 + j * 0.05 }}
                                        className='flex items-start gap-2 text-sm text-muted'
                                    >
                                        <span className='text-arch-blue mt-1 shrink-0 font-mono text-xs'>-</span>
                                        {point}
                                    </motion.li>
                                ))}
                            </ul>

                            <div className='flex flex-wrap gap-2'>
                                {training.tags.map(tag => (
                                    <span key={tag} className='px-2 py-0.5 bg-arch-blue/10 rounded text-[10px] font-mono text-arch-blue'>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
