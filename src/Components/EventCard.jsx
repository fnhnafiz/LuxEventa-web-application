import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import moment from "moment/moment";
import useAxiosPublic from "../Hooks/axiosPublic";

function EventCard({ event, refetch }) {
  const axiosPublic = useAxiosPublic();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleJoinEvent = async () => {
    try {
      const res = await axiosPublic.patch(`/update-count/${event._id}`, {
        email: user?.email,
      });
      alert(res.data.message);
      refetch();
    } catch (err) {
      alert(err.response?.data?.message || "Join failed");
    }
  };
  return (
    <Card className="w-full max-w-md mx-auto mt-6 shadow-md">
      <CardHeader>
        <CardTitle className="text-xl font-bold">{event.title}</CardTitle>
        <CardDescription className="text-sm text-muted-foreground">
          Posted by {event.organizer}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-2 text-sm">
        <p>
          <span className="font-medium">📅 Date & Time:</span>{" "}
          {moment(event.datetime).format("MMMM Do YYYY, h:mm A")}
        </p>
        <p>
          <span className="font-medium">📍 Location:</span> {event.location}
        </p>
        <p>
          <span className="font-medium">📝 Description:</span>{" "}
          {event.description}
        </p>
        <p>
          <span className="font-medium">👥 Attendees:</span> {event.count}
        </p>
      </CardContent>

      <CardFooter>
        <Button variant="default" onClick={handleJoinEvent}>
          Join Event
        </Button>
      </CardFooter>
    </Card>
  );
}

export default EventCard;
