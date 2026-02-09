"use client";

import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import ComponentDemo from "@/components/ComponentDemo"; 
import Button from "@/components/forms/FormButton";
import Input from "@/components/forms/Input";
import { Checkbox, Select } from "@/components/forms/Stubs";

export default function FormsPlaygroundPage() {
  // ----------- Form 1 State ----------
  const [form1Values, setForm1Values] = useState({ email: "", phone: "" });
  const [form1Errors, setForm1Errors] = useState<{ email?: string; phone?: string }>({});

  const validateForm1 = () => {
    const newErrors: typeof form1Errors = {};
    if (!form1Values.email) newErrors.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(form1Values.email)) newErrors.email = "Invalid email format";

    if (!form1Values.phone) newErrors.phone = "Phone is required";
    else if (!/^\d{10}$/.test(form1Values.phone)) newErrors.phone = "Phone must be exactly 10 digits";

    setForm1Errors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleForm1Submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm1()) alert("Form 1 is valid!");
  };

  // ----------- Form 2 State ----------
  const [form2Values, setForm2Values] = useState({ name: "", email: "", password: "", terms: false });
  const [form2Errors, setForm2Errors] = useState<{ name?: string; email?: string; password?: string; terms?: string }>({});

  const validateForm2 = () => {
    const newErrors: typeof form2Errors = {};
    if (!form2Values.name) newErrors.name = "Name required";
    if (!form2Values.email) newErrors.email = "Email required";
    if (!form2Values.password) newErrors.password = "Password required";
    if (!form2Values.terms) newErrors.terms = "You must accept terms";
    setForm2Errors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleForm2Submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm2()) alert("Registration is valid!");
  };

  // ----------- Form 3 State ----------
  const [form3Values, setForm3Values] = useState({ student: "", subject: "", marks: "", grade: "" });
  const [form3Errors, setForm3Errors] = useState<{ student?: string; subject?: string; marks?: string; grade?: string }>({});

  const validateForm3 = () => {
    const newErrors: typeof form3Errors = {};
    if (!form3Values.student) newErrors.student = "Student required";
    if (!form3Values.subject) newErrors.subject = "Subject required";
    if (!form3Values.marks || Number(form3Values.marks) < 0 || Number(form3Values.marks) > 100) newErrors.marks = "Marks must be 0-100";
    if (!form3Values.grade) newErrors.grade = "Grade required";
    setForm3Errors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleForm3Submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm3()) alert("Marks submitted!");
  };

  return (
    <PageLayout title="Forms Playground" subtitle="Play with different form examples">

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
   {/* Form 1 */}
      <ComponentDemo
        preview={
          <form onSubmit={handleForm1Submit} className="max-w-md space-y-2">
            <Input
              label="Email"
              value={form1Values.email}
              onChange={(e) => setForm1Values({ ...form1Values, email: e.target.value })}
              error={form1Errors.email}
              placeholder="you@example.com"
            />
            <Input
              label="Phone Number"
              value={form1Values.phone}
              onChange={(e) => setForm1Values({ ...form1Values, phone: e.target.value })}
              error={form1Errors.phone}
              placeholder="0712345678"
            />
            <div className="gap-4 my-4 flex justify-center">
              <Button type="submit" title="Submit" variant="primary" />
              <Button type="button" title="Reset" variant="danger" onClick={() => { setForm1Values({ email: "", phone: "" }); setForm1Errors({}); }} />
            </div>
          </form>
        }
        code={`    <form onSubmit={handleForm1Submit} className="max-w-md space-y-2">
            <Input
              label="Email"
              value={form1Values.email}
              onChange={(e) => setForm1Values({ ...form1Values, email: e.target.value })}
              error={form1Errors.email}
              placeholder="you@example.com"
            />
            <Input
              label="Phone Number"
              value={form1Values.phone}
              onChange={(e) => setForm1Values({ ...form1Values, phone: e.target.value })}
              error={form1Errors.phone}
              placeholder="0712345678"
            />
            <div className="gap-4 my-4 flex justify-center">
              <Button type="submit" title="Submit" variant="primary" />
              <Button type="button" title="Reset" variant="danger" onClick={() => { setForm1Values({ email: "", phone: "" }); setForm1Errors({}); }} />
            </div>
          </form>`}
        heading="Form 1: Email & Phone Validation"
      />

      {/* Form 2 */}
      <ComponentDemo
        preview={
          <form onSubmit={handleForm2Submit} className="max-w-md space-y-2">
            <Input
              label="Full Name"
              value={form2Values.name}
              onChange={(e) => setForm2Values({ ...form2Values, name: e.target.value })}
              error={form2Errors.name}
              placeholder="Enter full name"
            />
            <Input
              label="Email"
              value={form2Values.email}
              onChange={(e) => setForm2Values({ ...form2Values, email: e.target.value })}
              error={form2Errors.email}
              placeholder="you@example.com"
            />
            <Input
              label="Password"
              type="password"
              value={form2Values.password}
              onChange={(e) => setForm2Values({ ...form2Values, password: e.target.value })}
              error={form2Errors.password}
              placeholder="Enter password"
            />
            <Checkbox
              label="Accept Terms"
              checked={form2Values.terms}
              onChange={(e :any) => setForm2Values({ ...form2Values, terms: e.target.checked })}
            />
            {form2Errors.terms && <span className="text-danger text-sm">{form2Errors.terms}</span>}
            <div className="gap-4 my-4 flex justify-center">
              <Button type="submit" title="Register" variant="primary" />
            </div>
          </form>
        }
        code={`      <form onSubmit={handleForm2Submit} className="max-w-md space-y-2">
            <Input
              label="Full Name"
              value={form2Values.name}
              onChange={(e) => setForm2Values({ ...form2Values, name: e.target.value })}
              error={form2Errors.name}
              placeholder="Enter full name"
            />
            <Input
              label="Email"
              value={form2Values.email}
              onChange={(e) => setForm2Values({ ...form2Values, email: e.target.value })}
              error={form2Errors.email}
              placeholder="you@example.com"
            />
            <Input
              label="Password"
              type="password"
              value={form2Values.password}
              onChange={(e) => setForm2Values({ ...form2Values, password: e.target.value })}
              error={form2Errors.password}
              placeholder="Enter password"
            />
            <Checkbox
              label="Accept Terms"
              checked={form2Values.terms}
              onChange={(e :any) => setForm2Values({ ...form2Values, terms: e.target.checked })}
            />
            {form2Errors.terms && <span className="text-danger text-sm">{form2Errors.terms}</span>}
            <div className="gap-4 my-4 flex justify-center">
              <Button type="submit" title="Register" variant="primary" />
            </div>
          </form>`}
        heading="Form 2: Registration"
      />

      {/* Form 3 */}
      <ComponentDemo
        preview={
          <form onSubmit={handleForm3Submit} className="max-w-md space-y-2">
            <Input
              label="Student"
              value={form3Values.student}
              onChange={(e) => setForm3Values({ ...form3Values, student: e.target.value })}
              error={form3Errors.student}
            />
            <Input
              label="Subject"
              value={form3Values.subject}
              onChange={(e) => setForm3Values({ ...form3Values, subject: e.target.value })}
              error={form3Errors.subject}
            />
            <Input
              label="Marks"
              type="number"
              value={form3Values.marks}
              onChange={(e) => setForm3Values({ ...form3Values, marks: e.target.value })}
              error={form3Errors.marks}
            />
            <Select label="Grade">
              <option>A</option>
              <option>B</option>
              <option>C</option>
            </Select>
            {form3Errors.grade && <span className="text-danger text-sm">{form3Errors.grade}</span>}
            <div className="gap-4 my-4 flex justify-center">
              <Button type="submit" title="Submit Marks" variant="primary" />
            </div>
          </form>
        }
        code={`    <form onSubmit={handleForm3Submit} className="max-w-md space-y-2">
            <Input
              label="Student"
              value={form3Values.student}
              onChange={(e) => setForm3Values({ ...form3Values, student: e.target.value })}
              error={form3Errors.student}
            />
            <Input
              label="Subject"
              value={form3Values.subject}
              onChange={(e) => setForm3Values({ ...form3Values, subject: e.target.value })}
              error={form3Errors.subject}
            />
            <Input
              label="Marks"
              type="number"
              value={form3Values.marks}
              onChange={(e) => setForm3Values({ ...form3Values, marks: e.target.value })}
              error={form3Errors.marks}
            />
            <Select label="Grade">
              <option>A</option>
              <option>B</option>
              <option>C</option>
            </Select>
            {form3Errors.grade && <span className="text-danger text-sm">{form3Errors.grade}</span>}
            <div className="gap-4 my-4 flex justify-center">
              <Button type="submit" title="Submit Marks" variant="primary" />
            </div>
          </form>`}
        heading="Form 3: Marks Entry"
      />

</div>
   
    </PageLayout>
  );
}
