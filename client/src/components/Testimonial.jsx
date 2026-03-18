import ti1 from '../assets/testimonialimg1.png'
import ti2 from '../assets/testimonialimg2.png'
import ti3 from '../assets/testimonialimg3.png'
import {motion} from 'motion/react'
const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: "Rohit Sharma",
      address: "Mumbai, India",
      image: ti1,
      review:
        "Amazing service! The car was clean and pickup was super smooth.",
    },
    {
      id: 2,
      name: "Ananya Gupta",
      address: "Noida, Delhi NCR",
      image: ti2,
      review:
        "Great experience overall. Pricing is fair and customer support is responsive.",
    },
    {
      id: 3,
      name: "Karan Verma",
      address: "Gurgaon, Haryana",
      image: ti3,
      review:
        "Best self-drive rental platform I’ve used so far. Clean UI and reliable cars.",
    },
  ];

  return (
    <div className="flex flex-col items-center px-6 md:px-16 lg:px-24 bg-white pt-20 pb-32">
      
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl md:text-[40px] font-playfair">
          Customer Testimonials
        </h1>
        <p className="text-sm md:text-base text-gray-500/90 mt-2 max-w-172.5">
          Hear what our users say about us. We are always committed to delivering the best experience.
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-6 mt-20 mb-10">
        {testimonials.map((testi, idx) => (
          <motion.div
          initial={{opacity:0, y:50}}
          whileInView={{opacity:1, y:0}}
          transition={{duration:0.6, delay:0.2}}
          whileHover={{y:-20}}

            key={testi.id}
            className="bg-white p-6 rounded-xl shadow-xl max-w-xs"
          >
            
            <div className="flex items-center gap-3">
              <img
                className="w-12 h-12 rounded-full object-cover"
                src={testi.image}
                alt={testi.name}
              />
              <div>
                <p className="font-playfair text-lg">
                  {testi.name}
                </p>
                <p className="text-gray-500 text-sm">
                  {testi.address}
                </p>
              </div>
            </div>

            <p className="text-gray-500 mt-4 text-sm leading-relaxed">
              {testi.review}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
