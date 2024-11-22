"use client";

import { useState, useEffect } from "react";
import { IconCloud } from "@/app/components/ui/IconCloud";

const slugs = [
    "typescript", "javascript", "dart", "java", "react", "flutter", "android",
    "html5", "css3", "nodedotjs", "express", "nextdotjs", "prisma", "amazonaws",
    "postgresql", "firebase", "nginx", "vercel", "testinglibrary", "jest",
    "cypress", "docker", "git", "jira", "github", "gitlab", "visualstudiocode",
    "androidstudio", "sonarqube", "figma",
];

export function IconCloudDemo() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // Set mounted to true once the component is rendered on the client
        setMounted(true);
    }, []);

    if (!mounted) return null; // Avoid server-rendering mismatches by not rendering on the server

    return (
        <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg bg-background px-20 pb-20 pt-8">
            <IconCloud iconSlugs={slugs} />
        </div>
    );
}
