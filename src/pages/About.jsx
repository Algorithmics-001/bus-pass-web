import React from 'react';

function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">About Digipass</h1>
      <p className="mb-4">
        Digipass is a platform designed to streamline the process of obtaining bus passes for students.
      </p>
      <p className="mb-4">
        Our application facilitates communication between colleges and bus services, allowing colleges to efficiently
        manage bus pass requests and generate digital bus passes for students.
      </p>
      <p className="mb-4">
        With Digipass, students can easily request bus passes online, reducing the hassle of traditional paperwork
        processes and providing a more convenient experience.
      </p>
      <p className="mb-4">
        We aim to improve transportation services for students and simplify administrative tasks for colleges and bus
        services alike.
      </p>
      <p className="mt-8">
        <strong>For more information, contact us at:</strong>
      </p>
      <ul className="list-disc pl-8 mt-2">
        <li>Email: contact@digipass.com</li>
        <li>Phone: 123-456-7890</li>
        <li>Address: 123 Main Street, City, Country</li>
      </ul>
    </div>
  );
}

export default AboutPage;
