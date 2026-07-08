"use client"

import Button from "@/utility/bcomponents/Button";
import Input from "@/utility/bcomponents/Input";
import { ChangeEvent, MouseEvent, useState } from "react";
import { loginObjectType } from "./pageTypes";

const inputStyle = "rounded-sm bg-indigo-500/60 inline-block h-10 px-4"


export default function Login() {
    const [loginObject, setLoginObject] = useState<loginObjectType>({ username: "", password: "" })

    const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => { // e.currentTarget.value
        const value: string = e.currentTarget.value
        const name: string = e.currentTarget.name
        setLoginObject((prev: loginObjectType) => {
            return { ...prev, [name]: value }
        })
    }

    const onClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
    }

    const commonInputProps = {
        onChange: inputChangeHandler,
        type: "text",
        styleString: inputStyle
    }
    return (
        <section className="flex flex-col mx-80">
            <h1>Ticketing System</h1>
            <div
                className="flex flex-col border gap-2 my-40 items-center justify-center"
                >
                <h2>Login</h2>
                <Input
                    name="username"
                    placeholder="Username"
                    {...commonInputProps}
                />
                <Input
                    name="password"
                    placeholder="Password"
                    {...commonInputProps}
                    type="password"
                />
                <Button
                    text="Login"
                    onClick={onClickHandler}
                />
            </div>
        </section>
    )
}