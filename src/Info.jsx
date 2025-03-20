import React from "react";
import InfoImage from "./assets/info.webp";
import { Link } from "react-router-dom";

function Info() {
  return (
    <div class="bg-white text-black">
      <div class="px-4 lg:px-16">
        <div class="container mx-auto pb-8">
          <div class="container mx-auto text-center py-8">
            <h1 class="text-2xl font-bold">Diksha Dhiman</h1>
            <p class="text-sm">ACTOR</p>
            <nav class="mt-4">
              <ul class="flex justify-center space-x-8 text-sm">
                <li>
                  <Link class="hover:underline" to="/">
                    {" "}
                    Narrative{" "}
                  </Link>
                </li>
                <li>
                  <Link class="hover:underline" to="/info">
                    {" "}
                    Info{" "}
                  </Link>
                </li>
                <li>
                  <Link class="hover:underline" to="/contact">
                    {" "}
                    Contact{" "}
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <main class="flex flex-col lg:flex-row">
            <div class="lg:w-1/3 mb-8 lg:mb-0">
              <img class="w-full h-auto" src={InfoImage} />
              <p class="text-sm font-medium py-3 text-center">
                
              </p>
            </div>
            <div class="lg:w-1/2 lg:pl-8">
              <section class="mb-8">
                <p class="mt-4 text-gray-700">
                Hi, I’m Diksha, a professional model based in Chandigarh. With a passion for fashion, elegance, and creative expression, I bring confidence and charisma to every photoshoot, runway, and campaign I work on.

From high-fashion editorials to commercial projects, I love collaborating with designers, photographers, and brands to create stunning visuals that tell a story. My journey in modeling has allowed me to explore diverse styles and push creative boundaries, always striving to bring something fresh and unique to every project.

Beyond the camera, I am deeply passionate about fitness, self-care, and staying up-to-date with the latest trends in fashion and beauty. I believe in using my platform to inspire confidence and self-expression in others.

Let’s connect and create something amazing together!
                </p>
                <p class="mt-4 text-gray-700">
                  Modeling, for me, is not just about aesthetics but also about storytelling and emotion. I strive to bring authenticity and versatility to every role, ensuring that each project resonates with its audience in a meaningful way.
                </p>
              </section>

              <section class="mb-8">
                <h3 class="text-2xl font-semibold">Expertise:</h3>
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                  <div class="py-4 px-6 rounded-lg font-medium">
                    Doing Shoots
                  </div>
                  <div class="py-4 px-6 rounded-lg font-medium">
                    Actor
                  </div>
                  
                  <div class="py-4 px-6 rounded-lg font-medium">
                    Social Media Content
                  </div>
                  
                  
                </div>
              </section>

              {/* <!-- <section class="mb-8">
              <h3 class="text-2xl font-semibold">Experience</h3>
              <p class="mt-4 text-gray-700">
                With a passion for storytelling, technical expertise, and
                attention to detail, I help showcase properties in the best light.
                My work exceeds expectations and enhances brand value, driving
                more visibility and engagement.
              </p>
              <p class="mt-4 text-gray-700">My experience spans:</p>
              <ul class="list-disc list-inside mt-4 text-gray-600">
                <li>Documentary Videos</li>
                <li>Short Films</li>
                <li>Advertisements</li>
                <li>Corporate Content</li>
                <li>Architectural Videos</li>
              </ul>
              <p class="mt-4 text-gray-700">
                I am a versatile content creator who brings stories to life.
              </p>
            </section> --> */}
            </div>
          </main>
          {/* <!-- <section class="mt-12">
          <h2 class="text-lg font-bold mb-4">UK/EU AGENTS</h2>
          <div class="flex flex-col lg:flex-row">
            <div class="lg:w-1/2 mb-8 lg:mb-0">
              <h3 class="text-2xl font-bold mb-4">LUX</h3>
              <h4 class="text-lg font-bold mb-2">
                COMMERCIALS &amp; MUSIC VIDEO
              </h4>
              <p class="mb-2">
                Jerry Deeney
                <br />
                <a
                  class="text-black hover:underline"
                  href="mailto:jerry@luxartists.net"
                >
                  jerry@luxartists.net
                </a>
              </p>
              <p class="mb-2">
                Wladimir Baseden
                <br />
                <a
                  class="text-black hover:underline"
                  href="mailto:wladimir@luxartists.net"
                >
                  wladimir@luxartists.net
                </a>
              </p>
              <p class="mb-2">+33 (0)1 3 44 09 69</p>
              <p class="mb-2">
                Nikhil Sinh Smith
                <br />
                <a
                  class="text-black hover:underline"
                  href="mailto:nikhil@luxartists.net"
                >
                  nikhil@luxartists.net
                </a>
              </p>
              <p class="mb-2">+44 20 7637 9064</p>
            </div>
            <div class="lg:w-1/2 lg:pl-8">
              <h4 class="text-lg font-bold mb-2">FILM &amp; TV</h4>
              <p class="mb-2">
                Rebecca Fayyad Palud
                <br />
                <a
                  class="text-black hover:underline"
                  href="mailto:rebecca@luxartists.net"
                >
                  rebecca@luxartists.net
                </a>
              </p>
              <p class="mb-2">
                Molly Eaglesham
                <br />
                <a
                  class="text-black hover:underline"
                  href="mailto:molly@luxartists.net"
                >
                  molly@luxartists.net
                </a>
              </p>
            </div>
          </div>
        </section> --> */}
        </div>
      </div>
      <footer class="text-center pb-4 w-full">
        <p class="text-sm flex flex-col">
          <div>
            <div class="flex justify-center space-x-4">
              
              <a
                href="https://www.instagram.com/dikshaa.dd?igsh=eDJzZGNpbzlka2Ry"
                target="_blank"
                class="rounded-full p-3"
              >
                <i class="fab fa-instagram text-xl"></i>
              </a>
              
            </div>
          </div>
          <span>&copy; 2025 Diksha Dhiman</span>
        </p>
      </footer>
    </div>
  );
}

export default Info;
