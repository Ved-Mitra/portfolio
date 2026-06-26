import ConnectWithMe from "@/components/ConnectWithMe";
import DownloadResume from "@/components/DownloadResume";

export default function Home() {
    return (
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

        

    );
}