import { Download, ExternalLink, FileText } from 'lucide-react';

export default function CV() {
    const cvPath = '/assets/SaptaparnoChakrabortyCV.pdf';

    return (
        <div className='h-full flex flex-col space-y-4'>
            <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-3 sm:p-4 bg-black/5 dark:bg-white/5 border border-border dark:border-dark-border rounded-xl'>
                <div className='flex items-center gap-3 min-w-0'>
                    <div className='p-2 bg-arch-blue/10 rounded-lg text-arch-blue shrink-0'>
                        <FileText size={20} />
                    </div>
                    <div className='min-w-0'>
                        <h3 className='text-sm font-bold truncate max-w-45 sm:max-w-none'>SaptaparnoChakrabortyCV.pdf</h3>
                    </div>
                </div>
                <div className='flex items-center gap-2 w-full sm:w-auto justify-end'>
                    <a
                        href={cvPath}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='p-2 flex items-center gap-2 text-xs font-mono text-muted hover:text-arch-blue transition-colors shrink-0'
                        title='View full screen'
                    >
                        <ExternalLink size={14} />
                        <span className='hidden sm:inline'>View Fullscreen</span>
                    </a>
                    <a
                        href={cvPath}
                        download
                        className='btn btn-primary shadow-none flex items-center gap-2 text-xs py-1.5 px-3 shrink-0'
                    >
                        <Download size={14} />
                        Download
                    </a>
                </div>
            </div>

            <div className='flex-1 min-h-125 w-full bg-black/5 dark:bg-white/5 border border-border dark:border-dark-border rounded-xl overflow-hidden relative'>
                <iframe
                    src={`${cvPath}#toolbar=0&view=FitH`}
                    className='w-full h-full border-none'
                    title='Curriculum Vitae'
                />
            </div>
        </div>
    );
}
