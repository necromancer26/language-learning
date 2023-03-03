import Image from "next/image";
import QuestionMark from "../../public/assets/question-mark.svg";
export default function Faqs() {
  return (
    <div>
      {" "}
      <section className="bg-slate-200 dark:bg-gray-900 ">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 ">
          <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white h-[50vh] flex items-center">
            Frequently asked questions
          </h2>
          <div className="grid pt-8 text-left border-t border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-2">
            <div>
              <div className="mb-10">
                <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                  <Image
                    height={20}
                    width={20}
                    src={QuestionMark}
                    alt="question mark"
                    className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                  />
                  What do you mean by Figma assets?
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  You will have access to download the full Figma project
                  including all of the pages, the components, responsive pages,
                  and also the icons, illustrations, and images included in the
                  screens.
                </p>
              </div>
              <div className="mb-10">
                <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                  <Image
                    height={20}
                    width={20}
                    src={QuestionMark}
                    alt="question mark"
                    className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                  />
                  What does lifetime access exactly mean?
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Explicabo a commodi incidunt et quasi distinctio ab vitae
                  ipsum est, voluptate beatae ad officia aperiam! Error
                  reprehenderit voluptatum dolorem blanditiis hic.
                </p>
              </div>
              <div className="mb-10">
                <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                  <Image
                    height={20}
                    width={20}
                    src={QuestionMark}
                    alt="question mark"
                    className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                  />
                  How does support work?
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  {`We're aware of the importance of well qualified support, that
              is why we decided that support will only be provided by the
              authors that actually worked on this project.`}
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  Feel free to{" "}
                  <a
                    href="#"
                    className="font-medium underline text-primary-600 dark:text-primary-500 hover:no-underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    contact us
                  </a>{" "}
                  {"and we'll help you out as soon as we can."}
                </p>
              </div>
              <div className="mb-10">
                <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                  <Image
                    height={20}
                    width={20}
                    src={QuestionMark}
                    alt="question mark"
                    className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                  />
                  I want to build more than one project. Is that allowed?
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  {`You can use Windster for an unlimited amount of projects,
              whether it's a personal website, a SaaS app, or a website for
              a client. As long as you don't build a product that will
              directly compete with Windster either as a UI kit, theme, or
              template, it's fine.`}
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  Find out more information by{" "}
                  <a
                    href="#"
                    className="font-medium underline text-primary-600 dark:text-primary-500 hover:no-underline"
                  >
                    reading the license
                  </a>
                  .
                </p>
              </div>
            </div>
            <div>
              <div className="mb-10">
                <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                  <Image
                    height={20}
                    width={20}
                    src={QuestionMark}
                    alt="question mark"
                    className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                  />
                  {`What does "free updates" include?`}
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  {"The free updates that will be provided is based on the "}
                  <a
                    href="#"
                    className="font-medium underline text-primary-600 dark:text-primary-500 hover:no-underline"
                  >
                    roadmap
                  </a>
                  {`that we have laid out for this project. It is also possible
              that we will provide extra updates outside of the roadmap as
              well. `}
                </p>
              </div>
              <div className="mb-10">
                <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                  <Image
                    height={20}
                    width={20}
                    src={QuestionMark}
                    alt="question mark"
                    className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                  />
                  What does the free version include?
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  The{" "}
                  <a
                    href="#"
                    className="font-medium underline text-primary-600 dark:text-primary-500 hover:no-underline"
                  >
                    free version
                  </a>{" "}
                  of Windster includes a minimal style guidelines, component
                  variants, and a dashboard page with the mobile version
                  alongside it.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  You can use this version for any purposes, because it is
                  open-source under the MIT license.
                </p>
              </div>
              <div className="mb-10">
                <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                  <Image
                    height={20}
                    width={20}
                    src={QuestionMark}
                    alt="question mark"
                    className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                  />
                  What is the difference between Windster and Tailwind UI?
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officiis, vel? Illo itaque maiores vel? Iusto praesentium
                  laborum consectetur aut officia nesciunt expedita nam,
                  blanditiis, perspiciatis dolor voluptatem? Omnis, dolorum
                  rerum.
                </p>
              </div>
              <div className="mb-10">
                <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                  <Image
                    height={20}
                    width={20}
                    src={QuestionMark}
                    alt="question mark"
                    className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                  />
                  Can I use Windster in open-source projects?
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad
                  illo alias voluptatibus, facere consequatur sunt quibusdam.
                  Deleniti, quas minus! Debitis cum earum officiis quisquam vel
                  facere deleniti reprehenderit ullam laborum.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  With that being said, feel free to use this design kit for
                  your open-source projects.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  Find out more information by{" "}
                  <a
                    href="#"
                    className="font-medium underline text-primary-600 dark:text-primary-500 hover:no-underline"
                  >
                    reading the license
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
