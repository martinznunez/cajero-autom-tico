import PropTypes from "prop-types";
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

Operations.propTypes = {
  name: PropTypes.string,
};

export default Operations;
