import React from "react";

// ----------------------
// Input / Textarea
// ----------------------
export const Textarea = ({ label, ...props }: any) => (
  <div className="flex flex-col mb-4">
    {label && <label className="mb-1 font-semibold text-neutral">{label}</label>}
    <textarea
      className="border p-2 rounded focus:outline-none focus:ring-2 border-neutral focus:ring-primary"
      {...props}
    />
  </div>
);

// ----------------------
// Select
// ----------------------
export const Select = ({ label, children, multiple, ...props }: any) => (
  <div className="flex flex-col mb-4">
    {label && <label className="mb-1 font-semibold text-neutral">{label}</label>}
    <select
      multiple={multiple}
      className="border p-2 rounded focus:outline-none focus:ring-2 border-neutral focus:ring-primary"
      {...props}
    >
      {children}
    </select>
  </div>
);

// ----------------------
// Checkbox
// ----------------------
export const Checkbox = ({ label, ...props }: any) => (
  <label className="flex items-center space-x-2 mb-2">
    <input type="checkbox" className="form-checkbox" {...props} />
    <span>{label}</span>
  </label>
);

// ----------------------
// CheckboxGroup
// ----------------------
export const CheckboxGroup = ({ label, children }: any) => (
  <div className="mb-4">
    {label && <span className="font-semibold text-neutral">{label}</span>}
    <div className="flex flex-col ml-2 mt-1">{children}</div>
  </div>
);

// ----------------------
// Radio
// ----------------------
export const Radio = ({ label, value, ...props }: any) => (
  <label className="flex items-center space-x-2 mb-2">
    <input type="radio" value={value} className="form-radio" {...props} />
    <span>{label}</span>
  </label>
);

// ----------------------
// RadioGroup
// ----------------------
export const RadioGroup = ({ label, children }: any) => (
  <div className="mb-4">
    {label && <span className="font-semibold text-neutral">{label}</span>}
    <div className="flex flex-col ml-2 mt-1">{children}</div>
  </div>
);

// ----------------------
// Switch / Toggle
// ----------------------
export const Switch = ({ label, ...props }: any) => (
  <label className="flex items-center space-x-2 mb-2 cursor-pointer">
    <input type="checkbox" className="form-checkbox" {...props} />
    <span>{label}</span>
  </label>
);

// ----------------------
// File Upload
// ----------------------
export const FileUpload = ({ label, multiple, dragDrop, accept }: any) => (
  <div className="flex flex-col mb-4">
    {label && <label className="mb-1 font-semibold text-neutral">{label}</label>}
    <input
      type="file"
      multiple={multiple}
      accept={accept}
      className="border p-2 rounded focus:outline-none focus:ring-2 border-neutral focus:ring-primary"
    />
    {dragDrop && <span className="text-sm text-neutral mt-1">Drag & drop supported</span>}
  </div>
);

// ----------------------
// Tag Input
// ----------------------
export const TagInput = ({ label }: any) => (
  <div className="flex flex-col mb-4">
    {label && <label className="mb-1 font-semibold text-neutral">{label}</label>}
    <input
      type="text"
      placeholder="Enter tags separated by commas"
      className="border p-2 rounded focus:outline-none focus:ring-2 border-neutral focus:ring-primary"
    />
  </div>
);

// ----------------------
// Rating
// ----------------------
export const Rating = ({ label }: any) => (
  <div className="flex flex-col mb-4">
    {label && <span className="font-semibold text-neutral mb-1">{label}</span>}
    <div className="flex space-x-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i} className="text-yellow-500 cursor-pointer">
          ★
        </span>
      ))}
    </div>
  </div>
);

// ----------------------
// Rich Text Editor Stub
// ----------------------
export const RichTextEditor = ({ label }: any) => (
  <div className="flex flex-col mb-4">
    {label && <label className="mb-1 font-semibold text-neutral">{label}</label>}
    <div className="border p-2 rounded text-neutral">RichTextEditor Placeholder</div>
  </div>
);
