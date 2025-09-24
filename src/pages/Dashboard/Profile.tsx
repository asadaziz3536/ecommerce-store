import { useEffect } from "react";

const Profile = () => {
  const getProfile = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      console.error("No token found in local storage");
    }

    try {
      const response = await fetch(
        "https://api.escuelajs.co/api/v1/auth/profile",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        const errorText = await response.text();

        throw new Error(`HTTP ${response.status}: ${errorText}`);
      }
      const data = await response.json();
      console.log("Profile:", data);
    } catch (err) {
      console.error(err.message);
    }
  };
  useEffect(() => {
    getProfile();
  }, []);
  return (
    <div>
      <h1 className="font-bold text-3xl">Profile</h1>
    </div>
  );
};

export default Profile;
