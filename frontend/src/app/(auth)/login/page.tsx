"use client"

import Button from "@/utility/bcomponents/Button";
import Input from "@/utility/bcomponents/Input";
import { ChangeEvent, MouseEvent, useEffect, useState } from "react";
import { loginObjectType } from "./pageTypes";

const inputStyle = "rounded-sm bg-background inline-block h-10 px-4 focus:ring-2 focus:ring-blue-500 focus:outline-none"


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

    useEffect(() => {
        document.documentElement.classList.add("teal")
    },[])
    return (
        <section className="flex flex-col mx-80 my-10">
            <h1 className="text-amber-50">Ticketing System</h1>
            <section
                className={`flex flex-col gap-2 my-24 items-center justify-center rounded-lg bg-foreground text-amber-50 h-64`}
                >
                <h2 className="text-2xl font-bold text-text">Login</h2>
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
            </section>
        </section>
    )
}