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
                Ghost Money World ("we", "our", "us") values user privacy. This Privacy Policy explains how information is handled when using the Ghost Money World mobile application.
              </p>
            </div>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Information We Collect</h2>
              <p className="text-muted-foreground">
                Ghost Money World is a simple video viewing app and:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Does not require login, signup, or account creation</li>
                <li>Does not collect personal information</li>
                <li>Does not collect usage data</li>
                <li>Does not collect device data</li>
                <li>Does not collect location data</li>
                <li>Does not collect analytics or tracking data</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                No user-identifiable or anonymous data is collected, stored, or processed.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Third-Party Services</h2>
              <p className="text-muted-foreground">
                Ghost Money World does not use any third-party analytics, advertising, tracking tools, or data-processing services.
              </p>
              <p className="text-muted-foreground">
                No user data is shared with any external parties.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Data Security</h2>
              <p className="text-muted-foreground">
                As no personal or usage data is collected, stored, or processed, there is no user data retained within the app.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Children's Privacy</h2>
              <p className="text-muted-foreground">
                Ghost Money World is not intended for children under the age of 13.
              </p>
              <p className="text-muted-foreground">
                We do not knowingly collect any information from children.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Changes to This Policy</h2>
              <p className="text-muted-foreground">
                Any updates to this Privacy Policy will be made available within the app.
              </p>
            </section>

            <div className="pt-4 border-t">
              <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
              <p className="text-muted-foreground">
                If you have questions about this Privacy Policy, please contact us through official Ghost Money World communication channels.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}




