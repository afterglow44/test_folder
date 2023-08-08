import React from "react";
import Head from "next/head";

import AppLayout from "../components/AppLayout";
import NicknameEditForm from "../components/NicknameEditForm";
import FollowList from "../components/FollowList";

const Profile = () => {
  const followerList = [
    { nickname: "닉네임" },
    { nickname: "닉네임2" },
    { nickname: "닉네임3" },
  ];
  const followingList = [
    { nickname: "닉네임" },
    { nickname: "닉네임2" },
    { nickname: "닉네임3" },
  ];
  return (
    <>
      <Head>
        <title>NodeBird | 내 프로필</title>
      </Head>
      <AppLayout>
        <NicknameEditForm />
        <FollowList header="팔로잉 목록" data={followingList} />
        <FollowList header="팔로워 목록" data={followerList} />
      </AppLayout>
    </>
  );
};

export default Profile;
