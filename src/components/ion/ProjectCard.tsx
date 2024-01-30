// Generated with Ion on 1/30/2024, 9:31:42 AM
// Figma Link: https://www.figma.com/file/xRDMG5JDA701k4KuIxuIBq?node-id=3625:200
import clsx from "clsx";
import { MouseEvent } from "react";
type ProjectCardProps = {
  name?: string;
  title?: string;
  position?: string;
  stage?: "progress" | "upcoming" | "paused" | "completed";
  className?: string;
};

function ProjectCard({
  name = "Mateusz Rabanda",
  title = "Brand Redesign",
  position = "Product Designer",
  stage = "progress",
  className = "",
}: ProjectCardProps) {
  const stageTexts: Record<NonNullable<ProjectCardProps["stage"]>, string> = {
    progress: "In Progress",
    upcoming: "Upcoming",
    paused: "Paused",
    completed: "Completed",
  };

  function chatClickHandler(e: MouseEvent<HTMLButtonElement>) {
    alert("chatClickHandler fired");
  }

  function meetClickHandler(e: MouseEvent<HTMLButtonElement>) {
    alert("meetClickHandler fired");
  }

  return (
    <div
      className={clsx(
        "flex h-fit w-full items-start gap-[208px] rounded-[6px] border border-[#3a3a3f] bg-[#1c1d21] p-4",
        className
      )}
    >
      <div className="flex flex-1 flex-col items-start gap-4">
        <div className="flex w-full items-center justify-between">
          <div className="text-base font-bold text-white">{title}</div>
          <div
            className={clsx({
              "flex items-center text-sm font-medium leading-4 gap-x-2": true,
              "gap-1 text-[#fad928]": stage === "progress",
              "gap-0.5 text-[#ea9003]": stage === "upcoming",
              "gap-0.5 text-[#e22c4d]": stage === "paused",
              "gap-0.5 text-[#66c03c]": stage === "completed",
            })}
          >
            <img
              src={
                stage === "progress"
                  ? "/images/onboarding/in_progress_icon.svg"
                  : stage === "upcoming"
                  ? "/images/onboarding/upcoming_icon.svg"
                  : stage === "paused"
                  ? "/images/onboarding/paused_icon.svg"
                  : "/images/onboarding/completed_icon.svg"
              }
              alt="cached_FILL1_wght400_GRAD0_opsz24 1"
              className={clsx({
                "h-3": true,
              })}
            />
            <div className="flex-shrink-0">{stageTexts[stage]}</div>
            <img
              src={
                stage === "progress"
                  ? "/images/onboarding/in_progress_chevron_right.svg"
                  : stage === "upcoming"
                  ? "/images/onboarding/upcoming_chevron_right.svg"
                  : stage === "paused"
                  ? "/images/onboarding/paused_chevron_right.svg"
                  : "/images/onboarding/completed_chevron_right.svg"
              }
              alt="chevron_right_FILL1_wght400_GRAD0_opsz24 1"
              className="h-2"
            />
          </div>
        </div>
        <img
          src="/images/onboarding/Line-1-17.svg"
          alt="Line 1"
          className="w-full"
        />
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center gap-2">
            <div
              className={clsx({
                "relative flex h-10 w-10 items-start gap-2.5 rounded-[90px] bg-cover bg-center p-2":
                  true,
                "bg-[url('/images/onboarding/frame-37-1.png')]":
                  stage === "progress",
                "bg-[url('/images/onboarding/frame-37-2.png')]":
                  stage === "upcoming",
                "bg-[url('/images/onboarding/frame-37-3.png')]":
                  stage === "paused",
                "bg-[url('/images/onboarding/frame-37-4.png')]":
                  stage === "completed",
              })}
            >
              <img
                src="/images/onboarding/Ellipse-6-18.svg"
                alt="Ellipse 6"
                className="absolute right-0 top-0 h-3 w-3"
              />
            </div>
            <div className="flex flex-col items-start justify-center gap-0.5">
              <div className="text-base leading-5 text-white">{name}</div>
              <div className="text-xs font-medium leading-4 text-[#b3b3b3]">
                {position}
              </div>
            </div>
          </div>
          <div className="flex w-1/3 items-start gap-2 text-base font-medium leading-4 text-white">
            <button
              onClick={chatClickHandler}
              className="flex flex-1 items-center justify-center gap-2.5 rounded-[6px] border border-[#39393a] px-4 py-2"
            >
              <img
                src="/images/onboarding/forum_FILL1_wght400_GRAD0_opsz24-1-19.svg"
                alt="forum_FILL1_wght400_GRAD0_opsz24 1"
                className="h-4 w-1/4"
              />
              <div>Chat</div>
            </button>
            <button
              onClick={meetClickHandler}
              className="flex flex-1 items-center justify-center gap-2.5 rounded-[6px] border border-[#39393a] px-4 py-2"
            >
              <img
                src="/images/onboarding/groups_FILL1_wght400_GRAD0_opsz24-1-20.svg"
                alt="groups_FILL1_wght400_GRAD0_opsz24 1"
                className="h-4 w-1/4"
              />
              <div>Meet</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProjectCard;
