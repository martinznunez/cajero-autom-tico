import { useEffect } from "react";

import { useRouter } from "next/router";

const Cancel = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, [router]);
  return (
    <>
      <div>
        <h2>La operación ha sido cancelada </h2>
      </div>

      <style jsx>
        {`
          div {
            margin: auto;
            font-size: 1.2rem;
          }
        `}
      </style>
    </>
  );
};

export default Cancel;
