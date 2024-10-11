import { Icons } from "@/components/icons";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import {
  BarChart3,
  Brain,
  Code,
  FileText,
  Layout,
  LineChart,
  Shield,
  Sparkles,
  Zap,
} from "lucide-react";
import { cn } from "./utils";
import { TestimonialCardProps } from "@/components/sections/testimonials";

export const BLUR_FADE_DELAY = 0.15;

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "bg-primary/20 p-1 py-0.5 font-bold text-primary dark:bg-primary/20 dark:text-primary",
        className
      )}
    >
      {children}
    </span>
  );
};

export const siteConfig = {
  name: "Figma to Code",
  description: "Convert Figma designs to responsive code",
  url: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  keywords: ["Figma", "Code Generation", "Tailwind", "Flutter", "SwiftUI"],
  links: {
    email: "support@figmatocode.com",
    twitter: "https://twitter.com/bernaferrari",
    reddit: "https://reddit.com/u/bernaferrari",
    github: "https://github.com/bernaferrari/figma-to-code",
  },
  header: [
    {
      trigger: "Features",
      content: {
        main: {
          icon: <Icons.logo className="h-6 w-6" />,
          title: "Efficient Design Conversion",
          description:
            "Transform Figma designs into responsive code effortlessly.",
          href: "#",
        },
        items: [
          {
            href: "#",
            title: "Tailwind Support",
            description: "Generate clean, responsive Tailwind CSS code.",
          },
          {
            href: "#",
            title: "Flutter Integration",
            description: "Convert designs to Flutter layouts seamlessly.",
          },
          {
            href: "#",
            title: "SwiftUI Export",
            description: "Create SwiftUI code from your Figma designs.",
          },
        ],
      },
    },
    {
      trigger: "How It Works",
      content: {
        items: [
          {
            title: "Layout Optimization",
            href: "#",
            description: "Optimizes layouts before code conversion begins.",
          },
          {
            title: "AltNodes",
            href: "#",
            description: "Uses virtualized nodes for improved code quality.",
          },
          {
            title: "Responsive Design",
            href: "#",
            description:
              "Generates code that adapts to different screen sizes.",
          },
          {
            title: "Best Practices",
            href: "#",
            description: "Adheres to design and programming best practices.",
          },
          {
            title: "Open Source",
            href: "#",
            description: "Free and open-source plugin for the community.",
          },
        ],
      },
    },
    {
      href: "/documentation",
      label: "Documentation",
    },
  ],
  pricing: [
    {
      name: "BASIC",
      href: "#",
      price: "$19",
      period: "month",
      yearlyPrice: "$16",
      features: [
        "1 User",
        "5GB Storage",
        "Basic Support",
        "Limited API Access",
        "Standard Analytics",
      ],
      description: "Perfect for individuals and small projects",
      buttonText: "Subscribe",
      isPopular: false,
    },
    {
      name: "PRO",
      href: "#",
      price: "$49",
      period: "month",
      yearlyPrice: "$40",
      features: [
        "5 Users",
        "50GB Storage",
        "Priority Support",
        "Full API Access",
        "Advanced Analytics",
      ],
      description: "Ideal for growing businesses and teams",
      buttonText: "Subscribe",
      isPopular: true,
    },
    {
      name: "ENTERPRISE",
      href: "#",
      price: "$99",
      period: "month",
      yearlyPrice: "$82",
      features: [
        "Unlimited Users",
        "500GB Storage",
        "24/7 Premium Support",
        "Custom Integrations",
        "AI-Powered Insights",
      ],
      description: "For large-scale operations and high-volume users",
      buttonText: "Subscribe",
      isPopular: false,
    },
  ],
  faqs: [
    {
      question: "What is Figma to Code?",
      answer: (
        <span>
          Figma to Code is a free, open-source plugin that converts Figma
          designs into responsive code for Tailwind CSS, Flutter, and SwiftUI.
          It optimizes layouts and generates clean, efficient code.
        </span>
      ),
    },
    {
      question: "How does Figma to Code work?",
      answer: (
        <span>
          The plugin uses a unique approach by optimizing the layout before
          conversion. It creates virtualized nodes (AltNodes) to improve code
          quality without modifying your original Figma project.
        </span>
      ),
    },
    {
      question: "What frameworks does Figma to Code support?",
      answer: (
        <span>
          Currently, Figma to Code supports Tailwind CSS, Flutter, and SwiftUI.
          There are plans to add support for Jetpack Compose and possibly
          standard HTML or other frameworks like React Native and Bootstrap in
          the future.
        </span>
      ),
    },
    {
      question: "Is Figma to Code suitable for complex layouts?",
      answer: (
        <span>
          Yes, Figma to Code can handle complex layouts. For challenging cases,
          it uses techniques like insets or Stack and Positioned widgets to
          maintain layout integrity. The plugin also provides tips for
          optimizing your designs for better code output.
        </span>
      ),
    },
    {
      question: "How can I contribute to Figma to Code?",
      answer: (
        <span>
          As an open-source project, we welcome contributions! You can share
          your ideas, report issues, or submit pull requests on our GitHub
          repository. You can also connect with us on Twitter or Reddit
          (@bernaferrari) to provide feedback.
        </span>
      ),
    },
  ],
  footer: [
    {
      title: "Product",
      links: [
        { href: "#", text: "Features", icon: null },
        { href: "#", text: "Documentation", icon: null },
        { href: "#", text: "GitHub", icon: null },
        { href: "#", text: "Releases", icon: null },
      ],
    },
    {
      title: "Resources",
      links: [
        { href: "#", text: "Tutorial", icon: null },
        { href: "#", text: "FAQ", icon: null },
        { href: "#", text: "Support", icon: null },
        { href: "#", text: "Figma Community", icon: null },
      ],
    },
    {
      title: "Community",
      links: [
        { href: "#", text: "GitHub Issues", icon: null },
        { href: "#", text: "Feature Requests", icon: null },
        { href: "#", text: "Contributing", icon: null },
        { href: "#", text: "Code of Conduct", icon: null },
      ],
    },
    {
      title: "Social",
      links: [
        {
          href: "https://twitter.com/bernaferrari",
          text: "Twitter",
          icon: <FaTwitter />,
        },
        {
          href: "https://reddit.com/u/bernaferrari",
          text: "Reddit",
          icon: <RiInstagramFill />, // Note: You might want to replace this with a Reddit icon
        },
        {
          href: "https://github.com/bernaferrari/figma-to-code",
          text: "GitHub",
          icon: <FaYoutube />, // Note: You might want to replace this with a GitHub icon
        },
      ],
    },
  ],
  problem: {
    statement:
      "Converting Figma designs to code manually is inefficient and error-prone.",
    problems: [
      {
        title: "Manual Coding Inefficiency",
        description:
          "Manually converting Figma designs into code is time-consuming and prone to errors, slowing down the development process.",
        icon: Zap,
      },
      {
        title: "Design-Code Inconsistency",
        description:
          "Translating designs into code often results in discrepancies between the original design and the final implementation.",
        icon: Brain,
      },
      {
        title: "Limited Platform Support",
        description:
          "Many existing tools lack support for multiple platforms, restricting developers to specific frameworks or languages.",
        icon: Shield,
      },
    ],
  },
  hero: {
    pill: {
      text: "Figma to Code v2.0",
      href: "/blog/introducing-figma-to-code",
    },
    title: ["Transform", "Figma", "designs", "into", "code"],
    description:
      "Convert your Figma designs into responsive Tailwind, Flutter, and SwiftUI code with ease.",
    cta: {
      primary: {
        text: "Install Figma Plugin",
        href: "https://www.figma.com/community/plugin/842128343887142055",
      },
      secondary: {
        text: "View on GitHub",
        href: "https://github.com/bernaferrari/FigmaToCode",
      },
    },
    freeText: "Free and open-source. No credit card required.",
    demo: {
      videoSrc: "https://www.youtube.com/embed/YOUR_DEMO_VIDEO_ID",
      thumbnailSrc: "/f2c.png",
      thumbnailAlt: "Figma to Code Demo",
    },
  },
  solution: {
    title: "Streamline Your Design-to-Code Workflow",
    description:
      "Figma to Code bridges the gap between design and development, offering an efficient solution for converting Figma designs into responsive, production-ready code.",
    features: [
      {
        title: "Efficient Design Conversion",
        description:
          "Transform Figma designs into responsive code effortlessly, saving time and reducing errors in the development process.",
        className: "hover:bg-blue-500/10 transition-all duration-500 ease-out",
        icon: Zap,
        imageSrc: "/workflow.png",
        url: "/features/efficient-design-conversion",
      },
      {
        title: "Multi-Framework Support",
        description:
          "Generate code for Tailwind CSS, Flutter, and SwiftUI from a single Figma design, with plans for more frameworks in the future.",
        className:
          "order-3 xl:order-none hover:bg-green-500/10 transition-all duration-500 ease-out",
        icon: Brain,
        imageSrc: "/icon_round.svg",
        url: "/features/multi-framework-support",
      },
      {
        title: "Layout Optimization",
        description:
          "Our plugin optimizes layouts before code conversion, ensuring high-quality output without modifying your original Figma project.",
        className:
          "md:row-span-2 hover:bg-purple-500/10 transition-all duration-500 ease-out",
        icon: Shield,
        imageSrc: "responsive.png",
        url: "/features/layout-optimization",
      },
      {
        title: "Open Source & Free",
        description:
          "Figma to Code is a free, open-source plugin. Contribute, customize, and help improve the tool for the entire community.",
        className:
          "flex-row order-4 md:col-span-2 md:flex-row xl:order-none hover:bg-orange-500/10 transition-all duration-500 ease-out",
        icon: Zap,
        imageSrc: "f2c.png",
        url: "/features/open-source-free",
      },
    ],
  },
  howTo: {
    title: "How it works",
    subtitle: "Convert Figma to code in 3 easy steps",
    steps: [
      {
        id: 1,
        title: "1. Select Your Figma Design",
        content:
          "Choose the Figma layout you want to convert. Our plugin supports various design elements and components, ensuring a comprehensive conversion process.",
        image: "/figma.png",
        icon: <Layout className="w-6 h-6 text-primary" />,
      },
      {
        id: 2,
        title: "2. Choose Your Target Platform",
        content:
          "Select your desired output: responsive webpages (HTML or Tailwind) or mobile applications (Flutter or SwiftUI). Our tool optimizes the layout for your chosen platform.",
        image: "/mockup.png",
        icon: <Code className="w-6 h-6 text-primary" />,
      },
      {
        id: 3,
        title: "3. Generate Clean, Optimized Code",
        content:
          "Instantly receive accurate, clean code that adheres to best design and programming practices. Use this code to bring your Figma designs to life efficiently.",
        image: "/code.png",
        icon: <Sparkles className="w-6 h-6 text-primary" />,
      },
    ],
  },
  features: {
    title: "Design to Code",
    subtitle: "Convert Figma Designs to Responsive Code with Ease",
    featuresList: [
      {
        id: 1,
        title: "Efficient Figma-to-Code Conversion",
        content:
          "Convert Figma layouts into clean and responsive code for web or mobile apps, supporting HTML, Tailwind, Flutter, and SwiftUI.",
        image: "/figmacode.png",
        icon: <BarChart3 className="h-6 w-6 text-primary" />,
      },
      {
        id: 2,
        title: "Optimized Layouts",
        content:
          "Automatically optimize your layouts during conversion, maintaining the integrity of your designs.",
        image: "/grid.png",
        icon: <Brain className="h-6 w-6 text-primary" />,
      },
      {
        id: 3,
        title: "Responsive Code",
        content:
          "Generate responsive designs that adapt to different screen sizes with precision, ensuring a smooth user experience across devices.",
        image: "/responsive.png",
        icon: <LineChart className="h-6 w-6 text-primary" />,
      },
      {
        id: 4,
        title: "Open-Source & Community Driven",
        content:
          "Enjoy a free, open-source tool with no hidden charges, and contribute to improving the tool with feedback and collaboration.",
        image: "/workflow.png",
        icon: <FileText className="h-6 w-6 text-primary" />,
      },
    ],
  },
  testimonials: {
    title: "User Testimonials",
    subtitle: "What developers and designers are saying about Figma to Code",
    items: [
      {
        name: "Alex Rivera",
        role: "Frontend Developer",
        img: "https://randomuser.me/api/portraits/men/91.jpg",
        platform: "tailwind",
        description: (
          <p>
            Figma to Code has revolutionized our development workflow.
            <Highlight>
              Converting designs to Tailwind CSS is now faster than ever.
            </Highlight>{" "}
            A game-changer for web developers.
          </p>
        ),
      },
      {
        name: "Samantha Lee",
        role: "UI/UX Designer",
        img: "https://randomuser.me/api/portraits/women/12.jpg",
        platform: "tailwind",
        description: (
          <p>
            As a designer, I love how Figma to Code maintains design fidelity.
            <Highlight>
              Our handoff process is now seamless and efficient.
            </Highlight>{" "}
            Highly recommend for design teams.
          </p>
        ),
      },
      {
        name: "Raj Patel",
        role: "Mobile App Developer",
        img: "https://randomuser.me/api/portraits/men/45.jpg",
        platform: "flutter",
        description: (
          <p>
            Figma to Code&apos;s Flutter conversion is a lifesaver for
            cross-platform development.
            <Highlight>Our app development speed has doubled.</Highlight>{" "}
            Essential tool for any mobile dev team.
          </p>
        ),
      },
      {
        name: "Emily Chen",
        role: "iOS Developer",
        img: "https://randomuser.me/api/portraits/women/83.jpg",
        platform: "swiftui",
        description: (
          <p>
            The SwiftUI code generated by Figma to Code is clean and efficient.
            <Highlight>
              It&apos;s like having an extra team member handling the UI.
            </Highlight>{" "}
            Saves us hours of work on every project.
          </p>
        ),
      },
      {
        name: "Michael Brown",
        role: "Full Stack Developer",
        img: "https://randomuser.me/api/portraits/men/1.jpg",
        platform: "tailwind",
        description: (
          <p>
            Figma to Code&apos;s Tailwind output is spot-on.
            <Highlight>
              It&apos;s responsive out of the box and easy to customize.
            </Highlight>{" "}
            A must-have for rapid prototyping and development.
          </p>
        ),
      },
      {
        name: "Linda Wu",
        role: "Product Manager",
        img: "https://randomuser.me/api/portraits/women/5.jpg",
        platform: "flutter",
        description: (
          <p>
            Figma to Code has streamlined our product development cycle.
            <Highlight>
              From design to Flutter prototype in record time.
            </Highlight>{" "}
            It&apos;s improved our iteration speed significantly.
          </p>
        ),
      },
      {
        name: "Carlos Gomez",
        role: "Web Designer",
        img: "https://randomuser.me/api/portraits/men/14.jpg",
        platform: "tailwind",
        description: (
          <p>
            The accuracy of Figma to Code&apos;s HTML output is impressive.
            <Highlight>It captures even the subtle design details.</Highlight> A
            must-have tool for any web designer.
          </p>
        ),
      },
      {
        name: "Aisha Khan",
        role: "Frontend Team Lead",
        img: "https://randomuser.me/api/portraits/women/56.jpg",
        platform: "tailwind",
        description: (
          <p>
            Figma to Code has become an integral part of our development
            process.
            <Highlight>
              It&apos;s drastically reduced our frontend development time.
            </Highlight>{" "}
            Highly recommended for any dev team.
          </p>
        ),
      },
      {
        name: "Tom Chen",
        role: "Mobile UX Designer",
        img: "https://randomuser.me/api/portraits/men/18.jpg",
        platform: "swiftui",
        description: (
          <p>
            The SwiftUI and Flutter outputs from Figma to Code are fantastic.
            <Highlight>
              It&apos;s made prototyping mobile apps so much faster.
            </Highlight>{" "}
            A game-changer for mobile UX design.
          </p>
        ),
      },
      {
        name: "Sofia Patel",
        role: "Startup Founder",
        img: "https://randomuser.me/api/portraits/women/73.jpg",
        platform: "tailwind",
        description: (
          <p>
            For a non-technical founder, Figma to Code is a lifesaver.
            <Highlight>
              It helps me communicate my vision to developers clearly.
            </Highlight>{" "}
            Essential tool for tech startups.
          </p>
        ),
      },
      {
        name: "Jake Morrison",
        role: "Design Systems Engineer",
        img: "https://randomuser.me/api/portraits/men/25.jpg",
        platform: "tailwind",
        description: (
          <p>
            Figma to Code&apos;s output aligns perfectly with our design system.
            <Highlight>
              It ensures consistency across our products.
            </Highlight>{" "}
            Invaluable for maintaining design coherence.
          </p>
        ),
      },
      {
        name: "Nadia Ali",
        role: "Accessibility Specialist",
        img: "https://randomuser.me/api/portraits/women/78.jpg",
        platform: "tailwind",
        description: (
          <p>
            I&apos;m impressed by how Figma to Code considers accessibility.
            <Highlight>
              The generated code is semantic and screen-reader friendly.
            </Highlight>{" "}
            A great tool for creating inclusive designs.
          </p>
        ),
      },
      {
        name: "Omar Farooq",
        role: "Freelance Developer",
        img: "https://randomuser.me/api/portraits/men/54.jpg",
        platform: "tailwind",
        description: (
          <p>
            As a freelancer, Figma to Code has been a productivity booster.
          <Highlight>
              I can take on more projects and deliver faster.
            </Highlight>{" "}
            It&apos;s become an essential part of my toolkit.
          </p>
        ),
      },
    ] as TestimonialCardProps[],
  },
};

export type SiteConfig = typeof siteConfig;
