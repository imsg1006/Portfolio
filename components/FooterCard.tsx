export default function FooterCard() {
  return (
    <footer className="bg-[#090d1a] text-gray-300 py-16 px-8">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">

    {/* Brand */}
    <div>
      <h2 className="text-3xl font-bold mb-4 text-white">Shlok's <span className="text-purple">Portfolio</span></h2>
      <p className="leading-relaxed text-gray-400">
        Building responsive, modern web apps with clean UI and elegant code.
      </p>
    </div>

   
    <div />

    {/* Navigation */}
    <div className="md:text-right">
      <h3 className="text-2xl font-semibold mb-4 text-purple">Navigation</h3>
      <ul className="space-y-2">
        {["About","Projects","Experience","Contact"].map((item) => (
          <li key={item}>
            <a
              href={"#" + item.toLowerCase()}
              className="hover:text-fuchsia-300 transition-colors duration-200"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>

  </div>

  {/* Bottom bar */}
  <div className="text-center mt-12 text-sm text-gray-500">
    © 2025 All rights reserved.
  </div>
</footer>

  );
}
