import { users } from "../../../data/users";

export default function personHandler({ query: { id } }, res) {
  const filtered = users.filter((user) => Number(user.dni) === Number(id));

  if (filtered.length > 0) {
    res.status(200).json(filtered[0]);
  } else {
    res.status(404).json({ message: "Datos Incorrectos" });
  }
}
