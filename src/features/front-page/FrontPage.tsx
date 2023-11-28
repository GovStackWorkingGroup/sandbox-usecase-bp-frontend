import { Grid, GridItem } from "@chakra-ui/layout";
import RecentActivity from "../recent-activity/recent-activity";
import Announcements from "./components/announcements/Announcements";
import Hero from "./components/hero/Hero";
import PopularServices from "./components/popular-services/PopularServices";
import Topics from "./components/topics/Topics";
import { isAuthenticatedGuard } from "../../routes/ProtectedRoute";

export default function FrontPage() {
  return (
    <Grid
      templateAreas={{
        xs: `"hero" ${isAuthenticatedGuard()?"\"recent-activity\"":""} "popular-services" "topics" "announcements"`,
        sm: `"hero" ${isAuthenticatedGuard()?"\"recent-activity\"":""} "popular-services" "topics""announcements"`,
        md: `"hero hero"
        ${isAuthenticatedGuard()?"\"topics recent-activity\" \"topics popular-services\"":"\"topics popular-services\" \"topics announcements\""}
        "topics announcements"
        "topics announcements"`,
      }}
    >
      <GridItem area={"hero"}>
        <Hero />
      </GridItem>
      {isAuthenticatedGuard()?(
        <>
          <GridItem area={"recent-activity"}>
            <RecentActivity />
          </GridItem>
        </>
      ):("")}
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
