// Generated with Ion on 1/30/2024, 9:49:00 AM
// Figma Link: https://www.figma.com/file/xRDMG5JDA701k4KuIxuIBq?node-id=3810:1481
import clsx from "clsx";
type AlertItemProps = {
  time?: string;
  text?: string;
  isNew?: boolean;
  className?: string;
};

function AlertItem({
  time = "4h ago",
  text = "Your kickoff has been scheduled",
  isNew = true,
  className = "",
}: AlertItemProps) {
  return (
    <div
      className={clsx(
        {
          "flex h-fit w-[328px] flex-row items-start border-b border-stroke gap-x-2 p-[5px]":
            true,
          "bg-surface1": isNew,
          "bg-surface1 text-paragraphs": !isNew,
        },
        className
      )}
    >
      <div className="flex w-full items-center gap-2 px-2 py-1.5">
        {isNew && (
          <img
            src="/images/alert-item/Ellipse-7.svg"
            alt="Ellipse 7"
            className="h-1.5 w-1.5 text-sm font-medium"
          />
        )}
        <div
          className={clsx({
            "text-sm": true,
            "w-[240px] font-medium text-titlesIcons": isNew,
            "leading-normal": !isNew,
          })}
        >
          {text}
        </div>
        <div className="flex-shrink-0 text-xs leading-normal text-paragraphs">
          {time}
        </div>
      </div>
    </div>
  );
}
export default AlertItem;
