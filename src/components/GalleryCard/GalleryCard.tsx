import React from "react";
import { Conteiner } from "../../styles/Global.styled";

import { ListCard } from "./GalleryCard.styled";
import { Card } from "../Card/Card";

import { IGallery } from "./types";

const GalleryCard: React.FC<IGallery> = ({ data }) => {
  return (
    <>
      <ListCard>
        {data.map((item) => (
          <li key={item._id}>
            <Conteiner>
              <Card {...item} />
            </Conteiner>
          </li>
        ))}
      </ListCard>
    </>
  );
};

export { GalleryCard };
