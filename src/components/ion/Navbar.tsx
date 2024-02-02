// Generated with Ion on 1/30/2024, 12:13:47 PM
// Figma Link: https://www.figma.com/file/xRDMG5JDA701k4KuIxuIBq?node-id=3737:1680
import clsx from "clsx";
import Link from "next/link";
type NavbarProps = {
  selected?: "resources" | "none" | "projects";
  selectedClickHandler?: (newSelected: "resources" | "projects") => void;
  logoOnly?: boolean;
  className?: string;
};

function Navbar({
  selected = "resources",
  selectedClickHandler,
  logoOnly = false,
  className = "",
}: NavbarProps) {
  return (
    <div
      className={clsx(
        "relative flex h-18 w-full items-center justify-between bg-surface1 p-4",
        className
      )}
    >
      <Link href="/">
        <div className="flex h-full w-[402px] flex-col items-start justify-center gap-2.5">
          <img src="/images/navbar/logo.svg" alt="logo" className="h-[32px]" />
        </div>
      </Link>
      {!logoOnly && (
        <>
          <div
            className={clsx({
              "flex items-center gap-6 text-base font-medium": true,
              "text-slate-500": selected === "none",
            })}
          >
            <button
              onClick={() =>
                selectedClickHandler && selectedClickHandler("projects")
              }
              className={clsx({
                "": true,
                "text-slate-900": selected === "projects",
                "text-slate-500": selected === "resources",
              })}
            >
              Projects
            </button>
            <button
              onClick={() =>
                selectedClickHandler && selectedClickHandler("resources")
              }
              className={clsx({
                "": true,
                "text-slate-500": selected === "projects",
                "text-slate-900": selected === "resources",
              })}
            >
              Resources
            </button>
          </div>
          <div className="flex items-center gap-10">
            <div className="flex items-center gap-3 p-2 text-base font-medium text-slate-900">
              <img
                src="/images/navbar/favorite_FILL1_wght400_GRAD0_opsz24-1.svg"
                alt="favorite_FILL1_wght400_GRAD0_opsz24 1"
                className="h-6"
              />
              <div>Refer NUMI</div>
            </div>
            <div className="flex items-center gap-3 p-2 text-base font-medium text-slate-900">
              <img
                src="/images/navbar/Group-708.svg"
                alt="Group 708"
                className="h-6 w-1/5"
              />
              <div>Notifications</div>
            </div>
            <div className="flex items-center justify-center h-8 w-8 rounded-[50px] bg-slate-900">
              <div className="text-lg font-semibold leading-7 text-slate-50">
                N
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
export default Navbar;
