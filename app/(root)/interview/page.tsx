import AgentView from "@/components/AgentView";
import { getCurrentUser } from "@/lib/actions/auth.action";
import React from "react";

const page = async () => {
  const user = await getCurrentUser();

  return (
    <>
      <h3>Interview generation</h3>
      <AgentView userName={user?.name} userId={user?.id} type="generate" />
    </>
  );
};

export default page;
