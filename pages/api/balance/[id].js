const fs = require("fs");
import users from "../../../data/users.json";
import { TypeOfOperationConst } from "../../../constants/general";
export default function personHandler({ body, query: { id } }, res) {
  const filteredUser = users.find((user) => Number(user.id) === Number(id));

  if (!filteredUser) {
    res.status(404).json({ message: "Algo salió mal" });
  }

  const balance = filteredUser.saldo;

  const amount = body.data.amount;

  const typeOfOperation = body.data.typeOfOperation;

  if (typeOfOperation === TypeOfOperationConst.DEPOSIT) {
    filteredUser.saldo = Number(balance) + Number(amount);
  }

  if (typeOfOperation === TypeOfOperationConst.WITHDRAW) {
    filteredUser.saldo = Number(balance) - Number(amount);
  }

  const updatedUsers = users.map((user) => {
    if (user.id === filteredUser.id) {
      return filteredUser;
    }
    return user;
  });

  fs.writeFileSync("data/users.json", JSON.stringify(updatedUsers, null, 4));

  res.status(200).json(filteredUser);
}
