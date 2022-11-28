import UserMessage from "./conatiner/UserMessage";

const App = () => {
  return (
    <div className="bg-zinc-800 flex-col h-screen w-full flex items-center justify-center p-4 gap-y-12 overflow-scroll">
      <UserMessage />
    </div>
  );
};

export default App;
