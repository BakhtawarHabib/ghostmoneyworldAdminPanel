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
              Last updated: January 9, 2026
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <p className="text-muted-foreground">
                Ghost Money World ("we", "our", "us") respects your privacy. This Privacy Policy explains how information is handled when you use the Ghost Money World mobile application.
              </p>
            </div>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Information We Collect</h2>
              <p className="text-muted-foreground">
                Ghost Money World does not require user registration, login, or account creation to access content.
              </p>
              <p className="text-muted-foreground">
                We do not collect personal information such as names, email addresses, phone numbers, passwords, or profile data.
              </p>
              <p className="text-muted-foreground">
                The app may collect limited non-personal and anonymous information to ensure functionality and improve performance, including:
              </p>

              <div className="space-y-3">
                <div>
                  <h3 className="text-xl font-semibold mb-2">1. Device & Technical Information</h3>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                    <li>Device type and operating system</li>
                    <li>App version</li>
                    <li>General technical diagnostics</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">2. Usage & Performance Data</h3>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                    <li>Screens viewed and features used</li>
                    <li>Anonymous interaction data (such as content viewed)</li>
                    <li>Crash reports and error logs</li>
                  </ul>
                </div>
              </div>

              <p className="text-muted-foreground">
                This data is collected in an aggregated and anonymized form and cannot be used to identify individual users.
              </p>

              <div className="rounded-lg bg-muted p-4 mt-4">
                <p className="font-semibold mb-2">We do not collect:</p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                  <li>Financial information</li>
                  <li>Sensitive personal data</li>
                  <li>Precise location data</li>
                </ul>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">How We Use Information</h2>
              <p className="text-muted-foreground">
                The limited information collected is used solely to:
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                <li>Improve app performance and stability</li>
                <li>Fix bugs and crashes</li>
                <li>Monitor overall app usage trends</li>
                <li>Ensure a smooth streaming experience</li>
              </ul>
              <p className="text-muted-foreground">
                We do not sell, rent, or trade any data to third parties.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Third-Party Services</h2>
              <p className="text-muted-foreground">
                The app may use trusted third-party services (such as analytics, video streaming, or cloud infrastructure providers) to support app functionality.
              </p>
              <p className="text-muted-foreground">
                These services may process limited technical data in accordance with their own privacy policies and applicable laws.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Data Security</h2>
              <p className="text-muted-foreground">
                We apply reasonable technical and organizational measures to protect collected information. However, no digital transmission or storage system can be guaranteed to be 100% secure.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Children's Privacy</h2>
              <p className="text-muted-foreground">
                Ghost Money World is not intended for children under the age of 13. We do not knowingly collect personal information from children.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Account Registration & Deletion</h2>
              <p className="text-muted-foreground">
                Ghost Money World does not offer user accounts, profiles, or login features.
              </p>
              <p className="text-muted-foreground">
                As no personal accounts are created, account deletion is not applicable.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Changes to This Policy</h2>
              <p className="text-muted-foreground">
                We may update this Privacy Policy from time to time. Any changes will be posted within the app or through official communication channels.
              </p>
            </section>

            <div className="pt-4 border-t">
              <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
              <p className="text-muted-foreground">
                If you have questions or concerns about this Privacy Policy, please contact us through the app's support or official channels.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}




