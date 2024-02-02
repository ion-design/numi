// Generated with Ion on 1/30/2024, 9:31:42 AM
// Figma Link: https://www.figma.com/file/xRDMG5JDA701k4KuIxuIBq?node-id=3522:954
"use client";
import ProjectsTab from "@/components/ProjectsTab";
import ResourcesTab from "@/components/ResourcesTab";
import Alert from "@/components/ion/Alert";
import Navbar from "@/components/ion/Navbar";
import { useState } from "react";

function Onboarding() {
  const [selected, setSelected] = useState<"projects" | "resources">(
    "projects"
  );

  return (
    <div className="relative flex h-full min-h-screen w-full flex-col items-center gap-10 pb-10 bg-bodyBackground">
      <Navbar
        logoOnly={false}
        selected={selected}
        selectedClickHandler={setSelected}
      />
      <div className="flex max-w-[700px] flex-col items-start gap-10">
        {selected === "projects" && <ProjectsTab />}
        {selected === "resources" && <ResourcesTab />}
      </div>
      {selected === "projects" && <Alert />}

      <img
        src="/images/onboarding/NumiChat.svg"
        alt="NumiChat"
        className="fixed bottom-4 right-4 h-[84px]"
      />
    </div>
  );
}
export default Onboarding;
