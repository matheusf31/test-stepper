import styled from "styled-components";
import StepContent from "@material-ui/core/StepContent";
import { StepLabel } from "@material-ui/core";

export const Container = styled(StepContent)``;

export const CustomStepLabel = styled(StepLabel)`
  span span:last-child {
    margin-left: 20px;
  }
`;
