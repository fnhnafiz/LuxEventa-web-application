import EventBanner from "../Components/EventBanner";
import EventFeature from "../Components/EventFeature";
import LiveEventCountdown from "../Components/LiveEventCountdown";
import SmartPlanner from "../Components/SmartPlanner";
import Testimonial from "../Components/Testimonial";

function Home() {
  return (
    <div>
      <EventBanner />
      <SmartPlanner />
      <LiveEventCountdown />
      <EventFeature />
      <Testimonial />
    </div>
  );
}

export default Home;
