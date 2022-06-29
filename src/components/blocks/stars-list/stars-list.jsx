import React from "react";
import Title, { TitleLevel } from "/src/components/ui/title/title";
import StarCard from "/src/components/ui/star-card/star-card";
import Button from "/src/components/ui/button/button";
import { StyledStarList, StarList, StarItem } from "./styles";

function StarsList({ stars }) {
  return (
    <StyledStarList>
      {stars?.length ? (
        <>
          <Title title={TitleLevel.H2}>Наши звёзды</Title>
          <StarList $isGridList>
            {stars.map((star) => (
              <StarItem key={star.id}>
                <StarCard {...star} />
              </StarItem>
            ))}
          </StarList>
          <Button minWidth={353} link="/buy">
            Купить билет
          </Button>
        </>
      ) : null}
    </StyledStarList>
  );
}

export default StarsList;
