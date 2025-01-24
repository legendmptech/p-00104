"use client";

import Modal from "@/components/Modal";
import AdminClientForm from "@/components/Forms/AdminClientForm";
import React, { useEffect, useState } from "react";
import { getAdminClients } from "@/lib/clientFetch";
import ClientCard from "@/components/Cards/ClientCard";
import { CLIENTS } from "@/types/clients";

const AdminClientPage = () => {
  const [clients, setClients] = useState<CLIENTS[] | null>(null);

  useEffect(() => {
    const fetchClients = async () => {
      const data = await getAdminClients();
      setClients(data);
    };

    fetchClients();
  }, []);

  return (
    <div className="flex flex-col w-full items-center">
      <div className="flex w-full mb-4 justify-end items-end">
        <Modal modalBtnLabel="ADD CLIENTS" modalTitle="Client Form">
          <AdminClientForm />
        </Modal>
      </div>
      <h4 className="text-heading-4 mb-6">Our Clients</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
        {clients === null ? (
          <p>Loading...</p> // Add a loading indicator
        ) : (
          clients.map((obj, i) => <ClientCard key={i} {...obj} />)
        )}
      </div>
    </div>
  );
};

export default AdminClientPage;
