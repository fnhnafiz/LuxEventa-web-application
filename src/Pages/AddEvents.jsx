import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

function AddEvents() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form logic here (e.g., send to server)
    console.log("Event Submitted");
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">
            Add New Event
          </CardTitle>
        </CardHeader>

        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            {/* Event Title */}
            <div className="grid gap-2">
              <Label htmlFor="title">Event Title</Label>
              <Input
                id="title"
                type="text"
                required
                placeholder="Enter event title"
              />
            </div>

            {/* Name (Organizer) */}
            <div className="grid gap-2">
              <Label htmlFor="organizer">Your Name</Label>
              <Input
                id="organizer"
                type="text"
                required
                placeholder="Posted by"
              />
            </div>

            {/* Date and Time */}
            <div className="grid gap-2">
              <Label htmlFor="datetime">Date & Time</Label>
              <Input id="datetime" type="datetime-local" required />
            </div>

            {/* Location */}
            <div className="grid gap-2">
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                type="text"
                required
                placeholder="Event location"
              />
            </div>

            {/* Description */}
            <div className="grid gap-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                required
                placeholder="Event details..."
              />
            </div>

            {/* Attendee Count */}
            <div className="grid gap-2">
              <Label htmlFor="attendeeCount">Attendee Count</Label>
              <Input
                id="attendeeCount"
                type="number"
                min="0"
                defaultValue={0}
                required
              />
            </div>
          </CardContent>

          <CardFooter>
            <Button type="submit" className="w-full">
              Add Event
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}

export default AddEvents;
