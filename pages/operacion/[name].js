import TypeOperations from "../../components/TypeOperations";

import { useRouter } from "next/router";
const Operations = () => {
  const router = useRouter();

  const { name } = router.query;

  return (
    <>
      <TypeOperations pathname={name} />
    </>
  );
};

export default Operations;
