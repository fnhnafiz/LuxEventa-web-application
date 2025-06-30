import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import UpdateEvent from "../Components/UpdateEvent";

function MyEvent() {
  const events = [
    {
      id: 1,
      title: "Tech Conference 2025",
      organizerName: "Nafiz Hossain",
      date: "2025-07-12",
      time: "10:00 AM",
      location: "Dhaka, Bangladesh",
      description:
        "A grand event focused on modern web development trends and tools.",
      attendeeCount: 25,
    },
    {
      id: 2,
      title: "React Beginners Meetup",
      organizerName: "Nafiz Hossain",
      date: "2025-07-20",
      time: "4:00 PM",
      location: "Chattogram",
      description:
        "Learn the basics of React with interactive hands-on sessions.",
      attendeeCount: 15,
    },
  ];
  return (
    <div className="max-w-6xl mx-auto  grid gap-6 md:grid-cols-2 pt-20 px-12">
      {events.map((event) => (
        <Card key={event.id} className="w-full shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold">{event.title}</CardTitle>
            <CardDescription className="text-sm text-muted-foreground">
              Posted by {event.organizerName}
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-2 text-sm">
            <p>
              <span className="font-medium">📅 Date & Time:</span> {event.date}{" "}
              at {event.time}
            </p>
            <p>
              <span className="font-medium">📍 Location:</span> {event.location}
            </p>
            <p>
              <span className="font-medium">📝 Description:</span>{" "}
              {event.description}
            </p>
            <p>
              <span className="font-medium">👥 Attendees:</span>{" "}
              {event.attendeeCount}
            </p>
          </CardContent>

          <CardFooter className="flex justify-between mt-4">
            <UpdateEvent event={event} />
            <Button
              variant="destructive"
              onClick={() => alert(`Delete ${event.title}`)}
            >
              Delete
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

export default MyEvent;
