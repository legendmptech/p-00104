import Image from "next/image";

type EmployeeCardProps = {
  emp_name: string;
  emp_image: string; // Path or URL to the employee's image
  emp_email: string;
  emp_designation: string;
  emp_phone_no?: string | null | undefined;
};

const EmployeeCard: React.FC<EmployeeCardProps> = ({
  emp_name,
  emp_image,
  emp_email,
  emp_designation,
  emp_phone_no,
}) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
      <div className="relative w-full h-40">
        <Image
          src={emp_image}
          alt={`${emp_name}'s image`}
          fill
          className="object-cover rounded-t-lg"
        />
      </div>
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">{emp_name}</h2>
        <p className="text-gray-600">{emp_designation}</p>
        <p className="text-gray-600">{emp_email}</p>
        {emp_phone_no && (
          <p className="text-gray-600">
            <strong>Phone:</strong> {emp_phone_no}
          </p>
        )}
      </div>
    </div>
  );
};

export default EmployeeCard;
