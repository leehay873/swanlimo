export default function Example({ actions }) {
  return (
    <div className="mx-auto mb-10 max-w-7xl  lg:px-2 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
      {actions?.map((action, index) => (
        <div
          key={index}
          className="headerCard group relative  bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500 shadow-md"
          style={{ borderRadius: "12px" }}
        >
          {/* <div className="bg-image h-10 w-14"></div> */}
          <div className="mt-4 md:mt-8">
            <h3 className="headerCard_heading ">
              <a href={action.href} className="focus:outline-none">
                <span className="absolute inset-0" aria-hidden="true" />
                {action.title}
              </a>
            </h3>
            <p className="mt-2 text-sm headerCard_para">{action.description}</p>
          </div>
          <span
            className="pointer-events-none absolute right-6 top-6 text-gray-300 group-hover:text-gray-400"
            aria-hidden="true"
          ></span>
        </div>
      ))}
    </div>
  );
}
