"use client";

import { BlockNoteEditor, PartialBlock } from "@blocknote/core";
import "@blocknote/core/fonts/inter.css";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { useCreateBlockNote } from "@blocknote/react";
import { useState } from "react";

interface EditorProps {
  onChange: (value: string) => void;
  initialContent: string;
  editable: boolean;
}

const Editor = ({ onChange, initialContent, editable }: EditorProps) => {
  //   const editor: BlockNoteEditor = useCreateBlockNote({
  //     trailingBlock : editable,
  //     initialContent: intialContent
  //       ? (JSON.parse(intialContent) as PartialBlock[])
  //       : undefined,
  //   });

  const initialBlocks = initialContent ? JSON.parse(initialContent) : undefined;
  const [blocks, setBlocks] = useState<PartialBlock[]>(initialBlocks);
  const editor = useCreateBlockNote({ initialContent: blocks });

  return (
    <div>
      <BlockNoteView
        editable={editable}
        editor={editor}
        theme="light"
        onChange={() => {
          setBlocks(editor.document);
          onChange(JSON.stringify(blocks));
          console.log("blocks", blocks);
        }}
      />
    </div>
  );
};

export default Editor 
