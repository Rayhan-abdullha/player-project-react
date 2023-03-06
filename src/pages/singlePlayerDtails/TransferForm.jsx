import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "../../components/Button/Button";
import styles from "./singlePlayer.module.css";

const schema = yup
  .object({
    msg: yup.string().required(),
    price: yup.number().positive().integer().required(),
  })
  .required();

export default function TransferForm({ player, transferFormData }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    let playerInfo = {
      ...player,
      ...data,
    };
    console.log(playerInfo);
    transferFormData(playerInfo);
  };

  return (
    <div className="transferSection" style={{ marginTop: "20px" }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Discription</label>
        <textarea
          cols="30"
          rows="10"
          className={styles.input}
          {...register("msg")}
        />
        <p className={styles.error}>{errors.msg?.message}</p>
        <label>Price</label>
        <input className={styles.input} {...register("price")} />
        <p className={styles.error}>{errors.price?.message}</p>

        <Button type="submit">Transfer Request</Button>
      </form>
    </div>
  );
}
