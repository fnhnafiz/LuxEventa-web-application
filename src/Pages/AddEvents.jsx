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
import { useForm } from "react-hook-form";
import useAxiosPublic from "../Hooks/axiosPublic";

function AddEvents() {
  const { register, handleSubmit, reset } = useForm();

  const axiosPublic = useAxiosPublic();
  const onSubmit = async (data) => {
    try {
      const response = await axiosPublic.post("/add-event", data);
      console.log("add event", response.data);
      reset();
    } catch (error) {
      console.log("failed to add event", error);
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">
            Add New Event
          </CardTitle>
        </CardHeader>

        <form onSubmit={handleSubmit(onSubmit)}>
          <CardContent className="space-y-4">
            {/* Event Title */}
            <div className="grid gap-2">
              <Label htmlFor="title">Event Title</Label>
              <Input
                id="title"
                type="text"
                {...register("title", { required: "Event title is required" })}
                placeholder="Enter event title"
              />
            </div>

            {/* Name (Organizer) */}
            <div className="grid gap-2">
              <Label htmlFor="organizer">Your Name</Label>
              <Input
                id="organizer"
                type="text"
                {...register("organizer", {
                  required: "Organizer name is required",
                })}
                placeholder="Posted by"
              />
            </div>

            {/* Date and Time */}
            <div className="grid gap-2">
              <Label htmlFor="datetime">Date & Time</Label>
              <Input
                id="datetime"
                type="datetime-local"
                {...register("datetime", {
                  required: "Date & time is required",
                })}
              />
            </div>

            {/* Location */}
            <div className="grid gap-2">
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                type="text"
                {...register("location", { required: "Location is required" })}
                placeholder="Event location"
              />
            </div>

            {/* Description */}
            <div className="grid gap-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                {...register("description", {
                  required: "Description is required",
                })}
                placeholder="Event details..."
              />
            </div>

            {/* Attendee Count */}
            <div className="grid gap-2 hidden">
              <Label htmlFor="attendeeCount">Attendee Count</Label>
              <Input
                id="attendeeCount"
                type="number"
                min="0"
                defaultValue={0}
                {...register("attendeeCount", {
                  required: "Attendee count is required",
                  min: { value: 0, message: "Cannot be less than 0" },
                })}
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
