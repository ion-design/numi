// Generated with Ion on 1/30/2024, 9:31:42 AM
// Figma Link: https://www.figma.com/file/xRDMG5JDA701k4KuIxuIBq?node-id=3596:608

import { MouseEvent } from "react";

type PersonCardProps = {
  position?: string;
  name?: string;
};

function PersonCard({ position = "", name = "" }: PersonCardProps) {
  function chatClickHandler(e: MouseEvent<HTMLButtonElement>) {
    alert("chatClickHandler fired");
  }

  function meetClickHandler(e: MouseEvent<HTMLButtonElement>) {
    alert("meetClickHandler fired");
  }

  return (
    <div className="flex h-fit max-w-[342px] items-start gap-[208px] rounded-[6px] border border-[#3a3a3f] bg-[#1c1d21] p-4">
      <div className="flex flex-1 flex-col items-start gap-4">
        <div className="flex items-center gap-2">
          <div className="relative flex h-10 w-10 items-start gap-2.5 rounded-[90px] bg-[url('/images/onboarding/frame-37.png')] bg-cover p-2">
            <img
              src="/images/onboarding/Ellipse-6.svg"
              alt="Ellipse 6"
              className="absolute left-7 top-0 h-3 w-3"
            />
          </div>
          <div className="flex h-full flex-col items-start justify-center gap-0.5">
            <div className="text-base leading-5 text-white">{name}</div>
            <div className="text-sm font-medium leading-4 text-[#b3b3b3]">
              {position}
            </div>
          </div>
        </div>
        <div className="flex h-8 w-[310px] items-start gap-2 text-base font-medium leading-4 text-white">
          <button
            onClick={chatClickHandler}
            className="flex flex-1 items-center justify-center gap-2.5 rounded-[6px] border border-[#39393a] px-4 py-2"
          >
            <img
              src="/images/onboarding/forum_FILL1_wght400_GRAD0_opsz24-1.svg"
              alt="forum_FILL1_wght400_GRAD0_opsz24 1"
              className="h-4"
            />
            <div>Chat</div>
          </button>
          <button
            onClick={meetClickHandler}
            className="flex flex-1 items-center justify-center gap-2.5 rounded-[6px] border border-[#39393a] px-4 py-2"
          >
            <img
              src="/images/onboarding/groups_FILL1_wght400_GRAD0_opsz24-1.svg"
              alt="groups_FILL1_wght400_GRAD0_opsz24 1"
              className="h-4"
            />
            <div>Meet</div>
          </button>
        </div>
      </div>
    </div>
  );
}
export default PersonCard;
