"use client";
import { FC } from "react";
import styles from "./DutiesForm.module.scss";

import { useForm, SubmitHandler } from "react-hook-form";
import CheckIcon from "@/assets/icons/CheckIcon";

type Inputs = {
  name: string;
  trading: string | string[];
};

export const DutiesForm: FC = () => {
  // const [formData, setFormData] = useState();
    const { register, handleSubmit } = useForm<Inputs>();
    
    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
    
  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.nameBox}>
          <label htmlFor="name">Название</label>
          <input defaultValue="Новобранец" {...register("name")} />
        </div>

        <div className={styles.responsibilitiesBox}>
          <div className={styles.boxHeading}>
            <p>Обязаности</p>
          </div>
          <p className={styles.checkboxHeading}>Торговля</p>
          <label>
            <input
              type="checkbox"
              {...register("trading")}
              value="sale-product"
              className={`${styles.checkboxIcon} visuallyHidden`}
            />
            <span className={styles.customIcon}>
              <CheckIcon />
            </span>
            <span className={styles.responsibilitiItem}>Продавать продукт</span>
          </label>
          <label>
            <input
              type="checkbox"
              {...register("trading")}
              value="set-prices"
              className={`${styles.checkboxIcon} visuallyHidden`}
            />
            <span className={styles.customIcon}>
              <CheckIcon />
            </span>
            <span className={styles.responsibilitiItem}>Выставлять цены</span>
          </label>
          <label>
            <input
              type="checkbox"
              {...register("trading")}
              value="view-analytics"
              className={`${styles.checkboxIcon} visuallyHidden`}
            />
            <span className={styles.customIcon}>
              <CheckIcon />
            </span>
            <span className={styles.responsibilitiItem}>
              Смотреть аналитику
            </span>
          </label>
        </div>

        <input className={styles.submitBtn} type="submit" value="Сохранить" />
      </form>
    </div>
  );
};
