import UserInfo from "./UserInfo";
import BreadCrumbs from "./BreadCrumbs";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="bg-white">
      <div className="h-[10vh] px-6 flex items-center justify-between border-b border-slate-100">
        <div className="flex items-center gap-6">
          <i className="bi bi-layout-sidebar-inset-reverse text-[#4B6A4F] text-2xl cursor-pointer"></i>
          <BreadCrumbs />
        </div>

        <UserInfo />
      </div>
      <div className="h-[10vh] px-6 flex items-center justify-between bg-white ">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 pr-4 border-r border-slate-200 text-gray-700 hover:text-black cursor-pointer">
            <span className="text-lg font-medium">Toolbar</span>
            <i className="bi bi-chevron-double-right text-lg"></i>
          </div>

          {[
            { label: "Hide Fields", icon: "bi-eye-slash" },
            { label: "Sort", icon: "bi-arrow-down-up" },
            { label: "Filter", icon: "bi-filter" },
            { label: "Cell View", icon: "bi-view-list" },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-2 py-1.5 rounded-md text-gray-900 hover:bg-gray-100 hover:text-black transition cursor-pointer"
            >
              <i className={`bi ${item.icon} text-lg`}></i>
              <span className="text-lg">{item.label}</span>
            </div>
          ))}
        </div>
        <div className="flex gap-3">
          {/* Transparent Buttons with Border */}
          <Button className="flex items-center cursor-pointer gap-2 px-4 py-5 hover:bg-transparent shadow-none text-sm font-medium border border-gray-300 bg-transparent text-gray-700">
            <i className="bi bi-cloud-arrow-down-fill"></i>
            Import
          </Button>

          <Button className="flex items-center cursor-pointer gap-2 px-4 py-5 hover:bg-transparent shadow-none text-sm font-medium border border-gray-300 bg-transparent text-gray-700">
            <i className="bi bi-cloud-arrow-up-fill"></i>
            Export
          </Button>

          <Button className="flex items-center cursor-pointer gap-2 px-4 py-5 hover:bg-transparent shadow-none text-sm font-medium border border-gray-300 bg-transparent text-gray-700">
            <i className="bi bi-share-fill"></i>
            Share
          </Button>

          {/* Prominent Green Button */}
          <Button className="flex items-center cursor-pointer gap-2 px-6 py-5 hover shadow-none text-sm font-medium text-white bg-[#4B6A4F] hover:bg-[#4B6A4F]">
            <i className="bi bi-plus-circle-fill"></i>
            New Action
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
