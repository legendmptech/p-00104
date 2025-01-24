"use client";

import Modal from "@/components/Modal";
import AdminUserForm from "@/components/Forms/AdminUserForm";
import React, { useEffect, useState } from "react";
import { getUsersInAdminPage } from "@/lib/clientFetch";
import { USERS } from "@/types/users";

const AdminClientPage = () => {
  const [users, setUsers] = useState<USERS[] | null>(null);

  useEffect(() => {
    const fetchClients = async () => {
      const data = await getUsersInAdminPage();
      console.log(data);
      setUsers(data);
    };

    fetchClients();
  }, []);

  return (
    <div className="flex flex-col w-full items-center">
      <div className="flex w-full mb-4 justify-end items-end">
        <Modal modalBtnLabel="ADD USERS" modalTitle="User Form">
          <AdminUserForm />
        </Modal>
      </div>
      <h4 className="text-heading-4 mb-6">Users</h4>
      {users === null ? (
        <p>Loading...</p> // Add a loading indicator
      ) : (
        <div className="w-full max-w-full bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 p-4">
          <table className="w-full table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left font-semibold text-gray-800">
                  User Name
                </th>
                <th className="px-4 py-2 text-left font-semibold text-gray-800">
                  Email
                </th>
                <th className="px-4 py-2 text-left font-semibold text-gray-800">
                  User Type
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.user_id} className="border-t">
                  <td className="px-4 py-2 text-gray-600">{user.user_name}</td>
                  <td className="px-4 py-2 text-gray-600">{user.user_email}</td>
                  <td className="px-4 py-2 text-gray-600">{user.user_type}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminClientPage;
