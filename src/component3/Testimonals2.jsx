import { AnimatedTestimonials } from "../component3/ui2/../animated-testimonials";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "Working with Temitope was a game-changer for our business. He delivered a clean, responsive website that not only looked amazing but also performed flawlessly on all devices. Highly recommended!",
      name: "Sarah O",
      designation: "Small Business Owner",
      src: "https://images.unsplash.com/photo-1615453261246-4b32e335a4a0?q=80&w=572&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Temitope brought our vision to life better than we imagined. His attention to detail and creative UI/UX design made our brand stand out online. We'll definitely work with him again!",
      name: "Michael A",
      designation: "Marketing Director",
      src: "https://images.unsplash.com/photo-1612214070442-3c806a722f0b?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Professional, fast, and reliable. Temitope created a custom web solution for us that was not only beautiful but also easy to manage. We’ve seen an increase in user engagement since launch.",
      name: "Fatima D",
      designation: "Non-Profit Organizer",
      src: "https://images.unsplash.com/photo-1645092708550-2632c574bbfd?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "From concept to launch, Temitope handled everything with excellence. His frontend skills, especially with React and Tailwind CSS, made our app feel modern and user-friendly. A true frontend expert!",
      name: "David K",
      designation: "Tech Startup Founder",
      src: "https://images.unsplash.com/photo-1551692702-edf4a1d740bf?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Paul Deborah T",
      designation: "Business owner",
      src: "https://images.unsplash.com/photo-1632828169028-11b148c180fb?q=80&w=550&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
