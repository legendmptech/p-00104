"use client";

import Modal from "@/components/Modal";
import AdminEmployeeForm from "@/components/Forms/AdminEmployeeForm";
import React, { useEffect, useState } from "react";
import { getAdminEmployees } from "@/lib/clientFetch";
import { EMPLOYEES } from "@/types/employees";
import EmployeeCard from "@/components/Cards/EmployeeCard";

const AdminEmployeePage = () => {
  const [employees, setEmployees] = useState<EMPLOYEES[] | null>(null);

  useEffect(() => {
    const fetchEmployees = async () => {
      const data = await getAdminEmployees();
      console.log(data);
      setEmployees(data);
    };

    fetchEmployees();
  }, []);

  return (
    <div className="flex flex-col w-full items-center">
      <div className="flex w-full mb-4 justify-end items-end">
        <Modal modalBtnLabel="ADD EMPLOYEES" modalTitle="Employee Form">
          <AdminEmployeeForm />
        </Modal>
      </div>
      <h4 className="text-heading-4 mb-6">Employees</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
        {employees === null ? (
          <p>Loading...</p> // Add a loading indicator
        ) : (
          employees.map((obj, i) => <EmployeeCard key={i} {...obj} />)
        )}
      </div>
    </div>
  );
};

export default AdminEmployeePage;
