import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata = {
  title: "Privacy Policy - Ghost Money World",
  description: "Privacy Policy for Ghost Money World mobile application",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="flex min-h-svh w-full items-start justify-center p-6 md:p-10">
      <div className="w-full max-w-4xl">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl">Privacy Policy</CardTitle>
            <p className="text-muted-foreground mt-2">
              Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <p className="text-muted-foreground">
                Ghost Money World ("we", "our", "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard the information you provide while using our mobile application.
              </p>
            </div>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Information We Collect</h2>
              <p className="text-muted-foreground">
                We may collect the following types of information:
              </p>

              <div className="space-y-3">
                <div>
                  <h3 className="text-xl font-semibold mb-2">1. Personal Information</h3>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                    <li>Name, email, or profile details (only if provided voluntarily)</li>
                    <li>Account information related to login or authentication</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">2. Device Information</h3>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                    <li>Device model, operating system, and general device identifiers</li>
                    <li>App usage data, interactions, and performance logs</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">3. Media Interaction</h3>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                    <li>Content you browse, watch, like, or search within the app</li>
                    <li>Crash reports and error logs to improve app stability</li>
                  </ul>
                </div>
              </div>

              <p className="text-muted-foreground">
                We do not collect financial information, sensitive personal data, or precise location data unless explicitly granted by the user.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">How We Use Your Information</h2>
              <p className="text-muted-foreground">
                We use collected information to:
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                <li>Improve app performance and user experience</li>
                <li>Personalize content recommendations</li>
                <li>Maintain app security and prevent misuse</li>
                <li>Identify and fix technical issues or crashes</li>
                <li>Provide customer support</li>
              </ul>
              <p className="text-muted-foreground">
                We do not sell, rent, or share your personal information with third-party marketers.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Third-Party Services</h2>
              <p className="text-muted-foreground">
                Ghost Money World may use trusted third-party services such as:
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                <li>Analytics tools</li>
                <li>Media or video playback services</li>
                <li>Cloud infrastructure providers</li>
              </ul>
              <p className="text-muted-foreground">
                These services may collect limited technical information in accordance with their own privacy policies.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Data Security</h2>
              <p className="text-muted-foreground">
                We implement reasonable security measures to protect your information. However, no method of electronic storage or data transmission over the internet is completely secure.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Children's Privacy</h2>
              <p className="text-muted-foreground">
                Ghost Money World is not intended for children under the age of 13. We do not knowingly collect personal information from children.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Changes to This Policy</h2>
              <p className="text-muted-foreground">
                We may update this Privacy Policy from time to time. Any changes will be made available within the app or through official communication channels.
              </p>
            </section>

            <div className="pt-4 border-t">
              <p className="text-sm text-muted-foreground">
                If you have any questions about this Privacy Policy, please contact us through the app's support channels.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

