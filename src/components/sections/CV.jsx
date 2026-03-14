import { Download, ExternalLink, FileText } from 'lucide-react';

export default function CV() {
    const cvPath = '/assets/SaptaparnoChakrabortyCV.pdf';

    return (
        <div className='h-full flex flex-col space-y-4'>
            <div className='flex items-center justify-between p-4 bg-black/5 dark:bg-white/5 border border-border dark:border-dark-border rounded-xl'>
                <div className='flex items-center gap-3'>
                    <div className='p-2 bg-arch-blue/10 rounded-lg text-arch-blue'>
                        <FileText size={20} />
                    </div>
                    <div>
                        <h3 className='text-sm font-bold'>SaptaparnoChakrabortyCV.pdf</h3>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <a
                        href={cvPath}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='p-2 flex items-center gap-2 text-xs font-mono text-muted hover:text-arch-blue transition-colors'
                        title='View full screen'
                    >
                        <ExternalLink size={14} />
                        <span className='hidden sm:inline'>View Fullscreen</span>
                    </a>
                    <a
                        href={cvPath}
                        download
                        className='btn btn-primary shadow-none flex items-center gap-2 text-xs py-1.5 px-3'
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
