import { users } from "../../../data/users";

export default function user(req, res) {
  res.status(200).json({
    data: users,
  });
}
