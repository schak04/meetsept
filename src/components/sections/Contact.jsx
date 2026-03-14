import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, ExternalLink, Copy, Check } from 'lucide-react';

export default function Contact() {
    const [copied, setCopied] = useState(false);
    const email = 'schakraborty1086@gmail.com';

    const copyToClipboard = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const contacts = [
        {
            name: 'GitHub',
            icon: Github,
            value: 'github.com/schak04',
            link: 'https://github.com/schak04',
            color: 'text-text-primary dark:text-dark-text-primary'
        },
        {
            name: 'LinkedIn',
            icon: Linkedin,
            value: 'linkedin.com/in/schak04',
            link: 'https://linkedin.com/in/schak04',
            color: 'text-[#0077b5]'
        }
    ];

    return (
        <div className='max-w-3xl mx-auto space-y-12'>
            <div className='space-y-4'>
                <div className='flex items-center gap-4'>
                    <div className='h-px flex-1 bg-border dark:bg-dark-border' />
                    <h2 className='text-sm font-mono uppercase tracking-[0.3em] font-bold text-arch-blue'>Contact Details</h2>
                    <div className='h-px flex-1 bg-border dark:bg-dark-border' />
                </div>
            </div>

            <div className='grid gap-4'>
                {contacts.map((item, i) => (
                    <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className='group p-5 bg-black/5 dark:bg-white/5 border border-border dark:border-dark-border rounded-xl flex items-center justify-between hover:border-arch-blue/40 transition-all backdrop-blur-sm'
                    >
                        <div className='flex items-center gap-5'>
                            <div className={`p-3 bg-white/10 dark:bg-black/20 rounded-lg ${item.color} group-hover:scale-110 transition-transform flex items-center justify-center border border-border/50 dark:border-white/5 shadow-inner`}>
                                <item.icon size={22} />
                            </div>
                            <div className='min-w-0'>
                                <p className='text-[10px] font-mono uppercase tracking-widest text-muted mb-0.5'>{item.name}</p>
                                <p className='text-sm font-mono font-medium tracking-tight truncate'>{item.value}</p>
                            </div>
                        </div>

                        <div className='flex items-center gap-2'>
                            {item.link ? (
                                <a
                                    href={item.link}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='w-10 h-10 flex items-center justify-center hover:bg-arch-blue/10 rounded-lg text-muted hover:text-arch-blue border border-transparent hover:border-arch-blue/20 transition-all duration-300'
                                    title={`Visit ${item.name}`}
                                >
                                    <ExternalLink size={18} />
                                </a>
                            ) : (
                                <button
                                    onClick={item.action}
                                    className='w-10 h-10 flex items-center justify-center hover:bg-arch-blue/10 rounded-lg text-muted hover:text-arch-blue border border-transparent hover:border-arch-blue/20 transition-all duration-300 cursor-pointer'
                                    title={`Copy ${item.name}`}
                                >
                                    {copied ? <Check size={18} className='text-green-500' /> : <Copy size={18} />}
                                </button>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className='p-8 bg-black/5 dark:bg-white/5 border border-border dark:border-dark-border rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6'
            >
                <div className='space-y-3 text-center md:text-left'>
                    <div className='flex items-center justify-center md:justify-start gap-3 text-muted'>
                        <Mail size={18} className='text-arch-blue'/>
                        <h3 className='text-xs font-mono font-bold tracking-widest'>EMAIL: <span className='text-arch-blue'>schakraborty1086@gmail.com</span></h3>
                    </div>
                    <p className='text-xs text-muted leading-relaxed font-mono max-w-sm'>
                        Looking for a faster response? Feel free to directly email me.
                    </p>
                </div>
                <div className='flex items-center gap-3 w-full md:w-auto'>
                    <button
                        onClick={copyToClipboard}
                        className='p-3 bg-black/5 dark:bg-white/5 border border-border dark:border-dark-border rounded-lg text-muted cursor-pointer hover:text-arch-blue hover:border-arch-blue/40 transition-all duration-300 relative group'
                        title='Copy Email'
                    >
                        {copied ? <Check size={18} className='text-green-500' /> : <Copy size={18} />}
                    </button>
                    <a
                        href={`mailto:${email}`}
                        className='flex-1 md:flex-none btn btn-primary flex items-center justify-center gap-2 font-mono group transition-all duration-300'
                    >
                        Compose Email
                    </a>
                </div>
            </motion.div>
        </div>
    );
}
