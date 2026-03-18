import { motion } from 'framer-motion';
import { Award, ExternalLink, Info, ChevronRight } from 'lucide-react';

const CERTIFICATES = [
    {
        title: "Computational Theory: Language Principle & Finite Automata Theory",
        issuer: "Infosys Springboard",
        date: "Aug' 25",
        link: "https://drive.google.com/file/d/16aVz6jzsIHGcqcbHiW_Q2SMDQPgwMMn8/view",
        platform: "Infosys"
    },
    {
        title: "Privacy and Security in Online Social Media",
        issuer: "NPTEL",
        date: "Apr' 25",
        link: "https://archive.nptel.ac.in/content/noc/NOC25/SEM1/Ecertificates/106/noc25-cs79/Course/NPTEL25CS79S24750117304485168.pdf",
        platform: "NPTEL"
    },
    {
        title: "Fundamentals of Network Communication",
        issuer: "University of Colorado, Coursera",
        date: "Nov' 24",
        link: "https://www.coursera.org/account/accomplishments/verify/5OQA661PISVP",
        platform: "Coursera"
    },
    {
        title: "Introduction to Hardware and Operating Systems",
        issuer: "IBM, Coursera",
        date: "Sep' 24",
        link: "https://www.coursera.org/account/accomplishments/verify/QA7HQWQKKF2E",
        platform: "IBM"
    },
    {
        title: "The Bits and Bytes of Computer Networking",
        issuer: "Google, Coursera",
        date: "Sep' 24",
        link: "https://www.coursera.org/account/accomplishments/verify/X8OMVSWVMZJ7",
        platform: "Google"
    },
    {
        title: "Responsive Web Design",
        issuer: "freeCodeCamp",
        date: "Nov' 23",
        link: "https://www.freecodecamp.org/certification/fcce2b26acf-1ffd-4c60-85a1-1b7d66c7bf3f/responsive-web-design",
        platform: "freeCodeCamp"
    }
];

export default function Certificates() {
    return (
        <div className='space-y-6 max-w-4xl mx-auto'>
            <div className='space-y-2'>
                <p className='text-xs font-mono text-muted flex items-center gap-2'>
                    <ChevronRight size={10} className='text-arch-blue' />
                    Verified professional certifications
                </p>
            </div>

            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className='p-4 bg-arch-blue/5 border border-arch-blue/20 rounded-xl flex gap-4 items-start'
            >
                <div className='p-2 bg-arch-blue/10 rounded-lg text-arch-blue shrink-0'>
                    <Info size={18} />
                </div>
                <div className='space-y-1'>
                    <h4 className='text-sm font-bold text-arch-blue'>Name Spelling Note</h4>
                    <p className='text-xs text-muted leading-relaxed'>
                        My preferred spelling of my first name is <span className='text-text-primary dark:text-dark-text-primary font-bold'>Saptaparno</span>, which I use in all professional and personal contexts.
                        However, my legal and academic records (including most of these certificates) use the spelling <span className='text-text-primary dark:text-dark-text-primary font-bold'>Saptaparna</span>.
                        Both spellings refer to the same person and are pronounced identically, ending with an 'o' sound.
                    </p>
                </div>
            </motion.div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                {CERTIFICATES.map((cert, i) => (
                    <motion.div
                        key={cert.title}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className='group p-5 bg-black/5 dark:bg-white/5 border border-border dark:border-dark-border rounded-xl hover:border-arch-blue/40 transition-all flex flex-col justify-between'
                    >
                        <div className='space-y-3'>
                            <div className='flex justify-between items-start'>
                                <div className='p-2 bg-arch-blue/10 rounded-lg text-arch-blue'>
                                    <Award size={20} />
                                </div>
                                <span className='text-[10px] font-mono text-muted uppercase tracking-wider'>{cert.date}</span>
                            </div>

                            <div>
                                <h3 className='text-sm font-bold leading-snug group-hover:text-arch-blue transition-colors'>
                                    {cert.title}
                                </h3>
                                <p className='text-xs text-muted mt-1'>{cert.issuer}</p>
                            </div>
                        </div>

                        <div className='mt-6 flex items-center justify-between pt-4 border-t border-border/50 dark:border-dark-border/50'>
                            <span className='px-2 py-0.5 bg-arch-blue/10 rounded text-[9px] font-mono text-arch-blue border border-arch-blue/20'>
                                {cert.platform}
                            </span>
                            <a
                                href={cert.link}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='flex items-center gap-1.5 text-[11px] font-mono text-arch-blue hover:underline'
                            >
                                VIEW CERTIFICATE
                                <ExternalLink size={10} />
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
