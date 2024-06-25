import Skillbar from "./Skillbar";

export default function Skills() {
  return (
    <div className="flex flex-col justify-center items-center min-h-svh md:p-24 p-8 gap-4 bg-white " id="skills">
      <h1 className="text-4xl font-semibold pb-10">My Skills</h1>
      <div className="flex gap-10 w-full">
        <div className="w-1/4">
          <Skillbar text="C++" bgColor="#E9D5FF" width="87" />
          <Skillbar text="Solidity" bgColor="#E9D5FF" width="100" />
          <Skillbar text="JavaScript" bgColor="#E9D5FF" width="100" />
          <Skillbar text="HTML" bgColor="#E9D5FF" width="100" />
          <Skillbar text="React" bgColor="#E9D5FF" width="100" />
          <Skillbar text="CSS" bgColor="#E9D5FF" width="100" />
        </div>
        <div className="w-1/4">
          <Skillbar text="C++" bgColor="#E9D5FF" width="87" />
          <Skillbar text="Solidity" bgColor="#E9D5FF" width="100" />
          <Skillbar text="JavaScript" bgColor="#E9D5FF" width="100" />
          <Skillbar text="HTML" bgColor="#E9D5FF" width="100" />
          <Skillbar text="React" bgColor="#E9D5FF" width="100" />
          <Skillbar text="CSS" bgColor="#E9D5FF" width="100" />
        </div>
        <div className="w-1/4">
          <Skillbar text="C++" bgColor="#E9D5FF" width="87" />
          <Skillbar text="Solidity" bgColor="#E9D5FF" width="100" />
          <Skillbar text="JavaScript" bgColor="#E9D5FF" width="100" />
          <Skillbar text="HTML" bgColor="#E9D5FF" width="100" />
          <Skillbar text="React" bgColor="#E9D5FF" width="100" />
          <Skillbar text="CSS" bgColor="#E9D5FF" width="100" />
        </div>
        <div className="w-1/4">
          <Skillbar text="C++" bgColor="#E9D5FF" width="87" />
          <Skillbar text="Solidity" bgColor="#E9D5FF" width="100" />
          <Skillbar text="JavaScript" bgColor="#E9D5FF" width="100" />
          <Skillbar text="HTML" bgColor="#E9D5FF" width="100" />
          <Skillbar text="React" bgColor="#E9D5FF" width="100" />
          <Skillbar text="CSS" bgColor="#E9D5FF" width="100" />
        </div>
      </div>
    </div>
  );
}
