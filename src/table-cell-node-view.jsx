import { NodeViewContent, NodeViewWrapper } from "@tiptap/react";
import React from "react";

const TableCellNodeView = ({ editor, getPos }) => {
  const pos = getPos();
  console.log(pos, editor.state.doc.resolve(pos).node().type.name);
  return (
    <NodeViewWrapper>
      <NodeViewContent />
    </NodeViewWrapper>
  );
};

export { TableCellNodeView };
