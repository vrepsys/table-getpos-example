import { useEditor, EditorContent } from "@tiptap/react";
import Document from "@tiptap/extension-document";
import Gapcursor from "@tiptap/extension-gapcursor";
import Paragraph from "@tiptap/extension-paragraph";
import Table from "@tiptap/extension-table";
import TableHeader from "@tiptap/extension-table-header";
import TableRow from "@tiptap/extension-table-row";
import Text from "@tiptap/extension-text";
import { TableCell } from "./extension-table-cell";
import React from "react";

const Tiptap = () => {
  const editor = useEditor({
    extensions: [
      Document,
      Paragraph,
      Text,
      Gapcursor,
      Table.configure({
        resizable: true,
      }),
      TableRow,
      TableHeader,
      TableCell,
    ],
    content:
      "<p>Hello World! 🌎️</p><table><tr><th>a</th><th>b</th></tr><tr><td>1</td><td>1</td></tr></table>",
  });

  return (
    <div>
      <div style={{ paddingTop: "200px", width: "400px", margin: "auto" }}>
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};

export default Tiptap;
