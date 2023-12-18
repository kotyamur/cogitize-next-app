"use client";
import { FC, useState } from "react";
import styles from "./PositionsList.module.scss";
import { PositionsItem } from "../PositionItem/PositionItem";

const positionList = [
  { id: "1", name: "Новобранец", payment: 50, tasks: 0, order: 1 },
  { id: "2", name: "Рядовой", payment: 80, tasks: 5, order: 2 },
  { id: "3", name: "Сержант", payment: 100, tasks: 10, order: 3 },
  { id: "4", name: "Новобранец", payment: 50, tasks: 10, order: 4 },
  { id: "5", name: "Рядовой", payment: 80, tasks: 15, order: 5 },
  { id: "6", name: "Сержант", payment: 100, tasks: 20, order: 6 },
  { id: "7", name: "Новобранец", payment: 50, tasks: 25, order: 7 },
];

export type listItem = {
  id: string;
  name: string;
  payment: number;
  tasks: number;
  order: number;
};

export const PositionsList: FC = () => {
  const [cardList, setCardList] = useState(positionList);
  const [currentCard, setCurrentCard] = useState<listItem | null>(null);
  const sortCards = (a: listItem, b: listItem) => {
    if (a.order > b.order) {
      return 1;
    } else {
      return -1;
    }
  };
  return (
    <div className={styles.positionsContainer}>
      <ul className={styles.positionList}>
        {cardList.sort(sortCards).map((item) => {
          return (
            <PositionsItem
              key={item.id}
              item={item}
              currentCard={currentCard}
              setCurrentCard={setCurrentCard}
              cardList={cardList}
              setCardList={setCardList}
            />
          );
        })}
      </ul>
      <button type="button" className={styles.createBtn}>
        Создать новую должность
      </button>
    </div>
  );
};
