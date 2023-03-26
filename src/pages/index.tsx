import React from "react";
import { useQuill } from "react-quilljs";
import ToolbarButton from '../components/common/ToolbarButton';

import styles from '@/styles/QuillJSEditor.module.css'

const QuillJSEditor = () => {
  const { quillRef } = useQuill({
    modules: {
      toolbar: '#toolbar'
    },
    formats: ["bold", "italic", "underline"],
  });

  return (
    <div className={styles.wrapper}>
      <div className={styles.editorContainer}>
        <div id="toolbar">
          <ToolbarButton quillClass="ql-bold" size="md"></ToolbarButton>
          <ToolbarButton quillClass="ql-italic" size="md"></ToolbarButton>
          <ToolbarButton quillClass="ql-underline" size="md"></ToolbarButton>
        </div>
        <div id="editor" />
        <div ref={quillRef} />
      </div>
    </div>
  );
};
export default QuillJSEditor;