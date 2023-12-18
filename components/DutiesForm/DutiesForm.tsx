"use client";
import { FC } from "react";
import styles from "./DutiesForm.module.scss";

import { useForm, SubmitHandler, UseFormRegister } from "react-hook-form";
import CheckIcon from "@/assets/icons/CheckIcon";

export const responsibilities = [
  {
    valueList: [
      { text: "Продавать продукт", value: "sale-product" },
      { text: "Выставлять цены", value: "set-prices" },
      { text: "Смотреть аналитику", value: "view-analytics" },
    ],
    text: "Торговля",
  },
  {
    valueList: [
      { text: "Закупать сырье", value: "buy-materials" },
      { text: "Назначать рабочих", value: "appoint-workers" },
    ],
    text: "Производство",
  },
  {
    valueList: [
      { text: "Дуель", value: "duel" },
      { text: "Выставлять претензии", value: "make-claims" },
    ],
    text: "Разборки",
  },
  {
    valueList: [
      { text: "Назначать должности", value: "assign-positions" },
      { text: "Выгонять из банды", value: "expand-from-the-gang" },
    ],
    text: "Управление",
  },
];

type Inputs = {
  name: string;
  trading: string | string[];
  showdown: string | string[];
  production: string | string[];
  management: string | string[];
};

type Props = {
  register: UseFormRegister<Inputs>;
  duties: {
    valueList: { text: string; value: string }[];
    text: string;
  };
  dutyName: "name" | "trading" | "showdown" | "production" | "management";
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
    </div>
  );
};

export const DutiesForm: FC = () => {
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
          <LabelGroup
            register={register}
            dutyName="trading"
            duties={responsibilities[0]}
          />
          <LabelGroup
            register={register}
            dutyName="production"
            duties={responsibilities[1]}
          />
          <LabelGroup
            register={register}
            dutyName="showdown"
            duties={responsibilities[2]}
          />
          <LabelGroup
            register={register}
            dutyName="management"
            duties={responsibilities[3]}
          />
        </div>

        <input className={styles.submitBtn} type="submit" value="Сохранить" />
      </form>
    </div>
  );
};
