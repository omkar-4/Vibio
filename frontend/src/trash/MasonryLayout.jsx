import PropTypes from "prop-types";
import Masonry from "masonry-layout";
import { useEffect, useRef } from "react";

const MasonryLayout = ({ children, columnWidth = 200, gap = 10 }) => {
  const gridRef = useRef();

  useEffect(() => {
    const masonryInstance = new Masonry(gridRef.current, {
      itemSelector: ".masonry-item",
      columnWidth,
      gutter: gap,
    });

    return () => masonryInstance.destroy();
  }, [children, columnWidth, gap]);

  return (
    <div ref={gridRef} className="grid">
      {children}
    </div>
  );
};

MasonryLayout.propTypes = {
  children: PropTypes.node.isRequired,
  columnWidth: PropTypes.number,
  gap: PropTypes.number,
};

MasonryLayout.defaultProps = {
  columnWidth: 200,
  gap: 10,
};

export default MasonryLayout;
