// Generated with Ion on 1/30/2024, 11:15:33 PM
// Figma Link: https://www.figma.com/file/xRDMG5JDA701k4KuIxuIBq/NUMI-Portals?type=design&node-id=3522-954&mode=design&t=0tqfdyW6eV1Pao8T-11
import clsx from "clsx";
import { MouseEvent, useState } from "react";
import PersonCard from "./ion/PersonCard";
import ProjectCard from "./ion/ProjectCard";

function ProjectsTab() {
  const [showAllProjects, setShowAllProjects] = useState(false);

  function addClickHander(e: MouseEvent<HTMLButtonElement>) {
    alert("addClickHander fired");
  }

  return (
    <div className="flex flex-col gap-y-10">
      <div className="flex flex-col items-start gap-4">
        <div className="flex w-full items-center justify-between text-base font-medium">
          <div className="flex items-start gap-2 text-titlesIcons">
            <img
              src="/images/onboarding/psychiatry_FILL1_wght400_GRAD0_opsz24-1.svg"
              alt="psychiatry_FILL1_wght400_GRAD0_opsz24 1"
              className="h-6"
            />
            <div>Projects</div>
          </div>
          <button
            onClick={addClickHander}
            className="flex items-center justify-center gap-2 rounded-[6px] bg-white px-4 py-2 leading-4 text-slate-50"
          >
            <img
              src="/images/onboarding/add_FILL1_wght400_GRAD0_opsz24-1.svg"
              alt="add_FILL1_wght400_GRAD0_opsz24 1"
              className="h-4 w-1/3"
            />
            <div>Add</div>
          </button>
        </div>
        <div className="flex flex-col items-start gap-6">
          <ProjectCard
            title="Brand Redesign"
            name="Mateusz Rabanda"
            position="Product Designer"
            stage="progress"
          />
          <ProjectCard
            position="Product Designer"
            name="Gokce Durusoy"
            title="Moodboarding Exploration"
            stage="upcoming"
          />
          <ProjectCard
            position="Product Designer"
            name="Kasia Szostak"
            title="Style Exploration"
            stage="paused"
          />
          <div className="relative w-fit h-fit">
            <ProjectCard
              position="Product Designer"
              name="Pranav Patil"
              title="Landing Page Design"
              stage="completed"
            />
          </div>
          {showAllProjects && (
            <>
              <ProjectCard
                position="Webflow Designer"
                name="Yar Roshidi"
                title="Webflow Design"
                stage="completed"
              />
            </>
          )}

          <div className="relative flex w-full flex-col items-center justify-center gap-6 text-xs leading-tight text-titlesIcons">
            <button
              onClick={() => setShowAllProjects(!showAllProjects)}
              className="absolute bottom-[-8px] right-[279px] flex items-center justify-center gap-1.5 bg-bodyBackground px-2"
            >
              <div>
                {showAllProjects ? "Hide Past Projects" : "View Past Projects"}
              </div>
              <img
                src="/images/onboarding/chevron_right_FILL1_wght400_GRAD0_opsz24-1.svg"
                alt="chevron_right_FILL1_wght400_GRAD0_opsz24 1"
                className={clsx("h-4", {
                  "rotate-180": showAllProjects,
                })}
              />
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start gap-4">
        <div className="flex w-full items-center justify-between text-base font-medium text-titlesIcons">
          <div className="flex items-start gap-2">
            <img
              src="/images/onboarding/perm_phone_msg_FILL1_wght400_GRAD0_opsz24-1.svg"
              alt="perm_phone_msg_FILL1_wght400_GRAD0_opsz24 1"
              className="h-6 w-1/5"
            />
            <div className="w-fit flex-shrink-0">Office Hours</div>
          </div>
          <div>1 of 2 Remaining</div>
        </div>
        <div className="flex w-full items-start gap-4">
          <PersonCard name="Hannah Pobar" position="Head of Success" />
          <PersonCard position="Co-Founder" name="Harrison Telyan" />
        </div>
      </div>
      <div className="flex w-full flex-col items-start gap-4">
        <div className="flex w-full items-center gap-2 text-base text-titlesIcons">
          <img
            src="/images/onboarding/dashboard_black_24dp-(1)-1.svg"
            alt="dashboard_black_24dp (1) 1"
            className="h-6"
          />
          <div className="w-[668px]">Insights</div>
        </div>
        <div className="flex w-full items-start gap-4">
          <div className="flex flex-1 items-center justify-center gap-6 rounded-[6px] border border-stroke bg-surface1 p-6">
            <div className="flex flex-col items-start gap-4">
              <div className="flex flex-col items-center justify-center gap-2">
                <div className="text-base font-bold text-titlesIcons">
                  87hrs
                </div>
                <div className="text-sm font-medium leading-4 text-paragraphs">
                  saved vs recruiting
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-1 items-center justify-center gap-6 rounded-[6px] border border-stroke bg-surface1 p-6">
            <div className="flex flex-col items-start gap-4">
              <div className="flex flex-col items-center justify-center gap-2">
                <div className="text-base font-bold text-titlesIcons">
                  $62,241
                </div>
                <div className="text-sm font-medium leading-4 text-paragraphs">
                  saved vs inhouse
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-1 items-center justify-center gap-6 rounded-[6px] border border-stroke bg-surface1 p-6">
            <div className="flex flex-col items-start gap-4">
              <div className="flex flex-col items-center justify-center gap-2">
                <div className="text-base font-bold text-titlesIcons">147d</div>
                <div className="text-sm font-medium leading-4 text-paragraphs">
                  as NUMI Customer
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsTab;
