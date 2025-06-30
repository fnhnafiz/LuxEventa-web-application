import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

function EventCard() {
  return (
    <Card className="w-full max-w-md mx-auto mt-6 shadow-md">
      <CardHeader>
        <CardTitle className="text-xl font-bold">Card Title</CardTitle>
        <CardDescription className="text-sm text-muted-foreground">
          Posted by Nafiz
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-2 text-sm">
        <p>
          <span className="font-medium">📅 Date & Time:</span> 12/02/2015 at{" "}
          5:06
        </p>
        <p>
          <span className="font-medium">📍 Location:</span> Faridpur
        </p>
        <p>
          <span className="font-medium">📝 Description:</span> Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Explicabo, quaerat incidunt!
          Sunt magni, consectetur cum inventore impedit a aperiam ex? Quisquam
          id dolor adipisci. Animi deleniti repellat voluptates tenetur
          eligendi!
        </p>
        <p>
          <span className="font-medium">👥 Attendees:</span> 5
        </p>
      </CardContent>

      <CardFooter>
        <Button
          variant="default"
          //   onClick={() => onJoin(event.id)}
          //   disabled={event.joined}
        >
          {/* {event.joined ? "Joined" : "Join Event"} */}
          Joined
        </Button>
      </CardFooter>
    </Card>
  );
}

export default EventCard;
