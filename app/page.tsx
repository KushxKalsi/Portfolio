import MyProjects from "@/components/main/MyProjects";
import Hero from "@/components/main/Hero";
import Certificates from "@/components/main/Certificates";
import Skills from "@/components/main/Skills";
import Image from "next/image";
import MYprojects from "@/components/main/MyProjects";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-10">
        <Hero />
        <Skills />
        <MyProjects />
        <Certificates />
      </div>
    </main>
  );
}
