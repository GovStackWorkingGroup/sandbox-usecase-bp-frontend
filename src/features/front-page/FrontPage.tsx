import { Grid, GridItem } from "@chakra-ui/layout";
import Announcements from "./components/announcements/Announcements";
import Hero from "./components/hero/Hero";
import PopularServices from "./components/popular-services/PopularServices";
import Topics from "./components/topics/Topics";

export default function FrontPage() {
  return (
    <Grid
      templateAreas={{
        sm: `"hero" "popular-services" "topics" "announcements"`,
        md: `"hero hero"
    "topics popular-services"
    "topics announcements"
    "topics announcements"`,
      }}
    >
      <GridItem area={"hero"}>
        <Hero />
      </GridItem>
      <GridItem area="popular-services">
        <PopularServices />
      </GridItem>
      <GridItem area="topics">
        <Topics />
      </GridItem>
      <GridItem area="announcements">
        <Announcements />
      </GridItem>
    </Grid>
  );
}
