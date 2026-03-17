import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';

export default function TerminalGraphic() {
    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="rounded-xl overflow-hidden border border-arch-blue/20 bg-[#0d1117] w-full max-w-lg mx-auto"
        >
            <div className="flex items-center px-4 py-2.5 bg-[#161b22] border-b border-arch-blue/10">
                <Terminal className="w-4 h-4 text-arch-blue/70 mr-2" />
            </div>

            <div className="p-5 sm:p-6 font-mono text-sm sm:text-base leading-relaxed text-muted space-y-4">
                <div className="flex flex-wrap items-center">
                    <span className="text-arch-blue font-semibold">[sapto@saptoarchy</span>
                    <span className="text-blue-400 font-semibold ml-1.5">~]</span>
                    <span className="ml-2 font-bold text-white">$</span>
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="ml-2 text-white/90"
                    >
                        cat profile.json
                    </motion.span>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5, duration: 0.4 }}
                    className="space-y-1 pl-4 text-emerald-400 text-xs sm:text-sm leading-loose sm:leading-loose"
                >
                    <p className="text-emerald-300">{"{"}</p>
                    <div className="pl-4 space-y-1.5">
                        <p><span className="text-blue-300">"name"</span><span className="text-muted/60">: </span><span className="text-amber-200">"Saptaparno Chakraborty"</span>,</p>
                        <p><span className="text-blue-300">"alias"</span><span className="text-muted/60">: </span><span className="text-amber-200">"Sapto/Sept"</span>,</p>
                        <p><span className="text-blue-300">"role"</span><span className="text-muted/60">: </span><span className="text-amber-200">"Aspiring Software Engineer"</span>,</p>
                        <p><span className="text-blue-300">"interests"</span><span className="text-muted/60">: </span>[<span className="text-amber-200">"Systems Programming"</span>, <span className="text-amber-200">"Game Development"</span>, <span className="text-amber-200">"Full-Stack Web Development"</span>, <span className="text-amber-200">"Desktop Application Development"</span>]</p>
                    </div>
                    <p className="text-emerald-300">{"}"}</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.9 }}
                    className="flex flex-wrap items-center pt-2"
                >
                    <span className="text-arch-blue font-semibold">[sapto@saptoarchy</span>
                    <span className="text-blue-400 font-semibold ml-1.5">~]</span>
                    <span className="ml-2 font-bold text-white">$</span>
                    <motion.span
                        animate={{ opacity: [1, 0] }}
                        transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                        className="ml-2 w-2.5 h-5 bg-muted inline-block align-middle"
                    />
                </motion.div>
            </div>
        </motion.div>
    );
}
