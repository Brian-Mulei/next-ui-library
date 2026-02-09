"use client";

import PageLayout from "@/components/PageLayout";
import ComponentDemo from "@/components/ComponentDemo";
import DataTable from "@/components/Datatable";
import { useState, useEffect } from "react";
import { faker } from '@faker-js/faker';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

export default function TablesPlaygroundPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Generate 200 fake users
    const roles = ["Admin", "Teacher", "Student"];
    const fakeUsers: User[] = Array.from({ length: 2000 }, (_, i) => ({
      id: i + 1,
      name: faker.person.fullName(),

      email: faker.internet.email({ firstName: faker.person.firstName() }),
      role: roles[i % 3],
    }));
    setUsers(fakeUsers);
    setLoading(false);
  }, []);

  const columns = [
    { key: "id", label: "ID" },
    { key: "name", label: "Name" },
    { key: "email", label: "Email" },
    { key: "role", label: "Role" },
  ];

  return (
    <PageLayout title="Tables Playground" subtitle="Sorting, searching, pagination with 200 rows">
      <ComponentDemo
        preview={loading ? <div>Loading...</div> : <DataTable
          data={users}
          columns={columns}
          searchable
          sortable
          pageSize={10}
        />}
        code={`<DataTable
  data={users}
  columns={[
    { key: "id", label: "ID" },
    { key: "name", label: "Full Name" },
    { key: "email", label: "Email" },
    { key: "role", label: "Role" }
  ]}
  searchable
  sortable
  pageSize={10}
/>`}
        heading="User Table: 2000 rows with search, sorting & pagination"
      />
    </PageLayout>
  );
}

