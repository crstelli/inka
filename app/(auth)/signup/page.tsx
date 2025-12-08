import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldSet } from "@/components/ui/field";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";
import { KeyRound, Mail } from "lucide-react";
import Link from "next/link";

export default function page() {
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
                <Button type="submit">
                  <Link href="/login">Sign Up</Link>
                </Button>
              </Field>
            </FieldSet>
          </CardContent>
        </Card>
        <span className="text-center mx-auto mt-2">
          You have an account?{" "}
          <Link href="/login" className="underline">
            Login
          </Link>
        </span>
      </form>
    </>
  );
}
