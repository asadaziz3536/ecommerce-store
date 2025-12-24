import api from "@/api";
import ProfileDetail from "@/components/common/ProfileDetail";
import { useEffect, useState } from "react";

const Profile = () => {
  const [profile, setProfile] = useState({});
  const getProfile = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      console.error("No token found in local storage");
    }

    try {
      const response = await api.get("auth/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        const errorText = await response.text();

        throw new Error(`HTTP ${response.status}: ${errorText}`);
      }
      const data = await response.json();
      setProfile(data);
    } catch (err) {
      console.error(err.message);
    }
  };
  useEffect(() => {
    getProfile();
  }, []);
  return (
    <div>
      <h1 className="font-bold text-3xl py-3">Profile</h1>
      <ProfileDetail profile={profile} />
    </div>
  );
};

export default Profile;
