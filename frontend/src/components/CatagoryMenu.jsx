import { useRef, useState } from "react";
import { IoMdArrowDropleftCircle } from "react-icons/io";
import { IoMdArrowDroprightCircle } from "react-icons/io";

function CatagoryMenu() {
  const [cursorStyle, setCursorStyle] = useState({ display: "none", top: -10, left: -10 });
  const [isDown, setisDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const menuBar = useRef(null);

  const buttons = [
    "Fiction",
    "Non-Fiction",
    "Poetry",
    "Memories",
    "Scripts",
    "Biography",
    "Journals",
    "Fantasy",
    "Science Fiction",
    "Mystery",
    "Thriller",
    "Romance",
    "Non-Fiction",
    "Poetry",
    "Memories",
    "Scripts",
    "Biography",
    "Journals",
    "Fantasy",
    "Science Fiction",
    "Mystery",
    "Thriller",
    "Romance",
  ].map((button_text, index) => (
    <button
      key={index}
      onClick={() => console.log("clicked", button_text + " -index : " + index)}
      className="active:bg-[#B2B3AB] cursor-pointer active:text-[#101010] text-[#B2B3AB] border-2 border-[#B2B3AB] hover:bg-[#b1b2ac] hover:text-[#101010] px-4 py-2 uppercase rounded-full box-border text-nowrap"
    >
      {button_text}
    </button>
  ));

  return (
    <div className="w-full flex items-center justify-center z-0">
      {/* custom cursor */}
      <div
        className={`fixed rounded-full flex items-center justify-center w-10 h-10 bg-[#b2b3ba] text-black-text pointer-events-none ${
          cursorStyle.display === "none" ? "hidden" : "visible"
        }`}
        style={{ top: cursorStyle.top - 16, left: cursorStyle.left - 20 }}
      >
        <span className="text-lg font-semibold -translate-y-0.5 z-10 pointer-events-none ">&lt;&gt;</span>
      </div>

      {/* menu bar */}
      <div
        onClick={() => {
          if (menuBar.current) {
            menuBar.current.scrollLeft -= 300;
          }
        }}
        className="text-3xl w-fit cursor-pointer px-1 rounded-full bg-transparent hidden md:block"
      >
        <IoMdArrowDropleftCircle />
      </div>

      <div
        ref={menuBar}
        onMouseDown={(e) => {
          const { pageX, clientY, clientX, currentTarget: menu } = e;
          setisDown(true);
          setStartX(pageX - menu.offsetLeft);
          setScrollLeft(menu.scrollLeft);
          setCursorStyle({ display: "yes", top: clientY, left: clientX });
        }}
        onMouseUp={(e) => {
          setisDown(false);
          setCursorStyle({ display: "none" });
        }}
        onMouseMove={(e) => {
          if (e.target.tagName === "BUTTON" && isDown == false) {
            setCursorStyle({ display: "none" });
          } else {
            setCursorStyle({ display: "yes", top: e.clientY, left: e.clientX });
          }

          if (isDown == true) {
            e.preventDefault();
            const menu = e.currentTarget;
            const x = e.pageX - menu.offsetLeft;
            const walkX = x - startX;
            menu.scrollLeft = scrollLeft - walkX;
          }
        }}
        onMouseLeave={(e) => {
          setisDown(false);
          setCursorStyle({ display: "none", top: 0, left: 0 });
        }}
        className={`relative select-none w-full h-fit py-4 flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide`}
      >
        {buttons}
      </div>
      <div
        onClick={() => {
          if (menuBar.current) {
            menuBar.current.scrollLeft += 300;
          }
        }}
        className="text-3xl w-fit cursor-pointer px-1 rounded-full hidden md:block"
      >
        <IoMdArrowDroprightCircle />
      </div>
    </div>
  );
}

export default CatagoryMenu;
