import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import useAxiosPublic from "../Hooks/axiosPublic";
import toast from "react-hot-toast";

function UpdateEvent({ event, refetch }) {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: event.title,
    date: event.date,
    time: event.time,
    location: event.location,
    description: event.description,
    email: event.organizerEmail,
  });
  console.log(event._id);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const axiosPublic = useAxiosPublic();

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosPublic.put(
        `/update-event/${event._id}`,
        formData
      );
      toast.success("Update Success:", response.data);
      setOpen(false);
      refetch();
    } catch (error) {
      console.error("Update failed:", error);
      toast.error("Update failed:", error);
    }
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Update</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Update Event</DialogTitle>
          <DialogDescription>
            Update your event details below.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleUpdate} className="space-y-4 mt-4">
          <div>
            <Label htmlFor="title">Event Title</Label>
            <Input
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="date">Date</Label>
              <Input
                id="date"
                name="date"
                type="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="time">Time</Label>
              <Input
                id="time"
                name="time"
                type="time"
                value={formData.time}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div>
            <Label htmlFor="location">Location</Label>
            <Input
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <Label htmlFor="email">Email (read only)</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              readOnly
              className="bg-gray-100 cursor-not-allowed"
            />
          </div>

          <Button type="submit" className="w-full mt-2">
            Save Changes
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default UpdateEvent;
