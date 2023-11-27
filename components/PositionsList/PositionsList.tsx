import { FC } from "react";
import styles from "./PositionsList.module.scss";
import { PositionsItem } from "../PositionItem/PositionItem";

const positionList = [
  { id: "1", name: "Новобранец", payment: 50, tasks: 0 },
  { id: "2", name: "Рядовой", payment: 80, tasks: 5 },
  { id: "3", name: "Сержант", payment: 100, tasks: 10 },
  { id: "4", name: "Новобранец", payment: 50, tasks: 10 },
  { id: "5", name: "Рядовой", payment: 80, tasks: 15 },
  { id: "6", name: "Сержант", payment: 100, tasks: 20 },
  { id: "7", name: "Новобранец", payment: 50, tasks: 25 },
];

export const PositionsList: FC = () => {
  return (
    <div className={styles.positionsContainer}>
      <ul className={styles.positionList}>
        {positionList.map((item) => {
          return <PositionsItem key={item.id} item={item} />;
        })}
      </ul>
      <button type="button" className={styles.createBtn}>
        Создать новую должность
      </button>
    </div>
  );
};
