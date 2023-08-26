import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navigation = () => {
  return (
    <nav className="bg-background-100">
      <div className="container mx-auto items-center flex justify-between h-[120px]">
        <Image className="inline-block" alt="Hunters dog walking" src={""} />
        <ul className="flex gap-4 h-min">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/locations">Locations</Link>
          </li>
          <li>
            <Link href="/testimonials">Testimonials</Link>
          </li>
          <li>
            <Link href="/faq">FAQ</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
        </ul>
        <Link href="/contact-us">Contact Us</Link>

      </div>
    </nav>
  );
};

export default Navigation;
