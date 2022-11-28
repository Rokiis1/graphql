import UserDisplay from "../components/UserDisplay";
import { useQuery } from "urql";
import { GetUsersDocument } from "../graphql/generated";

const UserMessage = () => {
  const [results] = useQuery({
    query: GetUsersDocument,
  });

  return (
    <>
      {results.data?.users.map((user, index) => (
        <UserDisplay user={user} key={index} />
      ))}
    </>
  );
};

export default UserMessage;
