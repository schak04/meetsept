import { motion } from 'framer-motion';
import { BookOpen, ExternalLink, ChevronRight, PenTool } from 'lucide-react';

export default function Blog() {
    return (
        <div className='space-y-6 max-w-3xl mx-auto'>
            <p className='text-xs font-mono text-muted flex items-center gap-2'>
                <ChevronRight size={10} className='text-arch-blue' />
                Technical writing and blog posts
            </p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className='p-6 sm:p-8 bg-black/5 dark:bg-white/5 border border-border dark:border-dark-border rounded-xl hover:border-arch-blue/40 transition-all group relative overflow-hidden'
            >
                <div className='absolute -right-8 -top-8 opacity-[0.03] dark:opacity-[0.05] group-hover:opacity-[0.08] transition-opacity pointer-events-none'>
                    <PenTool size={200} />
                </div>

                <div className='relative z-10 space-y-6'>
                    <div className='flex items-start justify-between'>
                        <div className='p-3 bg-arch-blue/10 rounded-xl text-arch-blue'>
                            <BookOpen size={24} />
                        </div>
                        <span className='px-3 py-1 bg-arch-blue/5 rounded-full text-[10px] font-mono text-arch-blue border border-arch-blue/20'>
                            HASHNODE
                        </span>
                    </div>

                    <div className='space-y-3'>
                        <h2 className='text-2xl sm:text-3xl font-bold group-hover:text-arch-blue transition-colors'>
                            SeptLogs
                        </h2>
                        <p className='text-muted text-sm sm:text-base leading-relaxed max-w-xl'>
                            I write about my journey exploring the enormous world of computer science, software engineering, and sharing technical insights I gain along the way.
                        </p>
                    </div>

                    <div className='flex flex-wrap gap-3 pt-2'>
                        {['Technical Writing', 'Computer Science', 'Software Engineering', 'Blog'].map(tag => (
                            <span key={tag} className='px-2 py-0.5 bg-black/10 dark:bg-white/5 rounded text-[10px] font-mono text-muted'>
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div className='pt-6 border-t border-border/50 dark:border-dark-border/50'>
                        <a
                            href="https://schak04.hashnode.dev"
                            target="_blank"
                            rel="noopener noreferrer"
                            className='inline-flex items-center gap-2 px-6 py-3 bg-arch-blue text-black font-bold rounded-lg hover:bg-arch-blue/90 transition-all hover:scale-[1.02] active:scale-[0.98]'
                        >
                            VISIT MY BLOG
                            <ExternalLink size={16} />
                        </a>
                    </div>
                </div>
            </motion.div>

            <p className='text-[11px] font-mono text-center text-muted opacity-50 italic'>
                "Writing is the best way to understand what you're learning."
            </p>
        </div>
    );
}
