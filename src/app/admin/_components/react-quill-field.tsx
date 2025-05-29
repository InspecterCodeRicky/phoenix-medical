import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

interface IReactQuill {
  value: string;
  onChange?: (value: string) => void;
  className?: string;
  placeholder?: string;
}

const ReactQuillField = ({
  value,
  onChange,
  className,
  placeholder,
  ...props
}: IReactQuill) => {
  return (
    <ReactQuill
      value={value}
      onChange={(value)=> {
        onChange!(value)
      }}
      theme="snow"
      modules={{
        toolbar: [
          [{ header: [1, 2, 3, 4, 5, 6, true] }],
          ["bold", "italic", "underline", "strike"],
          ["blockquote", "code-block"],
          [{ list: "ordered" }, { list: "bullet" }],
          [{ indent: "-1" }, { indent: "+1" }],
          [{ align: [] }],
          ["clean"],
        ],
      }}
      placeholder={placeholder}
      style={{
        overflow: "hidden",
        width: "100%",
      }}
      className={className}
      {...props}
    />
  );
};

{/* <style>
    .ql-picker.ql-header .ql-picker-label::before {
  content: 'Titre';
}
.ql-picker.ql-header .ql-picker-item[data-value="1"]::before {
  content: 'Titre 1';
}
.ql-picker.ql-header .ql-picker-item[data-value="2"]::before {
  content: 'Titre 2';
}
.ql-picker.ql-header .ql-picker-item[data-value="3"]::before {
  content: 'Titre 3';
}
.ql-picker.ql-header .ql-picker-item[data-value="4"]::before {
  content: 'Titre 4';
}
.ql-picker.ql-header .ql-picker-item[data-value="5"]::before {
  content: 'Titre 5';
}
.ql-picker.ql-header .ql-picker-item[data-value="6"]::before {
  content: 'Titre 6';
}
.ql-picker.ql-header .ql-picker-item[data-value="false"]::before {
  content: 'Paragraphe';
}

</style> */}


export default ReactQuillField;
