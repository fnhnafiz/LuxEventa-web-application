import { useState } from "react";
import EventCard from "../Components/EventCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import useAxiosPublic from "../Hooks/axiosPublic";
import { useQuery } from "@tanstack/react-query";

function Events() {
  const axiosPublic = useAxiosPublic();

  const [searchText, setSearchText] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("");
  const [customDateRange, setCustomDateRange] = useState({
    from: null,
    to: null,
  });

  const clearFilters = () => {
    setSearchText("");
    setSelectedFilter("");
    setCustomDateRange({ from: null, to: null });
  };

  const {
    data: eventsData = { events: [], total: 0 },
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["events", searchText, selectedFilter, customDateRange],
    queryFn: async () => {
      const params = {};

      // Add title search parameter
      if (searchText.trim()) {
        params.title = searchText.trim();
      }

      // Add predefined filter parameter
      if (selectedFilter) {
        params.filter = selectedFilter;
      }

      // Add custom date range parameters
      if (customDateRange.from && customDateRange.to) {
        params.startDate = customDateRange.from.toISOString();
        params.endDate = customDateRange.to.toISOString();
      }

      const res = await axiosPublic.get("/events", { params });
      // Handle both old format (array) and new format (object with events array)
      return res.data.events
        ? res.data
        : { events: res.data, total: res.data.length };
    },
  });

  const events = eventsData.events || [];

  const filterOptions = [
    { key: "today", label: "Today" },
    { key: "currentWeek", label: "Current Week" },
    { key: "lastWeek", label: "Last Week" },
    { key: "currentMonth", label: "Current Month" },
    { key: "lastMonth", label: "Last Month" },
  ];

  const handleFilterClick = (filterKey) => {
    if (selectedFilter === filterKey) {
      setSelectedFilter("");
    } else {
      setSelectedFilter(filterKey);
      // Clear custom date range when selecting predefined filter
      setCustomDateRange({ from: null, to: null });
    }
  };

  const handleCustomDateRangeSelect = (range) => {
    if (range?.from && range?.to) {
      setCustomDateRange(range);
      // Clear predefined filter when selecting custom range
      setSelectedFilter("");
    }
  };

  if (isLoading) {
    return (
      <div className="text-center pt-20">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-gray-600">Loading events...</p>
      </div>
    );
  }

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Event Page</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore and filter upcoming events based on title or time range.
          </p>
        </div>

        {/* Enhanced Filter & Search Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col space-y-4">
            {/* Search Input */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-md">
                <Input
                  className="pl-4 pr-4 py-3 text-lg border-2 border-gray-200 focus:border-blue-500 rounded-lg"
                  placeholder="🔍 Search events by title..."
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                />
              </div>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-3 justify-center">
              {filterOptions.map((option) => (
                <Button
                  key={option.key}
                  variant={
                    selectedFilter === option.key ? "default" : "outline"
                  }
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    selectedFilter === option.key
                      ? "bg-blue-600 text-white shadow-md"
                      : "border-2 border-gray-200 hover:border-blue-400 hover:bg-blue-50"
                  }`}
                  onClick={() => handleFilterClick(option.key)}
                >
                  {option.label}
                </Button>
              ))}
            </div>

            {/* Custom Date Range Picker */}
            <div className="flex justify-center">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={`px-4 py-2 rounded-lg font-medium border-2 transition-all duration-200 ${
                      customDateRange.from && customDateRange.to
                        ? "border-blue-500 bg-blue-50 text-blue-700"
                        : "border-gray-200 hover:border-blue-400 hover:bg-blue-50"
                    }`}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {customDateRange.from && customDateRange.to
                      ? `${format(customDateRange.from, "MMM dd")} - ${format(
                          customDateRange.to,
                          "MMM dd, yyyy"
                        )}`
                      : "Select Custom Date Range"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="center">
                  <Calendar
                    initialFocus
                    mode="range"
                    defaultMonth={customDateRange.from}
                    selected={customDateRange}
                    onSelect={handleCustomDateRangeSelect}
                    numberOfMonths={2}
                    className="rounded-lg border"
                  />
                </PopoverContent>
              </Popover>
            </div>

            {/* Active Filters Display & Clear Button */}
            {(searchText ||
              selectedFilter ||
              (customDateRange.from && customDateRange.to)) && (
              <div className="flex flex-wrap items-center justify-center gap-2 pt-2 border-t border-gray-200">
                <span className="text-sm text-gray-600 font-medium">
                  Active filters:
                </span>

                {searchText && (
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    Title: "{searchText}"
                  </span>
                )}

                {selectedFilter && (
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    {filterOptions.find((f) => f.key === selectedFilter)?.label}
                  </span>
                )}

                {customDateRange.from && customDateRange.to && (
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                    {format(customDateRange.from, "MMM dd")} -{" "}
                    {format(customDateRange.to, "MMM dd, yyyy")}
                  </span>
                )}

                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearFilters}
                  className="text-red-600 hover:text-red-700 hover:bg-red-50 font-medium"
                >
                  Clear All ✖
                </Button>
              </div>
            )}
          </div>
        </div>

        {/* Event Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-12">
          {events && events.length > 0 ? (
            events.map((event) => (
              <EventCard key={event._id} event={event} refetch={refetch} />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <div className="bg-white rounded-xl shadow-md p-8 max-w-md mx-auto">
                <div className="text-gray-400 text-6xl mb-4">📅</div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  No events found
                </h3>
                <p className="text-gray-500 mb-4">
                  {searchText ||
                  selectedFilter ||
                  (customDateRange.from && customDateRange.to)
                    ? "Try adjusting your search criteria or filters."
                    : "There are no events available at the moment."}
                </p>
                {(searchText ||
                  selectedFilter ||
                  (customDateRange.from && customDateRange.to)) && (
                  <Button
                    onClick={clearFilters}
                    variant="outline"
                    className="mt-2"
                  >
                    Clear Filters & Show All Events
                  </Button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Events;
