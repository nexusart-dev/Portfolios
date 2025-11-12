export default function About() {
    return (
        <section id="about" className="pt-20 bg-gray-50 dark:bg-[#2E073F]">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            About Me
            </h2>
            <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                    My Journey
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                    I'm a passionate full-stack developer with 3+ years of experience 
                    building web applications. I love turning complex problems into 
                    simple, beautiful designs.
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                    My expertise includes React, Next.js, TypeScript, Node.js, and 
                    modern CSS frameworks. I'm always eager to learn new technologies 
                    and take on challenging projects.
                </p>
                <div className="flex flex-wrap gap-2 mt-6">
                    {['React', 'Next.js', 'TypeScript', 'Node.js', 'Laravel', 'Tailwind CSS', 'Tanstack Router', 'React Router Dom', 'Kubb', 'Parse', 'UI-Shadcn', 'UNTR-UI', 'Material UI', 'Salesforce Sales Cloud', 'Apex'].map((tech) => (
                    <span
                        key={tech}
                        className="px-3 py-1 bg-primary-100 text-primary-800 dark:bg-[#492E87] dark:text-primary-200 rounded-full text-sm"
                    >
                        {tech}
                    </span>
                    ))}
                </div>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Experience
                </h4>
                <div className="space-y-4">
                    <div>
                    <h5 className="font-semibold text-gray-900 dark:text-white">
                        Salesforce Developer
                    </h5>
                    <p className="text-gray-600 dark:text-gray-300">PT United Tractors Tbk • August 2024 - December 2024</p>
                    </div>
                    <div>
                    <h5 className="font-semibold text-gray-900 dark:text-white">
                        Frontend Developer
                    </h5>
                    <p className="text-gray-600 dark:text-gray-300">PT United Tractors • January 2025 - Present</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
    )
}