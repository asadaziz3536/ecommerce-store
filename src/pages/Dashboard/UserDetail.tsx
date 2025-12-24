import api from "@/api";
import ProfileDetail from "@/components/common/ProfileDetail";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserDetail = () => {
  const [profile, setProfile] = useState({});
  const { id } = useParams();

  const getUser = () => {
    api
      .get(`users/${id}`, {})
      .then((response) => {
        console.log("profile", response.data);
        setProfile(response.data);
      })
      .catch((err) => {
        console.log("error message", err);
      });
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
      <h1 className="font-bold text-3xl py-3">User Detail</h1>
      <div className="pt-4">
        <ProfileDetail profile={profile} />
      </div>
    </div>
  );
};

export default UserDetail;
