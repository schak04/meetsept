import { motion } from 'framer-motion';
import { Terminal, Code, Gamepad2, Settings2 } from 'lucide-react';
import TerminalGraphic from '../ui/TerminalGraphic';

export default function About() {
    return (
        <div className='w-full'>
            <section className="mb-8">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className='mb-8 flex flex-col sm:flex-row items-center sm:items-center gap-4 sm:gap-6'
                >
                    <div className="relative shrink-0 w-20 h-20 sm:w-24 sm:h-24">
                        <div className="w-full h-full rounded-full overflow-hidden border-2 border-arch-blue/50 p-1">
                            <div className="w-full h-full rounded-full overflow-hidden bg-slate-200 dark:bg-[#161b22] transition-colors duration-200">
                                <img src="/pfp.jpeg" alt="Saptaparno Chakraborty" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 w-full mt-2 sm:mt-0">
                        <h2 className='text-2xl font-bold flex items-center justify-center sm:justify-start gap-3 w-full'>
                            <span className='text-arch-blue'>About Me</span>
                            <div className="h-px bg-arch-blue/20 flex-1 ml-4 hidden sm:block" />
                        </h2>
                    </div>
                </motion.div>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:items-start items-center'>
                    <div className='space-y-6 text-muted leading-relaxed font-normal'>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="flex gap-4"
                        >
                            <Code className="w-6 h-6 shrink-0 text-arch-blue/70 mt-1" />
                            <span>
                                I am a Computer Science undergraduate and an aspiring Software Engineer who loves building things, be it
                                <span className='text-arch-blue font-medium'> full-stack web apps</span>,
                                <span className='text-arch-blue font-medium'> backend systems</span>,
                                <span className='text-arch-blue font-medium'> low-level systems</span>, or
                                <span className='text-arch-blue font-medium'> performance-focused C/C++ tools</span>.
                            </span>
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="flex gap-4"
                        >
                            <Gamepad2 className="w-6 h-6 shrink-0 text-purple-400/70 mt-1" />
                            <span>
                                Besides building software, I am also into <span className='text-purple-400 font-medium'>game development</span> as a hobby
                                because it blends my love for programming and building things with my love
                                for video games.
                            </span>
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="flex gap-4"
                        >
                            <Terminal className="w-6 h-6 shrink-0 text-emerald-400/70 mt-1" />
                            <span>
                                Moreover, I'm enthusiastic about Linux. I use <span className='text-emerald-400 font-medium'>Arch Linux</span>,
                                <span className='text-emerald-400 font-medium'> Vim motions</span>, and enjoy going down rabbit holes on tools, systems,
                                and new tech.
                            </span>
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className='pt-4'
                        >
                            <div className='p-5 rounded-xl bg-bg-secondary/80 dark:bg-dark-bg-secondary/80 border border-arch-blue/40 transition-colors duration-200'>
                                <div className='flex items-center gap-2 mb-3'>
                                    <Settings2 className="w-4 h-4 text-arch-blue" />
                                    <h3 className='text-xs font-mono uppercase tracking-widest text-arch-blue'>Current Focus</h3>
                                </div>
                                <p className='text-sm text-muted/90 font-normal leading-relaxed'>
                                    Exploring systems programming and backend infrastructure through low-level projects, including several mini C/C++ projects and a major search engine project using Node.js and C++.
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    <div className="flex justify-center lg:justify-end lg:items-start items-center col-span-1 py-8 lg:py-0">
                        <TerminalGraphic />
                    </div>
                </div>
            </section>
        </div>
    );
}