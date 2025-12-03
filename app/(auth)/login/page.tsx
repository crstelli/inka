import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldSet } from "@/components/ui/field";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";
import { KeyRound, Mail } from "lucide-react";

export default function page() {
  return (
    <>
      <div className="text-center">
        <h1 className="text-4xl">Inka</h1>
        <h2 className="text-secondary">A modern taking-note app.</h2>
      </div>
      <form>
        <Card>
          <CardHeader>
            <CardTitle className="text-center text-lg">Login into your account</CardTitle>
          </CardHeader>
          <CardContent>
            <FieldSet>
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
                <Button type="submit">Login</Button>
              </Field>
            </FieldSet>
          </CardContent>
        </Card>
      </form>
    </>
  );
}
