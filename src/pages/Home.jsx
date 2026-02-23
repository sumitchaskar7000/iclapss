import React from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { ArrowRight, TrendingUp, Users, Target, Zap } from "../components/icons"
import DigitalMarketingIllustration from "../components/DigitalMarketingIllustration"

const Home = () => {
  const features = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "SEO Optimization",
      description: "Boost your search rankings and drive organic traffic to your website.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Social Media Marketing",
      description: "Engage your audience and build brand presence across all platforms.",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "PPC Advertising",
      description: "Maximize ROI with targeted ad campaigns that convert visitors into customers.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Brand Strategy",
      description: "Create compelling brand stories that resonate with your target audience.",
    },
  ]

  const stats = [
    { number: "500+", label: "Happy Clients", emoji: "😊" },
    { number: "1000+", label: "Projects Completed", emoji: "✅" },
    { number: "95%", label: "Client Retention", emoji: "📈" },
    { number: "24/7", label: "Support", emoji: "🕐" },
  ]

  const socialPlatforms = [
    { name: "Instagram", emoji: "📷", color: "bg-gradient-to-r from-purple-500 to-pink-500" },
    { name: "Facebook", emoji: "👥", color: "bg-blue-600" },
    { name: "Twitter", emoji: "🐦", color: "bg-sky-500" },
    { name: "YouTube", emoji: "▶️", color: "bg-red-600" },
    { name: "TikTok", emoji: "🎵", color: "bg-black" },
    { name: "LinkedIn", emoji: "💼", color: "bg-blue-700" },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "TechStart",
      content: "Their social media strategy increased our engagement by 300% in just 3 months!",
      avatar: "👩‍💼",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "CEO",
      company: "GrowthLabs",
      content: "The best digital marketing agency we've worked with. Highly recommended!",
      avatar: "👨‍💼",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Brand Manager",
      company: "FashionHub",
      content: "Our Instagram followers grew from 10k to 100k in 6 months. Amazing work!",
      avatar: "👩‍🎨",
      rating: 5,
    },
  ]

  const metrics = [
    { label: "Social Engagement", value: "85%", emoji: "❤️", color: "text-pink-500" },
    { label: "Website Traffic", value: "200%", emoji: "👁️", color: "text-blue-500" },
    { label: "Conversion Rate", value: "45%", emoji: "🎯", color: "text-green-500" },
    { label: "ROI", value: "300%", emoji: "📊", color: "text-purple-500" },
  ]

  const food = [
    ["🍅", 340, 10],
    ["🍊", 20, 40],
    ["🍋", 60, 90],
    ["🍐", 80, 120],
    ["🍏", 100, 140],
    ["🫐", 205, 245],
    ["🍆", 260, 290],
    ["🍇", 290, 320],
  ]

  const containerStyle = {
    margin: "0 auto",
    maxWidth: 500,
    paddingBottom: 100,
    width: "100%",
  }



  return (
    <div className="pt-20 overflow-hidden">
      {/* HERO SECTION WITH HYPERSPEED BACKGROUND */}
      <section className="relative bg-black text-white min-h-screen overflow-hidden">

        <div className="max-w-7xl mx-auto px-8 pt-36 pb-24 grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div>

            {/* Heading */}
            <h1 className="font-semibold leading-[1.05] tracking-tight text-[42px] md:text-[64px] lg:text-[72px]">
              <span className="text-white">
                All your marketing <br />
                needs
              </span>{" "}
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                in one single <br />
                monthly subscription
              </span>
            </h1>

            {/* Paragraph */}
            <p className="mt-8 text-gray-400 text-[17px] md:text-[19px] leading-relaxed max-w-xl">
              Crystal-clear hourly billing and hundreds of marketing and creative
              experts at your disposal. That's what you get when you sign up for
              NinjaPromo's all-in-one marketing service.
            </p>

            {/* Button + Side Text */}
            <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-6">

              <button className="px-8 py-4 rounded-full text-lg font-medium 
          bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
          hover:opacity-90 transition duration-300">
                Book a demo
              </button>

              <p className="text-gray-400 text-sm max-w-xs">
                Design, develop, create ads, and more within one handy marketing subscription.
              </p>

            </div>

          </div>

          {/* RIGHT CONTENT */}
          <div className="flex justify-center lg:justify-end gap-6">

            {/* Left Image Card */}
            <div className="flex flex-col items-center">
              <img
                src="/image1.jpg"   // replace with your first image
                alt="Seamless Dubai"
                className="w-[240px] md:w-[260px] rounded-2xl"
              />
              <p className="mt-4 text-gray-300 text-sm">
                Seamless <span className="text-gray-500">📍 Dubai</span>
              </p>
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-6">

              {/* Rating Card */}
              <div className="bg-zinc-800 rounded-2xl px-6 py-5 w-[240px] flex items-center gap-4">
                <div className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center font-bold">
                  C
                </div>
                <div>
                  <p className="text-white font-semibold">4.9+ ⭐</p>
                  <p className="text-gray-400 text-sm">rating on Clutch</p>
                </div>
              </div>

              {/* Second Image */}
              <div className="flex flex-col items-center">
                <img
                  src="/images/Home/hero-services.svg"  // replace with your second image
                  alt="Gitex Dubai"
                  className="w-[240px] md:w-[260px] rounded-2xl"
                />
                <p className="mt-4 text-gray-300 text-sm">
                  Gitex <span className="text-gray-500">📍 Dubai</span>
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* Bottom Trusted Line */}
        <div className="absolute bottom-8 w-full text-center text-gray-400 text-sm">
          Trusted by <span className="text-white font-semibold">250+</span> startups and global brands, across 30+ industries.
        </div>

      </section>

      {/* STATS SECTION */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center text-white"
              >
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                  className="inline-block mb-2 text-3xl"
                >
                  {stat.emoji}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="text-4xl font-bold mb-2"
                >
                  {stat.number}
                </motion.div>
                <div className="text-blue-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Our Core Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive digital marketing solutions tailored to your business needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{
                  y: -10,
                  boxShadow: "0 20px 30px -10px rgba(0,0,0,0.2)"
                }}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 group"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform"
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SOCIAL MEDIA PLATFORMS */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">We Dominate Every Platform</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From Instagram to LinkedIn, we've got your social media covered
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-6">
            {socialPlatforms.map((platform, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 200,
                  damping: 10
                }}
                whileHover={{
                  y: -20,
                  scale: 1.1,
                }}
                className={`${platform.color} text-white p-6 rounded-xl shadow-lg cursor-pointer`}
              >
                <motion.div
                  animate={{
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                  className="text-4xl"
                >
                  {platform.emoji}
                </motion.div>
                <p className="mt-2 font-semibold">{platform.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* TESTIMONIALS SECTION */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index === 1 ? 0 : index === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-xl shadow-lg relative"
              >
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  className="text-5xl mb-4"
                >
                  {testimonial.avatar}
                </motion.div>

                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                      className="text-yellow-400"
                    >
                      ★
                    </motion.span>
                  ))}
                </div>

                <p className="text-gray-600 mb-4">"{testimonial.content}"</p>

                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role} at {testimonial.company}</p>
                </div>

                <motion.div
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-2 -right-2 w-12 h-12 bg-blue-100 rounded-full -z-10"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* METRICS SECTION */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">Our Results Speak for Themselves</h2>
              <p className="text-gray-600 mb-8">
                We don't just promise results - we deliver them. Here's what we've achieved for our clients.
              </p>

              {metrics.map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="mb-6"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">{metric.emoji}</span>
                    <span className="font-semibold">{metric.label}</span>
                    <span className="ml-auto font-bold">{metric.value}</span>
                  </div>
                  <motion.div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: metric.value }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                      className={`h-full rounded-full ${index === 0 ? "bg-pink-500" :
                        index === 1 ? "bg-blue-500" :
                          index === 2 ? "bg-green-500" : "bg-purple-500"
                        }`}
                    />
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="bg-white p-6 rounded-xl shadow-lg text-center"
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                    className="text-4xl mb-2"
                  >
                    {stat.emoji}
                  </motion.div>
                  <div className="text-2xl font-bold">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ANIMATED CARDS SECTION */}


      {/* CTA SECTION */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.1, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute bg-white rounded-full"
          style={{ width: "200%", height: "200%", left: "-50%", top: "-50%" }}
        />

        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve your marketing goals and drive real business results.
            </p>
            <Link
              to="/contact"
              className="group relative inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg overflow-hidden"
            >
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.5 }}
              />
              <span className="relative z-10">Get Free Consultation</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

// Card Component
const Card = ({ emoji, hueA, hueB }) => {
  const cardContainerStyle = {
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    paddingTop: 20,
    marginBottom: -120,
  }

  const splashStyle = {
    position: "absolute",
    inset: 0,
    background: `linear-gradient(306deg, hsl(${hueA}, 100%, 50%), hsl(${hueB}, 100%, 50%))`,
    borderRadius: "20px",
  }

  const cardStyle = {
    fontSize: 164,
    width: 300,
    height: 430,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    background: "#f5f5f5",
    position: "relative",
    zIndex: 1,
  }

  return (
    <motion.div
      style={cardContainerStyle}
      initial={{ y: 200 }}
      whileInView={{ y: 0, rotate: -5 }}
      transition={{ type: "spring", bounce: 0.4, duration: 0.8 }}
      viewport={{ amount: 0.5 }}
    >
      <div style={splashStyle} />
      <motion.div style={cardStyle}>
        {emoji}
      </motion.div>
    </motion.div>
  )
}

export default Home