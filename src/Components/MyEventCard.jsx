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
import useAxiosPublic from "../Hooks/axiosPublic";
import Swal from "sweetalert2";
function MyEventCard({ event, refetch }) {
  const axiosPublic = useAxiosPublic();
  const handleDelete = async () => {
    Swal.fire({
      title: "Are you sure you want to delete this event?",
      text: `"${event.title}" will be permanently removed.`,
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#16a34a",
      cancelButtonColor: "#dc2626",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
      customClass: {
        popup: "rounded-xl",
        title: "text-lg font-semibold",
        confirmButton: "bg-green-600 hover:bg-green-700 text-white px-4 py-2",
        cancelButton: "bg-red-600 hover:bg-red-700 text-white px-4 py-2",
      },
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await axiosPublic.delete(`/delete-event/${event._id}`);
          if (res.data.message) {
            Swal.fire("Deleted!", "Your event has been deleted.", "success");
            refetch();
          }
        } catch (error) {
          console.error("Delete failed:", error);
          Swal.fire("Error", "Failed to delete event", "error");
        }
      }
    });
  };
  return (
    <Card key={event._id} className="w-full shadow-md">
      <CardHeader>
        <CardTitle className="text-xl font-bold">{event.title}</CardTitle>
        <CardDescription className="text-sm text-muted-foreground">
          Posted by {event.organizerName}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-2 text-sm">
        <p>
          <span className="font-medium">📅 Date & Time:</span> {event.date} at{" "}
          {event.time}
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

      <CardFooter className="flex justify-between mt-4">
        <UpdateEvent event={event} refetch={refetch} />
        <Button variant="destructive" onClick={handleDelete}>
          Delete
        </Button>
      </CardFooter>
    </Card>
  );
}

export default MyEventCard;
