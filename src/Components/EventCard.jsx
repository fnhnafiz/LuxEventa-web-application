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
import toast from "react-hot-toast";
import { Calendar, MapPin, Users, Clock, Bookmark, Share2 } from "lucide-react";

function EventCard({ event, refetch }) {
  const axiosPublic = useAxiosPublic();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleJoinEvent = async () => {
    try {
      const res = await axiosPublic.patch(`/update-count/${event._id}`, {
        email: user?.email,
      });
      toast.success(res.data.message);
      refetch();
    } catch (err) {
      toast.error(err.response?.data?.message || "Join failed");
    }
  };
  const formatDate = (dateString) => {
    const date = moment(dateString);
    return {
      month: date.format("MMM"),
      day: date.format("DD"),
      time: date.format("h:mm A"),
      fullDate: date.format("MMMM Do YYYY"),
    };
  };

  const { month, day, time, fullDate } = formatDate(event.datetime);
  return (
    <Card className="w-full max-w-md mx-auto mt-6 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-0">
      {/* Gradient Header */}
      <div className="relative h-32 bg-gradient-to-br from-red-500 via-orange-500 to-red-600">
        <div className="absolute inset-0 bg-black/10"></div>

        {/* Date Badge */}
        <div className="absolute top-4 left-4">
          <div className="bg-white rounded-lg p-3 text-center shadow-lg">
            <div className="text-xs font-bold text-orange-600 uppercase">
              {month}
            </div>
            <div className="text-lg font-bold text-gray-900">{day}</div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="absolute top-4 right-4 flex gap-2">
          <button className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all">
            <Bookmark className="w-4 h-4 text-white" />
          </button>
          <button className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all">
            <Share2 className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>

      <CardHeader className="pb-4">
        <CardTitle className="text-xl font-bold text-gray-900 leading-tight">
          {event.title}
        </CardTitle>
        <CardDescription className="text-sm text-gray-600 font-medium">
          Posted by {event.organizer}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4 pb-6">
        {/* Time */}
        <div className="flex items-center gap-3 text-sm">
          <div className="flex items-center justify-center w-8 h-8 bg-orange-100 rounded-lg">
            <Clock className="w-4 h-4 text-orange-600" />
          </div>
          <div>
            <div className="font-medium text-gray-900">{time}</div>
            <div className="text-xs text-gray-600">{fullDate}</div>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center gap-3 text-sm">
          <div className="flex items-center justify-center w-8 h-8 bg-red-100 rounded-lg">
            <MapPin className="w-4 h-4 text-red-600" />
          </div>
          <span className="text-gray-700 font-medium">{event.location}</span>
        </div>

        {/* Attendees */}
        <div className="flex items-center gap-3 text-sm">
          <div className="flex items-center justify-center w-8 h-8 bg-blue-100 rounded-lg">
            <Users className="w-4 h-4 text-blue-600" />
          </div>
          <span className="text-gray-700 font-medium">
            {event.count} attending
          </span>
        </div>

        {/* Description */}
        <div className="pt-2">
          <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
            {event.description}
          </p>
        </div>
      </CardContent>

      <CardFooter className="pt-0">
        <Button
          onClick={handleJoinEvent}
          className="w-full bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-semibold py-3 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl border-0"
        >
          Join Event
        </Button>
      </CardFooter>

      {/* Bottom accent */}
      <div className="h-1 bg-gradient-to-r from-red-500 to-orange-500"></div>
    </Card>
  );
}

export default EventCard;
