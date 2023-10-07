import contactImg from "../assets/img/img/contactImg.png";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full flex flex-col m-auto gap-5">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Dinesh Balan S</h3>
        <p className="text-lg font-normal text-gray-400">
          Full Stack Java Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          I'm always excited to hear about new opportunities, collaborations, or
          simply to have a chat about technology and development. Feel free to
          connect with me
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+91 861 0495 955 </span>
        </p>
        <p className="text-sm sm:text-base text-gray-400 flex items-center gap-2">
          Email:{" "}
          <span className="text-lightText">
            dineshbalansrinivasan@gmail.com
          </span>
        </p>
      </div>
    </div>
  );
};

export default ContactLeft;
