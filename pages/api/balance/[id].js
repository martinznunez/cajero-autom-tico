import { users } from "../../../data/users";

export default function personHandler({ method, body, query: { id } }, res) {
  // VERIFICAR TIPO DE REQUEST, EN ESTE CASO PATCH

  const filteredUser = users.filter((user) => Number(user.dni) === Number(id));
  console.log(
    "%c 🍓 filteredUser: ",
    "font-size:20px;background-color: #33A5FF;color:#fff;",
    filteredUser
  );

  const saldo = filteredUser.saldo;

  const saldoToDiscount = body.data.moneyToExtract;

  filteredUser.saldo = saldo - saldoToDiscount;

  // recorrer lista de usuarios, y cuando encuentro el que quiero asignar el nuevo balance

  res.status(200).json(filteredUser);
  //   if (filtered.length > 0) {
  //     res.status(200).json(filtered[0]);
  //   } else {
  //     res.status(404).json({ message: "Datos Incorrectos" });
  //   }
}
