import React, { useState, useRef } from "react";
import ReactDOM from "react-dom";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";

import { LeftArrow, RightArrow } from "./Arrows";
import { Card } from "../components/Card";

import { DragDealer } from "./dragDealer";

const elemPrefix = "test";
const getId = (index) => `${elemPrefix}${index}`;

const getItems = () =>
  Array(20)
    .fill(0)
    .map((_, ind) => ({ id: getId(ind) }));

function App() {
  const [items] = useState(getItems);

  // NOTE: for drag by mouse
  const dragState = useRef(new DragDealer());

  const handleDrag =
    ({ scrollContainer }) =>
    (ev) =>
      dragState.current.dragMove(ev, (posDiff) => {
        if (scrollContainer.current) {
          scrollContainer.current.scrollLeft += posDiff;
        }
      });

  const [selected, setSelected] = useState("");
  const handleItemClick = (itemId) => () => {
    if (dragState.current.dragging) {
      return false;
    }
    setSelected(selected !== itemId ? itemId : "");
  };

  return (
    <>
      <div className="example" style={{ paddingTop: "100px" }}>
        <div onMouseLeave={dragState.current.dragStop}>
          <ScrollMenu
            LeftArrow={LeftArrow}
            RightArrow={RightArrow}
            onWheel={onWheel}
            onMouseDown={() => dragState.current.dragStart}
            onMouseUp={() => dragState.current.dragStop}
            onMouseMove={handleDrag}
          >
            {items.map(({ id }) => (
              <Card title={id} itemId={id} key={id} onClick={handleItemClick(id)} selected={id === selected} />
            ))}
          </ScrollMenu>
        </div>
      </div>
    </>
  );
}
export default App;

function onWheel(apiObj, ev) {
  const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

  if (isThouchpad) {
    ev.stopPropagation();
    return;
  }

  if (ev.deltaY < 0) {
    apiObj.scrollNext();
  } else if (ev.deltaY > 0) {
    apiObj.scrollPrev();
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
