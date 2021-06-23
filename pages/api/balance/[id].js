import { users } from "../../../data/users";

export default function personHandler({ method, body, query: { id } }, res) {
  const filteredUser = users.find((user) => Number(user.id) === Number(id));

  if (!filteredUser) {
    res.status(404).json({ message: "Algo salio mal" });
  }

  const balance = filteredUser.saldo;

  const amount = body.data.amount;

  const typeOfOperation = body.data.typeOfOperation;

  if (typeOfOperation === "deposit") {
    filteredUser.saldo = Number(balance) + Number(amount);
  }

  if (typeOfOperation === "extraccion") {
    filteredUser.saldo = Number(balance) - Number(amount);
  }

  res.status(200).json(filteredUser);
}
