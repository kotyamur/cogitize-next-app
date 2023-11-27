import styles from "./PositionsItem.module.scss";
import DragDropIcon from "../../assets/icons/DragDropIcon"

type Props = {
    key: string;
    item: {
        id: string;
        name: string;
        payment: number;
        tasks: number;
    };
}

export const PositionsItem = ({ item }: Props) => {
    const { name, payment, tasks } = item;
    return (
      <li className={styles.container}>
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
