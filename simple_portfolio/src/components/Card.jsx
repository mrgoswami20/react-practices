import { CiGlobe } from "react-icons/ci";



function Card() {
  return (
    <div class="relative grid h-[22rem] w-full max-w-[18rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
      <div class="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('/src/assets/dices 1.png')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
        <div class="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
      </div>
      <div class="relative p-6 px-6 py-14 md:px-12">
        <h2 class="mb-6 block font-sans text-4xl font-medium leading-[1.5] tracking-normal text-white antialiased">
          How we design and code open-source projects?
        </h2>
        <button class="block mb-4 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-gray-400">
        <CiGlobe />
        </button>
        <img
          alt="Tania Andrew"
          src=""
          class="relative inline-block h-[74px] w-[74px] !rounded-full border-2 border-white object-cover object-center"
        />
      </div>
    </div>
  );
}

export default Card;
