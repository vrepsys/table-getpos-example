import { TableCellNodeView } from "./table-cell-node-view";
import TiptapTableCell from "@tiptap/extension-table-cell";

import { ReactNodeViewRenderer } from "@tiptap/react";

export const TableCell = TiptapTableCell.extend({
  addNodeView() {
    return ReactNodeViewRenderer(TableCellNodeView, {
      as: "td",
      className: "group",
    });
  },
});
