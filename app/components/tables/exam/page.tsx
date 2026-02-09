"use client";

import PageLayout from "@/components/PageLayout";
import ComponentDemo from "@/components/ComponentDemo";
import DataTable from "@/components/Datatable";
import ChipFilter from "@/components/ChipFilter";
import { useState, useEffect } from "react";
import { faker } from "@faker-js/faker/locale/zu_ZA";

interface ExamMark {
  student: string;
  admission: string;
  score: number;
  grade: string;
}

export default function ExamMarksPage() {
  const [marks, setMarks] = useState<ExamMark[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedGrades, setSelectedGrades] = useState<string[]>([]);

  useEffect(() => {
    // Generate 50 fake students
    const grades = ["A", "B", "C", "D", "F"];
    const fakeMarks: ExamMark[] = Array.from({ length: 50 }, (_, i) => {
      const grade = grades[Math.floor(Math.random() * grades.length)];
      const scoreMap: Record<string, number> = { A: 90, B: 80, C: 70, D: 60, F: 40 };
      return {
        student: faker.person.fullName(),
        admission: `ADM${1000 + i}`,
        score: scoreMap[grade] + Math.floor(Math.random() * 10),
        grade,
      };
    });
    setMarks(fakeMarks);
    setLoading(false);
  }, []);

  // Filter by selected grades
  const filteredMarks = selectedGrades.length
    ? marks.filter((m) => selectedGrades.includes(m.grade))
    : marks;

  const columns = [
    { key: "student", label: "Student Name" },
    { key: "admission", label: "Admission No." },
    { key: "score", label: "Score" },
    { key: "grade", label: "Grade" },
  ];

  return (
    <PageLayout title="Exam Marks" subtitle="Filter by grade using chips">
      <ComponentDemo
        preview={
          loading ? (
            <div>Loading...</div>
          ) : (
            <>
              <ChipFilter
                options={["A", "B", "C", "D", "F"]}
                selected={selectedGrades}
                onChange={setSelectedGrades}
              />
              <DataTable
                data={filteredMarks}
                columns={columns}
                searchable
                sortable
                pageSize={10}
              />
            </>
          )
        }
        code={`
<ChipFilter
  options={["A","B","C","D","F"]}
  selected={selectedGrades}
  onChange={setSelectedGrades}
/>
<DataTable
  data={filteredMarks}
  columns={columns}
  searchable
  sortable
  pageSize={10}
/>`}
        heading="Exam Marks Table: filter by grade"
      />
    </PageLayout>
  );
}
