import Link from "next/link";
import { signinWithGoogle } from "@/actions/signInWithGoogle";

import { Button } from "@/components/ui/button";
import { Field, FieldSet } from "@/components/ui/field";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";

import { KeyRound, Mail } from "lucide-react";
import { getCurrentUser } from "@/lib/getCurrentUser";
import { redirect, RedirectType } from "next/navigation";

export default async function page() {
  const user = await getCurrentUser();
  if (user) redirect("/", RedirectType.replace);

  return (
    <>
      <div className="text-center">
        <h1 className="text-4xl">Inka</h1>
        <h2 className="text-secondary">A modern taking-note app.</h2>
      </div>
      <div className="flex flex-col">
        <form className="flex flex-col">
          <Card>
            <CardHeader>
              <CardTitle className="text-center text-lg">Login into your account</CardTitle>
            </CardHeader>
            <CardContent>
              <FieldSet className="gap-4">
                <Field>
                  <InputGroup>
                    <InputGroupInput placeholder="Your email" type="email" />
                    <InputGroupAddon>
                      <Mail />
                    </InputGroupAddon>
                  </InputGroup>
                </Field>
                <Field>
                  <InputGroup>
                    <InputGroupInput placeholder="Your password" type="password" />
                    <InputGroupAddon>
                      <KeyRound />
                    </InputGroupAddon>
                  </InputGroup>
                </Field>
              </FieldSet>
              <FieldSet className="mt-6">
                <Field>
                  <Button asChild>
                    <Link href="/">Login</Link>
                  </Button>
                </Field>
              </FieldSet>
            </CardContent>
          </Card>
          <span className="text-center mx-auto mt-2">
            You don&apos;t have an account?{" "}
            <Link href="/signup" className="underline">
              Sign Up
            </Link>
          </span>
        </form>
        <form className="mx-auto mt-4" action={signinWithGoogle}>
          <Button type="submit">Login with Google</Button>
        </form>
      </div>
    </>
  );
}
