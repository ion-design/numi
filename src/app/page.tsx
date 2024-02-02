// Generated with Ion on 1/30/2024, 9:04:38 AM
// Figma Link: https://www.figma.com/file/xRDMG5JDA701k4KuIxuIBq?node-id=3737:2051
"use client";
import Navbar from "@/components/ion/Navbar";
import { MouseEvent } from "react";

function Onboarding() {
  function confirmClickHandler(e: MouseEvent<HTMLButtonElement>) {
    alert("confirmClickHandler fired");
  }

  return (
    <div className="flex min-h-screen w-screen flex-col items-center gap-[212px] bg-bodyBackground">
      <Navbar selected="none" logoOnly={true} />
      <div className="flex w-full max-w-[626px] flex-col items-start justify-end gap-6 text-base">
        <div className="flex w-full flex-col items-start gap-4">
          <div className="flex w-full items-center gap-4 font-medium text-titlesIcons">
            <div className="flex items-start gap-2 w-full">
              <img
                src="/images/onboarding/workspace_premium_FILL1_wght400_GRAD0_opsz24-1.svg"
                alt="workspace_premium_FILL1_wght400_GRAD0_opsz24 1"
                className="h-6 w-6"
              />
              <div>Design Brief</div>
            </div>
          </div>
          <div className="w-full leading-5 text-paragraphs">
            Include context that you feel would be helpful for your designer.
            You might include KPIs, data, interviews, competitors, moodboards,
            invites, etc.
          </div>
          <textarea
            placeholder="The customer, a coffee shop startup that builds software for
              coffee shops to run more efficiently, is looking for design work
              to be done. They want their landing page redesigned as the entry
              point to a bigger project involving their core product. The
              existing designs from a previous designer need to be tweaked and
              updated. After building the website, they plan on designing the
              core product and creating a new iPad app with payroll processing
              and an onboarding flow for new coffee shops. They also need help
              with designing a bean ordering marketplace and conducting UX
              research. Additionally, they want to launch a new mobile
              experience for their loyalty rewards program that requires
              ethnography research and thought partnership. The customer
              anticipates needing multiple designers but wants to start with
              redesigning the website first within the next month and a half."
            className="w-full min-h-80 box-content rounded-[6px] border border-stroke bg-surface1 p-4 text-titlesIcons"
          />
        </div>
        <button
          onClick={confirmClickHandler}
          className="flex items-center justify-center gap-2.5 rounded-[6px] bg-slate-900 px-4 py-2 font-medium leading-4 text-slate-50"
        >
          <div>Confirm</div>
        </button>
      </div>
    </div>
  );
}
export default Onboarding;
