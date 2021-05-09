import styled from "styled-components";
import StepContent from "@material-ui/core/StepContent";
import { StepLabel } from "@material-ui/core";

export const Container = styled(StepContent)``;

export const CustomStepLabel = styled(StepLabel)`
  .MuiStepLabel-label {
    margin-left: 20px;
  }

  .MuiStepIcon-text {
    display: none;
  }

  .MuiStepIcon-completed {
    color: green;
  }

  circle {
    color: gray;
  }
`;
