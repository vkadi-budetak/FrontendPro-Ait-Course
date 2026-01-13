import style from "./ProfileCard.module.css";

interface Props {
  avatar: string;
  name: string;
  description: string;
}

function ProfileCard({ avatar, name, description }: Props) {
  return (
    <div className={style.profile_card}>
      <img src={avatar} alt="User avatar" />
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
}

export default ProfileCard;
