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
import toast from "react-hot-toast";
import {
  CalendarDays,
  MapPin,
  Users,
  Sparkles,
  Star,
  Trophy,
  Clock,
} from "lucide-react";

function AddEvents() {
  const { register, handleSubmit, reset } = useForm();

  const axiosPublic = useAxiosPublic();
  const onSubmit = async (data) => {
    const user = JSON.parse(localStorage.getItem("user"));
    const userEmail = user?.email;

    if (!userEmail) {
      alert("You must be logged in to add an event.");
      return;
    }

    const eventData = {
      ...data,
      organizerEmail: userEmail,
      attendeeCount: 0,
    };

    try {
      const response = await axiosPublic.post("/add-event", eventData);
      console.log("add event", response.data);
      toast.success("Your Event Added Successfully!");
      reset();
    } catch (error) {
      console.log("failed to add event", error);
      toast.error("Failed to add event. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 my-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left Content Section */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-full text-sm font-medium">
                <Sparkles className="w-4 h-4 mr-2" />
                Create Amazing Events
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Turn Your
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
                  {" "}
                  Vision{" "}
                </span>
                Into Reality
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Create unforgettable experiences that bring people together.
                From intimate gatherings to grand celebrations, your event
                starts here.
              </p>
            </div>

            {/* Feature Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl border border-orange-100 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl flex items-center justify-center mb-4">
                  <CalendarDays className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Easy Planning
                </h3>
                <p className="text-gray-600 text-sm">
                  Streamlined event creation process that saves you time and
                  effort.
                </p>
              </div>

              <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl border border-orange-100 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Reach More People
                </h3>
                <p className="text-gray-600 text-sm">
                  Connect with attendees and build your community effortlessly.
                </p>
              </div>

              <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl border border-orange-100 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl flex items-center justify-center mb-4">
                  <Trophy className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Professional Results
                </h3>
                <p className="text-gray-600 text-sm">
                  Create events that look and feel professionally organized.
                </p>
              </div>

              <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl border border-orange-100 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Real-time Updates
                </h3>
                <p className="text-gray-600 text-sm">
                  Keep your attendees informed with instant notifications and
                  updates.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">10K+</div>
                <div className="text-sm text-gray-600">Events Created</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">50K+</div>
                <div className="text-sm text-gray-600">Happy Attendees</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <div className="text-sm text-gray-600">5-Star Rating</div>
              </div>
            </div>
          </div>

          {/* Right Form Section */}
          <div className="lg:pl-8">
            <Card className="w-full max-w-md mx-auto bg-white/80 backdrop-blur-sm border-0 shadow-2xl">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-3xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                  Create Your Event
                </CardTitle>
                <p className="text-gray-600 mt-2">
                  Fill in the details to get started
                </p>
              </CardHeader>

              <form onSubmit={handleSubmit(onSubmit)}>
                <CardContent className="space-y-6">
                  {/* Event Title */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="title"
                      className="text-gray-700 font-medium"
                    >
                      Event Title
                    </Label>
                    <Input
                      id="title"
                      type="text"
                      {...register("title", {
                        required: "Event title is required",
                      })}
                      placeholder="e.g., Summer Music Festival"
                      className="h-12 border-gray-200 focus:border-orange-500 focus:ring-orange-500/20"
                    />
                  </div>

                  {/* Organizer Name */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="organizer"
                      className="text-gray-700 font-medium"
                    >
                      Your Name
                    </Label>
                    <Input
                      id="organizer"
                      type="text"
                      {...register("organizer", {
                        required: "Organizer name is required",
                      })}
                      placeholder="Event organizer name"
                      className="h-12 border-gray-200 focus:border-orange-500 focus:ring-orange-500/20"
                    />
                  </div>

                  {/* Date and Time */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="datetime"
                      className="text-gray-700 font-medium flex items-center"
                    >
                      <CalendarDays className="w-4 h-4 mr-2 text-orange-500" />
                      Date & Time
                    </Label>
                    <Input
                      id="datetime"
                      type="datetime-local"
                      {...register("datetime", {
                        required: "Date & time is required",
                      })}
                      className="h-12 border-gray-200 focus:border-orange-500 focus:ring-orange-500/20"
                    />
                  </div>

                  {/* Location */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="location"
                      className="text-gray-700 font-medium flex items-center"
                    >
                      <MapPin className="w-4 h-4 mr-2 text-orange-500" />
                      Location
                    </Label>
                    <Input
                      id="location"
                      type="text"
                      {...register("location", {
                        required: "Location is required",
                      })}
                      placeholder="e.g., Central Park, New York"
                      className="h-12 border-gray-200 focus:border-orange-500 focus:ring-orange-500/20"
                    />
                  </div>

                  {/* Description */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="description"
                      className="text-gray-700 font-medium"
                    >
                      Description
                    </Label>
                    <Textarea
                      id="description"
                      {...register("description", {
                        required: "Description is required",
                      })}
                      placeholder="Tell people what makes your event special..."
                      className="min-h-[100px] border-gray-200 focus:border-orange-500 focus:ring-orange-500/20 resize-none"
                    />
                  </div>

                  {/* Hidden Attendee Count */}
                  <div className="hidden">
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

                <CardFooter className="pt-6">
                  <Button
                    type="submit"
                    className="w-full h-12 bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Create Event
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddEvents;
