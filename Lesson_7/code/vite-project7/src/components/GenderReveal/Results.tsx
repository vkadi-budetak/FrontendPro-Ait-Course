import type { FC } from "react";
import s from "./Results.module.css";
import type { GenderInformation } from "../../types/GenderInformation";

export const Results: FC<{ info: GenderInformation | undefined }> = ({
  info,
}) => {
  if (!info) return <p>No inforamtion yet. Please insert name</p>;
  return (
    <div className={s.results}>
      <h3>Results</h3>
      <span>Name:{info?.name}</span>
      <span>Gender:{info?.gender}</span>
      <span>Probability:{info?.probability}</span>
      <span>Count:{info?.count}</span>
    </div>
  );
};
