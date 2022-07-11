import { FC } from "react";

import { useNavigate } from "react-router-dom";

import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from "./directory-item.styles";

import { DirectoryCategories } from "../directory/directory.component";

type DirectoryItemProps = {
  category: DirectoryCategories;
};

const DirectoryItem: FC<DirectoryItemProps> = ({
  category: { imageUrl, title, route },
}) => {
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);

  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
