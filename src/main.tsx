import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { RouterProvider } from "react-router-dom";
import { Accordion } from "./chakra-overrides/Accordion";
import { Button } from "./chakra-overrides/Button";
import { colors } from "./chakra-overrides/colors";
import { Heading } from "./chakra-overrides/Heading";
import { Input } from "./chakra-overrides/Input";
import { List } from "./chakra-overrides/List";
import { Progress } from "./chakra-overrides/Progress";
import Tabs from "./chakra-overrides/Tabs";
import { Text } from "./chakra-overrides/Text";
import "./index.css";
import { router } from "./routes/router";

const theme = extendTheme({
  colors,
  components: {
    Button: Button,
    Heading: Heading,
    Text: Text,
    Progress: Progress,
    Tabs: Tabs,
    List: List,
    Accordion: Accordion,
    Input: Input,
  },
  breakpoints: {
    xs: "200px",
    sm: "520px",
    md: "768px",
    lg: "991px",
    xl: "1240px",
    "2xl": "1300px",
  },
});

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <RouterProvider router={router} />
      </ChakraProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);
