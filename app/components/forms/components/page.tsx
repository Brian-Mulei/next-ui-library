import PageLayout from "@/components/PageLayout";
import ComponentDemo from "@/components/ComponentDemo";
import Input from "@/components/forms/Input";
import { Checkbox, CheckboxGroup, FileUpload, Radio, RadioGroup, Rating, RichTextEditor, Select, Switch, TagInput, Textarea } from "@/components/forms/Stubs";
// import others

export default function FormComponentsPage() {
    const components = [


        {
            heading: "Parent Input",
            name: "Parent Input",
            component: <h2>Parent component used for all inputs </h2>,
            code: `interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export default function Input({ label, error, ...props }: InputProps) {
  return (
    <div className="flex flex-col mb-4">
      {label && (
        <label className="mb-1 font-semibold text-neutral">{label}</label>
      )}

      <input
        {...props}
        className={\`border p-2 rounded focus:outline-none focus:ring-2 \${error ? "border-danger focus:ring-danger" : "border-neutral focus:ring-primary"}\`}
      />

      {error && <span className="text-danger text-sm mt-1">{error}</span>}
    </div>
  );
}`
        }
        ,
        {
            name: "Basic Input",
            component: <Input label="Name" placeholder="Enter name" />,
            code: `<Input label="Name" placeholder="Enter name" />`,
        },



        {
            name: "Search Input",
            component: <Input type="search" label="Search" placeholder="Search..." />,
            code: `<Input type="search" label="Search" placeholder="Search..." />`,
        },

        {
            name: "Single Select",
            component: (
                <Select label="Country">
                    <option>Kenya</option>
                    <option>Uganda</option>
                    <option>Tanzania</option>
                </Select>
            ),
            code: `<Select label="Country">
  <option>Kenya</option>
  <option>Uganda</option>
  <option>Tanzania</option>
</Select>`,
        },

        {
            name: "Multi Select",
            component: (
                <Select label="Subjects" multiple>
                    <option>Math</option>
                    <option>English</option>
                    <option>Science</option>
                </Select>
            ),
            code: `<Select label="Subjects" multiple>
  <option>Math</option>
  <option>English</option>
  <option>Science</option>
</Select>`,
        },

        {
            name: "Autocomplete Select",
            component: <Input list="students" label="Student" placeholder="Search student" />,
            code: `<Input list="students" label="Student" placeholder="Search student" />`,
        },

        {
            name: "Radio Buttons",
            component: (
                <RadioGroup label="Gender">
                    <Radio value="male" label="Male" />
                    <Radio value="female" label="Female" />
                </RadioGroup>
            ),
            code: `<RadioGroup label="Gender">
  <Radio value="male" label="Male" />
  <Radio value="female" label="Female" />
</RadioGroup>`,
        },

        {
            name: "Checkbox",
            component: <Checkbox label="Accept terms" />,
            code: `<Checkbox label="Accept terms" />`,
        },

        {
            name: "Checkbox Group",
            component: (
                <CheckboxGroup label="Subjects">
                    <Checkbox label="Math" />
                    <Checkbox label="English" />
                    <Checkbox label="Science" />
                </CheckboxGroup>
            ),
            code: `<CheckboxGroup label="Subjects">
  <Checkbox label="Math" />
  <Checkbox label="English" />
  <Checkbox label="Science" />
</CheckboxGroup>`,
        },

        {
            name: "Toggle Switch",
            component: <Switch label="Active" />,
            code: `<Switch label="Active" />`,
        },

        {
            name: "Date Picker",
            component: <Input type="date" label="Date of Birth" />,
            code: `<Input type="date" label="Date of Birth" />`,
        },

        {
            name: "Time Picker",
            component: <Input type="time" label="Lesson Time" />,
            code: `<Input type="time" label="Lesson Time" />`,
        },

        {
            name: "Date & Time Picker",
            component: <Input type="datetime-local" label="Exam Date & Time" />,
            code: `<Input type="datetime-local" label="Exam Date & Time" />`,
        },

        {
            name: "Month Picker",
            component: <Input type="month" label="Term Month" />,
            code: `<Input type="month" label="Term Month" />`,
        },

        {
            name: "Year Picker",
            component: <Input type="number" label="Academic Year" placeholder="2026" />,
            code: `<Input type="number" label="Academic Year" placeholder="2026" />`,
        },

        {
            name: "Textarea",
            component: <Textarea label="Remarks" placeholder="Enter remarks" />,
            code: `<Textarea label="Remarks" placeholder="Enter remarks" />`,
        },

        {
            name: "File Upload",
            component: <FileUpload label="Upload Document" accept=".pdf,.doc,.xls" />,
            code: `<FileUpload label="Upload Document" accept=".pdf,.doc,.xls" />`,
        },

        {
            name: "Image Upload",
            component: <FileUpload label="Profile Photo" accept="image/*" />,
            code: `<FileUpload label="Profile Photo" accept="image/*" />`,
        },

        {
            name: "Multiple File Upload",
            component: <FileUpload label="Upload Files" multiple />,
            code: `<FileUpload label="Upload Files" multiple />`,
        },

        {
            name: "Drag & Drop Upload",
            component: <FileUpload label="Drop files here" dragDrop />,
            code: `<FileUpload label="Drop files here" dragDrop />`,
        },

        {
            name: "Video Upload",
            component: <FileUpload label="Upload Video" accept="video/*" />,
            code: `<FileUpload label="Upload Video" accept="video/*" />`,
        },

        {
            name: "Rich Text Editor",
            component: <RichTextEditor label="Announcement" />,
            code: `<RichTextEditor label="Announcement" />`,
        },

        {
            name: "Marks Input",
            component: <Input type="number" label="Marks" min={0} max={100} />,
            code: `<Input type="number" label="Marks" min={0} max={100} />`,
        },

        {
            name: "Grade Selector",
            component: (
                <Select label="Grade">
                    <option>A</option>
                    <option>B</option>
                    <option>C</option>
                    <option>D</option>
                </Select>
            ),
            code: `<Select label="Grade">
  <option>A</option>
  <option>B</option>
  <option>C</option>
  <option>D</option>
</Select>`,
        },

        {
            name: "Subject Selector",
            component: <Select label="Subject">
                <option>Math</option>
                <option>English</option>
                <option>Science</option>
            </Select>,
            code: `<Select label="Subject">
  <option>Math</option>
  <option>English</option>
  <option>Science</option>
</Select>`,
        },

        {
            name: "Teacher Selector",
            component: <Select label="Teacher">
                <option>Mr. John</option>
                <option>Ms. Mary</option>
            </Select>,
            code: `<Select label="Teacher">
  <option>Mr. John</option>
  <option>Ms. Mary</option>
</Select>`,
        },

        {
            name: "Student Selector",
            component: <Input list="students" label="Student" />,
            code: `<Input list="students" label="Student" />`,
        },

        {
            name: "Class Selector",
            component: <Select label="Class">
                <option>Grade 1</option>
                <option>Grade 2</option>
            </Select>,
            code: `<Select label="Class">
  <option>Grade 1</option>
  <option>Grade 2</option>
</Select>`,
        },

        {
            name: "Term Selector",
            component: <Select label="Term">
                <option>Term 1</option>
                <option>Term 2</option>
                <option>Term 3</option>
            </Select>,
            code: `<Select label="Term">
  <option>Term 1</option>
  <option>Term 2</option>
  <option>Term 3</option>
</Select>`,
        },

        {
            name: "Exam Type Selector",
            component: <Select label="Exam Type">
                <option>Quiz</option>
                <option>Midterm</option>
                <option>Final</option>
            </Select>,
            code: `<Select label="Exam Type">
  <option>Quiz</option>
  <option>Midterm</option>
  <option>Final</option>
</Select>`,
        },

        {
            name: "Attendance Toggle",
            component: <Switch label="Present" />,
            code: `<Switch label="Present" />`,
        },

        {
            name: "Status Selector",
            component: <Select label="Status">
                <option>Active</option>
                <option>Inactive</option>
                <option>Suspended</option>
            </Select>,
            code: `<Select label="Status">
  <option>Active</option>
  <option>Inactive</option>
  <option>Suspended</option>
</Select>`,
        },

        {
            name: "Slider Input",
            component: <Input type="range" label="Score" min={0} max={100} />,
            code: `<Input type="range" label="Score" min={0} max={100} />`,
        },

        {
            name: "Color Picker",
            component: <Input type="color" label="Theme Color" />,
            code: `<Input type="color" label="Theme Color" />`,
        },

        {
            name: "Tag Input",
            component: <TagInput label="Skills" />,
            code: `<TagInput label="Skills" />`,
        },

        {
            name: "Rating Input",
            component: <Rating label="Rating" />,
            code: `<Rating label="Rating" />`,
        },


        /*
              <Input
                 label="Phone Number"
                 value={values.phone}
                 onChange={(e) => setValues({ ...values, phone: e.target.value })}
                 error={errors.phone}
                 placeholder="0712345678"
               />*/


        // add more components...
    ];

    return (
        <PageLayout title="Form Components" subtitle="Individual reusable form components">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {components.map((c) => (
                    <ComponentDemo key={c.name} preview={c.component} code={c.code} heading={c.heading || c.name} />
                ))}
            </div>
        </PageLayout>
    );
}
