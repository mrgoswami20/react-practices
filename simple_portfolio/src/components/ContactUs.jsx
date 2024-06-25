import contactUsImage from "../assets/hi_profile_image.png";
function ContactUs() {
  return (
    <div className="flex flex-col bg-white items-center min-h-svh justify-center pt-16" id="contact-us">
      <h1 className="font-semibold text-4xl p-4">Contact Us</h1>
      <div className="md:flex items-center justify-center p-5 md:px-32 md:w-full">
        <div className="md:w-1/2">
          <img src={contactUsImage} alt="" />
        </div>
        <div className="md:w-1/2 h-full pt-4"> 
            <form action="" className="flex flex-col">
                <label for="name" className="text-slate-400 p-1 bg-white">Name</label>
                <input type="text" id="name" name="name" className=" border-purple-400 border-2 rounded-md mb-2 p-2 outline-none " />
                <label for="email" className="text-slate-400 p-1 bg-white">Email</label>
                <input type="email" id="email" name="email" className=" border-purple-400 border-2 rounded-md mb-2 p-2 outline-none" />
                <label for="message" className="text-slate-400 p-1 bg-white">Message</label>
                <textarea id="message" name="message" className=" border-purple-400 border-2 rounded-md w-auto h-[13rem] resize-none mb-2 p-2 outline-none"></textarea>
                <button className=" border-purple-400 border-2 rounded-md text-white bg-purple-400 active:scale-95 p-3 outline-purple-300">
            SUBMIT
          </button>
            </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
