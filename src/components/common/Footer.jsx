import React from "react";

const Footer = () => {
  return (
    <footer
      aria-labelledby="footer-heading"
      className="w-full bg-[#090909] overflow-hidden pb-32"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32 bg-[#090909]">
        <div className="mb-20 flex justify-center space-x-16">
          <a
            href="https://x.com/langbaseinc"
            target="_blank"
            className="text-muted-foreground hover:text-primary"
          >
            <span className="sr-only">X</span>
            <svg
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-6 w-6"
            >
              <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
            </svg>
          </a>
          <a
            href="https://github.com/LangbaseInc/"
            target="_blank"
            className="text-muted-foreground hover:text-primary"
          >
            <span className="sr-only">GitHub</span>
            <svg
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-6 w-6"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/company/langbase/"
            target="_blank"
            className="text-muted-foreground hover:text-primary"
          >
            <span className="sr-only">LinkedIn</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M19.65 3H4.35C3.99196 3 3.64858 3.14223 3.39541 3.39541C3.14223 3.64858 3 3.99196 3 4.35V19.65C3 20.008 3.14223 20.3514 3.39541 20.6046C3.64858 20.8578 3.99196 21 4.35 21H19.65C20.008 21 20.3514 20.8578 20.6046 20.6046C20.8578 20.3514 21 20.008 21 19.65V4.35C21 3.99196 20.8578 3.64858 20.6046 3.39541C20.3514 3.14223 20.008 3 19.65 3ZM8.4 18.3H5.7V10.2H8.4V18.3ZM7.05 8.625C6.74056 8.61616 6.4406 8.51632 6.18758 8.33797C5.93456 8.15962 5.7397 7.91066 5.62737 7.6222C5.51503 7.33374 5.49019 7.01857 5.55595 6.71607C5.6217 6.41358 5.77515 6.13716 5.9971 5.92138C6.21906 5.70559 6.49968 5.55999 6.80391 5.50278C7.10814 5.44556 7.42248 5.47927 7.70766 5.59969C7.99284 5.7201 8.23622 5.92189 8.40737 6.17983C8.57853 6.43778 8.66987 6.74044 8.67 7.05C8.66289 7.47331 8.4885 7.8766 8.18495 8.17173C7.88139 8.46685 7.47335 8.62982 7.05 8.625ZM18.3 18.3H15.6V14.034C15.6 12.756 15.06 12.297 14.358 12.297C14.1522 12.3107 13.9511 12.3649 13.7663 12.4566C13.5815 12.5482 13.4166 12.6755 13.2811 12.831C13.1457 12.9866 13.0422 13.1674 12.9768 13.363C12.9114 13.5586 12.8853 13.7652 12.9 13.971C12.8955 14.0129 12.8955 14.0551 12.9 14.097V18.3H10.2V10.2H12.81V11.37C13.0733 10.9695 13.435 10.6433 13.8605 10.4227C14.286 10.2021 14.761 10.0944 15.24 10.11C16.635 10.11 18.264 10.884 18.264 13.404L18.3 18.3Z"
                fill="currentColor"
              />
            </svg>
          </a>
          <a
            href="https://langbase.com/discord"
            target="_blank"
            className="text-muted-foreground hover:text-primary"
          >
            <span className="sr-only">Discord</span>
            <svg
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-6 w-6"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19.2721 5.13728C17.7793 4.44658 16.1952 3.95219 14.5468 3.68016C14.5237 3.67557 14.5006 3.68704 14.4891 3.70768C14.2875 4.07674 14.0635 4.55686 13.9056 4.93279C12.1359 4.67804 10.3776 4.67804 8.64409 4.93279C8.48618 4.54539 8.25369 4.07674 8.05099 3.70768C8.03946 3.68816 8.01638 3.67669 7.99329 3.68016C6.34603 3.95107 4.76195 4.44546 3.26799 5.13728C3.25872 5.14187 3.25058 5.14875 3.24472 5.15793C0.473824 9.36521 -0.282974 13.4652 0.0885877 17.5147C0.0903686 17.5307 0.0991989 17.5456 0.111186 17.5548C2.0985 19.0412 4.02343 19.9267 5.91262 20.5231C5.93571 20.5311 5.95997 20.5231 5.97381 20.5035C6.41741 19.8979 6.81289 19.2591 7.15551 18.5871C7.17165 18.5563 7.15667 18.5186 7.12432 18.5072C6.49977 18.2611 5.90307 17.9622 5.32798 17.621C5.29215 17.6008 5.28867 17.5494 5.32102 17.5246C5.44209 17.4328 5.56316 17.3365 5.67958 17.2392C5.69458 17.2266 5.71534 17.2243 5.73262 17.2323C9.51188 18.971 13.5595 18.971 17.2904 17.2323C17.3077 17.2232 17.3285 17.2255 17.3446 17.2381C17.461 17.3354 17.5821 17.4328 17.7043 17.5246C17.7366 17.5494 17.7343 17.6008 17.6984 17.621C17.1233 17.9691 16.5266 18.2611 15.9009 18.506C15.8686 18.5174 15.8547 18.5563 15.8709 18.5871C16.2203 19.2579 16.6158 19.8967 17.0516 20.5024C17.0643 20.5231 17.0897 20.5311 17.1128 20.5231C19.0108 19.9267 20.9357 19.0412 22.923 17.5548C22.9361 17.5456 22.9438 17.5318 22.9456 17.5159C23.3851 12.8299 22.1998 8.76957 19.2856 5.15905C19.2809 5.14875 19.2727 5.14187 19.2634 5.13728H19.2721ZM7.69997 14.9875C6.56058 14.9875 5.62494 13.9512 5.62494 12.6781C5.62494 11.4049 6.54209 10.3686 7.69997 10.3686C8.86717 10.3686 9.79356 11.4161 9.77507 12.6781C9.77507 13.9512 8.85791 14.9875 7.69997 14.9875ZM16.3079 14.9875C15.1685 14.9875 14.2328 13.9512 14.2328 12.6781C14.2328 11.4049 15.15 10.3686 16.3079 10.3686C17.4751 10.3686 18.4015 11.4161 18.383 12.6781C18.383 13.9512 17.4751 14.9875 16.3079 14.9875Z"
                fill="currentColor"
              />
            </svg>
          </a>
        </div>
        <nav
          aria-label="Footer"
          className="grid grid-cols-2 gap-x-4 gap-y-0 sm:grid-cols-none sm:flex sm:flex-wrap sm:justify-center text-center sm:text-left"
        >
          <div className="pb-6 sm:px-6">
            <a
              target="_blank"
              className="text-sm leading-6 text-muted-foreground hover:text-primary"
              href="/signin"
            >
              Login
            </a>
          </div>
          <div className="pb-6 sm:px-6">
            <a
              target="_blank"
              className="text-sm leading-6 text-muted-foreground hover:text-primary"
              href="/about"
            >
              About
            </a>
          </div>
          <div className="pb-6 sm:px-6">
            <a
              target="_blank"
              className="text-sm leading-6 text-muted-foreground hover:text-primary"
              href="https://langbase.com/docs"
            >
              Docs
            </a>
          </div>
          <div className="pb-6 sm:px-6">
            <a
              target="_blank"
              className="text-sm leading-6 text-muted-foreground hover:text-primary"
              href="https://langbase.com/docs/guides/rag"
            >
              Guides
            </a>
          </div>
          <div className="pb-6 sm:px-6">
            <a
              target="_blank"
              className="text-sm leading-6 text-muted-foreground hover:text-primary"
              href="https://langbase.com/solutions"
            >
              Solutions
            </a>
          </div>
          <div className="pb-6 sm:px-6">
            <a
              target="_blank"
              className="text-sm leading-6 text-muted-foreground hover:text-primary"
              href="/changelog"
            >
              Changelog
            </a>
          </div>
          <div className="pb-6 sm:px-6">
            <a
              target="_blank"
              className="text-sm leading-6 text-muted-foreground hover:text-primary"
              href="/pricing"
            >
              Pricing
            </a>
          </div>
          <div className="pb-6 sm:px-6">
            <a
              href="/terms"
              target="_blank"
              className="text-sm leading-6 text-muted-foreground hover:text-primary"
            >
              Terms
            </a>
          </div>
          <div className="pb-6 sm:px-6">
            <a
              target="_blank"
              className="text-sm leading-6 text-muted-foreground hover:text-primary"
              href="/privacy-policy"
            >
              Privacy
            </a>
          </div>
          <div className="pb-6 sm:px-6">
            <a
              target="_blank"
              className="text-sm leading-6 text-muted-foreground hover:text-primary"
              href="/security"
            >
              Security
            </a>
          </div>
        </nav>
        <p className="mt-20 text-center text-sm leading-5 text-muted-foreground/50 max-w-[320px] md:max-w-full mx-auto">
          © 2025 Langbase, Inc. 2261 Market St #5698, San Francisco, CA 94114.
          All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
