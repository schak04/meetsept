import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Power } from 'lucide-react';

export default function PowerOn({ onStart }) {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');

        const chars = "01$#@%&*ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const step = 18;
        const fontSize = 14;
        let drops = [];
        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            const columns = Math.floor(canvas.width / step);
            drops = new Array(columns).fill(0).map(() => Math.floor(Math.random() * (canvas.height / step)));
        };
        resize();
        window.addEventListener('resize', resize);

        ctx.font = `bold ${fontSize}px "JetBrains Mono", monospace`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'top';

        let frameCount = 0;
        let animationFrameId;
        const draw = () => {
            animationFrameId = requestAnimationFrame(draw);
            
            frameCount++;
            if (frameCount % 4 !== 0) return;

            ctx.fillStyle = 'rgba(0,0,0,0.04)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            drops.forEach((y, i) => {
                const x = i * step + step / 2;
                const char = chars[Math.floor(Math.random() * chars.length)];

                ctx.fillStyle = '#00ff9c';
                ctx.globalAlpha = 0.35;
                ctx.fillText(char, x, (y - 1) * step);
                if (Math.random() > 0.9) {
                    ctx.fillStyle = '#ffffff';
                    ctx.globalAlpha = 1;
                } else {
                    ctx.fillStyle = '#00ff9c';
                    ctx.globalAlpha = 0.9;
                }
                ctx.fillText(char, x, y * step);

                if (y * step > canvas.height && Math.random() > 0.96) {
                    drops[i] = 0;
                } else {
                    drops[i]++;
                }
            });
        };

        draw();

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div className='fixed inset-0 bg-black flex flex-col items-center justify-center z-100 overflow-hidden'>
            <canvas ref={canvasRef} className='absolute inset-0 opacity-100 pointer-events-none' />
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className='relative z-10 flex flex-col items-center gap-8 bg-black/40 backdrop-blur-xl p-12 rounded-4xl border border-white/5'
            >
                <button onClick={onStart} className='group relative p-8 rounded-full border border-arch-blue/30 bg-black hover:border-arch-blue hover:bg-arch-blue/5 transition-all duration-700 cursor-pointer'>
                    <div className='absolute inset-0 rounded-full border border-arch-blue/20 animate-ping opacity-20' />
                    <Power size={48} className='text-arch-blue relative z-10 transition-all duration-700 group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(23,147,209,0.5)]' />
                </button>
                <div className='flex flex-col items-center gap-3'>
                    <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 2, repeat: Infinity }} className='flex items-center gap-2'>
                        <p className='text-[25px] font-mono text-green-500 uppercase tracking-[0.5em] font-bold'>System Ready</p>
                    </motion.div>
                </div>
            </motion.div>
            <div className='absolute w-125 h-125 bg-arch-blue/5 rounded-full blur-[150px] pointer-events-none' />
        </div>
    );
}