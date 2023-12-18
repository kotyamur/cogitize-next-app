import { DragEvent, SetStateAction, Dispatch } from "react";
import DragDropIcon from "../../assets/icons/DragDropIcon";
import { listItem } from "../PositionsList/PositionsList";
import styles from "./PositionsItem.module.scss";

type Props = {
  key: string;
  item: listItem;
  setCurrentCard: Dispatch<SetStateAction<listItem | null>>;
  cardList: listItem[];
  setCardList: Dispatch<SetStateAction<listItem[]>>;
  currentCard: listItem | null;
};

export const PositionsItem = ({
  item,
  setCurrentCard,
  cardList,
  setCardList,
  currentCard,
}: Props) => {
  const { name, payment, tasks } = item;
  const dragStartHendler = (e: DragEvent<HTMLElement>, item: listItem) => {
    e.currentTarget.style.boxShadow = "4px 8px 40px 0px rgba(0, 0, 0, 0.40)";
    setCurrentCard(item);
    console.log(item)
  };
  const dragLeaveHendler = (e: DragEvent<HTMLElement>) => {
    e.currentTarget.style.border = "none";
  };
  const dragOverHendler = (e: DragEvent<HTMLElement>) => {
    e.preventDefault();
    e.currentTarget.style.border = "2px solid rgba(245, 245, 245, 0.08)";
  };
  const dragEndHendler = (e: DragEvent<HTMLElement>) => {
    e.currentTarget.style.boxShadow = "";
  };
  const dropHendler = (e: DragEvent<HTMLElement>, item: listItem) => {
    e.preventDefault();
    if (currentCard !== null) {
      setCardList(
        cardList.map((c) => {
          if (c.id === item.id) {
            return { ...c, order: currentCard.order };
          }
          if (c.id === currentCard.id) {
            return { ...c, order: item.order };
          }
          return c;
        })
      );
    }
    e.currentTarget.style.border = "none";
  };
  return (
    <li
      className={styles.container}
      draggable={true}
      onDragStart={(e: DragEvent<HTMLElement>) => dragStartHendler(e, item)}
      onDragLeave={(e: DragEvent<HTMLElement>) => dragLeaveHendler(e)}
      onDragOver={(e: DragEvent<HTMLElement>) => dragOverHendler(e)}
      onDragEnd={(e: DragEvent<HTMLElement>) => dragEndHendler(e)}
      onDrop={(e: DragEvent<HTMLElement>) => dropHendler(e, item)}
    >
      <button type="button" className={styles.dragButton}>
        <DragDropIcon />
      </button>
      <div className={styles.positionInfo}>
        <div>
          <p className={styles.positionName}>{name}</p>
          <p>{tasks} заданий</p>
        </div>
        <div>
          <p className={styles.positionPayment}>
            <span>${payment}</span> / час
          </p>
        </div>
      </div>
    </li>
  );
};
