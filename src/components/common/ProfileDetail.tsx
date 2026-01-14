import { useAuth } from "@/context/AuthContext";

const ProfileDetail = () => {
  const { user } = useAuth();

  const avatarSrc: string | undefined = user?.photoURL ?? undefined;

  return (
    <div className="flex flex-col gap-6 max-w-[400px]">
      <div className="w-[250px] h-[250px]">
        <div className="h-[250px] rounded-xl">
          <img
            className="object-cover w-full h-full  rounded"
            src={avatarSrc}
            alt=""
          />
        </div>
      </div>
      <div>
        <div className="font-bold flex justify-between w-full  pb-2">
          Name:<span className="font-normal">{user?.displayName}</span>
        </div>
        <br />
        <div className="font-bold flex justify-between w-full  pb-2">
          Email:<span className="font-normal">{user?.email}</span>
        </div>
        <br />
      </div>
    </div>
  );
};

export default ProfileDetail;
