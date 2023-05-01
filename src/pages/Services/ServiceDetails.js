import { useParams } from "react-router-dom";

const ServiceDetails = () => {
  const params = useParams();

  return (
    <section>
      <p>service Details</p>
      <p>{params.serviceId}</p>
    </section>
  );
};

export default ServiceDetails;
