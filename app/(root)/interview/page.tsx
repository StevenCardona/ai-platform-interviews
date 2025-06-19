import AgentView from "@/components/AgentView";
import React from "react";

const page = () => {
  return (
    <>
      <h3>Interview generation</h3>
      <AgentView userName="You" userId="user1" type="generate" />
    </>
  );
};

export default page;
