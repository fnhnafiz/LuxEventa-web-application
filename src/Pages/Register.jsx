import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, useNavigate } from "react-router-dom";
import useAxiosPublic from "../Hooks/axiosPublic";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function Register() {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const onSubmit = async (data) => {
    try {
      const response = await axiosPublic.post("/add-user", data);

      if (response.data.success) {
        toast.success("Registration successful! Redirecting to login...");
        reset();
        navigate("/login");
      }
    } catch (error) {
      if (error.response && error.response.status === 409) {
        toast.error("User already exists. Please log in instead.");
      } else {
        console.log("Registration failed:", error);
        alert("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Register an account</CardTitle>
          <CardDescription>
            Please fill in your information to create an account
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-4">
              {/* Name */}
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your full name"
                  {...register("name", { required: "Name is required" })}
                />
              </div>

              {/* Email */}
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  {...register("email", { required: "Email is required" })}
                />
              </div>

              {/* Password */}
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  {...register("password", {
                    required: "Password is required",
                  })}
                />
              </div>

              {/* Photo URL */}
              <div className="grid gap-2">
                <Label htmlFor="photo">Photo URL</Label>
                <Input
                  id="photo"
                  type="url"
                  placeholder="https://example.com/your-photo.jpg"
                  {...register("url", { required: "Photo URL is required" })}
                />
              </div>

              {/* ✅ Submit button now inside the form */}
              <Button type="submit" className="w-full mt-4">
                Register
              </Button>
            </div>
          </form>
        </CardContent>

        <CardAction className="mt-2 w-full flex justify-center">
          <p className="text-sm text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-green-600 hover:underline">
              Login here
            </Link>
          </p>
        </CardAction>
      </Card>
    </div>
  );
}

export default Register;
