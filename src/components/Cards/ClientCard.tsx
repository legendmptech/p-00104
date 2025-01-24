import Image from "next/image";

type ClientCardProps = {
  client_name: string;
  client_place: string;
  client_image: string; // Path or URL to the client's image
};

const ClientCard: React.FC<ClientCardProps> = ({
  client_name,
  client_place,
  client_image,
}) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
      <div className="relative w-full h-40">
        <Image
          src={client_image}
          alt={`${client_name}'s image`}
          fill
          className="object-cover rounded-t-lg"
        />
      </div>
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">{client_name}</h2>
        <p className="text-gray-600">{client_place}</p>
      </div>
    </div>
  );
};

export default ClientCard;
