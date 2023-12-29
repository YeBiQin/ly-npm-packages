"use client";
import { DocumentEditor } from "@ly/prosemirror";
import React, { memo } from "react";

const ProsemirrorPage = () => {
  return (
    <div style={{ height: "100%", overflowX: "hidden" }}>
      <DocumentEditor />
    </div>
  );
};

export default memo(ProsemirrorPage);
