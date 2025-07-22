"use client";

import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  // useAuth,
} from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Users,
  Expand,
  StickyNote,
  ShieldCheck,
  Share2,
  LayoutTemplate,
  Github,
} from "lucide-react";

export default function HomePage() {
  const router = useRouter();
  // const { isSignedIn } = useAuth();

  // const handleCreateOrganization = () => {
  //   if (isSignedIn) {
  //     router.push("/dashboard");
  //   } else {
  //     router.push("/sign-in");
  //   }
  // };

  return (
    <main className="w-full min-h-screen overflow-x-hidden bg-gradient-to-r from-purple-200 via-pink-100 to-white">
      <header className="absolute top-0 left-0 w-full px-6 py-4 flex justify-between items-center z-50">
        <Link href="/">
          <div className="flex items-center gap-2">
            <Image src="/logo.svg" alt="IdeateX Logo" width={40} height={40} />
            <span className="text-xl font-bold text-purple-700">IdeateX</span>
          </div>
        </Link>

        <SignedOut>
          <div className="flex gap-4">
            <SignInButton mode="modal">
              <Button
                variant="outline"
                className="border-purple-500 text-purple-700 hover:bg-purple-100"
              >
                Sign In
              </Button>
            </SignInButton>
            <SignUpButton mode="modal">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                Sign Up
              </Button>
            </SignUpButton>
          </div>
        </SignedOut>

        <SignedIn>
          <div>
            <Button
              variant="outline"
              className="border-purple-500 text-purple-700 hover:bg-purple-100"
              onClick={() => router.push("/dashboard")}
            >
              Continue To Dashboard
            </Button>
          </div>
        </SignedIn>
      </header>

      <section className="relative pt-32 pb-24 px-6 text-center overflow-hidden">
        <div className="absolute top-[-80px] left-[-80px] w-96 h-96 bg-pink-300 rounded-full blur-3xl opacity-30 animate-pulse -z-10" />
        <div className="absolute bottom-[-100px] right-[-100px] w-96 h-96 bg-blue-300 rounded-full blur-3xl opacity-40 animate-pulse -z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_0%,transparent_70%)] z-0"></div>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl sm:text-7xl font-extrabold mb-6 text-purple-800 drop-shadow"
        >
          Visualize. Collaborate. Create.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="text-gray-700 max-w-3xl mx-auto mb-10 text-xl"
        >
          Welcome to{" "}
          <span className="text-purple-600 font-semibold">IdeateX</span> — where
          ideas come to life on an infinite whiteboard. Real-time collaboration.
          Infinite possibilities.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <Image
            src="/preview.png"
            alt="IdeateX whiteboard preview"
            width={1000}
            height={550}
            className="rounded-xl shadow-2xl border border-purple-200"
          />
        </motion.div>
      </section>

      <section className="py-24 px-6 bg-gradient-to-r from-purple-200 via-pink-100 to-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Why Choose IdeateX?</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="bg-purple-50 p-6 rounded-lg shadow-md"
              >
                <feature.icon className="h-10 w-10 text-purple-600 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-r from-purple-200 via-pink-100 to-white text-center">
        <h2 className="text-3xl font-bold text-purple-800 mb-6">
          Ready to get started?
        </h2>
        <p className="text-lg text-gray-700 mb-8 max-w-xl mx-auto">
          Click below to create your first organization and bring your ideas to
          life on an infinite canvas.
        </p>
        <Button
          size="lg"
          className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 text-lg font-semibold rounded-xl shadow-md"
          // onClick={handleCreateOrganization}
        >
          Create Your First Organization
        </Button>
      </section>

      <footer className="bg-gray-100 border-t border-gray-200 py-10 px-6 text-sm text-gray-600">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Image src="/logo.svg" alt="IdeateX Logo" width={32} height={32} />
            <span className="font-semibold text-purple-700">IdeateX</span>
          </div>
          <div className="flex gap-6">
            <Link href="/">Home</Link>
            <Link href="/dashboard">Dashboard</Link>
            <Link href="#">Privacy</Link>
            <Link href="#">Terms</Link>
          </div>
          <div>
            <a
              href="https://github.com/your-org"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-600 flex items-center gap-1"
            >
              <Github className="w-4 h-4" /> GitHub
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

const features = [
  {
    icon: Users,
    title: "Real-time Collaboration",
    description:
      "Work with your team live on the same canvas, no matter where you are.",
  },
  {
    icon: StickyNote,
    title: "Sticky Notes & Annotations",
    description: "Drop ideas anywhere and annotate freely with sticky notes.",
  },
  {
    icon: Expand,
    title: "Infinite Canvas",
    description: "No limits. Zoom and pan through an endless workspace.",
  },
  {
    icon: Share2,
    title: "Easy Sharing",
    description: "Share boards instantly with a link — no downloads required.",
  },
  {
    icon: LayoutTemplate,
    title: "Ready-made Templates",
    description: "Start fast with prebuilt wireframes, diagrams, and more.",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Private",
    description:
      "Enterprise-grade encryption and access control to protect your work.",
  },
];
