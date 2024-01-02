"use client";
import { DocumentEditor, TempEditor } from "@ly/prosemirror";
import React, { memo } from "react";

const ProsemirrorPage = () => {
  return (
    <div style={{ height: "100%", overflowX: "hidden", display: "flex" }}>
      <TempEditor name="TempEditor">
        <h1>我是 Temp Editor 编辑器</h1>
      </TempEditor>

      <DocumentEditor name="Document">
        <h1>我是 Document Editor 编辑器</h1>
      </DocumentEditor>
    </div>
  );
};

export default memo(ProsemirrorPage);
