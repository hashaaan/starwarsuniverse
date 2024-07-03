import { Envelop } from "./assets/icons/envelop";
import { Phone } from "./assets/icons/phone";

const TestTwo = () => {
  return (
    <main className="min-h-screen bg-white">
      <header className="flex flex-row items-center relative">
        <div className="pl-[8rem] h-[48px] flex-1 flex flex-row bg-[#4691F2] gap-4">
          <div className="flex flex-row items-center gap-2">
            <Phone className="h-5 w-5" />
            <span className="text-sm">+1 1234567890</span>
          </div>

          <div className="flex flex-row items-center gap-2">
            <Envelop className="h-5 w-5" />
            <span className="text-sm">example@gmail.com</span>
          </div>
        </div>

        <div className="flex-1 pr-[8rem] h-[48px] bg-black"></div>
        <div className="diagonal"></div>
      </header>
    </main>
  );
};

export default TestTwo;
