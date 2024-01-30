// Generated with Ion on 1/30/2024, 12:27:10 PM
// Figma Link: https://www.figma.com/file/xRDMG5JDA701k4KuIxuIBq?node-id=3737:2246
import Navbar from "@/components/ion/Navbar";
import FAQItem from "@/components/ion/FAQItem";

function ResourcesTab() {
  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex w-full items-center gap-2 text-base font-medium text-white">
        <img
          src="/images/onboarding/help_black_24dp-1.svg"
          alt="help_black_24dp 1"
          className="h-6"
        />
        <div className="w-[668px]">Support</div>
      </div>
      <div className="flex w-full flex-col items-start gap-6 rounded-2xl border border-[#27272d] bg-[#1b1c21] p-6">
        <div className="flex items-center justify-center gap-2 text-base font-medium text-white">
          Designer Collaboration
        </div>
        <FAQItem
          question="How many hours per week will our designer work for us?"
          answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con"
          isOpen={true}
        />
        <FAQItem
          answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con"
          question="Is our designer working with our team full-time?"
          isOpen={false}
        />
        <FAQItem
          answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con"
          question="What is our designer’s time availability? When are they online for a video or chat?"
          isOpen={false}
        />
        <FAQItem
          answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con"
          question="How many projects is our designer handling simultaneously?"
          isOpen={false}
        />
        <FAQItem
          answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con"
          question="How do we communicate with our designers and embed them on our team?"
          isOpen={false}
        />
        <FAQItem
          answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con"
          question="How frequently should we expect communication from our designer?"
          isOpen={false}
        />
        <div className="text-base font-medium text-white">Support</div>
        <FAQItem
          answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con"
          question="Why are we in two Slack channels?"
          isOpen={false}
        />
        <FAQItem
          answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con"
          question="Is our designer working with our team full-time?"
          isOpen={false}
        />
        <FAQItem
          answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con"
          question="What is our designer’s time availability? When are they online for a video or chat?"
          isOpen={false}
        />
        <FAQItem
          answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con"
          question="How many projects is our designer handling simultaneously?"
          isOpen={false}
        />
        <FAQItem
          answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con"
          question="How do we communicate with our designers and embed them on our team?"
          isOpen={false}
        />
        <FAQItem
          answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con"
          question="How frequently should we expect communication from our designer?"
          isOpen={false}
        />
        <FAQItem
          answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con"
          question="What if our designer isn’t working out?"
          isOpen={false}
        />
      </div>
    </div>
  );
}
export default ResourcesTab;
