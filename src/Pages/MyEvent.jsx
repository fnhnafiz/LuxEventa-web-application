import React, { useState } from "react";
import useAxiosPublic from "../Hooks/axiosPublic";
import { useQuery } from "@tanstack/react-query";
import MyEventCard from "../Components/MyEventCard";
import {
  Plus,
  Search,
  Grid,
  List,
  Calendar,
  Users,
  Eye,
  TrendingUp,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

function MyEvent() {
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const [viewMode, setViewMode] = useState("grid");
  const [searchTerm, setSearchTerm] = useState("");

  // 🟡 Assume user email is saved in localStorage (or from auth context)
  const user = JSON.parse(localStorage.getItem("user")) || {};
  const userEmail = user?.email;

  const {
    data: myEvents = [],
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["user-events", userEmail],
    enabled: !!userEmail,
    queryFn: async () => {
      const res = await axiosPublic.get("/user-events", {
        params: { email: userEmail },
      });
      return res.data;
    },
  });

  // Filter events based on search
  const filteredEvents = myEvents.filter(
    (event) =>
      event.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.description?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCreateEvent = () => {
    navigate("/add-event");
  };

  if (isLoading)
    return (
      <div className="pt-20 flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your events...</p>
        </div>
      </div>
    );

  if (isError)
    return (
      <div className="pt-20 flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="text-red-500 text-6xl mb-4">⚠️</div>
          <p className="text-red-500 text-lg">Error loading events</p>
          <button
            onClick={() => refetch()}
            className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="mb-6 md:mb-0">
              <h1 className="text-4xl font-bold mb-2">My Events</h1>
              <p className="text-red-100">
                Manage and track your created events
              </p>
            </div>
            <button
              onClick={handleCreateEvent}
              className="bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors flex items-center w-fit"
            >
              <Plus className="w-5 h-5 mr-2" />
              Create New Event
            </button>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      {myEvents.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 -mt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">Total Events</p>
                  <p className="text-2xl font-bold text-gray-800">
                    {myEvents.length}
                  </p>
                </div>
                <Calendar className="w-10 h-10 text-orange-500" />
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">Active Events</p>
                  <p className="text-2xl font-bold text-gray-800">
                    {
                      myEvents.filter(
                        (event) => new Date(event.date) > new Date()
                      ).length
                    }
                  </p>
                </div>
                <TrendingUp className="w-10 h-10 text-green-500" />
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">This Month</p>
                  <p className="text-2xl font-bold text-gray-800">
                    {
                      myEvents.filter((event) => {
                        const eventDate = new Date(event.date);
                        const now = new Date();
                        return (
                          eventDate.getMonth() === now.getMonth() &&
                          eventDate.getFullYear() === now.getFullYear()
                        );
                      }).length
                    }
                  </p>
                </div>
                <Eye className="w-10 h-10 text-blue-500" />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Search and View Controls */}
      <div className="max-w-7xl mx-auto px-4 mb-8">
        <div className="bg-white rounded-lg p-6 shadow-lg">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search your events..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === "grid"
                    ? "bg-orange-500 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === "list"
                    ? "bg-orange-500 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Events Display */}
      <div className="max-w-7xl mx-auto px-4 pb-12">
        {filteredEvents.length === 0 ? (
          <div className="text-center py-12">
            <Calendar className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              {searchTerm ? "No events found" : "No events yet"}
            </h3>
            <p className="text-gray-500 mb-6">
              {searchTerm
                ? "Try adjusting your search criteria"
                : "You haven't created any events yet. Start by creating your first event!"}
            </p>
            {!searchTerm && (
              <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300 flex items-center mx-auto">
                <Plus className="w-5 h-5 mr-2" />
                Create Your First Event
              </button>
            )}
          </div>
        ) : (
          <div
            className={
              viewMode === "grid"
                ? "grid gap-6 md:grid-cols-2 lg:grid-cols-3"
                : "grid gap-6 md:grid-cols-1"
            }
          >
            {filteredEvents.map((event) => (
              <MyEventCard key={event._id} event={event} refetch={refetch} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default MyEvent;
