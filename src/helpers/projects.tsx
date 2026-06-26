import { ReactNode } from "react";

interface ProjectLink {
  label: 'GitHub' | 'Live Demo' | 'Documentation' | 'Video' | string;
  url: string;
}

export interface Project {
  title: string;               
  tagline: ReactNode;            
  description: ReactNode;         
  
  category: 'Systems' | 'GPU Programming' | 'Full-Stack' | 'Mobile' | string;
  
  techStack: string[];         
  features: ReactNode;         
  
  // Visuals & Layout
//   imageSrc?: string;            
//   iconName?: string;           
  
  links: ProjectLink[];
  
  featured: boolean;
  status: string; // completed, some version completed, working
}

export const ProjectData:Project[] = [
    {
        title: "MiniOS",
        tagline: (
          <>
          MiniOS is a pedagogical operating system built as an advanced extension of the <a href="https://pdos.csail.mit.edu/6.1810/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">MIT xv6</a> UNIX-like teaching OS.
          </>
        ),
        description: (
          <>
          MiniOS is a pedagogical operating system built as an advanced extension of the MIT xv6 UNIX-like teaching OS. It introduces modern operating system concepts including <span className="bg-blue-500/60 text-white px-1.5 py-0.5 rounded border border-blue-500/30">dynamic scheduling</span>, <span className="bg-blue-500/60 text-white px-1.5 py-0.5 rounded border border-blue-500/30">advanced memory management</span>, and specialized user space applications.
          </>
        ),
        category: "Systems",
        techStack: ["C", "Assembly", "Makefile", "Qemu"],
        features: (
          <ul className="space-y-4 list-disc pl-5 mt-2 text-foreground/80 leading-relaxed">
            <li>
              <strong className="text-foreground">Dynamic Priority Scheduling:</strong> Preemptive scheduling algorithm featuring aging to prevent starvation. It dynamically adjusts process priorities based on CPU usage (applying a penalty for CPU-bound processes) and waiting time (applying an aging increment).
            </li>
            <li>
              <strong className="text-foreground">Copy-On-Write (COW) Fork:</strong> Optimized process creation where the parent and child share physical memory pages upon <code className="bg-surface px-1.5 py-0.5 rounded text-primary border border-border">fork()</code>. Pages are only duplicated when a process attempts to modify them, managed via a robust reference counting mechanism.
            </li>
            <li>
              <strong className="text-foreground">Advanced File Management System:</strong> Dynamic file storage handling creation, reading, writing, and deletion of files in dynamically allocated memory blocks.
            </li>
            <li>
              <strong className="text-foreground">Garbage Collection:</strong> Automatic memory reclamation subsystem that detects unused file blocks and cleans up memory during system idle periods to minimize performance impact.
            </li>
            <li>
              <strong className="text-foreground">Dynamic Memory Compaction:</strong> Eliminates external fragmentation caused by file deletions by reorganizing physical memory and updating internal file references dynamically.
            </li>
            <li>
              <strong className="text-foreground">Log Keeper:</strong> Robust logging mechanism (<code className="bg-surface px-1.5 py-0.5 rounded text-primary border border-border">logkeeper</code>) designed to reliably record system events, track operations, and assist in debugging and stress testing across the OS.
            </li>
          </ul>
        ),
        links: [
          { label: "GitHub", url: "https://github.com/Ved-Mitra/miniOS-Design" }
        ], 
        featured: true, 
        status: "completed" 
    },
    {
        title: "Social Network Intelligence Engine (SNIE)",
        tagline: (
          <>
          The Social Network Intelligence Engine (SNIE) is a C++-based analytics framework that models a social network as a graph and performs deep structural intelligence.
          </>
        ),
        description: (
          <>
          The Social Network Intelligence Engine (SNIE) is a C++-based analytics framework that models a social network as a graph and performs deep structural intelligence. It detects communities, identifies influential nodes, generates personalized recommendations, and suggests cross-community bridge connections to improve global network connectivity.
          <br /><br />
          This project applies the concepts of <span className="bg-primary/20 text-primary px-1.5 py-0.5 rounded border border-primary/30">Graph Theory</span>, <span className="bg-primary/20 text-primary px-1.5 py-0.5 rounded border border-primary/30">Shortest Paths</span>, <span className="bg-primary/20 text-primary px-1.5 py-0.5 rounded border border-primary/30">Centrality Algorithms</span>, and <span className="bg-primary/20 text-primary px-1.5 py-0.5 rounded border border-primary/30">Semantic Scoring</span> — making it a strong advanced DSA-based project.
          </>
        ),
        category: "Algorithms & Analytics",
        techStack: ["C++", "Python"],
        features: (
          <div className="flex flex-col gap-3">
            <p className="text-foreground/80 leading-relaxed mt-2">
              The Social Network Intelligence Engine (SNIE) is an analytical system designed to understand, interpret, and optimize connectivity within social, professional, or collaborative networks. Nodes represent individuals or entities, while edges represent relationships with varying strength.
            </p>
            <h4 className="font-semibold text-foreground mt-2">Key Features:</h4>
            <ul className="space-y-2 list-disc pl-5 text-foreground/80 leading-relaxed">
              <li><strong className="text-foreground">Offline Structural Intelligence:</strong> Community detection and Betweenness Centrality (BC)</li>
              <li><strong className="text-foreground">Real-Time Local Intelligence:</strong> Weighted Dijkstra paths and semantic scoring</li>
              <li><strong className="text-foreground">Global Optimization:</strong> Cross-community bridge recommendations</li>
              <li><strong className="text-foreground">Visualization:</strong> Communities, influence, weighted ties, and bridge simulations</li>
              <li><strong className="text-foreground">Information Spread</strong></li>
            </ul>
          </div>
        ),
        links: [
            { label: "GitHub", url: "https://github.com/Ved-Mitra/Social-Network-Intelligence-Engine-SNIE-DSA-Project-" }
        ],
        featured: true,
        status: "completed"
    },
    {
        title: "C++ Autograd Engine && CNN from Scratch",
        tagline: (
          <>
          Instead of hardcoding the backward passes for specific layers, this project features a custom-built <strong className="text-primary">Autograd Engine</strong> (similar to PyTorch's <code className="bg-surface px-1.5 py-0.5 rounded text-primary border border-border">Tensor</code> system).
          </>
        ),
        description: (
          <>
          This project is a Convolutional Neural Network (CNN) built entirely from scratch in C++. Instead of hardcoding the backward passes for specific layers, this project features a custom-built <strong className="text-primary">Autograd Engine</strong>. The engine dynamically builds a computation graph during the forward pass and automatically computes gradients via reverse-mode automatic differentiation.
          </>
        ),
        category: "Systems",
        techStack: ["C++", "CMake"],
        features: (
          <ul className="space-y-3 list-disc pl-5 mt-2 text-foreground/80 leading-relaxed">
            <li>
              <strong className="text-foreground">Custom Tensor Library:</strong> N-dimensional array processing built from the ground up using C++ Smart Pointers.
            </li>
            <li>
              <strong className="text-foreground">Automatic Differentiation:</strong> A PyTorch-style dynamic computation graph that tracks mathematical operations and computes gradients using the Chain Rule.
            </li>
            <li>
              <strong className="text-foreground">Neural Network Modules:</strong> Fully Connected (Dense) layers, Convolutional layers, Max Pooling, and Activation functions (ReLU, Softmax) built purely on top of the Autograd tensor operations.
            </li>
          </ul>
        ),
        links: [
            { label: "GitHub", url: "https://github.com/Ved-Mitra/CNN-Scratch" }
        ],
        featured: true,
        status: "some version completed"
    },
    {
        title: "speakify",
        tagline: (
          <>
          A decentralized, multi-device audio syncing app that transforms a cluster of smartphones into a unified, synchronized speaker system for your TV, console, or media player.
          </>
        ),
        description: (
          <>
          We’ve all experienced it: TV speakers that are too quiet, dialogue that gets washed out, or situations where you want to watch a late-night movie with friends without waking up the rest of the house. Existing solutions require expensive hardware transmitters or are locked into specific hardware ecosystems (e.g., Apple's Share Audio, which is limited to two pairs of AirPods).
          </>
        ),
        category: "Mobile",
        techStack: ["Flutter", "Dart"],
        features: (
          <div className="flex flex-col gap-3">
            <p className="text-foreground/80 leading-relaxed mt-2">
              SyncCast allows a group of smartphones (up to 10) to act as a coordinated speaker array.
            </p>
            <ul className="space-y-3 list-disc pl-5 text-foreground/80 leading-relaxed">
              <li>
                <strong className="text-foreground">The Master Device:</strong> Connects directly to the source media player (Television, Gaming Console, PC) via Bluetooth or an auxiliary input.
              </li>
              <li>
                <strong className="text-foreground">The Slave Devices:</strong> Connect seamlessly to the Master device.
              </li>
              <li>
                <strong className="text-foreground">The Output:</strong> The Master captures the external audio stream and dynamically broadcasts it to all connected phones in perfect, low-latency synchronization, creating an instant surround-sound or multi-headphone environment.
              </li>
            </ul>
          </div>
        ),
        links: [
            { label: "GitHub", url: "https://github.com/Ved-Mitra/speakify" }
        ],
        featured: false,
        status: "working"
    },
    {
        title: "AttenSync",
        tagline: (
          <>
          Mobile-based intelligent attention management system designed to help students regain control over their attention.
          </>
        ),
        description: (
          <>
          AttenSync is an Android-based productivity and focus-tracking application designed to help users monitor screen time, manage app usage through a rewards-based leaderboard, and engage in community discussions.
          </>
        ),
        category: "Full-Stack",
        techStack: ["Kotlin", "Socket.io", "Node.js", "REST API"],
        features: (
          <ul className="space-y-3 list-disc pl-5 mt-2 text-foreground/80 leading-relaxed">
            <li>
              <strong className="text-foreground">Screen Time Dashboard:</strong> Shows aggregate screen time for monitored apps with detailed per-app breakdowns.
            </li>
            <li>
              <strong className="text-foreground">Focus Tracking Service:</strong> A dedicated foreground service monitors app usage and focus sessions in real-time.
            </li>
            <li>
              <strong className="text-foreground">Gamified Leaderboard:</strong> Earn points based on usage stats and view global rankings. Points are cached locally for offline access.
            </li>
            <li>
              <strong className="text-foreground">Community Discussion:</strong> Integrated real-time chat platform using Socket.io to discuss productivity tips.
            </li>
            <li>
              <strong className="text-foreground">Secure Auth:</strong> Quick onboarding using Google Sign-In and Firebase Authentication.
            </li>
          </ul>
        ),
        links: [
            { label: "GitHub", url: "https://github.com/Ved-Mitra/AttenSync" }
        ],
        featured: false,
        status: "some version completed"
    },
    {
        title: "Authentication App",
        tagline: (
          <>
          A Simple Authentication System
          </>
        ),
        description: (
          <>
          An Authentication System utilizing MongoDB and JWT.
          </>
        ),
        category: "Full-Stack",
        techStack: ["Next.js", "TypeScript", "MongoDB", "JWT"],
        features: (
          <ul className="space-y-3 list-disc pl-5 mt-2 text-foreground/80 leading-relaxed">
            <li>
              <strong className="text-foreground">Secure Authentication:</strong> Implements an end-to-end secure user authentication flow.
            </li>
          </ul>
        ),
        links: [
            { label: "GitHub", url: "https://github.com/Ved-Mitra/authentication-app" }
        ],
        featured: false,
        status: "completed"
    },
    {
        title: "Portfolio Website",
        tagline: (
          <>
          A premium, dark-themed personal portfolio showcasing my software engineering projects and technical skills.
          </>
        ),
        description: (
          <>
          A modern, highly responsive personal portfolio website built to showcase my technical projects, software engineering skills, and professional journey. The platform features a bespoke dark theme, custom interactive components, and smooth micro-animations tailored to provide a premium user experience.
          </>
        ),
        category: "Full-Stack",
        techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
        features: (
          <ul className="space-y-3 list-disc pl-5 mt-2 text-foreground/80 leading-relaxed">
            <li>
              <strong className="text-foreground">Modern Architecture:</strong> Built using Next.js App Router for optimal performance and SEO.
            </li>
            <li>
              <strong className="text-foreground">Premium UI/UX:</strong> Custom-designed dark aesthetic utilizing Tailwind CSS, glassmorphism, and subtle hover animations.
            </li>
            <li>
              <strong className="text-foreground">Fully Responsive:</strong> Seamlessly adapts to all screen sizes from mobile devices to large desktop monitors.
            </li>
            <li>
              <strong className="text-foreground">Dynamic Content:</strong> Scalable project and skill data structures allowing for fast, modular updates.
            </li>
          </ul>
        ),
        links: [
            { label: "GitHub", url: "https://github.com/Ved-Mitra/portfolio" }
        ],
        featured: false,
        status: "completed"
    },
    {
        title: "Credit Score Assessment",
        tagline: (
          <>
          This project focuses on predicting whether a customer is a good or bad credit risk using multiple machine learning models.
          </>
        ),
        description: (
          <>
          It builds, evaluates, and compares both linear and non-linear classification models to determine the most effective approach for credit scoring.
          </>
        ),
        category: "Machine Learning",
        techStack: ["Python", "Google Colab", "Scikit-Learn"],
        features: (
          <div className="flex flex-col gap-3 mt-2">
            <p className="text-foreground/80 leading-relaxed">
              <strong className="text-foreground">Model Comparison Pipeline:</strong> Rigorously evaluated multiple algorithms to find the optimal predictive solution:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 list-disc pl-5 text-foreground/80 leading-relaxed">
              <li>Logistic Regression</li>
              <li>Decision Tree</li>
              <li>Random Forest</li>
              <li>Support Vector Machine (SVM)</li>
              <li>K-Nearest Neighbors (KNN)</li>
              <li>Naive Bayes</li>
              <li className="text-primary font-semibold">Gradient Boosting (Best Model)</li>
            </ul>
          </div>
        ),
        links: [
            { label: "GitHub", url: "https://github.com/Ved-Mitra/Credit-Score-Assessment" }
        ],
        featured: false,
        status: "completed"
    },
    {
        title: "Document Scanner",
        tagline: (
          <>
          A computer vision tool that creates top-down digital scans of documents from raw photos.
          </>
        ),
        description: (
          <>
          Uses Python and OpenCV to find a document in an image, identify its corners, and perform a perspective transform to create a top-down, &quot;scanned&quot; view of the document.
          </>
        ),
        category: "Machine Learning",
        techStack: ["Python", "OpenCV"],
        features: (
          <ul className="space-y-3 list-disc pl-5 mt-2 text-foreground/80 leading-relaxed">
            <li>
              <strong className="text-foreground">Edge Detection:</strong> Automatically detects the edges of the paper.
            </li>
            <li>
              <strong className="text-foreground">Contour Detection:</strong> Finds the largest quadrilateral in the image, isolating the document.
            </li>
            <li>
              <strong className="text-foreground">Perspective Transform:</strong> Warps the detected region into a flat, top-down image.
            </li>
            <li>
              <strong className="text-foreground">Image Thresholding:</strong> Creates a clean black-and-white scan effect for optimal readability.
            </li>
          </ul>
        ),
        links: [
            { label: "GitHub", url: "https://github.com/Ved-Mitra/Document-Scanner" }
        ],
        featured: false,
        status: "completed"
    },
    {
        title: "Autotype",
        tagline: (
          <>
          System-wide autocomplete and autocorrect software.
          </>
        ),
        description: (
          <>
          An autocorrect and autocomplete engine for Linux and Windows. It runs efficiently in the background as a system service and provides intelligent, real-time text suggestions across all applications.
          </>
        ),
        category: "Systems",
        techStack: ["Rust"],
        features: (
          <p className="text-foreground/50 italic mt-2">
            Currently in active development...
          </p>
        ),
        links: [],
        featured: false,
        status: "working"
    },
    {
        title: "Automatic Quiz System",
        tagline: (
          <>
          An educational tool that helps instructors create, conduct, and comprehensively analyze student quizzes.
          </>
        ),
        description: (
          <div className="space-y-3 mt-2">
            <p>
              This is a multipurpose system designed to ease the workflow of both instructors and students—a one-stop platform to create a quiz, attempt the exam, and display detailed results along with performance histograms and response sheets.
            </p>
            <p>
              <strong className="text-primary font-medium">Instructor Portal:</strong> Allows instructors to create quizzes either from a predefined database of questions (for courses like Bio-engineering, Computer Science, Electrical Engineering, and Math) or by manually inputting custom questions and answers.
            </p>
            <p>
              <strong className="text-primary font-medium">Student Portal:</strong> Allows students to attempt the quiz and analyze their results. It displays a visual performance histogram comparing their score against peers who took the same exam.
            </p>
          </div>
        ),
        category: "Software Development",
        techStack: ["C"],
        features: (
          <ul className="space-y-3 list-disc pl-5 mt-2 text-foreground/80 leading-relaxed">
            <li>
              <strong className="text-foreground">Dynamic Quiz Creation:</strong> Generate quizzes from predefined question banks or via manual instructor input.
            </li>
            <li>
              <strong className="text-foreground">Multi-User Support:</strong> Allows multiple students to take the same quiz on the same system, securely saving all individual responses.
            </li>
            <li>
              <strong className="text-foreground">Performance Analytics:</strong> Automatically analyzes student scores and generates a statistical histogram to visualize overall class performance.
            </li>
          </ul>
        ),
        links: [
            { label: "GitHub", url: "https://github.com/Ved-Mitra/Automatic-Quiz-System" }
        ],
        featured: false,
        status: "completed"
    }
]