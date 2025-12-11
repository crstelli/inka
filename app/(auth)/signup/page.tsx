import { redirect, RedirectType } from "next/navigation";
import Link from "next/link";

import { getCurrentUser } from "@/lib/prisma/getCurrentUser";

import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Field, FieldSet } from "@/components/ui/field";

import { KeyRound, Mail } from "lucide-react";

export default async function page() {
  const user = await getCurrentUser();
  if (user) redirect("/", RedirectType.replace);

  return (
    <>
      <div className="text-center">
        <h1 className="text-4xl">Inka</h1>
        <h2 className="text-secondary">A modern taking-note app.</h2>
      </div>
      <form className="flex flex-col">
        <Card>
          <CardHeader>
            <CardTitle className="text-center text-lg">Create a new Account</CardTitle>
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
              <Field>
                <InputGroup>
                  <InputGroupInput placeholder="Confirm password" type="password" />
                  <InputGroupAddon>
                    <KeyRound />
                  </InputGroupAddon>
                </InputGroup>
              </Field>
            </FieldSet>
            <FieldSet className="mt-6">
              <Field>
                <Button type="submit" disabled>
                  <Link href="/login">Sign Up</Link>
                </Button>
              </Field>
            </FieldSet>
          </CardContent>
        </Card>
        <span className="text-center mx-auto mt-4">
          You have an account?{" "}
          <Link href="/login" className="underline">
            Login
          </Link>
        </span>
      </form>
    </>
  );
}
