import Swal from "sweetalert2";

const Modal = ({ title }) => {
  Swal.fire({
    titles: { title },
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: `Consultar Saldo`,
    denyButtonText: `Otro monto`,
  }).then((result) => {
    console.log(result);

    if (result.isConfirmed) {
      router.push("/operaciones/saldo");
    } else if (result.isDenied) {
      // router.push("/operaciones/otromonto");
    }
  });
};

export default Modal;
