export default function About() {
    return (
        <div className='space-y-8 max-w-2xl'>
            <section>
                <h2 className='text-2xl font-bold mb-4 flex items-center gap-3'>
                    <span className='text-arch-blue'>About Me</span>
                </h2>
                <div className='space-y-4 text-muted leading-relaxed font-normal'>
                    <p>
                        I am a Computer Science undergraduate and an aspiring Software Engineer who loves building things, be it
                        <span className='text-arch-blue'> full-stack web apps</span>,
                        <span className='text-arch-blue'> backend systems</span>,
                        <span className='text-arch-blue'> low-level systems</span>, or
                        <span className='text-arch-blue'> performance-focused C++ tools</span>.
                    </p>
                    <p>
                        I like staying stack-agnostic and learning whatever a project demands.
                        Besides building software, I am also into game development as a hobby
                        because it blends my love for programming and building things with my love
                        for video games.
                    </p>
                    <p>
                        I am big on tech exploration: <span className='text-arch-blue'>Arch Linux</span>,
                        <span className='text-arch-blue'> Vim motions</span>, and going down rabbit holes on tools, systems,
                        and new tech.
                    </p>
                </div>
            </section>

            <section className='p-4 rounded-lg bg-arch-blue/5 border border-arch-blue/10'>
                <h3 className='text-xs font-mono uppercase tracking-widest text-arch-blue mb-2'>Current Focus</h3>
                <p className='text-sm text-muted font-normal'>
                    Exploring systems programming and backend infrastructure through low-level projects, including several mini C/C++ projects and a major search engine project using Node.js and C++.
                </p>
            </section>
        </div>
    );
}