const Footer = () => {
    return (
      <footer className="bg-gray-100 dark:bg-[#0e0e17] py-6 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-4 text-center text-sm text-gray-600 dark:text-gray-400">
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-pink-600">
              Ashok Kumar Thammineni
            </span>
            . All rights reserved.
          </p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  