import ConnectWithMe from "@/components/ConnectWithMe";
import DownloadResume from "@/components/DownloadResume";
import { getTechStack } from "@/helpers/techSkills";

export default function Home() {
    const techStack = getTechStack();

    return (
        <div>
            <div className="group flex flex-col gap-6 p-8 bg-zinc-900 border border-zinc-800 rounded-xl transition-all duration-500 hover:-translate-y-2 hover:border-zinc-700 hover:shadow-lg hover:shadow-emerald-500/10">
                
                <span className="text-xl text-zinc-400 group-hover:text-green-400 transition-colors text-left font-semibold">
                    About Me ---
                </span>
                
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full">
                    
                    <div className="w-64 h-64 md:w-72 md:h-72 rounded-full bg-surface border-2 border-border shadow-[0_0_30px_rgba(0,229,225,0.1)] shrink-0 flex items-center justify-center overflow-hidden">
                        <img 
                            src="/my-image.jpeg" 
                            alt="My Profile Image" 
                            className="object-cover w-full h-full transition-transform duration-500 ease-in group-hover:rotate-12"
                        />
                    </div>

                    <div className="flex flex-col gap-3 text-center items-center justify-center h-full pt-4 md:pt-0 w-full overflow-hidden">
                        
                        <h1 className="text-3xl font-extrabold text-white tracking-tight">
                            Ved Mitra Verma
                        </h1>
                    
                        <h3 className="text-zinc-400 font-medium text-sm md:text-base tracking-wide text-center">
                            Web & App Dev • GPU Programming • Systems
                        </h3>
                        
                        <div className="flex justify-center mt-2">
                            <img 
                                src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=22&duration=2800&pause=900&color=00C2FF&center=true&vCenter=true&width=500&lines=Building+high-performance+systems;Full-stack+%26+Mobile+Development;GPU+Acceleration+%26+Kernel+Dev;Always+learning%2C+always+shipping" 
                                alt="Typing Animation"
                                className="max-w-full"
                            />
                        </div>
                        <p className="text-zinc-300 text-sm md:text-base leading-relaxed text-center">CS Student at <span className="bg-emerald-500/60 text-white px-1.5 py-0.5 rounded border border-emerald-500/30 font-medium">IIT Jodhpur</span> , I build things from scratch, understand from the root basics.</p>

                        <ConnectWithMe />
                        <DownloadResume />
                    </div>
                </div>
            </div>


            <div className="group flex flex-col gap-6 p-8 mt-8 bg-zinc-900 border border-zinc-800 rounded-xl transition-all duration-500 hover:-translate-y-2 hover:border-zinc-700 hover:shadow-lg hover:shadow-emerald-500/10">
                
                <span className="text-xl text-zinc-400 group-hover:text-green-400 transition-colors text-left font-semibold">
                    Technical Skills ---
                </span>
                
                <p className="text-zinc-300 text-sm md:text-base leading-relaxed text-center max-w-2xl mx-auto">
                    I'm a CS student at <span className="bg-emerald-500/20 text-emerald-400 px-1.5 py-0.5 rounded border border-emerald-500/30 font-medium">IIT Jodhpur</span> who loves building systems from scratch. 
                    I work across the stack, split between writing <span className="bg-emerald-500/20 text-emerald-400 px-1.5 py-0.5 rounded border border-emerald-500/30 font-medium">low-level systems code</span> and building real-world software. 
                    Whether that means optimizing GPU pipelines, tweaking memory allocation in a custom kernel, or shipping real-time, synchronized backends for <span className="bg-emerald-500/20 text-emerald-400 px-1.5 py-0.5 rounded border border-emerald-500/30 font-medium">web and mobile apps</span>, I just enjoy figuring out how things work under the hood.
                </p>
                <section className="flex flex-col gap-2">
                        {techStack.map((category)=>(
                            <div key={category.categoryName} className="flex flex-col">
                                <div className="flex flex-wrap gap-1">
                                    {category.items.map((skill)=>(
                                        <div key = {skill.name} className="flex items-center gap-px bg-surface border border-border px-2 py-1 rounded-2xl hover:border-primary/50 hover:bg-surface/80 transition-all duration-300 shadow-sm">
                                            <span className="flex items-center justify-center text-xl">{skill.icon}</span>
                                            <span className="font-medium text-foreground">{skill.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                </section>
            </div>
        </div>
    );
}