export default function Footer() {
  return (
    <footer className="footer p-10 bg-neutral text-neutral-content">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <h2 className="footer-title">About Us</h2>
          <p>
            HelpBot provides AI-driven customer support to streamline and enhance your customer service experience.
          </p>
        </div>
        <div>
          <h2 className="footer-title">Contact</h2>
          <ul>
            <li><a href="mailto:support@helpbot.com" className="link link-hover">Email Us</a></li>
            <li><a href="tel:+1234567890" className="link link-hover">Call Us</a></li>
          </ul>
        </div>
        <div>
          <h2 className="footer-title">Follow Us</h2>
          <div className="grid grid-flow-col gap-4">
            <a href="https://www.facebook.com/helpbot" className="link link-hover">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.729 0-1.325.596-1.325 1.325v21.351c0 .729.596 1.324 1.325 1.324h11.495v-9.29h-3.127v-3.622h3.127v-2.671c0-3.066 1.874-4.737 4.608-4.737 1.311 0 2.437.097 2.762.14v3.201l-1.897.001c-1.49 0-1.778.708-1.778 1.748v2.319h3.554l-.464 3.622h-3.09v9.29h6.062c.729 0 1.324-.595 1.324-1.324v-21.35c0-.729-.595-1.325-1.324-1.325z"/></svg>
            </a>
            <a href="https://twitter.com/helpbot" className="link link-hover">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.83.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.956-2.178-1.555-3.594-1.555-2.72 0-4.92 2.204-4.92 4.924 0 .385.043.76.127 1.122-4.09-.205-7.719-2.166-10.141-5.144-.424.729-.666 1.574-.666 2.475 0 1.71.869 3.214 2.19 4.096-.807-.026-1.566-.248-2.228-.616v.062c0 2.385 1.698 4.374 3.95 4.829-.414.112-.849.172-1.296.172-.318 0-.626-.031-.929-.089.626 1.956 2.445 3.379 4.6 3.419-1.685 1.32-3.808 2.107-6.114 2.107-.397 0-.788-.023-1.175-.068 2.179 1.397 4.768 2.212 7.548 2.212 9.057 0 14.01-7.514 14.01-14.03 0-.213-.005-.426-.015-.637.962-.694 1.796-1.562 2.457-2.549z"/></svg>
            </a>
            <a href="https://www.linkedin.com/company/helpbot" className="link link-hover">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.23 0h-20.46c-.977 0-1.77.793-1.77 1.77v20.461c0 .977.793 1.77 1.77 1.77h20.459c.977 0 1.77-.793 1.77-1.77v-20.461c0-.977-.793-1.77-1.77-1.77zm-14.084 20.539h-3.417v-10.799h3.417v10.799zm-1.707-12.253c-1.095 0-1.98-.885-1.98-1.98s.885-1.981 1.98-1.981 1.981.885 1.981 1.981-.885 1.98-1.981 1.98zm13.306 12.253h-3.417v-5.893c0-1.402-.028-3.208-1.954-3.208-1.956 0-2.255 1.527-2.255 3.108v6.017h-3.416v-10.799h3.281v1.475h.047c.457-.865 1.574-1.777 3.242-1.777 3.467 0 4.108 2.284 4.108 5.252v5.849h-.001z"/></svg>
            </a>
          </div>
        </div>
        <div>
          <h2 className="footer-title">Founders</h2>
          <p>
            Founded by{' '}
            <a href="https://www.linkedin.com/in/obidur-rahman-shawal/" className="link link-hover">Obidur Rahman</a>,{' '}
            <a href="https://www.linkedin.com/in/mehreen-mallick-fiona/" className="link link-hover">Mehreen Mallick Fiona</a>,{' '}
            <a href="https://www.linkedin.com/in/hasanul-banna-himel/" className="link link-hover">Hasanul Banna Himel</a>, and{' '}
            <a href="https://www.linkedin.com/in/zaynul-abedin-miah/" className="link link-hover">Zaynul Abedin Miah</a>.
          </p>
        </div>
      </div>
      <div className="mt-8 text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} HelpBot. All rights reserved.</p>
      </div>
    </footer>
  );
}
