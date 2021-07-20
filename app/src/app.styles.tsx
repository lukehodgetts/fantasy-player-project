import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: blue;
  height: 100%;
  padding: 16px;
`;

export const Header = styled.div`
  background-color: green;
  border-radius: 4px;
  border: 2px solid red;
  margin: 5px 0px;
`;

export const Body = styled.div`
  background-color: #f8f9fa;
  border-radius: 4px;
  height: 100%;
  padding: 5px;
`;

interface Props {
  justifyContent?: "flex-start" | "flex-end" | "center" | "space-around";
  flexDirection?: "row" | "column";
  alignItems?: "center"
}

export const FlexBox = styled.div<Props>`
  display: flex;
  justify-content: ${(props) => props.justifyContent || "flex-start"};
  flex-direction: ${(props) => props.flexDirection || "row"};
  align-items: ${(props) => props.alignItems || ""};
`;
