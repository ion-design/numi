// Generated with Ion on 1/30/2024, 9:49:16 AM
// Figma Link: https://www.figma.com/file/xRDMG5JDA701k4KuIxuIBq?node-id=3810:1474
import AlertItem from "@/components/ion/AlertItem";

function Alert() {
  return (
    <div className="fixed top-14 right-[72px] flex h-fit w-[328px] flex-col items-center rounded-[6px] border border-[#27272d] shadow-[0_4px_6px_0_rgba(0,0,0,0.09),0_1px_1px_0_rgba(255,255,255,0.05),0_2px_2px_0_rgba(255,255,255,0.05),0_5px_5px_0_rgba(255,255,255,0.05),0_10px_10px_0_rgba(255,255,255,0.05),0_0_8px_0_rgba(255,255,255,0.05)]">
      <AlertItem
        text="Your kickoff has been scheduled"
        time="4h ago"
        isNew={true}
      />
      <AlertItem
        text="Your plan has been upgraded from Design to Design+"
        time="4h ago"
        isNew={false}
      />
    </div>
  );
}
export default Alert;
