"use client";
import { FC } from "react";
import styles from "./DutiesForm.module.scss";

import { useForm, SubmitHandler, UseFormRegister } from "react-hook-form";
import CheckIcon from "@/assets/icons/CheckIcon";

export const responsibilities = [
  {
    valueList: [
      { text: "Дуель", value: "duel" },
      { text: "Выставлять претензии", value: "make-claims" },
    ],
    text: "Разборки",
  },
];

type Inputs = {
  name: string;
  trading: string | string[];
  showdown: string | string[];
};

type Props = {
  register: UseFormRegister<Inputs>;
  duties: {
    valueList: { text: string; value: string }[];
    text: string;
  };
  dutyName: "name" | "trading" | "showdown";
};

export const LabelGroup = ({ register, duties, dutyName }: Props) => {
  const { text, valueList } = duties;
  return (
    <div className={styles.responsibilityGroup}>
      <p className={styles.checkboxHeading}>{text}</p>
          {valueList.map(({ text, value }) => {
          return (
            <label key={value}>
              <input
                type="checkbox"
                {...register(dutyName)}
                value={value}
                className={`${styles.checkboxIcon} visuallyHidden`}
              />
              <span className={styles.customIcon}>
                <CheckIcon />
              </span>
              <span className={styles.responsibilityItem}>{text}</span>
            </label>
          );
      })}
      <label>
        <input
          type="checkbox"
          {...register(dutyName)}
          value="duel"
          className={`${styles.checkboxIcon} visuallyHidden`}
        />
        <span className={styles.customIcon}>
          <CheckIcon />
        </span>
        <span className={styles.responsibilityItem}>Дуель</span>
      </label>
      <label>
        <input
          type="checkbox"
          {...register(dutyName)}
          value="make-claims"
          className={`${styles.checkboxIcon} visuallyHidden`}
        />
        <span className={styles.customIcon}>
          <CheckIcon />
        </span>
        <span className={styles.responsibilityItem}>Выставлять претензии</span>
      </label>
    </div>
  );
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
          <div className={styles.responsibilityGroup}>
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
              <span className={styles.responsibilityItem}>
                Продавать продукт
              </span>
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
              <span className={styles.responsibilityItem}>Выставлять цены</span>
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
              <span className={styles.responsibilityItem}>
                Смотреть аналитику
              </span>
            </label>
          </div>
          <LabelGroup
            register={register}
            dutyName="showdown"
            duties={responsibilities[0]}
          />
        </div>

        <input className={styles.submitBtn} type="submit" value="Сохранить" />
      </form>
    </div>
  );
};
