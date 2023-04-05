const Footer = () => {
  return (
    <footer className="px-4 divide-y  text-gray-800 relative bottom-0 left-0 bg-gray-200 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="py-6 text-lg text-center text-gray-600">
        <p>
          Copyright © 2023 - All Rights Reserved from{" "}
          <span className="font-bold text-xl">nextPage</span>.
        </p>
        <div className="flex items-center justify-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
            />
          </svg>{" "}
          <p className="text-gray-600 font-bold text-lg italic">
            mdyahasib@gmail.com
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
