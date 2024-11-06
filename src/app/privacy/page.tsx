export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-3">Advertising</h2>
          <p className="mb-4">
            This website displays advertisements provided by Google AdSense.
            Google AdSense uses cookies and other web technologies to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Show you personalized ads</li>
            <li>Measure ad performance</li>
            <li>Prevent showing you the same ad too many times</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Cookie Usage</h2>
          <p>
            We use cookies to improve your experience and serve personalized
            advertisements. Third-party vendors, including Google, use cookies
            to serve ads based on your prior visits to our website or other
            websites.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Your Choices</h2>
          <p>You can opt-out of personalized advertising by visiting:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <a
                href="https://www.google.com/settings/ads"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Ads Settings
              </a>
            </li>
            <li>
              <a
                href="http://www.aboutads.info/choices/"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Digital Advertising Alliance
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
