import s from "./CardsTemplates.module.css";
import CardScrollSnap from "../components/CardScrollSnap/CardScrollSnap.tsx";
import CustomLoader from "../components/Gallery/3d-gallery.tsx";
import DarkProductCard from "../components/product-cards/modern-card/DarkProductCard.tsx";
import SimpleCard from "components/product-cards/simple-card/SimpleCard.tsx";
import ProfileCard from "components/ProfileCard/ProfileCard.tsx";

export function CardsTemplate() {
  return (
    <div className={s.root}>
      <h1>CardsTemplate</h1>
      <div className={s.container}>
        <ProfileCard />
        <CardScrollSnap />
        <CustomLoader />
        <DarkProductCard />
        <SimpleCard
          name={"Good"}
          company={"company"}
          price={0}
          sizes={["0", "1"]}
          imageSrc={"100"}
        />
      </div>
    </div>
  );
}
