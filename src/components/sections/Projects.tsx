import Image from "next/image";
import { projects } from '@/data'
import Button from '@/components/ui/Button'
import { ExternalLink, Github } from 'lucide-react'
import BackgroundAnimation from "../atoms/BackgroundAnimation";

export default function Projects() {
    return (
        <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            My Projects
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
            {projects.map((project) => (
                <div
                key={project.id}
                className="bg-white dark:bg-[#2E073F] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                >
                <div className="relative h-[30.5vh] w-full">
                    <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    />
                </div>
                <div className="p-6 relative bg-white/10 backdrop-blur-md dark:bg-gray-900/15">
                    <div className="absolute inset-0 overflow-hidden opacity-35 -z-10">
                        <BackgroundAnimation/>
                    </div>
                    <div className="relative z-10">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        {project.title}
                        </h3>
                        <p className="text-gray-600 dark:text-white mb-4">
                        {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech) => (
                            <span
                            key={tech}
                            className="px-2 py-1 bg-gray-100 dark:bg-[#492E87] text-gray-700 dark:text-white rounded text-sm"
                            >
                            {tech}
                            </span>
                        ))}
                        </div>
                        <div className="flex gap-3">
                        {project.githubUrl && (
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="flex items-center gap-2"
                                    asChild
                                    >
                                    <Github className="h-4 w-4 mr-2" />
                                    Code
                                </Button>
                            </a>
                        )}
                        {project.liveUrl && (
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                <Button size="sm" className="flex items-center gap-2" asChild>
                                    <ExternalLink className="h-4 w-4 mr-2" />
                                    Live Demo
                                </Button>
                            </a>
                        )}
                        </div>
                    </div>
                </div>
                </div>
            ))}
            </div>
        </div>
        </section>
    )
}