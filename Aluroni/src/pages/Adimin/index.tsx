import { Navigate, useParams } from 'react-router-dom';

export default function Adimin() {
  const parametro = useParams();
  if (parametro.adimin !== 'diego') {
    return (
      <Navigate to={'/'} />
    );
  }
  return (
    <>
      <h1>Area restrita</h1>
    </>
  );
}