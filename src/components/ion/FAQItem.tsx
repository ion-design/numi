// Generated with Ion on 1/30/2024, 12:05:44 PM
// Figma Link: https://www.figma.com/file/xRDMG5JDA701k4KuIxuIBq?node-id=3819:1812
import clsx from "clsx";
type FAQItemProps = {
  question?: string;
  answer?: string;
  isOpen?: boolean;
  className?: string;
};

function FAQItem({
  question,
  answer,
  isOpen = false,
  className,
}: FAQItemProps) {
  return (
    <div
      className={clsx(
        {
          "flex h-fit w-[652px] flex-col items-start justify-center gap-1":
            true,
          "text-base font-medium text-paragraphs": !isOpen,
        },
        className
      )}
    >
      <div
        className={clsx({
          "flex items-center justify-center gap-2": true,
          "text-base font-medium text-paragraphs": isOpen,
        })}
      >
        <img
          src="/images/faq-item/icon/chevron-right.svg"
          alt="icon/chevron-right"
          className={clsx({
            "": true,
            "h-full": !isOpen,
            "h-[16px] rotate-90": isOpen,
          })}
        />
        <div>{question}</div>
      </div>
      {isOpen && (
        <p className="text-sm font-light text-paragraphs mx-6">{answer}</p>
      )}
    </div>
  );
}
export default FAQItem;
