const TeamCard = ({ member }) => {
  return (
    <div className="bg-gray-100 rounded-lg shadow-lg w-72 overflow-hidden">
      <div className="relative">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-72 object-cover"
        />
        <div className="absolute top-4 right-4 flex gap-2">
          {member.socials.map((social, index) => (
            <a
              key={index}
              href={social.url}
              className="bg-white p-1  shadow hover:bg-gray-200"
              style={{ borderRadius: "50%" }}
            >
              <i className={`fab fa-${social.icon} text-gray-600`}></i>{" "}
              {/* Use Font Awesome for icons */}
            </a>
          ))}
        </div>
      </div>
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold">{member.name}</h3>
        <p className="text-sm text-gray-500">{member.role}</p>
      </div>
    </div>
  );
};

export default TeamCard;
