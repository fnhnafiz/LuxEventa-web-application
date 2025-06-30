import EventCard from "../Components/EventCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SlidersHorizontal } from "lucide-react";

import useAxiosPublic from "../Hooks/axiosPublic";
import { useQuery } from "@tanstack/react-query";

function Events() {
  const axiosPublic = useAxiosPublic();

  const {
    data: events = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["all-events"],
    queryFn: async () => {
      const res = await axiosPublic.get("/all-events");
      return res.data;
    },
  });

  if (isLoading) {
    return <div className="text-center pt-20">Loading events...</div>;
  }

  // console.log(events);
  return (
    <div className="pt-20">
      <div>
        <h1 className="text-5xl font-bold text-center">Event page</h1>
        <p className="text-center my-5">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam
          expedita illum commodi eos qui voluptatibus cupiditate excepturi
          tenetur magnam, dicta quos non voluptatem et repellendus modi saepe
          aliquam sunt nulla obcaecati a, hic similique accusamus! Atque maxime
          adipisci facilis totam hic magni ullam fuga! Blanditiis recusandae
          vero ea, doloribus sunt ad totam quam aperiam nulla quos dolor nemo
          sit iste ipsum perferendis aliquid dicta. Hic eum voluptates deserunt
          consectetur, beatae excepturi asperiores qui aspernatur velit
          cupiditate natus unde nemo dolorem recusandae dolor commodi illum? Aut
          eos est deleniti quidem, quis error consequuntur, magni vitae aliquid
          mollitia fugit, laborum quia earum!
        </p>
      </div>
      {/* Fiter with searchin */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 my-6 max-w-5xl mx-auto overflow-hidden">
        {/* Search Bar */}
        <Input
          type="text"
          placeholder="Search by event title..."
          // value={searchTerm}
          // onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full md:w-1/2"
        />

        {/* Filter Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="flex items-center gap-2">
              <SlidersHorizontal className="w-4 h-4" />
              Filter by Date
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end">
            <DropdownMenuItem
            //  onClick={() => onFilterSelect("today")}
            >
              Today
            </DropdownMenuItem>
            <DropdownMenuItem
            //  onClick={() => onFilterSelect("currentWeek")}
            >
              Current Week
            </DropdownMenuItem>
            <DropdownMenuItem
            //  onClick={() => onFilterSelect("lastWeek")}
            >
              Last Week
            </DropdownMenuItem>
            <DropdownMenuItem
            // onClick={() => onFilterSelect("currentMonth")}
            >
              Current Month
            </DropdownMenuItem>
            <DropdownMenuItem
            //  onClick={() => onFilterSelect("lastMonth")}
            >
              Last Month
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      {/* Events Card */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-12">
        {events.map((event) => (
          <EventCard key={event._id} event={event} refetch={refetch} />
        ))}
      </div>
    </div>
  );
}

export default Events;
