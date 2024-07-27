import GetInTouch from "../components/Other Components/GetInTouch";

const Contact = () => {
  return (
    <>
      <GetInTouch />
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3498.163929450832!2d77.19549840973666!3d28.744522175501977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cffa701d6385f%3A0xacc6c194847ee592!2sSkills%20Yard%20%7C%20computer%20course%20%26%20Institute%20%7C%20Basic%20Computers%20%7C%20Digital%20Marketing%20%7C%20Graphic%20Designing%20%7C%20Programming!5e0!3m2!1sen!2sin!4v1721740499097!5m2!1sen!2sin"
          width="100%"
          height="600"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default Contact;
