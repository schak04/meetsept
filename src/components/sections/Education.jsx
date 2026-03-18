import { motion } from 'framer-motion';
import { GraduationCap, School, Calendar, MapPin, ChevronRight } from 'lucide-react';

const EDUCATION = [
    {
        institution: "Lovely Professional University",
        location: "Punjab, India",
        degree: "Bachelor of Technology (Computer Science and Engineering)",
        period: "Aug' 23 - Present",
        metrics: "CGPA: 7.87",
        type: "university"
    },
    {
        institution: "Railway H.S. School",
        location: "West Bengal, India",
        degree: "Higher Secondary (XII)",
        period: "Apr' 22 - Mar' 23",
        metrics: "Percentage: 78",
        type: "school"
    },
    {
        institution: "Railway H.S. School",
        location: "West Bengal, India",
        degree: "Secondary (X)",
        period: "Apr' 20 - Mar' 21",
        metrics: "Percentage: 89",
        type: "school"
    }
];

export default function Education() {
    return (
        <div className='space-y-8 max-w-3xl mx-auto'>
            <p className='text-xs font-mono text-muted flex items-center gap-2'>
                <ChevronRight size={10} className='text-arch-blue' />
                Academic background
            </p>

            <div className='relative space-y-8 pl-6 sm:pl-8'>
                <div className='absolute left-0 top-2 bottom-2 w-px bg-arch-blue/20' />

                {EDUCATION.map((edu, i) => (
                    <motion.div
                        key={edu.degree}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.15 }}
                        className='relative'
                    >
                        <div className='absolute -left-[31px] sm:-left-[39px] top-1 w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-arch-blue bg-bg-primary dark:bg-dark-bg-primary flex items-center justify-center z-10 shadow-[0_0_10px_rgba(23,147,209,0.2)]'>
                            {edu.type === 'university' ? (
                                <GraduationCap size={14} className='text-arch-blue sm:w-[18px] sm:h-[18px]' />
                            ) : (
                                <School size={14} className='text-arch-blue sm:w-[18px] sm:h-[18px]' />
                            )}
                        </div>

                        <div className='p-5 bg-black/5 dark:bg-white/5 border border-border dark:border-dark-border rounded-xl hover:border-arch-blue/40 transition-all group'>
                            <div className='flex flex-col sm:flex-row sm:items-start justify-between gap-4'>
                                <div className='space-y-2'>
                                    <div>
                                        <h3 className='text-base sm:text-lg font-bold group-hover:text-arch-blue transition-colors leading-tight'>
                                            {edu.institution}
                                        </h3>
                                        <div className='flex items-center gap-2 text-muted mt-1'>
                                            <MapPin size={12} className='text-arch-blue' />
                                            <span className='text-[11px] sm:text-xs font-mono'>{edu.location}</span>
                                        </div>
                                    </div>

                                    <div className='pt-1'>
                                        <p className='text-sm sm:text-base text-text-primary dark:text-dark-text-primary font-medium'>
                                            {edu.degree}
                                        </p>
                                    </div>
                                </div>

                                <div className='flex flex-row sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-2 shrink-0'>
                                    <div className='flex items-center gap-2 px-3 py-1 bg-arch-blue/10 rounded-full border border-arch-blue/20'>
                                        <Calendar size={12} className='text-arch-blue' />
                                        <span className='text-[10px] sm:text-[11px] font-mono font-bold text-arch-blue uppercase'>
                                            {edu.period}
                                        </span>
                                    </div>
                                    <span className='px-2 py-0.5 bg-green-500/10 rounded text-[10px] sm:text-[11px] font-mono text-green-500 border border-green-500/20'>
                                        {edu.metrics}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
