import { Button, FieldError, Input, Label, TextField } from "@heroui/react";
import Link from "next/link";

export default function LoginPage() {
        return (
            <div className="bg-yellow-500 justify-center items-center mx-4 my-4 p-4 rounded-lg shadow-md">
            <p className="text-2xl font-bold text-center mb-4 my-4 mx-4">Inicia sesión</p>
            <div className= "flex flex-col gap-4 mb-4">
                <TextField name = "email" type="email" isRequired>
                    <Label>Correo electrónico</Label>
                    <Input placeholder="email@example.com" type="email" required={true} />
                    <FieldError />
                </TextField>
                <TextField name = "password" type="password" isRequired>
                    <Label>Contraseña</Label>
                    <Input placeholder="********" type="password" required={true} />
                    <FieldError />
                </TextField>
            </div>
                <div className="flex flex-col gap-4 items-center">
                    <Button variant="primary">Iniciar sesión</Button>
                    <p>
                        ¿No tienes una cuenta?<Link href="/signup" className="text-blue-500 hover:underline"> Registrate </Link>
                    </p>
                </div>
            </div>
        )
}