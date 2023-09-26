import Announcements from "./components/announcements/Announcements";
import Hero from "./components/hero/Hero";
import PopularServices from "./components/popular-services/PopularServices";
import Topics from "./components/topics/Topics";

export default function FrontPage() {
  return (
    <>
      <Hero />
      <PopularServices />
      <Topics />
      <Announcements />
    </>
  );
}
